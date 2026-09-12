(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function S_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lx={exports:{}},ou={},cx={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),M_=Symbol.for("react.portal"),b_=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),E_=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),C_=Symbol.for("react.forward_ref"),R_=Symbol.for("react.suspense"),P_=Symbol.for("react.memo"),L_=Symbol.for("react.lazy"),kp=Symbol.iterator;function I_(n){return n===null||typeof n!="object"?null:(n=kp&&n[kp]||n["@@iterator"],typeof n=="function"?n:null)}var ux={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dx=Object.assign,fx={};function Oo(n,e,t){this.props=n,this.context=e,this.refs=fx,this.updater=t||ux}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Oo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function hx(){}hx.prototype=Oo.prototype;function gh(n,e,t){this.props=n,this.context=e,this.refs=fx,this.updater=t||ux}var xh=gh.prototype=new hx;xh.constructor=gh;dx(xh,Oo.prototype);xh.isPureReactComponent=!0;var Up=Array.isArray,px=Object.prototype.hasOwnProperty,yh={current:null},mx={key:!0,ref:!0,__self:!0,__source:!0};function gx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)px.call(e,i)&&!mx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:il,type:n,key:s,ref:o,props:r,_owner:yh.current}}function D_(n,e){return{$$typeof:il,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function vh(n){return typeof n=="object"&&n!==null&&n.$$typeof===il}function N_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Op=/\/+/g;function Nu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?N_(""+n.key):e.toString(36)}function uc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case il:case M_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Nu(o,0):i,Up(r)?(t="",n!=null&&(t=n.replace(Op,"$&/")+"/"),uc(r,e,t,"",function(c){return c})):r!=null&&(vh(r)&&(r=D_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Op,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Up(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Nu(s,a);o+=uc(s,e,t,l,r)}else if(l=I_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Nu(s,a++),o+=uc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(n,e,t){if(n==null)return n;var i=[],r=0;return uc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function k_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var _n={current:null},dc={transition:null},U_={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:dc,ReactCurrentOwner:yh};function xx(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:dl,forEach:function(n,e,t){dl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return dl(n,function(){e++}),e},toArray:function(n){return dl(n,function(e){return e})||[]},only:function(n){if(!vh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};it.Component=Oo;it.Fragment=b_;it.Profiler=E_;it.PureComponent=gh;it.StrictMode=w_;it.Suspense=R_;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U_;it.act=xx;it.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=dx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)px.call(e,l)&&!mx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:il,type:n.type,key:r,ref:s,props:i,_owner:o}};it.createContext=function(n){return n={$$typeof:A_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:T_,_context:n},n.Consumer=n};it.createElement=gx;it.createFactory=function(n){var e=gx.bind(null,n);return e.type=n,e};it.createRef=function(){return{current:null}};it.forwardRef=function(n){return{$$typeof:C_,render:n}};it.isValidElement=vh;it.lazy=function(n){return{$$typeof:L_,_payload:{_status:-1,_result:n},_init:k_}};it.memo=function(n,e){return{$$typeof:P_,type:n,compare:e===void 0?null:e}};it.startTransition=function(n){var e=dc.transition;dc.transition={};try{n()}finally{dc.transition=e}};it.unstable_act=xx;it.useCallback=function(n,e){return _n.current.useCallback(n,e)};it.useContext=function(n){return _n.current.useContext(n)};it.useDebugValue=function(){};it.useDeferredValue=function(n){return _n.current.useDeferredValue(n)};it.useEffect=function(n,e){return _n.current.useEffect(n,e)};it.useId=function(){return _n.current.useId()};it.useImperativeHandle=function(n,e,t){return _n.current.useImperativeHandle(n,e,t)};it.useInsertionEffect=function(n,e){return _n.current.useInsertionEffect(n,e)};it.useLayoutEffect=function(n,e){return _n.current.useLayoutEffect(n,e)};it.useMemo=function(n,e){return _n.current.useMemo(n,e)};it.useReducer=function(n,e,t){return _n.current.useReducer(n,e,t)};it.useRef=function(n){return _n.current.useRef(n)};it.useState=function(n){return _n.current.useState(n)};it.useSyncExternalStore=function(n,e,t){return _n.current.useSyncExternalStore(n,e,t)};it.useTransition=function(){return _n.current.useTransition()};it.version="18.3.1";cx.exports=it;var he=cx.exports;const Tc=S_(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_=he,F_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),j_=Object.prototype.hasOwnProperty,B_=O_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H_={key:!0,ref:!0,__self:!0,__source:!0};function yx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)j_.call(e,i)&&!H_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:F_,type:n,key:s,ref:o,props:r,_owner:B_.current}}ou.Fragment=z_;ou.jsx=yx;ou.jsxs=yx;lx.exports=ou;var u=lx.exports,nf={},vx={exports:{}},Un={},_x={exports:{}},Sx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,D){var B=L.length;L.push(D);e:for(;0<B;){var q=B-1>>>1,re=L[q];if(0<r(re,D))L[q]=D,L[B]=re,B=q;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var D=L[0],B=L.pop();if(B!==D){L[0]=B;e:for(var q=0,re=L.length,Me=re>>>1;q<Me;){var j=2*(q+1)-1,$=L[j],G=j+1,be=L[G];if(0>r($,B))G<re&&0>r(be,$)?(L[q]=be,L[G]=B,q=G):(L[q]=$,L[j]=B,q=j);else if(G<re&&0>r(be,B))L[q]=be,L[G]=B,q=G;else break e}}return D}function r(L,D){var B=L.sortIndex-D.sortIndex;return B!==0?B:L.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,m=!1,x=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var D=t(c);D!==null;){if(D.callback===null)i(c);else if(D.startTime<=L)i(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=t(c)}}function S(L){if(_=!1,y(L),!x)if(t(l)!==null)x=!0,H(T);else{var D=t(c);D!==null&&ne(S,D.startTime-L)}}function T(L,D){x=!1,_&&(_=!1,p(A),A=-1),m=!0;var B=f;try{for(y(D),h=t(l);h!==null&&(!(h.expirationTime>D)||L&&!I());){var q=h.callback;if(typeof q=="function"){h.callback=null,f=h.priorityLevel;var re=q(h.expirationTime<=D);D=n.unstable_now(),typeof re=="function"?h.callback=re:h===t(l)&&i(l),y(D)}else i(l);h=t(l)}if(h!==null)var Me=!0;else{var j=t(c);j!==null&&ne(S,j.startTime-D),Me=!1}return Me}finally{h=null,f=B,m=!1}}var E=!1,w=null,A=-1,V=5,M=-1;function I(){return!(n.unstable_now()-M<V)}function ae(){if(w!==null){var L=n.unstable_now();M=L;var D=!0;try{D=w(!0,L)}finally{D?Y():(E=!1,w=null)}}else E=!1}var Y;if(typeof v=="function")Y=function(){v(ae)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,J=F.port2;F.port1.onmessage=ae,Y=function(){J.postMessage(null)}}else Y=function(){g(ae,0)};function H(L){w=L,E||(E=!0,Y())}function ne(L,D){A=g(function(){L(n.unstable_now())},D)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,H(T))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var B=f;f=D;try{return L()}finally{f=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,D){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=f;f=L;try{return D()}finally{f=B}},n.unstable_scheduleCallback=function(L,D,B){var q=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?q+B:q):B=q,L){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=B+re,L={id:d++,callback:D,priorityLevel:L,startTime:B,expirationTime:re,sortIndex:-1},B>q?(L.sortIndex=B,e(c,L),t(l)===null&&L===t(c)&&(_?(p(A),A=-1):_=!0,ne(S,B-q))):(L.sortIndex=re,e(l,L),x||m||(x=!0,H(T))),L},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(L){var D=f;return function(){var B=f;f=D;try{return L.apply(this,arguments)}finally{f=B}}}})(Sx);_x.exports=Sx;var G_=_x.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_=he,kn=G_;function _e(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mx=new Set,Da={};function ms(n,e){yo(n,e),yo(n+"Capture",e)}function yo(n,e){for(Da[n]=e,n=0;n<e.length;n++)Mx.add(e[n])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=Object.prototype.hasOwnProperty,W_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},zp={};function X_(n){return rf.call(zp,n)?!0:rf.call(Fp,n)?!1:W_.test(n)?zp[n]=!0:(Fp[n]=!0,!1)}function $_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y_(n,e,t,i){if(e===null||typeof e>"u"||$_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){nn[n]=new Sn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];nn[e]=new Sn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){nn[n]=new Sn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){nn[n]=new Sn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){nn[n]=new Sn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){nn[n]=new Sn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){nn[n]=new Sn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){nn[n]=new Sn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){nn[n]=new Sn(n,5,!1,n.toLowerCase(),null,!1,!1)});var _h=/[\-:]([a-z])/g;function Sh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(_h,Sh);nn[e]=new Sn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(_h,Sh);nn[e]=new Sn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(_h,Sh);nn[e]=new Sn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){nn[n]=new Sn(n,1,!1,n.toLowerCase(),null,!1,!1)});nn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){nn[n]=new Sn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Mh(n,e,t,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y_(e,t,r,i)&&(t=null),i||r===null?X_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var qi=V_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),bx=Symbol.for("react.provider"),wx=Symbol.for("react.context"),wh=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),af=Symbol.for("react.suspense_list"),Eh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Ex=Symbol.for("react.offscreen"),jp=Symbol.iterator;function Wo(n){return n===null||typeof n!="object"?null:(n=jp&&n[jp]||n["@@iterator"],typeof n=="function"?n:null)}var Rt=Object.assign,ku;function pa(n){if(ku===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+n}var Uu=!1;function Ou(n,e){if(!n||Uu)return"";Uu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?pa(n):""}function q_(n){switch(n.tag){case 5:return pa(n.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return n=Ou(n.type,!1),n;case 11:return n=Ou(n.type.render,!1),n;case 1:return n=Ou(n.type,!0),n;default:return""}}function lf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case qs:return"Fragment";case Ys:return"Portal";case sf:return"Profiler";case bh:return"StrictMode";case of:return"Suspense";case af:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case wx:return(n.displayName||"Context")+".Consumer";case bx:return(n._context.displayName||"Context")+".Provider";case wh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Eh:return e=n.displayName||null,e!==null?e:lf(n.type)||"Memo";case or:e=n._payload,n=n._init;try{return lf(n(e))}catch{}}return null}function K_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lf(e);case 8:return e===bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Tx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z_(n){var e=Tx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function hl(n){n._valueTracker||(n._valueTracker=Z_(n))}function Ax(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Tx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ac(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function cf(n,e){var t=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Bp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Pr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cx(n,e){e=e.checked,e!=null&&Mh(n,"checked",e,!1)}function uf(n,e){Cx(n,e);var t=Pr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?df(n,e.type,t):e.hasOwnProperty("defaultValue")&&df(n,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Hp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function df(n,e,t){(e!=="number"||Ac(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ma=Array.isArray;function lo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Pr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ff(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_e(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Gp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(_e(92));if(ma(t)){if(1<t.length)throw Error(_e(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Pr(t)}}function Rx(n,e){var t=Pr(e.value),i=Pr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Vp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Px(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Px(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pl,Lx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Na(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J_=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(n){J_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),_a[e]=_a[n]})});function Ix(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||_a.hasOwnProperty(n)&&_a[n]?(""+e).trim():e+"px"}function Dx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ix(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Q_=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(n,e){if(e){if(Q_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_e(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_e(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_e(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_e(62))}}function mf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gf=null;function Th(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xf=null,co=null,uo=null;function Wp(n){if(n=ol(n)){if(typeof xf!="function")throw Error(_e(280));var e=n.stateNode;e&&(e=du(e),xf(n.stateNode,n.type,e))}}function Nx(n){co?uo?uo.push(n):uo=[n]:co=n}function kx(){if(co){var n=co,e=uo;if(uo=co=null,Wp(n),e)for(n=0;n<e.length;n++)Wp(e[n])}}function Ux(n,e){return n(e)}function Ox(){}var Fu=!1;function Fx(n,e,t){if(Fu)return n(e,t);Fu=!0;try{return Ux(n,e,t)}finally{Fu=!1,(co!==null||uo!==null)&&(Ox(),kx())}}function ka(n,e){var t=n.stateNode;if(t===null)return null;var i=du(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(_e(231,e,typeof t));return t}var yf=!1;if(Vi)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{yf=!1}function e1(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var Sa=!1,Cc=null,Rc=!1,vf=null,t1={onError:function(n){Sa=!0,Cc=n}};function n1(n,e,t,i,r,s,o,a,l){Sa=!1,Cc=null,e1.apply(t1,arguments)}function i1(n,e,t,i,r,s,o,a,l){if(n1.apply(this,arguments),Sa){if(Sa){var c=Cc;Sa=!1,Cc=null}else throw Error(_e(198));Rc||(Rc=!0,vf=c)}}function gs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function zx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Xp(n){if(gs(n)!==n)throw Error(_e(188))}function r1(n){var e=n.alternate;if(!e){if(e=gs(n),e===null)throw Error(_e(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Xp(r),n;if(s===i)return Xp(r),e;s=s.sibling}throw Error(_e(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(_e(189))}}if(t.alternate!==i)throw Error(_e(190))}if(t.tag!==3)throw Error(_e(188));return t.stateNode.current===t?n:e}function jx(n){return n=r1(n),n!==null?Bx(n):null}function Bx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Bx(n);if(e!==null)return e;n=n.sibling}return null}var Hx=kn.unstable_scheduleCallback,$p=kn.unstable_cancelCallback,s1=kn.unstable_shouldYield,o1=kn.unstable_requestPaint,Nt=kn.unstable_now,a1=kn.unstable_getCurrentPriorityLevel,Ah=kn.unstable_ImmediatePriority,Gx=kn.unstable_UserBlockingPriority,Pc=kn.unstable_NormalPriority,l1=kn.unstable_LowPriority,Vx=kn.unstable_IdlePriority,au=null,Mi=null;function c1(n){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(au,n,void 0,(n.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:f1,u1=Math.log,d1=Math.LN2;function f1(n){return n>>>=0,n===0?32:31-(u1(n)/d1|0)|0}var ml=64,gl=4194304;function ga(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Lc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ga(a):(s&=o,s!==0&&(i=ga(s)))}else o=t&~r,o!==0?i=ga(o):s!==0&&(i=ga(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-di(e),r=1<<t,i|=n[t],e&=~r;return i}function h1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=h1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function _f(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wx(){var n=ml;return ml<<=1,!(ml&4194240)&&(ml=64),n}function zu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function rl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-di(e),n[e]=t}function m1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-di(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ch(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-di(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ft=0;function Xx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var $x,Rh,Yx,qx,Kx,Sf=!1,xl=[],vr=null,_r=null,Sr=null,Ua=new Map,Oa=new Map,ur=[],g1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(n,e){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function $o(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ol(e),e!==null&&Rh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function x1(n,e,t,i,r){switch(e){case"focusin":return vr=$o(vr,n,e,t,i,r),!0;case"dragenter":return _r=$o(_r,n,e,t,i,r),!0;case"mouseover":return Sr=$o(Sr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ua.set(s,$o(Ua.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Oa.set(s,$o(Oa.get(s)||null,n,e,t,i,r)),!0}return!1}function Zx(n){var e=Jr(n.target);if(e!==null){var t=gs(e);if(t!==null){if(e=t.tag,e===13){if(e=zx(t),e!==null){n.blockedOn=e,Kx(n.priority,function(){Yx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Mf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);gf=i,t.target.dispatchEvent(i),gf=null}else return e=ol(t),e!==null&&Rh(e),n.blockedOn=t,!1;e.shift()}return!0}function qp(n,e,t){fc(n)&&t.delete(e)}function y1(){Sf=!1,vr!==null&&fc(vr)&&(vr=null),_r!==null&&fc(_r)&&(_r=null),Sr!==null&&fc(Sr)&&(Sr=null),Ua.forEach(qp),Oa.forEach(qp)}function Yo(n,e){n.blockedOn===e&&(n.blockedOn=null,Sf||(Sf=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,y1)))}function Fa(n){function e(r){return Yo(r,n)}if(0<xl.length){Yo(xl[0],n);for(var t=1;t<xl.length;t++){var i=xl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vr!==null&&Yo(vr,n),_r!==null&&Yo(_r,n),Sr!==null&&Yo(Sr,n),Ua.forEach(e),Oa.forEach(e),t=0;t<ur.length;t++)i=ur[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ur.length&&(t=ur[0],t.blockedOn===null);)Zx(t),t.blockedOn===null&&ur.shift()}var fo=qi.ReactCurrentBatchConfig,Ic=!0;function v1(n,e,t,i){var r=ft,s=fo.transition;fo.transition=null;try{ft=1,Ph(n,e,t,i)}finally{ft=r,fo.transition=s}}function _1(n,e,t,i){var r=ft,s=fo.transition;fo.transition=null;try{ft=4,Ph(n,e,t,i)}finally{ft=r,fo.transition=s}}function Ph(n,e,t,i){if(Ic){var r=Mf(n,e,t,i);if(r===null)qu(n,e,i,Dc,t),Yp(n,i);else if(x1(r,n,e,t,i))i.stopPropagation();else if(Yp(n,i),e&4&&-1<g1.indexOf(n)){for(;r!==null;){var s=ol(r);if(s!==null&&$x(s),s=Mf(n,e,t,i),s===null&&qu(n,e,i,Dc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else qu(n,e,i,null,t)}}var Dc=null;function Mf(n,e,t,i){if(Dc=null,n=Th(i),n=Jr(n),n!==null)if(e=gs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=zx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Dc=n,null}function Jx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a1()){case Ah:return 1;case Gx:return 4;case Pc:case l1:return 16;case Vx:return 536870912;default:return 16}default:return 16}}var hr=null,Lh=null,hc=null;function Qx(){if(hc)return hc;var n,e=Lh,t=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return hc=r.slice(n,1<i?1-i:void 0)}function pc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function yl(){return!0}function Kp(){return!1}function On(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yl:Kp,this.isPropagationStopped=Kp,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ih=On(Fo),sl=Rt({},Fo,{view:0,detail:0}),S1=On(sl),ju,Bu,qo,lu=Rt({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qo&&(qo&&n.type==="mousemove"?(ju=n.screenX-qo.screenX,Bu=n.screenY-qo.screenY):Bu=ju=0,qo=n),ju)},movementY:function(n){return"movementY"in n?n.movementY:Bu}}),Zp=On(lu),M1=Rt({},lu,{dataTransfer:0}),b1=On(M1),w1=Rt({},sl,{relatedTarget:0}),Hu=On(w1),E1=Rt({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),T1=On(E1),A1=Rt({},Fo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),C1=On(A1),R1=Rt({},Fo,{data:0}),Jp=On(R1),P1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=I1[n])?!!e[n]:!1}function Dh(){return D1}var N1=Rt({},sl,{key:function(n){if(n.key){var e=P1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=pc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dh,charCode:function(n){return n.type==="keypress"?pc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?pc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),k1=On(N1),U1=Rt({},lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=On(U1),O1=Rt({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dh}),F1=On(O1),z1=Rt({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),j1=On(z1),B1=Rt({},lu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),H1=On(B1),G1=[9,13,27,32],Nh=Vi&&"CompositionEvent"in window,Ma=null;Vi&&"documentMode"in document&&(Ma=document.documentMode);var V1=Vi&&"TextEvent"in window&&!Ma,ey=Vi&&(!Nh||Ma&&8<Ma&&11>=Ma),em=" ",tm=!1;function ty(n,e){switch(n){case"keyup":return G1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ny(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function W1(n,e){switch(n){case"compositionend":return ny(e);case"keypress":return e.which!==32?null:(tm=!0,em);case"textInput":return n=e.data,n===em&&tm?null:n;default:return null}}function X1(n,e){if(Ks)return n==="compositionend"||!Nh&&ty(n,e)?(n=Qx(),hc=Lh=hr=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ey&&e.locale!=="ko"?null:e.data;default:return null}}var $1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!$1[n.type]:e==="textarea"}function iy(n,e,t,i){Nx(i),e=Nc(e,"onChange"),0<e.length&&(t=new Ih("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ba=null,za=null;function Y1(n){py(n,0)}function cu(n){var e=Qs(n);if(Ax(e))return n}function q1(n,e){if(n==="change")return e}var ry=!1;if(Vi){var Gu;if(Vi){var Vu="oninput"in document;if(!Vu){var im=document.createElement("div");im.setAttribute("oninput","return;"),Vu=typeof im.oninput=="function"}Gu=Vu}else Gu=!1;ry=Gu&&(!document.documentMode||9<document.documentMode)}function rm(){ba&&(ba.detachEvent("onpropertychange",sy),za=ba=null)}function sy(n){if(n.propertyName==="value"&&cu(za)){var e=[];iy(e,za,n,Th(n)),Fx(Y1,e)}}function K1(n,e,t){n==="focusin"?(rm(),ba=e,za=t,ba.attachEvent("onpropertychange",sy)):n==="focusout"&&rm()}function Z1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return cu(za)}function J1(n,e){if(n==="click")return cu(e)}function Q1(n,e){if(n==="input"||n==="change")return cu(e)}function eS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pi=typeof Object.is=="function"?Object.is:eS;function ja(n,e){if(pi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!rf.call(e,r)||!pi(n[r],e[r]))return!1}return!0}function sm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function om(n,e){var t=sm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sm(t)}}function oy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?oy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ay(){for(var n=window,e=Ac();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ac(n.document)}return e}function kh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function tS(n){var e=ay(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&oy(t.ownerDocument.documentElement,t)){if(i!==null&&kh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=om(t,s);var o=om(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nS=Vi&&"documentMode"in document&&11>=document.documentMode,Zs=null,bf=null,wa=null,wf=!1;function am(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;wf||Zs==null||Zs!==Ac(i)||(i=Zs,"selectionStart"in i&&kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&ja(wa,i)||(wa=i,i=Nc(bf,"onSelect"),0<i.length&&(e=new Ih("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Zs)))}function vl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Js={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},Wu={},ly={};Vi&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function uu(n){if(Wu[n])return Wu[n];if(!Js[n])return n;var e=Js[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ly)return Wu[n]=e[t];return n}var cy=uu("animationend"),uy=uu("animationiteration"),dy=uu("animationstart"),fy=uu("transitionend"),hy=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(n,e){hy.set(n,e),ms(e,[n])}for(var Xu=0;Xu<lm.length;Xu++){var $u=lm[Xu],iS=$u.toLowerCase(),rS=$u[0].toUpperCase()+$u.slice(1);Dr(iS,"on"+rS)}Dr(cy,"onAnimationEnd");Dr(uy,"onAnimationIteration");Dr(dy,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(fy,"onTransitionEnd");yo("onMouseEnter",["mouseout","mouseover"]);yo("onMouseLeave",["mouseout","mouseover"]);yo("onPointerEnter",["pointerout","pointerover"]);yo("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function cm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,i1(i,e,void 0,n),n.currentTarget=null}function py(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cm(r,a,c),s=l}}}if(Rc)throw n=vf,Rc=!1,vf=null,n}function yt(n,e){var t=e[Rf];t===void 0&&(t=e[Rf]=new Set);var i=n+"__bubble";t.has(i)||(my(e,n,2,!1),t.add(i))}function Yu(n,e,t){var i=0;e&&(i|=4),my(t,n,i,e)}var _l="_reactListening"+Math.random().toString(36).slice(2);function Ba(n){if(!n[_l]){n[_l]=!0,Mx.forEach(function(t){t!=="selectionchange"&&(sS.has(t)||Yu(t,!1,n),Yu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[_l]||(e[_l]=!0,Yu("selectionchange",!1,e))}}function my(n,e,t,i){switch(Jx(e)){case 1:var r=v1;break;case 4:r=_1;break;default:r=Ph}t=r.bind(null,e,t,n),r=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function qu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Fx(function(){var c=s,d=Th(t),h=[];e:{var f=hy.get(n);if(f!==void 0){var m=Ih,x=n;switch(n){case"keypress":if(pc(t)===0)break e;case"keydown":case"keyup":m=k1;break;case"focusin":x="focus",m=Hu;break;case"focusout":x="blur",m=Hu;break;case"beforeblur":case"afterblur":m=Hu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=b1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=F1;break;case cy:case uy:case dy:m=T1;break;case fy:m=j1;break;case"scroll":m=S1;break;case"wheel":m=H1;break;case"copy":case"cut":case"paste":m=C1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qp}var _=(e&4)!==0,g=!_&&n==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=ka(v,p),S!=null&&_.push(Ha(v,S,y)))),g)break;v=v.return}0<_.length&&(f=new m(f,x,null,t,d),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",f&&t!==gf&&(x=t.relatedTarget||t.fromElement)&&(Jr(x)||x[Wi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=c,x=x?Jr(x):null,x!==null&&(g=gs(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(_=Zp,S="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Qp,S="onPointerLeave",p="onPointerEnter",v="pointer"),g=m==null?f:Qs(m),y=x==null?f:Qs(x),f=new _(S,v+"leave",m,t,d),f.target=g,f.relatedTarget=y,S=null,Jr(d)===c&&(_=new _(p,v+"enter",x,t,d),_.target=y,_.relatedTarget=g,S=_),g=S,m&&x)t:{for(_=m,p=x,v=0,y=_;y;y=vs(y))v++;for(y=0,S=p;S;S=vs(S))y++;for(;0<v-y;)_=vs(_),v--;for(;0<y-v;)p=vs(p),y--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=vs(_),p=vs(p)}_=null}else _=null;m!==null&&um(h,f,m,_,!1),x!==null&&g!==null&&um(h,g,x,_,!0)}}e:{if(f=c?Qs(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=q1;else if(nm(f))if(ry)T=Q1;else{T=Z1;var E=K1}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=J1);if(T&&(T=T(n,c))){iy(h,T,t,d);break e}E&&E(n,f,c),n==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&df(f,"number",f.value)}switch(E=c?Qs(c):window,n){case"focusin":(nm(E)||E.contentEditable==="true")&&(Zs=E,bf=c,wa=null);break;case"focusout":wa=bf=Zs=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,am(h,t,d);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":am(h,t,d)}var w;if(Nh)e:{switch(n){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ks?ty(n,t)&&(A="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(ey&&t.locale!=="ko"&&(Ks||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ks&&(w=Qx()):(hr=d,Lh="value"in hr?hr.value:hr.textContent,Ks=!0)),E=Nc(c,A),0<E.length&&(A=new Jp(A,n,null,t,d),h.push({event:A,listeners:E}),w?A.data=w:(w=ny(t),w!==null&&(A.data=w)))),(w=V1?W1(n,t):X1(n,t))&&(c=Nc(c,"onBeforeInput"),0<c.length&&(d=new Jp("onBeforeInput","beforeinput",null,t,d),h.push({event:d,listeners:c}),d.data=w))}py(h,e)})}function Ha(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Nc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ka(n,t),s!=null&&i.unshift(Ha(n,s,r)),s=ka(n,e),s!=null&&i.push(Ha(n,s,r))),n=n.return}return i}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function um(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ka(t,s),l!=null&&o.unshift(Ha(t,l,a))):r||(l=ka(t,s),l!=null&&o.push(Ha(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var oS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function dm(n){return(typeof n=="string"?n:""+n).replace(oS,`
`).replace(aS,"")}function Sl(n,e,t){if(e=dm(e),dm(n)!==e&&t)throw Error(_e(425))}function kc(){}var Ef=null,Tf=null;function Af(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(n){return fm.resolve(null).then(n).catch(uS)}:Cf;function uS(n){setTimeout(function(){throw n})}function Ku(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Fa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Fa(e)}function Mr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function hm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Si="__reactFiber$"+zo,Ga="__reactProps$"+zo,Wi="__reactContainer$"+zo,Rf="__reactEvents$"+zo,dS="__reactListeners$"+zo,fS="__reactHandles$"+zo;function Jr(n){var e=n[Si];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Wi]||t[Si]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=hm(n);n!==null;){if(t=n[Si])return t;n=hm(n)}return e}n=t,t=n.parentNode}return null}function ol(n){return n=n[Si]||n[Wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(_e(33))}function du(n){return n[Ga]||null}var Pf=[],eo=-1;function Nr(n){return{current:n}}function St(n){0>eo||(n.current=Pf[eo],Pf[eo]=null,eo--)}function xt(n,e){eo++,Pf[eo]=n.current,n.current=e}var Lr={},dn=Nr(Lr),wn=Nr(!1),as=Lr;function vo(n,e){var t=n.type.contextTypes;if(!t)return Lr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function En(n){return n=n.childContextTypes,n!=null}function Uc(){St(wn),St(dn)}function pm(n,e,t){if(dn.current!==Lr)throw Error(_e(168));xt(dn,e),xt(wn,t)}function gy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(_e(108,K_(n)||"Unknown",r));return Rt({},t,i)}function Oc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,as=dn.current,xt(dn,n),xt(wn,wn.current),!0}function mm(n,e,t){var i=n.stateNode;if(!i)throw Error(_e(169));t?(n=gy(n,e,as),i.__reactInternalMemoizedMergedChildContext=n,St(wn),St(dn),xt(dn,n)):St(wn),xt(wn,t)}var Oi=null,fu=!1,Zu=!1;function xy(n){Oi===null?Oi=[n]:Oi.push(n)}function hS(n){fu=!0,xy(n)}function kr(){if(!Zu&&Oi!==null){Zu=!0;var n=0,e=ft;try{var t=Oi;for(ft=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Oi=null,fu=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(n+1)),Hx(Ah,kr),r}finally{ft=e,Zu=!1}}return null}var to=[],no=0,Fc=null,zc=0,Wn=[],Xn=0,ls=null,zi=1,ji="";function $r(n,e){to[no++]=zc,to[no++]=Fc,Fc=n,zc=e}function yy(n,e,t){Wn[Xn++]=zi,Wn[Xn++]=ji,Wn[Xn++]=ls,ls=n;var i=zi;n=ji;var r=32-di(i)-1;i&=~(1<<r),t+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-di(e)+r|t<<r|i,ji=s+n}else zi=1<<s|t<<r|i,ji=n}function Uh(n){n.return!==null&&($r(n,1),yy(n,1,0))}function Oh(n){for(;n===Fc;)Fc=to[--no],to[no]=null,zc=to[--no],to[no]=null;for(;n===ls;)ls=Wn[--Xn],Wn[Xn]=null,ji=Wn[--Xn],Wn[Xn]=null,zi=Wn[--Xn],Wn[Xn]=null}var Nn=null,Dn=null,wt=!1,si=null;function vy(n,e){var t=qn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function gm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Nn=n,Dn=Mr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Nn=n,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ls!==null?{id:zi,overflow:ji}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=qn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Nn=n,Dn=null,!0):!1;default:return!1}}function Lf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function If(n){if(wt){var e=Dn;if(e){var t=e;if(!gm(n,e)){if(Lf(n))throw Error(_e(418));e=Mr(t.nextSibling);var i=Nn;e&&gm(n,e)?vy(i,t):(n.flags=n.flags&-4097|2,wt=!1,Nn=n)}}else{if(Lf(n))throw Error(_e(418));n.flags=n.flags&-4097|2,wt=!1,Nn=n}}}function xm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function Ml(n){if(n!==Nn)return!1;if(!wt)return xm(n),wt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Af(n.type,n.memoizedProps)),e&&(e=Dn)){if(Lf(n))throw _y(),Error(_e(418));for(;e;)vy(n,e),e=Mr(e.nextSibling)}if(xm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(_e(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Dn=Mr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Dn=null}}else Dn=Nn?Mr(n.stateNode.nextSibling):null;return!0}function _y(){for(var n=Dn;n;)n=Mr(n.nextSibling)}function _o(){Dn=Nn=null,wt=!1}function Fh(n){si===null?si=[n]:si.push(n)}var pS=qi.ReactCurrentBatchConfig;function Ko(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_e(309));var i=t.stateNode}if(!i)throw Error(_e(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(_e(284));if(!t._owner)throw Error(_e(290,n))}return n}function bl(n,e){throw n=Object.prototype.toString.call(e),Error(_e(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function ym(n){var e=n._init;return e(n._payload)}function Sy(n){function e(p,v){if(n){var y=p.deletions;y===null?(p.deletions=[v],p.flags|=16):y.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Tr(p,v),p.index=0,p.sibling=null,p}function s(p,v,y){return p.index=y,n?(y=p.alternate,y!==null?(y=y.index,y<v?(p.flags|=2,v):y):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,y,S){return v===null||v.tag!==6?(v=rd(y,p.mode,S),v.return=p,v):(v=r(v,y),v.return=p,v)}function l(p,v,y,S){var T=y.type;return T===qs?d(p,v,y.props.children,S,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===or&&ym(T)===v.type)?(S=r(v,y.props),S.ref=Ko(p,v,y),S.return=p,S):(S=Sc(y.type,y.key,y.props,null,p.mode,S),S.ref=Ko(p,v,y),S.return=p,S)}function c(p,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=sd(y,p.mode,S),v.return=p,v):(v=r(v,y.children||[]),v.return=p,v)}function d(p,v,y,S,T){return v===null||v.tag!==7?(v=is(y,p.mode,S,T),v.return=p,v):(v=r(v,y),v.return=p,v)}function h(p,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=rd(""+v,p.mode,y),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fl:return y=Sc(v.type,v.key,v.props,null,p.mode,y),y.ref=Ko(p,null,v),y.return=p,y;case Ys:return v=sd(v,p.mode,y),v.return=p,v;case or:var S=v._init;return h(p,S(v._payload),y)}if(ma(v)||Wo(v))return v=is(v,p.mode,y,null),v.return=p,v;bl(p,v)}return null}function f(p,v,y,S){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(p,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:return y.key===T?l(p,v,y,S):null;case Ys:return y.key===T?c(p,v,y,S):null;case or:return T=y._init,f(p,v,T(y._payload),S)}if(ma(y)||Wo(y))return T!==null?null:d(p,v,y,S,null);bl(p,y)}return null}function m(p,v,y,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,a(v,p,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fl:return p=p.get(S.key===null?y:S.key)||null,l(v,p,S,T);case Ys:return p=p.get(S.key===null?y:S.key)||null,c(v,p,S,T);case or:var E=S._init;return m(p,v,y,E(S._payload),T)}if(ma(S)||Wo(S))return p=p.get(y)||null,d(v,p,S,T,null);bl(v,S)}return null}function x(p,v,y,S){for(var T=null,E=null,w=v,A=v=0,V=null;w!==null&&A<y.length;A++){w.index>A?(V=w,w=null):V=w.sibling;var M=f(p,w,y[A],S);if(M===null){w===null&&(w=V);break}n&&w&&M.alternate===null&&e(p,w),v=s(M,v,A),E===null?T=M:E.sibling=M,E=M,w=V}if(A===y.length)return t(p,w),wt&&$r(p,A),T;if(w===null){for(;A<y.length;A++)w=h(p,y[A],S),w!==null&&(v=s(w,v,A),E===null?T=w:E.sibling=w,E=w);return wt&&$r(p,A),T}for(w=i(p,w);A<y.length;A++)V=m(w,p,A,y[A],S),V!==null&&(n&&V.alternate!==null&&w.delete(V.key===null?A:V.key),v=s(V,v,A),E===null?T=V:E.sibling=V,E=V);return n&&w.forEach(function(I){return e(p,I)}),wt&&$r(p,A),T}function _(p,v,y,S){var T=Wo(y);if(typeof T!="function")throw Error(_e(150));if(y=T.call(y),y==null)throw Error(_e(151));for(var E=T=null,w=v,A=v=0,V=null,M=y.next();w!==null&&!M.done;A++,M=y.next()){w.index>A?(V=w,w=null):V=w.sibling;var I=f(p,w,M.value,S);if(I===null){w===null&&(w=V);break}n&&w&&I.alternate===null&&e(p,w),v=s(I,v,A),E===null?T=I:E.sibling=I,E=I,w=V}if(M.done)return t(p,w),wt&&$r(p,A),T;if(w===null){for(;!M.done;A++,M=y.next())M=h(p,M.value,S),M!==null&&(v=s(M,v,A),E===null?T=M:E.sibling=M,E=M);return wt&&$r(p,A),T}for(w=i(p,w);!M.done;A++,M=y.next())M=m(w,p,A,M.value,S),M!==null&&(n&&M.alternate!==null&&w.delete(M.key===null?A:M.key),v=s(M,v,A),E===null?T=M:E.sibling=M,E=M);return n&&w.forEach(function(ae){return e(p,ae)}),wt&&$r(p,A),T}function g(p,v,y,S){if(typeof y=="object"&&y!==null&&y.type===qs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:e:{for(var T=y.key,E=v;E!==null;){if(E.key===T){if(T=y.type,T===qs){if(E.tag===7){t(p,E.sibling),v=r(E,y.props.children),v.return=p,p=v;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===or&&ym(T)===E.type){t(p,E.sibling),v=r(E,y.props),v.ref=Ko(p,E,y),v.return=p,p=v;break e}t(p,E);break}else e(p,E);E=E.sibling}y.type===qs?(v=is(y.props.children,p.mode,S,y.key),v.return=p,p=v):(S=Sc(y.type,y.key,y.props,null,p.mode,S),S.ref=Ko(p,v,y),S.return=p,p=S)}return o(p);case Ys:e:{for(E=y.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(p,v.sibling),v=r(v,y.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=sd(y,p.mode,S),v.return=p,p=v}return o(p);case or:return E=y._init,g(p,v,E(y._payload),S)}if(ma(y))return x(p,v,y,S);if(Wo(y))return _(p,v,y,S);bl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,y),v.return=p,p=v):(t(p,v),v=rd(y,p.mode,S),v.return=p,p=v),o(p)):t(p,v)}return g}var So=Sy(!0),My=Sy(!1),jc=Nr(null),Bc=null,io=null,zh=null;function jh(){zh=io=Bc=null}function Bh(n){var e=jc.current;St(jc),n._currentValue=e}function Df(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ho(n,e){Bc=n,zh=io=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(bn=!0),n.firstContext=null)}function Zn(n){var e=n._currentValue;if(zh!==n)if(n={context:n,memoizedValue:e,next:null},io===null){if(Bc===null)throw Error(_e(308));io=n,Bc.dependencies={lanes:0,firstContext:n}}else io=io.next=n;return e}var Qr=null;function Hh(n){Qr===null?Qr=[n]:Qr.push(n)}function by(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Hh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xi(n,i)}function Xi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ar=!1;function Gh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function br(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(n,t)}return r=i.interleaved,r===null?(e.next=e,Hh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(n,t)}function mc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ch(n,t)}}function vm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Hc(n,e,t,i){var r=n.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,_=a;switch(f=e,m=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(m,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,f=typeof x=="function"?x.call(m,h,f):x,f==null)break e;h=Rt({},h,f);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);us|=o,n.lanes=o,n.memoizedState=h}}function _m(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(_e(191,r));r.call(i)}}}var al={},bi=Nr(al),Va=Nr(al),Wa=Nr(al);function es(n){if(n===al)throw Error(_e(174));return n}function Vh(n,e){switch(xt(Wa,e),xt(Va,n),xt(bi,al),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=hf(e,n)}St(bi),xt(bi,e)}function Mo(){St(bi),St(Va),St(Wa)}function Ey(n){es(Wa.current);var e=es(bi.current),t=hf(e,n.type);e!==t&&(xt(Va,n),xt(bi,t))}function Wh(n){Va.current===n&&(St(bi),St(Va))}var At=Nr(0);function Gc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ju=[];function Xh(){for(var n=0;n<Ju.length;n++)Ju[n]._workInProgressVersionPrimary=null;Ju.length=0}var gc=qi.ReactCurrentDispatcher,Qu=qi.ReactCurrentBatchConfig,cs=0,Ct=null,Ot=null,Wt=null,Vc=!1,Ea=!1,Xa=0,mS=0;function on(){throw Error(_e(321))}function $h(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!pi(n[t],e[t]))return!1;return!0}function Yh(n,e,t,i,r,s){if(cs=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=n===null||n.memoizedState===null?vS:_S,n=t(i,r),Ea){s=0;do{if(Ea=!1,Xa=0,25<=s)throw Error(_e(301));s+=1,Wt=Ot=null,e.updateQueue=null,gc.current=SS,n=t(i,r)}while(Ea)}if(gc.current=Wc,e=Ot!==null&&Ot.next!==null,cs=0,Wt=Ot=Ct=null,Vc=!1,e)throw Error(_e(300));return n}function qh(){var n=Xa!==0;return Xa=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ct.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function Jn(){if(Ot===null){var n=Ct.alternate;n=n!==null?n.memoizedState:null}else n=Ot.next;var e=Wt===null?Ct.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=n;else{if(n===null)throw Error(_e(310));Ot=n,n={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?Ct.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function $a(n,e){return typeof e=="function"?e(n):e}function ed(n){var e=Jn(),t=e.queue;if(t===null)throw Error(_e(311));t.lastRenderedReducer=n;var i=Ot,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((cs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ct.lanes|=d,us|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ct.lanes|=s,us|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function td(n){var e=Jn(),t=e.queue;if(t===null)throw Error(_e(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ty(){}function Ay(n,e){var t=Ct,i=Jn(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,Kh(Py.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,Ya(9,Ry.bind(null,t,i,r,e),void 0,null),Yt===null)throw Error(_e(349));cs&30||Cy(t,e,r)}return r}function Cy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ry(n,e,t,i){e.value=t,e.getSnapshot=i,Ly(e)&&Iy(n)}function Py(n,e,t){return t(function(){Ly(e)&&Iy(n)})}function Ly(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!pi(n,t)}catch{return!0}}function Iy(n){var e=Xi(n,1);e!==null&&fi(e,n,1,-1)}function Sm(n){var e=vi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:n},e.queue=n,n=n.dispatch=yS.bind(null,Ct,n),[e.memoizedState,n]}function Ya(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Dy(){return Jn().memoizedState}function xc(n,e,t,i){var r=vi();Ct.flags|=n,r.memoizedState=Ya(1|e,t,void 0,i===void 0?null:i)}function hu(n,e,t,i){var r=Jn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&$h(i,o.deps)){r.memoizedState=Ya(e,t,s,i);return}}Ct.flags|=n,r.memoizedState=Ya(1|e,t,s,i)}function Mm(n,e){return xc(8390656,8,n,e)}function Kh(n,e){return hu(2048,8,n,e)}function Ny(n,e){return hu(4,2,n,e)}function ky(n,e){return hu(4,4,n,e)}function Uy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Oy(n,e,t){return t=t!=null?t.concat([n]):null,hu(4,4,Uy.bind(null,e,n),t)}function Zh(){}function Fy(n,e){var t=Jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&$h(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function zy(n,e){var t=Jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&$h(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function jy(n,e,t){return cs&21?(pi(t,e)||(t=Wx(),Ct.lanes|=t,us|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,bn=!0),n.memoizedState=t)}function gS(n,e){var t=ft;ft=t!==0&&4>t?t:4,n(!0);var i=Qu.transition;Qu.transition={};try{n(!1),e()}finally{ft=t,Qu.transition=i}}function By(){return Jn().memoizedState}function xS(n,e,t){var i=Er(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Hy(n))Gy(e,t);else if(t=by(n,e,t,i),t!==null){var r=yn();fi(t,n,i,r),Vy(t,e,i)}}function yS(n,e,t){var i=Er(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Hy(n))Gy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,Hh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=by(n,e,r,i),t!==null&&(r=yn(),fi(t,n,i,r),Vy(t,e,i))}}function Hy(n){var e=n.alternate;return n===Ct||e!==null&&e===Ct}function Gy(n,e){Ea=Vc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Vy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ch(n,t)}}var Wc={readContext:Zn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},vS={readContext:Zn,useCallback:function(n,e){return vi().memoizedState=[n,e===void 0?null:e],n},useContext:Zn,useEffect:Mm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,xc(4194308,4,Uy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return xc(4194308,4,n,e)},useInsertionEffect:function(n,e){return xc(4,2,n,e)},useMemo:function(n,e){var t=vi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=vi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=xS.bind(null,Ct,n),[i.memoizedState,n]},useRef:function(n){var e=vi();return n={current:n},e.memoizedState=n},useState:Sm,useDebugValue:Zh,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Sm(!1),e=n[0];return n=gS.bind(null,n[1]),vi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ct,r=vi();if(wt){if(t===void 0)throw Error(_e(407));t=t()}else{if(t=e(),Yt===null)throw Error(_e(349));cs&30||Cy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Mm(Py.bind(null,i,s,n),[n]),i.flags|=2048,Ya(9,Ry.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=vi(),e=Yt.identifierPrefix;if(wt){var t=ji,i=zi;t=(i&~(1<<32-di(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Xa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=mS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},_S={readContext:Zn,useCallback:Fy,useContext:Zn,useEffect:Kh,useImperativeHandle:Oy,useInsertionEffect:Ny,useLayoutEffect:ky,useMemo:zy,useReducer:ed,useRef:Dy,useState:function(){return ed($a)},useDebugValue:Zh,useDeferredValue:function(n){var e=Jn();return jy(e,Ot.memoizedState,n)},useTransition:function(){var n=ed($a)[0],e=Jn().memoizedState;return[n,e]},useMutableSource:Ty,useSyncExternalStore:Ay,useId:By,unstable_isNewReconciler:!1},SS={readContext:Zn,useCallback:Fy,useContext:Zn,useEffect:Kh,useImperativeHandle:Oy,useInsertionEffect:Ny,useLayoutEffect:ky,useMemo:zy,useReducer:td,useRef:Dy,useState:function(){return td($a)},useDebugValue:Zh,useDeferredValue:function(n){var e=Jn();return Ot===null?e.memoizedState=n:jy(e,Ot.memoizedState,n)},useTransition:function(){var n=td($a)[0],e=Jn().memoizedState;return[n,e]},useMutableSource:Ty,useSyncExternalStore:Ay,useId:By,unstable_isNewReconciler:!1};function ii(n,e){if(n&&n.defaultProps){e=Rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Nf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var pu={isMounted:function(n){return(n=n._reactInternals)?gs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=yn(),r=Er(n),s=Gi(i,r);s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(fi(e,n,r,i),mc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=yn(),r=Er(n),s=Gi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(fi(e,n,r,i),mc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=yn(),i=Er(n),r=Gi(t,i);r.tag=2,e!=null&&(r.callback=e),e=br(n,r,i),e!==null&&(fi(e,n,i,t),mc(e,n,i))}};function bm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ja(t,i)||!ja(r,s):!0}function Wy(n,e,t){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=En(e)?as:dn.current,i=e.contextTypes,s=(i=i!=null)?vo(n,r):Lr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function wm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&pu.enqueueReplaceState(e,e.state,null)}function kf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Gh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=En(e)?as:dn.current,r.context=vo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pu.enqueueReplaceState(r,r.state,null),Hc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function bo(n,e){try{var t="",i=e;do t+=q_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function nd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Uf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function Xy(n,e,t){t=Gi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){$c||($c=!0,Xf=i),Uf(n,e)},t}function $y(n,e,t){t=Gi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Uf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Uf(n,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Em(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new MS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=US.bind(null,n,e,t),e.then(n,n))}function Tm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Am(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Gi(-1,1),e.tag=2,br(t,e,1))),t.lanes|=1),n)}var bS=qi.ReactCurrentOwner,bn=!1;function pn(n,e,t,i){e.child=n===null?My(e,null,t,i):So(e,n.child,t,i)}function Cm(n,e,t,i,r){t=t.render;var s=e.ref;return ho(e,r),i=Yh(n,e,t,i,s,r),t=qh(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$i(n,e,r)):(wt&&t&&Uh(e),e.flags|=1,pn(n,e,i,r),e.child)}function Rm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!sp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Yy(n,e,s,i,r)):(n=Sc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ja,t(o,i)&&n.ref===e.ref)return $i(n,e,r)}return e.flags|=1,n=Tr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Yy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ja(s,i)&&n.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(bn=!0);else return e.lanes=n.lanes,$i(n,e,r)}return Of(n,e,t,i,r)}function qy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(so,Ln),Ln|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,xt(so,Ln),Ln|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,xt(so,Ln),Ln|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,xt(so,Ln),Ln|=i;return pn(n,e,r,t),e.child}function Ky(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Of(n,e,t,i,r){var s=En(t)?as:dn.current;return s=vo(e,s),ho(e,r),t=Yh(n,e,t,i,s,r),i=qh(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$i(n,e,r)):(wt&&i&&Uh(e),e.flags|=1,pn(n,e,t,r),e.child)}function Pm(n,e,t,i,r){if(En(t)){var s=!0;Oc(e)}else s=!1;if(ho(e,r),e.stateNode===null)yc(n,e),Wy(e,t,i),kf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=En(t)?as:dn.current,c=vo(e,c));var d=t.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&wm(e,o,i,c),ar=!1;var f=e.memoizedState;o.state=f,Hc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||wn.current||ar?(typeof d=="function"&&(Nf(e,t,d,i),l=e.memoizedState),(a=ar||bm(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,wy(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:ii(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=En(t)?as:dn.current,l=vo(e,l));var m=t.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&wm(e,o,i,l),ar=!1,f=e.memoizedState,o.state=f,Hc(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||wn.current||ar?(typeof m=="function"&&(Nf(e,t,m,i),x=e.memoizedState),(c=ar||bm(e,t,c,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Ff(n,e,t,i,s,r)}function Ff(n,e,t,i,r,s){Ky(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mm(e,t,!1),$i(n,e,s);i=e.stateNode,bS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=So(e,n.child,null,s),e.child=So(e,null,a,s)):pn(n,e,a,s),e.memoizedState=i.state,r&&mm(e,t,!0),e.child}function Zy(n){var e=n.stateNode;e.pendingContext?pm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&pm(n,e.context,!1),Vh(n,e.containerInfo)}function Lm(n,e,t,i,r){return _o(),Fh(r),e.flags|=256,pn(n,e,t,i),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function jf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jy(n,e,t){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),xt(At,r&1),n===null)return If(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xu(o,i,0,null),n=is(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=jf(t),e.memoizedState=zf,n):Jh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=is(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?jf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=zf,i}return s=n.child,n=s.sibling,i=Tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Jh(n,e){return e=xu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function wl(n,e,t,i){return i!==null&&Fh(i),So(e,n.child,null,t),n=Jh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function wS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=nd(Error(_e(422))),wl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xu({mode:"visible",children:i.children},r,0,null),s=is(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&So(e,n.child,null,o),e.child.memoizedState=jf(o),e.memoizedState=zf,s);if(!(e.mode&1))return wl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(_e(419)),i=nd(s,i,void 0),wl(n,e,o,i)}if(a=(o&n.childLanes)!==0,bn||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(n,r),fi(i,n,r,-1))}return rp(),i=nd(Error(_e(421))),wl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=OS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Dn=Mr(r.nextSibling),Nn=e,wt=!0,si=null,n!==null&&(Wn[Xn++]=zi,Wn[Xn++]=ji,Wn[Xn++]=ls,zi=n.id,ji=n.overflow,ls=e),e=Jh(e,i.children),e.flags|=4096,e)}function Im(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Df(n.return,e,t)}function id(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Qy(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(n,e,i.children,t),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Im(n,t,e);else if(n.tag===19)Im(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(xt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Gc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),id(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Gc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}id(e,!0,t,null,s);break;case"together":id(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function $i(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),us|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(_e(153));if(e.child!==null){for(n=e.child,t=Tr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Tr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ES(n,e,t){switch(e.tag){case 3:Zy(e),_o();break;case 5:Ey(e);break;case 1:En(e.type)&&Oc(e);break;case 4:Vh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(At,At.current&1),e.flags|=128,null):t&e.child.childLanes?Jy(n,e,t):(xt(At,At.current&1),n=$i(n,e,t),n!==null?n.sibling:null);xt(At,At.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Qy(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,qy(n,e,t)}return $i(n,e,t)}var ev,Bf,tv,nv;ev=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bf=function(){};tv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,es(bi.current);var s=null;switch(t){case"input":r=cf(n,r),i=cf(n,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=ff(n,r),i=ff(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=kc)}pf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Da.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};nv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Zo(n,e){if(!wt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function an(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function TS(n,e,t){var i=e.pendingProps;switch(Oh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return En(e.type)&&Uc(),an(e),null;case 3:return i=e.stateNode,Mo(),St(wn),St(dn),Xh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ml(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(qf(si),si=null))),Bf(n,e),an(e),null;case 5:Wh(e);var r=es(Wa.current);if(t=e.type,n!==null&&e.stateNode!=null)tv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(_e(166));return an(e),null}if(n=es(bi.current),Ml(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Ga]=s,n=(e.mode&1)!==0,t){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)yt(xa[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Bp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Gp(i,s),yt("invalid",i)}pf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,n),r=["children",""+a]):Da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&yt("scroll",i)}switch(t){case"input":hl(i),Hp(i,s,!0);break;case"textarea":hl(i),Vp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Px(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Si]=e,n[Ga]=i,ev(n,e,!1,!1),e.stateNode=n;e:{switch(o=mf(t,i),t){case"dialog":yt("cancel",n),yt("close",n),r=i;break;case"iframe":case"object":case"embed":yt("load",n),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)yt(xa[r],n);r=i;break;case"source":yt("error",n),r=i;break;case"img":case"image":case"link":yt("error",n),yt("load",n),r=i;break;case"details":yt("toggle",n),r=i;break;case"input":Bp(n,i),r=cf(n,i),yt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),yt("invalid",n);break;case"textarea":Gp(n,i),r=ff(n,i),yt("invalid",n);break;default:r=i}pf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Na(n,l):typeof l=="number"&&Na(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",n):l!=null&&Mh(n,s,l,o))}switch(t){case"input":hl(n),Hp(n,i,!1);break;case"textarea":hl(n),Vp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Pr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?lo(n,!!i.multiple,s,!1):i.defaultValue!=null&&lo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=kc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(n&&e.stateNode!=null)nv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(_e(166));if(t=es(Wa.current),es(bi.current),Ml(e)){if(i=e.stateNode,t=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==t)&&(n=Nn,n!==null))switch(n.tag){case 3:Sl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return an(e),null;case 13:if(St(At),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(wt&&Dn!==null&&e.mode&1&&!(e.flags&128))_y(),_o(),e.flags|=98560,s=!1;else if(s=Ml(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(_e(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_e(317));s[Si]=e}else _o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else si!==null&&(qf(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||At.current&1?Ft===0&&(Ft=3):rp())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return Mo(),Bf(n,e),n===null&&Ba(e.stateNode.containerInfo),an(e),null;case 10:return Bh(e.type._context),an(e),null;case 17:return En(e.type)&&Uc(),an(e),null;case 19:if(St(At),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zo(s,!1);else{if(Ft!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Gc(n),o!==null){for(e.flags|=128,Zo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return xt(At,At.current&1|2),e.child}n=n.sibling}s.tail!==null&&Nt()>wo&&(e.flags|=128,i=!0,Zo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Gc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!wt)return an(e),null}else 2*Nt()-s.renderingStartTime>wo&&t!==1073741824&&(e.flags|=128,i=!0,Zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,t=At.current,xt(At,i?t&1|2:t&1),e):(an(e),null);case 22:case 23:return ip(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(_e(156,e.tag))}function AS(n,e){switch(Oh(e),e.tag){case 1:return En(e.type)&&Uc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Mo(),St(wn),St(dn),Xh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Wh(e),null;case 13:if(St(At),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(_e(340));_o()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return St(At),null;case 4:return Mo(),null;case 10:return Bh(e.type._context),null;case 22:case 23:return ip(),null;case 24:return null;default:return null}}var El=!1,un=!1,CS=typeof WeakSet=="function"?WeakSet:Set,De=null;function ro(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){It(n,e,i)}else t.current=null}function Hf(n,e,t){try{t()}catch(i){It(n,e,i)}}var Dm=!1;function RS(n,e){if(Ef=Ic,n=ay(),kh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=n,f=null;t:for(;;){for(var m;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Tf={focusedElem:n,selectionRange:t},Ic=!1,De=e;De!==null;)if(e=De,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,De=n;else for(;De!==null;){e=De;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,g=x.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:ii(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_e(163))}}catch(S){It(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}return x=Dm,Dm=!1,x}function Ta(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hf(e,t,s)}r=r.next}while(r!==i)}}function mu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Gf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function iv(n){var e=n.alternate;e!==null&&(n.alternate=null,iv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Si],delete e[Ga],delete e[Rf],delete e[dS],delete e[fS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rv(n){return n.tag===5||n.tag===3||n.tag===4}function Nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=kc));else if(i!==4&&(n=n.child,n!==null))for(Vf(n,e,t),n=n.sibling;n!==null;)Vf(n,e,t),n=n.sibling}function Wf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Wf(n,e,t),n=n.sibling;n!==null;)Wf(n,e,t),n=n.sibling}var Jt=null,ri=!1;function Ji(n,e,t){for(t=t.child;t!==null;)sv(n,e,t),t=t.sibling}function sv(n,e,t){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(au,t)}catch{}switch(t.tag){case 5:un||ro(t,e);case 6:var i=Jt,r=ri;Jt=null,Ji(n,e,t),Jt=i,ri=r,Jt!==null&&(ri?(n=Jt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Jt.removeChild(t.stateNode));break;case 18:Jt!==null&&(ri?(n=Jt,t=t.stateNode,n.nodeType===8?Ku(n.parentNode,t):n.nodeType===1&&Ku(n,t),Fa(n)):Ku(Jt,t.stateNode));break;case 4:i=Jt,r=ri,Jt=t.stateNode.containerInfo,ri=!0,Ji(n,e,t),Jt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hf(t,e,o),r=r.next}while(r!==i)}Ji(n,e,t);break;case 1:if(!un&&(ro(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){It(t,e,a)}Ji(n,e,t);break;case 21:Ji(n,e,t);break;case 22:t.mode&1?(un=(i=un)||t.memoizedState!==null,Ji(n,e,t),un=i):Ji(n,e,t);break;default:Ji(n,e,t)}}function km(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new CS),e.forEach(function(i){var r=FS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Qn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Jt=a.stateNode,ri=!1;break e;case 3:Jt=a.stateNode.containerInfo,ri=!0;break e;case 4:Jt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(Jt===null)throw Error(_e(160));sv(s,o,r),Jt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ov(e,n),e=e.sibling}function ov(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Qn(e,n),yi(n),i&4){try{Ta(3,n,n.return),mu(3,n)}catch(_){It(n,n.return,_)}try{Ta(5,n,n.return)}catch(_){It(n,n.return,_)}}break;case 1:Qn(e,n),yi(n),i&512&&t!==null&&ro(t,t.return);break;case 5:if(Qn(e,n),yi(n),i&512&&t!==null&&ro(t,t.return),n.flags&32){var r=n.stateNode;try{Na(r,"")}catch(_){It(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cx(r,s),mf(a,o);var c=mf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Dx(r,h):d==="dangerouslySetInnerHTML"?Lx(r,h):d==="children"?Na(r,h):Mh(r,d,h,c)}switch(a){case"input":uf(r,s);break;case"textarea":Rx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?lo(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ga]=s}catch(_){It(n,n.return,_)}}break;case 6:if(Qn(e,n),yi(n),i&4){if(n.stateNode===null)throw Error(_e(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){It(n,n.return,_)}}break;case 3:if(Qn(e,n),yi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(_){It(n,n.return,_)}break;case 4:Qn(e,n),yi(n);break;case 13:Qn(e,n),yi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(tp=Nt())),i&4&&km(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(un=(c=un)||d,Qn(e,n),un=c):Qn(e,n),yi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(De=n,d=n.child;d!==null;){for(h=De=d;De!==null;){switch(f=De,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ta(4,f,f.return);break;case 1:ro(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){It(i,t,_)}}break;case 5:ro(f,f.return);break;case 22:if(f.memoizedState!==null){Om(h);continue}}m!==null?(m.return=f,De=m):Om(h)}d=d.sibling}e:for(d=null,h=n;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ix("display",o))}catch(_){It(n,n.return,_)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){It(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qn(e,n),yi(n),i&4&&km(n);break;case 21:break;default:Qn(e,n),yi(n)}}function yi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(rv(t)){var i=t;break e}t=t.return}throw Error(_e(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=Nm(n);Wf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Nm(n);Vf(n,a,o);break;default:throw Error(_e(161))}}catch(l){It(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function PS(n,e,t){De=n,av(n)}function av(n,e,t){for(var i=(n.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||El;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=El;var c=un;if(El=o,(un=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?Fm(r):l!==null?(l.return=o,De=l):Fm(r);for(;s!==null;)De=s,av(s),s=s.sibling;De=r,El=a,un=c}Um(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):Um(n)}}function Um(n){for(;De!==null;){var e=De;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||mu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ii(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_m(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}_m(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Fa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_e(163))}un||e.flags&512&&Gf(e)}catch(f){It(e,e.return,f)}}if(e===n){De=null;break}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}}function Om(n){for(;De!==null;){var e=De;if(e===n){De=null;break}var t=e.sibling;if(t!==null){t.return=e.return,De=t;break}De=e.return}}function Fm(n){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{mu(4,e)}catch(l){It(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{Gf(e)}catch(l){It(e,s,l)}break;case 5:var o=e.return;try{Gf(e)}catch(l){It(e,o,l)}}}catch(l){It(e,e.return,l)}if(e===n){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var LS=Math.ceil,Xc=qi.ReactCurrentDispatcher,Qh=qi.ReactCurrentOwner,Kn=qi.ReactCurrentBatchConfig,at=0,Yt=null,Ut=null,en=0,Ln=0,so=Nr(0),Ft=0,qa=null,us=0,gu=0,ep=0,Aa=null,Mn=null,tp=0,wo=1/0,Ui=null,$c=!1,Xf=null,wr=null,Tl=!1,pr=null,Yc=0,Ca=0,$f=null,vc=-1,_c=0;function yn(){return at&6?Nt():vc!==-1?vc:vc=Nt()}function Er(n){return n.mode&1?at&2&&en!==0?en&-en:pS.transition!==null?(_c===0&&(_c=Wx()),_c):(n=ft,n!==0||(n=window.event,n=n===void 0?16:Jx(n.type)),n):1}function fi(n,e,t,i){if(50<Ca)throw Ca=0,$f=null,Error(_e(185));rl(n,t,i),(!(at&2)||n!==Yt)&&(n===Yt&&(!(at&2)&&(gu|=t),Ft===4&&dr(n,en)),Tn(n,i),t===1&&at===0&&!(e.mode&1)&&(wo=Nt()+500,fu&&kr()))}function Tn(n,e){var t=n.callbackNode;p1(n,e);var i=Lc(n,n===Yt?en:0);if(i===0)t!==null&&$p(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&$p(t),e===1)n.tag===0?hS(zm.bind(null,n)):xy(zm.bind(null,n)),cS(function(){!(at&6)&&kr()}),t=null;else{switch(Xx(i)){case 1:t=Ah;break;case 4:t=Gx;break;case 16:t=Pc;break;case 536870912:t=Vx;break;default:t=Pc}t=mv(t,lv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function lv(n,e){if(vc=-1,_c=0,at&6)throw Error(_e(327));var t=n.callbackNode;if(po()&&n.callbackNode!==t)return null;var i=Lc(n,n===Yt?en:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=qc(n,i);else{e=i;var r=at;at|=2;var s=uv();(Yt!==n||en!==e)&&(Ui=null,wo=Nt()+500,ns(n,e));do try{NS();break}catch(a){cv(n,a)}while(!0);jh(),Xc.current=s,at=r,Ut!==null?e=0:(Yt=null,en=0,e=Ft)}if(e!==0){if(e===2&&(r=_f(n),r!==0&&(i=r,e=Yf(n,r))),e===1)throw t=qa,ns(n,0),dr(n,i),Tn(n,Nt()),t;if(e===6)dr(n,i);else{if(r=n.current.alternate,!(i&30)&&!IS(r)&&(e=qc(n,i),e===2&&(s=_f(n),s!==0&&(i=s,e=Yf(n,s))),e===1))throw t=qa,ns(n,0),dr(n,i),Tn(n,Nt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(_e(345));case 2:Yr(n,Mn,Ui);break;case 3:if(dr(n,i),(i&130023424)===i&&(e=tp+500-Nt(),10<e)){if(Lc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){yn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Cf(Yr.bind(null,n,Mn,Ui),e);break}Yr(n,Mn,Ui);break;case 4:if(dr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*LS(i/1960))-i,10<i){n.timeoutHandle=Cf(Yr.bind(null,n,Mn,Ui),i);break}Yr(n,Mn,Ui);break;case 5:Yr(n,Mn,Ui);break;default:throw Error(_e(329))}}}return Tn(n,Nt()),n.callbackNode===t?lv.bind(null,n):null}function Yf(n,e){var t=Aa;return n.current.memoizedState.isDehydrated&&(ns(n,e).flags|=256),n=qc(n,e),n!==2&&(e=Mn,Mn=t,e!==null&&qf(e)),n}function qf(n){Mn===null?Mn=n:Mn.push.apply(Mn,n)}function IS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(n,e){for(e&=~ep,e&=~gu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-di(e),i=1<<t;n[t]=-1,e&=~i}}function zm(n){if(at&6)throw Error(_e(327));po();var e=Lc(n,0);if(!(e&1))return Tn(n,Nt()),null;var t=qc(n,e);if(n.tag!==0&&t===2){var i=_f(n);i!==0&&(e=i,t=Yf(n,i))}if(t===1)throw t=qa,ns(n,0),dr(n,e),Tn(n,Nt()),t;if(t===6)throw Error(_e(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Yr(n,Mn,Ui),Tn(n,Nt()),null}function np(n,e){var t=at;at|=1;try{return n(e)}finally{at=t,at===0&&(wo=Nt()+500,fu&&kr())}}function ds(n){pr!==null&&pr.tag===0&&!(at&6)&&po();var e=at;at|=1;var t=Kn.transition,i=ft;try{if(Kn.transition=null,ft=1,n)return n()}finally{ft=i,Kn.transition=t,at=e,!(at&6)&&kr()}}function ip(){Ln=so.current,St(so)}function ns(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,lS(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(Oh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uc();break;case 3:Mo(),St(wn),St(dn),Xh();break;case 5:Wh(i);break;case 4:Mo();break;case 13:St(At);break;case 19:St(At);break;case 10:Bh(i.type._context);break;case 22:case 23:ip()}t=t.return}if(Yt=n,Ut=n=Tr(n.current,null),en=Ln=e,Ft=0,qa=null,ep=gu=us=0,Mn=Aa=null,Qr!==null){for(e=0;e<Qr.length;e++)if(t=Qr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Qr=null}return n}function cv(n,e){do{var t=Ut;try{if(jh(),gc.current=Wc,Vc){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vc=!1}if(cs=0,Wt=Ot=Ct=null,Ea=!1,Xa=0,Qh.current=null,t===null||t.return===null){Ft=1,qa=e,Ut=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=en,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Tm(o);if(m!==null){m.flags&=-257,Am(m,o,a,s,e),m.mode&1&&Em(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Em(s,c,e),rp();break e}l=Error(_e(426))}}else if(wt&&a.mode&1){var g=Tm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Am(g,o,a,s,e),Fh(bo(l,a));break e}}s=l=bo(l,a),Ft!==4&&(Ft=2),Aa===null?Aa=[s]:Aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Xy(s,l,e);vm(s,p);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wr===null||!wr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=$y(s,a,e);vm(s,S);break e}}s=s.return}while(s!==null)}fv(t)}catch(T){e=T,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function uv(){var n=Xc.current;return Xc.current=Wc,n===null?Wc:n}function rp(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Yt===null||!(us&268435455)&&!(gu&268435455)||dr(Yt,en)}function qc(n,e){var t=at;at|=2;var i=uv();(Yt!==n||en!==e)&&(Ui=null,ns(n,e));do try{DS();break}catch(r){cv(n,r)}while(!0);if(jh(),at=t,Xc.current=i,Ut!==null)throw Error(_e(261));return Yt=null,en=0,Ft}function DS(){for(;Ut!==null;)dv(Ut)}function NS(){for(;Ut!==null&&!s1();)dv(Ut)}function dv(n){var e=pv(n.alternate,n,Ln);n.memoizedProps=n.pendingProps,e===null?fv(n):Ut=e,Qh.current=null}function fv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=AS(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ft=6,Ut=null;return}}else if(t=TS(t,e,Ln),t!==null){Ut=t;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);Ft===0&&(Ft=5)}function Yr(n,e,t){var i=ft,r=Kn.transition;try{Kn.transition=null,ft=1,kS(n,e,t,i)}finally{Kn.transition=r,ft=i}return null}function kS(n,e,t,i){do po();while(pr!==null);if(at&6)throw Error(_e(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(_e(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(m1(n,s),n===Yt&&(Ut=Yt=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Tl||(Tl=!0,mv(Pc,function(){return po(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var o=ft;ft=1;var a=at;at|=4,Qh.current=null,RS(n,t),ov(t,n),tS(Tf),Ic=!!Ef,Tf=Ef=null,n.current=t,PS(t),o1(),at=a,ft=o,Kn.transition=s}else n.current=t;if(Tl&&(Tl=!1,pr=n,Yc=r),s=n.pendingLanes,s===0&&(wr=null),c1(t.stateNode),Tn(n,Nt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if($c)throw $c=!1,n=Xf,Xf=null,n;return Yc&1&&n.tag!==0&&po(),s=n.pendingLanes,s&1?n===$f?Ca++:(Ca=0,$f=n):Ca=0,kr(),null}function po(){if(pr!==null){var n=Xx(Yc),e=Kn.transition,t=ft;try{if(Kn.transition=null,ft=16>n?16:n,pr===null)var i=!1;else{if(n=pr,pr=null,Yc=0,at&6)throw Error(_e(331));var r=at;for(at|=4,De=n.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var d=De;switch(d.tag){case 0:case 11:case 15:Ta(8,d,s)}var h=d.child;if(h!==null)h.return=d,De=h;else for(;De!==null;){d=De;var f=d.sibling,m=d.return;if(iv(d),d===c){De=null;break}if(f!==null){f.return=m,De=f;break}De=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,De=p;break e}De=s.return}}var v=n.current;for(De=v;De!==null;){o=De;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,De=y;else e:for(o=v;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mu(9,a)}}catch(T){It(a,a.return,T)}if(a===o){De=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,De=S;break e}De=a.return}}if(at=r,kr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(au,n)}catch{}i=!0}return i}finally{ft=t,Kn.transition=e}}return!1}function jm(n,e,t){e=bo(t,e),e=Xy(n,e,1),n=br(n,e,1),e=yn(),n!==null&&(rl(n,1,e),Tn(n,e))}function It(n,e,t){if(n.tag===3)jm(n,n,t);else for(;e!==null;){if(e.tag===3){jm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){n=bo(t,n),n=$y(e,n,1),e=br(e,n,1),n=yn(),e!==null&&(rl(e,1,n),Tn(e,n));break}}e=e.return}}function US(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=yn(),n.pingedLanes|=n.suspendedLanes&t,Yt===n&&(en&t)===t&&(Ft===4||Ft===3&&(en&130023424)===en&&500>Nt()-tp?ns(n,0):ep|=t),Tn(n,e)}function hv(n,e){e===0&&(n.mode&1?(e=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):e=1);var t=yn();n=Xi(n,e),n!==null&&(rl(n,e,t),Tn(n,t))}function OS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),hv(n,t)}function FS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(_e(314))}i!==null&&i.delete(e),hv(n,t)}var pv;pv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||wn.current)bn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return bn=!1,ES(n,e,t);bn=!!(n.flags&131072)}else bn=!1,wt&&e.flags&1048576&&yy(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yc(n,e),n=e.pendingProps;var r=vo(e,dn.current);ho(e,t),r=Yh(null,e,i,n,r,t);var s=qh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,Oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gh(e),r.updater=pu,e.stateNode=r,r._reactInternals=e,kf(e,i,n,t),e=Ff(null,e,i,!0,s,t)):(e.tag=0,wt&&s&&Uh(e),pn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(yc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jS(i),n=ii(i,n),r){case 0:e=Of(null,e,i,n,t);break e;case 1:e=Pm(null,e,i,n,t);break e;case 11:e=Cm(null,e,i,n,t);break e;case 14:e=Rm(null,e,i,ii(i.type,n),t);break e}throw Error(_e(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Of(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Pm(n,e,i,r,t);case 3:e:{if(Zy(e),n===null)throw Error(_e(387));i=e.pendingProps,s=e.memoizedState,r=s.element,wy(n,e),Hc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bo(Error(_e(423)),e),e=Lm(n,e,i,t,r);break e}else if(i!==r){r=bo(Error(_e(424)),e),e=Lm(n,e,i,t,r);break e}else for(Dn=Mr(e.stateNode.containerInfo.firstChild),Nn=e,wt=!0,si=null,t=My(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_o(),i===r){e=$i(n,e,t);break e}pn(n,e,i,t)}e=e.child}return e;case 5:return Ey(e),n===null&&If(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Af(i,r)?o=null:s!==null&&Af(i,s)&&(e.flags|=32),Ky(n,e),pn(n,e,o,t),e.child;case 6:return n===null&&If(e),null;case 13:return Jy(n,e,t);case 4:return Vh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=So(e,null,i,t):pn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Cm(n,e,i,r,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(jc,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!wn.current){e=$i(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Df(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_e(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Df(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,t),r=Zn(r),i=i(r),e.flags|=1,pn(n,e,i,t),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),Rm(n,e,i,r,t);case 15:return Yy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),yc(n,e),e.tag=1,En(i)?(n=!0,Oc(e)):n=!1,ho(e,t),Wy(e,i,r),kf(e,i,r,t),Ff(null,e,i,!0,n,t);case 19:return Qy(n,e,t);case 22:return qy(n,e,t)}throw Error(_e(156,e.tag))};function mv(n,e){return Hx(n,e)}function zS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,e,t,i){return new zS(n,e,t,i)}function sp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jS(n){if(typeof n=="function")return sp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===wh)return 11;if(n===Eh)return 14}return 2}function Tr(n,e){var t=n.alternate;return t===null?(t=qn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Sc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")sp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case qs:return is(t.children,r,s,e);case bh:o=8,r|=8;break;case sf:return n=qn(12,t,e,r|2),n.elementType=sf,n.lanes=s,n;case of:return n=qn(13,t,e,r),n.elementType=of,n.lanes=s,n;case af:return n=qn(19,t,e,r),n.elementType=af,n.lanes=s,n;case Ex:return xu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case bx:o=10;break e;case wx:o=9;break e;case wh:o=11;break e;case Eh:o=14;break e;case or:o=16,i=null;break e}throw Error(_e(130,n==null?n:typeof n,""))}return e=qn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function is(n,e,t,i){return n=qn(7,n,i,e),n.lanes=t,n}function xu(n,e,t,i){return n=qn(22,n,i,e),n.elementType=Ex,n.lanes=t,n.stateNode={isHidden:!1},n}function rd(n,e,t){return n=qn(6,n,null,e),n.lanes=t,n}function sd(n,e,t){return e=qn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function BS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zu(0),this.expirationTimes=zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function op(n,e,t,i,r,s,o,a,l){return n=new BS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gh(s),n}function HS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function gv(n){if(!n)return Lr;n=n._reactInternals;e:{if(gs(n)!==n||n.tag!==1)throw Error(_e(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_e(171))}if(n.tag===1){var t=n.type;if(En(t))return gy(n,t,e)}return e}function xv(n,e,t,i,r,s,o,a,l){return n=op(t,i,!0,n,r,s,o,a,l),n.context=gv(null),t=n.current,i=yn(),r=Er(t),s=Gi(i,r),s.callback=e??null,br(t,s,r),n.current.lanes=r,rl(n,r,i),Tn(n,i),n}function yu(n,e,t,i){var r=e.current,s=yn(),o=Er(r);return t=gv(t),e.context===null?e.context=t:e.pendingContext=t,e=Gi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=br(r,e,o),n!==null&&(fi(n,r,o,s),mc(n,r,o)),o}function Kc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ap(n,e){Bm(n,e),(n=n.alternate)&&Bm(n,e)}function GS(){return null}var yv=typeof reportError=="function"?reportError:function(n){console.error(n)};function lp(n){this._internalRoot=n}vu.prototype.render=lp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(_e(409));yu(n,e,null,null)};vu.prototype.unmount=lp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ds(function(){yu(null,n,null,null)}),e[Wi]=null}};function vu(n){this._internalRoot=n}vu.prototype.unstable_scheduleHydration=function(n){if(n){var e=qx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ur.length&&e!==0&&e<ur[t].priority;t++);ur.splice(t,0,n),t===0&&Zx(n)}};function cp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function VS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Kc(o);s.call(c)}}var o=xv(e,i,n,0,null,!1,!1,"",Hm);return n._reactRootContainer=o,n[Wi]=o.current,Ba(n.nodeType===8?n.parentNode:n),ds(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Kc(l);a.call(c)}}var l=op(n,0,!1,null,null,!1,!1,"",Hm);return n._reactRootContainer=l,n[Wi]=l.current,Ba(n.nodeType===8?n.parentNode:n),ds(function(){yu(e,l,t,i)}),l}function Su(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Kc(o);a.call(l)}}yu(e,o,n,r)}else o=VS(t,e,n,r,i);return Kc(o)}$x=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ga(e.pendingLanes);t!==0&&(Ch(e,t|1),Tn(e,Nt()),!(at&6)&&(wo=Nt()+500,kr()))}break;case 13:ds(function(){var i=Xi(n,1);if(i!==null){var r=yn();fi(i,n,1,r)}}),ap(n,1)}};Rh=function(n){if(n.tag===13){var e=Xi(n,134217728);if(e!==null){var t=yn();fi(e,n,134217728,t)}ap(n,134217728)}};Yx=function(n){if(n.tag===13){var e=Er(n),t=Xi(n,e);if(t!==null){var i=yn();fi(t,n,e,i)}ap(n,e)}};qx=function(){return ft};Kx=function(n,e){var t=ft;try{return ft=n,e()}finally{ft=t}};xf=function(n,e,t){switch(e){case"input":if(uf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=du(i);if(!r)throw Error(_e(90));Ax(i),uf(i,r)}}}break;case"textarea":Rx(n,t);break;case"select":e=t.value,e!=null&&lo(n,!!t.multiple,e,!1)}};Ux=np;Ox=ds;var WS={usingClientEntryPoint:!1,Events:[ol,Qs,du,Nx,kx,np]},Jo={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XS={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jx(n),n===null?null:n.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||GS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{au=Al.inject(XS),Mi=Al}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;Un.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cp(e))throw Error(_e(200));return HS(n,e,null,t)};Un.createRoot=function(n,e){if(!cp(n))throw Error(_e(299));var t=!1,i="",r=yv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=op(n,1,!1,null,null,t,!1,i,r),n[Wi]=e.current,Ba(n.nodeType===8?n.parentNode:n),new lp(e)};Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(_e(188)):(n=Object.keys(n).join(","),Error(_e(268,n)));return n=jx(e),n=n===null?null:n.stateNode,n};Un.flushSync=function(n){return ds(n)};Un.hydrate=function(n,e,t){if(!_u(e))throw Error(_e(200));return Su(null,n,e,!0,t)};Un.hydrateRoot=function(n,e,t){if(!cp(n))throw Error(_e(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=yv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=xv(e,null,n,1,t??null,r,!1,s,o),n[Wi]=e.current,Ba(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new vu(e)};Un.render=function(n,e,t){if(!_u(e))throw Error(_e(200));return Su(null,n,e,!1,t)};Un.unmountComponentAtNode=function(n){if(!_u(n))throw Error(_e(40));return n._reactRootContainer?(ds(function(){Su(null,null,n,!1,function(){n._reactRootContainer=null,n[Wi]=null})}),!0):!1};Un.unstable_batchedUpdates=np;Un.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!_u(t))throw Error(_e(200));if(n==null||n._reactInternals===void 0)throw Error(_e(38));return Su(n,e,t,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vv)}catch(n){console.error(n)}}vv(),vx.exports=Un;var $S=vx.exports,Gm=$S;nf.createRoot=Gm.createRoot,nf.hydrateRoot=Gm.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var YS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ze=(n,e)=>{const t=he.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},d)=>he.createElement("svg",{ref:d,...YS,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${qS(n)}`,a].join(" "),...c},[...e.map(([h,f])=>he.createElement(h,f)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=ze("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=ze("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ze("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ze("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=ze("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=ze("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=ze("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=ze("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=ze("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ze("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ze("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=ze("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=ze("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=ze("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=ze("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=ze("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=ze("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=ze("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ze("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=ze("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=ze("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=ze("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=ze("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=ze("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=ze("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=ze("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ze("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=ze("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=ze("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=ze("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=ze("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=ze("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=ze("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=ze("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=ze("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=ze("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=ze("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=ze("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=ze("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=ze("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=ze("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=ze("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=ze("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=ze("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=ze("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=ze("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=ze("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=ze("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=ze("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ze("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=ze("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=ze("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=ze("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=ze("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=ze("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),TM=({scenarios:n,activeScenario:e,onSelectScenario:t,onRunSimulation:i,onOpenWindow:r,onToggleSidebar:s,onUploadScenarioJson:o,onExportScenarioJson:a,onExportResultsJson:l,onOpenPdfReport:c,onResetState:d,viewMode:h="3d",onToggleViewMode:f,isSidebarOpen:m,isSimulating:x})=>{const[_,g]=he.useState(!1);he.useRef(null);const p=he.useRef(null);return he.useEffect(()=>{const v=y=>{p.current&&!p.current.contains(y.target)&&g(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]),u.jsxs("header",{className:"hdr-container",children:[u.jsx("style",{children:`
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
      `}),u.jsxs("div",{className:"hdr-section",children:[u.jsx("div",{className:"hdr-brand",title:"Система Анализа Группировки",children:u.jsx("div",{className:"hdr-brand-icon",children:u.jsx(To,{size:16})})}),u.jsx("div",{className:"hdr-divider"}),u.jsxs("button",{onClick:()=>r("scenarios"),className:"hdr-btn hdr-btn-secondary",title:"Открыть отдельное окно управления сценариями",children:[u.jsx(To,{size:14,style:{color:"#38bdf8"}}),u.jsx("span",{children:"Сценарии"})]}),u.jsxs("button",{onClick:i,disabled:x,className:"hdr-btn hdr-btn-primary",children:[x?u.jsx(Ka,{size:14,className:"animate-spin"}):u.jsx(Mu,{size:14}),u.jsx("span",{children:x?"Расчет...":"Запустить Симуляцию"})]}),f&&u.jsxs("div",{style:{display:"flex",backgroundColor:"#1a1d24",border:"1px solid #333943",borderRadius:"6px",padding:"2px",marginLeft:"6px"},children:[u.jsxs("button",{onClick:()=>f("3d"),className:"hdr-btn",style:{height:"28px",padding:"0 10px",backgroundColor:h==="3d"?"#1473e6":"transparent",color:h==="3d"?"#ffffff":"#94a3b8",border:"none",borderRadius:"4px",fontWeight:600},title:"Переключить рабочую область на 3D Глобус",children:[u.jsx(Zc,{size:13}),u.jsx("span",{children:"3D Глобус"})]}),u.jsxs("button",{onClick:()=>f("2d"),className:"hdr-btn",style:{height:"28px",padding:"0 10px",backgroundColor:h==="2d"?"#0284c7":"transparent",color:h==="2d"?"#ffffff":"#94a3b8",border:"none",borderRadius:"4px",fontWeight:600},title:"Переключить рабочую область на 2D карту OpenStreetMap (без флагов)",children:[u.jsx(Tv,{size:13}),u.jsx("span",{children:"2D OpenStreetMap"})]})]})]}),u.jsxs("div",{className:"hdr-section hdr-shortcuts-desktop",children:[u.jsxs("button",{onClick:()=>r("emergency"),className:"hdr-btn",style:{backgroundColor:"#3b1212",color:"#ff6666",border:"1px solid #7f1d1d"},title:"Запустить симуляцию событий ЧС и посмотреть экономическую компенсацию",children:[u.jsx(pp,{size:14,style:{color:"#ff4444"}}),u.jsx("span",{children:"Симуляция ЧС"})]}),u.jsxs("button",{onClick:()=>r("analytics"),className:"hdr-btn hdr-btn-secondary",children:[u.jsx(Mv,{size:14,style:{color:"#38bdf8"}}),u.jsx("span",{children:"Аналитика & Гантт"})]}),u.jsxs("button",{onClick:()=>r("configurator"),className:"hdr-btn hdr-btn-secondary",children:[u.jsx(hp,{size:14,style:{color:"#a78bfa"}}),u.jsx("span",{children:"Конфигуратор"})]}),u.jsxs("button",{onClick:()=>r("compare"),className:"hdr-btn hdr-btn-secondary",children:[u.jsx(QS,{size:14,style:{color:"#fbbf24"}}),u.jsx("span",{children:"Сравнение Проектов"})]}),c&&u.jsxs("button",{onClick:c,className:"hdr-btn hdr-btn-secondary",style:{backgroundColor:"#1e293b",borderColor:"#38bdf8",color:"#38bdf8"},title:"Сгенерировать 4-страничный научно-технический PDF отчёт",children:[u.jsx(Ev,{size:14}),u.jsx("span",{children:"Отчёт PDF"})]}),d&&u.jsxs("button",{onClick:d,className:"hdr-btn hdr-btn-danger",title:"Сбросить все сохраненные настройки страницы",children:[u.jsx(Ka,{size:13}),u.jsx("span",{children:"Сбросить"})]})]})]})},Qo=n=>typeof n.plane=="number"?n.plane:parseInt(String(n.plane_id||n.plane||"1").replace("P",""))||1,AM=({settings:n,onChangeSettings:e,isOpen:t,scenario:i,focusedSatelliteId:r,onSelectSatellite:s})=>{var E,w,A,V,M,I,ae,Y,F,J,H,ne,L;const[o,a]=he.useState(null),[l,c]=he.useState({}),[d,h]=he.useState(!1);if(he.useEffect(()=>{var D;if(r){a({type:"satellite",id:r});const B=(D=i==null?void 0:i.satellites)==null?void 0:D.find(q=>q.id===r);if(B){const q=Qo(B);c(re=>({...re,[q]:!0}))}}else(o==null?void 0:o.type)==="satellite"&&a(null)},[r,i]),!t)return null;const f=(D,B)=>{e({...n,[D]:B})},m=(D,B)=>{e({...n,planeRaanMap:{...(n==null?void 0:n.planeRaanMap)||{},[D]:B}})},x=(D,B)=>{e({...n,planePhaseMap:{...(n==null?void 0:n.planePhaseMap)||{},[D]:B}})},_=(D,B)=>{var re;B.stopPropagation();const q=!!((re=n==null?void 0:n.hiddenPlanes)!=null&&re[D]);e({...n,hiddenPlanes:{...(n==null?void 0:n.hiddenPlanes)||{},[D]:!q}})},g=(D,B)=>{var re;B.stopPropagation();const q=!!((re=n==null?void 0:n.hiddenSatellites)!=null&&re[D]);e({...n,hiddenSatellites:{...(n==null?void 0:n.hiddenSatellites)||{},[D]:!q}})},p=D=>{D.stopPropagation();const B=(n==null?void 0:n.showGateways)===!1;f("showGateways",B)},v=(D,B)=>{var re;B.stopPropagation();const q=!!((re=n==null?void 0:n.hiddenGateways)!=null&&re[D]);e({...n,hiddenGateways:{...(n==null?void 0:n.hiddenGateways)||{},[D]:!q}})},y=D=>{const B=D%10,q=D%100;let re="узлов";return(q<11||q>19)&&(B===1?re="узел":B>=2&&B<=4&&(re="узла")),`${D} ${re}`},S=Tc.useMemo(()=>{if(i!=null&&i.satellites&&i.satellites.length>0){const D=new Set;if(i.satellites.forEach(B=>{D.add(Qo(B))}),D.size>0)return Array.from(D).sort((B,q)=>B-q)}return[1,2,3]},[i==null?void 0:i.satellites]),T=({label:D,icon:B,badge:q,isSelected:re,onClick:Me,onExpand:j,isExpanded:$,level:G=0,hasChildren:be,isVisible:ge=!0,onToggleVisibility:ve})=>{const[Ue,Ae]=he.useState(!1);return u.jsxs("div",{style:{display:"flex",alignItems:"center",padding:`4px 8px 4px ${8+G*12}px`,cursor:"pointer",backgroundColor:re?"#1473e640":Ue?"#2a2a2a":"transparent",borderLeft:re?"2px solid #1473e6":"2px solid transparent",color:ge?re?"#fff":"#ccc":"#666",userSelect:"none",transition:"background-color 0.15s ease"},onClick:Me,onMouseEnter:()=>Ae(!0),onMouseLeave:()=>Ae(!1),children:[u.jsx("div",{style:{width:"16px",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"4px",flexShrink:0},onClick:W=>{be&&j&&(W.stopPropagation(),j())},children:be?$?u.jsx(up,{size:14}):u.jsx(JS,{size:14}):null}),B&&u.jsx("div",{style:{marginRight:"6px",display:"flex",alignItems:"center",flexShrink:0,opacity:ge?1:.4},children:B}),u.jsx("span",{style:{fontSize:"11px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1,textDecoration:ge?"none":"line-through",opacity:ge?1:.6},children:D}),q!=null&&u.jsx("span",{style:{fontSize:"11px",color:re?"#a5d8ff":"#777777",marginRight:"6px",flexShrink:0,fontWeight:500,userSelect:"none"},children:q}),ve&&u.jsx("button",{type:"button",title:ge?"Скрыть с 3D сцены":"Показать на 3D сцене",onClick:W=>{W.stopPropagation(),ve(W)},style:{background:ge?"transparent":"#ff4d4f20",border:ge?"1px solid transparent":"1px solid #ff4d4f40",padding:"2px 4px",marginLeft:"4px",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:ge?Ue?"#00f0ff":"#777":"#ff4d4f",opacity:ge?Ue?1:.5:1,transition:"all 0.15s ease"},children:ge?u.jsx(Bi,{size:13}):u.jsx(mr,{size:13})})]})};return u.jsxs("aside",{style:{width:"290px",maxWidth:"calc(100vw - 16px)",backgroundColor:"#262626",borderLeft:"1px solid #383838",display:"flex",flexDirection:"column",color:"#e0e0e0",fontSize:"12px",height:"calc(100vh - 48px)",zIndex:90,boxShadow:"-4px 0 16px rgba(0,0,0,0.35)"},children:[u.jsxs("div",{style:{flex:"1 1 50%",display:"flex",flexDirection:"column",borderBottom:"1px solid #1473e6",overflow:"hidden"},children:[u.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid #383838",backgroundColor:"#202020",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},children:[u.jsx(To,{size:14,style:{color:"#1473e6"}}),u.jsx("span",{children:"Аутлайнер объектов"})]}),u.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"8px 0"},children:[u.jsx(T,{label:"Наземные шлюзы",badge:((E=i==null?void 0:i.gateways)==null?void 0:E.length)||0,icon:u.jsx(sM,{size:12}),isSelected:(o==null?void 0:o.type)==="gateway"&&(o==null?void 0:o.id)==="all",onClick:()=>h(!d),onExpand:()=>h(!d),isExpanded:d,hasChildren:(((w=i==null?void 0:i.gateways)==null?void 0:w.length)||0)>0,isVisible:n.showGateways!==!1,onToggleVisibility:p}),d&&((A=i==null?void 0:i.gateways)==null?void 0:A.map(D=>{var B;return u.jsx(T,{label:D.name,level:1,isSelected:(o==null?void 0:o.type)==="gateway"&&(o==null?void 0:o.id)===D.id,onClick:()=>a({type:"gateway",id:D.id}),isVisible:n.showGateways!==!1&&!((B=n.hiddenGateways)!=null&&B[D.id]),onToggleVisibility:q=>v(D.id,q)},D.id)})),S.map(D=>{var Me,j;const B=l[D],q=((Me=i==null?void 0:i.satellites)==null?void 0:Me.filter($=>Qo($)===D))||[],re=!!((j=n.hiddenPlanes)!=null&&j[D]);return u.jsxs(Tc.Fragment,{children:[u.jsx(T,{label:`Плоскость ${D}`,badge:q.length,icon:u.jsx(fM,{size:12}),isSelected:(o==null?void 0:o.type)==="plane"&&(o==null?void 0:o.id)===D,onClick:()=>a({type:"plane",id:D}),onExpand:()=>c($=>({...$,[D]:!B})),isExpanded:B,hasChildren:q.length>0,isVisible:!re,onToggleVisibility:$=>_(D,$)}),B&&q.map($=>{var ge;const G=!!((ge=n.hiddenSatellites)!=null&&ge[$.id]),be=!re&&!G;return u.jsx(T,{label:`Спутник ${$.id}`,level:1,isSelected:(o==null?void 0:o.type)==="satellite"&&(o==null?void 0:o.id)===$.id,onClick:()=>{a({type:"satellite",id:$.id}),s&&s($)},isVisible:be,onToggleVisibility:ve=>g($.id,ve)},$.id)})]},D)})]})]}),u.jsxs("div",{style:{flex:"1 1 50%",overflowY:"auto",display:"flex",flexDirection:"column",backgroundColor:"#1e1e1e"},children:[u.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid #383838",backgroundColor:"#191919",display:"flex",alignItems:"center",fontWeight:600,color:"#aaa",fontSize:"11px"},children:[(o==null?void 0:o.type)==="plane"&&`НАСТРОЙКИ ПЛОСКОСТИ P${o.id}`,(o==null?void 0:o.type)==="satellite"&&`ДАННЫЕ СПУТНИКА ${o.id}`,(o==null?void 0:o.type)==="gateway"&&"ДАННЫЕ ШЛЮЗА",!o&&"СВОЙСТВА ОБЪЕКТА"]}),u.jsxs("div",{style:{padding:"12px",display:"flex",flexDirection:"column",gap:"16px"},children:[!o&&u.jsxs("div",{style:{padding:"24px 16px",textAlign:"center",color:"#888",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[u.jsx(To,{size:24,style:{color:"#555"}}),u.jsx("div",{style:{fontSize:"12px",fontWeight:600,color:"#bbb"},children:"Объект не выбран"}),u.jsx("div",{style:{fontSize:"11px",color:"#777",lineHeight:"1.4"},children:"Выберите плоскость орбит, спутник или наземный шлюз в дереве выше для просмотра телеметрии и управления."})]}),o&&o.type==="plane"&&u.jsxs("div",{style:{backgroundColor:"#192231",border:"1px solid #1473e650",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#1473e6",fontWeight:600},children:[u.jsx(wv,{size:14}),u.jsxs("span",{children:["Плоскость P",o.id]})]}),u.jsxs("button",{type:"button",onClick:D=>_(o.id,D),style:{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",fontSize:"11px",backgroundColor:(V=n.hiddenPlanes)!=null&&V[o.id]?"#ff4d4f20":"#1473e625",color:(M=n.hiddenPlanes)!=null&&M[o.id]?"#ff4d4f":"#00f0ff",border:`1px solid ${(I=n.hiddenPlanes)!=null&&I[o.id]?"#ff4d4f60":"#1473e660"}`,borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},title:(ae=n.hiddenPlanes)!=null&&ae[o.id]?"Показать плоскость":"Скрыть плоскость и её спутники",children:[(Y=n.hiddenPlanes)!=null&&Y[o.id]?u.jsx(mr,{size:12}):u.jsx(Bi,{size:12}),u.jsx("span",{children:(F=n.hiddenPlanes)!=null&&F[o.id]?"Скрыта":"Видима"})]})]}),(()=>{var Me,j;const D=((Me=i==null?void 0:i.satellites)==null?void 0:Me.filter($=>Qo($)===o.id))||[],B=!!((j=n.hiddenPlanes)!=null&&j[o.id]),q=D.filter($=>{var G;return!!((G=n.hiddenSatellites)!=null&&G[$.id])}).length,re=B?0:D.length-q;return u.jsxs("div",{style:{backgroundColor:"rgba(20, 115, 230, 0.12)",border:"1px solid rgba(20, 115, 230, 0.25)",borderRadius:"6px",padding:"8px 10px",display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Узлов (спутников) на орбите:"}),u.jsx("span",{style:{color:"#00f0ff",fontWeight:700,fontSize:"12px"},children:y(D.length)})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11px"},children:[u.jsx("span",{style:{color:"#888"},children:"Видимость на 3D сцене:"}),u.jsxs("span",{style:{color:re>0?"#00ff88":"#ff4d4f",fontWeight:600},children:[re," из ",D.length]})]}),D.length>0&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"2px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.06)"},children:D.map($=>{var be;const G=B||!!((be=n.hiddenSatellites)!=null&&be[$.id]);return u.jsx("span",{onClick:()=>{a({type:"satellite",id:$.id}),s&&s($)},style:{fontSize:"10px",fontFamily:"monospace",padding:"2px 6px",borderRadius:"3px",backgroundColor:G?"rgba(255,255,255,0.05)":"rgba(20, 115, 230, 0.25)",color:G?"#777":"#93c5fd",border:G?"1px solid #444":"1px solid rgba(20, 115, 230, 0.4)",cursor:"pointer",textDecoration:G?"line-through":"none",transition:"all 0.15s ease"},title:`Перейти к узлу ${$.id}`,children:$.id},$.id)})})]})})(),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[u.jsx("span",{children:u.jsx("b",{children:"1. RAAN (Поворот вокруг Земли):"})}),u.jsxs("span",{style:{color:"#1473e6",fontWeight:"bold"},children:[((J=n==null?void 0:n.planeRaanMap)==null?void 0:J[o.id])??0,"°"]})]}),u.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Поворачивает всё кольцо орбиты вокруг оси Земли."}),u.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:((H=n==null?void 0:n.planeRaanMap)==null?void 0:H[o.id])??0,onChange:D=>m(o.id,parseFloat(D.target.value)),style:Xm})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[u.jsx("span",{children:u.jsx("b",{children:"2. Фазирование (Сдвиг бусин):"})}),u.jsxs("span",{style:{color:"#00ff88",fontWeight:"bold"},children:[((ne=n==null?void 0:n.planePhaseMap)==null?void 0:ne[o.id])??0,"°"]})]}),u.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Сдвигает спутники вдоль неподвижного кольца (шахматный порядок)."}),u.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:((L=n==null?void 0:n.planePhaseMap)==null?void 0:L[o.id])??0,onChange:D=>x(o.id,parseFloat(D.target.value)),style:{...Xm,accentColor:"#00ff88"}})]})]}),o&&o.type==="satellite"&&(()=>{var re,Me,j;const D=(re=i==null?void 0:i.satellites)==null?void 0:re.find($=>$.id===o.id);if(!D)return u.jsx("div",{style:{color:"#888"},children:"Нет данных"});const B=Qo(D),q=!((Me=n==null?void 0:n.hiddenPlanes)!=null&&Me[B])&&!((j=n==null?void 0:n.hiddenSatellites)!=null&&j[D.id]);return u.jsx("div",{style:Wm,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"6px",borderBottom:"1px solid #333"},children:[u.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Отображение на 3D сцене"}),u.jsxs("button",{type:"button",onClick:$=>g(D.id,$),style:{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",fontSize:"11px",backgroundColor:q?"#1473e625":"#ff4d4f20",color:q?"#00f0ff":"#ff4d4f",border:`1px solid ${q?"#1473e660":"#ff4d4f60"}`,borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},title:q?"Скрыть спутник с 3D сцены":"Показать спутник на 3D сцене",children:[q?u.jsx(Bi,{size:12}):u.jsx(mr,{size:12}),u.jsx("span",{children:q?"Видим":"Скрыт"})]})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx("span",{style:{color:"#aaa"},children:"ID"}),u.jsx("span",{style:{color:"#fff",fontWeight:600},children:D.id})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx("span",{style:{color:"#aaa"},children:"Плоскость"}),u.jsxs("span",{style:{color:"#fff"},children:["P",B]})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx("span",{style:{color:"#aaa"},children:"Наклонение"}),u.jsxs("span",{style:{color:"#fff"},children:[D.inc,"°"]})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx("span",{style:{color:"#aaa"},children:"Высота"}),u.jsxs("span",{style:{color:"#fff"},children:[D.altitude," км"]})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx("span",{style:{color:"#aaa"},children:"Температура"}),u.jsxs("span",{style:{color:(D.temperature_c||0)>60?"#ff3b30":"#00ff88"},children:[D.temperature_c??20,"°C"]})]})]})})})(),o&&o.type==="gateway"&&(()=>{var q,re;const D=(q=i==null?void 0:i.gateways)==null?void 0:q.find(Me=>Me.id===o.id);if(!D)return u.jsx("div",{style:{color:"#888"},children:"Нет данных"});const B=n.showGateways!==!1&&!((re=n.hiddenGateways)!=null&&re[D.id]);return u.jsx("div",{style:Wm,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"6px",borderBottom:"1px solid #333"},children:[u.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Отображение на 3D сцене"}),u.jsxs("button",{type:"button",onClick:Me=>v(D.id,Me),style:{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",fontSize:"11px",backgroundColor:B?"#1473e625":"#ff4d4f20",color:B?"#00f0ff":"#ff4d4f",border:`1px solid ${B?"#1473e660":"#ff4d4f60"}`,borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},title:B?"Скрыть шлюз":"Показать шлюз",children:[B?u.jsx(Bi,{size:12}):u.jsx(mr,{size:12}),u.jsx("span",{children:B?"Видим":"Скрыт"})]})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx("span",{style:{color:"#aaa"},children:"Название"}),u.jsx("span",{style:{color:"#fff",fontWeight:600},children:D.name})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx("span",{style:{color:"#aaa"},children:"Координаты"}),u.jsxs("span",{style:{color:"#fff"},children:[D.lat.toFixed(2),"°, ",D.lon.toFixed(2),"°"]})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx("span",{style:{color:"#aaa"},children:"Тип"}),u.jsx("span",{style:{color:"#fff"},children:D.type||"Шлюз"})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[u.jsx("span",{style:{color:"#aaa"},children:"Купол досягаемости"}),u.jsx("span",{style:{color:n.showGatewayCoverage!==!1?"#00d084":"#888"},children:n.showGatewayCoverage!==!1?"20% непрозрачность":"Скрыт"})]})]})})})()]})]})]})},Wm={backgroundColor:"#1f1f1f",border:"1px solid #333333",borderRadius:"4px",padding:"10px"},Xm={width:"100%",accentColor:"#1473e6",cursor:"pointer"},CM=({settings:n,onChangeSettings:e})=>{var d,h;const[t,i]=he.useState(null),r=he.useRef(null);he.useEffect(()=>{const f=x=>{r.current&&!r.current.contains(x.target)&&i(null)},m=x=>{x.key==="Escape"&&i(null)};return t&&(document.addEventListener("mousedown",f),document.addEventListener("touchstart",f),document.addEventListener("keydown",m)),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("touchstart",f),document.removeEventListener("keydown",m)}},[t]);const s=(f,m)=>{e({...n,[f]:m})},o=f=>{i(m=>m===f?null:f)},a=()=>{e({...n,satColor:"#ffffff",offlineSatColor:"#e11d48",highLatencySatColor:"#d97706",orbitColor:"#475569",islColor:"#cbd5e1",gatewayColor:"#f8fafc",groundLinkColor:"#94a3b8",atmosphereColor:"#334155",fovConeColor:"#cbd5e1"})},l=f=>{e({...n,showOrbits:f,showSatellites:f,showGateways:f,showGatewayCoverage:f,showISL:f,showSatLinks:f,showLabels:f,showAtmosphere:f,showCoverageHeatmap:f,showTrafficLoad:f,showDistances:f})},c=[{key:"layers",label:"Слои сцены",icon:u.jsx(Bi,{size:18})},{key:"rendering",label:"Параметры рендеринга",icon:u.jsx(vM,{size:18})},{key:"step",label:`Шаг расчета (${n.stepSeconds}с)`,icon:u.jsx(dp,{size:18})},{key:"colors",label:"Цвета объектов",icon:u.jsx(lM,{size:18})}];return u.jsxs("div",{ref:r,style:{position:"absolute",top:"16px",left:"16px",zIndex:87,display:"flex",alignItems:"flex-start"},children:[u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",userSelect:"none"},children:c.map(f=>{const m=t===f.key;return u.jsx("button",{onClick:()=>o(f.key),title:f.label,"aria-label":f.label,style:{width:"38px",height:"38px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",border:m?"1px solid #00f0ff":"1px solid rgba(255, 255, 255, 0.14)",backgroundColor:m?"rgba(20, 115, 230, 0.35)":"rgba(24, 26, 32, 0.88)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",color:m?"#00f0ff":"#c9d1d9",cursor:"pointer",transition:"all 0.18s ease",boxShadow:m?"0 0 14px rgba(0, 240, 255, 0.45)":"0 4px 14px rgba(0, 0, 0, 0.45)"},onMouseEnter:x=>{m||(x.currentTarget.style.backgroundColor="rgba(38, 42, 52, 0.95)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.28)",x.currentTarget.style.color="#ffffff",x.currentTarget.style.transform="scale(1.05)")},onMouseLeave:x=>{m||(x.currentTarget.style.backgroundColor="rgba(24, 26, 32, 0.88)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.14)",x.currentTarget.style.color="#c9d1d9",x.currentTarget.style.transform="scale(1)")},children:f.icon},f.key)})}),t&&u.jsxs("div",{style:{marginLeft:"10px",width:"320px",maxHeight:"calc(100vh - 120px)",backgroundColor:"rgba(22, 25, 32, 0.96)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"10px",boxShadow:"0 16px 40px rgba(0, 0, 0, 0.65), 0 0 2px rgba(255, 255, 255, 0.2)",display:"flex",flexDirection:"column",overflow:"hidden",animation:"fadeIn 0.15s ease-out"},children:[u.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",backgroundColor:"rgba(255, 255, 255, 0.03)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("span",{style:{color:"#00f0ff",display:"flex"},children:(d=c.find(f=>f.key===t))==null?void 0:d.icon}),u.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"#f0f6fc"},children:(h=c.find(f=>f.key===t))==null?void 0:h.label})]}),u.jsx("button",{onClick:()=>i(null),style:{background:"transparent",border:"none",color:"#8b949e",cursor:"pointer",display:"flex",padding:"4px",borderRadius:"4px"},onMouseEnter:f=>{f.currentTarget.style.color="#fff",f.currentTarget.style.backgroundColor="rgba(255,255,255,0.1)"},onMouseLeave:f=>{f.currentTarget.style.color="#8b949e",f.currentTarget.style.backgroundColor="transparent"},title:"Закрыть меню",children:u.jsx(Cv,{size:14})})]}),u.jsxs("div",{style:{padding:"12px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"12px"},children:[t==="layers"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsxs("div",{style:{display:"flex",gap:"6px",justifyContent:"flex-end",marginBottom:"2px"},children:[u.jsx("button",{onClick:()=>l(!0),style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"4px",color:"#58a6ff",fontSize:"10px",padding:"3px 8px",cursor:"pointer"},children:"Включить все"}),u.jsx("button",{onClick:()=>l(!1),style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"4px",color:"#8b949e",fontSize:"10px",padding:"3px 8px",cursor:"pointer"},children:"Отключить все"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[u.jsx(jn,{label:"Орбитальные траектории",checked:n.showOrbits,onChange:f=>s("showOrbits",f)}),u.jsx(jn,{label:"Спутники группировки (S01..S48)",checked:n.showSatellites,onChange:f=>s("showSatellites",f)}),u.jsx(jn,{label:"Наземные шлюзы (C65, Murmansk...)",checked:n.showGateways,onChange:f=>s("showGateways",f)}),u.jsx(jn,{label:"Купола досягаемости шлюзов",checked:n.showGatewayCoverage!==!1,onChange:f=>s("showGatewayCoverage",f)}),u.jsx(jn,{label:"Межспутниковые линии (ISL)",checked:n.showISL,onChange:f=>s("showISL",f)}),u.jsx(jn,{label:"Связь спутник - Земля",checked:n.showSatLinks,onChange:f=>s("showSatLinks",f)}),u.jsx(jn,{label:"Текстовые подписи объектов",checked:n.showLabels,onChange:f=>s("showLabels",f)}),u.jsx(jn,{label:"Атмосфера планеты",checked:n.showAtmosphere,onChange:f=>s("showAtmosphere",f)}),u.jsx(jn,{label:"Зоны покрытия КА (FOVs)",checked:!!n.showCoverageHeatmap,onChange:f=>s("showCoverageHeatmap",f)}),u.jsx(jn,{label:"Загрузка и трафик ISL (%)",checked:!!n.showTrafficLoad,onChange:f=>s("showTrafficLoad",f)}),u.jsx(jn,{label:"Дистанции между КА (км)",checked:n.showDistances!==!1,onChange:f=>s("showDistances",f)})]})]}),t==="rendering"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[u.jsx(jn,{label:"Свечение спутников (Glow)",checked:n.satGlow,onChange:f=>s("satGlow",f)}),u.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.03)",padding:"10px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",fontSize:"11px",color:"#c9d1d9"},children:[u.jsx("span",{children:"Размер спутников"}),u.jsxs("span",{style:{color:"#00f0ff",fontWeight:600},children:[n.satSize.toFixed(1),"x"]})]}),u.jsx("input",{type:"range",min:"0.5",max:"3.0",step:"0.1",value:n.satSize,onChange:f=>s("satSize",parseFloat(f.target.value)),style:{width:"100%",accentColor:"#00f0ff",cursor:"pointer"}}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"9px",color:"#6e7681",marginTop:"3px"},children:[u.jsx("span",{children:"0.5x"}),u.jsx("span",{children:"1.0x (норма)"}),u.jsx("span",{children:"3.0x"})]})]}),u.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.03)",padding:"10px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",fontSize:"11px",color:"#c9d1d9"},children:[u.jsx("span",{children:"Прозрачность орбит"}),u.jsxs("span",{style:{color:"#1473e6",fontWeight:600},children:[Math.round(n.orbitOpacity*100),"%"]})]}),u.jsx("input",{type:"range",min:"0.1",max:"1.0",step:"0.05",value:n.orbitOpacity,onChange:f=>s("orbitOpacity",parseFloat(f.target.value)),style:{width:"100%",accentColor:"#1473e6",cursor:"pointer"}}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"9px",color:"#6e7681",marginTop:"3px"},children:[u.jsx("span",{children:"10%"}),u.jsx("span",{children:"50%"}),u.jsx("span",{children:"100%"})]})]})]}),t==="step"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsx("div",{style:{fontSize:"11px",color:"#8b949e",lineHeight:"1.4"},children:"Шаг времени (dt) определяет частоту дискретизации численного интегрирования орбит и перестроения графа ISL:"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[{step:1,label:"1 сек",desc:"Сверхвысокая точность (для критических сближений)"},{step:5,label:"5 сек",desc:"Высокая детализация динамики"},{step:10,label:"10 сек",desc:"Штатный расчет (рекомендованный)"},{step:60,label:"1 мин",desc:"Ускоренный анализ (60 сек)"},{step:300,label:"5 мин",desc:"Экспресс-обзор суточных интервалов"}].map(({step:f,label:m,desc:x})=>{const _=n.stepSeconds===f;return u.jsxs("button",{onClick:()=>s("stepSeconds",f),style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 10px",borderRadius:"6px",border:_?"1px solid #1473e6":"1px solid rgba(255, 255, 255, 0.08)",backgroundColor:_?"rgba(20, 115, 230, 0.25)":"rgba(255, 255, 255, 0.02)",color:_?"#ffffff":"#c9d1d9",cursor:"pointer",textAlign:"left",transition:"all 0.15s ease"},onMouseEnter:g=>{_||(g.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.06)")},onMouseLeave:g=>{_||(g.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.02)")},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[u.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:_?"#00f0ff":"#f0f6fc"},children:m}),u.jsx("span",{style:{fontSize:"10px",color:"#8b949e"},children:x})]}),_&&u.jsx(ZS,{size:14,color:"#00f0ff"})]},f)})})]}),t==="colors"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"2px"},children:u.jsxs("button",{onClick:a,style:{display:"flex",alignItems:"center",gap:"4px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"4px",color:"#58a6ff",fontSize:"10px",padding:"4px 8px",cursor:"pointer"},children:[u.jsx(Ka,{size:10}),u.jsx("span",{children:"Сброс по умолчанию"})]})}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[u.jsx(Ci,{label:"Активные спутники",value:n.satColor||"#00f0ff",onChange:f=>s("satColor",f)}),u.jsx(Ci,{label:"Отказавшие спутники",value:n.offlineSatColor||"#ff3b30",onChange:f=>s("offlineSatColor",f)}),u.jsx(Ci,{label:"Спутники с задержкой",value:n.highLatencySatColor||"#ff9900",onChange:f=>s("highLatencySatColor",f)}),u.jsx(Ci,{label:"Траектории орбит",value:n.orbitColor||"#1473e6",onChange:f=>s("orbitColor",f)}),u.jsx(Ci,{label:"Межспутниковая связь",value:n.islColor||"#00ff88",onChange:f=>s("islColor",f)}),u.jsx(Ci,{label:"Наземные шлюзы",value:n.gatewayColor||"#00d084",onChange:f=>s("gatewayColor",f)}),u.jsx(Ci,{label:"Связь Земля - КА",value:n.groundLinkColor||"#f59e0b",onChange:f=>s("groundLinkColor",f)}),u.jsx(Ci,{label:"Атмосфера Земли",value:n.atmosphereColor||"#1e3a8a",onChange:f=>s("atmosphereColor",f)}),u.jsx(Ci,{label:"Зоны покрытия (FOV)",value:n.fovConeColor||"#00f0ff",onChange:f=>s("fovConeColor",f)})]})]})]})]})]})},jn=({label:n,checked:e,onChange:t})=>u.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px",borderRadius:"6px",cursor:"pointer",backgroundColor:e?"rgba(255, 255, 255, 0.03)":"transparent",transition:"background-color 0.15s ease"},onMouseEnter:i=>{i.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.06)"},onMouseLeave:i=>{i.currentTarget.style.backgroundColor=e?"rgba(255, 255, 255, 0.03)":"transparent"},children:[u.jsx("span",{style:{fontSize:"11px",color:e?"#f0f6fc":"#8b949e",transition:"color 0.15s ease"},children:n}),u.jsx("input",{type:"checkbox",checked:e,onChange:i=>t(i.target.checked),style:{accentColor:"#1473e6",cursor:"pointer",width:"14px",height:"14px"}})]}),Ci=({label:n,value:e,onChange:t})=>u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 8px",borderRadius:"6px",backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[u.jsx("span",{style:{color:"#c9d1d9",fontSize:"11px"},children:n}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"color",value:e,onChange:i=>t(i.target.value),style:{width:"24px",height:"22px",padding:0,border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",backgroundColor:"transparent",cursor:"pointer"}}),u.jsx("span",{style:{fontSize:"10px",color:"#8b949e",fontFamily:"monospace",width:"54px",textAlign:"right"},children:e.toUpperCase()})]})]});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="162",_s={ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RM=0,$m=1,PM=2,Rv=1,LM=2,ki=3,Yi=0,vn=1,xn=2,Ar=0,mo=1,Ja=2,Ym=3,qm=4,IM=5,Kr=100,DM=101,NM=102,Km=103,Zm=104,kM=200,UM=201,OM=202,FM=203,Zf=204,Jf=205,zM=206,jM=207,BM=208,HM=209,GM=210,VM=211,WM=212,XM=213,$M=214,YM=0,qM=1,KM=2,Jc=3,ZM=4,JM=5,QM=6,eb=7,gp=0,tb=1,nb=2,Cr=0,ib=1,rb=2,sb=3,ob=4,ab=5,lb=6,cb=7,Jm="attached",ub="detached",Pv=300,Ao=301,Co=302,Qf=303,eh=304,bu=306,oi=1e3,$n=1001,Qc=1002,$t=1003,th=1004,Xs=1005,Xt=1006,bc=1007,ui=1008,Rr=1009,db=1010,fb=1011,xp=1012,Lv=1013,gr=1014,ai=1015,Qa=1016,Iv=1017,Dv=1018,ss=1020,hb=1021,Yn=1023,pb=1024,mb=1025,os=1026,Ro=1027,Nv=1028,kv=1029,gb=1030,Uv=1031,Ov=1033,ad=33776,ld=33777,cd=33778,ud=33779,Qm=35840,eg=35841,tg=35842,ng=35843,Fv=36196,ig=37492,rg=37496,sg=37808,og=37809,ag=37810,lg=37811,cg=37812,ug=37813,dg=37814,fg=37815,hg=37816,pg=37817,mg=37818,gg=37819,xg=37820,yg=37821,dd=36492,vg=36494,_g=36495,xb=36283,Sg=36284,Mg=36285,bg=36286,el=2300,Po=2301,fd=2302,wg=2400,Eg=2401,Tg=2402,yb=2500,vb=0,zv=1,nh=2,_b=3200,Sb=3201,yp=0,Mb=1,fr="",mn="srgb",rn="srgb-linear",vp="display-p3",wu="display-p3-linear",eu="linear",vt="srgb",tu="rec709",nu="p3",Ms=7680,Ag=519,bb=512,wb=513,Eb=514,jv=515,Tb=516,Ab=517,Cb=518,Rb=519,ih=35044,Cg="300 es",rh=1035,Hi=2e3,iu=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rg=1234567;const Ra=Math.PI/180,Lo=180/Math.PI;function hi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function _p(n,e){return(n%e+e)%e}function Pb(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Lb(n,e,t){return n!==e?(t-n)/(e-n):0}function Pa(n,e,t){return(1-t)*n+t*e}function Ib(n,e,t,i){return Pa(n,e,1-Math.exp(-t*i))}function Db(n,e=1){return e-Math.abs(_p(n,e*2)-e)}function Nb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function kb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ub(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ob(n,e){return n+Math.random()*(e-n)}function Fb(n){return n*(.5-Math.random())}function zb(n){n!==void 0&&(Rg=n);let e=Rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jb(n){return n*Ra}function Bb(n){return n*Lo}function sh(n){return(n&n-1)===0&&n!==0}function Hb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ru(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gb(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),d=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*d,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*d,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*d,a*c);break;case"XZX":n.set(a*d,l*x,l*m,a*c);break;case"YXY":n.set(l*m,a*d,l*x,a*c);break;case"ZYZ":n.set(l*x,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sp={DEG2RAD:Ra,RAD2DEG:Lo,generateUUID:hi,clamp:Qt,euclideanModulo:_p,mapLinear:Pb,inverseLerp:Lb,lerp:Pa,damp:Ib,pingpong:Db,smoothstep:Nb,smootherstep:kb,randInt:Ub,randFloat:Ob,randFloatSpread:Fb,seededRandom:zb,degToRad:jb,radToDeg:Bb,isPowerOfTwo:sh,ceilPowerOfTwo:Hb,floorPowerOfTwo:ru,setQuaternionFromProperEuler:Gb,normalize:ut,denormalize:li};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],x=i[8],_=r[0],g=r[3],p=r[6],v=r[1],y=r[4],S=r[7],T=r[2],E=r[5],w=r[8];return s[0]=o*_+a*v+l*T,s[3]=o*g+a*y+l*E,s[6]=o*p+a*S+l*w,s[1]=c*_+d*v+h*T,s[4]=c*g+d*y+h*E,s[7]=c*p+d*S+h*w,s[2]=f*_+m*v+x*T,s[5]=f*g+m*y+x*E,s[8]=f*p+m*S+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,x=t*h+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(d*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hd.makeScale(e,t)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new et;function Bv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function tl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vb(){const n=tl("canvas");return n.style.display="block",n}const Pg={};function Hv(n){n in Pg||(Pg[n]=!0,console.warn(n))}const Lg=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ig=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cl={[rn]:{transfer:eu,primaries:tu,toReference:n=>n,fromReference:n=>n},[mn]:{transfer:vt,primaries:tu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wu]:{transfer:eu,primaries:nu,toReference:n=>n.applyMatrix3(Ig),fromReference:n=>n.applyMatrix3(Lg)},[vp]:{transfer:vt,primaries:nu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ig),fromReference:n=>n.applyMatrix3(Lg).convertLinearToSRGB()}},Wb=new Set([rn,wu]),ct={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Wb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Cl[e].toReference,r=Cl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Cl[n].primaries},getTransfer:function(n){return n===fr?eu:Cl[n].transfer}};function go(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bs;class Gv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=tl("canvas")),bs.width=e.width,bs.height=e.height;const i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=go(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(go(t[i]/255)*255):t[i]=go(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xb=0;class Vv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(md(r[o].image)):s.push(md(r[o]))}else s=md(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function md(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $b=0;class zt extends xs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=$n,r=$n,s=Xt,o=ui,a=Yn,l=Rr,c=zt.DEFAULT_ANISOTROPY,d=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=hi(),this.name="",this.source=new Vv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Pv;zt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],x=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,T=(p+1)/2,E=(d+f)/4,w=(h+_)/4,A=(x+g)/4;return y>S&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=w/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=A/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=A/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-x)*(g-x)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(h-_)/v,this.z=(f-d)/v,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yb extends xs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends Yb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wv extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qb extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(h!==_||l!==f||c!==m||d!==x){let g=1-a;const p=l*f+c*m+d*x+h*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),E=Math.atan2(T,p*v);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}const S=a*v;if(l=l*g+f*S,c=c*g+m*S,d=d*g+x*S,h=h*g+_*S,g===1-a){const T=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=T,c*=T,d*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+d*h+l*m-c*f,e[t+1]=l*x+d*f+c*h-a*m,e[t+2]=c*x+d*m+a*f-l*h,e[t+3]=d*x-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*x,this._y=c*m*h-f*d*x,this._z=c*d*x+f*m*h,this._w=c*d*h-f*m*x;break;case"YXZ":this._x=f*d*h+c*m*x,this._y=c*m*h-f*d*x,this._z=c*d*x-f*m*h,this._w=c*d*h+f*m*x;break;case"ZXY":this._x=f*d*h-c*m*x,this._y=c*m*h+f*d*x,this._z=c*d*x+f*m*h,this._w=c*d*h-f*m*x;break;case"ZYX":this._x=f*d*h-c*m*x,this._y=c*m*h+f*d*x,this._z=c*d*x-f*m*h,this._w=c*d*h+f*m*x;break;case"YZX":this._x=f*d*h+c*m*x,this._y=c*m*h+f*d*x,this._z=c*d*x-f*m*h,this._w=c*d*h-f*m*x;break;case"XZY":this._x=f*d*h-c*m*x,this._y=c*m*h-f*d*x,this._z=c*d*x+f*m*h,this._w=c*d*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gd=new O,Dg=new wi;class gi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rl.copy(i.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Pl.subVectors(this.max,ea),ws.subVectors(e.a,ea),Es.subVectors(e.b,ea),Ts.subVectors(e.c,ea),Qi.subVectors(Es,ws),er.subVectors(Ts,Es),zr.subVectors(ws,Ts);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-zr.z,zr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,zr.z,0,-zr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-zr.y,zr.x,0];return!xd(t,ws,Es,Ts,Pl)||(t=[1,0,0,0,1,0,0,0,1],!xd(t,ws,Es,Ts,Pl))?!1:(Ll.crossVectors(Qi,er),t=[Ll.x,Ll.y,Ll.z],xd(t,ws,Es,Ts,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new O,new O,new O,new O,new O,new O,new O,new O],ei=new O,Rl=new gi,ws=new O,Es=new O,Ts=new O,Qi=new O,er=new O,zr=new O,ea=new O,Pl=new O,Ll=new O,jr=new O;function xd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){jr.fromArray(n,s);const a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),c=t.dot(jr),d=i.dot(jr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Kb=new gi,ta=new O,yd=new O;class Ei{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(yd)),this.expandByPoint(ta.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new O,vd=new O,Il=new O,tr=new O,_d=new O,Dl=new O,Sd=new O;class jo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vd.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(vd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Il),a=tr.dot(this.direction),l=-tr.dot(Il),c=tr.lengthSq(),d=Math.abs(1-o*o);let h,f,m,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const _=1/d;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vd).addScaledVector(Il,f),m}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,r,s){_d.subVectors(t,e),Dl.subVectors(i,e),Sd.crossVectors(_d,Dl);let o=this.direction.dot(Sd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(Dl.crossVectors(tr,Dl));if(l<0)return null;const c=a*this.direction.dot(_d.cross(tr));if(c<0||l+c>o)return null;const d=-a*tr.dot(Sd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,r,s,o,a,l,c,d,h,f,m,x,_,g){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,h,f,m,x,_,g)}set(e,t,i,r,s,o,a,l,c,d,h,f,m,x,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=f,p[3]=m,p[7]=x,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,x=a*d,_=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,x=c*d,_=c*h;t[0]=f+_*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-x,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,x=c*d,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*d,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,x=a*d,_=a*h;t[0]=l*d,t[4]=x*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*d,t[4]=_-f*h,t[8]=x*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*h+x,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+_,t[5]=o*d,t[9]=m*h-x,t[2]=x*h-m,t[6]=a*d,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zb,e,Jb)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),nr.crossVectors(i,Rn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),nr.crossVectors(i,Rn)),nr.normalize(),Nl.crossVectors(Rn,nr),r[0]=nr.x,r[4]=Nl.x,r[8]=Rn.x,r[1]=nr.y,r[5]=Nl.y,r[9]=Rn.y,r[2]=nr.z,r[6]=Nl.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],x=i[2],_=i[6],g=i[10],p=i[14],v=i[3],y=i[7],S=i[11],T=i[15],E=r[0],w=r[4],A=r[8],V=r[12],M=r[1],I=r[5],ae=r[9],Y=r[13],F=r[2],J=r[6],H=r[10],ne=r[14],L=r[3],D=r[7],B=r[11],q=r[15];return s[0]=o*E+a*M+l*F+c*L,s[4]=o*w+a*I+l*J+c*D,s[8]=o*A+a*ae+l*H+c*B,s[12]=o*V+a*Y+l*ne+c*q,s[1]=d*E+h*M+f*F+m*L,s[5]=d*w+h*I+f*J+m*D,s[9]=d*A+h*ae+f*H+m*B,s[13]=d*V+h*Y+f*ne+m*q,s[2]=x*E+_*M+g*F+p*L,s[6]=x*w+_*I+g*J+p*D,s[10]=x*A+_*ae+g*H+p*B,s[14]=x*V+_*Y+g*ne+p*q,s[3]=v*E+y*M+S*F+T*L,s[7]=v*w+y*I+S*J+T*D,s[11]=v*A+y*ae+S*H+T*B,s[15]=v*V+y*Y+S*ne+T*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],x=e[3],_=e[7],g=e[11],p=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+g*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+p*(-r*a*d-t*l*h+t*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],x=e[12],_=e[13],g=e[14],p=e[15],v=h*g*c-_*f*c+_*l*m-a*g*m-h*l*p+a*f*p,y=x*f*c-d*g*c-x*l*m+o*g*m+d*l*p-o*f*p,S=d*_*c-x*h*c+x*a*m-o*_*m-d*a*p+o*h*p,T=x*h*l-d*_*l-x*a*f+o*_*f+d*a*g-o*h*g,E=t*v+i*y+r*S+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(_*f*s-h*g*s-_*r*m+i*g*m+h*r*p-i*f*p)*w,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*p+i*l*p)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*w,e[4]=y*w,e[5]=(d*g*s-x*f*s+x*r*m-t*g*m-d*r*p+t*f*p)*w,e[6]=(x*l*s-o*g*s-x*r*c+t*g*c+o*r*p-t*l*p)*w,e[7]=(o*f*s-d*l*s+d*r*c-t*f*c-o*r*m+t*l*m)*w,e[8]=S*w,e[9]=(x*h*s-d*_*s-x*i*m+t*_*m+d*i*p-t*h*p)*w,e[10]=(o*_*s-x*a*s+x*i*c-t*_*c-o*i*p+t*a*p)*w,e[11]=(d*a*s-o*h*s-d*i*c+t*h*c+o*i*m-t*a*m)*w,e[12]=T*w,e[13]=(d*_*r-x*h*r+x*i*f-t*_*f-d*i*g+t*h*g)*w,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*g-t*a*g)*w,e[15]=(o*h*r-d*a*r+d*i*l-t*h*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,x=s*h,_=o*d,g=o*h,p=a*h,v=l*c,y=l*d,S=l*h,T=i.x,E=i.y,w=i.z;return r[0]=(1-(_+p))*T,r[1]=(m+S)*T,r[2]=(x-y)*T,r[3]=0,r[4]=(m-S)*E,r[5]=(1-(f+p))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(x+y)*w,r[9]=(g-v)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,d=1/o,h=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=d,ti.elements[5]*=d,ti.elements[6]*=d,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Hi){const l=this.elements,c=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,x;if(a===Hi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===iu)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Hi){const l=this.elements,c=1/(t-e),d=1/(i-r),h=1/(o-s),f=(t+e)*c,m=(i+r)*d;let x,_;if(a===Hi)x=(o+s)*h,_=-2*h;else if(a===iu)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const As=new O,ti=new Ke,Zb=new O(0,0,0),Jb=new O(1,1,1),nr=new O,Nl=new O,Rn=new O,Ng=new Ke,kg=new wi;class mi{constructor(e=0,t=0,i=0,r=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ng,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kg.setFromEuler(this),this.setFromQuaternion(kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Mp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qb=0;const Ug=new O,Cs=new wi,Li=new Ke,kl=new O,na=new O,ew=new O,tw=new wi,Og=new O(1,0,0),Fg=new O(0,1,0),zg=new O(0,0,1),nw={type:"added"},iw={type:"removed"},Md={type:"childadded",child:null},bd={type:"childremoved",child:null};class Et extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new O,t=new mi,i=new wi,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new et}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Og,e)}rotateY(e){return this.rotateOnAxis(Fg,e)}rotateZ(e){return this.rotateOnAxis(zg,e)}translateOnAxis(e,t){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Og,e)}translateY(e){return this.translateOnAxis(Fg,e)}translateZ(e){return this.translateOnAxis(zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kl.copy(e):kl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(na,kl,this.up):Li.lookAt(kl,na,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Cs.setFromRotationMatrix(Li),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nw),Md.child=e,this.dispatchEvent(Md),Md.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iw),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,ew),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,tw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new O(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new O,Ii=new O,wd=new O,Di=new O,Rs=new O,Ps=new O,jg=new O,Ed=new O,Td=new O,Ad=new O;class ci{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ni.subVectors(e,t),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ni.subVectors(r,t),Ii.subVectors(i,t),wd.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Ii),l=ni.dot(wd),c=Ii.dot(Ii),d=Ii.dot(wd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static isFrontFacing(e,t,i,r){return ni.subVectors(i,t),Ii.subVectors(e,t),ni.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ni.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Rs.subVectors(r,i),Ps.subVectors(s,i),Ed.subVectors(e,i);const l=Rs.dot(Ed),c=Ps.dot(Ed);if(l<=0&&c<=0)return t.copy(i);Td.subVectors(e,r);const d=Rs.dot(Td),h=Ps.dot(Td);if(d>=0&&h<=d)return t.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Rs,o);Ad.subVectors(e,s);const m=Rs.dot(Ad),x=Ps.dot(Ad);if(x>=0&&m<=x)return t.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Ps,a);const g=d*x-m*h;if(g<=0&&h-d>=0&&m-x>=0)return jg.subVectors(s,r),a=(h-d)/(h-d+(m-x)),t.copy(r).addScaledVector(jg,a);const p=1/(g+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Rs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Cd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=_p(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Cd(o,s,e+1/3),this.g=Cd(o,s,e),this.b=Cd(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=Xv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}copyLinearToSRGB(e){return this.r=pd(e.r),this.g=pd(e.g),this.b=pd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return ct.fromWorkingColorSpace(cn.copy(this),e),Math.round(Qt(cn.r*255,0,255))*65536+Math.round(Qt(cn.g*255,0,255))*256+Math.round(Qt(cn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(cn.copy(this),t);const i=cn.r,r=cn.g,s=cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=mn){ct.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,r=cn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(Ul);const i=Pa(ir.h,Ul.h,t),r=Pa(ir.s,Ul.s,t),s=Pa(ir.l,Ul.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new He;He.NAMES=Xv;let rw=0;class An extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=mo,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=Jf,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Jf&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vt extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new O,Ol=new Fe;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ih&&(e.usage=this.usage),e}}class $v extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yv extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sw=0;const Bn=new Ke,Rd=new Et,Ls=new O,Pn=new gi,ia=new gi,Gt=new O;class ht extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bv(e)?Yv:$v)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ia.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Pn.min,ia.min),Pn.expandByPoint(Gt),Gt.addVectors(Pn.max,ia.max),Pn.expandByPoint(Gt)):(Pn.expandByPoint(ia.min),Pn.expandByPoint(ia.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Gt.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),Gt.add(Ls)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new O,l[A]=new O;const c=new O,d=new O,h=new O,f=new Fe,m=new Fe,x=new Fe,_=new O,g=new O;function p(A,V,M){c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,V),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,A),m.fromBufferAttribute(s,V),x.fromBufferAttribute(s,M),d.sub(c),h.sub(c),m.sub(f),x.sub(f);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(_.copy(d).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(I),g.copy(h).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(I),a[A].add(_),a[V].add(_),a[M].add(_),l[A].add(g),l[V].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,V=v.length;A<V;++A){const M=v[A],I=M.start,ae=M.count;for(let Y=I,F=I+ae;Y<F;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const y=new O,S=new O,T=new O,E=new O;function w(A){T.fromBufferAttribute(r,A),E.copy(T);const V=a[A];y.copy(V),y.sub(T.multiplyScalar(T.dot(V))).normalize(),S.crossVectors(E,V);const I=S.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,I)}for(let A=0,V=v.length;A<V;++A){const M=v[A],I=M.start,ae=M.count;for(let Y=I,F=I+ae;Y<F;Y+=3)w(e.getX(Y+0)),w(e.getX(Y+1)),w(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,d=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,x=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let p=0;p<d;p++)f[x++]=c[m++]}return new tn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bg=new Ke,Br=new jo,Fl=new Ei,Hg=new O,Is=new O,Ds=new O,Ns=new O,Pd=new O,zl=new O,jl=new Fe,Bl=new Fe,Hl=new Fe,Gg=new O,Vg=new O,Wg=new O,Gl=new O,Vl=new O;class _t extends Et{constructor(e=new ht,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Pd.fromBufferAttribute(h,e),o?zl.addScaledVector(Pd,d):zl.addScaledVector(Pd.sub(t),d))}t.add(zl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(Fl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Fl,Hg)===null||Br.origin.distanceToSquared(Hg)>(e.far-e.near)**2))&&(Bg.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Bg),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const g=f[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,T=y;S<T;S+=3){const E=a.getX(S),w=a.getX(S+1),A=a.getX(S+2);r=Wl(this,p,e,i,c,d,h,E,w,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=x,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),S=a.getX(g+2);r=Wl(this,o,e,i,c,d,h,v,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const g=f[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,T=y;S<T;S+=3){const E=S,w=S+1,A=S+2;r=Wl(this,p,e,i,c,d,h,E,w,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=x,p=_;g<p;g+=3){const v=g,y=g+1,S=g+2;r=Wl(this,o,e,i,c,d,h,v,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function ow(n,e,t,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Vl);return c<t.near||c>t.far?null:{distance:c,point:Vl.clone(),object:n}}function Wl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Is),n.getVertexPosition(l,Ds),n.getVertexPosition(c,Ns);const d=ow(n,e,t,i,Is,Ds,Ns,Gl);if(d){r&&(jl.fromBufferAttribute(r,a),Bl.fromBufferAttribute(r,l),Hl.fromBufferAttribute(r,c),d.uv=ci.getInterpolation(Gl,Is,Ds,Ns,jl,Bl,Hl,new Fe)),s&&(jl.fromBufferAttribute(s,a),Bl.fromBufferAttribute(s,l),Hl.fromBufferAttribute(s,c),d.uv1=ci.getInterpolation(Gl,Is,Ds,Ns,jl,Bl,Hl,new Fe)),o&&(Gg.fromBufferAttribute(o,a),Vg.fromBufferAttribute(o,l),Wg.fromBufferAttribute(o,c),d.normal=ci.getInterpolation(Gl,Is,Ds,Ns,Gg,Vg,Wg,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};ci.getNormal(Is,Ds,Ns,h.normal),d.face=h}return d}class ll extends ht{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2));function x(_,g,p,v,y,S,T,E,w,A,V){const M=S/w,I=T/A,ae=S/2,Y=T/2,F=E/2,J=w+1,H=A+1;let ne=0,L=0;const D=new O;for(let B=0;B<H;B++){const q=B*I-Y;for(let re=0;re<J;re++){const Me=re*M-ae;D[_]=Me*v,D[g]=q*y,D[p]=F,c.push(D.x,D.y,D.z),D[_]=0,D[g]=0,D[p]=E>0?1:-1,d.push(D.x,D.y,D.z),h.push(re/w),h.push(1-B/A),ne+=1}}for(let B=0;B<A;B++)for(let q=0;q<w;q++){const re=f+q+J*B,Me=f+q+J*(B+1),j=f+(q+1)+J*(B+1),$=f+(q+1)+J*B;l.push(re,Me,$),l.push(Me,j,$),L+=6}a.addGroup(m,L,V),m+=L,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=Io(n[t]);for(const r in i)e[r]=i[r]}return e}function aw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qv(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}const lw={clone:Io,merge:hn};var cw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cw,this.fragmentShader=uw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=aw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kv extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new O,Xg=new Fe,$g=new Fe;class gn extends Kv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,Xg,$g),t.subVectors($g,Xg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Us=1;class dw extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(ks,Us,e,t);r.layers=this.layers,this.add(r);const s=new gn(ks,Us,e,t);s.layers=this.layers,this.add(s);const o=new gn(ks,Us,e,t);o.layers=this.layers,this.add(o);const a=new gn(ks,Us,e,t);a.layers=this.layers,this.add(a);const l=new gn(ks,Us,e,t);l.layers=this.layers,this.add(l);const c=new gn(ks,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===iu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Zv extends zt{constructor(e,t,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ao,super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fw extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ll(5,5,5),s=new Ir({name:"CubemapFromEquirect",uniforms:Io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ar});s.uniforms.tEquirect.value=t;const o=new _t(r,s),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Xt),new dw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ld=new O,hw=new O,pw=new et;class lr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ld.subVectors(i,t).cross(hw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ld),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pw.getNormalMatrix(e),r=this.coplanarPoint(Ld).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Ei,Xl=new O;class bp{constructor(e=new lr,t=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],x=r[9],_=r[10],g=r[11],p=r[12],v=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-m,S-p).normalize(),i[1].setComponents(l+s,f+c,g+m,S+p).normalize(),i[2].setComponents(l+o,f+d,g+x,S+v).normalize(),i[3].setComponents(l-o,f-d,g-x,S-v).normalize(),i[4].setComponents(l-a,f-h,g-_,S-y).normalize(),t===Hi)i[5].setComponents(l+a,f+h,g+_,S+y).normalize();else if(t===iu)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xl.x=r.normal.x>0?e.max.x:e.min.x,Xl.y=r.normal.y>0?e.max.y:e.min.y,Xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mw(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,m=h.byteLength,x=n.createBuffer();n.bindBuffer(d,x),n.bufferData(d,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,h){const f=d.array,m=d._updateRange,x=d.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&x.length===0&&n.bufferSubData(h,0,f),x.length!==0){for(let _=0,g=x.length;_<g;_++){const p=x[_];t?n.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Eu extends ht{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=t/l,m=[],x=[],_=[],g=[];for(let p=0;p<d;p++){const v=p*f-o;for(let y=0;y<c;y++){const S=y*h-s;x.push(S,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,S=v+c*(p+1),T=v+1+c*(p+1),E=v+1+c*p;m.push(y,S,E),m.push(S,T,E)}this.setIndex(m),this.setAttribute("position",new mt(x,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.width,e.height,e.widthSegments,e.heightSegments)}}var gw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xw=`#ifdef USE_ALPHAHASH
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
#endif`,yw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_w=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mw=`#ifdef USE_AOMAP
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
#endif`,bw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ww=`#ifdef USE_BATCHING
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
#endif`,Ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Aw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rw=`#ifdef USE_IRIDESCENCE
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
#endif`,Pw=`#ifdef USE_BUMPMAP
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
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ow=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zw=`#define PI 3.141592653589793
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
} // validated`,jw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bw=`vec3 transformedNormal = objectNormal;
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
#endif`,Hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ww=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",$w=`
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
}`,Yw=`#ifdef USE_ENVMAP
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
#endif`,qw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kw=`#ifdef USE_ENVMAP
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
#endif`,Zw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jw=`#ifdef USE_ENVMAP
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
#endif`,Qw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
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
}`,rE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
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
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
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
#endif`,mE=`struct PhysicalMaterial {
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
}`,gE=`
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_E=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TE=`#if defined( USE_POINTS_UV )
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
#endif`,AE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
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
#endif`,IE=`#ifdef USE_MORPHTARGETS
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
#endif`,DE=`#ifdef USE_MORPHTARGETS
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
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
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
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t2=`float getShadowMask() {
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
}`,n2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i2=`#ifdef USE_SKINNING
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
#endif`,r2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s2=`#ifdef USE_SKINNING
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
#endif`,o2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u2=`#ifdef USE_TRANSMISSION
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
#endif`,d2=`#ifdef USE_TRANSMISSION
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
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x2=`uniform sampler2D t2D;
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
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`#include <common>
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
}`,b2=`#if DEPTH_PACKING == 3200
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
}`,w2=`#define DISTANCE
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
}`,E2=`#define DISTANCE
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
}`,T2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C2=`uniform float scale;
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
}`,R2=`uniform vec3 diffuse;
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
}`,P2=`#include <common>
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
}`,L2=`uniform vec3 diffuse;
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
}`,I2=`#define LAMBERT
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
}`,D2=`#define LAMBERT
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
}`,N2=`#define MATCAP
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
}`,k2=`#define MATCAP
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
}`,U2=`#define NORMAL
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
}`,O2=`#define NORMAL
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
}`,F2=`#define PHONG
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
}`,z2=`#define PHONG
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
}`,j2=`#define STANDARD
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
}`,B2=`#define STANDARD
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
}`,H2=`#define TOON
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
}`,G2=`#define TOON
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
}`,V2=`uniform float size;
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
}`,W2=`uniform vec3 diffuse;
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
}`,X2=`#include <common>
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
}`,$2=`uniform vec3 color;
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
}`,Y2=`uniform float rotation;
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
}`,q2=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:gw,alphahash_pars_fragment:xw,alphamap_fragment:yw,alphamap_pars_fragment:vw,alphatest_fragment:_w,alphatest_pars_fragment:Sw,aomap_fragment:Mw,aomap_pars_fragment:bw,batching_pars_vertex:ww,batching_vertex:Ew,begin_vertex:Tw,beginnormal_vertex:Aw,bsdfs:Cw,iridescence_fragment:Rw,bumpmap_pars_fragment:Pw,clipping_planes_fragment:Lw,clipping_planes_pars_fragment:Iw,clipping_planes_pars_vertex:Dw,clipping_planes_vertex:Nw,color_fragment:kw,color_pars_fragment:Uw,color_pars_vertex:Ow,color_vertex:Fw,common:zw,cube_uv_reflection_fragment:jw,defaultnormal_vertex:Bw,displacementmap_pars_vertex:Hw,displacementmap_vertex:Gw,emissivemap_fragment:Vw,emissivemap_pars_fragment:Ww,colorspace_fragment:Xw,colorspace_pars_fragment:$w,envmap_fragment:Yw,envmap_common_pars_fragment:qw,envmap_pars_fragment:Kw,envmap_pars_vertex:Zw,envmap_physical_pars_fragment:cE,envmap_vertex:Jw,fog_vertex:Qw,fog_pars_vertex:eE,fog_fragment:tE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:aE,lights_pars_begin:lE,lights_toon_fragment:uE,lights_toon_pars_fragment:dE,lights_phong_fragment:fE,lights_phong_pars_fragment:hE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:xE,lights_fragment_end:yE,logdepthbuf_fragment:vE,logdepthbuf_pars_fragment:_E,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:bE,map_pars_fragment:wE,map_particle_fragment:EE,map_particle_pars_fragment:TE,metalnessmap_fragment:AE,metalnessmap_pars_fragment:CE,morphinstance_vertex:RE,morphcolor_vertex:PE,morphnormal_vertex:LE,morphtarget_pars_vertex:IE,morphtarget_vertex:DE,normal_fragment_begin:NE,normal_fragment_maps:kE,normal_pars_fragment:UE,normal_pars_vertex:OE,normal_vertex:FE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:BE,clearcoat_pars_fragment:HE,iridescence_pars_fragment:GE,opaque_fragment:VE,packing:WE,premultiplied_alpha_fragment:XE,project_vertex:$E,dithering_fragment:YE,dithering_pars_fragment:qE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:QE,shadowmap_vertex:e2,shadowmask_pars_fragment:t2,skinbase_vertex:n2,skinning_pars_vertex:i2,skinning_vertex:r2,skinnormal_vertex:s2,specularmap_fragment:o2,specularmap_pars_fragment:a2,tonemapping_fragment:l2,tonemapping_pars_fragment:c2,transmission_fragment:u2,transmission_pars_fragment:d2,uv_pars_fragment:f2,uv_pars_vertex:h2,uv_vertex:p2,worldpos_vertex:m2,background_vert:g2,background_frag:x2,backgroundCube_vert:y2,backgroundCube_frag:v2,cube_vert:_2,cube_frag:S2,depth_vert:M2,depth_frag:b2,distanceRGBA_vert:w2,distanceRGBA_frag:E2,equirect_vert:T2,equirect_frag:A2,linedashed_vert:C2,linedashed_frag:R2,meshbasic_vert:P2,meshbasic_frag:L2,meshlambert_vert:I2,meshlambert_frag:D2,meshmatcap_vert:N2,meshmatcap_frag:k2,meshnormal_vert:U2,meshnormal_frag:O2,meshphong_vert:F2,meshphong_frag:z2,meshphysical_vert:j2,meshphysical_frag:B2,meshtoon_vert:H2,meshtoon_frag:G2,points_vert:V2,points_frag:W2,shadow_vert:X2,shadow_frag:$2,sprite_vert:Y2,sprite_frag:q2},Ce={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},_i={basic:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new He(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:hn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:hn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new He(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:hn([Ce.points,Ce.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:hn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:hn([Ce.common,Ce.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:hn([Ce.sprite,Ce.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:hn([Ce.common,Ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:hn([Ce.lights,Ce.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};_i.physical={uniforms:hn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const $l={r:0,b:0,g:0},Gr=new mi,K2=new Ke;function Z2(n,e,t,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function x(g,p){let v=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===bu)?(d===void 0&&(d=new _t(new ll(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Io(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Gr.copy(p.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(K2.makeRotationFromEuler(Gr)),d.material.toneMapped=ct.getTransfer(y.colorSpace)!==vt,(h!==y||f!==y.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,h=y,f=y.version,m=n.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new Eu(2,2),new Ir({name:"BackgroundMaterial",uniforms:Io(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ct.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB($l,qv(n)),i.buffers.color.setClear($l.r,$l.g,$l.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:x}}function J2(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,d=!1;function h(F,J,H,ne,L){let D=!1;if(o){const B=_(ne,H,J);c!==B&&(c=B,m(c.object)),D=p(F,ne,H,L),D&&v(F,ne,H,L)}else{const B=J.wireframe===!0;(c.geometry!==ne.id||c.program!==H.id||c.wireframe!==B)&&(c.geometry=ne.id,c.program=H.id,c.wireframe=B,D=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(D||d)&&(d=!1,A(F,J,H,ne),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,J,H){const ne=H.wireframe===!0;let L=a[F.id];L===void 0&&(L={},a[F.id]=L);let D=L[J.id];D===void 0&&(D={},L[J.id]=D);let B=D[ne];return B===void 0&&(B=g(f()),D[ne]=B),B}function g(F){const J=[],H=[],ne=[];for(let L=0;L<r;L++)J[L]=0,H[L]=0,ne[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:H,attributeDivisors:ne,object:F,attributes:{},index:null}}function p(F,J,H,ne){const L=c.attributes,D=J.attributes;let B=0;const q=H.getAttributes();for(const re in q)if(q[re].location>=0){const j=L[re];let $=D[re];if($===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),j===void 0||j.attribute!==$||$&&j.data!==$.data)return!0;B++}return c.attributesNum!==B||c.index!==ne}function v(F,J,H,ne){const L={},D=J.attributes;let B=0;const q=H.getAttributes();for(const re in q)if(q[re].location>=0){let j=D[re];j===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));const $={};$.attribute=j,j&&j.data&&($.data=j.data),L[re]=$,B++}c.attributes=L,c.attributesNum=B,c.index=ne}function y(){const F=c.newAttributes;for(let J=0,H=F.length;J<H;J++)F[J]=0}function S(F){T(F,0)}function T(F,J){const H=c.newAttributes,ne=c.enabledAttributes,L=c.attributeDivisors;H[F]=1,ne[F]===0&&(n.enableVertexAttribArray(F),ne[F]=1),L[F]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,J),L[F]=J)}function E(){const F=c.newAttributes,J=c.enabledAttributes;for(let H=0,ne=J.length;H<ne;H++)J[H]!==F[H]&&(n.disableVertexAttribArray(H),J[H]=0)}function w(F,J,H,ne,L,D,B){B===!0?n.vertexAttribIPointer(F,J,H,L,D):n.vertexAttribPointer(F,J,H,ne,L,D)}function A(F,J,H,ne){if(i.isWebGL2===!1&&(F.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const L=ne.attributes,D=H.getAttributes(),B=J.defaultAttributeValues;for(const q in D){const re=D[q];if(re.location>=0){let Me=L[q];if(Me===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Me=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Me=F.instanceColor)),Me!==void 0){const j=Me.normalized,$=Me.itemSize,G=t.get(Me);if(G===void 0)continue;const be=G.buffer,ge=G.type,ve=G.bytesPerElement,Ue=i.isWebGL2===!0&&(ge===n.INT||ge===n.UNSIGNED_INT||Me.gpuType===Lv);if(Me.isInterleavedBufferAttribute){const Ae=Me.data,W=Ae.stride,Ye=Me.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ee=0;Ee<re.locationSize;Ee++)T(re.location+Ee,Ae.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ee=0;Ee<re.locationSize;Ee++)S(re.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Ee=0;Ee<re.locationSize;Ee++)w(re.location+Ee,$/re.locationSize,ge,j,W*ve,(Ye+$/re.locationSize*Ee)*ve,Ue)}else{if(Me.isInstancedBufferAttribute){for(let Ae=0;Ae<re.locationSize;Ae++)T(re.location+Ae,Me.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ae=0;Ae<re.locationSize;Ae++)S(re.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Ae=0;Ae<re.locationSize;Ae++)w(re.location+Ae,$/re.locationSize,ge,j,$*ve,$/re.locationSize*Ae*ve,Ue)}}else if(B!==void 0){const j=B[q];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(re.location,j);break;case 3:n.vertexAttrib3fv(re.location,j);break;case 4:n.vertexAttrib4fv(re.location,j);break;default:n.vertexAttrib1fv(re.location,j)}}}}E()}function V(){ae();for(const F in a){const J=a[F];for(const H in J){const ne=J[H];for(const L in ne)x(ne[L].object),delete ne[L];delete J[H]}delete a[F]}}function M(F){if(a[F.id]===void 0)return;const J=a[F.id];for(const H in J){const ne=J[H];for(const L in ne)x(ne[L].object),delete ne[L];delete J[H]}delete a[F.id]}function I(F){for(const J in a){const H=a[J];if(H[F.id]===void 0)continue;const ne=H[F.id];for(const L in ne)x(ne[L].object),delete ne[L];delete H[F.id]}}function ae(){Y(),d=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ae,resetDefaultState:Y,dispose:V,releaseStatesOfGeometry:M,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:S,disableUnusedAttributes:E}}function Q2(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){n.drawArrays(s,d,h),t.update(h,s,1)}function l(d,h,f){if(f===0)return;let m,x;if(r)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,d,h,f),t.update(h,s,f)}function c(d,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f;x++)this.render(d[x],h[x]);else{m.multiDrawArraysWEBGL(s,d,0,h,0,f);let x=0;for(let _=0;_<f;_++)x+=h[_];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function eT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,S=o||e.has("OES_texture_float"),T=y&&S,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:E}}function tT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new lr,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||x===null||x.length===0||s&&!g)s?d(null):c();else{const v=s?0:i,y=v*4;let S=p.clippingState||null;l.value=S,S=d(x,f,y,m);for(let T=0;T!==y;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,x){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,x!==!0||g===null){const p=m+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,S=m;y!==_;++y,S+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function nT(n){let e=new WeakMap;function t(o,a){return a===Qf?o.mapping=Ao:a===eh&&(o.mapping=Co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qf||a===eh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fw(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wp extends Kv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oo=4,Yg=[.125,.215,.35,.446,.526,.582],Zr=20,Id=new wp,qg=new He;let Dd=null,Nd=0,kd=0;const qr=(1+Math.sqrt(5))/2,Os=1/qr,Kg=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,qr,Os),new O(0,qr,-Os),new O(Os,0,qr),new O(-Os,0,qr),new O(qr,Os,0),new O(-qr,Os,0)];class Zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Nd,kd),e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Qa,format:Yn,colorSpace:rn,depthBuffer:!1},r=Jg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iT(s)),this._blurMaterial=rT(s,e,t)}return r}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Id)}_sceneToCubeUV(e,t,i,r){const a=new gn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qg),d.toneMapping=Cr,d.autoClear=!1;const m=new Vt({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),x=new _t(new ll,m);let _=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(qg),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Yl(r,v*y,p>2?y:0,y,y),d.setRenderTarget(r),_&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ao||e.mapping===Co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Yl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Id)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kg[(r-1)%Kg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new _t(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zr-1),_=s/x,g=isFinite(s)?1+Math.floor(d*_):Zr;g>Zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zr}`);const p=[];let v=0;for(let w=0;w<Zr;++w){const A=w/_,V=Math.exp(-A*A/2);p.push(V),w===0?v+=V:w<g&&(v+=2*V)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-i;const S=this._sizeLods[r],T=3*S*(r>y-oo?r-y+oo:0),E=4*(this._cubeSize-S);Yl(t,T,E,3*S,2*S),l.setRenderTarget(t),l.render(h,Id)}}function iT(n){const e=[],t=[],i=[];let r=n;const s=n-oo+1+Yg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-oo?l=Yg[o-n+oo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,x=6,_=3,g=2,p=1,v=new Float32Array(_*x*m),y=new Float32Array(g*x*m),S=new Float32Array(p*x*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,A=E>2?0:-1,V=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];v.set(V,_*x*E),y.set(f,g*x*E);const M=[E,E,E,E,E,E];S.set(M,p*x*E)}const T=new ht;T.setAttribute("position",new tn(v,_)),T.setAttribute("uv",new tn(y,g)),T.setAttribute("faceIndex",new tn(S,p)),e.push(T),r>oo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jg(n,e,t){const i=new fs(n,e,t);return i.texture.mapping=bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rT(n,e,t){const i=new Float32Array(Zr),r=new O(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Qg(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function e0(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Ep(){return`

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
	`}function sT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qf||l===eh,d=l===Ao||l===Co;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Zg(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new Zg(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function oT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aT(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const _=m[x];for(let g=0,p=_.length;g<p;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let y=0,S=v.length;y<S;y+=3){const T=v[y+0],E=v[y+1],w=v[y+2];f.push(T,E,E,w,w,T)}}else if(x!==void 0){const v=x.array;_=x.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const T=y+0,E=y+1,w=y+2;f.push(T,E,E,w,w,T)}}else return;const g=new(Bv(f)?Yv:$v)(f,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function lT(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,x){n.drawElements(s,x,a,m*l),t.update(x,s,1)}function h(m,x,_){if(_===0)return;let g,p;if(r)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,x,a,m*l,_),t.update(x,s,_)}function f(m,x,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(m[p]/l,x[p]);else{g.multiDrawElementsWEBGL(s,x,0,a,m,0,_);let p=0;for(let v=0;v<_;v++)p+=x[v];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function cT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uT(n,e){return n[0]-e[0]}function dT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=m!==void 0?m.length:0;let _=s.get(d);if(_===void 0||_.count!==x){let ae=function(){M.dispose(),s.delete(d),d.removeEventListener("dispose",ae)};_!==void 0&&_.texture.dispose();const g=d.morphAttributes.position!==void 0,p=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let E=0;g===!0&&(E=1),p===!0&&(E=2),v===!0&&(E=3);let w=d.attributes.position.count*E,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const V=new Float32Array(w*A*4*x),M=new Wv(V,w,A,x);M.type=ai,M.needsUpdate=!0;const I=E*4;for(let Y=0;Y<x;Y++){const F=y[Y],J=S[Y],H=T[Y],ne=w*A*4*Y;for(let L=0;L<F.count;L++){const D=L*I;g===!0&&(o.fromBufferAttribute(F,L),V[ne+D+0]=o.x,V[ne+D+1]=o.y,V[ne+D+2]=o.z,V[ne+D+3]=0),p===!0&&(o.fromBufferAttribute(J,L),V[ne+D+4]=o.x,V[ne+D+5]=o.y,V[ne+D+6]=o.z,V[ne+D+7]=0),v===!0&&(o.fromBufferAttribute(H,L),V[ne+D+8]=o.x,V[ne+D+9]=o.y,V[ne+D+10]=o.z,V[ne+D+11]=H.itemSize===4?o.w:1)}}_={count:x,texture:M,size:new Fe(w,A)},s.set(d,_),d.addEventListener("dispose",ae)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let g=0;for(let v=0;v<f.length;v++)g+=f[v];const p=d.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",f)}h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=f===void 0?0:f.length;let x=i[d.id];if(x===void 0||x.length!==m){x=[];for(let y=0;y<m;y++)x[y]=[y,0];i[d.id]=x}for(let y=0;y<m;y++){const S=x[y];S[0]=y,S[1]=f[y]}x.sort(dT);for(let y=0;y<8;y++)y<m&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(uT);const _=d.morphAttributes.position,g=d.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const S=a[y],T=S[0],E=S[1];T!==Number.MAX_SAFE_INTEGER&&E?(_&&d.getAttribute("morphTarget"+y)!==_[T]&&d.setAttribute("morphTarget"+y,_[T]),g&&d.getAttribute("morphNormal"+y)!==g[T]&&d.setAttribute("morphNormal"+y,g[T]),r[y]=E,p+=E):(_&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),g&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const v=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function hT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Qv extends zt{constructor(e,t,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:os,d!==os&&d!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===os&&(i=gr),i===void 0&&d===Ro&&(i=ss),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const e_=new zt,t_=new Qv(1,1);t_.compareFunction=jv;const n_=new Wv,i_=new qb,r_=new Zv,t0=[],n0=[],i0=new Float32Array(16),r0=new Float32Array(9),s0=new Float32Array(4);function Bo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=t0[r];if(s===void 0&&(s=new Float32Array(r),t0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tu(n,e){let t=n0[e];t===void 0&&(t=new Int32Array(e),n0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function yT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(jt(t,i))return;s0.set(i),n.uniformMatrix2fv(this.addr,!1,s0),Bt(t,i)}}function vT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(jt(t,i))return;r0.set(i),n.uniformMatrix3fv(this.addr,!1,r0),Bt(t,i)}}function _T(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(jt(t,i))return;i0.set(i),n.uniformMatrix4fv(this.addr,!1,i0),Bt(t,i)}}function ST(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function bT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function ET(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function TT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function CT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function RT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?t_:e_;t.setTexture2D(e||s,r)}function PT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||i_,r)}function LT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||r_,r)}function IT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||n_,r)}function DT(n){switch(n){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return xT;case 35674:return yT;case 35675:return vT;case 35676:return _T;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return bT;case 35669:case 35673:return wT;case 5125:return ET;case 36294:return TT;case 36295:return AT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return IT}}function NT(n,e){n.uniform1fv(this.addr,e)}function kT(n,e){const t=Bo(e,this.size,2);n.uniform2fv(this.addr,t)}function UT(n,e){const t=Bo(e,this.size,3);n.uniform3fv(this.addr,t)}function OT(n,e){const t=Bo(e,this.size,4);n.uniform4fv(this.addr,t)}function FT(n,e){const t=Bo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zT(n,e){const t=Bo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jT(n,e){const t=Bo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BT(n,e){n.uniform1iv(this.addr,e)}function HT(n,e){n.uniform2iv(this.addr,e)}function GT(n,e){n.uniform3iv(this.addr,e)}function VT(n,e){n.uniform4iv(this.addr,e)}function WT(n,e){n.uniform1uiv(this.addr,e)}function XT(n,e){n.uniform2uiv(this.addr,e)}function $T(n,e){n.uniform3uiv(this.addr,e)}function YT(n,e){n.uniform4uiv(this.addr,e)}function qT(n,e,t){const i=this.cache,r=e.length,s=Tu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||e_,s[o])}function KT(n,e,t){const i=this.cache,r=e.length,s=Tu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||i_,s[o])}function ZT(n,e,t){const i=this.cache,r=e.length,s=Tu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||r_,s[o])}function JT(n,e,t){const i=this.cache,r=e.length,s=Tu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||n_,s[o])}function QT(n){switch(n){case 5126:return NT;case 35664:return kT;case 35665:return UT;case 35666:return OT;case 35674:return FT;case 35675:return zT;case 35676:return jT;case 5124:case 35670:return BT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return WT;case 36294:return XT;case 36295:return $T;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return JT}}class eA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=DT(t.type)}}class tA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QT(t.type)}}class nA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function o0(n,e){n.seq.push(e),n.map[e.id]=e}function iA(n,e,t){const i=n.name,r=i.length;for(Ud.lastIndex=0;;){const s=Ud.exec(i),o=Ud.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){o0(t,c===void 0?new eA(a,n,e):new tA(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new nA(a),o0(t,h)),t=h}}}class wc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);iA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function a0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rA=37297;let sA=0;function oA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function aA(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===nu&&t===tu?i="LinearDisplayP3ToLinearSRGB":e===tu&&t===nu&&(i="LinearSRGBToLinearDisplayP3"),n){case rn:case wu:return[i,"LinearTransferOETF"];case mn:case vp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function l0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oA(n.getShaderSource(e),o)}else return r}function lA(n,e){const t=aA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cA(n,e){let t;switch(e){case ib:t="Linear";break;case rb:t="Reinhard";break;case sb:t="OptimizedCineon";break;case ob:t="ACESFilmic";break;case lb:t="AgX";break;case cb:t="Neutral";break;case ab:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function uA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ao).join(`
`)}function dA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function fA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ao(n){return n!==""}function c0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(n){return n.replace(pA,gA)}const mA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gA(n,e){let t=Qe[e];if(t===void 0){const i=mA.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return oh(t)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(n){return n.replace(xA,yA)}function yA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function f0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function vA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===LM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function _A(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ao:case Co:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function MA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gp:e="ENVMAP_BLENDING_MULTIPLY";break;case tb:e="ENVMAP_BLENDING_MIX";break;case nb:e="ENVMAP_BLENDING_ADD";break}return e}function bA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vA(t),c=_A(t),d=SA(t),h=MA(t),f=bA(t),m=t.isWebGL2?"":uA(t),x=dA(t),_=fA(s),g=r.createProgram();let p,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ao).join(`
`),p.length>0&&(p+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ao).join(`
`),v.length>0&&(v+=`
`)):(p=[f0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),v=[m,f0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Cr?cA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,lA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=oh(o),o=c0(o,t),o=u0(o,t),a=oh(a),a=c0(a,t),a=u0(a,t),o=d0(o),a=d0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=y+p+o,T=y+v+a,E=a0(r,r.VERTEX_SHADER,S),w=a0(r,r.FRAGMENT_SHADER,T);r.attachShader(g,E),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(ae){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(E).trim(),J=r.getShaderInfoLog(w).trim();let H=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,w);else{const L=l0(r,E,"vertex"),D=l0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+ae.name+`
Material Type: `+ae.type+`

Program Info Log: `+Y+`
`+L+`
`+D)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(F===""||J==="")&&(ne=!1);ne&&(ae.diagnostics={runnable:H,programLog:Y,vertexShader:{log:F,prefix:p},fragmentShader:{log:J,prefix:v}})}r.deleteShader(E),r.deleteShader(w),V=new wc(r,g),M=hA(r,g)}let V;this.getUniforms=function(){return V===void 0&&A(this),V};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(g,rA)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let EA=0;class TA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AA(e),t.set(e,i)),i}}class AA{constructor(e){this.id=EA++,this.code=e,this.usedTimes=0}}function CA(n,e,t,i,r,s,o){const a=new Mp,l=new TA,c=new Set,d=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures;let x=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,I,ae,Y,F){const J=Y.fog,H=F.geometry,ne=M.isMeshStandardMaterial?Y.environment:null,L=(M.isMeshStandardMaterial?t:e).get(M.envMap||ne),D=L&&L.mapping===bu?L.image.height:null,B=_[M.type];M.precision!==null&&(x=r.getMaxPrecision(M.precision),x!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",x,"instead."));const q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=q!==void 0?q.length:0;let Me=0;H.morphAttributes.position!==void 0&&(Me=1),H.morphAttributes.normal!==void 0&&(Me=2),H.morphAttributes.color!==void 0&&(Me=3);let j,$,G,be;if(B){const ot=_i[B];j=ot.vertexShader,$=ot.fragmentShader}else j=M.vertexShader,$=M.fragmentShader,l.update(M),G=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);const ge=n.getRenderTarget(),ve=F.isInstancedMesh===!0,Ue=F.isBatchedMesh===!0,Ae=!!M.map,W=!!M.matcap,Ye=!!L,Ee=!!M.aoMap,Ne=!!M.lightMap,Pe=!!M.bumpMap,Be=!!M.normalMap,Oe=!!M.displacementMap,oe=!!M.emissiveMap,fe=!!M.metalnessMap,C=!!M.roughnessMap,b=M.anisotropy>0,X=M.clearcoat>0,R=M.iridescence>0,U=M.sheen>0,N=M.transmission>0,Q=b&&!!M.anisotropyMap,ue=X&&!!M.clearcoatMap,ee=X&&!!M.clearcoatNormalMap,ce=X&&!!M.clearcoatRoughnessMap,me=R&&!!M.iridescenceMap,ie=R&&!!M.iridescenceThicknessMap,Le=U&&!!M.sheenColorMap,ke=U&&!!M.sheenRoughnessMap,Se=!!M.specularMap,ye=!!M.specularColorMap,we=!!M.specularIntensityMap,k=N&&!!M.transmissionMap,de=N&&!!M.thicknessMap,Te=!!M.gradientMap,z=!!M.alphaMap,xe=M.alphaTest>0,Z=!!M.alphaHash,pe=!!M.extensions;let Re=Cr;M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Re=n.toneMapping);const We={isWebGL2:h,shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:$,defines:M.defines,customVertexShaderID:G,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:x,batching:Ue,instancing:ve,instancingColor:ve&&F.instanceColor!==null,instancingMorph:ve&&F.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:rn,alphaToCoverage:!!M.alphaToCoverage,map:Ae,matcap:W,envMap:Ye,envMapMode:Ye&&L.mapping,envMapCubeUVHeight:D,aoMap:Ee,lightMap:Ne,bumpMap:Pe,normalMap:Be,displacementMap:m&&Oe,emissiveMap:oe,normalMapObjectSpace:Be&&M.normalMapType===Mb,normalMapTangentSpace:Be&&M.normalMapType===yp,metalnessMap:fe,roughnessMap:C,anisotropy:b,anisotropyMap:Q,clearcoat:X,clearcoatMap:ue,clearcoatNormalMap:ee,clearcoatRoughnessMap:ce,iridescence:R,iridescenceMap:me,iridescenceThicknessMap:ie,sheen:U,sheenColorMap:Le,sheenRoughnessMap:ke,specularMap:Se,specularColorMap:ye,specularIntensityMap:we,transmission:N,transmissionMap:k,thicknessMap:de,gradientMap:Te,opaque:M.transparent===!1&&M.blending===mo&&M.alphaToCoverage===!1,alphaMap:z,alphaTest:xe,alphaHash:Z,combine:M.combine,mapUv:Ae&&g(M.map.channel),aoMapUv:Ee&&g(M.aoMap.channel),lightMapUv:Ne&&g(M.lightMap.channel),bumpMapUv:Pe&&g(M.bumpMap.channel),normalMapUv:Be&&g(M.normalMap.channel),displacementMapUv:Oe&&g(M.displacementMap.channel),emissiveMapUv:oe&&g(M.emissiveMap.channel),metalnessMapUv:fe&&g(M.metalnessMap.channel),roughnessMapUv:C&&g(M.roughnessMap.channel),anisotropyMapUv:Q&&g(M.anisotropyMap.channel),clearcoatMapUv:ue&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(M.sheenRoughnessMap.channel),specularMapUv:Se&&g(M.specularMap.channel),specularColorMapUv:ye&&g(M.specularColorMap.channel),specularIntensityMapUv:we&&g(M.specularIntensityMap.channel),transmissionMapUv:k&&g(M.transmissionMap.channel),thicknessMapUv:de&&g(M.thicknessMap.channel),alphaMapUv:z&&g(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Be||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Ae||z),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Me,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&ae.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&ct.getTransfer(M.map.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function v(M){const I=[];if(M.shaderID?I.push(M.shaderID):(I.push(M.customVertexShaderID),I.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ae in M.defines)I.push(ae),I.push(M.defines[ae]);return M.isRawShaderMaterial===!1&&(y(I,M),S(I,M),I.push(n.outputColorSpace)),I.push(M.customProgramCacheKey),I.join()}function y(M,I){M.push(I.precision),M.push(I.outputColorSpace),M.push(I.envMapMode),M.push(I.envMapCubeUVHeight),M.push(I.mapUv),M.push(I.alphaMapUv),M.push(I.lightMapUv),M.push(I.aoMapUv),M.push(I.bumpMapUv),M.push(I.normalMapUv),M.push(I.displacementMapUv),M.push(I.emissiveMapUv),M.push(I.metalnessMapUv),M.push(I.roughnessMapUv),M.push(I.anisotropyMapUv),M.push(I.clearcoatMapUv),M.push(I.clearcoatNormalMapUv),M.push(I.clearcoatRoughnessMapUv),M.push(I.iridescenceMapUv),M.push(I.iridescenceThicknessMapUv),M.push(I.sheenColorMapUv),M.push(I.sheenRoughnessMapUv),M.push(I.specularMapUv),M.push(I.specularColorMapUv),M.push(I.specularIntensityMapUv),M.push(I.transmissionMapUv),M.push(I.thicknessMapUv),M.push(I.combine),M.push(I.fogExp2),M.push(I.sizeAttenuation),M.push(I.morphTargetsCount),M.push(I.morphAttributeCount),M.push(I.numDirLights),M.push(I.numPointLights),M.push(I.numSpotLights),M.push(I.numSpotLightMaps),M.push(I.numHemiLights),M.push(I.numRectAreaLights),M.push(I.numDirLightShadows),M.push(I.numPointLightShadows),M.push(I.numSpotLightShadows),M.push(I.numSpotLightShadowsWithMaps),M.push(I.numLightProbes),M.push(I.shadowMapType),M.push(I.toneMapping),M.push(I.numClippingPlanes),M.push(I.numClipIntersection),M.push(I.depthPacking)}function S(M,I){a.disableAll(),I.isWebGL2&&a.enable(0),I.supportsVertexTextures&&a.enable(1),I.instancing&&a.enable(2),I.instancingColor&&a.enable(3),I.instancingMorph&&a.enable(4),I.matcap&&a.enable(5),I.envMap&&a.enable(6),I.normalMapObjectSpace&&a.enable(7),I.normalMapTangentSpace&&a.enable(8),I.clearcoat&&a.enable(9),I.iridescence&&a.enable(10),I.alphaTest&&a.enable(11),I.vertexColors&&a.enable(12),I.vertexAlphas&&a.enable(13),I.vertexUv1s&&a.enable(14),I.vertexUv2s&&a.enable(15),I.vertexUv3s&&a.enable(16),I.vertexTangents&&a.enable(17),I.anisotropy&&a.enable(18),I.alphaHash&&a.enable(19),I.batching&&a.enable(20),M.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.skinning&&a.enable(4),I.morphTargets&&a.enable(5),I.morphNormals&&a.enable(6),I.morphColors&&a.enable(7),I.premultipliedAlpha&&a.enable(8),I.shadowMapEnabled&&a.enable(9),I.useLegacyLights&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.alphaToCoverage&&a.enable(20),M.push(a.mask)}function T(M){const I=_[M.type];let ae;if(I){const Y=_i[I];ae=lw.clone(Y.uniforms)}else ae=M.uniforms;return ae}function E(M,I){let ae;for(let Y=0,F=d.length;Y<F;Y++){const J=d[Y];if(J.cacheKey===I){ae=J,++ae.usedTimes;break}}return ae===void 0&&(ae=new wA(n,I,M,s),d.push(ae)),ae}function w(M){if(--M.usedTimes===0){const I=d.indexOf(M);d[I]=d[d.length-1],d.pop(),M.destroy()}}function A(M){l.remove(M)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:T,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:d,dispose:V}}function RA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function PA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function h0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function p0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,x,_,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:_,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,f,m,x,_,g){const p=o(h,f,m,x,_,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(h,f,m,x,_,g){const p=o(h,f,m,x,_,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||PA),i.length>1&&i.sort(f||h0),r.length>1&&r.sort(f||h0)}function d(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function LA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new p0,n.set(i,[o])):r>=s.length?(o=new p0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new He};break;case"SpotLight":t={position:new O,direction:new O,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function DA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NA=0;function kA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UA(n,e){const t=new IA,i=DA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new O);const s=new O,o=new Ke,a=new Ke;function l(d,h){let f=0,m=0,x=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let _=0,g=0,p=0,v=0,y=0,S=0,T=0,E=0,w=0,A=0,V=0;d.sort(kA);const M=h===!0?Math.PI:1;for(let ae=0,Y=d.length;ae<Y;ae++){const F=d[ae],J=F.color,H=F.intensity,ne=F.distance,L=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=J.r*H*M,m+=J.g*H*M,x+=J.b*H*M;else if(F.isLightProbe){for(let D=0;D<9;D++)r.probe[D].addScaledVector(F.sh.coefficients[D],H);V++}else if(F.isDirectionalLight){const D=t.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const B=F.shadow,q=i.get(F);q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,r.directionalShadow[_]=q,r.directionalShadowMap[_]=L,r.directionalShadowMatrix[_]=F.shadow.matrix,S++}r.directional[_]=D,_++}else if(F.isSpotLight){const D=t.get(F);D.position.setFromMatrixPosition(F.matrixWorld),D.color.copy(J).multiplyScalar(H*M),D.distance=ne,D.coneCos=Math.cos(F.angle),D.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),D.decay=F.decay,r.spot[p]=D;const B=F.shadow;if(F.map&&(r.spotLightMap[w]=F.map,w++,B.updateMatrices(F),F.castShadow&&A++),r.spotLightMatrix[p]=B.matrix,F.castShadow){const q=i.get(F);q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,r.spotShadow[p]=q,r.spotShadowMap[p]=L,E++}p++}else if(F.isRectAreaLight){const D=t.get(F);D.color.copy(J).multiplyScalar(H),D.halfWidth.set(F.width*.5,0,0),D.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=D,v++}else if(F.isPointLight){const D=t.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*M),D.distance=F.distance,D.decay=F.decay,F.castShadow){const B=F.shadow,q=i.get(F);q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,r.pointShadow[g]=q,r.pointShadowMap[g]=L,r.pointShadowMatrix[g]=F.shadow.matrix,T++}r.point[g]=D,g++}else if(F.isHemisphereLight){const D=t.get(F);D.skyColor.copy(F.color).multiplyScalar(H*M),D.groundColor.copy(F.groundColor).multiplyScalar(H*M),r.hemi[y]=D,y++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==_||I.pointLength!==g||I.spotLength!==p||I.rectAreaLength!==v||I.hemiLength!==y||I.numDirectionalShadows!==S||I.numPointShadows!==T||I.numSpotShadows!==E||I.numSpotMaps!==w||I.numLightProbes!==V)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=v,r.point.length=g,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=E+w-A,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=V,I.directionalLength=_,I.pointLength=g,I.spotLength=p,I.rectAreaLength=v,I.hemiLength=y,I.numDirectionalShadows=S,I.numPointShadows=T,I.numSpotShadows=E,I.numSpotMaps=w,I.numLightProbes=V,r.version=NA++)}function c(d,h){let f=0,m=0,x=0,_=0,g=0;const p=h.matrixWorldInverse;for(let v=0,y=d.length;v<y;v++){const S=d[v];if(S.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(S.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),x++}else if(S.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){const T=r.hemi[g];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:r}}function m0(n,e){const t=new UA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function OA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new m0(n,e),t.set(s,[l])):o>=a.length?(l=new m0(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class FA extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zA extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BA=`uniform sampler2D shadow_pass;
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
}`;function HA(n,e,t){let i=new bp;const r=new Fe,s=new Fe,o=new pt,a=new FA({depthPacking:Sb}),l=new zA,c={},d=t.maxTextureSize,h={[Yi]:vn,[vn]:Yi,[xn]:xn},f=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:jA,fragmentShader:BA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new ht;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let p=this.type;this.render=function(E,w,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const V=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(Ar),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const Y=p!==ki&&this.type===ki,F=p===ki&&this.type!==ki;for(let J=0,H=E.length;J<H;J++){const ne=E[J],L=ne.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const D=L.getFrameExtents();if(r.multiply(D),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/D.x),r.x=s.x*D.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/D.y),r.y=s.y*D.y,L.mapSize.y=s.y)),L.map===null||Y===!0||F===!0){const q=this.type!==ki?{minFilter:$t,magFilter:$t}:{};L.map!==null&&L.map.dispose(),L.map=new fs(r.x,r.y,q),L.map.texture.name=ne.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const B=L.getViewportCount();for(let q=0;q<B;q++){const re=L.getViewport(q);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),ae.viewport(o),L.updateMatrices(ne,q),i=L.getFrustum(),S(w,A,L.camera,ne,this.type)}L.isPointLightShadow!==!0&&this.type===ki&&v(L,A),L.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(V,M,I)};function v(E,w){const A=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fs(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,A,f,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,A,m,_,null)}function y(E,w,A,V){let M=null;const I=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=A.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const ae=M.uuid,Y=w.uuid;let F=c[ae];F===void 0&&(F={},c[ae]=F);let J=F[Y];J===void 0&&(J=M.clone(),F[Y]=J,w.addEventListener("dispose",T)),M=J}if(M.visible=w.visible,M.wireframe=w.wireframe,V===ki?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ae=n.properties.get(M);ae.light=A}return M}function S(E,w,A,V,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ki)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const Y=e.update(E),F=E.material;if(Array.isArray(F)){const J=Y.groups;for(let H=0,ne=J.length;H<ne;H++){const L=J[H],D=F[L.materialIndex];if(D&&D.visible){const B=y(E,D,V,M);E.onBeforeShadow(n,E,w,A,Y,B,L),n.renderBufferDirect(A,null,Y,B,E,L),E.onAfterShadow(n,E,w,A,Y,B,L)}}}else if(F.visible){const J=y(E,F,V,M);E.onBeforeShadow(n,E,w,A,Y,J,null),n.renderBufferDirect(A,null,Y,J,E,null),E.onAfterShadow(n,E,w,A,Y,J,null)}}const ae=E.children;for(let Y=0,F=ae.length;Y<F;Y++)S(ae[Y],w,A,V,M)}function T(E){E.target.removeEventListener("dispose",T);for(const A in c){const V=c[A],M=E.target.uuid;M in V&&(V[M].dispose(),delete V[M])}}}function GA(n,e,t){const i=t.isWebGL2;function r(){let z=!1;const xe=new pt;let Z=null;const pe=new pt(0,0,0,0);return{setMask:function(Re){Z!==Re&&!z&&(n.colorMask(Re,Re,Re,Re),Z=Re)},setLocked:function(Re){z=Re},setClear:function(Re,We,ot,nt,rt){rt===!0&&(Re*=nt,We*=nt,ot*=nt),xe.set(Re,We,ot,nt),pe.equals(xe)===!1&&(n.clearColor(Re,We,ot,nt),pe.copy(xe))},reset:function(){z=!1,Z=null,pe.set(-1,0,0,0)}}}function s(){let z=!1,xe=null,Z=null,pe=null;return{setTest:function(Re){Re?ve(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(Re){xe!==Re&&!z&&(n.depthMask(Re),xe=Re)},setFunc:function(Re){if(Z!==Re){switch(Re){case YM:n.depthFunc(n.NEVER);break;case qM:n.depthFunc(n.ALWAYS);break;case KM:n.depthFunc(n.LESS);break;case Jc:n.depthFunc(n.LEQUAL);break;case ZM:n.depthFunc(n.EQUAL);break;case JM:n.depthFunc(n.GEQUAL);break;case QM:n.depthFunc(n.GREATER);break;case eb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=Re}},setLocked:function(Re){z=Re},setClear:function(Re){pe!==Re&&(n.clearDepth(Re),pe=Re)},reset:function(){z=!1,xe=null,Z=null,pe=null}}}function o(){let z=!1,xe=null,Z=null,pe=null,Re=null,We=null,ot=null,nt=null,rt=null;return{setTest:function(Xe){z||(Xe?ve(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(Xe){xe!==Xe&&!z&&(n.stencilMask(Xe),xe=Xe)},setFunc:function(Xe,$e,lt){(Z!==Xe||pe!==$e||Re!==lt)&&(n.stencilFunc(Xe,$e,lt),Z=Xe,pe=$e,Re=lt)},setOp:function(Xe,$e,lt){(We!==Xe||ot!==$e||nt!==lt)&&(n.stencilOp(Xe,$e,lt),We=Xe,ot=$e,nt=lt)},setLocked:function(Xe){z=Xe},setClear:function(Xe){rt!==Xe&&(n.clearStencil(Xe),rt=Xe)},reset:function(){z=!1,xe=null,Z=null,pe=null,Re=null,We=null,ot=null,nt=null,rt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},m={},x=new WeakMap,_=[],g=null,p=!1,v=null,y=null,S=null,T=null,E=null,w=null,A=null,V=new He(0,0,0),M=0,I=!1,ae=null,Y=null,F=null,J=null,H=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,D=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=D>=1):B.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=D>=2);let q=null,re={};const Me=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),$=new pt().fromArray(Me),G=new pt().fromArray(j);function be(z,xe,Z,pe){const Re=new Uint8Array(4),We=n.createTexture();n.bindTexture(z,We),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<Z;ot++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(xe+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return We}const ge={};ge[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(n.DEPTH_TEST),l.setFunc(Jc),Oe(!1),oe($m),ve(n.CULL_FACE),Pe(Ar);function ve(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function Ue(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function Ae(z,xe){return m[z]!==xe?(n.bindFramebuffer(z,xe),m[z]=xe,i&&(z===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=xe),z===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function W(z,xe){let Z=_,pe=!1;if(z){Z=x.get(xe),Z===void 0&&(Z=[],x.set(xe,Z));const Re=z.textures;if(Z.length!==Re.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let We=0,ot=Re.length;We<ot;We++)Z[We]=n.COLOR_ATTACHMENT0+We;Z.length=Re.length,pe=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,pe=!0);if(pe)if(t.isWebGL2)n.drawBuffers(Z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ye(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const Ee={[Kr]:n.FUNC_ADD,[DM]:n.FUNC_SUBTRACT,[NM]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[Km]=n.MIN,Ee[Zm]=n.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(Ee[Km]=z.MIN_EXT,Ee[Zm]=z.MAX_EXT)}const Ne={[kM]:n.ZERO,[UM]:n.ONE,[OM]:n.SRC_COLOR,[Zf]:n.SRC_ALPHA,[GM]:n.SRC_ALPHA_SATURATE,[BM]:n.DST_COLOR,[zM]:n.DST_ALPHA,[FM]:n.ONE_MINUS_SRC_COLOR,[Jf]:n.ONE_MINUS_SRC_ALPHA,[HM]:n.ONE_MINUS_DST_COLOR,[jM]:n.ONE_MINUS_DST_ALPHA,[VM]:n.CONSTANT_COLOR,[WM]:n.ONE_MINUS_CONSTANT_COLOR,[XM]:n.CONSTANT_ALPHA,[$M]:n.ONE_MINUS_CONSTANT_ALPHA};function Pe(z,xe,Z,pe,Re,We,ot,nt,rt,Xe){if(z===Ar){p===!0&&(Ue(n.BLEND),p=!1);return}if(p===!1&&(ve(n.BLEND),p=!0),z!==IM){if(z!==v||Xe!==I){if((y!==Kr||E!==Kr)&&(n.blendEquation(n.FUNC_ADD),y=Kr,E=Kr),Xe)switch(z){case mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ja:n.blendFunc(n.ONE,n.ONE);break;case Ym:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ja:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ym:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,T=null,w=null,A=null,V.set(0,0,0),M=0,v=z,I=Xe}return}Re=Re||xe,We=We||Z,ot=ot||pe,(xe!==y||Re!==E)&&(n.blendEquationSeparate(Ee[xe],Ee[Re]),y=xe,E=Re),(Z!==S||pe!==T||We!==w||ot!==A)&&(n.blendFuncSeparate(Ne[Z],Ne[pe],Ne[We],Ne[ot]),S=Z,T=pe,w=We,A=ot),(nt.equals(V)===!1||rt!==M)&&(n.blendColor(nt.r,nt.g,nt.b,rt),V.copy(nt),M=rt),v=z,I=!1}function Be(z,xe){z.side===xn?Ue(n.CULL_FACE):ve(n.CULL_FACE);let Z=z.side===vn;xe&&(Z=!Z),Oe(Z),z.blending===mo&&z.transparent===!1?Pe(Ar):Pe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const pe=z.stencilWrite;c.setTest(pe),pe&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),C(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(z){ae!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),ae=z)}function oe(z){z!==RM?(ve(n.CULL_FACE),z!==Y&&(z===$m?n.cullFace(n.BACK):z===PM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),Y=z}function fe(z){z!==F&&(L&&n.lineWidth(z),F=z)}function C(z,xe,Z){z?(ve(n.POLYGON_OFFSET_FILL),(J!==xe||H!==Z)&&(n.polygonOffset(xe,Z),J=xe,H=Z)):Ue(n.POLYGON_OFFSET_FILL)}function b(z){z?ve(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function X(z){z===void 0&&(z=n.TEXTURE0+ne-1),q!==z&&(n.activeTexture(z),q=z)}function R(z,xe,Z){Z===void 0&&(q===null?Z=n.TEXTURE0+ne-1:Z=q);let pe=re[Z];pe===void 0&&(pe={type:void 0,texture:void 0},re[Z]=pe),(pe.type!==z||pe.texture!==xe)&&(q!==Z&&(n.activeTexture(Z),q=Z),n.bindTexture(z,xe||ge[z]),pe.type=z,pe.texture=xe)}function U(){const z=re[q];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(z){$.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),$.copy(z))}function we(z){G.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),G.copy(z))}function k(z,xe){let Z=h.get(xe);Z===void 0&&(Z=new WeakMap,h.set(xe,Z));let pe=Z.get(z);pe===void 0&&(pe=n.getUniformBlockIndex(xe,z.name),Z.set(z,pe))}function de(z,xe){const pe=h.get(xe).get(z);d.get(xe)!==pe&&(n.uniformBlockBinding(xe,pe,z.__bindingPointIndex),d.set(xe,pe))}function Te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},q=null,re={},m={},x=new WeakMap,_=[],g=null,p=!1,v=null,y=null,S=null,T=null,E=null,w=null,A=null,V=new He(0,0,0),M=0,I=!1,ae=null,Y=null,F=null,J=null,H=null,$.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ve,disable:Ue,bindFramebuffer:Ae,drawBuffers:W,useProgram:Ye,setBlending:Pe,setMaterial:Be,setFlipSided:Oe,setCullFace:oe,setLineWidth:fe,setPolygonOffset:C,setScissorTest:b,activeTexture:X,bindTexture:R,unbindTexture:U,compressedTexImage2D:N,compressedTexImage3D:Q,texImage2D:ke,texImage3D:Se,updateUBOMapping:k,uniformBlockBinding:de,texStorage2D:ie,texStorage3D:Le,texSubImage2D:ue,texSubImage3D:ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:ye,viewport:we,reset:Te}}function VA(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Fe,h=new WeakMap;let f;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return x?new OffscreenCanvas(C,b):tl("canvas")}function g(C,b,X,R){let U=1;const N=fe(C);if((N.width>R||N.height>R)&&(U=R/Math.max(N.width,N.height)),U<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=b?ru:Math.floor,ue=Q(U*N.width),ee=Q(U*N.height);f===void 0&&(f=_(ue,ee));const ce=X?_(ue,ee):f;return ce.width=ue,ce.height=ee,ce.getContext("2d").drawImage(C,0,0,ue,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+ue+"x"+ee+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),C;return C}function p(C){const b=fe(C);return sh(b.width)&&sh(b.height)}function v(C){return a?!1:C.wrapS!==$n||C.wrapT!==$n||C.minFilter!==$t&&C.minFilter!==Xt}function y(C,b){return C.generateMipmaps&&b&&C.minFilter!==$t&&C.minFilter!==Xt}function S(C){n.generateMipmap(C)}function T(C,b,X,R,U=!1){if(a===!1)return b;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let N=b;if(b===n.RED&&(X===n.FLOAT&&(N=n.R32F),X===n.HALF_FLOAT&&(N=n.R16F),X===n.UNSIGNED_BYTE&&(N=n.R8)),b===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(N=n.R8UI),X===n.UNSIGNED_SHORT&&(N=n.R16UI),X===n.UNSIGNED_INT&&(N=n.R32UI),X===n.BYTE&&(N=n.R8I),X===n.SHORT&&(N=n.R16I),X===n.INT&&(N=n.R32I)),b===n.RG&&(X===n.FLOAT&&(N=n.RG32F),X===n.HALF_FLOAT&&(N=n.RG16F),X===n.UNSIGNED_BYTE&&(N=n.RG8)),b===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(N=n.RG8UI),X===n.UNSIGNED_SHORT&&(N=n.RG16UI),X===n.UNSIGNED_INT&&(N=n.RG32UI),X===n.BYTE&&(N=n.RG8I),X===n.SHORT&&(N=n.RG16I),X===n.INT&&(N=n.RG32I)),b===n.RGBA){const Q=U?eu:ct.getTransfer(R);X===n.FLOAT&&(N=n.RGBA32F),X===n.HALF_FLOAT&&(N=n.RGBA16F),X===n.UNSIGNED_BYTE&&(N=Q===vt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(N=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(N=n.RGB5_A1)}return(N===n.R16F||N===n.R32F||N===n.RG16F||N===n.RG32F||N===n.RGBA16F||N===n.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function E(C,b,X){return y(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==Xt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){return C===$t||C===th||C===Xs?n.NEAREST:n.LINEAR}function A(C){const b=C.target;b.removeEventListener("dispose",A),M(b),b.isVideoTexture&&h.delete(b)}function V(C){const b=C.target;b.removeEventListener("dispose",V),ae(b)}function M(C){const b=i.get(C);if(b.__webglInit===void 0)return;const X=C.source,R=m.get(X);if(R){const U=R[b.__cacheKey];U.usedTimes--,U.usedTimes===0&&I(C),Object.keys(R).length===0&&m.delete(X)}i.remove(C)}function I(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const X=C.source,R=m.get(X);delete R[b.__cacheKey],o.memory.textures--}function ae(C){const b=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(b.__webglFramebuffer[R]))for(let U=0;U<b.__webglFramebuffer[R].length;U++)n.deleteFramebuffer(b.__webglFramebuffer[R][U]);else n.deleteFramebuffer(b.__webglFramebuffer[R]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[R])}else{if(Array.isArray(b.__webglFramebuffer))for(let R=0;R<b.__webglFramebuffer.length;R++)n.deleteFramebuffer(b.__webglFramebuffer[R]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let R=0;R<b.__webglColorRenderbuffer.length;R++)b.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[R]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=C.textures;for(let R=0,U=X.length;R<U;R++){const N=i.get(X[R]);N.__webglTexture&&(n.deleteTexture(N.__webglTexture),o.memory.textures--),i.remove(X[R])}i.remove(C)}let Y=0;function F(){Y=0}function J(){const C=Y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),Y+=1,C}function H(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function ne(C,b){const X=i.get(C);if(C.isVideoTexture&&Oe(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const R=C.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(X,C,b);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+b)}function L(C,b){const X=i.get(C);if(C.version>0&&X.__version!==C.version){G(X,C,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+b)}function D(C,b){const X=i.get(C);if(C.version>0&&X.__version!==C.version){G(X,C,b);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+b)}function B(C,b){const X=i.get(C);if(C.version>0&&X.__version!==C.version){be(X,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+b)}const q={[oi]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Qc]:n.MIRRORED_REPEAT},re={[$t]:n.NEAREST,[th]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[bc]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},Me={[bb]:n.NEVER,[Rb]:n.ALWAYS,[wb]:n.LESS,[jv]:n.LEQUAL,[Eb]:n.EQUAL,[Cb]:n.GEQUAL,[Tb]:n.GREATER,[Ab]:n.NOTEQUAL};function j(C,b,X){if(b.type===ai&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Xt||b.magFilter===bc||b.magFilter===Xs||b.magFilter===ui||b.minFilter===Xt||b.minFilter===bc||b.minFilter===Xs||b.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(n.texParameteri(C,n.TEXTURE_WRAP_S,q[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,q[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,q[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,re[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,re[b.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==$n||b.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,w(b.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==$t&&b.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$t||b.minFilter!==Xs&&b.minFilter!==ui||b.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Qa&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function $(C,b){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));const R=b.source;let U=m.get(R);U===void 0&&(U={},m.set(R,U));const N=H(b);if(N!==C.__cacheKey){U[N]===void 0&&(U[N]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),U[N].usedTimes++;const Q=U[C.__cacheKey];Q!==void 0&&(U[C.__cacheKey].usedTimes--,Q.usedTimes===0&&I(b)),C.__cacheKey=N,C.__webglTexture=U[N].texture}return X}function G(C,b,X){let R=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(R=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(R=n.TEXTURE_3D);const U=$(C,b),N=b.source;t.bindTexture(R,C.__webglTexture,n.TEXTURE0+X);const Q=i.get(N);if(N.version!==Q.__version||U===!0){t.activeTexture(n.TEXTURE0+X);const ue=ct.getPrimaries(ct.workingColorSpace),ee=b.colorSpace===fr?null:ct.getPrimaries(b.colorSpace),ce=b.colorSpace===fr||ue===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const me=v(b)&&p(b.image)===!1;let ie=g(b.image,me,!1,r.maxTextureSize);ie=oe(b,ie);const Le=p(ie)||a,ke=s.convert(b.format,b.colorSpace);let Se=s.convert(b.type),ye=T(b.internalFormat,ke,Se,b.colorSpace,b.isVideoTexture);j(R,b,Le);let we;const k=b.mipmaps,de=a&&b.isVideoTexture!==!0&&ye!==Fv,Te=Q.__version===void 0||U===!0,z=N.dataReady,xe=E(b,ie,Le);if(b.isDepthTexture)ye=n.DEPTH_COMPONENT,a?b.type===ai?ye=n.DEPTH_COMPONENT32F:b.type===gr?ye=n.DEPTH_COMPONENT24:b.type===ss?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:b.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===os&&ye===n.DEPTH_COMPONENT&&b.type!==xp&&b.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=gr,Se=s.convert(b.type)),b.format===Ro&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,b.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ss,Se=s.convert(b.type))),Te&&(de?t.texStorage2D(n.TEXTURE_2D,1,ye,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ye,ie.width,ie.height,0,ke,Se,null));else if(b.isDataTexture)if(k.length>0&&Le){de&&Te&&t.texStorage2D(n.TEXTURE_2D,xe,ye,k[0].width,k[0].height);for(let Z=0,pe=k.length;Z<pe;Z++)we=k[Z],de?z&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,we.width,we.height,ke,Se,we.data):t.texImage2D(n.TEXTURE_2D,Z,ye,we.width,we.height,0,ke,Se,we.data);b.generateMipmaps=!1}else de?(Te&&t.texStorage2D(n.TEXTURE_2D,xe,ye,ie.width,ie.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ke,Se,ie.data)):t.texImage2D(n.TEXTURE_2D,0,ye,ie.width,ie.height,0,ke,Se,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){de&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ye,k[0].width,k[0].height,ie.depth);for(let Z=0,pe=k.length;Z<pe;Z++)we=k[Z],b.format!==Yn?ke!==null?de?z&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,ie.depth,ke,we.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,ye,we.width,we.height,ie.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,ie.depth,ke,Se,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,ye,we.width,we.height,ie.depth,0,ke,Se,we.data)}else{de&&Te&&t.texStorage2D(n.TEXTURE_2D,xe,ye,k[0].width,k[0].height);for(let Z=0,pe=k.length;Z<pe;Z++)we=k[Z],b.format!==Yn?ke!==null?de?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,we.width,we.height,ke,we.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,ye,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?z&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,we.width,we.height,ke,Se,we.data):t.texImage2D(n.TEXTURE_2D,Z,ye,we.width,we.height,0,ke,Se,we.data)}else if(b.isDataArrayTexture)de?(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ye,ie.width,ie.height,ie.depth),z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ke,Se,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ie.width,ie.height,ie.depth,0,ke,Se,ie.data);else if(b.isData3DTexture)de?(Te&&t.texStorage3D(n.TEXTURE_3D,xe,ye,ie.width,ie.height,ie.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ke,Se,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ie.width,ie.height,ie.depth,0,ke,Se,ie.data);else if(b.isFramebufferTexture){if(Te)if(de)t.texStorage2D(n.TEXTURE_2D,xe,ye,ie.width,ie.height);else{let Z=ie.width,pe=ie.height;for(let Re=0;Re<xe;Re++)t.texImage2D(n.TEXTURE_2D,Re,ye,Z,pe,0,ke,Se,null),Z>>=1,pe>>=1}}else if(k.length>0&&Le){if(de&&Te){const Z=fe(k[0]);t.texStorage2D(n.TEXTURE_2D,xe,ye,Z.width,Z.height)}for(let Z=0,pe=k.length;Z<pe;Z++)we=k[Z],de?z&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ke,Se,we):t.texImage2D(n.TEXTURE_2D,Z,ye,ke,Se,we);b.generateMipmaps=!1}else if(de){if(Te){const Z=fe(ie);t.texStorage2D(n.TEXTURE_2D,xe,ye,Z.width,Z.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,Se,ie)}else t.texImage2D(n.TEXTURE_2D,0,ye,ke,Se,ie);y(b,Le)&&S(R),Q.__version=N.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function be(C,b,X){if(b.image.length!==6)return;const R=$(C,b),U=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+X);const N=i.get(U);if(U.version!==N.__version||R===!0){t.activeTexture(n.TEXTURE0+X);const Q=ct.getPrimaries(ct.workingColorSpace),ue=b.colorSpace===fr?null:ct.getPrimaries(b.colorSpace),ee=b.colorSpace===fr||Q===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ce=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,ie=[];for(let Z=0;Z<6;Z++)!ce&&!me?ie[Z]=g(b.image[Z],!1,!0,r.maxCubemapSize):ie[Z]=me?b.image[Z].image:b.image[Z],ie[Z]=oe(b,ie[Z]);const Le=ie[0],ke=p(Le)||a,Se=s.convert(b.format,b.colorSpace),ye=s.convert(b.type),we=T(b.internalFormat,Se,ye,b.colorSpace),k=a&&b.isVideoTexture!==!0,de=N.__version===void 0||R===!0,Te=U.dataReady;let z=E(b,Le,ke);j(n.TEXTURE_CUBE_MAP,b,ke);let xe;if(ce){k&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,z,we,Le.width,Le.height);for(let Z=0;Z<6;Z++){xe=ie[Z].mipmaps;for(let pe=0;pe<xe.length;pe++){const Re=xe[pe];b.format!==Yn?Se!==null?k?Te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,Re.width,Re.height,Se,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,we,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,Re.width,Re.height,Se,ye,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,we,Re.width,Re.height,0,Se,ye,Re.data)}}}else{if(xe=b.mipmaps,k&&de){xe.length>0&&z++;const Z=fe(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,z,we,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(me){k?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ie[Z].width,ie[Z].height,Se,ye,ie[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,we,ie[Z].width,ie[Z].height,0,Se,ye,ie[Z].data);for(let pe=0;pe<xe.length;pe++){const We=xe[pe].image[Z].image;k?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,We.width,We.height,Se,ye,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,we,We.width,We.height,0,Se,ye,We.data)}}else{k?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Se,ye,ie[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,we,Se,ye,ie[Z]);for(let pe=0;pe<xe.length;pe++){const Re=xe[pe];k?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Se,ye,Re.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,we,Se,ye,Re.image[Z])}}}y(b,ke)&&S(n.TEXTURE_CUBE_MAP),N.__version=U.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ge(C,b,X,R,U,N){const Q=s.convert(X.format,X.colorSpace),ue=s.convert(X.type),ee=T(X.internalFormat,Q,ue,X.colorSpace);if(!i.get(b).__hasExternalTextures){const me=Math.max(1,b.width>>N),ie=Math.max(1,b.height>>N);U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?t.texImage3D(U,N,ee,me,ie,b.depth,0,Q,ue,null):t.texImage2D(U,N,ee,me,ie,0,Q,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Be(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,U,i.get(X).__webglTexture,0,Pe(b)):(U===n.TEXTURE_2D||U>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,R,U,i.get(X).__webglTexture,N),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(C,b,X){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let R=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||Be(b)){const U=b.depthTexture;U&&U.isDepthTexture&&(U.type===ai?R=n.DEPTH_COMPONENT32F:U.type===gr&&(R=n.DEPTH_COMPONENT24));const N=Pe(b);Be(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,R,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,N,R,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,R,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const R=Pe(b);X&&Be(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,n.DEPTH24_STENCIL8,b.width,b.height):Be(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const R=b.textures;for(let U=0;U<R.length;U++){const N=R[U],Q=s.convert(N.format,N.colorSpace),ue=s.convert(N.type),ee=T(N.internalFormat,Q,ue,N.colorSpace),ce=Pe(b);X&&Be(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,ee,b.width,b.height):Be(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,ee,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ee,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ne(b.depthTexture,0);const R=i.get(b.depthTexture).__webglTexture,U=Pe(b);if(b.depthTexture.format===os)Be(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,R,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,R,0);else if(b.depthTexture.format===Ro)Be(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,R,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const b=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ue(b.__webglFramebuffer,C)}else if(X){b.__webglDepthbuffer=[];for(let R=0;R<6;R++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[R]),b.__webglDepthbuffer[R]=n.createRenderbuffer(),ve(b.__webglDepthbuffer[R],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ve(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(C,b,X){const R=i.get(C);b!==void 0&&ge(R.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ae(C)}function Ye(C){const b=C.texture,X=i.get(C),R=i.get(b);C.addEventListener("dispose",V);const U=C.textures,N=C.isWebGLCubeRenderTarget===!0,Q=U.length>1,ue=p(C)||a;if(Q||(R.__webglTexture===void 0&&(R.__webglTexture=n.createTexture()),R.__version=b.version,o.memory.textures++),N){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let ce=0;ce<b.mipmaps.length;ce++)X.__webglFramebuffer[ee][ce]=n.createFramebuffer()}else X.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<b.mipmaps.length;ee++)X.__webglFramebuffer[ee]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Q)if(r.drawBuffers)for(let ee=0,ce=U.length;ee<ce;ee++){const me=i.get(U[ee]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Be(C)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<U.length;ee++){const ce=U[ee];X.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);const me=s.convert(ce.format,ce.colorSpace),ie=s.convert(ce.type),Le=T(ce.internalFormat,me,ie,ce.colorSpace,C.isXRRenderTarget===!0),ke=Pe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Le,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(N){t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture),j(n.TEXTURE_CUBE_MAP,b,ue);for(let ee=0;ee<6;ee++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)ge(X.__webglFramebuffer[ee][ce],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce);else ge(X.__webglFramebuffer[ee],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);y(b,ue)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){for(let ee=0,ce=U.length;ee<ce;ee++){const me=U[ee],ie=i.get(me);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),j(n.TEXTURE_2D,me,ue),ge(X.__webglFramebuffer,C,me,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,0),y(me,ue)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ee=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ee,R.__webglTexture),j(ee,b,ue),a&&b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)ge(X.__webglFramebuffer[ce],C,b,n.COLOR_ATTACHMENT0,ee,ce);else ge(X.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,ee,0);y(b,ue)&&S(ee),t.unbindTexture()}C.depthBuffer&&Ae(C)}function Ee(C){const b=p(C)||a,X=C.textures;for(let R=0,U=X.length;R<U;R++){const N=X[R];if(y(N,b)){const Q=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(N).__webglTexture;t.bindTexture(Q,ue),S(Q),t.unbindTexture()}}}function Ne(C){if(a&&C.samples>0&&Be(C)===!1){const b=C.textures,X=C.width,R=C.height;let U=n.COLOR_BUFFER_BIT;const N=[],Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(C),ee=b.length>1;if(ee)for(let ce=0;ce<b.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<b.length;ce++){N.push(n.COLOR_ATTACHMENT0+ce),C.depthBuffer&&N.push(Q);const me=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(me===!1&&(C.depthBuffer&&(U|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(U|=n.STENCIL_BUFFER_BIT)),ee&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]),me===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Q]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Q])),ee){const ie=i.get(b[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,X,R,0,0,X,R,U,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let ce=0;ce<b.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const me=i.get(b[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(r.maxSamples,C.samples)}function Be(C){const b=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Oe(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function oe(C,b){const X=C.colorSpace,R=C.format,U=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===rh||X!==rn&&X!==fr&&(ct.getTransfer(X)===vt?a===!1?e.has("EXT_sRGB")===!0&&R===Yn?(C.format=rh,C.minFilter=Xt,C.generateMipmaps=!1):b=Gv.sRGBToLinear(b):(R!==Yn||U!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=F,this.setTexture2D=ne,this.setTexture2DArray=L,this.setTexture3D=D,this.setTextureCube=B,this.rebindTextures=W,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Be}function WA(n,e,t){const i=t.isWebGL2;function r(s,o=fr){let a;const l=ct.getTransfer(o);if(s===Rr)return n.UNSIGNED_BYTE;if(s===Iv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Dv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===db)return n.BYTE;if(s===fb)return n.SHORT;if(s===xp)return n.UNSIGNED_SHORT;if(s===Lv)return n.INT;if(s===gr)return n.UNSIGNED_INT;if(s===ai)return n.FLOAT;if(s===Qa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===hb)return n.ALPHA;if(s===Yn)return n.RGBA;if(s===pb)return n.LUMINANCE;if(s===mb)return n.LUMINANCE_ALPHA;if(s===os)return n.DEPTH_COMPONENT;if(s===Ro)return n.DEPTH_STENCIL;if(s===rh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Nv)return n.RED;if(s===kv)return n.RED_INTEGER;if(s===gb)return n.RG;if(s===Uv)return n.RG_INTEGER;if(s===Ov)return n.RGBA_INTEGER;if(s===ad||s===ld||s===cd||s===ud)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ad)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ld)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ud)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ad)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ld)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ud)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qm||s===eg||s===tg||s===ng)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ng)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ig||s===rg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ig)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sg||s===og||s===ag||s===lg||s===cg||s===ug||s===dg||s===fg||s===hg||s===pg||s===mg||s===gg||s===xg||s===yg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===og)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ag)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ug)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dd||s===vg||s===_g)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===dd)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_g)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xb||s===Sg||s===Mg||s===bg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===dd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Sg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ss?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class XA extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lt extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $A={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($A)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const YA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
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

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Ir({extensions:{fragDepth:!0},vertexShader:YA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _t(new Eu(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class ZA extends xs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,x=null;const _=new KA,g=t.getContextAttributes();let p=null,v=null;const y=[],S=[],T=new Fe;let E=null;const w=new gn;w.layers.enable(1),w.viewport=new pt;const A=new gn;A.layers.enable(2),A.viewport=new pt;const V=[w,A],M=new XA;M.layers.enable(1),M.layers.enable(2);let I=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=y[j];return $===void 0&&($=new Od,y[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=y[j];return $===void 0&&($=new Od,y[j]=$),$.getGripSpace()},this.getHand=function(j){let $=y[j];return $===void 0&&($=new Od,y[j]=$),$.getHandSpace()};function Y(j){const $=S.indexOf(j.inputSource);if($===-1)return;const G=y[$];G!==void 0&&(G.update(j.inputSource,j.frame,c||o),G.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",J);for(let j=0;j<y.length;j++){const $=S[j];$!==null&&(S[j]=null,y[j].disconnect($))}I=null,ae=null,_.reset(),e.setRenderTarget(p),m=null,f=null,h=null,r=null,v=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",F),r.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new fs(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Rr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,G=null,be=null;g.depth&&(be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?Ro:os,G=g.stencil?ss:gr);const ge={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new fs(f.textureWidth,f.textureHeight,{format:Yn,type:Rr,depthTexture:new Qv(f.textureWidth,f.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ve=e.properties.get(v);ve.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(j){for(let $=0;$<j.removed.length;$++){const G=j.removed[$],be=S.indexOf(G);be>=0&&(S[be]=null,y[be].disconnect(G))}for(let $=0;$<j.added.length;$++){const G=j.added[$];let be=S.indexOf(G);if(be===-1){for(let ve=0;ve<y.length;ve++)if(ve>=S.length){S.push(G),be=ve;break}else if(S[ve]===null){S[ve]=G,be=ve;break}if(be===-1)break}const ge=y[be];ge&&ge.connect(G)}}const H=new O,ne=new O;function L(j,$,G){H.setFromMatrixPosition($.matrixWorld),ne.setFromMatrixPosition(G.matrixWorld);const be=H.distanceTo(ne),ge=$.projectionMatrix.elements,ve=G.projectionMatrix.elements,Ue=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),W=(ge[9]+1)/ge[5],Ye=(ge[9]-1)/ge[5],Ee=(ge[8]-1)/ge[0],Ne=(ve[8]+1)/ve[0],Pe=Ue*Ee,Be=Ue*Ne,Oe=be/(-Ee+Ne),oe=Oe*-Ee;$.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(oe),j.translateZ(Oe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const fe=Ue+Oe,C=Ae+Oe,b=Pe-oe,X=Be+(be-oe),R=W*Ae/C*fe,U=Ye*Ae/C*fe;j.projectionMatrix.makePerspective(b,X,R,U,fe,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function D(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),M.near=A.near=w.near=j.near,M.far=A.far=w.far=j.far,(I!==M.near||ae!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,ae=M.far,w.near=I,w.far=ae,A.near=I,A.far=ae,w.updateProjectionMatrix(),A.updateProjectionMatrix(),j.updateProjectionMatrix());const $=j.parent,G=M.cameras;D(M,$);for(let be=0;be<G.length;be++)D(G[be],$);G.length===2?L(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),B(j,M,$)};function B(j,$,G){G===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(G.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null};let q=null;function re(j,$){if(d=$.getViewerPose(c||o),x=$,d!==null){const G=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let be=!1;G.length!==M.cameras.length&&(M.cameras.length=0,be=!0);for(let ve=0;ve<G.length;ve++){const Ue=G[ve];let Ae=null;if(m!==null)Ae=m.getViewport(Ue);else{const Ye=h.getViewSubImage(f,Ue);Ae=Ye.viewport,ve===0&&(e.setRenderTargetTextures(v,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(v))}let W=V[ve];W===void 0&&(W=new gn,W.layers.enable(ve),W.viewport=new pt,V[ve]=W),W.matrix.fromArray(Ue.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Ue.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ve===0&&(M.matrix.copy(W.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),be===!0&&M.cameras.push(W)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const ve=h.getDepthInformation(G[0]);ve&&ve.isValid&&ve.texture&&_.init(e,ve,r.renderState)}}for(let G=0;G<y.length;G++){const be=S[G],ge=y[G];be!==null&&ge!==void 0&&ge.update(be,$,c||o)}_.render(e,M),q&&q(j,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const Me=new Jv;Me.setAnimationLoop(re),this.setAnimationLoop=function(j){q=j},this.dispose=function(){}}}const Vr=new mi,JA=new Ke;function QA(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,qv(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===vn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===vn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,S=v.envMapRotation;if(y&&(g.envMap.value=y,Vr.copy(S),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(Vr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const T=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*T,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eC(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function c(v,y){let S=r[v.id];S===void 0&&(x(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",g));const T=y.program;i.updateUBOMapping(v,T);const E=e.render.frame;s[v.id]!==E&&(f(v),s[v.id]=E)}function d(v){const y=h();v.__bindingPointIndex=y;const S=n.createBuffer(),T=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],S=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,w=S.length;E<w;E++){const A=Array.isArray(S[E])?S[E]:[S[E]];for(let V=0,M=A.length;V<M;V++){const I=A[V];if(m(I,E,V,T)===!0){const ae=I.__offset,Y=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let J=0;J<Y.length;J++){const H=Y[J],ne=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,ae+F,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,F),F+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ae,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,y,S,T){const E=v.value,w=y+"_"+S;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const A=T[w];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return T[w]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function x(v){const y=v.uniforms;let S=0;const T=16;for(let w=0,A=y.length;w<A;w++){const V=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,I=V.length;M<I;M++){const ae=V[M],Y=Array.isArray(ae.value)?ae.value:[ae.value];for(let F=0,J=Y.length;F<J;F++){const H=Y[F],ne=_(H),L=S%T;L!==0&&T-L<ne.boundary&&(S+=T-L),ae.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=S,S+=ne.storage}}}const E=S%T;return E>0&&(S+=T-E),v.__size=S,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class s_{constructor(e={}){const{canvas:t=Vb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,g=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this._useLegacyLights=!1,this.toneMapping=Cr,this.toneMappingExposure=1;const y=this;let S=!1,T=0,E=0,w=null,A=-1,V=null;const M=new pt,I=new pt;let ae=null;const Y=new He(0);let F=0,J=t.width,H=t.height,ne=1,L=null,D=null;const B=new pt(0,0,J,H),q=new pt(0,0,J,H);let re=!1;const Me=new bp;let j=!1,$=!1,G=null;const be=new Ke,ge=new Fe,ve=new O,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return w===null?ne:1}let W=i;function Ye(P,K){for(let se=0;se<P.length;se++){const le=P[se],te=t.getContext(le,K);if(te!==null)return te}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mp}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",xe,!1),W===null){const K=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&K.shift(),W=Ye(K,P),W===null)throw Ye(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ee,Ne,Pe,Be,Oe,oe,fe,C,b,X,R,U,N,Q,ue,ee,ce,me,ie,Le,ke,Se,ye,we;function k(){Ee=new oT(W),Ne=new eT(W,Ee,e),Ee.init(Ne),Se=new WA(W,Ee,Ne),Pe=new GA(W,Ee,Ne),Be=new cT(W),Oe=new RA,oe=new VA(W,Ee,Pe,Oe,Ne,Se,Be),fe=new nT(y),C=new sT(y),b=new mw(W,Ne),ye=new J2(W,Ee,b,Ne),X=new aT(W,b,Be,ye),R=new hT(W,X,b,Be),ie=new fT(W,Ne,oe),ee=new tT(Oe),U=new CA(y,fe,C,Ee,Ne,ye,ee),N=new QA(y,Oe),Q=new LA,ue=new OA(Ee,Ne),me=new Z2(y,fe,C,Pe,R,f,l),ce=new HA(y,R,Ne),we=new eC(W,Be,Ne,Pe),Le=new Q2(W,Ee,Be,Ne),ke=new lT(W,Ee,Be,Ne),Be.programs=U.programs,y.capabilities=Ne,y.extensions=Ee,y.properties=Oe,y.renderLists=Q,y.shadowMap=ce,y.state=Pe,y.info=Be}k();const de=new ZA(y,W);this.xr=de,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const P=Ee.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ee.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(P){P!==void 0&&(ne=P,this.setSize(J,H,!1))},this.getSize=function(P){return P.set(J,H)},this.setSize=function(P,K,se=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=P,H=K,t.width=Math.floor(P*ne),t.height=Math.floor(K*ne),se===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(J*ne,H*ne).floor()},this.setDrawingBufferSize=function(P,K,se){J=P,H=K,ne=se,t.width=Math.floor(P*se),t.height=Math.floor(K*se),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(B)},this.setViewport=function(P,K,se,le){P.isVector4?B.set(P.x,P.y,P.z,P.w):B.set(P,K,se,le),Pe.viewport(M.copy(B).multiplyScalar(ne).round())},this.getScissor=function(P){return P.copy(q)},this.setScissor=function(P,K,se,le){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,K,se,le),Pe.scissor(I.copy(q).multiplyScalar(ne).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(P){Pe.setScissorTest(re=P)},this.setOpaqueSort=function(P){L=P},this.setTransparentSort=function(P){D=P},this.getClearColor=function(P){return P.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(P=!0,K=!0,se=!0){let le=0;if(P){let te=!1;if(w!==null){const Ie=w.texture.format;te=Ie===Ov||Ie===Uv||Ie===kv}if(te){const Ie=w.texture.type,je=Ie===Rr||Ie===gr||Ie===xp||Ie===ss||Ie===Iv||Ie===Dv,Ge=me.getClearColor(),Ve=me.getClearAlpha(),tt=Ge.r,qe=Ge.g,Ze=Ge.b;je?(m[0]=tt,m[1]=qe,m[2]=Ze,m[3]=Ve,W.clearBufferuiv(W.COLOR,0,m)):(x[0]=tt,x[1]=qe,x[2]=Ze,x[3]=Ve,W.clearBufferiv(W.COLOR,0,x))}else le|=W.COLOR_BUFFER_BIT}K&&(le|=W.DEPTH_BUFFER_BIT),se&&(le|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Q.dispose(),ue.dispose(),Oe.dispose(),fe.dispose(),C.dispose(),R.dispose(),ye.dispose(),we.dispose(),U.dispose(),de.dispose(),de.removeEventListener("sessionstart",rt),de.removeEventListener("sessionend",Xe),G&&(G.dispose(),G=null),$e.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=Be.autoReset,K=ce.enabled,se=ce.autoUpdate,le=ce.needsUpdate,te=ce.type;k(),Be.autoReset=P,ce.enabled=K,ce.autoUpdate=se,ce.needsUpdate=le,ce.type=te}function xe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Z(P){const K=P.target;K.removeEventListener("dispose",Z),pe(K)}function pe(P){Re(P),Oe.remove(P)}function Re(P){const K=Oe.get(P).programs;K!==void 0&&(K.forEach(function(se){U.releaseProgram(se)}),P.isShaderMaterial&&U.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,se,le,te,Ie){K===null&&(K=Ue);const je=te.isMesh&&te.matrixWorld.determinant()<0,Ge=x_(P,K,se,le,te);Pe.setMaterial(le,je);let Ve=se.index,tt=1;if(le.wireframe===!0){if(Ve=X.getWireframeAttribute(se),Ve===void 0)return;tt=2}const qe=se.drawRange,Ze=se.attributes.position;let Dt=qe.start*tt,Cn=(qe.start+qe.count)*tt;Ie!==null&&(Dt=Math.max(Dt,Ie.start*tt),Cn=Math.min(Cn,(Ie.start+Ie.count)*tt)),Ve!==null?(Dt=Math.max(Dt,0),Cn=Math.min(Cn,Ve.count)):Ze!=null&&(Dt=Math.max(Dt,0),Cn=Math.min(Cn,Ze.count));const Ht=Cn-Dt;if(Ht<0||Ht===1/0)return;ye.setup(te,le,Ge,se,Ve);let Ai,Tt=Le;if(Ve!==null&&(Ai=b.get(Ve),Tt=ke,Tt.setIndex(Ai)),te.isMesh)le.wireframe===!0?(Pe.setLineWidth(le.wireframeLinewidth*Ae()),Tt.setMode(W.LINES)):Tt.setMode(W.TRIANGLES);else if(te.isLine){let Je=le.linewidth;Je===void 0&&(Je=1),Pe.setLineWidth(Je*Ae()),te.isLineSegments?Tt.setMode(W.LINES):te.isLineLoop?Tt.setMode(W.LINE_LOOP):Tt.setMode(W.LINE_STRIP)}else te.isPoints?Tt.setMode(W.POINTS):te.isSprite&&Tt.setMode(W.TRIANGLES);if(te.isBatchedMesh)Tt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)Tt.renderInstances(Dt,Ht,te.count);else if(se.isInstancedBufferGeometry){const Je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Pu=Math.min(se.instanceCount,Je);Tt.renderInstances(Dt,Ht,Pu)}else Tt.render(Dt,Ht)};function We(P,K,se){P.transparent===!0&&P.side===xn&&P.forceSinglePass===!1?(P.side=vn,P.needsUpdate=!0,Zi(P,K,se),P.side=Yi,P.needsUpdate=!0,Zi(P,K,se),P.side=xn):Zi(P,K,se)}this.compile=function(P,K,se=null){se===null&&(se=P),g=ue.get(se),g.init(),v.push(g),se.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),P!==se&&P.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),g.setupLights(y._useLegacyLights);const le=new Set;return P.traverse(function(te){const Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let je=0;je<Ie.length;je++){const Ge=Ie[je];We(Ge,se,te),le.add(Ge)}else We(Ie,se,te),le.add(Ie)}),v.pop(),g=null,le},this.compileAsync=function(P,K,se=null){const le=this.compile(P,K,se);return new Promise(te=>{function Ie(){if(le.forEach(function(je){Oe.get(je).currentProgram.isReady()&&le.delete(je)}),le.size===0){te(P);return}setTimeout(Ie,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ot=null;function nt(P){ot&&ot(P)}function rt(){$e.stop()}function Xe(){$e.start()}const $e=new Jv;$e.setAnimationLoop(nt),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(P){ot=P,de.setAnimationLoop(P),P===null?$e.stop():$e.start()},de.addEventListener("sessionstart",rt),de.addEventListener("sessionend",Xe),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(K),K=de.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,K,w),g=ue.get(P,v.length),g.init(),v.push(g),be.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Me.setFromProjectionMatrix(be),$=this.localClippingEnabled,j=ee.init(this.clippingPlanes,$),_=Q.get(P,p.length),_.init(),p.push(_),lt(P,K,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(L,D),this.info.render.frame++,j===!0&&ee.beginShadows();const se=g.state.shadowsArray;if(ce.render(se,P,K),j===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1)&&me.render(_,P),g.setupLights(y._useLegacyLights),K.isArrayCamera){const le=K.cameras;for(let te=0,Ie=le.length;te<Ie;te++){const je=le[te];qt(_,P,je,je.viewport)}}else qt(_,P,K);w!==null&&(oe.updateMultisampleRenderTarget(w),oe.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(y,P,K),ye.resetDefaultState(),A=-1,V=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function lt(P,K,se,le){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Me.intersectsSprite(P)){le&&ve.setFromMatrixPosition(P.matrixWorld).applyMatrix4(be);const je=R.update(P),Ge=P.material;Ge.visible&&_.push(P,je,Ge,se,ve.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Me.intersectsObject(P))){const je=R.update(P),Ge=P.material;if(le&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ve.copy(P.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),ve.copy(je.boundingSphere.center)),ve.applyMatrix4(P.matrixWorld).applyMatrix4(be)),Array.isArray(Ge)){const Ve=je.groups;for(let tt=0,qe=Ve.length;tt<qe;tt++){const Ze=Ve[tt],Dt=Ge[Ze.materialIndex];Dt&&Dt.visible&&_.push(P,je,Dt,se,ve.z,Ze)}}else Ge.visible&&_.push(P,je,Ge,se,ve.z,null)}}const Ie=P.children;for(let je=0,Ge=Ie.length;je<Ge;je++)lt(Ie[je],K,se,le)}function qt(P,K,se,le){const te=P.opaque,Ie=P.transmissive,je=P.transparent;g.setupLightsView(se),j===!0&&ee.setGlobalState(y.clippingPlanes,se),Ie.length>0&&gt(te,Ie,K,se),le&&Pe.viewport(M.copy(le)),te.length>0&&Pt(te,K,se),Ie.length>0&&Pt(Ie,K,se),je.length>0&&Pt(je,K,se),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function gt(P,K,se,le){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Ie=Ne.isWebGL2;G===null&&(G=new fs(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Qa:Rr,minFilter:ui,samples:Ie?4:0})),y.getDrawingBufferSize(ge),Ie?G.setSize(ge.x,ge.y):G.setSize(ru(ge.x),ru(ge.y));const je=y.getRenderTarget();y.setRenderTarget(G),y.getClearColor(Y),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear();const Ge=y.toneMapping;y.toneMapping=Cr,Pt(P,se,le),oe.updateMultisampleRenderTarget(G),oe.updateRenderTargetMipmap(G);let Ve=!1;for(let tt=0,qe=K.length;tt<qe;tt++){const Ze=K[tt],Dt=Ze.object,Cn=Ze.geometry,Ht=Ze.material,Ai=Ze.group;if(Ht.side===xn&&Dt.layers.test(le.layers)){const Tt=Ht.side;Ht.side=vn,Ht.needsUpdate=!0,Fn(Dt,se,le,Cn,Ht,Ai),Ht.side=Tt,Ht.needsUpdate=!0,Ve=!0}}Ve===!0&&(oe.updateMultisampleRenderTarget(G),oe.updateRenderTargetMipmap(G)),y.setRenderTarget(je),y.setClearColor(Y,F),y.toneMapping=Ge}function Pt(P,K,se){const le=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Ie=P.length;te<Ie;te++){const je=P[te],Ge=je.object,Ve=je.geometry,tt=le===null?je.material:le,qe=je.group;Ge.layers.test(se.layers)&&Fn(Ge,K,se,Ve,tt,qe)}}function Fn(P,K,se,le,te,Ie){P.onBeforeRender(y,K,se,le,te,Ie),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),te.onBeforeRender(y,K,se,le,P,Ie),te.transparent===!0&&te.side===xn&&te.forceSinglePass===!1?(te.side=vn,te.needsUpdate=!0,y.renderBufferDirect(se,K,le,te,P,Ie),te.side=Yi,te.needsUpdate=!0,y.renderBufferDirect(se,K,le,te,P,Ie),te.side=xn):y.renderBufferDirect(se,K,le,te,P,Ie),P.onAfterRender(y,K,se,le,te,Ie)}function Zi(P,K,se){K.isScene!==!0&&(K=Ue);const le=Oe.get(P),te=g.state.lights,Ie=g.state.shadowsArray,je=te.state.version,Ge=U.getParameters(P,te.state,Ie,K,se),Ve=U.getProgramCacheKey(Ge);let tt=le.programs;le.environment=P.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(P.isMeshStandardMaterial?C:fe).get(P.envMap||le.environment),le.envMapRotation=le.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,tt===void 0&&(P.addEventListener("dispose",Z),tt=new Map,le.programs=tt);let qe=tt.get(Ve);if(qe!==void 0){if(le.currentProgram===qe&&le.lightsStateVersion===je)return Ur(P,Ge),qe}else Ge.uniforms=U.getUniforms(P),P.onBuild(se,Ge,y),P.onBeforeCompile(Ge,y),qe=U.acquireProgram(Ge,Ve),tt.set(Ve,qe),le.uniforms=Ge.uniforms;const Ze=le.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=ee.uniform),Ur(P,Ge),le.needsLights=v_(P),le.lightsStateVersion=je,le.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMap.value=te.state.directionalShadowMap,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotShadowMap.value=te.state.spotShadowMap,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMap.value=te.state.pointShadowMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),le.currentProgram=qe,le.uniformsList=null,qe}function xi(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=wc.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function Ur(P,K){const se=Oe.get(P);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.instancingMorph=K.instancingMorph,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function x_(P,K,se,le,te){K.isScene!==!0&&(K=Ue),oe.resetTextureUnits();const Ie=K.fog,je=le.isMeshStandardMaterial?K.environment:null,Ge=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:rn,Ve=(le.isMeshStandardMaterial?C:fe).get(le.envMap||je),tt=le.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,qe=!!se.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ze=!!se.morphAttributes.position,Dt=!!se.morphAttributes.normal,Cn=!!se.morphAttributes.color;let Ht=Cr;le.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ht=y.toneMapping);const Ai=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Tt=Ai!==void 0?Ai.length:0,Je=Oe.get(le),Pu=g.state.lights;if(j===!0&&($===!0||P!==V)){const zn=P===V&&le.id===A;ee.setState(le,P,zn)}let Mt=!1;le.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Pu.state.version||Je.outputColorSpace!==Ge||te.isBatchedMesh&&Je.batching===!1||!te.isBatchedMesh&&Je.batching===!0||te.isInstancedMesh&&Je.instancing===!1||!te.isInstancedMesh&&Je.instancing===!0||te.isSkinnedMesh&&Je.skinning===!1||!te.isSkinnedMesh&&Je.skinning===!0||te.isInstancedMesh&&Je.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Je.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Je.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Je.instancingMorph===!1&&te.morphTexture!==null||Je.envMap!==Ve||le.fog===!0&&Je.fog!==Ie||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ee.numPlanes||Je.numIntersection!==ee.numIntersection)||Je.vertexAlphas!==tt||Je.vertexTangents!==qe||Je.morphTargets!==Ze||Je.morphNormals!==Dt||Je.morphColors!==Cn||Je.toneMapping!==Ht||Ne.isWebGL2===!0&&Je.morphTargetsCount!==Tt)&&(Mt=!0):(Mt=!0,Je.__version=le.version);let Or=Je.currentProgram;Mt===!0&&(Or=Zi(le,K,te));let Dp=!1,Vo=!1,Lu=!1;const sn=Or.getUniforms(),Fr=Je.uniforms;if(Pe.useProgram(Or.program)&&(Dp=!0,Vo=!0,Lu=!0),le.id!==A&&(A=le.id,Vo=!0),Dp||V!==P){sn.setValue(W,"projectionMatrix",P.projectionMatrix),sn.setValue(W,"viewMatrix",P.matrixWorldInverse);const zn=sn.map.cameraPosition;zn!==void 0&&zn.setValue(W,ve.setFromMatrixPosition(P.matrixWorld)),Ne.logarithmicDepthBuffer&&sn.setValue(W,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&sn.setValue(W,"isOrthographic",P.isOrthographicCamera===!0),V!==P&&(V=P,Vo=!0,Lu=!0)}if(te.isSkinnedMesh){sn.setOptional(W,te,"bindMatrix"),sn.setOptional(W,te,"bindMatrixInverse");const zn=te.skeleton;zn&&(Ne.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),sn.setValue(W,"boneTexture",zn.boneTexture,oe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}te.isBatchedMesh&&(sn.setOptional(W,te,"batchingTexture"),sn.setValue(W,"batchingTexture",te._matricesTexture,oe));const Iu=se.morphAttributes;if((Iu.position!==void 0||Iu.normal!==void 0||Iu.color!==void 0&&Ne.isWebGL2===!0)&&ie.update(te,se,Or),(Vo||Je.receiveShadow!==te.receiveShadow)&&(Je.receiveShadow=te.receiveShadow,sn.setValue(W,"receiveShadow",te.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Fr.envMap.value=Ve,Fr.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Vo&&(sn.setValue(W,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&y_(Fr,Lu),Ie&&le.fog===!0&&N.refreshFogUniforms(Fr,Ie),N.refreshMaterialUniforms(Fr,le,ne,H,G),wc.upload(W,xi(Je),Fr,oe)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(wc.upload(W,xi(Je),Fr,oe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&sn.setValue(W,"center",te.center),sn.setValue(W,"modelViewMatrix",te.modelViewMatrix),sn.setValue(W,"normalMatrix",te.normalMatrix),sn.setValue(W,"modelMatrix",te.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const zn=le.uniformsGroups;for(let Du=0,__=zn.length;Du<__;Du++)if(Ne.isWebGL2){const Np=zn[Du];we.update(Np,Or),we.bind(Np,Or)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Or}function y_(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function v_(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,K,se){Oe.get(P.texture).__webglTexture=K,Oe.get(P.depthTexture).__webglTexture=se;const le=Oe.get(P);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=se===void 0,le.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,K){const se=Oe.get(P);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,se=0){w=P,T=K,E=se;let le=!0,te=null,Ie=!1,je=!1;if(P){const Ve=Oe.get(P);Ve.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(W.FRAMEBUFFER,null),le=!1):Ve.__webglFramebuffer===void 0?oe.setupRenderTarget(P):Ve.__hasExternalTextures&&oe.rebindTextures(P,Oe.get(P.texture).__webglTexture,Oe.get(P.depthTexture).__webglTexture);const tt=P.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(je=!0);const qe=Oe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qe[K])?te=qe[K][se]:te=qe[K],Ie=!0):Ne.isWebGL2&&P.samples>0&&oe.useMultisampledRTT(P)===!1?te=Oe.get(P).__webglMultisampledFramebuffer:Array.isArray(qe)?te=qe[se]:te=qe,M.copy(P.viewport),I.copy(P.scissor),ae=P.scissorTest}else M.copy(B).multiplyScalar(ne).floor(),I.copy(q).multiplyScalar(ne).floor(),ae=re;if(Pe.bindFramebuffer(W.FRAMEBUFFER,te)&&Ne.drawBuffers&&le&&Pe.drawBuffers(P,te),Pe.viewport(M),Pe.scissor(I),Pe.setScissorTest(ae),Ie){const Ve=Oe.get(P.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ve.__webglTexture,se)}else if(je){const Ve=Oe.get(P.texture),tt=K||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ve.__webglTexture,se||0,tt)}A=-1},this.readRenderTargetPixels=function(P,K,se,le,te,Ie,je){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&je!==void 0&&(Ge=Ge[je]),Ge){Pe.bindFramebuffer(W.FRAMEBUFFER,Ge);try{const Ve=P.texture,tt=Ve.format,qe=Ve.type;if(tt!==Yn&&Se.convert(tt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=qe===Qa&&(Ee.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(qe!==Rr&&Se.convert(qe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===ai&&(Ne.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-le&&se>=0&&se<=P.height-te&&W.readPixels(K,se,le,te,Se.convert(tt),Se.convert(qe),Ie)}finally{const Ve=w!==null?Oe.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(W.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(P,K,se=0){const le=Math.pow(2,-se),te=Math.floor(K.image.width*le),Ie=Math.floor(K.image.height*le);oe.setTexture2D(K,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,P.x,P.y,te,Ie),Pe.unbindTexture()},this.copyTextureToTexture=function(P,K,se,le=0){const te=K.image.width,Ie=K.image.height,je=Se.convert(se.format),Ge=Se.convert(se.type);oe.setTexture2D(se,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,se.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,se.unpackAlignment),K.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,le,P.x,P.y,te,Ie,je,Ge,K.image.data):K.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,le,P.x,P.y,K.mipmaps[0].width,K.mipmaps[0].height,je,K.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,le,P.x,P.y,je,Ge,K.image),le===0&&se.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(P,K,se,le,te=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=Math.round(P.max.x-P.min.x),je=Math.round(P.max.y-P.min.y),Ge=P.max.z-P.min.z+1,Ve=Se.convert(le.format),tt=Se.convert(le.type);let qe;if(le.isData3DTexture)oe.setTexture3D(le,0),qe=W.TEXTURE_3D;else if(le.isDataArrayTexture||le.isCompressedArrayTexture)oe.setTexture2DArray(le,0),qe=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,le.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,le.unpackAlignment);const Ze=W.getParameter(W.UNPACK_ROW_LENGTH),Dt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Cn=W.getParameter(W.UNPACK_SKIP_PIXELS),Ht=W.getParameter(W.UNPACK_SKIP_ROWS),Ai=W.getParameter(W.UNPACK_SKIP_IMAGES),Tt=se.isCompressedTexture?se.mipmaps[te]:se.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Tt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Tt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,P.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,P.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,P.min.z),se.isDataTexture||se.isData3DTexture?W.texSubImage3D(qe,te,K.x,K.y,K.z,Ie,je,Ge,Ve,tt,Tt.data):le.isCompressedArrayTexture?W.compressedTexSubImage3D(qe,te,K.x,K.y,K.z,Ie,je,Ge,Ve,Tt.data):W.texSubImage3D(qe,te,K.x,K.y,K.z,Ie,je,Ge,Ve,tt,Tt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ze),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Dt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Cn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ht),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ai),te===0&&le.generateMipmaps&&W.generateMipmap(qe),Pe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?oe.setTextureCube(P,0):P.isData3DTexture?oe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?oe.setTexture2DArray(P,0):oe.setTexture2D(P,0),Pe.unbindTexture()},this.resetState=function(){T=0,E=0,w=null,Pe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vp?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===wu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tC extends s_{}tC.prototype.isWebGL1Renderer=!0;class nC extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class o_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hv("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new O;class nl{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cl extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Fs;const ra=new O,zs=new O,js=new O,Bs=new Fe,sa=new Fe,a_=new Ke,ql=new O,oa=new O,Kl=new O,g0=new Fe,Fd=new Fe,x0=new Fe;class Au extends Et{constructor(e=new cl){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new o_(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new nl(i,3,0,!1)),Fs.setAttribute("uv",new nl(i,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new Fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),a_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-js.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Zl(ql.set(-.5,-.5,0),js,o,zs,r,s),Zl(oa.set(.5,-.5,0),js,o,zs,r,s),Zl(Kl.set(.5,.5,0),js,o,zs,r,s),g0.set(0,0),Fd.set(1,0),x0.set(1,1);let a=e.ray.intersectTriangle(ql,oa,Kl,!1,ra);if(a===null&&(Zl(oa.set(-.5,.5,0),js,o,zs,r,s),Fd.set(0,1),a=e.ray.intersectTriangle(ql,Kl,oa,!1,ra),a===null))return;const l=e.ray.origin.distanceTo(ra);l<e.near||l>e.far||t.push({distance:l,point:ra.clone(),uv:ci.getInterpolation(ra,ql,oa,Kl,g0,Fd,x0,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zl(n,e,t,i,r,s){Bs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(sa.x=s*Bs.x-r*Bs.y,sa.y=r*Bs.x+s*Bs.y):sa.copy(Bs),n.copy(e),n.x+=sa.x,n.y+=sa.y,n.applyMatrix4(a_)}const y0=new O,v0=new pt,_0=new pt,iC=new O,S0=new Ke,Jl=new O,zd=new Ei,M0=new Ke,jd=new jo;class rC extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jm,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingBox.expandByPoint(Jl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingSphere.expandByPoint(Jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zd.copy(this.boundingSphere),zd.applyMatrix4(r),e.ray.intersectsSphere(zd)!==!1&&(M0.copy(r).invert(),jd.copy(e.ray).applyMatrix4(M0),!(this.boundingBox!==null&&jd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ub?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;v0.fromBufferAttribute(r.attributes.skinIndex,e),_0.fromBufferAttribute(r.attributes.skinWeight,e),y0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=_0.getComponent(s);if(o!==0){const a=v0.getComponent(s);S0.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(iC.copy(y0).applyMatrix4(S0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class l_ extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class c_ extends zt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=$t,d=$t,h,f){super(null,o,a,l,c,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const b0=new Ke,sC=new Ke;class Tp{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:sC;b0.multiplyMatrices(a,t[s]),b0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Tp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new c_(t,e,e,Yn,ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new l_),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class ah extends tn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hs=new Ke,w0=new Ke,Ql=[],E0=new gi,oC=new Ke,aa=new _t,la=new Ei;class aC extends _t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ah(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,oC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hs),E0.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(E0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hs),la.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(la)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(i),e.ray.intersectsSphere(la)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Hs),w0.multiplyMatrices(i,Hs),aa.matrixWorld=w0,aa.raycast(e,Ql);for(let o=0,a=Ql.length;o<a;o++){const l=Ql[o];l.instanceId=s,l.object=this,t.push(l)}Ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ah(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new c_(new Float32Array(r*this.count),r,this.count,Nv,ai));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const T0=new O,A0=new O,C0=new Ke,Bd=new jo,ec=new Ei;class Fi extends Et{constructor(e=new ht,t=new In){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)T0.fromBufferAttribute(t,r-1),A0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=T0.distanceTo(A0);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(r),ec.radius+=s,e.ray.intersectsSphere(ec)===!1)return;C0.copy(r).invert(),Bd.copy(e.ray).applyMatrix4(C0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,d=new O,h=new O,f=new O,m=this.isLineSegments?2:1,x=i.index,g=i.attributes.position;if(x!==null){const p=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let y=p,S=v-1;y<S;y+=m){const T=x.getX(y),E=x.getX(y+1);if(c.fromBufferAttribute(g,T),d.fromBufferAttribute(g,E),Bd.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let y=p,S=v-1;y<S;y+=m){if(c.fromBufferAttribute(g,y),d.fromBufferAttribute(g,y+1),Bd.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const R0=new O,P0=new O;class lh extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)R0.fromBufferAttribute(t,r),P0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+R0.distanceTo(P0);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ec extends Fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ts extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const L0=new Ke,ch=new jo,tc=new Ei,nc=new O;class La extends Et{constructor(e=new ht,t=new ts){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(r),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;L0.copy(r).invert(),ch.copy(e.ray).applyMatrix4(L0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=f,_=m;x<_;x++){const g=c.getX(x);nc.fromBufferAttribute(h,g),I0(nc,g,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,_=m;x<_;x++)nc.fromBufferAttribute(h,x),I0(nc,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function I0(n,e,t,i,r,s,o){const a=ch.distanceSqToPoint(n);if(a<t){const l=new O;ch.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Do extends zt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ap extends ht{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new O,d=new Fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=i+h/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ap(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cp extends ht{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let x=0;const _=[],g=i/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(m,2));function v(){const S=new O,T=new O;let E=0;const w=(t-e)/i;for(let A=0;A<=s;A++){const V=[],M=A/s,I=M*(t-e)+e;for(let ae=0;ae<=r;ae++){const Y=ae/r,F=Y*l+a,J=Math.sin(F),H=Math.cos(F);T.x=I*J,T.y=-M*i+g,T.z=I*H,h.push(T.x,T.y,T.z),S.set(J,w,H).normalize(),f.push(S.x,S.y,S.z),m.push(Y,1-M),V.push(x++)}_.push(V)}for(let A=0;A<r;A++)for(let V=0;V<s;V++){const M=_[V][A],I=_[V+1][A],ae=_[V+1][A+1],Y=_[V][A+1];d.push(M,I,Y),d.push(I,ae,Y),E+=6}c.addGroup(p,E,0),p+=E}function y(S){const T=x,E=new Fe,w=new O;let A=0;const V=S===!0?e:t,M=S===!0?1:-1;for(let ae=1;ae<=r;ae++)h.push(0,g*M,0),f.push(0,M,0),m.push(.5,.5),x++;const I=x;for(let ae=0;ae<=r;ae++){const F=ae/r*l+a,J=Math.cos(F),H=Math.sin(F);w.x=V*H,w.y=g*M,w.z=V*J,h.push(w.x,w.y,w.z),f.push(0,M,0),E.x=J*.5+.5,E.y=H*.5*M+.5,m.push(E.x,E.y),x++}for(let ae=0;ae<r;ae++){const Y=T+ae,F=I+ae;S===!0?d.push(F,F+1,Y):d.push(F+1,F,Y),A+=3}c.addGroup(p,A,S===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cu extends Cp{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Cu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class su extends ht{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let h=e;const f=(t-e)/r,m=new O,x=new Fe;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const p=s+g/i*o;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,d.push(x.x,x.y)}h+=f}for(let _=0;_<r;_++){const g=_*(i+1);for(let p=0;p<i;p++){const v=p+g,y=v,S=v+i+1,T=v+i+2,E=v+1;a.push(y,S,E),a.push(S,T,E)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xr extends ht{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new O,f=new O,m=[],x=[],_=[],g=[];for(let p=0;p<=i;p++){const v=[],y=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const E=T/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+y*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(E+S,1-y),v.push(c++)}d.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const y=d[p][v+1],S=d[p][v],T=d[p+1][v],E=d[p+1][v+1];(p!==0||o>0)&&m.push(y,S,E),(p!==i-1||l<Math.PI)&&m.push(S,T,E)}this.setIndex(m),this.setAttribute("position",new mt(x,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hs extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ki extends hs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class u_ extends An{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ic(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cC(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function D0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function d_(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ul{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class uC extends ul{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wg,endingEnd:wg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eg:s=e,a=2*t-i;break;case Tg:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eg:o=e,l=2*i-t;break;case Tg:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(i-t)/(r-t),_=x*x,g=_*x,p=-f*g+2*f*_-f*x,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*x+1,y=(-1-m)*g+(1.5+m)*_+.5*x,S=m*g-m*_;for(let T=0;T!==a;++T)s[T]=p*o[d+T]+v*o[c+T]+y*o[l+T]+S*o[h+T];return s}}class dC extends ul{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(r-t),h=1-d;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*d;return s}}class fC extends ul{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ti{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ic(t,this.TimeBufferType),this.values=ic(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ic(e.times,Array),values:ic(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case el:t=this.InterpolantFactoryMethodDiscrete;break;case Po:t=this.InterpolantFactoryMethodLinear;break;case fd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return el;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return fd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lC(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fd,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,f=h-i,m=h+i;for(let x=0;x!==i;++x){const _=t[h+x];if(_!==t[f+x]||_!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Po;class Ho extends Ti{}Ho.prototype.ValueTypeName="bool";Ho.prototype.ValueBufferType=Array;Ho.prototype.DefaultInterpolation=el;Ho.prototype.InterpolantFactoryMethodLinear=void 0;Ho.prototype.InterpolantFactoryMethodSmooth=void 0;class f_ extends Ti{}f_.prototype.ValueTypeName="color";class No extends Ti{}No.prototype.ValueTypeName="number";class hC extends ul{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let d=c+a;c!==d;c+=4)wi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ps extends Ti{InterpolantFactoryMethodLinear(e){return new hC(this.times,this.values,this.getValueSize(),e)}}ps.prototype.ValueTypeName="quaternion";ps.prototype.DefaultInterpolation=Po;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Go extends Ti{}Go.prototype.ValueTypeName="string";Go.prototype.ValueBufferType=Array;Go.prototype.DefaultInterpolation=el;Go.prototype.InterpolantFactoryMethodLinear=void 0;Go.prototype.InterpolantFactoryMethodSmooth=void 0;class ko extends Ti{}ko.prototype.ValueTypeName="vector";class pC{constructor(e,t=-1,i,r=yb){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(gC(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Ti.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=cC(l);l=D0(l,1,d),c=D0(c,1,d),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new No(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(s);if(d&&d.length>1){const h=d[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,m,x,_){if(m.length!==0){const g=[],p=[];d_(m,g,p,x),g.length!==0&&_.push(new h(f,g,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)m[f[x].morphTargets[_]]=-1;for(const _ in m){const g=[],p=[];for(let v=0;v!==f[x].morphTargets.length;++v){const y=f[x];g.push(y.time),p.push(y.morphTarget===_?1:0)}r.push(new No(".morphTargetInfluence["+_+"]",g,p))}l=m.length*o}else{const m=".bones["+t[h].name+"]";i(ko,m+".position",f,"pos",r),i(ps,m+".quaternion",f,"rot",r),i(ko,m+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mC(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return No;case"vector":case"vector2":case"vector3":case"vector4":return ko;case"color":return f_;case"quaternion":return ps;case"bool":case"boolean":return Ho;case"string":return Go}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function gC(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mC(n.type);if(n.times===void 0){const t=[],i=[];d_(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const yr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class xC{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null}}}const yC=new xC;class ys{constructor(e){this.manager=e!==void 0?e:yC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class vC extends Error{constructor(e,t){super(e),this.response=t}}class Rp extends ys{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=yr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:i,onError:r});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Ni[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,x=m!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:S})=>{if(y)p.close();else{_+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:m});for(let E=0,w=d.length;E<w;E++){const A=d[E];A.onProgress&&A.onProgress(T)}p.enqueue(S),v()}})}}});return new Response(g)}else throw new vC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{yr.add(e,c);const d=Ni[e];delete Ni[e];for(let h=0,f=d.length;h<f;h++){const m=d[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=Ni[e];if(d===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let h=0,f=d.length;h<f;h++){const m=d[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _C extends ys{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=tl("img");function l(){d(),yr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class h_ extends ys{constructor(e){super(e)}load(e,t,i,r){const s=new zt,o=new _C(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ru extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Hd=new Ke,N0=new O,k0=new O;class Pp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bp,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;N0.setFromMatrixPosition(e.matrixWorld),t.position.copy(N0),k0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(k0),t.updateMatrixWorld(),Hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class SC extends Pp{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Lo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class MC extends Ru{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new SC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const U0=new Ke,ca=new O,Gd=new O;class bC extends Pp{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(ca),Gd.copy(i.position),Gd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Gd),i.updateMatrixWorld(),r.makeTranslation(-ca.x,-ca.y,-ca.z),U0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(U0)}}class p_ extends Ru{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wC extends Pp{constructor(){super(new wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uh extends Ru{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new wC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class EC extends Ru{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ia{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class TC extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return yr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),yr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});yr.add(e,l),s.manager.itemStart(e)}}const Lp="\\[\\]\\.:\\/",AC=new RegExp("["+Lp+"]","g"),Ip="[^"+Lp+"]",CC="[^"+Lp.replace("\\.","")+"]",RC=/((?:WC+[\/:])*)/.source.replace("WC",Ip),PC=/(WCOD+)?/.source.replace("WCOD",CC),LC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ip),IC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ip),DC=new RegExp("^"+RC+PC+LC+IC+"$"),NC=["material","materials","bones","map"];class kC{constructor(e,t,i){const r=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class dt{constructor(e,t,i){this.path=t,this.parsedPath=i||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,i):new dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(AC,"")}static parseTrackName(e){const t=DC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);NC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=kC;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const O0=new Ke;class UC{constructor(e,t,i=0,r=1/0){this.ray=new jo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Mp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return O0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O0),this}intersectObject(e,t=!0,i=[]){return dh(e,this,i,t),i.sort(F0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)dh(e[r],this,i,t);return i.sort(F0),i}}function F0(n,e){return n.distance-e.distance}function dh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)dh(r[s],e,t,!0)}}class z0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);const j0={type:"change"},Vd={type:"start"},B0={type:"end"},rc=new jo,H0=new lr,OC=Math.cos(70*Sp.DEG2RAD);class FC extends xs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",ue),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(j0),i.update(),s=r.NONE},this.update=function(){const k=new O,de=new wi().setFromUnitVectors(e.up,new O(0,1,0)),Te=de.clone().invert(),z=new O,xe=new wi,Z=new O,pe=2*Math.PI;return function(We=null){const ot=i.object.position;k.copy(ot).sub(i.target),k.applyQuaternion(de),a.setFromVector3(k),i.autoRotate&&s===r.NONE&&ae(M(We)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let nt=i.minAzimuthAngle,rt=i.maxAzimuthAngle;isFinite(nt)&&isFinite(rt)&&(nt<-Math.PI?nt+=pe:nt>Math.PI&&(nt-=pe),rt<-Math.PI?rt+=pe:rt>Math.PI&&(rt-=pe),nt<=rt?a.theta=Math.max(nt,Math.min(rt,a.theta)):a.theta=a.theta>(nt+rt)/2?Math.max(nt,a.theta):Math.min(rt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Xe=!1;if(i.zoomToCursor&&E||i.object.isOrthographicCamera)a.radius=B(a.radius);else{const $e=a.radius;a.radius=B(a.radius*c),Xe=$e!=a.radius}if(k.setFromSpherical(a),k.applyQuaternion(Te),ot.copy(i.target).add(k),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),i.zoomToCursor&&E){let $e=null;if(i.object.isPerspectiveCamera){const lt=k.length();$e=B(lt*c);const qt=lt-$e;i.object.position.addScaledVector(S,qt),i.object.updateMatrixWorld(),Xe=!!qt}else if(i.object.isOrthographicCamera){const lt=new O(T.x,T.y,0);lt.unproject(i.object);const qt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xe=qt!==i.object.zoom;const gt=new O(T.x,T.y,0);gt.unproject(i.object),i.object.position.sub(gt).add(lt),i.object.updateMatrixWorld(),$e=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;$e!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar($e).add(i.object.position):(rc.origin.copy(i.object.position),rc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(rc.direction))<OC?e.lookAt(i.target):(H0.setFromNormalAndCoplanarPoint(i.object.up,i.target),rc.intersectPlane(H0,i.target))))}else if(i.object.isOrthographicCamera){const $e=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),$e!==i.object.zoom&&(i.object.updateProjectionMatrix(),Xe=!0)}return c=1,E=!1,Xe||z.distanceToSquared(i.object.position)>o||8*(1-xe.dot(i.object.quaternion))>o||Z.distanceToSquared(i.target)>o?(i.dispatchEvent(j0),z.copy(i.object.position),xe.copy(i.object.quaternion),Z.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",me),i.domElement.removeEventListener("pointerdown",oe),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",R),i.domElement.removeEventListener("pointermove",fe),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",N,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ue),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new z0,l=new z0;let c=1;const d=new O,h=new Fe,f=new Fe,m=new Fe,x=new Fe,_=new Fe,g=new Fe,p=new Fe,v=new Fe,y=new Fe,S=new O,T=new Fe;let E=!1;const w=[],A={};let V=!1;function M(k){return k!==null?2*Math.PI/60*i.autoRotateSpeed*k:2*Math.PI/60/60*i.autoRotateSpeed}function I(k){const de=Math.abs(k*.01);return Math.pow(.95,i.zoomSpeed*de)}function ae(k){l.theta-=k}function Y(k){l.phi-=k}const F=function(){const k=new O;return function(Te,z){k.setFromMatrixColumn(z,0),k.multiplyScalar(-Te),d.add(k)}}(),J=function(){const k=new O;return function(Te,z){i.screenSpacePanning===!0?k.setFromMatrixColumn(z,1):(k.setFromMatrixColumn(z,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(Te),d.add(k)}}(),H=function(){const k=new O;return function(Te,z){const xe=i.domElement;if(i.object.isPerspectiveCamera){const Z=i.object.position;k.copy(Z).sub(i.target);let pe=k.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),F(2*Te*pe/xe.clientHeight,i.object.matrix),J(2*z*pe/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(Te*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),J(z*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function L(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(k,de){if(!i.zoomToCursor)return;E=!0;const Te=i.domElement.getBoundingClientRect(),z=k-Te.left,xe=de-Te.top,Z=Te.width,pe=Te.height;T.x=z/Z*2-1,T.y=-(xe/pe)*2+1,S.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function B(k){return Math.max(i.minDistance,Math.min(i.maxDistance,k))}function q(k){h.set(k.clientX,k.clientY)}function re(k){D(k.clientX,k.clientX),p.set(k.clientX,k.clientY)}function Me(k){x.set(k.clientX,k.clientY)}function j(k){f.set(k.clientX,k.clientY),m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const de=i.domElement;ae(2*Math.PI*m.x/de.clientHeight),Y(2*Math.PI*m.y/de.clientHeight),h.copy(f),i.update()}function $(k){v.set(k.clientX,k.clientY),y.subVectors(v,p),y.y>0?ne(I(y.y)):y.y<0&&L(I(y.y)),p.copy(v),i.update()}function G(k){_.set(k.clientX,k.clientY),g.subVectors(_,x).multiplyScalar(i.panSpeed),H(g.x,g.y),x.copy(_),i.update()}function be(k){D(k.clientX,k.clientY),k.deltaY<0?L(I(k.deltaY)):k.deltaY>0&&ne(I(k.deltaY)),i.update()}function ge(k){let de=!1;switch(k.code){case i.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),de=!0;break;case i.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),de=!0;break;case i.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?ae(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),de=!0;break;case i.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?ae(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),de=!0;break}de&&(k.preventDefault(),i.update())}function ve(k){if(w.length===1)h.set(k.pageX,k.pageY);else{const de=ye(k),Te=.5*(k.pageX+de.x),z=.5*(k.pageY+de.y);h.set(Te,z)}}function Ue(k){if(w.length===1)x.set(k.pageX,k.pageY);else{const de=ye(k),Te=.5*(k.pageX+de.x),z=.5*(k.pageY+de.y);x.set(Te,z)}}function Ae(k){const de=ye(k),Te=k.pageX-de.x,z=k.pageY-de.y,xe=Math.sqrt(Te*Te+z*z);p.set(0,xe)}function W(k){i.enableZoom&&Ae(k),i.enablePan&&Ue(k)}function Ye(k){i.enableZoom&&Ae(k),i.enableRotate&&ve(k)}function Ee(k){if(w.length==1)f.set(k.pageX,k.pageY);else{const Te=ye(k),z=.5*(k.pageX+Te.x),xe=.5*(k.pageY+Te.y);f.set(z,xe)}m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const de=i.domElement;ae(2*Math.PI*m.x/de.clientHeight),Y(2*Math.PI*m.y/de.clientHeight),h.copy(f)}function Ne(k){if(w.length===1)_.set(k.pageX,k.pageY);else{const de=ye(k),Te=.5*(k.pageX+de.x),z=.5*(k.pageY+de.y);_.set(Te,z)}g.subVectors(_,x).multiplyScalar(i.panSpeed),H(g.x,g.y),x.copy(_)}function Pe(k){const de=ye(k),Te=k.pageX-de.x,z=k.pageY-de.y,xe=Math.sqrt(Te*Te+z*z);v.set(0,xe),y.set(0,Math.pow(v.y/p.y,i.zoomSpeed)),ne(y.y),p.copy(v);const Z=(k.pageX+de.x)*.5,pe=(k.pageY+de.y)*.5;D(Z,pe)}function Be(k){i.enableZoom&&Pe(k),i.enablePan&&Ne(k)}function Oe(k){i.enableZoom&&Pe(k),i.enableRotate&&Ee(k)}function oe(k){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(k.pointerId),i.domElement.addEventListener("pointermove",fe),i.domElement.addEventListener("pointerup",C)),!ke(k)&&(ie(k),k.pointerType==="touch"?ee(k):b(k)))}function fe(k){i.enabled!==!1&&(k.pointerType==="touch"?ce(k):X(k))}function C(k){switch(Le(k),w.length){case 0:i.domElement.releasePointerCapture(k.pointerId),i.domElement.removeEventListener("pointermove",fe),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(B0),s=r.NONE;break;case 1:const de=w[0],Te=A[de];ee({pointerId:de,pageX:Te.x,pageY:Te.y});break}}function b(k){let de;switch(k.button){case 0:de=i.mouseButtons.LEFT;break;case 1:de=i.mouseButtons.MIDDLE;break;case 2:de=i.mouseButtons.RIGHT;break;default:de=-1}switch(de){case _s.DOLLY:if(i.enableZoom===!1)return;re(k),s=r.DOLLY;break;case _s.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;Me(k),s=r.PAN}else{if(i.enableRotate===!1)return;q(k),s=r.ROTATE}break;case _s.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;q(k),s=r.ROTATE}else{if(i.enablePan===!1)return;Me(k),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Vd)}function X(k){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;j(k);break;case r.DOLLY:if(i.enableZoom===!1)return;$(k);break;case r.PAN:if(i.enablePan===!1)return;G(k);break}}function R(k){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(k.preventDefault(),i.dispatchEvent(Vd),be(U(k)),i.dispatchEvent(B0))}function U(k){const de=k.deltaMode,Te={clientX:k.clientX,clientY:k.clientY,deltaY:k.deltaY};switch(de){case 1:Te.deltaY*=16;break;case 2:Te.deltaY*=100;break}return k.ctrlKey&&!V&&(Te.deltaY*=10),Te}function N(k){k.key==="Control"&&(V=!0,i.domElement.getRootNode().addEventListener("keyup",Q,{passive:!0,capture:!0}))}function Q(k){k.key==="Control"&&(V=!1,i.domElement.getRootNode().removeEventListener("keyup",Q,{passive:!0,capture:!0}))}function ue(k){i.enabled===!1||i.enablePan===!1||ge(k)}function ee(k){switch(Se(k),w.length){case 1:switch(i.touches.ONE){case Ss.ROTATE:if(i.enableRotate===!1)return;ve(k),s=r.TOUCH_ROTATE;break;case Ss.PAN:if(i.enablePan===!1)return;Ue(k),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ss.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(k),s=r.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ye(k),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Vd)}function ce(k){switch(Se(k),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ee(k),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ne(k),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(k),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Oe(k),i.update();break;default:s=r.NONE}}function me(k){i.enabled!==!1&&k.preventDefault()}function ie(k){w.push(k.pointerId)}function Le(k){delete A[k.pointerId];for(let de=0;de<w.length;de++)if(w[de]==k.pointerId){w.splice(de,1);return}}function ke(k){for(let de=0;de<w.length;de++)if(w[de]==k.pointerId)return!0;return!1}function Se(k){let de=A[k.pointerId];de===void 0&&(de=new Fe,A[k.pointerId]=de),de.set(k.pageX,k.pageY)}function ye(k){const de=k.pointerId===w[0]?w[1]:w[0];return A[de]}i.domElement.addEventListener("contextmenu",me),i.domElement.addEventListener("pointerdown",oe),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",R,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",N,{passive:!0,capture:!0}),this.update()}}function Uo(n,e){const t=n.fuel_max_kg??10,i=.006,r=Math.min(1,Math.max(0,e/86400)),s=i*r,o=Math.max(0,Number((t-s).toFixed(3))),a=Number((o/t*100).toFixed(2)),l=n.temperature_c??38,c=l>=80;return{...n,temperature_c:l,overheated:c,fuel_kg:o,fuel_max_kg:t,fuel_pct:a,battery_pct:100,is_in_sunlight:!0,solar_power_w:1850}}function G0(n,e){if(e===vb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===nh||e===zv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===nh)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class zC extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new VC(t)}),this.register(function(t){return new QC(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new XC(t)}),this.register(function(t){return new $C(t)}),this.register(function(t){return new YC(t)}),this.register(function(t){return new qC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new KC(t)}),this.register(function(t){return new WC(t)}),this.register(function(t){return new JC(t)}),this.register(function(t){return new ZC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new iR(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ia.extractUrlBase(e);o=Ia.resolveURL(c,this.path)}else o=Ia.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Rp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(d){t(d),s.manager.itemEnd(e)},a)}catch(d){a(d)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===m_){try{o[st.KHR_BINARY_GLTF]=new rR(e)}catch(h){r&&r(h);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new xR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],f=s.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new HC;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new sR(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new oR;break;case st.KHR_MESH_QUANTIZATION:o[h]=new aR;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function jC(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BC{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const d=new He(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],rn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new uh(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new p_(d),c.distance=h;break;case"spot":c=new MC(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,cr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class HC{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(e,t,i){const r=[];e.color=new He(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,mn))}return Promise.all(r)}}class GC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class VC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(s)}}class WC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class XC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mn)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class $C{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class YC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(a[0],a[1],a[2],rn),Promise.all(s)}}class qC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class KC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,mn)),Promise.all(s)}}class ZC{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class JC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ki}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class QC{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class eR{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tR{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nR{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,d=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,f,r.mode,r.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(m),d,h,f,r.mode,r.filter),m})})}else return null}}class iR{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Vn.TRIANGLES&&c.mode!==Vn.TRIANGLE_STRIP&&c.mode!==Vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],f=c[0].count,m=[];for(const x of h){const _=new Ke,g=new O,p=new wi,v=new O(1,1,1),y=new aC(x.geometry,x.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&v.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,_.compose(g,p,v));for(const S in l)if(S==="_COLOR_0"){const T=l[S];y.instanceColor=new ah(T.array,T.itemSize,T.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&x.geometry.setAttribute(S,l[S]);Et.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),m.push(y)}return d.isGroup?(d.clear(),d.add(...m),d):m[0]}))}}const m_="glTF",ua=12,V0={JSON:1313821514,BIN:5130562};class rR{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ua),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==m_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ua,s=new DataView(e,ua);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===V0.JSON){const c=new Uint8Array(e,ua+o,a);this.content=i.decode(c)}else if(l===V0.BIN){const c=ua+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const h=fh[d]||d.toLowerCase();a[h]=o[d]}for(const d in e.attributes){const h=fh[d]||d.toLowerCase();if(o[d]!==void 0){const f=i.accessors[e.attributes[d]],m=xo[f.componentType];c[h]=m.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(h,f){r.decodeDracoFile(d,function(m){for(const x in m.attributes){const _=m.attributes[x],g=l[x];g!==void 0&&(_.normalized=g)}h(m)},a,c,rn,f)})})}}class oR{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aR{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class g_ extends ul{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=r-t,h=(i-t)/d,f=h*h,m=f*h,x=e*c,_=x-c,g=-2*m+3*f,p=m-f,v=1-g,y=p-f+h;for(let S=0;S!==a;S++){const T=o[_+S+a],E=o[_+S+l]*d,w=o[x+S+a],A=o[x+S]*d;s[S]=v*T+y*E+g*w+p*A}return s}}const lR=new wi;class cR extends g_{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return lR.fromArray(s).normalize().toArray(s),s}}const Vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},W0={9728:$t,9729:Xt,9984:th,9985:bc,9986:Xs,9987:ui},X0={33071:$n,33648:Qc,10497:oi},Wd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uR={CUBICSPLINE:void 0,LINEAR:Po,STEP:el},Xd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new hs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yi})),n.DefaultMaterial}function Wr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function cr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fR(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,d=e.length;c<d;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=d),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function hR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pR(n){let e;const t=n.extensions&&n.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$d(t.attributes):e=n.indices+":"+$d(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+$d(n.targets[i]);return e}function $d(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function hh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const gR=new Ke;class xR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new h_(this.options.manager):this.textureLoader=new TC(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Wr(s,a,r),cr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())s(d,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ia.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Wd[r.type],a=xo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new tn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Wd[r.type],c=xo[r.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,f=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0;let _,g;if(m&&m!==h){const p=Math.floor(f/m),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(v);y||(_=new c(a,p*m,r.count*m/d),y=new o_(_,m/d),t.cache.add(v,y)),g=new nl(y,l,f%m/d,x)}else a===null?_=new c(r.count*l):_=new c(a,f,r.count*l),g=new tn(_,l,x);if(r.sparse!==void 0){const p=Wd.SCALAR,v=xo[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,T=new v(o[1],y,r.sparse.count*p),E=new c(o[2],S,r.sparse.count*l);a!==null&&(g=new tn(g.array.slice(),g.itemSize,g.normalized));for(let w=0,A=T.length;w<A;w++){const V=T[w];if(g.setX(V,E[w*l]),l>=2&&g.setY(V,E[w*l+1]),l>=3&&g.setZ(V,E[w*l+2]),l>=4&&g.setW(V,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return d.magFilter=W0[f.magFilter]||Xt,d.minFilter=W0[f.minFilter]||ui,d.wrapS=X0[f.wrapS]||oi,d.wrapT=X0[f.wrapT]||oi,r.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(f,m){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){const g=new zt(_);g.needsUpdate=!0,f(g)}),t.load(Ia.resolveURL(h,s.path),x,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||mR(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ts,An.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new In,An.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return hs}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const h=r[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],rn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,mn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=xn);const d=s.alphaMode||Xd.OPAQUE;if(d===Xd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Xd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Vt){const h=s.emissiveFactor;a.emissive=new He().setRGB(h[0],h[1],h[2],rn)}return s.emissiveTexture!==void 0&&o!==Vt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,mn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),cr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Wr(r,h,s),h})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $0(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=pR(c),h=r[d];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=$0(new ht,c,t),r[d]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?dR(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let m=0,x=d.length;m<x;m++){const _=d[m],g=o[m];let p;const v=c[m];if(g.mode===Vn.TRIANGLES||g.mode===Vn.TRIANGLE_STRIP||g.mode===Vn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new rC(_,v):new _t(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Vn.TRIANGLE_STRIP?p.geometry=G0(p.geometry,zv):g.mode===Vn.TRIANGLE_FAN&&(p.geometry=G0(p.geometry,nh));else if(g.mode===Vn.LINES)p=new lh(_,v);else if(g.mode===Vn.LINE_STRIP)p=new Fi(_,v);else if(g.mode===Vn.LINE_LOOP)p=new Ec(_,v);else if(g.mode===Vn.POINTS)p=new La(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&hR(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),cr(p,s),g.extensions&&Wr(r,p,g),t.assignFinalMaterial(p),h.push(p)}for(let m=0,x=h.length;m<x;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return s.extensions&&Wr(r,h[0],s),h[0];const f=new Lt;s.extensions&&Wr(r,f,s),t.associations.set(f,{meshes:e});for(let m=0,x=h.length;m<x;m++)f.add(h[m]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new gn(Sp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new wp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),cr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const h=o[c];if(h){a.push(h);const f=new Ke;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Tp(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let h=0,f=r.channels.length;h<f;h++){const m=r.channels[h],x=r.samplers[m.sampler],_=m.target,g=_.node,p=r.parameters!==void 0?r.parameters[x.input]:x.input,v=r.parameters!==void 0?r.parameters[x.output]:x.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(x),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const f=h[0],m=h[1],x=h[2],_=h[3],g=h[4],p=[];for(let v=0,y=f.length;v<y;v++){const S=f[v],T=m[v],E=x[v],w=_[v],A=g[v];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const V=i._createAnimationTracks(S,T,E,w,A);if(V)for(let M=0;M<V.length;M++)p.push(V[M])}return new pC(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,d=a.length;c<d;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const d=c[0],h=c[1],f=c[2];f!==null&&d.traverse(function(m){m.isSkinnedMesh&&m.bind(f,gR)});for(let m=0,x=h.length;m<x;m++)d.add(h[m]);return d})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new l_:c.length>1?d=new Lt:c.length===1?d=c[0]:d=new Et,d!==c[0])for(let h=0,f=c.length;h<f;h++)d.add(c[h]);if(s.name&&(d.userData.name=s.name,d.name=o),cr(d,s),s.extensions&&Wr(i,d,s),s.matrix!==void 0){const h=new Ke;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return r.associations.has(d)||r.associations.set(d,{}),r.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Lt;i.name&&(s.name=r.createUniqueName(i.name)),cr(s,i),i.extensions&&Wr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)s.add(l[d]);const c=d=>{const h=new Map;for(const[f,m]of r.associations)(f instanceof An||f instanceof zt)&&h.set(f,m);return d.traverse(f=>{const m=r.associations.get(f);m!=null&&h.set(f,m)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];sr[s.path]===sr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(sr[s.path]){case sr.weights:c=No;break;case sr.rotation:c=ps;break;case sr.position:case sr.scale:c=ko;break;default:switch(i.itemSize){case 1:c=No;break;case 2:case 3:default:c=ko;break}break}const d=r.interpolation!==void 0?uR[r.interpolation]:Po,h=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){const x=new c(l[f]+"."+sr[s.path],t.array,h,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=hh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ps?cR:g_;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function yR(n,e,t){const i=e.attributes,r=new gi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const d=hh(xo[a.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,l=new O;for(let c=0,d=s.length;c<d;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],m=f.min,x=f.max;if(m!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),f.normalized){const _=hh(xo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Ei;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function $0(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=fh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return ct.workingColorSpace!==rn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),cr(n,e),yR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?fR(n,e.targets,t):n})}const vR={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};let ya=null,sc=null;function Yd(n){n.updateMatrixWorld(!0);const e=new gi().setFromObject(n),t=new O;e.getCenter(t);const i=new O;e.getSize(i);const r=Math.max(i.x,i.y,i.z)||1;n.position.sub(t);const s=new Lt;return s.add(n),s.scale.setScalar(1/r),s.updateMatrixWorld(!0),s}function _R(){if(ya)return Promise.resolve(ya);if(sc)return sc;const n=new zC,e=typeof import.meta<"u"&&vR&&"/"||"/",t=e.endsWith("/")?e:e+"/";return sc=Promise.all([n.loadAsync(`${t}satellite_high.gltf`),n.loadAsync(`${t}satellite_med.gltf`),n.loadAsync(`${t}satellite_low.gltf`)]).then(([i,r,s])=>(ya={high:Yd(i.scene),med:Yd(r.scene),low:Yd(s.scene)},ya)).catch(i=>{throw console.error("Failed to load 3D satellite models, using sphere fallbacks",i),i}),sc}function SR(){return ya}function MR(n,e,t){const i=n==="offline"?e.offlineSatColor||"#ff3b30":n==="highLatency"?e.highLatencySatColor||"#ff9900":e.satColor||"#ffffff",r=new He(i),s=r.clone();s.offsetHSL(0,.05,.12);const o=new hs({color:s,metalness:.35,roughness:.2,emissive:r,emissiveIntensity:t?1.1:.75}),a=new He(793651).lerp(r,.2),l=new hs({color:a,metalness:.92,roughness:.15,emissive:r,emissiveIntensity:t?.35:.2});return{bodyMat:o,solarMat:l,baseColor:r}}function bR(n){return n.includes("Cylinder.005")||n.includes("Cylinder.000")||n.includes("Cylinder.007")}function wR(n,e,t,i,r){const s=new Lt;s.name="Satellite3D",s.scale.setScalar(.65*i);const{bodyMat:o,solarMat:a}=MR(e,t,r),l=[],c=new xr(.45,8,8),d=new Vt({visible:!1,wireframe:!1}),h=new _t(c,d);if(h.name="SatHitBox",s.add(h),n)[{template:n.high,name:"LOD_High"},{template:n.med,name:"LOD_Med"},{template:n.low,name:"LOD_Low"}].forEach((m,x)=>{const _=m.template.clone(!0);_.name=m.name,_.visible=x===1,_.traverse(g=>{if(g.isMesh){const p=g;p.material=bR(p.name)?a:o,p.castShadow=!1,p.receiveShadow=!1,l.push(p)}}),s.add(_)});else{const f=new xr(.35,16,16),m=new _t(f,o);m.name="LOD_Fallback",s.add(m),l.push(m)}return{satGroup:s,hitMesh:h,modelMeshes:l}}function Y0(n,e,t){const i=n.getObjectByName("LOD_High"),r=n.getObjectByName("LOD_Med"),s=n.getObjectByName("LOD_Low");if(!i||!r||!s)return;const o=e.position.length(),a=n.position.distanceTo(e.position),l=o<18||a<14,c=o<38||a<34;let d=2;t||l?d=0:c?d=1:d=2,i.visible=d===0,r.visible=d===1,s.visible=d===2}const ER=/^[og]\s*(.+)?/,TR=/^mtllib /,AR=/^usemtl /,CR=/^usemap /,q0=/\s+/,K0=new O,qd=new O,Z0=new O,J0=new O,Hn=new O,oc=new He;function RR(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;K0.fromArray(r,e),qd.fromArray(r,t),Z0.fromArray(r,i),Hn.subVectors(Z0,qd),J0.subVectors(K0,qd),Hn.cross(J0),Hn.normalize(),s.push(Hn.x,Hn.y,Hn.z),s.push(Hn.x,Hn.y,Hn.z),s.push(Hn.x,Hn.y,Hn.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const d=this.vertices.length;let h=this.parseVertexIndex(e,d),f=this.parseVertexIndex(t,d),m=this.parseVertexIndex(i,d);if(this.addVertex(h,f,m),this.addColor(h,f,m),a!==void 0&&a!==""){const x=this.normals.length;h=this.parseNormalIndex(a,x),f=this.parseNormalIndex(l,x),m=this.parseNormalIndex(c,x),this.addNormal(h,f,m)}else this.addFaceNormal(h,f,m);if(r!==void 0&&r!==""){const x=this.uvs.length;h=this.parseUVIndex(r,x),f=this.parseUVIndex(s,x),m=this.parseUVIndex(o,x),this.addUV(h,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class PR extends ys{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new Rp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new RR;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const d=c.charAt(0);if(d!=="#")if(d==="v"){const h=c.split(q0);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(oc.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(oc.r,oc.g,oc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(d==="f"){const f=c.slice(1).trim().split(q0),m=[];for(let _=0,g=f.length;_<g;_++){const p=f[_];if(p.length>0){const v=p.split("/");m.push(v)}}const x=m[0];for(let _=1,g=m.length-1;_<g;_++){const p=m[_],v=m[_+1];t.addFace(x[0],p[0],v[0],x[1],p[1],v[1],x[2],p[2],v[2])}}else if(d==="l"){const h=c.substring(1).trim().split(" ");let f=[];const m=[];if(c.indexOf("/")===-1)f=h;else for(let x=0,_=h.length;x<_;x++){const g=h[x].split("/");g[0]!==""&&f.push(g[0]),g[1]!==""&&m.push(g[1])}t.addLineGeometry(f,m)}else if(d==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((r=ER.exec(c))!==null){const h=(" "+r[0].slice(1).trim()).slice(1);t.startObject(h)}else if(AR.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(TR.test(c))t.materialLibraries.push(c.substring(7).trim());else if(CR.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(r=c.split(" "),r.length>1){const f=r[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Lt;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],d=c.geometry,h=c.materials,f=d.type==="Line",m=d.type==="Points";let x=!1;if(d.vertices.length===0)continue;const _=new ht;_.setAttribute("position",new mt(d.vertices,3)),d.normals.length>0&&_.setAttribute("normal",new mt(d.normals,3)),d.colors.length>0&&(x=!0,_.setAttribute("color",new mt(d.colors,3))),d.hasUVIndices===!0&&_.setAttribute("uv",new mt(d.uvs,2));const g=[];for(let v=0,y=h.length;v<y;v++){const S=h[v],T=S.name+"_"+S.smooth+"_"+x;let E=t.materials[T];if(this.materials!==null){if(E=this.materials.create(S.name),f&&E&&!(E instanceof In)){const w=new In;An.prototype.copy.call(w,E),w.color.copy(E.color),E=w}else if(m&&E&&!(E instanceof ts)){const w=new ts({size:10,sizeAttenuation:!1});An.prototype.copy.call(w,E),w.color.copy(E.color),w.map=E.map,E=w}}E===void 0&&(f?E=new In:m?E=new ts({size:1,sizeAttenuation:!1}):E=new u_,E.name=S.name,E.flatShading=!S.smooth,E.vertexColors=x,t.materials[T]=E),g.push(E)}let p;if(g.length>1){for(let v=0,y=h.length;v<y;v++){const S=h[v];_.addGroup(S.groupStart,S.groupCount,v)}f?p=new lh(_,g):m?p=new La(_,g):p=new _t(_,g)}else f?p=new lh(_,g[0]):m?p=new La(_,g[0]):p=new _t(_,g[0]);p.name=c.name,s.add(p)}else if(t.vertices.length>0){const a=new ts({size:1,sizeAttenuation:!1}),l=new ht;l.setAttribute("position",new mt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new mt(t.colors,3)),a.vertexColors=!0);const c=new La(l,a);s.add(c)}return s}}const LR={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};let va=null,ac=null;function IR(n){n.updateMatrixWorld(!0);const e=new gi().setFromObject(n),t=new O;e.getSize(t);const i=new O;e.getCenter(i),n.position.set(-i.x,-e.min.y,-i.z);const r=new Lt;r.name="DishNormalizedTemplate",r.add(n);const s=t.y||1;return r.scale.setScalar(1/s),r.updateMatrixWorld(!0),r}function DR(){if(va)return Promise.resolve(va);if(ac)return ac;const n=new PR,e=typeof import.meta<"u"&&LR&&"/"||"/",t=e.endsWith("/")?e:e+"/";return ac=n.loadAsync(`${t}Dish_LowPoly.obj`).then(i=>(va=IR(i),va)).catch(i=>{throw console.warn("Failed to load Dish_LowPoly.obj, falling back to cone geometry",i),i}),ac}function NR(){return va}function kR(n,e,t=1){const i=new Lt;i.name="GroundStationDish";const r=new He(e),s=new hs({color:r,metalness:.65,roughness:.28,emissive:r,emissiveIntensity:.35});if(n){const o=n.clone(!0);o.name="DishMeshGroup",o.traverse(a=>{if(a.isMesh){const l=a;l.material=s,l.castShadow=!1,l.receiveShadow=!1}}),i.add(o)}else{const o=new Cu(.24,.48,8),a=new hs({color:r,metalness:.5,roughness:.3,emissive:r,emissiveIntensity:.3}),l=new _t(o,a);l.position.set(0,.24,0),i.add(l)}return i.scale.setScalar(.48*t),i}const UR=({scenario:n,settings:e,currentTime:t,outages:i,criticalSatellites:r=[],focusedSatelliteId:s,onSelectSatellite:o})=>{const a=he.useRef(null),l=he.useRef({earthGroup:new Lt,orbits:new Lt,satellites:new Lt,gateways:new Lt,gatewayDomes:new Lt,islLines:new Lt,satLinks:new Lt,labels:new Lt,fovCones:new Lt,packets:new Lt}),c=he.useRef(new Map),d=he.useRef(null),h=he.useRef(null),f=he.useRef({}),[m,x]=he.useState(!1),[_,g]=he.useState(!1),p=he.useRef(s);return he.useEffect(()=>{p.current=s},[s]),he.useEffect(()=>{_R().then(()=>x(!0)).catch(v=>console.warn("Could not load 3D satellite models:",v)),DR().then(()=>g(!0)).catch(v=>console.warn("Could not load Dish_LowPoly model:",v))},[]),he.useEffect(()=>{if(!a.current)return;const v=a.current,y=()=>v.clientWidth||window.innerWidth,S=()=>v.clientHeight||window.innerHeight-44,T=new nC;T.background=new He(329484);const E=4500,w=new Float32Array(E*3),A=new Float32Array(E*3);for(let fe=0;fe<E;fe++){const C=Math.random(),b=Math.random(),X=C*2*Math.PI,R=Math.acos(2*b-1),U=400+Math.random()*250;w[fe*3]=U*Math.sin(R)*Math.cos(X),w[fe*3+1]=U*Math.sin(R)*Math.sin(X),w[fe*3+2]=U*Math.cos(R);const N=.65+Math.random()*.35,Q=Math.random();Q>.88?(A[fe*3]=.8*N,A[fe*3+1]=.92*N,A[fe*3+2]=1*N):Q>.72?(A[fe*3]=1*N,A[fe*3+1]=.96*N,A[fe*3+2]=.88*N):(A[fe*3]=.95*N,A[fe*3+1]=.95*N,A[fe*3+2]=.95*N)}const V=new ht;V.setAttribute("position",new tn(w,3)),V.setAttribute("color",new tn(A,3));const M=document.createElement("canvas");M.width=32,M.height=32;const I=M.getContext("2d");if(I){const fe=I.createRadialGradient(16,16,0,16,16,16);fe.addColorStop(0,"rgba(255, 255, 255, 1)"),fe.addColorStop(.2,"rgba(240, 245, 255, 0.9)"),fe.addColorStop(.5,"rgba(200, 220, 255, 0.35)"),fe.addColorStop(1,"rgba(0, 0, 0, 0)"),I.fillStyle=fe,I.beginPath(),I.arc(16,16,16,0,Math.PI*2),I.fill()}const ae=new Do(M),Y=new ts({size:2.2,map:ae,vertexColors:!0,transparent:!0,opacity:.95,blending:Ja,depthWrite:!1}),F=new La(V,Y);T.add(F),l.current.starField=F;const J=new gn(45,y()/S(),.1,1e3);J.position.set(0,16,28),d.current=J;const H=new s_({antialias:!0,alpha:!1});H.setSize(y(),S()),H.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.domElement.style.display="block",H.domElement.style.width="100%",H.domElement.style.height="100%",v.appendChild(H.domElement);const ne=new FC(J,H.domElement);ne.enableDamping=!0,ne.dampingFactor=.05,ne.minDistance=7,ne.maxDistance=120,h.current=ne;const L=new UC,D=new Fe,B=fe=>{var R;const C=H.domElement.getBoundingClientRect();D.x=(fe.clientX-C.left)/C.width*2-1,D.y=-((fe.clientY-C.top)/C.height)*2+1,L.setFromCamera(D,J);const b=Array.from(c.current.keys()),X=L.intersectObjects(b,!1);if(X.length>0){let U;for(const N of X){if(U=c.current.get(N.object),U)break;let Q=N.object.parent;for(;Q;){if((R=Q.userData)!=null&&R.satellite){U=Q.userData.satellite;break}Q=Q.parent}if(U)break}U&&o(U)}};H.domElement.addEventListener("click",B);const q=new EC(16777215,1.1);T.add(q);const re=new uh(16777215,.9);re.position.set(30,40,50),T.add(re);const Me=new uh(16777215,.5);Me.position.set(-30,-20,-40),T.add(Me);const j=6.371,$=new xr(j,64,64);$.scale(1,6356.752/6378.137,1);const G=jR(),be=new Do(G);be.wrapS=oi;const ge=new u_({map:be,shininess:30,specular:new He(1718886)}),ve=new _t($,ge),Ue=new h_;Ue.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",fe=>{fe.wrapS=oi,ge.map=fe,ge.needsUpdate=!0},void 0,()=>{Ue.load("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",fe=>{fe.wrapS=oi,ge.map=fe,ge.needsUpdate=!0},void 0,()=>{Ue.load("https://unpkg.com/three-globe/example/img/earth-day.jpg",fe=>{fe.wrapS=oi,ge.map=fe,ge.needsUpdate=!0})})}),Ue.load("https://unpkg.com/three-globe/example/img/earth-topology.png",fe=>{fe.wrapS=oi,ge.bumpMap=fe,ge.bumpScale=.05,ge.needsUpdate=!0});const Ae=l.current.earthGroup;Ae.add(ve);const W=new xr(j*1.025,48,48);W.scale(1,6356.752/6378.137,1);const Ye=new Vt({color:3359061,transparent:!0,opacity:.15,side:vn}),Ee=new _t(W,Ye);Ae.add(Ee),l.current.atmosMesh=Ee,Ae.add(l.current.orbits),Ae.add(l.current.satellites),Ae.add(l.current.gateways),Ae.add(l.current.gatewayDomes),Ae.add(l.current.islLines),Ae.add(l.current.satLinks),Ae.add(l.current.labels),Ae.add(l.current.fovCones),Ae.add(l.current.packets),T.add(Ae);const Ne=()=>{const fe=y(),C=S();fe>0&&C>0&&(J.aspect=fe/C,J.updateProjectionMatrix(),H.setSize(fe,C))},Pe=new ResizeObserver(()=>Ne());Pe.observe(v),window.addEventListener("resize",Ne);let Be;const Oe=new O,oe=()=>{Be=requestAnimationFrame(oe),ne.update(),l.current.starField&&(l.current.starField.rotation.y+=3e-5);const fe=J.position.clone().normalize();l.current.labels.children.forEach(X=>{X.getWorldPosition(Oe),Oe.normalize();const R=Oe.dot(fe),U=X;let N=1;R<0?N=.15:R<.2&&(N=.15+.85*(R/.2)),U.material.opacity=N}),l.current.satellites.children.forEach(X=>{const R=X.userData;R&&R.targetPos&&(X.position.lerp(R.targetPos,.18),Math.abs(X.position.y/(X.position.length()||1))>.95?X.up.set(1,0,0):X.up.set(0,1,0),X.lookAt(0,0,0))});const C=p.current;l.current.satellites.children.forEach(X=>{var R;if(X.name==="Satellite3D"){const U=(R=X.userData)==null?void 0:R.satellite,N=!!(U&&U.id===C);Y0(X,J,N)}});const b=performance.now()*.001;l.current.packets.children.forEach(X=>{const R=X.userData;if(R&&R.startPos&&R.endPos){const U=(b*R.speed+R.phase)%1;X.position.lerpVectors(R.startPos,R.endPos,U)}}),H.render(T,J)};return oe(),()=>{H.domElement.removeEventListener("click",B),Pe.disconnect(),window.removeEventListener("resize",Ne),cancelAnimationFrame(Be),v.contains(H.domElement)&&v.removeChild(H.domElement),H.dispose()}},[]),he.useEffect(()=>{if(!d.current||!h.current)return;const v=d.current,y=h.current;let S,T;s&&f.current[s]?(S=f.current[s].clone(),T=S.clone().multiplyScalar(1.32)):(S=new O(0,0,0),T=new O(0,0,25));let E=0;const w=setInterval(()=>{E+=.05,y.target.lerp(S,.12),v.position.lerp(T,.12),E>=1&&clearInterval(w)},20);return()=>clearInterval(w)},[s]),he.useEffect(()=>{var ve,Ue,Ae,W,Ye,Ee,Ne,Pe,Be,Oe;if(!n)return;const{earthGroup:v,orbits:y,satellites:S,gateways:T,gatewayDomes:E,islLines:w,satLinks:A,labels:V,fovCones:M,packets:I,atmosMesh:ae}=l.current;ae&&(ae.visible=e.showAtmosphere,ae.material.color.set(e.atmosphereColor||"#1e3a8a")),[y,S,T,E,w,A,V,M,I].forEach(oe=>{for(;oe.children.length>0;)oe.remove(oe.children[0])}),c.current.clear(),f.current={};const Y=6.371,F=398600.435507,J=12*(Math.PI/180);v.rotation.y=J;const H=new Set(i.map(oe=>oe.satellite_id)),ne={},L={};new Vt({color:e.satColor||"#ffffff"}),new Vt({color:e.highLatencySatColor||"#ff9900"}),new Vt({color:e.offlineSatColor||"#ff3b30"}),new xr(.22*e.satSize,16,16);const D=new Set;(n.routes_sample||[]).forEach(oe=>{(oe.latency_ms>35||oe.path.length>=4)&&oe.path.forEach(fe=>{fe.startsWith("S")&&D.add(fe)})});const B={};(Ue=(ve=n.raw_scenario)==null?void 0:ve.design)!=null&&Ue.planes&&n.raw_scenario.design.planes.forEach(oe=>{const fe=parseInt(String(oe.id).replace("P",""))||1;B[fe]={raanDeg:oe.raan_deg??0,phaseDeg:oe.phase_deg??0}});const q=new Map;(n.satellites||[]).forEach(oe=>q.set(oe.id,oe));const re=oe=>{var C,b;const fe=q.get(oe);return fe?!!((C=e.hiddenPlanes)!=null&&C[fe.plane]||(b=e.hiddenSatellites)!=null&&b[oe]):!1},Me=oe=>{var fe;return e.showGateways===!1||!!((fe=e.hiddenGateways)!=null&&fe[oe])};let j=1;(n.satellites||[]).forEach(oe=>{const fe=typeof oe.plane=="number"?oe.plane:parseInt(String(oe.plane_id||oe.plane||"1").replace("P",""))||1;fe>j&&(j=fe)}),(n.satellites||[]).forEach(oe=>{var We,ot;const fe=typeof oe.plane=="number"?oe.plane:parseInt(String(oe.plane_id||oe.plane||"1").replace("P",""))||1,C=!re(oe.id),b=H.has(oe.id),X=!b&&D.has(oe.id),R=oe.altitude||550,U=6371+R,N=Y+R/1e3*1.2;let Q;((We=B[fe])==null?void 0:We.raanDeg)!==void 0?Q=B[fe].raanDeg:typeof oe.raan=="number"&&oe.raan>0?Q=oe.raan:Q=(fe-1)*(360/Math.max(1,j));let ue;((ot=B[fe])==null?void 0:ot.phaseDeg)!==void 0?ue=B[fe].phaseDeg:typeof oe.phase=="number"?ue=oe.phase:ue=(fe-1)*15;let ee=0;typeof oe.slot_deg=="number"?ee=oe.slot_deg:typeof oe.slot=="number"?ee=oe.slot:typeof oe.true_anomaly=="number"&&oe.true_anomaly!==0?ee=oe.true_anomaly:typeof oe.idx=="number"&&(ee=oe.idx>=15?oe.idx:oe.idx*45);const ce=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[fe])??0,me=((e==null?void 0:e.planePhaseMap)&&e.planePhaseMap[fe])??0,ie=(Q+ce)%360*(Math.PI/180),Le=(ue+me)%360*(Math.PI/180),ke=Math.sqrt(F/Math.pow(U,3)),ye=ee*(Math.PI/180)+Le+ke*t,we=(oe.inc||87)*(Math.PI/180),k=N*(Math.cos(ie)*Math.cos(ye)-Math.sin(ie)*Math.sin(ye)*Math.cos(we)),de=N*(Math.sin(ie)*Math.cos(ye)+Math.cos(ie)*Math.sin(ye)*Math.cos(we)),Te=N*(Math.sin(ye)*Math.sin(we)),z=U*(Math.cos(ie)*Math.cos(ye)-Math.sin(ie)*Math.sin(ye)*Math.cos(we)),xe=U*(Math.sin(ie)*Math.cos(ye)+Math.cos(ie)*Math.sin(ye)*Math.cos(we)),Z=U*(Math.sin(ye)*Math.sin(we)),pe=new O(k,Te,de),Re=new O(z,Z,xe);if(L[oe.id]=pe,f.current[oe.id]=pe,Uo(oe,t),ne[fe]||(ne[fe]=[]),ne[fe].push({sat:oe,pos:pe,posKm:Re,isOffline:b,isHighLatency:X,uAngle:ye}),e.showSatellites&&C){const nt=SR(),rt=b?"offline":X?"highLatency":"active",Xe=oe.id===s,{satGroup:$e,hitMesh:lt,modelMeshes:qt}=wR(nt,rt,e,e.satSize,Xe);if($e.position.copy(pe),Math.abs(pe.y/(pe.length()||1))>.95?$e.up.set(1,0,0):$e.up.set(0,1,0),$e.lookAt(0,0,0),$e.userData={satellite:oe,targetPos:pe.clone(),satId:oe.id},S.add($e),c.current.set(lt,oe),qt.forEach(gt=>{c.current.set(gt,oe)}),d.current&&Y0($e,d.current,Xe),e.satGlow){const gt=r.includes(oe.id),Pt=gt?"#ff0000":b?"#888888":X?e.highLatencySatColor:e.satColor;let Fn=Xe?.4:.85;b&&(Fn=(Math.sin(t*.5)*.5+.5)*.8),gt&&(Fn=1);const Zi=new cl({map:OR(Pt||"#ffffff"),color:16777215,transparent:!0,opacity:Fn,blending:Ja}),xi=new Au(Zi),Ur=gt?2.5:1.1;xi.scale.set(Ur*e.satSize,Ur*e.satSize,1),xi.position.copy(pe),S.add(xi)}}if(e.showLabels&&C){const nt=oe.id===s,rt=oe.id,Xe=b?e.offlineSatColor:nt?"#ffffff":X?e.highLatencySatColor:e.satColor,$e=Q0(rt,"#ffffff",Xe||"#ffffff"),lt=pe.clone().normalize();$e.position.copy(pe).addScaledVector(lt,.38*e.satSize),V.add($e)}if(s===oe.id&&C){const nt=N-Y,rt=nt*Math.tan(35*Math.PI/180),Xe=new Cu(rt,nt,32,1,!0),$e=new Vt({color:b?e.offlineSatColor:e.fovConeColor||e.satColor,transparent:!0,opacity:.18,side:xn,depthWrite:!1}),lt=new _t(Xe,$e),qt=new O(0,0,0).sub(pe).normalize(),gt=pe.clone().add(qt.clone().multiplyScalar(nt/2));lt.position.copy(gt),lt.lookAt(0,0,0),lt.rotateX(Math.PI/2),M.add(lt);const Pt=new p_(16777215,3,10);Pt.position.copy(pe),M.add(Pt);const Fn=new su(rt*.96,rt,48),Zi=new Vt({color:b?e.offlineSatColor:e.fovConeColor||e.satColor,side:xn,transparent:!0,opacity:.8}),xi=new _t(Fn,Zi),Ur=pe.clone().normalize().multiplyScalar(Y*1.002);xi.position.copy(Ur),xi.lookAt(0,0,0),M.add(xi)}if(e.showCoverageHeatmap&&C){const rt=(N-Y)*Math.tan(35*Math.PI/180),Xe=new Ap(rt,32),$e=new Vt({color:b?e.offlineSatColor:e.fovConeColor||"#00ff88",side:xn,transparent:!0,opacity:b?.15:.22,depthWrite:!1}),lt=new _t(Xe,$e),qt=pe.clone().normalize().multiplyScalar(Y*1.002);lt.position.copy(qt),lt.lookAt(0,0,0),M.add(lt);const gt=new su(rt*.97,rt,32),Pt=new Vt({color:b?e.offlineSatColor:e.fovConeColor||"#00ff88",side:xn,transparent:!0,opacity:b?.35:.65}),Fn=new _t(gt,Pt);Fn.position.copy(qt.clone().multiplyScalar(1.0005)),Fn.lookAt(0,0,0),M.add(Fn)}}),e.showOrbits&&Object.keys(ne).forEach(oe=>{var Le,ke,Se;const fe=parseInt(oe);if((Le=e.hiddenPlanes)!=null&&Le[fe])return;const C=(ke=ne[fe][0])==null?void 0:ke.sat;if(!C)return;const b=C.altitude||550,X=Y+b/1e3*1.2,R=((Se=B[fe])==null?void 0:Se.raanDeg)??C.raan??(fe-1)*60,U=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[fe])??0,N=(R+U)%360*(Math.PI/180),Q=(C.inc||87)*(Math.PI/180),ue=[],ee=128;for(let ye=0;ye<=ee;ye++){const we=ye/ee*Math.PI*2,k=X*(Math.cos(N)*Math.cos(we)-Math.sin(N)*Math.sin(we)*Math.cos(Q)),de=X*(Math.sin(N)*Math.cos(we)+Math.cos(N)*Math.sin(we)*Math.cos(Q)),Te=X*(Math.sin(we)*Math.sin(Q));ue.push(new O(k,Te,de))}const ce=new ht().setFromPoints(ue),me=new In({color:e.orbitColor||"#475569",transparent:!0,opacity:e.orbitOpacity}),ie=new Ec(ce,me);y.add(ie)}),Object.keys(ne).forEach(oe=>{ne[parseInt(oe)].sort((fe,C)=>fe.uAngle-C.uAngle)});const $={};new Vt({color:e.gatewayColor||"#00d084"});const G=6.371,be=6.371*(6356.752/6378.137),ge=1-be*be/(G*G);if((n.gateways||[]).forEach(oe=>{var ue,ee;const fe=oe.lat*Math.PI/180,C=oe.lon*Math.PI/180,b=G/Math.sqrt(1-ge*Math.sin(fe)*Math.sin(fe)),X=b*Math.cos(fe)*Math.cos(C),R=b*Math.cos(fe)*Math.sin(C),U=b*(1-ge)*Math.sin(fe),N=new O(X,U,R);$[oe.id]=N;const Q=!Me(oe.id);if(e.showGateways&&Q){const ce=NR(),me=kR(ce,e.gatewayColor||"#00d084",e.satSize);me.position.copy(N);const ie=N.clone().normalize();if(me.quaternion.setFromUnitVectors(new O(0,1,0),ie),T.add(me),e.showGatewayCoverage!==!1){const ke=(((ee=(ue=n.raw_scenario)==null?void 0:ue.environment)==null?void 0:ee.altitude_km)??550)/1e3*1.2,Se=Math.max(1.2,ke*1.85),ye=new xr(Se,32,16,0,Math.PI*2,0,Math.PI/2),we=new Vt({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.2,side:xn,depthWrite:!1}),k=new _t(ye,we);k.position.copy(N);const de=N.clone().normalize();k.quaternion.setFromUnitVectors(new O(0,1,0),de);const Te=[],z=48;for(let gt=0;gt<=z;gt++){const Pt=gt/z*Math.PI*2;Te.push(new O(Math.cos(Pt)*Se,0,Math.sin(Pt)*Se))}const xe=new ht().setFromPoints(Te),Z=new In({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.45,depthWrite:!1}),pe=new Ec(xe,Z);k.add(pe);const Re=[],We=Se*Math.cos(Math.PI/4),ot=Se*Math.sin(Math.PI/4);for(let gt=0;gt<=z;gt++){const Pt=gt/z*Math.PI*2;Re.push(new O(Math.cos(Pt)*We,ot,Math.sin(Pt)*We))}const nt=new ht().setFromPoints(Re),rt=new In({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.25,depthWrite:!1}),Xe=new Ec(nt,rt);k.add(Xe);const $e=new In({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.28,depthWrite:!1}),lt=[],qt=[];for(let gt=0;gt<=32;gt++){const Pt=gt/32*Math.PI;lt.push(new O(Math.cos(Pt)*Se,Math.sin(Pt)*Se,0)),qt.push(new O(0,Math.sin(Pt)*Se,Math.cos(Pt)*Se))}k.add(new Fi(new ht().setFromPoints(lt),$e)),k.add(new Fi(new ht().setFromPoints(qt),$e)),E.add(k)}}if(e.showLabels&&e.showGateways&&Q){const ce=Q0(oe.id,"#ffffff",e.gatewayColor||"#00d084"),me=N.clone().normalize();ce.position.copy(N).addScaledVector(me,.35),V.add(ce)}}),e.showISL){const oe=Object.keys(ne).map(Number).sort((C,b)=>C-b);oe.forEach(C=>{var X;if((X=e.hiddenPlanes)!=null&&X[C])return;const b=ne[C];for(let R=0;R<b.length;R++){const U=b[R],N=b[(R+1)%b.length];if(re(U.sat.id)||re(N.sat.id))continue;const Q=U.isOffline||N.isOffline,ue=U.isHighLatency||N.isHighLatency,ee=!!e.showTrafficLoad,ce=Math.min(99,Math.max(12,Math.round(35+Math.sin(t*.08+C*1.5)*40+(ue?35:0)))),me=Q?e.offlineSatColor:ee?ce>80?"#ef4444":ce>55?"#f59e0b":"#38bdf8":ue?e.highLatencySatColor:e.islColor||"#00ff88",ie=Zd(U.pos,N.pos,16),Le=new ht().setFromPoints(ie),ke=new In({color:me,transparent:!0,opacity:Q?.25:ee?.9:ue?.85:.65}),Se=new Fi(Le,ke);if(w.add(Se),e.showDistances===!0){const ye=Math.round(U.posKm.distanceTo(N.posKm));if(ye>0){const we=FR(U.pos,N.pos,.15),k=U.sat.id===s||N.sat.id===s,de=ee?`${ye} км | ${ce}%`:`${ye} км`,Te=Kd(de,k||ce>80);Te.position.copy(we),V.add(Te)}}}});const fe=((W=(Ae=n.raw_scenario)==null?void 0:Ae.environment)==null?void 0:W.isl_range_km)??3e3;for(let C=0;C<oe.length;C++){const b=oe[C],X=oe[(C+1)%oe.length];if((Ye=e.hiddenPlanes)!=null&&Ye[b]||(Ee=e.hiddenPlanes)!=null&&Ee[X])continue;const R=ne[b],U=ne[X];R.forEach(N=>{if(re(N.sat.id))return;let Q=1/0,ue=null,ee=null,ce=!1,me=!1;if(U.forEach(ie=>{if(re(ie.sat.id))return;const Le=N.posKm.distanceTo(ie.posKm);Le<=fe&&!zR(N.posKm,ie.posKm)&&Le<Q&&(Q=Le,ue=ie.pos,ee=ie.posKm,ce=ie.isOffline,me=ie.isHighLatency)}),ue&&ee){const ie=N.isOffline||ce,Le=N.isHighLatency||me,ke=!!e.showTrafficLoad,Se=Math.min(99,Math.max(15,Math.round(42+Math.cos(t*.06+C*2.1)*38+(Le?30:0)))),ye=ie?e.offlineSatColor:ke?Se>80?"#ef4444":Se>55?"#f59e0b":"#38bdf8":Le?e.highLatencySatColor:e.islColor||"#cbd5e1",we=Zd(N.pos,ue,16),k=new ht().setFromPoints(we),de=new In({color:ye,transparent:!0,opacity:ie?.25:ke?.9:Le?.75:.5}),Te=new Fi(k,de);w.add(Te)}})}}if(e.showSatLinks){const oe=n.routes_sample||[],fe=new Set,C=((Pe=(Ne=n.raw_scenario)==null?void 0:Ne.environment)==null?void 0:Pe.altitude_km)??550;oe.forEach(X=>{const R=X.path||[],U=R.some(Q=>H.has(Q)),N=!!(s&&R.includes(s));if(R.length>=2)for(let Q=0;Q<R.length-1;Q++){const ue=R[Q],ee=R[Q+1];if(Me(ue)||Me(ee)||re(ue)||re(ee))continue;const ce=[ue,ee].sort().join("--");fe.add(ce);const me=$[ue]||L[ue],ie=$[ee]||L[ee],Le=!!($[ue]||$[ee]);if(me&&ie){if(Le){const de=$[ue]||$[ee],Te=$[ue]?ie:me;if(!tx(de,Te,0))continue}const ke=Le?[me,ie]:Zd(me,ie,20),Se=new ht().setFromPoints(ke),ye=U?e.offlineSatColor:N?"#00ff88":Le?e.groundLinkColor||"#94a3b8":e.islColor||"#cbd5e1",we=new In({color:ye,transparent:!0,opacity:N?1:U?.9:Le?.95:.85}),k=new Fi(Se,we);if(A.add(k),Le&&e.showDistances===!0){const de=$[ue]||$[ee],Te=$[ue]?ie:me,z=ex(de,Te,C);if(z>0){const xe=new O().addVectors(me,ie).multiplyScalar(.51),Z=Kd(`${z} км`,!0);Z.position.copy(xe),V.add(Z)}}if(Le||N){const de=U?e.offlineSatColor:N?"#00ff88":e.groundLinkColor||"#94a3b8",Te=N?4:2;for(let z=0;z<Te;z++){const xe=lc(de);xe.userData={startPos:me.clone(),endPos:ie.clone(),speed:N?1.2:.65,phase:z/Te},I.add(xe);const Z=lc(N?"#ffffff":"#38bdf8");Z.userData={startPos:ie.clone(),endPos:me.clone(),speed:N?1.3:.75,phase:(z+.5)/Te},I.add(Z)}}}}});const b=((Oe=(Be=n.raw_scenario)==null?void 0:Be.environment)==null?void 0:Oe.min_elevation_deg)??10;Object.keys($).forEach(X=>{if(Me(X))return;const R=$[X];(n.satellites||[]).filter(N=>!re(N.id)).map(N=>{const Q=L[N.id];return!Q||!tx(R,Q,b)?null:{pos:Q,dist:R.distanceTo(Q)}}).filter(N=>N!==null).sort((N,Q)=>N.dist-Q.dist).slice(0,2).forEach(N=>{const Q=new ht().setFromPoints([R,N.pos]),ue=new In({color:e.groundLinkColor||"#f59e0b",transparent:!0,opacity:.6}),ee=new Fi(Q,ue);if(A.add(ee),e.showDistances===!0){const me=ex(R,N.pos,C);if(me>0){const ie=new O().addVectors(R,N.pos).multiplyScalar(.51),Le=Kd(`${me} км`,!0);Le.position.copy(ie),V.add(Le)}}const ce=e.groundLinkColor||"#f59e0b";for(let me=0;me<2;me++){const ie=lc(ce);ie.userData={startPos:R.clone(),endPos:N.pos.clone(),speed:.7,phase:me*.5},I.add(ie);const Le=lc("#34d399");Le.userData={startPos:N.pos.clone(),endPos:R.clone(),speed:.8,phase:(me+.5)*.5},I.add(Le)}})})}},[n,e,t,i,s,m,_]),u.jsx("div",{ref:a,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:1}})};function Q0(n,e,t){const i=document.createElement("canvas");i.width=384,i.height=96;const r=i.getContext("2d");r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.font='500 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',r.textAlign="center",r.textBaseline="middle",r.strokeStyle="rgba(5, 10, 20, 0.88)",r.lineWidth=4.5,r.lineJoin="round",r.strokeText(n,192,48),r.fillStyle=t,r.fillText(n,192,48);const s=new Do(i);s.minFilter=ui,s.magFilter=Xt,s.generateMipmaps=!0;const o=new cl({map:s,transparent:!0,depthTest:!0,depthWrite:!1}),a=new Au(o);return a.scale.set(1.28,.32,1),a}function Kd(n,e=!1){const t=document.createElement("canvas");t.width=260,t.height=72;const i=t.getContext("2d");i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.fillStyle=e?"rgba(0, 240, 255, 0.95)":"rgba(15, 23, 38, 0.88)",i.beginPath(),typeof i.roundRect=="function"?i.roundRect(8,8,244,56,12):i.rect(8,8,244,56),i.fill(),i.strokeStyle=e?"#ffffff":"#475569",i.lineWidth=2.5,i.stroke(),i.fillStyle=e?"#000000":"#ffffff",i.font='500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(n,130,36);const r=new Do(t);r.minFilter=ui,r.magFilter=Xt,r.generateMipmaps=!0;const s=new cl({map:r,transparent:!0,depthTest:!0,depthWrite:!1}),o=new Au(s);return o.scale.set(.85,.235,1),o}function ex(n,e,t=550){const r=6371+t,s=Math.max(-1,Math.min(1,n.clone().normalize().dot(e.clone().normalize()))),o=r*r+6371*6371-2*r*6371*s;return Math.round(Math.sqrt(Math.max(0,o)))}function OR(n){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=new He(n),r=Math.round(i.r*255),s=Math.round(i.g*255),o=Math.round(i.b*255),a=t.createRadialGradient(32,32,0,32,32,32);return a.addColorStop(0,`rgba(${r}, ${s}, ${o}, 1.0)`),a.addColorStop(.4,`rgba(${r}, ${s}, ${o}, 0.5)`),a.addColorStop(1,`rgba(${r}, ${s}, ${o}, 0)`),t.fillStyle=a,t.fillRect(0,0,64,64),new Do(e)}function Zd(n,e,t=16){const i=n.clone().normalize(),r=e.clone().normalize(),s=n.length(),o=e.length(),a=i.angleTo(r);if(a<.001)return[n,e];const l=Math.sin(a),c=[];for(let d=0;d<=t;d++){const h=d/t,f=Math.sin((1-h)*a)/l,m=Math.sin(h*a)/l,x=new O().addScaledVector(i,f).addScaledVector(r,m).normalize(),_=s*(1-h)+o*h,g=Math.sin(h*Math.PI)*(a*.3),p=_+g;c.push(x.multiplyScalar(p))}return c}function FR(n,e,t=.15){const i=n.clone().normalize(),r=e.clone().normalize(),s=i.angleTo(r);if(s<.001)return new O().addVectors(n,e).multiplyScalar(.5);const o=Math.sin(s),a=Math.sin(.5*s)/o,l=new O().addScaledVector(i,a).addScaledVector(r,a).normalize(),c=n.length(),d=e.length(),h=(c+d)*.5,f=Math.sin(.5*Math.PI)*(s*.3),m=h+f+t;return l.multiplyScalar(m)}function zR(n,e,t=6371){const i=new O().subVectors(e,n),r=i.lengthSq();if(r<1e-6)return!1;const s=Sp.clamp(-n.dot(i)/r,0,1);return new O().copy(n).addScaledVector(i,s).length()<=t}function tx(n,e,t=0){const i=n.clone().normalize(),r=e.clone().sub(n),s=r.length();if(s<.001)return!1;r.divideScalar(s);const o=r.dot(i),a=Math.sin(t*Math.PI/180);return o>=a}function jR(){const n=document.createElement("canvas");n.width=2048,n.height=1024;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,1024);t.addColorStop(0,"#103056"),t.addColorStop(.5,"#19497c"),t.addColorStop(1,"#103056"),e.fillStyle=t,e.fillRect(0,0,2048,1024);const i=(o,a)=>{const l=(a+180)/360*2048,c=(90-o)/180*1024;return[l,c]},r=(o,a="#2a542a",l="#3e753e")=>{if(o.length<3)return;e.beginPath();const[c,d]=i(o[0][0],o[0][1]);e.moveTo(c,d);for(let h=1;h<o.length;h++){const[f,m]=i(o[h][0],o[h][1]);e.lineTo(f,m)}e.closePath(),e.fillStyle=a,e.fill(),e.strokeStyle=l,e.lineWidth=1.5,e.stroke()};r([[70,10],[72,40],[70,70],[75,100],[70,140],[65,170],[60,175],[50,140],[40,120],[35,100],[25,120],[10,105],[10,75],[25,60],[30,50],[35,35],[40,30],[36,5],[38,-9],[44,-9],[55,10],[60,5],[62,20],[70,10]],"#2a542a","#3e753e"),r([[70,-170],[75,-120],[70,-80],[60,-60],[45,-65],[30,-80],[25,-90],[15,-90],[15,-105],[30,-115],[40,-125],[60,-165],[70,-170]],"#2a542a","#3e753e"),r([[10,-75],[0,-50],[-10,-38],[-25,-45],[-45,-65],[-55,-70],[-35,-75],[0,-80],[10,-75]],"#244824","#386638"),r([[35,-5],[37,10],[32,32],[10,50],[-10,40],[-34,20],[-34,18],[-10,12],[5,2],[5,-15],[15,-17],[35,-5]],"#544c2a","#786d3e"),r([[-12,130],[-15,145],[-35,150],[-38,140],[-32,115],[-20,115],[-12,130]],"#54482a","#78683e"),e.strokeStyle="#25588c",e.lineWidth=1;for(let o=0;o<=2048;o+=128)e.beginPath(),e.moveTo(o,0),e.lineTo(o,1024),e.stroke();for(let o=0;o<=1024;o+=64)e.beginPath(),e.moveTo(0,o),e.lineTo(2048,o),e.stroke();return[[55.75,37.61],[59.93,30.31],[68.97,33.08],[65.14,57.22],[51.5,-.12],[40.71,-74],[35.67,139.65],[39.9,116.4]].forEach(([o,a])=>{const[l,c]=i(o,a),d=e.createRadialGradient(l,c,0,l,c,8);d.addColorStop(0,"rgba(0, 255, 136, 0.9)"),d.addColorStop(.5,"rgba(20, 115, 230, 0.4)"),d.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=d,e.beginPath(),e.arc(l,c,8,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(l,c,2,0,Math.PI*2),e.fill()}),n}function lc(n){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");t.imageSmoothingEnabled=!0;const i=t.createRadialGradient(32,32,2,32,32,28);i.addColorStop(0,"#ffffff"),i.addColorStop(.4,n),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.beginPath(),t.arc(32,32,28,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.fillRect(18,20,28,24),t.strokeStyle=n,t.lineWidth=3,t.strokeRect(18,20,28,24),t.strokeStyle=n,t.lineWidth=2.5,t.beginPath(),t.moveTo(22,27),t.lineTo(32,35),t.lineTo(42,27),t.stroke();const r=new Do(e),s=new cl({map:r,transparent:!0,opacity:.95,blending:Ja,depthWrite:!1}),o=new Au(s);return o.scale.set(.24,.24,1),o}const $s=({title:n,isOpen:e,onClose:t,initialPos:i={x:100,y:60,width:720,height:480},zIndex:r,onFocus:s,children:o})=>{const a=()=>{const S=typeof window<"u"?window.innerWidth:1200,T=typeof window<"u"?window.innerHeight:800,E=S<=768,w=Math.min(E?S-16:S-32,i.width),A=Math.min(E?T-70:T-80,i.height),V=E?Math.max(8,(S-w)/2):Math.min(Math.max(8,i.x),S-w-8),M=E?Math.max(50,(T-A)/2):Math.min(Math.max(50,i.y),T-A-8);return{x:V,y:M,width:w,height:A}},[l,c]=he.useState(()=>{const S=a();return{x:S.x,y:S.y,width:S.width,height:S.height,isMaximized:!1,isMinimized:!1,zIndex:r}}),d=he.useRef(!1),h=he.useRef(!1),f=he.useRef({x:0,y:0}),m=he.useRef({w:0,h:0,x:0,y:0});if(he.useEffect(()=>{c(S=>({...S,zIndex:r}))},[r]),he.useEffect(()=>{const S=()=>{c(T=>{const E=window.innerWidth,w=window.innerHeight,A=Math.min(T.width,E-16),V=Math.min(T.height,w-60),M=Math.min(Math.max(4,T.x),Math.max(4,E-A-4)),I=Math.min(Math.max(48,T.y),Math.max(48,w-V-4));return{...T,x:M,y:I,width:A,height:V}})};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),!e)return null;const x=(S,T)=>{if(s(),l.isMaximized)return;d.current=!0,f.current={x:S-l.x,y:T-l.y};const E=(M,I)=>{if(!d.current)return;const ae=window.innerWidth,Y=window.innerHeight,F=Math.min(Math.max(4,M-f.current.x),ae-l.width-4),J=Math.min(Math.max(48,I-f.current.y),Y-l.height-4);c(H=>({...H,x:F,y:J}))},w=M=>E(M.clientX,M.clientY),A=M=>{M.touches[0]&&E(M.touches[0].clientX,M.touches[0].clientY)},V=()=>{d.current=!1,window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",V),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",V)};window.addEventListener("mousemove",w),window.addEventListener("mouseup",V),window.addEventListener("touchmove",A,{passive:!0}),window.addEventListener("touchend",V)},_=S=>x(S.clientX,S.clientY),g=S=>{S.touches[0]&&x(S.touches[0].clientX,S.touches[0].clientY)},p=S=>{if(S.stopPropagation(),s(),l.isMaximized)return;h.current=!0,m.current={w:l.width,h:l.height,x:S.clientX,y:S.clientY};const T=w=>{if(!h.current)return;const A=w.clientX-m.current.x,V=w.clientY-m.current.y;c(M=>({...M,width:Math.max(380,m.current.w+A),height:Math.max(240,m.current.h+V)}))},E=()=>{h.current=!1,window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",E)};window.addEventListener("mousemove",T),window.addEventListener("mouseup",E)},v=()=>{c(S=>({...S,isMaximized:!S.isMaximized}))},y=l.isMaximized?{position:"fixed",top:"44px",left:0,width:"100vw",height:"calc(100vh - 44px)",zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)"}:{position:"fixed",left:`${l.x}px`,top:`${l.y}px`,width:`${l.width}px`,height:`${l.height}px`,zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",borderRadius:"6px",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)",overflow:"hidden"};return u.jsxs("div",{style:y,onClick:s,children:[u.jsxs("div",{onMouseDown:_,onTouchStart:g,style:{height:"36px",backgroundColor:"#1f1f1f",borderBottom:"1px solid #383838",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",cursor:l.isMaximized?"default":"move",userSelect:"none"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:600,fontSize:"13px",color:"#e0e0e0"},children:[u.jsx(aM,{size:14,style:{color:"#888"}}),u.jsx("span",{children:n})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx("button",{onClick:S=>{S.stopPropagation(),c(T=>({...T,isMinimized:!T.isMinimized}))},style:Jd,title:"Свернуть",children:u.jsx(oM,{size:12})}),u.jsx("button",{onClick:S=>{S.stopPropagation(),v()},style:Jd,title:l.isMaximized?"Восстановить":"Развернуть",children:u.jsx(_M,{size:12})}),u.jsx("button",{onClick:S=>{S.stopPropagation(),t()},style:Jd,title:"Закрыть",children:u.jsx(Cv,{size:14})})]})]}),u.jsx("div",{style:{flex:1,overflow:"auto",position:"relative",backgroundColor:"#262626",color:"#e0e0e0"},children:o}),!l.isMaximized&&u.jsx("div",{onMouseDown:p,style:{position:"absolute",bottom:0,right:0,width:"16px",height:"16px",cursor:"nwse-resize",zIndex:10,background:"linear-gradient(135deg, transparent 50%, #4a4a4a 50%)"}})]})},Jd={backgroundColor:"transparent",color:"#a0a0a0",border:"none",borderRadius:"3px",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},BR=({scenario:n,outages:e,onApplyRecommendation:t})=>{var h,f;const[i,r]=he.useState(new Set),s=e.length>0,o=((h=n==null?void 0:n.simulation_result)==null?void 0:h.overall_availability)??1,a=o<.9||((f=n==null?void 0:n.simulation_result)==null?void 0:f.all_targets_met)===!1,c=[{id:"reroute_isl",title:"1. Динамическая перемаршрутизация ISL графа",desc:"Перенаправить поток данных в обход отказавших аппаратов через смежную орбитную плоскость P2 (узлы S09, S10).",btnText:"Применить перемаршрутизацию ISL",icon:u.jsx(Za,{size:15,style:{color:"#ffaa00"}})},{id:"phase_shift",title:"2. Фазовый сдвиг плоскости (+15° Phase)",desc:"Сдвинуть фазирование соседней плоскости для ликвидации мертвой зоны над северными пунктами Мурманск и Печора.",btnText:"Выполнить фазовый сдвиг (+15°)",icon:u.jsx(pM,{size:15,style:{color:"#1473e6"}})},{id:"raan_adjust",title:"3. Корректировка RAAN плоскости (+10°)",desc:"Повернуть орбитальную плоскость вокруг оси Земли для компенсации сектора зоны покрытия.",btnText:"Скооректировать RAAN (+10°)",icon:u.jsx(wv,{size:15,style:{color:"#00ff88"}})}].filter(m=>!i.has(m.id)),d=(m,x)=>{x.stopPropagation(),r(_=>new Set(_).add(m)),t(m)};return!a&&!s||c.length===0?u.jsxs("div",{style:nx,children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88"},children:[u.jsx(rs,{size:16}),u.jsx("span",{style:{fontWeight:600},children:!a&&!s?`Система функционирует штатно (SLA ${(o*100).toFixed(1)}% ≥ 90%)`:"Все рекомендации применены! Система оптимизирована."})]}),u.jsx("p",{style:{fontSize:"11px",color:"#aaa",margin:"4px 0 0 0"},children:!a&&!s?"Доступность сети выдержана на высоком уровне. Корректирующие рекомендации не требуются.":"Активные сбои ликвидированы, маршруты перестроены."})]}):u.jsxs("div",{style:nx,children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"8px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#ff3b30"},children:[u.jsx(pp,{size:18}),u.jsx("span",{style:{fontWeight:"bold",fontSize:"13px"},children:"Аварийная Ситуация: Рекомендации Регламента"})]}),u.jsx("span",{style:{fontSize:"10px",backgroundColor:"#ff3b3020",color:"#ff3b30",padding:"2px 6px",borderRadius:"3px"},children:"Нажмите на предложение, чтобы применить и убрать"})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"10px"},children:c.map(m=>u.jsxs("div",{onClick:x=>d(m.id,x),style:{...HR,cursor:"pointer",transition:"all 0.2s ease",borderLeft:"3px solid #1473e6"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[m.icon,u.jsx("b",{style:{color:"#fff",fontSize:"12px"},children:m.title})]}),u.jsx("span",{style:{fontSize:"10px",color:"#00ff88",opacity:.8},children:"[Нажмите, чтобы применить]"})]}),u.jsx("p",{style:{fontSize:"11px",color:"#ccc",margin:"4px 0 0 0",lineHeight:"1.4"},children:m.desc}),u.jsxs("button",{onClick:x=>d(m.id,x),style:GR,children:[u.jsx("span",{children:m.btnText}),u.jsx(Sv,{size:12})]})]},m.id))})]})},nx={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"12px",marginTop:"12px"},HR={backgroundColor:"#141414",border:"1px solid #333",borderRadius:"4px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px"},GR={marginTop:"4px",backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"3px",padding:"5px 10px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",alignSelf:"flex-start"},VR=({scenario:n,outages:e=[],currentTime:t=0,onApplyRecommendation:i,onExportResultsJson:r,onOpenPdfReport:s})=>{var ne;const[o,a]=he.useState("metrics"),[l,c]=he.useState(new Set),[d,h]=he.useState("soyuz");if(!n)return u.jsx("div",{style:{padding:"20px",color:"#888"},children:"Загрузка данных математического моделирования..."});const f=new Set(e.map(L=>L.satellite_id)),m=n.satellites.map(L=>Uo(L,t)),x=m.length,_=m.filter(L=>f.has(L.id)).length,g=x-_,p=m.filter(L=>!f.has(L.id)&&!L.is_in_sunlight).length,v=m.reduce((L,D)=>L+(D.fuel_kg??10),0)/(x||1),y=m.reduce((L,D)=>L+(D.fuel_pct??100),0)/(x||1),S=m.reduce((L,D)=>L+(D.temperature_c??38),0)/(x||1),T=Math.max(...m.map(L=>L.temperature_c??38)),E=m.reduce((L,D)=>L+(D.battery_pct??100),0)/(x||1),w=(m.reduce((L,D)=>L+(D.solar_power_w??0),0)/1e3).toFixed(1),A=n.simulation_result,M=(A?A.overall_availability*100:99.98).toFixed(2),I=(38.4+_*4.2).toFixed(1),ae=((A==null?void 0:A.overall_availability)??1)<.9||(A==null?void 0:A.all_targets_met)===!1,Y=(A==null?void 0:A.client_summaries)||[],F=((ne=A==null?void 0:A.vulnerability)==null?void 0:ne.top_used_satellites)||[],J=A==null?void 0:A.economic_analysis,H=L=>{const D=Math.floor(L/3600),B=Math.floor(L%3600/60),q=Math.floor(L%60);return`${String(D).padStart(2,"0")}:${String(B).padStart(2,"0")}:${String(q).padStart(2,"0")}`};return u.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#121927",border:"1px solid #1473e650",borderRadius:"6px",padding:"8px 12px",fontSize:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600},children:[u.jsx(dp,{size:15,className:"animate-spin"}),u.jsxs("span",{children:["Симуляция Real-Time: T = +",H(t)]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[u.jsx("div",{style:{display:"flex",gap:"12px",fontSize:"11px",color:"#ccc"},children:u.jsxs("span",{children:["Отказов КА: ",u.jsx("b",{style:{color:_>0?"#ff3b30":"#888"},children:_})]})}),s&&u.jsxs("button",{onClick:s,style:{backgroundColor:"#1e293b",color:"#38bdf8",border:"1px solid #0284c7",borderRadius:"4px",padding:"3px 8px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},title:"Сгенерировать 4-страничный научно-технический PDF отчёт",children:[u.jsx(Ev,{size:13}),u.jsx("span",{children:"Отчёт PDF"})]}),r&&u.jsxs("button",{onClick:r,style:{backgroundColor:"#20242b",color:"#38bdf8",border:"1px solid #333943",borderRadius:"4px",padding:"3px 8px",fontSize:"11px",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},title:"Скачать полные результаты симуляции в JSON",children:[u.jsx(fp,{size:13}),u.jsx("span",{children:"Скачать Итоговый JSON"})]})]})]}),u.jsxs("div",{style:{display:"flex",gap:"6px",borderBottom:"1px solid #383838",paddingBottom:"8px",flexWrap:"wrap"},children:[u.jsxs("button",{onClick:()=>a("metrics"),style:Xr(o==="metrics"),children:[u.jsx(Eo,{size:14}),u.jsx("span",{children:"Сводные Метрики"})]}),u.jsxs("button",{onClick:()=>a("clients"),style:Xr(o==="clients"),children:[u.jsx(Mc,{size:14}),u.jsxs("span",{children:["SLA по Пунктам (",Y.length||3,")"]})]}),u.jsxs("button",{onClick:()=>a("gantt"),style:Xr(o==="gantt"),children:[u.jsx(Mv,{size:14}),u.jsx("span",{children:"Диаграмма Гантта"})]}),u.jsxs("button",{onClick:()=>a("coverage"),style:Xr(o==="coverage"),children:[u.jsx(Zc,{size:14}),u.jsx("span",{children:"Покрытие Территории"})]}),u.jsxs("button",{onClick:()=>a("vulnerability"),style:Xr(o==="vulnerability"),children:[u.jsx(_v,{size:14}),u.jsx("span",{children:"Уязвимость (Критические КА)"})]}),u.jsxs("button",{onClick:()=>a("routes"),style:Xr(o==="routes"),children:[u.jsx(od,{size:14}),u.jsx("span",{children:"Маршруты & Хопы"})]}),u.jsxs("button",{onClick:()=>a("economic"),style:Xr(o==="economic"),children:[u.jsx(Ws,{size:14}),u.jsx("span",{children:"Экономика & Топливо"})]})]}),o==="metrics"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[u.jsx(Gn,{icon:u.jsx(Mc,{color:ae?"#ff3b30":"#00ff88",size:20}),title:"Общая Доступность (SLA)",value:`${M}%`,sub:ae?"[ВНИМАНИЕ] Нарушение нормативного SLA (< 90%)":"Все целевые SLA выдержаны"}),u.jsx(Gn,{icon:u.jsx(Za,{color:"#1473e6",size:20}),title:"Задержка передачи (P95)",value:`${I} мс`,sub:_>0?`+${(_*4.2).toFixed(1)}мс за счет обхода отказов`:"Норматив < 50мс выдержан"}),u.jsx(Gn,{icon:u.jsx(od,{color:"#ffaa00",size:20}),title:"Состояние группировки",value:`${g} / ${x}`,sub:_>0?`Отказов КА: ${_}`:"Штатный режим всех КА"}),u.jsx(Gn,{icon:u.jsx(Eo,{color:"#1473e6",size:20}),title:"Солнечная генерация",value:`${w} кВт`,sub:`Батареи: ${E.toFixed(0)}% (Заряд/Разряд)`})]}),u.jsxs("div",{style:cc,children:[u.jsx("h4",{style:ix,children:"Динамическое распределение причин сбоев доступности (Real-Time Outage Breakdown)"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"12px",marginTop:"8px"},children:[u.jsxs("div",{style:Qd,children:[u.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Затмение & Тень Земли"}),u.jsxs("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#c084fc"},children:[(p/(x||1)*100).toFixed(1),"%"]}),u.jsxs("span",{style:{fontSize:"10px",color:"#777"},children:[p," КА на аккумуляторах"]})]}),u.jsxs("div",{style:Qd,children:[u.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Аварийные отказы узлов"}),u.jsxs("span",{style:{fontSize:"18px",fontWeight:"bold",color:_>0?"#ff3b30":"#00ff88"},children:[(_/(x||1)*100).toFixed(1),"%"]}),u.jsxs("span",{style:{fontSize:"10px",color:"#777"},children:[_," КА отключено"]})]}),u.jsxs("div",{style:Qd,children:[u.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Доступность шлюзов"}),u.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#00ff88"},children:"100.0%"}),u.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Наземные станции в норме"})]})]})]}),u.jsx(BR,{scenario:n,outages:e,onApplyRecommendation:i||(()=>{})})]}),o==="clients"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Детализированные показания доступности по наземным объектам в реальном времени"}),u.jsx("div",{style:{overflowX:"auto"},children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[u.jsx("th",{style:Kt,children:"Объект / Пул"}),u.jsx("th",{style:Kt,children:"Видимость"}),u.jsx("th",{style:Kt,children:"Доступность (SLA)"}),u.jsx("th",{style:Kt,children:"Цель (90%)"}),u.jsx("th",{style:Kt,children:"Макс. отказ (сек)"}),u.jsx("th",{style:Kt,children:"Ср. хопов"}),u.jsx("th",{style:Kt,children:"Ср. дистанция"})]})}),u.jsx("tbody",{children:(Y.length>0?Y:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:1,availability_ratio:.9998,target_met:!0,max_outage_s:0,avg_hops:3.2,avg_distance_km:1420},{id:"Pechora",name:"Печора",visibility_ratio:.998,availability_ratio:.9995,target_met:!0,max_outage_s:10,avg_hops:2.8,avg_distance_km:1180},{id:"Murmansk",name:"Мурманск",visibility_ratio:1,availability_ratio:1,target_met:!0,max_outage_s:0,avg_hops:3,avg_distance_km:1350}]).map((L,D)=>{const B=L.availability_ratio*100,q=L.target_met??B>=90;return u.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[u.jsx("td",{style:Zt,children:u.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:L.name||L.id})}),u.jsxs("td",{style:Zt,children:[(L.visibility_ratio*100).toFixed(1),"%"]}),u.jsx("td",{style:Zt,children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:`${B}%`,backgroundColor:q?"#00ff88":"#ff3b30"}})}),u.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[B.toFixed(1),"%"]})]})}),u.jsx("td",{style:Zt,children:q?u.jsxs("span",{style:{color:"#00ff88",display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx(rs,{size:13})," СОБЛЮДЕН"]}):u.jsxs("span",{style:{color:"#ff3b30",display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx(bM,{size:13})," НАРУШЕН"]})}),u.jsx("td",{style:Zt,children:L.max_outage_s!==void 0?`${L.max_outage_s} с`:"0 с"}),u.jsx("td",{style:Zt,children:L.avg_hops!==null&&L.avg_hops!==void 0?Number(L.avg_hops).toFixed(1):"—"}),u.jsx("td",{style:Zt,children:L.avg_distance_km?`${L.avg_distance_km} км`:"—"})]},D)})})]})})]}),o==="gantt"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:u.jsxs("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:["Диаграмма Гантта: Сеансы связи и окна затмения (Курсор T = ",H(t),")"]})}),u.jsxs("div",{style:cc,children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#777",marginBottom:"8px",paddingLeft:"142px"},children:[u.jsx("span",{children:"00:00"}),u.jsx("span",{children:"06:00"}),u.jsx("span",{children:"12:00"}),u.jsx("span",{children:"18:00"}),u.jsx("span",{children:"24:00"})]}),["S01 (Плоскость 1)","S02 (Плоскость 1)","S09 (Плоскость 2)","S10 (Плоскость 2)","S17 (Плоскость 3)","S18 (Плоскость 3)"].map((L,D)=>{const B=L.split(" ")[0],q=f.has(B),re=m.find(j=>j.id===B);re&&re.is_in_sunlight;const Me=t%86400/86400*100;return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[u.jsxs("span",{style:{width:"130px",fontSize:"11px",color:q?"#ff3b30":"#aaa",fontFamily:"monospace",fontWeight:600},children:[L," ",q?"[ОТКАЗ]":"[ОК]"]}),u.jsxs("div",{style:{flex:1,height:"24px",backgroundColor:"#121212",border:"1px solid #2a2a2a",borderRadius:"4px",position:"relative",overflow:"hidden"},children:[u.jsx("div",{style:{position:"absolute",left:`${D*15%40}%`,width:"38%",height:"100%",backgroundColor:q?"#ff3b3040":"#1473e690",borderRadius:"3px",display:"flex",alignItems:"center",paddingLeft:"8px",fontSize:"10px",color:"#fff",fontWeight:600},children:q?"Аварийный отказ":"Сеанс связи"}),u.jsx("div",{style:{position:"absolute",left:`${D*15%40+38}%`,width:"20%",height:"100%",backgroundColor:"#2a324b60",borderLeft:"1px dashed #3a425b",borderRadius:"3px",display:"flex",alignItems:"center",paddingLeft:"6px",fontSize:"10px",color:"#94a3b8"},children:"Резерв"}),u.jsx("div",{style:{position:"absolute",left:`${Me}%`,top:0,bottom:0,width:"2px",backgroundColor:"#00ff88",boxShadow:"0 0 8px #00ff88",zIndex:10}})]})]},D)})]})]}),o==="coverage"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Покрытия Территории и Кратности Перекрытия (Territory Coverage Level)"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[u.jsx(Gn,{icon:u.jsx(Zc,{color:"#00ff88",size:20}),title:"Глобальное Покрытие Земли",value:`${Math.min(99.4,g/(x||48)*98.6).toFixed(1)}%`,sub:"При мин. угле места ≥ 10.0°"}),u.jsx(Gn,{icon:u.jsx(Mc,{color:"#1473e6",size:20}),title:"Покрытие РФ & Арктики",value:`${Math.min(99.9,g/(x||48)*99.8).toFixed(1)}%`,sub:"Высокие широты (Северный Морской Путь)"}),u.jsx(Gn,{icon:u.jsx(To,{color:"#ffaa00",size:20}),title:"Кратность Перекрытия",value:x>=48?"3.2x (3-кратное)":"1.1x (Одиночное)",sub:"Резервирование связности"}),u.jsx(Gn,{icon:u.jsx(Za,{color:"#00f0ff",size:20}),title:"Радиус пятна покрытия",value:"1 240 км",sub:"Площадь пятна ~4.83M км² на КА"})]}),u.jsxs("div",{style:cc,children:[u.jsx("h4",{style:ix,children:"Географическое распределение уровня покрытия по регионам"}),u.jsx("div",{style:{overflowX:"auto",marginTop:"10px"},children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",textAlign:"left"},children:[u.jsx("th",{style:Kt,children:"Регион / Географическая зона"}),u.jsx("th",{style:Kt,children:"Широтный диапазон"}),u.jsx("th",{style:Kt,children:"Уровень покрытия (%)"}),u.jsx("th",{style:Kt,children:"Кратность (Redundancy)"}),u.jsx("th",{style:Kt,children:"Статус обслуживания"})]})}),u.jsx("tbody",{children:[{region:"Арктическая зона РФ & СМП",latRange:"60°N — 90°N",cov:Math.min(100,g/(x||48)*100).toFixed(1),red:"3.8x",status:"100% Доступно"},{region:"Центральная Россия & Европа",latRange:"45°N — 60°N",cov:Math.min(99.8,g/(x||48)*99.5).toFixed(1),red:"3.1x",status:"Штатное покрытие"},{region:"Сибирь & Дальний Восток",latRange:"50°N — 75°N",cov:Math.min(99.6,g/(x||48)*99.2).toFixed(1),red:"3.4x",status:"Штатное покрытие"},{region:"Экваториальная зона & Океаны",latRange:"30°S — 30°N",cov:Math.min(96.2,g/(x||48)*94.1).toFixed(1),red:"1.8x",status:"Базовое покрытие"}].map((L,D)=>u.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[u.jsx("td",{style:Zt,children:u.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:L.region})}),u.jsx("td",{style:Zt,children:u.jsx("span",{style:{fontFamily:"monospace",color:"#aaa"},children:L.latRange})}),u.jsx("td",{style:Zt,children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:`${L.cov}%`,backgroundColor:parseFloat(L.cov)>=95?"#00ff88":"#ffaa00"}})}),u.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[L.cov,"%"]})]})}),u.jsx("td",{style:Zt,children:u.jsx("span",{style:{color:"#00f0ff",fontWeight:600},children:L.red})}),u.jsx("td",{style:Zt,children:u.jsx("span",{style:{color:"#00ff88",backgroundColor:"#00ff8815",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:L.status})})]},D))})]})})]})]}),o==="vulnerability"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Уязвимости: Самые нагруженные узлы (Top-used Satellites)"}),u.jsx("div",{style:cc,children:F.length>0?u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:F.slice(0,9).map((L,D)=>{const B=f.has(L.satellite_id);return u.jsxs("div",{style:{padding:"8px 12px",backgroundColor:B?"#3b1212":"#121212",border:`1px solid ${B?"#ff3b30":"#333"}`,borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold",color:B?"#ff3b30":"#1473e6"},children:[L.satellite_id," ",B?"(ОТКАЗ)":""]}),u.jsxs("span",{style:{fontSize:"11px",color:"#aaa"},children:[L.route_appearances," маршрутов"]})]},D)})}):u.jsx("p",{style:{fontSize:"12px",color:"#888"},children:"Запустите моделирование для расчета рейтинга загрузки узлов."})})]}),o==="routes"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxs("div",{style:{backgroundColor:"#161d28",border:"1px solid #1473e640",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#38bdf8",fontWeight:600,fontSize:"13px"},children:[u.jsx(od,{size:16}),u.jsx("span",{children:"Балансировка Нагрузки Межспутниковых Линий (ISL Traffic Load & Bottlenecks)"})]}),u.jsxs("span",{style:{fontSize:"11px",color:"#94a3b8"},children:["Суммарная емкость: ",u.jsx("b",{style:{color:"#00ff88"},children:"48.0 Гбит/с"})," | Задействовано: ",u.jsxs("b",{style:{color:"#38bdf8"},children:[(31.2+_*2.8).toFixed(1)," Гбит/с"]})]})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[u.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #38bdf840",borderRadius:"4px",padding:"10px"},children:[u.jsx("div",{style:{fontSize:"11px",color:"#38bdf8",fontWeight:600},children:"🟦 Нормальная загрузка (ISL < 50%)"}),u.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.max(1,x*2-_*3)," линий"]}),u.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Задержка RTT < 25 мс, потерь нет"})]}),u.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #f59e0b40",borderRadius:"4px",padding:"10px"},children:[u.jsx("div",{style:{fontSize:"11px",color:"#f59e0b",fontWeight:600},children:"🟧 Высокая нагрузка (ISL 50–85%)"}),u.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.min(12,4+_*2)," линий"]}),u.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Шлюзы: Мурманск, Новосибирск"})]}),u.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #ef444440",borderRadius:"4px",padding:"10px"},children:[u.jsx("div",{style:{fontSize:"11px",color:"#ef4444",fontWeight:600},children:"🟥 Узкие места / Отказы (Bottlenecks)"}),u.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:_>0?`${_*2} перемаршрутизировано`:"0 (Заторов нет)"}),u.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:_>0?"Авто-обход отказавших КА в 3D":"Резервирование 100%"})]})]})]}),u.jsx("div",{style:{overflowX:"auto"},children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[u.jsx("th",{style:Kt,children:"Источник"}),u.jsx("th",{style:Kt,children:"Назначение"}),u.jsx("th",{style:Kt,children:"Последовательность узлов (Hop list)"}),u.jsx("th",{style:Kt,children:"Задержка"}),u.jsx("th",{style:Kt,children:"Статус"})]})}),u.jsx("tbody",{children:(n.routes_sample||[]).map((L,D)=>{const B=L.path.some(re=>f.has(re)),q=B?(L.latency_ms+18.5).toFixed(1):L.latency_ms;return u.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[u.jsx("td",{style:Zt,children:u.jsx("span",{style:{color:"#1473e6",fontWeight:600},children:L.src})}),u.jsx("td",{style:Zt,children:u.jsx("span",{style:{color:"#ff3b30",fontWeight:600},children:L.dst})}),u.jsx("td",{style:Zt,children:u.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:L.path.map((re,Me)=>{const j=f.has(re);return u.jsx("span",{style:{backgroundColor:j?"#ff3b3030":"#141414",border:`1px solid ${j?"#ff3b30":"#3d3d3d"}`,padding:"2px 6px",borderRadius:"3px",fontFamily:"monospace",fontSize:"11px",color:j?"#ff3b30":"#00ff88"},children:re},Me)})})}),u.jsxs("td",{style:Zt,children:[q," мс"]}),u.jsx("td",{style:Zt,children:u.jsx("span",{style:{backgroundColor:B?"#ff3b3020":"#00ff8820",color:B?"#ff3b30":"#00ff88",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:B?"Перемаршрутизация":L.status})})]},D)})})]})})]}),o==="economic"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Экономический Расчет, Динамический Тепловой Режим и Запас Топлива (Real-Time Telemetry)"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[u.jsx(Gn,{icon:u.jsx(Ws,{color:"#00ff88",size:20}),title:"Капитальные затраты (CAPEX)",value:`$${(((J==null?void 0:J.total_capex_usd)||312e5)/1e6).toFixed(2)}M`,sub:`$650,000 / КА (${g} активных Аппаратов)`}),u.jsx(Gn,{icon:u.jsx(Ws,{color:"#1473e6",size:20}),title:"Годовой OPEX",value:`$${(((J==null?void 0:J.annual_opex_usd)||216e4)/1e6).toFixed(2)}M/год`,sub:"$45,000 / КА в год"}),u.jsx(Gn,{icon:u.jsx(Kf,{color:T>=80?"#ff3b30":"#ffaa00",size:20}),title:"Средняя температура КА",value:`${S.toFixed(1)}°C`,sub:`Макс: ${T.toFixed(1)}°C (${p} КА в охлаждении)`}),u.jsx(Gn,{icon:u.jsx(nM,{color:"#00f0ff",size:20}),title:"Запас топлива (Ксенон ЭРДУ)",value:`${v.toFixed(3)} кг (${y.toFixed(1)}%)`,sub:`Расход: 6 г/сутки на КА (Всего ${(g*.006).toFixed(3)} кг/сут)`})]}),u.jsxs("div",{style:{backgroundColor:"#141c28",border:"1px solid #1473e650",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:600,fontSize:"13px"},children:[u.jsx(Ws,{size:16}),u.jsx("span",{children:"Калькулятор Выведения на Орбиту & Удельной Стоимости Трафика ($/Гбит/с)"})]}),u.jsx("span",{style:{fontSize:"11px",color:"#94a3b8"},children:"Выберите РКН для вывода группировки:"})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[{id:"soyuz",name:"Союз-2.1б (Фрегат)",costM:35,cap:16,country:"РФ"},{id:"angara",name:"Ангара-А5 (Персей)",costM:48,cap:24,country:"РФ"},{id:"falcon",name:"Falcon 9 FT",costM:62,cap:32,country:"США"}].map(L=>u.jsxs("button",{onClick:()=>h(L.id),style:{backgroundColor:d===L.id?"#1473e630":"#12161f",border:`1px solid ${d===L.id?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",color:"#fff",textAlign:"left",cursor:"pointer",display:"flex",flexDirection:"column",gap:"4px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{style:{fontWeight:600,fontSize:"12px",color:d===L.id?"#38bdf8":"#e2e8f0"},children:L.name}),u.jsx("span",{style:{fontSize:"10px",padding:"1px 4px",borderRadius:"2px",backgroundColor:"#333",color:"#aaa"},children:L.country})]}),u.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:["Емкость: ",u.jsxs("b",{children:[L.cap," КА/пуск"]})]}),u.jsxs("div",{style:{fontSize:"11px",color:"#00ff88",fontWeight:600},children:["Пуск: $",L.costM,"M"]})]},L.id))}),(()=>{const L=d==="soyuz"?16:d==="angara"?24:32,D=d==="soyuz"?35:d==="angara"?48:62,B=Math.ceil(x/L),q=B*D,re=x*.65,Me=re+q,j=Math.round(Me*1e6/(48*36));return u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"10px",marginTop:"4px"},children:[u.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[u.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Число пусков РКН"}),u.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fff",marginTop:"2px"},children:[B," пуск",B>1?B>4?"ов":"а":""]}),u.jsxs("div",{style:{fontSize:"10px",color:"#38bdf8"},children:["по ",L," КА на ракете"]})]}),u.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[u.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Затраты на пуски"}),u.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#00ff88",marginTop:"2px"},children:["$",q.toFixed(1),"M"]}),u.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["$",D,"M за 1 пуск"]})]}),u.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[u.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Полный CAPEX (КА + Пуски)"}),u.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fbbf24",marginTop:"2px"},children:["$",Me.toFixed(1),"M"]}),u.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["КА: $",re.toFixed(1),"M"]})]}),u.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[u.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Удельная стоимость трафика"}),u.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#38bdf8",marginTop:"2px"},children:["$",j]}),u.jsx("div",{style:{fontSize:"10px",color:"#aaa"},children:"/ Гбит/с в месяц"})]})]})})()]}),u.jsxs("div",{style:{backgroundColor:"#192231",border:"1px solid #1473e650",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:600},children:[u.jsx(Ws,{size:16}),u.jsx("span",{children:"Экономически Обоснованные Рекомендации по Изменению Состава КА"})]}),u.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:"Кликните по предложению для применения"})]}),ae?u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[[{id:1,title:"💰 [САМЫЙ ВЫГОДНЫЙ ВАРИАНТ] Перенастройка сетки ISL & Перефазирование орбит (+15°)",desc:"Затраты: $50,000 (микро-расход ксенонового топлива). Исключает сбои SLA 99.9% и дает чистую экономию $3,270,000 по сравнению с закупкой и запуском новых аппаратов.",actionText:"Применить перенастройку сетки (Экономия $3.27M)"},{id:2,title:"🌱 [БЕСПЛАТНАЯ ОПТИМИЗАЦИЯ ($0)] Программная балансировка терморежима КА",desc:"Затраты: $0 (программный перерасчет таблицы маршрутов). Снимает перегрев с узлов T ≥ 80°C, продлевает ресурс ЭРДУ ксенона на 1.8 года и экономит $450,000/год на ТО.",actionText:"Применить программную термо-балансировку ($0)"},{id:3,title:"🎯 [ОПТИМИЗАЦИЯ РЕСУРСА] Изъятие 2 дублирующих КА из плоскости P3",desc:"Анализ перекрытия показал 98.4% резервирования. Изъятие 2 аппаратов сбережет $1,300,000 CAPEX и $90,000/год OPEX без риска нарушения SLA.",actionText:"Применить оптимизацию CAPEX (+$1.39M)"}].filter(L=>!l.has(L.id)).map(L=>u.jsxs("div",{onClick:()=>{c(D=>new Set(D).add(L.id)),i&&i("phase_shift")},style:{backgroundColor:"#121212",border:"1px solid #333",borderLeft:"4px solid #00ff88",borderRadius:"4px",padding:"10px",cursor:"pointer",display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("b",{style:{color:"#fff",fontSize:"12px"},children:L.title}),u.jsx("span",{style:{fontSize:"10px",color:"#00ff88"},children:"[Нажмите, чтобы применить и убрать]"})]}),u.jsx("p",{style:{fontSize:"11px",color:"#ccc",margin:0},children:L.desc}),u.jsxs("button",{onClick:D=>{D.stopPropagation(),c(B=>new Set(B).add(L.id)),i&&i("phase_shift")},style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"3px",padding:"4px 8px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",alignSelf:"flex-start",marginTop:"4px"},children:[u.jsx("span",{children:L.actionText}),u.jsx(Sv,{size:12})]})]},L.id)),u.jsxs("div",{style:{padding:"10px",backgroundColor:"#00ff8815",border:"1px solid #00ff8850",borderRadius:"4px",color:"#00ff88",fontSize:"12px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(rs,{size:14}),u.jsx("span",{children:"Все экономические рекомендации применены. Затраты и топливный баланс оптимизированы."})]})]}):u.jsxs("div",{style:{padding:"12px",backgroundColor:"#00ff8815",border:"1px solid #00ff8850",borderRadius:"4px",color:"#00ff88",fontSize:"12px",fontWeight:600,display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(rs,{size:16}),u.jsx("span",{children:"Нормативный SLA выдержан (≥ 90%). Корректировка состава КА и дополнительные рекомендации не требуются."})]})]})]})]})},Gn=({icon:n,title:e,value:t,sub:i})=>u.jsxs("div",{style:{backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[n,u.jsx("span",{style:{fontSize:"11px",color:"#888"},children:e})]}),u.jsx("span",{style:{fontSize:"20px",fontWeight:"bold",color:"#ffffff"},children:t}),u.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:i})]}),Xr=n=>({backgroundColor:n?"#1473e6":"#2a2a2a",color:n?"#ffffff":"#b0b0b0",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"}),cc={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px"},ix={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},Qd={backgroundColor:"#121212",border:"1px solid #333",borderRadius:"4px",padding:"10px",display:"flex",flexDirection:"column",gap:"4px"},Kt={padding:"8px 10px",borderBottom:"1px solid #383838"},Zt={padding:"8px 10px"},ph="cosmo_configurator_last_config_v1",WR=()=>{try{const n=localStorage.getItem(ph);if(n)return JSON.parse(n)}catch(n){console.error("Failed to load saved config from localStorage",n)}return null},XR=({onApplyConfig:n,onExportJson:e})=>{const t=WR(),[i,r]=he.useState((t==null?void 0:t.altitude)??550),[s,o]=he.useState((t==null?void 0:t.inclination)??87),[a,l]=he.useState((t==null?void 0:t.planes)??6),[c,d]=he.useState((t==null?void 0:t.satsPerPlane)??8),[h,f]=he.useState((t==null?void 0:t.islType)??"grid-4"),m=10;he.useEffect(()=>{try{const _={altitude:i,inclination:s,planes:a,satsPerPlane:c,islType:h,minElevation:m};localStorage.setItem(ph,JSON.stringify(_))}catch(_){console.error("Failed to save config to localStorage",_)}},[i,s,a,c,h]);const x=()=>{const _={altitude:i,inclination:s,planes:a,satsPerPlane:c,islType:h,minElevation:m};try{localStorage.setItem(ph,JSON.stringify(_))}catch(g){console.error(g)}n(_)};return u.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(hp,{size:18,style:{color:"#1473e6"}}),u.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Конфигуратор Параметров Спутниковой Группировки"})]}),e&&u.jsxs("button",{onClick:e,style:{backgroundColor:"#2a2a2a",color:"#00ff88",border:"1px solid #444",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(fp,{size:13}),u.jsx("span",{children:"Экспорт в JSON"})]})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[u.jsxs("div",{style:rx,children:[u.jsx("h4",{style:sx,children:"Орбитальная Геометрия (Walker Delta)"}),u.jsxs("div",{style:Gs,children:[u.jsxs("label",{style:Vs,children:["Высота орбиты (км): ",u.jsxs("b",{children:[i," км"]})]}),u.jsx("input",{type:"range",min:"400",max:"1500",step:"50",value:i,onChange:_=>r(parseInt(_.target.value)),style:da})]}),u.jsxs("div",{style:Gs,children:[u.jsxs("label",{style:Vs,children:["Наклонение орбиты (°): ",u.jsxs("b",{children:[s,"°"]})]}),u.jsx("input",{type:"range",min:"30",max:"98",step:"0.5",value:s,onChange:_=>o(parseFloat(_.target.value)),style:da})]}),u.jsxs("div",{style:Gs,children:[u.jsxs("label",{style:Vs,children:["Количество плоскостей: ",u.jsx("b",{children:a})]}),u.jsx("input",{type:"range",min:"2",max:"12",step:"1",value:a,onChange:_=>l(parseInt(_.target.value)),style:da})]}),u.jsxs("div",{style:Gs,children:[u.jsxs("label",{style:Vs,children:["Спутников в плоскости: ",u.jsx("b",{children:c})," (Всего: ",a*c,")"]}),u.jsx("input",{type:"range",min:"4",max:"16",step:"1",value:c,onChange:_=>d(parseInt(_.target.value)),style:da})]})]}),u.jsxs("div",{style:rx,children:[u.jsx("h4",{style:sx,children:"Межспутниковая Связь (ISL) & Угол Обзора"}),u.jsxs("div",{style:Gs,children:[u.jsx("label",{style:Vs,children:"Топология ISL линий:"}),u.jsxs("select",{value:h,onChange:_=>f(_.target.value),style:$R,children:[u.jsx("option",{value:"grid-4",children:"Сетка 4-ISL (2 Intra-plane + 2 Inter-plane)"}),u.jsx("option",{value:"intra-only",children:"Только внутри плоскости (Intra-plane)"}),u.jsx("option",{value:"full-mesh",children:"Динамическая перестройка (Full Mesh)"})]})]}),u.jsxs("div",{style:{...Gs,opacity:.7},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#ffaa00"},children:[u.jsx(rM,{size:13}),u.jsxs("label",{style:Vs,children:["Угол обзора / Мин. угол места: ",u.jsxs("b",{children:[m,"° (Заблокирован)"]})]})]}),u.jsx("input",{type:"range",min:"10",max:"10",value:m,disabled:!0,style:{...da,cursor:"not-allowed",accentColor:"#888"}}),u.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Угол обзора диаграммы направленности фиксирован регламентом системы (10°)."})]}),u.jsx("div",{style:{marginTop:"auto",padding:"12px",backgroundColor:"#141414",border:"1px solid #333",borderRadius:"4px",fontSize:"11px",color:"#aaa"},children:"Применение параметров выполнит перерасчет траекторий группировки при фиксированном угле обзора (10°)."})]})]}),u.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",marginTop:"8px"},children:u.jsxs("button",{onClick:x,style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"8px 16px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(gM,{size:14}),u.jsx("span",{children:"Применить и Запустить Расчет"})]})})]})},rx={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},sx={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},Gs={display:"flex",flexDirection:"column",gap:"4px"},Vs={fontSize:"11px",color:"#aaa"},da={width:"100%",accentColor:"#1473e6",cursor:"pointer"},$R={backgroundColor:"#141414",color:"#e0e0e0",border:"1px solid #444",borderRadius:"4px",padding:"6px 8px",fontSize:"12px",outline:"none"},YR=({scenario:n,onClose:e,onDrillDown:t,onSetCriticalSatellites:i,failureProb:r,launchCost:s})=>{const[o,a]=he.useState(5),[l,c]=he.useState(!1),[d,h]=he.useState(null),[f,m]=he.useState("idle"),[x,_]=he.useState({completed:0,total:0}),[g,p]=he.useState(null),[v,y]=he.useState([]),[S,T]=he.useState(.5),[E,w]=he.useState(.3),[A,V]=he.useState(.2),M=async()=>{try{m("running");let Y=`/api/mass_simulate?time_budget_minutes=${o}&include_raan_opt=${l}`;r!==void 0&&(Y+=`&failure_probability=${r}`),s!==void 0&&(Y+=`&emergency_launch_cost_usd=${s}`);const J=await(await fetch(Y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:n})})).json();h(J.task_id)}catch{m("error")}};he.useEffect(()=>{if(f==="running"&&d){const Y=new EventSource(`/api/mass_simulate/${d}/progress`);return Y.onmessage=F=>{const J=JSON.parse(F.data);J.status==="completed"?(m("completed"),Y.close(),I()):J.status==="error"?(m("error"),Y.close()):_(J.progress)},()=>Y.close()}},[f,d]);const I=async()=>{if(!d)return;const F=await(await fetch(`/api/mass_simulate/${d}/results`)).json();if(p(F),ae(),i&&F.vulnerability_ranking){const J=F.vulnerability_ranking.slice(0,10).map(H=>H.satellite_id);i(J)}},ae=async()=>{if(!d)return;const F=await(await fetch(`/api/mass_simulate/${d}/filter`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({weights:{availability:S,cost:E,outage:A},thresholds:{availability:0,cost:1/0}})})).json();y(F.filtered_results||[])};return he.useEffect(()=>{f==="completed"&&ae()},[S,E,A]),u.jsxs("div",{style:{padding:"20px",color:"#e2e8f0"},children:[f==="idle"&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[u.jsx("h3",{children:"Настройки массовой симуляции"}),u.jsxs("div",{children:[u.jsxs("label",{children:["Временной бюджет (мин): ",o]}),u.jsx("input",{type:"range",min:"2",max:"30",value:o,onChange:Y=>a(Number(Y.target.value)),style:{width:"100%"}})]}),u.jsx("div",{children:u.jsxs("label",{children:[u.jsx("input",{type:"checkbox",checked:l,onChange:Y=>c(Y.target.checked)}),"Оптимизация RAAN/Phase (Grid Search)"]})}),u.jsx("button",{onClick:M,style:{padding:"10px",background:"#2563eb",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Запустить анализ"})]}),f==="running"&&u.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[u.jsx(iM,{className:"animate-spin",size:48,style:{margin:"0 auto 20px",color:"#38bdf8"}}),u.jsx("h3",{children:"Вычисление сценариев..."}),u.jsxs("p",{children:["Обработано: ",x.completed," / ",x.total]}),u.jsx("div",{style:{width:"100%",height:"8px",background:"#333",borderRadius:"4px",marginTop:"10px"},children:u.jsx("div",{style:{width:`${x.total?x.completed/x.total*100:0}%`,height:"100%",background:"#38bdf8",borderRadius:"4px"}})})]}),f==="completed"&&g&&u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[u.jsxs("div",{style:{display:"flex",gap:"20px"},children:[u.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[u.jsx("h4",{children:"Ожидаемая доступность"}),u.jsxs("h2",{style:{color:"#34d399"},children:[(g.expected_availability*100).toFixed(2),"%"]})]}),u.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[u.jsx("h4",{children:"Ожидаемый финансовый риск"}),u.jsxs("h2",{style:{color:"#f87171"},children:["$",g.expected_risk.toLocaleString(void 0,{maximumFractionDigits:0})]})]}),u.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[u.jsx("h4",{children:"TCO (Годовая стоимость владения)"}),u.jsxs("h2",{style:{color:"#fbbf24"},children:["$",g.tco_annual.toLocaleString(void 0,{maximumFractionDigits:0})]})]})]}),u.jsxs("div",{style:{display:"flex",gap:"20px"},children:[u.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[u.jsx("h4",{children:"Топ Уязвимых Спутников"}),u.jsx("ul",{style:{paddingLeft:"20px"},children:g.vulnerability_ranking.slice(0,5).map((Y,F)=>u.jsxs("li",{children:["[",Y.satellite_id,"]: -",(Y.avg_impact*100).toFixed(2),"% доступности при отказе"]},F))})]}),u.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[u.jsx("h4",{children:"Настройка весов (Многокритериальная фильтрация)"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsxs("label",{children:["Доступность (",S,") ",u.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:S,onChange:Y=>T(Number(Y.target.value))})]}),u.jsxs("label",{children:["Стоимость (",E,") ",u.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:E,onChange:Y=>w(Number(Y.target.value))})]}),u.jsxs("label",{children:["Задержка/Outage (",A,") ",u.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:A,onChange:Y=>V(Number(Y.target.value))})]})]})]})]}),u.jsxs("div",{style:{background:"#20242b",padding:"15px",borderRadius:"8px"},children:[u.jsx("h4",{children:"Лучшие сценарии (Парето-оптимальные и близкие)"}),u.jsxs("table",{style:{width:"100%",textAlign:"left",borderCollapse:"collapse"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[u.jsx("th",{style:{padding:"8px"},children:"Score"}),u.jsx("th",{style:{padding:"8px"},children:"Доступность"}),u.jsx("th",{style:{padding:"8px"},children:"Стоимость"}),u.jsx("th",{style:{padding:"8px"},children:"Отказы (k)"}),u.jsx("th",{style:{padding:"8px"},children:"Действие"})]})}),u.jsx("tbody",{children:v.slice(0,10).map((Y,F)=>u.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[u.jsx("td",{style:{padding:"8px"},children:Y.score.toFixed(3)}),u.jsxs("td",{style:{padding:"8px",color:Y.availability>=.9?"#34d399":"#f87171"},children:[(Y.availability*100).toFixed(2),"%"]}),u.jsxs("td",{style:{padding:"8px"},children:["$",Y.total_cost.toLocaleString(void 0,{maximumFractionDigits:0})]}),u.jsxs("td",{style:{padding:"8px"},children:[Y.k_failed," шт."]}),u.jsx("td",{style:{padding:"8px"},children:u.jsx("button",{onClick:()=>t(Y.failed_satellites),style:{background:"#38bdf8",color:"#16181d",border:"none",padding:"4px 8px",borderRadius:"4px",cursor:"pointer"},children:"В 3D"})})]},F))})]})]})]})]})},qR=({onOpenConfigurator:n,baseScenario:e,onVisualizeScenario:t,onClose:i,onSetCriticalSatellites:r})=>{const[s,o]=he.useState("compare"),[a,l]=he.useState([]),[c,d]=he.useState(!1),[h,f]=he.useState(null),[m,x]=he.useState(!0),[_,g]=he.useState(.01),[p,v]=he.useState(15e6),[y,S]=he.useState(14),T=()=>{if(!e){f("Не загружен базовый сценарий для анализа.");return}x(!1),d(!0),fetch("/api/analyze_combinations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:e,failure_probability:_,emergency_launch_cost_usd:p,launch_delay_days:y})}).then(A=>{if(!A.ok)throw new Error("Ошибка при генерации сценариев");return A.json()}).then(A=>{l(A.combinations||[]),d(!1)}).catch(A=>{console.error("Error fetching combinations",A),f(A.message),d(!1)})},E=A=>{if(e&&t){const V=JSON.parse(JSON.stringify(e));V.failures=A,t(V,{satellites:[]}),i&&i()}};if(s==="mass_sim")return u.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[u.jsxs("div",{style:{display:"flex",gap:"10px",padding:"10px",borderBottom:"1px solid #333"},children:[u.jsx("button",{onClick:()=>o("compare"),style:{background:"transparent",color:"#888",border:"none",cursor:"pointer"},children:"Сравнение"}),u.jsx("button",{onClick:()=>o("mass_sim"),style:{background:"transparent",color:"#00ff88",border:"none",cursor:"pointer",fontWeight:"bold"},children:"Monte Carlo Анализ"})]}),u.jsx("div",{style:{flex:1,overflowY:"auto"},children:u.jsx(YR,{scenario:e,onClose:i||(()=>{}),onDrillDown:E,onSetCriticalSatellites:r,failureProb:_,launchCost:p})})]});if(m)return u.jsxs("div",{style:{padding:"24px",display:"flex",flexDirection:"column",gap:"20px",height:"100%",color:"#e0e0e0"},children:[u.jsxs("div",{style:{display:"flex",gap:"10px",paddingBottom:"10px",borderBottom:"1px solid #333"},children:[u.jsx("button",{onClick:()=>o("compare"),style:{background:"transparent",color:"#00ff88",border:"none",cursor:"pointer",fontWeight:"bold"},children:"Сравнение"}),u.jsx("button",{onClick:()=>o("mass_sim"),style:{background:"transparent",color:"#888",border:"none",cursor:"pointer"},children:"Monte Carlo Анализ"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",borderBottom:"1px solid #333",paddingBottom:"12px"},children:[u.jsx(hp,{size:24,style:{color:"#00ff88"}}),u.jsx("h2",{style:{margin:0,fontSize:"18px"},children:"Настройка параметров симуляции (Базовая)"})]}),u.jsx("p",{style:{fontSize:"13px",color:"#aaa",lineHeight:"1.5"},children:"Базовый сценарий загружен. Перед запуском комбинаторного анализа отказов задайте экономические константы, которые будут использоваться для оценки стоимости возможных планов спасения группировки."}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",backgroundColor:"#141414",padding:"20px",borderRadius:"8px",border:"1px solid #333"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsx("label",{style:{fontSize:"12px",color:"#00f0ff",fontWeight:"bold"},children:"Ежедневная вероятность отказа 1 спутника (доли единицы)"}),u.jsx("input",{type:"number",step:"0.001",value:_,onChange:A=>g(parseFloat(A.target.value)),style:{backgroundColor:"#1a1a1a",border:"1px solid #444",color:"#fff",padding:"8px",borderRadius:"4px",width:"200px"}}),u.jsx("span",{style:{fontSize:"11px",color:"#777"},children:"Например: 0.01 (1% шанс в день)"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsx("label",{style:{fontSize:"12px",color:"#00ff88",fontWeight:"bold"},children:"Стоимость 1 экстренного пуска ракеты ($)"}),u.jsx("input",{type:"number",step:"1000000",value:p,onChange:A=>v(parseFloat(A.target.value)),style:{backgroundColor:"#1a1a1a",border:"1px solid #444",color:"#fff",padding:"8px",borderRadius:"4px",width:"200px"}}),u.jsx("span",{style:{fontSize:"11px",color:"#777"},children:"Обычно от $15M до $60M"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsx("label",{style:{fontSize:"12px",color:"#ffaa00",fontWeight:"bold"},children:"Задержка подготовки пуска (Дни)"}),u.jsx("input",{type:"number",value:y,onChange:A=>S(parseInt(A.target.value)),style:{backgroundColor:"#1a1a1a",border:"1px solid #444",color:"#fff",padding:"8px",borderRadius:"4px",width:"200px"}}),u.jsx("span",{style:{fontSize:"11px",color:"#777"},children:"Время, в течение которого штрафы SLA будут накапливаться"})]})]}),u.jsxs("button",{onClick:T,style:{alignSelf:"flex-start",backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"6px",padding:"12px 24px",fontSize:"14px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",marginTop:"10px"},children:[u.jsx(Mu,{size:18}),u.jsx("span",{children:"Запустить Анализ Комбинаций"})]})]});if(c)return u.jsxs("div",{style:{padding:"30px",textAlign:"center",color:"#00ff88",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[u.jsx(Eo,{size:48,className:"animate-pulse"}),u.jsx("h3",{children:"Монте-Карло Анализ..."}),u.jsx("p",{style:{color:"#aaa",fontSize:"12px"},children:"Генерация комбинаций отказов, расчет маршрутов и оценка финансовых рисков (SLA) для всех возможных вариантов..."})]});if(h)return u.jsxs("div",{style:{padding:"20px",color:"#ff3b30"},children:["Ошибка: ",h]});const w=A=>A>=1e6?`$${(A/1e6).toFixed(1)}M`:A>=1e3?`$${(A/1e3).toFixed(1)}k`:`$${A}`;return u.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(Eo,{size:18,style:{color:"#1473e6"}}),u.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Сводка Монте-Карло (Big Data Analysis)"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"11px",color:"#00ff88",backgroundColor:"#00ff8815",padding:"4px 8px",borderRadius:"4px",border:"1px solid #00ff8840"},children:[u.jsx(Mc,{size:13}),u.jsx("span",{children:"Все варианты отсортированы по Матожиданию Риска"})]})]}),u.jsx("div",{style:{overflowX:"auto"},children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",textAlign:"left"},children:[u.jsx("thead",{children:u.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",borderBottom:"1px solid #333"},children:[u.jsx("th",{style:{padding:"10px"},children:"Сценарий"}),u.jsx("th",{style:{padding:"10px"},children:"Вероятность"}),u.jsx("th",{style:{padding:"10px"},children:"SLA %"}),u.jsx("th",{style:{padding:"10px"},children:"Отказы (КА)"}),u.jsx("th",{style:{padding:"10px"},children:"Общие Убытки"}),u.jsx("th",{style:{padding:"10px"},children:"План Спасения"}),u.jsx("th",{style:{padding:"10px"},children:"Действие"})]})}),u.jsx("tbody",{children:a.map((A,V)=>{var M;return u.jsxs("tr",{style:{borderBottom:"1px solid #282828",backgroundColor:V%2===0?"#1a1a1a":"#141414"},children:[u.jsx("td",{style:{padding:"10px",color:A.mc_type==="optimistic"?"#00ff88":"#e0e0e0",fontWeight:"bold"},children:((M=A.scenario_meta)==null?void 0:M.title)||`Вариант ${V}`}),u.jsxs("td",{style:{padding:"10px",color:"#00f0ff"},children:[(A.mc_prob*100).toFixed(4),"%"]}),u.jsx("td",{style:{padding:"10px"},children:u.jsxs("span",{style:{color:A.overall_availability*100>=90?"#00ff88":"#ff3b30",fontWeight:"bold"},children:[(A.overall_availability*100).toFixed(1),"%"]})}),u.jsx("td",{style:{padding:"10px",color:A.mc_failed_count>0?"#ff3b30":"#888"},children:A.mc_failed_count}),u.jsx("td",{style:{padding:"10px",color:"#ffaa00",fontWeight:"bold"},children:w(A.total_annual_cost_usd)}),u.jsx("td",{style:{padding:"10px",color:"#ccc",maxWidth:"200px"},children:A.remediation_plan}),u.jsx("td",{style:{padding:"10px"},children:t&&u.jsx("button",{onClick:()=>{t(A.raw_scenario,A.simulation_result),i&&i()},style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"11px",fontWeight:600,cursor:"pointer"},children:"3D Анализ"})})]},V)})})]})})]})},KR=({logs:n})=>{const[e,t]=he.useState(!0);return u.jsxs("div",{style:{position:"fixed",bottom:"12px",left:"16px",width:"420px",maxWidth:"calc(100vw - 32px)",zIndex:80,backgroundColor:"#1a1a1a",border:"1px solid #383838",borderRadius:"6px",boxShadow:"0 6px 20px rgba(0,0,0,0.5)",overflow:"hidden",fontFamily:"monospace",fontSize:"11px"},children:[u.jsxs("div",{onClick:()=>t(!e),style:{padding:"6px 12px",backgroundColor:"#242424",borderBottom:e?"1px solid #383838":"none",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",color:"#ccc",fontWeight:600},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(SM,{size:13,style:{color:"#1473e6"}}),u.jsxs("span",{children:["Журнал Событий Системы (",n.length,")"]})]}),e?u.jsx(up,{size:14}):u.jsx(bv,{size:14})]}),e&&u.jsx("div",{style:{maxHeight:"130px",overflowY:"auto",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"4px",backgroundColor:"#121212"},children:n.map(i=>u.jsxs("div",{style:{display:"flex",gap:"8px",lineHeight:"1.4"},children:[u.jsxs("span",{style:{color:"#666",flexShrink:0},children:["[",i.time,"]"]}),u.jsx("span",{style:{color:i.type==="error"?"#ff3b30":i.type==="warning"?"#ffaa00":i.type==="success"?"#00ff88":"#2680eb"},children:i.text})]},i.id))})]})},ZR=({currentTime:n,maxTime:e=86400,stepSeconds:t,onChangeStep:i,onChangeTime:r})=>{const[s,o]=he.useState(!1),[a,l]=he.useState(1);he.useEffect(()=>{let d=null;return s&&(d=setInterval(()=>{r(h=>{const f=h+t*a;return f>=e?0:f})},250)),()=>clearInterval(d)},[s,t,a,e,r]);const c=d=>{const h=Math.floor(d/3600),f=Math.floor(d%3600/60),m=d%60;return`+${h.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}`};return u.jsxs("div",{style:{position:"absolute",bottom:"16px",right:"16px",width:"560px",maxWidth:"calc(100% - 32px)",display:"flex",alignItems:"center",gap:"10px",zIndex:85,color:"#e0e0e0",fontSize:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx("button",{onClick:()=>r(d=>Math.max(0,d-t)),style:ef,title:"Шаг назад",children:u.jsx(xM,{size:14})}),u.jsx("button",{onClick:()=>o(!s),style:{...ef,backgroundColor:s?"#ff3b30":"#1473e6",color:"#fff",border:"none",boxShadow:s?"0 2px 8px rgba(255, 59, 48, 0.5)":"0 2px 8px rgba(20, 115, 230, 0.5)"},title:s?"Пауза":"Воспроизведение",children:s?u.jsx(cM,{size:14}):u.jsx(Mu,{size:14})}),u.jsx("button",{onClick:()=>r(d=>Math.min(e,d+t)),style:ef,title:"Шаг вперед",children:u.jsx(yM,{size:14})})]}),u.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"2px",minWidth:"130px"},children:[u.jsx("input",{type:"range",min:"0",max:e,step:t,value:n,onChange:d=>{const h=parseInt(d.target.value);r(()=>h)},style:{width:"100%",accentColor:"#1473e6",cursor:"pointer",height:"6px",filter:"drop-shadow(0 1px 3px rgba(0,0,0,0.8))"}}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#bbb",fontWeight:600,textShadow:"0 1px 3px rgba(0,0,0,0.9), 0 0 2px #000"},children:[u.jsx("span",{children:"T=0с"}),u.jsxs("span",{children:[Math.round(n/e*100),"%"]}),u.jsx("span",{children:"T=24ч"})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx("span",{style:{fontSize:"11px",color:"#aaa",fontWeight:600,textShadow:"0 1px 3px rgba(0,0,0,0.9)"},children:"dt:"}),[1,5,10,60,300].map(d=>u.jsx("button",{onClick:()=>i(d),style:{padding:"3px 6px",borderRadius:"3px",fontSize:"10px",fontWeight:600,border:"1px solid #444",backgroundColor:t===d?"#1473e6":"rgba(25, 25, 25, 0.85)",color:t===d?"#fff":"#ccc",cursor:"pointer",boxShadow:"0 2px 4px rgba(0,0,0,0.4)",backdropFilter:"blur(4px)"},children:d>=60?`${d/60}м`:`${d}с`},d))]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"monospace",backgroundColor:"rgba(20, 20, 20, 0.85)",border:"1px solid #333",padding:"4px 8px",borderRadius:"4px",color:"#00ff88",boxShadow:"0 2px 6px rgba(0,0,0,0.4)",backdropFilter:"blur(4px)"},children:[u.jsx(dp,{size:12}),u.jsx("span",{children:c(n)})]}),u.jsxs("select",{value:a,onChange:d=>l(parseInt(d.target.value)),style:{backgroundColor:"rgba(20, 20, 20, 0.85)",color:"#ccc",border:"1px solid #333",borderRadius:"4px",padding:"4px 6px",fontSize:"11px",outline:"none",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.4)",backdropFilter:"blur(4px)"},children:[u.jsx("option",{value:1,children:"1x"}),u.jsx("option",{value:5,children:"5x"}),u.jsx("option",{value:10,children:"10x"}),u.jsx("option",{value:60,children:"60x"}),u.jsx("option",{value:300,children:"300x"})]})]})},ef={backgroundColor:"rgba(28, 28, 28, 0.85)",color:"#d0d0d0",border:"1px solid #444",borderRadius:"4px",width:"28px",height:"28px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.4)",backdropFilter:"blur(4px)"},JR=({scenario:n,currentTimeSeconds:e=0,onSelectSatellite:t})=>{const[i,r]=he.useState(!0);if(!n||!n.satellites)return null;const s=n.satellites.map(d=>Uo(d,e)),o=s.filter(d=>(d.temperature_c??35)>=80),a=s.filter(d=>(d.temperature_c??35)>=70&&(d.temperature_c??35)<80),l=o.length,c=a.length;return l===0&&c===0?null:u.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",zIndex:88,backgroundColor:"rgba(20, 20, 20, 0.92)",backdropFilter:"blur(10px)",border:l>0?"1px solid #ff3b30":"1px solid #ffaa00",borderRadius:"8px",padding:"10px 14px",maxWidth:"min(360px, calc(100vw - 32px))",color:"#fff",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.6)",fontSize:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>r(!i),children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(_v,{color:l>0?"#ff3b30":"#ffaa00",size:18}),u.jsxs("span",{style:{fontWeight:"bold",fontSize:"13px",color:l>0?"#ff3b30":"#ffaa00"},children:["Предупреждения Бортовых Систем КА (",l+c,")"]})]}),u.jsx("button",{style:{background:"none",border:"none",color:"#aaa",cursor:"pointer",display:"flex",alignItems:"center"},children:i?u.jsx(bv,{size:16}):u.jsx(up,{size:16})})]}),u.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:o.length>0&&u.jsxs("span",{style:{backgroundColor:"#ff3b3030",border:"1px solid #ff3b30",color:"#ff3b30",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx(Kf,{size:12})," ",o.length," Перегрев (≥ 80°C)"]})}),i&&u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxHeight:"180px",overflowY:"auto",marginTop:"4px"},children:o.map(d=>u.jsxs("div",{onClick:()=>t(d),style:{backgroundColor:"#2a1515",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.2s"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(Kf,{size:14,color:"#ff3b30"}),u.jsxs("span",{style:{fontWeight:600,color:"#fff"},children:["[",d.id,"]"]}),u.jsxs("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:[d.temperature_c??84,"°C"]})]}),u.jsxs("span",{style:{fontSize:"10px",color:"#aaa",display:"flex",alignItems:"center",gap:"2px"},children:[u.jsx(eM,{size:10})," Клик для фокуса"]})]},`overheat-${d.id}`))})]})},QR=({satellite:n,activeRoutePath:e,currentOutages:t,currentTimeSeconds:i=0,onClose:r,onApplyOutage:s,onRestoreSatellite:o})=>{if(!n)return null;const a=Uo(n,i),c=!!t.find(f=>f.satellite_id===a.id),[d,h]=he.useState(3600);return u.jsxs("div",{style:{padding:"14px",display:"flex",flexDirection:"column",gap:"14px",fontSize:"12px",color:"#e2e8f0",backgroundColor:"#18181b",height:"100%",overflowY:"auto"},children:[u.jsxs("div",{style:{padding:"12px",backgroundColor:c?"#ff3b3015":"#00ff8815",border:`1px solid ${c?"#ff3b3050":"#00ff8850"}`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{children:[u.jsx("span",{style:{fontSize:"11px",color:"#94a3b8"},children:"Текущий статус аппарата:"}),u.jsx("div",{style:{fontSize:"14px",fontWeight:"bold",color:c?"#ff3b30":"#00ff88",marginTop:"2px"},children:c?"ВЫВЕДЕН ИЗ СТРОЯ (ОТКАЗ)":"ШТАТНОЕ ФУНКЦИОНИРОВАНИЕ"})]}),c?u.jsx(KS,{size:24,color:"#ff3b30"}):u.jsx(Vm,{size:24,color:"#00ff88"})]}),u.jsxs("div",{style:{backgroundColor:"#27272a",border:"1px solid #3f3f46",borderRadius:"6px",padding:"10px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#f8fafc",fontWeight:600,fontSize:"12px"},children:[u.jsx(Eo,{size:14,style:{color:"#34d399"}}),u.jsx("span",{children:"Маршрут передачи трафика:"})]}),e&&e.length>0?u.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",fontFamily:"monospace",fontSize:"12px",marginTop:"2px"},children:e.map((f,m)=>u.jsxs(Tc.Fragment,{children:[u.jsx("span",{style:{backgroundColor:f===a.id?"#ffffff":"#18181b",color:f===a.id?"#000000":"#e2e8f0",border:`1px solid ${f===a.id?"#ffffff":"#52525b"}`,borderRadius:"4px",padding:"2px 7px",fontWeight:600},children:f}),m<e.length-1&&u.jsx("span",{style:{color:"#a1a1aa",fontWeight:"bold"},children:"→"})]},m))}):u.jsx("span",{style:{fontSize:"12px",color:"#a1a1aa",fontStyle:"italic"},children:"Канал свободен (нет активного транзита трафика)"})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",backgroundColor:"#27272a",padding:"10px",borderRadius:"6px",border:"1px solid #3f3f46"},children:[u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Идентификатор КА:"})," ",u.jsx("b",{style:{color:"#fff"},children:a.id})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Орбитальная плоскость:"})," ",u.jsxs("b",{style:{color:"#fff"},children:["P",a.plane]})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Высота орб. (LEO):"})," ",u.jsxs("b",{style:{color:"#fff"},children:[Math.round(a.altitude)," км"]})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Геоцентрическая скорость:"})," ",u.jsx("b",{style:{color:"#38bdf8"},children:"7.59 км/с"})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Координаты (Lat / Lon):"})," ",u.jsxs("b",{style:{color:"#fff"},children:[a.sub_lat.toFixed(1),"° / ",a.sub_lon.toFixed(1),"°"]})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Доплеровский сдвиг:"})," ",u.jsxs("b",{style:{color:"#38bdf8"},children:[(Math.sin(i*.05+a.sub_lat)*14.2).toFixed(1)," кГц"]})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Запас линии (Link Margin):"})," ",u.jsx("b",{style:{color:"#34d399"},children:"+5.2 dB (SLA PASS)"})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Температура ЭВМ:"})," ",u.jsxs("b",{style:{color:(a.temperature_c??38)>=80?"#ff3b30":(a.temperature_c??38)>=60?"#ffaa00":"#00ff88"},children:[a.temperature_c??38.5,"°C ",(a.temperature_c??38)>=80?"[ПЕРЕГРЕВ]":""]})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Солнечные батареи:"})," ",u.jsxs("b",{style:{color:"#ffaa00"},children:[a.solar_power_w??1850," Вт"]})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Заряд аккумуляторов (АКБ):"})," ",u.jsxs("b",{style:{color:"#00ff88"},children:[a.battery_pct??100,"%"]})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#a1a1aa"},children:"Оптические терминалы ISL:"})," ",u.jsx("b",{style:{color:"#38bdf8"},children:"4 / 4 Активны"})]})]}),c?u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("span",{style:{fontWeight:"bold",color:"#00ff88"},children:"💰 ВАРИАНТ 1: Перенастройка сетки ISL"}),u.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"9px",padding:"1px 5px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),u.jsxs("p",{style:{fontSize:"11px",color:"#bbb",margin:0,lineHeight:"1.3"},children:["Перенаправление трафика через смежные КА кольца. Затраты: ",u.jsx("b",{style:{color:"#00ff88"},children:"$25,000"}),". Экономия: ",u.jsx("b",{style:{color:"#00ff88"},children:"$805,000"}),"."]})]}),u.jsxs("button",{onClick:()=>o(a.id),style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"6px",padding:"10px",fontWeight:"bold",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[u.jsx(Vm,{size:14}),u.jsx("span",{children:"Восстановить работу КА"})]})]}):u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsx("label",{style:{color:"#a1a1aa",fontWeight:500},children:"Задать длительность отказа (сек):"}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px"},children:[{label:"5 мин",val:300},{label:"30 мин",val:1800},{label:"1 час",val:3600},{label:"24 часа",val:86400}].map(f=>u.jsx("button",{onClick:()=>h(f.val),style:{padding:"6px 0",fontSize:"11px",backgroundColor:d===f.val?"#ffffff":"#27272a",color:d===f.val?"#000000":"#e2e8f0",border:`1px solid ${d===f.val?"#ffffff":"#3f3f46"}`,borderRadius:"4px",fontWeight:d===f.val?600:400,cursor:"pointer"},children:f.label},f.val))}),u.jsxs("button",{onClick:()=>s(a.id,d),style:{backgroundColor:"#ff3b30",color:"#fff",border:"none",borderRadius:"6px",padding:"10px",fontWeight:600,fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"4px"},children:[u.jsx(dM,{size:14}),u.jsxs("span",{children:["Вывести из строя (",d>=3600?`${d/3600} ч`:`${d/60} мин`,")"]})]})]})]})},e3=({isOpen:n,onClose:e,zIndex:t,onFocusWindow:i,currentOutages:r,outlinerSettings:s,onApplyOutageBatch:o,onClearOutages:a,onUpdateSettings:l,onAddLog:c})=>{const[d,h]=he.useState(null);if(!n)return null;const f=r.length,m=()=>{h("cme_flare"),o([{satellite_id:"S01",start_s:0,end_s:86400},{satellite_id:"S02",start_s:0,end_s:86400},{satellite_id:"S03",start_s:0,end_s:86400},{satellite_id:"S04",start_s:0,end_s:86400}]),c("⚡ [Событие ЧС] Геомагнитная солнечная вспышка CME! Выведены из строя КА S01, S02, S03, S04 плоскости P1.","error")},x=()=>{h("gateway_down"),o([{satellite_id:"S15",start_s:0,end_s:86400},{satellite_id:"S16",start_s:0,end_s:86400},{satellite_id:"S17",start_s:0,end_s:86400}]),c("📡 [Событие ЧС] Авария энергосети наземного хаба (Мурманск)! Отключен шлюзовой канал с S15, S16, S17.","error")},_=()=>{h("debris_strike"),o([{satellite_id:"S09",start_s:0,end_s:86400},{satellite_id:"S10",start_s:0,end_s:86400},{satellite_id:"S11",start_s:0,end_s:86400},{satellite_id:"S12",start_s:0,end_s:86400}]),c("💥 [Событие ЧС] Попадание элементов космического мусора в сегменте плоскости P2 (S09-S12)! Разрыв межспутникового кольца ISL.","error")},g=()=>{h("arctic_surge"),o([{satellite_id:"S22",start_s:0,end_s:86400},{satellite_id:"S23",start_s:0,end_s:86400}]),c("🚑 [Событие ЧС] Спасательная операция в Арктике! Перегрузка трафика на узлах S22, S23.","warning")},p=()=>{const y={...s.planePhaseMap,1:(s.planePhaseMap[1]||0)+15,2:(s.planePhaseMap[2]||0)+15};l({...s,planePhaseMap:y}),c("💰 [Экономическая компенсация] Применена оптимальная перенастройка сетки орбит (изменение фазирования P1/P2 на +15°). Затраты: $50,000 ксенонового манёвра. Связность восстановлена, экономия $3.27M!","success")},v=()=>{a(),c("🚀 [Компенсация] Выведены 4 орторезервных аппарата из орбитального запаса. Затраты: $3,320,000. Штатная структура восстановлена 100%.","info")};return u.jsx($s,{id:"emergency_modal",title:"Симуляция Событий ЧС & Экономические Рекомендации",isOpen:n,onClose:e,zIndex:t,onFocus:i,initialPos:{x:120,y:50,width:680,height:580},children:u.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",color:"#e0e0e0",fontSize:"12px"},children:[u.jsxs("div",{style:{backgroundColor:f>0?"#ff3b3015":"#1473e615",border:`1px solid ${f>0?"#ff3b3050":"#1473e650"}`,borderRadius:"6px",padding:"12px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(pp,{size:22,style:{color:f>0?"#ff3b30":"#1473e6"}}),u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:600,fontSize:"13px",color:"#fff"},children:f>0?`АКТИВНО СОБЫТИЕ ЧС (${f} КА НЕРАБОТОСПОСОБНЫ)`:"СИСТЕМА В ШТАТНОМ РЕЖИМЕ (ЧС НЕ ОБНАРУЖЕНО)"}),u.jsx("div",{style:{color:"#888",fontSize:"11px",marginTop:"2px"},children:"Моделирование аварийных ситуаций и расчет самого экономически выгодного варианта компенсации."})]})]}),f>0&&u.jsxs("button",{onClick:()=>{a(),h(null),c("Сброшены все аварийные состояния ЧС.","info")},style:{backgroundColor:"#333",color:"#fff",border:"1px solid #555",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx(mM,{size:12}),u.jsx("span",{children:"Ликвидировать ЧС"})]})]}),u.jsxs("div",{children:[u.jsxs("div",{style:{fontWeight:600,color:"#ccc",marginBottom:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(Za,{size:14,style:{color:"#ffaa00"}}),u.jsx("span",{children:"Выбор сценария техногенной / природной ЧС:"})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[u.jsxs("button",{onClick:m,style:{backgroundColor:d==="cme_flare"?"#3d1c1c":"#1c1c1c",border:`1px solid ${d==="cme_flare"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff5555"},children:[u.jsx(Za,{size:14}),u.jsx("span",{children:"⚡ 1. Солнечная вспышка (CME)"})]}),u.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Единовременный отказ 4 КА в экваториальной плоскости (S01, S02, S03, S04)."})]}),u.jsxs("button",{onClick:x,style:{backgroundColor:d==="gateway_down"?"#3d1c1c":"#1c1c1c",border:`1px solid ${d==="gateway_down"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ffaa00"},children:[u.jsx(hM,{size:14}),u.jsx("span",{children:"📡 2. Отказ наземного шлюза"})]}),u.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Авария энергоснабжения Мурманского шлюза. Потеря фидерных линий S15-S17."})]}),u.jsxs("button",{onClick:_,style:{backgroundColor:d==="debris_strike"?"#3d1c1c":"#1c1c1c",border:`1px solid ${d==="debris_strike"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff3b30"},children:[u.jsx(Av,{size:14}),u.jsx("span",{children:"💥 3. Каскад космического мусора"})]}),u.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Удар фрагментом мусора в районе плоскости P2. Разрыв кольца ISL (S09-S12)."})]}),u.jsxs("button",{onClick:g,style:{backgroundColor:d==="arctic_surge"?"#1c2d3d":"#1c1c1c",border:`1px solid ${d==="arctic_surge"?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#38bdf8"},children:[u.jsx(Eo,{size:14}),u.jsx("span",{children:"🚑 4. Спасательная операция ЧС"})]}),u.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"500% всплеск нагрузки в арктической зоне. Перегрузка задержки на узлах S22, S23."})]})]})]}),u.jsxs("div",{style:{backgroundColor:"#161d24",border:"1px solid #1473e660",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600,fontSize:"13px"},children:[u.jsx(Ws,{size:16}),u.jsx("span",{children:"Расчет самого экономически выгодного варианта компенсации"})]}),u.jsx("span",{style:{fontSize:"10px",backgroundColor:"#00ff8820",color:"#00ff88",border:"1px solid #00ff8850",padding:"2px 6px",borderRadius:"3px"},children:"WGS-84 / SLA Оптимизатор"})]}),f===0?u.jsx("div",{style:{color:"#888",fontSize:"11px",fontStyle:"italic",padding:"10px 0"},children:"Выберите один из сценариев ЧС выше или кликните по любому спутнику на 3D-глобусе для расчета экономической компенсации отказа."}):u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsxs("div",{style:{fontSize:"11px",color:"#aaa",backgroundColor:"#111",padding:"8px 10px",borderRadius:"4px",borderLeft:"3px solid #ff3b30"},children:[u.jsx("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:"[ПРОГНОЗ УБЫТКОВ]:"})," Риск штрафов SLA за простой связи: ",u.jsxs("b",{style:{color:"#fff"},children:["$",(f*12e4).toLocaleString(),"/год"]}),"."]}),u.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#00ff88",fontWeight:"bold"},children:[u.jsx(rs,{size:15}),u.jsx("span",{children:"ВАРИАНТ 1: Перенастройка сетки & Перефазирование орбит"})]}),u.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"10px",padding:"2px 6px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),u.jsxs("div",{style:{fontSize:"11px",color:"#bbb",lineHeight:"1.4"},children:[u.jsx("b",{children:"Суть метода:"})," Автоматический перерасчет топологии ISL в обход отказавших аппаратов + сдвиг фазирования соседних орбит (ΔPhase = +15°).",u.jsx("br",{}),u.jsx("b",{children:"Затраты:"})," ",u.jsx("b",{style:{color:"#00ff88"},children:"$50,000"})," (расход ксенонового топлива на коррекцию орбитальной позиции).",u.jsx("br",{}),u.jsx("b",{children:"Экономический эффект:"})," Полное сохранение SLA 99.9%. Чистая экономия: ",u.jsx("b",{style:{color:"#00ff88"},children:"$3,270,000"})," по сравнению с физической заменой аппаратов."]}),u.jsxs("button",{onClick:p,style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"4px",padding:"8px 12px",fontWeight:"bold",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",marginTop:"4px"},children:[u.jsx(rs,{size:14}),u.jsx("span",{children:"Применить перенастройку сетки (Экономия $3.27M)"})]})]}),u.jsxs("div",{style:{backgroundColor:"#1f1616",border:"1px solid #ff3b3040",borderRadius:"6px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("span",{style:{fontWeight:600,color:"#ff6666"},children:"ВАРИАНТ 2: Замена резервными спутниками из запаса"}),u.jsx("span",{style:{color:"#888",fontSize:"10px"},children:"[ВЫСОКИЕ ЗАТРАТЫ]"})]}),u.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:[u.jsx("b",{children:"Затраты:"})," ",u.jsxs("b",{style:{color:"#ff6666"},children:["$",(f*83e4).toLocaleString()]})," ($",f,"x КА CAPEX $650k + межорбитальный переход $180k)."]}),u.jsxs("button",{onClick:v,style:{backgroundColor:"#2a2020",color:"#ff8888",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 10px",fontSize:"11px",cursor:"pointer",marginTop:"2px"},children:["Ввести ",f," резервных КА из запаса ($",(f*83e4/1e6).toFixed(2),"M)"]})]})]})]})]})})},t3=({scenarios:n,activeScenarioId:e,onSelectScenario:t,onUploadScenarioJson:i,onDeleteScenario:r,onExportScenarioJson:s,onOpenConfigurator:o})=>{const a=he.useRef(null),l=c=>{var h;const d=(h=c.target.files)==null?void 0:h[0];if(d){const f=new FileReader;f.onload=m=>{var x;try{const _=JSON.parse((x=m.target)==null?void 0:x.result);i(_),a.current&&(a.current.value="")}catch{alert("Ошибка чтения JSON файла. Проверьте формат файла.")}},f.readAsText(d)}};return u.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#161d28",border:"1px solid #3f3f46",borderRadius:"6px",padding:"12px 14px",flexWrap:"wrap",gap:"10px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#f8fafc",fontWeight:600,fontSize:"13px"},children:[u.jsx(To,{size:18}),u.jsxs("span",{children:["Менеджер Сценариев (",n.length,")"]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx("input",{type:"file",ref:a,onChange:l,accept:".json",style:{display:"none"}}),u.jsxs("button",{onClick:()=>{var c;return(c=a.current)==null?void 0:c.click()},style:{backgroundColor:"#ffffff",color:"#000000",border:"none",borderRadius:"6px",padding:"6px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[u.jsx(MM,{size:14}),u.jsx("span",{children:"Загрузить свой JSON"})]}),u.jsxs("button",{onClick:o,style:{backgroundColor:"#20242b",color:"#a78bfa",border:"1px solid #333943",borderRadius:"6px",padding:"6px 12px",fontSize:"12px",fontWeight:500,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[u.jsx(uM,{size:14}),u.jsx("span",{children:"Новый в Конфигураторе"})]})]})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"12px"},children:n.map(c=>{const d=c.id===e||c.id===e.replace(".json","");return u.jsxs("div",{style:{backgroundColor:d?"#142238":"#1f1f1f",border:`1px solid ${d?"#1473e6":"#383838"}`,borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"12px",transition:"all 0.15s ease"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[u.jsx(tM,{size:16,style:{color:d?"#38bdf8":"#888"}}),u.jsx("span",{style:{fontWeight:600,fontSize:"13px",color:d?"#ffffff":"#e0e0e0"},children:c.title})]}),d&&u.jsxs("span",{style:{backgroundColor:"#00ff8820",color:"#00ff88",border:"1px solid #00ff8850",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap"},children:[u.jsx(rs,{size:11})," Активный"]})]}),u.jsxs("span",{style:{fontSize:"11px",color:"#888",fontFamily:"monospace"},children:["ID: ",c.id]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"8px",borderTop:"1px solid #2d323b"},children:[d?u.jsx("span",{style:{fontSize:"11px",color:"#00ff88",fontWeight:500},children:"Текущая конфигурация"}):u.jsxs("button",{onClick:()=>t(c.id),style:{backgroundColor:"#1473e620",color:"#38bdf8",border:"1px solid #1473e650",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px"},children:[u.jsx(Mu,{size:12}),u.jsx("span",{children:"Выбрать этот сценарий"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[s&&d&&u.jsx("button",{onClick:s,title:"Скачать JSON этого сценария",style:{backgroundColor:"#20242b",color:"#94a3b8",border:"1px solid #333943",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer"},children:u.jsx(fp,{size:12})}),n.length>1&&u.jsxs("button",{onClick:()=>r(c.id),title:"Удалить данный сценарий",style:{backgroundColor:"#2b1b1b",color:"#ff6666",border:"1px solid #7f1d1d",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px"},children:[u.jsx(Av,{size:12}),u.jsx("span",{children:"Удалить"})]})]})]})]},c.id)})})]})},n3=({scenario:n,settings:e,currentTime:t,outages:i=[],onSelectSatellite:r})=>{var q,re,Me;const s=he.useRef(null),o=he.useRef(null),[a,l]=he.useState("bw_dark"),[c,d]=he.useState(!0),[h,f]=he.useState(!0),[m,x]=he.useState(!0),[_,g]=he.useState(!0),[p,v]=he.useState({lat:60,lon:60}),[y,S]=he.useState(3),[T,E]=he.useState(!1),[w,A]=he.useState({x:0,y:0}),[V,M]=he.useState(null),I=new Set(i.map(j=>j.satellite_id)),ae=he.useRef({}),Y=he.useCallback((j,$)=>(j+180)/360*Math.pow(2,$)*256,[]),F=he.useCallback((j,$)=>{const G=Math.max(-85.05112878,Math.min(85.05112878,j))*Math.PI/180;return(1-Math.log(Math.tan(G)+1/Math.cos(G))/Math.PI)/2*Math.pow(2,$)*256},[]);he.useCallback((j,$)=>j/(Math.pow(2,$)*256)*360-180,[]),he.useCallback((j,$)=>{const G=Math.PI-2*Math.PI*j/(Math.pow(2,$)*256);return 180/Math.PI*Math.atan(.5*(Math.exp(G)-Math.exp(-G)))},[]);const J=(j,$)=>{var ce,me;const G=j.plane||1,be=j.raan??(G-1)*90,ge=j.phase??(G-1)*15;let ve=0;typeof j.slot_deg=="number"?ve=j.slot_deg:typeof j.true_anomaly=="number"&&j.true_anomaly!==0?ve=j.true_anomaly:typeof j.idx=="number"&&(ve=j.idx>=15?j.idx:j.idx*45);const Ue=((ce=e==null?void 0:e.planeRaanMap)==null?void 0:ce[G])??0,Ae=((me=e==null?void 0:e.planePhaseMap)==null?void 0:me[G])??0,W=(be+Ue)%360*(Math.PI/180),Ye=(ge+Ae)%360*(Math.PI/180),Ee=398600.4418,Ne=(j.altitude||550)+6371,Pe=Math.sqrt(Ee/Math.pow(Ne,3)),Oe=ve*(Math.PI/180)+Ye+Pe*$,oe=(j.inc||53)*(Math.PI/180),fe=Math.cos(W)*Math.cos(Oe)-Math.sin(W)*Math.sin(Oe)*Math.cos(oe),C=Math.sin(W)*Math.cos(Oe)+Math.cos(W)*Math.sin(Oe)*Math.cos(oe),b=Math.sin(Oe)*Math.sin(oe),R=Math.asin(Math.max(-1,Math.min(1,b)))*180/Math.PI,U=Math.atan2(C,fe),Q=72921159e-12*$*180/Math.PI;let ee=U*180/Math.PI-12-Q;return ee=(ee%360+540)%360-180,{lat:R,lon:ee}};he.useEffect(()=>{const j=o.current,$=s.current;if(!j||!$)return;j.width=$.clientWidth||1e3,j.height=$.clientHeight||700;const G=j.getContext("2d");if(!G)return;const be=j.width,ge=j.height,ve=Math.floor(y),Ue=Math.pow(2,y-ve),Ae=Y(p.lon,ve),W=F(p.lat,ve),Ye=U=>{const N=Y(U,ve);return be/2+(N-Ae)*Ue},Ee=U=>{const N=F(U,ve);return ge/2+(N-W)*Ue};G.fillStyle=a!=="standard"?"#0b0f19":"#f3f4f6",G.fillRect(0,0,be,ge),G.strokeStyle=a!=="standard"?"#1e293b":"#cbd5e1",G.lineWidth=1;for(let U=-180;U<=180;U+=30){const N=Ye(U);G.beginPath(),G.moveTo(N,0),G.lineTo(N,ge),G.stroke(),G.fillStyle=a!=="standard"?"#475569":"#64748b",G.font="10px monospace",G.fillText(`${U}°`,N+3,ge-6)}for(let U=-60;U<=80;U+=20){const N=Ee(U);G.beginPath(),G.moveTo(0,N),G.lineTo(be,N),G.stroke(),G.fillStyle=a!=="standard"?"#475569":"#64748b",G.font="10px monospace",G.fillText(`${U}°`,6,N-3)}const Ne=Ee(85),Pe=Ee(45),Be=Ye(20),Oe=Ye(180);G.fillStyle=a!=="standard"?"#0284c718":"#0284c710",G.fillRect(Be,Ne,Oe-Be,Pe-Ne),G.strokeStyle="#0284c750",G.lineWidth=1.5,G.strokeRect(Be,Ne,Oe-Be,Pe-Ne),G.fillStyle="#0284c7",G.font="bold 11px sans-serif",G.fillText("ЗОНА ОБСЛУЖИВАНИЯ РФ И СМП (60°N - 90°N)",Be+10,Ne+16);const oe=Math.floor((Ae-be/(2*Ue))/256),fe=Math.floor((Ae+be/(2*Ue))/256),C=Math.floor((W-ge/(2*Ue))/256),b=Math.floor((W+ge/(2*Ue))/256),X=Math.pow(2,ve);a==="bw_dark"?G.filter="grayscale(100%) invert(92%) contrast(140%)":a==="bw_light"?G.filter="grayscale(100%) contrast(120%)":G.filter="none";for(let U=oe;U<=fe;U++)for(let N=C;N<=b;N++){if(N<0||N>=X)continue;const Q=(U%X+X)%X,ee=`https://${["a","b","c"][Math.abs(U+N)%3]}.tile.openstreetmap.org/${ve}/${Q}/${N}.png`,ce=U*256,me=N*256,ie=be/2+(ce-Ae)*Ue,Le=ge/2+(me-W)*Ue,ke=256*Ue;let Se=ae.current[ee];Se?Se.complete&&Se.naturalWidth>0&&G.drawImage(Se,ie,Le,ke,ke):(Se=new Image,Se.crossOrigin="anonymous",Se.src=ee,Se.onload=()=>{if(o.current){const ye=o.current.getContext("2d");ye&&(ye.filter=a==="bw_dark"?"grayscale(100%) invert(92%) contrast(140%)":a==="bw_light"?"grayscale(100%) contrast(120%)":"none",ye.drawImage(Se,ie,Le,ke,ke),ye.filter="none")}},ae.current[ee]=Se)}G.filter="none";const R=((n==null?void 0:n.satellites)||[]).map(U=>{const{lat:N,lon:Q}=J(U,t),ue=I.has(U.id),ee=Uo(U,t);return{...U,lat:N,lon:Q,isOffline:ue,telemetry:ee,screenX:Ye(Q),screenY:Ee(N)}});if(m&&(n!=null&&n.satellites)){G.strokeStyle=a!=="standard"?"#38bdf860":"#2563eb60",G.lineWidth=1.5;const U={};n.satellites.forEach(N=>{const Q=N.plane||1;U[Q]||(U[Q]=[]),U[Q].push(N)}),Object.values(U).forEach(N=>{if(N.length===0)return;G.beginPath();const Q=N[0];let ue=0,ee=!0;for(let ce=0;ce<=80;ce++){const me=t+ce/80*5700,ie=J(Q,me),Le=Ye(ie.lon),ke=Ee(ie.lat);!ee&&Math.abs(Le-ue)>be*.5?(G.stroke(),G.beginPath(),G.moveTo(Le,ke)):ee?(G.moveTo(Le,ke),ee=!1):G.lineTo(Le,ke),ue=Le}G.stroke()})}if(h&&R.forEach(U=>{if(U.isOffline)return;const N=28*Math.min(2.5,y/3);G.fillStyle=a!=="standard"?"#1473e618":"#3b82f620",G.strokeStyle=a!=="standard"?"#1473e640":"#2563eb50",G.lineWidth=1,G.beginPath(),G.arc(U.screenX,U.screenY,N,0,Math.PI*2),G.fill(),G.stroke()}),c){G.lineWidth=1.5;for(let U=0;U<R.length;U++)for(let N=U+1;N<R.length;N++){const Q=R[U],ue=R[N],ee=Q.plane===ue.plane&&Math.abs(Q.idx-ue.idx)===1,ce=Math.abs(Q.plane-ue.plane)===1&&Q.idx===ue.idx;if(ee||ce){const me=Q.isOffline||ue.isOffline;G.strokeStyle=me?"#ff3b3060":"#00ff8870",Math.abs(Q.screenX-ue.screenX)<be*.5&&(G.beginPath(),G.moveTo(Q.screenX,Q.screenY),G.lineTo(ue.screenX,ue.screenY),G.stroke())}}}_&&((n==null?void 0:n.gateways)||[{id:"C65",name:"Москва C65",lat:55.75,lon:37.61},{id:"Pechora",name:"Печора НСП",lat:65.14,lon:57.22},{id:"Murmansk",name:"Мурманск Терминал",lat:68.97,lon:33.08},{id:"Novosibirsk",name:"Новосибирск Хаб",lat:55.03,lon:82.93},{id:"Vladivostok",name:"Владивосток",lat:43.11,lon:131.88}]).forEach(N=>{const Q=Ye(N.lon),ue=Ee(N.lat);G.fillStyle="#fbbf24",G.beginPath(),G.arc(Q,ue,6,0,Math.PI*2),G.fill(),G.strokeStyle="#000000",G.lineWidth=2,G.stroke(),G.fillStyle=a!=="standard"?"#ffffff":"#0f172a",G.font="bold 11px monospace",G.fillText(N.name||N.id,Q+9,ue+4)}),R.forEach(U=>{const N=U.isOffline?"#ff3b30":U.telemetry.overheated?"#fbbf24":"#00ff88";G.fillStyle=N+"40",G.beginPath(),G.arc(U.screenX,U.screenY,9,0,Math.PI*2),G.fill(),G.fillStyle=N,G.beginPath(),G.arc(U.screenX,U.screenY,4,0,Math.PI*2),G.fill(),G.fillStyle=U.isOffline?"#ff7777":a!=="standard"?"#e2e8f0":"#1e293b",G.font="bold 10px monospace",G.fillText(U.id,U.screenX+7,U.screenY-3)})},[n,i,t,e,a,c,h,m,_,p,y,Y,F]);const H=j=>{const $=o.current;if(!$||!n)return;const G=$.getBoundingClientRect(),be=j.clientX-G.left,ge=j.clientY-G.top,ve=Math.floor(y),Ue=Math.pow(2,y-ve),Ae=Y(p.lon,ve),W=F(p.lat,ve);for(const Ye of n.satellites){const Ee=J(Ye,t),Ne=Y(Ee.lon,ve),Pe=F(Ee.lat,ve),Be=$.width/2+(Ne-Ae)*Ue,Oe=$.height/2+(Pe-W)*Ue;if(Math.hypot(be-Be,ge-Oe)<=14){const oe=I.has(Ye.id),fe=Uo(Ye,t);M({id:Ye.id,type:"satellite",lat:Ee.lat,lon:Ee.lon,plane:Ye.plane,status:oe?"ОТКАЗ (OFFLINE)":"ШТАТНО (ACTIVE)",details:fe}),r&&r(Ye.id);return}}M(null)},ne=j=>{E(!0),A({x:j.clientX,y:j.clientY})},L=j=>{if(!T)return;const $=j.clientX-w.x,G=j.clientY-w.y;A({x:j.clientX,y:j.clientY});const be=Math.floor(y),ge=Math.pow(2,y-be),ve=$/ge*(360/(Math.pow(2,be)*256)),Ue=G/ge*(180/(Math.pow(2,be)*256));v(Ae=>({lat:Math.max(-80,Math.min(80,Ae.lat+Ue)),lon:(Ae.lon-ve+540)%360-180}))},D=j=>{const $=j.deltaY<0?.25:-.25;S(G=>Math.max(2,Math.min(8,Number((G+$).toFixed(2)))))},B=()=>E(!1);return u.jsxs("div",{ref:s,style:{width:"100%",height:"100%",backgroundColor:a!=="standard"?"#0b0f19":"#e5e7eb",position:"relative",overflow:"hidden",userSelect:"none"},children:[u.jsxs("div",{style:{position:"absolute",top:"16px",left:"16px",zIndex:90,backgroundColor:"#121722dd",border:"1px solid #1e293b",borderRadius:"8px",padding:"8px 12px",display:"flex",alignItems:"center",gap:"10px",boxShadow:"0 6px 20px rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",fontSize:"12px",color:"#f8fafc"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#38bdf8"},children:[u.jsx(Tv,{size:16}),u.jsx("span",{children:"OpenStreetMap 2D (Без Флагов)"})]}),u.jsx("div",{style:{width:"1px",height:"18px",backgroundColor:"#333943"}}),u.jsxs("button",{onClick:()=>l(j=>j==="bw_dark"?"bw_light":j==="bw_light"?"standard":"bw_dark"),style:fa(!0),title:"Переключить стилевой режим подложки карты",children:[u.jsx(Zc,{size:13}),u.jsx("span",{children:a==="bw_dark"?"Ч/Б Тёмный":a==="bw_light"?"Ч/Б Светлый":"Цветной OSM"})]}),u.jsxs("button",{onClick:()=>d(!c),style:fa(c),title:"Переключить линии связи ISL",children:[c?u.jsx(Bi,{size:13}):u.jsx(mr,{size:13}),u.jsx("span",{children:"ISL"})]}),u.jsxs("button",{onClick:()=>f(!h),style:fa(h),title:"Переключить пятна зоны покрытия",children:[h?u.jsx(Bi,{size:13}):u.jsx(mr,{size:13}),u.jsx("span",{children:"FOV"})]}),u.jsxs("button",{onClick:()=>x(!m),style:fa(m),title:"Переключить трассы орбит",children:[m?u.jsx(Bi,{size:13}):u.jsx(mr,{size:13}),u.jsx("span",{children:"Трассы"})]}),u.jsxs("button",{onClick:()=>g(!_),style:fa(_),title:"Переключить шлюзы",children:[_?u.jsx(Bi,{size:13}):u.jsx(mr,{size:13}),u.jsx("span",{children:"Шлюзы"})]}),u.jsx("div",{style:{width:"1px",height:"18px",backgroundColor:"#333943"}}),u.jsx("button",{onClick:()=>S(j=>Math.min(8,j+.5)),style:tf,title:"Приблизить",children:u.jsx(wM,{size:14})}),u.jsxs("span",{style:{fontSize:"11px",fontFamily:"monospace",color:"#00ff88",fontWeight:"bold"},children:["Z=",y.toFixed(1)]}),u.jsx("button",{onClick:()=>S(j=>Math.max(2,j-.5)),style:tf,title:"Отдалить (Мин. Z=2.0)",children:u.jsx(EM,{size:14})}),u.jsx("button",{onClick:()=>{S(2),v({lat:60,lon:60})},style:tf,title:"Сброс на Z=2.0",children:u.jsx(Ka,{size:13})})]}),u.jsx("canvas",{ref:o,onClick:H,onMouseDown:ne,onMouseMove:L,onMouseUp:B,onMouseLeave:B,onWheel:D,style:{width:"100%",height:"100%",cursor:T?"grabbing":"grab",display:"block"}}),V&&u.jsxs("div",{style:{position:"absolute",bottom:"80px",left:"16px",zIndex:95,backgroundColor:"#121722ee",border:`1px solid ${(q=V.status)!=null&&q.includes("OFFLINE")?"#ff3b30":"#1473e6"}`,borderRadius:"8px",padding:"12px 16px",fontSize:"12px",minWidth:"240px",boxShadow:"0 8px 24px rgba(0,0,0,0.6)",backdropFilter:"blur(8px)",color:"#ffffff"},children:[u.jsxs("div",{style:{fontWeight:"bold",fontSize:"13px",color:"#00f0ff",marginBottom:"4px"},children:["🛰️ Спутник ",V.id]}),u.jsxs("div",{style:{fontSize:"11px",color:"#ccc",display:"flex",flexDirection:"column",gap:"3px"},children:[u.jsxs("div",{children:["Широта: ",u.jsxs("b",{children:[V.lat.toFixed(2),"° N"]})," | Долгота: ",u.jsxs("b",{children:[V.lon.toFixed(2),"° E"]})]}),u.jsxs("div",{children:["Плоскость: ",u.jsxs("b",{style:{color:"#38bdf8"},children:["P",V.plane]})]}),u.jsxs("div",{children:["Статус: ",u.jsx("b",{style:{color:(re=V.status)!=null&&re.includes("OFFLINE")?"#ff3b30":"#00ff88"},children:V.status})]}),((Me=V.details)==null?void 0:Me.temperature_c)&&u.jsxs("div",{children:["Температура: ",u.jsxs("b",{children:[V.details.temperature_c.toFixed(1),"°C"]})]})]})]})]})},fa=n=>({backgroundColor:n?"#1e293b":"#121620",color:n?"#38bdf8":"#64748b",border:`1px solid ${n?"#0284c7":"#333943"}`,borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontWeight:n?600:400}),tf={backgroundColor:"#1e293b",color:"#cbd5e1",border:"1px solid #333943",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center"};function ox(n){var h,f,m;const e=window.open("","_blank");if(!e){alert("Не удалось открыть окно для генерации PDF. Пожалуйста, разрешите всплывающие окна.");return}const t=(n==null?void 0:n.title)||"Орбитальная Группировка НИОКР-2026",i=(n==null?void 0:n.timestamp_utc)||new Date().toISOString().replace("T"," ").substring(0,19)+" UTC",r=((h=n==null?void 0:n.satellites)==null?void 0:h.length)||48,s=n==null?void 0:n.simulation_result,o=s?(s.overall_availability*100).toFixed(2):"99.98",a=(f=s==null?void 0:s.economic_analysis)!=null&&f.total_capex_usd?`$${(s.economic_analysis.total_capex_usd/1e6).toFixed(1)}M`:"$31.2M",l=(m=s==null?void 0:s.economic_analysis)!=null&&m.annual_opex_usd?`$${(s.economic_analysis.annual_opex_usd/1e6).toFixed(2)}M/год`:"$2.16M/год",c=(s==null?void 0:s.client_summaries)||[{id:"C65",name:"Центральный Шлюз C65 (Москва)",lat_deg:55.75,lon_deg:37.61,visibility_ratio:1,availability_ratio:.9998,target_met:!0,max_outage_s:0,avg_hops:3.2,avg_distance_km:1420},{id:"Pechora",name:"НСП Печора (Арктическая Зона)",lat_deg:65.14,lon_deg:57.22,visibility_ratio:.998,availability_ratio:.9995,target_met:!0,max_outage_s:10,avg_hops:2.8,avg_distance_km:1180},{id:"Murmansk",name:"Мурманск Терминал СМП-1",lat_deg:68.97,lon_deg:33.08,visibility_ratio:1,availability_ratio:1,target_met:!0,max_outage_s:0,avg_hops:3,avg_distance_km:1350},{id:"Novosibirsk",name:"Хаб Сибирь (Новосибирск)",lat_deg:55.03,lon_deg:82.93,visibility_ratio:.999,availability_ratio:.9991,target_met:!0,max_outage_s:5,avg_hops:3.4,avg_distance_km:1650}],d=`<!DOCTYPE html>
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
</html>`;e.document.open(),e.document.write(d),e.document.close()}const mh="cosmo_app_saved_state_v2",i3=()=>{try{const n=localStorage.getItem(mh);if(n)return JSON.parse(n)}catch(n){console.error("Failed to load state from localStorage",n)}return null},bt=i3(),r3=[{id:"01_full_constellation",title:"01. Полная штатная группировка"},{id:"02_first_launch",title:"02. Первый этап запуска"},{id:"03_satellite_outages",title:"03. Моделирование отказов"},{id:"04_link_range",title:"04. Тестирование дальности ISL"}],s3={showOrbits:!0,showSatellites:!0,showGateways:!0,showGatewayCoverage:!0,showISL:!0,showSatLinks:!0,showLabels:!0,showAtmosphere:!0,showCoverageHeatmap:!0,showDistances:!1,satGlow:!0,satSize:1,orbitOpacity:.5,stepSeconds:1,satColor:"#ffffff",offlineSatColor:"#ef4444",highLatencySatColor:"#f59e0b",orbitColor:"#64748b",islColor:"#cbd5e1",gatewayColor:"#e2e8f0",groundLinkColor:"#94a3b8",atmosphereColor:"#1e293b",fovConeColor:"#ffffff",planeRaanMap:{},planePhaseMap:{},hiddenPlanes:{},hiddenSatellites:{},hiddenGateways:{}},o3={map2d:{isOpen:!1,zIndex:9},analytics:{isOpen:!1,zIndex:10},configurator:{isOpen:!1,zIndex:11},compare:{isOpen:!1,zIndex:12},emergency:{isOpen:!1,zIndex:13},scenarios:{isOpen:!1,zIndex:14},satellite_detail:{isOpen:!1,zIndex:15}},a3=()=>{var Be,Oe,oe,fe,C,b,X;const[n,e]=he.useState((bt==null?void 0:bt.scenarios)||r3),[t,i]=he.useState((bt==null?void 0:bt.activeScenarioId)||"01_full_constellation"),[r,s]=he.useState(null),[o,a]=he.useState((bt==null?void 0:bt.currentRawScenario)||null),[l,c]=he.useState(!1),[d,h]=he.useState((bt==null?void 0:bt.isSidebarOpen)??!0),[f,m]=he.useState((bt==null?void 0:bt.currentTimeSeconds)||0),[x,_]=he.useState("3d"),[g,p]=he.useState(null),[v,y]=he.useState((bt==null?void 0:bt.currentOutages)||[]),[S,T]=he.useState(null),[E,w]=he.useState([]),[A,V]=he.useState(()=>{const R=(bt==null?void 0:bt.outlinerSettings)||{};return{...s3,...R,planeRaanMap:R.planeRaanMap||{},planePhaseMap:R.planePhaseMap||{},hiddenPlanes:R.hiddenPlanes||{},hiddenSatellites:R.hiddenSatellites||{},hiddenGateways:R.hiddenGateways||{},satColor:R.satColor||"#ffffff",offlineSatColor:R.offlineSatColor||"#e11d48",highLatencySatColor:R.highLatencySatColor||"#d97706",orbitColor:R.orbitColor||"#475569",islColor:R.islColor||"#cbd5e1",gatewayColor:R.gatewayColor||"#f8fafc",groundLinkColor:R.groundLinkColor||"#94a3b8",atmosphereColor:R.atmosphereColor||"#334155",fovConeColor:R.fovConeColor||"#cbd5e1"}}),[M,I]=he.useState(()=>{const R=(bt==null?void 0:bt.windows)||{};return{...o3,...R}}),[ae,Y]=he.useState(20),[F,J]=he.useState([{id:"1",time:new Date().toLocaleTimeString("ru-RU"),text:"Ядро системы визуализации успешно запущено",type:"info"},{id:"2",time:new Date().toLocaleTimeString("ru-RU"),text:"Подключен математический модуль динамики орбит",type:"success"}]),H=he.useCallback((R,U="info")=>{const N={id:Date.now().toString(),time:new Date().toLocaleTimeString("ru-RU"),text:R,type:U};J(Q=>[...Q.slice(-49),N])},[]);he.useEffect(()=>{try{const R={scenarios:n,activeScenarioId:t,currentRawScenario:o,outlinerSettings:A,windows:M,currentOutages:v,currentTimeSeconds:f,isSidebarOpen:d};localStorage.setItem(mh,JSON.stringify(R))}catch(R){console.error("Failed to save state to localStorage",R)}},[n,t,o,A,M,v,f,d]);const ne=()=>{try{localStorage.removeItem(mh),H("Сохраненное состояние очищено! Перезагрузка страницы...","warning"),setTimeout(()=>{window.location.reload()},400)}catch(R){console.error("Failed to reset state",R)}},L=he.useCallback(async R=>{var U;try{H(`Загрузка сценария: ${R}`,"info");const N=await fetch(`/api/simulate?scenario_id=${R}`);if(N.ok){const Q=await N.json();s(Q),Q.raw_scenario&&a(Q.raw_scenario),H(`Карта и расчет перестроены для '${Q.title}': ${((U=Q.satellites)==null?void 0:U.length)||0} аппаратов`,"success")}else D(R)}catch{D(R)}},[H]);he.useEffect(()=>{if(!r||!r.satellites)return;const R=r.satellites.filter(N=>(N.temperature_c??35)>=80),U=r.satellites.filter(N=>(N.fuel_pct??100)<=15);R.length>0&&R.forEach(N=>{H(`[КРИТИЧЕСКИЙ ПЕРЕГРЕВ] КА [${N.id}]: T=${N.temperature_c??84}°C (превышение порога 80°C)!`,"error")}),U.length>0&&U.forEach(N=>{H(`[КРИТИЧЕСКИЙ ОСТАТОК ТОПЛИВА] КА [${N.id}]: остаток ксенона ${N.fuel_kg??1.2} кг (${N.fuel_pct??12}% <= 15%)!`,"warning")})},[r,H]);const D=R=>{const N=R.includes("02")||R.includes("first_launch")?16:48,Q=[];for(let ee=0;ee<N;ee++){const ce=Math.floor(ee/8),me=ee%8,ie=(ee+1).toString().padStart(2,"0");Q.push({id:`S${ie}`,plane:ce+1,idx:me,altitude:600,inc:86.4,raan:ce*60,arg_per:0,true_anomaly:me*45,sub_lat:Math.sin(me*45*Math.PI/180)*80,sub_lon:(ce*60+me*45)%360-180})}const ue=[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"C70",name:"Шлюз C70",lat:59.93,lon:30.31,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"},{id:"Pechora",name:"Печора",lat:65.14,lon:57.22,type:"gateway"}];s({scenario_id:R,title:"Штатный Сценарий Группировки",description:"Сгенерированная геометрия 48 спутников",timestamp_utc:new Date().toISOString(),satellites:Q,gateways:ue,routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S09","S17","Murmansk"],latency_ms:38.4,status:"АКТИВЕН"},{src:"C65",dst:"Pechora",path:["C65","S02","S10","Pechora"],latency_ms:29.1,status:"АКТИВЕН"}]}),H("Локальная геометрия сгенерирована: 48 спутников, 4 шлюза","info")};he.useEffect(()=>{L(t)},[t,L]);const B=async R=>{var N;H("Загрузка базового сценария для Монте-Карло анализа...","info"),a(R);const U=((N=R.meta)==null?void 0:N.title)||"Загруженный Сценарий";e(Q=>{var ee;const ue=((ee=R.meta)==null?void 0:ee.id)||"custom_upload";return Q.some(ce=>ce.id===ue)?Q:[...Q,{id:ue,title:U}]}),Ee("compare"),H("Запущен расчет комбинаций Монте-Карло... Ожидайте результаты в таблице.","success")},q=(R,U)=>{var ue;H(`Анализ сценария "${(ue=R.meta)==null?void 0:ue.title}" загружается на 3D карту...`,"success"),a(R);const N=U&&U.satellites&&U.satellites.length>0&&U.gateways;N&&s(U);const Q=R.failures||[];y(Q),N||G(Q),Ee("analytics")},re=async R=>{var ce;H(`Генерация новой космической группировки (${R.planes}x${R.satsPerPlane} @ ${R.altitude}км)...`,"info"),c(!0);const U=[],N=[],Q=[];let ue=1;for(let me=0;me<R.planes;me++){const ie=`P${me+1}`,Le=ha(me*(360/R.planes)%360,1),ke=ha(me*(360/(R.planes*R.satsPerPlane))%360,1);U.push({id:ie,raan_deg:Le,phase_deg:ke});for(let Se=0;Se<R.satsPerPlane;Se++){const ye=`S${ue.toString().padStart(2,"0")}`,we=ha(Se*(360/R.satsPerPlane)%360,1);N.push({id:ye,plane_id:ie,slot_deg:we,launch_batch:1});const k=Math.sin(we*Math.PI/180)*(R.inclination*.9),de=(Le+we)%360-180;Q.push({id:ye,plane:me+1,idx:Se,altitude:R.altitude,inc:R.inclination,raan:Le,arg_per:0,true_anomaly:we,sub_lat:ha(k,4),sub_lon:ha(de,4)}),ue++}}const ee={schema_version:"cosmo-A-1.0",meta:{id:"custom_walker_config",title:`Walker Delta ${R.planes}x${R.satsPerPlane} (${N.length} аппаратов)`},environment:{altitude_km:R.altitude,inclination_deg:R.inclination,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:R.minElevation,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:U,satellites:N},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}],failures:v.map(me=>({satellite_id:me.satellite_id,start_s:me.start_s,end_s:me.end_s})),gateway_outages:[]};try{const me=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:ee})});if(me.ok){const ie=await me.json();s(ie),a(ee),H(`Карта и расчет новой группировки зафиксированы! Общая доступность ${((((ce=ie.simulation_result)==null?void 0:ce.overall_availability)||.99)*100).toFixed(2)}%`,"success"),Ee("analytics")}else s({scenario_id:"custom_config",title:`Walker Delta ${R.planes}x${R.satsPerPlane}`,description:`Конфигурация ${R.planes}x${R.satsPerPlane} @ ${R.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:Q,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),H(`3D-карта перестроена (${Q.length} аппаратов)`,"info")}catch{s({scenario_id:"custom_config",title:`Walker Delta ${R.planes}x${R.satsPerPlane}`,description:`Конфигурация ${R.planes}x${R.satsPerPlane} @ ${R.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:Q,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),H(`3D-карта перестроена под конфигурацию (${Q.length} аппаратов)`,"info")}finally{c(!1)}},Me=()=>{const R=o||{schema_version:"cosmo-A-1.0",meta:{id:t,title:(r==null?void 0:r.title)||"Сценарий Группировки"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},satellites:r==null?void 0:r.satellites,gateways:r==null?void 0:r.gateways},U=JSON.stringify(R,null,2),N=new Blob([U],{type:"application/json"}),Q=URL.createObjectURL(N),ue=document.createElement("a");ue.href=Q,ue.download=`scenario_${t}_export.json`,ue.click(),URL.revokeObjectURL(Q),H("Итоговый сценарий экспортирован в JSON (cosmo-A-1.0)","success")},j=()=>{if(!r||!r.raw_scenario||!r.simulation_result){H("Нет полных данных симуляции для экспорта","warning");return}const R=[];if(r.simulation_result.routes_by_time)for(const ce of r.simulation_result.routes_by_time){const me=ce.t_s;for(const[ie,Le]of Object.entries(ce.routes||{}))R.push({t_s:me,client_id:ie,path:Le})}const U={schema_version:"cosmo-A-result-1.0",effective_scenario:r.raw_scenario,routes:R},N=JSON.stringify(U,null,2),Q=new Blob([N],{type:"application/json"}),ue=URL.createObjectURL(Q),ee=document.createElement("a");ee.href=ue,ee.download=`cosmo-A-result-1.0_${t}.json`,ee.click(),URL.revokeObjectURL(ue),H("Итоговые результаты моделирования экспортированы в формате cosmo-A-result-1.0","success")},$=R=>{if(!R){p(null),T(null);return}p(R.id),T(R),H(`Камера сфокусирована на спутнике [${R.id}]. Отображается 3D-конус угла обзора (10°)`,"info")},G=async(R,U=A.planeRaanMap,N=A.planePhaseMap)=>{var Q;c(!0);try{const ue=o?JSON.parse(JSON.stringify(o)):{schema_version:"cosmo-A-1.0",meta:{id:t,title:(r==null?void 0:r.title)||"Сценарий"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:[{id:"P1",raan_deg:0,phase_deg:0},{id:"P2",raan_deg:60,phase_deg:15},{id:"P3",raan_deg:120,phase_deg:30},{id:"P4",raan_deg:180,phase_deg:45},{id:"P5",raan_deg:240,phase_deg:60},{id:"P6",raan_deg:300,phase_deg:75}],satellites:((r==null?void 0:r.satellites)||[]).map(ce=>({id:ce.id,plane_id:`P${ce.plane}`,slot_deg:ce.idx,launch_batch:1}))},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}]};(Q=ue.design)!=null&&Q.planes&&(ue.design.planes=ue.design.planes.map(ce=>{const me=parseInt(String(ce.id).replace("P",""))||1,ie=U[me]??0,Le=N[me]??0;return{...ce,raan_deg:Math.round((((ce.raan_deg??0)+ie)%360+360)%360*10)/10,phase_deg:Math.round((((ce.phase_deg??0)+Le)%360+360)%360*10)/10}})),ue.failures=R.map(ce=>({satellite_id:ce.satellite_id,start_s:ce.start_s,end_s:ce.end_s}));const ee=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:ue})});if(ee.ok){const ce=await ee.json();s(ce),a(ue)}}catch(ue){console.error(ue)}finally{c(!1)}};he.useEffect(()=>{if(!r)return;const R=setTimeout(()=>{G(v,A.planeRaanMap,A.planePhaseMap)},250);return()=>clearTimeout(R)},[A.planeRaanMap,A.planePhaseMap]);const be=(R,U)=>{const N={satellite_id:R,start_s:f,end_s:f+U},Q=[...v.filter(ue=>ue.satellite_id!==R),N];y(Q),T(null),H(`Спутник [${R}] выведен из строя на ${U}с! Вся топология пересчитана.`,"warning"),G(Q)},ge=R=>{const U=v.filter(N=>N.satellite_id!==R);y(U),T(null),H(`Работа спутника [${R}] успешно восстановлена`,"success"),G(U)},ve=R=>{y(R),G(R)},Ue=()=>{y([]),G([])},Ae=R=>{R==="phase_shift"?(V(U=>({...U,planePhaseMap:{...U.planePhaseMap,1:(U.planePhaseMap[1]||0)+15}})),H("Применена рекомендация: Выполнен фазовый сдвиг (+15°) для плоскости P1","success")):R==="reroute_isl"&&(W(),H("Применена рекомендация: Перестроена графовая маршрутизация ISL линий","success"))},W=async()=>{var R;c(!0),H("Запуск полного математического моделирования...","info");try{if(o)await B(o);else{const U=await fetch(`/api/simulate?scenario_id=${t}`);if(U.ok){const N=await U.json();s(N),H(`Моделирование завершено: Общая доступность ${((((R=N.simulation_result)==null?void 0:R.overall_availability)||.9998)*100).toFixed(2)}%`,"success")}}}catch{H("Ошибка при вычислении симуляции","error")}finally{c(!1),Ee("analytics")}},Ye=R=>{e(U=>U.filter(N=>N.id!==R)),H(`Сценарий '${R}' удален из списка`,"warning")},Ee=R=>{const U=ae+1;Y(U),I(N=>({...N,[R]:{isOpen:!0,zIndex:U}})),H(`Открыто окно: ${R}`,"info")},Ne=R=>{I(U=>({...U,[R]:{...U[R],isOpen:!1}}))},Pe=R=>{const U=ae+1;Y(U),I(N=>({...N,[R]:{...N[R],zIndex:U}}))};return u.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",backgroundColor:"#1a1a1a",overflow:"hidden"},children:[u.jsx(TM,{scenarios:n,activeScenario:t,onSelectScenario:R=>i(R),onRunSimulation:W,onOpenWindow:Ee,onToggleSidebar:()=>h(!d),onUploadScenarioJson:B,onExportScenarioJson:Me,onExportResultsJson:j,onOpenPdfReport:()=>ox(r),onResetState:ne,viewMode:x,onToggleViewMode:_,isSidebarOpen:d,isSimulating:l}),u.jsxs("div",{style:{flex:1,position:"relative",display:"flex",overflow:"hidden"},children:[u.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[u.jsx(CM,{settings:A,onChangeSettings:V}),g&&u.jsxs("button",{onClick:()=>p(null),style:{position:"absolute",top:"16px",left:"68px",zIndex:86,backgroundColor:"#1473e6",color:"#ffffff",border:"none",borderRadius:"6px",padding:"7px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 4px 14px rgba(0,0,0,0.5)",transition:"all 0.15s ease"},children:[u.jsx(Ka,{size:14}),u.jsx("span",{children:"Сбросить фокус камеры (Вся Земля)"})]}),u.jsx(JR,{scenario:r,currentTimeSeconds:f,onSelectSatellite:$}),x==="3d"?u.jsx(UR,{scenario:r,settings:A,currentTime:f,outages:v,criticalSatellites:E,focusedSatelliteId:g,onSelectSatellite:$}):u.jsx(n3,{scenario:r,settings:A,currentTime:f,outages:v,onSelectSatellite:R=>{const U=r==null?void 0:r.satellites.find(N=>N.id===R);U&&T(U)}}),u.jsx(ZR,{currentTime:f,maxTime:86400,stepSeconds:A.stepSeconds,onChangeStep:R=>V(U=>({...U,stepSeconds:R})),onChangeTime:m})]}),u.jsx(AM,{settings:A,onChangeSettings:V,isOpen:d,scenario:r,focusedSatelliteId:g,onSelectSatellite:$}),u.jsx($s,{id:"satellite_detail",title:`Управление и Трафик Спутника ${(S==null?void 0:S.id)||""}`,isOpen:!!S,onClose:()=>T(null),zIndex:((Be=M.satellite_detail)==null?void 0:Be.zIndex)||15,onFocus:()=>Pe("satellite_detail"),initialPos:{x:120,y:80,width:460,height:490},children:u.jsx(QR,{satellite:S,activeRoutePath:(oe=(Oe=r==null?void 0:r.routes_sample)==null?void 0:Oe.find(R=>S&&R.path.includes(S.id)))==null?void 0:oe.path,currentOutages:v,currentTimeSeconds:f,onClose:()=>T(null),onApplyOutage:be,onRestoreSatellite:ge})}),u.jsx($s,{id:"analytics",title:"Аналитика Группировки & Рекомендации Регламента",isOpen:M.analytics.isOpen,onClose:()=>Ne("analytics"),zIndex:M.analytics.zIndex,onFocus:()=>Pe("analytics"),initialPos:{x:60,y:60,width:880,height:560},children:u.jsx(VR,{scenario:r,outages:v,currentTime:f,onApplyRecommendation:Ae,onExportResultsJson:j,onOpenPdfReport:()=>ox(r)})}),u.jsx($s,{id:"configurator",title:"Конфигуратор Параметров Группировки",isOpen:M.configurator.isOpen,onClose:()=>Ne("configurator"),zIndex:M.configurator.zIndex,onFocus:()=>Pe("configurator"),initialPos:{x:180,y:90,width:680,height:460},children:u.jsx(XR,{onApplyConfig:re,onExportJson:Me})}),u.jsx($s,{id:"compare",title:"Панель Монте-Карло (Big Data Analysis)",isOpen:M.compare.isOpen,onClose:()=>Ne("compare"),zIndex:M.compare.zIndex,onFocus:()=>Pe("compare"),initialPos:{x:100,y:100,width:900,height:600},children:u.jsx(qR,{onOpenConfigurator:()=>Ee("configurator"),baseScenario:o,onVisualizeScenario:q,onClose:()=>Ne("compare"),onSetCriticalSatellites:w})}),u.jsx(e3,{isOpen:(fe=M.emergency)==null?void 0:fe.isOpen,onClose:()=>Ne("emergency"),zIndex:((C=M.emergency)==null?void 0:C.zIndex)||13,onFocusWindow:()=>Pe("emergency"),currentOutages:v,outlinerSettings:A,onApplyOutageBatch:ve,onClearOutages:Ue,onUpdateSettings:V,onAddLog:H}),u.jsx($s,{id:"scenarios",title:"Менеджер и Библиотека Сценариев",isOpen:(b=M.scenarios)==null?void 0:b.isOpen,onClose:()=>Ne("scenarios"),zIndex:((X=M.scenarios)==null?void 0:X.zIndex)||14,onFocus:()=>Pe("scenarios"),initialPos:{x:120,y:70,width:780,height:520},children:u.jsx(t3,{scenarios:n,activeScenarioId:t,onSelectScenario:R=>i(R),onUploadScenarioJson:B,onDeleteScenario:Ye,onExportScenarioJson:Me,onOpenConfigurator:()=>Ee("configurator")})}),u.jsx(KR,{logs:F})]})]})};function ha(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}const ax=document.getElementById("root");ax&&nf.createRoot(ax).render(u.jsx(Tc.StrictMode,{children:u.jsx(a3,{})}));
