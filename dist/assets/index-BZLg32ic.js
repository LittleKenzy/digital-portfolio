(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();class Og{constructor(e){this.routes=e,this.app=document.getElementById("app"),window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())}async handleRoute(){const e=window.location.hash.slice(1)||"/",t=this.routes[e]||this.routes["/404"]||this.routes["/"];if(t){if(t.protected&&!localStorage.getItem("user_session")){window.location.hash="/login";return}this.app.innerHTML="";const n=await t.render();typeof n=="string"?this.app.innerHTML=n:n instanceof HTMLElement&&this.app.appendChild(n),t.afterRender&&t.afterRender()}}navigate(e){window.location.hash=e}}const Fg=()=>{};var Bu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ug=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],l=r[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,l=o?r[s+1]:0,c=s+2<r.length,u=c?r[s+2]:0,h=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),n.push(t[h],t[p],t[m],t[w])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Nd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ug(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],l=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Bg;const m=i<<2|l>>4;if(n.push(m),u!==64){const w=l<<4&240|u>>2;if(n.push(w),p!==64){const x=u<<6&192|p;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Bg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zg=function(r){const e=Nd(r);return Ld.encodeByteArray(e,!0)},Xi=function(r){return zg(r).replace(/\./g,"")},Od=function(r){try{return Ld.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=()=>$g().__FIREBASE_DEFAULTS__,Hg=()=>{if(typeof process>"u"||typeof Bu>"u")return;const r=Bu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},qg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Od(r[1]);return e&&JSON.parse(e)},Ro=()=>{try{return Fg()||jg()||Hg()||qg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Fd=r=>{var e,t;return(t=(e=Ro())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Gg=r=>{const e=Fd(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Ud=()=>{var r;return(r=Ro())==null?void 0:r.config},Bd=r=>{var e;return(e=Ro())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zd(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Xi(JSON.stringify(t)),Xi(JSON.stringify(o)),""].join(".")}const Ns={};function Qg(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ns))Ns[e]?r.emulator.push(e):r.prod.push(e);return r}function Jg(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let zu=!1;function $d(r,e){if(typeof window>"u"||typeof document>"u"||!Zr(window.location.host)||Ns[r]===e||Ns[r]||zu)return;Ns[r]=e;function t(m){return`__firebase__banner__${m}`}const n="__firebase__banner",i=Qg().prod.length>0;function o(){const m=document.getElementById(n);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{zu=!0,o()},m}function h(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Jg(n),w=t("text"),x=document.getElementById(w)||document.createElement("span"),_=t("learnmore"),E=document.getElementById(_)||document.createElement("a"),P=t("preprendIcon"),R=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const k=m.element;l(k),h(E,_);const V=u();c(R,P),k.append(R,x,E,V),document.body.appendChild(k)}i?(x.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Xg(){var e;const r=(e=Ro())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function t0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n0(){const r=$e();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function r0(){return!Xg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function s0(){try{return typeof indexedDB=="object"}catch{return!1}}function i0(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="FirebaseError";class tn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=o0,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?a0(i,n):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new tn(s,l,n)}}function a0(r,e){return r.replace(l0,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const l0=/\{\$([^}]+)}/g;function c0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function An(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if($u(i)&&$u(o)){if(!An(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function $u(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function u0(r,e){const t=new h0(r,e);return t.subscribe.bind(t)}class h0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");d0(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Ia),s.error===void 0&&(s.error=Ia),s.complete===void 0&&(s.complete=Ia);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ia(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(r){return r&&r._delegate?r._delegate:r}class cr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Wg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m0(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:p0(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p0(r){return r===Yn?void 0:r}function m0(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new f0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(W||(W={}));const _0={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},y0=W.INFO,v0={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},w0=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=v0[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dl{constructor(e){this.name=e,this._logLevel=y0,this._logHandler=w0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const b0=(r,e)=>e.some(t=>r instanceof t);let ju,Hu;function x0(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T0(){return Hu||(Hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jd=new WeakMap,Ga=new WeakMap,Hd=new WeakMap,Aa=new WeakMap,Vl=new WeakMap;function E0(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(vn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&jd.set(t,r)}).catch(()=>{}),Vl.set(e,r),e}function I0(r){if(Ga.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Ga.set(r,e)}let Wa={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ga.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Hd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function A0(r){Wa=r(Wa)}function S0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Sa(this),e,...t);return Hd.set(n,e.sort?e.sort():[e]),vn(n)}:T0().includes(r)?function(...e){return r.apply(Sa(this),e),vn(jd.get(this))}:function(...e){return vn(r.apply(Sa(this),e))}}function R0(r){return typeof r=="function"?S0(r):(r instanceof IDBTransaction&&I0(r),b0(r,x0())?new Proxy(r,Wa):r)}function vn(r){if(r instanceof IDBRequest)return E0(r);if(Aa.has(r))return Aa.get(r);const e=R0(r);return e!==r&&(Aa.set(r,e),Vl.set(e,r)),e}const Sa=r=>Vl.get(r);function C0(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),l=vn(o);return n&&o.addEventListener("upgradeneeded",c=>{n(vn(o.result),c.oldVersion,c.newVersion,vn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const P0=["get","getKey","getAll","getAllKeys","count"],k0=["put","add","delete","clear"],Ra=new Map;function qu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=k0.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||P0.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Ra.set(e,i),i}A0(r=>({...r,get:(e,t,n)=>qu(e,t)||r.get(e,t,n),has:(e,t)=>!!qu(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(V0(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function V0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ka="@firebase/app",Gu="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Dl("@firebase/app"),M0="@firebase/app-compat",N0="@firebase/analytics-compat",L0="@firebase/analytics",O0="@firebase/app-check-compat",F0="@firebase/app-check",U0="@firebase/auth",B0="@firebase/auth-compat",z0="@firebase/database",$0="@firebase/data-connect",j0="@firebase/database-compat",H0="@firebase/functions",q0="@firebase/functions-compat",G0="@firebase/installations",W0="@firebase/installations-compat",K0="@firebase/messaging",Q0="@firebase/messaging-compat",J0="@firebase/performance",Y0="@firebase/performance-compat",X0="@firebase/remote-config",Z0="@firebase/remote-config-compat",e_="@firebase/storage",t_="@firebase/storage-compat",n_="@firebase/firestore",r_="@firebase/ai",s_="@firebase/firestore-compat",i_="firebase",o_="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="[DEFAULT]",a_={[Ka]:"fire-core",[M0]:"fire-core-compat",[L0]:"fire-analytics",[N0]:"fire-analytics-compat",[F0]:"fire-app-check",[O0]:"fire-app-check-compat",[U0]:"fire-auth",[B0]:"fire-auth-compat",[z0]:"fire-rtdb",[$0]:"fire-data-connect",[j0]:"fire-rtdb-compat",[H0]:"fire-fn",[q0]:"fire-fn-compat",[G0]:"fire-iid",[W0]:"fire-iid-compat",[K0]:"fire-fcm",[Q0]:"fire-fcm-compat",[J0]:"fire-perf",[Y0]:"fire-perf-compat",[X0]:"fire-rc",[Z0]:"fire-rc-compat",[e_]:"fire-gcs",[t_]:"fire-gcs-compat",[n_]:"fire-fst",[s_]:"fire-fst-compat",[r_]:"fire-vertex","fire-js":"fire-js",[i_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map,l_=new Map,Ja=new Map;function Wu(r,e){try{r.container.addComponent(e)}catch(t){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Or(r){const e=r.name;if(Ja.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;Ja.set(e,r);for(const t of Zi.values())Wu(t,r);for(const t of l_.values())Wu(t,r);return!0}function Ml(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function _t(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wn=new oi("app","Firebase",c_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=o_;function qd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Qa,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw wn.create("bad-app-name",{appName:String(s)});if(t||(t=Ud()),!t)throw wn.create("no-options");const i=Zi.get(s);if(i){if(An(t,i.options)&&An(n,i.config))return i;throw wn.create("duplicate-app",{appName:s})}const o=new g0(s);for(const c of Ja.values())o.addComponent(c);const l=new u_(t,n,o);return Zi.set(s,l),l}function Gd(r=Qa){const e=Zi.get(r);if(!e&&r===Qa&&Ud())return qd();if(!e)throw wn.create("no-app",{appName:r});return e}function bn(r,e,t){let n=a_[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(o.join(" "));return}Or(new cr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="firebase-heartbeat-database",d_=1,qs="firebase-heartbeat-store";let Ca=null;function Wd(){return Ca||(Ca=C0(h_,d_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(qs)}catch(t){console.warn(t)}}}}).catch(r=>{throw wn.create("idb-open",{originalErrorMessage:r.message})})),Ca}async function f_(r){try{const t=(await Wd()).transaction(qs),n=await t.objectStore(qs).get(Kd(r));return await t.done,n}catch(e){if(e instanceof tn)Qt.warn(e.message);else{const t=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(t.message)}}}async function Ku(r,e){try{const n=(await Wd()).transaction(qs,"readwrite");await n.objectStore(qs).put(e,Kd(r)),await n.done}catch(t){if(t instanceof tn)Qt.warn(t.message);else{const n=wn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(n.message)}}}function Kd(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=1024,m_=30;class g_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new y_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>m_){const o=v_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Qt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qu(),{heartbeatsToSend:n,unsentEntries:s}=__(this._heartbeatsCache.heartbeats),i=Xi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Qt.warn(t),""}}}function Qu(){return new Date().toISOString().substring(0,10)}function __(r,e=p_){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ju(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ju(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class y_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s0()?i0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await f_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ju(r){return Xi(JSON.stringify({version:2,heartbeats:r})).length}function v_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(r){Or(new cr("platform-logger",e=>new D0(e),"PRIVATE")),Or(new cr("heartbeat",e=>new g_(e),"PRIVATE")),bn(Ka,Gu,r),bn(Ka,Gu,"esm2020"),bn("fire-js","")}w_("");var b_="firebase",x_="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(b_,x_,"app");function Qd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T_=Qd,Jd=new oi("auth","Firebase",Qd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Dl("@firebase/auth");function E_(r,...e){eo.logLevel<=W.WARN&&eo.warn(`Auth (${es}): ${r}`,...e)}function Bi(r,...e){eo.logLevel<=W.ERROR&&eo.error(`Auth (${es}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(r,...e){throw Ll(r,...e)}function vt(r,...e){return Ll(r,...e)}function Nl(r,e,t){const n={...T_(),[e]:t};return new oi("auth","Firebase",n).create(e,{appName:r.name})}function nr(r){return Nl(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function I_(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Nt(r,"argument-error"),Nl(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ll(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Jd.create(r,...e)}function j(r,e,...t){if(!r)throw Ll(e,...t)}function Gt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Bi(e),new Error(e)}function Jt(r,e){r||Gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function A_(){return Yu()==="http:"||Yu()==="https:"}function Yu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A_()||e0()||"connection"in navigator)?navigator.onLine:!0}function R_(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jt(t>e,"Short delay should be less than long delay!"),this.isMobile=Yg()||t0()}get(){return S_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(r,e){Jt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],k_=new li(3e4,6e4);function Fl(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ts(r,e,t,n,s={}){return Xd(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const l=ai({key:r.config.apiKey,...o}).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const u={method:e,headers:c,...i};return Zg()||(u.referrerPolicy="no-referrer"),r.emulatorConfig&&Zr(r.emulatorConfig.host)&&(u.credentials="include"),Yd.fetch()(await Zd(r,r.config.apiHost,t,l),u)})}async function Xd(r,e,t){r._canInitEmulator=!1;const n={...C_,...e};try{const s=new V_(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Di(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Di(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw Di(r,"user-disabled",o);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nl(r,h,u);Nt(r,h)}}catch(s){if(s instanceof tn)throw s;Nt(r,"network-request-failed",{message:String(s)})}}async function D_(r,e,t,n,s={}){const i=await ts(r,e,t,n,s);return"mfaPendingCredential"in i&&Nt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Zd(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?Ol(r.config,s):`${r.config.apiScheme}://${s}`;return P_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class V_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(vt(this.auth,"network-request-failed")),k_.get())})}}function Di(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=vt(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(r,e){return ts(r,"POST","/v1/accounts:delete",e)}async function to(r,e){return ts(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N_(r,e=!1){const t=Ge(r),n=await t.getIdToken(e),s=Ul(n);j(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Ls(Pa(s.auth_time)),issuedAtTime:Ls(Pa(s.iat)),expirationTime:Ls(Pa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pa(r){return Number(r)*1e3}function Ul(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Od(t);return s?JSON.parse(s):(Bi("Failed to decode base64 JWT payload"),null)}catch(s){return Bi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xu(r){const e=Ul(r);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof tn&&L_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function L_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(r){var p;const e=r.auth,t=await r.getIdToken(),n=await Gs(r,to(e,{idToken:t}));j(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?ef(s.providerUserInfo):[],o=U_(r.providerData,i),l=r.isAnonymous,c=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xa(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,h)}async function F_(r){const e=Ge(r);await no(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U_(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function ef(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(r,e){const t=await Xd(r,{},async()=>{const n=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await Zd(r,s,"/v1/token",`key=${i}`),l=await r._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:n};return r.emulatorConfig&&Zr(r.emulatorConfig.host)&&(c.credentials="include"),Yd.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function z_(r,e){return ts(r,"POST","/v2/accounts:revokeToken",Fl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=Xu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await B_(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Cr;return n&&(j(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(r,e){j(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class yt{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new O_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return N_(this,e)}reload(){return F_(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await no(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await Gs(this,M_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:w,providerData:x,stsTokenManager:_}=t;j(p&&_,e,"internal-error");const E=Cr.fromJSON(this.name,_);j(typeof p=="string",e,"internal-error"),hn(n,e.name),hn(s,e.name),j(typeof m=="boolean",e,"internal-error"),j(typeof w=="boolean",e,"internal-error"),hn(i,e.name),hn(o,e.name),hn(l,e.name),hn(c,e.name),hn(u,e.name),hn(h,e.name);const P=new yt({uid:p,auth:e,email:s,emailVerified:m,displayName:n,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:E,createdAt:u,lastLoginAt:h});return x&&Array.isArray(x)&&(P.providerData=x.map(R=>({...R}))),c&&(P._redirectEventId=c),P}static async _fromIdTokenResponse(e,t,n=!1){const s=new Cr;s.updateFromServerResponse(t);const i=new yt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await no(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ef(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Cr;l.updateFromIdToken(n);const c=new yt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;function Wt(r){Jt(r instanceof Function,"Expected a class definition");let e=Zu.get(r);return e?(Jt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Zu.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tf.type="NONE";const eh=tf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(r,e,t){return`firebase:${r}:${e}:${t}`}class Pr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=zi(this.userKey,s.apiKey,i),this.fullPersistenceKey=zi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await to(this.auth,{idToken:e}).catch(()=>{});return t?yt._fromGetAccountInfoResponse(this.auth,t,e):null}return yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Pr(Wt(eh),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Wt(eh);const o=zi(n,e.config.apiKey,e.name);let l=null;for(const u of t)try{const h=await u._get(o);if(h){let p;if(typeof h=="string"){const m=await to(e,{idToken:h}).catch(()=>{});if(!m)break;p=await yt._fromGetAccountInfoResponse(e,m,h)}else p=yt._fromJSON(e,h);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Pr(i,e,n):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Pr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lf(e))return"Blackberry";if(cf(e))return"Webos";if(rf(e))return"Safari";if((e.includes("chrome/")||sf(e))&&!e.includes("edge/"))return"Chrome";if(af(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function nf(r=$e()){return/firefox\//i.test(r)}function rf(r=$e()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sf(r=$e()){return/crios\//i.test(r)}function of(r=$e()){return/iemobile/i.test(r)}function af(r=$e()){return/android/i.test(r)}function lf(r=$e()){return/blackberry/i.test(r)}function cf(r=$e()){return/webos/i.test(r)}function Bl(r=$e()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function $_(r=$e()){var e;return Bl(r)&&!!((e=window.navigator)!=null&&e.standalone)}function j_(){return n0()&&document.documentMode===10}function uf(r=$e()){return Bl(r)||af(r)||cf(r)||lf(r)||/windows phone/i.test(r)||of(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(r,e=[]){let t;switch(r){case"Browser":t=th($e());break;case"Worker":t=`${th($e())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${es}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(r,e={}){return ts(r,"GET","/v2/passwordPolicy",Fl(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=6;class W_{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??G_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nh(this),this.idTokenSubscription=new nh(this),this.beforeStateQueue=new H_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wt(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await to(this,{idToken:e}),n=await yt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=n==null?void 0:n._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(n=c.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await no(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(nr(this));const t=e?Ge(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await q_(this),t=new W_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await z_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[Wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&E_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Co(r){return Ge(r)}class nh{constructor(e){this.auth=e,this.observer=null,this.addObserver=u0(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Q_(r){zl=r}function J_(r){return zl.loadJS(r)}function Y_(){return zl.gapiScript}function X_(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(r,e){const t=Ml(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(An(i,e??{}))return s;Nt(s,"already-initialized")}return t.initialize({options:e})}function ey(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Wt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function ty(r,e,t){const n=Co(r);j(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=df(e),{host:o,port:l}=ny(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){j(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),j(An(u,n.config.emulator)&&An(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Zr(o)?(zd(`${i}//${o}${c}`),$d("Auth",!0)):ry()}function df(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ny(r){const e=df(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:rh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:rh(o)}}}function rh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ry(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,t){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(r,e){return D_(r,"POST","/v1/accounts:signInWithIdp",Fl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="http://localhost";class ur extends ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Nt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new ur(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return kr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,kr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kr(e,t)}buildRequest(){const e={requestUri:sy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ai(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends $l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ci{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ur._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ht.credential(t,n)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ci{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ci{constructor(){super("twitter.com")}static credential(e,t){return ur._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return pn.credential(t,n)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await yt._fromIdTokenResponse(e,n,s),o=sh(n);return new Fr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=sh(n);return new Fr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function sh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends tn{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ro.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ro(e,t,n,s)}}function pf(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ro._fromErrorAndOperation(r,i,e,n):i})}async function iy(r,e,t=!1){const n=await Gs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Fr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(r,e,t=!1){const{auth:n}=r;if(_t(n.app))return Promise.reject(nr(n));const s="reauthenticate";try{const i=await Gs(r,pf(n,s,e,r),t);j(i.idToken,n,"internal-error");const o=Ul(i.idToken);j(o,n,"internal-error");const{sub:l}=o;return j(r.uid===l,n,"user-mismatch"),Fr._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(r,e,t=!1){if(_t(r.app))return Promise.reject(nr(r));const n="signIn",s=await pf(r,n,e),i=await Fr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function ly(r,e,t,n){return Ge(r).onIdTokenChanged(e,t,n)}function cy(r,e,t){return Ge(r).beforeAuthStateChanged(e,t)}const so="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=1e3,hy=10;class gf extends mf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);j_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hy):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gf.type="LOCAL";const dy=gf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends mf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_f.type="SESSION";const yf=_f;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Po(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await fy(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Po.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=jl("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function my(r){Dt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function gy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _y(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function yy(){return vf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="firebaseLocalStorageDb",vy=1,io="firebaseLocalStorage",bf="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ko(r,e){return r.transaction([io],e?"readwrite":"readonly").objectStore(io)}function wy(){const r=indexedDB.deleteDatabase(wf);return new ui(r).toPromise()}function Za(){const r=indexedDB.open(wf,vy);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(io,{keyPath:bf})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(io)?e(n):(n.close(),await wy(),e(await Za()))})})}async function ih(r,e,t){const n=ko(r,!0).put({[bf]:e,value:t});return new ui(n).toPromise()}async function by(r,e){const t=ko(r,!1).get(e),n=await new ui(t).toPromise();return n===void 0?null:n.value}function oh(r,e){const t=ko(r,!0).delete(e);return new ui(t).toPromise()}const xy=800,Ty=3;class xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Za(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ty)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Po._getInstance(yy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await gy(),!this.activeServiceWorker)return;this.sender=new py(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_y()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Za();return await ih(e,so,"1"),await oh(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ih(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>by(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ko(s,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xf.type="LOCAL";const Ey=xf;new li(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(r,e){return e?Wt(e):(j(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Iy(r){return ay(r.auth,new Hl(r),r.bypassAuthState)}function Ay(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),oy(t,new Hl(r),r.bypassAuthState)}async function Sy(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),iy(t,new Hl(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Iy;case"linkViaPopup":case"linkViaRedirect":return Sy;case"reauthViaPopup":case"reauthViaRedirect":return Ay;default:Nt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new li(2e3,1e4);async function ah(r,e,t){if(_t(r.app))return Promise.reject(vt(r,"operation-not-supported-in-this-environment"));const n=Co(r);I_(r,e,$l);const s=Tf(n,t);return new Zn(n,"signInViaPopup",e,s).executeNotNull()}class Zn extends Ef{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=jl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ry.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="pendingRedirect",$i=new Map;class Py extends Ef{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const n=await ky(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ky(r,e){const t=My(e),n=Vy(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Dy(r,e){$i.set(r._key(),e)}function Vy(r){return Wt(r._redirectPersistence)}function My(r){return zi(Cy,r.config.apiKey,r.name)}async function Ny(r,e,t=!1){if(_t(r.app))return Promise.reject(nr(r));const n=Co(r),s=Tf(n,e),o=await new Py(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=10*60*1e3;class Oy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!If(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(vt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ly&&this.cachedEventUids.clear(),this.cachedEventUids.has(lh(e))}saveEventToCache(e){this.cachedEventUids.add(lh(e)),this.lastProcessedEventTime=Date.now()}}function lh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function If({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fy(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return If(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uy(r,e={}){return ts(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zy=/^https?/;async function $y(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Uy(r);for(const t of e)try{if(jy(t))return}catch{}Nt(r,"unauthorized-domain")}function jy(r){const e=Ya(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!zy.test(t))return!1;if(By.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new li(3e4,6e4);function ch(){const r=Dt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function qy(r){return new Promise((e,t)=>{var s,i,o;function n(){ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ch(),t(vt(r,"network-request-failed"))},timeout:Hy.get()})}if((i=(s=Dt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Dt().gapi)!=null&&o.load)n();else{const l=X_("iframefcb");return Dt()[l]=()=>{gapi.load?n():t(vt(r,"network-request-failed"))},J_(`${Y_()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ji=null,e})}let ji=null;function Gy(r){return ji=ji||qy(r),ji}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=new li(5e3,15e3),Ky="__/auth/iframe",Qy="emulator/auth/iframe",Jy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xy(r){const e=r.config;j(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ol(e,Qy):`https://${r.config.authDomain}/${Ky}`,n={apiKey:e.apiKey,appName:r.name,v:es},s=Yy.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ai(n).slice(1)}`}async function Zy(r){const e=await Gy(r),t=Dt().gapi;return j(t,r,"internal-error"),e.open({where:document.body,url:Xy(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jy,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=vt(r,"network-request-failed"),l=Dt().setTimeout(()=>{i(o)},Wy.get());function c(){Dt().clearTimeout(l),s(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t1=500,n1=600,r1="_blank",s1="http://localhost";class uh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function i1(r,e,t,n=t1,s=n1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c={...e1,width:n.toString(),height:s.toString(),top:i,left:o},u=$e().toLowerCase();t&&(l=sf(u)?r1:t),nf(u)&&(e=e||s1,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[w,x])=>`${m}${w}=${x},`,"");if($_(u)&&l!=="_self")return o1(e||"",l),new uh(null);const p=window.open(e||"",l,h);j(p,r,"popup-blocked");try{p.focus()}catch{}return new uh(p)}function o1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="__/auth/handler",l1="emulator/auth/handler",c1=encodeURIComponent("fac");async function hh(r,e,t,n,s,i){j(r.config.authDomain,r,"auth-domain-config-required"),j(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:es,eventId:s};if(e instanceof $l){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",c0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof ci){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await r._getAppCheckToken(),u=c?`#${c1}=${encodeURIComponent(c)}`:"";return`${u1(r)}?${ai(l).slice(1)}${u}`}function u1({config:r}){return r.emulator?Ol(r,l1):`https://${r.authDomain}/${a1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="webStorageSupport";class h1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yf,this._completeRedirectFn=Ny,this._overrideRedirectResult=Dy}async _openPopup(e,t,n,s){var o;Jt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await hh(e,t,n,Ya(),s);return i1(e,i,jl())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await hh(e,t,n,Ya(),s);return my(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Jt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Zy(e),n=new Oy(e);return t.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ka,{type:ka},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ka];i!==void 0&&t(!!i),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$y(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uf()||rf()||Bl()}}const d1=h1;var dh="@firebase/auth",fh="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m1(r){Or(new cr("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hf(r)},u=new K_(n,s,i,c);return ey(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Or(new cr("auth-internal",e=>{const t=Co(e.getProvider("auth").getImmediate());return(n=>new f1(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(dh,fh,p1(r)),bn(dh,fh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=5*60,_1=Bd("authIdTokenMaxAge")||g1;let ph=null;const y1=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>_1)return;const s=t==null?void 0:t.token;ph!==s&&(ph=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function v1(r=Gd()){const e=Ml(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Z_(r,{popupRedirectResolver:d1,persistence:[Ey,dy,yf]}),n=Bd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=y1(i.toString());cy(t,o,()=>o(t.currentUser)),ly(t,l=>o(l))}}const s=Fd("auth");return s&&ty(t,`http://${s}`),t}function w1(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Q_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=vt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",w1().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m1("Browser");var mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,Af;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.F=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.D=function(I,A,S){for(var T=Array(arguments.length-2),X=2;X<arguments.length;X++)T[X-2]=arguments[X];return v.prototype[A].apply(I,T)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);const I=Array(16);if(typeof v=="string")for(var A=0;A<16;++A)I[A]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(A=0;A<16;++A)I[A]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],A=b.g[2];let S=b.g[3],T;T=v+(S^y&(A^S))+I[0]+3614090360&4294967295,v=y+(T<<7&4294967295|T>>>25),T=S+(A^v&(y^A))+I[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=A+(y^S&(v^y))+I[2]+606105819&4294967295,A=S+(T<<17&4294967295|T>>>15),T=y+(v^A&(S^v))+I[3]+3250441966&4294967295,y=A+(T<<22&4294967295|T>>>10),T=v+(S^y&(A^S))+I[4]+4118548399&4294967295,v=y+(T<<7&4294967295|T>>>25),T=S+(A^v&(y^A))+I[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=A+(y^S&(v^y))+I[6]+2821735955&4294967295,A=S+(T<<17&4294967295|T>>>15),T=y+(v^A&(S^v))+I[7]+4249261313&4294967295,y=A+(T<<22&4294967295|T>>>10),T=v+(S^y&(A^S))+I[8]+1770035416&4294967295,v=y+(T<<7&4294967295|T>>>25),T=S+(A^v&(y^A))+I[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=A+(y^S&(v^y))+I[10]+4294925233&4294967295,A=S+(T<<17&4294967295|T>>>15),T=y+(v^A&(S^v))+I[11]+2304563134&4294967295,y=A+(T<<22&4294967295|T>>>10),T=v+(S^y&(A^S))+I[12]+1804603682&4294967295,v=y+(T<<7&4294967295|T>>>25),T=S+(A^v&(y^A))+I[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=A+(y^S&(v^y))+I[14]+2792965006&4294967295,A=S+(T<<17&4294967295|T>>>15),T=y+(v^A&(S^v))+I[15]+1236535329&4294967295,y=A+(T<<22&4294967295|T>>>10),T=v+(A^S&(y^A))+I[1]+4129170786&4294967295,v=y+(T<<5&4294967295|T>>>27),T=S+(y^A&(v^y))+I[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=A+(v^y&(S^v))+I[11]+643717713&4294967295,A=S+(T<<14&4294967295|T>>>18),T=y+(S^v&(A^S))+I[0]+3921069994&4294967295,y=A+(T<<20&4294967295|T>>>12),T=v+(A^S&(y^A))+I[5]+3593408605&4294967295,v=y+(T<<5&4294967295|T>>>27),T=S+(y^A&(v^y))+I[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=A+(v^y&(S^v))+I[15]+3634488961&4294967295,A=S+(T<<14&4294967295|T>>>18),T=y+(S^v&(A^S))+I[4]+3889429448&4294967295,y=A+(T<<20&4294967295|T>>>12),T=v+(A^S&(y^A))+I[9]+568446438&4294967295,v=y+(T<<5&4294967295|T>>>27),T=S+(y^A&(v^y))+I[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=A+(v^y&(S^v))+I[3]+4107603335&4294967295,A=S+(T<<14&4294967295|T>>>18),T=y+(S^v&(A^S))+I[8]+1163531501&4294967295,y=A+(T<<20&4294967295|T>>>12),T=v+(A^S&(y^A))+I[13]+2850285829&4294967295,v=y+(T<<5&4294967295|T>>>27),T=S+(y^A&(v^y))+I[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=A+(v^y&(S^v))+I[7]+1735328473&4294967295,A=S+(T<<14&4294967295|T>>>18),T=y+(S^v&(A^S))+I[12]+2368359562&4294967295,y=A+(T<<20&4294967295|T>>>12),T=v+(y^A^S)+I[5]+4294588738&4294967295,v=y+(T<<4&4294967295|T>>>28),T=S+(v^y^A)+I[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=A+(S^v^y)+I[11]+1839030562&4294967295,A=S+(T<<16&4294967295|T>>>16),T=y+(A^S^v)+I[14]+4259657740&4294967295,y=A+(T<<23&4294967295|T>>>9),T=v+(y^A^S)+I[1]+2763975236&4294967295,v=y+(T<<4&4294967295|T>>>28),T=S+(v^y^A)+I[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=A+(S^v^y)+I[7]+4139469664&4294967295,A=S+(T<<16&4294967295|T>>>16),T=y+(A^S^v)+I[10]+3200236656&4294967295,y=A+(T<<23&4294967295|T>>>9),T=v+(y^A^S)+I[13]+681279174&4294967295,v=y+(T<<4&4294967295|T>>>28),T=S+(v^y^A)+I[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=A+(S^v^y)+I[3]+3572445317&4294967295,A=S+(T<<16&4294967295|T>>>16),T=y+(A^S^v)+I[6]+76029189&4294967295,y=A+(T<<23&4294967295|T>>>9),T=v+(y^A^S)+I[9]+3654602809&4294967295,v=y+(T<<4&4294967295|T>>>28),T=S+(v^y^A)+I[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=A+(S^v^y)+I[15]+530742520&4294967295,A=S+(T<<16&4294967295|T>>>16),T=y+(A^S^v)+I[2]+3299628645&4294967295,y=A+(T<<23&4294967295|T>>>9),T=v+(A^(y|~S))+I[0]+4096336452&4294967295,v=y+(T<<6&4294967295|T>>>26),T=S+(y^(v|~A))+I[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=A+(v^(S|~y))+I[14]+2878612391&4294967295,A=S+(T<<15&4294967295|T>>>17),T=y+(S^(A|~v))+I[5]+4237533241&4294967295,y=A+(T<<21&4294967295|T>>>11),T=v+(A^(y|~S))+I[12]+1700485571&4294967295,v=y+(T<<6&4294967295|T>>>26),T=S+(y^(v|~A))+I[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=A+(v^(S|~y))+I[10]+4293915773&4294967295,A=S+(T<<15&4294967295|T>>>17),T=y+(S^(A|~v))+I[1]+2240044497&4294967295,y=A+(T<<21&4294967295|T>>>11),T=v+(A^(y|~S))+I[8]+1873313359&4294967295,v=y+(T<<6&4294967295|T>>>26),T=S+(y^(v|~A))+I[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=A+(v^(S|~y))+I[6]+2734768916&4294967295,A=S+(T<<15&4294967295|T>>>17),T=y+(S^(A|~v))+I[13]+1309151649&4294967295,y=A+(T<<21&4294967295|T>>>11),T=v+(A^(y|~S))+I[4]+4149444226&4294967295,v=y+(T<<6&4294967295|T>>>26),T=S+(y^(v|~A))+I[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=A+(v^(S|~y))+I[2]+718787259&4294967295,A=S+(T<<15&4294967295|T>>>17),T=y+(S^(A|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+S&4294967295}n.prototype.v=function(b,v){v===void 0&&(v=b.length);const y=v-this.blockSize,I=this.C;let A=this.h,S=0;for(;S<v;){if(A==0)for(;S<=y;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<v;)if(I[A++]=b.charCodeAt(S++),A==this.blockSize){s(this,I),A=0;break}}else for(;S<v;)if(I[A++]=b[S++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=v},n.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)b[v++]=this.g[y]>>>I&255;return b};function i(b,v){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;const y=[];let I=!0;for(let A=b.length-1;A>=0;A--){const S=b[A]|0;I&&S==v||(y[A]=S,I=!1)}this.g=y}var l={};function c(b){return-128<=b&&b<128?i(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return E(u(-b));const v=[];let y=1;for(let I=0;b>=y;I++)v[I]=b/y|0,y*=4294967296;return new o(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return E(h(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(v,8));let I=p;for(let S=0;S<b.length;S+=8){var A=Math.min(8,b.length-S);const T=parseInt(b.substring(S,S+A),v);A<8?(A=u(Math.pow(v,A)),I=I.j(A).add(u(T))):(I=I.j(y),I=I.add(u(T)))}return I}var p=c(0),m=c(1),w=c(16777216);r=o.prototype,r.m=function(){if(_(this))return-E(this).m();let b=0,v=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);b+=(I>=0?I:4294967296+I)*v,v*=4294967296}return b},r.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(_(this))return"-"+E(this).toString(b);const v=u(Math.pow(b,6));var y=this;let I="";for(;;){const A=V(y,v).g;y=P(y,A.j(v));let S=((y.g.length>0?y.g[0]:y.h)>>>0).toString(b);if(y=A,x(y))return S+I;for(;S.length<6;)S="0"+S;I=S+I}},r.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function _(b){return b.h==-1}r.l=function(b){return b=P(this,b),_(b)?-1:x(b)?0:1};function E(b){const v=b.g.length,y=[];for(let I=0;I<v;I++)y[I]=~b.g[I];return new o(y,~b.h).add(m)}r.abs=function(){return _(this)?E(this):this},r.add=function(b){const v=Math.max(this.g.length,b.g.length),y=[];let I=0;for(let A=0;A<=v;A++){let S=I+(this.i(A)&65535)+(b.i(A)&65535),T=(S>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);I=T>>>16,S&=65535,T&=65535,y[A]=T<<16|S}return new o(y,y[y.length-1]&-2147483648?-1:0)};function P(b,v){return b.add(E(v))}r.j=function(b){if(x(this)||x(b))return p;if(_(this))return _(b)?E(this).j(E(b)):E(E(this).j(b));if(_(b))return E(this.j(E(b)));if(this.l(w)<0&&b.l(w)<0)return u(this.m()*b.m());const v=this.g.length+b.g.length,y=[];for(var I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<b.g.length;A++){const S=this.i(I)>>>16,T=this.i(I)&65535,X=b.i(A)>>>16,re=b.i(A)&65535;y[2*I+2*A]+=T*re,R(y,2*I+2*A),y[2*I+2*A+1]+=S*re,R(y,2*I+2*A+1),y[2*I+2*A+1]+=T*X,R(y,2*I+2*A+1),y[2*I+2*A+2]+=S*X,R(y,2*I+2*A+2)}for(b=0;b<v;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=v;b<2*v;b++)y[b]=0;return new o(y,0)};function R(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function k(b,v){this.g=b,this.h=v}function V(b,v){if(x(v))throw Error("division by zero");if(x(b))return new k(p,p);if(_(b))return v=V(E(b),v),new k(E(v.g),E(v.h));if(_(v))return v=V(b,E(v)),new k(E(v.g),v.h);if(b.g.length>30){if(_(b)||_(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,I=v;I.l(b)<=0;)y=M(y),I=M(I);var A=O(y,1),S=O(I,1);for(I=O(I,2),y=O(y,2);!x(I);){var T=S.add(I);T.l(b)<=0&&(A=A.add(y),S=T),I=O(I,1),y=O(y,1)}return v=P(b,A.j(v)),new k(A,v)}for(A=p;b.l(v)>=0;){for(y=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),S=u(y),T=S.j(v);_(T)||T.l(b)>0;)y-=I,S=u(y),T=S.j(v);x(S)&&(S=m),A=A.add(S),b=P(b,T)}return new k(A,b)}r.B=function(b){return V(this,b).h},r.and=function(b){const v=Math.max(this.g.length,b.g.length),y=[];for(let I=0;I<v;I++)y[I]=this.i(I)&b.i(I);return new o(y,this.h&b.h)},r.or=function(b){const v=Math.max(this.g.length,b.g.length),y=[];for(let I=0;I<v;I++)y[I]=this.i(I)|b.i(I);return new o(y,this.h|b.h)},r.xor=function(b){const v=Math.max(this.g.length,b.g.length),y=[];for(let I=0;I<v;I++)y[I]=this.i(I)^b.i(I);return new o(y,this.h^b.h)};function M(b){const v=b.g.length+1,y=[];for(let I=0;I<v;I++)y[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(y,b.h)}function O(b,v){const y=v>>5;v%=32;const I=b.g.length-y,A=[];for(let S=0;S<I;S++)A[S]=v>0?b.i(S+y)>>>v|b.i(S+y+1)<<32-v:b.i(S+y);return new o(A,b.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Af=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,xn=o}).apply(typeof mh<"u"?mh:typeof self<"u"?self:typeof window<"u"?window:{});var Vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sf,Rs,Rf,Hi,el,Cf,Pf,kf;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vi=="object"&&Vi];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(a,d){if(d)e:{var f=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var f=[],g;for(g in d)Object.prototype.hasOwnProperty.call(d,g)&&f.push([g,d[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function c(a,d,f){return a.call.apply(a.bind,arguments)}function u(a,d,f){return u=c,u.apply(null,arguments)}function h(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,d){function f(){}f.prototype=d.prototype,a.Z=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,C,D){for(var F=Array(arguments.length-2),G=2;G<arguments.length;G++)F[G-2]=arguments[G];return d.prototype[C].apply(g,F)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const d=a.length;if(d>0){const f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function x(a,d){for(let g=1;g<arguments.length;g++){const C=arguments[g];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=a.length||0;const D=C.length||0;a.length=f+D;for(let F=0;F<D;F++)a[f+F]=C[F]}else a.push(C)}}class _{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(a){o.setTimeout(()=>{throw a},0)}function P(){var a=b;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class R{constructor(){this.h=this.g=null}add(d,f){const g=k.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var k=new _(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let M,O=!1,b=new R,v=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(y)}};function y(){for(var a;a=P();){try{a.h.call(a.g)}catch(f){E(f)}var d=k;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}O=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,d),o.removeEventListener("test",f,d)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function X(a,d){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}p(X,A),X.prototype.init=function(a,d){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&X.Z.h.call(this)},X.prototype.h=function(){X.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),de=0;function ye(a,d,f,g,C){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=C,this.key=++de,this.da=this.fa=!1}function Me(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ft(a,d,f){for(const g in a)d.call(f,a[g],g,a)}function Bn(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function rn(a){const d={};for(const f in a)d[f]=a[f];return d}const Et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function us(a,d){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let D=0;D<Et.length;D++)f=Et[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function We(a){this.src=a,this.g={},this.h=0}We.prototype.add=function(a,d,f,g,C){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const F=na(a,d,g,C);return F>-1?(d=a[F],f||(d.fa=!1)):(d=new ye(d,this.src,D,!!g,C),d.fa=f,a.push(d)),d};function gt(a,d){const f=d.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,d,void 0),D;(D=C>=0)&&Array.prototype.splice.call(g,C,1),D&&(Me(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function na(a,d,f,g){for(let C=0;C<a.length;++C){const D=a[C];if(!D.da&&D.listener==d&&D.capture==!!f&&D.ha==g)return C}return-1}var ra="closure_lm_"+(Math.random()*1e6|0),sa={};function $c(a,d,f,g,C){if(Array.isArray(d)){for(let D=0;D<d.length;D++)$c(a,d[D],f,g,C);return null}return f=qc(f),a&&a[re]?a.J(d,f,l(g)?!!g.capture:!1,C):lg(a,d,f,!1,g,C)}function lg(a,d,f,g,C,D){if(!d)throw Error("Invalid event type");const F=l(C)?!!C.capture:!!C;let G=oa(a);if(G||(a[ra]=G=new We(a)),f=G.add(d,f,g,F,D),f.proxy)return f;if(g=cg(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)S||(C=F),C===void 0&&(C=!1),a.addEventListener(d.toString(),g,C);else if(a.attachEvent)a.attachEvent(Hc(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function cg(){function a(f){return d.call(a.src,a.listener,f)}const d=ug;return a}function jc(a,d,f,g,C){if(Array.isArray(d))for(var D=0;D<d.length;D++)jc(a,d[D],f,g,C);else g=l(g)?!!g.capture:!!g,f=qc(f),a&&a[re]?(a=a.i,D=String(d).toString(),D in a.g&&(d=a.g[D],f=na(d,f,g,C),f>-1&&(Me(d[f]),Array.prototype.splice.call(d,f,1),d.length==0&&(delete a.g[D],a.h--)))):a&&(a=oa(a))&&(d=a.g[d.toString()],a=-1,d&&(a=na(d,f,g,C)),(f=a>-1?d[a]:null)&&ia(f))}function ia(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[re])gt(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(Hc(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=oa(d))?(gt(f,a),f.h==0&&(f.src=null,d[ra]=null)):Me(a)}}}function Hc(a){return a in sa?sa[a]:sa[a]="on"+a}function ug(a,d){if(a.da)a=!0;else{d=new X(d,this);const f=a.listener,g=a.ha||a.src;a.fa&&ia(a),a=f.call(g,d)}return a}function oa(a){return a=a[ra],a instanceof We?a:null}var aa="__closure_events_fn_"+(Math.random()*1e9>>>0);function qc(a){return typeof a=="function"?a:(a[aa]||(a[aa]=function(d){return a.handleEvent(d)}),a[aa])}function Ne(){I.call(this),this.i=new We(this),this.M=this,this.G=null}p(Ne,I),Ne.prototype[re]=!0,Ne.prototype.removeEventListener=function(a,d,f,g){jc(this,a,d,f,g)};function je(a,d){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new A(d,a);else if(d instanceof A)d.target=d.target||a;else{var C=d;d=new A(g,a),us(d,C)}C=!0;let D,F;if(f)for(F=f.length-1;F>=0;F--)D=d.g=f[F],C=wi(D,g,!0,d)&&C;if(D=d.g=a,C=wi(D,g,!0,d)&&C,C=wi(D,g,!1,d)&&C,f)for(F=0;F<f.length;F++)D=d.g=f[F],C=wi(D,g,!1,d)&&C}Ne.prototype.N=function(){if(Ne.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const f=a.g[d];for(let g=0;g<f.length;g++)Me(f[g]);delete a.g[d],a.h--}}this.G=null},Ne.prototype.J=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},Ne.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function wi(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let C=!0;for(let D=0;D<d.length;++D){const F=d[D];if(F&&!F.da&&F.capture==f){const G=F.listener,Ee=F.ha||F.src;F.fa&&gt(a.i,F),C=G.call(Ee,g)!==!1&&C}}return C&&!g.defaultPrevented}function hg(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Gc(a){a.g=hg(()=>{a.g=null,a.i&&(a.i=!1,Gc(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class dg extends I{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Gc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(a){I.call(this),this.h=a,this.g={}}p(hs,I);var Wc=[];function Kc(a){Ft(a.g,function(d,f){this.g.hasOwnProperty(f)&&ia(d)},a),a.g={}}hs.prototype.N=function(){hs.Z.N.call(this),Kc(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var la=o.JSON.stringify,fg=o.JSON.parse,pg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Qc(){}function Jc(){}var ds={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ca(){A.call(this,"d")}p(ca,A);function ua(){A.call(this,"c")}p(ua,A);var zn={},Yc=null;function bi(){return Yc=Yc||new Ne}zn.Ia="serverreachability";function Xc(a){A.call(this,zn.Ia,a)}p(Xc,A);function fs(a){const d=bi();je(d,new Xc(d))}zn.STAT_EVENT="statevent";function Zc(a,d){A.call(this,zn.STAT_EVENT,a),this.stat=d}p(Zc,A);function He(a){const d=bi();je(d,new Zc(d,a))}zn.Ja="timingevent";function eu(a,d){A.call(this,zn.Ja,a),this.size=d}p(eu,A);function ps(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function ms(){this.g=!0}ms.prototype.ua=function(){this.g=!1};function mg(a,d,f,g,C,D){a.info(function(){if(a.g)if(D){var F="",G=D.split("&");for(let ee=0;ee<G.length;ee++){var Ee=G[ee].split("=");if(Ee.length>1){const Ae=Ee[0];Ee=Ee[1];const At=Ae.split("_");F=At.length>=2&&At[1]=="type"?F+(Ae+"="+Ee+"&"):F+(Ae+"=redacted&")}}}else F=null;else F=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+d+`
`+f+`
`+F})}function gg(a,d,f,g,C,D,F){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+d+`
`+f+`
`+D+" "+F})}function _r(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+yg(a,f)+(g?" "+g:"")})}function _g(a,d){a.info(function(){return"TIMEOUT: "+d})}ms.prototype.info=function(){};function yg(a,d){if(!a.g)return d;if(!d)return null;try{const D=JSON.parse(d);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var f=D[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let F=1;F<g.length;F++)g[F]=""}}}}return la(D)}catch{return d}}var xi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},nu;function ha(){}p(ha,Qc),ha.prototype.g=function(){return new XMLHttpRequest},nu=new ha;function gs(a){return encodeURIComponent(String(a))}function vg(a){var d=1;a=a.split(":");const f=[];for(;d>0&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function sn(a,d,f,g){this.j=a,this.i=d,this.l=f,this.S=g||1,this.V=new hs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ru}function ru(){this.i=null,this.g="",this.h=!1}var su={},da={};function fa(a,d,f){a.M=1,a.A=Ei(It(d)),a.u=f,a.R=!0,iu(a,null)}function iu(a,d){a.F=Date.now(),Ti(a),a.B=It(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),yu(f.i,"t",g),a.C=0,f=a.j.L,a.h=new ru,a.g=Lu(a.j,f?d:null,!a.u),a.P>0&&(a.O=new dg(u(a.Y,a,a.g),a.P)),d=a.V,f=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(Wc[0]=C.toString()),C=Wc);for(let D=0;D<C.length;D++){const F=$c(f,C[D],g||d.handleEvent,!1,d.h||d);if(!F)break;d.g[F.key]=F}d=a.J?rn(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),fs(),mg(a.i,a.v,a.B,a.l,a.S,a.u)}sn.prototype.ba=function(a){a=a.target;const d=this.O;d&&ln(a)==3?d.j():this.Y(a)},sn.prototype.Y=function(a){try{if(a==this.g)e:{const G=ln(this.g),Ee=this.g.ya(),ee=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||Iu(this.g)))){this.K||G!=4||Ee==7||(Ee==8||ee<=0?fs(3):fs(2)),pa(this);var d=this.g.ca();this.X=d;var f=wg(this);if(this.o=d==200,gg(this.i,this.v,this.B,this.l,this.S,G,d),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var D=g;break t}}D=null}if(a=D)_r(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ma(this,a);else{this.o=!1,this.m=3,He(12),$n(this),_s(this);break e}}if(this.R){a=!0;let Ae;for(;!this.K&&this.C<f.length;)if(Ae=bg(this,f),Ae==da){G==4&&(this.m=4,He(14),a=!1),_r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==su){this.m=4,He(15),_r(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else _r(this.i,this.l,Ae,null),ma(this,Ae);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||f.length!=0||this.h.h||(this.m=1,He(16),a=!1),this.o=this.o&&a,!a)_r(this.i,this.l,f,"[Invalid Chunked Response]"),$n(this),_s(this);else if(f.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ta(F),F.P=!0,He(11))}}else _r(this.i,this.l,f,null),ma(this,f);G==4&&$n(this),this.o&&!this.K&&(G==4?Du(this.j,this):(this.o=!1,Ti(this)))}else Ng(this.g),d==400&&f.indexOf("Unknown SID")>0?(this.m=3,He(12)):(this.m=0,He(13)),$n(this),_s(this)}}}catch{}finally{}};function wg(a){if(!ou(a))return a.g.la();const d=Iu(a.g);if(d==="")return"";let f="";const g=d.length,C=ln(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return $n(a),_s(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,f+=a.h.i.decode(d[D],{stream:!(C&&D==g-1)});return d.length=0,a.h.g+=f,a.C=0,a.h.g}function ou(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function bg(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?da:(f=Number(d.substring(f,g)),isNaN(f)?su:(g+=1,g+f>d.length?da:(d=d.slice(g,g+f),a.C=g+f,d)))}sn.prototype.cancel=function(){this.K=!0,$n(this)};function Ti(a){a.T=Date.now()+a.H,au(a,a.H)}function au(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ps(u(a.aa,a),d)}function pa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}sn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(_g(this.i,this.B),this.M!=2&&(fs(),He(17)),$n(this),this.m=2,_s(this)):au(this,this.T-a)};function _s(a){a.j.I==0||a.K||Du(a.j,a)}function $n(a){pa(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Kc(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function ma(a,d){try{var f=a.j;if(f.I!=0&&(f.g==a||ga(f.h,a))){if(!a.L&&ga(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ci(f),Si(f);else break e;xa(f),He(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ps(u(f.Va,f),6e3));uu(f.h)<=1&&f.ta&&(f.ta=void 0)}else Hn(f,11)}else if((a.L||f.g==a)&&Ci(f),!T(d))for(C=f.Ba.g.parse(d),d=0;d<C.length;d++){let ee=C[d];const Ae=ee[0];if(!(Ae<=f.K))if(f.K=Ae,ee=ee[1],f.I==2)if(ee[0]=="c"){f.M=ee[1],f.ba=ee[2];const At=ee[3];At!=null&&(f.ka=At,f.j.info("VER="+f.ka));const qn=ee[4];qn!=null&&(f.za=qn,f.j.info("SVER="+f.za));const cn=ee[5];cn!=null&&typeof cn=="number"&&cn>0&&(g=1.5*cn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const un=a.g;if(un){const ki=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var D=g.h;D.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(_a(D,D.h),D.h=null))}if(g.G){const Ea=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Ea&&(g.wa=Ea,oe(g.J,g.G,Ea))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var F=a;if(g.na=Nu(g,g.L?g.ba:null,g.W),F.L){hu(g.h,F);var G=F,Ee=g.O;Ee&&(G.H=Ee),G.D&&(pa(G),Ti(G)),g.g=F}else Pu(g);f.i.length>0&&Ri(f)}else ee[0]!="stop"&&ee[0]!="close"||Hn(f,7);else f.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?Hn(f,7):ba(f):ee[0]!="noop"&&f.l&&f.l.qa(ee),f.A=0)}}fs(4)}catch{}}var xg=class{constructor(a,d){this.g=a,this.map=d}};function lu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function uu(a){return a.h?1:a.g?a.g.size:0}function ga(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function _a(a,d){a.g?a.g.add(d):a.h=d}function hu(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}lu.prototype.cancel=function(){if(this.i=du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function du(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.G);return d}return w(a.i)}var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tg(a,d){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let C,D=null;g>=0?(C=a[f].substring(0,g),D=a[f].substring(g+1)):C=a[f],d(C,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function on(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof on?(this.l=a.l,ys(this,a.j),this.o=a.o,this.g=a.g,vs(this,a.u),this.h=a.h,ya(this,vu(a.i)),this.m=a.m):a&&(d=String(a).match(fu))?(this.l=!1,ys(this,d[1]||"",!0),this.o=ws(d[2]||""),this.g=ws(d[3]||"",!0),vs(this,d[4]),this.h=ws(d[5]||"",!0),ya(this,d[6]||"",!0),this.m=ws(d[7]||"")):(this.l=!1,this.i=new xs(null,this.l))}on.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(bs(d,pu,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(bs(d,pu,!0),"@"),a.push(gs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(bs(f,f.charAt(0)=="/"?Ag:Ig,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",bs(f,Rg)),a.join("")},on.prototype.resolve=function(a){const d=It(this);let f=!!a.j;f?ys(d,a.j):f=!!a.o,f?d.o=a.o:f=!!a.g,f?d.g=a.g:f=a.u!=null;var g=a.h;if(f)vs(d,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=d.h.lastIndexOf("/");C!=-1&&(g=d.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const D=[];for(let F=0;F<C.length;){const G=C[F++];G=="."?g&&F==C.length&&D.push(""):G==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&F==C.length&&D.push("")):(D.push(G),g=!0)}g=D.join("/")}else g=C}return f?d.h=g:f=a.i.toString()!=="",f?ya(d,vu(a.i)):f=!!a.m,f&&(d.m=a.m),d};function It(a){return new on(a)}function ys(a,d,f){a.j=f?ws(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function vs(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function ya(a,d,f){d instanceof xs?(a.i=d,Cg(a.i,a.l)):(f||(d=bs(d,Sg)),a.i=new xs(d,a.l))}function oe(a,d,f){a.i.set(d,f)}function Ei(a){return oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ws(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bs(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,Eg),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Eg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pu=/[#\/\?@]/g,Ig=/[#\?:]/g,Ag=/[#\?]/g,Sg=/[#\?@]/g,Rg=/#/g;function xs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&Tg(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}r=xs.prototype,r.add=function(a,d){jn(this),this.i=null,a=yr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function mu(a,d){jn(a),d=yr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function gu(a,d){return jn(a),d=yr(a,d),a.g.has(d)}r.forEach=function(a,d){jn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(d,C,g,this)},this)},this)};function _u(a,d){jn(a);let f=[];if(typeof d=="string")gu(a,d)&&(f=f.concat(a.g.get(yr(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)f=f.concat(a[d]);return f}r.set=function(a,d){return jn(this),this.i=null,a=yr(this,a),gu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},r.get=function(a,d){return a?(a=_u(this,a),a.length>0?String(a[0]):d):d};function yu(a,d,f){mu(a,d),f.length>0&&(a.i=null,a.g.set(yr(a,d),w(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let g=0;g<d.length;g++){var f=d[g];const C=gs(f);f=_u(this,f);for(let D=0;D<f.length;D++){let F=C;f[D]!==""&&(F+="="+gs(f[D])),a.push(F)}}return this.i=a.join("&")};function vu(a){const d=new xs;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function yr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Cg(a,d){d&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(f,g){const C=g.toLowerCase();g!=C&&(mu(this,g),yu(this,C,f))},a)),a.j=d}function Pg(a,d){const f=new ms;if(o.Image){const g=new Image;g.onload=h(an,f,"TestLoadImage: loaded",!0,d,g),g.onerror=h(an,f,"TestLoadImage: error",!1,d,g),g.onabort=h(an,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=h(an,f,"TestLoadImage: timeout",!1,d,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function kg(a,d){const f=new ms,g=new AbortController,C=setTimeout(()=>{g.abort(),an(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?an(f,"TestPingServer: ok",!0,d):an(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),an(f,"TestPingServer: error",!1,d)})}function an(a,d,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Dg(){this.g=new pg}function va(a){this.i=a.Sb||null,this.h=a.ab||!1}p(va,Qc),va.prototype.g=function(){return new Ii(this.i,this.h)};function Ii(a,d){Ne.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ii,Ne),r=Ii.prototype,r.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Es(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ts(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function wu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ts(this):Es(this),this.readyState==3&&wu(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,Ts(this))},r.Na=function(a){this.g&&(this.response=a,Ts(this))},r.ga=function(){this.g&&Ts(this)};function Ts(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Es(a)}r.setRequestHeader=function(a,d){this.A.append(a,d)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Es(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bu(a){let d="";return Ft(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function wa(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=bu(f),typeof a=="string"?f!=null&&gs(f):oe(a,d,f))}function fe(a){Ne.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(fe,Ne);var Vg=/^https?$/i,Mg=["POST","PUT"];r=fe.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():nu.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(D){xu(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Mg,d,void 0)>=0)||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of f)this.g.setRequestHeader(D,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){xu(this,D)}};function xu(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Tu(a),Ai(a)}function Tu(a){a.A||(a.A=!0,je(a,"complete"),je(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,je(this,"complete"),je(this,"abort"),Ai(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ai(this,!0)),fe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Eu(this):this.Xa())},r.Xa=function(){Eu(this)};function Eu(a){if(a.h&&typeof i<"u"){if(a.v&&ln(a)==4)setTimeout(a.Ca.bind(a),0);else if(je(a,"readystatechange"),ln(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=D===0){let F=String(a.D).match(fu)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),g=!Vg.test(F?F.toLowerCase():"")}f=g}if(f)je(a,"complete"),je(a,"success");else{a.o=6;try{var C=ln(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Tu(a)}}finally{Ai(a)}}}}function Ai(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,d||je(a,"ready");try{f.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function ln(a){return a.g?a.g.readyState:0}r.ca=function(){try{return ln(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),fg(d)}};function Iu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ng(a){const d={};a=(a.g&&ln(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var f=vg(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=d[C]||[];d[C]=D,D.push(f)}Bn(d,function(g){return g.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Au(a){this.za=0,this.i=[],this.j=new ms,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Is("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Is("baseRetryDelayMs",5e3,a),this.Za=Is("retryDelaySeedMs",1e4,a),this.Ta=Is("forwardChannelMaxRetries",2,a),this.va=Is("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new lu(a&&a.concurrentRequestLimit),this.Ba=new Dg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Au.prototype,r.ka=8,r.I=1,r.connect=function(a,d,f,g){He(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Nu(this,null,this.W),Ri(this)};function ba(a){if(Su(a),a.I==3){var d=a.V++,f=It(a.J);if(oe(f,"SID",a.M),oe(f,"RID",d),oe(f,"TYPE","terminate"),As(a,f),d=new sn(a,a.j,d),d.M=2,d.A=Ei(It(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=d.A,f=!0),f||(d.g=Lu(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Ti(d)}Mu(a)}function Si(a){a.g&&(Ta(a),a.g.cancel(),a.g=null)}function Su(a){Si(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ci(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ri(a){if(!cu(a.h)&&!a.m){a.m=!0;var d=a.Ea;M||v(),O||(M(),O=!0),b.add(d,a),a.D=0}}function Lg(a,d){return uu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ps(u(a.Ea,a,d),Vu(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new sn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=rn(D),us(D,this.U)):D=this.U),this.u!==null||this.R||(C.J=D,D=null),this.S)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,d>4096){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Cu(this,C,d),f=It(this.J),oe(f,"RID",a),oe(f,"CVER",22),this.G&&oe(f,"X-HTTP-Session-Id",this.G),As(this,f),D&&(this.R?d="headers="+gs(bu(D))+"&"+d:this.u&&wa(f,this.u,D)),_a(this.h,C),this.Ra&&oe(f,"TYPE","init"),this.S?(oe(f,"$req",d),oe(f,"SID","null"),C.U=!0,fa(C,f,null)):fa(C,f,d),this.I=2}}else this.I==3&&(a?Ru(this,a):this.i.length==0||cu(this.h)||Ru(this))};function Ru(a,d){var f;d?f=d.l:f=a.V++;const g=It(a.J);oe(g,"SID",a.M),oe(g,"RID",f),oe(g,"AID",a.K),As(a,g),a.u&&a.o&&wa(g,a.u,a.o),f=new sn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Cu(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_a(a.h,f),fa(f,g,d)}function As(a,d){a.H&&Ft(a.H,function(f,g){oe(d,g,f)}),a.l&&Ft({},function(f,g){oe(d,g,f)})}function Cu(a,d,f){f=Math.min(a.i.length,f);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var C=a.i;let G=-1;for(;;){const Ee=["count="+f];G==-1?f>0?(G=C[0].g,Ee.push("ofs="+G)):G=0:Ee.push("ofs="+G);let ee=!0;for(let Ae=0;Ae<f;Ae++){var D=C[Ae].g;const At=C[Ae].map;if(D-=G,D<0)G=Math.max(0,C[Ae].g-100),ee=!1;else try{D="req"+D+"_"||"";try{var F=At instanceof Map?At:Object.entries(At);for(const[qn,cn]of F){let un=cn;l(cn)&&(un=la(cn)),Ee.push(D+qn+"="+encodeURIComponent(un))}}catch(qn){throw Ee.push(D+"type="+encodeURIComponent("_badmap")),qn}}catch{g&&g(At)}}if(ee){F=Ee.join("&");break e}}F=void 0}return a=a.i.splice(0,f),d.G=a,F}function Pu(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;M||v(),O||(M(),O=!0),b.add(d,a),a.A=0}}function xa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ps(u(a.Da,a),Vu(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,ku(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ps(u(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,He(10),Si(this),ku(this))};function Ta(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ku(a){a.g=new sn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=It(a.na);oe(d,"RID","rpc"),oe(d,"SID",a.M),oe(d,"AID",a.K),oe(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&oe(d,"TO",a.ia),oe(d,"TYPE","xmlhttp"),As(a,d),a.u&&a.o&&wa(d,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ei(It(d)),f.u=null,f.R=!0,iu(f,a)}r.Va=function(){this.C!=null&&(this.C=null,Si(this),xa(this),He(19))};function Ci(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Du(a,d){var f=null;if(a.g==d){Ci(a),Ta(a),a.g=null;var g=2}else if(ga(a.h,d))f=d.G,hu(a.h,d),g=1;else return;if(a.I!=0){if(d.o)if(g==1){f=d.u?d.u.length:0,d=Date.now()-d.F;var C=a.D;g=bi(),je(g,new eu(g,f)),Ri(a)}else Pu(a);else if(C=d.m,C==3||C==0&&d.X>0||!(g==1&&Lg(a,d)||g==2&&xa(a)))switch(f&&f.length>0&&(d=a.h,d.i=d.i.concat(f)),C){case 1:Hn(a,5);break;case 4:Hn(a,10);break;case 3:Hn(a,6);break;default:Hn(a,2)}}}function Vu(a,d){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*d}function Hn(a,d){if(a.j.info("Error code "+d),d==2){var f=u(a.bb,a),g=a.Ua;const C=!g;g=new on(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ys(g,"https"),Ei(g),C?Pg(g.toString(),f):kg(g.toString(),f)}else He(2);a.I=0,a.l&&a.l.pa(d),Mu(a),Su(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function Mu(a){if(a.I=0,a.ja=[],a.l){const d=du(a.h);(d.length!=0||a.i.length!=0)&&(x(a.ja,d),x(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Nu(a,d,f){var g=f instanceof on?It(f):new on(f);if(g.g!="")d&&(g.g=d+"."+g.g),vs(g,g.u);else{var C=o.location;g=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;const D=new on(null);g&&ys(D,g),d&&(D.g=d),C&&vs(D,C),f&&(D.h=f),g=D}return f=a.G,d=a.wa,f&&d&&oe(g,f,d),oe(g,"VER",a.ka),As(a,g),g}function Lu(a,d,f){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new fe(new va({ab:f})):new fe(a.ma),d.Fa(a.L),d}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ou(){}r=Ou.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Pi(){}Pi.prototype.g=function(a,d){return new tt(a,d)};function tt(a,d){Ne.call(this),this.g=new Au(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!T(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new vr(this)}p(tt,Ne),tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){ba(this.g)},tt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=la(a),a=f);d.i.push(new xg(d.Ya++,a)),d.I==3&&Ri(d)},tt.prototype.N=function(){this.g.l=null,delete this.j,ba(this.g),delete this.g,tt.Z.N.call(this)};function Fu(a){ca.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}p(Fu,ca);function Uu(){ua.call(this),this.status=1}p(Uu,ua);function vr(a){this.g=a}p(vr,Ou),vr.prototype.ra=function(){je(this.g,"a")},vr.prototype.qa=function(a){je(this.g,new Fu(a))},vr.prototype.pa=function(a){je(this.g,new Uu)},vr.prototype.oa=function(){je(this.g,"b")},Pi.prototype.createWebChannel=Pi.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,kf=function(){return new Pi},Pf=function(){return bi()},Cf=zn,el={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,Hi=xi,tu.COMPLETE="complete",Rf=tu,Jc.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",Ne.prototype.listen=Ne.prototype.J,Rs=Jc,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa,Sf=fe}).apply(typeof Vi<"u"?Vi:typeof self<"u"?self:typeof window<"u"?window:{});const gh="@firebase/firestore",_h="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new Dl("@firebase/firestore");function Tr(){return hr.logLevel}function B(r,...e){if(hr.logLevel<=W.DEBUG){const t=e.map(ql);hr.debug(`Firestore (${ns}): ${r}`,...t)}}function Yt(r,...e){if(hr.logLevel<=W.ERROR){const t=e.map(ql);hr.error(`Firestore (${ns}): ${r}`,...t)}}function dr(r,...e){if(hr.logLevel<=W.WARN){const t=e.map(ql);hr.warn(`Firestore (${ns}): ${r}`,...t)}}function ql(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Df(r,n,t)}function Df(r,e,t){let n=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Yt(n),new Error(n)}function Z(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Df(e,s,n)}function q(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends tn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Fe.UNAUTHENTICATED))}shutdown(){}}class b1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class x1{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Z(typeof n.accessToken=="string",31837,{l:n}),new Vf(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class T1{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class E1{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new T1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const n=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=A1(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function K(r,e){return r<e?-1:r>e?1:0}function tl(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Da(s)===Da(i)?K(s,i):Da(s)?1:-1}return K(r.length,e.length)}const S1=55296,R1=57343;function Da(r){const e=r.charCodeAt(0);return e>=S1&&e<=R1}function Ur(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="__name__";class St{constructor(e,t,n){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&$(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return St.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof St?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=St.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const n=St.isNumericId(e),s=St.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?St.extractNumericId(e).compare(St.extractNumericId(t)):tl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xn.fromString(e.substring(4,e.length-2))}}class se extends St{construct(e,t,n){return new se(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new U(N.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const C1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends St{construct(e,t,n){return new Re(e,t,n)}static isValidIdentifier(e){return C1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vh}static keyField(){return new Re([vh])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new U(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new U(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(n+=l,s++):(i(),s++)}if(i(),o)throw new U(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(se.fromString(e))}static fromName(e){return new z(se.fromString(e).popFirst(5))}static empty(){return new z(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(r,e,t){if(!t)throw new U(N.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Lf(r,e,t,n){if(e===!0&&n===!0)throw new U(N.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function wh(r){if(!z.isDocumentKey(r))throw new U(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function bh(r){if(z.isDocumentKey(r))throw new U(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Of(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Vo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":$(12329,{type:typeof r})}function Sn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new U(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vo(r);throw new U(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(r,e){const t={typeString:r};return e&&(t.value=e),t}function hi(r,e){if(!Of(r))throw new U(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new U(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=-62135596800,Th=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Th);return new ie(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xh)throw new U(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Th}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hi(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:xe("string",ie._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new ie(0,0))}static max(){return new H(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=-1;function P1(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=H.fromTimestamp(n===1e9?new ie(t+1,0):new ie(t,n));return new Rn(s,z.empty(),e)}function k1(r){return new Rn(r.readTime,r.key,Ws)}class Rn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Rn(H.min(),z.empty(),Ws)}static max(){return new Rn(H.max(),z.empty(),Ws)}}function D1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(r.documentKey,e.documentKey),t!==0?t:K(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class M1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(r){if(r.code!==N.FAILED_PRECONDITION||r.message!==V1)throw r;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,n)=>{t(e)})}static reject(e){return new L((t,n)=>{n(e)})}static waitFor(e){return new L((t,n)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>n(c))}),o=!0,i===s&&t()})}static or(e){let t=L.resolve(!1);for(const n of e)t=t.next(s=>s?L.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new L((n,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++l,l===i&&n(o)},h=>s(h))}})}static doWhile(e,t){return new L((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}function N1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ss(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Mo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=-1;function No(r){return r==null}function oo(r){return r===0&&1/r==-1/0}function L1(r){return typeof r=="number"&&Number.isInteger(r)&&!oo(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="";function O1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Eh(e)),e=F1(r.get(t),e);return Eh(e)}function F1(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Ff:t+="";break;default:t+=i}}return t}function Eh(r){return r+Ff+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function On(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Uf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mi(this.root,e,this.comparator,!0)}}class Mi{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??ke.RED,this.left=s??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new ke(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ke.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ah(this.data.getIterator())}getIteratorFrom(e){return new Ah(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class Ah{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new ot([])}unionWith(e){let t=new Ie(Re.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ur(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bf("Invalid base64 string: "+i):i}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const U1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(r){if(Z(!!r,39018),typeof r=="string"){let e=0;const t=U1.exec(r);if(Z(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:me(r.seconds),nanos:me(r.nanos)}}function me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Pn(r){return typeof r=="string"?Ce.fromBase64String(r):Ce.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="server_timestamp",$f="__type__",jf="__previous_value__",Hf="__local_write_time__";function Wl(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[$f])==null?void 0:n.stringValue)===zf}function Lo(r){const e=r.mapValue.fields[jf];return Wl(e)?Lo(e):e}function Ks(r){const e=Cn(r.mapValue.fields[Hf].timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,t,n,s,i,o,l,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const ao="(default)";class Br{constructor(e,t){this.projectId=e,this.database=t||ao}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database===ao}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="__type__",z1="__max__",Ni={mapValue:{}},Gf="__vector__",lo="value";function kn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Wl(r)?4:j1(r)?9007199254740991:$1(r)?10:11:$(28295,{value:r})}function Lt(r,e){if(r===e)return!0;const t=kn(r);if(t!==kn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ks(r).isEqual(Ks(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cn(s.timestampValue),l=Cn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Pn(s.bytesValue).isEqual(Pn(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),l=me(i.doubleValue);return o===l?oo(o)===oo(l):isNaN(o)&&isNaN(l)}return!1}(r,e);case 9:return Ur(r.arrayValue.values||[],e.arrayValue.values||[],Lt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ih(o)!==Ih(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Lt(o[c],l[c])))return!1;return!0}(r,e);default:return $(52216,{left:r})}}function Qs(r,e){return(r.values||[]).find(t=>Lt(t,e))!==void 0}function zr(r,e){if(r===e)return 0;const t=kn(r),n=kn(e);if(t!==n)return K(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(r.booleanValue,e.booleanValue);case 2:return function(i,o){const l=me(i.integerValue||i.doubleValue),c=me(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(r,e);case 3:return Sh(r.timestampValue,e.timestampValue);case 4:return Sh(Ks(r),Ks(e));case 5:return tl(r.stringValue,e.stringValue);case 6:return function(i,o){const l=Pn(i),c=Pn(o);return l.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=K(l[u],c[u]);if(h!==0)return h}return K(l.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const l=K(me(i.latitude),me(o.latitude));return l!==0?l:K(me(i.longitude),me(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Rh(r.arrayValue,e.arrayValue);case 10:return function(i,o){var m,w,x,_;const l=i.fields||{},c=o.fields||{},u=(m=l[lo])==null?void 0:m.arrayValue,h=(w=c[lo])==null?void 0:w.arrayValue,p=K(((x=u==null?void 0:u.values)==null?void 0:x.length)||0,((_=h==null?void 0:h.values)==null?void 0:_.length)||0);return p!==0?p:Rh(u,h)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ni.mapValue&&o===Ni.mapValue)return 0;if(i===Ni.mapValue)return 1;if(o===Ni.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let p=0;p<c.length&&p<h.length;++p){const m=tl(c[p],h[p]);if(m!==0)return m;const w=zr(l[c[p]],u[h[p]]);if(w!==0)return w}return K(c.length,h.length)}(r.mapValue,e.mapValue);default:throw $(23264,{he:t})}}function Sh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return K(r,e);const t=Cn(r),n=Cn(e),s=K(t.seconds,n.seconds);return s!==0?s:K(t.nanos,n.nanos)}function Rh(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=zr(t[s],n[s]);if(i)return i}return K(t.length,n.length)}function $r(r){return nl(r)}function nl(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Cn(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Pn(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return z.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=nl(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${nl(t.fields[o])}`;return s+"}"}(r.mapValue):$(61005,{value:r})}function qi(r){switch(kn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lo(r);return e?16+qi(e):16;case 5:return 2*r.stringValue.length;case 6:return Pn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+qi(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return On(n.fields,(i,o)=>{s+=i.length+qi(o)}),s}(r.mapValue);default:throw $(13486,{value:r})}}function Ch(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function rl(r){return!!r&&"integerValue"in r}function Kl(r){return!!r&&"arrayValue"in r}function Ph(r){return!!r&&"nullValue"in r}function kh(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Gi(r){return!!r&&"mapValue"in r}function $1(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[qf])==null?void 0:n.stringValue)===Gf}function Os(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return On(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Os(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Os(r.arrayValue.values[t]);return e}return{...r}}function j1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===z1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(t)}setAll(e){let t=Re.emptyPath(),n={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=l.popLast()}o?n[l.lastSegment()]=Os(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){On(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Qe(Os(this.value))}}function Wf(r){const e=[];return On(r.fields,(t,n)=>{const s=new Re([t]);if(Gi(n)){const i=Wf(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t,n,s,i,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ue(e,0,H.min(),H.min(),H.min(),Qe.empty(),0)}static newFoundDocument(e,t,n,s){return new Ue(e,1,t,H.min(),n,s,0)}static newNoDocument(e,t){return new Ue(e,2,t,H.min(),H.min(),Qe.empty(),0)}static newUnknownDocument(e,t){return new Ue(e,3,t,H.min(),H.min(),Qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.position=e,this.inclusive=t}}function Dh(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=z.comparator(z.fromName(o.referenceValue),t.key):n=zr(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Vh(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Lt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t="asc"){this.field=e,this.dir=t}}function H1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{}class be extends Kf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new G1(e,t,n):t==="array-contains"?new Q1(e,n):t==="in"?new J1(e,n):t==="not-in"?new Y1(e,n):t==="array-contains-any"?new X1(e,n):new be(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new W1(e,n):new K1(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zr(t,this.value)):t!==null&&kn(this.value)===kn(t)&&this.matchesComparison(zr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tt extends Kf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Tt(e,t)}matches(e){return Qf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Qf(r){return r.op==="and"}function Jf(r){return q1(r)&&Qf(r)}function q1(r){for(const e of r.filters)if(e instanceof Tt)return!1;return!0}function sl(r){if(r instanceof be)return r.field.canonicalString()+r.op.toString()+$r(r.value);if(Jf(r))return r.filters.map(e=>sl(e)).join(",");{const e=r.filters.map(t=>sl(t)).join(",");return`${r.op}(${e})`}}function Yf(r,e){return r instanceof be?function(n,s){return s instanceof be&&n.op===s.op&&n.field.isEqual(s.field)&&Lt(n.value,s.value)}(r,e):r instanceof Tt?function(n,s){return s instanceof Tt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,l)=>i&&Yf(o,s.filters[l]),!0):!1}(r,e):void $(19439)}function Xf(r){return r instanceof be?function(t){return`${t.field.canonicalString()} ${t.op} ${$r(t.value)}`}(r):r instanceof Tt?function(t){return t.op.toString()+" {"+t.getFilters().map(Xf).join(" ,")+"}"}(r):"Filter"}class G1 extends be{constructor(e,t,n){super(e,t,n),this.key=z.fromName(n.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class W1 extends be{constructor(e,t){super(e,"in",t),this.keys=Zf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class K1 extends be{constructor(e,t){super(e,"not-in",t),this.keys=Zf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zf(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>z.fromName(n.referenceValue))}class Q1 extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kl(t)&&Qs(t.arrayValue,this.value)}}class J1 extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qs(this.value.arrayValue,t)}}class Y1 extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qs(this.value.arrayValue,t)}}class X1 extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Qs(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,t=null,n=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Mh(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Z1(r,e,t,n,s,i,o)}function Ql(r){const e=q(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>sl(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),No(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>$r(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>$r(n)).join(",")),e.Te=t}return e.Te}function Jl(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!H1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Yf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Vh(r.startAt,e.startAt)&&Vh(r.endAt,e.endAt)}function il(r){return z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t=null,n=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ev(r,e,t,n,s,i,o,l){return new is(r,e,t,n,s,i,o,l)}function ep(r){return new is(r)}function Nh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tp(r){return r.collectionGroup!==null}function Fs(r){const e=q(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ie(Re.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Js(i,n))}),t.has(Re.keyField().canonicalString())||e.Ie.push(new Js(Re.keyField(),n))}return e.Ie}function Vt(r){const e=q(r);return e.Ee||(e.Ee=tv(e,Fs(r))),e.Ee}function tv(r,e){if(r.limitType==="F")return Mh(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Js(s.field,i)});const t=r.endAt?new co(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new co(r.startAt.position,r.startAt.inclusive):null;return Mh(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ol(r,e){const t=r.filters.concat([e]);return new is(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function uo(r,e,t){return new is(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Oo(r,e){return Jl(Vt(r),Vt(e))&&r.limitType===e.limitType}function np(r){return`${Ql(Vt(r))}|lt:${r.limitType}`}function Er(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Xf(s)).join(", ")}]`),No(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>$r(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>$r(s)).join(",")),`Target(${n})`}(Vt(r))}; limitType=${r.limitType})`}function Fo(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Fs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,l,c){const u=Dh(o,l,c);return o.inclusive?u<=0:u<0}(n.startAt,Fs(n),s)||n.endAt&&!function(o,l,c){const u=Dh(o,l,c);return o.inclusive?u>=0:u>0}(n.endAt,Fs(n),s))}(r,e)}function nv(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function rp(r){return(e,t)=>{let n=!1;for(const s of Fs(r)){const i=rv(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function rv(r,e,t){const n=r.field.isKeyField()?z.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?zr(c,u):$(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return $(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){On(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Uf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new he(z.comparator);function Xt(){return sv}const sp=new he(z.comparator);function Cs(...r){let e=sp;for(const t of r)e=e.insert(t.key,t);return e}function ip(r){let e=sp;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function er(){return Us()}function op(){return Us()}function Us(){return new pr(r=>r.toString(),(r,e)=>r.isEqual(e))}const iv=new he(z.comparator),ov=new Ie(z.comparator);function Q(...r){let e=ov;for(const t of r)e=e.add(t);return e}const av=new Ie(K);function lv(){return av}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oo(e)?"-0":e}}function ap(r){return{integerValue:""+r}}function cv(r,e){return L1(e)?ap(e):Yl(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this._=void 0}}function uv(r,e,t){return r instanceof Ys?function(s,i){const o={fields:{[$f]:{stringValue:zf},[Hf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wl(i)&&(i=Lo(i)),i&&(o.fields[jf]=i),{mapValue:o}}(t,e):r instanceof jr?cp(r,e):r instanceof Xs?up(r,e):function(s,i){const o=lp(s,i),l=Lh(o)+Lh(s.Ae);return rl(o)&&rl(s.Ae)?ap(l):Yl(s.serializer,l)}(r,e)}function hv(r,e,t){return r instanceof jr?cp(r,e):r instanceof Xs?up(r,e):t}function lp(r,e){return r instanceof ho?function(n){return rl(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Ys extends Uo{}class jr extends Uo{constructor(e){super(),this.elements=e}}function cp(r,e){const t=hp(e);for(const n of r.elements)t.some(s=>Lt(s,n))||t.push(n);return{arrayValue:{values:t}}}class Xs extends Uo{constructor(e){super(),this.elements=e}}function up(r,e){let t=hp(e);for(const n of r.elements)t=t.filter(s=>!Lt(s,n));return{arrayValue:{values:t}}}class ho extends Uo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Lh(r){return me(r.integerValue||r.doubleValue)}function hp(r){return Kl(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.field=e,this.transform=t}}function dv(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof jr&&s instanceof jr||n instanceof Xs&&s instanceof Xs?Ur(n.elements,s.elements,Lt):n instanceof ho&&s instanceof ho?Lt(n.Ae,s.Ae):n instanceof Ys&&s instanceof Ys}(r.transform,e.transform)}class fv{constructor(e,t){this.version=e,this.transformResults=t}}class wt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Bo{}function fp(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Xl(r.key,wt.none()):new di(r.key,r.data,wt.none());{const t=r.data,n=Qe.empty();let s=new Ie(Re.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Fn(r.key,n,new ot(s.toArray()),wt.none())}}function pv(r,e,t){r instanceof di?function(s,i,o){const l=s.value.clone(),c=Fh(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):r instanceof Fn?function(s,i,o){if(!Wi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Fh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(pp(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Bs(r,e,t,n){return r instanceof di?function(i,o,l,c){if(!Wi(i.precondition,o))return l;const u=i.value.clone(),h=Uh(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(r,e,t,n):r instanceof Fn?function(i,o,l,c){if(!Wi(i.precondition,o))return l;const u=Uh(i.fieldTransforms,c,o),h=o.data;return h.setAll(pp(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,l){return Wi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(r,e,t)}function mv(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=lp(n.transform,s||null);i!=null&&(t===null&&(t=Qe.empty()),t.set(n.field,i))}return t||null}function Oh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ur(n,s,(i,o)=>dv(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class di extends Bo{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fn extends Bo{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pp(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Fh(r,e,t){const n=new Map;Z(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,l=e.data.field(i.field);n.set(i.field,hv(o,l,t[s]))}return n}function Uh(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,uv(i,o,e))}return n}class Xl extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gv extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&pv(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Bs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Bs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=op();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=fp(o,l);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Ur(this.mutations,e.mutations,(t,n)=>Oh(t,n))&&Ur(this.baseMutations,e.baseMutations,(t,n)=>Oh(t,n))}}class Zl{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Z(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=function(){return iv}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Zl(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,Y;function wv(r){switch(r){case N.OK:return $(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return $(15467,{code:r})}}function mp(r){if(r===void 0)return Yt("GRPC error has no .code"),N.UNKNOWN;switch(r){case ve.OK:return N.OK;case ve.CANCELLED:return N.CANCELLED;case ve.UNKNOWN:return N.UNKNOWN;case ve.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ve.INTERNAL:return N.INTERNAL;case ve.UNAVAILABLE:return N.UNAVAILABLE;case ve.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ve.NOT_FOUND:return N.NOT_FOUND;case ve.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ve.ABORTED:return N.ABORTED;case ve.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ve.DATA_LOSS:return N.DATA_LOSS;default:return $(39323,{code:r})}}(Y=ve||(ve={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new xn([4294967295,4294967295],0);function Bh(r){const e=bv().encode(r),t=new Af;return t.update(e),new Uint8Array(t.digest())}function zh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xn([t,n],0),new xn([s,i],0)]}class ec{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ps(`Invalid padding: ${t}`);if(n<0)throw new Ps(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=xn.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(xn.fromNumber(n)));return s.compare(xv)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Bh(e),[n,s]=zh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ec(i,s,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=Bh(e),[n,s]=zh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new zo(H.min(),s,new he(K),Xt(),Q())}}class fi{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new fi(n,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class gp{constructor(e,t){this.targetId=e,this.Ce=t}}class _p{constructor(e,t,n=Ce.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class $h{constructor(){this.ve=0,this.Fe=jh(),this.Me=Ce.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),n=Q();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:$(38017,{changeType:i})}}),new fi(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=jh()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Tv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Xt(),this.Je=Li(),this.He=Li(),this.Ye=new he(K)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:$(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(il(i))if(n===0){const o=new z(i.path);this.et(t,o,Ue.newNoDocument(o,H.min()))}else Z(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Pn(n).toUint8Array()}catch(c){if(c instanceof Bf)return dr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ec(o,s,i)}catch(c){return dr(c instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&il(l.target)){const c=new z(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Ue.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let n=Q();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new zo(e,t,this.Ye,this.je,n);return this.je=Xt(),this.Je=Li(),this.He=Li(),this.Ye=new he(K),s}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new $h,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ie(K),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ie(K),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new $h),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Li(){return new he(z.comparator)}function jh(){return new he(z.comparator)}const Ev={asc:"ASCENDING",desc:"DESCENDING"},Iv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Av={and:"AND",or:"OR"};class Sv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function al(r,e){return r.useProto3Json||No(e)?e:{value:e}}function fo(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yp(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Rv(r,e){return fo(r,e.toTimestamp())}function Mt(r){return Z(!!r,49232),H.fromTimestamp(function(t){const n=Cn(t);return new ie(n.seconds,n.nanos)}(r))}function tc(r,e){return ll(r,e).canonicalString()}function ll(r,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function vp(r){const e=se.fromString(r);return Z(Ep(e),10190,{key:e.toString()}),e}function cl(r,e){return tc(r.databaseId,e.path)}function Va(r,e){const t=vp(e);if(t.get(1)!==r.databaseId.projectId)throw new U(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new U(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new z(bp(t))}function wp(r,e){return tc(r.databaseId,e)}function Cv(r){const e=vp(r);return e.length===4?se.emptyPath():bp(e)}function ul(r){return new se(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function bp(r){return Z(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Hh(r,e,t){return{name:cl(r,e),fields:t.value.mapValue.fields}}function Pv(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Z(h===void 0||typeof h=="string",58123),Ce.fromBase64String(h||"")):(Z(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ce.fromUint8Array(h||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?N.UNKNOWN:mp(u.code);return new U(h,u.message||"")}(o);t=new _p(n,s,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Va(r,n.document.name),i=Mt(n.document.updateTime),o=n.document.createTime?Mt(n.document.createTime):H.min(),l=new Qe({mapValue:{fields:n.document.fields}}),c=Ue.newFoundDocument(s,i,o,l),u=n.targetIds||[],h=n.removedTargetIds||[];t=new Ki(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Va(r,n.document),i=n.readTime?Mt(n.readTime):H.min(),o=Ue.newNoDocument(s,i),l=n.removedTargetIds||[];t=new Ki([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Va(r,n.document),i=n.removedTargetIds||[];t=new Ki([],i,s,null)}else{if(!("filter"in e))return $(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new vv(s,i),l=n.targetId;t=new gp(l,o)}}return t}function kv(r,e){let t;if(e instanceof di)t={update:Hh(r,e.key,e.value)};else if(e instanceof Xl)t={delete:cl(r,e.key)};else if(e instanceof Fn)t={update:Hh(r,e.key,e.data),updateMask:Bv(e.fieldMask)};else{if(!(e instanceof gv))return $(16599,{Vt:e.type});t={verify:cl(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const l=o.transform;if(l instanceof Ys)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw $(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Rv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)}(r,e.precondition)),t}function Dv(r,e){return r&&r.length>0?(Z(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Mt(s.updateTime):Mt(i);return o.isEqual(H.min())&&(o=Mt(i)),new fv(o,s.transformResults||[])}(t,e))):[]}function Vv(r,e){return{documents:[wp(r,e.path)]}}function Mv(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=wp(r,s);const i=function(u){if(u.length!==0)return Tp(Tt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Ir(m.field),direction:Ov(m.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=al(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:t,parent:s}}function Nv(r){let e=Cv(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Z(n===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(p){const m=xp(p);return m instanceof Tt&&Jf(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(x){return new Js(Ar(x.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,No(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,w=p.values||[];return new co(w,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,w=p.values||[];return new co(w,m)}(t.endAt)),ev(e,s,o,i,l,"F",c,u)}function Lv(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xp(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ar(t.unaryFilter.field);return be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ar(t.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(t.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ar(t.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}}(r):r.fieldFilter!==void 0?function(t){return be.create(Ar(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Tt.create(t.compositeFilter.filters.map(n=>xp(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}}(t.compositeFilter.op))}(r):$(30097,{filter:r})}function Ov(r){return Ev[r]}function Fv(r){return Iv[r]}function Uv(r){return Av[r]}function Ir(r){return{fieldPath:r.canonicalString()}}function Ar(r){return Re.fromServerFormat(r.fieldPath)}function Tp(r){return r instanceof be?function(t){if(t.op==="=="){if(kh(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NAN"}};if(Ph(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(kh(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NOT_NAN"}};if(Ph(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(t.field),op:Fv(t.op),value:t.value}}}(r):r instanceof Tt?function(t){const n=t.getFilters().map(s=>Tp(s));return n.length===1?n[0]:{compositeFilter:{op:Uv(t.op),filters:n}}}(r):$(54877,{filter:r})}function Bv(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ep(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,n,s,i=H.min(),o=H.min(),l=Ce.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.yt=e}}function $v(r){const e=Nv({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?uo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.Cn=new Hv}addToCollectionParentIndex(e,t){return this.Cn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Rn.min())}updateCollectionGroup(e,t,n){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class Hv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Ie(se.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Ie(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ip=41943040;class Ke{static withCacheSize(e){return new Ke(e,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke(Ip,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Hr(0)}static cr(){return new Hr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="LruGarbageCollector",qv=1048576;function Wh([r,e],[t,n]){const s=K(r,t);return s===0?K(e,n):s}class Gv{constructor(e){this.Ir=e,this.buffer=new Ie(Wh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Wh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Wv{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){B(Gh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ss(t)?B(Gh,"Ignoring IndexedDB error during garbage collection: ",t):await rs(t)}await this.Vr(3e5)})}}class Kv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Mo.ce);const n=new Gv(t);return this.mr.forEachTarget(e,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(qh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qh):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,l=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(u=Date.now(),Tr()<=W.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Qv(r,e){return new Kv(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.changes=new pr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?L.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Bs(n.mutation,s,ot.empty(),ie.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Q()){const s=er();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Cs();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=er();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Q()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,s){let i=Xt();const o=Us(),l=function(){return Us()}();return t.forEach((c,u)=>{const h=n.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Fn)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Bs(h.mutation,u,h.mutation.getFieldMask(),ie.now())):o.set(u.key,ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>l.set(u,new Yv(h,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,t){const n=Us();let s=new he((o,l)=>o-l),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=n.get(c)||ot.empty();h=l.applyToLocalView(u,h),n.set(c,h);const p=(s.get(l.batchId)||Q()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,p=op();h.forEach(m=>{if(!i.has(m)){const w=fp(t.get(m),n.get(m));w!==null&&p.set(m,w),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):L.resolve(er());let l=Ws,c=i;return o.next(u=>L.forEach(u,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Q())).next(h=>({batchId:l,changes:ip(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(n=>{let s=Cs();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Cs();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const u=function(p,m){return new is(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,s).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ue.newInvalidDocument(h)))});let l=Cs();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Bs(h.mutation,u,ot.empty(),ie.now()),Fo(t,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return L.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:$v(s.bundledQuery),readTime:Mt(s.readTime)}}(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.overlays=new he(z.comparator),this.qr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const n=er();return L.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.St(e,t,i)}),L.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),L.resolve()}getOverlaysForCollection(e,t,n){const s=er(),i=t.length+1,o=new z(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new he((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=i.get(u.largestBatchId);h===null&&(h=er(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=er(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=s)););return L.resolve(l)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new yv(t,n));let i=this.qr.get(t);i===void 0&&(i=Q(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.Qr=new Ie(Se.$r),this.Ur=new Ie(Se.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Se(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new Se(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new z(new se([])),n=new Se(t,e),s=new Se(t,e+1),i=[];return this.Ur.forEachInRange([n,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new z(new se([])),n=new Se(t,e),s=new Se(t,e+1);let i=Q();return this.Ur.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Se(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Se{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return z.comparator(e.key,t.key)||K(e.Yr,t.Yr)}static Kr(e,t){return K(e.Yr,t.Yr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ie(Se.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _v(i,t,n,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Se(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ei(n),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Gl:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ie(K);return t.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{n=n.add(l.Yr)})}),L.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;z.isDocumentKey(i)||(i=i.child(""));const o=new Se(new z(i),0);let l=new Ie(K);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)},o),L.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(n=>{const s=this.Xr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return L.forEach(t.mutations,s=>{const i=new Se(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new Se(t,0),s=this.Zr.firstAfterOrEqual(n);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.ri=e,this.docs=function(){return new he(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return L.resolve(n?n.document.mutableCopy():Ue.newInvalidDocument(t))}getEntries(e,t){let n=Xt();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Ue.newInvalidDocument(s))}),L.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Xt();const o=t.path,l=new z(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||D1(k1(h),n)<=0||(s.has(h.key)||Fo(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,t,n,s){$(9500)}ii(e,t){return L.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new sw(this)}getSize(e){return L.resolve(this.size)}}class sw extends Jv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(n)}),L.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.persistence=e,this.si=new pr(t=>Ql(t),Jl),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.oi=0,this._i=new nc,this.targetCount=0,this.ai=Hr.ur()}forEachTarget(e,t){return this.si.forEach((n,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),L.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Hr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Pr(t),L.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return L.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),L.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return L.resolve(n)}containsKey(e,t){return L.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t){this.ui={},this.overlays={},this.ci=new Mo(0),this.li=!1,this.li=!0,this.hi=new tw,this.referenceDelegate=e(this),this.Pi=new iw(this),this.indexManager=new jv,this.remoteDocumentCache=function(s){return new rw(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new zv(t),this.Ii=new Zv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ew,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new nw(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){B("MemoryPersistence","Starting transaction:",e);const s=new ow(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return L.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class ow extends M1{constructor(e){super(),this.currentSequenceNumber=e}}class rc{constructor(e){this.persistence=e,this.Ri=new nc,this.Vi=null}static mi(e){return new rc(e)}get fi(){if(this.Vi)return this.Vi;throw $(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),L.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,n=>{const s=z.fromPath(n);return this.gi(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class po{constructor(e,t){this.persistence=e,this.pi=new pr(n=>O1(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Qv(this,t)}static mi(e,t){return new po(e,t)}Ei(){}di(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return L.forEach(this.pi,(n,s)=>this.br(e,n,s).next(i=>i?L.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,t).next(l=>{l||(n++,i.removeEntry(o,H.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qi(e.data.value)),t}br(e,t,n){return L.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return L.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=s}static As(e,t){let n=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sc(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return r0()?8:N1($e())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ys(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new aw;return this.Ss(e,t,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,o,l.size)})}).next(()=>i.result)}bs(e,t,n,s){return n.documentReadCount<this.fs?(Tr()<=W.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Er(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(Tr()<=W.DEBUG&&B("QueryEngine","Query:",Er(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(Tr()<=W.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Er(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vt(t))):L.resolve())}ys(e,t){if(Nh(t))return L.resolve(null);let n=Vt(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=uo(t,null,"F"),n=Vt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Q(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const u=this.Ds(t,l);return this.Cs(t,u,o,c.readTime)?this.ys(e,uo(t,null,"F")):this.vs(e,u,t,c)}))})))}ws(e,t,n,s){return Nh(t)||s.isEqual(H.min())?L.resolve(null):this.ps.getDocuments(e,n).next(i=>{const o=this.Ds(t,i);return this.Cs(t,o,n,s)?L.resolve(null):(Tr()<=W.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Er(t)),this.vs(e,o,t,P1(s,Ws)).next(l=>l))})}Ds(e,t){let n=new Ie(rp(e));return t.forEach((s,i)=>{Fo(e,i)&&(n=n.add(i))}),n}Cs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,n){return Tr()<=W.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Er(t)),this.ps.getDocumentsMatchingQuery(e,t,Rn.min(),n)}vs(e,t,n,s){return this.ps.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="LocalStore",cw=3e8;class uw{constructor(e,t,n,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new he(K),this.xs=new pr(i=>Ql(i),Jl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function hw(r,e,t,n){return new uw(r,e,t,n)}async function Sp(r,e){const t=q(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],l=[];let c=Q();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(n,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function dw(r,e){const t=q(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const p=u.batch,m=p.keys();let w=L.resolve();return m.forEach(x=>{w=w.next(()=>h.getEntry(c,x)).next(_=>{const E=u.docVersions.get(x);Z(E!==null,48541),_.version.compareTo(E)<0&&(p.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),h.addEntry(_)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=Q();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Rp(r){const e=q(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function fw(r,e){const t=q(r),n=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((h,p)=>{const m=s.get(p);if(!m)return;l.push(t.Pi.removeMatchingKeys(i,h.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(i,h.addedDocuments,p)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ce.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,n)),s=s.insert(p,w),function(_,E,P){return _.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=cw?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(m,w,h)&&l.push(t.Pi.updateTargetData(i,w))});let c=Xt(),u=Q();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(pw(i,o,e.documentUpdates).next(h=>{c=h.ks,u=h.qs})),!n.isEqual(H.min())){const h=t.Pi.getLastRemoteSnapshotVersion(i).next(p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(h)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Ms=s,i))}function pw(r,e,t){let n=Q(),s=Q();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Xt();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):B(ic,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:s}})}function mw(r,e){const t=q(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Gl),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function gw(r,e){const t=q(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Pi.getTargetData(n,e).next(i=>i?(s=i,L.resolve(s)):t.Pi.allocateTargetId(n).next(o=>(s=new mn(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function hl(r,e,t){const n=q(r),s=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ss(o))throw o;B(ic,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(s.target)}function Kh(r,e,t){const n=q(r);let s=H.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const p=q(c),m=p.xs.get(h);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,h)}(n,o,Vt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>n.Fs.getDocumentsMatchingQuery(o,e,t?s:H.min(),t?i:Q())).next(l=>(_w(n,nv(e),l),{documents:l,Qs:i})))}function _w(r,e,t){let n=r.Os.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Os.set(e,n)}class Qh{constructor(){this.activeTargetIds=lv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yw{constructor(){this.Mo=new Qh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Qh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="ConnectivityMonitor";class Yh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){B(Jh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){B(Jh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi=null;function dl(){return Oi===null?Oi=function(){return 268435456+Math.round(2147483648*Math.random())}():Oi++,"0x"+Oi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="RestConnection",ww={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bw{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===ao?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(e,t,n,s,i){const o=dl(),l=this.zo(e,t.toUriEncodedString());B(Ma,`Sending RPC '${e}' ${o}:`,l,n);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),h=Zr(u);return this.Jo(e,l,c,n,h).then(p=>(B(Ma,`Received RPC '${e}' ${o}: `,p),p),p=>{throw dr(Ma,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",n),p})}Ho(e,t,n,s,i,o){return this.Go(e,t,n,s,i)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ns}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const n=ww[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection";class Tw extends bw{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,s,i){const o=dl();return new Promise((l,c)=>{const u=new Sf;u.setWithCredentials(!0),u.listenOnce(Rf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Hi.NO_ERROR:const p=u.getResponseJson();B(Le,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Hi.TIMEOUT:B(Le,`RPC '${e}' ${o} timed out`),c(new U(N.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const m=u.getStatus();if(B(Le,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const x=w==null?void 0:w.error;if(x&&x.status&&x.message){const _=function(P){const R=P.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(R)>=0?R:N.UNKNOWN}(x.status);c(new U(_,x.message))}else c(new U(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new U(N.UNAVAILABLE,"Connection failed."));break;default:$(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{B(Le,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);B(Le,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",h,n,15)})}T_(e,t,n){const s=dl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kf(),l=Pf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const h=i.join("");B(Le,`Creating RPC '${e}' stream ${s}: ${h}`,c);const p=o.createWebChannel(h,c);this.I_(p);let m=!1,w=!1;const x=new xw({Yo:E=>{w?B(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(m||(B(Le,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),B(Le,`RPC '${e}' stream ${s} sending:`,E),p.send(E))},Zo:()=>p.close()}),_=(E,P,R)=>{E.listen(P,k=>{try{R(k)}catch(V){setTimeout(()=>{throw V},0)}})};return _(p,Rs.EventType.OPEN,()=>{w||(B(Le,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),_(p,Rs.EventType.CLOSE,()=>{w||(w=!0,B(Le,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(p))}),_(p,Rs.EventType.ERROR,E=>{w||(w=!0,dr(Le,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),x.a_(new U(N.UNAVAILABLE,"The operation could not be completed")))}),_(p,Rs.EventType.MESSAGE,E=>{var P;if(!w){const R=E.data[0];Z(!!R,16349);const k=R,V=(k==null?void 0:k.error)||((P=k[0])==null?void 0:P.error);if(V){B(Le,`RPC '${e}' stream ${s} received error:`,V);const M=V.status;let O=function(y){const I=ve[y];if(I!==void 0)return mp(I)}(M),b=V.message;O===void 0&&(O=N.INTERNAL,b="Unknown error status: "+M+" with message "+V.message),w=!0,x.a_(new U(O,b)),p.close()}else B(Le,`RPC '${e}' stream ${s} received:`,R),x.u_(R)}}),_(l,Cf.STAT_EVENT,E=>{E.stat===el.PROXY?B(Le,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===el.NOPROXY&&B(Le,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Na(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(r){return new Sv(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="PersistentStream";class Pp{constructor(e,t,n,s,i,o,l,c){this.Mi=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Cp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Yt(t.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===t&&this.G_(n,s)},n=>{e(()=>{const s=new U(N.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(Xh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(B(Xh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ew extends Pp{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Pv(this.serializer,e),n=function(i){if(!("targetChange"in i))return H.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Mt(o.readTime):H.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=ul(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=il(c)?{documents:Vv(i,c)}:{query:Mv(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=yp(i,o.resumeToken);const u=al(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(H.min())>0){l.readTime=fo(i,o.snapshotVersion.toTimestamp());const u=al(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const n=Lv(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=ul(this.serializer),t.removeTarget=e,this.q_(t)}}class Iw extends Pp{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Dv(e.writeResults,e.commitTime),n=Mt(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=ul(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>kv(this.serializer,n))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{}class Sw extends Aw{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new U(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,ll(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(N.UNKNOWN,i.toString())})}Ho(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,ll(t,n),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(N.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Rw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Yt(t),this.aa=!1):B("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="RemoteStore";class Cw{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{n.enqueueAndForget(async()=>{mr(this)&&(B(fr,"Restarting streams for network reachability change."),await async function(c){const u=q(c);u.Ea.add(4),await pi(u),u.Ra.set("Unknown"),u.Ea.delete(4),await jo(u)}(this))})}),this.Ra=new Rw(n,s)}}async function jo(r){if(mr(r))for(const e of r.da)await e(!0)}async function pi(r){for(const e of r.da)await e(!1)}function kp(r,e){const t=q(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),cc(t)?lc(t):os(t).O_()&&ac(t,e))}function oc(r,e){const t=q(r),n=os(t);t.Ia.delete(e),n.O_()&&Dp(t,e),t.Ia.size===0&&(n.O_()?n.L_():mr(t)&&t.Ra.set("Unknown"))}function ac(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}os(r).Y_(e)}function Dp(r,e){r.Va.Ue(e),os(r).Z_(e)}function lc(r){r.Va=new Tv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),os(r).start(),r.Ra.ua()}function cc(r){return mr(r)&&!os(r).x_()&&r.Ia.size>0}function mr(r){return q(r).Ea.size===0}function Vp(r){r.Va=void 0}async function Pw(r){r.Ra.set("Online")}async function kw(r){r.Ia.forEach((e,t)=>{ac(r,e)})}async function Dw(r,e){Vp(r),cc(r)?(r.Ra.ha(e),lc(r)):r.Ra.set("Unknown")}async function Vw(r,e,t){if(r.Ra.set("Online"),e instanceof _p&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(r,e)}catch(n){B(fr,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await mo(r,n)}else if(e instanceof Ki?r.Va.Ze(e):e instanceof gp?r.Va.st(e):r.Va.tt(e),!t.isEqual(H.min()))try{const n=await Rp(r.localStore);t.compareTo(n)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(Ce.EMPTY_BYTE_STRING,h.snapshotVersion)),Dp(i,c);const p=new mn(h.target,c,u,h.sequenceNumber);ac(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){B(fr,"Failed to raise snapshot:",n),await mo(r,n)}}async function mo(r,e,t){if(!ss(e))throw e;r.Ea.add(1),await pi(r),r.Ra.set("Offline"),t||(t=()=>Rp(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{B(fr,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await jo(r)})}function Mp(r,e){return e().catch(t=>mo(r,t,e))}async function Ho(r){const e=q(r),t=Dn(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gl;for(;Mw(e);)try{const s=await mw(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,Nw(e,s)}catch(s){await mo(e,s)}Np(e)&&Lp(e)}function Mw(r){return mr(r)&&r.Ta.length<10}function Nw(r,e){r.Ta.push(e);const t=Dn(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Np(r){return mr(r)&&!Dn(r).x_()&&r.Ta.length>0}function Lp(r){Dn(r).start()}async function Lw(r){Dn(r).ra()}async function Ow(r){const e=Dn(r);for(const t of r.Ta)e.ea(t.mutations)}async function Fw(r,e,t){const n=r.Ta.shift(),s=Zl.from(n,e,t);await Mp(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Ho(r)}async function Uw(r,e){e&&Dn(r).X_&&await async function(n,s){if(function(o){return wv(o)&&o!==N.ABORTED}(s.code)){const i=n.Ta.shift();Dn(n).B_(),await Mp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ho(n)}}(r,e),Np(r)&&Lp(r)}async function Zh(r,e){const t=q(r);t.asyncQueue.verifyOperationInProgress(),B(fr,"RemoteStore received new credentials");const n=mr(t);t.Ea.add(3),await pi(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await jo(t)}async function Bw(r,e){const t=q(r);e?(t.Ea.delete(2),await jo(t)):e||(t.Ea.add(2),await pi(t),t.Ra.set("Unknown"))}function os(r){return r.ma||(r.ma=function(t,n,s){const i=q(t);return i.sa(),new Ew(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:Pw.bind(null,r),t_:kw.bind(null,r),r_:Dw.bind(null,r),H_:Vw.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),cc(r)?lc(r):r.Ra.set("Unknown")):(await r.ma.stop(),Vp(r))})),r.ma}function Dn(r){return r.fa||(r.fa=function(t,n,s){const i=q(t);return i.sa(),new Iw(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Lw.bind(null,r),r_:Uw.bind(null,r),ta:Ow.bind(null,r),na:Fw.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Ho(r)):(await r.fa.stop(),r.Ta.length>0&&(B(fr,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,l=new uc(e,t,o,s,i);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hc(r,e){if(Yt("AsyncQueue",`${e}: ${r}`),ss(r))return new U(N.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{static emptySet(e){return new Dr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||z.comparator(t.key,n.key):(t,n)=>z.comparator(t.key,n.key),this.keyedMap=Cs(),this.sortedSet=new he(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Dr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Dr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.ga=new he(z.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):$(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class qr{constructor(e,t,n,s,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new qr(e,t,Dr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class $w{constructor(){this.queries=td(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=q(t),i=s.queries;s.queries=td(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(n)})})(this,new U(N.ABORTED,"Firestore shutting down"))}}function td(){return new pr(r=>np(r),Oo)}async function jw(r,e){const t=q(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new zw,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=hc(o,`Initialization of query '${Er(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&dc(t)}async function Hw(r,e){const t=q(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function qw(r,e){const t=q(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(n=!0);o.wa=s}}n&&dc(t)}function Gw(r,e,t){const n=q(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function dc(r){r.Ca.forEach(e=>{e.next()})}var fl,nd;(nd=fl||(fl={})).Ma="default",nd.Cache="cache";class Ww{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new qr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==fl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.key=e}}class Fp{constructor(e){this.key=e}}class Kw{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=rp(e),this.tu=new Dr(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new ed,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const m=s.get(h),w=Fo(this.query,p)?p:null,x=!!m&&this.mutatedKeys.has(m.key),_=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let E=!1;m&&w?m.data.isEqual(w.data)?x!==_&&(n.track({type:3,doc:w}),E=!0):this.su(m,w)||(n.track({type:2,doc:w}),E=!0,(c&&this.eu(w,c)>0||u&&this.eu(w,u)<0)&&(l=!0)):!m&&w?(n.track({type:0,doc:w}),E=!0):m&&!w&&(n.track({type:1,doc:m}),E=!0,(c||u)&&(l=!0)),E&&(w?(o=o.add(w),i=_?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),n.track({type:1,doc:h})}return{tu:o,iu:n,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,p)=>function(w,x){const _=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{Rt:E})}};return _(w)-_(x)}(h.type,p.type)||this.eu(h.doc,p.doc)),this.ou(n),s=s??!1;const l=t&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new qr(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ed,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Q(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new Fp(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new Op(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return qr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const fc="SyncEngine";class Qw{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Jw{constructor(e){this.key=e,this.hu=!1}}class Yw{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new pr(l=>np(l),Oo),this.Iu=new Map,this.Eu=new Set,this.du=new he(z.comparator),this.Au=new Map,this.Ru=new nc,this.Vu={},this.mu=new Map,this.fu=Hr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Xw(r,e,t=!0){const n=Hp(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Up(n,e,t,!0),s}async function Zw(r,e){const t=Hp(r);await Up(t,e,!0,!1)}async function Up(r,e,t,n){const s=await gw(r.localStore,Vt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await eb(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&kp(r.remoteStore,s),l}async function eb(r,e,t,n,s){r.pu=(p,m,w)=>async function(_,E,P,R){let k=E.view.ru(P);k.Cs&&(k=await Kh(_.localStore,E.query,!1).then(({documents:b})=>E.view.ru(b,k)));const V=R&&R.targetChanges.get(E.targetId),M=R&&R.targetMismatches.get(E.targetId)!=null,O=E.view.applyChanges(k,_.isPrimaryClient,V,M);return sd(_,E.targetId,O.au),O.snapshot}(r,p,m,w);const i=await Kh(r.localStore,e,!0),o=new Kw(e,i.Qs),l=o.ru(i.documents),c=fi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),u=o.applyChanges(l,r.isPrimaryClient,c);sd(r,t,u.au);const h=new Qw(e,t,o);return r.Tu.set(e,h),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),u.snapshot}async function tb(r,e,t){const n=q(r),s=n.Tu.get(e),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter(o=>!Oo(o,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await hl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&oc(n.remoteStore,s.targetId),pl(n,s.targetId)}).catch(rs)):(pl(n,s.targetId),await hl(n.localStore,s.targetId,!0))}async function nb(r,e){const t=q(r),n=t.Tu.get(e),s=t.Iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),oc(t.remoteStore,n.targetId))}async function rb(r,e,t){const n=ub(r);try{const s=await function(o,l){const c=q(o),u=ie.now(),h=l.reduce((w,x)=>w.add(x.key),Q());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let x=Xt(),_=Q();return c.Ns.getEntries(w,h).next(E=>{x=E,x.forEach((P,R)=>{R.isValidDocument()||(_=_.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,x)).next(E=>{p=E;const P=[];for(const R of l){const k=mv(R,p.get(R.key).overlayedDocument);k!=null&&P.push(new Fn(R.key,k,Wf(k.value.mapValue),wt.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,P,l)}).next(E=>{m=E;const P=E.applyToLocalDocumentSet(p,_);return c.documentOverlayCache.saveOverlays(w,E.batchId,P)})}).then(()=>({batchId:m.batchId,changes:ip(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new he(K)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(n,s.batchId,t),await mi(n,s.changes),await Ho(n.remoteStore)}catch(s){const i=hc(s,"Failed to persist write");t.reject(i)}}async function Bp(r,e){const t=q(r);try{const n=await fw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Z(o.hu,14607):s.removedDocuments.size>0&&(Z(o.hu,42227),o.hu=!1))}),await mi(t,n,e)}catch(n){await rs(n)}}function rd(r,e,t){const n=q(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=q(o);c.onlineState=l;let u=!1;c.queries.forEach((h,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)}),u&&dc(c)}(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function sb(r,e,t){const n=q(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let o=new he(z.comparator);o=o.insert(i,Ue.newNoDocument(i,H.min()));const l=Q().add(i),c=new zo(H.min(),new Map,new he(K),o,l);await Bp(n,c),n.du=n.du.remove(i),n.Au.delete(e),pc(n)}else await hl(n.localStore,e,!1).then(()=>pl(n,e,t)).catch(rs)}async function ib(r,e){const t=q(r),n=e.batch.batchId;try{const s=await dw(t.localStore,e);$p(t,n,null),zp(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await mi(t,s)}catch(s){await rs(s)}}async function ob(r,e,t){const n=q(r);try{const s=await function(o,l){const c=q(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Z(p!==null,37113),h=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,e);$p(n,e,t),zp(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await mi(n,s)}catch(s){await rs(s)}}function zp(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function $p(r,e,t){const n=q(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Vu[n.currentUser.toKey()]=s}}function pl(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(n=>{r.Ru.containsKey(n)||jp(r,n)})}function jp(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(oc(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),pc(r))}function sd(r,e,t){for(const n of t)n instanceof Op?(r.Ru.addReference(n.key,e),ab(r,n)):n instanceof Fp?(B(fc,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||jp(r,n.key)):$(19791,{wu:n})}function ab(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||(B(fc,"New document in limbo: "+t),r.Eu.add(n),pc(r))}function pc(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new z(se.fromString(e)),n=r.fu.next();r.Au.set(n,new Jw(t)),r.du=r.du.insert(t,n),kp(r.remoteStore,new mn(Vt(ep(t.path)),n,"TargetPurposeLimboResolution",Mo.ce))}}async function mi(r,e,t){const n=q(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((l,c)=>{o.push(n.pu(c,e,t).then(u=>{var h;if((u||t)&&n.isPrimaryClient){const p=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=sc.As(c.targetId,u);i.push(p)}}))}),await Promise.all(o),n.Pu.H_(s),await async function(c,u){const h=q(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(u,m=>L.forEach(m.Es,w=>h.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>L.forEach(m.ds,w=>h.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!ss(p))throw p;B(ic,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=h.Ms.get(m),x=w.snapshotVersion,_=w.withLastLimboFreeSnapshotVersion(x);h.Ms=h.Ms.insert(m,_)}}}(n.localStore,i))}async function lb(r,e){const t=q(r);if(!t.currentUser.isEqual(e)){B(fc,"User change. New user:",e.toKey());const n=await Sp(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new U(N.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await mi(t,n.Ls)}}function cb(r,e){const t=q(r),n=t.Au.get(e);if(n&&n.hu)return Q().add(n.key);{let s=Q();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const l=t.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Hp(r){const e=q(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sb.bind(null,e),e.Pu.H_=qw.bind(null,e.eventManager),e.Pu.yu=Gw.bind(null,e.eventManager),e}function ub(r){const e=q(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ib.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ob.bind(null,e),e}class go{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$o(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return hw(this.persistence,new lw,e.initialUser,this.serializer)}Cu(e){return new Ap(rc.mi,this.serializer)}Du(e){return new yw}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}go.provider={build:()=>new go};class hb extends go{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof po,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Wv(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new Ap(n=>po.mi(n,t),this.serializer)}}class ml{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>rd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=lb.bind(null,this.syncEngine),await Bw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $w}()}createDatastore(e){const t=$o(e.databaseInfo.databaseId),n=function(i){return new Tw(i)}(e.databaseInfo);return function(i,o,l,c){return new Sw(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,l){return new Cw(n,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>rd(this.syncEngine,t,0),function(){return Yh.v()?new Yh:new vw}())}createSyncEngine(e,t){return function(s,i,o,l,c,u,h){const p=new Yw(s,i,o,l,c,u);return h&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=q(s);B(fr,"RemoteStore shutting down."),i.Ea.add(5),await pi(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ml.provider={build:()=>new ml};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Yt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="FirestoreClient";class fb{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=Do.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{B(Vn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(B(Vn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=hc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function La(r,e){r.asyncQueue.verifyOperationInProgress(),B(Vn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Sp(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function id(r,e){r.asyncQueue.verifyOperationInProgress();const t=await pb(r);B(Vn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Zh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Zh(e.remoteStore,s)),r._onlineComponents=e}async function pb(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){B(Vn,"Using user provided OfflineComponentProvider");try{await La(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;dr("Error using user provided cache. Falling back to memory cache: "+t),await La(r,new go)}}else B(Vn,"Using default OfflineComponentProvider"),await La(r,new hb(void 0));return r._offlineComponents}async function qp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(B(Vn,"Using user provided OnlineComponentProvider"),await id(r,r._uninitializedComponentsProvider._online)):(B(Vn,"Using default OnlineComponentProvider"),await id(r,new ml))),r._onlineComponents}function mb(r){return qp(r).then(e=>e.syncEngine)}async function gb(r){const e=await qp(r),t=e.eventManager;return t.onListen=Xw.bind(null,e.syncEngine),t.onUnlisten=tb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Zw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nb.bind(null,e.syncEngine),t}function _b(r,e,t={}){const n=new Tn;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new db({next:m=>{h.Nu(),o.enqueueAndForget(()=>Hw(i,p)),m.fromCache&&c.source==="server"?u.reject(new U(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Ww(l,h,{includeMetadataChanges:!0,qa:!0});return jw(i,p)}(await gb(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="firestore.googleapis.com",ad=!0;class ld{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wp,this.ssl=ad}else this.host=e.host,this.ssl=e.ssl??ad;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ip;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qv)throw new U(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gp(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new U(N.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new U(N.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new U(N.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qo{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Mf;switch(n.type){case"firstParty":return new E1(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=od.get(t);n&&(B("ComponentProvider","Removing Datastore"),od.delete(t),n.terminate())}(this),Promise.resolve()}}function Kp(r,e,t,n={}){var u;r=Sn(r,qo);const s=Zr(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},l=`${e}:${t}`;s&&(zd(`https://${l}`),$d("Firestore",!0)),i.host!==Wp&&i.host!==l&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:n};if(!An(c,o)&&(r._setSettings(c),n.mockUserToken)){let h,p;if(typeof n.mockUserToken=="string")h=n.mockUserToken,p=Fe.MOCK_USER;else{h=Kg(n.mockUserToken,(u=r._app)==null?void 0:u.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new U(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Fe(m)}r._authCredentials=new b1(new Vf(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new nn(this.firestore,e,this._query)}}class Te{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}toJSON(){return{type:Te._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(hi(t,Te._jsonSchema))return new Te(e,n||null,new z(se.fromString(t.referencePath)))}}Te._jsonSchemaVersion="firestore/documentReference/1.0",Te._jsonSchema={type:xe("string",Te._jsonSchemaVersion),referencePath:xe("string")};class Kt extends nn{constructor(e,t,n){super(e,t,ep(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new z(e))}withConverter(e){return new Kt(this.firestore,e,this._path)}}function Vr(r,e,...t){if(r=Ge(r),Nf("collection","path",e),r instanceof qo){const n=se.fromString(e,...t);return bh(n),new Kt(r,null,n)}{if(!(r instanceof Te||r instanceof Kt))throw new U(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(se.fromString(e,...t));return bh(n),new Kt(r.firestore,null,n)}}function rt(r,e,...t){if(r=Ge(r),arguments.length===1&&(e=Do.newId()),Nf("doc","path",e),r instanceof qo){const n=se.fromString(e,...t);return wh(n),new Te(r,null,new z(n))}{if(!(r instanceof Te||r instanceof Kt))throw new U(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(se.fromString(e,...t));return wh(n),new Te(r.firestore,r instanceof Kt?r.converter:null,new z(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="AsyncQueue";class ud{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Cp(this,"async_queue_retry"),this._c=()=>{const n=Na();n&&B(cd,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Na();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Na();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Tn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ss(e))throw e;B(cd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Yt("INTERNAL UNHANDLED ERROR: ",hd(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=uc.createAndSchedule(this,e,t,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&$(47125,{Pc:hd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function hd(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class as extends qo{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new ud,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ud(e),this._firestoreClient=void 0,await e}}}function Qp(r,e){const t=typeof r=="object"?r:Gd(),n=typeof r=="string"?r:ao,s=Ml(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Gg("firestore");i&&Kp(s,...i)}return s}function mc(r){if(r._terminated)throw new U(N.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||yb(r),r._firestoreClient}function yb(r){var n,s,i;const e=r._freezeSettings(),t=function(l,c,u,h){return new B1(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Gp(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new fb(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this._byteString=e}static fromBase64String(e){try{return new st(Ce.fromBase64String(e))}catch(t){throw new U(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new st(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:st._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hi(e,st._jsonSchema))return st.fromBase64String(e.bytes)}}st._jsonSchemaVersion="firestore/bytes/1.0",st._jsonSchema={type:xe("string",st._jsonSchemaVersion),bytes:xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bt._jsonSchemaVersion}}static fromJSON(e){if(hi(e,bt._jsonSchema))return new bt(e.latitude,e.longitude)}}bt._jsonSchemaVersion="firestore/geoPoint/1.0",bt._jsonSchema={type:xe("string",bt._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hi(e,xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new xt(e.vectorValues);throw new U(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xt._jsonSchemaVersion="firestore/vectorValue/1.0",xt._jsonSchema={type:xe("string",xt._jsonSchemaVersion),vectorValues:xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=/^__.*__$/;class wb{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Fn(e,this.data,this.fieldMask,t,this.fieldTransforms):new di(e,this.data,t,this.fieldTransforms)}}class Jp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Fn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yp(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{Ac:r})}}class Go{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Go({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return _o(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Yp(this.Ac)&&vb.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class bb{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||$o(e)}Cc(e,t,n,s=!1){return new Go({Ac:e,methodName:t,Dc:n,path:Re.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gc(r){const e=r._freezeSettings(),t=$o(r._databaseId);return new bb(r._databaseId,!!e.ignoreUndefinedProperties,t)}function xb(r,e,t,n,s,i={}){const o=r.Cc(i.merge||i.mergeFields?2:0,e,t,s);vc("Data must be an object, but it was:",o,n);const l=Xp(n,o);let c,u;if(i.merge)c=new ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const m=gl(e,p,t);if(!o.contains(m))throw new U(N.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);em(h,m)||h.push(m)}c=new ot(h),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new wb(new Qe(l),c,u)}class _i extends ls{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _i}}function Tb(r,e,t){return new Go({Ac:3,Dc:e.settings.Dc,methodName:r._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class _c extends ls{_toFieldTransform(e){return new dp(e.path,new Ys)}isEqual(e){return e instanceof _c}}class yc extends ls{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Tb(this,e,!0),n=this.vc.map(i=>cs(i,t)),s=new jr(n);return new dp(e.path,s)}isEqual(e){return e instanceof yc&&An(this.vc,e.vc)}}function Eb(r,e,t,n){const s=r.Cc(1,e,t);vc("Data must be an object, but it was:",s,n);const i=[],o=Qe.empty();On(n,(c,u)=>{const h=wc(e,c,t);u=Ge(u);const p=s.yc(h);if(u instanceof _i)i.push(h);else{const m=cs(u,p);m!=null&&(i.push(h),o.set(h,m))}});const l=new ot(i);return new Jp(o,l,s.fieldTransforms)}function Ib(r,e,t,n,s,i){const o=r.Cc(1,e,t),l=[gl(e,n,t)],c=[s];if(i.length%2!=0)throw new U(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(gl(e,i[m])),c.push(i[m+1]);const u=[],h=Qe.empty();for(let m=l.length-1;m>=0;--m)if(!em(u,l[m])){const w=l[m];let x=c[m];x=Ge(x);const _=o.yc(w);if(x instanceof _i)u.push(w);else{const E=cs(x,_);E!=null&&(u.push(w),h.set(w,E))}}const p=new ot(u);return new Jp(h,p,o.fieldTransforms)}function Ab(r,e,t,n=!1){return cs(t,r.Cc(n?4:3,e))}function cs(r,e){if(Zp(r=Ge(r)))return vc("Unsupported field value:",e,r),Xp(r,e);if(r instanceof ls)return function(n,s){if(!Yp(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const l of n){let c=cs(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Ge(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cv(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ie.fromDate(n);return{timestampValue:fo(s.serializer,i)}}if(n instanceof ie){const i=new ie(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fo(s.serializer,i)}}if(n instanceof bt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof st)return{bytesValue:yp(s.serializer,n._byteString)};if(n instanceof Te){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tc(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof xt)return function(o,l){return{mapValue:{fields:{[qf]:{stringValue:Gf},[lo]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Yl(l.serializer,u)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${Vo(n)}`)}(r,e)}function Xp(r,e){const t={};return Uf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):On(r,(n,s)=>{const i=cs(s,e.mc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Zp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ie||r instanceof bt||r instanceof st||r instanceof Te||r instanceof ls||r instanceof xt)}function vc(r,e,t){if(!Zp(t)||!Of(t)){const n=Vo(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function gl(r,e,t){if((e=Ge(e))instanceof gi)return e._internalPath;if(typeof e=="string")return wc(r,e);throw _o("Field path arguments must be of type string or ",r,!1,void 0,t)}const Sb=new RegExp("[~\\*/\\[\\]]");function wc(r,e,t){if(e.search(Sb)>=0)throw _o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new gi(...e.split("."))._internalPath}catch{throw _o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function _o(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new U(N.INVALID_ARGUMENT,l+r+c)}function em(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Rb extends tm{data(){return super.data()}}function Wo(r,e){return typeof e=="string"?wc(r,e):e instanceof gi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new U(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bc{}class Ko extends bc{}function yo(r,e,...t){let n=[];e instanceof bc&&n.push(e),n=n.concat(t),function(i){const o=i.filter(c=>c instanceof Qo).length,l=i.filter(c=>c instanceof yi).length;if(o>1||o>0&&l>0)throw new U(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class yi extends Ko{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new yi(e,t,n)}_apply(e){const t=this._parse(e);return sm(e._query,t),new nn(e.firestore,e.converter,ol(e._query,t))}_parse(e){const t=gc(e.firestore);return function(i,o,l,c,u,h,p){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new U(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){fd(p,h);const x=[];for(const _ of p)x.push(dd(c,i,_));m={arrayValue:{values:x}}}else m=dd(c,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||fd(p,h),m=Ab(l,o,p,h==="in"||h==="not-in");return be.create(u,h,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function nm(r,e,t){const n=e,s=Wo("where",r);return yi._create(s,n,t)}class Qo extends bc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qo(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)sm(o,c),o=ol(o,c)}(e._query,t),new nn(e.firestore,e.converter,ol(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Jo extends Ko{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Jo(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new U(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Js(i,o)}(e._query,this._field,this._direction);return new nn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new is(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function vo(r,e="asc"){const t=e,n=Wo("orderBy",r);return Jo._create(n,t)}class Yo extends Ko{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Yo(e,t,n)}_apply(e){return new nn(e.firestore,e.converter,uo(e._query,this._limit,this._limitType))}}function rm(r){return Yo._create("limit",r,"F")}function dd(r,e,t){if(typeof(t=Ge(t))=="string"){if(t==="")throw new U(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tp(e)&&t.indexOf("/")!==-1)throw new U(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(se.fromString(t));if(!z.isDocumentKey(n))throw new U(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ch(r,new z(n))}if(t instanceof Te)return Ch(r,t._key);throw new U(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vo(t)}.`)}function fd(r,e){if(!Array.isArray(r)||r.length===0)throw new U(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sm(r,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class im{convertValue(e,t="none"){switch(kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return On(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[lo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>me(o.doubleValue));return new xt(t)}convertGeoPoint(e){return new bt(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Lo(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const t=Cn(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=se.fromString(e);Z(Ep(n),9688,{name:e});const s=new Br(n.get(1),n.get(3)),i=new z(n.popFirst(5));return s.isEqual(t)||Yt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class ks{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rr extends tm{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Wo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=rr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",rr._jsonSchema={type:xe("string",rr._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class zs extends rr{data(e={}){return super.data(e)}}class sr{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ks(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new zs(this._firestore,this._userDataWriter,n.key,n,new ks(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new zs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new zs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:kb(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=sr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Do.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kb(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:r})}}sr._jsonSchemaVersion="firestore/querySnapshot/1.0",sr._jsonSchema={type:xe("string",sr._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};class Db extends im{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}}function wo(r){r=Sn(r,nn);const e=Sn(r.firestore,as),t=mc(e),n=new Db(e);return Cb(r._query),_b(t,r._query).then(s=>new sr(e,n,r,s))}function Ct(r,e,t,...n){r=Sn(r,Te);const s=Sn(r.firestore,as),i=gc(s);let o;return o=typeof(e=Ge(e))=="string"||e instanceof gi?Ib(i,"updateDoc",r._key,e,t,n):Eb(i,"updateDoc",r._key,e),Xo(s,[o.toMutation(r._key,wt.exists(!0))])}function xc(r){return Xo(Sn(r.firestore,as),[new Xl(r._key,wt.none())])}function Tc(r,e){const t=Sn(r.firestore,as),n=rt(r),s=Pb(r.converter,e);return Xo(t,[xb(gc(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,wt.exists(!1))]).then(()=>n)}function Xo(r,e){return function(n,s){const i=new Tn;return n.asyncQueue.enqueueAndForget(async()=>rb(await mb(n),s,i)),i.promise}(mc(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return new _i("deleteField")}function om(){return new _c("serverTimestamp")}function Vb(...r){return new yc("arrayUnion",r)}(function(e,t=!0){(function(s){ns=s})(es),Or(new cr("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),l=new as(new x1(n.getProvider("auth-internal")),new I1(o,n.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new U(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(u.options.projectId,h)}(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),bn(gh,_h,e),bn(gh,_h,"esm2020")})();const Mb=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:im,Bytes:st,CollectionReference:Kt,DocumentReference:Te,DocumentSnapshot:rr,FieldPath:gi,FieldValue:ls,Firestore:as,FirestoreError:U,GeoPoint:bt,Query:nn,QueryCompositeFilterConstraint:Qo,QueryConstraint:Ko,QueryDocumentSnapshot:zs,QueryFieldFilterConstraint:yi,QueryLimitConstraint:Yo,QueryOrderByConstraint:Jo,QuerySnapshot:sr,SnapshotMetadata:ks,Timestamp:ie,VectorValue:xt,_AutoId:Do,_ByteString:Ce,_DatabaseId:Br,_DocumentKey:z,_EmptyAuthCredentialsProvider:Mf,_FieldPath:Re,_cast:Sn,_logWarn:dr,_validateIsNotUsedTogether:Lf,addDoc:Tc,arrayUnion:Vb,collection:Vr,connectFirestoreEmulator:Kp,deleteDoc:xc,deleteField:_l,doc:rt,ensureFirestoreConfigured:mc,executeWrite:Xo,getDocs:wo,getFirestore:Qp,limit:rm,orderBy:vo,query:yo,serverTimestamp:om,updateDoc:Ct,where:nm},Symbol.toStringTag,{value:"Module"})),Nb={apiKey:"AIzaSyAwXRJz181drDYBSNajR3WpHQD_-MhzaA4",authDomain:"digital-portfolio-fe6e2.firebaseapp.com",projectId:"digital-portfolio-fe6e2",storageBucket:"digital-portfolio-fe6e2.firebasestorage.app",messagingSenderId:"110352885062",appId:"1:110352885062:web:09d905749c7aa29c0fb147"},am=qd(Nb),pd=v1(am),Oe=Qp(am),Lb=new Ht,Ob=new qt,wr="user_session",md="/api",De={async register(r,e,t){const n=await fetch(`${md}/register.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,email:e,password:t})}),s=await n.json();if(!n.ok)throw new Error(s.message||"Registration failed");return s},async login(r,e){const t=await fetch(`${md}/login.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:e})}),n=await t.json();if(!t.ok)throw new Error(n.message||"Login failed");const s={token:n.token,user:n.user};return localStorage.setItem(wr,JSON.stringify(s)),s},async loginWithGoogle(){try{const e=(await ah(pd,Lb)).user,t={token:await e.getIdToken(),user:{id:e.uid,username:e.displayName,email:e.email,avatar:e.photoURL}};return localStorage.setItem(wr,JSON.stringify(t)),t}catch(r){throw console.error(r),new Error("Google Login Failed: "+r.message)}},async loginWithGitHub(){try{const e=(await ah(pd,Ob)).user,t={token:await e.getIdToken(),user:{id:e.uid,username:e.displayName,email:e.email,avatar:e.photoURL}};return localStorage.setItem(wr,JSON.stringify(t)),t}catch(r){throw console.error(r),new Error("GitHub Login Failed: "+r.message)}},logout(){localStorage.removeItem(wr),window.location.hash="/login"},getUser(){try{const r=JSON.parse(localStorage.getItem(wr));return r?r.user:null}catch{return null}},isAuthenticated(){return!!localStorage.getItem(wr)}};function Fb(){const r=De.getUser(),e=window.location.hash||"#/",t=[{label:"About",path:"#/",icon:"ph-user",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220ZM128,168a56,56,0,1,0-56-56A56.06,56.06,0,0,0,128,168Z"></path></svg>'},{label:"Journey",path:"#/journey",icon:"ph-path",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M200,168a32,32,0,0,0-29.61,19.86l-18.78-12.7A56.06,56.06,0,0,0,96,80a8,8,0,0,0,0,16,40,40,0,1,1-30,66.17l-16,13.71A32,32,0,1,0,81,201.29l16-13.72A55.85,55.85,0,0,0,151.61,175.14l18.78,12.7A32,32,0,1,0,200,168Zm-152,48a16,16,0,1,1,16-16A16,16,0,0,1,48,216Zm152-16a16,16,0,1,1,16-16A16,16,0,0,1,200,200ZM136,32a40,40,0,1,0,40,40A40,40,0,0,0,136,32Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,136,96Z"></path></svg>'},{label:"Projects",path:"#/projects",icon:"ph-code",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M69.12,94.15,28.53,128l40.59,33.85a8,8,0,1,1-10.24,12.3l-48-40a8,8,0,0,1,0-12.3l48-40a8,8,0,1,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.47,128l-40.59,33.85a8,8,0,1,0,10.24,12.3l48-40a8,8,0,0,0,0-12.3Zm-80.5-83.31a8,8,0,0,0-10.14,4.42l-64,160a8,8,0,0,0,4.42,10.14,8,8,0,0,0,10.14-4.42l64-160A8,8,0,0,0,164.62,38.54Z"></path></svg>'},{label:"Dashboard",path:"#/dashboard",icon:"ph-squares-four",protected:!0,svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M112,48V112H48V48Zm-8,16H56V104h48Zm104-16H144V112h64Zm-8,16H152V104h48ZM112,144V208H48V144Zm-8,16H56V200h48Zm104-16H144V208h64Zm-8,16H152V200h48Z"></path></svg>'},{label:"Chat Room",path:"#/chat",icon:"ph-chat-circle-text",protected:!0,svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M232,128A104.12,104.12,0,0,1,128,232a105.15,105.15,0,0,1-34-5.63l-43.6,14.53a16,16,0,0,1-20.27-20.27l14.53-43.6A104,104,0,1,1,232,128Zm-56,16H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0-48H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path></svg>'},{label:"Testimonials",path:"#/testimonials",icon:"ph-star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57a16.4,16.4,0,0,1-24.5-17.82L66.71,153.68l-45-38.83A16.34,16.34,0,0,1,31,87.35l59.91-4.89L114.39,27a16.55,16.55,0,0,1,27.22,0l23.48,55.46,59.91,4.89a16.34,16.34,0,0,1,9.29,27.5Zm-50.62,32.19a8,8,0,0,0-2.43,7.48l13.7,56.9-50.53-31.1a8,8,0,0,0-8.42,0l-50.53,31.1,13.7-56.9a8,8,0,0,0-2.43-7.48L53.7,110.1,113.61,105.2a8,8,0,0,0,6.58-4.78L128,45,135.81,100.42a8,8,0,0,0,6.58,4.78l59.91,4.9Z"></path></svg>'},{label:"Contact",path:"#/contact",icon:"ph-envelope",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M224,48H32a16,16,0,0,0-16,16V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V77.44l-96,54.85L32,77.44V64Zm0,128H32V95.78l88.16,50.38a16,16,0,0,0,15.68,0L224,95.78V192Z"></path></svg>'}];return r&&(r.role==="admin"?t.push({label:"Inbox",path:"#/owner/inbox",icon:"ph-tray",id:"nav-inbox",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M232,104v96a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V104A16,16,0,0,1,40,88H74.34a8,8,0,0,1,6.4,3.2L102.4,120h51.2l21.66-28.8a8,8,0,0,1,6.4-3.2H216A16,16,0,0,1,232,104Zm-16,0H186.34L164.68,132.8a8,8,0,0,1-6.4,3.2h-60.56a8,8,0,0,1-6.4-3.2L69.66,104H40v96H216Zm-72-40a8,8,0,0,0-8-8H104a8,8,0,0,0,0,16h40A8,8,0,0,0,144,64Zm8-32a8,8,0,0,0-8-8h-32a8,8,0,0,0,0,16h32A8,8,0,0,0,152,32Z"></path></svg>'}):t.push({label:"Notifications",path:"#/notifications",icon:"ph-bell",id:"nav-notif",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.9,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path></svg>'})),`
    <aside class="fixed top-0 left-0 w-64 h-screen bg-card-bg border-r border-border-subtle z-50 transform transition-transform duration-300 md:translate-x-0 -translate-x-full flex flex-col">
      <div class="p-6">
        <div class="mb-10 flex items-center gap-3">
          <div class="w-8 h-8 rounded bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white font-bold">K</div>
          <div>
            <h2 class="text-lg font-bold font-space text-text-main tracking-tight">LITTLE KENZY</h2>
            <p class="text-[10px] text-text-muted uppercase tracking-widest">Workspace</p>
          </div>
        </div>
        
        <nav class="flex-1 space-y-1">
          ${t.map(i=>{const o=e===i.path?"text-white bg-white/10 border-l-2 border-accent":"text-text-muted hover:text-text-main hover:bg-white/5",l=i.id?`id="${i.id}"`:"";return`
      <a href="${i.path}" ${l} class="flex items-center gap-3 p-3 mb-1 rounded-r-lg transition-all duration-200 group relative ${o}">
        <div class="group-hover:text-accent transition-colors shrink-0">
          ${i.svg}
        </div>
        <span class="font-medium tracking-wide text-sm">${i.label}</span>
      </a>
    `}).join("")}
        </nav>
      </div>

      <div class="p-6 border-t border-border-subtle mt-auto">
         ${r?`<button id="logoutBtn" class="flex items-center gap-3 p-3 w-full text-left text-red-400 hover:bg-red-400/10 rounded-lg mt-auto transition-all group">
         <div class="shrink-0 group-hover:scale-110 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"></path></svg>
         </div>
         <span class="text-sm font-medium">Logout</span>
       </button>`:`<a href="#/login" class="flex items-center gap-3 p-3 w-full text-left text-accent hover:bg-accent/10 rounded-lg mt-auto transition-all group">
         <div class="shrink-0 group-hover:scale-110 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66-40-40a8,8,0,0,0-11.32,11.32L148.69,120H88a8,8,0,0,0,0,16h60.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,173.66,122.34Z"></path></svg>
         </div>
         <span class="text-sm font-medium">Login</span>
       </a>`}
      </div>
    </aside>
    <!-- Overlay for mobile -->
    <div id="sidebarOverlay" class="fixed inset-0 bg-black/50 z-40 hidden md:hidden"></div>
  `}function Ub(){return`
    <header class="fixed top-0 left-0 w-full h-16 bg-card-bg/95 backdrop-blur-md border-b border-border-subtle z-40 flex items-center justify-between px-6 md:hidden">
      <h1 class="text-base font-bold font-space text-text-main tracking-tight">LK</h1>
      <button id="menuBtn" class="text-text-main p-2 hover:bg-white/10 rounded-lg transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-8 h-8 fill-current">
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
      </button>
    </header>
  `}const Ut="contacts",ft={async sendMessage(r,e,t,n=null){const s={name:r,email:e,message:t,user_id:n,status:"unread",created_at:new Date().toISOString()};try{const i=Tc(Vr(Oe,Ut),{...s}),o=new Promise((l,c)=>setTimeout(()=>c(new Error("Firestore slow")),2500));return await Promise.race([i,o]),{success:!0}}catch(i){console.warn("Inbox Send Failed/Timed Out (Using Local Fallback):",i);const o="lk_inbox_messages",l=JSON.parse(localStorage.getItem(o)||"[]"),c={id:"local-"+Date.now(),...s};return l.unshift(c),localStorage.setItem(o,JSON.stringify(l)),{success:!0}}},async getMyMessages(r){if(!r)return[];let e=[];try{const l=yo(Vr(Oe,Ut),nm("user_id","==",r),vo("created_at","desc")),c=wo(l),u=new Promise((p,m)=>setTimeout(()=>m(new Error("Timeout")),2e3));e=(await Promise.race([c,u])).docs.map(p=>({id:p.id,...p.data()}))}catch(l){console.warn("InboxService: getMyMessages error (Fallback):",l)}const s=JSON.parse(localStorage.getItem("lk_inbox_messages")||"[]").filter(l=>l.user_id===r),i=new Set(e.map(l=>l.id));return[...s.filter(l=>!i.has(l.id)),...e].sort((l,c)=>new Date(c.created_at)-new Date(l.created_at))},async getMessages(){let r=[];try{const o=yo(Vr(Oe,Ut),vo("created_at","desc")),l=wo(o),c=new Promise((h,p)=>setTimeout(()=>p(new Error("Inbox fetch slow")),2e3));r=(await Promise.race([l,c])).docs.map(h=>({id:h.id,...h.data()}))}catch(o){console.warn("InboxService: getMessages error/timeout (Falling back to local):",o)}const t=JSON.parse(localStorage.getItem("lk_inbox_messages")||"[]"),n=new Set(r.map(o=>o.id));let i=[...t.filter(o=>!n.has(o.id)),...r].sort((o,l)=>new Date(l.created_at)-new Date(o.created_at));return i.length===0?[{id:"demo-1",name:"System Admin",email:"admin@kenzy.com",message:"Welcome to your new Firestore-powered Inbox! Old PHP messages are not migrated, but new real-time messages will appear here.",created_at:new Date().toISOString(),status:"unread"}]:i},async markAsRead(r){const e="lk_inbox_messages";try{const t=JSON.parse(localStorage.getItem(e)||"[]"),n=t.findIndex(s=>s.id===r);if(n!==-1&&(t[n].status="read",localStorage.setItem(e,JSON.stringify(t)),String(r).startsWith("local-")))return!0}catch{}try{return String(r).startsWith("local-")||await Ct(rt(Oe,Ut,r),{status:"read"}),!0}catch{return!1}},async markAsReplied(r){try{return await Ct(rt(Oe,Ut,r),{status:"replied",replied_at:new Date().toISOString()}),!0}catch{return!1}},async deleteMessage(r){const e="lk_inbox_messages";try{const t=JSON.parse(localStorage.getItem(e)||"[]"),n=t.filter(s=>s.id!==r);if(n.length!==t.length&&(localStorage.setItem(e,JSON.stringify(n)),String(r).startsWith("local-")))return!0}catch{}try{return String(r).startsWith("local-")||await xc(rt(Oe,Ut,r)),!0}catch(t){return console.error(t),!1}},async sendReply(r,e){const t={status:"replied",reply:e,replied_at:new Date().toISOString(),user_read:0},n=()=>{try{const s="lk_inbox_messages",i=JSON.parse(localStorage.getItem(s)||"[]"),o=i.findIndex(l=>l.id===r);if(o!==-1)return i[o]={...i[o],...t},localStorage.setItem(s,JSON.stringify(i)),!0}catch{}return!1};if(String(r).startsWith("local-"))return n(),{success:!0};try{const s=Ct(rt(Oe,Ut,r),t),i=new Promise((o,l)=>setTimeout(()=>l(new Error("Timeout")),2500));return await Promise.race([s,i]),{success:!0}}catch(s){return console.warn("Cloud Reply Failed (Using Optimistic/Local Fallback):",s),n(),{success:!0}}},async userMarkRead(r){const e="lk_inbox_messages";try{const t=JSON.parse(localStorage.getItem(e)||"[]"),n=t.findIndex(s=>s.id===r);if(n!==-1&&(t[n].user_read=1,localStorage.setItem(e,JSON.stringify(t)),String(r).startsWith("local-")))return{success:!0}}catch{}try{return String(r).startsWith("local-")||await Ct(rt(Oe,Ut,r),{user_read:1}),{success:!0}}catch{return{success:!0}}},async userReply(r,e){const t={user_reply:e,user_replied_at:new Date().toISOString(),status:"unread"},n="lk_inbox_messages",s=()=>{try{const i=JSON.parse(localStorage.getItem(n)||"[]"),o=i.findIndex(l=>l.id===r);if(o!==-1)return i[o]={...i[o],...t},localStorage.setItem(n,JSON.stringify(i)),!0}catch{}return!1};if(String(r).startsWith("local-"))return s(),{success:!0};try{const i=Ct(rt(Oe,Ut,r),t),o=new Promise((l,c)=>setTimeout(()=>c(new Error("Timeout")),2500));return await Promise.race([i,o]),{success:!0}}catch{return s(),{success:!0}}}},Bt=r=>async()=>{const e=typeof r=="function"?await r():r;return`
    <div class="flex h-screen bg-main-bg text-text-main overflow-hidden font-sans antialiased selection:bg-accent selection:text-white">
      <!-- Sidebar (Desktop) -->
      ${Fb()}

      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col h-full w-full md:pl-64 transition-all duration-300">
        
        <!-- Mobile Header -->
        ${Ub()}

        <main id="layoutMain" class="flex-1 flex flex-col min-h-0 bg-main-bg relative pt-16 md:pt-0">
            ${e}
        </main>
      </div>
    </div>
  `},zt=async()=>{const r=document.getElementById("menuBtn"),e=document.querySelector("aside"),t=document.getElementById("sidebarOverlay");if(r&&e&&t){const i=()=>{e.classList.contains("-translate-x-full")?(e.classList.remove("-translate-x-full"),t.classList.remove("hidden")):(e.classList.add("-translate-x-full"),t.classList.add("hidden"))};r.addEventListener("click",i),t.addEventListener("click",i)}const n=document.getElementById("logoutBtn");n&&n.addEventListener("click",()=>{De.logout()});const s=async()=>{const i=De.getUser();if(i)try{if(i.role==="admin"){const l=(await ft.getMessages()).some(u=>u.status==="unread"),c=document.getElementById("nav-inbox");if(c){const u=c.querySelector(".notif-dot");l?u||c.insertAdjacentHTML("beforeend",'<span class="notif-dot absolute top-3 right-3 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></span>'):u&&u.remove()}}else{const l=(await ft.getMyMessages(i.id)).some(u=>u.status==="replied"&&u.user_read==0),c=document.getElementById("nav-notif");if(c){const u=c.querySelector(".notif-dot");l?u||c.insertAdjacentHTML("beforeend",'<span class="notif-dot absolute top-3 right-3 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></span>'):u&&u.remove()}}}catch{}};s(),window.addEventListener("inbox-updated",s)},Bb=()=>{if(!window.matchMedia("(pointer: fine)").matches)return;const r=document.createElement("div"),e=document.createElement("div");r.id="cursor-dot",e.id="cursor-ring",document.body.appendChild(r),document.body.appendChild(e);const t=document.createElement("style");t.innerHTML=`
        body {
            cursor: none; /* Hide default cursor */
        }
        
        #cursor-dot, #cursor-ring {
            position: fixed;
            top: 0;
            left: 0;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 99999;
        }

        /* The small center dot */
        #cursor-dot {
            width: 8px;
            height: 8px;
            background-color: white;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        /* The following ring */
        #cursor-ring {
            width: 32px;
            height: 32px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            transition: width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s, opacity 0.3s;
            will-change: width, height, transform, border;
        }

        /* --- INTERACTION STATES --- */
        
        /* 1. Hover Links/Buttons: Expand Ring */
        body.hover-link #cursor-ring {
            width: 50px;
            height: 50px;
            border-color: rgba(255, 255, 255, 0.8);
            background-color: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(2px);
        }

        /* 2. Hover Gradient Text/Accent: Glow Effect */
        body.hover-accent #cursor-ring {
            width: 60px;
            height: 60px;
            border-color: #00f2ff;
            box-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
            background-color: rgba(0, 242, 255, 0.05);
        }

        /* 3. Mouse Down/Click: Shrink Feedback */
        body.cursor-click #cursor-ring {
            width: 20px;
            height: 20px;
            border-width: 2px;
            background-color: rgba(255, 255, 255, 0.2);
        }

        /* Hide generic cursor when leaving window */
        body:hover #cursor-dot, body:hover #cursor-ring {
            opacity: 1;
        }
        
        body:not(:hover) #cursor-dot, body:not(:hover) #cursor-ring {
            opacity: 0;
        }
    `,document.head.appendChild(t);let n=-100,s=-100,i=-100,o=-100;window.addEventListener("mousemove",h=>{n=h.clientX,s=h.clientY,r.style.left=`${n}px`,r.style.top=`${s}px`}),window.addEventListener("mousedown",()=>{document.body.classList.add("cursor-click")}),window.addEventListener("mouseup",()=>{document.body.classList.remove("cursor-click")});const l=(h,p,m)=>h+(p-h)*m,c=()=>{i=l(i,n,.15),o=l(o,s,.15),e.style.left=`${i}px`,e.style.top=`${o}px`,requestAnimationFrame(c)};c();const u=h=>{const p=h.target,m=p.closest("a, button, .cursor-hover, [data-cursor='hover'], input, textarea, select"),w=p.closest(".text-accent, .border-accent, .bg-accent");document.body.classList.remove("hover-link"),document.body.classList.remove("hover-accent"),m&&document.body.classList.add("hover-link"),w&&document.body.classList.add("hover-accent")};window.addEventListener("mouseover",u),window.addEventListener("mouseout",()=>{document.body.classList.remove("hover-link","hover-accent")})};function $t(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function lm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ct={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gr={duration:.5,overwrite:!1,delay:0},Ec,Ve,ae,pt=1e8,ne=1/pt,yl=Math.PI*2,zb=yl/4,$b=0,cm=Math.sqrt,jb=Math.cos,Hb=Math.sin,Pe=function(e){return typeof e=="string"},pe=function(e){return typeof e=="function"},Zt=function(e){return typeof e=="number"},Ic=function(e){return typeof e>"u"},Ot=function(e){return typeof e=="object"},Je=function(e){return e!==!1},Ac=function(){return typeof window<"u"},Fi=function(e){return pe(e)||Pe(e)},um=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ze=Array.isArray,qb=/random\([^)]+\)/g,Gb=/,\s*/g,gd=/(?:-?\.?\d|\.)+/gi,hm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dm=/[+-]=-?[.\d]+/,Wb=/[^,'"\[\]\s]+/gi,Kb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ce,Rt,vl,Sc,ut={},bo={},fm,pm=function(e){return(bo=Wr(e,ut))&&et},Rc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Zs=function(e,t){return!t&&console.warn(e)},mm=function(e,t){return e&&(ut[e]=t)&&bo&&(bo[e]=t)||ut},ei=function(){return 0},Qb={suppressEvents:!0,isStart:!0,kill:!1},Qi={suppressEvents:!0,kill:!1},Jb={suppressEvents:!0},Cc={},En=[],wl={},gm,nt={},Fa={},_d=30,Ji=[],Pc="",kc=function(e){var t=e[0],n,s;if(Ot(t)||pe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Ji.length;s--&&!Ji[s].targetTest(t););n=Ji[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Bm(e[s],n)))||e.splice(s,1);return e},ir=function(e){return e._gsap||kc(mt(e))[0]._gsap},_m=function(e,t,n){return(n=e[t])&&pe(n)?e[t]():Ic(n)&&e.getAttribute&&e.getAttribute(t)||n},Ye=function(e,t){return(e=e.split(",")).forEach(t)||e},ge=function(e){return Math.round(e*1e5)/1e5||0},le=function(e){return Math.round(e*1e7)/1e7||0},Mr=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},Yb=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},xo=function(){var e=En.length,t=En.slice(0),n,s;for(wl={},En.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Dc=function(e){return!!(e._initted||e._startAt||e.add)},ym=function(e,t,n,s){En.length&&!Ve&&xo(),e.render(t,n,!!(Ve&&t<0&&Dc(e))),En.length&&!Ve&&xo()},vm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wb).length<2?t:Pe(e)?e.trim():e},wm=function(e){return e},ht=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xb=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},Wr=function(e,t){for(var n in t)e[n]=t[n];return e},yd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ot(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},To=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},$s=function(e){var t=e.parent||ce,n=e.keyframes?Xb(ze(e.keyframes)):ht;if(Je(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Zb=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},bm=function(e,t,n,s,i){var o=e[s],l;if(i)for(l=t[i];o&&o[i]>l;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},Zo=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var i=t._prev,o=t._next;i?i._next=o:e[n]===t&&(e[n]=o),o?o._prev=i:e[s]===t&&(e[s]=i),t._next=t._prev=t.parent=null},Mn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},or=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ex=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bl=function(e,t,n,s){return e._startAt&&(Ve?e._startAt.revert(Qi):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},tx=function r(e){return!e||e._ts&&r(e.parent)},vd=function(e){return e._repeat?Kr(e._tTime,e=e.duration()+e._rDelay)*e:0},Kr=function(e,t){var n=Math.floor(e=le(e/t));return e&&n===e?n-1:n},Eo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ea=function(e){return e._end=le(e._start+(e._tDur/Math.abs(e._ts||e._rts||ne)||0))},ta=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=le(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ea(e),n._dirty||or(n,e)),e},xm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Eo(e.rawTime(),t),(!t._dur||vi(0,t.totalDuration(),n)-t._tTime>ne)&&t.render(n,!0)),or(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ne}},Pt=function(e,t,n,s){return t.parent&&Mn(t),t._start=le((Zt(n)?n:n||e!==ce?dt(e,n,t):e._time)+t._delay),t._end=le(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bm(e,t,"_first","_last",e._sort?"_start":0),xl(t)||(e._recent=t),s||xm(e,t),e._ts<0&&ta(e,e._tTime),e},Tm=function(e,t){return(ut.ScrollTrigger||Rc("scrollTrigger",t))&&ut.ScrollTrigger.create(t,e)},Em=function(e,t,n,s,i){if(Mc(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!Ve&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gm!==it.frame)return En.push(e),e._lazy=[i,s],1},nx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rx=function(e,t,n,s){var i=e.ratio,o=t<0||!t&&(!e._start&&nx(e)&&!(!e._initted&&xl(e))||(e._ts<0||e._dp._ts<0)&&!xl(e))?0:1,l=e._rDelay,c=0,u,h,p;if(l&&e._repeat&&(c=vi(0,e._tDur,t),h=Kr(c,l),e._yoyo&&h&1&&(o=1-o),h!==Kr(e._tTime,l)&&(i=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==i||Ve||s||e._zTime===ne||!t&&e._zTime){if(!e._initted&&Em(e,t,s,n,c))return;for(p=e._zTime,e._zTime=t||(n?ne:0),n||(n=t&&!p),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&bl(e,t,n,!0),e._onUpdate&&!n&&at(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&at(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Mn(e,1),!n&&!Ve&&(at(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sx=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Qr=function(e,t,n,s){var i=e._repeat,o=le(t)||0,l=e._tTime/e._tDur;return l&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=i?i<0?1e10:le(o*(i+1)+e._rDelay*i):o,l>0&&!s&&ta(e,e._tTime=e._tDur*l),e.parent&&ea(e),n||or(e.parent,e),e},wd=function(e){return e instanceof qe?or(e):Qr(e,e._dur)},ix={_start:0,endTime:ei,totalDuration:ei},dt=function r(e,t,n){var s=e.labels,i=e._recent||ix,o=e.duration()>=pt?i.endTime(!1):e._dur,l,c,u;return Pe(t)&&(isNaN(t)||t in s)?(c=t.charAt(0),u=t.substr(-1)==="%",l=t.indexOf("="),c==="<"||c===">"?(l>=0&&(t=t.replace(/=/,"")),(c==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(l<0?i:n).totalDuration()/100:1)):l<0?(t in s||(s[t]=o),s[t]):(c=parseFloat(t.charAt(l-1)+t.substr(l+1)),u&&n&&(c=c/100*(ze(n)?n[0]:n).totalDuration()),l>1?r(e,t.substr(0,l-1),n)+c:o+c)):t==null?o:+t},js=function(e,t,n){var s=Zt(t[1]),i=(s?2:1)+(e<2?0:1),o=t[i],l,c;if(s&&(o.duration=t[1]),o.parent=n,e){for(l=o,c=n;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=Je(c.vars.inherit)&&c.parent;o.immediateRender=Je(l.immediateRender),e<2?o.runBackwards=1:o.startAt=t[i-1]}return new we(t[0],o,t[i+1])},Un=function(e,t){return e||e===0?t(e):t},vi=function(e,t,n){return n<e?e:n>t?t:n},Be=function(e,t){return!Pe(e)||!(t=Kb.exec(e))?"":t[1]},ox=function(e,t,n){return Un(n,function(s){return vi(e,t,s)})},Tl=[].slice,Im=function(e,t){return e&&Ot(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ot(e[0]))&&!e.nodeType&&e!==Rt},ax=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var i;return Pe(s)&&!t||Im(s,1)?(i=n).push.apply(i,mt(s)):n.push(s)})||n},mt=function(e,t,n){return ae&&!t&&ae.selector?ae.selector(e):Pe(e)&&!n&&(vl||!Jr())?Tl.call((t||Sc).querySelectorAll(e),0):ze(e)?ax(e,n):Im(e)?Tl.call(e,0):e?[e]:[]},El=function(e){return e=mt(e)[0]||Zs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mt(t,n.querySelectorAll?n:n===e?Zs("Invalid scope")||Sc.createElement("div"):e)}},Am=function(e){return e.sort(function(){return .5-Math.random()})},Sm=function(e){if(pe(e))return e;var t=Ot(e)?e:{each:e},n=ar(t.ease),s=t.from||0,i=parseFloat(t.base)||0,o={},l=s>0&&s<1,c=isNaN(s)||l,u=t.axis,h=s,p=s;return Pe(s)?h=p={center:.5,edges:.5,end:1}[s]||0:!l&&c&&(h=s[0],p=s[1]),function(m,w,x){var _=(x||t).length,E=o[_],P,R,k,V,M,O,b,v,y;if(!E){if(y=t.grid==="auto"?0:(t.grid||[1,pt])[1],!y){for(b=-pt;b<(b=x[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(E=o[_]=[],P=c?Math.min(y,_)*h-.5:s%y,R=y===pt?0:c?_*p/y-.5:s/y|0,b=0,v=pt,O=0;O<_;O++)k=O%y-P,V=R-(O/y|0),E[O]=M=u?Math.abs(u==="y"?V:k):cm(k*k+V*V),M>b&&(b=M),M<v&&(v=M);s==="random"&&Am(E),E.max=b-v,E.min=v,E.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:u?u==="y"?_/y:y:Math.max(y,_/y))||0)*(s==="edges"?-1:1),E.b=_<0?i-_:i,E.u=Be(t.amount||t.each)||0,n=n&&_<0?Om(n):n}return _=(E[m]-E.min)/E.max||0,le(E.b+(n?n(_):_)*E.v)+E.u}},Il=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=le(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(Zt(n)?0:Be(n))}},Rm=function(e,t){var n=ze(e),s,i;return!n&&Ot(e)&&(s=n=e.radius||pt,e.values?(e=mt(e.values),(i=!Zt(e[0]))&&(s*=s)):e=Il(e.increment)),Un(t,n?pe(e)?function(o){return i=e(o),Math.abs(i-o)<=s?i:o}:function(o){for(var l=parseFloat(i?o.x:o),c=parseFloat(i?o.y:0),u=pt,h=0,p=e.length,m,w;p--;)i?(m=e[p].x-l,w=e[p].y-c,m=m*m+w*w):m=Math.abs(e[p]-l),m<u&&(u=m,h=p);return h=!s||u<=s?e[h]:o,i||h===o||Zt(o)?h:h+Be(o)}:Il(e))},Cm=function(e,t,n,s){return Un(ze(e)?!t:n===!0?!!(n=0):!s,function(){return ze(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},lx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(i,o){return o(i)},s)}},cx=function(e,t){return function(n){return e(parseFloat(n))+(t||Be(n))}},ux=function(e,t,n){return km(e,t,0,1,n)},Pm=function(e,t,n){return Un(n,function(s){return e[~~t(s)]})},hx=function r(e,t,n){var s=t-e;return ze(e)?Pm(e,r(0,e.length),t):Un(n,function(i){return(s+(i-e)%s)%s+e})},dx=function r(e,t,n){var s=t-e,i=s*2;return ze(e)?Pm(e,r(0,e.length-1),t):Un(n,function(o){return o=(i+(o-e)%i)%i||0,e+(o>s?i-o:o)})},ti=function(e){return e.replace(qb,function(t){var n=t.indexOf("[")+1,s=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Gb);return Cm(n?s:+s[0],n?0:+s[1],+s[2]||1e-5)})},km=function(e,t,n,s,i){var o=t-e,l=s-n;return Un(i,function(c){return n+((c-e)/o*l||0)})},fx=function r(e,t,n,s){var i=isNaN(e+t)?0:function(w){return(1-w)*e+w*t};if(!i){var o=Pe(e),l={},c,u,h,p,m;if(n===!0&&(s=1)&&(n=null),o)e={p:e},t={p:t};else if(ze(e)&&!ze(t)){for(h=[],p=e.length,m=p-2,u=1;u<p;u++)h.push(r(e[u-1],e[u]));p--,i=function(x){x*=p;var _=Math.min(m,~~x);return h[_](x-_)},n=t}else s||(e=Wr(ze(e)?[]:{},e));if(!h){for(c in t)Vc.call(l,e,c,"get",t[c]);i=function(x){return Oc(x,l)||(o?e.p:e)}}}return Un(n,i)},bd=function(e,t,n){var s=e.labels,i=pt,o,l,c;for(o in s)l=s[o]-t,l<0==!!n&&l&&i>(l=Math.abs(l))&&(c=o,i=l);return c},at=function(e,t,n){var s=e.vars,i=s[t],o=ae,l=e._ctx,c,u,h;if(i)return c=s[t+"Params"],u=s.callbackScope||e,n&&En.length&&xo(),l&&(ae=l),h=c?i.apply(u,c):i.call(u),ae=o,h},Ds=function(e){return Mn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ve),e.progress()<1&&at(e,"onInterrupt"),e},Rr,Dm=[],Vm=function(e){if(e)if(e=!e.name&&e.default||e,Ac()||e.headless){var t=e.name,n=pe(e),s=t&&!n&&e.init?function(){this._props=[]}:e,i={init:ei,render:Oc,add:Vc,kill:Cx,modifier:Rx,rawVars:0},o={targetTest:0,get:0,getSetter:Lc,aliases:{},register:0};if(Jr(),e!==s){if(nt[t])return;ht(s,ht(To(e,i),o)),Wr(s.prototype,Wr(i,To(e,o))),nt[s.prop=t]=s,e.targetTest&&(Ji.push(s),Cc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mm(t,s),e.register&&e.register(et,s,Xe)}else Dm.push(e)},te=255,Vs={aqua:[0,te,te],lime:[0,te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,te],navy:[0,0,128],white:[te,te,te],olive:[128,128,0],yellow:[te,te,0],orange:[te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[te,0,0],pink:[te,192,203],cyan:[0,te,te],transparent:[te,te,te,0]},Ua=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*te+.5|0},Mm=function(e,t,n){var s=e?Zt(e)?[e>>16,e>>8&te,e&te]:0:Vs.black,i,o,l,c,u,h,p,m,w,x;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Vs[e])s=Vs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(i=e.charAt(1),o=e.charAt(2),l=e.charAt(3),e="#"+i+i+o+o+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&te,s&te,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&te,e&te]}else if(e.substr(0,3)==="hsl"){if(s=x=e.match(gd),!t)c=+s[0]%360/360,u=+s[1]/100,h=+s[2]/100,o=h<=.5?h*(u+1):h+u-h*u,i=h*2-o,s.length>3&&(s[3]*=1),s[0]=Ua(c+1/3,i,o),s[1]=Ua(c,i,o),s[2]=Ua(c-1/3,i,o);else if(~e.indexOf("="))return s=e.match(hm),n&&s.length<4&&(s[3]=1),s}else s=e.match(gd)||Vs.transparent;s=s.map(Number)}return t&&!x&&(i=s[0]/te,o=s[1]/te,l=s[2]/te,p=Math.max(i,o,l),m=Math.min(i,o,l),h=(p+m)/2,p===m?c=u=0:(w=p-m,u=h>.5?w/(2-p-m):w/(p+m),c=p===i?(o-l)/w+(o<l?6:0):p===o?(l-i)/w+2:(i-o)/w+4,c*=60),s[0]=~~(c+.5),s[1]=~~(u*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},Nm=function(e){var t=[],n=[],s=-1;return e.split(In).forEach(function(i){var o=i.match(Sr)||[];t.push.apply(t,o),n.push(s+=o.length+1)}),t.c=n,t},xd=function(e,t,n){var s="",i=(e+s).match(In),o=t?"hsla(":"rgba(",l=0,c,u,h,p;if(!i)return e;if(i=i.map(function(m){return(m=Mm(m,t,1))&&o+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(h=Nm(e),c=n.c,c.join(s)!==h.c.join(s)))for(u=e.replace(In,"1").split(Sr),p=u.length-1;l<p;l++)s+=u[l]+(~c.indexOf(l)?i.shift()||o+"0,0,0,0)":(h.length?h:i.length?i:n).shift());if(!u)for(u=e.split(In),p=u.length-1;l<p;l++)s+=u[l]+i[l];return s+u[p]},In=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Vs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),px=/hsl[a]?\(/,Lm=function(e){var t=e.join(" "),n;if(In.lastIndex=0,In.test(t))return n=px.test(t),e[1]=xd(e[1],n),e[0]=xd(e[0],n,Nm(e[1])),!0},ni,it=function(){var r=Date.now,e=500,t=33,n=r(),s=n,i=1e3/240,o=i,l=[],c,u,h,p,m,w,x=function _(E){var P=r()-s,R=E===!0,k,V,M,O;if((P>e||P<0)&&(n+=P-t),s+=P,M=s-n,k=M-o,(k>0||R)&&(O=++p.frame,m=M-p.time*1e3,p.time=M=M/1e3,o+=k+(k>=i?4:i-k),V=1),R||(c=u(_)),V)for(w=0;w<l.length;w++)l[w](M,m,O,E)};return p={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(E){return m/(1e3/(E||60))},wake:function(){fm&&(!vl&&Ac()&&(Rt=vl=window,Sc=Rt.document||{},ut.gsap=et,(Rt.gsapVersions||(Rt.gsapVersions=[])).push(et.version),pm(bo||Rt.GreenSockGlobals||!Rt.gsap&&Rt||{}),Dm.forEach(Vm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),u=h||function(E){return setTimeout(E,o-p.time*1e3+1|0)},ni=1,x(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),ni=0,u=ei},lagSmoothing:function(E,P){e=E||1/0,t=Math.min(P||33,e)},fps:function(E){i=1e3/(E||240),o=p.time*1e3+i},add:function(E,P,R){var k=P?function(V,M,O,b){E(V,M,O,b),p.remove(k)}:E;return p.remove(E),l[R?"unshift":"push"](k),Jr(),k},remove:function(E,P){~(P=l.indexOf(E))&&l.splice(P,1)&&w>=P&&w--},_listeners:l},p}(),Jr=function(){return!ni&&it.wake()},J={},mx=/^[\d.\-M][\d.\-,\s]/,gx=/["']/g,_x=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],i=1,o=n.length,l,c,u;i<o;i++)c=n[i],l=i!==o-1?c.lastIndexOf(","):c.length,u=c.substr(0,l),t[s]=isNaN(u)?u.replace(gx,"").trim():+u,s=c.substr(l+1).trim();return t},yx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},vx=function(e){var t=(e+"").split("("),n=J[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_x(t[1])]:yx(e).split(",").map(vm)):J._CE&&mx.test(e)?J._CE("",e):n},Om=function(e){return function(t){return 1-e(1-t)}},Fm=function r(e,t){for(var n=e._first,s;n;)n instanceof qe?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},ar=function(e,t){return e&&(pe(e)?e:J[e]||vx(e))||t},gr=function(e,t,n,s){n===void 0&&(n=function(c){return 1-t(1-c)}),s===void 0&&(s=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:s},o;return Ye(e,function(l){J[l]=ut[l]=i,J[o=l.toLowerCase()]=n;for(var c in i)J[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=J[l+"."+c]=i[c]}),i},Um=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ba=function r(e,t,n){var s=t>=1?t:1,i=(n||(e?.3:.45))/(t<1?t:1),o=i/yl*(Math.asin(1/s)||0),l=function(h){return h===1?1:s*Math.pow(2,-10*h)*Hb((h-o)*i)+1},c=e==="out"?l:e==="in"?function(u){return 1-l(1-u)}:Um(l);return i=yl/i,c.config=function(u,h){return r(e,u,h)},c},za=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?n:e==="in"?function(i){return 1-n(1-i)}:Um(n);return s.config=function(i){return r(e,i)},s};Ye("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;gr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;gr("Elastic",Ba("in"),Ba("out"),Ba());(function(r,e){var t=1/e,n=2*t,s=2.5*t,i=function(l){return l<t?r*l*l:l<n?r*Math.pow(l-1.5/e,2)+.75:l<s?r*(l-=2.25/e)*l+.9375:r*Math.pow(l-2.625/e,2)+.984375};gr("Bounce",function(o){return 1-i(1-o)},i)})(7.5625,2.75);gr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});gr("Circ",function(r){return-(cm(1-r*r)-1)});gr("Sine",function(r){return r===1?1:-jb(r*zb)+1});gr("Back",za("in"),za("out"),za());J.SteppedEase=J.steps=ut.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),i=t?1:0,o=1-ne;return function(l){return((s*vi(0,o,l)|0)+i)*n}}};Gr.ease=J["quad.out"];Ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Pc+=r+","+r+"Params,"});var Bm=function(e,t){this.id=$b++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_m,this.set=t?t.getSetter:Lc},ri=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qr(this,+t.duration,1,1),this.data=t.data,ae&&(this._ctx=ae,ae.data.push(this)),ni||it.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Qr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(Jr(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){for(ta(this,n),!i._dp||i.parent||xm(i,this);i&&i.parent;)i.parent._time!==i._start+(i._ts>=0?i._tTime/i._ts:(i.totalDuration()-i._tTime)/-i._ts)&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pt(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===ne||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ym(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+vd(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+vd(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*i,s):this._repeat?Kr(this._tTime,i)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Eo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ne?0:this._rts,this.totalTime(vi(-Math.abs(this._delay),this.totalDuration(),i),s!==!1),ea(this),ex(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=le(n);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Pt(s,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Je(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Eo(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Jb);var s=Ve;return Ve=n,Dc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ve=s,this},e.globalTime=function(n){for(var s=this,i=arguments.length?n:s.rawTime();s;)i=s._start+i/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):i},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,wd(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(dt(this,n),Je(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,Je(s)),this._dur||(this._zTime=-ne),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ne:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,i;return!!(!n||this._ts&&this._initted&&n.isActive()&&(i=n.rawTime(!0))>=s&&i<this.endTime(!0)-ne)},e.eventCallback=function(n,s,i){var o=this.vars;return arguments.length>1?(s?(o[n]=s,i&&(o[n+"Params"]=i),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},e.then=function(n){var s=this,i=s._prom;return new Promise(function(o){var l=pe(n)?n:wm,c=function(){var h=s.then;s.then=null,i&&i(),pe(l)&&(l=l(s))&&(l.then||l===s)&&(s.then=h),o(l),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?c():s._prom=c})},e.kill=function(){Ds(this)},r}();ht(ri.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var qe=function(r){lm(e,r);function e(n,s){var i;return n===void 0&&(n={}),i=r.call(this,n)||this,i.labels={},i.smoothChildTiming=!!n.smoothChildTiming,i.autoRemoveChildren=!!n.autoRemoveChildren,i._sort=Je(n.sortChildren),ce&&Pt(n.parent||ce,$t(i),s),n.reversed&&i.reverse(),n.paused&&i.paused(!0),n.scrollTrigger&&Tm($t(i),n.scrollTrigger),i}var t=e.prototype;return t.to=function(s,i,o){return js(0,arguments,this),this},t.from=function(s,i,o){return js(1,arguments,this),this},t.fromTo=function(s,i,o,l){return js(2,arguments,this),this},t.set=function(s,i,o){return i.duration=0,i.parent=this,$s(i).repeatDelay||(i.repeat=0),i.immediateRender=!!i.immediateRender,new we(s,i,dt(this,o),1),this},t.call=function(s,i,o){return Pt(this,we.delayedCall(0,s,i),o)},t.staggerTo=function(s,i,o,l,c,u,h){return o.duration=i,o.stagger=o.stagger||l,o.onComplete=u,o.onCompleteParams=h,o.parent=this,new we(s,o,dt(this,c)),this},t.staggerFrom=function(s,i,o,l,c,u,h){return o.runBackwards=1,$s(o).immediateRender=Je(o.immediateRender),this.staggerTo(s,i,o,l,c,u,h)},t.staggerFromTo=function(s,i,o,l,c,u,h,p){return l.startAt=o,$s(l).immediateRender=Je(l.immediateRender),this.staggerTo(s,i,l,c,u,h,p)},t.render=function(s,i,o){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=s<=0?0:le(s),p=this._zTime<0!=s<0&&(this._initted||!u),m,w,x,_,E,P,R,k,V,M,O,b;if(this!==ce&&h>c&&s>=0&&(h=c),h!==this._tTime||o||p){if(l!==this._time&&u&&(h+=this._time-l,s+=this._time-l),m=h,V=this._start,k=this._ts,P=!k,p&&(u||(l=this._zTime),(s||!i)&&(this._zTime=s)),this._repeat){if(O=this._yoyo,E=u+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(E*100+s,i,o);if(m=le(h%E),h===c?(_=this._repeat,m=u):(M=le(h/E),_=~~M,_&&_===M&&(m=u,_--),m>u&&(m=u)),M=Kr(this._tTime,E),!l&&this._tTime&&M!==_&&this._tTime-M*E-this._dur<=0&&(M=_),O&&_&1&&(m=u-m,b=1),_!==M&&!this._lock){var v=O&&M&1,y=v===(O&&_&1);if(_<M&&(v=!v),l=v?0:h%u?u:h,this._lock=1,this.render(l||(b?0:le(_*E)),i,!u)._lock=0,this._tTime=h,!i&&this.parent&&at(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,M=_),l&&l!==this._time||P!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,y&&(this._lock=2,l=v?u:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!P)return this;Fm(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=sx(this,le(l),le(m)),R&&(h-=m-(m=R._start))),this._tTime=h,this._time=m,this._act=!k,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,l=0),!l&&h&&u&&!i&&!M&&(at(this,"onStart"),this._tTime!==h))return this;if(m>=l&&s>=0)for(w=this._first;w;){if(x=w._next,(w._act||m>=w._start)&&w._ts&&R!==w){if(w.parent!==this)return this.render(s,i,o);if(w.render(w._ts>0?(m-w._start)*w._ts:(w._dirty?w.totalDuration():w._tDur)+(m-w._start)*w._ts,i,o),m!==this._time||!this._ts&&!P){R=0,x&&(h+=this._zTime=-ne);break}}w=x}else{w=this._last;for(var I=s<0?s:m;w;){if(x=w._prev,(w._act||I<=w._end)&&w._ts&&R!==w){if(w.parent!==this)return this.render(s,i,o);if(w.render(w._ts>0?(I-w._start)*w._ts:(w._dirty?w.totalDuration():w._tDur)+(I-w._start)*w._ts,i,o||Ve&&Dc(w)),m!==this._time||!this._ts&&!P){R=0,x&&(h+=this._zTime=I?-ne:ne);break}}w=x}}if(R&&!i&&(this.pause(),R.render(m>=l?0:-ne)._zTime=m>=l?1:-1,this._ts))return this._start=V,ea(this),this.render(s,i,o);this._onUpdate&&!i&&at(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&l)&&(V===this._start||Math.abs(k)!==Math.abs(this._ts))&&(this._lock||((s||!u)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Mn(this,1),!i&&!(s<0&&!l)&&(h||l||!c)&&(at(this,h===c&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,i){var o=this;if(Zt(i)||(i=dt(this,i,s)),!(s instanceof ri)){if(ze(s))return s.forEach(function(l){return o.add(l,i)}),this;if(Pe(s))return this.addLabel(s,i);if(pe(s))s=we.delayedCall(0,s);else return this}return this!==s?Pt(this,s,i):this},t.getChildren=function(s,i,o,l){s===void 0&&(s=!0),i===void 0&&(i=!0),o===void 0&&(o=!0),l===void 0&&(l=-pt);for(var c=[],u=this._first;u;)u._start>=l&&(u instanceof we?i&&c.push(u):(o&&c.push(u),s&&c.push.apply(c,u.getChildren(!0,i,o)))),u=u._next;return c},t.getById=function(s){for(var i=this.getChildren(1,1,1),o=i.length;o--;)if(i[o].vars.id===s)return i[o]},t.remove=function(s){return Pe(s)?this.removeLabel(s):pe(s)?this.killTweensOf(s):(s.parent===this&&Zo(this,s),s===this._recent&&(this._recent=this._last),or(this))},t.totalTime=function(s,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=le(it.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,i),this._forcing=0,this):this._tTime},t.addLabel=function(s,i){return this.labels[s]=dt(this,i),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,i,o){var l=we.delayedCall(0,i||ei,o);return l.data="isPause",this._hasPause=1,Pt(this,l,dt(this,s))},t.removePause=function(s){var i=this._first;for(s=dt(this,s);i;)i._start===s&&i.data==="isPause"&&Mn(i),i=i._next},t.killTweensOf=function(s,i,o){for(var l=this.getTweensOf(s,o),c=l.length;c--;)gn!==l[c]&&l[c].kill(s,i);return this},t.getTweensOf=function(s,i){for(var o=[],l=mt(s),c=this._first,u=Zt(i),h;c;)c instanceof we?Yb(c._targets,l)&&(u?(!gn||c._initted&&c._ts)&&c.globalTime(0)<=i&&c.globalTime(c.totalDuration())>i:!i||c.isActive())&&o.push(c):(h=c.getTweensOf(l,i)).length&&o.push.apply(o,h),c=c._next;return o},t.tweenTo=function(s,i){i=i||{};var o=this,l=dt(o,s),c=i,u=c.startAt,h=c.onStart,p=c.onStartParams,m=c.immediateRender,w,x=we.to(o,ht({ease:i.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:i.duration||Math.abs((l-(u&&"time"in u?u.time:o._time))/o.timeScale())||ne,onStart:function(){if(o.pause(),!w){var E=i.duration||Math.abs((l-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==E&&Qr(x,E,0,1).render(x._time,!0,!0),w=1}h&&h.apply(x,p||[])}},i));return m?x.render(0):x},t.tweenFromTo=function(s,i,o){return this.tweenTo(i,ht({startAt:{time:dt(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),bd(this,dt(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),bd(this,dt(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+ne)},t.shiftChildren=function(s,i,o){o===void 0&&(o=0);var l=this._first,c=this.labels,u;for(s=le(s);l;)l._start>=o&&(l._start+=s,l._end+=s),l=l._next;if(i)for(u in c)c[u]>=o&&(c[u]+=s);return or(this)},t.invalidate=function(s){var i=this._first;for(this._lock=0;i;)i.invalidate(s),i=i._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var i=this._first,o;i;)o=i._next,this.remove(i),i=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),or(this)},t.totalDuration=function(s){var i=0,o=this,l=o._last,c=pt,u,h,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(p=o.parent;l;)u=l._prev,l._dirty&&l.totalDuration(),h=l._start,h>c&&o._sort&&l._ts&&!o._lock?(o._lock=1,Pt(o,l,h-l._delay,1)._lock=0):c=h,h<0&&l._ts&&(i-=h,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=le(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),l._end>i&&l._ts&&(i=l._end),l=u;Qr(o,o===ce&&o._time>i?o._time:i,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(ce._ts&&(ym(ce,Eo(s,ce)),gm=it.frame),it.frame>=_d){_d+=ct.autoSleep||120;var i=ce._first;if((!i||!i._ts)&&ct.autoSleep&&it._listeners.length<2){for(;i&&!i._ts;)i=i._next;i||it.sleep()}}},e}(ri);ht(qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var wx=function(e,t,n,s,i,o,l){var c=new Xe(this._pt,e,t,0,1,Gm,null,i),u=0,h=0,p,m,w,x,_,E,P,R;for(c.b=n,c.e=s,n+="",s+="",(P=~s.indexOf("random("))&&(s=ti(s)),o&&(R=[n,s],o(R,e,t),n=R[0],s=R[1]),m=n.match(Oa)||[];p=Oa.exec(s);)x=p[0],_=s.substring(u,p.index),w?w=(w+1)%5:_.substr(-5)==="rgba("&&(w=1),x!==m[h++]&&(E=parseFloat(m[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:E,c:x.charAt(1)==="="?Mr(E,x)-E:parseFloat(x)-E,m:w&&w<4?Math.round:0},u=Oa.lastIndex);return c.c=u<s.length?s.substring(u,s.length):"",c.fp=l,(dm.test(s)||P)&&(c.e=0),this._pt=c,c},Vc=function(e,t,n,s,i,o,l,c,u,h){pe(s)&&(s=s(i||0,e,o));var p=e[t],m=n!=="get"?n:pe(p)?u?e[t.indexOf("set")||!pe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():p,w=pe(p)?u?Ix:Hm:Nc,x;if(Pe(s)&&(~s.indexOf("random(")&&(s=ti(s)),s.charAt(1)==="="&&(x=Mr(m,s)+(Be(m)||0),(x||x===0)&&(s=x))),!h||m!==s||Al)return!isNaN(m*s)&&s!==""?(x=new Xe(this._pt,e,t,+m||0,s-(m||0),typeof p=="boolean"?Sx:qm,0,w),u&&(x.fp=u),l&&x.modifier(l,this,e),this._pt=x):(!p&&!(t in e)&&Rc(t,s),wx.call(this,e,t,m,s,w,c||ct.stringFilter,u))},bx=function(e,t,n,s,i){if(pe(e)&&(e=Hs(e,i,t,n,s)),!Ot(e)||e.style&&e.nodeType||ze(e)||um(e))return Pe(e)?Hs(e,i,t,n,s):e;var o={},l;for(l in e)o[l]=Hs(e[l],i,t,n,s);return o},zm=function(e,t,n,s,i,o){var l,c,u,h;if(nt[e]&&(l=new nt[e]).init(i,l.rawVars?t[e]:bx(t[e],s,i,o,n),n,s,o)!==!1&&(n._pt=c=new Xe(n._pt,i,e,0,1,l.render,l,0,l.priority),n!==Rr))for(u=n._ptLookup[n._targets.indexOf(i)],h=l._props.length;h--;)u[l._props[h]]=c;return l},gn,Al,Mc=function r(e,t,n){var s=e.vars,i=s.ease,o=s.startAt,l=s.immediateRender,c=s.lazy,u=s.onUpdate,h=s.runBackwards,p=s.yoyoEase,m=s.keyframes,w=s.autoRevert,x=e._dur,_=e._startAt,E=e._targets,P=e.parent,R=P&&P.data==="nested"?P.vars.targets:E,k=e._overwrite==="auto"&&!Ec,V=e.timeline,M,O,b,v,y,I,A,S,T,X,re,de,ye;if(V&&(!m||!i)&&(i="none"),e._ease=ar(i,Gr.ease),e._yEase=p?Om(ar(p===!0?i:p,Gr.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!V&&!!s.runBackwards,!V||m&&!s.stagger){if(S=E[0]?ir(E[0]).harness:0,de=S&&s[S.prop],M=To(s,Cc),_&&(_._zTime<0&&_.progress(1),t<0&&h&&l&&!w?_.render(-1,!0):_.revert(h&&x?Qi:Qb),_._lazy=0),o){if(Mn(e._startAt=we.set(E,ht({data:"isStart",overwrite:!1,parent:P,immediateRender:!0,lazy:!_&&Je(c),startAt:null,delay:0,onUpdate:u&&function(){return at(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ve||!l&&!w)&&e._startAt.revert(Qi),l&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&x&&!_){if(t&&(l=!1),b=ht({overwrite:!1,data:"isFromStart",lazy:l&&!_&&Je(c),immediateRender:l,stagger:0,parent:P},M),de&&(b[S.prop]=de),Mn(e._startAt=we.set(E,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ve?e._startAt.revert(Qi):e._startAt.render(-1,!0)),e._zTime=t,!l)r(e._startAt,ne,ne);else if(!t)return}for(e._pt=e._ptCache=0,c=x&&Je(c)||c&&!x,O=0;O<E.length;O++){if(y=E[O],A=y._gsap||kc(E)[O]._gsap,e._ptLookup[O]=X={},wl[A.id]&&En.length&&xo(),re=R===E?O:R.indexOf(y),S&&(T=new S).init(y,de||M,e,re,R)!==!1&&(e._pt=v=new Xe(e._pt,y,T.name,0,1,T.render,T,0,T.priority),T._props.forEach(function(Me){X[Me]=v}),T.priority&&(I=1)),!S||de)for(b in M)nt[b]&&(T=zm(b,M,e,re,y,R))?T.priority&&(I=1):X[b]=v=Vc.call(e,y,b,"get",M[b],re,R,0,s.stringFilter);e._op&&e._op[O]&&e.kill(y,e._op[O]),k&&e._pt&&(gn=e,ce.killTweensOf(y,X,e.globalTime(t)),ye=!e.parent,gn=0),e._pt&&c&&(wl[A.id]=1)}I&&Wm(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!ye,m&&t<=0&&V.render(pt,!0,!0)},xx=function(e,t,n,s,i,o,l,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,p,m,w;if(!u)for(u=e._ptCache[t]=[],m=e._ptLookup,w=e._targets.length;w--;){if(h=m[w][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Al=1,e.vars[t]="+=0",Mc(e,l),Al=0,c?Zs(t+" not eligible for reset"):1;u.push(h)}for(w=u.length;w--;)p=u[w],h=p._pt||p,h.s=(s||s===0)&&!i?s:h.s+(s||0)+o*h.c,h.c=n-h.s,p.e&&(p.e=ge(n)+Be(p.e)),p.b&&(p.b=h.s+Be(p.b))},Tx=function(e,t){var n=e[0]?ir(e[0]).harness:0,s=n&&n.aliases,i,o,l,c;if(!s)return t;i=Wr({},t);for(o in s)if(o in i)for(c=s[o].split(","),l=c.length;l--;)i[c[l]]=i[o];return i},Ex=function(e,t,n,s){var i=t.ease||s||"power1.inOut",o,l;if(ze(t))l=n[e]||(n[e]=[]),t.forEach(function(c,u){return l.push({t:u/(t.length-1)*100,v:c,e:i})});else for(o in t)l=n[o]||(n[o]=[]),o==="ease"||l.push({t:parseFloat(e),v:t[o],e:i})},Hs=function(e,t,n,s,i){return pe(e)?e.call(t,n,s,i):Pe(e)&&~e.indexOf("random(")?ti(e):e},$m=Pc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jm={};Ye($m+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return jm[r]=1});var we=function(r){lm(e,r);function e(n,s,i,o){var l;typeof s=="number"&&(i.duration=s,s=i,i=null),l=r.call(this,o?s:$s(s))||this;var c=l.vars,u=c.duration,h=c.delay,p=c.immediateRender,m=c.stagger,w=c.overwrite,x=c.keyframes,_=c.defaults,E=c.scrollTrigger,P=c.yoyoEase,R=s.parent||ce,k=(ze(n)||um(n)?Zt(n[0]):"length"in s)?[n]:mt(n),V,M,O,b,v,y,I,A;if(l._targets=k.length?kc(k):Zs("GSAP target "+n+" not found. https://gsap.com",!ct.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=w,x||m||Fi(u)||Fi(h)){if(s=l.vars,V=l.timeline=new qe({data:"nested",defaults:_||{},targets:R&&R.data==="nested"?R.vars.targets:k}),V.kill(),V.parent=V._dp=$t(l),V._start=0,m||Fi(u)||Fi(h)){if(b=k.length,I=m&&Sm(m),Ot(m))for(v in m)~$m.indexOf(v)&&(A||(A={}),A[v]=m[v]);for(M=0;M<b;M++)O=To(s,jm),O.stagger=0,P&&(O.yoyoEase=P),A&&Wr(O,A),y=k[M],O.duration=+Hs(u,$t(l),M,y,k),O.delay=(+Hs(h,$t(l),M,y,k)||0)-l._delay,!m&&b===1&&O.delay&&(l._delay=h=O.delay,l._start+=h,O.delay=0),V.to(y,O,I?I(M,y,k):0),V._ease=J.none;V.duration()?u=h=0:l.timeline=0}else if(x){$s(ht(V.vars.defaults,{ease:"none"})),V._ease=ar(x.ease||s.ease||"none");var S=0,T,X,re;if(ze(x))x.forEach(function(de){return V.to(k,de,">")}),V.duration();else{O={};for(v in x)v==="ease"||v==="easeEach"||Ex(v,x[v],O,x.easeEach);for(v in O)for(T=O[v].sort(function(de,ye){return de.t-ye.t}),S=0,M=0;M<T.length;M++)X=T[M],re={ease:X.e,duration:(X.t-(M?T[M-1].t:0))/100*u},re[v]=X.v,V.to(k,re,S),S+=re.duration;V.duration()<u&&V.to({},{duration:u-V.duration()})}}u||l.duration(u=V.duration())}else l.timeline=0;return w===!0&&!Ec&&(gn=$t(l),ce.killTweensOf(k),gn=0),Pt(R,$t(l),i),s.reversed&&l.reverse(),s.paused&&l.paused(!0),(p||!u&&!x&&l._start===le(R._time)&&Je(p)&&tx($t(l))&&R.data!=="nested")&&(l._tTime=-ne,l.render(Math.max(0,-h)||0)),E&&Tm($t(l),E),l}var t=e.prototype;return t.render=function(s,i,o){var l=this._time,c=this._tDur,u=this._dur,h=s<0,p=s>c-ne&&!h?c:s<ne?0:s,m,w,x,_,E,P,R,k,V;if(!u)rx(this,s,i,o);else if(p!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(m=p,k=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+s,i,o);if(m=le(p%_),p===c?(x=this._repeat,m=u):(E=le(p/_),x=~~E,x&&x===E?(m=u,x--):m>u&&(m=u)),P=this._yoyo&&x&1,P&&(V=this._yEase,m=u-m),E=Kr(this._tTime,_),m===l&&!o&&this._initted&&x===E)return this._tTime=p,this;x!==E&&(k&&this._yEase&&Fm(k,P),this.vars.repeatRefresh&&!P&&!this._lock&&m!==_&&this._initted&&(this._lock=o=1,this.render(le(_*x),!0).invalidate()._lock=0))}if(!this._initted){if(Em(this,h?s:m,o,i,p))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&x!==E))return this;if(u!==this._dur)return this.render(s,i,o)}if(this._tTime=p,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(V||this._ease)(m/u),this._from&&(this.ratio=R=1-R),!l&&p&&!i&&!E&&(at(this,"onStart"),this._tTime!==p))return this;for(w=this._pt;w;)w.r(R,w.d),w=w._next;k&&k.render(s<0?s:k._dur*k._ease(m/this._dur),i,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!i&&(h&&bl(this,s,i,o),at(this,"onUpdate")),this._repeat&&x!==E&&this.vars.onRepeat&&!i&&this.parent&&at(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(h&&!this._onUpdate&&bl(this,s,!0,!0),(s||!u)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&Mn(this,1),!i&&!(h&&!l)&&(p||l||P)&&(at(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,i,o,l,c){ni||it.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Mc(this,u),h=this._ease(u/this._dur),xx(this,s,i,o,l,h,u,c)?this.resetTo(s,i,o,l,1):(ta(this,0),this.parent||bm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,i){if(i===void 0&&(i="all"),!s&&(!i||i==="all"))return this._lazy=this._pt=0,this.parent?Ds(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ve),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,i,gn&&gn.vars.overwrite!==!0)._first||Ds(this),this.parent&&o!==this.timeline.totalDuration()&&Qr(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,c=s?mt(s):l,u=this._ptLookup,h=this._pt,p,m,w,x,_,E,P;if((!i||i==="all")&&Zb(l,c))return i==="all"&&(this._pt=0),Ds(this);for(p=this._op=this._op||[],i!=="all"&&(Pe(i)&&(_={},Ye(i,function(R){return _[R]=1}),i=_),i=Tx(l,i)),P=l.length;P--;)if(~c.indexOf(l[P])){m=u[P],i==="all"?(p[P]=i,x=m,w={}):(w=p[P]=p[P]||{},x=i);for(_ in x)E=m&&m[_],E&&((!("kill"in E.d)||E.d.kill(_)===!0)&&Zo(this,E,"_pt"),delete m[_]),w!=="all"&&(w[_]=1)}return this._initted&&!this._pt&&h&&Ds(this),this},e.to=function(s,i){return new e(s,i,arguments[2])},e.from=function(s,i){return js(1,arguments)},e.delayedCall=function(s,i,o,l){return new e(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:i,onReverseComplete:i,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},e.fromTo=function(s,i,o){return js(2,arguments)},e.set=function(s,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new e(s,i)},e.killTweensOf=function(s,i,o){return ce.killTweensOf(s,i,o)},e}(ri);ht(we.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ye("staggerTo,staggerFrom,staggerFromTo",function(r){we[r]=function(){var e=new qe,t=Tl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Nc=function(e,t,n){return e[t]=n},Hm=function(e,t,n){return e[t](n)},Ix=function(e,t,n,s){return e[t](s.fp,n)},Ax=function(e,t,n){return e.setAttribute(t,n)},Lc=function(e,t){return pe(e[t])?Hm:Ic(e[t])&&e.setAttribute?Ax:Nc},qm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Sx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gm=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Oc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rx=function(e,t,n,s){for(var i=this._pt,o;i;)o=i._next,i.p===s&&i.modifier(e,t,n),i=o},Cx=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Zo(this,t,"_pt"):t.dep||(n=1),t=s;return!n},Px=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},Wm=function(e){for(var t=e._pt,n,s,i,o;t;){for(n=t._next,s=i;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:i=t,(t._next=s)?s._prev=t:o=t,t=n}e._pt=i},Xe=function(){function r(t,n,s,i,o,l,c,u,h){this.t=n,this.s=i,this.c=o,this.p=s,this.r=l||qm,this.d=c||this,this.set=u||Nc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,s,i){this.mSet=this.mSet||this.set,this.set=Px,this.m=n,this.mt=i,this.tween=s},r}();Ye(Pc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Cc[r]=1});ut.TweenMax=ut.TweenLite=we;ut.TimelineLite=ut.TimelineMax=qe;ce=new qe({sortChildren:!1,defaults:Gr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ct.stringFilter=Lm;var lr=[],Yi={},kx=[],Td=0,Dx=0,$a=function(e){return(Yi[e]||kx).map(function(t){return t()})},Sl=function(){var e=Date.now(),t=[];e-Td>2&&($a("matchMediaInit"),lr.forEach(function(n){var s=n.queries,i=n.conditions,o,l,c,u;for(l in s)o=Rt.matchMedia(s[l]).matches,o&&(c=1),o!==i[l]&&(i[l]=o,u=1);u&&(n.revert(),c&&t.push(n))}),$a("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Td=e,$a("matchMedia"))},Km=function(){function r(t,n){this.selector=n&&El(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Dx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,s,i){pe(n)&&(i=s,s=n,n=pe);var o=this,l=function(){var u=ae,h=o.selector,p;return u&&u!==o&&u.data.push(o),i&&(o.selector=El(i)),ae=o,p=s.apply(o,arguments),pe(p)&&o._r.push(p),ae=u,o.selector=h,o.isReverted=!1,p};return o.last=l,n===pe?l(o,function(c){return o.add(null,c)}):n?o[n]=l:l},e.ignore=function(n){var s=ae;ae=null,n(this),ae=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof r?n.push.apply(n,s.getTweens()):s instanceof we&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var i=this;if(n?function(){for(var l=i.getTweens(),c=i.data.length,u;c--;)u=i.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return l.splice(l.indexOf(h),1)}));for(l.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,p){return p.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=i.data.length;c--;)u=i.data[c],u instanceof qe?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof we)&&u.revert&&u.revert(n);i._r.forEach(function(h){return h(n,i)}),i.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),s)for(var o=lr.length;o--;)lr[o].id===this.id&&lr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Vx=function(){function r(t){this.contexts=[],this.scope=t,ae&&ae.data.push(this)}var e=r.prototype;return e.add=function(n,s,i){Ot(n)||(n={matches:n});var o=new Km(0,i||this.scope),l=o.conditions={},c,u,h;ae&&!o.selector&&(o.selector=ae.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(u in n)u==="all"?h=1:(c=Rt.matchMedia(n[u]),c&&(lr.indexOf(o)<0&&lr.push(o),(l[u]=c.matches)&&(h=1),c.addListener?c.addListener(Sl):c.addEventListener("change",Sl)));return h&&s(o,function(p){return o.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},r}(),Io={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return Vm(s)})},timeline:function(e){return new qe(e)},getTweensOf:function(e,t){return ce.getTweensOf(e,t)},getProperty:function(e,t,n,s){Pe(e)&&(e=mt(e)[0]);var i=ir(e||{}).get,o=n?wm:vm;return n==="native"&&(n=""),e&&(t?o((nt[t]&&nt[t].get||i)(e,t,n,s)):function(l,c,u){return o((nt[l]&&nt[l].get||i)(e,l,c,u))})},quickSetter:function(e,t,n){if(e=mt(e),e.length>1){var s=e.map(function(h){return et.quickSetter(h,t,n)}),i=s.length;return function(h){for(var p=i;p--;)s[p](h)}}e=e[0]||{};var o=nt[t],l=ir(e),c=l.harness&&(l.harness.aliases||{})[t]||t,u=o?function(h){var p=new o;Rr._pt=0,p.init(e,n?h+n:h,Rr,0,[e]),p.render(1,p),Rr._pt&&Oc(1,Rr)}:l.set(e,c);return o?u:function(h){return u(e,c,n?h+n:h,l,1)}},quickTo:function(e,t,n){var s,i=et.to(e,ht((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),o=function(c,u,h){return i.resetTo(t,c,u,h)};return o.tween=i,o},isTweening:function(e){return ce.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ar(e.ease,Gr.ease)),yd(Gr,e||{})},config:function(e){return yd(ct,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,i=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(l){return l&&!nt[l]&&!ut[l]&&Zs(t+" effect requires "+l+" plugin.")}),Fa[t]=function(l,c,u){return n(mt(l),ht(c||{},i),u)},o&&(qe.prototype[t]=function(l,c,u){return this.add(Fa[t](l,Ot(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){J[e]=ar(t)},parseEase:function(e,t){return arguments.length?ar(e,t):J},getById:function(e){return ce.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qe(e),s,i;for(n.smoothChildTiming=Je(e.smoothChildTiming),ce.remove(n),n._dp=0,n._time=n._tTime=ce._time,s=ce._first;s;)i=s._next,(t||!(!s._dur&&s instanceof we&&s.vars.onComplete===s._targets[0]))&&Pt(n,s,s._start-s._delay),s=i;return Pt(ce,n,0),n},context:function(e,t){return e?new Km(e,t):ae},matchMedia:function(e){return new Vx(e)},matchMediaRefresh:function(){return lr.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Sl()},addEventListener:function(e,t){var n=Yi[e]||(Yi[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Yi[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:hx,wrapYoyo:dx,distribute:Sm,random:Cm,snap:Rm,normalize:ux,getUnit:Be,clamp:ox,splitColor:Mm,toArray:mt,selector:El,mapRange:km,pipe:lx,unitize:cx,interpolate:fx,shuffle:Am},install:pm,effects:Fa,ticker:it,updateRoot:qe.updateRoot,plugins:nt,globalTimeline:ce,core:{PropTween:Xe,globals:mm,Tween:we,Timeline:qe,Animation:ri,getCache:ir,_removeLinkedListItem:Zo,reverting:function(){return Ve},context:function(e){return e&&ae&&(ae.data.push(e),e._ctx=ae),ae},suppressOverwrites:function(e){return Ec=e}}};Ye("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Io[r]=we[r]});it.add(qe.updateRoot);Rr=Io.to({},{duration:0});var Mx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Nx=function(e,t){var n=e._targets,s,i,o;for(s in t)for(i=n.length;i--;)o=e._ptLookup[i][s],o&&(o=o.d)&&(o._pt&&(o=Mx(o,s)),o&&o.modifier&&o.modifier(t[s],e,n[i],s))},ja=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,i,o){o._onInit=function(l){var c,u;if(Pe(i)&&(c={},Ye(i,function(h){return c[h]=1}),i=c),t){c={};for(u in i)c[u]=t(i[u]);i=c}Nx(l,i)}}}},et=Io.registerPlugin({name:"attr",init:function(e,t,n,s,i){var o,l,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",l=this.add(e,"setAttribute",(c||0)+"",t[o],s,i,0,0,o),l.op=o,l.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ve?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ja("roundProps",Il),ja("modifiers"),ja("snap",Rm))||Io;we.version=qe.version=et.version="3.14.2";fm=1;Ac()&&Jr();J.Power0;J.Power1;J.Power2;J.Power3;J.Power4;J.Linear;J.Quad;J.Cubic;J.Quart;J.Quint;J.Strong;J.Elastic;J.Back;J.SteppedEase;J.Bounce;J.Sine;J.Expo;J.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ed,_n,Nr,Fc,tr,Id,Uc,Lx=function(){return typeof window<"u"},en={},Xn=180/Math.PI,Lr=Math.PI/180,br=Math.atan2,Ad=1e8,Bc=/([A-Z])/g,Ox=/(left|right|width|margin|padding|x)/i,Fx=/[\s,\(]\S/,kt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ux=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$x=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},jx=function(e,t,n){return e.style[t]=n},Hx=function(e,t,n){return e.style.setProperty(t,n)},qx=function(e,t,n){return e._gsap[t]=n},Gx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Wx=function(e,t,n,s,i){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(i,o)},Kx=function(e,t,n,s,i){var o=e._gsap;o[t]=n,o.renderTransform(i,o)},ue="transform",Ze=ue+"Origin",Qx=function r(e,t){var n=this,s=this.target,i=s.style,o=s._gsap;if(e in en&&i){if(this.tfm=this.tfm||{},e!=="transform")e=kt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=jt(s,l)}):this.tfm[e]=o.x?o[e]:jt(s,e),e===Ze&&(this.tfm.zOrigin=o.zOrigin);else return kt.transform.split(",").forEach(function(l){return r.call(n,l,t)});if(this.props.indexOf(ue)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Ze,t,"")),e=ue}(i||t)&&this.props.push(e,t,i[e])},Ym=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Jx=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,i,o;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)==="--"?e[i]:e[i].replace(Bc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),i=Uc(),(!i||!i.isStart)&&!n[ue]&&(Ym(n),s.zOrigin&&n[Ze]&&(n[Ze]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Xm=function(e,t){var n={target:e,props:[],revert:Jx,save:Qx};return e._gsap||et.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},Zm,Cl=function(e,t){var n=_n.createElementNS?_n.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_n.createElement(e);return n&&n.style?n:_n.createElement(e)},lt=function r(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Bc,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&r(e,Yr(t)||t,1)||""},Sd="O,Moz,ms,Ms,Webkit".split(","),Yr=function(e,t,n){var s=t||tr,i=s.style,o=5;if(e in i&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Sd[o]+e in i););return o<0?null:(o===3?"ms":o>=0?Sd[o]:"")+e},Pl=function(){Lx()&&window.document&&(Ed=window,_n=Ed.document,Nr=_n.documentElement,tr=Cl("div")||{style:{}},Cl("div"),ue=Yr(ue),Ze=ue+"Origin",tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zm=!!Yr("perspective"),Uc=et.core.reverting,Fc=1)},Rd=function(e){var t=e.ownerSVGElement,n=Cl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),i;s.style.display="block",n.appendChild(s),Nr.appendChild(n);try{i=s.getBBox()}catch{}return n.removeChild(s),Nr.removeChild(n),i},Cd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},eg=function(e){var t,n;try{t=e.getBBox()}catch{t=Rd(e),n=1}return t&&(t.width||t.height)||n||(t=Rd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Cd(e,["x","cx","x1"])||0,y:+Cd(e,["y","cy","y1"])||0,width:0,height:0}:t},tg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&eg(e))},Nn=function(e,t){if(t){var n=e.style,s;t in en&&t!==Ze&&(t=ue),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(Bc,"-$1").toLowerCase())):n.removeAttribute(t)}},yn=function(e,t,n,s,i,o){var l=new Xe(e._pt,t,n,0,1,o?Jm:Qm);return e._pt=l,l.b=s,l.e=i,e._props.push(n),l},Pd={deg:1,rad:1,turn:1},Yx={grid:1,flex:1},Ln=function r(e,t,n,s){var i=parseFloat(n)||0,o=(n+"").trim().substr((i+"").length)||"px",l=tr.style,c=Ox.test(t),u=e.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(c?"Width":"Height"),p=100,m=s==="px",w=s==="%",x,_,E,P;if(s===o||!i||Pd[s]||Pd[o])return i;if(o!=="px"&&!m&&(i=r(e,t,n,"px")),P=e.getCTM&&tg(e),(w||o==="%")&&(en[t]||~t.indexOf("adius")))return x=P?e.getBBox()[c?"width":"height"]:e[h],ge(w?i/x*p:i/100*x);if(l[c?"width":"height"]=p+(m?o:s),_=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!u?e:e.parentNode,P&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_n||!_.appendChild)&&(_=_n.body),E=_._gsap,E&&w&&E.width&&c&&E.time===it.time&&!E.uncache)return ge(i/E.width*p);if(w&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=p+s,x=e[h],R?e.style[t]=R:Nn(e,t)}else(w||o==="%")&&!Yx[lt(_,"display")]&&(l.position=lt(e,"position")),_===e&&(l.position="static"),_.appendChild(tr),x=tr[h],_.removeChild(tr),l.position="absolute";return c&&w&&(E=ir(_),E.time=it.time,E.width=_[h]),ge(m?x*i/p:x&&i?p/x*i:0)},jt=function(e,t,n,s){var i;return Fc||Pl(),t in kt&&t!=="transform"&&(t=kt[t],~t.indexOf(",")&&(t=t.split(",")[0])),en[t]&&t!=="transform"?(i=ii(e,s),i=t!=="transformOrigin"?i[t]:i.svg?i.origin:So(lt(e,Ze))+" "+i.zOrigin+"px"):(i=e.style[t],(!i||i==="auto"||s||~(i+"").indexOf("calc("))&&(i=Ao[t]&&Ao[t](e,t,n)||lt(e,t)||_m(e,t)||(t==="opacity"?1:0))),n&&!~(i+"").trim().indexOf(" ")?Ln(e,t,i,n)+n:i},Xx=function(e,t,n,s){if(!n||n==="none"){var i=Yr(t,e,1),o=i&&lt(e,i,1);o&&o!==n?(t=i,n=o):t==="borderColor"&&(n=lt(e,"borderTopColor"))}var l=new Xe(this._pt,e.style,t,0,1,Gm),c=0,u=0,h,p,m,w,x,_,E,P,R,k,V,M;if(l.b=n,l.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=lt(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=e.style[t],e.style[t]=s,s=lt(e,t)||s,_?e.style[t]=_:Nn(e,t)),h=[n,s],Lm(h),n=h[0],s=h[1],m=n.match(Sr)||[],M=s.match(Sr)||[],M.length){for(;p=Sr.exec(s);)E=p[0],R=s.substring(c,p.index),x?x=(x+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(x=1),E!==(_=m[u++]||"")&&(w=parseFloat(_)||0,V=_.substr((w+"").length),E.charAt(1)==="="&&(E=Mr(w,E)+V),P=parseFloat(E),k=E.substr((P+"").length),c=Sr.lastIndex-k.length,k||(k=k||ct.units[t]||V,c===s.length&&(s+=k,l.e+=k)),V!==k&&(w=Ln(e,t,_,k)||0),l._pt={_next:l._pt,p:R||u===1?R:",",s:w,c:P-w,m:x&&x<4||t==="zIndex"?Math.round:0});l.c=c<s.length?s.substring(c,s.length):""}else l.r=t==="display"&&s==="none"?Jm:Qm;return dm.test(s)&&(l.e=0),this._pt=l,l},kd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zx=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=kd[n]||n,t[1]=kd[s]||s,t.join(" ")},e2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,i=t.u,o=n._gsap,l,c,u;if(i==="all"||i===!0)s.cssText="",c=1;else for(i=i.split(","),u=i.length;--u>-1;)l=i[u],en[l]&&(c=1,l=l==="transformOrigin"?Ze:ue),Nn(n,l);c&&(Nn(n,ue),o&&(o.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ii(n,1),o.uncache=1,Ym(s)))}},Ao={clearProps:function(e,t,n,s,i){if(i.data!=="isFromStart"){var o=e._pt=new Xe(e._pt,t,n,0,0,e2);return o.u=s,o.pr=-10,o.tween=i,e._props.push(n),1}}},si=[1,0,0,1,0,0],ng={},rg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Dd=function(e){var t=lt(e,ue);return rg(t)?si:t.substr(7).match(hm).map(ge)},zc=function(e,t){var n=e._gsap||ir(e),s=e.style,i=Dd(e),o,l,c,u;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,i=[c.a,c.b,c.c,c.d,c.e,c.f],i.join(",")==="1,0,0,1,0,0"?si:i):(i===si&&!e.offsetParent&&e!==Nr&&!n.svg&&(c=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,l=e.nextElementSibling,Nr.appendChild(e)),i=Dd(e),c?s.display=c:Nn(e,"display"),u&&(l?o.insertBefore(e,l):o?o.appendChild(e):Nr.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},kl=function(e,t,n,s,i,o){var l=e._gsap,c=i||zc(e,!0),u=l.xOrigin||0,h=l.yOrigin||0,p=l.xOffset||0,m=l.yOffset||0,w=c[0],x=c[1],_=c[2],E=c[3],P=c[4],R=c[5],k=t.split(" "),V=parseFloat(k[0])||0,M=parseFloat(k[1])||0,O,b,v,y;n?c!==si&&(b=w*E-x*_)&&(v=V*(E/b)+M*(-_/b)+(_*R-E*P)/b,y=V*(-x/b)+M*(w/b)-(w*R-x*P)/b,V=v,M=y):(O=eg(e),V=O.x+(~k[0].indexOf("%")?V/100*O.width:V),M=O.y+(~(k[1]||k[0]).indexOf("%")?M/100*O.height:M)),s||s!==!1&&l.smooth?(P=V-u,R=M-h,l.xOffset=p+(P*w+R*_)-P,l.yOffset=m+(P*x+R*E)-R):l.xOffset=l.yOffset=0,l.xOrigin=V,l.yOrigin=M,l.smooth=!!s,l.origin=t,l.originIsAbsolute=!!n,e.style[Ze]="0px 0px",o&&(yn(o,l,"xOrigin",u,V),yn(o,l,"yOrigin",h,M),yn(o,l,"xOffset",p,l.xOffset),yn(o,l,"yOffset",m,l.yOffset)),e.setAttribute("data-svg-origin",V+" "+M)},ii=function(e,t){var n=e._gsap||new Bm(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,i=n.scaleX<0,o="px",l="deg",c=getComputedStyle(e),u=lt(e,Ze)||"0",h,p,m,w,x,_,E,P,R,k,V,M,O,b,v,y,I,A,S,T,X,re,de,ye,Me,Ft,Bn,rn,Et,us,We,gt;return h=p=m=_=E=P=R=k=V=0,w=x=1,n.svg=!!(e.getCTM&&tg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(s[ue]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ue]!=="none"?c[ue]:"")),s.scale=s.rotate=s.translate="none"),b=zc(e,n.svg),n.svg&&(n.uncache?(Me=e.getBBox(),u=n.xOrigin-Me.x+"px "+(n.yOrigin-Me.y)+"px",ye=""):ye=!t&&e.getAttribute("data-svg-origin"),kl(e,ye||u,!!ye||n.originIsAbsolute,n.smooth!==!1,b)),M=n.xOrigin||0,O=n.yOrigin||0,b!==si&&(A=b[0],S=b[1],T=b[2],X=b[3],h=re=b[4],p=de=b[5],b.length===6?(w=Math.sqrt(A*A+S*S),x=Math.sqrt(X*X+T*T),_=A||S?br(S,A)*Xn:0,R=T||X?br(T,X)*Xn+_:0,R&&(x*=Math.abs(Math.cos(R*Lr))),n.svg&&(h-=M-(M*A+O*T),p-=O-(M*S+O*X))):(gt=b[6],us=b[7],Bn=b[8],rn=b[9],Et=b[10],We=b[11],h=b[12],p=b[13],m=b[14],v=br(gt,Et),E=v*Xn,v&&(y=Math.cos(-v),I=Math.sin(-v),ye=re*y+Bn*I,Me=de*y+rn*I,Ft=gt*y+Et*I,Bn=re*-I+Bn*y,rn=de*-I+rn*y,Et=gt*-I+Et*y,We=us*-I+We*y,re=ye,de=Me,gt=Ft),v=br(-T,Et),P=v*Xn,v&&(y=Math.cos(-v),I=Math.sin(-v),ye=A*y-Bn*I,Me=S*y-rn*I,Ft=T*y-Et*I,We=X*I+We*y,A=ye,S=Me,T=Ft),v=br(S,A),_=v*Xn,v&&(y=Math.cos(v),I=Math.sin(v),ye=A*y+S*I,Me=re*y+de*I,S=S*y-A*I,de=de*y-re*I,A=ye,re=Me),E&&Math.abs(E)+Math.abs(_)>359.9&&(E=_=0,P=180-P),w=ge(Math.sqrt(A*A+S*S+T*T)),x=ge(Math.sqrt(de*de+gt*gt)),v=br(re,de),R=Math.abs(v)>2e-4?v*Xn:0,V=We?1/(We<0?-We:We):0),n.svg&&(ye=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rg(lt(e,ue)),ye&&e.setAttribute("transform",ye))),Math.abs(R)>90&&Math.abs(R)<270&&(i?(w*=-1,R+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=p-((n.yPercent=p&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=m+o,n.scaleX=ge(w),n.scaleY=ge(x),n.rotation=ge(_)+l,n.rotationX=ge(E)+l,n.rotationY=ge(P)+l,n.skewX=R+l,n.skewY=k+l,n.transformPerspective=V+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(s[Ze]=So(u)),n.xOffset=n.yOffset=0,n.force3D=ct.force3D,n.renderTransform=n.svg?n2:Zm?sg:t2,n.uncache=0,n},So=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ha=function(e,t,n){var s=Be(t);return ge(parseFloat(t)+parseFloat(Ln(e,"x",n+"px",s)))+s},t2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sg(e,t)},Gn="0deg",Ss="0px",Wn=") ",sg=function(e,t){var n=t||this,s=n.xPercent,i=n.yPercent,o=n.x,l=n.y,c=n.z,u=n.rotation,h=n.rotationY,p=n.rotationX,m=n.skewX,w=n.skewY,x=n.scaleX,_=n.scaleY,E=n.transformPerspective,P=n.force3D,R=n.target,k=n.zOrigin,V="",M=P==="auto"&&e&&e!==1||P===!0;if(k&&(p!==Gn||h!==Gn)){var O=parseFloat(h)*Lr,b=Math.sin(O),v=Math.cos(O),y;O=parseFloat(p)*Lr,y=Math.cos(O),o=Ha(R,o,b*y*-k),l=Ha(R,l,-Math.sin(O)*-k),c=Ha(R,c,v*y*-k+k)}E!==Ss&&(V+="perspective("+E+Wn),(s||i)&&(V+="translate("+s+"%, "+i+"%) "),(M||o!==Ss||l!==Ss||c!==Ss)&&(V+=c!==Ss||M?"translate3d("+o+", "+l+", "+c+") ":"translate("+o+", "+l+Wn),u!==Gn&&(V+="rotate("+u+Wn),h!==Gn&&(V+="rotateY("+h+Wn),p!==Gn&&(V+="rotateX("+p+Wn),(m!==Gn||w!==Gn)&&(V+="skew("+m+", "+w+Wn),(x!==1||_!==1)&&(V+="scale("+x+", "+_+Wn),R.style[ue]=V||"translate(0, 0)"},n2=function(e,t){var n=t||this,s=n.xPercent,i=n.yPercent,o=n.x,l=n.y,c=n.rotation,u=n.skewX,h=n.skewY,p=n.scaleX,m=n.scaleY,w=n.target,x=n.xOrigin,_=n.yOrigin,E=n.xOffset,P=n.yOffset,R=n.forceCSS,k=parseFloat(o),V=parseFloat(l),M,O,b,v,y;c=parseFloat(c),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,c+=h),c||u?(c*=Lr,u*=Lr,M=Math.cos(c)*p,O=Math.sin(c)*p,b=Math.sin(c-u)*-m,v=Math.cos(c-u)*m,u&&(h*=Lr,y=Math.tan(u-h),y=Math.sqrt(1+y*y),b*=y,v*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),M*=y,O*=y)),M=ge(M),O=ge(O),b=ge(b),v=ge(v)):(M=p,v=m,O=b=0),(k&&!~(o+"").indexOf("px")||V&&!~(l+"").indexOf("px"))&&(k=Ln(w,"x",o,"px"),V=Ln(w,"y",l,"px")),(x||_||E||P)&&(k=ge(k+x-(x*M+_*b)+E),V=ge(V+_-(x*O+_*v)+P)),(s||i)&&(y=w.getBBox(),k=ge(k+s/100*y.width),V=ge(V+i/100*y.height)),y="matrix("+M+","+O+","+b+","+v+","+k+","+V+")",w.setAttribute("transform",y),R&&(w.style[ue]=y)},r2=function(e,t,n,s,i){var o=360,l=Pe(i),c=parseFloat(i)*(l&&~i.indexOf("rad")?Xn:1),u=c-s,h=s+u+"deg",p,m;return l&&(p=i.split("_")[1],p==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),p==="cw"&&u<0?u=(u+o*Ad)%o-~~(u/o)*o:p==="ccw"&&u>0&&(u=(u-o*Ad)%o-~~(u/o)*o)),e._pt=m=new Xe(e._pt,t,n,s,u,Ux),m.e=h,m.u="deg",e._props.push(n),m},Vd=function(e,t){for(var n in t)e[n]=t[n];return e},s2=function(e,t,n){var s=Vd({},n._gsap),i="perspective,force3D,transformOrigin,svgOrigin",o=n.style,l,c,u,h,p,m,w,x;s.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[ue]=t,l=ii(n,1),Nn(n,ue),n.setAttribute("transform",u)):(u=getComputedStyle(n)[ue],o[ue]=t,l=ii(n,1),o[ue]=u);for(c in en)u=s[c],h=l[c],u!==h&&i.indexOf(c)<0&&(w=Be(u),x=Be(h),p=w!==x?Ln(n,c,u,x):parseFloat(u),m=parseFloat(h),e._pt=new Xe(e._pt,l,c,p,m-p,Rl),e._pt.u=x||0,e._props.push(c));Vd(l,s)};Ye("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",s="Bottom",i="Left",o=(e<3?[t,n,s,i]:[t+i,t+n,s+n,s+i]).map(function(l){return e<2?r+l:"border"+l+r});Ao[e>1?"border"+r:r]=function(l,c,u,h,p){var m,w;if(arguments.length<4)return m=o.map(function(x){return jt(l,x,u)}),w=m.join(" "),w.split(m[0]).length===5?m[0]:w;m=(h+"").split(" "),w={},o.forEach(function(x,_){return w[x]=m[_]=m[_]||m[(_-1)/2|0]}),l.init(c,w,p)}});var ig={name:"css",register:Pl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,i){var o=this._props,l=e.style,c=n.vars.startAt,u,h,p,m,w,x,_,E,P,R,k,V,M,O,b,v,y;Fc||Pl(),this.styles=this.styles||Xm(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(nt[_]&&zm(_,t,n,s,e,i)))){if(w=typeof h,x=Ao[_],w==="function"&&(h=h.call(n,s,e,i),w=typeof h),w==="string"&&~h.indexOf("random(")&&(h=ti(h)),x)x(this,e,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",In.lastIndex=0,In.test(u)||(E=Be(u),P=Be(h),P?E!==P&&(u=Ln(e,_,u,P)+P):E&&(h+=E)),this.add(l,"setProperty",u,h,s,i,0,0,_),o.push(_),v.push(_,0,l[_]);else if(w!=="undefined"){if(c&&_ in c?(u=typeof c[_]=="function"?c[_].call(n,s,e,i):c[_],Pe(u)&&~u.indexOf("random(")&&(u=ti(u)),Be(u+"")||u==="auto"||(u+=ct.units[_]||Be(jt(e,_))||""),(u+"").charAt(1)==="="&&(u=jt(e,_))):u=jt(e,_),m=parseFloat(u),R=w==="string"&&h.charAt(1)==="="&&h.substr(0,2),R&&(h=h.substr(2)),p=parseFloat(h),_ in kt&&(_==="autoAlpha"&&(m===1&&jt(e,"visibility")==="hidden"&&p&&(m=0),v.push("visibility",0,l.visibility),yn(this,l,"visibility",m?"inherit":"hidden",p?"inherit":"hidden",!p)),_!=="scale"&&_!=="transform"&&(_=kt[_],~_.indexOf(",")&&(_=_.split(",")[0]))),k=_ in en,k){if(this.styles.save(_),y=h,w==="string"&&h.substring(0,6)==="var(--"){if(h=lt(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=h,h=lt(e,"perspective"),I?e.style.perspective=I:Nn(e,"perspective")}p=parseFloat(h)}if(V||(M=e._gsap,M.renderTransform&&!t.parseTransform||ii(e,t.parseTransform),O=t.smoothOrigin!==!1&&M.smooth,V=this._pt=new Xe(this._pt,l,ue,0,1,M.renderTransform,M,0,-1),V.dep=1),_==="scale")this._pt=new Xe(this._pt,M,"scaleY",M.scaleY,(R?Mr(M.scaleY,R+p):p)-M.scaleY||0,Rl),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(Ze,0,l[Ze]),h=Zx(h),M.svg?kl(e,h,0,O,0,this):(P=parseFloat(h.split(" ")[2])||0,P!==M.zOrigin&&yn(this,M,"zOrigin",M.zOrigin,P),yn(this,l,_,So(u),So(h)));continue}else if(_==="svgOrigin"){kl(e,h,1,O,0,this);continue}else if(_ in ng){r2(this,M,_,m,R?Mr(m,R+h):h);continue}else if(_==="smoothOrigin"){yn(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){s2(this,h,e);continue}}else _ in l||(_=Yr(_)||_);if(k||(p||p===0)&&(m||m===0)&&!Fx.test(h)&&_ in l)E=(u+"").substr((m+"").length),p||(p=0),P=Be(h)||(_ in ct.units?ct.units[_]:E),E!==P&&(m=Ln(e,_,u,P)),this._pt=new Xe(this._pt,k?M:l,_,m,(R?Mr(m,R+p):p)-m,!k&&(P==="px"||_==="zIndex")&&t.autoRound!==!1?$x:Rl),this._pt.u=P||0,k&&y!==h?(this._pt.b=u,this._pt.e=y,this._pt.r=zx):E!==P&&P!=="%"&&(this._pt.b=u,this._pt.r=Bx);else if(_ in l)Xx.call(this,e,_,u,R?R+h:h);else if(_ in e)this.add(e,_,u||e[_],R?R+h:h,s,i);else if(_!=="parseTransform"){Rc(_,h);continue}k||(_ in l?v.push(_,0,l[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,u||e[_])),o.push(_)}}b&&Wm(this)},render:function(e,t){if(t.tween._time||!Uc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:jt,aliases:kt,getSetter:function(e,t,n){var s=kt[t];return s&&s.indexOf(",")<0&&(t=s),t in en&&t!==Ze&&(e._gsap.x||jt(e,"x"))?n&&Id===n?t==="scale"?Gx:qx:(Id=n||{})&&(t==="scale"?Wx:Kx):e.style&&!Ic(e.style[t])?jx:~t.indexOf("-")?Hx:Lc(e,t)},core:{_removeProperty:Nn,_getMatrix:zc}};et.utils.checkPrefix=Yr;et.core.getStyleSaver=Xm;(function(r,e,t,n){var s=Ye(r+","+e+","+t,function(i){en[i]=1});Ye(e,function(i){ct.units[i]="deg",ng[i]=1}),kt[s[13]]=r+","+e,Ye(n,function(i){var o=i.split(":");kt[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ct.units[r]="px"});et.registerPlugin(ig);var _e=et.registerPlugin(ig)||et;_e.core.Tween;const i2=()=>`
    <div class="min-h-screen w-full flex items-center justify-center relative bg-main-bg overflow-hidden animate-fade-in">
      <div id="loginCard" class="relative z-10 w-full max-w-sm p-8 bg-card-bg rounded-xl border border-border-subtle subtle-shadow transform opacity-0 translate-y-4">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-white font-bold mb-4">K</div>
          <h2 class="text-2xl font-bold font-space text-text-main mb-1">Welcome Back</h2>
          <p class="text-text-muted text-xs">Login to access your workspace</p>
        </div>

        <form id="loginForm" class="space-y-5">
          <div class="space-y-1">
            <label class="text-[10px] uppercase tracking-widest text-text-muted font-bold">Email</label>
            <div class="relative">
              <i class="ph-at text-text-muted absolute left-3 top-3 text-base"></i>
              <input type="email" id="email" required class="w-full bg-main-bg border border-border-subtle rounded-lg py-2.5 pl-9 pr-4 focus:outline-none focus:border-accent transition-all text-text-main placeholder-text-muted text-sm" placeholder="user@example.com">
            </div>
          </div>
          
          <div class="space-y-1">
            <label class="text-[10px] uppercase tracking-widest text-text-muted font-bold">Password</label>
            <div class="relative">
              <i class="ph-lock-key text-text-muted absolute left-3 top-3 text-base"></i>
              <input type="password" id="password" required class="w-full bg-main-bg border border-border-subtle rounded-lg py-2.5 pl-9 pr-4 focus:outline-none focus:border-accent transition-all text-text-main placeholder-text-muted text-sm" placeholder="••••••••">
            </div>
          </div>

          <button type="submit" class="w-full py-2.5 rounded-lg bg-accent text-white font-bold font-space text-sm tracking-wide hover:bg-accent-hover transform hover:-translate-y-0.5 transition-all duration-200">
            Sign In
          </button>
        </form>

        <div class="mt-6 flex items-center justify-between gap-4">
           <hr class="flex-1 border-border-subtle">
           <span class="text-[10px] text-text-muted">OR</span>
           <hr class="flex-1 border-border-subtle">
        </div>

        <div class="mt-5 flex gap-3">
          <button class="flex-1 py-2 rounded-lg border border-border-subtle hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-text-muted hover:text-text-main text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,206.84,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path></svg> Google
          </button>
          <button class="flex-1 py-2 rounded-lg border border-border-subtle hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-text-muted hover:text-text-main text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,194,24a59.75,59.75,0,0,0-49,24H112A59.75,59.75,0,0,0,62,24a8,8,0,0,0-8.85,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v12a56.06,56.06,0,0,0,48.44,55.49A32,32,0,0,0,96,192v32H64a24,24,0,0,1-24-24V188.5a12.35,12.35,0,0,0-3.14-8.31l-10-10.91A8,8,0,0,0,10.15,177.3l29.17,14.59A12,12,0,0,1,45,200v20a24,24,0,0,1,24,24h58.33A2.68,2.68,0,0,0,128,244h0a2.68,2.68,0,0,0,.67,0H160a24,24,0,0,1,24-24V192a32,32,0,0,0-8.44-20.51A56.06,56.06,0,0,0,224,116V104A58.14,58.14,0,0,0,208.31,75.68ZM208,116a40,40,0,0,1-40,40H88a40,40,0,0,1-40-40V104a42,42,0,0,1,6-21.35,8,8,0,0,0-.92-8.5,44,44,0,0,1-5.35-26.65c.57-2.35,1.44-4.87,2.5-7.46.33-.82.68-1.63,1-2.42a44,44,0,0,1,23.11,15,8,8,0,0,0,8.81,2.07,43.59,43.59,0,0,1,16.89,0,44.91,44.91,0,0,1,15.68-5.71,8,8,0,0,0,7-6.27,43.49,43.49,0,0,1,18.79,0,8,8,0,0,0,7,6.27,44.91,44.91,0,0,1,15.68,5.71,43.59,43.59,0,0,1,16.89,0,8,8,0,0,0,8.81-2.07,44,44,0,0,1,23.11-15c.35.79.69,1.6,1,2.42,1.06,2.59,1.93,5.11,2.5,7.46a44,44,0,0,1-5.35,26.65,8,8,0,0,0-.92,8.5A42,42,0,0,1,208,104Z"></path></svg> GitHub
          </button>
        </div>

        <p class="mt-8 text-center text-xs text-text-muted">
          New here? <a href="#/register" class="text-accent hover:text-white transition-colors font-bold">Create Account</a>
        </p>
      </div>
    </div>
  `,o2=()=>{_e.to("#loginCard",{opacity:1,y:0,duration:.8,ease:"power3.out"}),document.getElementById("loginForm").addEventListener("submit",async n=>{n.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value;try{await De.login(s,i),_e.to("#loginCard",{scale:.95,opacity:0,duration:.3,onComplete:()=>{window.location.hash="#/dashboard"}})}catch(o){alert(o.message),_e.from("#loginCard",{x:10,duration:.1,repeat:5,yoyo:!0})}});const e=document.querySelector('button:has(svg path[d*="M224"])'),t=document.querySelector('button:has(svg path[d*="M208"])');e&&e.addEventListener("click",async()=>{try{e.classList.add("opacity-50","cursor-not-allowed"),await De.loginWithGoogle(),_e.to("#loginCard",{scale:.95,opacity:0,duration:.3,onComplete:()=>{window.location.hash="#/dashboard"}})}catch{alert("Google Login Failed")}}),t&&t.addEventListener("click",async()=>{try{t.classList.add("opacity-50","cursor-not-allowed"),await De.loginWithGitHub(),_e.to("#loginCard",{scale:.95,opacity:0,duration:.3,onComplete:()=>{window.location.hash="#/dashboard"}})}catch{alert("GitHub Login Failed")}})},a2=()=>`
   <div class="min-h-screen w-full flex items-center justify-center relative bg-main-bg overflow-hidden animate-fade-in">
      <div id="registerCard" class="relative z-10 w-full max-w-sm p-8 bg-card-bg rounded-xl border border-border-subtle subtle-shadow transform opacity-0 translate-y-4">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-white font-bold mb-4">K</div>
          <h2 class="text-2xl font-bold font-space text-text-main mb-1">Create Account</h2>
          <p class="text-text-muted text-xs">Join the workspace</p>
        </div>

        <form id="registerForm" class="space-y-4">
           <div class="space-y-1">
            <label class="text-[10px] uppercase tracking-widest text-text-muted font-bold">Username</label>
            <div class="relative">
              <i class="ph-user text-text-muted absolute left-3 top-3 text-base"></i>
              <input type="text" id="username" required class="w-full bg-main-bg border border-border-subtle rounded-lg py-2.5 pl-9 pr-4 focus:outline-none focus:border-accent transition-all text-text-main placeholder-text-muted text-sm" placeholder="Kenzy123">
            </div>
          </div>

          <div class="space-y-1">
            <label class="text-[10px] uppercase tracking-widest text-text-muted font-bold">Email</label>
            <div class="relative">
              <i class="ph-at text-text-muted absolute left-3 top-3 text-base"></i>
              <input type="email" id="email" required class="w-full bg-main-bg border border-border-subtle rounded-lg py-2.5 pl-9 pr-4 focus:outline-none focus:border-accent transition-all text-text-main placeholder-text-muted text-sm" placeholder="user@example.com">
            </div>
          </div>
          
          <div class="space-y-1">
            <label class="text-[10px] uppercase tracking-widest text-text-muted font-bold">Password</label>
            <div class="relative">
              <i class="ph-lock-key text-text-muted absolute left-3 top-3 text-base"></i>
              <input type="password" id="password" required class="w-full bg-main-bg border border-border-subtle rounded-lg py-2.5 pl-9 pr-4 focus:outline-none focus:border-accent transition-all text-text-main placeholder-text-muted text-sm" placeholder="••••••••">
            </div>
          </div>

          <button type="submit" class="w-full py-2.5 rounded-lg bg-accent text-white font-bold font-space text-sm tracking-wide hover:bg-accent-hover transform hover:-translate-y-0.5 transition-all duration-200">
            Sign Up
          </button>
        </form>

        <p class="mt-8 text-center text-xs text-text-muted">
          Already have an account? <a href="#/login" class="text-accent hover:text-white transition-colors font-bold">Log In</a>
        </p>
      </div>
    </div>
  `,l2=()=>{_e.to("#registerCard",{opacity:1,y:0,duration:.8,ease:"power3.out"}),document.getElementById("registerForm").addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("username").value,n=document.getElementById("email").value,s=document.getElementById("password").value;try{await De.register(t,n,s),await De.login(n,s),_e.to("#registerCard",{scale:.95,opacity:0,duration:.3,onComplete:()=>{window.location.hash="#/"}})}catch(i){alert(i.message),_e.from("#registerCard",{x:10,duration:.1,repeat:5,yoyo:!0})}})},c2=()=>{const r={title:"BROOOO😱",artist:"Spotify Playlist",cover:"https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=200&auto=format&fit=crop",link:"https://open.spotify.com/playlist/3b7vbqeocVdpo1a4KiStIP"};return`
    <div class="flex-1 p-6 md:p-12 overflow-y-auto space-y-16 pb-12">
      <!-- Hero Section -->
      <section class="max-w-4xl pt-10">
         <p class="text-accent font-medium tracking-wide mb-4 text-sm animate-fade-in">HELLO WORLD, I AM</p>
         <h1 class="text-5xl md:text-7xl font-bold font-space text-text-main mb-6 leading-tight animate-slide-up">
           LITTLE KENZY
         </h1>
         <p class="text-xl text-text-muted max-w-2xl leading-relaxed mb-8 animate-slide-up" style="animation-delay: 0.1s;">
           A high-school developer crafting digital experiences. Specializing in <span class="text-white font-medium">Software Engineering</span>.
         </p>
         
         <div class="flex gap-4 reveal-buttons relative z-50 animate-slide-up" style="animation-delay: 0.2s;">
           <a href="#/projects" class="px-6 py-3 bg-white text-black font-medium rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm">
             View Work
           </a>
           <a href="#/contact" class="px-6 py-3 border border-border-subtle text-text-main rounded-lg hover:bg-white/5 transition-all duration-300 text-sm">
             Contact Me
           </a>
         </div>
      </section>

      <!-- About / Skills -->
    <section class="grid md:grid-cols-2 gap-8 items-start">

      <div class="space-y-8">
        <!-- About Me -->
        <div class="bg-card-bg p-8 rounded-xl border border-border-subtle subtle-shadow card-hover">
          <h3 class="text-xl font-bold font-space mb-4 text-text-main">About Me</h3>
          <p class="text-text-muted leading-relaxed mb-4 text-sm">
            I am a student at <strong class="text-white">SMKN 2 BUDURAN</strong> majoring in Software Engineering (RPL).
            I prioritize clean architecture and user-centric design.
          </p>
          <div class="flex gap-2 mt-6">
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-text-muted border border-border-subtle">RPL Student</span>
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-text-muted border border-border-subtle">Web Dev</span>
          </div>
        </div>

        <!-- Spotify Style Widget -->
        <a href="${r.link}" target="_blank" class="block bg-[#121212] p-6 rounded-xl border border-[#282828] subtle-shadow group relative overflow-hidden transition-all duration-300 hover:border-[#1DB954]/50 hover:-translate-y-1 cursor-pointer">
            <!-- Hover Glow -->
            <div class="absolute -inset-1 bg-gradient-to-r from-[#1DB954]/20 to-emerald-900/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            <div class="relative z-10">
                <div class="flex items-center justify-between mb-4">
                     <h3 class="text-[10px] font-bold font-space text-[#1DB954] tracking-widest uppercase flex items-center gap-2">
                        <i class="ph-spotify-logo ph-fill text-lg"></i> Spotify
                     </h3>
                     <div class="flex gap-0.5 h-3 items-end opacity-50">
                         <span class="w-1 bg-[#1DB954] rounded-full h-2 animate-music-bar-1"></span>
                         <span class="w-1 bg-[#1DB954] rounded-full h-3 animate-music-bar-2"></span>
                         <span class="w-1 bg-[#1DB954] rounded-full h-1 animate-music-bar-3"></span>
                     </div>
                </div>
                
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-lg overflow-hidden relative shadow-lg group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/10">
                       <img src="${r.cover}" alt="Album Art" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div>
                       <h4 class="text-white font-bold text-sm leading-tight mb-1 group-hover:text-[#1DB954] transition-colors">${r.title}</h4>
                       <p class="text-xs text-zinc-400">${r.artist}</p>
                    </div>
                    <div class="ml-auto">
                        <div class="w-10 h-10 rounded-full bg-[#1DB954] text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:bg-[#1ed760]">
                            <i class="ph-play ph-fill text-xl ml-0.5"></i>
                        </div>
                    </div>
                </div>

                <!-- Fake Progress Bar -->
                <div class="mt-5 space-y-1.5 group/progress">
                    <div class="h-1 bg-[#282828] rounded-full overflow-hidden w-full">
                       <div class="h-full bg-white/30 group-hover:bg-[#1DB954] w-1/3 rounded-full relative overflow-hidden">
                           <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
                       </div>
                    </div>
                    <div class="flex justify-between text-[10px] text-zinc-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>0:00</span>
                        <span>ON REPEAT</span>
                    </div>
                </div>
            </div>
        </a>
      </div>

      <div id="tech-stack" class="bg-card-bg p-8 rounded-xl border border-border-subtle subtle-shadow card-hover h-full">
        <h3 class="text-xl font-bold font-space mb-6 text-text-main">Tech Stack</h3>
        <div class="space-y-4">
          ${[{name:"HTML/CSS",level:"90%"},{name:"JavaScript",level:"85%"},{name:"Tailwind CSS",level:"95%"},{name:"React / Vue",level:"70%"},{name:"Node.js",level:"60%"},{name:"Figma",level:"80%"}].map(e=>`
              <div>
                <div class="flex justify-between mb-2">
                  <span class="font-medium text-sm text-text-muted">${e.name}</span>
                  <span class="text-accent text-xs font-bold">${e.level}</span>
                </div>
                <div class="h-1.5 bg-border-subtle rounded-full overflow-hidden">
                  <div class="skill-bar h-full bg-accent w-0" data-width="${e.level}"></div>
                </div>
              </div>
            `).join("")}
        </div>
      </div>
    </section>
    </div>
  `},u2=()=>{const r=new IntersectionObserver(t=>{t.forEach(n=>{if(n.isIntersecting){const s=n.target.querySelectorAll(".skill-bar");_e.to(s,{width:(i,o)=>o.getAttribute("data-width"),duration:1.2,ease:"power2.out",stagger:.1}),r.unobserve(n.target)}})},{threshold:.1}),e=document.getElementById("tech-stack");e&&r.observe(e)},Xr={getProjects(){return[{id:1,title:"Neon E-Commerce",desc:"A futuristic shopping platform with 3D product previews.",tech:["React","Three.js","Tailwind"],image:"https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80"},{id:2,title:"AI Chat Bot",desc:"Intelligent customer service bot using OpenAI API.",tech:["Python","Flask","OpenAI"],image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"},{id:3,title:"Crypto Dashboard",desc:"Real-time cryptocurrency tracking dashboard.",tech:["Vue","D3.js","CoinGecko API"],image:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80"}]},getJourneyTimeline(){return[{year:"2021",title:"The Spark",desc:"Wrote my first line of HTML. It was ugly, but it worked. I was hooked immediately."},{year:"2022",title:"The Logic Hurdle",desc:"Struggled with JavaScript loops and arrays. Almost quit, but pushed through making simple games."},{year:"2023",title:"Modern Discovery",desc:"Moved from Vanilla JS to React & Tailwind. Realized how much faster development could be."},{year:"2024",title:"Full Stack Baby Steps",desc:"Started connecting frontends to backends. Learned about APIs, Auth (like in this project!), and Databases."}]},getJourneyStories(){return[{title:"Why I Code",content:"It allows me to build tools that solve my own problems. The feeling of 'it works!' never gets old."},{title:"Biggest Mistake",content:"Spent 2 weeks building a feature nobody wanted. Learned to ask 'why' before 'how'."},{title:"My Method",content:"I learn by breaking things. Tutorials are okay, but fixing my own bugs teaches me 10x more."},{title:"Next Goal",content:"Deepening my understanding of efficient Backend systems and scalable architecture."}]},getTestimonials(){const r=[{id:1,name:"Sarah Doe",comment:"Amazing developer! Very fast work.",rating:5,reply:"Thank you Sarah! It was a pleasure working with you."},{id:2,name:"John Smith",comment:"The design is outstanding.",rating:4,reply:null}];return JSON.parse(localStorage.getItem("lk_testimonials"))||r},addTestimonial(r,e,t){const n=this.getTestimonials();n.push({id:Date.now(),name:r,comment:e,rating:t,reply:null}),localStorage.setItem("lk_testimonials",JSON.stringify(n))},addReply(r,e){const t=this.getTestimonials(),n=t.find(s=>s.id===r);return n?(n.reply=e,localStorage.setItem("lk_testimonials",JSON.stringify(t)),!0):!1},async fetchGitHubProjects(r="LittleKenzy"){const e=`gh_projects_${r}`,t=36e5,n=localStorage.getItem(e);if(n){const{data:i,timestamp:o}=JSON.parse(n);if(Date.now()-o<t&&i.length>0)return i}let s=[];try{const i=await fetch(`https://api.github.com/users/${r}/repos?sort=updated&direction=desc&type=public`);i.ok?s=(await i.json()).filter(c=>!c.fork).slice(0,9).map(c=>{let u="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";const h=c.topics||[],p=(c.language||"").toLowerCase();return(h.includes("react")||p==="javascript")&&(u="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"),h.includes("vue")&&(u="https://images.unsplash.com/photo-1621504450168-b8c437532b3a?q=80&w=800&auto=format&fit=crop"),(h.includes("python")||h.includes("ai"))&&(u="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"),(h.includes("css")||h.includes("design"))&&(u="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop"),(h.includes("iot")||h.includes("arduino"))&&(u="https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=800&auto=format&fit=crop"),{id:c.id,title:c.name.replace(/-/g," ").replace(/_/g," "),role:"Developer",status:c.archived?"concept":"live",desc:c.description||"No description provided for this project.",image:u,tech:c.topics&&c.topics.length>0?c.topics.slice(0,4):[c.language||"Code"],problem:"Project retrieved from GitHub",solution:"View source code for details.",features:["Auto-synced from GitHub","Latest updates","Open Source"],demoUrl:c.homepage||c.html_url,repoUrl:c.html_url}}):console.warn("GitHub API Rate Limit or Error. Status:",i.status)}catch(i){console.error("GitHub Fetch Error:",i)}return s.length===0?(console.warn("Using Fallback Local Projects"),this.getProjects().map(o=>({...o,role:"Creator",status:"live",problem:"Premium Local Project",solution:"High-quality implementation.",features:["Custom Design","Responsive","Interactive"],demoUrl:"#",repoUrl:"#"}))):(localStorage.setItem(e,JSON.stringify({data:s,timestamp:Date.now()})),s)},getStats(){const r=this.getProjects().length,e=this.getJourneyTimeline().length,t=this.getTestimonials().length;return{projects:r,achievements:e,testimonials:t}}},og=r=>{const e={live:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20","in-progress":"bg-amber-500/10 text-amber-400 border-amber-500/20",concept:"bg-purple-500/10 text-purple-400 border-purple-500/20"},t={live:"Live Demo","in-progress":"In Progress",concept:"Concept"},n={live:'<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 256 256"><path fill="currentColor" d="M232,128a104,104,0,1,1-104-104A104.11,104.11,0,0,1,232,128Zm-24,0a80,80,0,1,0-80,80A80.09,80.09,0,0,0,208,128Zm-51.52-25.13a8,8,0,0,0-13,6.38v37.5a8,8,0,0,0,13,6.38l25.66-18.75a8,8,0,0,0,0-12.76Z"></path></svg>',"in-progress":'<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 animate-spin-slow" viewBox="0 0 256 256"><path fill="currentColor" d="M232,128a104,104,0,0,1-208,0c0-41,23.81-76.33,58.57-92.86a8,8,0,0,1,6.86,14.46C58.62,63.15,40,90.76,40,128a88,88,0,0,0,176,0c0-37.24-18.62-64.85-49.43-78.4a8,8,0,1,1,6.86-14.46C208.19,51.67,232,87,232,128Z"></path></svg>',concept:'<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 256 256"><path fill="currentColor" d="M213.38,97.77a88,88,0,1,0-170.76,0c0,28.66,16.27,53.49,40.19,67.65V184a16,16,0,0,0,16,16h58.38a16,16,0,0,0,16-16v-18.58C197.11,151.26,213.38,126.43,213.38,97.77Zm-48,70.23V184h-74.76v-16h0a88.16,88.16,0,0,0-3.62-52.65,11.39,11.39,0,0,1,4.72-13.91,6.21,6.21,0,0,0,1.86-9.15l-19.12-25.5-12.8,9.6,19.12,25.49a22,22,0,0,1-6.6,32.47,72.2,72.2,0,0,1,114.39-2.3,1.35,1.35,0,0,1,.13.29Z"></path><path fill="currentColor" d="M128,24a8,8,0,0,1,8,8V64a8,8,0,0,1-16,0V32A8,8,0,0,1,128,24Z"></path></svg>'};return`
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border ${e[r]||e.concept}">
      ${n[r]||n.concept}
      ${t[r]||"Project"}
    </span>
  `},h2=r=>{const e=Array.isArray(r.tech)?r.tech:[];return`
    <div class="project-card group relative h-[400px] rounded-2xl overflow-hidden bg-[#121212] border border-white/5 cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
         data-id="${r.id}"
         data-tech="${e.join(",")}">
      
      <!-- BACKGROUND IMAGE -->
      <div class="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
         <img src="${r.image}" alt="${r.title}" class="w-full h-full object-cover group-hover:blur-sm group-hover:brightness-[0.2] transition-all duration-500 opacity-100">
      </div>
      
      <!-- GRADIENT OVERLAY (Only visible on hover) -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500"></div>

      <!-- CONTENT CONTAINER -->
      <div class="absolute inset-0 p-6 flex flex-col justify-end">
         
         <!-- Top Badge -->
         <div class="absolute top-6 right-6 transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            ${og(r.status)}
         </div>

         <!-- Text Content -->
         <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p class="text-accent text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">${r.role}</p>
            <h3 class="text-2xl font-bold font-space text-white mb-2 leading-tight drop-shadow-lg">${r.title}</h3>
            <p class="text-zinc-300 text-sm line-clamp-2 group-hover:text-zinc-200 mb-4 transition-colors drop-shadow-md">${r.desc}</p>
            
            <!-- Tech Stack Chips -->
            <div class="flex flex-wrap gap-2 mb-6">
              ${e.slice(0,3).map(t=>`
                <span class="px-2 py-1 text-[10px] font-mono text-zinc-300 border border-white/20 rounded bg-black/40 backdrop-blur-md">
                  ${t}
                </span>
              `).join("")}
              ${e.length>3?`<span class="px-2 py-1 text-[10px] font-mono text-zinc-500 border border-white/10 rounded bg-white/5">+${e.length-3}</span>`:""}
            </div>

            <!-- Action Buttons (Reveal on Hover) -->
            <div class="grid grid-cols-2 gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
               <button class="action-btn px-4 py-2 bg-white text-black font-bold text-xs rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                 DETAILS
               </button>
               <button class="action-btn px-4 py-2 border border-white/20 text-white font-bold text-xs rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2 stop-propagation" onclick="window.openLink('${r.repoUrl}')">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,194,24a59.75,59.75,0,0,0-49,24H112A59.75,59.75,0,0,0,62,24a8,8,0,0,0-8.85,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v12a56.06,56.06,0,0,0,48.44,55.49A32,32,0,0,0,96,192v32H64a24,24,0,0,1-24-24V188.5a12.35,12.35,0,0,0-3.14-8.31l-10-10.91A8,8,0,0,0,10.15,177.3l29.17,14.59A12,12,0,0,1,45,200v20a24,24,0,0,1,24,24h58.33A2.68,2.68,0,0,0,128,244h0a2.68,2.68,0,0,0,.67,0H160a24,24,0,0,1,24-24V192a32,32,0,0,0-8.44-20.51A56.06,56.06,0,0,0,224,116V104A58.14,58.14,0,0,0,208.31,75.68ZM208,116a40,40,0,0,1-40,40H88a40,40,0,0,1-40-40V104a42,42,0,0,1,6-21.35,8,8,0,0,0-.92-8.5,44,44,0,0,1-5.35-26.65c.57-2.35,1.44-4.87,2.5-7.46.33-.82.68-1.63,1-2.42a44,44,0,0,1,23.11,15,8,8,0,0,0,8.81,2.07,43.59,43.59,0,0,1,16.89,0,44.91,44.91,0,0,1,15.68-5.71,8,8,0,0,0,7-6.27,43.49,43.49,0,0,1,18.79,0,8,8,0,0,0,7,6.27,44.91,44.91,0,0,1,15.68,5.71,43.59,43.59,0,0,1,16.89,0,8,8,0,0,0,8.81-2.07,44,44,0,0,1,23.11-15c.35.79.69,1.6,1,2.42,1.06,2.59,1.93,5.11,2.5,7.46a44,44,0,0,1-5.35,26.65,8,8,0,0,0-.92,8.5A42,42,0,0,1,208,104Z"></path></svg>
                 CODE
               </button>
            </div>
         </div>
      </div>
    </div>
  `},d2=()=>`
    <div class="flex-1 p-6 md:p-12 overflow-y-auto space-y-10 pb-20 relative z-0">
      
      <!-- HEADER SECTION -->
      <div class="max-w-4xl mx-auto text-center space-y-4 pt-8 mb-12 animate-slide-up">
        <h2 class="text-4xl md:text-5xl font-bold font-space text-white">
          Latest <span class="text-accent">Works</span>
        </h2>
        <p class="text-zinc-400 max-w-lg mx-auto leading-relaxed">
          Retrieving my open-source projects directly from GitHub...
        </p>
      </div>

      <!-- FILTER CHIPS CONTAINER -->
      <div id="techFilters" class="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-12 animate-fade-in" style="animation-delay: 0.2s">
         <!-- Loading Skeleton for filters -->
         <div class="h-8 w-20 bg-white/5 rounded-full animate-pulse"></div>
         <div class="h-8 w-24 bg-white/5 rounded-full animate-pulse delay-75"></div>
         <div class="h-8 w-16 bg-white/5 rounded-full animate-pulse delay-100"></div>
      </div>

      <!-- PROJECTS GRID CONTAINER -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto min-h-[400px]" id="projectsGrid">
        <!-- Loading Skeleton for Cards -->
        ${Array(3).fill(0).map(()=>`
            <div class="h-[400px] rounded-2xl bg-white/5 animate-pulse border border-white/5"></div>
        `).join("")}
      </div>

      <!-- PROJECT MODAL (Hidden Initially) -->
      <div id="projectModal" class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4 sm:p-6">
         <!-- Backrop -->
         <div class="absolute inset-0 bg-[#0f0f0f]/90 backdrop-blur-md transition-opacity duration-300 opacity-0" id="modalOverlay"></div>
         
         <!-- Modal Content -->
         <div class="relative w-full max-w-4xl bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] transform scale-95 opacity-0 transition-all duration-300" id="modalContent">
             
             <button id="closeModal" class="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5">
                 <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
               </svg>
             </button>

             <!-- LEFT: Image Preview -->
             <div class="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-white/5">
                <img id="mImage" src="" class="w-full h-full object-cover p-0.5">
                <div class="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-50 md:hidden"></div>
             </div>

             <!-- RIGHT: Details -->
             <div class="w-full md:w-7/12 p-8 overflow-y-auto custom-scrollbar">
                
                <div class="mb-6">
                   <div id="mStatus" class="mb-3"></div>
                   <h2 id="mTitle" class="text-3xl font-bold font-space text-white mb-2 leading-tight"></h2>
                   <p id="mRole" class="text-accent text-sm font-bold uppercase tracking-widest"></p>
                </div>

                <div class="space-y-6">
                   <div>
                      <h4 class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">The Challenge</h4>
                      <p id="mProblem" class="text-zinc-300 text-sm leading-relaxed"></p>
                   </div>
                   
                   <div>
                      <h4 class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">The Solution</h4>
                      <p id="mSolution" class="text-zinc-300 text-sm leading-relaxed"></p>
                   </div>

                   <div>
                      <h4 class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Key Features</h4>
                      <ul id="mFeatures" class="grid grid-cols-1 sm:grid-cols-2 gap-2"></ul>
                   </div>

                   <div>
                      <h4 class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Technologies</h4>
                      <div id="mTech" class="flex flex-wrap gap-2"></div>
                   </div>
                </div>

                <div class="mt-8 pt-6 border-t border-white/10 flex gap-4">
                   <a id="mDemo" href="#" target="_blank" class="flex-1 py-3 bg-white text-black font-bold text-center rounded-lg hover:bg-zinc-200 transition-colors text-sm flex items-center justify-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M232,128a104,104,0,1,1-104-104A104.11,104.11,0,0,1,232,128Zm-24,0a80,80,0,1,0-80,80A80.09,80.09,0,0,0,208,128Zm-51.52-25.13a8,8,0,0,0-13,6.38v37.5a8,8,0,0,0,13,6.38l25.66-18.75a8,8,0,0,0,0-12.76Z"></path></svg> Visit Demo
                   </a>
                   <a id="mRepo" href="#" target="_blank" class="px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-sm flex items-center justify-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,194,24a59.75,59.75,0,0,0-49,24H112A59.75,59.75,0,0,0,62,24a8,8,0,0,0-8.85,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v12a56.06,56.06,0,0,0,48.44,55.49A32,32,0,0,0,96,192v32H64a24,24,0,0,1-24-24V188.5a12.35,12.35,0,0,0-3.14-8.31l-10-10.91A8,8,0,0,0,10.15,177.3l29.17,14.59A12,12,0,0,1,45,200v20a24,24,0,0,1,24,24h58.33A2.68,2.68,0,0,0,128,244h0a2.68,2.68,0,0,0,.67,0H160a24,24,0,0,1,24-24V192a32,32,0,0,0-8.44-20.51A56.06,56.06,0,0,0,224,116V104A58.14,58.14,0,0,0,208.31,75.68ZM208,116a40,40,0,0,1-40,40H88a40,40,0,0,1-40-40V104a42,42,0,0,1,6-21.35,8,8,0,0,0-.92-8.5,44,44,0,0,1-5.35-26.65c.57-2.35,1.44-4.87,2.5-7.46.33-.82.68-1.63,1-2.42a44,44,0,0,1,23.11,15,8,8,0,0,0,8.81,2.07,43.59,43.59,0,0,1,16.89,0,44.91,44.91,0,0,1,15.68-5.71,8,8,0,0,0,7-6.27,43.49,43.49,0,0,1,18.79,0,8,8,0,0,0,7,6.27,44.91,44.91,0,0,1,15.68,5.71,43.59,43.59,0,0,1,16.89,0,8,8,0,0,0,8.81-2.07,44,44,0,0,1,23.11-15c.35.79.69,1.6,1,2.42,1.06,2.59,1.93,5.11,2.5,7.46a44,44,0,0,1-5.35,26.65,8,8,0,0,0-.92,8.5A42,42,0,0,1,208,104Z"></path></svg>
                   </a>
                </div>

             </div>
         </div>
      </div>

    </div>
  `,f2=async()=>{const r="LittleKenzy";let e=[];try{e=await Xr.fetchGitHubProjects(r)}catch(x){console.error(x),document.getElementById("projectsGrid").innerHTML='<p class="text-red-500 text-center col-span-full">Failed to load projects from GitHub.</p>';return}if(e.length===0){document.getElementById("projectsGrid").innerHTML='<p class="text-zinc-500 text-center col-span-full">No projects found.</p>';return}const t=document.getElementById("projectsGrid");t.innerHTML=e.map(x=>h2(x)).join("");const n=[...new Set(e.flatMap(x=>x.tech))].sort(),s=document.getElementById("techFilters");s.innerHTML=`
         <button class="filter-chip active px-4 py-2 rounded-full border border-accent bg-accent/10 text-accent text-xs font-bold transition-all hover:bg-accent hover:text-white" data-filter="all">ALL</button>
         ${n.map(x=>`
           <button class="filter-chip px-4 py-2 rounded-full border border-white/10 text-zinc-500 bg-white/5 text-xs font-bold transition-all hover:border-accent hover:text-accent" data-filter="${x}">${x}</button>
         `).join("")}
    `,_e.from(".project-card",{y:50,duration:.8,stagger:.1,ease:"power3.out"});const i=document.querySelectorAll(".filter-chip"),o=document.querySelectorAll(".project-card");i.forEach(x=>{x.addEventListener("click",()=>{i.forEach(E=>{E.classList.remove("active","border-accent","bg-accent/10","text-accent"),E.classList.add("border-white/10","text-zinc-500","bg-white/5")}),x.classList.add("active","border-accent","bg-accent/10","text-accent"),x.classList.remove("border-white/10","text-zinc-500","bg-white/5");const _=x.dataset.filter;o.forEach(E=>{const R=E.dataset.tech.split(",");_==="all"||R.some(V=>V.toLowerCase()===_.toLowerCase())?(E.classList.remove("hidden"),_e.to(E,{opacity:1,scale:1,duration:.4,display:"block"})):_e.to(E,{opacity:0,scale:.9,duration:.3,onComplete:()=>{E.classList.add("hidden")}})})})});const l=document.getElementById("projectModal"),c=document.getElementById("modalOverlay"),u=document.getElementById("modalContent"),h=document.getElementById("closeModal");window.openLink=x=>{window.open(x,"_blank")},t.addEventListener("click",x=>{if(x.target.closest(".stop-propagation"))return;const _=x.target.closest(".project-card");if(!_)return;const E=parseInt(_.dataset.id),P=e.find(R=>R.id===E);P&&(w(P),m())});const p=()=>{c.classList.remove("opacity-100"),u.classList.remove("scale-100","opacity-100"),u.classList.add("scale-95","opacity-0"),setTimeout(()=>{l.classList.add("hidden")},300)};h.addEventListener("click",p),c.addEventListener("click",p),document.addEventListener("keydown",x=>{x.key==="Escape"&&!l.classList.contains("hidden")&&p()});const m=()=>{l.classList.remove("hidden"),l.offsetWidth,c.classList.add("opacity-100"),u.classList.remove("scale-95","opacity-0"),u.classList.add("scale-100","opacity-100")},w=x=>{document.getElementById("mImage").src=x.image,document.getElementById("mTitle").textContent=x.title,document.getElementById("mRole").textContent=x.role,document.getElementById("mProblem").textContent=x.problem||"Information retrieved from GitHub repository.",document.getElementById("mSolution").textContent=x.solution||"Explore the source code to understand the implementation.",document.getElementById("mDemo").href=x.demoUrl||"#",document.getElementById("mRepo").href=x.repoUrl,document.getElementById("mStatus").innerHTML=og(x.status),document.getElementById("mFeatures").innerHTML=(x.features||["GitHub Integration","Open Source"]).map(_=>`
         <li class="flex items-start gap-2 text-xs text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-accent mt-0.5" viewBox="0 0 256 256"><path fill="currentColor" d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg> ${_}
         </li>
      `).join(""),document.getElementById("mTech").innerHTML=x.tech.map(_=>`
         <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300 font-mono">
           ${_}
         </span>
      `).join("")}},p2=()=>{const r=De.getUser(),e=(r==null?void 0:r.username)||"Guest",t="tilt-card bg-zinc-900 border border-zinc-700/50 p-6 rounded-2xl relative group transition-all duration-300 preserve-3d overflow-visible opacity-0";return`
    <div id="dashboard-container" class="flex-1 p-6 md:p-12 overflow-y-auto animate-fade-in pb-10 perspective-[2000px]">
      
      <!-- MAIN GRID CONTAINER -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- 1. HERO CARD -->
        <div class="${t} col-span-1 md:col-span-2 min-h-[180px] flex flex-col justify-center">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl -z-10"></div>
          
          <div class="flex items-center gap-6 transform-style-3d z-10">
            <div class="relative w-24 h-24 shrink-0 transform-style-3d group-hover:translate-z-10 transition-transform duration-300">
               <img src="${(r==null?void 0:r.avatar)||"https://ui-avatars.com/api/?name="+e}" class="w-full h-full rounded-2xl object-cover shadow-2xl border-2 border-zinc-600">
               <div class="absolute -bottom-2 -right-2 bg-zinc-800 p-2 rounded-xl border border-zinc-600 shadow-xl">
                  <i class="ph-code-fill text-2xl text-accent"></i>
               </div>
            </div>
            <div class="space-y-2 transform-style-3d group-hover:translate-z-5 transition-transform duration-300">
               <div class="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/20 rounded-lg text-[11px] font-bold text-indigo-400 uppercase tracking-wide">
                 <i class="ph-student"></i> RPL Student
               </div>
               <h1 class="text-3xl font-bold font-space text-white leading-none">
                 Hello, <span class="text-indigo-400">${e}</span>
               </h1>
               <p class="text-sm text-zinc-400 max-w-sm leading-relaxed">
                 Welcome back! Ready to craft some modern digital experiences?
               </p>
            </div>
          </div>
        </div>

        <!-- 2. TECH STACK -->
        <div class="${t} col-span-1 md:col-span-2 min-h-[180px] flex flex-col justify-center">
           <div class="absolute top-0 right-0 p-32 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none -z-10"></div>
           
           <div class="flex items-center justify-between mb-5 transform-style-3d group-hover:translate-z-4 transition-transform">
             <h3 class="text-sm font-bold font-space text-white flex items-center gap-2">
               <i class="ph-stack text-indigo-400 text-lg"></i> Tech Stack
             </h3>
             <span class="text-[10px] font-mono text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700">Favorite Tools</span>
           </div>
           
           <div class="flex flex-wrap gap-3 transform-style-3d group-hover:translate-z-8 transition-transform duration-300">
              ${dn("HTML5",'<path d="M4.5,22.09l-2.4-19.66h19.56l-2.39,19.65L11.89,24Z M18.42,5.17H5.32l1.6,13.11l4.98,1.38l4.97-1.38L17.77,10.2H8.38l-0.34-2.8h10.04L18.42,5.17Z"/>',"fill-orange-500")}
              ${dn("CSS3",'<path d="M4.5,22.09l-2.4-19.66h19.56l-2.39,19.65L11.89,24Z M18.42,5.17H5.32l1.6,13.11l4.98,1.38l4.97-1.38l0.55-5.5h-2.82l-0.23,2.37l-2.48,0.67l-2.47-0.67L8.98,12h6.24l0.36-3.6H8.62l-0.29-2.88h10.04l0.05-0.35"/>',"fill-blue-500")}
              ${dn("JS",'<path d="M3,3h18v18H3V3z M16.5,16.5v-4h-1.5v4H16.5z M12.5,12.5v4h-1.5v-2.5h-1v-1.5H12.5z"/>',"fill-yellow-400")}
              ${dn("React",'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="7" ry="2.5" transform="rotate(25, 12, 12)" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="12" cy="12" rx="7" ry="2.5" transform="rotate(-25, 12, 12)" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="12" cy="12" rx="7" ry="2.5" transform="rotate(90, 12, 12)" stroke="currentColor" stroke-width="1.5" fill="none"/>',"text-cyan-400")}
              ${dn("Node",'<path d="M12,2L3.3,7v10L12,22l8.7-5V7L12,2z M12,18.5l-6-3.4V8.4l6-3.4l6,3.4v6.7L12,18.5z"/>',"fill-green-600")}
              ${dn("Tailwind",'<path d="M12.5,6c-2.5,0-4,1.5-4,4c0,2.5,3,3,3,5.5s-2,3-3.5,3c-1,0-1.5-0.5-2-1.5 M18.5,10c-2.5,0-4,1.5-4,4c0,2.5,3,3,3,5.5s-2,3-3.5,3c-1,0-1.5-0.5-2-1.5"/>',"stroke-current stroke-2 fill-none_ text-cyan-400")}
              ${dn("Vite",'<path d="M12,2L3,6v4l9,12l9-12V6L12,2z M12,19L5,9h3.5l3.5,7.5L15.5,9H19L12,19z"/>',"fill-purple-500")}
              ${dn("Figma",'<path d="M8,18c-1.1,0-2-0.9-2-2s0.9-2,2-2h2v4H8z M8,12c-1.1,0-2-0.9-2-2s0.9-2,2-2h2v4H8z M14,8c1.1,0,2,0.9,2,2s-0.9,2-2,2h-2V8H14z M12,14v4c1.1,0,2-0.9,2-2s-0.9-2-2-2h-2V14z"/>',"fill-purple-400")}
           </div>
        </div>

        <!-- 3. SIAPA SAYA -->
        <div class="${t} col-span-1">
           <h3 class="text-sm font-bold font-space text-white mb-3 transform-style-3d group-hover:translate-z-4 transition-transform">About Me</h3>
           <p class="text-xs text-zinc-400 leading-relaxed line-clamp-4 mb-4 transform-style-3d group-hover:translate-z-2 transition-transform">
             Pasionate about code and pixels. I build modern, user-friendly interfaces with a focus on details.
           </p>
           <div class="flex gap-3 transform-style-3d group-hover:translate-z-6 transition-transform duration-300">
              <div class="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-lg shadow-md hover:scale-110 hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all cursor-default group/icon">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-5 h-5 fill-indigo-400 group-hover/icon:fill-indigo-300 transition-colors"><path d="M240,168H200V48a16,16,0,0,0-16-16H72A16,16,0,0,0,56,48V168H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,48H184V168H72Z"></path></svg>
              </div>
              <div class="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-lg shadow-md hover:scale-110 hover:border-purple-500 hover:shadow-purple-500/20 transition-all cursor-default group/icon">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-5 h-5 fill-purple-400 group-hover/icon:fill-purple-300 transition-colors"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm65.88,143.6a8,8,0,1,1-13.76,7.91,52,52,0,0,0-76.24-52l-3.38-2a8,8,0,1,1-8.24-13.7l3.36,1.94A68.08,68.08,0,0,1,168,136h0a67.65,67.65,0,0,1,25.88,31.6Z"></path></svg>
              </div>
           </div>
        </div>

        <!-- 4. GITHUB -->
        <div id="githubCard" class="${t} col-span-1 md:col-span-2 flex items-center gap-6">
           <div class="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent pointer-events-none -z-10 rounded-2xl"></div>
           
           <div class="shrink-0 relative transform-style-3d group-hover:translate-z-8 group-hover:scale-110 transition-transform duration-300 z-10">
             <img id="ghAvatar" src="" class="w-20 h-20 rounded-full border-2 border-zinc-600 bg-black shadow-xl">
             <div class="absolute -bottom-1 -right-1 bg-white text-black p-1.5 rounded-full ring-4 ring-zinc-800 shadow-lg">
               <i class="ph-github-logo-fill text-xl"></i>
             </div>
           </div>
           
           <div class="flex-1 min-w-0 z-10 transform-style-3d group-hover:translate-x-2 transition-transform duration-300">
              <div class="flex items-center justify-between mb-2">
                 <h3 class="text-xl font-bold font-space text-white truncate drop-shadow-md" id="ghName">GitHub</h3>
                 <a href="https://github.com/LittleKenzy" target="_blank" class="transform group-hover:translate-z-10 text-[11px] font-bold text-zinc-900 bg-white px-4 py-2 rounded-lg hover:bg-gray-200 transition-all shadow-xl hover:scale-105 active:scale-95">
                    Visit
                 </a>
              </div>
              <p class="text-sm text-zinc-400 font-mono truncate mb-4" id="ghBio">Connecting...</p>
              <div class="flex gap-4 text-xs text-zinc-300">
                 <span class="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-zinc-700"><i class="ph-users text-indigo-400"></i> <strong id="ghFollowers" class="text-white">0</strong></span>
                 <span class="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-zinc-700"><i class="ph-book-bookmark text-indigo-400"></i> <strong id="ghRepos" class="text-white">0</strong></span>
              </div>
           </div>
        </div>

        <!-- 5. MINI GALLERY -->
        <div class="${t} col-span-1 flex flex-col">
           <div class="flex items-center justify-between mb-4 transform-style-3d group-hover:translate-z-2 transition-transform">
              <h3 class="text-sm font-bold font-space text-white">Gallery</h3>
              <i class="ph-image text-indigo-400 text-lg"></i>
           </div>
           <div class="flex-1 grid grid-cols-2 gap-2 h-full transform-style-3d group-hover:translate-z-6 transition-transform duration-300">
              <div class="bg-zinc-800/80 rounded-lg border border-zinc-700 flex items-center justify-center group/img relative overflow-hidden h-20 hover:border-indigo-500/50 transition-all cursor-pointer shadow-md hover:-translate-y-1">
                 <img src="/assets/project_landing.png" alt="Project 1" class="w-full h-full object-cover opacity-70 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500">
              </div>
              <div class="bg-zinc-800/80 rounded-lg border border-zinc-700 flex items-center justify-center group/img relative overflow-hidden h-20 hover:border-purple-500/50 transition-all cursor-pointer shadow-md hover:-translate-y-1">
                 <img src="/assets/project_habit.png" alt="Project 2" class="w-full h-full object-cover opacity-70 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500">
              </div>
              <div class="col-span-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50 flex items-center justify-center h-8">
                 <span class="text-[10px] font-mono text-zinc-500">More Projects Soon</span>
              </div>
           </div>
        </div>

        <!-- 6. CURRENT STATUS -->
        <div class="${t} col-span-1 md:col-span-2 lg:col-span-4 flex flex-col justify-center">
           <div class="flex items-center justify-between mb-6 transform-style-3d group-hover:translate-z-4 transition-transform">
              <div class="flex items-center gap-3">
                 <div class="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4 fill-indigo-400"><path d="M224,128a8,8,0,0,1-8,8H172.5l-21.16,63.48a8,8,0,0,1-15.18,0L104.5,45,74.1,136H40a8,8,0,0,1,0-16H80a8,8,0,0,1,7.59,5.47L119.5,211,149.9,119.53a8,8,0,0,1,15.18,0L190.5,200H216A8,8,0,0,1,224,128Z"/></svg>
                 </div>
                 <div>
                    <h3 class="text-base font-bold font-space text-white leading-none">Current Status</h3>
                    <p class="text-[10px] text-zinc-400 mt-0.5">Live snapshot of my work</p>
                 </div>
              </div>
              <div class="animate-pulse flex items-center gap-2">
                <span class="text-[10px] font-mono text-emerald-500">Active</span>
                <span class="inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              </div>
           </div>
           
           <div class="grid grid-cols-1 md:grid-cols-3 gap-4 transform-style-3d group-hover:translate-z-6 transition-transform duration-300">
              <!-- BUILDING NOW -->
              ${qa("Building","Interactive Portfolio","building")}
              
              <!-- LEARNING -->
              ${qa("Learning","Systems Architecture","learning")}
              
              <!-- NEXT TARGET -->
              ${qa("Goal","Full Stack Release","goal")}
           </div>
        </div>

      </div>
    </div>
  `},dn=(r,e,t)=>`
  <div class="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-indigo-500/50 hover:bg-zinc-700 transition-all cursor-default select-none group/badge transform-style-3d hover:translate-z-8 hover:shadow-xl shadow-black/50 hover:-translate-y-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 ${t} group-hover/badge:scale-110 transition-transform duration-300">
      ${e}
    </svg>
    <span class="text-[11px] font-medium text-zinc-400 group-hover/badge:text-white transition-colors">${r}</span>
  </div>
`,qa=(r,e,t)=>{const n={building:"bg-amber-500/10 text-amber-500 border-amber-500/20",learning:"bg-blue-500/10 text-blue-500 border-blue-500/20",goal:"bg-purple-500/10 text-purple-500 border-purple-500/20"},s={building:'<path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L135.35,53.33a8,8,0,0,0,0,11.32l16,16a8,8,0,0,0,11.32,0l24.64-24.64L208,76.69l-24.64,24.64a8,8,0,0,0,0,11.32l16,16a8,8,0,0,0,11.32,0l24.64-24.64A16,16,0,0,0,227.32,73.37ZM58.4,98.4A56,56,0,0,0,134.6,99.38L105.25,128.73a8,8,0,0,0,0,11.31l16,16a8,8,0,0,0,11.31,0l29.35-29.35a73,73,0,1,0-103.5-28.29Z"/>',learning:'<path d="M208,80H176V56a24,24,0,0,0-24-24H48A24,24,0,0,0,24,56V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V104A24,24,0,0,0,208,80ZM48,56H152V192H48Zm120,8V192h40a8,8,0,0,1,8,8v.68A24.08,24.08,0,0,0,208,192a8,8,0,0,0-.7-200.68A8,8,0,0,1,216,192V104a8,8,0,0,0-8-8H168Z"/><path d="M72,88H128a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Z"/><path d="M72,120H128a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Z"/>',goal:'<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a48,48,0,1,1-48-48A48.05,48.05,0,0,1,176,128Zm-16,0a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"/>'},i=n[t]||n.building;return`
  <div class="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-zinc-600 transition-all group/status relative overflow-hidden">
     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/status:translate-x-full transition-transform duration-1000"></div>
     
     <div class="w-10 h-10 rounded-lg flex shrink-0 items-center justify-center bg-zinc-900 border border-zinc-700 group-hover/status:scale-110 transition-transform shadow-inner text-zinc-400 group-hover/status:text-white transition-colors">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-5 h-5 fill-current">
          ${s[t]}
       </svg>
     </div>
     <div>
       <span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider mb-1 ${i}">${r}</span>
       <h4 class="text-sm font-bold text-white leading-tight group-hover/status:text-indigo-400 transition-colors">${e}</h4>
     </div>
  </div>
  `},m2=()=>{const r=document.getElementById("ghAvatar"),e=document.getElementById("ghName"),t=document.getElementById("ghBio"),n=document.getElementById("ghFollowers"),s=document.getElementById("ghRepos");e&&fetch("https://api.github.com/users/LittleKenzy").then(o=>o.json()).then(o=>{o.message!=="Not Found"&&(r&&(r.src=o.avatar_url),e&&(e.textContent=o.name||o.login),t&&(t.textContent=o.bio||"Connecting to GitHub..."),n&&(n.textContent=o.followers),s&&(s.textContent=o.public_repos))}).catch(o=>console.log("GH API Error",o));const i=()=>{const o=document.getElementById("dashboard-container");if(!o)return;_e.to(".tilt-card",{opacity:1,y:0,duration:.6,stagger:.1,ease:"power3.out",startAt:{y:30,opacity:0}});const l=c=>{const u=c.target.closest(".tilt-card");if(!u)return;const h=u.getBoundingClientRect(),p=c.clientX-h.left,m=c.clientY-h.top,w=h.width/2,x=h.height/2,_=(m-x)/x*-15,E=(p-w)/w*15;let P=u.querySelector(".tilt-glare");P||(P=document.createElement("div"),P.className="tilt-glare absolute inset-0 rounded-2xl pointer-events-none z-50 transition-opacity duration-300",P.style.mixBlendMode="overlay",u.appendChild(P)),P.style.background=`radial-gradient(circle at ${p}px ${m}px, rgba(255,255,255,0.15), transparent 60%)`,P.style.opacity="1",_e.to(u,{duration:.2,rotationX:_,rotationY:E,scale:1.02,transformPerspective:1e3,boxShadow:"0 20px 40px -10px rgba(0,0,0,0.6)",ease:"power1.out",overwrite:"auto"})};o.addEventListener("mouseout",c=>{const u=c.target.closest(".tilt-card");if(u&&!u.contains(c.relatedTarget)){_e.to(u,{duration:.5,rotationX:0,rotationY:0,scale:1,boxShadow:"none",ease:"elastic.out(1, 0.6)",overwrite:"auto"});const h=u.querySelector(".tilt-glare");h&&(h.style.opacity="0")}}),o.addEventListener("mousemove",l)};requestAnimationFrame(()=>i())},g2="modulepreload",_2=function(r){return"/"+r},Md={},y2=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=_2(c),c in Md)return;Md[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":g2,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((m,w)=>{p.addEventListener("load",m),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Kn="messages",Ms={async getMessages(){let r=[];try{const l=yo(Vr(Oe,Kn),vo("timestamp","asc"),rm(100)),c=wo(l),u=new Promise((p,m)=>setTimeout(()=>m(new Error("Firestore fetch slow")),2e3));r=(await Promise.race([c,u])).docs.map(p=>{var m;return{id:p.id,...p.data(),timestamp:((m=p.data().timestamp)==null?void 0:m.toDate().toISOString())||new Date().toISOString()}})}catch(l){console.warn("Firestore Fetch Error/Timeout (Using Local Fallback):",l)}const e=JSON.parse(localStorage.getItem("lk_chat_messages")||"[]"),t=new Set(r.map(l=>l.id)),s=[...e.filter(l=>!t.has(l.id)),...r].sort((l,c)=>new Date(l.timestamp)-new Date(c.timestamp)),i=JSON.parse(localStorage.getItem("lk_deleted_ids")||"[]");return{messages:s.filter(l=>!i.includes(l.id)),online_users:[]}},async postMessage(r,e=null){const t=JSON.parse(localStorage.getItem("user_session")),n=t==null?void 0:t.user;if(!n)throw new Error("Must be logged in");const s={username:n.username,avatar:n.avatar,text:r,image:e,userId:n.id||"local-user",role:n.role||"user",timestamp:new Date().toISOString(),replies:[]};try{const i=Tc(Vr(Oe,Kn),{...s,timestamp:om()}),o=new Promise((c,u)=>setTimeout(()=>u(new Error("Firestore slow")),2500));return{id:(await Promise.race([i,o])).id,...s}}catch(i){console.warn("Firestore Send Failed/Timed Out (Using Local Fallback):",i);const o="lk_chat_messages",l=JSON.parse(localStorage.getItem(o)||"[]"),c={id:"local-"+Date.now(),...s};return l.push(c),localStorage.setItem(o,JSON.stringify(l)),c}},async deleteMessage(r){var e;if(String(r).startsWith("local-")){const t="lk_chat_messages",s=JSON.parse(localStorage.getItem(t)||"[]").filter(i=>i.id!==r);return localStorage.setItem(t,JSON.stringify(s)),!0}try{return await xc(rt(Oe,Kn,r)),!0}catch(t){console.error("Firestore Delete Failed:",t);try{const s=rt(Oe,Kn,r);return await Ct(s,{image:_l()}),!0}catch{}try{const s=JSON.parse(localStorage.getItem("user_session")),i=(e=s==null?void 0:s.user)==null?void 0:e.role;if(["admin","owner","superadmin"].includes(i)){const o=rt(Oe,Kn,r);return await Ct(o,{text:"🚫 Message deleted by Admin",image:_l(),avatar:"https://ui-avatars.com/api/?name=X&background=000&color=fff",deletedBy:i,isDeleted:!0}),!0}}catch(s){console.error("Soft Delete also failed",s)}try{const s="lk_chat_messages",i=JSON.parse(localStorage.getItem(s)||"[]"),o=i.filter(l=>l.id!==r);if(i.length!==o.length)return localStorage.setItem(s,JSON.stringify(o)),!0}catch{}const n=JSON.parse(localStorage.getItem("lk_deleted_ids")||"[]");return n.includes(r)||(n.push(r),localStorage.setItem("lk_deleted_ids",JSON.stringify(n))),!0}},async replyToMessage(r,e,t=null){const n=JSON.parse(localStorage.getItem("user_session")),s=n==null?void 0:n.user;if(!s)return!1;const i={id:Date.now().toString(),username:s.username,avatar:s.avatar,text:e,image:t,timestamp:new Date().toISOString()};try{const o=rt(Oe,Kn,r),{arrayUnion:l}=await y2(async()=>{const{arrayUnion:c}=await Promise.resolve().then(()=>Mb);return{arrayUnion:c}},void 0);return await Ct(o,{replies:l(i)}),!0}catch(o){return console.error("Reply Error:",o),!1}},async editMessage(r,e){if(String(r).startsWith("local-")){const t="lk_chat_messages",n=JSON.parse(localStorage.getItem(t)||"[]"),s=n.findIndex(i=>i.id===r);if(s!==-1)return n[s].text=e,n[s].edited=!0,localStorage.setItem(t,JSON.stringify(n)),!0;throw new Error("Local message not found")}try{const t=rt(Oe,Kn,r);return await Ct(t,{text:e,edited:!0}),!0}catch(t){console.error("Firestore Edit Error:",t);try{const n="lk_chat_messages",s=JSON.parse(localStorage.getItem(n)||"[]"),i=s.findIndex(o=>o.id===r);if(i!==-1)return s[i].text=e,s[i].edited=!0,localStorage.setItem(n,JSON.stringify(s)),!0}catch{}throw new Error("Could not edit message. Check permissions.")}}},v2=()=>{const r=De.getUser();return`
    <div class="h-[calc(100vh-80px)] md:h-full p-4 md:p-12 flex flex-col">
    <div class="flex-1 flex flex-col relative bg-card-bg rounded-xl border border-border-subtle overflow-hidden subtle-shadow h-full">
      <!-- Header -->
      <div class="p-3 md:p-4 border-b border-border-subtle bg-main-bg/50 flex justify-between items-center">
        <div>
          <div class="flex items-center gap-2">
             <h2 class="text-base md:text-lg font-bold font-space text-text-main">Public Chat Room</h2>
             <span class="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
          </div>
          <p class="text-[10px] text-text-muted">Join the discussion with other developers. 
            ${r?`<span class="text-[10px] text-accent ml-2">(${r.username}: ${r.role||"no-role"})</span>`:""}
          </p>
        </div>
        <div id="onlineUsersHeader" class="flex -space-x-2">
           <!-- Loaded dynamically -->
        </div>
      </div>

      <!-- Messages Area -->
      <div id="messagesContainer" class="flex-1 min-h-0 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 scroll-smooth">
         <!-- Messages injected here -->
      </div>

      <!-- Context Banner (Reply/Edit) -->
       <div id="chatContext" class="hidden px-4 py-2 bg-main-bg/80 border-t border-border-subtle text-xs flex justify-between items-center">
         <span id="contextText" class="text-accent font-medium">Replying to...</span>
         <button id="cancelContext" class="text-text-muted hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors" title="Cancel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4 fill-current"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
         </button>
       </div>

      <!-- Image Preview Area -->
      <div id="imagePreviewContainer" class="hidden px-4 py-2 bg-main-bg border-t border-border-subtle">
         <div class="relative inline-block">
            <img id="imagePreview" src="" class="h-20 rounded border border-border-subtle object-cover">
            <button id="cancelImage" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 transition-colors">
              <i class="ph-x text-xs"></i>
            </button>
         </div>
      </div>

      <!-- Input Area -->
      <div class="p-4 bg-main-bg border-t border-border-subtle">
        <form id="chatForm" class="flex gap-2 items-center">
          <button type="button" id="uploadBtn" class="text-text-muted hover:text-accent p-2 transition-colors rounded-full hover:bg-white/5">
            <!-- Upload Icon (Paperclip) -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6 fill-current">
              <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193a24,24,0,1,1-34-34l83.6-83.6a8,8,0,1,1,11.32,11.32L82.29,170.33a8,8,0,0,0,11.32,11.31L193,81a24,24,0,0,0-34-34L59.72,147.69a40,40,0,0,0,56.57,56.56l82.05-82A8,8,0,0,1,209.66,122.34Z"></path>
            </svg>
          </button>
          <input type="file" id="fileInput" accept="image/*" class="hidden">
          
          <input type="text" id="chatInput" autocomplete="off" placeholder="Type a message..." 
            class="flex-1 bg-white/5 border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all text-text-main text-sm placeholder:text-text-muted/50">
          
          <button type="submit" id="sendBtn" class="bg-accent text-white w-11 h-11 rounded-xl flex items-center justify-center font-bold hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 hover:scale-105 active:scale-95">
             <!-- Send Icon (Paper Plane Tilt) -->
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6 fill-current">
               <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-192,56a16,16,0,0,0-.8,30.27l85.08,28.36,28.36,85.08a16,16,0,0,0,15.14,10.89h.8a16,16,0,0,0,14.33-11.69l56-192A16,16,0,0,0,227.32,28.68Zm-26.69,21L91.8,157.9l-49.8-16.6L200.63,49.68Z"></path>
             </svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="fixed inset-0 z-50 bg-black/90 hidden flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
       <button id="closeLightbox" class="absolute top-4 right-4 text-white hover:text-gray-300 z-50">
         <i class="ph-x text-3xl"></i>
       </button>
       <div class="relative max-w-full max-h-full">
         <img id="lightboxImg" src="" class="max-w-full max-h-[85vh] rounded shadow-2xl">
         <div class="absolute bottom-[-3rem] left-0 w-full flex justify-center">
            <a id="downloadLink" href="#" download="image.png" class="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
              <i class="ph-download-simple"></i> Download Image
            </a>
         </div>
       </div>
    </div>
    </div>
  `};let xr="NONE",Qn=null,Jn=null;const Ui=async()=>{const r=document.getElementById("messagesContainer");if(!r)return;let e={messages:[],online_users:[]};try{e=await Ms.getMessages()}catch(o){console.error("Failed to load messages",o)}const{messages:t,online_users:n}=e,s=De.getUser(),i=document.getElementById("onlineUsersHeader");if(i)if(n&&n.length>0){const l=n.length-3;i.innerHTML=`
         <div class="flex -space-x-2">
           ${n.slice(0,3).map(c=>`
             <img src="${c.avatar}" title="${c.username}" class="w-6 h-6 rounded-full border border-card-bg bg-gray-600 object-cover">
           `).join("")}
           ${l>0?`
             <div class="w-6 h-6 rounded-full border border-card-bg flex items-center justify-center bg-accent/20 text-[10px] text-accent font-bold">+${l}</div>
           `:""}
         </div>
       `}else i.innerHTML="";if(!Array.isArray(t)||t.length===0){r.innerHTML=`
      <div class="h-full flex flex-col items-center justify-center text-text-muted opacity-50">
        <i class="ph-chat-circle-dots text-4xl mb-4"></i>
        <p class="text-sm">No messages yet. Be the first!</p>
      </div>
    `;return}r.innerHTML=`
    <style>
      @keyframes border-rotate {
        0% { background-position: 0% 50%; opacity: 0.6; }
        50% { background-position: 100% 50%; opacity: 1; }
        100% { background-position: 0% 50%; opacity: 0.6; }
      }
      .owner-border-gradient {
        background: linear-gradient(270deg, #06b6d4, #3b82f6, #a855f7, #06b6d4);
        background-size: 200% 200%;
        animation: border-rotate 3s ease infinite;
      }
    </style>
  `+t.map(o=>{const l=s&&o.username===s.username,c=o.role==="admin",u=s&&(s.role==="admin"||l),h=new Date(o.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),p=o.replies&&o.replies.length>0?`
      <div class="mt-2 space-y-2 pl-4 border-l-2 border-border-subtle/50">
        ${o.replies.map(m=>{const w=s&&(s.role==="admin"||m.username.trim().toLowerCase()===s.username.trim().toLowerCase());return`
           <div class="flex items-start gap-2">
             <img src="${m.avatar}" class="w-4 h-4 rounded-full opacity-70">
             <div>
               <div class="flex items-center gap-2">
                 <span class="text-[10px] font-bold text-text-muted">${m.username}</span>
                 <span class="text-[8px] text-text-muted opacity-50">${new Date(m.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span>
                 ${w?`
                   <button class="action-btn ml-2 text-[10px] text-red-500 bg-red-500/10 hover:bg-red-500/20 px-2 py-0.5 rounded border border-red-500/20 transition-colors" data-action="delete" data-id="${m.id}" data-preview="${encodeURIComponent(m.text.substring(0,20))}">
                     <i class="ph-trash mr-1"></i>Del
                   </button>
                 `:""}
               </div>
               <p class="text-xs text-text-muted">${m.text}</p>
               ${m.image?`<img src="${m.image}" class="mt-1 w-16 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity lightbox-trigger" data-src="${m.image}">`:""}
             </div>
           </div>
        `}).join("")}
      </div>
    `:"";return c?`
       <div class="flex items-start gap-4 ${l?"flex-row-reverse":""} group animate-msg mb-6">
         <div class="relative">
            <img src="${o.avatar}" alt="${o.username}" class="w-10 h-10 rounded-full border-2 border-cyan-500/50 bg-black/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10 relative">
            <div class="absolute -bottom-1 -right-1 bg-cyan-500 text-black text-[8px] font-bold px-1 rounded-sm z-20">PRO</div>
         </div>
         
         <div class="flex flex-col ${l?"items-end":"items-start"} max-w-[85%]">
           <div class="flex flex-wrap items-center gap-2 mb-1.5 pl-1">
             <span class="text-xs font-bold text-white tracking-wide drop-shadow-md flex items-center gap-1">
                ${o.username} 
                <i class="ph-seal-check-fill text-cyan-400 text-sm"></i>
                <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 font-mono">OWNER</span>
             </span>
             <span class="text-[10px] text-cyan-200/50 whitespace-nowrap">${h}</span>
             ${o.edited?'<span class="text-[8px] text-zinc-500 italic">(edited)</span>':""}
           </div>
           
           <div class="relative p-[1.5px] rounded-xl overflow-hidden group/card hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
             <!-- Animated Border -->
             <div class="absolute inset-0 owner-border-gradient"></div>
             
             <!-- Content -->
             <div class="relative bg-zinc-950/90 backdrop-blur-sm rounded-[10px] p-4 border border-white/5 h-full">
                ${o.image?`
                  <div class="mb-3 rounded-lg overflow-hidden border border-white/10">
                     <img src="${o.image}" class="max-w-full max-h-56 w-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500 lightbox-trigger" data-src="${o.image}">
                  </div>
                `:""}
                <p class="text-sm text-cyan-50 leading-relaxed whitespace-pre-wrap font-book">${o.text}</p>
                ${p}
             </div>
           </div>
 
           <!-- Actions -->
           <div class="flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity pl-1">
              <button class="action-btn text-[10px] text-cyan-400 hover:text-white flex items-center gap-1" data-action="reply" data-id="${o.id}" data-user="${o.username}">
                <i class="ph-arrow-u-up-left"></i> Reply
              </button>
              ${u?`
                <button class="action-btn text-[10px] text-zinc-500 hover:text-cyan-400 flex items-center gap-1" data-action="edit" data-id="${o.id}" data-text="${encodeURIComponent(o.text)}">
                  <i class="ph-pencil-simple"></i> Edit
                </button>
                <button class="action-btn text-[10px] text-zinc-500 hover:text-red-400 flex items-center gap-1" data-action="delete" data-id="${o.id}" data-preview="${encodeURIComponent(o.text.substring(0,20))}">
                  <i class="ph-trash"></i> Delete
                </button>
              `:""}
           </div>
         </div>
       </div>
       `:`
      <div class="flex items-start gap-4 ${l?"flex-row-reverse":""} group animate-msg">
        <img src="${o.avatar}" alt="${o.username}" class="w-8 h-8 rounded-full border border-border-subtle bg-black/50">
        
        <div class="flex flex-col ${l?"items-end":"items-start"} max-w-[85%]">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-bold text-text-main">${o.username}</span>
            <span class="text-[10px] text-text-muted">${h}</span>
            ${o.edited?'<span class="text-[8px] text-text-muted italic">(edited)</span>':""}
          </div>
          
          <div class="p-3 rounded-xl ${l?"bg-accent/10 text-text-main border border-accent/20 rounded-tr-none":"bg-white/5 text-text-muted rounded-tl-none border border-border-subtle"} relative group-hover:shadow-md transition-all">
            ${o.image?`
              <div class="mb-2">
                 <img src="${o.image}" class="max-w-full max-h-48 rounded cursor-pointer hover:opacity-90 transition-opacity lightbox-trigger" data-src="${o.image}">
              </div>
            `:""}
            <p class="text-sm leading-relaxed whitespace-pre-wrap">${o.text}</p>
            ${p}
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 mt-1 opacity-70 hover:opacity-100 transition-opacity">
             <button class="action-btn text-[10px] text-text-muted hover:text-accent flex items-center gap-1" data-action="reply" data-id="${o.id}" data-user="${o.username}">
               <i class="ph-arrow-u-up-left"></i> Reply
             </button>
             ${u?`
               <button class="action-btn text-[10px] text-text-muted hover:text-accent flex items-center gap-1" data-action="edit" data-id="${o.id}" data-text="${encodeURIComponent(o.text)}">
                 <i class="ph-pencil-simple"></i> Edit
               </button>
               <button class="action-btn text-[10px] text-text-muted hover:text-red-400 flex items-center gap-1" data-action="delete" data-id="${o.id}" data-preview="${encodeURIComponent(o.text.substring(0,20))}">
                 <i class="ph-trash"></i> Delete Msg
               </button>
             `:""}
          </div>
        </div>
      </div>
    `}).join(""),r.scrollTop=r.scrollHeight},w2=()=>{Ui();const r=setInterval(()=>{if(!document.getElementById("messagesContainer")){clearInterval(r);return}Ui()},3e3),e=document.getElementById("chatForm"),t=document.getElementById("chatInput"),n=document.getElementById("fileInput"),s=document.getElementById("uploadBtn"),i=document.getElementById("chatContext"),o=document.getElementById("contextText"),l=document.getElementById("cancelContext"),c=document.getElementById("imagePreviewContainer"),u=document.getElementById("imagePreview"),h=document.getElementById("cancelImage"),p=()=>{xr="NONE",Qn=null,Jn=null,t.value="",n.value="",i.classList.add("hidden"),c.classList.add("hidden")};l.addEventListener("click",p),h.addEventListener("click",()=>{Jn=null,n.value="",c.classList.add("hidden")}),s.addEventListener("click",()=>n.click()),n.addEventListener("change",x=>{const _=x.target.files[0];if(_){_.size>2*1024*1024;const E=new FileReader;E.onload=P=>{const R=new Image;R.onload=()=>{const k=document.createElement("canvas"),V=600,M=V/R.width;R.width>V?(k.width=V,k.height=R.height*M):(k.width=R.width,k.height=R.height),k.getContext("2d").drawImage(R,0,0,k.width,k.height),Jn=k.toDataURL("image/jpeg",.7),u.src=Jn,c.classList.remove("hidden")},R.src=P.target.result},E.readAsDataURL(_)}}),e.addEventListener("submit",async x=>{x.preventDefault();const _=t.value.trim();if(!_&&!Jn)return;const E=document.getElementById("sendBtn"),P='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6 fill-current"><path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-192,56a16,16,0,0,0-.8,30.27l85.08,28.36,28.36,85.08a16,16,0,0,0,15.14,10.89h.8a16,16,0,0,0,14.33-11.69l56-192A16,16,0,0,0,227.32,28.68Zm-26.69,21L91.8,157.9l-49.8-16.6L200.63,49.68Z"></path></svg>';E.innerHTML='<svg class="animate-spin w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>',E.disabled=!0;const R=new Promise((k,V)=>setTimeout(()=>V(new Error("Request timed out")),5e3));try{const k=(async()=>{xr==="EDIT"?await Ms.editMessage(Qn,_):xr==="REPLY"?await Ms.replyToMessage(Qn,_,Jn):await Ms.postMessage(_,Jn)})();await Promise.race([k,R]),p(),Ui().then(()=>{if(xr!=="EDIT"){const V=document.querySelector("#messagesContainer > :last-child");V&&_e.from(V,{opacity:0,y:20})}})}catch(k){console.error(k),alert("Message not sent: "+(k.message||"Unknown error"))}finally{E.innerHTML=P,E.disabled=!1,t.focus()}}),document.getElementById("messagesContainer").addEventListener("click",async x=>{const _=x.target.closest(".action-btn");if(_){x.stopPropagation();const P=_.dataset.action;Qn=_.dataset.id;const R=decodeURIComponent(_.dataset.preview||"");if(P==="delete"){if(console.log("Action: delete",Qn,R),confirm(`Delete this message?

"${R}..."`))try{await Ms.deleteMessage(Qn);const k=document.querySelector(`.action-btn[data-id="${Qn}"]`).closest(".animate-msg");k&&k.remove(),await Ui()}catch(k){alert(k.message)}}else P==="edit"?(xr="EDIT",t.value=decodeURIComponent(_.dataset.text),t.focus(),o.textContent="Editing message...",i.classList.remove("hidden")):P==="reply"&&(xr="REPLY",t.focus(),o.textContent=`Replying to ${_.dataset.user}...`,i.classList.remove("hidden"));return}const E=x.target.closest(".lightbox-trigger");if(E){const P=E.dataset.src,R=document.getElementById("lightbox"),k=document.getElementById("lightboxImg"),V=document.getElementById("downloadLink");k.src=P,V.href=P,R.classList.remove("hidden")}});const m=document.getElementById("lightbox"),w=document.getElementById("closeLightbox");if(m){const x=()=>m.classList.add("hidden");w.addEventListener("click",x),m.addEventListener("click",_=>{_.target===m&&x()})}},b2=()=>{const r=Xr.getJourneyTimeline(),e=Xr.getJourneyStories();return`
    <div class="flex-1 p-6 md:p-12 overflow-y-auto w-full animate-fade-in relative space-y-24 pb-20">
      <div class="max-w-5xl mx-auto space-y-24">
      
      <!-- Hero Section -->
      <section class="text-center relative py-10">
         <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
         <h1 class="text-4xl md:text-6xl font-bold font-space text-text-main mb-4 tracking-tight">My Journey</h1>
         <p class="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
           It wasn't a straight line. It was full of bugs, broken layouts, and "aha!" moments. Here is how I got here.
         </p>
      </section>

      <!-- Interactive Timeline -->
      <section class="relative max-w-3xl mx-auto">
         <!-- Vertical Line -->
         <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0"></div>

         <div class="space-y-12">
           ${r.map((t,n)=>`
               <div class="relative flex md:justify-between group timeline-item">
                 <!-- Dot -->
                 <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-card-bg border-4 border-accent shadow-[0_0_10px_rgba(34,197,94,0.5)] z-10 mt-1.5 transition-transform group-hover:scale-125"></div>

                 <!-- Content Wrapper (Mobile: Always Left padded, Desktop: Alternating) -->
                 <div class="ml-12 md:ml-0 md:w-[45%] ${n%2===0?"md:mr-auto md:text-right":"md:ml-auto md:text-left"}">
                   <div class="p-5 bg-card-bg border border-border-subtle rounded-xl subtle-shadow hover:border-accent/40 transition-colors relative group-hover:-translate-y-1 duration-300">
                      <span class="inline-block px-3 py-1 rounded text-[10px] font-bold bg-accent/10 text-accent mb-2 font-mono">${t.year}</span>
                      <h3 class="text-lg font-bold text-text-main mb-2">${t.title}</h3>
                      <p class="text-sm text-text-muted leading-relaxed">${t.desc}</p>
                   </div>
                 </div>
               </div>
             `).join("")}
         </div>
      </section>

      <!-- Stories Grid -->
      <section>
        <h2 class="text-2xl font-bold font-space mb-8 text-center text-text-main">Behind The Code</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
           ${e.map(t=>`
             <div class="story-card p-6 bg-card-bg/50 border border-border-subtle rounded-xl hover:bg-card-bg transition-all hover:shadow-lg">
                <h3 class="text-accent font-bold font-space text-lg mb-3">${t.title}</h3>
                <p class="text-text-muted text-sm leading-relaxed">"${t.content}"</p>
             </div>
           `).join("")}
        </div>
      </section>

      <!-- Current Focus -->
      <section class="bg-gradient-to-r from-card-bg to-transparent border-t border-b border-border-subtle p-8 py-12 text-center">
         <p class="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Current Focus</p>
         <div class="flex flex-wrap justify-center gap-4">
            <span class="px-6 py-2 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-sm">System Design</span>
            <span class="px-6 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-bold shadow-[0_0_15px_rgba(34,197,94,0.1)]">Advanced React Patterns</span>
            <span class="px-6 py-2 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-sm">Backend Security</span>
         </div>
      </section>

      <!-- Quote -->
      <section class="text-center py-10">
        <blockquote class="text-2xl md:text-3xl font-space font-bold text-text-main max-w-3xl mx-auto leading-tight">
          "The only way to do great work is to love what you do."
        </blockquote>
        <cite class="block mt-4 text-text-muted not-italic text-sm">- Steve Jobs (My inspiration)</cite>
      </section>

      </div>
    </div>
  `},x2=()=>{setTimeout(()=>{_e.from(".timeline-item",{y:30,opacity:0,stagger:.2,duration:.8,clearProps:"all"}),_e.from(".story-card",{y:30,opacity:0,stagger:.1,duration:.8,delay:.4,clearProps:"all"})},100)},T2=()=>{const r=Xr.getTestimonials(),e=De.getUser(),t=e&&e.role==="admin";return`
     <div class="flex-1 p-6 md:p-12 overflow-y-auto w-full animate-fade-in space-y-16">
       <div class="max-w-5xl mx-auto space-y-16">
       <div class="text-center">
         <h2 class="text-3xl font-bold font-space mb-2 text-text-main">Testimonials</h2>
         <p class="text-text-muted">What people say about my work.</p>
       </div>

       <div id="testimonialGrid" class="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
         ${r.map(n=>ag(n,t)).join("")}
       </div>
    
       ${t?"":`
       <div class="max-w-xl mx-auto bg-card-bg p-8 rounded-xl border border-border-subtle subtle-shadow">
         <h3 class="text-lg font-bold font-space mb-6 text-center text-text-main">Submit Your Review</h3>
         <form id="publicTestimonialForm" class="space-y-4">
            <input type="text" id="publicName" placeholder="Your Name" required class="w-full bg-main-bg border border-border-subtle rounded p-3 text-text-main focus:border-accent focus:outline-none transition-colors text-sm">
            <div class="flex gap-2 text-xl text-text-muted cursor-pointer" id="publicStars">
                 <button type="button" data-val="1" class="star-btn hover:text-yellow-400">★</button>
                 <button type="button" data-val="2" class="star-btn hover:text-yellow-400">★</button>
                 <button type="button" data-val="3" class="star-btn hover:text-yellow-400">★</button>
                 <button type="button" data-val="4" class="star-btn hover:text-yellow-400">★</button>
                 <button type="button" data-val="5" class="star-btn hover:text-yellow-400">★</button>
            </div>
            <input type="hidden" id="publicRating" value="5">
            <textarea id="publicComment" placeholder="Write a comment..." required rows="2" class="w-full bg-main-bg border border-border-subtle rounded p-3 text-text-main focus:border-accent focus:outline-none transition-colors text-sm"></textarea>
            <button type="submit" class="w-full py-3 bg-accent text-white font-medium rounded hover:bg-accent-hover transition-colors text-sm">POST REVIEW</button>
         </form>
       </div>
       `}
       </div>
     </div>
  `},ag=(r,e)=>`
  <div class="p-6 bg-card-bg rounded-xl border border-border-subtle relative hover:border-accent/30 transition-colors group">
    <div class="relative z-10">
      <div class="flex items-center justify-between mb-3">
         <h4 class="font-bold font-space text-text-main text-base">${r.name}</h4>
         <div class="text-yellow-400 text-xs">
           ${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}
         </div>
      </div>
      <p class="text-text-muted text-sm leading-relaxed italic mb-4">"${r.comment}"</p>

      ${r.reply?`
        <div class="ml-4 pl-4 border-l-2 border-accent mt-3">
           <p class="text-[10px] text-accent font-bold uppercase mb-1">Author Reply</p>
           <p class="text-text-muted text-xs">${r.reply}</p>
        </div>
      `:""}

      ${e&&!r.reply?`
        <form class="reply-form mt-4 pt-3 border-t border-border-subtle hidden group-hover:block transition-all" data-id="${r.id}">
           <div class="flex gap-2">
             <input type="text" name="replyText" placeholder="Reply..." class="flex-1 bg-main-bg border border-border-subtle rounded px-3 py-2 text-xs text-text-main focus:border-accent focus:outline-none">
             <button type="submit" class="bg-accent/10 text-accent px-4 py-2 rounded text-xs font-bold hover:bg-accent hover:text-white transition-colors">Reply</button>
           </div>
        </form>
      `:""}
    </div>
  </div>
`,E2=()=>{const r=document.querySelectorAll("#publicStars .star-btn"),e=document.getElementById("publicRating");if(r.length>0){const s=i=>{r.forEach(o=>{const l=parseInt(o.dataset.val);o.classList.toggle("text-yellow-400",l<=i),o.classList.toggle("text-gray-600",l>i)})};s(5),r.forEach(i=>i.addEventListener("click",()=>{const o=parseInt(i.dataset.val);e.value=o,s(o)}))}const t=document.getElementById("publicTestimonialForm");t&&t.addEventListener("submit",s=>{s.preventDefault();const i=document.getElementById("publicName").value,o=document.getElementById("publicComment").value,l=parseInt(e.value);Xr.addTestimonial(i,o,l);const c=document.getElementById("testimonialGrid"),u=De.getUser(),h=u&&u.role==="admin";c.insertAdjacentHTML("beforeend",ag({name:i,comment:o,rating:l,reply:null},h)),s.target.reset(),document.querySelectorAll("#publicStars .star-btn").forEach(m=>{const w=parseInt(m.dataset.val);m.classList.toggle("text-yellow-400",w<=5),m.classList.toggle("text-gray-600",w>5)})});const n=document.getElementById("testimonialGrid");n&&n.addEventListener("submit",s=>{if(s.target.classList.contains("reply-form")){s.preventDefault();const i=parseInt(s.target.dataset.id),o=s.target.replyText.value;if(o){Xr.addReply(i,o);const l=window.location.hash;window.location.hash="#/",setTimeout(()=>window.location.hash=l,0)}}})},I2=()=>`
    <div class="flex-1 p-4 md:p-12 overflow-y-auto w-full animate-fade-in relative z-10">
      <div class="max-w-6xl mx-auto min-h-full flex flex-col justify-start md:justify-center w-full relative pt-24 md:pt-0 pb-12">
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div class="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px]"></div>
         <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
        
        <div class="flex flex-col justify-center space-y-8">
           <div class="space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest w-fit animate-pulse">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                Available for work
              </div>
              <h1 class="text-5xl md:text-6xl font-bold font-space text-text-main leading-tight">
                Let's build <br/>
                <span class="text-accent relative">
                   something
                   <svg class="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="2" fill="none" /></svg>
                </span> <br/>
                meaningful.
              </h1>
              <p class="text-text-muted text-lg leading-relaxed max-w-md">
                 I help businesses and creators launch high-quality digital products. No fluff, just results.
              </p>
           </div>

           <div class="space-y-4 pt-4">
              <div class="flex items-center gap-4">
                 <div class="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex-shrink-0">
                    <img src="https://ui-avatars.com/api/?name=Little+Kenzy&background=random" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500">
                 </div>
                 <div>
                    <h4 class="text-white font-bold text-sm">Little Kenzy</h4>
                    <p class="text-xs text-text-muted">Full Stack Developer</p>
                 </div>
              </div>
              <div class="flex items-center gap-6 text-xs font-mono text-zinc-500 border-t border-zinc-800/50 pt-4 w-fit">
                 <span class="flex items-center gap-2"><i class="ph-check-circle text-accent"></i> Handled Personally</span>
                 <span class="flex items-center gap-2"><i class="ph-check-circle text-accent"></i> Fast Response</span>
              </div>
           </div>
        </div>

        <div class="relative">
           <div class="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-2xl blur opacity-20 pointer-events-none"></div>
           
           <div class="relative bg-card-bg/80 backdrop-blur-xl p-8 rounded-2xl border border-border-subtle shadow-2xl">
              <form id="contactForm" class="space-y-6">
                 <div class="space-y-1">
                    <label class="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Name</label>
                    <input type="text" id="contactName" placeholder="John Doe" class="w-full bg-main-bg/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-text-main focus:border-accent focus:bg-main-bg focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-zinc-700">
                 </div>
                 
                 <div class="space-y-1">
                    <label class="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Email</label>
                    <input type="email" id="contactEmail" placeholder="john@example.com" class="w-full bg-main-bg/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-text-main focus:border-accent focus:bg-main-bg focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-zinc-700">
                 </div>

                 <div class="space-y-1">
                    <label class="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Message</label>
                    <textarea id="contactMessage" rows="4" placeholder="Tell me about your project..." class="w-full bg-main-bg/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-text-main focus:border-accent focus:bg-main-bg focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-zinc-700 resize-none"></textarea>
                 </div>

                 <button type="submit" id="contactSubmitBtn" class="group w-full py-4 bg-white text-black font-bold text-sm rounded-xl hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2">
                    Send Message <i class="ph-arrow-right font-bold group-hover:translate-x-1 transition-transform"></i>
                 </button>
              </form>

              <div class="mt-6 pt-6 border-t border-zinc-800">
                 <a href="https://wa.me/6282395928309" target="_blank" class="flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 hover:bg-green-500/5 transition-all group">
                    <div class="flex items-center gap-3">
                       <div class="w-10 h-10 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6 fill-current">
                             <path d="M128,24A104,104,0,0,0,36.18,176.68L24.83,215.19l39.36-11.31A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.87-12.33l-3.21-1.9-25.76,7.4,7.44-25-1.92-3.21A88,88,0,1,1,128,216Zm47.79-65.71c-2.61-1.31-15.48-7.62-17.88-8.5s-4.14-1.31-5.88,1.31-6.76,8.5-8.29,10.24-3.05,1.95-5.67.65-11-4.05-20.94-12.91c-7.85-7-13.15-15.65-14.68-18.27s-.16-4,1.14-5.31c1.17-1.16,2.61-3.05,3.92-4.57s1.75-2.62,2.62-4.36.43-3.27-.22-4.58-5.88-14.16-8.06-19.39-4.35-4.36-5.88-4.36H88.74a8.94,8.94,0,0,0-6.54,3.05c-2.17,2.4-8.29,8.06-8.29,19.61s8.5,22.67,9.69,24.2,16.72,25.49,40.52,35.75c15.68,6.76,21.56,5.49,29.18,4.58s15.47-6.32,17.65-12.42S173,169.2,173,167.9,170.83,165.72,175.79,164.29Z"></path>
                          </svg>
                       </div>
                       <div>
                          <h4 class="text-sm font-bold text-white group-hover:text-green-400 transition-colors">WhatsApp</h4>
                          <p class="text-[10px] text-zinc-500">Fastest way to reach me</p>
                       </div>
                    </div>
                    <i class="ph-arrow-up-right text-zinc-600 group-hover:text-green-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"></i>
                 </a>
              </div>
           </div>
        </div>
      </div>
      </div>
    </div>
  `,A2=()=>{const r=document.getElementById("contactForm"),e=document.getElementById("contactSubmitBtn");r&&r.addEventListener("submit",async t=>{t.preventDefault();const n=document.getElementById("contactName").value,s=document.getElementById("contactEmail").value,i=document.getElementById("contactMessage").value;if(!n||!s||!i){alert("Please fill in all fields.");return}const o='Send Message <i class="ph-arrow-right font-bold group-hover:translate-x-1 transition-transform"></i>';e.innerHTML='<svg class="animate-spin w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...',e.disabled=!0;try{const l=De.getUser(),c=ft.sendMessage(n,s,i,l?l.id:null),u=new Promise((h,p)=>setTimeout(()=>p(new Error("Request timed out")),5e3));await Promise.race([c,u]),e.innerHTML='Message Sent <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-5 h-5 fill-green-600 inline-block ml-2"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>',r.reset(),setTimeout(()=>{e.innerHTML=o,e.disabled=!1},3e3)}catch(l){console.error(l),alert("Failed to send: "+(l.message||"Unknown error")),e.innerHTML="Try Again",setTimeout(()=>{e.innerHTML=o,e.disabled=!1},2e3)}})},S2=()=>`
  <div class="text-center py-20">
    <h1 class="text-9xl font-bold text-gray-800">404</h1>
    <p class="text-2xl text-gray-400 mt-4">Page Not Found</p>
    <a href="#/" class="inline-block mt-8 px-6 py-2 border border-neon-blue text-neon-blue rounded hover:bg-neon-blue hover:text-black transition-colors">Go Home</a>
  </div>
`,R2=()=>`
     <div class="flex-1 flex flex-col p-6 md:p-12 relative z-10 bg-[#0f0f0f] min-h-0 overflow-hidden">
      
      <!-- HEADER -->
      <div class="flex items-center justify-between mb-0 pb-2 border-b border-white/5 shrink-0 mt-12 md:mt-0">
        <div>
           <div class="flex items-center gap-3">
              <h1 class="text-2xl font-bold font-space text-white leading-tight">Inbox Messages</h1>
              <span id="unreadCount" class="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold hidden">0 UNREAD</span>
           </div> 
           <p class="text-xs text-zinc-500 mt-1">Messages sent from Contact page</p>
        </div> 
        <div class="flex items-center gap-2">
           <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
           </span>
           <span class="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Live</span>
        </div>
      </div>

      <!-- MAIN CONTENT -->
      <div class="flex-1 flex gap-6 overflow-visible relative pt-0">
         
         <!-- LEFT: LIST -->
         <div id="messageListContainer" class="w-full md:w-[350px] lg:w-[400px] flex flex-col gap-3 overflow-y-auto pr-2 pb-10 pt-1">
            <!-- Loading Skeletons -->
            ${[1,2,3].map(()=>`
               <div class="h-24 rounded-xl bg-zinc-800/50 animate-pulse border border-white/5"></div>
            `).join("")}
         </div>

         <!-- RIGHT: DETAIL (Desktop) -->
         <div id="messageDetailPanel" class="hidden md:flex flex-1 bg-zinc-900 rounded-2xl border border-white/5 p-8 flex-col justify-center items-center text-zinc-500">
             <i class="ph-envelope-open text-4xl mb-4 opacity-50"></i>
             <p>Select a message to view details</p>
         </div>

      </div>

      <!-- DETAIL MODAL (Mobile Overlay) -->
      <div id="mobileDetailOverlay" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden flex items-start justify-center px-4 pb-4 pt-24 md:hidden">
         <div id="mobileDetailContent" class="w-full h-full bg-zinc-900 rounded-2xl border border-white/10 overflow-auto relative shadow-2xl">
             <!-- Injected Content -->
         </div>
         <button id="closeMobileDetail" class="absolute top-28 right-8 text-white bg-black/50 p-3 rounded-full cursor-pointer z-[60] hover:bg-red-500 hover:text-white transition-colors border border-white/10 shadow-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
         </button>
      </div>

    </div>
  `,C2=r=>{const e=r.status==="unread",t=new Date(r.created_at).toLocaleDateString([],{month:"short",day:"numeric"});return`
    <div class="message-card group relative p-4 rounded-xl border cursor-pointer hover:shadow-lg transition-transform
       ${e?"bg-zinc-800/80 border-cyan-500/30 hover:border-cyan-400":"bg-zinc-900 border-white/5 hover:bg-zinc-800"}
       " data-id="${r.id}">
       
       ${e?'<span class="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>':""}

       <div class="flex justify-between items-start mb-1">
          <h4 class="font-bold text-sm text-white truncate max-w-[70%] group-hover:text-cyan-200 transition-colors">${r.name}</h4>
          <span class="text-[10px] text-zinc-500 font-mono">${t}</span>
       </div>
       
       <p class="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-2">${r.message}</p>
       
       <div class="flex items-center gap-2">
         <span class="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider
           ${r.status==="unread"?"bg-cyan-500/10 text-cyan-400 border border-cyan-500/20":r.status==="replied"?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-zinc-700/30 text-zinc-500 border border-zinc-700/50"}">
           ${r.status}
         </span>
       </div>
    </div>
  `},P2=r=>{const e=new Date(r.created_at).toLocaleString(),t=!!r.reply,n=!t||!!r.user_reply;return`
     <div class="flex flex-col h-full animate-fade-in">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-start mb-6 pb-4 border-b border-white/5">
           <div class="flex items-center gap-4 w-full md:w-auto">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold border border-white/10 shrink-0">
                 ${r.name.charAt(0).toUpperCase()}
              </div>
              <div class="min-w-0 flex-1">
                 <h2 class="text-xl font-bold text-white mb-0.5 truncate">${r.name}</h2>
                 <a href="mailto:${r.email}" class="text-sm text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1 truncate">
                   ${r.email} <i class="ph-arrow-up-right text-xs"></i>
                 </a>
              </div>
           </div>
           
           <div class="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-2 w-full md:w-auto mt-4 md:mt-0 pl-16 md:pl-0">
              <span class="text-xs font-mono text-zinc-500">${e}</span>
              <div class="flex gap-2">
                 <button class="flex items-center justify-center gap-2 p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold transition-all border border-red-500/10 action-delete" data-id="${r.id}">
                    <i class="ph-trash"></i> Delete
                 </button>
              </div>
           </div>
        </div>

        <!-- Scrollable Message Body -->
        <div class="flex-1 overflow-y-auto pr-4 mb-4 custom-scrollbar">
           <div class="bg-zinc-800/30 p-4 rounded-xl border border-white/5 mb-6">
              <p class="text-sm font-bold text-zinc-500 mb-2 uppercase tracking-wider">Message</p>
              <p class="text-base text-zinc-200 leading-8 whitespace-pre-wrap font-book">${r.message}</p>
           </div>
           
           ${t?`
              <div class="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20 ml-8 animate-fade-in-up mb-6">
                  <div class="flex items-center justify-between mb-2">
                      <p class="text-xs font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-2">
                         <i class="ph-arrow-bend-down-right"></i> Your Reply
                      </p>
                      <span class="text-[10px] text-zinc-500">${r.replied_at?new Date(r.replied_at).toLocaleString():"Just now"}</span>
                  </div>
                  <p class="text-base text-emerald-100 leading-relaxed whitespace-pre-wrap">${r.reply}</p>
              </div>
           `:""}

           ${r.user_reply?`
              <div class="bg-zinc-800/50 p-4 rounded-xl border border-white/10 mb-6 animate-fade-in-up">
                  <div class="flex items-center justify-between mb-2">
                       <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold border border-white/10">
                              ${r.name.charAt(0).toUpperCase()}
                          </div>
                          <p class="text-xs font-bold text-white uppercase tracking-wider">User Follow-up</p>
                       </div>
                       <span class="text-[10px] text-zinc-500">${r.user_replied_at?new Date(r.user_replied_at).toLocaleString():""}</span>
                  </div>
                  <p class="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">${r.user_reply}</p>
                  
                  ${r.status==="unread"?'<div class="mt-2 text-[10px] text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> New Reply</div>':""}
              </div>
           `:""}
        </div>

        <!-- Footer Actions / Reply Form -->
        <div class="pt-4 border-t border-white/5 mt-auto">
           ${n?`
             <form class="reply-form space-y-3" data-id="${r.id}">
                <textarea id="replyInput" rows="3" placeholder="${t?"Reply to user follow-up...":"Type your reply here..."}" class="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-3 text-white focus:border-cyan-500/50 focus:outline-none transition-all resize-none text-sm"></textarea>
                <div class="flex justify-end">
                   <button type="submit" class="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors flex items-center gap-2 text-sm shadow-lg shadow-cyan-900/20">
                      <i class="ph-paper-plane-right"></i> Send Reply
                   </button>
                </div>
             </form>
           `:`
             <div class="flex items-center justify-center p-3 rounded-xl bg-zinc-800/50 border border-white/5 text-zinc-500 text-sm">
                <i class="ph-check-circle text-emerald-500 mr-2"></i> Reply sent
             </div>
           `}
        </div>
     </div>
   `},k2=()=>{const r=De.getUser();if(!r||r.role!=="admin"){window.location.hash="#/login";return}const e=document.getElementById("messageListContainer"),t=document.getElementById("messageDetailPanel"),n=document.getElementById("mobileDetailOverlay"),s=document.getElementById("mobileDetailContent"),i=document.getElementById("closeMobileDetail"),o=document.getElementById("unreadCount");let l=[];const c=async()=>{l=await ft.getMessages(),h()},u=()=>{const w=l.filter(x=>x.status==="unread").length;w>0?(o.textContent=`${w} UNREAD`,o.classList.remove("hidden")):o.classList.add("hidden")},h=()=>{if(l.length===0){e.innerHTML=`
               <div class="flex flex-col items-center justify-center mt-20 opacity-50 text-center">
                  <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                     <i class="ph-tray text-3xl text-zinc-500"></i>
                  </div>
                  <h3 class="text-white font-bold">No messages yet</h3>
                  <p class="text-xs text-zinc-500 mt-1">Messages from Contact page will appear here</p>
               </div>
            `;return}e.innerHTML=l.map(w=>C2(w)).join(""),u()},p=w=>{const x=l.find(E=>E.id==w);if(!x)return;const _=P2(x);window.innerWidth>=768?(t.innerHTML=_,t.classList.remove("items-center","justify-center","text-zinc-500"),t.classList.add("block"),_e.from(t.children,{opacity:0,y:10,duration:.3})):(s.innerHTML=_,n.classList.remove("hidden"),s.classList.add("p-6")),m(),x.status==="unread"&&ft.markAsRead(x.id).then(()=>{x.status="read",h(),window.dispatchEvent(new Event("inbox-updated"))}).catch(E=>console.error("Failed to mark read",E))},m=()=>{const w=document.querySelector('[data-action="mark_read"]'),x=document.querySelector(".action-delete"),_=document.querySelector(".action-reply-wa"),E=document.querySelector(".reply-form");E&&E.addEventListener("submit",async P=>{P.preventDefault();const R=P.target.querySelector("button"),V=P.target.querySelector("textarea").value.trim();if(!V)return;const M=P.target.dataset.id,O=R.innerHTML;R.innerHTML='<i class="ph-spinner animate-spin"></i> Sending...',R.disabled=!0;try{await ft.sendReply(M,V);const b=l.find(v=>v.id==M);b&&(b.status="replied",b.reply=V,b.replied_at="Just now"),h(),p(M),window.dispatchEvent(new Event("inbox-updated"))}catch(b){console.error(b),R.innerHTML=O,R.disabled=!1,alert("Failed to send reply")}}),w&&w.addEventListener("click",async P=>{const R=P.target.dataset.id;await ft.markAsRead(R);const k=l.find(V=>V.id==R);k&&(k.status="read"),h(),P.target.remove(),window.dispatchEvent(new Event("inbox-updated"))}),x&&x.addEventListener("click",async P=>{if(confirm("Delete this message permanently?")){const R=P.target.dataset.id;await ft.deleteMessage(R),l=l.filter(k=>k.id!=R),h(),window.dispatchEvent(new Event("inbox-updated")),window.innerWidth>=768?(t.innerHTML='<i class="ph-envelope-open text-4xl mb-4 opacity-50"></i><p>Select a message to view details</p>',t.classList.add("items-center","justify-center","text-zinc-500")):n.classList.add("hidden")}}),_&&_.addEventListener("click",async P=>{const R=P.target.dataset.id;await ft.markAsReplied(R);const k=l.find(V=>V.id==R);k&&(k.status="replied"),h()})};e.addEventListener("click",w=>{const x=w.target.closest(".message-card");x&&p(x.dataset.id)}),i.addEventListener("click",()=>{n.classList.add("hidden")}),c()},D2=()=>`
    <div class="flex-1 p-6 md:p-12 overflow-y-auto w-full animate-fade-in relative z-10 px-4 md:px-0">
      <div class="max-w-3xl mx-auto min-h-[80vh]">
      
      <div class="flex items-center justify-between mb-8">
         <div>
            <h1 class="text-2xl font-bold font-space text-white">Notifications</h1>
            <p class="text-sm text-zinc-500 mt-1">Replies from the owner</p>
         </div>
         <div class="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center border border-white/5 text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5">
               <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.9,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
         </div>
      </div>

      <div id="notifList" class="space-y-4">
          <!-- Skeletons -->
          ${[1,2].map(()=>`
             <div class="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 animate-pulse h-32"></div>
          `).join("")}
      </div>

    </div>
  `,V2=()=>{const r=De.getUser();if(!r){window.location.hash="#/login";return}const e=document.getElementById("notifList"),t=async()=>{try{const n=await ft.getMyMessages(r.id);if(n.length===0){e.innerHTML=`
                   <div class="text-center py-20 opacity-50">
                       <i class="ph-bell-slash text-4xl mb-4 text-zinc-600"></i>
                       <p class="text-zinc-500">No notifications yet.</p>
                   </div>
                `;return}e.innerHTML=n.map(s=>M2(s)).join(""),e.addEventListener("click",async s=>{var l;const i=s.target.closest(".action-user-mark-read"),o=s.target.closest(".action-user-reply-toggle");if(i){const c=i.dataset.id;await ft.userMarkRead(c);const u=i.closest(".notif-card");(l=u.querySelector(".notif-dot-ping"))==null||l.remove(),u.classList.remove("border-emerald-500/30"),u.classList.add("border-white/5"),i.remove(),window.dispatchEvent(new Event("inbox-updated"))}if(o){const c=o.dataset.id,u=document.querySelector(`.reply-box-${c}`);u.classList.toggle("hidden"),o.innerHTML=u.classList.contains("hidden")?'<i class="ph-chat-circle-dots"></i> Reply Back':'<i class="ph-x"></i> Close'}}),e.addEventListener("submit",async s=>{const i=s.target.closest(".user-reply-form");if(i){s.preventDefault();const o=i.querySelector('button[type="submit"]'),c=i.querySelector("textarea").value.trim();if(!c)return;const u=o.innerHTML;o.innerHTML='<i class="ph-spinner animate-spin"></i> Sending...',o.disabled=!0;try{const h=i.dataset.parentId;await ft.userReply(h,c),i.innerHTML='<div class="p-3 text-emerald-400 text-xs font-bold text-center bg-emerald-500/10 rounded-xl border border-emerald-500/20"><i class="ph-check-circle"></i> Sent to Owner</div>',setTimeout(()=>{t()},2e3)}catch(h){console.error(h),o.innerHTML=u,o.disabled=!1}}}),_e.from(".notif-card",{y:20,opacity:0,stagger:.1,duration:.5})}catch(n){console.error(n),e.innerHTML='<p class="text-red-500 text-center">Failed to load notifications.</p>'}};t()},M2=r=>{const e=De.getUser(),t=e&&e.avatar?e.avatar:`https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=random`,n=r.status==="replied",s=n&&r.user_read==0,i=new Date(r.created_at).toLocaleDateString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return`
      <div class="notif-card relative bg-zinc-900/60 backdrop-blur-sm border ${s?"border-emerald-500/30":"border-white/5"} rounded-2xl p-6 overflow-hidden transition-all hover:border-white/10 group">
         
         ${s?'<div class="notif-dot-ping absolute top-0 right-0 p-3"><span class="flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span></div>':""}

         <div class="flex flex-col gap-4">
             <!-- Your Message -->
             <div class="flex gap-4 opacity-70 hover:opacity-100 transition-opacity">
                 <div class="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden shrink-0 border border-white/5">
                    <img src="${t}" class="w-full h-full object-cover">
                 </div>
                 <div class="flex-1">
                    <div class="flex items-center justify-between mb-1">
                       <p class="text-xs text-zinc-500 uppercase tracking-wider font-bold">You wrote • ${i}</p>
                       <div class="flex gap-2">
                           ${s?`<button class="action-user-mark-read text-[10px] text-emerald-400 hover:text-emerald-300 font-bold uppercase transition-colors" data-id="${r.id}">Mark Read</button>`:""}
                       </div>
                    </div>
                    <p class="text-sm text-zinc-300 leading-relaxed max-w-xl">${r.message}</p>
                 </div>
             </div>

             <!-- Reply -->
             ${n?`
                <div class="ml-4 md:ml-12 relative mt-2 pl-6 border-l-2 border-emerald-500/20">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                           <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase border border-emerald-500/20">
                               Reply Received
                           </span>
                           <span class="text-[10px] text-zinc-600">${r.replied_at?new Date(r.replied_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}</span>
                        </div>
                        
                        <button class="action-user-reply-toggle text-[10px] text-zinc-500 hover:text-white font-bold uppercase flex items-center gap-1 transition-colors" data-id="${r.id}">
                           <i class="ph-chat-circle-dots"></i> Reply Back
                        </button>
                    </div>
                    <p class="text-white font-medium leading-relaxed">${r.reply}</p>
                    
                    <!-- Reply Box (Hidden by default) -->
                    <div class="reply-box-${r.id} mt-4 hidden animate-fade-in-up">
                       <form class="user-reply-form space-y-2" data-parent-id="${r.id}">
                          <textarea rows="2" placeholder="Write back..." class="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-emerald-500/50 focus:outline-none transition-all resize-none"></textarea>
                          <div class="flex justify-end">
                             <button type="submit" class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all shadow-lg shadow-emerald-900/20">
                                Send to Owner
                             </button>
                          </div>
                       </form>
                    </div>
                </div>
             `:`
                <div class="ml-12 mt-2">
                    <span class="text-[10px] text-zinc-600 italic bg-zinc-800/30 px-2 py-1 rounded">Waiting for reply...</span>
                </div>
             `}
         </div>
      </div>
    `};Bb();window.addEventListener("error",r=>{document.body.innerHTML+=`<div style="position:fixed;top:0;left:0;background:red;color:white;z-index:9999;padding:20px;">Error: ${r.message} at ${r.filename}:${r.lineno}</div>`});const N2={"/login":{render:i2,afterRender:o2},"/register":{render:a2,afterRender:l2},"/":{render:Bt(c2),afterRender:()=>{zt(),u2()}},"/projects":{render:Bt(d2),afterRender:()=>{zt(),f2()}},"/dashboard":{render:Bt(p2),protected:!0,afterRender:()=>{zt(),m2()}},"/chat":{render:Bt(v2),protected:!0,afterRender:()=>{zt(),w2()}},"/journey":{render:Bt(b2),afterRender:()=>{zt(),x2()}},"/testimonials":{render:Bt(T2),afterRender:()=>{zt(),E2()}},"/contact":{render:Bt(I2),afterRender:()=>{zt(),A2()}},"/notifications":{render:Bt(D2),protected:!0,afterRender:()=>{zt(),V2()}},"/owner/inbox":{render:Bt(R2),protected:!0,afterRender:()=>{zt(),k2()}},"/404":{render:S2}};new Og(N2);
