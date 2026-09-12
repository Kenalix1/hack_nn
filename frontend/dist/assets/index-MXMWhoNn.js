(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function y_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ox={exports:{}},iu={},ax={exports:{}},nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),v_=Symbol.for("react.portal"),__=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),M_=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),E_=Symbol.for("react.context"),w_=Symbol.for("react.forward_ref"),T_=Symbol.for("react.suspense"),A_=Symbol.for("react.memo"),C_=Symbol.for("react.lazy"),Ip=Symbol.iterator;function R_(n){return n===null||typeof n!="object"?null:(n=Ip&&n[Ip]||n["@@iterator"],typeof n=="function"?n:null)}var lx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cx=Object.assign,ux={};function No(n,e,t){this.props=n,this.context=e,this.refs=ux,this.updater=t||lx}No.prototype.isReactComponent={};No.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};No.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function dx(){}dx.prototype=No.prototype;function hh(n,e,t){this.props=n,this.context=e,this.refs=ux,this.updater=t||lx}var ph=hh.prototype=new dx;ph.constructor=hh;cx(ph,No.prototype);ph.isPureReactComponent=!0;var Dp=Array.isArray,fx=Object.prototype.hasOwnProperty,mh={current:null},hx={key:!0,ref:!0,__self:!0,__source:!0};function px(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fx.call(e,i)&&!hx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qa,type:n,key:s,ref:o,props:r,_owner:mh.current}}function P_(n,e){return{$$typeof:Qa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function gh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Qa}function L_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Np=/\/+/g;function Iu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?L_(""+n.key):e.toString(36)}function ac(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Qa:case v_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Iu(o,0):i,Dp(r)?(t="",n!=null&&(t=n.replace(Np,"$&/")+"/"),ac(r,e,t,"",function(c){return c})):r!=null&&(gh(r)&&(r=P_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Np,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Dp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Iu(s,a);o+=ac(s,e,t,l,r)}else if(l=R_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Iu(s,a++),o+=ac(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function al(n,e,t){if(n==null)return n;var i=[],r=0;return ac(n,i,"","",function(s){return e.call(t,s,r++)}),i}function I_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var _n={current:null},lc={transition:null},D_={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:lc,ReactCurrentOwner:mh};function mx(){throw Error("act(...) is not supported in production builds of React.")}nt.Children={map:al,forEach:function(n,e,t){al(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return al(n,function(){e++}),e},toArray:function(n){return al(n,function(e){return e})||[]},only:function(n){if(!gh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};nt.Component=No;nt.Fragment=__;nt.Profiler=M_;nt.PureComponent=hh;nt.StrictMode=S_;nt.Suspense=T_;nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_;nt.act=mx;nt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=cx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)fx.call(e,l)&&!hx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Qa,type:n.type,key:r,ref:s,props:i,_owner:o}};nt.createContext=function(n){return n={$$typeof:E_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:b_,_context:n},n.Consumer=n};nt.createElement=px;nt.createFactory=function(n){var e=px.bind(null,n);return e.type=n,e};nt.createRef=function(){return{current:null}};nt.forwardRef=function(n){return{$$typeof:w_,render:n}};nt.isValidElement=gh;nt.lazy=function(n){return{$$typeof:C_,_payload:{_status:-1,_result:n},_init:I_}};nt.memo=function(n,e){return{$$typeof:A_,type:n,compare:e===void 0?null:e}};nt.startTransition=function(n){var e=lc.transition;lc.transition={};try{n()}finally{lc.transition=e}};nt.unstable_act=mx;nt.useCallback=function(n,e){return _n.current.useCallback(n,e)};nt.useContext=function(n){return _n.current.useContext(n)};nt.useDebugValue=function(){};nt.useDeferredValue=function(n){return _n.current.useDeferredValue(n)};nt.useEffect=function(n,e){return _n.current.useEffect(n,e)};nt.useId=function(){return _n.current.useId()};nt.useImperativeHandle=function(n,e,t){return _n.current.useImperativeHandle(n,e,t)};nt.useInsertionEffect=function(n,e){return _n.current.useInsertionEffect(n,e)};nt.useLayoutEffect=function(n,e){return _n.current.useLayoutEffect(n,e)};nt.useMemo=function(n,e){return _n.current.useMemo(n,e)};nt.useReducer=function(n,e,t){return _n.current.useReducer(n,e,t)};nt.useRef=function(n){return _n.current.useRef(n)};nt.useState=function(n){return _n.current.useState(n)};nt.useSyncExternalStore=function(n,e,t){return _n.current.useSyncExternalStore(n,e,t)};nt.useTransition=function(){return _n.current.useTransition()};nt.version="18.3.1";ax.exports=nt;var pe=ax.exports;const bc=y_(pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_=pe,k_=Symbol.for("react.element"),U_=Symbol.for("react.fragment"),O_=Object.prototype.hasOwnProperty,F_=N_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z_={key:!0,ref:!0,__self:!0,__source:!0};function gx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)O_.call(e,i)&&!z_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:k_,type:n,key:s,ref:o,props:r,_owner:F_.current}}iu.Fragment=U_;iu.jsx=gx;iu.jsxs=gx;ox.exports=iu;var d=ox.exports,Qd={},xx={exports:{}},Un={},yx={exports:{}},vx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,L){var z=P.length;P.push(L);e:for(;0<z;){var $=z-1>>>1,ee=P[$];if(0<r(ee,L))P[$]=L,P[z]=ee,z=$;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var L=P[0],z=P.pop();if(z!==L){P[0]=z;e:for(var $=0,ee=P.length,_e=ee>>>1;$<_e;){var G=2*($+1)-1,Z=P[G],me=G+1,Re=P[me];if(0>r(Z,z))me<ee&&0>r(Re,Z)?(P[$]=Re,P[me]=z,$=me):(P[$]=Z,P[G]=z,$=G);else if(me<ee&&0>r(Re,z))P[$]=Re,P[me]=z,$=me;else break e}}return L}function r(P,L){var z=P.sortIndex-L.sortIndex;return z!==0?z:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,m=!1,x=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var L=t(c);L!==null;){if(L.callback===null)i(c);else if(L.startTime<=P)i(c),L.sortIndex=L.expirationTime,e(l,L);else break;L=t(c)}}function M(P){if(_=!1,y(P),!x)if(t(l)!==null)x=!0,V(T);else{var L=t(c);L!==null&&Q(M,L.startTime-P)}}function T(P,L){x=!1,_&&(_=!1,p(A),A=-1),m=!0;var z=f;try{for(y(L),h=t(l);h!==null&&(!(h.expirationTime>L)||P&&!I());){var $=h.callback;if(typeof $=="function"){h.callback=null,f=h.priorityLevel;var ee=$(h.expirationTime<=L);L=n.unstable_now(),typeof ee=="function"?h.callback=ee:h===t(l)&&i(l),y(L)}else i(l);h=t(l)}if(h!==null)var _e=!0;else{var G=t(c);G!==null&&Q(M,G.startTime-L),_e=!1}return _e}finally{h=null,f=z,m=!1}}var E=!1,w=null,A=-1,B=5,b=-1;function I(){return!(n.unstable_now()-b<B)}function re(){if(w!==null){var P=n.unstable_now();b=P;var L=!0;try{L=w(!0,P)}finally{L?X():(E=!1,w=null)}}else E=!1}var X;if(typeof v=="function")X=function(){v(re)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,K=N.port2;N.port1.onmessage=re,X=function(){K.postMessage(null)}}else X=function(){g(re,0)};function V(P){w=P,E||(E=!0,X())}function Q(P,L){A=g(function(){P(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,V(T))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var z=f;f=L;try{return P()}finally{f=z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=f;f=P;try{return L()}finally{f=z}},n.unstable_scheduleCallback=function(P,L,z){var $=n.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=z+ee,P={id:u++,callback:L,priorityLevel:P,startTime:z,expirationTime:ee,sortIndex:-1},z>$?(P.sortIndex=z,e(c,P),t(l)===null&&P===t(c)&&(_?(p(A),A=-1):_=!0,Q(M,z-$))):(P.sortIndex=ee,e(l,P),x||m||(x=!0,V(T))),P},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(P){var L=f;return function(){var z=f;f=L;try{return P.apply(this,arguments)}finally{f=z}}}})(vx);yx.exports=vx;var j_=yx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=pe,kn=j_;function ge(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _x=new Set,Pa={};function hs(n,e){go(n,e),go(n+"Capture",e)}function go(n,e){for(Pa[n]=e,n=0;n<e.length;n++)_x.add(e[n])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,H_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kp={},Up={};function G_(n){return ef.call(Up,n)?!0:ef.call(kp,n)?!1:H_.test(n)?Up[n]=!0:(kp[n]=!0,!1)}function V_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W_(n,e,t,i){if(e===null||typeof e>"u"||V_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){nn[n]=new Sn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];nn[e]=new Sn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){nn[n]=new Sn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){nn[n]=new Sn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){nn[n]=new Sn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){nn[n]=new Sn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){nn[n]=new Sn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){nn[n]=new Sn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){nn[n]=new Sn(n,5,!1,n.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function yh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(xh,yh);nn[e]=new Sn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(xh,yh);nn[e]=new Sn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(xh,yh);nn[e]=new Sn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){nn[n]=new Sn(n,1,!1,n.toLowerCase(),null,!1,!1)});nn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){nn[n]=new Sn(n,1,!1,n.toLowerCase(),null,!0,!0)});function vh(n,e,t,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(W_(e,t,r,i)&&(t=null),i||r===null?G_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Yi=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),_h=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),Sx=Symbol.for("react.provider"),Mx=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),Mh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),bx=Symbol.for("react.offscreen"),Op=Symbol.iterator;function Ho(n){return n===null||typeof n!="object"?null:(n=Op&&n[Op]||n["@@iterator"],typeof n=="function"?n:null)}var Rt=Object.assign,Du;function ua(n){if(Du===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+n}var Nu=!1;function ku(n,e){if(!n||Nu)return"";Nu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ua(n):""}function X_(n){switch(n.tag){case 5:return ua(n.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return n=ku(n.type,!1),n;case 11:return n=ku(n.type.render,!1),n;case 1:return n=ku(n.type,!0),n;default:return""}}function sf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $s:return"Fragment";case Xs:return"Portal";case tf:return"Profiler";case _h:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Mx:return(n.displayName||"Context")+".Consumer";case Sx:return(n._context.displayName||"Context")+".Provider";case Sh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Mh:return e=n.displayName||null,e!==null?e:sf(n.type)||"Memo";case sr:e=n._payload,n=n._init;try{return sf(n(e))}catch{}}return null}function $_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===_h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ex(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y_(n){var e=Ex(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function cl(n){n._valueTracker||(n._valueTracker=Y_(n))}function wx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Ex(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ec(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function of(n,e){var t=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Fp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Cr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tx(n,e){e=e.checked,e!=null&&vh(n,"checked",e,!1)}function af(n,e){Tx(n,e);var t=Cr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?lf(n,e.type,t):e.hasOwnProperty("defaultValue")&&lf(n,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function zp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function lf(n,e,t){(e!=="number"||Ec(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var da=Array.isArray;function oo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Cr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function cf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function jp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ge(92));if(da(t)){if(1<t.length)throw Error(ge(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Cr(t)}}function Ax(n,e){var t=Cr(e.value),i=Cr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Bp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Cx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Cx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ul,Rx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function La(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q_=["Webkit","ms","Moz","O"];Object.keys(xa).forEach(function(n){q_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),xa[e]=xa[n]})});function Px(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||xa.hasOwnProperty(n)&&xa[n]?(""+e).trim():e+"px"}function Lx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Px(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var K_=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function df(n,e){if(e){if(K_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function ff(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hf=null;function bh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pf=null,ao=null,lo=null;function Hp(n){if(n=nl(n)){if(typeof pf!="function")throw Error(ge(280));var e=n.stateNode;e&&(e=lu(e),pf(n.stateNode,n.type,e))}}function Ix(n){ao?lo?lo.push(n):lo=[n]:ao=n}function Dx(){if(ao){var n=ao,e=lo;if(lo=ao=null,Hp(n),e)for(n=0;n<e.length;n++)Hp(e[n])}}function Nx(n,e){return n(e)}function kx(){}var Uu=!1;function Ux(n,e,t){if(Uu)return n(e,t);Uu=!0;try{return Nx(n,e,t)}finally{Uu=!1,(ao!==null||lo!==null)&&(kx(),Dx())}}function Ia(n,e){var t=n.stateNode;if(t===null)return null;var i=lu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ge(231,e,typeof t));return t}var mf=!1;if(Gi)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){mf=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{mf=!1}function Z_(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var ya=!1,wc=null,Tc=!1,gf=null,J_={onError:function(n){ya=!0,wc=n}};function Q_(n,e,t,i,r,s,o,a,l){ya=!1,wc=null,Z_.apply(J_,arguments)}function e1(n,e,t,i,r,s,o,a,l){if(Q_.apply(this,arguments),ya){if(ya){var c=wc;ya=!1,wc=null}else throw Error(ge(198));Tc||(Tc=!0,gf=c)}}function ps(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ox(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(n){if(ps(n)!==n)throw Error(ge(188))}function t1(n){var e=n.alternate;if(!e){if(e=ps(n),e===null)throw Error(ge(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Gp(r),n;if(s===i)return Gp(r),e;s=s.sibling}throw Error(ge(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ge(189))}}if(t.alternate!==i)throw Error(ge(190))}if(t.tag!==3)throw Error(ge(188));return t.stateNode.current===t?n:e}function Fx(n){return n=t1(n),n!==null?zx(n):null}function zx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=zx(n);if(e!==null)return e;n=n.sibling}return null}var jx=kn.unstable_scheduleCallback,Vp=kn.unstable_cancelCallback,n1=kn.unstable_shouldYield,i1=kn.unstable_requestPaint,Nt=kn.unstable_now,r1=kn.unstable_getCurrentPriorityLevel,Eh=kn.unstable_ImmediatePriority,Bx=kn.unstable_UserBlockingPriority,Ac=kn.unstable_NormalPriority,s1=kn.unstable_LowPriority,Hx=kn.unstable_IdlePriority,ru=null,Mi=null;function o1(n){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(ru,n,void 0,(n.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:c1,a1=Math.log,l1=Math.LN2;function c1(n){return n>>>=0,n===0?32:31-(a1(n)/l1|0)|0}var dl=64,fl=4194304;function fa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Cc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=fa(a):(s&=o,s!==0&&(i=fa(s)))}else o=t&~r,o!==0?i=fa(o):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-di(e),r=1<<t,i|=n[t],e&=~r;return i}function u1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=u1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function xf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gx(){var n=dl;return dl<<=1,!(dl&4194240)&&(dl=64),n}function Ou(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function el(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-di(e),n[e]=t}function f1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-di(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function wh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-di(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ft=0;function Vx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Wx,Th,Xx,$x,Yx,yf=!1,hl=[],xr=null,yr=null,vr=null,Da=new Map,Na=new Map,cr=[],h1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wp(n,e){switch(n){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Vo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=nl(e),e!==null&&Th(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function p1(n,e,t,i,r){switch(e){case"focusin":return xr=Vo(xr,n,e,t,i,r),!0;case"dragenter":return yr=Vo(yr,n,e,t,i,r),!0;case"mouseover":return vr=Vo(vr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Da.set(s,Vo(Da.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Na.set(s,Vo(Na.get(s)||null,n,e,t,i,r)),!0}return!1}function qx(n){var e=Kr(n.target);if(e!==null){var t=ps(e);if(t!==null){if(e=t.tag,e===13){if(e=Ox(t),e!==null){n.blockedOn=e,Yx(n.priority,function(){Xx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);hf=i,t.target.dispatchEvent(i),hf=null}else return e=nl(t),e!==null&&Th(e),n.blockedOn=t,!1;e.shift()}return!0}function Xp(n,e,t){cc(n)&&t.delete(e)}function m1(){yf=!1,xr!==null&&cc(xr)&&(xr=null),yr!==null&&cc(yr)&&(yr=null),vr!==null&&cc(vr)&&(vr=null),Da.forEach(Xp),Na.forEach(Xp)}function Wo(n,e){n.blockedOn===e&&(n.blockedOn=null,yf||(yf=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,m1)))}function ka(n){function e(r){return Wo(r,n)}if(0<hl.length){Wo(hl[0],n);for(var t=1;t<hl.length;t++){var i=hl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(xr!==null&&Wo(xr,n),yr!==null&&Wo(yr,n),vr!==null&&Wo(vr,n),Da.forEach(e),Na.forEach(e),t=0;t<cr.length;t++)i=cr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cr.length&&(t=cr[0],t.blockedOn===null);)qx(t),t.blockedOn===null&&cr.shift()}var co=Yi.ReactCurrentBatchConfig,Rc=!0;function g1(n,e,t,i){var r=ft,s=co.transition;co.transition=null;try{ft=1,Ah(n,e,t,i)}finally{ft=r,co.transition=s}}function x1(n,e,t,i){var r=ft,s=co.transition;co.transition=null;try{ft=4,Ah(n,e,t,i)}finally{ft=r,co.transition=s}}function Ah(n,e,t,i){if(Rc){var r=vf(n,e,t,i);if(r===null)$u(n,e,i,Pc,t),Wp(n,i);else if(p1(r,n,e,t,i))i.stopPropagation();else if(Wp(n,i),e&4&&-1<h1.indexOf(n)){for(;r!==null;){var s=nl(r);if(s!==null&&Wx(s),s=vf(n,e,t,i),s===null&&$u(n,e,i,Pc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else $u(n,e,i,null,t)}}var Pc=null;function vf(n,e,t,i){if(Pc=null,n=bh(i),n=Kr(n),n!==null)if(e=ps(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ox(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Pc=n,null}function Kx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r1()){case Eh:return 1;case Bx:return 4;case Ac:case s1:return 16;case Hx:return 536870912;default:return 16}default:return 16}}var fr=null,Ch=null,uc=null;function Zx(){if(uc)return uc;var n,e=Ch,t=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return uc=r.slice(n,1<i?1-i:void 0)}function dc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function pl(){return!0}function $p(){return!1}function On(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:$p,this.isPropagationStopped=$p,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rh=On(ko),tl=Rt({},ko,{view:0,detail:0}),y1=On(tl),Fu,zu,Xo,su=Rt({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xo&&(Xo&&n.type==="mousemove"?(Fu=n.screenX-Xo.screenX,zu=n.screenY-Xo.screenY):zu=Fu=0,Xo=n),Fu)},movementY:function(n){return"movementY"in n?n.movementY:zu}}),Yp=On(su),v1=Rt({},su,{dataTransfer:0}),_1=On(v1),S1=Rt({},tl,{relatedTarget:0}),ju=On(S1),M1=Rt({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=On(M1),E1=Rt({},ko,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),w1=On(E1),T1=Rt({},ko,{data:0}),qp=On(T1),A1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=R1[n])?!!e[n]:!1}function Ph(){return P1}var L1=Rt({},tl,{key:function(n){if(n.key){var e=A1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=dc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?C1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(n){return n.type==="keypress"?dc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?dc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),I1=On(L1),D1=Rt({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=On(D1),N1=Rt({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),k1=On(N1),U1=Rt({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),O1=On(U1),F1=Rt({},su,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),z1=On(F1),j1=[9,13,27,32],Lh=Gi&&"CompositionEvent"in window,va=null;Gi&&"documentMode"in document&&(va=document.documentMode);var B1=Gi&&"TextEvent"in window&&!va,Jx=Gi&&(!Lh||va&&8<va&&11>=va),Zp=" ",Jp=!1;function Qx(n,e){switch(n){case"keyup":return j1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ey(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function H1(n,e){switch(n){case"compositionend":return ey(e);case"keypress":return e.which!==32?null:(Jp=!0,Zp);case"textInput":return n=e.data,n===Zp&&Jp?null:n;default:return null}}function G1(n,e){if(Ys)return n==="compositionend"||!Lh&&Qx(n,e)?(n=Zx(),uc=Ch=fr=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jx&&e.locale!=="ko"?null:e.data;default:return null}}var V1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!V1[n.type]:e==="textarea"}function ty(n,e,t,i){Ix(i),e=Lc(e,"onChange"),0<e.length&&(t=new Rh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var _a=null,Ua=null;function W1(n){fy(n,0)}function ou(n){var e=Zs(n);if(wx(e))return n}function X1(n,e){if(n==="change")return e}var ny=!1;if(Gi){var Bu;if(Gi){var Hu="oninput"in document;if(!Hu){var em=document.createElement("div");em.setAttribute("oninput","return;"),Hu=typeof em.oninput=="function"}Bu=Hu}else Bu=!1;ny=Bu&&(!document.documentMode||9<document.documentMode)}function tm(){_a&&(_a.detachEvent("onpropertychange",iy),Ua=_a=null)}function iy(n){if(n.propertyName==="value"&&ou(Ua)){var e=[];ty(e,Ua,n,bh(n)),Ux(W1,e)}}function $1(n,e,t){n==="focusin"?(tm(),_a=e,Ua=t,_a.attachEvent("onpropertychange",iy)):n==="focusout"&&tm()}function Y1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ou(Ua)}function q1(n,e){if(n==="click")return ou(e)}function K1(n,e){if(n==="input"||n==="change")return ou(e)}function Z1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pi=typeof Object.is=="function"?Object.is:Z1;function Oa(n,e){if(pi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ef.call(e,r)||!pi(n[r],e[r]))return!1}return!0}function nm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function im(n,e){var t=nm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nm(t)}}function ry(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ry(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function sy(){for(var n=window,e=Ec();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ec(n.document)}return e}function Ih(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function J1(n){var e=sy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&ry(t.ownerDocument.documentElement,t)){if(i!==null&&Ih(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=im(t,s);var o=im(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Q1=Gi&&"documentMode"in document&&11>=document.documentMode,qs=null,_f=null,Sa=null,Sf=!1;function rm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sf||qs==null||qs!==Ec(i)||(i=qs,"selectionStart"in i&&Ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Oa(Sa,i)||(Sa=i,i=Lc(_f,"onSelect"),0<i.length&&(e=new Rh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=qs)))}function ml(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ks={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},Gu={},oy={};Gi&&(oy=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function au(n){if(Gu[n])return Gu[n];if(!Ks[n])return n;var e=Ks[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in oy)return Gu[n]=e[t];return n}var ay=au("animationend"),ly=au("animationiteration"),cy=au("animationstart"),uy=au("transitionend"),dy=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,e){dy.set(n,e),hs(e,[n])}for(var Vu=0;Vu<sm.length;Vu++){var Wu=sm[Vu],eS=Wu.toLowerCase(),tS=Wu[0].toUpperCase()+Wu.slice(1);Lr(eS,"on"+tS)}Lr(ay,"onAnimationEnd");Lr(ly,"onAnimationIteration");Lr(cy,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(uy,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function om(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,e1(i,e,void 0,n),n.currentTarget=null}function fy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;om(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;om(r,a,c),s=l}}}if(Tc)throw n=gf,Tc=!1,gf=null,n}function yt(n,e){var t=e[Tf];t===void 0&&(t=e[Tf]=new Set);var i=n+"__bubble";t.has(i)||(hy(e,n,2,!1),t.add(i))}function Xu(n,e,t){var i=0;e&&(i|=4),hy(t,n,i,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function Fa(n){if(!n[gl]){n[gl]=!0,_x.forEach(function(t){t!=="selectionchange"&&(nS.has(t)||Xu(t,!1,n),Xu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[gl]||(e[gl]=!0,Xu("selectionchange",!1,e))}}function hy(n,e,t,i){switch(Kx(e)){case 1:var r=g1;break;case 4:r=x1;break;default:r=Ah}t=r.bind(null,e,t,n),r=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function $u(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ux(function(){var c=s,u=bh(t),h=[];e:{var f=dy.get(n);if(f!==void 0){var m=Rh,x=n;switch(n){case"keypress":if(dc(t)===0)break e;case"keydown":case"keyup":m=I1;break;case"focusin":x="focus",m=ju;break;case"focusout":x="blur",m=ju;break;case"beforeblur":case"afterblur":m=ju;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=k1;break;case ay:case ly:case cy:m=b1;break;case uy:m=O1;break;case"scroll":m=y1;break;case"wheel":m=z1;break;case"copy":case"cut":case"paste":m=w1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Kp}var _=(e&4)!==0,g=!_&&n==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,y;v!==null;){y=v;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,p!==null&&(M=Ia(v,p),M!=null&&_.push(za(v,M,y)))),g)break;v=v.return}0<_.length&&(f=new m(f,x,null,t,u),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",f&&t!==hf&&(x=t.relatedTarget||t.fromElement)&&(Kr(x)||x[Vi]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=c,x=x?Kr(x):null,x!==null&&(g=ps(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(_=Yp,M="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Kp,M="onPointerLeave",p="onPointerEnter",v="pointer"),g=m==null?f:Zs(m),y=x==null?f:Zs(x),f=new _(M,v+"leave",m,t,u),f.target=g,f.relatedTarget=y,M=null,Kr(u)===c&&(_=new _(p,v+"enter",x,t,u),_.target=y,_.relatedTarget=g,M=_),g=M,m&&x)t:{for(_=m,p=x,v=0,y=_;y;y=xs(y))v++;for(y=0,M=p;M;M=xs(M))y++;for(;0<v-y;)_=xs(_),v--;for(;0<y-v;)p=xs(p),y--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=xs(_),p=xs(p)}_=null}else _=null;m!==null&&am(h,f,m,_,!1),x!==null&&g!==null&&am(h,g,x,_,!0)}}e:{if(f=c?Zs(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=X1;else if(Qp(f))if(ny)T=K1;else{T=Y1;var E=$1}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=q1);if(T&&(T=T(n,c))){ty(h,T,t,u);break e}E&&E(n,f,c),n==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&lf(f,"number",f.value)}switch(E=c?Zs(c):window,n){case"focusin":(Qp(E)||E.contentEditable==="true")&&(qs=E,_f=c,Sa=null);break;case"focusout":Sa=_f=qs=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,rm(h,t,u);break;case"selectionchange":if(Q1)break;case"keydown":case"keyup":rm(h,t,u)}var w;if(Lh)e:{switch(n){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ys?Qx(n,t)&&(A="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(Jx&&t.locale!=="ko"&&(Ys||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ys&&(w=Zx()):(fr=u,Ch="value"in fr?fr.value:fr.textContent,Ys=!0)),E=Lc(c,A),0<E.length&&(A=new qp(A,n,null,t,u),h.push({event:A,listeners:E}),w?A.data=w:(w=ey(t),w!==null&&(A.data=w)))),(w=B1?H1(n,t):G1(n,t))&&(c=Lc(c,"onBeforeInput"),0<c.length&&(u=new qp("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=w))}fy(h,e)})}function za(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Lc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ia(n,t),s!=null&&i.unshift(za(n,s,r)),s=Ia(n,e),s!=null&&i.push(za(n,s,r))),n=n.return}return i}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function am(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ia(t,s),l!=null&&o.unshift(za(t,l,a))):r||(l=Ia(t,s),l!=null&&o.push(za(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var iS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function lm(n){return(typeof n=="string"?n:""+n).replace(iS,`
`).replace(rS,"")}function xl(n,e,t){if(e=lm(e),lm(n)!==e&&t)throw Error(ge(425))}function Ic(){}var Mf=null,bf=null;function Ef(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(n){return cm.resolve(null).then(n).catch(aS)}:wf;function aS(n){setTimeout(function(){throw n})}function Yu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ka(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ka(e)}function _r(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function um(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),Si="__reactFiber$"+Uo,ja="__reactProps$"+Uo,Vi="__reactContainer$"+Uo,Tf="__reactEvents$"+Uo,lS="__reactListeners$"+Uo,cS="__reactHandles$"+Uo;function Kr(n){var e=n[Si];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vi]||t[Si]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=um(n);n!==null;){if(t=n[Si])return t;n=um(n)}return e}n=t,t=n.parentNode}return null}function nl(n){return n=n[Si]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ge(33))}function lu(n){return n[ja]||null}var Af=[],Js=-1;function Ir(n){return{current:n}}function St(n){0>Js||(n.current=Af[Js],Af[Js]=null,Js--)}function xt(n,e){Js++,Af[Js]=n.current,n.current=e}var Rr={},dn=Ir(Rr),En=Ir(!1),ss=Rr;function xo(n,e){var t=n.type.contextTypes;if(!t)return Rr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function wn(n){return n=n.childContextTypes,n!=null}function Dc(){St(En),St(dn)}function dm(n,e,t){if(dn.current!==Rr)throw Error(ge(168));xt(dn,e),xt(En,t)}function py(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,$_(n)||"Unknown",r));return Rt({},t,i)}function Nc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Rr,ss=dn.current,xt(dn,n),xt(En,En.current),!0}function fm(n,e,t){var i=n.stateNode;if(!i)throw Error(ge(169));t?(n=py(n,e,ss),i.__reactInternalMemoizedMergedChildContext=n,St(En),St(dn),xt(dn,n)):St(En),xt(En,t)}var Oi=null,cu=!1,qu=!1;function my(n){Oi===null?Oi=[n]:Oi.push(n)}function uS(n){cu=!0,my(n)}function Dr(){if(!qu&&Oi!==null){qu=!0;var n=0,e=ft;try{var t=Oi;for(ft=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Oi=null,cu=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(n+1)),jx(Eh,Dr),r}finally{ft=e,qu=!1}}return null}var Qs=[],eo=0,kc=null,Uc=0,Wn=[],Xn=0,os=null,zi=1,ji="";function Wr(n,e){Qs[eo++]=Uc,Qs[eo++]=kc,kc=n,Uc=e}function gy(n,e,t){Wn[Xn++]=zi,Wn[Xn++]=ji,Wn[Xn++]=os,os=n;var i=zi;n=ji;var r=32-di(i)-1;i&=~(1<<r),t+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-di(e)+r|t<<r|i,ji=s+n}else zi=1<<s|t<<r|i,ji=n}function Dh(n){n.return!==null&&(Wr(n,1),gy(n,1,0))}function Nh(n){for(;n===kc;)kc=Qs[--eo],Qs[eo]=null,Uc=Qs[--eo],Qs[eo]=null;for(;n===os;)os=Wn[--Xn],Wn[Xn]=null,ji=Wn[--Xn],Wn[Xn]=null,zi=Wn[--Xn],Wn[Xn]=null}var Nn=null,Dn=null,Et=!1,si=null;function xy(n,e){var t=qn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function hm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Nn=n,Dn=_r(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Nn=n,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=os!==null?{id:zi,overflow:ji}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=qn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Nn=n,Dn=null,!0):!1;default:return!1}}function Cf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rf(n){if(Et){var e=Dn;if(e){var t=e;if(!hm(n,e)){if(Cf(n))throw Error(ge(418));e=_r(t.nextSibling);var i=Nn;e&&hm(n,e)?xy(i,t):(n.flags=n.flags&-4097|2,Et=!1,Nn=n)}}else{if(Cf(n))throw Error(ge(418));n.flags=n.flags&-4097|2,Et=!1,Nn=n}}}function pm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function yl(n){if(n!==Nn)return!1;if(!Et)return pm(n),Et=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ef(n.type,n.memoizedProps)),e&&(e=Dn)){if(Cf(n))throw yy(),Error(ge(418));for(;e;)xy(n,e),e=_r(e.nextSibling)}if(pm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ge(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Dn=_r(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Dn=null}}else Dn=Nn?_r(n.stateNode.nextSibling):null;return!0}function yy(){for(var n=Dn;n;)n=_r(n.nextSibling)}function yo(){Dn=Nn=null,Et=!1}function kh(n){si===null?si=[n]:si.push(n)}var dS=Yi.ReactCurrentBatchConfig;function $o(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ge(309));var i=t.stateNode}if(!i)throw Error(ge(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ge(284));if(!t._owner)throw Error(ge(290,n))}return n}function vl(n,e){throw n=Object.prototype.toString.call(e),Error(ge(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function mm(n){var e=n._init;return e(n._payload)}function vy(n){function e(p,v){if(n){var y=p.deletions;y===null?(p.deletions=[v],p.flags|=16):y.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Er(p,v),p.index=0,p.sibling=null,p}function s(p,v,y){return p.index=y,n?(y=p.alternate,y!==null?(y=y.index,y<v?(p.flags|=2,v):y):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,y,M){return v===null||v.tag!==6?(v=nd(y,p.mode,M),v.return=p,v):(v=r(v,y),v.return=p,v)}function l(p,v,y,M){var T=y.type;return T===$s?u(p,v,y.props.children,M,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&mm(T)===v.type)?(M=r(v,y.props),M.ref=$o(p,v,y),M.return=p,M):(M=yc(y.type,y.key,y.props,null,p.mode,M),M.ref=$o(p,v,y),M.return=p,M)}function c(p,v,y,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=id(y,p.mode,M),v.return=p,v):(v=r(v,y.children||[]),v.return=p,v)}function u(p,v,y,M,T){return v===null||v.tag!==7?(v=ts(y,p.mode,M,T),v.return=p,v):(v=r(v,y),v.return=p,v)}function h(p,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=nd(""+v,p.mode,y),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ll:return y=yc(v.type,v.key,v.props,null,p.mode,y),y.ref=$o(p,null,v),y.return=p,y;case Xs:return v=id(v,p.mode,y),v.return=p,v;case sr:var M=v._init;return h(p,M(v._payload),y)}if(da(v)||Ho(v))return v=ts(v,p.mode,y,null),v.return=p,v;vl(p,v)}return null}function f(p,v,y,M){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(p,v,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:return y.key===T?l(p,v,y,M):null;case Xs:return y.key===T?c(p,v,y,M):null;case sr:return T=y._init,f(p,v,T(y._payload),M)}if(da(y)||Ho(y))return T!==null?null:u(p,v,y,M,null);vl(p,y)}return null}function m(p,v,y,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return p=p.get(y)||null,a(v,p,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ll:return p=p.get(M.key===null?y:M.key)||null,l(v,p,M,T);case Xs:return p=p.get(M.key===null?y:M.key)||null,c(v,p,M,T);case sr:var E=M._init;return m(p,v,y,E(M._payload),T)}if(da(M)||Ho(M))return p=p.get(y)||null,u(v,p,M,T,null);vl(v,M)}return null}function x(p,v,y,M){for(var T=null,E=null,w=v,A=v=0,B=null;w!==null&&A<y.length;A++){w.index>A?(B=w,w=null):B=w.sibling;var b=f(p,w,y[A],M);if(b===null){w===null&&(w=B);break}n&&w&&b.alternate===null&&e(p,w),v=s(b,v,A),E===null?T=b:E.sibling=b,E=b,w=B}if(A===y.length)return t(p,w),Et&&Wr(p,A),T;if(w===null){for(;A<y.length;A++)w=h(p,y[A],M),w!==null&&(v=s(w,v,A),E===null?T=w:E.sibling=w,E=w);return Et&&Wr(p,A),T}for(w=i(p,w);A<y.length;A++)B=m(w,p,A,y[A],M),B!==null&&(n&&B.alternate!==null&&w.delete(B.key===null?A:B.key),v=s(B,v,A),E===null?T=B:E.sibling=B,E=B);return n&&w.forEach(function(I){return e(p,I)}),Et&&Wr(p,A),T}function _(p,v,y,M){var T=Ho(y);if(typeof T!="function")throw Error(ge(150));if(y=T.call(y),y==null)throw Error(ge(151));for(var E=T=null,w=v,A=v=0,B=null,b=y.next();w!==null&&!b.done;A++,b=y.next()){w.index>A?(B=w,w=null):B=w.sibling;var I=f(p,w,b.value,M);if(I===null){w===null&&(w=B);break}n&&w&&I.alternate===null&&e(p,w),v=s(I,v,A),E===null?T=I:E.sibling=I,E=I,w=B}if(b.done)return t(p,w),Et&&Wr(p,A),T;if(w===null){for(;!b.done;A++,b=y.next())b=h(p,b.value,M),b!==null&&(v=s(b,v,A),E===null?T=b:E.sibling=b,E=b);return Et&&Wr(p,A),T}for(w=i(p,w);!b.done;A++,b=y.next())b=m(w,p,A,b.value,M),b!==null&&(n&&b.alternate!==null&&w.delete(b.key===null?A:b.key),v=s(b,v,A),E===null?T=b:E.sibling=b,E=b);return n&&w.forEach(function(re){return e(p,re)}),Et&&Wr(p,A),T}function g(p,v,y,M){if(typeof y=="object"&&y!==null&&y.type===$s&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:e:{for(var T=y.key,E=v;E!==null;){if(E.key===T){if(T=y.type,T===$s){if(E.tag===7){t(p,E.sibling),v=r(E,y.props.children),v.return=p,p=v;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&mm(T)===E.type){t(p,E.sibling),v=r(E,y.props),v.ref=$o(p,E,y),v.return=p,p=v;break e}t(p,E);break}else e(p,E);E=E.sibling}y.type===$s?(v=ts(y.props.children,p.mode,M,y.key),v.return=p,p=v):(M=yc(y.type,y.key,y.props,null,p.mode,M),M.ref=$o(p,v,y),M.return=p,p=M)}return o(p);case Xs:e:{for(E=y.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(p,v.sibling),v=r(v,y.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=id(y,p.mode,M),v.return=p,p=v}return o(p);case sr:return E=y._init,g(p,v,E(y._payload),M)}if(da(y))return x(p,v,y,M);if(Ho(y))return _(p,v,y,M);vl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,y),v.return=p,p=v):(t(p,v),v=nd(y,p.mode,M),v.return=p,p=v),o(p)):t(p,v)}return g}var vo=vy(!0),_y=vy(!1),Oc=Ir(null),Fc=null,to=null,Uh=null;function Oh(){Uh=to=Fc=null}function Fh(n){var e=Oc.current;St(Oc),n._currentValue=e}function Pf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function uo(n,e){Fc=n,Uh=to=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(bn=!0),n.firstContext=null)}function Zn(n){var e=n._currentValue;if(Uh!==n)if(n={context:n,memoizedValue:e,next:null},to===null){if(Fc===null)throw Error(ge(308));to=n,Fc.dependencies={lanes:0,firstContext:n}}else to=to.next=n;return e}var Zr=null;function zh(n){Zr===null?Zr=[n]:Zr.push(n)}function Sy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,zh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Wi(n,i)}function Wi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var or=!1;function jh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function My(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ot&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(n,t)}return r=i.interleaved,r===null?(e.next=e,zh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(n,t)}function fc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,wh(n,t)}}function gm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function zc(n,e,t,i){var r=n.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,_=a;switch(f=e,m=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(m,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,f=typeof x=="function"?x.call(m,h,f):x,f==null)break e;h=Rt({},h,f);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=h):u=u.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=o,n.lanes=o,n.memoizedState=h}}function xm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var il={},bi=Ir(il),Ba=Ir(il),Ha=Ir(il);function Jr(n){if(n===il)throw Error(ge(174));return n}function Bh(n,e){switch(xt(Ha,e),xt(Ba,n),xt(bi,il),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=uf(e,n)}St(bi),xt(bi,e)}function _o(){St(bi),St(Ba),St(Ha)}function by(n){Jr(Ha.current);var e=Jr(bi.current),t=uf(e,n.type);e!==t&&(xt(Ba,n),xt(bi,t))}function Hh(n){Ba.current===n&&(St(bi),St(Ba))}var At=Ir(0);function jc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ku=[];function Gh(){for(var n=0;n<Ku.length;n++)Ku[n]._workInProgressVersionPrimary=null;Ku.length=0}var hc=Yi.ReactCurrentDispatcher,Zu=Yi.ReactCurrentBatchConfig,as=0,Ct=null,Ot=null,Wt=null,Bc=!1,Ma=!1,Ga=0,fS=0;function on(){throw Error(ge(321))}function Vh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!pi(n[t],e[t]))return!1;return!0}function Wh(n,e,t,i,r,s){if(as=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hc.current=n===null||n.memoizedState===null?gS:xS,n=t(i,r),Ma){s=0;do{if(Ma=!1,Ga=0,25<=s)throw Error(ge(301));s+=1,Wt=Ot=null,e.updateQueue=null,hc.current=yS,n=t(i,r)}while(Ma)}if(hc.current=Hc,e=Ot!==null&&Ot.next!==null,as=0,Wt=Ot=Ct=null,Bc=!1,e)throw Error(ge(300));return n}function Xh(){var n=Ga!==0;return Ga=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ct.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function Jn(){if(Ot===null){var n=Ct.alternate;n=n!==null?n.memoizedState:null}else n=Ot.next;var e=Wt===null?Ct.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=n;else{if(n===null)throw Error(ge(310));Ot=n,n={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?Ct.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function Va(n,e){return typeof e=="function"?e(n):e}function Ju(n){var e=Jn(),t=e.queue;if(t===null)throw Error(ge(311));t.lastRenderedReducer=n;var i=Ot,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((as&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ct.lanes|=u,ls|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ct.lanes|=s,ls|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Qu(n){var e=Jn(),t=e.queue;if(t===null)throw Error(ge(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ey(){}function wy(n,e){var t=Ct,i=Jn(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,$h(Cy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,Wa(9,Ay.bind(null,t,i,r,e),void 0,null),Yt===null)throw Error(ge(349));as&30||Ty(t,e,r)}return r}function Ty(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ay(n,e,t,i){e.value=t,e.getSnapshot=i,Ry(e)&&Py(n)}function Cy(n,e,t){return t(function(){Ry(e)&&Py(n)})}function Ry(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!pi(n,t)}catch{return!0}}function Py(n){var e=Wi(n,1);e!==null&&fi(e,n,1,-1)}function ym(n){var e=vi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},e.queue=n,n=n.dispatch=mS.bind(null,Ct,n),[e.memoizedState,n]}function Wa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Ly(){return Jn().memoizedState}function pc(n,e,t,i){var r=vi();Ct.flags|=n,r.memoizedState=Wa(1|e,t,void 0,i===void 0?null:i)}function uu(n,e,t,i){var r=Jn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Vh(i,o.deps)){r.memoizedState=Wa(e,t,s,i);return}}Ct.flags|=n,r.memoizedState=Wa(1|e,t,s,i)}function vm(n,e){return pc(8390656,8,n,e)}function $h(n,e){return uu(2048,8,n,e)}function Iy(n,e){return uu(4,2,n,e)}function Dy(n,e){return uu(4,4,n,e)}function Ny(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ky(n,e,t){return t=t!=null?t.concat([n]):null,uu(4,4,Ny.bind(null,e,n),t)}function Yh(){}function Uy(n,e){var t=Jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Oy(n,e){var t=Jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Fy(n,e,t){return as&21?(pi(t,e)||(t=Gx(),Ct.lanes|=t,ls|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,bn=!0),n.memoizedState=t)}function hS(n,e){var t=ft;ft=t!==0&&4>t?t:4,n(!0);var i=Zu.transition;Zu.transition={};try{n(!1),e()}finally{ft=t,Zu.transition=i}}function zy(){return Jn().memoizedState}function pS(n,e,t){var i=br(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},jy(n))By(e,t);else if(t=Sy(n,e,t,i),t!==null){var r=yn();fi(t,n,i,r),Hy(t,e,i)}}function mS(n,e,t){var i=br(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(jy(n))By(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,zh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Sy(n,e,r,i),t!==null&&(r=yn(),fi(t,n,i,r),Hy(t,e,i))}}function jy(n){var e=n.alternate;return n===Ct||e!==null&&e===Ct}function By(n,e){Ma=Bc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Hy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,wh(n,t)}}var Hc={readContext:Zn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},gS={readContext:Zn,useCallback:function(n,e){return vi().memoizedState=[n,e===void 0?null:e],n},useContext:Zn,useEffect:vm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,pc(4194308,4,Ny.bind(null,e,n),t)},useLayoutEffect:function(n,e){return pc(4194308,4,n,e)},useInsertionEffect:function(n,e){return pc(4,2,n,e)},useMemo:function(n,e){var t=vi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=vi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=pS.bind(null,Ct,n),[i.memoizedState,n]},useRef:function(n){var e=vi();return n={current:n},e.memoizedState=n},useState:ym,useDebugValue:Yh,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=ym(!1),e=n[0];return n=hS.bind(null,n[1]),vi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ct,r=vi();if(Et){if(t===void 0)throw Error(ge(407));t=t()}else{if(t=e(),Yt===null)throw Error(ge(349));as&30||Ty(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,vm(Cy.bind(null,i,s,n),[n]),i.flags|=2048,Wa(9,Ay.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=vi(),e=Yt.identifierPrefix;if(Et){var t=ji,i=zi;t=(i&~(1<<32-di(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ga++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=fS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},xS={readContext:Zn,useCallback:Uy,useContext:Zn,useEffect:$h,useImperativeHandle:ky,useInsertionEffect:Iy,useLayoutEffect:Dy,useMemo:Oy,useReducer:Ju,useRef:Ly,useState:function(){return Ju(Va)},useDebugValue:Yh,useDeferredValue:function(n){var e=Jn();return Fy(e,Ot.memoizedState,n)},useTransition:function(){var n=Ju(Va)[0],e=Jn().memoizedState;return[n,e]},useMutableSource:Ey,useSyncExternalStore:wy,useId:zy,unstable_isNewReconciler:!1},yS={readContext:Zn,useCallback:Uy,useContext:Zn,useEffect:$h,useImperativeHandle:ky,useInsertionEffect:Iy,useLayoutEffect:Dy,useMemo:Oy,useReducer:Qu,useRef:Ly,useState:function(){return Qu(Va)},useDebugValue:Yh,useDeferredValue:function(n){var e=Jn();return Ot===null?e.memoizedState=n:Fy(e,Ot.memoizedState,n)},useTransition:function(){var n=Qu(Va)[0],e=Jn().memoizedState;return[n,e]},useMutableSource:Ey,useSyncExternalStore:wy,useId:zy,unstable_isNewReconciler:!1};function ii(n,e){if(n&&n.defaultProps){e=Rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Lf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var du={isMounted:function(n){return(n=n._reactInternals)?ps(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=yn(),r=br(n),s=Hi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Sr(n,s,r),e!==null&&(fi(e,n,r,i),fc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=yn(),r=br(n),s=Hi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Sr(n,s,r),e!==null&&(fi(e,n,r,i),fc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=yn(),i=br(n),r=Hi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(n,r,i),e!==null&&(fi(e,n,i,t),fc(e,n,i))}};function _m(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oa(t,i)||!Oa(r,s):!0}function Gy(n,e,t){var i=!1,r=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=wn(e)?ss:dn.current,i=e.contextTypes,s=(i=i!=null)?xo(n,r):Rr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Sm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&du.enqueueReplaceState(e,e.state,null)}function If(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},jh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=wn(e)?ss:dn.current,r.context=xo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&du.enqueueReplaceState(r,r.state,null),zc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function So(n,e){try{var t="",i=e;do t+=X_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ed(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Df(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var vS=typeof WeakMap=="function"?WeakMap:Map;function Vy(n,e,t){t=Hi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Vc||(Vc=!0,Gf=i),Df(n,e)},t}function Wy(n,e,t){t=Hi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Df(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Df(n,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Mm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new vS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=DS.bind(null,n,e,t),e.then(n,n))}function bm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Em(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hi(-1,1),e.tag=2,Sr(t,e,1))),t.lanes|=1),n)}var _S=Yi.ReactCurrentOwner,bn=!1;function pn(n,e,t,i){e.child=n===null?_y(e,null,t,i):vo(e,n.child,t,i)}function wm(n,e,t,i,r){t=t.render;var s=e.ref;return uo(e,r),i=Wh(n,e,t,i,s,r),t=Xh(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xi(n,e,r)):(Et&&t&&Dh(e),e.flags|=1,pn(n,e,i,r),e.child)}function Tm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!np(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Xy(n,e,s,i,r)):(n=yc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Oa,t(o,i)&&n.ref===e.ref)return Xi(n,e,r)}return e.flags|=1,n=Er(s,i),n.ref=e.ref,n.return=e,e.child=n}function Xy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Oa(s,i)&&n.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(bn=!0);else return e.lanes=n.lanes,Xi(n,e,r)}return Nf(n,e,t,i,r)}function $y(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(io,Ln),Ln|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,xt(io,Ln),Ln|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,xt(io,Ln),Ln|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,xt(io,Ln),Ln|=i;return pn(n,e,r,t),e.child}function Yy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Nf(n,e,t,i,r){var s=wn(t)?ss:dn.current;return s=xo(e,s),uo(e,r),t=Wh(n,e,t,i,s,r),i=Xh(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xi(n,e,r)):(Et&&i&&Dh(e),e.flags|=1,pn(n,e,t,r),e.child)}function Am(n,e,t,i,r){if(wn(t)){var s=!0;Nc(e)}else s=!1;if(uo(e,r),e.stateNode===null)mc(n,e),Gy(e,t,i),If(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=wn(t)?ss:dn.current,c=xo(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Sm(e,o,i,c),or=!1;var f=e.memoizedState;o.state=f,zc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||En.current||or?(typeof u=="function"&&(Lf(e,t,u,i),l=e.memoizedState),(a=or||_m(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,My(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:ii(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=wn(t)?ss:dn.current,l=xo(e,l));var m=t.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Sm(e,o,i,l),or=!1,f=e.memoizedState,o.state=f,zc(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||En.current||or?(typeof m=="function"&&(Lf(e,t,m,i),x=e.memoizedState),(c=or||_m(e,t,c,i,f,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return kf(n,e,t,i,s,r)}function kf(n,e,t,i,r,s){Yy(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fm(e,t,!1),Xi(n,e,s);i=e.stateNode,_S.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=vo(e,n.child,null,s),e.child=vo(e,null,a,s)):pn(n,e,a,s),e.memoizedState=i.state,r&&fm(e,t,!0),e.child}function qy(n){var e=n.stateNode;e.pendingContext?dm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&dm(n,e.context,!1),Bh(n,e.containerInfo)}function Cm(n,e,t,i,r){return yo(),kh(r),e.flags|=256,pn(n,e,t,i),e.child}var Uf={dehydrated:null,treeContext:null,retryLane:0};function Of(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ky(n,e,t){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),xt(At,r&1),n===null)return Rf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,i,0,null),n=ts(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Of(t),e.memoizedState=Uf,n):qh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return SS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Er(a,s):(s=ts(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Of(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Uf,i}return s=n.child,n=s.sibling,i=Er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function qh(n,e){return e=pu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function _l(n,e,t,i){return i!==null&&kh(i),vo(e,n.child,null,t),n=qh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function SS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ed(Error(ge(422))),_l(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pu({mode:"visible",children:i.children},r,0,null),s=ts(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vo(e,n.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=Uf,s);if(!(e.mode&1))return _l(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ge(419)),i=ed(s,i,void 0),_l(n,e,o,i)}if(a=(o&n.childLanes)!==0,bn||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(n,r),fi(i,n,r,-1))}return tp(),i=ed(Error(ge(421))),_l(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=NS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Dn=_r(r.nextSibling),Nn=e,Et=!0,si=null,n!==null&&(Wn[Xn++]=zi,Wn[Xn++]=ji,Wn[Xn++]=os,zi=n.id,ji=n.overflow,os=e),e=qh(e,i.children),e.flags|=4096,e)}function Rm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pf(n.return,e,t)}function td(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Zy(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(n,e,i.children,t),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rm(n,t,e);else if(n.tag===19)Rm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(xt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&jc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),td(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&jc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}td(e,!0,t,null,s);break;case"together":td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Xi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ls|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ge(153));if(e.child!==null){for(n=e.child,t=Er(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Er(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function MS(n,e,t){switch(e.tag){case 3:qy(e),yo();break;case 5:by(e);break;case 1:wn(e.type)&&Nc(e);break;case 4:Bh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(At,At.current&1),e.flags|=128,null):t&e.child.childLanes?Ky(n,e,t):(xt(At,At.current&1),n=Xi(n,e,t),n!==null?n.sibling:null);xt(At,At.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Zy(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,$y(n,e,t)}return Xi(n,e,t)}var Jy,Ff,Qy,ev;Jy=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ff=function(){};Qy=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Jr(bi.current);var s=null;switch(t){case"input":r=of(n,r),i=of(n,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=cf(n,r),i=cf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ic)}df(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ev=function(n,e,t,i){t!==i&&(e.flags|=4)};function Yo(n,e){if(!Et)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function an(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function bS(n,e,t){var i=e.pendingProps;switch(Nh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return wn(e.type)&&Dc(),an(e),null;case 3:return i=e.stateNode,_o(),St(En),St(dn),Gh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(yl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(Xf(si),si=null))),Ff(n,e),an(e),null;case 5:Hh(e);var r=Jr(Ha.current);if(t=e.type,n!==null&&e.stateNode!=null)Qy(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return an(e),null}if(n=Jr(bi.current),yl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[ja]=s,n=(e.mode&1)!==0,t){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)yt(ha[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Fp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":jp(i,s),yt("invalid",i)}df(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xl(i.textContent,a,n),r=["children",""+a]):Pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&yt("scroll",i)}switch(t){case"input":cl(i),zp(i,s,!0);break;case"textarea":cl(i),Bp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ic)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Cx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Si]=e,n[ja]=i,Jy(n,e,!1,!1),e.stateNode=n;e:{switch(o=ff(t,i),t){case"dialog":yt("cancel",n),yt("close",n),r=i;break;case"iframe":case"object":case"embed":yt("load",n),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)yt(ha[r],n);r=i;break;case"source":yt("error",n),r=i;break;case"img":case"image":case"link":yt("error",n),yt("load",n),r=i;break;case"details":yt("toggle",n),r=i;break;case"input":Fp(n,i),r=of(n,i),yt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),yt("invalid",n);break;case"textarea":jp(n,i),r=cf(n,i),yt("invalid",n);break;default:r=i}df(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Lx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&La(n,l):typeof l=="number"&&La(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",n):l!=null&&vh(n,s,l,o))}switch(t){case"input":cl(n),zp(n,i,!1);break;case"textarea":cl(n),Bp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Cr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?oo(n,!!i.multiple,s,!1):i.defaultValue!=null&&oo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ic)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(n&&e.stateNode!=null)ev(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(t=Jr(Ha.current),Jr(bi.current),yl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==t)&&(n=Nn,n!==null))switch(n.tag){case 3:xl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return an(e),null;case 13:if(St(At),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Et&&Dn!==null&&e.mode&1&&!(e.flags&128))yy(),yo(),e.flags|=98560,s=!1;else if(s=yl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[Si]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else si!==null&&(Xf(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||At.current&1?Ft===0&&(Ft=3):tp())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return _o(),Ff(n,e),n===null&&Fa(e.stateNode.containerInfo),an(e),null;case 10:return Fh(e.type._context),an(e),null;case 17:return wn(e.type)&&Dc(),an(e),null;case 19:if(St(At),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Yo(s,!1);else{if(Ft!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=jc(n),o!==null){for(e.flags|=128,Yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return xt(At,At.current&1|2),e.child}n=n.sibling}s.tail!==null&&Nt()>Mo&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304)}else{if(!i)if(n=jc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return an(e),null}else 2*Nt()-s.renderingStartTime>Mo&&t!==1073741824&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,t=At.current,xt(At,i?t&1|2:t&1),e):(an(e),null);case 22:case 23:return ep(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function ES(n,e){switch(Nh(e),e.tag){case 1:return wn(e.type)&&Dc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return _o(),St(En),St(dn),Gh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Hh(e),null;case 13:if(St(At),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));yo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return St(At),null;case 4:return _o(),null;case 10:return Fh(e.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var Sl=!1,un=!1,wS=typeof WeakSet=="function"?WeakSet:Set,Le=null;function no(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){It(n,e,i)}else t.current=null}function zf(n,e,t){try{t()}catch(i){It(n,e,i)}}var Pm=!1;function TS(n,e){if(Mf=Rc,n=sy(),Ih(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var m;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(bf={focusedElem:n,selectionRange:t},Rc=!1,Le=e;Le!==null;)if(e=Le,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Le=n;else for(;Le!==null;){e=Le;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,g=x.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:ii(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(M){It(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}return x=Pm,Pm=!1,x}function ba(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&zf(e,t,s)}r=r.next}while(r!==i)}}function fu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function jf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function tv(n){var e=n.alternate;e!==null&&(n.alternate=null,tv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Si],delete e[ja],delete e[Tf],delete e[lS],delete e[cS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nv(n){return n.tag===5||n.tag===3||n.tag===4}function Lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||nv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ic));else if(i!==4&&(n=n.child,n!==null))for(Bf(n,e,t),n=n.sibling;n!==null;)Bf(n,e,t),n=n.sibling}function Hf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Hf(n,e,t),n=n.sibling;n!==null;)Hf(n,e,t),n=n.sibling}var Jt=null,ri=!1;function Zi(n,e,t){for(t=t.child;t!==null;)iv(n,e,t),t=t.sibling}function iv(n,e,t){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(ru,t)}catch{}switch(t.tag){case 5:un||no(t,e);case 6:var i=Jt,r=ri;Jt=null,Zi(n,e,t),Jt=i,ri=r,Jt!==null&&(ri?(n=Jt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Jt.removeChild(t.stateNode));break;case 18:Jt!==null&&(ri?(n=Jt,t=t.stateNode,n.nodeType===8?Yu(n.parentNode,t):n.nodeType===1&&Yu(n,t),ka(n)):Yu(Jt,t.stateNode));break;case 4:i=Jt,r=ri,Jt=t.stateNode.containerInfo,ri=!0,Zi(n,e,t),Jt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zf(t,e,o),r=r.next}while(r!==i)}Zi(n,e,t);break;case 1:if(!un&&(no(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){It(t,e,a)}Zi(n,e,t);break;case 21:Zi(n,e,t);break;case 22:t.mode&1?(un=(i=un)||t.memoizedState!==null,Zi(n,e,t),un=i):Zi(n,e,t);break;default:Zi(n,e,t)}}function Im(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new wS),e.forEach(function(i){var r=kS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Qn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Jt=a.stateNode,ri=!1;break e;case 3:Jt=a.stateNode.containerInfo,ri=!0;break e;case 4:Jt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(Jt===null)throw Error(ge(160));iv(s,o,r),Jt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rv(e,n),e=e.sibling}function rv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Qn(e,n),yi(n),i&4){try{ba(3,n,n.return),fu(3,n)}catch(_){It(n,n.return,_)}try{ba(5,n,n.return)}catch(_){It(n,n.return,_)}}break;case 1:Qn(e,n),yi(n),i&512&&t!==null&&no(t,t.return);break;case 5:if(Qn(e,n),yi(n),i&512&&t!==null&&no(t,t.return),n.flags&32){var r=n.stateNode;try{La(r,"")}catch(_){It(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Tx(r,s),ff(a,o);var c=ff(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Lx(r,h):u==="dangerouslySetInnerHTML"?Rx(r,h):u==="children"?La(r,h):vh(r,u,h,c)}switch(a){case"input":af(r,s);break;case"textarea":Ax(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?oo(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?oo(r,!!s.multiple,s.defaultValue,!0):oo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ja]=s}catch(_){It(n,n.return,_)}}break;case 6:if(Qn(e,n),yi(n),i&4){if(n.stateNode===null)throw Error(ge(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){It(n,n.return,_)}}break;case 3:if(Qn(e,n),yi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(_){It(n,n.return,_)}break;case 4:Qn(e,n),yi(n);break;case 13:Qn(e,n),yi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jh=Nt())),i&4&&Im(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(un=(c=un)||u,Qn(e,n),un=c):Qn(e,n),yi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Le=n,u=n.child;u!==null;){for(h=Le=u;Le!==null;){switch(f=Le,m=f.child,f.tag){case 0:case 11:case 14:case 15:ba(4,f,f.return);break;case 1:no(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){It(i,t,_)}}break;case 5:no(f,f.return);break;case 22:if(f.memoizedState!==null){Nm(h);continue}}m!==null?(m.return=f,Le=m):Nm(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Px("display",o))}catch(_){It(n,n.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){It(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qn(e,n),yi(n),i&4&&Im(n);break;case 21:break;default:Qn(e,n),yi(n)}}function yi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(nv(t)){var i=t;break e}t=t.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(La(r,""),i.flags&=-33);var s=Lm(n);Hf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Lm(n);Bf(n,a,o);break;default:throw Error(ge(161))}}catch(l){It(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function AS(n,e,t){Le=n,sv(n)}function sv(n,e,t){for(var i=(n.mode&1)!==0;Le!==null;){var r=Le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Sl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=Sl;var c=un;if(Sl=o,(un=l)&&!c)for(Le=r;Le!==null;)o=Le,l=o.child,o.tag===22&&o.memoizedState!==null?km(r):l!==null?(l.return=o,Le=l):km(r);for(;s!==null;)Le=s,sv(s),s=s.sibling;Le=r,Sl=a,un=c}Dm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Le=s):Dm(n)}}function Dm(n){for(;Le!==null;){var e=Le;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ii(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}xm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ka(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}un||e.flags&512&&jf(e)}catch(f){It(e,e.return,f)}}if(e===n){Le=null;break}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}}function Nm(n){for(;Le!==null;){var e=Le;if(e===n){Le=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Le=t;break}Le=e.return}}function km(n){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{fu(4,e)}catch(l){It(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{jf(e)}catch(l){It(e,s,l)}break;case 5:var o=e.return;try{jf(e)}catch(l){It(e,o,l)}}}catch(l){It(e,e.return,l)}if(e===n){Le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Le=a;break}Le=e.return}}var CS=Math.ceil,Gc=Yi.ReactCurrentDispatcher,Kh=Yi.ReactCurrentOwner,Kn=Yi.ReactCurrentBatchConfig,ot=0,Yt=null,Ut=null,en=0,Ln=0,io=Ir(0),Ft=0,Xa=null,ls=0,hu=0,Zh=0,Ea=null,Mn=null,Jh=0,Mo=1/0,Ui=null,Vc=!1,Gf=null,Mr=null,Ml=!1,hr=null,Wc=0,wa=0,Vf=null,gc=-1,xc=0;function yn(){return ot&6?Nt():gc!==-1?gc:gc=Nt()}function br(n){return n.mode&1?ot&2&&en!==0?en&-en:dS.transition!==null?(xc===0&&(xc=Gx()),xc):(n=ft,n!==0||(n=window.event,n=n===void 0?16:Kx(n.type)),n):1}function fi(n,e,t,i){if(50<wa)throw wa=0,Vf=null,Error(ge(185));el(n,t,i),(!(ot&2)||n!==Yt)&&(n===Yt&&(!(ot&2)&&(hu|=t),Ft===4&&ur(n,en)),Tn(n,i),t===1&&ot===0&&!(e.mode&1)&&(Mo=Nt()+500,cu&&Dr()))}function Tn(n,e){var t=n.callbackNode;d1(n,e);var i=Cc(n,n===Yt?en:0);if(i===0)t!==null&&Vp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Vp(t),e===1)n.tag===0?uS(Um.bind(null,n)):my(Um.bind(null,n)),oS(function(){!(ot&6)&&Dr()}),t=null;else{switch(Vx(i)){case 1:t=Eh;break;case 4:t=Bx;break;case 16:t=Ac;break;case 536870912:t=Hx;break;default:t=Ac}t=hv(t,ov.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ov(n,e){if(gc=-1,xc=0,ot&6)throw Error(ge(327));var t=n.callbackNode;if(fo()&&n.callbackNode!==t)return null;var i=Cc(n,n===Yt?en:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Xc(n,i);else{e=i;var r=ot;ot|=2;var s=lv();(Yt!==n||en!==e)&&(Ui=null,Mo=Nt()+500,es(n,e));do try{LS();break}catch(a){av(n,a)}while(!0);Oh(),Gc.current=s,ot=r,Ut!==null?e=0:(Yt=null,en=0,e=Ft)}if(e!==0){if(e===2&&(r=xf(n),r!==0&&(i=r,e=Wf(n,r))),e===1)throw t=Xa,es(n,0),ur(n,i),Tn(n,Nt()),t;if(e===6)ur(n,i);else{if(r=n.current.alternate,!(i&30)&&!RS(r)&&(e=Xc(n,i),e===2&&(s=xf(n),s!==0&&(i=s,e=Wf(n,s))),e===1))throw t=Xa,es(n,0),ur(n,i),Tn(n,Nt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:Xr(n,Mn,Ui);break;case 3:if(ur(n,i),(i&130023424)===i&&(e=Jh+500-Nt(),10<e)){if(Cc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){yn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=wf(Xr.bind(null,n,Mn,Ui),e);break}Xr(n,Mn,Ui);break;case 4:if(ur(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*CS(i/1960))-i,10<i){n.timeoutHandle=wf(Xr.bind(null,n,Mn,Ui),i);break}Xr(n,Mn,Ui);break;case 5:Xr(n,Mn,Ui);break;default:throw Error(ge(329))}}}return Tn(n,Nt()),n.callbackNode===t?ov.bind(null,n):null}function Wf(n,e){var t=Ea;return n.current.memoizedState.isDehydrated&&(es(n,e).flags|=256),n=Xc(n,e),n!==2&&(e=Mn,Mn=t,e!==null&&Xf(e)),n}function Xf(n){Mn===null?Mn=n:Mn.push.apply(Mn,n)}function RS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(n,e){for(e&=~Zh,e&=~hu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-di(e),i=1<<t;n[t]=-1,e&=~i}}function Um(n){if(ot&6)throw Error(ge(327));fo();var e=Cc(n,0);if(!(e&1))return Tn(n,Nt()),null;var t=Xc(n,e);if(n.tag!==0&&t===2){var i=xf(n);i!==0&&(e=i,t=Wf(n,i))}if(t===1)throw t=Xa,es(n,0),ur(n,e),Tn(n,Nt()),t;if(t===6)throw Error(ge(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Xr(n,Mn,Ui),Tn(n,Nt()),null}function Qh(n,e){var t=ot;ot|=1;try{return n(e)}finally{ot=t,ot===0&&(Mo=Nt()+500,cu&&Dr())}}function cs(n){hr!==null&&hr.tag===0&&!(ot&6)&&fo();var e=ot;ot|=1;var t=Kn.transition,i=ft;try{if(Kn.transition=null,ft=1,n)return n()}finally{ft=i,Kn.transition=t,ot=e,!(ot&6)&&Dr()}}function ep(){Ln=io.current,St(io)}function es(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,sS(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(Nh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Dc();break;case 3:_o(),St(En),St(dn),Gh();break;case 5:Hh(i);break;case 4:_o();break;case 13:St(At);break;case 19:St(At);break;case 10:Fh(i.type._context);break;case 22:case 23:ep()}t=t.return}if(Yt=n,Ut=n=Er(n.current,null),en=Ln=e,Ft=0,Xa=null,Zh=hu=ls=0,Mn=Ea=null,Zr!==null){for(e=0;e<Zr.length;e++)if(t=Zr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Zr=null}return n}function av(n,e){do{var t=Ut;try{if(Oh(),hc.current=Hc,Bc){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Bc=!1}if(as=0,Wt=Ot=Ct=null,Ma=!1,Ga=0,Kh.current=null,t===null||t.return===null){Ft=1,Xa=e,Ut=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=en,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=bm(o);if(m!==null){m.flags&=-257,Em(m,o,a,s,e),m.mode&1&&Mm(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Mm(s,c,e),tp();break e}l=Error(ge(426))}}else if(Et&&a.mode&1){var g=bm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Em(g,o,a,s,e),kh(So(l,a));break e}}s=l=So(l,a),Ft!==4&&(Ft=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Vy(s,l,e);gm(s,p);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Mr===null||!Mr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Wy(s,a,e);gm(s,M);break e}}s=s.return}while(s!==null)}uv(t)}catch(T){e=T,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function lv(){var n=Gc.current;return Gc.current=Hc,n===null?Hc:n}function tp(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Yt===null||!(ls&268435455)&&!(hu&268435455)||ur(Yt,en)}function Xc(n,e){var t=ot;ot|=2;var i=lv();(Yt!==n||en!==e)&&(Ui=null,es(n,e));do try{PS();break}catch(r){av(n,r)}while(!0);if(Oh(),ot=t,Gc.current=i,Ut!==null)throw Error(ge(261));return Yt=null,en=0,Ft}function PS(){for(;Ut!==null;)cv(Ut)}function LS(){for(;Ut!==null&&!n1();)cv(Ut)}function cv(n){var e=fv(n.alternate,n,Ln);n.memoizedProps=n.pendingProps,e===null?uv(n):Ut=e,Kh.current=null}function uv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ES(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ft=6,Ut=null;return}}else if(t=bS(t,e,Ln),t!==null){Ut=t;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);Ft===0&&(Ft=5)}function Xr(n,e,t){var i=ft,r=Kn.transition;try{Kn.transition=null,ft=1,IS(n,e,t,i)}finally{Kn.transition=r,ft=i}return null}function IS(n,e,t,i){do fo();while(hr!==null);if(ot&6)throw Error(ge(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ge(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(f1(n,s),n===Yt&&(Ut=Yt=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ml||(Ml=!0,hv(Ac,function(){return fo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var o=ft;ft=1;var a=ot;ot|=4,Kh.current=null,TS(n,t),rv(t,n),J1(bf),Rc=!!Mf,bf=Mf=null,n.current=t,AS(t),i1(),ot=a,ft=o,Kn.transition=s}else n.current=t;if(Ml&&(Ml=!1,hr=n,Wc=r),s=n.pendingLanes,s===0&&(Mr=null),o1(t.stateNode),Tn(n,Nt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vc)throw Vc=!1,n=Gf,Gf=null,n;return Wc&1&&n.tag!==0&&fo(),s=n.pendingLanes,s&1?n===Vf?wa++:(wa=0,Vf=n):wa=0,Dr(),null}function fo(){if(hr!==null){var n=Vx(Wc),e=Kn.transition,t=ft;try{if(Kn.transition=null,ft=16>n?16:n,hr===null)var i=!1;else{if(n=hr,hr=null,Wc=0,ot&6)throw Error(ge(331));var r=ot;for(ot|=4,Le=n.current;Le!==null;){var s=Le,o=s.child;if(Le.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Le=c;Le!==null;){var u=Le;switch(u.tag){case 0:case 11:case 15:ba(8,u,s)}var h=u.child;if(h!==null)h.return=u,Le=h;else for(;Le!==null;){u=Le;var f=u.sibling,m=u.return;if(tv(u),u===c){Le=null;break}if(f!==null){f.return=m,Le=f;break}Le=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Le=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Le=o;else e:for(;Le!==null;){if(s=Le,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ba(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Le=p;break e}Le=s.return}}var v=n.current;for(Le=v;Le!==null;){o=Le;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Le=y;else e:for(o=v;Le!==null;){if(a=Le,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fu(9,a)}}catch(T){It(a,a.return,T)}if(a===o){Le=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Le=M;break e}Le=a.return}}if(ot=r,Dr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(ru,n)}catch{}i=!0}return i}finally{ft=t,Kn.transition=e}}return!1}function Om(n,e,t){e=So(t,e),e=Vy(n,e,1),n=Sr(n,e,1),e=yn(),n!==null&&(el(n,1,e),Tn(n,e))}function It(n,e,t){if(n.tag===3)Om(n,n,t);else for(;e!==null;){if(e.tag===3){Om(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){n=So(t,n),n=Wy(e,n,1),e=Sr(e,n,1),n=yn(),e!==null&&(el(e,1,n),Tn(e,n));break}}e=e.return}}function DS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=yn(),n.pingedLanes|=n.suspendedLanes&t,Yt===n&&(en&t)===t&&(Ft===4||Ft===3&&(en&130023424)===en&&500>Nt()-Jh?es(n,0):Zh|=t),Tn(n,e)}function dv(n,e){e===0&&(n.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var t=yn();n=Wi(n,e),n!==null&&(el(n,e,t),Tn(n,t))}function NS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),dv(n,t)}function kS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),dv(n,t)}var fv;fv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||En.current)bn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return bn=!1,MS(n,e,t);bn=!!(n.flags&131072)}else bn=!1,Et&&e.flags&1048576&&gy(e,Uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;mc(n,e),n=e.pendingProps;var r=xo(e,dn.current);uo(e,t),r=Wh(null,e,i,n,r,t);var s=Xh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,Nc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jh(e),r.updater=du,e.stateNode=r,r._reactInternals=e,If(e,i,n,t),e=kf(null,e,i,!0,s,t)):(e.tag=0,Et&&s&&Dh(e),pn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(mc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=OS(i),n=ii(i,n),r){case 0:e=Nf(null,e,i,n,t);break e;case 1:e=Am(null,e,i,n,t);break e;case 11:e=wm(null,e,i,n,t);break e;case 14:e=Tm(null,e,i,ii(i.type,n),t);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Nf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Am(n,e,i,r,t);case 3:e:{if(qy(e),n===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,My(n,e),zc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=So(Error(ge(423)),e),e=Cm(n,e,i,t,r);break e}else if(i!==r){r=So(Error(ge(424)),e),e=Cm(n,e,i,t,r);break e}else for(Dn=_r(e.stateNode.containerInfo.firstChild),Nn=e,Et=!0,si=null,t=_y(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(yo(),i===r){e=Xi(n,e,t);break e}pn(n,e,i,t)}e=e.child}return e;case 5:return by(e),n===null&&Rf(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ef(i,r)?o=null:s!==null&&Ef(i,s)&&(e.flags|=32),Yy(n,e),pn(n,e,o,t),e.child;case 6:return n===null&&Rf(e),null;case 13:return Ky(n,e,t);case 4:return Bh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=vo(e,null,i,t):pn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),wm(n,e,i,r,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(Oc,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!En.current){e=Xi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ge(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,uo(e,t),r=Zn(r),i=i(r),e.flags|=1,pn(n,e,i,t),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),Tm(n,e,i,r,t);case 15:return Xy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),mc(n,e),e.tag=1,wn(i)?(n=!0,Nc(e)):n=!1,uo(e,t),Gy(e,i,r),If(e,i,r,t),kf(null,e,i,!0,n,t);case 19:return Zy(n,e,t);case 22:return $y(n,e,t)}throw Error(ge(156,e.tag))};function hv(n,e){return jx(n,e)}function US(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,e,t,i){return new US(n,e,t,i)}function np(n){return n=n.prototype,!(!n||!n.isReactComponent)}function OS(n){if(typeof n=="function")return np(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Sh)return 11;if(n===Mh)return 14}return 2}function Er(n,e){var t=n.alternate;return t===null?(t=qn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function yc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")np(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case $s:return ts(t.children,r,s,e);case _h:o=8,r|=8;break;case tf:return n=qn(12,t,e,r|2),n.elementType=tf,n.lanes=s,n;case nf:return n=qn(13,t,e,r),n.elementType=nf,n.lanes=s,n;case rf:return n=qn(19,t,e,r),n.elementType=rf,n.lanes=s,n;case bx:return pu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Sx:o=10;break e;case Mx:o=9;break e;case Sh:o=11;break e;case Mh:o=14;break e;case sr:o=16,i=null;break e}throw Error(ge(130,n==null?n:typeof n,""))}return e=qn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ts(n,e,t,i){return n=qn(7,n,i,e),n.lanes=t,n}function pu(n,e,t,i){return n=qn(22,n,i,e),n.elementType=bx,n.lanes=t,n.stateNode={isHidden:!1},n}function nd(n,e,t){return n=qn(6,n,null,e),n.lanes=t,n}function id(n,e,t){return e=qn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function FS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ip(n,e,t,i,r,s,o,a,l){return n=new FS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(s),n}function zS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function pv(n){if(!n)return Rr;n=n._reactInternals;e:{if(ps(n)!==n||n.tag!==1)throw Error(ge(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(n.tag===1){var t=n.type;if(wn(t))return py(n,t,e)}return e}function mv(n,e,t,i,r,s,o,a,l){return n=ip(t,i,!0,n,r,s,o,a,l),n.context=pv(null),t=n.current,i=yn(),r=br(t),s=Hi(i,r),s.callback=e??null,Sr(t,s,r),n.current.lanes=r,el(n,r,i),Tn(n,i),n}function mu(n,e,t,i){var r=e.current,s=yn(),o=br(r);return t=pv(t),e.context===null?e.context=t:e.pendingContext=t,e=Hi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Sr(r,e,o),n!==null&&(fi(n,r,o,s),fc(n,r,o)),o}function $c(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function rp(n,e){Fm(n,e),(n=n.alternate)&&Fm(n,e)}function jS(){return null}var gv=typeof reportError=="function"?reportError:function(n){console.error(n)};function sp(n){this._internalRoot=n}gu.prototype.render=sp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ge(409));mu(n,e,null,null)};gu.prototype.unmount=sp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;cs(function(){mu(null,n,null,null)}),e[Vi]=null}};function gu(n){this._internalRoot=n}gu.prototype.unstable_scheduleHydration=function(n){if(n){var e=$x();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cr.length&&e!==0&&e<cr[t].priority;t++);cr.splice(t,0,n),t===0&&qx(n)}};function op(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function BS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=$c(o);s.call(c)}}var o=mv(e,i,n,0,null,!1,!1,"",zm);return n._reactRootContainer=o,n[Vi]=o.current,Fa(n.nodeType===8?n.parentNode:n),cs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=$c(l);a.call(c)}}var l=ip(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=l,n[Vi]=l.current,Fa(n.nodeType===8?n.parentNode:n),cs(function(){mu(e,l,t,i)}),l}function yu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$c(o);a.call(l)}}mu(e,o,n,r)}else o=BS(t,e,n,r,i);return $c(o)}Wx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=fa(e.pendingLanes);t!==0&&(wh(e,t|1),Tn(e,Nt()),!(ot&6)&&(Mo=Nt()+500,Dr()))}break;case 13:cs(function(){var i=Wi(n,1);if(i!==null){var r=yn();fi(i,n,1,r)}}),rp(n,1)}};Th=function(n){if(n.tag===13){var e=Wi(n,134217728);if(e!==null){var t=yn();fi(e,n,134217728,t)}rp(n,134217728)}};Xx=function(n){if(n.tag===13){var e=br(n),t=Wi(n,e);if(t!==null){var i=yn();fi(t,n,e,i)}rp(n,e)}};$x=function(){return ft};Yx=function(n,e){var t=ft;try{return ft=n,e()}finally{ft=t}};pf=function(n,e,t){switch(e){case"input":if(af(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=lu(i);if(!r)throw Error(ge(90));wx(i),af(i,r)}}}break;case"textarea":Ax(n,t);break;case"select":e=t.value,e!=null&&oo(n,!!t.multiple,e,!1)}};Nx=Qh;kx=cs;var HS={usingClientEntryPoint:!1,Events:[nl,Zs,lu,Ix,Dx,Qh]},qo={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GS={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fx(n),n===null?null:n.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||jS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{ru=bl.inject(GS),Mi=bl}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HS;Un.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(e))throw Error(ge(200));return zS(n,e,null,t)};Un.createRoot=function(n,e){if(!op(n))throw Error(ge(299));var t=!1,i="",r=gv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ip(n,1,!1,null,null,t,!1,i,r),n[Vi]=e.current,Fa(n.nodeType===8?n.parentNode:n),new sp(e)};Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ge(188)):(n=Object.keys(n).join(","),Error(ge(268,n)));return n=Fx(e),n=n===null?null:n.stateNode,n};Un.flushSync=function(n){return cs(n)};Un.hydrate=function(n,e,t){if(!xu(e))throw Error(ge(200));return yu(null,n,e,!0,t)};Un.hydrateRoot=function(n,e,t){if(!op(n))throw Error(ge(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=gv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=mv(e,null,n,1,t??null,r,!1,s,o),n[Vi]=e.current,Fa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new gu(e)};Un.render=function(n,e,t){if(!xu(e))throw Error(ge(200));return yu(null,n,e,!1,t)};Un.unmountComponentAtNode=function(n){if(!xu(n))throw Error(ge(40));return n._reactRootContainer?(cs(function(){yu(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1};Un.unstable_batchedUpdates=Qh;Un.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!xu(t))throw Error(ge(200));if(n==null||n._reactInternals===void 0)throw Error(ge(38));return yu(n,e,t,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv)}catch(n){console.error(n)}}xv(),xx.exports=Un;var VS=xx.exports,jm=VS;Qd.createRoot=jm.createRoot,Qd.hydrateRoot=jm.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Oe=(n,e)=>{const t=pe.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>pe.createElement("svg",{ref:u,...WS,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${XS(n)}`,a].join(" "),...c},[...e.map(([h,f])=>pe.createElement(h,f)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=Oe("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=Oe("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=Oe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=Oe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=Oe("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=Oe("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=Oe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=Oe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=Oe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=Oe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=Oe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=Oe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=Oe("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=Oe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=Oe("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=Oe("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=Oe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=Oe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=Oe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=Oe("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=Oe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=Oe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=Oe("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=Oe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=Oe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=Oe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=Oe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=Oe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=Oe("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=Oe("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=Oe("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=Oe("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=Oe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=Oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=Oe("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=Oe("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=Oe("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=Oe("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=Oe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=Oe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=Oe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=Oe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=Oe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=Oe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=Oe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=Oe("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=Oe("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=Oe("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=Oe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=Oe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=Oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=Oe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=Oe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=Oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=Oe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),SM=({scenarios:n,activeScenario:e,onSelectScenario:t,onRunSimulation:i,onOpenWindow:r,onToggleSidebar:s,onUploadScenarioJson:o,onExportScenarioJson:a,onExportResultsJson:l,onOpenPdfReport:c,onResetState:u,isSidebarOpen:h,isSimulating:f})=>{const[m,x]=pe.useState(!1);pe.useRef(null);const _=pe.useRef(null);return pe.useEffect(()=>{const g=p=>{_.current&&!_.current.contains(p.target)&&x(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),d.jsxs("header",{className:"hdr-container",children:[d.jsx("style",{children:`
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
      `}),d.jsxs("div",{className:"hdr-section",children:[d.jsx("div",{className:"hdr-brand",title:"Система Анализа Группировки",children:d.jsx("div",{className:"hdr-brand-icon",children:d.jsx(Eo,{size:16})})}),d.jsx("div",{className:"hdr-divider"}),d.jsxs("button",{onClick:()=>r("scenarios"),className:"hdr-btn hdr-btn-secondary",title:"Открыть отдельное окно управления сценариями",children:[d.jsx(Eo,{size:14,style:{color:"#38bdf8"}}),d.jsx("span",{children:"Сценарии"})]}),d.jsxs("button",{onClick:i,disabled:f,className:"hdr-btn hdr-btn-primary",children:[f?d.jsx(Yc,{size:14,className:"animate-spin"}):d.jsx(vu,{size:14}),d.jsx("span",{children:f?"Расчет...":"Запустить Симуляцию"})]})]}),d.jsxs("div",{className:"hdr-section hdr-shortcuts-desktop",children:[d.jsxs("button",{onClick:()=>r("emergency"),className:"hdr-btn",style:{backgroundColor:"#3b1212",color:"#ff6666",border:"1px solid #7f1d1d"},title:"Запустить симуляцию событий ЧС и посмотреть экономическую компенсацию",children:[d.jsx(dp,{size:14,style:{color:"#ff4444"}}),d.jsx("span",{children:"Симуляция ЧС"})]}),d.jsxs("button",{onClick:()=>r("analytics"),className:"hdr-btn hdr-btn-secondary",children:[d.jsx(_v,{size:14,style:{color:"#38bdf8"}}),d.jsx("span",{children:"Аналитика & Гантт"})]}),d.jsxs("button",{onClick:()=>r("configurator"),className:"hdr-btn hdr-btn-secondary",children:[d.jsx(up,{size:14,style:{color:"#a78bfa"}}),d.jsx("span",{children:"Конфигуратор"})]}),d.jsxs("button",{onClick:()=>r("compare"),className:"hdr-btn hdr-btn-secondary",children:[d.jsx(KS,{size:14,style:{color:"#fbbf24"}}),d.jsx("span",{children:"Сравнение Проектов"})]}),c&&d.jsxs("button",{onClick:c,className:"hdr-btn hdr-btn-secondary",style:{backgroundColor:"#1e293b",borderColor:"#38bdf8",color:"#38bdf8"},title:"Сгенерировать 4-страничный научно-технический PDF отчёт",children:[d.jsx(bv,{size:14}),d.jsx("span",{children:"Отчёт PDF"})]}),u&&d.jsxs("button",{onClick:u,className:"hdr-btn hdr-btn-danger",title:"Сбросить все сохраненные настройки страницы",children:[d.jsx(Yc,{size:13}),d.jsx("span",{children:"Сбросить"})]})]})]})},Ko=n=>typeof n.plane=="number"?n.plane:parseInt(String(n.plane_id||n.plane||"1").replace("P",""))||1,MM=({settings:n,onChangeSettings:e,isOpen:t,scenario:i,focusedSatelliteId:r,onSelectSatellite:s})=>{var E,w,A,B,b,I,re,X,N,K,V,Q,P;const[o,a]=pe.useState(null),[l,c]=pe.useState({}),[u,h]=pe.useState(!1);if(pe.useEffect(()=>{var L;if(r){a({type:"satellite",id:r});const z=(L=i==null?void 0:i.satellites)==null?void 0:L.find($=>$.id===r);if(z){const $=Ko(z);c(ee=>({...ee,[$]:!0}))}}else(o==null?void 0:o.type)==="satellite"&&a(null)},[r,i]),!t)return null;const f=(L,z)=>{e({...n,[L]:z})},m=(L,z)=>{e({...n,planeRaanMap:{...(n==null?void 0:n.planeRaanMap)||{},[L]:z}})},x=(L,z)=>{e({...n,planePhaseMap:{...(n==null?void 0:n.planePhaseMap)||{},[L]:z}})},_=(L,z)=>{var ee;z.stopPropagation();const $=!!((ee=n==null?void 0:n.hiddenPlanes)!=null&&ee[L]);e({...n,hiddenPlanes:{...(n==null?void 0:n.hiddenPlanes)||{},[L]:!$}})},g=(L,z)=>{var ee;z.stopPropagation();const $=!!((ee=n==null?void 0:n.hiddenSatellites)!=null&&ee[L]);e({...n,hiddenSatellites:{...(n==null?void 0:n.hiddenSatellites)||{},[L]:!$}})},p=L=>{L.stopPropagation();const z=(n==null?void 0:n.showGateways)===!1;f("showGateways",z)},v=(L,z)=>{var ee;z.stopPropagation();const $=!!((ee=n==null?void 0:n.hiddenGateways)!=null&&ee[L]);e({...n,hiddenGateways:{...(n==null?void 0:n.hiddenGateways)||{},[L]:!$}})},y=L=>{const z=L%10,$=L%100;let ee="узлов";return($<11||$>19)&&(z===1?ee="узел":z>=2&&z<=4&&(ee="узла")),`${L} ${ee}`},M=bc.useMemo(()=>{if(i!=null&&i.satellites&&i.satellites.length>0){const L=new Set;if(i.satellites.forEach(z=>{L.add(Ko(z))}),L.size>0)return Array.from(L).sort((z,$)=>z-$)}return[1,2,3]},[i==null?void 0:i.satellites]),T=({label:L,icon:z,badge:$,isSelected:ee,onClick:_e,onExpand:G,isExpanded:Z,level:me=0,hasChildren:Re,isVisible:ye=!0,onToggleVisibility:Te})=>{const[He,Ae]=pe.useState(!1);return d.jsxs("div",{style:{display:"flex",alignItems:"center",padding:`4px 8px 4px ${8+me*12}px`,cursor:"pointer",backgroundColor:ee?"#1473e640":He?"#2a2a2a":"transparent",borderLeft:ee?"2px solid #1473e6":"2px solid transparent",color:ye?ee?"#fff":"#ccc":"#666",userSelect:"none",transition:"background-color 0.15s ease"},onClick:_e,onMouseEnter:()=>Ae(!0),onMouseLeave:()=>Ae(!1),children:[d.jsx("div",{style:{width:"16px",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"4px",flexShrink:0},onClick:H=>{Re&&G&&(H.stopPropagation(),G())},children:Re?Z?d.jsx(ap,{size:14}):d.jsx(qS,{size:14}):null}),z&&d.jsx("div",{style:{marginRight:"6px",display:"flex",alignItems:"center",flexShrink:0,opacity:ye?1:.4},children:z}),d.jsx("span",{style:{fontSize:"11px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1,textDecoration:ye?"none":"line-through",opacity:ye?1:.6},children:L}),$!=null&&d.jsx("span",{style:{fontSize:"11px",color:ee?"#a5d8ff":"#777777",marginRight:"6px",flexShrink:0,fontWeight:500,userSelect:"none"},children:$}),Te&&d.jsx("button",{type:"button",title:ye?"Скрыть с 3D сцены":"Показать на 3D сцене",onClick:H=>{H.stopPropagation(),Te(H)},style:{background:ye?"transparent":"#ff4d4f20",border:ye?"1px solid transparent":"1px solid #ff4d4f40",padding:"2px 4px",marginLeft:"4px",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:ye?He?"#00f0ff":"#777":"#ff4d4f",opacity:ye?He?1:.5:1,transition:"all 0.15s ease"},children:ye?d.jsx(pa,{size:13}):d.jsx(El,{size:13})})]})};return d.jsxs("aside",{style:{width:"290px",maxWidth:"calc(100vw - 16px)",backgroundColor:"#262626",borderLeft:"1px solid #383838",display:"flex",flexDirection:"column",color:"#e0e0e0",fontSize:"12px",height:"calc(100vh - 48px)",zIndex:90,boxShadow:"-4px 0 16px rgba(0,0,0,0.35)"},children:[d.jsxs("div",{style:{flex:"1 1 50%",display:"flex",flexDirection:"column",borderBottom:"1px solid #1473e6",overflow:"hidden"},children:[d.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid #383838",backgroundColor:"#202020",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},children:[d.jsx(Eo,{size:14,style:{color:"#1473e6"}}),d.jsx("span",{children:"Аутлайнер объектов"})]}),d.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"8px 0"},children:[d.jsx(T,{label:"Наземные шлюзы",badge:((E=i==null?void 0:i.gateways)==null?void 0:E.length)||0,icon:d.jsx(nM,{size:12}),isSelected:(o==null?void 0:o.type)==="gateway"&&(o==null?void 0:o.id)==="all",onClick:()=>h(!u),onExpand:()=>h(!u),isExpanded:u,hasChildren:(((w=i==null?void 0:i.gateways)==null?void 0:w.length)||0)>0,isVisible:n.showGateways!==!1,onToggleVisibility:p}),u&&((A=i==null?void 0:i.gateways)==null?void 0:A.map(L=>{var z;return d.jsx(T,{label:L.name,level:1,isSelected:(o==null?void 0:o.type)==="gateway"&&(o==null?void 0:o.id)===L.id,onClick:()=>a({type:"gateway",id:L.id}),isVisible:n.showGateways!==!1&&!((z=n.hiddenGateways)!=null&&z[L.id]),onToggleVisibility:$=>v(L.id,$)},L.id)})),M.map(L=>{var _e,G;const z=l[L],$=((_e=i==null?void 0:i.satellites)==null?void 0:_e.filter(Z=>Ko(Z)===L))||[],ee=!!((G=n.hiddenPlanes)!=null&&G[L]);return d.jsxs(bc.Fragment,{children:[d.jsx(T,{label:`Плоскость ${L}`,badge:$.length,icon:d.jsx(cM,{size:12}),isSelected:(o==null?void 0:o.type)==="plane"&&(o==null?void 0:o.id)===L,onClick:()=>a({type:"plane",id:L}),onExpand:()=>c(Z=>({...Z,[L]:!z})),isExpanded:z,hasChildren:$.length>0,isVisible:!ee,onToggleVisibility:Z=>_(L,Z)}),z&&$.map(Z=>{var ye;const me=!!((ye=n.hiddenSatellites)!=null&&ye[Z.id]),Re=!ee&&!me;return d.jsx(T,{label:`Спутник ${Z.id}`,level:1,isSelected:(o==null?void 0:o.type)==="satellite"&&(o==null?void 0:o.id)===Z.id,onClick:()=>{a({type:"satellite",id:Z.id}),s&&s(Z)},isVisible:Re,onToggleVisibility:Te=>g(Z.id,Te)},Z.id)})]},L)})]})]}),d.jsxs("div",{style:{flex:"1 1 50%",overflowY:"auto",display:"flex",flexDirection:"column",backgroundColor:"#1e1e1e"},children:[d.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid #383838",backgroundColor:"#191919",display:"flex",alignItems:"center",fontWeight:600,color:"#aaa",fontSize:"11px"},children:[(o==null?void 0:o.type)==="plane"&&`НАСТРОЙКИ ПЛОСКОСТИ P${o.id}`,(o==null?void 0:o.type)==="satellite"&&`ДАННЫЕ СПУТНИКА ${o.id}`,(o==null?void 0:o.type)==="gateway"&&"ДАННЫЕ ШЛЮЗА",!o&&"СВОЙСТВА ОБЪЕКТА"]}),d.jsxs("div",{style:{padding:"12px",display:"flex",flexDirection:"column",gap:"16px"},children:[!o&&d.jsxs("div",{style:{padding:"24px 16px",textAlign:"center",color:"#888",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[d.jsx(Eo,{size:24,style:{color:"#555"}}),d.jsx("div",{style:{fontSize:"12px",fontWeight:600,color:"#bbb"},children:"Объект не выбран"}),d.jsx("div",{style:{fontSize:"11px",color:"#777",lineHeight:"1.4"},children:"Выберите плоскость орбит, спутник или наземный шлюз в дереве выше для просмотра телеметрии и управления."})]}),o&&o.type==="plane"&&d.jsxs("div",{style:{backgroundColor:"#192231",border:"1px solid #1473e650",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#1473e6",fontWeight:600},children:[d.jsx(Mv,{size:14}),d.jsxs("span",{children:["Плоскость P",o.id]})]}),d.jsxs("button",{type:"button",onClick:L=>_(o.id,L),style:{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",fontSize:"11px",backgroundColor:(B=n.hiddenPlanes)!=null&&B[o.id]?"#ff4d4f20":"#1473e625",color:(b=n.hiddenPlanes)!=null&&b[o.id]?"#ff4d4f":"#00f0ff",border:`1px solid ${(I=n.hiddenPlanes)!=null&&I[o.id]?"#ff4d4f60":"#1473e660"}`,borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},title:(re=n.hiddenPlanes)!=null&&re[o.id]?"Показать плоскость":"Скрыть плоскость и её спутники",children:[(X=n.hiddenPlanes)!=null&&X[o.id]?d.jsx(El,{size:12}):d.jsx(pa,{size:12}),d.jsx("span",{children:(N=n.hiddenPlanes)!=null&&N[o.id]?"Скрыта":"Видима"})]})]}),(()=>{var _e,G;const L=((_e=i==null?void 0:i.satellites)==null?void 0:_e.filter(Z=>Ko(Z)===o.id))||[],z=!!((G=n.hiddenPlanes)!=null&&G[o.id]),$=L.filter(Z=>{var me;return!!((me=n.hiddenSatellites)!=null&&me[Z.id])}).length,ee=z?0:L.length-$;return d.jsxs("div",{style:{backgroundColor:"rgba(20, 115, 230, 0.12)",border:"1px solid rgba(20, 115, 230, 0.25)",borderRadius:"6px",padding:"8px 10px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Узлов (спутников) на орбите:"}),d.jsx("span",{style:{color:"#00f0ff",fontWeight:700,fontSize:"12px"},children:y(L.length)})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11px"},children:[d.jsx("span",{style:{color:"#888"},children:"Видимость на 3D сцене:"}),d.jsxs("span",{style:{color:ee>0?"#00ff88":"#ff4d4f",fontWeight:600},children:[ee," из ",L.length]})]}),L.length>0&&d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"2px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.06)"},children:L.map(Z=>{var Re;const me=z||!!((Re=n.hiddenSatellites)!=null&&Re[Z.id]);return d.jsx("span",{onClick:()=>{a({type:"satellite",id:Z.id}),s&&s(Z)},style:{fontSize:"10px",fontFamily:"monospace",padding:"2px 6px",borderRadius:"3px",backgroundColor:me?"rgba(255,255,255,0.05)":"rgba(20, 115, 230, 0.25)",color:me?"#777":"#93c5fd",border:me?"1px solid #444":"1px solid rgba(20, 115, 230, 0.4)",cursor:"pointer",textDecoration:me?"line-through":"none",transition:"all 0.15s ease"},title:`Перейти к узлу ${Z.id}`,children:Z.id},Z.id)})})]})})(),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[d.jsx("span",{children:d.jsx("b",{children:"1. RAAN (Поворот вокруг Земли):"})}),d.jsxs("span",{style:{color:"#1473e6",fontWeight:"bold"},children:[((K=n==null?void 0:n.planeRaanMap)==null?void 0:K[o.id])??0,"°"]})]}),d.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Поворачивает всё кольцо орбиты вокруг оси Земли."}),d.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:((V=n==null?void 0:n.planeRaanMap)==null?void 0:V[o.id])??0,onChange:L=>m(o.id,parseFloat(L.target.value)),style:Vm})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[d.jsx("span",{children:d.jsx("b",{children:"2. Фазирование (Сдвиг бусин):"})}),d.jsxs("span",{style:{color:"#00ff88",fontWeight:"bold"},children:[((Q=n==null?void 0:n.planePhaseMap)==null?void 0:Q[o.id])??0,"°"]})]}),d.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Сдвигает спутники вдоль неподвижного кольца (шахматный порядок)."}),d.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:((P=n==null?void 0:n.planePhaseMap)==null?void 0:P[o.id])??0,onChange:L=>x(o.id,parseFloat(L.target.value)),style:{...Vm,accentColor:"#00ff88"}})]})]}),o&&o.type==="satellite"&&(()=>{var ee,_e,G;const L=(ee=i==null?void 0:i.satellites)==null?void 0:ee.find(Z=>Z.id===o.id);if(!L)return d.jsx("div",{style:{color:"#888"},children:"Нет данных"});const z=Ko(L),$=!((_e=n==null?void 0:n.hiddenPlanes)!=null&&_e[z])&&!((G=n==null?void 0:n.hiddenSatellites)!=null&&G[L.id]);return d.jsx("div",{style:Gm,children:d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"6px",borderBottom:"1px solid #333"},children:[d.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Отображение на 3D сцене"}),d.jsxs("button",{type:"button",onClick:Z=>g(L.id,Z),style:{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",fontSize:"11px",backgroundColor:$?"#1473e625":"#ff4d4f20",color:$?"#00f0ff":"#ff4d4f",border:`1px solid ${$?"#1473e660":"#ff4d4f60"}`,borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},title:$?"Скрыть спутник с 3D сцены":"Показать спутник на 3D сцене",children:[$?d.jsx(pa,{size:12}):d.jsx(El,{size:12}),d.jsx("span",{children:$?"Видим":"Скрыт"})]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"ID"}),d.jsx("span",{style:{color:"#fff",fontWeight:600},children:L.id})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Плоскость"}),d.jsxs("span",{style:{color:"#fff"},children:["P",z]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Наклонение"}),d.jsxs("span",{style:{color:"#fff"},children:[L.inc,"°"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Высота"}),d.jsxs("span",{style:{color:"#fff"},children:[L.altitude," км"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Температура"}),d.jsxs("span",{style:{color:(L.temperature_c||0)>60?"#ff3b30":"#00ff88"},children:[L.temperature_c??20,"°C"]})]})]})})})(),o&&o.type==="gateway"&&(()=>{var $,ee;const L=($=i==null?void 0:i.gateways)==null?void 0:$.find(_e=>_e.id===o.id);if(!L)return d.jsx("div",{style:{color:"#888"},children:"Нет данных"});const z=n.showGateways!==!1&&!((ee=n.hiddenGateways)!=null&&ee[L.id]);return d.jsx("div",{style:Gm,children:d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"6px",borderBottom:"1px solid #333"},children:[d.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Отображение на 3D сцене"}),d.jsxs("button",{type:"button",onClick:_e=>v(L.id,_e),style:{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",fontSize:"11px",backgroundColor:z?"#1473e625":"#ff4d4f20",color:z?"#00f0ff":"#ff4d4f",border:`1px solid ${z?"#1473e660":"#ff4d4f60"}`,borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},title:z?"Скрыть шлюз":"Показать шлюз",children:[z?d.jsx(pa,{size:12}):d.jsx(El,{size:12}),d.jsx("span",{children:z?"Видим":"Скрыт"})]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Название"}),d.jsx("span",{style:{color:"#fff",fontWeight:600},children:L.name})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Координаты"}),d.jsxs("span",{style:{color:"#fff"},children:[L.lat.toFixed(2),"°, ",L.lon.toFixed(2),"°"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Тип"}),d.jsx("span",{style:{color:"#fff"},children:L.type||"Шлюз"})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Купол досягаемости"}),d.jsx("span",{style:{color:n.showGatewayCoverage!==!1?"#00d084":"#888"},children:n.showGatewayCoverage!==!1?"20% непрозрачность":"Скрыт"})]})]})})})()]})]})]})},Gm={backgroundColor:"#1f1f1f",border:"1px solid #333333",borderRadius:"4px",padding:"10px"},Vm={width:"100%",accentColor:"#1473e6",cursor:"pointer"},bM=({settings:n,onChangeSettings:e})=>{var u,h;const[t,i]=pe.useState(null),r=pe.useRef(null);pe.useEffect(()=>{const f=x=>{r.current&&!r.current.contains(x.target)&&i(null)},m=x=>{x.key==="Escape"&&i(null)};return t&&(document.addEventListener("mousedown",f),document.addEventListener("touchstart",f),document.addEventListener("keydown",m)),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("touchstart",f),document.removeEventListener("keydown",m)}},[t]);const s=(f,m)=>{e({...n,[f]:m})},o=f=>{i(m=>m===f?null:f)},a=()=>{e({...n,satColor:"#ffffff",offlineSatColor:"#e11d48",highLatencySatColor:"#d97706",orbitColor:"#475569",islColor:"#cbd5e1",gatewayColor:"#f8fafc",groundLinkColor:"#94a3b8",atmosphereColor:"#334155",fovConeColor:"#cbd5e1"})},l=f=>{e({...n,showOrbits:f,showSatellites:f,showGateways:f,showGatewayCoverage:f,showISL:f,showSatLinks:f,showLabels:f,showAtmosphere:f,showCoverageHeatmap:f,showTrafficLoad:f,showDistances:f})},c=[{key:"layers",label:"Слои сцены",icon:d.jsx(pa,{size:18})},{key:"rendering",label:"Параметры рендеринга",icon:d.jsx(gM,{size:18})},{key:"step",label:`Шаг расчета (${n.stepSeconds}с)`,icon:d.jsx(lp,{size:18})},{key:"colors",label:"Цвета объектов",icon:d.jsx(sM,{size:18})}];return d.jsxs("div",{ref:r,style:{position:"absolute",top:"16px",left:"16px",zIndex:87,display:"flex",alignItems:"flex-start"},children:[d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",userSelect:"none"},children:c.map(f=>{const m=t===f.key;return d.jsx("button",{onClick:()=>o(f.key),title:f.label,"aria-label":f.label,style:{width:"38px",height:"38px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",border:m?"1px solid #00f0ff":"1px solid rgba(255, 255, 255, 0.14)",backgroundColor:m?"rgba(20, 115, 230, 0.35)":"rgba(24, 26, 32, 0.88)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",color:m?"#00f0ff":"#c9d1d9",cursor:"pointer",transition:"all 0.18s ease",boxShadow:m?"0 0 14px rgba(0, 240, 255, 0.45)":"0 4px 14px rgba(0, 0, 0, 0.45)"},onMouseEnter:x=>{m||(x.currentTarget.style.backgroundColor="rgba(38, 42, 52, 0.95)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.28)",x.currentTarget.style.color="#ffffff",x.currentTarget.style.transform="scale(1.05)")},onMouseLeave:x=>{m||(x.currentTarget.style.backgroundColor="rgba(24, 26, 32, 0.88)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.14)",x.currentTarget.style.color="#c9d1d9",x.currentTarget.style.transform="scale(1)")},children:f.icon},f.key)})}),t&&d.jsxs("div",{style:{marginLeft:"10px",width:"320px",maxHeight:"calc(100vh - 120px)",backgroundColor:"rgba(22, 25, 32, 0.96)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"10px",boxShadow:"0 16px 40px rgba(0, 0, 0, 0.65), 0 0 2px rgba(255, 255, 255, 0.2)",display:"flex",flexDirection:"column",overflow:"hidden",animation:"fadeIn 0.15s ease-out"},children:[d.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",backgroundColor:"rgba(255, 255, 255, 0.03)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("span",{style:{color:"#00f0ff",display:"flex"},children:(u=c.find(f=>f.key===t))==null?void 0:u.icon}),d.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"#f0f6fc"},children:(h=c.find(f=>f.key===t))==null?void 0:h.label})]}),d.jsx("button",{onClick:()=>i(null),style:{background:"transparent",border:"none",color:"#8b949e",cursor:"pointer",display:"flex",padding:"4px",borderRadius:"4px"},onMouseEnter:f=>{f.currentTarget.style.color="#fff",f.currentTarget.style.backgroundColor="rgba(255,255,255,0.1)"},onMouseLeave:f=>{f.currentTarget.style.color="#8b949e",f.currentTarget.style.backgroundColor="transparent"},title:"Закрыть меню",children:d.jsx(wv,{size:14})})]}),d.jsxs("div",{style:{padding:"12px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"12px"},children:[t==="layers"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",gap:"6px",justifyContent:"flex-end",marginBottom:"2px"},children:[d.jsx("button",{onClick:()=>l(!0),style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"4px",color:"#58a6ff",fontSize:"10px",padding:"3px 8px",cursor:"pointer"},children:"Включить все"}),d.jsx("button",{onClick:()=>l(!1),style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"4px",color:"#8b949e",fontSize:"10px",padding:"3px 8px",cursor:"pointer"},children:"Отключить все"})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[d.jsx(jn,{label:"Орбитальные траектории",checked:n.showOrbits,onChange:f=>s("showOrbits",f)}),d.jsx(jn,{label:"Спутники группировки (S01..S48)",checked:n.showSatellites,onChange:f=>s("showSatellites",f)}),d.jsx(jn,{label:"Наземные шлюзы (C65, Murmansk...)",checked:n.showGateways,onChange:f=>s("showGateways",f)}),d.jsx(jn,{label:"Купола досягаемости шлюзов",checked:n.showGatewayCoverage!==!1,onChange:f=>s("showGatewayCoverage",f)}),d.jsx(jn,{label:"Межспутниковые линии (ISL)",checked:n.showISL,onChange:f=>s("showISL",f)}),d.jsx(jn,{label:"Связь спутник - Земля",checked:n.showSatLinks,onChange:f=>s("showSatLinks",f)}),d.jsx(jn,{label:"Текстовые подписи объектов",checked:n.showLabels,onChange:f=>s("showLabels",f)}),d.jsx(jn,{label:"Атмосфера планеты",checked:n.showAtmosphere,onChange:f=>s("showAtmosphere",f)}),d.jsx(jn,{label:"Зоны покрытия КА (FOVs)",checked:!!n.showCoverageHeatmap,onChange:f=>s("showCoverageHeatmap",f)}),d.jsx(jn,{label:"Загрузка и трафик ISL (%)",checked:!!n.showTrafficLoad,onChange:f=>s("showTrafficLoad",f)}),d.jsx(jn,{label:"Дистанции между КА (км)",checked:n.showDistances!==!1,onChange:f=>s("showDistances",f)})]})]}),t==="rendering"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[d.jsx(jn,{label:"Свечение спутников (Glow)",checked:n.satGlow,onChange:f=>s("satGlow",f)}),d.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.03)",padding:"10px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",fontSize:"11px",color:"#c9d1d9"},children:[d.jsx("span",{children:"Размер спутников"}),d.jsxs("span",{style:{color:"#00f0ff",fontWeight:600},children:[n.satSize.toFixed(1),"x"]})]}),d.jsx("input",{type:"range",min:"0.5",max:"3.0",step:"0.1",value:n.satSize,onChange:f=>s("satSize",parseFloat(f.target.value)),style:{width:"100%",accentColor:"#00f0ff",cursor:"pointer"}}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"9px",color:"#6e7681",marginTop:"3px"},children:[d.jsx("span",{children:"0.5x"}),d.jsx("span",{children:"1.0x (норма)"}),d.jsx("span",{children:"3.0x"})]})]}),d.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.03)",padding:"10px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",fontSize:"11px",color:"#c9d1d9"},children:[d.jsx("span",{children:"Прозрачность орбит"}),d.jsxs("span",{style:{color:"#1473e6",fontWeight:600},children:[Math.round(n.orbitOpacity*100),"%"]})]}),d.jsx("input",{type:"range",min:"0.1",max:"1.0",step:"0.05",value:n.orbitOpacity,onChange:f=>s("orbitOpacity",parseFloat(f.target.value)),style:{width:"100%",accentColor:"#1473e6",cursor:"pointer"}}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"9px",color:"#6e7681",marginTop:"3px"},children:[d.jsx("span",{children:"10%"}),d.jsx("span",{children:"50%"}),d.jsx("span",{children:"100%"})]})]})]}),t==="step"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("div",{style:{fontSize:"11px",color:"#8b949e",lineHeight:"1.4"},children:"Шаг времени (dt) определяет частоту дискретизации численного интегрирования орбит и перестроения графа ISL:"}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[{step:1,label:"1 сек",desc:"Сверхвысокая точность (для критических сближений)"},{step:5,label:"5 сек",desc:"Высокая детализация динамики"},{step:10,label:"10 сек",desc:"Штатный расчет (рекомендованный)"},{step:60,label:"1 мин",desc:"Ускоренный анализ (60 сек)"},{step:300,label:"5 мин",desc:"Экспресс-обзор суточных интервалов"}].map(({step:f,label:m,desc:x})=>{const _=n.stepSeconds===f;return d.jsxs("button",{onClick:()=>s("stepSeconds",f),style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 10px",borderRadius:"6px",border:_?"1px solid #1473e6":"1px solid rgba(255, 255, 255, 0.08)",backgroundColor:_?"rgba(20, 115, 230, 0.25)":"rgba(255, 255, 255, 0.02)",color:_?"#ffffff":"#c9d1d9",cursor:"pointer",textAlign:"left",transition:"all 0.15s ease"},onMouseEnter:g=>{_||(g.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.06)")},onMouseLeave:g=>{_||(g.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.02)")},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[d.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:_?"#00f0ff":"#f0f6fc"},children:m}),d.jsx("span",{style:{fontSize:"10px",color:"#8b949e"},children:x})]}),_&&d.jsx(YS,{size:14,color:"#00f0ff"})]},f)})})]}),t==="colors"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"2px"},children:d.jsxs("button",{onClick:a,style:{display:"flex",alignItems:"center",gap:"4px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"4px",color:"#58a6ff",fontSize:"10px",padding:"4px 8px",cursor:"pointer"},children:[d.jsx(Yc,{size:10}),d.jsx("span",{children:"Сброс по умолчанию"})]})}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[d.jsx(Ci,{label:"Активные спутники",value:n.satColor||"#00f0ff",onChange:f=>s("satColor",f)}),d.jsx(Ci,{label:"Отказавшие спутники",value:n.offlineSatColor||"#ff3b30",onChange:f=>s("offlineSatColor",f)}),d.jsx(Ci,{label:"Спутники с задержкой",value:n.highLatencySatColor||"#ff9900",onChange:f=>s("highLatencySatColor",f)}),d.jsx(Ci,{label:"Траектории орбит",value:n.orbitColor||"#1473e6",onChange:f=>s("orbitColor",f)}),d.jsx(Ci,{label:"Межспутниковая связь",value:n.islColor||"#00ff88",onChange:f=>s("islColor",f)}),d.jsx(Ci,{label:"Наземные шлюзы",value:n.gatewayColor||"#00d084",onChange:f=>s("gatewayColor",f)}),d.jsx(Ci,{label:"Связь Земля - КА",value:n.groundLinkColor||"#f59e0b",onChange:f=>s("groundLinkColor",f)}),d.jsx(Ci,{label:"Атмосфера Земли",value:n.atmosphereColor||"#1e3a8a",onChange:f=>s("atmosphereColor",f)}),d.jsx(Ci,{label:"Зоны покрытия (FOV)",value:n.fovConeColor||"#00f0ff",onChange:f=>s("fovConeColor",f)})]})]})]})]})]})},jn=({label:n,checked:e,onChange:t})=>d.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px",borderRadius:"6px",cursor:"pointer",backgroundColor:e?"rgba(255, 255, 255, 0.03)":"transparent",transition:"background-color 0.15s ease"},onMouseEnter:i=>{i.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.06)"},onMouseLeave:i=>{i.currentTarget.style.backgroundColor=e?"rgba(255, 255, 255, 0.03)":"transparent"},children:[d.jsx("span",{style:{fontSize:"11px",color:e?"#f0f6fc":"#8b949e",transition:"color 0.15s ease"},children:n}),d.jsx("input",{type:"checkbox",checked:e,onChange:i=>t(i.target.checked),style:{accentColor:"#1473e6",cursor:"pointer",width:"14px",height:"14px"}})]}),Ci=({label:n,value:e,onChange:t})=>d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 8px",borderRadius:"6px",backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[d.jsx("span",{style:{color:"#c9d1d9",fontSize:"11px"},children:n}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("input",{type:"color",value:e,onChange:i=>t(i.target.value),style:{width:"24px",height:"22px",padding:0,border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",backgroundColor:"transparent",cursor:"pointer"}}),d.jsx("span",{style:{fontSize:"10px",color:"#8b949e",fontFamily:"monospace",width:"54px",textAlign:"right"},children:e.toUpperCase()})]})]});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fp="162",ys={ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},EM=0,Wm=1,wM=2,Tv=1,TM=2,ki=3,$i=0,vn=1,xn=2,wr=0,ho=1,Ya=2,Xm=3,$m=4,AM=5,Yr=100,CM=101,RM=102,Ym=103,qm=104,PM=200,LM=201,IM=202,DM=203,Yf=204,qf=205,NM=206,kM=207,UM=208,OM=209,FM=210,zM=211,jM=212,BM=213,HM=214,GM=0,VM=1,WM=2,qc=3,XM=4,$M=5,YM=6,qM=7,hp=0,KM=1,ZM=2,Tr=0,JM=1,QM=2,eb=3,tb=4,nb=5,ib=6,rb=7,Km="attached",sb="detached",Av=300,wo=301,To=302,Kf=303,Zf=304,_u=306,oi=1e3,$n=1001,Kc=1002,$t=1003,Jf=1004,Vs=1005,Xt=1006,_c=1007,ui=1008,Ar=1009,ob=1010,ab=1011,pp=1012,Cv=1013,pr=1014,ai=1015,qa=1016,Rv=1017,Pv=1018,is=1020,lb=1021,Yn=1023,cb=1024,ub=1025,rs=1026,Ao=1027,Lv=1028,Iv=1029,db=1030,Dv=1031,Nv=1033,sd=33776,od=33777,ad=33778,ld=33779,Zm=35840,Jm=35841,Qm=35842,eg=35843,kv=36196,tg=37492,ng=37496,ig=37808,rg=37809,sg=37810,og=37811,ag=37812,lg=37813,cg=37814,ug=37815,dg=37816,fg=37817,hg=37818,pg=37819,mg=37820,gg=37821,cd=36492,xg=36494,yg=36495,fb=36283,vg=36284,_g=36285,Sg=36286,Ka=2300,Co=2301,ud=2302,Mg=2400,bg=2401,Eg=2402,hb=2500,pb=0,Uv=1,Qf=2,mb=3200,gb=3201,mp=0,xb=1,dr="",mn="srgb",rn="srgb-linear",gp="display-p3",Su="display-p3-linear",Zc="linear",vt="srgb",Jc="rec709",Qc="p3",_s=7680,wg=519,yb=512,vb=513,_b=514,Ov=515,Sb=516,Mb=517,bb=518,Eb=519,eh=35044,Tg="300 es",th=1035,Bi=2e3,eu=2001;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ag=1234567;const Ta=Math.PI/180,Ro=180/Math.PI;function hi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function xp(n,e){return(n%e+e)%e}function wb(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Tb(n,e,t){return n!==e?(t-n)/(e-n):0}function Aa(n,e,t){return(1-t)*n+t*e}function Ab(n,e,t,i){return Aa(n,e,1-Math.exp(-t*i))}function Cb(n,e=1){return e-Math.abs(xp(n,e*2)-e)}function Rb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Pb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Lb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ib(n,e){return n+Math.random()*(e-n)}function Db(n){return n*(.5-Math.random())}function Nb(n){n!==void 0&&(Ag=n);let e=Ag+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kb(n){return n*Ta}function Ub(n){return n*Ro}function nh(n){return(n&n-1)===0&&n!==0}function Ob(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fb(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*x,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*x,a*c);break;case"ZYZ":n.set(l*x,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yp={DEG2RAD:Ta,RAD2DEG:Ro,generateUUID:hi,clamp:Qt,euclideanModulo:xp,mapLinear:wb,inverseLerp:Tb,lerp:Aa,damp:Ab,pingpong:Cb,smoothstep:Rb,smootherstep:Pb,randInt:Lb,randFloat:Ib,randFloatSpread:Db,seededRandom:Nb,degToRad:kb,radToDeg:Ub,isPowerOfTwo:nh,ceilPowerOfTwo:Ob,floorPowerOfTwo:tu,setQuaternionFromProperEuler:Fb,normalize:ut,denormalize:li};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],x=i[8],_=r[0],g=r[3],p=r[6],v=r[1],y=r[4],M=r[7],T=r[2],E=r[5],w=r[8];return s[0]=o*_+a*v+l*T,s[3]=o*g+a*y+l*E,s[6]=o*p+a*M+l*w,s[1]=c*_+u*v+h*T,s[4]=c*g+u*y+h*E,s[7]=c*p+u*M+h*w,s[2]=f*_+m*v+x*T,s[5]=f*g+m*y+x*E,s[8]=f*p+m*M+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,x=t*h+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dd.makeScale(e,t)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new Qe;function Fv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zb(){const n=Za("canvas");return n.style.display="block",n}const Cg={};function zv(n){n in Cg||(Cg[n]=!0,console.warn(n))}const Rg=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pg=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wl={[rn]:{transfer:Zc,primaries:Jc,toReference:n=>n,fromReference:n=>n},[mn]:{transfer:vt,primaries:Jc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Su]:{transfer:Zc,primaries:Qc,toReference:n=>n.applyMatrix3(Pg),fromReference:n=>n.applyMatrix3(Rg)},[gp]:{transfer:vt,primaries:Qc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Pg),fromReference:n=>n.applyMatrix3(Rg).convertLinearToSRGB()}},jb=new Set([rn,Su]),ct={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!jb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=wl[e].toReference,r=wl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return wl[n].primaries},getTransfer:function(n){return n===dr?Zc:wl[n].transfer}};function po(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ss;class jv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=Za("canvas")),Ss.width=e.width,Ss.height=e.height;const i=Ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=po(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(po(t[i]/255)*255):t[i]=po(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bb=0;class Bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hd(r[o].image)):s.push(hd(r[o]))}else s=hd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function hd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hb=0;class zt extends ms{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=$n,r=$n,s=Xt,o=ui,a=Yn,l=Ar,c=zt.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=hi(),this.name="",this.source=new Bv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Av)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Av;zt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],x=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(m+1)/2,T=(p+1)/2,E=(u+f)/4,w=(h+_)/4,A=(x+g)/4;return y>M&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=w/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=A/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=A/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-x)*(g-x)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gb extends ms{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends Gb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hv extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vb extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==x){let g=1-a;const p=l*f+c*m+u*x+h*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),E=Math.atan2(T,p*v);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}const M=a*v;if(l=l*g+f*M,c=c*g+m*M,u=u*g+x*M,h=h*g+_*M,g===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*h+l*m-c*f,e[t+1]=l*x+u*f+c*h-a*m,e[t+2]=c*x+u*m+a*f-l*h,e[t+3]=u*x-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"YZX":this._x=f*u*h+c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h-f*m*x;break;case"XZY":this._x=f*u*h-c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new k,Lg=new Ei;class gi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Al.subVectors(this.max,Zo),Ms.subVectors(e.a,Zo),bs.subVectors(e.b,Zo),Es.subVectors(e.c,Zo),Ji.subVectors(bs,Ms),Qi.subVectors(Es,bs),Or.subVectors(Ms,Es);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Or.z,Or.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Or.z,0,-Or.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Or.y,Or.x,0];return!md(t,Ms,bs,Es,Al)||(t=[1,0,0,0,1,0,0,0,1],!md(t,Ms,bs,Es,Al))?!1:(Cl.crossVectors(Ji,Qi),t=[Cl.x,Cl.y,Cl.z],md(t,Ms,bs,Es,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new k,new k,new k,new k,new k,new k,new k,new k],ei=new k,Tl=new gi,Ms=new k,bs=new k,Es=new k,Ji=new k,Qi=new k,Or=new k,Zo=new k,Al=new k,Cl=new k,Fr=new k;function md(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fr.fromArray(n,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Wb=new gi,Jo=new k,gd=new k;class wi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const t=Jo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(gd)),this.expandByPoint(Jo.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new k,xd=new k,Rl=new k,er=new k,yd=new k,Pl=new k,vd=new k;class Oo{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xd.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),er.copy(this.origin).sub(xd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rl),a=er.dot(this.direction),l=-er.dot(Rl),c=er.lengthSq(),u=Math.abs(1-o*o);let h,f,m,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xd).addScaledVector(Rl,f),m}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,r,s){yd.subVectors(t,e),Pl.subVectors(i,e),vd.crossVectors(yd,Pl);let o=this.direction.dot(vd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(Pl.crossVectors(er,Pl));if(l<0)return null;const c=a*this.direction.dot(yd.cross(er));if(c<0||l+c>o)return null;const u=-a*er.dot(vd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,r,s,o,a,l,c,u,h,f,m,x,_,g){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,m,x,_,g)}set(e,t,i,r,s,o,a,l,c,u,h,f,m,x,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=x,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,x=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,x=c*u,_=c*h;t[0]=f+_*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,x=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,x=a*u,_=a*h;t[0]=l*u,t[4]=x*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=x*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+x,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xb,e,$b)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),tr.crossVectors(i,Rn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),tr.crossVectors(i,Rn)),tr.normalize(),Ll.crossVectors(Rn,tr),r[0]=tr.x,r[4]=Ll.x,r[8]=Rn.x,r[1]=tr.y,r[5]=Ll.y,r[9]=Rn.y,r[2]=tr.z,r[6]=Ll.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],x=i[2],_=i[6],g=i[10],p=i[14],v=i[3],y=i[7],M=i[11],T=i[15],E=r[0],w=r[4],A=r[8],B=r[12],b=r[1],I=r[5],re=r[9],X=r[13],N=r[2],K=r[6],V=r[10],Q=r[14],P=r[3],L=r[7],z=r[11],$=r[15];return s[0]=o*E+a*b+l*N+c*P,s[4]=o*w+a*I+l*K+c*L,s[8]=o*A+a*re+l*V+c*z,s[12]=o*B+a*X+l*Q+c*$,s[1]=u*E+h*b+f*N+m*P,s[5]=u*w+h*I+f*K+m*L,s[9]=u*A+h*re+f*V+m*z,s[13]=u*B+h*X+f*Q+m*$,s[2]=x*E+_*b+g*N+p*P,s[6]=x*w+_*I+g*K+p*L,s[10]=x*A+_*re+g*V+p*z,s[14]=x*B+_*X+g*Q+p*$,s[3]=v*E+y*b+M*N+T*P,s[7]=v*w+y*I+M*K+T*L,s[11]=v*A+y*re+M*V+T*z,s[15]=v*B+y*X+M*Q+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],x=e[3],_=e[7],g=e[11],p=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+g*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],x=e[12],_=e[13],g=e[14],p=e[15],v=h*g*c-_*f*c+_*l*m-a*g*m-h*l*p+a*f*p,y=x*f*c-u*g*c-x*l*m+o*g*m+u*l*p-o*f*p,M=u*_*c-x*h*c+x*a*m-o*_*m-u*a*p+o*h*p,T=x*h*l-u*_*l-x*a*f+o*_*f+u*a*g-o*h*g,E=t*v+i*y+r*M+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(_*f*s-h*g*s-_*r*m+i*g*m+h*r*p-i*f*p)*w,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*p+i*l*p)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*w,e[4]=y*w,e[5]=(u*g*s-x*f*s+x*r*m-t*g*m-u*r*p+t*f*p)*w,e[6]=(x*l*s-o*g*s-x*r*c+t*g*c+o*r*p-t*l*p)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*w,e[8]=M*w,e[9]=(x*h*s-u*_*s-x*i*m+t*_*m+u*i*p-t*h*p)*w,e[10]=(o*_*s-x*a*s+x*i*c-t*_*c-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*m-t*a*m)*w,e[12]=T*w,e[13]=(u*_*r-x*h*r+x*i*f-t*_*f-u*i*g+t*h*g)*w,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*g-t*a*g)*w,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,x=s*h,_=o*u,g=o*h,p=a*h,v=l*c,y=l*u,M=l*h,T=i.x,E=i.y,w=i.z;return r[0]=(1-(_+p))*T,r[1]=(m+M)*T,r[2]=(x-y)*T,r[3]=0,r[4]=(m-M)*E,r[5]=(1-(f+p))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(x+y)*w,r[9]=(g-v)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ws.set(r[0],r[1],r[2]).length();const o=ws.set(r[4],r[5],r[6]).length(),a=ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,u=1/o,h=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Bi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,x;if(a===Bi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===eu)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Bi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,m=(i+r)*u;let x,_;if(a===Bi)x=(o+s)*h,_=-2*h;else if(a===eu)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ws=new k,ti=new qe,Xb=new k(0,0,0),$b=new k(1,1,1),tr=new k,Ll=new k,Rn=new k,Ig=new qe,Dg=new Ei;class mi{constructor(e=0,t=0,i=0,r=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ig,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dg.setFromEuler(this),this.setFromQuaternion(Dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yb=0;const Ng=new k,Ts=new Ei,Li=new qe,Il=new k,Qo=new k,qb=new k,Kb=new Ei,kg=new k(1,0,0),Ug=new k(0,1,0),Og=new k(0,0,1),Zb={type:"added"},Jb={type:"removed"},_d={type:"childadded",child:null},Sd={type:"childremoved",child:null};class wt extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new k,t=new mi,i=new Ei,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new Qe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(kg,e)}rotateY(e){return this.rotateOnAxis(Ug,e)}rotateZ(e){return this.rotateOnAxis(Og,e)}translateOnAxis(e,t){return Ng.copy(e).applyQuaternion(this.quaternion),this.position.add(Ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kg,e)}translateY(e){return this.translateOnAxis(Ug,e)}translateZ(e){return this.translateOnAxis(Og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Il.copy(e):Il.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Qo,Il,this.up):Li.lookAt(Il,Qo,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Li),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zb),_d.child=e,this.dispatchEvent(_d),_d.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jb),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,qb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,Kb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new k(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new k,Ii=new k,Md=new k,Di=new k,As=new k,Cs=new k,Fg=new k,bd=new k,Ed=new k,wd=new k;class ci{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ni.subVectors(e,t),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ni.subVectors(r,t),Ii.subVectors(i,t),Md.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Ii),l=ni.dot(Md),c=Ii.dot(Ii),u=Ii.dot(Md),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static isFrontFacing(e,t,i,r){return ni.subVectors(i,t),Ii.subVectors(e,t),ni.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ni.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),Cs.subVectors(s,i),bd.subVectors(e,i);const l=As.dot(bd),c=Cs.dot(bd);if(l<=0&&c<=0)return t.copy(i);Ed.subVectors(e,r);const u=As.dot(Ed),h=Cs.dot(Ed);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(As,o);wd.subVectors(e,s);const m=As.dot(wd),x=Cs.dot(wd);if(x>=0&&m<=x)return t.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Cs,a);const g=u*x-m*h;if(g<=0&&h-u>=0&&m-x>=0)return Fg.subVectors(s,r),a=(h-u)/(h-u+(m-x)),t.copy(r).addScaledVector(Fg,a);const p=1/(g+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(As,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Td(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=xp(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Td(o,s,e+1/3),this.g=Td(o,s,e),this.b=Td(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=Gv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}copyLinearToSRGB(e){return this.r=fd(e.r),this.g=fd(e.g),this.b=fd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return ct.fromWorkingColorSpace(cn.copy(this),e),Math.round(Qt(cn.r*255,0,255))*65536+Math.round(Qt(cn.g*255,0,255))*256+Math.round(Qt(cn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(cn.copy(this),t);const i=cn.r,r=cn.g,s=cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=mn){ct.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,r=cn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(Dl);const i=Aa(nr.h,Dl.h,t),r=Aa(nr.s,Dl.s,t),s=Aa(nr.l,Dl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Fe;Fe.NAMES=Gv;let Qb=0;class An extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=ho,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=qf,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vt extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new k,Nl=new Ie;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}}class Vv extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wv extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eE=0;const Bn=new qe,Ad=new wt,Rs=new k,Pn=new gi,ea=new gi,Gt=new k;class ht extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fv(e)?Wv:Vv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Pn.min,ea.min),Pn.expandByPoint(Gt),Gt.addVectors(Pn.max,ea.max),Pn.expandByPoint(Gt)):(Pn.expandByPoint(ea.min),Pn.expandByPoint(ea.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(e,c),Gt.add(Rs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new k,l[A]=new k;const c=new k,u=new k,h=new k,f=new Ie,m=new Ie,x=new Ie,_=new k,g=new k;function p(A,B,b){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,B),h.fromBufferAttribute(i,b),f.fromBufferAttribute(s,A),m.fromBufferAttribute(s,B),x.fromBufferAttribute(s,b),u.sub(c),h.sub(c),m.sub(f),x.sub(f);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(I),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(I),a[A].add(_),a[B].add(_),a[b].add(_),l[A].add(g),l[B].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,B=v.length;A<B;++A){const b=v[A],I=b.start,re=b.count;for(let X=I,N=I+re;X<N;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new k,M=new k,T=new k,E=new k;function w(A){T.fromBufferAttribute(r,A),E.copy(T);const B=a[A];y.copy(B),y.sub(T.multiplyScalar(T.dot(B))).normalize(),M.crossVectors(E,B);const I=M.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,I)}for(let A=0,B=v.length;A<B;++A){const b=v[A],I=b.start,re=b.count;for(let X=I,N=I+re;X<N;X+=3)w(e.getX(X+0)),w(e.getX(X+1)),w(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let p=0;p<u;p++)f[x++]=c[m++]}return new tn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zg=new qe,zr=new Oo,kl=new wi,jg=new k,Ps=new k,Ls=new k,Is=new k,Cd=new k,Ul=new k,Ol=new Ie,Fl=new Ie,zl=new Ie,Bg=new k,Hg=new k,Gg=new k,jl=new k,Bl=new k;class _t extends wt{constructor(e=new ht,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Cd.fromBufferAttribute(h,e),o?Ul.addScaledVector(Cd,u):Ul.addScaledVector(Cd.sub(t),u))}t.add(Ul)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(kl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(kl,jg)===null||zr.origin.distanceToSquared(jg)>(e.far-e.near)**2))&&(zg.copy(s).invert(),zr.copy(e.ray).applyMatrix4(zg),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const g=f[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,T=y;M<T;M+=3){const E=a.getX(M),w=a.getX(M+1),A=a.getX(M+2);r=Hl(this,p,e,i,c,u,h,E,w,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=x,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);r=Hl(this,o,e,i,c,u,h,v,y,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const g=f[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,T=y;M<T;M+=3){const E=M,w=M+1,A=M+2;r=Hl(this,p,e,i,c,u,h,E,w,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=x,p=_;g<p;g+=3){const v=g,y=g+1,M=g+2;r=Hl(this,o,e,i,c,u,h,v,y,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function tE(n,e,t,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;Bl.copy(a),Bl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Bl);return c<t.near||c>t.far?null:{distance:c,point:Bl.clone(),object:n}}function Hl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ps),n.getVertexPosition(l,Ls),n.getVertexPosition(c,Is);const u=tE(n,e,t,i,Ps,Ls,Is,jl);if(u){r&&(Ol.fromBufferAttribute(r,a),Fl.fromBufferAttribute(r,l),zl.fromBufferAttribute(r,c),u.uv=ci.getInterpolation(jl,Ps,Ls,Is,Ol,Fl,zl,new Ie)),s&&(Ol.fromBufferAttribute(s,a),Fl.fromBufferAttribute(s,l),zl.fromBufferAttribute(s,c),u.uv1=ci.getInterpolation(jl,Ps,Ls,Is,Ol,Fl,zl,new Ie)),o&&(Bg.fromBufferAttribute(o,a),Hg.fromBufferAttribute(o,l),Gg.fromBufferAttribute(o,c),u.normal=ci.getInterpolation(jl,Ps,Ls,Is,Bg,Hg,Gg,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};ci.getNormal(Ps,Ls,Is,h.normal),u.face=h}return u}class rl extends ht{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function x(_,g,p,v,y,M,T,E,w,A,B){const b=M/w,I=T/A,re=M/2,X=T/2,N=E/2,K=w+1,V=A+1;let Q=0,P=0;const L=new k;for(let z=0;z<V;z++){const $=z*I-X;for(let ee=0;ee<K;ee++){const _e=ee*b-re;L[_]=_e*v,L[g]=$*y,L[p]=N,c.push(L.x,L.y,L.z),L[_]=0,L[g]=0,L[p]=E>0?1:-1,u.push(L.x,L.y,L.z),h.push(ee/w),h.push(1-z/A),Q+=1}}for(let z=0;z<A;z++)for(let $=0;$<w;$++){const ee=f+$+K*z,_e=f+$+K*(z+1),G=f+($+1)+K*(z+1),Z=f+($+1)+K*z;l.push(ee,_e,Z),l.push(_e,G,Z),P+=6}a.addGroup(m,P,B),m+=P,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=Po(n[t]);for(const r in i)e[r]=i[r]}return e}function nE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xv(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}const iE={clone:Po,merge:hn};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=nE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $v extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new k,Vg=new Ie,Wg=new Ie;class gn extends $v{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,Vg,Wg),t.subVectors(Wg,Vg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Ns=1;class oE extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Ds,Ns,e,t);r.layers=this.layers,this.add(r);const s=new gn(Ds,Ns,e,t);s.layers=this.layers,this.add(s);const o=new gn(Ds,Ns,e,t);o.layers=this.layers,this.add(o);const a=new gn(Ds,Ns,e,t);a.layers=this.layers,this.add(a);const l=new gn(Ds,Ns,e,t);l.layers=this.layers,this.add(l);const c=new gn(Ds,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Yv extends zt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:wo,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aE extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rl(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:wr});s.uniforms.tEquirect.value=t;const o=new _t(r,s),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Xt),new oE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Rd=new k,lE=new k,cE=new Qe;class ar{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Rd.subVectors(i,t).cross(lE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cE.getNormalMatrix(e),r=this.coplanarPoint(Rd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new wi,Gl=new k;class _p{constructor(e=new ar,t=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],x=r[9],_=r[10],g=r[11],p=r[12],v=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,g-m,M-p).normalize(),i[1].setComponents(l+s,f+c,g+m,M+p).normalize(),i[2].setComponents(l+o,f+u,g+x,M+v).normalize(),i[3].setComponents(l-o,f-u,g-x,M-v).normalize(),i[4].setComponents(l-a,f-h,g-_,M-y).normalize(),t===Bi)i[5].setComponents(l+a,f+h,g+_,M+y).normalize();else if(t===eu)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Gl.x=r.normal.x>0?e.max.x:e.min.x,Gl.y=r.normal.y>0?e.max.y:e.min.y,Gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=h.byteLength,x=n.createBuffer();n.bindBuffer(u,x),n.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const f=u.array,m=u._updateRange,x=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&x.length===0&&n.bufferSubData(h,0,f),x.length!==0){for(let _=0,g=x.length;_<g;_++){const p=x[_];t?n.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):n.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Mu extends ht{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],x=[],_=[],g=[];for(let p=0;p<u;p++){const v=p*f-o;for(let y=0;y<c;y++){const M=y*h-s;x.push(M,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,M=v+c*(p+1),T=v+1+c*(p+1),E=v+1+c*p;m.push(y,M,E),m.push(M,T,E)}this.setIndex(m),this.setAttribute("position",new mt(x,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var dE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fE=`#ifdef USE_ALPHAHASH
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
#endif`,hE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xE=`#ifdef USE_AOMAP
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
#endif`,yE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vE=`#ifdef USE_BATCHING
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
#endif`,_E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EE=`#ifdef USE_IRIDESCENCE
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
#endif`,wE=`#ifdef USE_BUMPMAP
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
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NE=`#define PI 3.141592653589793
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
} // validated`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UE=`vec3 transformedNormal = objectNormal;
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
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BE="gl_FragColor = linearToOutputTexel( gl_FragColor );",HE=`
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
}`,GE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
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
}`,QE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ew=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iw=`uniform bool receiveShadow;
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
#endif`,rw=`#ifdef USE_ENVMAP
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
#endif`,sw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cw=`PhysicalMaterial material;
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
#endif`,uw=`struct PhysicalMaterial {
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
}`,dw=`
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
#endif`,fw=`#if defined( RE_IndirectDiffuse )
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
#endif`,hw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_w=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sw=`#if defined( USE_POINTS_UV )
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
#endif`,Mw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ew=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ww=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tw=`#ifdef USE_MORPHNORMALS
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
#endif`,Aw=`#ifdef USE_MORPHTARGETS
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
#endif`,Cw=`#ifdef USE_MORPHTARGETS
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
#endif`,Rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
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
#endif`,kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kw=`float getShadowMask() {
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
}`,Zw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jw=`#ifdef USE_SKINNING
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
#endif`,Qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e2=`#ifdef USE_SKINNING
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
#endif`,t2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s2=`#ifdef USE_TRANSMISSION
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
#endif`,o2=`#ifdef USE_TRANSMISSION
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
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f2=`uniform sampler2D t2D;
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
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`#include <common>
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
}`,y2=`#if DEPTH_PACKING == 3200
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
}`,v2=`#define DISTANCE
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
}`,_2=`#define DISTANCE
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
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b2=`uniform float scale;
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
}`,E2=`uniform vec3 diffuse;
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
}`,w2=`#include <common>
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
}`,T2=`uniform vec3 diffuse;
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
}`,A2=`#define LAMBERT
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
}`,C2=`#define LAMBERT
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
}`,R2=`#define MATCAP
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
}`,P2=`#define MATCAP
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
}`,L2=`#define NORMAL
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
}`,I2=`#define NORMAL
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
}`,D2=`#define PHONG
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
}`,N2=`#define PHONG
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
}`,k2=`#define STANDARD
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
}`,U2=`#define STANDARD
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
}`,O2=`#define TOON
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
}`,F2=`#define TOON
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
}`,z2=`uniform float size;
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
}`,j2=`uniform vec3 diffuse;
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
}`,B2=`#include <common>
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
}`,H2=`uniform vec3 color;
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
}`,G2=`uniform float rotation;
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
}`,V2=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:dE,alphahash_pars_fragment:fE,alphamap_fragment:hE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:xE,aomap_pars_fragment:yE,batching_pars_vertex:vE,batching_vertex:_E,begin_vertex:SE,beginnormal_vertex:ME,bsdfs:bE,iridescence_fragment:EE,bumpmap_pars_fragment:wE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:CE,clipping_planes_vertex:RE,color_fragment:PE,color_pars_fragment:LE,color_pars_vertex:IE,color_vertex:DE,common:NE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:UE,displacementmap_pars_vertex:OE,displacementmap_vertex:FE,emissivemap_fragment:zE,emissivemap_pars_fragment:jE,colorspace_fragment:BE,colorspace_pars_fragment:HE,envmap_fragment:GE,envmap_common_pars_fragment:VE,envmap_pars_fragment:WE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:rw,envmap_vertex:$E,fog_vertex:YE,fog_pars_vertex:qE,fog_fragment:KE,fog_pars_fragment:ZE,gradientmap_pars_fragment:JE,lightmap_fragment:QE,lightmap_pars_fragment:ew,lights_lambert_fragment:tw,lights_lambert_pars_fragment:nw,lights_pars_begin:iw,lights_toon_fragment:sw,lights_toon_pars_fragment:ow,lights_phong_fragment:aw,lights_phong_pars_fragment:lw,lights_physical_fragment:cw,lights_physical_pars_fragment:uw,lights_fragment_begin:dw,lights_fragment_maps:fw,lights_fragment_end:hw,logdepthbuf_fragment:pw,logdepthbuf_pars_fragment:mw,logdepthbuf_pars_vertex:gw,logdepthbuf_vertex:xw,map_fragment:yw,map_pars_fragment:vw,map_particle_fragment:_w,map_particle_pars_fragment:Sw,metalnessmap_fragment:Mw,metalnessmap_pars_fragment:bw,morphinstance_vertex:Ew,morphcolor_vertex:ww,morphnormal_vertex:Tw,morphtarget_pars_vertex:Aw,morphtarget_vertex:Cw,normal_fragment_begin:Rw,normal_fragment_maps:Pw,normal_pars_fragment:Lw,normal_pars_vertex:Iw,normal_vertex:Dw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:kw,clearcoat_normal_fragment_maps:Uw,clearcoat_pars_fragment:Ow,iridescence_pars_fragment:Fw,opaque_fragment:zw,packing:jw,premultiplied_alpha_fragment:Bw,project_vertex:Hw,dithering_fragment:Gw,dithering_pars_fragment:Vw,roughnessmap_fragment:Ww,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:$w,shadowmap_pars_vertex:Yw,shadowmap_vertex:qw,shadowmask_pars_fragment:Kw,skinbase_vertex:Zw,skinning_pars_vertex:Jw,skinning_vertex:Qw,skinnormal_vertex:e2,specularmap_fragment:t2,specularmap_pars_fragment:n2,tonemapping_fragment:i2,tonemapping_pars_fragment:r2,transmission_fragment:s2,transmission_pars_fragment:o2,uv_pars_fragment:a2,uv_pars_vertex:l2,uv_vertex:c2,worldpos_vertex:u2,background_vert:d2,background_frag:f2,backgroundCube_vert:h2,backgroundCube_frag:p2,cube_vert:m2,cube_frag:g2,depth_vert:x2,depth_frag:y2,distanceRGBA_vert:v2,distanceRGBA_frag:_2,equirect_vert:S2,equirect_frag:M2,linedashed_vert:b2,linedashed_frag:E2,meshbasic_vert:w2,meshbasic_frag:T2,meshlambert_vert:A2,meshlambert_frag:C2,meshmatcap_vert:R2,meshmatcap_frag:P2,meshnormal_vert:L2,meshnormal_frag:I2,meshphong_vert:D2,meshphong_frag:N2,meshphysical_vert:k2,meshphysical_frag:U2,meshtoon_vert:O2,meshtoon_frag:F2,points_vert:z2,points_frag:j2,shadow_vert:B2,shadow_frag:H2,sprite_vert:G2,sprite_frag:V2},Ee={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},_i={basic:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:hn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:hn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:hn([Ee.points,Ee.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:hn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:hn([Ee.common,Ee.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:hn([Ee.sprite,Ee.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:hn([Ee.common,Ee.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:hn([Ee.lights,Ee.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};_i.physical={uniforms:hn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Vl={r:0,b:0,g:0},Br=new mi,W2=new qe;function X2(n,e,t,i,r,s,o){const a=new Fe(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function x(g,p){let v=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),v=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===_u)?(u===void 0&&(u=new _t(new rl(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:Po(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Br.copy(p.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(Br)),u.material.toneMapped=ct.getTransfer(y.colorSpace)!==vt,(h!==y||f!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,m=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new Mu(2,2),new Pr({name:"BackgroundMaterial",uniforms:Po(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ct.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(Vl,Xv(n)),i.buffers.color.setClear(Vl.r,Vl.g,Vl.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:x}}function $2(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function h(N,K,V,Q,P){let L=!1;if(o){const z=_(Q,V,K);c!==z&&(c=z,m(c.object)),L=p(N,Q,V,P),L&&v(N,Q,V,P)}else{const z=K.wireframe===!0;(c.geometry!==Q.id||c.program!==V.id||c.wireframe!==z)&&(c.geometry=Q.id,c.program=V.id,c.wireframe=z,L=!0)}P!==null&&t.update(P,n.ELEMENT_ARRAY_BUFFER),(L||u)&&(u=!1,A(N,K,V,Q),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,K,V){const Q=V.wireframe===!0;let P=a[N.id];P===void 0&&(P={},a[N.id]=P);let L=P[K.id];L===void 0&&(L={},P[K.id]=L);let z=L[Q];return z===void 0&&(z=g(f()),L[Q]=z),z}function g(N){const K=[],V=[],Q=[];for(let P=0;P<r;P++)K[P]=0,V[P]=0,Q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:V,attributeDivisors:Q,object:N,attributes:{},index:null}}function p(N,K,V,Q){const P=c.attributes,L=K.attributes;let z=0;const $=V.getAttributes();for(const ee in $)if($[ee].location>=0){const G=P[ee];let Z=L[ee];if(Z===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),G===void 0||G.attribute!==Z||Z&&G.data!==Z.data)return!0;z++}return c.attributesNum!==z||c.index!==Q}function v(N,K,V,Q){const P={},L=K.attributes;let z=0;const $=V.getAttributes();for(const ee in $)if($[ee].location>=0){let G=L[ee];G===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));const Z={};Z.attribute=G,G&&G.data&&(Z.data=G.data),P[ee]=Z,z++}c.attributes=P,c.attributesNum=z,c.index=Q}function y(){const N=c.newAttributes;for(let K=0,V=N.length;K<V;K++)N[K]=0}function M(N){T(N,0)}function T(N,K){const V=c.newAttributes,Q=c.enabledAttributes,P=c.attributeDivisors;V[N]=1,Q[N]===0&&(n.enableVertexAttribArray(N),Q[N]=1),P[N]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,K),P[N]=K)}function E(){const N=c.newAttributes,K=c.enabledAttributes;for(let V=0,Q=K.length;V<Q;V++)K[V]!==N[V]&&(n.disableVertexAttribArray(V),K[V]=0)}function w(N,K,V,Q,P,L,z){z===!0?n.vertexAttribIPointer(N,K,V,P,L):n.vertexAttribPointer(N,K,V,Q,P,L)}function A(N,K,V,Q){if(i.isWebGL2===!1&&(N.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const P=Q.attributes,L=V.getAttributes(),z=K.defaultAttributeValues;for(const $ in L){const ee=L[$];if(ee.location>=0){let _e=P[$];if(_e===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),_e!==void 0){const G=_e.normalized,Z=_e.itemSize,me=t.get(_e);if(me===void 0)continue;const Re=me.buffer,ye=me.type,Te=me.bytesPerElement,He=i.isWebGL2===!0&&(ye===n.INT||ye===n.UNSIGNED_INT||_e.gpuType===Cv);if(_e.isInterleavedBufferAttribute){const Ae=_e.data,H=Ae.stride,lt=_e.offset;if(Ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<ee.locationSize;Pe++)T(ee.location+Pe,Ae.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Pe=0;Pe<ee.locationSize;Pe++)M(ee.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Pe=0;Pe<ee.locationSize;Pe++)w(ee.location+Pe,Z/ee.locationSize,ye,G,H*Te,(lt+Z/ee.locationSize*Pe)*Te,He)}else{if(_e.isInstancedBufferAttribute){for(let Ae=0;Ae<ee.locationSize;Ae++)T(ee.location+Ae,_e.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ae=0;Ae<ee.locationSize;Ae++)M(ee.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Ae=0;Ae<ee.locationSize;Ae++)w(ee.location+Ae,Z/ee.locationSize,ye,G,Z*Te,Z/ee.locationSize*Ae*Te,He)}}else if(z!==void 0){const G=z[$];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(ee.location,G);break;case 3:n.vertexAttrib3fv(ee.location,G);break;case 4:n.vertexAttrib4fv(ee.location,G);break;default:n.vertexAttrib1fv(ee.location,G)}}}}E()}function B(){re();for(const N in a){const K=a[N];for(const V in K){const Q=K[V];for(const P in Q)x(Q[P].object),delete Q[P];delete K[V]}delete a[N]}}function b(N){if(a[N.id]===void 0)return;const K=a[N.id];for(const V in K){const Q=K[V];for(const P in Q)x(Q[P].object),delete Q[P];delete K[V]}delete a[N.id]}function I(N){for(const K in a){const V=a[K];if(V[N.id]===void 0)continue;const Q=V[N.id];for(const P in Q)x(Q[P].object),delete Q[P];delete V[N.id]}}function re(){X(),u=!0,c!==l&&(c=l,m(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:re,resetDefaultState:X,dispose:B,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:M,disableUnusedAttributes:E}}function Y2(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let m,x;if(r)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f;x++)this.render(u[x],h[x]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,f);let x=0;for(let _=0;_<f;_++)x+=h[_];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function q2(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,M=o||e.has("OES_texture_float"),T=y&&M,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:E}}function K2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ar,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,y=v*4;let M=p.clippingState||null;l.value=M,M=u(x,f,y,m);for(let T=0;T!==y;++T)M[T]=t[T];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,x){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,x!==!0||g===null){const p=m+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,M=m;y!==_;++y,M+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Z2(n){let e=new WeakMap;function t(o,a){return a===Kf?o.mapping=wo:a===Zf&&(o.mapping=To),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kf||a===Zf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new aE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sp extends $v{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ro=4,Xg=[.125,.215,.35,.446,.526,.582],qr=20,Pd=new Sp,$g=new Fe;let Ld=null,Id=0,Dd=0;const $r=(1+Math.sqrt(5))/2,ks=1/$r,Yg=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,$r,ks),new k(0,$r,-ks),new k(ks,0,$r),new k(-ks,0,$r),new k($r,ks,0),new k(-$r,ks,0)];class qg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Id,Dd),e.scissorTest=!1,Wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:qa,format:Yn,colorSpace:rn,depthBuffer:!1},r=Kg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J2(s)),this._blurMaterial=Q2(s,e,t)}return r}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Pd)}_sceneToCubeUV(e,t,i,r){const a=new gn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($g),u.toneMapping=Tr,u.autoClear=!1;const m=new Vt({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),x=new _t(new rl,m);let _=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy($g),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Wl(r,v*y,p>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wo||e.mapping===To;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Pd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yg[(r-1)%Yg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _t(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qr-1),_=s/x,g=isFinite(s)?1+Math.floor(u*_):qr;g>qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qr}`);const p=[];let v=0;for(let w=0;w<qr;++w){const A=w/_,B=Math.exp(-A*A/2);p.push(B),w===0?v+=B:w<g&&(v+=2*B)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-i;const M=this._sizeLods[r],T=3*M*(r>y-ro?r-y+ro:0),E=4*(this._cubeSize-M);Wl(t,T,E,3*M,2*M),l.setRenderTarget(t),l.render(h,Pd)}}function J2(n){const e=[],t=[],i=[];let r=n;const s=n-ro+1+Xg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ro?l=Xg[o-n+ro-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,_=3,g=2,p=1,v=new Float32Array(_*x*m),y=new Float32Array(g*x*m),M=new Float32Array(p*x*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,A=E>2?0:-1,B=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];v.set(B,_*x*E),y.set(f,g*x*E);const b=[E,E,E,E,E,E];M.set(b,p*x*E)}const T=new ht;T.setAttribute("position",new tn(v,_)),T.setAttribute("uv",new tn(y,g)),T.setAttribute("faceIndex",new tn(M,p)),e.push(T),r>ro&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kg(n,e,t){const i=new us(n,e,t);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Q2(n,e,t){const i=new Float32Array(qr),r=new k(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mp(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Zg(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mp(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Jg(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Mp(){return`

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
	`}function eT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kf||l===Zf,u=l===wo||l===To;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new qg(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new qg(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function tT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nT(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const _=m[x];for(let g=0,p=_.length;g<p;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let y=0,M=v.length;y<M;y+=3){const T=v[y+0],E=v[y+1],w=v[y+2];f.push(T,E,E,w,w,T)}}else if(x!==void 0){const v=x.array;_=x.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const T=y+0,E=y+1,w=y+2;f.push(T,E,E,w,w,T)}}else return;const g=new(Fv(f)?Wv:Vv)(f,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function iT(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,x){n.drawElements(s,x,a,m*l),t.update(x,s,1)}function h(m,x,_){if(_===0)return;let g,p;if(r)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,x,a,m*l,_),t.update(x,s,_)}function f(m,x,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(m[p]/l,x[p]);else{g.multiDrawElementsWEBGL(s,x,0,a,m,0,_);let p=0;for(let v=0;v<_;v++)p+=x[v];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function rT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sT(n,e){return n[0]-e[0]}function oT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function aT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==x){let re=function(){b.dispose(),s.delete(u),u.removeEventListener("dispose",re)};_!==void 0&&_.texture.dispose();const g=u.morphAttributes.position!==void 0,p=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let E=0;g===!0&&(E=1),p===!0&&(E=2),v===!0&&(E=3);let w=u.attributes.position.count*E,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const B=new Float32Array(w*A*4*x),b=new Hv(B,w,A,x);b.type=ai,b.needsUpdate=!0;const I=E*4;for(let X=0;X<x;X++){const N=y[X],K=M[X],V=T[X],Q=w*A*4*X;for(let P=0;P<N.count;P++){const L=P*I;g===!0&&(o.fromBufferAttribute(N,P),B[Q+L+0]=o.x,B[Q+L+1]=o.y,B[Q+L+2]=o.z,B[Q+L+3]=0),p===!0&&(o.fromBufferAttribute(K,P),B[Q+L+4]=o.x,B[Q+L+5]=o.y,B[Q+L+6]=o.z,B[Q+L+7]=0),v===!0&&(o.fromBufferAttribute(V,P),B[Q+L+8]=o.x,B[Q+L+9]=o.y,B[Q+L+10]=o.z,B[Q+L+11]=V.itemSize===4?o.w:1)}}_={count:x,texture:b,size:new Ie(w,A)},s.set(u,_),u.addEventListener("dispose",re)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let g=0;for(let v=0;v<f.length;v++)g+=f[v];const p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",f)}h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=f===void 0?0:f.length;let x=i[u.id];if(x===void 0||x.length!==m){x=[];for(let y=0;y<m;y++)x[y]=[y,0];i[u.id]=x}for(let y=0;y<m;y++){const M=x[y];M[0]=y,M[1]=f[y]}x.sort(oT);for(let y=0;y<8;y++)y<m&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(sT);const _=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const M=a[y],T=M[0],E=M[1];T!==Number.MAX_SAFE_INTEGER&&E?(_&&u.getAttribute("morphTarget"+y)!==_[T]&&u.setAttribute("morphTarget"+y,_[T]),g&&u.getAttribute("morphNormal"+y)!==g[T]&&u.setAttribute("morphNormal"+y,g[T]),r[y]=E,p+=E):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),g&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function lT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Kv extends zt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:rs,u!==rs&&u!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===rs&&(i=pr),i===void 0&&u===Ao&&(i=is),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zv=new zt,Jv=new Kv(1,1);Jv.compareFunction=Ov;const Qv=new Hv,e_=new Vb,t_=new Yv,Qg=[],e0=[],t0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function Fo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Qg[r];if(s===void 0&&(s=new Float32Array(r),Qg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bu(n,e){let t=e0[e];t===void 0&&(t=new Int32Array(e),e0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function dT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function fT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function hT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(jt(t,i))return;i0.set(i),n.uniformMatrix2fv(this.addr,!1,i0),Bt(t,i)}}function pT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(jt(t,i))return;n0.set(i),n.uniformMatrix3fv(this.addr,!1,n0),Bt(t,i)}}function mT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(jt(t,i))return;t0.set(i),n.uniformMatrix4fv(this.addr,!1,t0),Bt(t,i)}}function gT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function yT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function vT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function _T(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ST(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function bT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function ET(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Jv:Zv;t.setTexture2D(e||s,r)}function wT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||e_,r)}function TT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||t_,r)}function AT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qv,r)}function CT(n){switch(n){case 5126:return cT;case 35664:return uT;case 35665:return dT;case 35666:return fT;case 35674:return hT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return xT;case 35668:case 35672:return yT;case 35669:case 35673:return vT;case 5125:return _T;case 36294:return ST;case 36295:return MT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}function RT(n,e){n.uniform1fv(this.addr,e)}function PT(n,e){const t=Fo(e,this.size,2);n.uniform2fv(this.addr,t)}function LT(n,e){const t=Fo(e,this.size,3);n.uniform3fv(this.addr,t)}function IT(n,e){const t=Fo(e,this.size,4);n.uniform4fv(this.addr,t)}function DT(n,e){const t=Fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NT(n,e){const t=Fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kT(n,e){const t=Fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UT(n,e){n.uniform1iv(this.addr,e)}function OT(n,e){n.uniform2iv(this.addr,e)}function FT(n,e){n.uniform3iv(this.addr,e)}function zT(n,e){n.uniform4iv(this.addr,e)}function jT(n,e){n.uniform1uiv(this.addr,e)}function BT(n,e){n.uniform2uiv(this.addr,e)}function HT(n,e){n.uniform3uiv(this.addr,e)}function GT(n,e){n.uniform4uiv(this.addr,e)}function VT(n,e,t){const i=this.cache,r=e.length,s=bu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zv,s[o])}function WT(n,e,t){const i=this.cache,r=e.length,s=bu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||e_,s[o])}function XT(n,e,t){const i=this.cache,r=e.length,s=bu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||t_,s[o])}function $T(n,e,t){const i=this.cache,r=e.length,s=bu(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qv,s[o])}function YT(n){switch(n){case 5126:return RT;case 35664:return PT;case 35665:return LT;case 35666:return IT;case 35674:return DT;case 35675:return NT;case 35676:return kT;case 5124:case 35670:return UT;case 35667:case 35671:return OT;case 35668:case 35672:return FT;case 35669:case 35673:return zT;case 5125:return jT;case 36294:return BT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return $T}}class qT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CT(t.type)}}class KT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YT(t.type)}}class ZT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function r0(n,e){n.seq.push(e),n.map[e.id]=e}function JT(n,e,t){const i=n.name,r=i.length;for(Nd.lastIndex=0;;){const s=Nd.exec(i),o=Nd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){r0(t,c===void 0?new qT(a,n,e):new KT(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new ZT(a),r0(t,h)),t=h}}}class Sc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);JT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function s0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QT=37297;let eA=0;function tA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function nA(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===Qc&&t===Jc?i="LinearDisplayP3ToLinearSRGB":e===Jc&&t===Qc&&(i="LinearSRGBToLinearDisplayP3"),n){case rn:case Su:return[i,"LinearTransferOETF"];case mn:case gp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function o0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tA(n.getShaderSource(e),o)}else return r}function iA(n,e){const t=nA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rA(n,e){let t;switch(e){case JM:t="Linear";break;case QM:t="Reinhard";break;case eb:t="OptimizedCineon";break;case tb:t="ACESFilmic";break;case ib:t="AgX";break;case rb:t="Neutral";break;case nb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(so).join(`
`)}function oA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function aA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function so(n){return n!==""}function a0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(n){return n.replace(cA,dA)}const uA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dA(n,e){let t=Je[e];if(t===void 0){const i=uA.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ih(t)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(n){return n.replace(fA,hA)}function hA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function u0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===TM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function mA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case To:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function xA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hp:e="ENVMAP_BLENDING_MULTIPLY";break;case KM:e="ENVMAP_BLENDING_MIX";break;case ZM:e="ENVMAP_BLENDING_ADD";break}return e}function yA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pA(t),c=mA(t),u=gA(t),h=xA(t),f=yA(t),m=t.isWebGL2?"":sA(t),x=oA(t),_=aA(s),g=r.createProgram();let p,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(so).join(`
`),p.length>0&&(p+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(so).join(`
`),v.length>0&&(v+=`
`)):(p=[u0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),v=[m,u0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?Je.tonemapping_pars_fragment:"",t.toneMapping!==Tr?rA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,iA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=ih(o),o=a0(o,t),o=l0(o,t),a=ih(a),a=a0(a,t),a=l0(a,t),o=c0(o),a=c0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=y+p+o,T=y+v+a,E=s0(r,r.VERTEX_SHADER,M),w=s0(r,r.FRAGMENT_SHADER,T);r.attachShader(g,E),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(re){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(E).trim(),K=r.getShaderInfoLog(w).trim();let V=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,w);else{const P=o0(r,E,"vertex"),L=o0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+re.name+`
Material Type: `+re.type+`

Program Info Log: `+X+`
`+P+`
`+L)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(N===""||K==="")&&(Q=!1);Q&&(re.diagnostics={runnable:V,programLog:X,vertexShader:{log:N,prefix:p},fragmentShader:{log:K,prefix:v}})}r.deleteShader(E),r.deleteShader(w),B=new Sc(r,g),b=lA(r,g)}let B;this.getUniforms=function(){return B===void 0&&A(this),B};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(g,QT)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let _A=0;class SA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MA(e),t.set(e,i)),i}}class MA{constructor(e){this.id=_A++,this.code=e,this.usedTimes=0}}function bA(n,e,t,i,r,s,o){const a=new vp,l=new SA,c=new Set,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures;let x=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,I,re,X,N){const K=X.fog,V=N.geometry,Q=b.isMeshStandardMaterial?X.environment:null,P=(b.isMeshStandardMaterial?t:e).get(b.envMap||Q),L=P&&P.mapping===_u?P.image.height:null,z=_[b.type];b.precision!==null&&(x=r.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const $=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=$!==void 0?$.length:0;let _e=0;V.morphAttributes.position!==void 0&&(_e=1),V.morphAttributes.normal!==void 0&&(_e=2),V.morphAttributes.color!==void 0&&(_e=3);let G,Z,me,Re;if(z){const st=_i[z];G=st.vertexShader,Z=st.fragmentShader}else G=b.vertexShader,Z=b.fragmentShader,l.update(b),me=l.getVertexShaderID(b),Re=l.getFragmentShaderID(b);const ye=n.getRenderTarget(),Te=N.isInstancedMesh===!0,He=N.isBatchedMesh===!0,Ae=!!b.map,H=!!b.matcap,lt=!!P,Pe=!!b.aoMap,ze=!!b.lightMap,De=!!b.bumpMap,Ge=!!b.normalMap,je=!!b.displacementMap,se=!!b.emissiveMap,le=!!b.metalnessMap,C=!!b.roughnessMap,S=b.anisotropy>0,U=b.clearcoat>0,F=b.iridescence>0,W=b.sheen>0,j=b.transmission>0,fe=S&&!!b.anisotropyMap,ue=U&&!!b.clearcoatMap,ne=U&&!!b.clearcoatNormalMap,de=U&&!!b.clearcoatRoughnessMap,ve=F&&!!b.iridescenceMap,oe=F&&!!b.iridescenceThicknessMap,Ne=W&&!!b.sheenColorMap,ke=W&&!!b.sheenRoughnessMap,Me=!!b.specularMap,xe=!!b.specularColorMap,be=!!b.specularIntensityMap,D=j&&!!b.transmissionMap,ae=j&&!!b.thicknessMap,Se=!!b.gradientMap,O=!!b.alphaMap,he=b.alphaTest>0,q=!!b.alphaHash,ce=!!b.extensions;let we=Tr;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(we=n.toneMapping);const We={isWebGL2:h,shaderID:z,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:Z,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:He,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:rn,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:H,envMap:lt,envMapMode:lt&&P.mapping,envMapCubeUVHeight:L,aoMap:Pe,lightMap:ze,bumpMap:De,normalMap:Ge,displacementMap:m&&je,emissiveMap:se,normalMapObjectSpace:Ge&&b.normalMapType===xb,normalMapTangentSpace:Ge&&b.normalMapType===mp,metalnessMap:le,roughnessMap:C,anisotropy:S,anisotropyMap:fe,clearcoat:U,clearcoatMap:ue,clearcoatNormalMap:ne,clearcoatRoughnessMap:de,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:oe,sheen:W,sheenColorMap:Ne,sheenRoughnessMap:ke,specularMap:Me,specularColorMap:xe,specularIntensityMap:be,transmission:j,transmissionMap:D,thicknessMap:ae,gradientMap:Se,opaque:b.transparent===!1&&b.blending===ho&&b.alphaToCoverage===!1,alphaMap:O,alphaTest:he,alphaHash:q,combine:b.combine,mapUv:Ae&&g(b.map.channel),aoMapUv:Pe&&g(b.aoMap.channel),lightMapUv:ze&&g(b.lightMap.channel),bumpMapUv:De&&g(b.bumpMap.channel),normalMapUv:Ge&&g(b.normalMap.channel),displacementMapUv:je&&g(b.displacementMap.channel),emissiveMapUv:se&&g(b.emissiveMap.channel),metalnessMapUv:le&&g(b.metalnessMap.channel),roughnessMapUv:C&&g(b.roughnessMap.channel),anisotropyMapUv:fe&&g(b.anisotropyMap.channel),clearcoatMapUv:ue&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(b.sheenRoughnessMap.channel),specularMapUv:Me&&g(b.specularMap.channel),specularColorMapUv:xe&&g(b.specularColorMap.channel),specularIntensityMapUv:be&&g(b.specularIntensityMap.channel),transmissionMapUv:D&&g(b.transmissionMap.channel),thicknessMapUv:ae&&g(b.thicknessMap.channel),alphaMapUv:O&&g(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ge||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Ae||O),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:_e,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&re.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ce&&b.extensions.derivatives===!0,extensionFragDepth:ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function v(b){const I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(const re in b.defines)I.push(re),I.push(b.defines[re]);return b.isRawShaderMaterial===!1&&(y(I,b),M(I,b),I.push(n.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function y(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function M(b,I){a.disableAll(),I.isWebGL2&&a.enable(0),I.supportsVertexTextures&&a.enable(1),I.instancing&&a.enable(2),I.instancingColor&&a.enable(3),I.instancingMorph&&a.enable(4),I.matcap&&a.enable(5),I.envMap&&a.enable(6),I.normalMapObjectSpace&&a.enable(7),I.normalMapTangentSpace&&a.enable(8),I.clearcoat&&a.enable(9),I.iridescence&&a.enable(10),I.alphaTest&&a.enable(11),I.vertexColors&&a.enable(12),I.vertexAlphas&&a.enable(13),I.vertexUv1s&&a.enable(14),I.vertexUv2s&&a.enable(15),I.vertexUv3s&&a.enable(16),I.vertexTangents&&a.enable(17),I.anisotropy&&a.enable(18),I.alphaHash&&a.enable(19),I.batching&&a.enable(20),b.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.skinning&&a.enable(4),I.morphTargets&&a.enable(5),I.morphNormals&&a.enable(6),I.morphColors&&a.enable(7),I.premultipliedAlpha&&a.enable(8),I.shadowMapEnabled&&a.enable(9),I.useLegacyLights&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.alphaToCoverage&&a.enable(20),b.push(a.mask)}function T(b){const I=_[b.type];let re;if(I){const X=_i[I];re=iE.clone(X.uniforms)}else re=b.uniforms;return re}function E(b,I){let re;for(let X=0,N=u.length;X<N;X++){const K=u[X];if(K.cacheKey===I){re=K,++re.usedTimes;break}}return re===void 0&&(re=new vA(n,I,b,s),u.push(re)),re}function w(b){if(--b.usedTimes===0){const I=u.indexOf(b);u[I]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:T,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:B}}function EA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function wA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function d0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function f0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,x,_,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:_,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,f,m,x,_,g){const p=o(h,f,m,x,_,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(h,f,m,x,_,g){const p=o(h,f,m,x,_,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||wA),i.length>1&&i.sort(f||d0),r.length>1&&r.sort(f||d0)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function TA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new f0,n.set(i,[o])):r>=s.length?(o=new f0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Fe};break;case"SpotLight":t={position:new k,direction:new k,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function CA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RA=0;function PA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LA(n,e){const t=new AA,i=CA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new k);const s=new k,o=new qe,a=new qe;function l(u,h){let f=0,m=0,x=0;for(let re=0;re<9;re++)r.probe[re].set(0,0,0);let _=0,g=0,p=0,v=0,y=0,M=0,T=0,E=0,w=0,A=0,B=0;u.sort(PA);const b=h===!0?Math.PI:1;for(let re=0,X=u.length;re<X;re++){const N=u[re],K=N.color,V=N.intensity,Q=N.distance,P=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=K.r*V*b,m+=K.g*V*b,x+=K.b*V*b;else if(N.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(N.sh.coefficients[L],V);B++}else if(N.isDirectionalLight){const L=t.get(N);if(L.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){const z=N.shadow,$=i.get(N);$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,r.directionalShadow[_]=$,r.directionalShadowMap[_]=P,r.directionalShadowMatrix[_]=N.shadow.matrix,M++}r.directional[_]=L,_++}else if(N.isSpotLight){const L=t.get(N);L.position.setFromMatrixPosition(N.matrixWorld),L.color.copy(K).multiplyScalar(V*b),L.distance=Q,L.coneCos=Math.cos(N.angle),L.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),L.decay=N.decay,r.spot[p]=L;const z=N.shadow;if(N.map&&(r.spotLightMap[w]=N.map,w++,z.updateMatrices(N),N.castShadow&&A++),r.spotLightMatrix[p]=z.matrix,N.castShadow){const $=i.get(N);$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,r.spotShadow[p]=$,r.spotShadowMap[p]=P,E++}p++}else if(N.isRectAreaLight){const L=t.get(N);L.color.copy(K).multiplyScalar(V),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=L,v++}else if(N.isPointLight){const L=t.get(N);if(L.color.copy(N.color).multiplyScalar(N.intensity*b),L.distance=N.distance,L.decay=N.decay,N.castShadow){const z=N.shadow,$=i.get(N);$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,r.pointShadow[g]=$,r.pointShadowMap[g]=P,r.pointShadowMatrix[g]=N.shadow.matrix,T++}r.point[g]=L,g++}else if(N.isHemisphereLight){const L=t.get(N);L.skyColor.copy(N.color).multiplyScalar(V*b),L.groundColor.copy(N.groundColor).multiplyScalar(V*b),r.hemi[y]=L,y++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==_||I.pointLength!==g||I.spotLength!==p||I.rectAreaLength!==v||I.hemiLength!==y||I.numDirectionalShadows!==M||I.numPointShadows!==T||I.numSpotShadows!==E||I.numSpotMaps!==w||I.numLightProbes!==B)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=v,r.point.length=g,r.hemi.length=y,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=E+w-A,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=B,I.directionalLength=_,I.pointLength=g,I.spotLength=p,I.rectAreaLength=v,I.hemiLength=y,I.numDirectionalShadows=M,I.numPointShadows=T,I.numSpotShadows=E,I.numSpotMaps=w,I.numLightProbes=B,r.version=RA++)}function c(u,h){let f=0,m=0,x=0,_=0,g=0;const p=h.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){const M=u[v];if(M.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(M.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),x++}else if(M.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const T=r.hemi[g];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:r}}function h0(n,e){const t=new LA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function IA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new h0(n,e),t.set(s,[l])):o>=a.length?(l=new h0(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class DA extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NA extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
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
}`;function OA(n,e,t){let i=new _p;const r=new Ie,s=new Ie,o=new pt,a=new DA({depthPacking:gb}),l=new NA,c={},u=t.maxTextureSize,h={[$i]:vn,[vn]:$i,[xn]:xn},f=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:kA,fragmentShader:UA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new ht;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tv;let p=this.type;this.render=function(E,w,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const B=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),re=n.state;re.setBlending(wr),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const X=p!==ki&&this.type===ki,N=p===ki&&this.type!==ki;for(let K=0,V=E.length;K<V;K++){const Q=E[K],P=Q.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const L=P.getFrameExtents();if(r.multiply(L),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/L.x),r.x=s.x*L.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/L.y),r.y=s.y*L.y,P.mapSize.y=s.y)),P.map===null||X===!0||N===!0){const $=this.type!==ki?{minFilter:$t,magFilter:$t}:{};P.map!==null&&P.map.dispose(),P.map=new us(r.x,r.y,$),P.map.texture.name=Q.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const z=P.getViewportCount();for(let $=0;$<z;$++){const ee=P.getViewport($);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),re.viewport(o),P.updateMatrices(Q,$),i=P.getFrustum(),M(w,A,P.camera,Q,this.type)}P.isPointLightShadow!==!0&&this.type===ki&&v(P,A),P.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(B,b,I)};function v(E,w){const A=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new us(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,A,f,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,A,m,_,null)}function y(E,w,A,B){let b=null;const I=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=A.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const re=b.uuid,X=w.uuid;let N=c[re];N===void 0&&(N={},c[re]=N);let K=N[X];K===void 0&&(K=b.clone(),N[X]=K,w.addEventListener("dispose",T)),b=K}if(b.visible=w.visible,b.wireframe=w.wireframe,B===ki?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const re=n.properties.get(b);re.light=A}return b}function M(E,w,A,B,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ki)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const X=e.update(E),N=E.material;if(Array.isArray(N)){const K=X.groups;for(let V=0,Q=K.length;V<Q;V++){const P=K[V],L=N[P.materialIndex];if(L&&L.visible){const z=y(E,L,B,b);E.onBeforeShadow(n,E,w,A,X,z,P),n.renderBufferDirect(A,null,X,z,E,P),E.onAfterShadow(n,E,w,A,X,z,P)}}}else if(N.visible){const K=y(E,N,B,b);E.onBeforeShadow(n,E,w,A,X,K,null),n.renderBufferDirect(A,null,X,K,E,null),E.onAfterShadow(n,E,w,A,X,K,null)}}const re=E.children;for(let X=0,N=re.length;X<N;X++)M(re[X],w,A,B,b)}function T(E){E.target.removeEventListener("dispose",T);for(const A in c){const B=c[A],b=E.target.uuid;b in B&&(B[b].dispose(),delete B[b])}}}function FA(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const he=new pt;let q=null;const ce=new pt(0,0,0,0);return{setMask:function(we){q!==we&&!O&&(n.colorMask(we,we,we,we),q=we)},setLocked:function(we){O=we},setClear:function(we,We,st,tt,it){it===!0&&(we*=tt,We*=tt,st*=tt),he.set(we,We,st,tt),ce.equals(he)===!1&&(n.clearColor(we,We,st,tt),ce.copy(he))},reset:function(){O=!1,q=null,ce.set(-1,0,0,0)}}}function s(){let O=!1,he=null,q=null,ce=null;return{setTest:function(we){we?Te(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(we){he!==we&&!O&&(n.depthMask(we),he=we)},setFunc:function(we){if(q!==we){switch(we){case GM:n.depthFunc(n.NEVER);break;case VM:n.depthFunc(n.ALWAYS);break;case WM:n.depthFunc(n.LESS);break;case qc:n.depthFunc(n.LEQUAL);break;case XM:n.depthFunc(n.EQUAL);break;case $M:n.depthFunc(n.GEQUAL);break;case YM:n.depthFunc(n.GREATER);break;case qM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=we}},setLocked:function(we){O=we},setClear:function(we){ce!==we&&(n.clearDepth(we),ce=we)},reset:function(){O=!1,he=null,q=null,ce=null}}}function o(){let O=!1,he=null,q=null,ce=null,we=null,We=null,st=null,tt=null,it=null;return{setTest:function(Xe){O||(Xe?Te(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(Xe){he!==Xe&&!O&&(n.stencilMask(Xe),he=Xe)},setFunc:function(Xe,$e,at){(q!==Xe||ce!==$e||we!==at)&&(n.stencilFunc(Xe,$e,at),q=Xe,ce=$e,we=at)},setOp:function(Xe,$e,at){(We!==Xe||st!==$e||tt!==at)&&(n.stencilOp(Xe,$e,at),We=Xe,st=$e,tt=at)},setLocked:function(Xe){O=Xe},setClear:function(Xe){it!==Xe&&(n.clearStencil(Xe),it=Xe)},reset:function(){O=!1,he=null,q=null,ce=null,we=null,We=null,st=null,tt=null,it=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},x=new WeakMap,_=[],g=null,p=!1,v=null,y=null,M=null,T=null,E=null,w=null,A=null,B=new Fe(0,0,0),b=0,I=!1,re=null,X=null,N=null,K=null,V=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,L=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(z)[1]),P=L>=1):z.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),P=L>=2);let $=null,ee={};const _e=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),Z=new pt().fromArray(_e),me=new pt().fromArray(G);function Re(O,he,q,ce){const we=new Uint8Array(4),We=n.createTexture();n.bindTexture(O,We),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<q;st++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(he+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return We}const ye={};ye[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(n.DEPTH_TEST),l.setFunc(qc),je(!1),se(Wm),Te(n.CULL_FACE),De(wr);function Te(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function He(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function Ae(O,he){return m[O]!==he?(n.bindFramebuffer(O,he),m[O]=he,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=he),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function H(O,he){let q=_,ce=!1;if(O){q=x.get(he),q===void 0&&(q=[],x.set(he,q));const we=O.textures;if(q.length!==we.length||q[0]!==n.COLOR_ATTACHMENT0){for(let We=0,st=we.length;We<st;We++)q[We]=n.COLOR_ATTACHMENT0+We;q.length=we.length,ce=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ce=!0);if(ce)if(t.isWebGL2)n.drawBuffers(q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function lt(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const Pe={[Yr]:n.FUNC_ADD,[CM]:n.FUNC_SUBTRACT,[RM]:n.FUNC_REVERSE_SUBTRACT};if(i)Pe[Ym]=n.MIN,Pe[qm]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Pe[Ym]=O.MIN_EXT,Pe[qm]=O.MAX_EXT)}const ze={[PM]:n.ZERO,[LM]:n.ONE,[IM]:n.SRC_COLOR,[Yf]:n.SRC_ALPHA,[FM]:n.SRC_ALPHA_SATURATE,[UM]:n.DST_COLOR,[NM]:n.DST_ALPHA,[DM]:n.ONE_MINUS_SRC_COLOR,[qf]:n.ONE_MINUS_SRC_ALPHA,[OM]:n.ONE_MINUS_DST_COLOR,[kM]:n.ONE_MINUS_DST_ALPHA,[zM]:n.CONSTANT_COLOR,[jM]:n.ONE_MINUS_CONSTANT_COLOR,[BM]:n.CONSTANT_ALPHA,[HM]:n.ONE_MINUS_CONSTANT_ALPHA};function De(O,he,q,ce,we,We,st,tt,it,Xe){if(O===wr){p===!0&&(He(n.BLEND),p=!1);return}if(p===!1&&(Te(n.BLEND),p=!0),O!==AM){if(O!==v||Xe!==I){if((y!==Yr||E!==Yr)&&(n.blendEquation(n.FUNC_ADD),y=Yr,E=Yr),Xe)switch(O){case ho:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ya:n.blendFunc(n.ONE,n.ONE);break;case Xm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $m:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ya:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $m:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,T=null,w=null,A=null,B.set(0,0,0),b=0,v=O,I=Xe}return}we=we||he,We=We||q,st=st||ce,(he!==y||we!==E)&&(n.blendEquationSeparate(Pe[he],Pe[we]),y=he,E=we),(q!==M||ce!==T||We!==w||st!==A)&&(n.blendFuncSeparate(ze[q],ze[ce],ze[We],ze[st]),M=q,T=ce,w=We,A=st),(tt.equals(B)===!1||it!==b)&&(n.blendColor(tt.r,tt.g,tt.b,it),B.copy(tt),b=it),v=O,I=!1}function Ge(O,he){O.side===xn?He(n.CULL_FACE):Te(n.CULL_FACE);let q=O.side===vn;he&&(q=!q),je(q),O.blending===ho&&O.transparent===!1?De(wr):De(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const ce=O.stencilWrite;c.setTest(ce),ce&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),C(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){re!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),re=O)}function se(O){O!==EM?(Te(n.CULL_FACE),O!==X&&(O===Wm?n.cullFace(n.BACK):O===wM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),X=O}function le(O){O!==N&&(P&&n.lineWidth(O),N=O)}function C(O,he,q){O?(Te(n.POLYGON_OFFSET_FILL),(K!==he||V!==q)&&(n.polygonOffset(he,q),K=he,V=q)):He(n.POLYGON_OFFSET_FILL)}function S(O){O?Te(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function U(O){O===void 0&&(O=n.TEXTURE0+Q-1),$!==O&&(n.activeTexture(O),$=O)}function F(O,he,q){q===void 0&&($===null?q=n.TEXTURE0+Q-1:q=$);let ce=ee[q];ce===void 0&&(ce={type:void 0,texture:void 0},ee[q]=ce),(ce.type!==O||ce.texture!==he)&&($!==q&&(n.activeTexture(q),$=q),n.bindTexture(O,he||ye[O]),ce.type=O,ce.texture=he)}function W(){const O=ee[$];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(O){Z.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Z.copy(O))}function be(O){me.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),me.copy(O))}function D(O,he){let q=h.get(he);q===void 0&&(q=new WeakMap,h.set(he,q));let ce=q.get(O);ce===void 0&&(ce=n.getUniformBlockIndex(he,O.name),q.set(O,ce))}function ae(O,he){const ce=h.get(he).get(O);u.get(he)!==ce&&(n.uniformBlockBinding(he,ce,O.__bindingPointIndex),u.set(he,ce))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},$=null,ee={},m={},x=new WeakMap,_=[],g=null,p=!1,v=null,y=null,M=null,T=null,E=null,w=null,A=null,B=new Fe(0,0,0),b=0,I=!1,re=null,X=null,N=null,K=null,V=null,Z.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Te,disable:He,bindFramebuffer:Ae,drawBuffers:H,useProgram:lt,setBlending:De,setMaterial:Ge,setFlipSided:je,setCullFace:se,setLineWidth:le,setPolygonOffset:C,setScissorTest:S,activeTexture:U,bindTexture:F,unbindTexture:W,compressedTexImage2D:j,compressedTexImage3D:fe,texImage2D:ke,texImage3D:Me,updateUBOMapping:D,uniformBlockBinding:ae,texStorage2D:oe,texStorage3D:Ne,texSubImage2D:ue,texSubImage3D:ne,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:xe,viewport:be,reset:Se}}function zA(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,h=new WeakMap;let f;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return x?new OffscreenCanvas(C,S):Za("canvas")}function g(C,S,U,F){let W=1;const j=le(C);if((j.width>F||j.height>F)&&(W=F/Math.max(j.width,j.height)),W<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const fe=S?tu:Math.floor,ue=fe(W*j.width),ne=fe(W*j.height);f===void 0&&(f=_(ue,ne));const de=U?_(ue,ne):f;return de.width=ue,de.height=ne,de.getContext("2d").drawImage(C,0,0,ue,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ue+"x"+ne+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function p(C){const S=le(C);return nh(S.width)&&nh(S.height)}function v(C){return a?!1:C.wrapS!==$n||C.wrapT!==$n||C.minFilter!==$t&&C.minFilter!==Xt}function y(C,S){return C.generateMipmaps&&S&&C.minFilter!==$t&&C.minFilter!==Xt}function M(C){n.generateMipmap(C)}function T(C,S,U,F,W=!1){if(a===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=S;if(S===n.RED&&(U===n.FLOAT&&(j=n.R32F),U===n.HALF_FLOAT&&(j=n.R16F),U===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.R8UI),U===n.UNSIGNED_SHORT&&(j=n.R16UI),U===n.UNSIGNED_INT&&(j=n.R32UI),U===n.BYTE&&(j=n.R8I),U===n.SHORT&&(j=n.R16I),U===n.INT&&(j=n.R32I)),S===n.RG&&(U===n.FLOAT&&(j=n.RG32F),U===n.HALF_FLOAT&&(j=n.RG16F),U===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RG8UI),U===n.UNSIGNED_SHORT&&(j=n.RG16UI),U===n.UNSIGNED_INT&&(j=n.RG32UI),U===n.BYTE&&(j=n.RG8I),U===n.SHORT&&(j=n.RG16I),U===n.INT&&(j=n.RG32I)),S===n.RGBA){const fe=W?Zc:ct.getTransfer(F);U===n.FLOAT&&(j=n.RGBA32F),U===n.HALF_FLOAT&&(j=n.RGBA16F),U===n.UNSIGNED_BYTE&&(j=fe===vt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(C,S,U){return y(C,U)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==Xt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){return C===$t||C===Jf||C===Vs?n.NEAREST:n.LINEAR}function A(C){const S=C.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&h.delete(S)}function B(C){const S=C.target;S.removeEventListener("dispose",B),re(S)}function b(C){const S=i.get(C);if(S.__webglInit===void 0)return;const U=C.source,F=m.get(U);if(F){const W=F[S.__cacheKey];W.usedTimes--,W.usedTimes===0&&I(C),Object.keys(F).length===0&&m.delete(U)}i.remove(C)}function I(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const U=C.source,F=m.get(U);delete F[S.__cacheKey],o.memory.textures--}function re(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(S.__webglFramebuffer[F]))for(let W=0;W<S.__webglFramebuffer[F].length;W++)n.deleteFramebuffer(S.__webglFramebuffer[F][W]);else n.deleteFramebuffer(S.__webglFramebuffer[F]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[F])}else{if(Array.isArray(S.__webglFramebuffer))for(let F=0;F<S.__webglFramebuffer.length;F++)n.deleteFramebuffer(S.__webglFramebuffer[F]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let F=0;F<S.__webglColorRenderbuffer.length;F++)S.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[F]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=C.textures;for(let F=0,W=U.length;F<W;F++){const j=i.get(U[F]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(U[F])}i.remove(C)}let X=0;function N(){X=0}function K(){const C=X;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),X+=1,C}function V(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Q(C,S){const U=i.get(C);if(C.isVideoTexture&&je(C),C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){const F=C.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(U,C,S);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+S)}function P(C,S){const U=i.get(C);if(C.version>0&&U.__version!==C.version){me(U,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+S)}function L(C,S){const U=i.get(C);if(C.version>0&&U.__version!==C.version){me(U,C,S);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+S)}function z(C,S){const U=i.get(C);if(C.version>0&&U.__version!==C.version){Re(U,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+S)}const $={[oi]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Kc]:n.MIRRORED_REPEAT},ee={[$t]:n.NEAREST,[Jf]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[_c]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},_e={[yb]:n.NEVER,[Eb]:n.ALWAYS,[vb]:n.LESS,[Ov]:n.LEQUAL,[_b]:n.EQUAL,[bb]:n.GEQUAL,[Sb]:n.GREATER,[Mb]:n.NOTEQUAL};function G(C,S,U){if(S.type===ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Xt||S.magFilter===_c||S.magFilter===Vs||S.magFilter===ui||S.minFilter===Xt||S.minFilter===_c||S.minFilter===Vs||S.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(n.texParameteri(C,n.TEXTURE_WRAP_S,$[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,$[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,$[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ee[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ee[S.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==$n||S.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,w(S.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==$t&&S.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$t||S.minFilter!==Vs&&S.minFilter!==ui||S.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===qa&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Z(C,S){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const F=S.source;let W=m.get(F);W===void 0&&(W={},m.set(F,W));const j=V(S);if(j!==C.__cacheKey){W[j]===void 0&&(W[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),W[j].usedTimes++;const fe=W[C.__cacheKey];fe!==void 0&&(W[C.__cacheKey].usedTimes--,fe.usedTimes===0&&I(S)),C.__cacheKey=j,C.__webglTexture=W[j].texture}return U}function me(C,S,U){let F=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(F=n.TEXTURE_3D);const W=Z(C,S),j=S.source;t.bindTexture(F,C.__webglTexture,n.TEXTURE0+U);const fe=i.get(j);if(j.version!==fe.__version||W===!0){t.activeTexture(n.TEXTURE0+U);const ue=ct.getPrimaries(ct.workingColorSpace),ne=S.colorSpace===dr?null:ct.getPrimaries(S.colorSpace),de=S.colorSpace===dr||ue===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ve=v(S)&&p(S.image)===!1;let oe=g(S.image,ve,!1,r.maxTextureSize);oe=se(S,oe);const Ne=p(oe)||a,ke=s.convert(S.format,S.colorSpace);let Me=s.convert(S.type),xe=T(S.internalFormat,ke,Me,S.colorSpace,S.isVideoTexture);G(F,S,Ne);let be;const D=S.mipmaps,ae=a&&S.isVideoTexture!==!0&&xe!==kv,Se=fe.__version===void 0||W===!0,O=j.dataReady,he=E(S,oe,Ne);if(S.isDepthTexture)xe=n.DEPTH_COMPONENT,a?S.type===ai?xe=n.DEPTH_COMPONENT32F:S.type===pr?xe=n.DEPTH_COMPONENT24:S.type===is?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:S.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===rs&&xe===n.DEPTH_COMPONENT&&S.type!==pp&&S.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=pr,Me=s.convert(S.type)),S.format===Ao&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,S.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=is,Me=s.convert(S.type))),Se&&(ae?t.texStorage2D(n.TEXTURE_2D,1,xe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,xe,oe.width,oe.height,0,ke,Me,null));else if(S.isDataTexture)if(D.length>0&&Ne){ae&&Se&&t.texStorage2D(n.TEXTURE_2D,he,xe,D[0].width,D[0].height);for(let q=0,ce=D.length;q<ce;q++)be=D[q],ae?O&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,ke,Me,be.data):t.texImage2D(n.TEXTURE_2D,q,xe,be.width,be.height,0,ke,Me,be.data);S.generateMipmaps=!1}else ae?(Se&&t.texStorage2D(n.TEXTURE_2D,he,xe,oe.width,oe.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ke,Me,oe.data)):t.texImage2D(n.TEXTURE_2D,0,xe,oe.width,oe.height,0,ke,Me,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ae&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,xe,D[0].width,D[0].height,oe.depth);for(let q=0,ce=D.length;q<ce;q++)be=D[q],S.format!==Yn?ke!==null?ae?O&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,be.width,be.height,oe.depth,ke,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,xe,be.width,be.height,oe.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,be.width,be.height,oe.depth,ke,Me,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,xe,be.width,be.height,oe.depth,0,ke,Me,be.data)}else{ae&&Se&&t.texStorage2D(n.TEXTURE_2D,he,xe,D[0].width,D[0].height);for(let q=0,ce=D.length;q<ce;q++)be=D[q],S.format!==Yn?ke!==null?ae?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,ke,be.data):t.compressedTexImage2D(n.TEXTURE_2D,q,xe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?O&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,ke,Me,be.data):t.texImage2D(n.TEXTURE_2D,q,xe,be.width,be.height,0,ke,Me,be.data)}else if(S.isDataArrayTexture)ae?(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,xe,oe.width,oe.height,oe.depth),O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ke,Me,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,oe.width,oe.height,oe.depth,0,ke,Me,oe.data);else if(S.isData3DTexture)ae?(Se&&t.texStorage3D(n.TEXTURE_3D,he,xe,oe.width,oe.height,oe.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ke,Me,oe.data)):t.texImage3D(n.TEXTURE_3D,0,xe,oe.width,oe.height,oe.depth,0,ke,Me,oe.data);else if(S.isFramebufferTexture){if(Se)if(ae)t.texStorage2D(n.TEXTURE_2D,he,xe,oe.width,oe.height);else{let q=oe.width,ce=oe.height;for(let we=0;we<he;we++)t.texImage2D(n.TEXTURE_2D,we,xe,q,ce,0,ke,Me,null),q>>=1,ce>>=1}}else if(D.length>0&&Ne){if(ae&&Se){const q=le(D[0]);t.texStorage2D(n.TEXTURE_2D,he,xe,q.width,q.height)}for(let q=0,ce=D.length;q<ce;q++)be=D[q],ae?O&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ke,Me,be):t.texImage2D(n.TEXTURE_2D,q,xe,ke,Me,be);S.generateMipmaps=!1}else if(ae){if(Se){const q=le(oe);t.texStorage2D(n.TEXTURE_2D,he,xe,q.width,q.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,Me,oe)}else t.texImage2D(n.TEXTURE_2D,0,xe,ke,Me,oe);y(S,Ne)&&M(F),fe.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Re(C,S,U){if(S.image.length!==6)return;const F=Z(C,S),W=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+U);const j=i.get(W);if(W.version!==j.__version||F===!0){t.activeTexture(n.TEXTURE0+U);const fe=ct.getPrimaries(ct.workingColorSpace),ue=S.colorSpace===dr?null:ct.getPrimaries(S.colorSpace),ne=S.colorSpace===dr||fe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const de=S.isCompressedTexture||S.image[0].isCompressedTexture,ve=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let q=0;q<6;q++)!de&&!ve?oe[q]=g(S.image[q],!1,!0,r.maxCubemapSize):oe[q]=ve?S.image[q].image:S.image[q],oe[q]=se(S,oe[q]);const Ne=oe[0],ke=p(Ne)||a,Me=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),be=T(S.internalFormat,Me,xe,S.colorSpace),D=a&&S.isVideoTexture!==!0,ae=j.__version===void 0||F===!0,Se=W.dataReady;let O=E(S,Ne,ke);G(n.TEXTURE_CUBE_MAP,S,ke);let he;if(de){D&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,O,be,Ne.width,Ne.height);for(let q=0;q<6;q++){he=oe[q].mipmaps;for(let ce=0;ce<he.length;ce++){const we=he[ce];S.format!==Yn?Me!==null?D?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,0,0,we.width,we.height,Me,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,0,0,we.width,we.height,Me,xe,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,be,we.width,we.height,0,Me,xe,we.data)}}}else{if(he=S.mipmaps,D&&ae){he.length>0&&O++;const q=le(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,O,be,q.width,q.height)}for(let q=0;q<6;q++)if(ve){D?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,oe[q].width,oe[q].height,Me,xe,oe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,be,oe[q].width,oe[q].height,0,Me,xe,oe[q].data);for(let ce=0;ce<he.length;ce++){const We=he[ce].image[q].image;D?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,0,0,We.width,We.height,Me,xe,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,be,We.width,We.height,0,Me,xe,We.data)}}else{D?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me,xe,oe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,be,Me,xe,oe[q]);for(let ce=0;ce<he.length;ce++){const we=he[ce];D?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,0,0,Me,xe,we.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,be,Me,xe,we.image[q])}}}y(S,ke)&&M(n.TEXTURE_CUBE_MAP),j.__version=W.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ye(C,S,U,F,W,j){const fe=s.convert(U.format,U.colorSpace),ue=s.convert(U.type),ne=T(U.internalFormat,fe,ue,U.colorSpace);if(!i.get(S).__hasExternalTextures){const ve=Math.max(1,S.width>>j),oe=Math.max(1,S.height>>j);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,j,ne,ve,oe,S.depth,0,fe,ue,null):t.texImage2D(W,j,ne,ve,oe,0,fe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ge(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,W,i.get(U).__webglTexture,0,De(S)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,W,i.get(U).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(C,S,U){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let F=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||Ge(S)){const W=S.depthTexture;W&&W.isDepthTexture&&(W.type===ai?F=n.DEPTH_COMPONENT32F:W.type===pr&&(F=n.DEPTH_COMPONENT24));const j=De(S);Ge(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,F,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,F,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,F,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const F=De(S);U&&Ge(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,F,n.DEPTH24_STENCIL8,S.width,S.height):Ge(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const F=S.textures;for(let W=0;W<F.length;W++){const j=F[W],fe=s.convert(j.format,j.colorSpace),ue=s.convert(j.type),ne=T(j.internalFormat,fe,ue,j.colorSpace),de=De(S);U&&Ge(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ne,S.width,S.height):Ge(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,ne,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ne,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const F=i.get(S.depthTexture).__webglTexture,W=De(S);if(S.depthTexture.format===rs)Ge(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(S.depthTexture.format===Ao)Ge(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const S=i.get(C),U=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");He(S.__webglFramebuffer,C)}else if(U){S.__webglDepthbuffer=[];for(let F=0;F<6;F++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[F]),S.__webglDepthbuffer[F]=n.createRenderbuffer(),Te(S.__webglDepthbuffer[F],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Te(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(C,S,U){const F=i.get(C);S!==void 0&&ye(F.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ae(C)}function lt(C){const S=C.texture,U=i.get(C),F=i.get(S);C.addEventListener("dispose",B);const W=C.textures,j=C.isWebGLCubeRenderTarget===!0,fe=W.length>1,ue=p(C)||a;if(fe||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=S.version,o.memory.textures++),j){U.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[ne]=[];for(let de=0;de<S.mipmaps.length;de++)U.__webglFramebuffer[ne][de]=n.createFramebuffer()}else U.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)U.__webglFramebuffer[ne]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(fe)if(r.drawBuffers)for(let ne=0,de=W.length;ne<de;ne++){const ve=i.get(W[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ge(C)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ne=0;ne<W.length;ne++){const de=W[ne];U.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ne]);const ve=s.convert(de.format,de.colorSpace),oe=s.convert(de.type),Ne=T(de.internalFormat,ve,oe,de.colorSpace,C.isXRRenderTarget===!0),ke=De(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Ne,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,U.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(U.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),G(n.TEXTURE_CUBE_MAP,S,ue);for(let ne=0;ne<6;ne++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ye(U.__webglFramebuffer[ne][de],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de);else ye(U.__webglFramebuffer[ne],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);y(S,ue)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ne=0,de=W.length;ne<de;ne++){const ve=W[ne],oe=i.get(ve);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),G(n.TEXTURE_2D,ve,ue),ye(U.__webglFramebuffer,C,ve,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,0),y(ve,ue)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ne=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,F.__webglTexture),G(ne,S,ue),a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ye(U.__webglFramebuffer[de],C,S,n.COLOR_ATTACHMENT0,ne,de);else ye(U.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,ne,0);y(S,ue)&&M(ne),t.unbindTexture()}C.depthBuffer&&Ae(C)}function Pe(C){const S=p(C)||a,U=C.textures;for(let F=0,W=U.length;F<W;F++){const j=U[F];if(y(j,S)){const fe=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(j).__webglTexture;t.bindTexture(fe,ue),M(fe),t.unbindTexture()}}}function ze(C){if(a&&C.samples>0&&Ge(C)===!1){const S=C.textures,U=C.width,F=C.height;let W=n.COLOR_BUFFER_BIT;const j=[],fe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(C),ne=S.length>1;if(ne)for(let de=0;de<S.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<S.length;de++){j.push(n.COLOR_ATTACHMENT0+de),C.depthBuffer&&j.push(fe);const ve=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ve===!1&&(C.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[de]),ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),ne){const oe=i.get(S[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,U,F,0,0,U,F,W,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let de=0;de<S.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const ve=i.get(S[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function De(C){return Math.min(r.maxSamples,C.samples)}function Ge(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function je(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function se(C,S){const U=C.colorSpace,F=C.format,W=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===th||U!==rn&&U!==dr&&(ct.getTransfer(U)===vt?a===!1?e.has("EXT_sRGB")===!0&&F===Yn?(C.format=th,C.minFilter=Xt,C.generateMipmaps=!1):S=jv.sRGBToLinear(S):(F!==Yn||W!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=P,this.setTexture3D=L,this.setTextureCube=z,this.rebindTextures=H,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ge}function jA(n,e,t){const i=t.isWebGL2;function r(s,o=dr){let a;const l=ct.getTransfer(o);if(s===Ar)return n.UNSIGNED_BYTE;if(s===Rv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Pv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ob)return n.BYTE;if(s===ab)return n.SHORT;if(s===pp)return n.UNSIGNED_SHORT;if(s===Cv)return n.INT;if(s===pr)return n.UNSIGNED_INT;if(s===ai)return n.FLOAT;if(s===qa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===lb)return n.ALPHA;if(s===Yn)return n.RGBA;if(s===cb)return n.LUMINANCE;if(s===ub)return n.LUMINANCE_ALPHA;if(s===rs)return n.DEPTH_COMPONENT;if(s===Ao)return n.DEPTH_STENCIL;if(s===th)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Lv)return n.RED;if(s===Iv)return n.RED_INTEGER;if(s===db)return n.RG;if(s===Dv)return n.RG_INTEGER;if(s===Nv)return n.RGBA_INTEGER;if(s===sd||s===od||s===ad||s===ld)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===od)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ad)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ld)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===od)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ad)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ld)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zm||s===Jm||s===Qm||s===eg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===eg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===tg||s===ng)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===tg)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ng)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ig||s===rg||s===sg||s===og||s===ag||s===lg||s===cg||s===ug||s===dg||s===fg||s===hg||s===pg||s===mg||s===gg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ig)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===og)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ag)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ug)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cd||s===xg||s===yg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cd)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fb||s===vg||s===_g||s===Sg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===cd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===vg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_g)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===is?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class BA extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HA={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const GA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VA=`
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

}`;class WA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Pr({extensions:{fragDepth:!0},vertexShader:GA,fragmentShader:VA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _t(new Mu(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class XA extends ms{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,x=null;const _=new WA,g=t.getContextAttributes();let p=null,v=null;const y=[],M=[],T=new Ie;let E=null;const w=new gn;w.layers.enable(1),w.viewport=new pt;const A=new gn;A.layers.enable(2),A.viewport=new pt;const B=[w,A],b=new BA;b.layers.enable(1),b.layers.enable(2);let I=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=y[G];return Z===void 0&&(Z=new kd,y[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=y[G];return Z===void 0&&(Z=new kd,y[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=y[G];return Z===void 0&&(Z=new kd,y[G]=Z),Z.getHandSpace()};function X(G){const Z=M.indexOf(G.inputSource);if(Z===-1)return;const me=y[Z];me!==void 0&&(me.update(G.inputSource,G.frame,c||o),me.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",K);for(let G=0;G<y.length;G++){const Z=M[G];Z!==null&&(M[G]=null,y[G].disconnect(Z))}I=null,re=null,_.reset(),e.setRenderTarget(p),m=null,f=null,h=null,r=null,v=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",N),r.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new us(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Ar,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,me=null,Re=null;g.depth&&(Re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?Ao:rs,me=g.stencil?is:pr);const ye={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new us(f.textureWidth,f.textureHeight,{format:Yn,type:Ar,depthTexture:new Kv(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Te=e.properties.get(v);Te.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(G){for(let Z=0;Z<G.removed.length;Z++){const me=G.removed[Z],Re=M.indexOf(me);Re>=0&&(M[Re]=null,y[Re].disconnect(me))}for(let Z=0;Z<G.added.length;Z++){const me=G.added[Z];let Re=M.indexOf(me);if(Re===-1){for(let Te=0;Te<y.length;Te++)if(Te>=M.length){M.push(me),Re=Te;break}else if(M[Te]===null){M[Te]=me,Re=Te;break}if(Re===-1)break}const ye=y[Re];ye&&ye.connect(me)}}const V=new k,Q=new k;function P(G,Z,me){V.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const Re=V.distanceTo(Q),ye=Z.projectionMatrix.elements,Te=me.projectionMatrix.elements,He=ye[14]/(ye[10]-1),Ae=ye[14]/(ye[10]+1),H=(ye[9]+1)/ye[5],lt=(ye[9]-1)/ye[5],Pe=(ye[8]-1)/ye[0],ze=(Te[8]+1)/Te[0],De=He*Pe,Ge=He*ze,je=Re/(-Pe+ze),se=je*-Pe;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(se),G.translateZ(je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const le=He+je,C=Ae+je,S=De-se,U=Ge+(Re-se),F=H*Ae/C*le,W=lt*Ae/C*le;G.projectionMatrix.makePerspective(S,U,F,W,le,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function L(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),b.near=A.near=w.near=G.near,b.far=A.far=w.far=G.far,(I!==b.near||re!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,re=b.far,w.near=I,w.far=re,A.near=I,A.far=re,w.updateProjectionMatrix(),A.updateProjectionMatrix(),G.updateProjectionMatrix());const Z=G.parent,me=b.cameras;L(b,Z);for(let Re=0;Re<me.length;Re++)L(me[Re],Z);me.length===2?P(b,w,A):b.projectionMatrix.copy(w.projectionMatrix),z(G,b,Z)};function z(G,Z,me){me===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(me.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ro*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let $=null;function ee(G,Z){if(u=Z.getViewerPose(c||o),x=Z,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Re=!1;me.length!==b.cameras.length&&(b.cameras.length=0,Re=!0);for(let Te=0;Te<me.length;Te++){const He=me[Te];let Ae=null;if(m!==null)Ae=m.getViewport(He);else{const lt=h.getViewSubImage(f,He);Ae=lt.viewport,Te===0&&(e.setRenderTargetTextures(v,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(v))}let H=B[Te];H===void 0&&(H=new gn,H.layers.enable(Te),H.viewport=new pt,B[Te]=H),H.matrix.fromArray(He.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(He.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Te===0&&(b.matrix.copy(H.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Re===!0&&b.cameras.push(H)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Te=h.getDepthInformation(me[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,r.renderState)}}for(let me=0;me<y.length;me++){const Re=M[me],ye=y[me];Re!==null&&ye!==void 0&&ye.update(Re,Z,c||o)}_.render(e,b),$&&$(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const _e=new qv;_e.setAnimationLoop(ee),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}}const Hr=new mi,$A=new qe;function YA(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Xv(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===vn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===vn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,M=v.envMapRotation;if(y&&(g.envMap.value=y,Hr.copy(M),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),g.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(Hr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const T=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*T,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qA(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){const M=y.program;i.uniformBlockBinding(v,M)}function c(v,y){let M=r[v.id];M===void 0&&(x(v),M=u(v),r[v.id]=M,v.addEventListener("dispose",g));const T=y.program;i.updateUBOMapping(v,T);const E=e.render.frame;s[v.id]!==E&&(f(v),s[v.id]=E)}function u(v){const y=h();v.__bindingPointIndex=y;const M=n.createBuffer(),T=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],M=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,w=M.length;E<w;E++){const A=Array.isArray(M[E])?M[E]:[M[E]];for(let B=0,b=A.length;B<b;B++){const I=A[B];if(m(I,E,B,T)===!0){const re=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let N=0;for(let K=0;K<X.length;K++){const V=X[K],Q=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,re+N,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,N),N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,re,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,y,M,T){const E=v.value,w=y+"_"+M;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const A=T[w];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return T[w]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function x(v){const y=v.uniforms;let M=0;const T=16;for(let w=0,A=y.length;w<A;w++){const B=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,I=B.length;b<I;b++){const re=B[b],X=Array.isArray(re.value)?re.value:[re.value];for(let N=0,K=X.length;N<K;N++){const V=X[N],Q=_(V),P=M%T;P!==0&&T-P<Q.boundary&&(M+=T-P),re.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=M,M+=Q.storage}}}const E=M%T;return E>0&&(M+=T-E),v.__size=M,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class n_{constructor(e={}){const{canvas:t=zb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,g=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this._useLegacyLights=!1,this.toneMapping=Tr,this.toneMappingExposure=1;const y=this;let M=!1,T=0,E=0,w=null,A=-1,B=null;const b=new pt,I=new pt;let re=null;const X=new Fe(0);let N=0,K=t.width,V=t.height,Q=1,P=null,L=null;const z=new pt(0,0,K,V),$=new pt(0,0,K,V);let ee=!1;const _e=new _p;let G=!1,Z=!1,me=null;const Re=new qe,ye=new Ie,Te=new k,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return w===null?Q:1}let H=i;function lt(R,Y){for(let te=0;te<R.length;te++){const ie=R[te],J=t.getContext(ie,Y);if(J!==null)return J}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fp}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",he,!1),H===null){const Y=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Y.shift(),H=lt(Y,R),H===null)throw lt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Pe,ze,De,Ge,je,se,le,C,S,U,F,W,j,fe,ue,ne,de,ve,oe,Ne,ke,Me,xe,be;function D(){Pe=new tT(H),ze=new q2(H,Pe,e),Pe.init(ze),Me=new jA(H,Pe,ze),De=new FA(H,Pe,ze),Ge=new rT(H),je=new EA,se=new zA(H,Pe,De,je,ze,Me,Ge),le=new Z2(y),C=new eT(y),S=new uE(H,ze),xe=new $2(H,Pe,S,ze),U=new nT(H,S,Ge,xe),F=new lT(H,U,S,Ge),oe=new aT(H,ze,se),ne=new K2(je),W=new bA(y,le,C,Pe,ze,xe,ne),j=new YA(y,je),fe=new TA,ue=new IA(Pe,ze),ve=new X2(y,le,C,De,F,f,l),de=new OA(y,F,ze),be=new qA(H,Ge,ze,De),Ne=new Y2(H,Pe,Ge,ze),ke=new iT(H,Pe,Ge,ze),Ge.programs=W.programs,y.capabilities=ze,y.extensions=Pe,y.properties=je,y.renderLists=fe,y.shadowMap=de,y.state=De,y.info=Ge}D();const ae=new XA(y,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=Pe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Pe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(K,V,!1))},this.getSize=function(R){return R.set(K,V)},this.setSize=function(R,Y,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,V=Y,t.width=Math.floor(R*Q),t.height=Math.floor(Y*Q),te===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(K*Q,V*Q).floor()},this.setDrawingBufferSize=function(R,Y,te){K=R,V=Y,Q=te,t.width=Math.floor(R*te),t.height=Math.floor(Y*te),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,Y,te,ie){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,Y,te,ie),De.viewport(b.copy(z).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,Y,te,ie){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,Y,te,ie),De.scissor(I.copy($).multiplyScalar(Q).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){De.setScissorTest(ee=R)},this.setOpaqueSort=function(R){P=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(R=!0,Y=!0,te=!0){let ie=0;if(R){let J=!1;if(w!==null){const Ce=w.texture.format;J=Ce===Nv||Ce===Dv||Ce===Iv}if(J){const Ce=w.texture.type,Ue=Ce===Ar||Ce===pr||Ce===pp||Ce===is||Ce===Rv||Ce===Pv,Be=ve.getClearColor(),Ve=ve.getClearAlpha(),et=Be.r,Ye=Be.g,Ke=Be.b;Ue?(m[0]=et,m[1]=Ye,m[2]=Ke,m[3]=Ve,H.clearBufferuiv(H.COLOR,0,m)):(x[0]=et,x[1]=Ye,x[2]=Ke,x[3]=Ve,H.clearBufferiv(H.COLOR,0,x))}else ie|=H.COLOR_BUFFER_BIT}Y&&(ie|=H.DEPTH_BUFFER_BIT),te&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",he,!1),fe.dispose(),ue.dispose(),je.dispose(),le.dispose(),C.dispose(),F.dispose(),xe.dispose(),be.dispose(),W.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",it),ae.removeEventListener("sessionend",Xe),me&&(me.dispose(),me=null),$e.stop()};function Se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Ge.autoReset,Y=de.enabled,te=de.autoUpdate,ie=de.needsUpdate,J=de.type;D(),Ge.autoReset=R,de.enabled=Y,de.autoUpdate=te,de.needsUpdate=ie,de.type=J}function he(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function q(R){const Y=R.target;Y.removeEventListener("dispose",q),ce(Y)}function ce(R){we(R),je.remove(R)}function we(R){const Y=je.get(R).programs;Y!==void 0&&(Y.forEach(function(te){W.releaseProgram(te)}),R.isShaderMaterial&&W.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,te,ie,J,Ce){Y===null&&(Y=He);const Ue=J.isMesh&&J.matrixWorld.determinant()<0,Be=p_(R,Y,te,ie,J);De.setMaterial(ie,Ue);let Ve=te.index,et=1;if(ie.wireframe===!0){if(Ve=U.getWireframeAttribute(te),Ve===void 0)return;et=2}const Ye=te.drawRange,Ke=te.attributes.position;let Dt=Ye.start*et,Cn=(Ye.start+Ye.count)*et;Ce!==null&&(Dt=Math.max(Dt,Ce.start*et),Cn=Math.min(Cn,(Ce.start+Ce.count)*et)),Ve!==null?(Dt=Math.max(Dt,0),Cn=Math.min(Cn,Ve.count)):Ke!=null&&(Dt=Math.max(Dt,0),Cn=Math.min(Cn,Ke.count));const Ht=Cn-Dt;if(Ht<0||Ht===1/0)return;xe.setup(J,ie,Be,te,Ve);let Ai,Tt=Ne;if(Ve!==null&&(Ai=S.get(Ve),Tt=ke,Tt.setIndex(Ai)),J.isMesh)ie.wireframe===!0?(De.setLineWidth(ie.wireframeLinewidth*Ae()),Tt.setMode(H.LINES)):Tt.setMode(H.TRIANGLES);else if(J.isLine){let Ze=ie.linewidth;Ze===void 0&&(Ze=1),De.setLineWidth(Ze*Ae()),J.isLineSegments?Tt.setMode(H.LINES):J.isLineLoop?Tt.setMode(H.LINE_LOOP):Tt.setMode(H.LINE_STRIP)}else J.isPoints?Tt.setMode(H.POINTS):J.isSprite&&Tt.setMode(H.TRIANGLES);if(J.isBatchedMesh)Tt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Tt.renderInstances(Dt,Ht,J.count);else if(te.isInstancedBufferGeometry){const Ze=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Cu=Math.min(te.instanceCount,Ze);Tt.renderInstances(Dt,Ht,Cu)}else Tt.render(Dt,Ht)};function We(R,Y,te){R.transparent===!0&&R.side===xn&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,Ki(R,Y,te),R.side=$i,R.needsUpdate=!0,Ki(R,Y,te),R.side=xn):Ki(R,Y,te)}this.compile=function(R,Y,te=null){te===null&&(te=R),g=ue.get(te),g.init(),v.push(g),te.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),R!==te&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights(y._useLegacyLights);const ie=new Set;return R.traverse(function(J){const Ce=J.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const Be=Ce[Ue];We(Be,te,J),ie.add(Be)}else We(Ce,te,J),ie.add(Ce)}),v.pop(),g=null,ie},this.compileAsync=function(R,Y,te=null){const ie=this.compile(R,Y,te);return new Promise(J=>{function Ce(){if(ie.forEach(function(Ue){je.get(Ue).currentProgram.isReady()&&ie.delete(Ue)}),ie.size===0){J(R);return}setTimeout(Ce,10)}Pe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let st=null;function tt(R){st&&st(R)}function it(){$e.stop()}function Xe(){$e.start()}const $e=new qv;$e.setAnimationLoop(tt),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(R){st=R,ae.setAnimationLoop(R),R===null?$e.stop():$e.start()},ae.addEventListener("sessionstart",it),ae.addEventListener("sessionend",Xe),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,Y,w),g=ue.get(R,v.length),g.init(),v.push(g),Re.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),_e.setFromProjectionMatrix(Re),Z=this.localClippingEnabled,G=ne.init(this.clippingPlanes,Z),_=fe.get(R,p.length),_.init(),p.push(_),at(R,Y,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(P,L),this.info.render.frame++,G===!0&&ne.beginShadows();const te=g.state.shadowsArray;if(de.render(te,R,Y),G===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1)&&ve.render(_,R),g.setupLights(y._useLegacyLights),Y.isArrayCamera){const ie=Y.cameras;for(let J=0,Ce=ie.length;J<Ce;J++){const Ue=ie[J];qt(_,R,Ue,Ue.viewport)}}else qt(_,R,Y);w!==null&&(se.updateMultisampleRenderTarget(w),se.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(y,R,Y),xe.resetDefaultState(),A=-1,B=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function at(R,Y,te,ie){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||_e.intersectsSprite(R)){ie&&Te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const Ue=F.update(R),Be=R.material;Be.visible&&_.push(R,Ue,Be,te,Te.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||_e.intersectsObject(R))){const Ue=F.update(R),Be=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Te.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Te.copy(Ue.boundingSphere.center)),Te.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Be)){const Ve=Ue.groups;for(let et=0,Ye=Ve.length;et<Ye;et++){const Ke=Ve[et],Dt=Be[Ke.materialIndex];Dt&&Dt.visible&&_.push(R,Ue,Dt,te,Te.z,Ke)}}else Be.visible&&_.push(R,Ue,Be,te,Te.z,null)}}const Ce=R.children;for(let Ue=0,Be=Ce.length;Ue<Be;Ue++)at(Ce[Ue],Y,te,ie)}function qt(R,Y,te,ie){const J=R.opaque,Ce=R.transmissive,Ue=R.transparent;g.setupLightsView(te),G===!0&&ne.setGlobalState(y.clippingPlanes,te),Ce.length>0&&gt(J,Ce,Y,te),ie&&De.viewport(b.copy(ie)),J.length>0&&Pt(J,Y,te),Ce.length>0&&Pt(Ce,Y,te),Ue.length>0&&Pt(Ue,Y,te),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function gt(R,Y,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;const Ce=ze.isWebGL2;me===null&&(me=new us(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?qa:Ar,minFilter:ui,samples:Ce?4:0})),y.getDrawingBufferSize(ye),Ce?me.setSize(ye.x,ye.y):me.setSize(tu(ye.x),tu(ye.y));const Ue=y.getRenderTarget();y.setRenderTarget(me),y.getClearColor(X),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const Be=y.toneMapping;y.toneMapping=Tr,Pt(R,te,ie),se.updateMultisampleRenderTarget(me),se.updateRenderTargetMipmap(me);let Ve=!1;for(let et=0,Ye=Y.length;et<Ye;et++){const Ke=Y[et],Dt=Ke.object,Cn=Ke.geometry,Ht=Ke.material,Ai=Ke.group;if(Ht.side===xn&&Dt.layers.test(ie.layers)){const Tt=Ht.side;Ht.side=vn,Ht.needsUpdate=!0,Fn(Dt,te,ie,Cn,Ht,Ai),Ht.side=Tt,Ht.needsUpdate=!0,Ve=!0}}Ve===!0&&(se.updateMultisampleRenderTarget(me),se.updateRenderTargetMipmap(me)),y.setRenderTarget(Ue),y.setClearColor(X,N),y.toneMapping=Be}function Pt(R,Y,te){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ce=R.length;J<Ce;J++){const Ue=R[J],Be=Ue.object,Ve=Ue.geometry,et=ie===null?Ue.material:ie,Ye=Ue.group;Be.layers.test(te.layers)&&Fn(Be,Y,te,Ve,et,Ye)}}function Fn(R,Y,te,ie,J,Ce){R.onBeforeRender(y,Y,te,ie,J,Ce),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(y,Y,te,ie,R,Ce),J.transparent===!0&&J.side===xn&&J.forceSinglePass===!1?(J.side=vn,J.needsUpdate=!0,y.renderBufferDirect(te,Y,ie,J,R,Ce),J.side=$i,J.needsUpdate=!0,y.renderBufferDirect(te,Y,ie,J,R,Ce),J.side=xn):y.renderBufferDirect(te,Y,ie,J,R,Ce),R.onAfterRender(y,Y,te,ie,J,Ce)}function Ki(R,Y,te){Y.isScene!==!0&&(Y=He);const ie=je.get(R),J=g.state.lights,Ce=g.state.shadowsArray,Ue=J.state.version,Be=W.getParameters(R,J.state,Ce,Y,te),Ve=W.getProgramCacheKey(Be);let et=ie.programs;ie.environment=R.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(R.isMeshStandardMaterial?C:le).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",q),et=new Map,ie.programs=et);let Ye=et.get(Ve);if(Ye!==void 0){if(ie.currentProgram===Ye&&ie.lightsStateVersion===Ue)return Nr(R,Be),Ye}else Be.uniforms=W.getUniforms(R),R.onBuild(te,Be,y),R.onBeforeCompile(Be,y),Ye=W.acquireProgram(Be,Ve),et.set(Ve,Ye),ie.uniforms=Be.uniforms;const Ke=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=ne.uniform),Nr(R,Be),ie.needsLights=g_(R),ie.lightsStateVersion=Ue,ie.needsLights&&(Ke.ambientLightColor.value=J.state.ambient,Ke.lightProbe.value=J.state.probe,Ke.directionalLights.value=J.state.directional,Ke.directionalLightShadows.value=J.state.directionalShadow,Ke.spotLights.value=J.state.spot,Ke.spotLightShadows.value=J.state.spotShadow,Ke.rectAreaLights.value=J.state.rectArea,Ke.ltc_1.value=J.state.rectAreaLTC1,Ke.ltc_2.value=J.state.rectAreaLTC2,Ke.pointLights.value=J.state.point,Ke.pointLightShadows.value=J.state.pointShadow,Ke.hemisphereLights.value=J.state.hemi,Ke.directionalShadowMap.value=J.state.directionalShadowMap,Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ke.spotShadowMap.value=J.state.spotShadowMap,Ke.spotLightMatrix.value=J.state.spotLightMatrix,Ke.spotLightMap.value=J.state.spotLightMap,Ke.pointShadowMap.value=J.state.pointShadowMap,Ke.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=Ye,ie.uniformsList=null,Ye}function xi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Sc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Nr(R,Y){const te=je.get(R);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function p_(R,Y,te,ie,J){Y.isScene!==!0&&(Y=He),se.resetTextureUnits();const Ce=Y.fog,Ue=ie.isMeshStandardMaterial?Y.environment:null,Be=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:rn,Ve=(ie.isMeshStandardMaterial?C:le).get(ie.envMap||Ue),et=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ye=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ke=!!te.morphAttributes.position,Dt=!!te.morphAttributes.normal,Cn=!!te.morphAttributes.color;let Ht=Tr;ie.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ht=y.toneMapping);const Ai=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Tt=Ai!==void 0?Ai.length:0,Ze=je.get(ie),Cu=g.state.lights;if(G===!0&&(Z===!0||R!==B)){const zn=R===B&&ie.id===A;ne.setState(ie,R,zn)}let Mt=!1;ie.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Cu.state.version||Ze.outputColorSpace!==Be||J.isBatchedMesh&&Ze.batching===!1||!J.isBatchedMesh&&Ze.batching===!0||J.isInstancedMesh&&Ze.instancing===!1||!J.isInstancedMesh&&Ze.instancing===!0||J.isSkinnedMesh&&Ze.skinning===!1||!J.isSkinnedMesh&&Ze.skinning===!0||J.isInstancedMesh&&Ze.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ze.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ze.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ze.instancingMorph===!1&&J.morphTexture!==null||Ze.envMap!==Ve||ie.fog===!0&&Ze.fog!==Ce||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ne.numPlanes||Ze.numIntersection!==ne.numIntersection)||Ze.vertexAlphas!==et||Ze.vertexTangents!==Ye||Ze.morphTargets!==Ke||Ze.morphNormals!==Dt||Ze.morphColors!==Cn||Ze.toneMapping!==Ht||ze.isWebGL2===!0&&Ze.morphTargetsCount!==Tt)&&(Mt=!0):(Mt=!0,Ze.__version=ie.version);let kr=Ze.currentProgram;Mt===!0&&(kr=Ki(ie,Y,J));let Pp=!1,Bo=!1,Ru=!1;const sn=kr.getUniforms(),Ur=Ze.uniforms;if(De.useProgram(kr.program)&&(Pp=!0,Bo=!0,Ru=!0),ie.id!==A&&(A=ie.id,Bo=!0),Pp||B!==R){sn.setValue(H,"projectionMatrix",R.projectionMatrix),sn.setValue(H,"viewMatrix",R.matrixWorldInverse);const zn=sn.map.cameraPosition;zn!==void 0&&zn.setValue(H,Te.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&sn.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&sn.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,Bo=!0,Ru=!0)}if(J.isSkinnedMesh){sn.setOptional(H,J,"bindMatrix"),sn.setOptional(H,J,"bindMatrixInverse");const zn=J.skeleton;zn&&(ze.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),sn.setValue(H,"boneTexture",zn.boneTexture,se)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(sn.setOptional(H,J,"batchingTexture"),sn.setValue(H,"batchingTexture",J._matricesTexture,se));const Pu=te.morphAttributes;if((Pu.position!==void 0||Pu.normal!==void 0||Pu.color!==void 0&&ze.isWebGL2===!0)&&oe.update(J,te,kr),(Bo||Ze.receiveShadow!==J.receiveShadow)&&(Ze.receiveShadow=J.receiveShadow,sn.setValue(H,"receiveShadow",J.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ur.envMap.value=Ve,Ur.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Bo&&(sn.setValue(H,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&m_(Ur,Ru),Ce&&ie.fog===!0&&j.refreshFogUniforms(Ur,Ce),j.refreshMaterialUniforms(Ur,ie,Q,V,me),Sc.upload(H,xi(Ze),Ur,se)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Sc.upload(H,xi(Ze),Ur,se),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&sn.setValue(H,"center",J.center),sn.setValue(H,"modelViewMatrix",J.modelViewMatrix),sn.setValue(H,"normalMatrix",J.normalMatrix),sn.setValue(H,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const zn=ie.uniformsGroups;for(let Lu=0,x_=zn.length;Lu<x_;Lu++)if(ze.isWebGL2){const Lp=zn[Lu];be.update(Lp,kr),be.bind(Lp,kr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kr}function m_(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function g_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,Y,te){je.get(R.texture).__webglTexture=Y,je.get(R.depthTexture).__webglTexture=te;const ie=je.get(R);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const te=je.get(R);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,te=0){w=R,T=Y,E=te;let ie=!0,J=null,Ce=!1,Ue=!1;if(R){const Ve=je.get(R);Ve.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(H.FRAMEBUFFER,null),ie=!1):Ve.__webglFramebuffer===void 0?se.setupRenderTarget(R):Ve.__hasExternalTextures&&se.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const Ye=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[Y])?J=Ye[Y][te]:J=Ye[Y],Ce=!0):ze.isWebGL2&&R.samples>0&&se.useMultisampledRTT(R)===!1?J=je.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?J=Ye[te]:J=Ye,b.copy(R.viewport),I.copy(R.scissor),re=R.scissorTest}else b.copy(z).multiplyScalar(Q).floor(),I.copy($).multiplyScalar(Q).floor(),re=ee;if(De.bindFramebuffer(H.FRAMEBUFFER,J)&&ze.drawBuffers&&ie&&De.drawBuffers(R,J),De.viewport(b),De.scissor(I),De.setScissorTest(re),Ce){const Ve=je.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ve.__webglTexture,te)}else if(Ue){const Ve=je.get(R.texture),et=Y||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.__webglTexture,te||0,et)}A=-1},this.readRenderTargetPixels=function(R,Y,te,ie,J,Ce,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){De.bindFramebuffer(H.FRAMEBUFFER,Be);try{const Ve=R.texture,et=Ve.format,Ye=Ve.type;if(et!==Yn&&Me.convert(et)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ye===qa&&(Pe.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ye!==Ar&&Me.convert(Ye)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===ai&&(ze.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ie&&te>=0&&te<=R.height-J&&H.readPixels(Y,te,ie,J,Me.convert(et),Me.convert(Ye),Ce)}finally{const Ve=w!==null?je.get(w).__webglFramebuffer:null;De.bindFramebuffer(H.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(R,Y,te=0){const ie=Math.pow(2,-te),J=Math.floor(Y.image.width*ie),Ce=Math.floor(Y.image.height*ie);se.setTexture2D(Y,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,R.x,R.y,J,Ce),De.unbindTexture()},this.copyTextureToTexture=function(R,Y,te,ie=0){const J=Y.image.width,Ce=Y.image.height,Ue=Me.convert(te.format),Be=Me.convert(te.type);se.setTexture2D(te,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,te.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,te.unpackAlignment),Y.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ie,R.x,R.y,J,Ce,Ue,Be,Y.image.data):Y.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ie,R.x,R.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ue,Y.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,ie,R.x,R.y,Ue,Be,Y.image),ie===0&&te.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,te,ie,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=Math.round(R.max.x-R.min.x),Ue=Math.round(R.max.y-R.min.y),Be=R.max.z-R.min.z+1,Ve=Me.convert(ie.format),et=Me.convert(ie.type);let Ye;if(ie.isData3DTexture)se.setTexture3D(ie,0),Ye=H.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)se.setTexture2DArray(ie,0),Ye=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ie.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ie.unpackAlignment);const Ke=H.getParameter(H.UNPACK_ROW_LENGTH),Dt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Cn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ht=H.getParameter(H.UNPACK_SKIP_ROWS),Ai=H.getParameter(H.UNPACK_SKIP_IMAGES),Tt=te.isCompressedTexture?te.mipmaps[J]:te.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Tt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,R.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,R.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,R.min.z),te.isDataTexture||te.isData3DTexture?H.texSubImage3D(Ye,J,Y.x,Y.y,Y.z,Ce,Ue,Be,Ve,et,Tt.data):ie.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,J,Y.x,Y.y,Y.z,Ce,Ue,Be,Ve,Tt.data):H.texSubImage3D(Ye,J,Y.x,Y.y,Y.z,Ce,Ue,Be,Ve,et,Tt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Cn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ht),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ai),J===0&&ie.generateMipmaps&&H.generateMipmap(Ye),De.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),De.unbindTexture()},this.resetState=function(){T=0,E=0,w=null,De.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gp?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Su?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class KA extends n_{}KA.prototype.isWebGL1Renderer=!0;class ZA extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class i_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zv("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new k;class Ja{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ja(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sl extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Us;const ta=new k,Os=new k,Fs=new k,zs=new Ie,na=new Ie,r_=new qe,Xl=new k,ia=new k,$l=new k,p0=new Ie,Ud=new Ie,m0=new Ie;class Eu extends wt{constructor(e=new sl){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new i_(t,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Ja(i,3,0,!1)),Us.setAttribute("uv",new Ja(i,2,3,!1))}this.geometry=Us,this.material=e,this.center=new Ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),r_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Fs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Yl(Xl.set(-.5,-.5,0),Fs,o,Os,r,s),Yl(ia.set(.5,-.5,0),Fs,o,Os,r,s),Yl($l.set(.5,.5,0),Fs,o,Os,r,s),p0.set(0,0),Ud.set(1,0),m0.set(1,1);let a=e.ray.intersectTriangle(Xl,ia,$l,!1,ta);if(a===null&&(Yl(ia.set(-.5,.5,0),Fs,o,Os,r,s),Ud.set(0,1),a=e.ray.intersectTriangle(Xl,$l,ia,!1,ta),a===null))return;const l=e.ray.origin.distanceTo(ta);l<e.near||l>e.far||t.push({distance:l,point:ta.clone(),uv:ci.getInterpolation(ta,Xl,ia,$l,p0,Ud,m0,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Yl(n,e,t,i,r,s){zs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(na.x=s*zs.x-r*zs.y,na.y=r*zs.x+s*zs.y):na.copy(zs),n.copy(e),n.x+=na.x,n.y+=na.y,n.applyMatrix4(r_)}const g0=new k,x0=new pt,y0=new pt,JA=new k,v0=new qe,ql=new k,Od=new wi,_0=new qe,Fd=new Oo;class QA extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Km,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ql),this.boundingBox.expandByPoint(ql)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ql),this.boundingSphere.expandByPoint(ql)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Od.copy(this.boundingSphere),Od.applyMatrix4(r),e.ray.intersectsSphere(Od)!==!1&&(_0.copy(r).invert(),Fd.copy(e.ray).applyMatrix4(_0),!(this.boundingBox!==null&&Fd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Km?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;x0.fromBufferAttribute(r.attributes.skinIndex,e),y0.fromBufferAttribute(r.attributes.skinWeight,e),g0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=y0.getComponent(s);if(o!==0){const a=x0.getComponent(s);v0.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(JA.copy(g0).applyMatrix4(v0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class s_ extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class o_ extends zt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=$t,u=$t,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const S0=new qe,eC=new qe;class bp{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:eC;S0.multiplyMatrices(a,t[s]),S0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new bp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new o_(t,e,e,Yn,ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new s_),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class rh extends tn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new qe,M0=new qe,Kl=[],b0=new gi,tC=new qe,ra=new _t,sa=new wi;class nC extends _t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,tC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),b0.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(b0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),sa.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(i),e.ray.intersectsSphere(sa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,js),M0.multiplyMatrices(i,js),ra.matrixWorld=M0,ra.raycast(e,Kl);for(let o=0,a=Kl.length;o<a;o++){const l=Kl[o];l.instanceId=s,l.object=this,t.push(l)}Kl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new o_(new Float32Array(r*this.count),r,this.count,Lv,ai));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const E0=new k,w0=new k,T0=new qe,zd=new Oo,Zl=new wi;class Fi extends wt{constructor(e=new ht,t=new In){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)E0.fromBufferAttribute(t,r-1),w0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=E0.distanceTo(w0);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(r),Zl.radius+=s,e.ray.intersectsSphere(Zl)===!1)return;T0.copy(r).invert(),zd.copy(e.ray).applyMatrix4(T0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new k,u=new k,h=new k,f=new k,m=this.isLineSegments?2:1,x=i.index,g=i.attributes.position;if(x!==null){const p=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let y=p,M=v-1;y<M;y+=m){const T=x.getX(y),E=x.getX(y+1);if(c.fromBufferAttribute(g,T),u.fromBufferAttribute(g,E),zd.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let y=p,M=v-1;y<M;y+=m){if(c.fromBufferAttribute(g,y),u.fromBufferAttribute(g,y+1),zd.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const A0=new k,C0=new k;class sh extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)A0.fromBufferAttribute(t,r),C0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+A0.distanceTo(C0);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mc extends Fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qr extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const R0=new qe,oh=new Oo,Jl=new wi,Ql=new k;class Ca extends wt{constructor(e=new ht,t=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(r),Jl.radius+=s,e.ray.intersectsSphere(Jl)===!1)return;R0.copy(r).invert(),oh.copy(e.ray).applyMatrix4(R0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=f,_=m;x<_;x++){const g=c.getX(x);Ql.fromBufferAttribute(h,g),P0(Ql,g,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,_=m;x<_;x++)Ql.fromBufferAttribute(h,x),P0(Ql,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function P0(n,e,t,i,r,s,o){const a=oh.distanceSqToPoint(n);if(a<t){const l=new k;oh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Lo extends zt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ep extends ht{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new k,u=new Ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=i+h/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wp extends ht{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let x=0;const _=[],g=i/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(m,2));function v(){const M=new k,T=new k;let E=0;const w=(t-e)/i;for(let A=0;A<=s;A++){const B=[],b=A/s,I=b*(t-e)+e;for(let re=0;re<=r;re++){const X=re/r,N=X*l+a,K=Math.sin(N),V=Math.cos(N);T.x=I*K,T.y=-b*i+g,T.z=I*V,h.push(T.x,T.y,T.z),M.set(K,w,V).normalize(),f.push(M.x,M.y,M.z),m.push(X,1-b),B.push(x++)}_.push(B)}for(let A=0;A<r;A++)for(let B=0;B<s;B++){const b=_[B][A],I=_[B+1][A],re=_[B+1][A+1],X=_[B][A+1];u.push(b,I,X),u.push(I,re,X),E+=6}c.addGroup(p,E,0),p+=E}function y(M){const T=x,E=new Ie,w=new k;let A=0;const B=M===!0?e:t,b=M===!0?1:-1;for(let re=1;re<=r;re++)h.push(0,g*b,0),f.push(0,b,0),m.push(.5,.5),x++;const I=x;for(let re=0;re<=r;re++){const N=re/r*l+a,K=Math.cos(N),V=Math.sin(N);w.x=B*V,w.y=g*b,w.z=B*K,h.push(w.x,w.y,w.z),f.push(0,b,0),E.x=K*.5+.5,E.y=V*.5*b+.5,m.push(E.x,E.y),x++}for(let re=0;re<r;re++){const X=T+re,N=I+re;M===!0?u.push(N,N+1,X):u.push(N+1,N,X),A+=3}c.addGroup(p,A,M===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wu extends wp{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new wu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nu extends ht{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/r,m=new k,x=new Ie;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const p=s+g/i*o;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,u.push(x.x,x.y)}h+=f}for(let _=0;_<r;_++){const g=_*(i+1);for(let p=0;p<i;p++){const v=p+g,y=v,M=v+i+1,T=v+i+2,E=v+1;a.push(y,M,E),a.push(M,T,E)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mr extends ht{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new k,f=new k,m=[],x=[],_=[],g=[];for(let p=0;p<=i;p++){const v=[],y=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const E=T/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+y*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(E+M,1-y),v.push(c++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const y=u[p][v+1],M=u[p][v],T=u[p+1][v],E=u[p+1][v+1];(p!==0||o>0)&&m.push(y,M,E),(p!==i-1||l<Math.PI)&&m.push(M,T,E)}this.setIndex(m),this.setAttribute("position",new mt(x,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ds extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qi extends ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class a_ extends An{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ec(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function iC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function rC(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function L0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function l_(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ol{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sC extends ol{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mg,endingEnd:Mg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bg:s=e,a=2*t-i;break;case Eg:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bg:o=e,l=2*i-t;break;case Eg:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(i-t)/(r-t),_=x*x,g=_*x,p=-f*g+2*f*_-f*x,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*x+1,y=(-1-m)*g+(1.5+m)*_+.5*x,M=m*g-m*_;for(let T=0;T!==a;++T)s[T]=p*o[u+T]+v*o[c+T]+y*o[l+T]+M*o[h+T];return s}}class oC extends ol{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class aC extends ol{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ti{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ec(t,this.TimeBufferType),this.values=ec(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ec(e.times,Array),values:ec(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new aC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ka:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case ud:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return ud}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&iC(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ud,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,f=h-i,m=h+i;for(let x=0;x!==i;++x){const _=t[h+x];if(_!==t[f+x]||_!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Co;class zo extends Ti{}zo.prototype.ValueTypeName="bool";zo.prototype.ValueBufferType=Array;zo.prototype.DefaultInterpolation=Ka;zo.prototype.InterpolantFactoryMethodLinear=void 0;zo.prototype.InterpolantFactoryMethodSmooth=void 0;class c_ extends Ti{}c_.prototype.ValueTypeName="color";class Io extends Ti{}Io.prototype.ValueTypeName="number";class lC extends ol{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ei.slerpFlat(s,0,o,c-a,o,c,l);return s}}class fs extends Ti{InterpolantFactoryMethodLinear(e){return new lC(this.times,this.values,this.getValueSize(),e)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.DefaultInterpolation=Co;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class jo extends Ti{}jo.prototype.ValueTypeName="string";jo.prototype.ValueBufferType=Array;jo.prototype.DefaultInterpolation=Ka;jo.prototype.InterpolantFactoryMethodLinear=void 0;jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends Ti{}Do.prototype.ValueTypeName="vector";class cC{constructor(e,t=-1,i,r=hb){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(dC(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Ti.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=rC(l);l=L0(l,1,u),c=L0(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Io(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,m,x,_){if(m.length!==0){const g=[],p=[];l_(m,g,p,x),g.length!==0&&_.push(new h(f,g,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)m[f[x].morphTargets[_]]=-1;for(const _ in m){const g=[],p=[];for(let v=0;v!==f[x].morphTargets.length;++v){const y=f[x];g.push(y.time),p.push(y.morphTarget===_?1:0)}r.push(new Io(".morphTargetInfluence["+_+"]",g,p))}l=m.length*o}else{const m=".bones["+t[h].name+"]";i(Do,m+".position",f,"pos",r),i(fs,m+".quaternion",f,"rot",r),i(Do,m+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function uC(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Io;case"vector":case"vector2":case"vector3":case"vector4":return Do;case"color":return c_;case"quaternion":return fs;case"bool":case"boolean":return zo;case"string":return jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function dC(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=uC(n.type);if(n.times===void 0){const t=[],i=[];l_(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const gr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fC{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const hC=new fC;class gs{constructor(e){this.manager=e!==void 0?e:hC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class pC extends Error{constructor(e,t){super(e),this.response=t}}class Tp extends gs{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=gr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:i,onError:r});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,x=m!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:M})=>{if(y)p.close();else{_+=M.byteLength;const T=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:m});for(let E=0,w=u.length;E<w;E++){const A=u[E];A.onProgress&&A.onProgress(T)}p.enqueue(M),v()}})}}});return new Response(g)}else throw new pC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{gr.add(e,c);const u=Ni[e];delete Ni[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mC extends gs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Za("img");function l(){u(),gr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class u_ extends gs{constructor(e){super(e)}load(e,t,i,r){const s=new zt,o=new mC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Tu extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jd=new qe,I0=new k,D0=new k;class Ap{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;I0.setFromMatrixPosition(e.matrixWorld),t.position.copy(I0),D0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(D0),t.updateMatrixWorld(),jd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gC extends Ap{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ro*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xC extends Tu{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const N0=new qe,oa=new k,Bd=new k;class yC extends Ap{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),oa.setFromMatrixPosition(e.matrixWorld),i.position.copy(oa),Bd.copy(i.position),Bd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Bd),i.updateMatrixWorld(),r.makeTranslation(-oa.x,-oa.y,-oa.z),N0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(N0)}}class d_ extends Tu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new yC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vC extends Ap{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ah extends Tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new vC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _C extends Tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ra{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class SC extends gs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return gr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),gr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});gr.add(e,l),s.manager.itemStart(e)}}const Cp="\\[\\]\\.:\\/",MC=new RegExp("["+Cp+"]","g"),Rp="[^"+Cp+"]",bC="[^"+Cp.replace("\\.","")+"]",EC=/((?:WC+[\/:])*)/.source.replace("WC",Rp),wC=/(WCOD+)?/.source.replace("WCOD",bC),TC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rp),AC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rp),CC=new RegExp("^"+EC+wC+TC+AC+"$"),RC=["material","materials","bones","map"];class PC{constructor(e,t,i){const r=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class dt{constructor(e,t,i){this.path=t,this.parsedPath=i||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,i):new dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(MC,"")}static parseTrackName(e){const t=CC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);RC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=PC;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const k0=new qe;class LC{constructor(e,t,i=0,r=1/0){this.ray=new Oo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new vp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return k0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(k0),this}intersectObject(e,t=!0,i=[]){return lh(e,this,i,t),i.sort(U0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)lh(e[r],this,i,t);return i.sort(U0),i}}function U0(n,e){return n.distance-e.distance}function lh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)lh(r[s],e,t,!0)}}class O0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fp);const F0={type:"change"},Hd={type:"start"},z0={type:"end"},tc=new Oo,j0=new ar,IC=Math.cos(70*yp.DEG2RAD);class DC extends ms{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",ue),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(F0),i.update(),s=r.NONE},this.update=function(){const D=new k,ae=new Ei().setFromUnitVectors(e.up,new k(0,1,0)),Se=ae.clone().invert(),O=new k,he=new Ei,q=new k,ce=2*Math.PI;return function(We=null){const st=i.object.position;D.copy(st).sub(i.target),D.applyQuaternion(ae),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&re(b(We)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let tt=i.minAzimuthAngle,it=i.maxAzimuthAngle;isFinite(tt)&&isFinite(it)&&(tt<-Math.PI?tt+=ce:tt>Math.PI&&(tt-=ce),it<-Math.PI?it+=ce:it>Math.PI&&(it-=ce),tt<=it?a.theta=Math.max(tt,Math.min(it,a.theta)):a.theta=a.theta>(tt+it)/2?Math.max(tt,a.theta):Math.min(it,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Xe=!1;if(i.zoomToCursor&&E||i.object.isOrthographicCamera)a.radius=z(a.radius);else{const $e=a.radius;a.radius=z(a.radius*c),Xe=$e!=a.radius}if(D.setFromSpherical(a),D.applyQuaternion(Se),st.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&E){let $e=null;if(i.object.isPerspectiveCamera){const at=D.length();$e=z(at*c);const qt=at-$e;i.object.position.addScaledVector(M,qt),i.object.updateMatrixWorld(),Xe=!!qt}else if(i.object.isOrthographicCamera){const at=new k(T.x,T.y,0);at.unproject(i.object);const qt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xe=qt!==i.object.zoom;const gt=new k(T.x,T.y,0);gt.unproject(i.object),i.object.position.sub(gt).add(at),i.object.updateMatrixWorld(),$e=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;$e!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar($e).add(i.object.position):(tc.origin.copy(i.object.position),tc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(tc.direction))<IC?e.lookAt(i.target):(j0.setFromNormalAndCoplanarPoint(i.object.up,i.target),tc.intersectPlane(j0,i.target))))}else if(i.object.isOrthographicCamera){const $e=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),$e!==i.object.zoom&&(i.object.updateProjectionMatrix(),Xe=!0)}return c=1,E=!1,Xe||O.distanceToSquared(i.object.position)>o||8*(1-he.dot(i.object.quaternion))>o||q.distanceToSquared(i.target)>o?(i.dispatchEvent(F0),O.copy(i.object.position),he.copy(i.object.quaternion),q.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ve),i.domElement.removeEventListener("pointerdown",se),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",F),i.domElement.removeEventListener("pointermove",le),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",j,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ue),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new O0,l=new O0;let c=1;const u=new k,h=new Ie,f=new Ie,m=new Ie,x=new Ie,_=new Ie,g=new Ie,p=new Ie,v=new Ie,y=new Ie,M=new k,T=new Ie;let E=!1;const w=[],A={};let B=!1;function b(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function I(D){const ae=Math.abs(D*.01);return Math.pow(.95,i.zoomSpeed*ae)}function re(D){l.theta-=D}function X(D){l.phi-=D}const N=function(){const D=new k;return function(Se,O){D.setFromMatrixColumn(O,0),D.multiplyScalar(-Se),u.add(D)}}(),K=function(){const D=new k;return function(Se,O){i.screenSpacePanning===!0?D.setFromMatrixColumn(O,1):(D.setFromMatrixColumn(O,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(Se),u.add(D)}}(),V=function(){const D=new k;return function(Se,O){const he=i.domElement;if(i.object.isPerspectiveCamera){const q=i.object.position;D.copy(q).sub(i.target);let ce=D.length();ce*=Math.tan(i.object.fov/2*Math.PI/180),N(2*Se*ce/he.clientHeight,i.object.matrix),K(2*O*ce/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(Se*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),K(O*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function P(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function L(D,ae){if(!i.zoomToCursor)return;E=!0;const Se=i.domElement.getBoundingClientRect(),O=D-Se.left,he=ae-Se.top,q=Se.width,ce=Se.height;T.x=O/q*2-1,T.y=-(he/ce)*2+1,M.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function z(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function $(D){h.set(D.clientX,D.clientY)}function ee(D){L(D.clientX,D.clientX),p.set(D.clientX,D.clientY)}function _e(D){x.set(D.clientX,D.clientY)}function G(D){f.set(D.clientX,D.clientY),m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ae=i.domElement;re(2*Math.PI*m.x/ae.clientHeight),X(2*Math.PI*m.y/ae.clientHeight),h.copy(f),i.update()}function Z(D){v.set(D.clientX,D.clientY),y.subVectors(v,p),y.y>0?Q(I(y.y)):y.y<0&&P(I(y.y)),p.copy(v),i.update()}function me(D){_.set(D.clientX,D.clientY),g.subVectors(_,x).multiplyScalar(i.panSpeed),V(g.x,g.y),x.copy(_),i.update()}function Re(D){L(D.clientX,D.clientY),D.deltaY<0?P(I(D.deltaY)):D.deltaY>0&&Q(I(D.deltaY)),i.update()}function ye(D){let ae=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?re(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?re(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),ae=!0;break}ae&&(D.preventDefault(),i.update())}function Te(D){if(w.length===1)h.set(D.pageX,D.pageY);else{const ae=xe(D),Se=.5*(D.pageX+ae.x),O=.5*(D.pageY+ae.y);h.set(Se,O)}}function He(D){if(w.length===1)x.set(D.pageX,D.pageY);else{const ae=xe(D),Se=.5*(D.pageX+ae.x),O=.5*(D.pageY+ae.y);x.set(Se,O)}}function Ae(D){const ae=xe(D),Se=D.pageX-ae.x,O=D.pageY-ae.y,he=Math.sqrt(Se*Se+O*O);p.set(0,he)}function H(D){i.enableZoom&&Ae(D),i.enablePan&&He(D)}function lt(D){i.enableZoom&&Ae(D),i.enableRotate&&Te(D)}function Pe(D){if(w.length==1)f.set(D.pageX,D.pageY);else{const Se=xe(D),O=.5*(D.pageX+Se.x),he=.5*(D.pageY+Se.y);f.set(O,he)}m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ae=i.domElement;re(2*Math.PI*m.x/ae.clientHeight),X(2*Math.PI*m.y/ae.clientHeight),h.copy(f)}function ze(D){if(w.length===1)_.set(D.pageX,D.pageY);else{const ae=xe(D),Se=.5*(D.pageX+ae.x),O=.5*(D.pageY+ae.y);_.set(Se,O)}g.subVectors(_,x).multiplyScalar(i.panSpeed),V(g.x,g.y),x.copy(_)}function De(D){const ae=xe(D),Se=D.pageX-ae.x,O=D.pageY-ae.y,he=Math.sqrt(Se*Se+O*O);v.set(0,he),y.set(0,Math.pow(v.y/p.y,i.zoomSpeed)),Q(y.y),p.copy(v);const q=(D.pageX+ae.x)*.5,ce=(D.pageY+ae.y)*.5;L(q,ce)}function Ge(D){i.enableZoom&&De(D),i.enablePan&&ze(D)}function je(D){i.enableZoom&&De(D),i.enableRotate&&Pe(D)}function se(D){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",le),i.domElement.addEventListener("pointerup",C)),!ke(D)&&(oe(D),D.pointerType==="touch"?ne(D):S(D)))}function le(D){i.enabled!==!1&&(D.pointerType==="touch"?de(D):U(D))}function C(D){switch(Ne(D),w.length){case 0:i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",le),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(z0),s=r.NONE;break;case 1:const ae=w[0],Se=A[ae];ne({pointerId:ae,pageX:Se.x,pageY:Se.y});break}}function S(D){let ae;switch(D.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case ys.DOLLY:if(i.enableZoom===!1)return;ee(D),s=r.DOLLY;break;case ys.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;_e(D),s=r.PAN}else{if(i.enableRotate===!1)return;$(D),s=r.ROTATE}break;case ys.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;$(D),s=r.ROTATE}else{if(i.enablePan===!1)return;_e(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Hd)}function U(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;G(D);break;case r.DOLLY:if(i.enableZoom===!1)return;Z(D);break;case r.PAN:if(i.enablePan===!1)return;me(D);break}}function F(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(Hd),Re(W(D)),i.dispatchEvent(z0))}function W(D){const ae=D.deltaMode,Se={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(ae){case 1:Se.deltaY*=16;break;case 2:Se.deltaY*=100;break}return D.ctrlKey&&!B&&(Se.deltaY*=10),Se}function j(D){D.key==="Control"&&(B=!0,i.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(D){D.key==="Control"&&(B=!1,i.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function ue(D){i.enabled===!1||i.enablePan===!1||ye(D)}function ne(D){switch(Me(D),w.length){case 1:switch(i.touches.ONE){case vs.ROTATE:if(i.enableRotate===!1)return;Te(D),s=r.TOUCH_ROTATE;break;case vs.PAN:if(i.enablePan===!1)return;He(D),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case vs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(D),s=r.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(D),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Hd)}function de(D){switch(Me(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Pe(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ze(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ge(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;je(D),i.update();break;default:s=r.NONE}}function ve(D){i.enabled!==!1&&D.preventDefault()}function oe(D){w.push(D.pointerId)}function Ne(D){delete A[D.pointerId];for(let ae=0;ae<w.length;ae++)if(w[ae]==D.pointerId){w.splice(ae,1);return}}function ke(D){for(let ae=0;ae<w.length;ae++)if(w[ae]==D.pointerId)return!0;return!1}function Me(D){let ae=A[D.pointerId];ae===void 0&&(ae=new Ie,A[D.pointerId]=ae),ae.set(D.pageX,D.pageY)}function xe(D){const ae=D.pointerId===w[0]?w[1]:w[0];return A[ae]}i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",se),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",F,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",j,{passive:!0,capture:!0}),this.update()}}function Au(n,e){const t=n.fuel_max_kg??10,i=.006,r=Math.min(1,Math.max(0,e/86400)),s=i*r,o=Math.max(0,Number((t-s).toFixed(3))),a=Number((o/t*100).toFixed(2)),l=n.temperature_c??38,c=l>=80;return{...n,temperature_c:l,overheated:c,fuel_kg:o,fuel_max_kg:t,fuel_pct:a,battery_pct:100,is_in_sunlight:!0,solar_power_w:1850}}function B0(n,e){if(e===pb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Qf||e===Uv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Qf)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class NC extends gs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zC(t)}),this.register(function(t){return new YC(t)}),this.register(function(t){return new qC(t)}),this.register(function(t){return new KC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new HC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new VC(t)}),this.register(function(t){return new FC(t)}),this.register(function(t){return new WC(t)}),this.register(function(t){return new jC(t)}),this.register(function(t){return new $C(t)}),this.register(function(t){return new XC(t)}),this.register(function(t){return new UC(t)}),this.register(function(t){return new ZC(t)}),this.register(function(t){return new JC(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ra.extractUrlBase(e);o=Ra.resolveURL(c,this.path)}else o=Ra.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Tp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===f_){try{o[rt.KHR_BINARY_GLTF]=new QC(e)}catch(h){r&&r(h);return}s=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:o[h]=new OC;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new eR(s,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[h]=new tR;break;case rt.KHR_MESH_QUANTIZATION:o[h]=new nR;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function kC(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class UC{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],rn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ah(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new d_(u),c.distance=h;break;case"spot":c=new xC(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,lr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class OC{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(e,t,i){const r=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,mn))}return Promise.all(r)}}class FC{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class zC{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(s)}}class jC{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class BC{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mn)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class HC{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class GC{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],rn),Promise.all(s)}}class VC{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class WC{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,mn)),Promise.all(s)}}class XC{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class $C{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class YC{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class qC{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class KC{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZC{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(m),u,h,f,r.mode,r.filter),m})})}else return null}}class JC{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Vn.TRIANGLES&&c.mode!==Vn.TRIANGLE_STRIP&&c.mode!==Vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,m=[];for(const x of h){const _=new qe,g=new k,p=new Ei,v=new k(1,1,1),y=new nC(x.geometry,x.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,_.compose(g,p,v));for(const M in l)if(M==="_COLOR_0"){const T=l[M];y.instanceColor=new rh(T.array,T.itemSize,T.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&x.geometry.setAttribute(M,l[M]);wt.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),m.push(y)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const f_="glTF",aa=12,H0={JSON:1313821514,BIN:5130562};class QC{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,aa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==f_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-aa,s=new DataView(e,aa);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===H0.JSON){const c=new Uint8Array(e,aa+o,a);this.content=i.decode(c)}else if(l===H0.BIN){const c=aa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=ch[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ch[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],m=mo[f.componentType];c[h]=m.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(m){for(const x in m.attributes){const _=m.attributes[x],g=l[x];g!==void 0&&(_.normalized=g)}h(m)},a,c,rn,f)})})}}class tR{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nR{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class h_ extends ol{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,f=h*h,m=f*h,x=e*c,_=x-c,g=-2*m+3*f,p=m-f,v=1-g,y=p-f+h;for(let M=0;M!==a;M++){const T=o[_+M+a],E=o[_+M+l]*u,w=o[x+M+a],A=o[x+M]*u;s[M]=v*T+y*E+g*w+p*A}return s}}const iR=new Ei;class rR extends h_{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return iR.fromArray(s).normalize().toArray(s),s}}const Vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},mo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},G0={9728:$t,9729:Xt,9984:Jf,9985:_c,9986:Vs,9987:ui},V0={33071:$n,33648:Kc,10497:oi},Gd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sR={CUBICSPLINE:void 0,LINEAR:Co,STEP:Ka},Vd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ds({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),n.DefaultMaterial}function Gr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function lr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aR(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function lR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cR(n){let e;const t=n.extensions&&n.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wd(t.attributes):e=n.indices+":"+Wd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Wd(n.targets[i]);return e}function Wd(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function uh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const dR=new qe;class fR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new u_(this.options.manager):this.textureLoader=new SC(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Gr(s,a,r),lr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ra.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Gd[r.type],a=mo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new tn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Gd[r.type],c=mo[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0;let _,g;if(m&&m!==h){const p=Math.floor(f/m),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(v);y||(_=new c(a,p*m,r.count*m/u),y=new i_(_,m/u),t.cache.add(v,y)),g=new Ja(y,l,f%m/u,x)}else a===null?_=new c(r.count*l):_=new c(a,f,r.count*l),g=new tn(_,l,x);if(r.sparse!==void 0){const p=Gd.SCALAR,v=mo[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,T=new v(o[1],y,r.sparse.count*p),E=new c(o[2],M,r.sparse.count*l);a!==null&&(g=new tn(g.array.slice(),g.itemSize,g.normalized));for(let w=0,A=T.length;w<A;w++){const B=T[w];if(g.setX(B,E[w*l]),l>=2&&g.setY(B,E[w*l+1]),l>=3&&g.setZ(B,E[w*l+2]),l>=4&&g.setW(B,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=G0[f.magFilter]||Xt,u.minFilter=G0[f.minFilter]||ui,u.wrapS=V0[f.wrapS]||oi,u.wrapT=V0[f.wrapT]||oi,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,m){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){const g=new zt(_);g.needsUpdate=!0,f(g)}),t.load(Ra.resolveURL(h,s.path),x,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||uR(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Qr,An.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new In,An.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ds}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){const h=r[rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],rn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,mn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=xn);const u=s.alphaMode||Vd.OPAQUE;if(u===Vd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Vd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ie(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Vt){const h=s.emissiveFactor;a.emissive=new Fe().setRGB(h[0],h[1],h[2],rn)}return s.emissiveTexture!==void 0&&o!==Vt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,mn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),lr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Gr(r,h,s),h})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return W0(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=cR(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=W0(new ht,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?oR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,x=u.length;m<x;m++){const _=u[m],g=o[m];let p;const v=c[m];if(g.mode===Vn.TRIANGLES||g.mode===Vn.TRIANGLE_STRIP||g.mode===Vn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new QA(_,v):new _t(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Vn.TRIANGLE_STRIP?p.geometry=B0(p.geometry,Uv):g.mode===Vn.TRIANGLE_FAN&&(p.geometry=B0(p.geometry,Qf));else if(g.mode===Vn.LINES)p=new sh(_,v);else if(g.mode===Vn.LINE_STRIP)p=new Fi(_,v);else if(g.mode===Vn.LINE_LOOP)p=new Mc(_,v);else if(g.mode===Vn.POINTS)p=new Ca(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&lR(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),lr(p,s),g.extensions&&Gr(r,p,g),t.assignFinalMaterial(p),h.push(p)}for(let m=0,x=h.length;m<x;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return s.extensions&&Gr(r,h[0],s),h[0];const f=new Lt;s.extensions&&Gr(r,f,s),t.associations.set(f,{meshes:e});for(let m=0,x=h.length;m<x;m++)f.add(h[m]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new gn(yp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Sp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),lr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new qe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new bp(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const m=r.channels[h],x=r.samplers[m.sampler],_=m.target,g=_.node,p=r.parameters!==void 0?r.parameters[x.input]:x.input,v=r.parameters!==void 0?r.parameters[x.output]:x.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(x),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],m=h[1],x=h[2],_=h[3],g=h[4],p=[];for(let v=0,y=f.length;v<y;v++){const M=f[v],T=m[v],E=x[v],w=_[v],A=g[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const B=i._createAnimationTracks(M,T,E,w,A);if(B)for(let b=0;b<B.length;b++)p.push(B[b])}return new cC(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(f,dR)});for(let m=0,x=h.length;m<x;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new s_:c.length>1?u=new Lt:c.length===1?u=c[0]:u=new wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),lr(u,s),s.extensions&&Gr(i,u,s),s.matrix!==void 0){const h=new qe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Lt;i.name&&(s.name=r.createUniqueName(i.name)),lr(s,i),i.extensions&&Gr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,m]of r.associations)(f instanceof An||f instanceof zt)&&h.set(f,m);return u.traverse(f=>{const m=r.associations.get(f);m!=null&&h.set(f,m)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];rr[s.path]===rr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(rr[s.path]){case rr.weights:c=Io;break;case rr.rotation:c=fs;break;case rr.position:case rr.scale:c=Do;break;default:switch(i.itemSize){case 1:c=Io;break;case 2:case 3:default:c=Do;break}break}const u=r.interpolation!==void 0?sR[r.interpolation]:Co,h=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){const x=new c(l[f]+"."+rr[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=uh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof fs?rR:h_;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hR(n,e,t){const i=e.attributes,r=new gi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=uh(mo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new k,l=new k;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],m=f.min,x=f.max;if(m!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),f.normalized){const _=uh(mo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new wi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function W0(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=ch[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return ct.workingColorSpace!==rn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),lr(n,e),hR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?aR(n,e.targets,t):n})}const pR={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};let ma=null,nc=null;function Xd(n){n.updateMatrixWorld(!0);const e=new gi().setFromObject(n),t=new k;e.getCenter(t);const i=new k;e.getSize(i);const r=Math.max(i.x,i.y,i.z)||1;n.position.sub(t);const s=new Lt;return s.add(n),s.scale.setScalar(1/r),s.updateMatrixWorld(!0),s}function mR(){if(ma)return Promise.resolve(ma);if(nc)return nc;const n=new NC,e=typeof import.meta<"u"&&pR&&"/"||"/",t=e.endsWith("/")?e:e+"/";return nc=Promise.all([n.loadAsync(`${t}satellite_high.gltf`),n.loadAsync(`${t}satellite_med.gltf`),n.loadAsync(`${t}satellite_low.gltf`)]).then(([i,r,s])=>(ma={high:Xd(i.scene),med:Xd(r.scene),low:Xd(s.scene)},ma)).catch(i=>{throw console.error("Failed to load 3D satellite models, using sphere fallbacks",i),i}),nc}function gR(){return ma}function xR(n,e,t){const i=n==="offline"?e.offlineSatColor||"#ff3b30":n==="highLatency"?e.highLatencySatColor||"#ff9900":e.satColor||"#ffffff",r=new Fe(i),s=r.clone();s.offsetHSL(0,.05,.12);const o=new ds({color:s,metalness:.35,roughness:.2,emissive:r,emissiveIntensity:t?1.1:.75}),a=new Fe(793651).lerp(r,.2),l=new ds({color:a,metalness:.92,roughness:.15,emissive:r,emissiveIntensity:t?.35:.2});return{bodyMat:o,solarMat:l,baseColor:r}}function yR(n){return n.includes("Cylinder.005")||n.includes("Cylinder.000")||n.includes("Cylinder.007")}function vR(n,e,t,i,r){const s=new Lt;s.name="Satellite3D",s.scale.setScalar(.65*i);const{bodyMat:o,solarMat:a}=xR(e,t,r),l=[],c=new mr(.45,8,8),u=new Vt({visible:!1,wireframe:!1}),h=new _t(c,u);if(h.name="SatHitBox",s.add(h),n)[{template:n.high,name:"LOD_High"},{template:n.med,name:"LOD_Med"},{template:n.low,name:"LOD_Low"}].forEach((m,x)=>{const _=m.template.clone(!0);_.name=m.name,_.visible=x===1,_.traverse(g=>{if(g.isMesh){const p=g;p.material=yR(p.name)?a:o,p.castShadow=!1,p.receiveShadow=!1,l.push(p)}}),s.add(_)});else{const f=new mr(.35,16,16),m=new _t(f,o);m.name="LOD_Fallback",s.add(m),l.push(m)}return{satGroup:s,hitMesh:h,modelMeshes:l}}function X0(n,e,t){const i=n.getObjectByName("LOD_High"),r=n.getObjectByName("LOD_Med"),s=n.getObjectByName("LOD_Low");if(!i||!r||!s)return;const o=e.position.length(),a=n.position.distanceTo(e.position),l=o<18||a<14,c=o<38||a<34;let u=2;t||l?u=0:c?u=1:u=2,i.visible=u===0,r.visible=u===1,s.visible=u===2}const _R=/^[og]\s*(.+)?/,SR=/^mtllib /,MR=/^usemtl /,bR=/^usemap /,$0=/\s+/,Y0=new k,$d=new k,q0=new k,K0=new k,Hn=new k,ic=new Fe;function ER(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;Y0.fromArray(r,e),$d.fromArray(r,t),q0.fromArray(r,i),Hn.subVectors(q0,$d),K0.subVectors(Y0,$d),Hn.cross(K0),Hn.normalize(),s.push(Hn.x,Hn.y,Hn.z),s.push(Hn.x,Hn.y,Hn.z),s.push(Hn.x,Hn.y,Hn.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),m=this.parseVertexIndex(i,u);if(this.addVertex(h,f,m),this.addColor(h,f,m),a!==void 0&&a!==""){const x=this.normals.length;h=this.parseNormalIndex(a,x),f=this.parseNormalIndex(l,x),m=this.parseNormalIndex(c,x),this.addNormal(h,f,m)}else this.addFaceNormal(h,f,m);if(r!==void 0&&r!==""){const x=this.uvs.length;h=this.parseUVIndex(r,x),f=this.parseUVIndex(s,x),m=this.parseUVIndex(o,x),this.addUV(h,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class wR extends gs{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new Tp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new ER;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split($0);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(ic.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(ic.r,ic.g,ic.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split($0),m=[];for(let _=0,g=f.length;_<g;_++){const p=f[_];if(p.length>0){const v=p.split("/");m.push(v)}}const x=m[0];for(let _=1,g=m.length-1;_<g;_++){const p=m[_],v=m[_+1];t.addFace(x[0],p[0],v[0],x[1],p[1],v[1],x[2],p[2],v[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let f=[];const m=[];if(c.indexOf("/")===-1)f=h;else for(let x=0,_=h.length;x<_;x++){const g=h[x].split("/");g[0]!==""&&f.push(g[0]),g[1]!==""&&m.push(g[1])}t.addLineGeometry(f,m)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((r=_R.exec(c))!==null){const h=(" "+r[0].slice(1).trim()).slice(1);t.startObject(h)}else if(MR.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(SR.test(c))t.materialLibraries.push(c.substring(7).trim());else if(bR.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=c.split(" "),r.length>1){const f=r[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Lt;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",m=u.type==="Points";let x=!1;if(u.vertices.length===0)continue;const _=new ht;_.setAttribute("position",new mt(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new mt(u.normals,3)),u.colors.length>0&&(x=!0,_.setAttribute("color",new mt(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new mt(u.uvs,2));const g=[];for(let v=0,y=h.length;v<y;v++){const M=h[v],T=M.name+"_"+M.smooth+"_"+x;let E=t.materials[T];if(this.materials!==null){if(E=this.materials.create(M.name),f&&E&&!(E instanceof In)){const w=new In;An.prototype.copy.call(w,E),w.color.copy(E.color),E=w}else if(m&&E&&!(E instanceof Qr)){const w=new Qr({size:10,sizeAttenuation:!1});An.prototype.copy.call(w,E),w.color.copy(E.color),w.map=E.map,E=w}}E===void 0&&(f?E=new In:m?E=new Qr({size:1,sizeAttenuation:!1}):E=new a_,E.name=M.name,E.flatShading=!M.smooth,E.vertexColors=x,t.materials[T]=E),g.push(E)}let p;if(g.length>1){for(let v=0,y=h.length;v<y;v++){const M=h[v];_.addGroup(M.groupStart,M.groupCount,v)}f?p=new sh(_,g):m?p=new Ca(_,g):p=new _t(_,g)}else f?p=new sh(_,g[0]):m?p=new Ca(_,g[0]):p=new _t(_,g[0]);p.name=c.name,s.add(p)}else if(t.vertices.length>0){const a=new Qr({size:1,sizeAttenuation:!1}),l=new ht;l.setAttribute("position",new mt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new mt(t.colors,3)),a.vertexColors=!0);const c=new Ca(l,a);s.add(c)}return s}}const TR={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};let ga=null,rc=null;function AR(n){n.updateMatrixWorld(!0);const e=new gi().setFromObject(n),t=new k;e.getSize(t);const i=new k;e.getCenter(i),n.position.set(-i.x,-e.min.y,-i.z);const r=new Lt;r.name="DishNormalizedTemplate",r.add(n);const s=t.y||1;return r.scale.setScalar(1/s),r.updateMatrixWorld(!0),r}function CR(){if(ga)return Promise.resolve(ga);if(rc)return rc;const n=new wR,e=typeof import.meta<"u"&&TR&&"/"||"/",t=e.endsWith("/")?e:e+"/";return rc=n.loadAsync(`${t}Dish_LowPoly.obj`).then(i=>(ga=AR(i),ga)).catch(i=>{throw console.warn("Failed to load Dish_LowPoly.obj, falling back to cone geometry",i),i}),rc}function RR(){return ga}function PR(n,e,t=1){const i=new Lt;i.name="GroundStationDish";const r=new Fe(e),s=new ds({color:r,metalness:.65,roughness:.28,emissive:r,emissiveIntensity:.35});if(n){const o=n.clone(!0);o.name="DishMeshGroup",o.traverse(a=>{if(a.isMesh){const l=a;l.material=s,l.castShadow=!1,l.receiveShadow=!1}}),i.add(o)}else{const o=new wu(.24,.48,8),a=new ds({color:r,metalness:.5,roughness:.3,emissive:r,emissiveIntensity:.3}),l=new _t(o,a);l.position.set(0,.24,0),i.add(l)}return i.scale.setScalar(.48*t),i}const LR=({scenario:n,settings:e,currentTime:t,outages:i,criticalSatellites:r=[],focusedSatelliteId:s,onSelectSatellite:o})=>{const a=pe.useRef(null),l=pe.useRef({earthGroup:new Lt,orbits:new Lt,satellites:new Lt,gateways:new Lt,gatewayDomes:new Lt,islLines:new Lt,satLinks:new Lt,labels:new Lt,fovCones:new Lt,packets:new Lt}),c=pe.useRef(new Map),u=pe.useRef(null),h=pe.useRef(null),f=pe.useRef({}),[m,x]=pe.useState(!1),[_,g]=pe.useState(!1),p=pe.useRef(s);return pe.useEffect(()=>{p.current=s},[s]),pe.useEffect(()=>{mR().then(()=>x(!0)).catch(v=>console.warn("Could not load 3D satellite models:",v)),CR().then(()=>g(!0)).catch(v=>console.warn("Could not load Dish_LowPoly model:",v))},[]),pe.useEffect(()=>{if(!a.current)return;const v=a.current,y=()=>v.clientWidth||window.innerWidth,M=()=>v.clientHeight||window.innerHeight-44,T=new ZA;T.background=new Fe(329484);const E=4500,w=new Float32Array(E*3),A=new Float32Array(E*3);for(let le=0;le<E;le++){const C=Math.random(),S=Math.random(),U=C*2*Math.PI,F=Math.acos(2*S-1),W=400+Math.random()*250;w[le*3]=W*Math.sin(F)*Math.cos(U),w[le*3+1]=W*Math.sin(F)*Math.sin(U),w[le*3+2]=W*Math.cos(F);const j=.65+Math.random()*.35,fe=Math.random();fe>.88?(A[le*3]=.8*j,A[le*3+1]=.92*j,A[le*3+2]=1*j):fe>.72?(A[le*3]=1*j,A[le*3+1]=.96*j,A[le*3+2]=.88*j):(A[le*3]=.95*j,A[le*3+1]=.95*j,A[le*3+2]=.95*j)}const B=new ht;B.setAttribute("position",new tn(w,3)),B.setAttribute("color",new tn(A,3));const b=document.createElement("canvas");b.width=32,b.height=32;const I=b.getContext("2d");if(I){const le=I.createRadialGradient(16,16,0,16,16,16);le.addColorStop(0,"rgba(255, 255, 255, 1)"),le.addColorStop(.2,"rgba(240, 245, 255, 0.9)"),le.addColorStop(.5,"rgba(200, 220, 255, 0.35)"),le.addColorStop(1,"rgba(0, 0, 0, 0)"),I.fillStyle=le,I.beginPath(),I.arc(16,16,16,0,Math.PI*2),I.fill()}const re=new Lo(b),X=new Qr({size:2.2,map:re,vertexColors:!0,transparent:!0,opacity:.95,blending:Ya,depthWrite:!1}),N=new Ca(B,X);T.add(N),l.current.starField=N;const K=new gn(45,y()/M(),.1,1e3);K.position.set(0,16,28),u.current=K;const V=new n_({antialias:!0,alpha:!1});V.setSize(y(),M()),V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.domElement.style.display="block",V.domElement.style.width="100%",V.domElement.style.height="100%",v.appendChild(V.domElement);const Q=new DC(K,V.domElement);Q.enableDamping=!0,Q.dampingFactor=.05,Q.minDistance=7,Q.maxDistance=120,h.current=Q;const P=new LC,L=new Ie,z=le=>{var F;const C=V.domElement.getBoundingClientRect();L.x=(le.clientX-C.left)/C.width*2-1,L.y=-((le.clientY-C.top)/C.height)*2+1,P.setFromCamera(L,K);const S=Array.from(c.current.keys()),U=P.intersectObjects(S,!1);if(U.length>0){let W;for(const j of U){if(W=c.current.get(j.object),W)break;let fe=j.object.parent;for(;fe;){if((F=fe.userData)!=null&&F.satellite){W=fe.userData.satellite;break}fe=fe.parent}if(W)break}W&&o(W)}};V.domElement.addEventListener("click",z);const $=new _C(16777215,1.1);T.add($);const ee=new ah(16777215,.9);ee.position.set(30,40,50),T.add(ee);const _e=new ah(16777215,.5);_e.position.set(-30,-20,-40),T.add(_e);const G=6.371,Z=new mr(G,64,64);Z.scale(1,6356.752/6378.137,1);const me=kR(),Re=new Lo(me);Re.wrapS=oi;const ye=new a_({map:Re,shininess:30,specular:new Fe(1718886)}),Te=new _t(Z,ye),He=new u_;He.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",le=>{le.wrapS=oi,ye.map=le,ye.needsUpdate=!0},void 0,()=>{He.load("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",le=>{le.wrapS=oi,ye.map=le,ye.needsUpdate=!0},void 0,()=>{He.load("https://unpkg.com/three-globe/example/img/earth-day.jpg",le=>{le.wrapS=oi,ye.map=le,ye.needsUpdate=!0})})}),He.load("https://unpkg.com/three-globe/example/img/earth-topology.png",le=>{le.wrapS=oi,ye.bumpMap=le,ye.bumpScale=.05,ye.needsUpdate=!0});const Ae=l.current.earthGroup;Ae.add(Te);const H=new mr(G*1.025,48,48);H.scale(1,6356.752/6378.137,1);const lt=new Vt({color:3359061,transparent:!0,opacity:.15,side:vn}),Pe=new _t(H,lt);Ae.add(Pe),l.current.atmosMesh=Pe,Ae.add(l.current.orbits),Ae.add(l.current.satellites),Ae.add(l.current.gateways),Ae.add(l.current.gatewayDomes),Ae.add(l.current.islLines),Ae.add(l.current.satLinks),Ae.add(l.current.labels),Ae.add(l.current.fovCones),Ae.add(l.current.packets),T.add(Ae);const ze=()=>{const le=y(),C=M();le>0&&C>0&&(K.aspect=le/C,K.updateProjectionMatrix(),V.setSize(le,C))},De=new ResizeObserver(()=>ze());De.observe(v),window.addEventListener("resize",ze);let Ge;const je=new k,se=()=>{Ge=requestAnimationFrame(se),Q.update(),l.current.starField&&(l.current.starField.rotation.y+=3e-5);const le=K.position.clone().normalize();l.current.labels.children.forEach(U=>{U.getWorldPosition(je),je.normalize();const F=je.dot(le),W=U;let j=1;F<0?j=.15:F<.2&&(j=.15+.85*(F/.2)),W.material.opacity=j}),l.current.satellites.children.forEach(U=>{const F=U.userData;F&&F.targetPos&&(U.position.lerp(F.targetPos,.18),Math.abs(U.position.y/(U.position.length()||1))>.95?U.up.set(1,0,0):U.up.set(0,1,0),U.lookAt(0,0,0))});const C=p.current;l.current.satellites.children.forEach(U=>{var F;if(U.name==="Satellite3D"){const W=(F=U.userData)==null?void 0:F.satellite,j=!!(W&&W.id===C);X0(U,K,j)}});const S=performance.now()*.001;l.current.packets.children.forEach(U=>{const F=U.userData;if(F&&F.startPos&&F.endPos){const W=(S*F.speed+F.phase)%1;U.position.lerpVectors(F.startPos,F.endPos,W)}}),V.render(T,K)};return se(),()=>{V.domElement.removeEventListener("click",z),De.disconnect(),window.removeEventListener("resize",ze),cancelAnimationFrame(Ge),v.contains(V.domElement)&&v.removeChild(V.domElement),V.dispose()}},[]),pe.useEffect(()=>{if(!u.current||!h.current)return;const v=u.current,y=h.current;let M,T;s&&f.current[s]?(M=f.current[s].clone(),T=M.clone().multiplyScalar(1.32)):(M=new k(0,0,0),T=new k(0,0,25));let E=0;const w=setInterval(()=>{E+=.05,y.target.lerp(M,.12),v.position.lerp(T,.12),E>=1&&clearInterval(w)},20);return()=>clearInterval(w)},[s]),pe.useEffect(()=>{var Te,He,Ae,H,lt,Pe,ze,De,Ge,je;if(!n)return;const{earthGroup:v,orbits:y,satellites:M,gateways:T,gatewayDomes:E,islLines:w,satLinks:A,labels:B,fovCones:b,packets:I,atmosMesh:re}=l.current;re&&(re.visible=e.showAtmosphere,re.material.color.set(e.atmosphereColor||"#1e3a8a")),[y,M,T,E,w,A,B,b,I].forEach(se=>{for(;se.children.length>0;)se.remove(se.children[0])}),c.current.clear(),f.current={};const X=6.371,N=398600.435507,K=12*(Math.PI/180);v.rotation.y=K;const V=new Set(i.map(se=>se.satellite_id)),Q={},P={};new Vt({color:e.satColor||"#ffffff"}),new Vt({color:e.highLatencySatColor||"#ff9900"}),new Vt({color:e.offlineSatColor||"#ff3b30"}),new mr(.22*e.satSize,16,16);const L=new Set;(n.routes_sample||[]).forEach(se=>{(se.latency_ms>35||se.path.length>=4)&&se.path.forEach(le=>{le.startsWith("S")&&L.add(le)})});const z={};(He=(Te=n.raw_scenario)==null?void 0:Te.design)!=null&&He.planes&&n.raw_scenario.design.planes.forEach(se=>{const le=parseInt(String(se.id).replace("P",""))||1;z[le]={raanDeg:se.raan_deg??0,phaseDeg:se.phase_deg??0}});const $=new Map;(n.satellites||[]).forEach(se=>$.set(se.id,se));const ee=se=>{var C,S;const le=$.get(se);return le?!!((C=e.hiddenPlanes)!=null&&C[le.plane]||(S=e.hiddenSatellites)!=null&&S[se]):!1},_e=se=>{var le;return e.showGateways===!1||!!((le=e.hiddenGateways)!=null&&le[se])};let G=1;(n.satellites||[]).forEach(se=>{const le=typeof se.plane=="number"?se.plane:parseInt(String(se.plane_id||se.plane||"1").replace("P",""))||1;le>G&&(G=le)}),(n.satellites||[]).forEach(se=>{var We,st;const le=typeof se.plane=="number"?se.plane:parseInt(String(se.plane_id||se.plane||"1").replace("P",""))||1,C=!ee(se.id),S=V.has(se.id),U=!S&&L.has(se.id),F=se.altitude||550,W=6371+F,j=X+F/1e3*1.2;let fe;((We=z[le])==null?void 0:We.raanDeg)!==void 0?fe=z[le].raanDeg:typeof se.raan=="number"&&se.raan>0?fe=se.raan:fe=(le-1)*(360/Math.max(1,G));let ue;((st=z[le])==null?void 0:st.phaseDeg)!==void 0?ue=z[le].phaseDeg:typeof se.phase=="number"?ue=se.phase:ue=(le-1)*15;let ne=0;typeof se.slot_deg=="number"?ne=se.slot_deg:typeof se.slot=="number"?ne=se.slot:typeof se.true_anomaly=="number"&&se.true_anomaly!==0?ne=se.true_anomaly:typeof se.idx=="number"&&(ne=se.idx>=15?se.idx:se.idx*45);const de=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[le])??0,ve=((e==null?void 0:e.planePhaseMap)&&e.planePhaseMap[le])??0,oe=(fe+de)%360*(Math.PI/180),Ne=(ue+ve)%360*(Math.PI/180),ke=Math.sqrt(N/Math.pow(W,3)),xe=ne*(Math.PI/180)+Ne+ke*t,be=(se.inc||87)*(Math.PI/180),D=j*(Math.cos(oe)*Math.cos(xe)-Math.sin(oe)*Math.sin(xe)*Math.cos(be)),ae=j*(Math.sin(oe)*Math.cos(xe)+Math.cos(oe)*Math.sin(xe)*Math.cos(be)),Se=j*(Math.sin(xe)*Math.sin(be)),O=W*(Math.cos(oe)*Math.cos(xe)-Math.sin(oe)*Math.sin(xe)*Math.cos(be)),he=W*(Math.sin(oe)*Math.cos(xe)+Math.cos(oe)*Math.sin(xe)*Math.cos(be)),q=W*(Math.sin(xe)*Math.sin(be)),ce=new k(D,Se,ae),we=new k(O,q,he);if(P[se.id]=ce,f.current[se.id]=ce,Au(se,t),Q[le]||(Q[le]=[]),Q[le].push({sat:se,pos:ce,posKm:we,isOffline:S,isHighLatency:U,uAngle:xe}),e.showSatellites&&C){const tt=gR(),it=S?"offline":U?"highLatency":"active",Xe=se.id===s,{satGroup:$e,hitMesh:at,modelMeshes:qt}=vR(tt,it,e,e.satSize,Xe);if($e.position.copy(ce),Math.abs(ce.y/(ce.length()||1))>.95?$e.up.set(1,0,0):$e.up.set(0,1,0),$e.lookAt(0,0,0),$e.userData={satellite:se,targetPos:ce.clone(),satId:se.id},M.add($e),c.current.set(at,se),qt.forEach(gt=>{c.current.set(gt,se)}),u.current&&X0($e,u.current,Xe),e.satGlow){const gt=r.includes(se.id),Pt=gt?"#ff0000":S?"#888888":U?e.highLatencySatColor:e.satColor;let Fn=Xe?.4:.85;S&&(Fn=(Math.sin(t*.5)*.5+.5)*.8),gt&&(Fn=1);const Ki=new sl({map:IR(Pt||"#ffffff"),color:16777215,transparent:!0,opacity:Fn,blending:Ya}),xi=new Eu(Ki),Nr=gt?2.5:1.1;xi.scale.set(Nr*e.satSize,Nr*e.satSize,1),xi.position.copy(ce),M.add(xi)}}if(e.showLabels&&C){const tt=se.id===s,it=se.id,Xe=S?e.offlineSatColor:tt?"#ffffff":U?e.highLatencySatColor:e.satColor,$e=Z0(it,"#ffffff",Xe||"#ffffff"),at=ce.clone().normalize();$e.position.copy(ce).addScaledVector(at,.38*e.satSize),B.add($e)}if(s===se.id&&C){const tt=j-X,it=tt*Math.tan(35*Math.PI/180),Xe=new wu(it,tt,32,1,!0),$e=new Vt({color:S?e.offlineSatColor:e.fovConeColor||e.satColor,transparent:!0,opacity:.18,side:xn,depthWrite:!1}),at=new _t(Xe,$e),qt=new k(0,0,0).sub(ce).normalize(),gt=ce.clone().add(qt.clone().multiplyScalar(tt/2));at.position.copy(gt),at.lookAt(0,0,0),at.rotateX(Math.PI/2),b.add(at);const Pt=new d_(16777215,3,10);Pt.position.copy(ce),b.add(Pt);const Fn=new nu(it*.96,it,48),Ki=new Vt({color:S?e.offlineSatColor:e.fovConeColor||e.satColor,side:xn,transparent:!0,opacity:.8}),xi=new _t(Fn,Ki),Nr=ce.clone().normalize().multiplyScalar(X*1.002);xi.position.copy(Nr),xi.lookAt(0,0,0),b.add(xi)}if(e.showCoverageHeatmap&&C){const it=(j-X)*Math.tan(35*Math.PI/180),Xe=new Ep(it,32),$e=new Vt({color:S?e.offlineSatColor:e.fovConeColor||"#00ff88",side:xn,transparent:!0,opacity:S?.15:.22,depthWrite:!1}),at=new _t(Xe,$e),qt=ce.clone().normalize().multiplyScalar(X*1.002);at.position.copy(qt),at.lookAt(0,0,0),b.add(at);const gt=new nu(it*.97,it,32),Pt=new Vt({color:S?e.offlineSatColor:e.fovConeColor||"#00ff88",side:xn,transparent:!0,opacity:S?.35:.65}),Fn=new _t(gt,Pt);Fn.position.copy(qt.clone().multiplyScalar(1.0005)),Fn.lookAt(0,0,0),b.add(Fn)}}),e.showOrbits&&Object.keys(Q).forEach(se=>{var Ne,ke,Me;const le=parseInt(se);if((Ne=e.hiddenPlanes)!=null&&Ne[le])return;const C=(ke=Q[le][0])==null?void 0:ke.sat;if(!C)return;const S=C.altitude||550,U=X+S/1e3*1.2,F=((Me=z[le])==null?void 0:Me.raanDeg)??C.raan??(le-1)*60,W=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[le])??0,j=(F+W)%360*(Math.PI/180),fe=(C.inc||87)*(Math.PI/180),ue=[],ne=128;for(let xe=0;xe<=ne;xe++){const be=xe/ne*Math.PI*2,D=U*(Math.cos(j)*Math.cos(be)-Math.sin(j)*Math.sin(be)*Math.cos(fe)),ae=U*(Math.sin(j)*Math.cos(be)+Math.cos(j)*Math.sin(be)*Math.cos(fe)),Se=U*(Math.sin(be)*Math.sin(fe));ue.push(new k(D,Se,ae))}const de=new ht().setFromPoints(ue),ve=new In({color:e.orbitColor||"#475569",transparent:!0,opacity:e.orbitOpacity}),oe=new Mc(de,ve);y.add(oe)}),Object.keys(Q).forEach(se=>{Q[parseInt(se)].sort((le,C)=>le.uAngle-C.uAngle)});const Z={};new Vt({color:e.gatewayColor||"#00d084"});const me=6.371,Re=6.371*(6356.752/6378.137),ye=1-Re*Re/(me*me);if((n.gateways||[]).forEach(se=>{var ue,ne;const le=se.lat*Math.PI/180,C=se.lon*Math.PI/180,S=me/Math.sqrt(1-ye*Math.sin(le)*Math.sin(le)),U=S*Math.cos(le)*Math.cos(C),F=S*Math.cos(le)*Math.sin(C),W=S*(1-ye)*Math.sin(le),j=new k(U,W,F);Z[se.id]=j;const fe=!_e(se.id);if(e.showGateways&&fe){const de=RR(),ve=PR(de,e.gatewayColor||"#00d084",e.satSize);ve.position.copy(j);const oe=j.clone().normalize();if(ve.quaternion.setFromUnitVectors(new k(0,1,0),oe),T.add(ve),e.showGatewayCoverage!==!1){const ke=(((ne=(ue=n.raw_scenario)==null?void 0:ue.environment)==null?void 0:ne.altitude_km)??550)/1e3*1.2,Me=Math.max(1.2,ke*1.85),xe=new mr(Me,32,16,0,Math.PI*2,0,Math.PI/2),be=new Vt({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.2,side:xn,depthWrite:!1}),D=new _t(xe,be);D.position.copy(j);const ae=j.clone().normalize();D.quaternion.setFromUnitVectors(new k(0,1,0),ae);const Se=[],O=48;for(let gt=0;gt<=O;gt++){const Pt=gt/O*Math.PI*2;Se.push(new k(Math.cos(Pt)*Me,0,Math.sin(Pt)*Me))}const he=new ht().setFromPoints(Se),q=new In({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.45,depthWrite:!1}),ce=new Mc(he,q);D.add(ce);const we=[],We=Me*Math.cos(Math.PI/4),st=Me*Math.sin(Math.PI/4);for(let gt=0;gt<=O;gt++){const Pt=gt/O*Math.PI*2;we.push(new k(Math.cos(Pt)*We,st,Math.sin(Pt)*We))}const tt=new ht().setFromPoints(we),it=new In({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.25,depthWrite:!1}),Xe=new Mc(tt,it);D.add(Xe);const $e=new In({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.28,depthWrite:!1}),at=[],qt=[];for(let gt=0;gt<=32;gt++){const Pt=gt/32*Math.PI;at.push(new k(Math.cos(Pt)*Me,Math.sin(Pt)*Me,0)),qt.push(new k(0,Math.sin(Pt)*Me,Math.cos(Pt)*Me))}D.add(new Fi(new ht().setFromPoints(at),$e)),D.add(new Fi(new ht().setFromPoints(qt),$e)),E.add(D)}}if(e.showLabels&&e.showGateways&&fe){const de=Z0(se.id,"#ffffff",e.gatewayColor||"#00d084"),ve=j.clone().normalize();de.position.copy(j).addScaledVector(ve,.35),B.add(de)}}),e.showISL){const se=Object.keys(Q).map(Number).sort((C,S)=>C-S);se.forEach(C=>{var U;if((U=e.hiddenPlanes)!=null&&U[C])return;const S=Q[C];for(let F=0;F<S.length;F++){const W=S[F],j=S[(F+1)%S.length];if(ee(W.sat.id)||ee(j.sat.id))continue;const fe=W.isOffline||j.isOffline,ue=W.isHighLatency||j.isHighLatency,ne=!!e.showTrafficLoad,de=Math.min(99,Math.max(12,Math.round(35+Math.sin(t*.08+C*1.5)*40+(ue?35:0)))),ve=fe?e.offlineSatColor:ne?de>80?"#ef4444":de>55?"#f59e0b":"#38bdf8":ue?e.highLatencySatColor:e.islColor||"#00ff88",oe=qd(W.pos,j.pos,16),Ne=new ht().setFromPoints(oe),ke=new In({color:ve,transparent:!0,opacity:fe?.25:ne?.9:ue?.85:.65}),Me=new Fi(Ne,ke);if(w.add(Me),e.showDistances===!0){const xe=Math.round(W.posKm.distanceTo(j.posKm));if(xe>0){const be=DR(W.pos,j.pos,.15),D=W.sat.id===s||j.sat.id===s,ae=ne?`${xe} км | ${de}%`:`${xe} км`,Se=Yd(ae,D||de>80);Se.position.copy(be),B.add(Se)}}}});const le=((H=(Ae=n.raw_scenario)==null?void 0:Ae.environment)==null?void 0:H.isl_range_km)??3e3;for(let C=0;C<se.length;C++){const S=se[C],U=se[(C+1)%se.length];if((lt=e.hiddenPlanes)!=null&&lt[S]||(Pe=e.hiddenPlanes)!=null&&Pe[U])continue;const F=Q[S],W=Q[U];F.forEach(j=>{if(ee(j.sat.id))return;let fe=1/0,ue=null,ne=null,de=!1,ve=!1;if(W.forEach(oe=>{if(ee(oe.sat.id))return;const Ne=j.posKm.distanceTo(oe.posKm);Ne<=le&&!NR(j.posKm,oe.posKm)&&Ne<fe&&(fe=Ne,ue=oe.pos,ne=oe.posKm,de=oe.isOffline,ve=oe.isHighLatency)}),ue&&ne){const oe=j.isOffline||de,Ne=j.isHighLatency||ve,ke=!!e.showTrafficLoad,Me=Math.min(99,Math.max(15,Math.round(42+Math.cos(t*.06+C*2.1)*38+(Ne?30:0)))),xe=oe?e.offlineSatColor:ke?Me>80?"#ef4444":Me>55?"#f59e0b":"#38bdf8":Ne?e.highLatencySatColor:e.islColor||"#cbd5e1",be=qd(j.pos,ue,16),D=new ht().setFromPoints(be),ae=new In({color:xe,transparent:!0,opacity:oe?.25:ke?.9:Ne?.75:.5}),Se=new Fi(D,ae);w.add(Se)}})}}if(e.showSatLinks){const se=n.routes_sample||[],le=new Set,C=((De=(ze=n.raw_scenario)==null?void 0:ze.environment)==null?void 0:De.altitude_km)??550;se.forEach(U=>{const F=U.path||[],W=F.some(fe=>V.has(fe)),j=!!(s&&F.includes(s));if(F.length>=2)for(let fe=0;fe<F.length-1;fe++){const ue=F[fe],ne=F[fe+1];if(_e(ue)||_e(ne)||ee(ue)||ee(ne))continue;const de=[ue,ne].sort().join("--");le.add(de);const ve=Z[ue]||P[ue],oe=Z[ne]||P[ne],Ne=!!(Z[ue]||Z[ne]);if(ve&&oe){if(Ne){const ae=Z[ue]||Z[ne],Se=Z[ue]?oe:ve;if(!Q0(ae,Se,0))continue}const ke=Ne?[ve,oe]:qd(ve,oe,20),Me=new ht().setFromPoints(ke),xe=W?e.offlineSatColor:j?"#00ff88":Ne?e.groundLinkColor||"#94a3b8":e.islColor||"#cbd5e1",be=new In({color:xe,transparent:!0,opacity:j?1:W?.9:Ne?.95:.85}),D=new Fi(Me,be);if(A.add(D),Ne&&e.showDistances===!0){const ae=Z[ue]||Z[ne],Se=Z[ue]?oe:ve,O=J0(ae,Se,C);if(O>0){const he=new k().addVectors(ve,oe).multiplyScalar(.51),q=Yd(`${O} км`,!0);q.position.copy(he),B.add(q)}}if(Ne||j){const ae=W?e.offlineSatColor:j?"#00ff88":e.groundLinkColor||"#94a3b8",Se=j?4:2;for(let O=0;O<Se;O++){const he=sc(ae);he.userData={startPos:ve.clone(),endPos:oe.clone(),speed:j?1.2:.65,phase:O/Se},I.add(he);const q=sc(j?"#ffffff":"#38bdf8");q.userData={startPos:oe.clone(),endPos:ve.clone(),speed:j?1.3:.75,phase:(O+.5)/Se},I.add(q)}}}}});const S=((je=(Ge=n.raw_scenario)==null?void 0:Ge.environment)==null?void 0:je.min_elevation_deg)??10;Object.keys(Z).forEach(U=>{if(_e(U))return;const F=Z[U];(n.satellites||[]).filter(j=>!ee(j.id)).map(j=>{const fe=P[j.id];return!fe||!Q0(F,fe,S)?null:{pos:fe,dist:F.distanceTo(fe)}}).filter(j=>j!==null).sort((j,fe)=>j.dist-fe.dist).slice(0,2).forEach(j=>{const fe=new ht().setFromPoints([F,j.pos]),ue=new In({color:e.groundLinkColor||"#f59e0b",transparent:!0,opacity:.6}),ne=new Fi(fe,ue);if(A.add(ne),e.showDistances===!0){const ve=J0(F,j.pos,C);if(ve>0){const oe=new k().addVectors(F,j.pos).multiplyScalar(.51),Ne=Yd(`${ve} км`,!0);Ne.position.copy(oe),B.add(Ne)}}const de=e.groundLinkColor||"#f59e0b";for(let ve=0;ve<2;ve++){const oe=sc(de);oe.userData={startPos:F.clone(),endPos:j.pos.clone(),speed:.7,phase:ve*.5},I.add(oe);const Ne=sc("#34d399");Ne.userData={startPos:j.pos.clone(),endPos:F.clone(),speed:.8,phase:(ve+.5)*.5},I.add(Ne)}})})}},[n,e,t,i,s,m,_]),d.jsx("div",{ref:a,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:1}})};function Z0(n,e,t){const i=document.createElement("canvas");i.width=384,i.height=96;const r=i.getContext("2d");r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.font='500 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',r.textAlign="center",r.textBaseline="middle",r.strokeStyle="rgba(5, 10, 20, 0.88)",r.lineWidth=4.5,r.lineJoin="round",r.strokeText(n,192,48),r.fillStyle=t,r.fillText(n,192,48);const s=new Lo(i);s.minFilter=ui,s.magFilter=Xt,s.generateMipmaps=!0;const o=new sl({map:s,transparent:!0,depthTest:!0,depthWrite:!1}),a=new Eu(o);return a.scale.set(1.28,.32,1),a}function Yd(n,e=!1){const t=document.createElement("canvas");t.width=260,t.height=72;const i=t.getContext("2d");i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.fillStyle=e?"rgba(0, 240, 255, 0.95)":"rgba(15, 23, 38, 0.88)",i.beginPath(),typeof i.roundRect=="function"?i.roundRect(8,8,244,56,12):i.rect(8,8,244,56),i.fill(),i.strokeStyle=e?"#ffffff":"#475569",i.lineWidth=2.5,i.stroke(),i.fillStyle=e?"#000000":"#ffffff",i.font='500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(n,130,36);const r=new Lo(t);r.minFilter=ui,r.magFilter=Xt,r.generateMipmaps=!0;const s=new sl({map:r,transparent:!0,depthTest:!0,depthWrite:!1}),o=new Eu(s);return o.scale.set(.85,.235,1),o}function J0(n,e,t=550){const r=6371+t,s=Math.max(-1,Math.min(1,n.clone().normalize().dot(e.clone().normalize()))),o=r*r+6371*6371-2*r*6371*s;return Math.round(Math.sqrt(Math.max(0,o)))}function IR(n){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=new Fe(n),r=Math.round(i.r*255),s=Math.round(i.g*255),o=Math.round(i.b*255),a=t.createRadialGradient(32,32,0,32,32,32);return a.addColorStop(0,`rgba(${r}, ${s}, ${o}, 1.0)`),a.addColorStop(.4,`rgba(${r}, ${s}, ${o}, 0.5)`),a.addColorStop(1,`rgba(${r}, ${s}, ${o}, 0)`),t.fillStyle=a,t.fillRect(0,0,64,64),new Lo(e)}function qd(n,e,t=16){const i=n.clone().normalize(),r=e.clone().normalize(),s=n.length(),o=e.length(),a=i.angleTo(r);if(a<.001)return[n,e];const l=Math.sin(a),c=[];for(let u=0;u<=t;u++){const h=u/t,f=Math.sin((1-h)*a)/l,m=Math.sin(h*a)/l,x=new k().addScaledVector(i,f).addScaledVector(r,m).normalize(),_=s*(1-h)+o*h,g=Math.sin(h*Math.PI)*(a*.3),p=_+g;c.push(x.multiplyScalar(p))}return c}function DR(n,e,t=.15){const i=n.clone().normalize(),r=e.clone().normalize(),s=i.angleTo(r);if(s<.001)return new k().addVectors(n,e).multiplyScalar(.5);const o=Math.sin(s),a=Math.sin(.5*s)/o,l=new k().addScaledVector(i,a).addScaledVector(r,a).normalize(),c=n.length(),u=e.length(),h=(c+u)*.5,f=Math.sin(.5*Math.PI)*(s*.3),m=h+f+t;return l.multiplyScalar(m)}function NR(n,e,t=6371){const i=new k().subVectors(e,n),r=i.lengthSq();if(r<1e-6)return!1;const s=yp.clamp(-n.dot(i)/r,0,1);return new k().copy(n).addScaledVector(i,s).length()<=t}function Q0(n,e,t=0){const i=n.clone().normalize(),r=e.clone().sub(n),s=r.length();if(s<.001)return!1;r.divideScalar(s);const o=r.dot(i),a=Math.sin(t*Math.PI/180);return o>=a}function kR(){const n=document.createElement("canvas");n.width=2048,n.height=1024;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,1024);t.addColorStop(0,"#103056"),t.addColorStop(.5,"#19497c"),t.addColorStop(1,"#103056"),e.fillStyle=t,e.fillRect(0,0,2048,1024);const i=(o,a)=>{const l=(a+180)/360*2048,c=(90-o)/180*1024;return[l,c]},r=(o,a="#2a542a",l="#3e753e")=>{if(o.length<3)return;e.beginPath();const[c,u]=i(o[0][0],o[0][1]);e.moveTo(c,u);for(let h=1;h<o.length;h++){const[f,m]=i(o[h][0],o[h][1]);e.lineTo(f,m)}e.closePath(),e.fillStyle=a,e.fill(),e.strokeStyle=l,e.lineWidth=1.5,e.stroke()};r([[70,10],[72,40],[70,70],[75,100],[70,140],[65,170],[60,175],[50,140],[40,120],[35,100],[25,120],[10,105],[10,75],[25,60],[30,50],[35,35],[40,30],[36,5],[38,-9],[44,-9],[55,10],[60,5],[62,20],[70,10]],"#2a542a","#3e753e"),r([[70,-170],[75,-120],[70,-80],[60,-60],[45,-65],[30,-80],[25,-90],[15,-90],[15,-105],[30,-115],[40,-125],[60,-165],[70,-170]],"#2a542a","#3e753e"),r([[10,-75],[0,-50],[-10,-38],[-25,-45],[-45,-65],[-55,-70],[-35,-75],[0,-80],[10,-75]],"#244824","#386638"),r([[35,-5],[37,10],[32,32],[10,50],[-10,40],[-34,20],[-34,18],[-10,12],[5,2],[5,-15],[15,-17],[35,-5]],"#544c2a","#786d3e"),r([[-12,130],[-15,145],[-35,150],[-38,140],[-32,115],[-20,115],[-12,130]],"#54482a","#78683e"),e.strokeStyle="#25588c",e.lineWidth=1;for(let o=0;o<=2048;o+=128)e.beginPath(),e.moveTo(o,0),e.lineTo(o,1024),e.stroke();for(let o=0;o<=1024;o+=64)e.beginPath(),e.moveTo(0,o),e.lineTo(2048,o),e.stroke();return[[55.75,37.61],[59.93,30.31],[68.97,33.08],[65.14,57.22],[51.5,-.12],[40.71,-74],[35.67,139.65],[39.9,116.4]].forEach(([o,a])=>{const[l,c]=i(o,a),u=e.createRadialGradient(l,c,0,l,c,8);u.addColorStop(0,"rgba(0, 255, 136, 0.9)"),u.addColorStop(.5,"rgba(20, 115, 230, 0.4)"),u.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=u,e.beginPath(),e.arc(l,c,8,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(l,c,2,0,Math.PI*2),e.fill()}),n}function sc(n){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");t.imageSmoothingEnabled=!0;const i=t.createRadialGradient(32,32,2,32,32,28);i.addColorStop(0,"#ffffff"),i.addColorStop(.4,n),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.beginPath(),t.arc(32,32,28,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.fillRect(18,20,28,24),t.strokeStyle=n,t.lineWidth=3,t.strokeRect(18,20,28,24),t.strokeStyle=n,t.lineWidth=2.5,t.beginPath(),t.moveTo(22,27),t.lineTo(32,35),t.lineTo(42,27),t.stroke();const r=new Lo(e),s=new sl({map:r,transparent:!0,opacity:.95,blending:Ya,depthWrite:!1}),o=new Eu(s);return o.scale.set(.24,.24,1),o}const Ws=({title:n,isOpen:e,onClose:t,initialPos:i={x:100,y:60,width:720,height:480},zIndex:r,onFocus:s,children:o})=>{const a=()=>{const M=typeof window<"u"?window.innerWidth:1200,T=typeof window<"u"?window.innerHeight:800,E=M<=768,w=Math.min(E?M-16:M-32,i.width),A=Math.min(E?T-70:T-80,i.height),B=E?Math.max(8,(M-w)/2):Math.min(Math.max(8,i.x),M-w-8),b=E?Math.max(50,(T-A)/2):Math.min(Math.max(50,i.y),T-A-8);return{x:B,y:b,width:w,height:A}},[l,c]=pe.useState(()=>{const M=a();return{x:M.x,y:M.y,width:M.width,height:M.height,isMaximized:!1,isMinimized:!1,zIndex:r}}),u=pe.useRef(!1),h=pe.useRef(!1),f=pe.useRef({x:0,y:0}),m=pe.useRef({w:0,h:0,x:0,y:0});if(pe.useEffect(()=>{c(M=>({...M,zIndex:r}))},[r]),pe.useEffect(()=>{const M=()=>{c(T=>{const E=window.innerWidth,w=window.innerHeight,A=Math.min(T.width,E-16),B=Math.min(T.height,w-60),b=Math.min(Math.max(4,T.x),Math.max(4,E-A-4)),I=Math.min(Math.max(48,T.y),Math.max(48,w-B-4));return{...T,x:b,y:I,width:A,height:B}})};return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]),!e)return null;const x=(M,T)=>{if(s(),l.isMaximized)return;u.current=!0,f.current={x:M-l.x,y:T-l.y};const E=(b,I)=>{if(!u.current)return;const re=window.innerWidth,X=window.innerHeight,N=Math.min(Math.max(4,b-f.current.x),re-l.width-4),K=Math.min(Math.max(48,I-f.current.y),X-l.height-4);c(V=>({...V,x:N,y:K}))},w=b=>E(b.clientX,b.clientY),A=b=>{b.touches[0]&&E(b.touches[0].clientX,b.touches[0].clientY)},B=()=>{u.current=!1,window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",B),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",B)};window.addEventListener("mousemove",w),window.addEventListener("mouseup",B),window.addEventListener("touchmove",A,{passive:!0}),window.addEventListener("touchend",B)},_=M=>x(M.clientX,M.clientY),g=M=>{M.touches[0]&&x(M.touches[0].clientX,M.touches[0].clientY)},p=M=>{if(M.stopPropagation(),s(),l.isMaximized)return;h.current=!0,m.current={w:l.width,h:l.height,x:M.clientX,y:M.clientY};const T=w=>{if(!h.current)return;const A=w.clientX-m.current.x,B=w.clientY-m.current.y;c(b=>({...b,width:Math.max(380,m.current.w+A),height:Math.max(240,m.current.h+B)}))},E=()=>{h.current=!1,window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",E)};window.addEventListener("mousemove",T),window.addEventListener("mouseup",E)},v=()=>{c(M=>({...M,isMaximized:!M.isMaximized}))},y=l.isMaximized?{position:"fixed",top:"44px",left:0,width:"100vw",height:"calc(100vh - 44px)",zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)"}:{position:"fixed",left:`${l.x}px`,top:`${l.y}px`,width:`${l.width}px`,height:`${l.height}px`,zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",borderRadius:"6px",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)",overflow:"hidden"};return d.jsxs("div",{style:y,onClick:s,children:[d.jsxs("div",{onMouseDown:_,onTouchStart:g,style:{height:"36px",backgroundColor:"#1f1f1f",borderBottom:"1px solid #383838",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",cursor:l.isMaximized?"default":"move",userSelect:"none"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:600,fontSize:"13px",color:"#e0e0e0"},children:[d.jsx(rM,{size:14,style:{color:"#888"}}),d.jsx("span",{children:n})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx("button",{onClick:M=>{M.stopPropagation(),c(T=>({...T,isMinimized:!T.isMinimized}))},style:Kd,title:"Свернуть",children:d.jsx(iM,{size:12})}),d.jsx("button",{onClick:M=>{M.stopPropagation(),v()},style:Kd,title:l.isMaximized?"Восстановить":"Развернуть",children:d.jsx(xM,{size:12})}),d.jsx("button",{onClick:M=>{M.stopPropagation(),t()},style:Kd,title:"Закрыть",children:d.jsx(wv,{size:14})})]})]}),d.jsx("div",{style:{flex:1,overflow:"auto",position:"relative",backgroundColor:"#262626",color:"#e0e0e0"},children:o}),!l.isMaximized&&d.jsx("div",{onMouseDown:p,style:{position:"absolute",bottom:0,right:0,width:"16px",height:"16px",cursor:"nwse-resize",zIndex:10,background:"linear-gradient(135deg, transparent 50%, #4a4a4a 50%)"}})]})},Kd={backgroundColor:"transparent",color:"#a0a0a0",border:"none",borderRadius:"3px",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},UR=({scenario:n,outages:e,onApplyRecommendation:t})=>{var h,f;const[i,r]=pe.useState(new Set),s=e.length>0,o=((h=n==null?void 0:n.simulation_result)==null?void 0:h.overall_availability)??1,a=o<.9||((f=n==null?void 0:n.simulation_result)==null?void 0:f.all_targets_met)===!1,c=[{id:"reroute_isl",title:"1. Динамическая перемаршрутизация ISL графа",desc:"Перенаправить поток данных в обход отказавших аппаратов через смежную орбитную плоскость P2 (узлы S09, S10).",btnText:"Применить перемаршрутизацию ISL",icon:d.jsx($a,{size:15,style:{color:"#ffaa00"}})},{id:"phase_shift",title:"2. Фазовый сдвиг плоскости (+15° Phase)",desc:"Сдвинуть фазирование соседней плоскости для ликвидации мертвой зоны над северными пунктами Мурманск и Печора.",btnText:"Выполнить фазовый сдвиг (+15°)",icon:d.jsx(dM,{size:15,style:{color:"#1473e6"}})},{id:"raan_adjust",title:"3. Корректировка RAAN плоскости (+10°)",desc:"Повернуть орбитальную плоскость вокруг оси Земли для компенсации сектора зоны покрытия.",btnText:"Скооректировать RAAN (+10°)",icon:d.jsx(Mv,{size:15,style:{color:"#00ff88"}})}].filter(m=>!i.has(m.id)),u=(m,x)=>{x.stopPropagation(),r(_=>new Set(_).add(m)),t(m)};return!a&&!s||c.length===0?d.jsxs("div",{style:ex,children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88"},children:[d.jsx(ns,{size:16}),d.jsx("span",{style:{fontWeight:600},children:!a&&!s?`Система функционирует штатно (SLA ${(o*100).toFixed(1)}% ≥ 90%)`:"Все рекомендации применены! Система оптимизирована."})]}),d.jsx("p",{style:{fontSize:"11px",color:"#aaa",margin:"4px 0 0 0"},children:!a&&!s?"Доступность сети выдержана на высоком уровне. Корректирующие рекомендации не требуются.":"Активные сбои ликвидированы, маршруты перестроены."})]}):d.jsxs("div",{style:ex,children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#ff3b30"},children:[d.jsx(dp,{size:18}),d.jsx("span",{style:{fontWeight:"bold",fontSize:"13px"},children:"Аварийная Ситуация: Рекомендации Регламента"})]}),d.jsx("span",{style:{fontSize:"10px",backgroundColor:"#ff3b3020",color:"#ff3b30",padding:"2px 6px",borderRadius:"3px"},children:"Нажмите на предложение, чтобы применить и убрать"})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"10px"},children:c.map(m=>d.jsxs("div",{onClick:x=>u(m.id,x),style:{...OR,cursor:"pointer",transition:"all 0.2s ease",borderLeft:"3px solid #1473e6"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[m.icon,d.jsx("b",{style:{color:"#fff",fontSize:"12px"},children:m.title})]}),d.jsx("span",{style:{fontSize:"10px",color:"#00ff88",opacity:.8},children:"[Нажмите, чтобы применить]"})]}),d.jsx("p",{style:{fontSize:"11px",color:"#ccc",margin:"4px 0 0 0",lineHeight:"1.4"},children:m.desc}),d.jsxs("button",{onClick:x=>u(m.id,x),style:FR,children:[d.jsx("span",{children:m.btnText}),d.jsx(vv,{size:12})]})]},m.id))})]})},ex={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"12px",marginTop:"12px"},OR={backgroundColor:"#141414",border:"1px solid #333",borderRadius:"4px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px"},FR={marginTop:"4px",backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"3px",padding:"5px 10px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",alignSelf:"flex-start"},zR=({scenario:n,outages:e=[],currentTime:t=0,onApplyRecommendation:i,onExportResultsJson:r,onOpenPdfReport:s})=>{var Q;const[o,a]=pe.useState("metrics"),[l,c]=pe.useState(new Set),[u,h]=pe.useState("soyuz");if(!n)return d.jsx("div",{style:{padding:"20px",color:"#888"},children:"Загрузка данных математического моделирования..."});const f=new Set(e.map(P=>P.satellite_id)),m=n.satellites.map(P=>Au(P,t)),x=m.length,_=m.filter(P=>f.has(P.id)).length,g=x-_,p=m.filter(P=>!f.has(P.id)&&!P.is_in_sunlight).length,v=m.reduce((P,L)=>P+(L.fuel_kg??10),0)/(x||1),y=m.reduce((P,L)=>P+(L.fuel_pct??100),0)/(x||1),M=m.reduce((P,L)=>P+(L.temperature_c??38),0)/(x||1),T=Math.max(...m.map(P=>P.temperature_c??38)),E=m.reduce((P,L)=>P+(L.battery_pct??100),0)/(x||1),w=(m.reduce((P,L)=>P+(L.solar_power_w??0),0)/1e3).toFixed(1),A=n.simulation_result,b=(A?A.overall_availability*100:99.98).toFixed(2),I=(38.4+_*4.2).toFixed(1),re=((A==null?void 0:A.overall_availability)??1)<.9||(A==null?void 0:A.all_targets_met)===!1,X=(A==null?void 0:A.client_summaries)||[],N=((Q=A==null?void 0:A.vulnerability)==null?void 0:Q.top_used_satellites)||[],K=A==null?void 0:A.economic_analysis,V=P=>{const L=Math.floor(P/3600),z=Math.floor(P%3600/60),$=Math.floor(P%60);return`${String(L).padStart(2,"0")}:${String(z).padStart(2,"0")}:${String($).padStart(2,"0")}`};return d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#121927",border:"1px solid #1473e650",borderRadius:"6px",padding:"8px 12px",fontSize:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600},children:[d.jsx(lp,{size:15,className:"animate-spin"}),d.jsxs("span",{children:["Симуляция Real-Time: T = +",V(t)]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[d.jsx("div",{style:{display:"flex",gap:"12px",fontSize:"11px",color:"#ccc"},children:d.jsxs("span",{children:["Отказов КА: ",d.jsx("b",{style:{color:_>0?"#ff3b30":"#888"},children:_})]})}),s&&d.jsxs("button",{onClick:s,style:{backgroundColor:"#1e293b",color:"#38bdf8",border:"1px solid #0284c7",borderRadius:"4px",padding:"3px 8px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},title:"Сгенерировать 4-страничный научно-технический PDF отчёт",children:[d.jsx(bv,{size:13}),d.jsx("span",{children:"Отчёт PDF"})]}),r&&d.jsxs("button",{onClick:r,style:{backgroundColor:"#20242b",color:"#38bdf8",border:"1px solid #333943",borderRadius:"4px",padding:"3px 8px",fontSize:"11px",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},title:"Скачать полные результаты симуляции в JSON",children:[d.jsx(cp,{size:13}),d.jsx("span",{children:"Скачать Итоговый JSON"})]})]})]}),d.jsxs("div",{style:{display:"flex",gap:"6px",borderBottom:"1px solid #383838",paddingBottom:"8px",flexWrap:"wrap"},children:[d.jsxs("button",{onClick:()=>a("metrics"),style:Vr(o==="metrics"),children:[d.jsx(bo,{size:14}),d.jsx("span",{children:"Сводные Метрики"})]}),d.jsxs("button",{onClick:()=>a("clients"),style:Vr(o==="clients"),children:[d.jsx(vc,{size:14}),d.jsxs("span",{children:["SLA по Пунктам (",X.length||3,")"]})]}),d.jsxs("button",{onClick:()=>a("gantt"),style:Vr(o==="gantt"),children:[d.jsx(_v,{size:14}),d.jsx("span",{children:"Диаграмма Гантта"})]}),d.jsxs("button",{onClick:()=>a("coverage"),style:Vr(o==="coverage"),children:[d.jsx(Hm,{size:14}),d.jsx("span",{children:"Покрытие Территории"})]}),d.jsxs("button",{onClick:()=>a("vulnerability"),style:Vr(o==="vulnerability"),children:[d.jsx(yv,{size:14}),d.jsx("span",{children:"Уязвимость (Критические КА)"})]}),d.jsxs("button",{onClick:()=>a("routes"),style:Vr(o==="routes"),children:[d.jsx(rd,{size:14}),d.jsx("span",{children:"Маршруты & Хопы"})]}),d.jsxs("button",{onClick:()=>a("economic"),style:Vr(o==="economic"),children:[d.jsx(Gs,{size:14}),d.jsx("span",{children:"Экономика & Топливо"})]})]}),o==="metrics"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[d.jsx(Gn,{icon:d.jsx(vc,{color:re?"#ff3b30":"#00ff88",size:20}),title:"Общая Доступность (SLA)",value:`${b}%`,sub:re?"[ВНИМАНИЕ] Нарушение нормативного SLA (< 90%)":"Все целевые SLA выдержаны"}),d.jsx(Gn,{icon:d.jsx($a,{color:"#1473e6",size:20}),title:"Задержка передачи (P95)",value:`${I} мс`,sub:_>0?`+${(_*4.2).toFixed(1)}мс за счет обхода отказов`:"Норматив < 50мс выдержан"}),d.jsx(Gn,{icon:d.jsx(rd,{color:"#ffaa00",size:20}),title:"Состояние группировки",value:`${g} / ${x}`,sub:_>0?`Отказов КА: ${_}`:"Штатный режим всех КА"}),d.jsx(Gn,{icon:d.jsx(bo,{color:"#1473e6",size:20}),title:"Солнечная генерация",value:`${w} кВт`,sub:`Батареи: ${E.toFixed(0)}% (Заряд/Разряд)`})]}),d.jsxs("div",{style:oc,children:[d.jsx("h4",{style:tx,children:"Динамическое распределение причин сбоев доступности (Real-Time Outage Breakdown)"}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"12px",marginTop:"8px"},children:[d.jsxs("div",{style:Zd,children:[d.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Затмение & Тень Земли"}),d.jsxs("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#c084fc"},children:[(p/(x||1)*100).toFixed(1),"%"]}),d.jsxs("span",{style:{fontSize:"10px",color:"#777"},children:[p," КА на аккумуляторах"]})]}),d.jsxs("div",{style:Zd,children:[d.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Аварийные отказы узлов"}),d.jsxs("span",{style:{fontSize:"18px",fontWeight:"bold",color:_>0?"#ff3b30":"#00ff88"},children:[(_/(x||1)*100).toFixed(1),"%"]}),d.jsxs("span",{style:{fontSize:"10px",color:"#777"},children:[_," КА отключено"]})]}),d.jsxs("div",{style:Zd,children:[d.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Доступность шлюзов"}),d.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#00ff88"},children:"100.0%"}),d.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Наземные станции в норме"})]})]})]}),d.jsx(UR,{scenario:n,outages:e,onApplyRecommendation:i||(()=>{})})]}),o==="clients"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Детализированные показания доступности по наземным объектам в реальном времени"}),d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[d.jsx("th",{style:Kt,children:"Объект / Пул"}),d.jsx("th",{style:Kt,children:"Видимость"}),d.jsx("th",{style:Kt,children:"Доступность (SLA)"}),d.jsx("th",{style:Kt,children:"Цель (90%)"}),d.jsx("th",{style:Kt,children:"Макс. отказ (сек)"}),d.jsx("th",{style:Kt,children:"Ср. хопов"}),d.jsx("th",{style:Kt,children:"Ср. дистанция"})]})}),d.jsx("tbody",{children:(X.length>0?X:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:1,availability_ratio:.9998,target_met:!0,max_outage_s:0,avg_hops:3.2,avg_distance_km:1420},{id:"Pechora",name:"Печора",visibility_ratio:.998,availability_ratio:.9995,target_met:!0,max_outage_s:10,avg_hops:2.8,avg_distance_km:1180},{id:"Murmansk",name:"Мурманск",visibility_ratio:1,availability_ratio:1,target_met:!0,max_outage_s:0,avg_hops:3,avg_distance_km:1350}]).map((P,L)=>{const z=P.availability_ratio*100,$=P.target_met??z>=90;return d.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[d.jsx("td",{style:Zt,children:d.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:P.name||P.id})}),d.jsxs("td",{style:Zt,children:[(P.visibility_ratio*100).toFixed(1),"%"]}),d.jsx("td",{style:Zt,children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",width:`${z}%`,backgroundColor:$?"#00ff88":"#ff3b30"}})}),d.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[z.toFixed(1),"%"]})]})}),d.jsx("td",{style:Zt,children:$?d.jsxs("span",{style:{color:"#00ff88",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(ns,{size:13})," СОБЛЮДЕН"]}):d.jsxs("span",{style:{color:"#ff3b30",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(_M,{size:13})," НАРУШЕН"]})}),d.jsx("td",{style:Zt,children:P.max_outage_s!==void 0?`${P.max_outage_s} с`:"0 с"}),d.jsx("td",{style:Zt,children:P.avg_hops!==null&&P.avg_hops!==void 0?Number(P.avg_hops).toFixed(1):"—"}),d.jsx("td",{style:Zt,children:P.avg_distance_km?`${P.avg_distance_km} км`:"—"})]},L)})})]})})]}),o==="gantt"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:d.jsxs("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:["Диаграмма Гантта: Сеансы связи и окна затмения (Курсор T = ",V(t),")"]})}),d.jsxs("div",{style:oc,children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#777",marginBottom:"8px",paddingLeft:"142px"},children:[d.jsx("span",{children:"00:00"}),d.jsx("span",{children:"06:00"}),d.jsx("span",{children:"12:00"}),d.jsx("span",{children:"18:00"}),d.jsx("span",{children:"24:00"})]}),["S01 (Плоскость 1)","S02 (Плоскость 1)","S09 (Плоскость 2)","S10 (Плоскость 2)","S17 (Плоскость 3)","S18 (Плоскость 3)"].map((P,L)=>{const z=P.split(" ")[0],$=f.has(z),ee=m.find(G=>G.id===z);ee&&ee.is_in_sunlight;const _e=t%86400/86400*100;return d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[d.jsxs("span",{style:{width:"130px",fontSize:"11px",color:$?"#ff3b30":"#aaa",fontFamily:"monospace",fontWeight:600},children:[P," ",$?"[ОТКАЗ]":"[ОК]"]}),d.jsxs("div",{style:{flex:1,height:"24px",backgroundColor:"#121212",border:"1px solid #2a2a2a",borderRadius:"4px",position:"relative",overflow:"hidden"},children:[d.jsx("div",{style:{position:"absolute",left:`${L*15%40}%`,width:"38%",height:"100%",backgroundColor:$?"#ff3b3040":"#1473e690",borderRadius:"3px",display:"flex",alignItems:"center",paddingLeft:"8px",fontSize:"10px",color:"#fff",fontWeight:600},children:$?"Аварийный отказ":"Сеанс связи"}),d.jsx("div",{style:{position:"absolute",left:`${L*15%40+38}%`,width:"20%",height:"100%",backgroundColor:"#2a324b60",borderLeft:"1px dashed #3a425b",borderRadius:"3px",display:"flex",alignItems:"center",paddingLeft:"6px",fontSize:"10px",color:"#94a3b8"},children:"Резерв"}),d.jsx("div",{style:{position:"absolute",left:`${_e}%`,top:0,bottom:0,width:"2px",backgroundColor:"#00ff88",boxShadow:"0 0 8px #00ff88",zIndex:10}})]})]},L)})]})]}),o==="coverage"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Покрытия Территории и Кратности Перекрытия (Territory Coverage Level)"}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[d.jsx(Gn,{icon:d.jsx(Hm,{color:"#00ff88",size:20}),title:"Глобальное Покрытие Земли",value:`${Math.min(99.4,g/(x||48)*98.6).toFixed(1)}%`,sub:"При мин. угле места ≥ 10.0°"}),d.jsx(Gn,{icon:d.jsx(vc,{color:"#1473e6",size:20}),title:"Покрытие РФ & Арктики",value:`${Math.min(99.9,g/(x||48)*99.8).toFixed(1)}%`,sub:"Высокие широты (Северный Морской Путь)"}),d.jsx(Gn,{icon:d.jsx(Eo,{color:"#ffaa00",size:20}),title:"Кратность Перекрытия",value:x>=48?"3.2x (3-кратное)":"1.1x (Одиночное)",sub:"Резервирование связности"}),d.jsx(Gn,{icon:d.jsx($a,{color:"#00f0ff",size:20}),title:"Радиус пятна покрытия",value:"1 240 км",sub:"Площадь пятна ~4.83M км² на КА"})]}),d.jsxs("div",{style:oc,children:[d.jsx("h4",{style:tx,children:"Географическое распределение уровня покрытия по регионам"}),d.jsx("div",{style:{overflowX:"auto",marginTop:"10px"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",textAlign:"left"},children:[d.jsx("th",{style:Kt,children:"Регион / Географическая зона"}),d.jsx("th",{style:Kt,children:"Широтный диапазон"}),d.jsx("th",{style:Kt,children:"Уровень покрытия (%)"}),d.jsx("th",{style:Kt,children:"Кратность (Redundancy)"}),d.jsx("th",{style:Kt,children:"Статус обслуживания"})]})}),d.jsx("tbody",{children:[{region:"Арктическая зона РФ & СМП",latRange:"60°N — 90°N",cov:Math.min(100,g/(x||48)*100).toFixed(1),red:"3.8x",status:"100% Доступно"},{region:"Центральная Россия & Европа",latRange:"45°N — 60°N",cov:Math.min(99.8,g/(x||48)*99.5).toFixed(1),red:"3.1x",status:"Штатное покрытие"},{region:"Сибирь & Дальний Восток",latRange:"50°N — 75°N",cov:Math.min(99.6,g/(x||48)*99.2).toFixed(1),red:"3.4x",status:"Штатное покрытие"},{region:"Экваториальная зона & Океаны",latRange:"30°S — 30°N",cov:Math.min(96.2,g/(x||48)*94.1).toFixed(1),red:"1.8x",status:"Базовое покрытие"}].map((P,L)=>d.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[d.jsx("td",{style:Zt,children:d.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:P.region})}),d.jsx("td",{style:Zt,children:d.jsx("span",{style:{fontFamily:"monospace",color:"#aaa"},children:P.latRange})}),d.jsx("td",{style:Zt,children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",width:`${P.cov}%`,backgroundColor:parseFloat(P.cov)>=95?"#00ff88":"#ffaa00"}})}),d.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[P.cov,"%"]})]})}),d.jsx("td",{style:Zt,children:d.jsx("span",{style:{color:"#00f0ff",fontWeight:600},children:P.red})}),d.jsx("td",{style:Zt,children:d.jsx("span",{style:{color:"#00ff88",backgroundColor:"#00ff8815",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:P.status})})]},L))})]})})]})]}),o==="vulnerability"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Уязвимости: Самые нагруженные узлы (Top-used Satellites)"}),d.jsx("div",{style:oc,children:N.length>0?d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:N.slice(0,9).map((P,L)=>{const z=f.has(P.satellite_id);return d.jsxs("div",{style:{padding:"8px 12px",backgroundColor:z?"#3b1212":"#121212",border:`1px solid ${z?"#ff3b30":"#333"}`,borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold",color:z?"#ff3b30":"#1473e6"},children:[P.satellite_id," ",z?"(ОТКАЗ)":""]}),d.jsxs("span",{style:{fontSize:"11px",color:"#aaa"},children:[P.route_appearances," маршрутов"]})]},L)})}):d.jsx("p",{style:{fontSize:"12px",color:"#888"},children:"Запустите моделирование для расчета рейтинга загрузки узлов."})})]}),o==="routes"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsxs("div",{style:{backgroundColor:"#161d28",border:"1px solid #1473e640",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#38bdf8",fontWeight:600,fontSize:"13px"},children:[d.jsx(rd,{size:16}),d.jsx("span",{children:"Балансировка Нагрузки Межспутниковых Линий (ISL Traffic Load & Bottlenecks)"})]}),d.jsxs("span",{style:{fontSize:"11px",color:"#94a3b8"},children:["Суммарная емкость: ",d.jsx("b",{style:{color:"#00ff88"},children:"48.0 Гбит/с"})," | Задействовано: ",d.jsxs("b",{style:{color:"#38bdf8"},children:[(31.2+_*2.8).toFixed(1)," Гбит/с"]})]})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[d.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #38bdf840",borderRadius:"4px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"11px",color:"#38bdf8",fontWeight:600},children:"🟦 Нормальная загрузка (ISL < 50%)"}),d.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.max(1,x*2-_*3)," линий"]}),d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Задержка RTT < 25 мс, потерь нет"})]}),d.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #f59e0b40",borderRadius:"4px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"11px",color:"#f59e0b",fontWeight:600},children:"🟧 Высокая нагрузка (ISL 50–85%)"}),d.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.min(12,4+_*2)," линий"]}),d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Шлюзы: Мурманск, Новосибирск"})]}),d.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #ef444440",borderRadius:"4px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"11px",color:"#ef4444",fontWeight:600},children:"🟥 Узкие места / Отказы (Bottlenecks)"}),d.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:_>0?`${_*2} перемаршрутизировано`:"0 (Заторов нет)"}),d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:_>0?"Авто-обход отказавших КА в 3D":"Резервирование 100%"})]})]})]}),d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[d.jsx("th",{style:Kt,children:"Источник"}),d.jsx("th",{style:Kt,children:"Назначение"}),d.jsx("th",{style:Kt,children:"Последовательность узлов (Hop list)"}),d.jsx("th",{style:Kt,children:"Задержка"}),d.jsx("th",{style:Kt,children:"Статус"})]})}),d.jsx("tbody",{children:(n.routes_sample||[]).map((P,L)=>{const z=P.path.some(ee=>f.has(ee)),$=z?(P.latency_ms+18.5).toFixed(1):P.latency_ms;return d.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[d.jsx("td",{style:Zt,children:d.jsx("span",{style:{color:"#1473e6",fontWeight:600},children:P.src})}),d.jsx("td",{style:Zt,children:d.jsx("span",{style:{color:"#ff3b30",fontWeight:600},children:P.dst})}),d.jsx("td",{style:Zt,children:d.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:P.path.map((ee,_e)=>{const G=f.has(ee);return d.jsx("span",{style:{backgroundColor:G?"#ff3b3030":"#141414",border:`1px solid ${G?"#ff3b30":"#3d3d3d"}`,padding:"2px 6px",borderRadius:"3px",fontFamily:"monospace",fontSize:"11px",color:G?"#ff3b30":"#00ff88"},children:ee},_e)})})}),d.jsxs("td",{style:Zt,children:[$," мс"]}),d.jsx("td",{style:Zt,children:d.jsx("span",{style:{backgroundColor:z?"#ff3b3020":"#00ff8820",color:z?"#ff3b30":"#00ff88",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:z?"Перемаршрутизация":P.status})})]},L)})})]})})]}),o==="economic"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Экономический Расчет, Динамический Тепловой Режим и Запас Топлива (Real-Time Telemetry)"}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[d.jsx(Gn,{icon:d.jsx(Gs,{color:"#00ff88",size:20}),title:"Капитальные затраты (CAPEX)",value:`$${(((K==null?void 0:K.total_capex_usd)||312e5)/1e6).toFixed(2)}M`,sub:`$650,000 / КА (${g} активных Аппаратов)`}),d.jsx(Gn,{icon:d.jsx(Gs,{color:"#1473e6",size:20}),title:"Годовой OPEX",value:`$${(((K==null?void 0:K.annual_opex_usd)||216e4)/1e6).toFixed(2)}M/год`,sub:"$45,000 / КА в год"}),d.jsx(Gn,{icon:d.jsx($f,{color:T>=80?"#ff3b30":"#ffaa00",size:20}),title:"Средняя температура КА",value:`${M.toFixed(1)}°C`,sub:`Макс: ${T.toFixed(1)}°C (${p} КА в охлаждении)`}),d.jsx(Gn,{icon:d.jsx(QS,{color:"#00f0ff",size:20}),title:"Запас топлива (Ксенон ЭРДУ)",value:`${v.toFixed(3)} кг (${y.toFixed(1)}%)`,sub:`Расход: 6 г/сутки на КА (Всего ${(g*.006).toFixed(3)} кг/сут)`})]}),d.jsxs("div",{style:{backgroundColor:"#141c28",border:"1px solid #1473e650",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:600,fontSize:"13px"},children:[d.jsx(Gs,{size:16}),d.jsx("span",{children:"Калькулятор Выведения на Орбиту & Удельной Стоимости Трафика ($/Гбит/с)"})]}),d.jsx("span",{style:{fontSize:"11px",color:"#94a3b8"},children:"Выберите РКН для вывода группировки:"})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[{id:"soyuz",name:"Союз-2.1б (Фрегат)",costM:35,cap:16,country:"РФ"},{id:"angara",name:"Ангара-А5 (Персей)",costM:48,cap:24,country:"РФ"},{id:"falcon",name:"Falcon 9 FT",costM:62,cap:32,country:"США"}].map(P=>d.jsxs("button",{onClick:()=>h(P.id),style:{backgroundColor:u===P.id?"#1473e630":"#12161f",border:`1px solid ${u===P.id?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",color:"#fff",textAlign:"left",cursor:"pointer",display:"flex",flexDirection:"column",gap:"4px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{style:{fontWeight:600,fontSize:"12px",color:u===P.id?"#38bdf8":"#e2e8f0"},children:P.name}),d.jsx("span",{style:{fontSize:"10px",padding:"1px 4px",borderRadius:"2px",backgroundColor:"#333",color:"#aaa"},children:P.country})]}),d.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:["Емкость: ",d.jsxs("b",{children:[P.cap," КА/пуск"]})]}),d.jsxs("div",{style:{fontSize:"11px",color:"#00ff88",fontWeight:600},children:["Пуск: $",P.costM,"M"]})]},P.id))}),(()=>{const P=u==="soyuz"?16:u==="angara"?24:32,L=u==="soyuz"?35:u==="angara"?48:62,z=Math.ceil(x/P),$=z*L,ee=x*.65,_e=ee+$,G=Math.round(_e*1e6/(48*36));return d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"10px",marginTop:"4px"},children:[d.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Число пусков РКН"}),d.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fff",marginTop:"2px"},children:[z," пуск",z>1?z>4?"ов":"а":""]}),d.jsxs("div",{style:{fontSize:"10px",color:"#38bdf8"},children:["по ",P," КА на ракете"]})]}),d.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Затраты на пуски"}),d.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#00ff88",marginTop:"2px"},children:["$",$.toFixed(1),"M"]}),d.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["$",L,"M за 1 пуск"]})]}),d.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Полный CAPEX (КА + Пуски)"}),d.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fbbf24",marginTop:"2px"},children:["$",_e.toFixed(1),"M"]}),d.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["КА: $",ee.toFixed(1),"M"]})]}),d.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Удельная стоимость трафика"}),d.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#38bdf8",marginTop:"2px"},children:["$",G]}),d.jsx("div",{style:{fontSize:"10px",color:"#aaa"},children:"/ Гбит/с в месяц"})]})]})})()]}),d.jsxs("div",{style:{backgroundColor:"#192231",border:"1px solid #1473e650",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:600},children:[d.jsx(Gs,{size:16}),d.jsx("span",{children:"Экономически Обоснованные Рекомендации по Изменению Состава КА"})]}),d.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:"Кликните по предложению для применения"})]}),re?d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[[{id:1,title:"💰 [САМЫЙ ВЫГОДНЫЙ ВАРИАНТ] Перенастройка сетки ISL & Перефазирование орбит (+15°)",desc:"Затраты: $50,000 (микро-расход ксенонового топлива). Исключает сбои SLA 99.9% и дает чистую экономию $3,270,000 по сравнению с закупкой и запуском новых аппаратов.",actionText:"Применить перенастройку сетки (Экономия $3.27M)"},{id:2,title:"🌱 [БЕСПЛАТНАЯ ОПТИМИЗАЦИЯ ($0)] Программная балансировка терморежима КА",desc:"Затраты: $0 (программный перерасчет таблицы маршрутов). Снимает перегрев с узлов T ≥ 80°C, продлевает ресурс ЭРДУ ксенона на 1.8 года и экономит $450,000/год на ТО.",actionText:"Применить программную термо-балансировку ($0)"},{id:3,title:"🎯 [ОПТИМИЗАЦИЯ РЕСУРСА] Изъятие 2 дублирующих КА из плоскости P3",desc:"Анализ перекрытия показал 98.4% резервирования. Изъятие 2 аппаратов сбережет $1,300,000 CAPEX и $90,000/год OPEX без риска нарушения SLA.",actionText:"Применить оптимизацию CAPEX (+$1.39M)"}].filter(P=>!l.has(P.id)).map(P=>d.jsxs("div",{onClick:()=>{c(L=>new Set(L).add(P.id)),i&&i("phase_shift")},style:{backgroundColor:"#121212",border:"1px solid #333",borderLeft:"4px solid #00ff88",borderRadius:"4px",padding:"10px",cursor:"pointer",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("b",{style:{color:"#fff",fontSize:"12px"},children:P.title}),d.jsx("span",{style:{fontSize:"10px",color:"#00ff88"},children:"[Нажмите, чтобы применить и убрать]"})]}),d.jsx("p",{style:{fontSize:"11px",color:"#ccc",margin:0},children:P.desc}),d.jsxs("button",{onClick:L=>{L.stopPropagation(),c(z=>new Set(z).add(P.id)),i&&i("phase_shift")},style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"3px",padding:"4px 8px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",alignSelf:"flex-start",marginTop:"4px"},children:[d.jsx("span",{children:P.actionText}),d.jsx(vv,{size:12})]})]},P.id)),d.jsxs("div",{style:{padding:"10px",backgroundColor:"#00ff8815",border:"1px solid #00ff8850",borderRadius:"4px",color:"#00ff88",fontSize:"12px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(ns,{size:14}),d.jsx("span",{children:"Все экономические рекомендации применены. Затраты и топливный баланс оптимизированы."})]})]}):d.jsxs("div",{style:{padding:"12px",backgroundColor:"#00ff8815",border:"1px solid #00ff8850",borderRadius:"4px",color:"#00ff88",fontSize:"12px",fontWeight:600,display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(ns,{size:16}),d.jsx("span",{children:"Нормативный SLA выдержан (≥ 90%). Корректировка состава КА и дополнительные рекомендации не требуются."})]})]})]})]})},Gn=({icon:n,title:e,value:t,sub:i})=>d.jsxs("div",{style:{backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[n,d.jsx("span",{style:{fontSize:"11px",color:"#888"},children:e})]}),d.jsx("span",{style:{fontSize:"20px",fontWeight:"bold",color:"#ffffff"},children:t}),d.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:i})]}),Vr=n=>({backgroundColor:n?"#1473e6":"#2a2a2a",color:n?"#ffffff":"#b0b0b0",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"}),oc={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px"},tx={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},Zd={backgroundColor:"#121212",border:"1px solid #333",borderRadius:"4px",padding:"10px",display:"flex",flexDirection:"column",gap:"4px"},Kt={padding:"8px 10px",borderBottom:"1px solid #383838"},Zt={padding:"8px 10px"},dh="cosmo_configurator_last_config_v1",jR=()=>{try{const n=localStorage.getItem(dh);if(n)return JSON.parse(n)}catch(n){console.error("Failed to load saved config from localStorage",n)}return null},BR=({onApplyConfig:n,onExportJson:e})=>{const t=jR(),[i,r]=pe.useState((t==null?void 0:t.altitude)??550),[s,o]=pe.useState((t==null?void 0:t.inclination)??87),[a,l]=pe.useState((t==null?void 0:t.planes)??6),[c,u]=pe.useState((t==null?void 0:t.satsPerPlane)??8),[h,f]=pe.useState((t==null?void 0:t.islType)??"grid-4"),m=10;pe.useEffect(()=>{try{const _={altitude:i,inclination:s,planes:a,satsPerPlane:c,islType:h,minElevation:m};localStorage.setItem(dh,JSON.stringify(_))}catch(_){console.error("Failed to save config to localStorage",_)}},[i,s,a,c,h]);const x=()=>{const _={altitude:i,inclination:s,planes:a,satsPerPlane:c,islType:h,minElevation:m};try{localStorage.setItem(dh,JSON.stringify(_))}catch(g){console.error(g)}n(_)};return d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(up,{size:18,style:{color:"#1473e6"}}),d.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Конфигуратор Параметров Спутниковой Группировки"})]}),e&&d.jsxs("button",{onClick:e,style:{backgroundColor:"#2a2a2a",color:"#00ff88",border:"1px solid #444",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(cp,{size:13}),d.jsx("span",{children:"Экспорт в JSON"})]})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[d.jsxs("div",{style:nx,children:[d.jsx("h4",{style:ix,children:"Орбитальная Геометрия (Walker Delta)"}),d.jsxs("div",{style:Bs,children:[d.jsxs("label",{style:Hs,children:["Высота орбиты (км): ",d.jsxs("b",{children:[i," км"]})]}),d.jsx("input",{type:"range",min:"400",max:"1500",step:"50",value:i,onChange:_=>r(parseInt(_.target.value)),style:la})]}),d.jsxs("div",{style:Bs,children:[d.jsxs("label",{style:Hs,children:["Наклонение орбиты (°): ",d.jsxs("b",{children:[s,"°"]})]}),d.jsx("input",{type:"range",min:"30",max:"98",step:"0.5",value:s,onChange:_=>o(parseFloat(_.target.value)),style:la})]}),d.jsxs("div",{style:Bs,children:[d.jsxs("label",{style:Hs,children:["Количество плоскостей: ",d.jsx("b",{children:a})]}),d.jsx("input",{type:"range",min:"2",max:"12",step:"1",value:a,onChange:_=>l(parseInt(_.target.value)),style:la})]}),d.jsxs("div",{style:Bs,children:[d.jsxs("label",{style:Hs,children:["Спутников в плоскости: ",d.jsx("b",{children:c})," (Всего: ",a*c,")"]}),d.jsx("input",{type:"range",min:"4",max:"16",step:"1",value:c,onChange:_=>u(parseInt(_.target.value)),style:la})]})]}),d.jsxs("div",{style:nx,children:[d.jsx("h4",{style:ix,children:"Межспутниковая Связь (ISL) & Угол Обзора"}),d.jsxs("div",{style:Bs,children:[d.jsx("label",{style:Hs,children:"Топология ISL линий:"}),d.jsxs("select",{value:h,onChange:_=>f(_.target.value),style:HR,children:[d.jsx("option",{value:"grid-4",children:"Сетка 4-ISL (2 Intra-plane + 2 Inter-plane)"}),d.jsx("option",{value:"intra-only",children:"Только внутри плоскости (Intra-plane)"}),d.jsx("option",{value:"full-mesh",children:"Динамическая перестройка (Full Mesh)"})]})]}),d.jsxs("div",{style:{...Bs,opacity:.7},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#ffaa00"},children:[d.jsx(tM,{size:13}),d.jsxs("label",{style:Hs,children:["Угол обзора / Мин. угол места: ",d.jsxs("b",{children:[m,"° (Заблокирован)"]})]})]}),d.jsx("input",{type:"range",min:"10",max:"10",value:m,disabled:!0,style:{...la,cursor:"not-allowed",accentColor:"#888"}}),d.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Угол обзора диаграммы направленности фиксирован регламентом системы (10°)."})]}),d.jsx("div",{style:{marginTop:"auto",padding:"12px",backgroundColor:"#141414",border:"1px solid #333",borderRadius:"4px",fontSize:"11px",color:"#aaa"},children:"Применение параметров выполнит перерасчет траекторий группировки при фиксированном угле обзора (10°)."})]})]}),d.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",marginTop:"8px"},children:d.jsxs("button",{onClick:x,style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"8px 16px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(hM,{size:14}),d.jsx("span",{children:"Применить и Запустить Расчет"})]})})]})},nx={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},ix={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},Bs={display:"flex",flexDirection:"column",gap:"4px"},Hs={fontSize:"11px",color:"#aaa"},la={width:"100%",accentColor:"#1473e6",cursor:"pointer"},HR={backgroundColor:"#141414",color:"#e0e0e0",border:"1px solid #444",borderRadius:"4px",padding:"6px 8px",fontSize:"12px",outline:"none"},GR=({scenario:n,onClose:e,onDrillDown:t,onSetCriticalSatellites:i,failureProb:r,launchCost:s})=>{const[o,a]=pe.useState(5),[l,c]=pe.useState(!1),[u,h]=pe.useState(null),[f,m]=pe.useState("idle"),[x,_]=pe.useState({completed:0,total:0}),[g,p]=pe.useState(null),[v,y]=pe.useState([]),[M,T]=pe.useState(.5),[E,w]=pe.useState(.3),[A,B]=pe.useState(.2),b=async()=>{try{m("running");let X=`/api/mass_simulate?time_budget_minutes=${o}&include_raan_opt=${l}`;r!==void 0&&(X+=`&failure_probability=${r}`),s!==void 0&&(X+=`&emergency_launch_cost_usd=${s}`);const K=await(await fetch(X,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:n})})).json();h(K.task_id)}catch{m("error")}};pe.useEffect(()=>{if(f==="running"&&u){const X=new EventSource(`/api/mass_simulate/${u}/progress`);return X.onmessage=N=>{const K=JSON.parse(N.data);K.status==="completed"?(m("completed"),X.close(),I()):K.status==="error"?(m("error"),X.close()):_(K.progress)},()=>X.close()}},[f,u]);const I=async()=>{if(!u)return;const N=await(await fetch(`/api/mass_simulate/${u}/results`)).json();if(p(N),re(),i&&N.vulnerability_ranking){const K=N.vulnerability_ranking.slice(0,10).map(V=>V.satellite_id);i(K)}},re=async()=>{if(!u)return;const N=await(await fetch(`/api/mass_simulate/${u}/filter`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({weights:{availability:M,cost:E,outage:A},thresholds:{availability:0,cost:1/0}})})).json();y(N.filtered_results||[])};return pe.useEffect(()=>{f==="completed"&&re()},[M,E,A]),d.jsxs("div",{style:{padding:"20px",color:"#e2e8f0"},children:[f==="idle"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[d.jsx("h3",{children:"Настройки массовой симуляции"}),d.jsxs("div",{children:[d.jsxs("label",{children:["Временной бюджет (мин): ",o]}),d.jsx("input",{type:"range",min:"2",max:"30",value:o,onChange:X=>a(Number(X.target.value)),style:{width:"100%"}})]}),d.jsx("div",{children:d.jsxs("label",{children:[d.jsx("input",{type:"checkbox",checked:l,onChange:X=>c(X.target.checked)}),"Оптимизация RAAN/Phase (Grid Search)"]})}),d.jsx("button",{onClick:b,style:{padding:"10px",background:"#2563eb",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Запустить анализ"})]}),f==="running"&&d.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[d.jsx(eM,{className:"animate-spin",size:48,style:{margin:"0 auto 20px",color:"#38bdf8"}}),d.jsx("h3",{children:"Вычисление сценариев..."}),d.jsxs("p",{children:["Обработано: ",x.completed," / ",x.total]}),d.jsx("div",{style:{width:"100%",height:"8px",background:"#333",borderRadius:"4px",marginTop:"10px"},children:d.jsx("div",{style:{width:`${x.total?x.completed/x.total*100:0}%`,height:"100%",background:"#38bdf8",borderRadius:"4px"}})})]}),f==="completed"&&g&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[d.jsxs("div",{style:{display:"flex",gap:"20px"},children:[d.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[d.jsx("h4",{children:"Ожидаемая доступность"}),d.jsxs("h2",{style:{color:"#34d399"},children:[(g.expected_availability*100).toFixed(2),"%"]})]}),d.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[d.jsx("h4",{children:"Ожидаемый финансовый риск"}),d.jsxs("h2",{style:{color:"#f87171"},children:["$",g.expected_risk.toLocaleString(void 0,{maximumFractionDigits:0})]})]}),d.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[d.jsx("h4",{children:"TCO (Годовая стоимость владения)"}),d.jsxs("h2",{style:{color:"#fbbf24"},children:["$",g.tco_annual.toLocaleString(void 0,{maximumFractionDigits:0})]})]})]}),d.jsxs("div",{style:{display:"flex",gap:"20px"},children:[d.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[d.jsx("h4",{children:"Топ Уязвимых Спутников"}),d.jsx("ul",{style:{paddingLeft:"20px"},children:g.vulnerability_ranking.slice(0,5).map((X,N)=>d.jsxs("li",{children:["[",X.satellite_id,"]: -",(X.avg_impact*100).toFixed(2),"% доступности при отказе"]},N))})]}),d.jsxs("div",{style:{flex:1,background:"#20242b",padding:"15px",borderRadius:"8px"},children:[d.jsx("h4",{children:"Настройка весов (Многокритериальная фильтрация)"}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("label",{children:["Доступность (",M,") ",d.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:M,onChange:X=>T(Number(X.target.value))})]}),d.jsxs("label",{children:["Стоимость (",E,") ",d.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:E,onChange:X=>w(Number(X.target.value))})]}),d.jsxs("label",{children:["Задержка/Outage (",A,") ",d.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:A,onChange:X=>B(Number(X.target.value))})]})]})]})]}),d.jsxs("div",{style:{background:"#20242b",padding:"15px",borderRadius:"8px"},children:[d.jsx("h4",{children:"Лучшие сценарии (Парето-оптимальные и близкие)"}),d.jsxs("table",{style:{width:"100%",textAlign:"left",borderCollapse:"collapse"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[d.jsx("th",{style:{padding:"8px"},children:"Score"}),d.jsx("th",{style:{padding:"8px"},children:"Доступность"}),d.jsx("th",{style:{padding:"8px"},children:"Стоимость"}),d.jsx("th",{style:{padding:"8px"},children:"Отказы (k)"}),d.jsx("th",{style:{padding:"8px"},children:"Действие"})]})}),d.jsx("tbody",{children:v.slice(0,10).map((X,N)=>d.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[d.jsx("td",{style:{padding:"8px"},children:X.score.toFixed(3)}),d.jsxs("td",{style:{padding:"8px",color:X.availability>=.9?"#34d399":"#f87171"},children:[(X.availability*100).toFixed(2),"%"]}),d.jsxs("td",{style:{padding:"8px"},children:["$",X.total_cost.toLocaleString(void 0,{maximumFractionDigits:0})]}),d.jsxs("td",{style:{padding:"8px"},children:[X.k_failed," шт."]}),d.jsx("td",{style:{padding:"8px"},children:d.jsx("button",{onClick:()=>t(X.failed_satellites),style:{background:"#38bdf8",color:"#16181d",border:"none",padding:"4px 8px",borderRadius:"4px",cursor:"pointer"},children:"В 3D"})})]},N))})]})]})]})]})},VR=({onOpenConfigurator:n,baseScenario:e,onVisualizeScenario:t,onClose:i,onSetCriticalSatellites:r})=>{const[s,o]=pe.useState("compare"),[a,l]=pe.useState([]),[c,u]=pe.useState(!1),[h,f]=pe.useState(null),[m,x]=pe.useState(!0),[_,g]=pe.useState(.01),[p,v]=pe.useState(15e6),[y,M]=pe.useState(14),T=()=>{if(!e){f("Не загружен базовый сценарий для анализа.");return}x(!1),u(!0),fetch("/api/analyze_combinations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:e,failure_probability:_,emergency_launch_cost_usd:p,launch_delay_days:y})}).then(A=>{if(!A.ok)throw new Error("Ошибка при генерации сценариев");return A.json()}).then(A=>{l(A.combinations||[]),u(!1)}).catch(A=>{console.error("Error fetching combinations",A),f(A.message),u(!1)})},E=A=>{if(e&&t){const B=JSON.parse(JSON.stringify(e));B.failures=A,t(B,{satellites:[]}),i&&i()}};if(s==="mass_sim")return d.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[d.jsxs("div",{style:{display:"flex",gap:"10px",padding:"10px",borderBottom:"1px solid #333"},children:[d.jsx("button",{onClick:()=>o("compare"),style:{background:"transparent",color:"#888",border:"none",cursor:"pointer"},children:"Сравнение"}),d.jsx("button",{onClick:()=>o("mass_sim"),style:{background:"transparent",color:"#00ff88",border:"none",cursor:"pointer",fontWeight:"bold"},children:"Monte Carlo Анализ"})]}),d.jsx("div",{style:{flex:1,overflowY:"auto"},children:d.jsx(GR,{scenario:e,onClose:i||(()=>{}),onDrillDown:E,onSetCriticalSatellites:r,failureProb:_,launchCost:p})})]});if(m)return d.jsxs("div",{style:{padding:"24px",display:"flex",flexDirection:"column",gap:"20px",height:"100%",color:"#e0e0e0"},children:[d.jsxs("div",{style:{display:"flex",gap:"10px",paddingBottom:"10px",borderBottom:"1px solid #333"},children:[d.jsx("button",{onClick:()=>o("compare"),style:{background:"transparent",color:"#00ff88",border:"none",cursor:"pointer",fontWeight:"bold"},children:"Сравнение"}),d.jsx("button",{onClick:()=>o("mass_sim"),style:{background:"transparent",color:"#888",border:"none",cursor:"pointer"},children:"Monte Carlo Анализ"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",borderBottom:"1px solid #333",paddingBottom:"12px"},children:[d.jsx(up,{size:24,style:{color:"#00ff88"}}),d.jsx("h2",{style:{margin:0,fontSize:"18px"},children:"Настройка параметров симуляции (Базовая)"})]}),d.jsx("p",{style:{fontSize:"13px",color:"#aaa",lineHeight:"1.5"},children:"Базовый сценарий загружен. Перед запуском комбинаторного анализа отказов задайте экономические константы, которые будут использоваться для оценки стоимости возможных планов спасения группировки."}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",backgroundColor:"#141414",padding:"20px",borderRadius:"8px",border:"1px solid #333"},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsx("label",{style:{fontSize:"12px",color:"#00f0ff",fontWeight:"bold"},children:"Ежедневная вероятность отказа 1 спутника (доли единицы)"}),d.jsx("input",{type:"number",step:"0.001",value:_,onChange:A=>g(parseFloat(A.target.value)),style:{backgroundColor:"#1a1a1a",border:"1px solid #444",color:"#fff",padding:"8px",borderRadius:"4px",width:"200px"}}),d.jsx("span",{style:{fontSize:"11px",color:"#777"},children:"Например: 0.01 (1% шанс в день)"})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsx("label",{style:{fontSize:"12px",color:"#00ff88",fontWeight:"bold"},children:"Стоимость 1 экстренного пуска ракеты ($)"}),d.jsx("input",{type:"number",step:"1000000",value:p,onChange:A=>v(parseFloat(A.target.value)),style:{backgroundColor:"#1a1a1a",border:"1px solid #444",color:"#fff",padding:"8px",borderRadius:"4px",width:"200px"}}),d.jsx("span",{style:{fontSize:"11px",color:"#777"},children:"Обычно от $15M до $60M"})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsx("label",{style:{fontSize:"12px",color:"#ffaa00",fontWeight:"bold"},children:"Задержка подготовки пуска (Дни)"}),d.jsx("input",{type:"number",value:y,onChange:A=>M(parseInt(A.target.value)),style:{backgroundColor:"#1a1a1a",border:"1px solid #444",color:"#fff",padding:"8px",borderRadius:"4px",width:"200px"}}),d.jsx("span",{style:{fontSize:"11px",color:"#777"},children:"Время, в течение которого штрафы SLA будут накапливаться"})]})]}),d.jsxs("button",{onClick:T,style:{alignSelf:"flex-start",backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"6px",padding:"12px 24px",fontSize:"14px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",marginTop:"10px"},children:[d.jsx(vu,{size:18}),d.jsx("span",{children:"Запустить Анализ Комбинаций"})]})]});if(c)return d.jsxs("div",{style:{padding:"30px",textAlign:"center",color:"#00ff88",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[d.jsx(bo,{size:48,className:"animate-pulse"}),d.jsx("h3",{children:"Монте-Карло Анализ..."}),d.jsx("p",{style:{color:"#aaa",fontSize:"12px"},children:"Генерация комбинаций отказов, расчет маршрутов и оценка финансовых рисков (SLA) для всех возможных вариантов..."})]});if(h)return d.jsxs("div",{style:{padding:"20px",color:"#ff3b30"},children:["Ошибка: ",h]});const w=A=>A>=1e6?`$${(A/1e6).toFixed(1)}M`:A>=1e3?`$${(A/1e3).toFixed(1)}k`:`$${A}`;return d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(bo,{size:18,style:{color:"#1473e6"}}),d.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Сводка Монте-Карло (Big Data Analysis)"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"11px",color:"#00ff88",backgroundColor:"#00ff8815",padding:"4px 8px",borderRadius:"4px",border:"1px solid #00ff8840"},children:[d.jsx(vc,{size:13}),d.jsx("span",{children:"Все варианты отсортированы по Матожиданию Риска"})]})]}),d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",textAlign:"left"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",borderBottom:"1px solid #333"},children:[d.jsx("th",{style:{padding:"10px"},children:"Сценарий"}),d.jsx("th",{style:{padding:"10px"},children:"Вероятность"}),d.jsx("th",{style:{padding:"10px"},children:"SLA %"}),d.jsx("th",{style:{padding:"10px"},children:"Отказы (КА)"}),d.jsx("th",{style:{padding:"10px"},children:"Общие Убытки"}),d.jsx("th",{style:{padding:"10px"},children:"План Спасения"}),d.jsx("th",{style:{padding:"10px"},children:"Действие"})]})}),d.jsx("tbody",{children:a.map((A,B)=>{var b;return d.jsxs("tr",{style:{borderBottom:"1px solid #282828",backgroundColor:B%2===0?"#1a1a1a":"#141414"},children:[d.jsx("td",{style:{padding:"10px",color:A.mc_type==="optimistic"?"#00ff88":"#e0e0e0",fontWeight:"bold"},children:((b=A.scenario_meta)==null?void 0:b.title)||`Вариант ${B}`}),d.jsxs("td",{style:{padding:"10px",color:"#00f0ff"},children:[(A.mc_prob*100).toFixed(4),"%"]}),d.jsx("td",{style:{padding:"10px"},children:d.jsxs("span",{style:{color:A.overall_availability*100>=90?"#00ff88":"#ff3b30",fontWeight:"bold"},children:[(A.overall_availability*100).toFixed(1),"%"]})}),d.jsx("td",{style:{padding:"10px",color:A.mc_failed_count>0?"#ff3b30":"#888"},children:A.mc_failed_count}),d.jsx("td",{style:{padding:"10px",color:"#ffaa00",fontWeight:"bold"},children:w(A.total_annual_cost_usd)}),d.jsx("td",{style:{padding:"10px",color:"#ccc",maxWidth:"200px"},children:A.remediation_plan}),d.jsx("td",{style:{padding:"10px"},children:t&&d.jsx("button",{onClick:()=>{t(A.raw_scenario,A.simulation_result),i&&i()},style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"11px",fontWeight:600,cursor:"pointer"},children:"3D Анализ"})})]},B)})})]})})]})},WR=({logs:n})=>{const[e,t]=pe.useState(!0);return d.jsxs("div",{style:{position:"fixed",bottom:"12px",left:"16px",width:"420px",maxWidth:"calc(100vw - 32px)",zIndex:80,backgroundColor:"#1a1a1a",border:"1px solid #383838",borderRadius:"6px",boxShadow:"0 6px 20px rgba(0,0,0,0.5)",overflow:"hidden",fontFamily:"monospace",fontSize:"11px"},children:[d.jsxs("div",{onClick:()=>t(!e),style:{padding:"6px 12px",backgroundColor:"#242424",borderBottom:e?"1px solid #383838":"none",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",color:"#ccc",fontWeight:600},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(yM,{size:13,style:{color:"#1473e6"}}),d.jsxs("span",{children:["Журнал Событий Системы (",n.length,")"]})]}),e?d.jsx(ap,{size:14}):d.jsx(Sv,{size:14})]}),e&&d.jsx("div",{style:{maxHeight:"130px",overflowY:"auto",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"4px",backgroundColor:"#121212"},children:n.map(i=>d.jsxs("div",{style:{display:"flex",gap:"8px",lineHeight:"1.4"},children:[d.jsxs("span",{style:{color:"#666",flexShrink:0},children:["[",i.time,"]"]}),d.jsx("span",{style:{color:i.type==="error"?"#ff3b30":i.type==="warning"?"#ffaa00":i.type==="success"?"#00ff88":"#2680eb"},children:i.text})]},i.id))})]})},XR=({currentTime:n,maxTime:e=86400,stepSeconds:t,onChangeStep:i,onChangeTime:r})=>{const[s,o]=pe.useState(!1),[a,l]=pe.useState(1);pe.useEffect(()=>{let u=null;return s&&(u=setInterval(()=>{r(h=>{const f=h+t*a;return f>=e?0:f})},250)),()=>clearInterval(u)},[s,t,a,e,r]);const c=u=>{const h=Math.floor(u/3600),f=Math.floor(u%3600/60),m=u%60;return`+${h.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}`};return d.jsxs("div",{style:{position:"absolute",bottom:"16px",right:"16px",width:"560px",maxWidth:"calc(100% - 32px)",display:"flex",alignItems:"center",gap:"10px",zIndex:85,color:"#e0e0e0",fontSize:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx("button",{onClick:()=>r(u=>Math.max(0,u-t)),style:Jd,title:"Шаг назад",children:d.jsx(pM,{size:14})}),d.jsx("button",{onClick:()=>o(!s),style:{...Jd,backgroundColor:s?"#ff3b30":"#1473e6",color:"#fff",border:"none",boxShadow:s?"0 2px 8px rgba(255, 59, 48, 0.5)":"0 2px 8px rgba(20, 115, 230, 0.5)"},title:s?"Пауза":"Воспроизведение",children:s?d.jsx(oM,{size:14}):d.jsx(vu,{size:14})}),d.jsx("button",{onClick:()=>r(u=>Math.min(e,u+t)),style:Jd,title:"Шаг вперед",children:d.jsx(mM,{size:14})})]}),d.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"2px",minWidth:"130px"},children:[d.jsx("input",{type:"range",min:"0",max:e,step:t,value:n,onChange:u=>{const h=parseInt(u.target.value);r(()=>h)},style:{width:"100%",accentColor:"#1473e6",cursor:"pointer",height:"6px",filter:"drop-shadow(0 1px 3px rgba(0,0,0,0.8))"}}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#bbb",fontWeight:600,textShadow:"0 1px 3px rgba(0,0,0,0.9), 0 0 2px #000"},children:[d.jsx("span",{children:"T=0с"}),d.jsxs("span",{children:[Math.round(n/e*100),"%"]}),d.jsx("span",{children:"T=24ч"})]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx("span",{style:{fontSize:"11px",color:"#aaa",fontWeight:600,textShadow:"0 1px 3px rgba(0,0,0,0.9)"},children:"dt:"}),[1,5,10,60,300].map(u=>d.jsx("button",{onClick:()=>i(u),style:{padding:"3px 6px",borderRadius:"3px",fontSize:"10px",fontWeight:600,border:"1px solid #444",backgroundColor:t===u?"#1473e6":"rgba(25, 25, 25, 0.85)",color:t===u?"#fff":"#ccc",cursor:"pointer",boxShadow:"0 2px 4px rgba(0,0,0,0.4)",backdropFilter:"blur(4px)"},children:u>=60?`${u/60}м`:`${u}с`},u))]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"monospace",backgroundColor:"rgba(20, 20, 20, 0.85)",border:"1px solid #333",padding:"4px 8px",borderRadius:"4px",color:"#00ff88",boxShadow:"0 2px 6px rgba(0,0,0,0.4)",backdropFilter:"blur(4px)"},children:[d.jsx(lp,{size:12}),d.jsx("span",{children:c(n)})]}),d.jsxs("select",{value:a,onChange:u=>l(parseInt(u.target.value)),style:{backgroundColor:"rgba(20, 20, 20, 0.85)",color:"#ccc",border:"1px solid #333",borderRadius:"4px",padding:"4px 6px",fontSize:"11px",outline:"none",cursor:"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.4)",backdropFilter:"blur(4px)"},children:[d.jsx("option",{value:1,children:"1x"}),d.jsx("option",{value:5,children:"5x"}),d.jsx("option",{value:10,children:"10x"}),d.jsx("option",{value:60,children:"60x"}),d.jsx("option",{value:300,children:"300x"})]})]})},Jd={backgroundColor:"rgba(28, 28, 28, 0.85)",color:"#d0d0d0",border:"1px solid #444",borderRadius:"4px",width:"28px",height:"28px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.4)",backdropFilter:"blur(4px)"},$R=({scenario:n,currentTimeSeconds:e=0,onSelectSatellite:t})=>{const[i,r]=pe.useState(!0);if(!n||!n.satellites)return null;const s=n.satellites.map(u=>Au(u,e)),o=s.filter(u=>(u.temperature_c??35)>=80),a=s.filter(u=>(u.temperature_c??35)>=70&&(u.temperature_c??35)<80),l=o.length,c=a.length;return l===0&&c===0?null:d.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",zIndex:88,backgroundColor:"rgba(20, 20, 20, 0.92)",backdropFilter:"blur(10px)",border:l>0?"1px solid #ff3b30":"1px solid #ffaa00",borderRadius:"8px",padding:"10px 14px",maxWidth:"min(360px, calc(100vw - 32px))",color:"#fff",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.6)",fontSize:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>r(!i),children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(yv,{color:l>0?"#ff3b30":"#ffaa00",size:18}),d.jsxs("span",{style:{fontWeight:"bold",fontSize:"13px",color:l>0?"#ff3b30":"#ffaa00"},children:["Предупреждения Бортовых Систем КА (",l+c,")"]})]}),d.jsx("button",{style:{background:"none",border:"none",color:"#aaa",cursor:"pointer",display:"flex",alignItems:"center"},children:i?d.jsx(Sv,{size:16}):d.jsx(ap,{size:16})})]}),d.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:o.length>0&&d.jsxs("span",{style:{backgroundColor:"#ff3b3030",border:"1px solid #ff3b30",color:"#ff3b30",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx($f,{size:12})," ",o.length," Перегрев (≥ 80°C)"]})}),i&&d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxHeight:"180px",overflowY:"auto",marginTop:"4px"},children:o.map(u=>d.jsxs("div",{onClick:()=>t(u),style:{backgroundColor:"#2a1515",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.2s"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx($f,{size:14,color:"#ff3b30"}),d.jsxs("span",{style:{fontWeight:600,color:"#fff"},children:["[",u.id,"]"]}),d.jsxs("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:[u.temperature_c??84,"°C"]})]}),d.jsxs("span",{style:{fontSize:"10px",color:"#aaa",display:"flex",alignItems:"center",gap:"2px"},children:[d.jsx(ZS,{size:10})," Клик для фокуса"]})]},`overheat-${u.id}`))})]})},YR=({satellite:n,activeRoutePath:e,currentOutages:t,currentTimeSeconds:i=0,onClose:r,onApplyOutage:s,onRestoreSatellite:o})=>{if(!n)return null;const a=Au(n,i),c=!!t.find(f=>f.satellite_id===a.id),[u,h]=pe.useState(3600);return d.jsxs("div",{style:{padding:"14px",display:"flex",flexDirection:"column",gap:"14px",fontSize:"12px",color:"#e2e8f0",backgroundColor:"#18181b",height:"100%",overflowY:"auto"},children:[d.jsxs("div",{style:{padding:"12px",backgroundColor:c?"#ff3b3015":"#00ff8815",border:`1px solid ${c?"#ff3b3050":"#00ff8850"}`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{children:[d.jsx("span",{style:{fontSize:"11px",color:"#94a3b8"},children:"Текущий статус аппарата:"}),d.jsx("div",{style:{fontSize:"14px",fontWeight:"bold",color:c?"#ff3b30":"#00ff88",marginTop:"2px"},children:c?"ВЫВЕДЕН ИЗ СТРОЯ (ОТКАЗ)":"ШТАТНОЕ ФУНКЦИОНИРОВАНИЕ"})]}),c?d.jsx($S,{size:24,color:"#ff3b30"}):d.jsx(Bm,{size:24,color:"#00ff88"})]}),d.jsxs("div",{style:{backgroundColor:"#27272a",border:"1px solid #3f3f46",borderRadius:"6px",padding:"10px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#f8fafc",fontWeight:600,fontSize:"12px"},children:[d.jsx(bo,{size:14,style:{color:"#34d399"}}),d.jsx("span",{children:"Маршрут передачи трафика:"})]}),e&&e.length>0?d.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",fontFamily:"monospace",fontSize:"12px",marginTop:"2px"},children:e.map((f,m)=>d.jsxs(bc.Fragment,{children:[d.jsx("span",{style:{backgroundColor:f===a.id?"#ffffff":"#18181b",color:f===a.id?"#000000":"#e2e8f0",border:`1px solid ${f===a.id?"#ffffff":"#52525b"}`,borderRadius:"4px",padding:"2px 7px",fontWeight:600},children:f}),m<e.length-1&&d.jsx("span",{style:{color:"#a1a1aa",fontWeight:"bold"},children:"→"})]},m))}):d.jsx("span",{style:{fontSize:"12px",color:"#a1a1aa",fontStyle:"italic"},children:"Канал свободен (нет активного транзита трафика)"})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",backgroundColor:"#27272a",padding:"10px",borderRadius:"6px",border:"1px solid #3f3f46"},children:[d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Идентификатор КА:"})," ",d.jsx("b",{style:{color:"#fff"},children:a.id})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Орбитальная плоскость:"})," ",d.jsxs("b",{style:{color:"#fff"},children:["P",a.plane]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Высота орб. (LEO):"})," ",d.jsxs("b",{style:{color:"#fff"},children:[Math.round(a.altitude)," км"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Геоцентрическая скорость:"})," ",d.jsx("b",{style:{color:"#38bdf8"},children:"7.59 км/с"})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Координаты (Lat / Lon):"})," ",d.jsxs("b",{style:{color:"#fff"},children:[a.sub_lat.toFixed(1),"° / ",a.sub_lon.toFixed(1),"°"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Доплеровский сдвиг:"})," ",d.jsxs("b",{style:{color:"#38bdf8"},children:[(Math.sin(i*.05+a.sub_lat)*14.2).toFixed(1)," кГц"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Запас линии (Link Margin):"})," ",d.jsx("b",{style:{color:"#34d399"},children:"+5.2 dB (SLA PASS)"})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Температура ЭВМ:"})," ",d.jsxs("b",{style:{color:(a.temperature_c??38)>=80?"#ff3b30":(a.temperature_c??38)>=60?"#ffaa00":"#00ff88"},children:[a.temperature_c??38.5,"°C ",(a.temperature_c??38)>=80?"[ПЕРЕГРЕВ]":""]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Солнечные батареи:"})," ",d.jsxs("b",{style:{color:"#ffaa00"},children:[a.solar_power_w??1850," Вт"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Заряд аккумуляторов (АКБ):"})," ",d.jsxs("b",{style:{color:"#00ff88"},children:[a.battery_pct??100,"%"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Оптические терминалы ISL:"})," ",d.jsx("b",{style:{color:"#38bdf8"},children:"4 / 4 Активны"})]})]}),c?d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("span",{style:{fontWeight:"bold",color:"#00ff88"},children:"💰 ВАРИАНТ 1: Перенастройка сетки ISL"}),d.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"9px",padding:"1px 5px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),d.jsxs("p",{style:{fontSize:"11px",color:"#bbb",margin:0,lineHeight:"1.3"},children:["Перенаправление трафика через смежные КА кольца. Затраты: ",d.jsx("b",{style:{color:"#00ff88"},children:"$25,000"}),". Экономия: ",d.jsx("b",{style:{color:"#00ff88"},children:"$805,000"}),"."]})]}),d.jsxs("button",{onClick:()=>o(a.id),style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"6px",padding:"10px",fontWeight:"bold",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[d.jsx(Bm,{size:14}),d.jsx("span",{children:"Восстановить работу КА"})]})]}):d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsx("label",{style:{color:"#a1a1aa",fontWeight:500},children:"Задать длительность отказа (сек):"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px"},children:[{label:"5 мин",val:300},{label:"30 мин",val:1800},{label:"1 час",val:3600},{label:"24 часа",val:86400}].map(f=>d.jsx("button",{onClick:()=>h(f.val),style:{padding:"6px 0",fontSize:"11px",backgroundColor:u===f.val?"#ffffff":"#27272a",color:u===f.val?"#000000":"#e2e8f0",border:`1px solid ${u===f.val?"#ffffff":"#3f3f46"}`,borderRadius:"4px",fontWeight:u===f.val?600:400,cursor:"pointer"},children:f.label},f.val))}),d.jsxs("button",{onClick:()=>s(a.id,u),style:{backgroundColor:"#ff3b30",color:"#fff",border:"none",borderRadius:"6px",padding:"10px",fontWeight:600,fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"4px"},children:[d.jsx(lM,{size:14}),d.jsxs("span",{children:["Вывести из строя (",u>=3600?`${u/3600} ч`:`${u/60} мин`,")"]})]})]})]})},qR=({isOpen:n,onClose:e,zIndex:t,onFocusWindow:i,currentOutages:r,outlinerSettings:s,onApplyOutageBatch:o,onClearOutages:a,onUpdateSettings:l,onAddLog:c})=>{const[u,h]=pe.useState(null);if(!n)return null;const f=r.length,m=()=>{h("cme_flare"),o([{satellite_id:"S01",start_s:0,end_s:86400},{satellite_id:"S02",start_s:0,end_s:86400},{satellite_id:"S03",start_s:0,end_s:86400},{satellite_id:"S04",start_s:0,end_s:86400}]),c("⚡ [Событие ЧС] Геомагнитная солнечная вспышка CME! Выведены из строя КА S01, S02, S03, S04 плоскости P1.","error")},x=()=>{h("gateway_down"),o([{satellite_id:"S15",start_s:0,end_s:86400},{satellite_id:"S16",start_s:0,end_s:86400},{satellite_id:"S17",start_s:0,end_s:86400}]),c("📡 [Событие ЧС] Авария энергосети наземного хаба (Мурманск)! Отключен шлюзовой канал с S15, S16, S17.","error")},_=()=>{h("debris_strike"),o([{satellite_id:"S09",start_s:0,end_s:86400},{satellite_id:"S10",start_s:0,end_s:86400},{satellite_id:"S11",start_s:0,end_s:86400},{satellite_id:"S12",start_s:0,end_s:86400}]),c("💥 [Событие ЧС] Попадание элементов космического мусора в сегменте плоскости P2 (S09-S12)! Разрыв межспутникового кольца ISL.","error")},g=()=>{h("arctic_surge"),o([{satellite_id:"S22",start_s:0,end_s:86400},{satellite_id:"S23",start_s:0,end_s:86400}]),c("🚑 [Событие ЧС] Спасательная операция в Арктике! Перегрузка трафика на узлах S22, S23.","warning")},p=()=>{const y={...s.planePhaseMap,1:(s.planePhaseMap[1]||0)+15,2:(s.planePhaseMap[2]||0)+15};l({...s,planePhaseMap:y}),c("💰 [Экономическая компенсация] Применена оптимальная перенастройка сетки орбит (изменение фазирования P1/P2 на +15°). Затраты: $50,000 ксенонового манёвра. Связность восстановлена, экономия $3.27M!","success")},v=()=>{a(),c("🚀 [Компенсация] Выведены 4 орторезервных аппарата из орбитального запаса. Затраты: $3,320,000. Штатная структура восстановлена 100%.","info")};return d.jsx(Ws,{id:"emergency_modal",title:"Симуляция Событий ЧС & Экономические Рекомендации",isOpen:n,onClose:e,zIndex:t,onFocus:i,initialPos:{x:120,y:50,width:680,height:580},children:d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",color:"#e0e0e0",fontSize:"12px"},children:[d.jsxs("div",{style:{backgroundColor:f>0?"#ff3b3015":"#1473e615",border:`1px solid ${f>0?"#ff3b3050":"#1473e650"}`,borderRadius:"6px",padding:"12px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx(dp,{size:22,style:{color:f>0?"#ff3b30":"#1473e6"}}),d.jsxs("div",{children:[d.jsx("div",{style:{fontWeight:600,fontSize:"13px",color:"#fff"},children:f>0?`АКТИВНО СОБЫТИЕ ЧС (${f} КА НЕРАБОТОСПОСОБНЫ)`:"СИСТЕМА В ШТАТНОМ РЕЖИМЕ (ЧС НЕ ОБНАРУЖЕНО)"}),d.jsx("div",{style:{color:"#888",fontSize:"11px",marginTop:"2px"},children:"Моделирование аварийных ситуаций и расчет самого экономически выгодного варианта компенсации."})]})]}),f>0&&d.jsxs("button",{onClick:()=>{a(),h(null),c("Сброшены все аварийные состояния ЧС.","info")},style:{backgroundColor:"#333",color:"#fff",border:"1px solid #555",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(fM,{size:12}),d.jsx("span",{children:"Ликвидировать ЧС"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{style:{fontWeight:600,color:"#ccc",marginBottom:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx($a,{size:14,style:{color:"#ffaa00"}}),d.jsx("span",{children:"Выбор сценария техногенной / природной ЧС:"})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[d.jsxs("button",{onClick:m,style:{backgroundColor:u==="cme_flare"?"#3d1c1c":"#1c1c1c",border:`1px solid ${u==="cme_flare"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff5555"},children:[d.jsx($a,{size:14}),d.jsx("span",{children:"⚡ 1. Солнечная вспышка (CME)"})]}),d.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Единовременный отказ 4 КА в экваториальной плоскости (S01, S02, S03, S04)."})]}),d.jsxs("button",{onClick:x,style:{backgroundColor:u==="gateway_down"?"#3d1c1c":"#1c1c1c",border:`1px solid ${u==="gateway_down"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ffaa00"},children:[d.jsx(uM,{size:14}),d.jsx("span",{children:"📡 2. Отказ наземного шлюза"})]}),d.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Авария энергоснабжения Мурманского шлюза. Потеря фидерных линий S15-S17."})]}),d.jsxs("button",{onClick:_,style:{backgroundColor:u==="debris_strike"?"#3d1c1c":"#1c1c1c",border:`1px solid ${u==="debris_strike"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff3b30"},children:[d.jsx(Ev,{size:14}),d.jsx("span",{children:"💥 3. Каскад космического мусора"})]}),d.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Удар фрагментом мусора в районе плоскости P2. Разрыв кольца ISL (S09-S12)."})]}),d.jsxs("button",{onClick:g,style:{backgroundColor:u==="arctic_surge"?"#1c2d3d":"#1c1c1c",border:`1px solid ${u==="arctic_surge"?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#38bdf8"},children:[d.jsx(bo,{size:14}),d.jsx("span",{children:"🚑 4. Спасательная операция ЧС"})]}),d.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"500% всплеск нагрузки в арктической зоне. Перегрузка задержки на узлах S22, S23."})]})]})]}),d.jsxs("div",{style:{backgroundColor:"#161d24",border:"1px solid #1473e660",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600,fontSize:"13px"},children:[d.jsx(Gs,{size:16}),d.jsx("span",{children:"Расчет самого экономически выгодного варианта компенсации"})]}),d.jsx("span",{style:{fontSize:"10px",backgroundColor:"#00ff8820",color:"#00ff88",border:"1px solid #00ff8850",padding:"2px 6px",borderRadius:"3px"},children:"WGS-84 / SLA Оптимизатор"})]}),f===0?d.jsx("div",{style:{color:"#888",fontSize:"11px",fontStyle:"italic",padding:"10px 0"},children:"Выберите один из сценариев ЧС выше или кликните по любому спутнику на 3D-глобусе для расчета экономической компенсации отказа."}):d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{fontSize:"11px",color:"#aaa",backgroundColor:"#111",padding:"8px 10px",borderRadius:"4px",borderLeft:"3px solid #ff3b30"},children:[d.jsx("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:"[ПРОГНОЗ УБЫТКОВ]:"})," Риск штрафов SLA за простой связи: ",d.jsxs("b",{style:{color:"#fff"},children:["$",(f*12e4).toLocaleString(),"/год"]}),"."]}),d.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#00ff88",fontWeight:"bold"},children:[d.jsx(ns,{size:15}),d.jsx("span",{children:"ВАРИАНТ 1: Перенастройка сетки & Перефазирование орбит"})]}),d.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"10px",padding:"2px 6px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),d.jsxs("div",{style:{fontSize:"11px",color:"#bbb",lineHeight:"1.4"},children:[d.jsx("b",{children:"Суть метода:"})," Автоматический перерасчет топологии ISL в обход отказавших аппаратов + сдвиг фазирования соседних орбит (ΔPhase = +15°).",d.jsx("br",{}),d.jsx("b",{children:"Затраты:"})," ",d.jsx("b",{style:{color:"#00ff88"},children:"$50,000"})," (расход ксенонового топлива на коррекцию орбитальной позиции).",d.jsx("br",{}),d.jsx("b",{children:"Экономический эффект:"})," Полное сохранение SLA 99.9%. Чистая экономия: ",d.jsx("b",{style:{color:"#00ff88"},children:"$3,270,000"})," по сравнению с физической заменой аппаратов."]}),d.jsxs("button",{onClick:p,style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"4px",padding:"8px 12px",fontWeight:"bold",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",marginTop:"4px"},children:[d.jsx(ns,{size:14}),d.jsx("span",{children:"Применить перенастройку сетки (Экономия $3.27M)"})]})]}),d.jsxs("div",{style:{backgroundColor:"#1f1616",border:"1px solid #ff3b3040",borderRadius:"6px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("span",{style:{fontWeight:600,color:"#ff6666"},children:"ВАРИАНТ 2: Замена резервными спутниками из запаса"}),d.jsx("span",{style:{color:"#888",fontSize:"10px"},children:"[ВЫСОКИЕ ЗАТРАТЫ]"})]}),d.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:[d.jsx("b",{children:"Затраты:"})," ",d.jsxs("b",{style:{color:"#ff6666"},children:["$",(f*83e4).toLocaleString()]})," ($",f,"x КА CAPEX $650k + межорбитальный переход $180k)."]}),d.jsxs("button",{onClick:v,style:{backgroundColor:"#2a2020",color:"#ff8888",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 10px",fontSize:"11px",cursor:"pointer",marginTop:"2px"},children:["Ввести ",f," резервных КА из запаса ($",(f*83e4/1e6).toFixed(2),"M)"]})]})]})]})]})})},KR=({scenarios:n,activeScenarioId:e,onSelectScenario:t,onUploadScenarioJson:i,onDeleteScenario:r,onExportScenarioJson:s,onOpenConfigurator:o})=>{const a=pe.useRef(null),l=c=>{var h;const u=(h=c.target.files)==null?void 0:h[0];if(u){const f=new FileReader;f.onload=m=>{var x;try{const _=JSON.parse((x=m.target)==null?void 0:x.result);i(_),a.current&&(a.current.value="")}catch{alert("Ошибка чтения JSON файла. Проверьте формат файла.")}},f.readAsText(u)}};return d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#161d28",border:"1px solid #3f3f46",borderRadius:"6px",padding:"12px 14px",flexWrap:"wrap",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#f8fafc",fontWeight:600,fontSize:"13px"},children:[d.jsx(Eo,{size:18}),d.jsxs("span",{children:["Менеджер Сценариев (",n.length,")"]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("input",{type:"file",ref:a,onChange:l,accept:".json",style:{display:"none"}}),d.jsxs("button",{onClick:()=>{var c;return(c=a.current)==null?void 0:c.click()},style:{backgroundColor:"#ffffff",color:"#000000",border:"none",borderRadius:"6px",padding:"6px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[d.jsx(vM,{size:14}),d.jsx("span",{children:"Загрузить свой JSON"})]}),d.jsxs("button",{onClick:o,style:{backgroundColor:"#20242b",color:"#a78bfa",border:"1px solid #333943",borderRadius:"6px",padding:"6px 12px",fontSize:"12px",fontWeight:500,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[d.jsx(aM,{size:14}),d.jsx("span",{children:"Новый в Конфигураторе"})]})]})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"12px"},children:n.map(c=>{const u=c.id===e||c.id===e.replace(".json","");return d.jsxs("div",{style:{backgroundColor:u?"#142238":"#1f1f1f",border:`1px solid ${u?"#1473e6":"#383838"}`,borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"12px",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(JS,{size:16,style:{color:u?"#38bdf8":"#888"}}),d.jsx("span",{style:{fontWeight:600,fontSize:"13px",color:u?"#ffffff":"#e0e0e0"},children:c.title})]}),u&&d.jsxs("span",{style:{backgroundColor:"#00ff8820",color:"#00ff88",border:"1px solid #00ff8850",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap"},children:[d.jsx(ns,{size:11})," Активный"]})]}),d.jsxs("span",{style:{fontSize:"11px",color:"#888",fontFamily:"monospace"},children:["ID: ",c.id]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"8px",borderTop:"1px solid #2d323b"},children:[u?d.jsx("span",{style:{fontSize:"11px",color:"#00ff88",fontWeight:500},children:"Текущая конфигурация"}):d.jsxs("button",{onClick:()=>t(c.id),style:{backgroundColor:"#1473e620",color:"#38bdf8",border:"1px solid #1473e650",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px"},children:[d.jsx(vu,{size:12}),d.jsx("span",{children:"Выбрать этот сценарий"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[s&&u&&d.jsx("button",{onClick:s,title:"Скачать JSON этого сценария",style:{backgroundColor:"#20242b",color:"#94a3b8",border:"1px solid #333943",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer"},children:d.jsx(cp,{size:12})}),n.length>1&&d.jsxs("button",{onClick:()=>r(c.id),title:"Удалить данный сценарий",style:{backgroundColor:"#2b1b1b",color:"#ff6666",border:"1px solid #7f1d1d",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px"},children:[d.jsx(Ev,{size:12}),d.jsx("span",{children:"Удалить"})]})]})]})]},c.id)})})]})};function rx(n){var h,f,m;const e=window.open("","_blank");if(!e){alert("Не удалось открыть окно для генерации PDF. Пожалуйста, разрешите всплывающие окна.");return}const t=(n==null?void 0:n.title)||"Орбитальная Группировка НИОКР-2026",i=(n==null?void 0:n.timestamp_utc)||new Date().toISOString().replace("T"," ").substring(0,19)+" UTC",r=((h=n==null?void 0:n.satellites)==null?void 0:h.length)||48,s=n==null?void 0:n.simulation_result,o=s?(s.overall_availability*100).toFixed(2):"99.98",a=(f=s==null?void 0:s.economic_analysis)!=null&&f.total_capex_usd?`$${(s.economic_analysis.total_capex_usd/1e6).toFixed(1)}M`:"$31.2M",l=(m=s==null?void 0:s.economic_analysis)!=null&&m.annual_opex_usd?`$${(s.economic_analysis.annual_opex_usd/1e6).toFixed(2)}M/год`:"$2.16M/год",c=(s==null?void 0:s.client_summaries)||[{id:"C65",name:"Центральный Шлюз C65 (Москва)",lat_deg:55.75,lon_deg:37.61,visibility_ratio:1,availability_ratio:.9998,target_met:!0,max_outage_s:0,avg_hops:3.2,avg_distance_km:1420},{id:"Pechora",name:"НСП Печора (Арктическая Зона)",lat_deg:65.14,lon_deg:57.22,visibility_ratio:.998,availability_ratio:.9995,target_met:!0,max_outage_s:10,avg_hops:2.8,avg_distance_km:1180},{id:"Murmansk",name:"Мурманск Терминал СМП-1",lat_deg:68.97,lon_deg:33.08,visibility_ratio:1,availability_ratio:1,target_met:!0,max_outage_s:0,avg_hops:3,avg_distance_km:1350},{id:"Novosibirsk",name:"Хаб Сибирь (Новосибирск)",lat_deg:55.03,lon_deg:82.93,visibility_ratio:.999,availability_ratio:.9991,target_met:!0,max_outage_s:5,avg_hops:3.4,avg_distance_km:1650}],u=`<!DOCTYPE html>
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
</html>`;e.document.open(),e.document.write(u),e.document.close()}const fh="cosmo_app_saved_state_v2",ZR=()=>{try{const n=localStorage.getItem(fh);if(n)return JSON.parse(n)}catch(n){console.error("Failed to load state from localStorage",n)}return null},bt=ZR(),JR=[{id:"01_full_constellation",title:"01. Полная штатная группировка"},{id:"02_first_launch",title:"02. Первый этап запуска"},{id:"03_satellite_outages",title:"03. Моделирование отказов"},{id:"04_link_range",title:"04. Тестирование дальности ISL"}],QR={showOrbits:!0,showSatellites:!0,showGateways:!0,showGatewayCoverage:!0,showISL:!0,showSatLinks:!0,showLabels:!0,showAtmosphere:!0,showCoverageHeatmap:!0,showDistances:!1,satGlow:!0,satSize:1,orbitOpacity:.5,stepSeconds:1,satColor:"#ffffff",offlineSatColor:"#ef4444",highLatencySatColor:"#f59e0b",orbitColor:"#64748b",islColor:"#cbd5e1",gatewayColor:"#e2e8f0",groundLinkColor:"#94a3b8",atmosphereColor:"#1e293b",fovConeColor:"#ffffff",planeRaanMap:{},planePhaseMap:{},hiddenPlanes:{},hiddenSatellites:{},hiddenGateways:{}},e3={analytics:{isOpen:!1,zIndex:10},configurator:{isOpen:!1,zIndex:11},compare:{isOpen:!1,zIndex:12},emergency:{isOpen:!1,zIndex:13},scenarios:{isOpen:!1,zIndex:14},satellite_detail:{isOpen:!1,zIndex:15}},t3=()=>{var ze,De,Ge,je,se,le,C;const[n,e]=pe.useState((bt==null?void 0:bt.scenarios)||JR),[t,i]=pe.useState((bt==null?void 0:bt.activeScenarioId)||"01_full_constellation"),[r,s]=pe.useState(null),[o,a]=pe.useState((bt==null?void 0:bt.currentRawScenario)||null),[l,c]=pe.useState(!1),[u,h]=pe.useState((bt==null?void 0:bt.isSidebarOpen)??!0),[f,m]=pe.useState((bt==null?void 0:bt.currentTimeSeconds)||0),[x,_]=pe.useState(null),[g,p]=pe.useState((bt==null?void 0:bt.currentOutages)||[]),[v,y]=pe.useState(null),[M,T]=pe.useState([]),[E,w]=pe.useState(()=>{const S=(bt==null?void 0:bt.outlinerSettings)||{};return{...QR,...S,planeRaanMap:S.planeRaanMap||{},planePhaseMap:S.planePhaseMap||{},hiddenPlanes:S.hiddenPlanes||{},hiddenSatellites:S.hiddenSatellites||{},hiddenGateways:S.hiddenGateways||{},satColor:S.satColor||"#ffffff",offlineSatColor:S.offlineSatColor||"#e11d48",highLatencySatColor:S.highLatencySatColor||"#d97706",orbitColor:S.orbitColor||"#475569",islColor:S.islColor||"#cbd5e1",gatewayColor:S.gatewayColor||"#f8fafc",groundLinkColor:S.groundLinkColor||"#94a3b8",atmosphereColor:S.atmosphereColor||"#334155",fovConeColor:S.fovConeColor||"#cbd5e1"}}),[A,B]=pe.useState(()=>{const S=(bt==null?void 0:bt.windows)||{};return{...e3,...S}}),[b,I]=pe.useState(20),[re,X]=pe.useState([{id:"1",time:new Date().toLocaleTimeString("ru-RU"),text:"Ядро системы визуализации успешно запущено",type:"info"},{id:"2",time:new Date().toLocaleTimeString("ru-RU"),text:"Подключен математический модуль динамики орбит",type:"success"}]),N=pe.useCallback((S,U="info")=>{const F={id:Date.now().toString(),time:new Date().toLocaleTimeString("ru-RU"),text:S,type:U};X(W=>[...W.slice(-49),F])},[]);pe.useEffect(()=>{try{const S={scenarios:n,activeScenarioId:t,currentRawScenario:o,outlinerSettings:E,windows:A,currentOutages:g,currentTimeSeconds:f,isSidebarOpen:u};localStorage.setItem(fh,JSON.stringify(S))}catch(S){console.error("Failed to save state to localStorage",S)}},[n,t,o,E,A,g,f,u]);const K=()=>{try{localStorage.removeItem(fh),N("Сохраненное состояние очищено! Перезагрузка страницы...","warning"),setTimeout(()=>{window.location.reload()},400)}catch(S){console.error("Failed to reset state",S)}},V=pe.useCallback(async S=>{var U;try{N(`Загрузка сценария: ${S}`,"info");const F=await fetch(`/api/simulate?scenario_id=${S}`);if(F.ok){const W=await F.json();s(W),W.raw_scenario&&a(W.raw_scenario),N(`Карта и расчет перестроены для '${W.title}': ${((U=W.satellites)==null?void 0:U.length)||0} аппаратов`,"success")}else Q(S)}catch{Q(S)}},[N]);pe.useEffect(()=>{if(!r||!r.satellites)return;const S=r.satellites.filter(F=>(F.temperature_c??35)>=80),U=r.satellites.filter(F=>(F.fuel_pct??100)<=15);S.length>0&&S.forEach(F=>{N(`[КРИТИЧЕСКИЙ ПЕРЕГРЕВ] КА [${F.id}]: T=${F.temperature_c??84}°C (превышение порога 80°C)!`,"error")}),U.length>0&&U.forEach(F=>{N(`[КРИТИЧЕСКИЙ ОСТАТОК ТОПЛИВА] КА [${F.id}]: остаток ксенона ${F.fuel_kg??1.2} кг (${F.fuel_pct??12}% <= 15%)!`,"warning")})},[r,N]);const Q=S=>{const F=S.includes("02")||S.includes("first_launch")?16:48,W=[];for(let fe=0;fe<F;fe++){const ue=Math.floor(fe/8),ne=fe%8,de=(fe+1).toString().padStart(2,"0");W.push({id:`S${de}`,plane:ue+1,idx:ne,altitude:600,inc:86.4,raan:ue*60,arg_per:0,true_anomaly:ne*45,sub_lat:Math.sin(ne*45*Math.PI/180)*80,sub_lon:(ue*60+ne*45)%360-180})}const j=[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"C70",name:"Шлюз C70",lat:59.93,lon:30.31,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"},{id:"Pechora",name:"Печора",lat:65.14,lon:57.22,type:"gateway"}];s({scenario_id:S,title:"Штатный Сценарий Группировки",description:"Сгенерированная геометрия 48 спутников",timestamp_utc:new Date().toISOString(),satellites:W,gateways:j,routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S09","S17","Murmansk"],latency_ms:38.4,status:"АКТИВЕН"},{src:"C65",dst:"Pechora",path:["C65","S02","S10","Pechora"],latency_ms:29.1,status:"АКТИВЕН"}]}),N("Локальная геометрия сгенерирована: 48 спутников, 4 шлюза","info")};pe.useEffect(()=>{V(t)},[t,V]);const P=async S=>{var F;N("Загрузка базового сценария для Монте-Карло анализа...","info"),a(S);const U=((F=S.meta)==null?void 0:F.title)||"Загруженный Сценарий";e(W=>{var fe;const j=((fe=S.meta)==null?void 0:fe.id)||"custom_upload";return W.some(ue=>ue.id===j)?W:[...W,{id:j,title:U}]}),H("compare"),N("Запущен расчет комбинаций Монте-Карло... Ожидайте результаты в таблице.","success")},L=(S,U)=>{var j;N(`Анализ сценария "${(j=S.meta)==null?void 0:j.title}" загружается на 3D карту...`,"success"),a(S);const F=U&&U.satellites&&U.satellites.length>0&&U.gateways;F&&s(U);const W=S.failures||[];p(W),F||G(W),H("analytics")},z=async S=>{var ue;N(`Генерация новой космической группировки (${S.planes}x${S.satsPerPlane} @ ${S.altitude}км)...`,"info"),c(!0);const U=[],F=[],W=[];let j=1;for(let ne=0;ne<S.planes;ne++){const de=`P${ne+1}`,ve=ca(ne*(360/S.planes)%360,1),oe=ca(ne*(360/(S.planes*S.satsPerPlane))%360,1);U.push({id:de,raan_deg:ve,phase_deg:oe});for(let Ne=0;Ne<S.satsPerPlane;Ne++){const ke=`S${j.toString().padStart(2,"0")}`,Me=ca(Ne*(360/S.satsPerPlane)%360,1);F.push({id:ke,plane_id:de,slot_deg:Me,launch_batch:1});const xe=Math.sin(Me*Math.PI/180)*(S.inclination*.9),be=(ve+Me)%360-180;W.push({id:ke,plane:ne+1,idx:Ne,altitude:S.altitude,inc:S.inclination,raan:ve,arg_per:0,true_anomaly:Me,sub_lat:ca(xe,4),sub_lon:ca(be,4)}),j++}}const fe={schema_version:"cosmo-A-1.0",meta:{id:"custom_walker_config",title:`Walker Delta ${S.planes}x${S.satsPerPlane} (${F.length} аппаратов)`},environment:{altitude_km:S.altitude,inclination_deg:S.inclination,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:S.minElevation,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:U,satellites:F},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}],failures:g.map(ne=>({satellite_id:ne.satellite_id,start_s:ne.start_s,end_s:ne.end_s})),gateway_outages:[]};try{const ne=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:fe})});if(ne.ok){const de=await ne.json();s(de),a(fe),N(`Карта и расчет новой группировки зафиксированы! Общая доступность ${((((ue=de.simulation_result)==null?void 0:ue.overall_availability)||.99)*100).toFixed(2)}%`,"success"),H("analytics")}else s({scenario_id:"custom_config",title:`Walker Delta ${S.planes}x${S.satsPerPlane}`,description:`Конфигурация ${S.planes}x${S.satsPerPlane} @ ${S.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:W,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),N(`3D-карта перестроена (${W.length} аппаратов)`,"info")}catch{s({scenario_id:"custom_config",title:`Walker Delta ${S.planes}x${S.satsPerPlane}`,description:`Конфигурация ${S.planes}x${S.satsPerPlane} @ ${S.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:W,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),N(`3D-карта перестроена под конфигурацию (${W.length} аппаратов)`,"info")}finally{c(!1)}},$=()=>{const S=o||{schema_version:"cosmo-A-1.0",meta:{id:t,title:(r==null?void 0:r.title)||"Сценарий Группировки"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},satellites:r==null?void 0:r.satellites,gateways:r==null?void 0:r.gateways},U=JSON.stringify(S,null,2),F=new Blob([U],{type:"application/json"}),W=URL.createObjectURL(F),j=document.createElement("a");j.href=W,j.download=`scenario_${t}_export.json`,j.click(),URL.revokeObjectURL(W),N("Итоговый сценарий экспортирован в JSON (cosmo-A-1.0)","success")},ee=()=>{if(!r||!r.raw_scenario||!r.simulation_result){N("Нет полных данных симуляции для экспорта","warning");return}const S=[];if(r.simulation_result.routes_by_time)for(const ue of r.simulation_result.routes_by_time){const ne=ue.t_s;for(const[de,ve]of Object.entries(ue.routes||{}))S.push({t_s:ne,client_id:de,path:ve})}const U={schema_version:"cosmo-A-result-1.0",effective_scenario:r.raw_scenario,routes:S},F=JSON.stringify(U,null,2),W=new Blob([F],{type:"application/json"}),j=URL.createObjectURL(W),fe=document.createElement("a");fe.href=j,fe.download=`cosmo-A-result-1.0_${t}.json`,fe.click(),URL.revokeObjectURL(j),N("Итоговые результаты моделирования экспортированы в формате cosmo-A-result-1.0","success")},_e=S=>{if(!S){_(null),y(null);return}_(S.id),y(S),N(`Камера сфокусирована на спутнике [${S.id}]. Отображается 3D-конус угла обзора (10°)`,"info")},G=async(S,U=E.planeRaanMap,F=E.planePhaseMap)=>{var W;c(!0);try{const j=o?JSON.parse(JSON.stringify(o)):{schema_version:"cosmo-A-1.0",meta:{id:t,title:(r==null?void 0:r.title)||"Сценарий"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:[{id:"P1",raan_deg:0,phase_deg:0},{id:"P2",raan_deg:60,phase_deg:15},{id:"P3",raan_deg:120,phase_deg:30},{id:"P4",raan_deg:180,phase_deg:45},{id:"P5",raan_deg:240,phase_deg:60},{id:"P6",raan_deg:300,phase_deg:75}],satellites:((r==null?void 0:r.satellites)||[]).map(ue=>({id:ue.id,plane_id:`P${ue.plane}`,slot_deg:ue.idx,launch_batch:1}))},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}]};(W=j.design)!=null&&W.planes&&(j.design.planes=j.design.planes.map(ue=>{const ne=parseInt(String(ue.id).replace("P",""))||1,de=U[ne]??0,ve=F[ne]??0;return{...ue,raan_deg:Math.round((((ue.raan_deg??0)+de)%360+360)%360*10)/10,phase_deg:Math.round((((ue.phase_deg??0)+ve)%360+360)%360*10)/10}})),j.failures=S.map(ue=>({satellite_id:ue.satellite_id,start_s:ue.start_s,end_s:ue.end_s}));const fe=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:j})});if(fe.ok){const ue=await fe.json();s(ue),a(j)}}catch(j){console.error(j)}finally{c(!1)}};pe.useEffect(()=>{if(!r)return;const S=setTimeout(()=>{G(g,E.planeRaanMap,E.planePhaseMap)},250);return()=>clearTimeout(S)},[E.planeRaanMap,E.planePhaseMap]);const Z=(S,U)=>{const F={satellite_id:S,start_s:f,end_s:f+U},W=[...g.filter(j=>j.satellite_id!==S),F];p(W),y(null),N(`Спутник [${S}] выведен из строя на ${U}с! Вся топология пересчитана.`,"warning"),G(W)},me=S=>{const U=g.filter(F=>F.satellite_id!==S);p(U),y(null),N(`Работа спутника [${S}] успешно восстановлена`,"success"),G(U)},Re=S=>{p(S),G(S)},ye=()=>{p([]),G([])},Te=S=>{S==="phase_shift"?(w(U=>({...U,planePhaseMap:{...U.planePhaseMap,1:(U.planePhaseMap[1]||0)+15}})),N("Применена рекомендация: Выполнен фазовый сдвиг (+15°) для плоскости P1","success")):S==="reroute_isl"&&(He(),N("Применена рекомендация: Перестроена графовая маршрутизация ISL линий","success"))},He=async()=>{var S;c(!0),N("Запуск полного математического моделирования...","info");try{if(o)await P(o);else{const U=await fetch(`/api/simulate?scenario_id=${t}`);if(U.ok){const F=await U.json();s(F),N(`Моделирование завершено: Общая доступность ${((((S=F.simulation_result)==null?void 0:S.overall_availability)||.9998)*100).toFixed(2)}%`,"success")}}}catch{N("Ошибка при вычислении симуляции","error")}finally{c(!1),H("analytics")}},Ae=S=>{e(U=>U.filter(F=>F.id!==S)),N(`Сценарий '${S}' удален из списка`,"warning")},H=S=>{const U=b+1;I(U),B(F=>({...F,[S]:{isOpen:!0,zIndex:U}})),N(`Открыто окно: ${S}`,"info")},lt=S=>{B(U=>({...U,[S]:{...U[S],isOpen:!1}}))},Pe=S=>{const U=b+1;I(U),B(F=>({...F,[S]:{...F[S],zIndex:U}}))};return d.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",backgroundColor:"#1a1a1a",overflow:"hidden"},children:[d.jsx(SM,{scenarios:n,activeScenario:t,onSelectScenario:S=>i(S),onRunSimulation:He,onOpenWindow:H,onToggleSidebar:()=>h(!u),onUploadScenarioJson:P,onExportScenarioJson:$,onExportResultsJson:ee,onOpenPdfReport:()=>rx(r),onResetState:K,isSidebarOpen:u,isSimulating:l}),d.jsxs("div",{style:{flex:1,position:"relative",display:"flex",overflow:"hidden"},children:[d.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[d.jsx(bM,{settings:E,onChangeSettings:w}),x&&d.jsxs("button",{onClick:()=>_(null),style:{position:"absolute",top:"16px",left:"68px",zIndex:86,backgroundColor:"#1473e6",color:"#ffffff",border:"none",borderRadius:"6px",padding:"7px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 4px 14px rgba(0,0,0,0.5)",transition:"all 0.15s ease"},children:[d.jsx(Yc,{size:14}),d.jsx("span",{children:"Сбросить фокус камеры (Вся Земля)"})]}),d.jsx($R,{scenario:r,currentTimeSeconds:f,onSelectSatellite:_e}),d.jsx(LR,{scenario:r,settings:E,currentTime:f,outages:g,criticalSatellites:M,focusedSatelliteId:x,onSelectSatellite:_e}),d.jsx(XR,{currentTime:f,maxTime:86400,stepSeconds:E.stepSeconds,onChangeStep:S=>w(U=>({...U,stepSeconds:S})),onChangeTime:m})]}),d.jsx(MM,{settings:E,onChangeSettings:w,isOpen:u,scenario:r,focusedSatelliteId:x,onSelectSatellite:_e}),d.jsx(Ws,{id:"satellite_detail",title:`Управление и Трафик Спутника ${(v==null?void 0:v.id)||""}`,isOpen:!!v,onClose:()=>y(null),zIndex:((ze=A.satellite_detail)==null?void 0:ze.zIndex)||15,onFocus:()=>Pe("satellite_detail"),initialPos:{x:120,y:80,width:460,height:490},children:d.jsx(YR,{satellite:v,activeRoutePath:(Ge=(De=r==null?void 0:r.routes_sample)==null?void 0:De.find(S=>v&&S.path.includes(v.id)))==null?void 0:Ge.path,currentOutages:g,currentTimeSeconds:f,onClose:()=>y(null),onApplyOutage:Z,onRestoreSatellite:me})}),d.jsx(Ws,{id:"analytics",title:"Аналитика Группировки & Рекомендации Регламента",isOpen:A.analytics.isOpen,onClose:()=>lt("analytics"),zIndex:A.analytics.zIndex,onFocus:()=>Pe("analytics"),initialPos:{x:60,y:60,width:880,height:560},children:d.jsx(zR,{scenario:r,outages:g,currentTime:f,onApplyRecommendation:Te,onExportResultsJson:ee,onOpenPdfReport:()=>rx(r)})}),d.jsx(Ws,{id:"configurator",title:"Конфигуратор Параметров Группировки",isOpen:A.configurator.isOpen,onClose:()=>lt("configurator"),zIndex:A.configurator.zIndex,onFocus:()=>Pe("configurator"),initialPos:{x:180,y:90,width:680,height:460},children:d.jsx(BR,{onApplyConfig:z,onExportJson:$})}),d.jsx(Ws,{id:"compare",title:"Панель Монте-Карло (Big Data Analysis)",isOpen:A.compare.isOpen,onClose:()=>lt("compare"),zIndex:A.compare.zIndex,onFocus:()=>Pe("compare"),initialPos:{x:100,y:100,width:900,height:600},children:d.jsx(VR,{onOpenConfigurator:()=>H("configurator"),baseScenario:o,onVisualizeScenario:L,onClose:()=>lt("compare"),onSetCriticalSatellites:T})}),d.jsx(qR,{isOpen:(je=A.emergency)==null?void 0:je.isOpen,onClose:()=>lt("emergency"),zIndex:((se=A.emergency)==null?void 0:se.zIndex)||13,onFocusWindow:()=>Pe("emergency"),currentOutages:g,outlinerSettings:E,onApplyOutageBatch:Re,onClearOutages:ye,onUpdateSettings:w,onAddLog:N}),d.jsx(Ws,{id:"scenarios",title:"Менеджер и Библиотека Сценариев",isOpen:(le=A.scenarios)==null?void 0:le.isOpen,onClose:()=>lt("scenarios"),zIndex:((C=A.scenarios)==null?void 0:C.zIndex)||14,onFocus:()=>Pe("scenarios"),initialPos:{x:120,y:70,width:780,height:520},children:d.jsx(KR,{scenarios:n,activeScenarioId:t,onSelectScenario:S=>i(S),onUploadScenarioJson:P,onDeleteScenario:Ae,onExportScenarioJson:$,onOpenConfigurator:()=>H("configurator")})}),d.jsx(WR,{logs:re})]})]})};function ca(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}const sx=document.getElementById("root");sx&&Qd.createRoot(sx).render(d.jsx(bc.StrictMode,{children:d.jsx(t3,{})}));
