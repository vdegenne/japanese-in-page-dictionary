(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$3=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$8=Symbol(),n$5=new Map;class s$4{constructor(t,n){if(this._$cssResult$=!0,n!==e$8)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$5.get(this.cssText);return t$3&&void 0===e&&(n$5.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$6=t=>new s$4("string"==typeof t?t:t+"",e$8),r$3=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$4(o,e$8)},i$5=(e,n)=>{t$3?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$6(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$3;const e$7=window.trustedTypes,r$2=e$7?e$7.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$5={toAttribute(t,i){switch(i){case Boolean:t=t?r$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$4=(t,i)=>i!==t&&(i==i||t==t),l$5={attribute:!0,type:String,converter:o$5,reflect:!1,hasChanged:n$4};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$5){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$5}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$5(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$5){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$5.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$5.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$3=globalThis.reactiveElementVersions)&&void 0!==s$3?s$3:globalThis.reactiveElementVersions=[]).push("1.3.1");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$2;const i$4=globalThis.trustedTypes,s$2=i$4?i$4.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$6=`lit$${(Math.random()+"").slice(9)}$`,o$4="?"+e$6,n$3=`<${o$4}>`,l$4=document,h=(t="")=>l$4.createComment(t),r$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f$1=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$4.createTreeWalker(l$4,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f$1):void 0!==u[3]&&(d=f$1):d===f$1?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f$1:'"'===u[3]?m:_):d===m||d===_?d=f$1:d===v||d===a?d=c:(d=f$1,h=void 0);const y=d===f$1&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$3:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$6+y):s+e$6+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$2?s$2.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$6)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$6),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$6),s=t.length-1;if(s>0){l.textContent=i$4?i$4.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$4)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$6,t+1));)c.push({type:7,index:r}),t+=e$6.length-1;}r++;}}static createElement(t,i){const s=l$4.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$1(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$4).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r$1(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w&&r$1(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$4.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(h()),this.M(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r$1(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r$1(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$4?i$4.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t$2=globalThis.litHtmlVersions)&&void 0!==t$2?t$2:globalThis.litHtmlVersions=[]).push("2.2.2");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l$3,o$3;class s$1 extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s$1.finalized=!0,s$1._$litElement$=!0,null===(l$3=globalThis.litElementHydrateSupport)||void 0===l$3||l$3.call(globalThis,{LitElement:s$1});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s$1});(null!==(o$3=globalThis.litElementVersions)&&void 0!==o$3?o$3:globalThis.litElementVersions=[]).push("3.2.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const n$1=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i$3=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$5(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$3(e,n)}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function t$1(t){return e$5({...t,state:!0})}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const o$2=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function e$4(e){return o$2({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function i$2(i,n){return o$2({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function e$3(e){return o$2({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    function e$2(e){return o$2({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n;const e$1=null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$2(n){const{slot:l,selector:t}=null!=n?n:{};return o$2({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$1(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function o$1(o,n,r){let l,s=o;return "object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?l$2({slot:s,flatten:n,selector:r}):o$2({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}

    var lemmas = [
    	{
    		r: 1,
    		f: 41309.5,
    		l: "の"
    	},
    	{
    		r: 2,
    		f: 23509.54,
    		l: "に"
    	},
    	{
    		r: 3,
    		f: 22216.8,
    		l: "は"
    	},
    	{
    		r: 4,
    		f: 20431.93,
    		l: "て"
    	},
    	{
    		r: 5,
    		f: 20326.59,
    		l: "を"
    	},
    	{
    		r: 6,
    		f: 20110.69,
    		l: "が"
    	},
    	{
    		r: 7,
    		f: 19235.55,
    		l: "だ"
    	},
    	{
    		r: 8,
    		f: 17292.36,
    		l: "た"
    	},
    	{
    		r: 9,
    		f: 16841.17,
    		l: "する"
    	},
    	{
    		r: 10,
    		f: 15095.29,
    		l: "と"
    	},
    	{
    		r: 11,
    		f: 9604.49,
    		l: "ます"
    	},
    	{
    		r: 12,
    		f: 9537.75,
    		l: "で"
    	},
    	{
    		r: 13,
    		f: 8189,
    		l: "ない"
    	},
    	{
    		r: 14,
    		f: 8140.22,
    		l: "いる"
    	},
    	{
    		r: 15,
    		f: 7900.34,
    		l: "も"
    	},
    	{
    		r: 16,
    		f: 6766.19,
    		l: "ある"
    	},
    	{
    		r: 17,
    		f: 6001.95,
    		l: "・"
    	},
    	{
    		r: 18,
    		f: 5780.62,
    		l: "です"
    	},
    	{
    		r: 19,
    		f: 5690.07,
    		l: "「"
    	},
    	{
    		r: 20,
    		f: 5672.68,
    		l: "」"
    	},
    	{
    		r: 21,
    		f: 5451.05,
    		l: "こと"
    	},
    	{
    		r: 22,
    		f: 5444.29,
    		l: "e"
    	},
    	{
    		r: 23,
    		f: 4744.78,
    		l: "か"
    	},
    	{
    		r: 24,
    		f: 4590.55,
    		l: "o"
    	},
    	{
    		r: 25,
    		f: 4553.18,
    		l: "a"
    	},
    	{
    		r: 26,
    		f: 4248.5,
    		l: "t"
    	},
    	{
    		r: 27,
    		f: 4193.98,
    		l: "なる"
    	},
    	{
    		r: 28,
    		f: 4188.45,
    		l: "れる"
    	},
    	{
    		r: 29,
    		f: 4055.86,
    		l: "から"
    	},
    	{
    		r: 30,
    		f: 3689.19,
    		l: "）"
    	},
    	{
    		r: 31,
    		f: 3652.9,
    		l: "（"
    	},
    	{
    		r: 32,
    		f: 3430.63,
    		l: "i"
    	},
    	{
    		r: 33,
    		f: 3375.51,
    		l: "n"
    	},
    	{
    		r: 34,
    		f: 2968.67,
    		l: "r"
    	},
    	{
    		r: 35,
    		f: 2834.08,
    		l: "s"
    	},
    	{
    		r: 36,
    		f: 2702.29,
    		l: "ん"
    	},
    	{
    		r: 37,
    		f: 2691.51,
    		l: "よう"
    	},
    	{
    		r: 38,
    		f: 2496.04,
    		l: "いう"
    	},
    	{
    		r: 39,
    		f: 2463.71,
    		l: "う"
    	},
    	{
    		r: 40,
    		f: 2415.25,
    		l: "人"
    	},
    	{
    		r: 41,
    		f: 2275.62,
    		l: "m"
    	},
    	{
    		r: 42,
    		f: 2255.67,
    		l: "この"
    	},
    	{
    		r: 43,
    		f: 2190.45,
    		l: "という"
    	},
    	{
    		r: 44,
    		f: 2131.88,
    		l: "思う"
    	},
    	{
    		r: 45,
    		f: 2127.42,
    		l: "その"
    	},
    	{
    		r: 46,
    		f: 2108.52,
    		l: "l"
    	},
    	{
    		r: 47,
    		f: 2057.33,
    		l: "的"
    	},
    	{
    		r: 48,
    		f: 1984.31,
    		l: "c"
    	},
    	{
    		r: 49,
    		f: 1950.65,
    		l: "年"
    	},
    	{
    		r: 50,
    		f: 1942.04,
    		l: "日"
    	},
    	{
    		r: 51,
    		f: 1923.23,
    		l: "！"
    	},
    	{
    		r: 52,
    		f: 1806.37,
    		l: "h"
    	},
    	{
    		r: 53,
    		f: 1769.37,
    		l: "私"
    	},
    	{
    		r: 54,
    		f: 1757.94,
    		l: "もの"
    	},
    	{
    		r: 55,
    		f: 1734.3,
    		l: "や"
    	},
    	{
    		r: 56,
    		f: 1732.41,
    		l: "ば"
    	},
    	{
    		r: 57,
    		f: 1641.84,
    		l: "d"
    	},
    	{
    		r: 58,
    		f: 1516.78,
    		l: "？"
    	},
    	{
    		r: 59,
    		f: 1515.66,
    		l: "p"
    	},
    	{
    		r: 60,
    		f: 1479.29,
    		l: "それ"
    	},
    	{
    		r: 61,
    		f: 1459.64,
    		l: "u"
    	},
    	{
    		r: 62,
    		f: 1451.45,
    		l: "者"
    	},
    	{
    		r: 63,
    		f: 1437.45,
    		l: "できる"
    	},
    	{
    		r: 64,
    		f: 1428.85,
    		l: "これ"
    	},
    	{
    		r: 65,
    		f: 1399.05,
    		l: "#"
    	},
    	{
    		r: 66,
    		f: 1362.46,
    		l: "|"
    	},
    	{
    		r: 67,
    		f: 1263.36,
    		l: "言う"
    	},
    	{
    		r: 68,
    		f: 1248.2,
    		l: "b"
    	},
    	{
    		r: 69,
    		f: 1245.81,
    		l: "S"
    	},
    	{
    		r: 70,
    		f: 1245.62,
    		l: "y"
    	},
    	{
    		r: 71,
    		f: 1238.3,
    		l: "くる"
    	},
    	{
    		r: 72,
    		f: 1193.14,
    		l: "月"
    	},
    	{
    		r: 73,
    		f: 1187.18,
    		l: "C"
    	},
    	{
    		r: 74,
    		f: 1186.32,
    		l: "として"
    	},
    	{
    		r: 75,
    		f: 1174.8,
    		l: "さん"
    	},
    	{
    		r: 76,
    		f: 1164.49,
    		l: "T"
    	},
    	{
    		r: 77,
    		f: 1159.85,
    		l: "A"
    	},
    	{
    		r: 78,
    		f: 1149.99,
    		l: "："
    	},
    	{
    		r: 79,
    		f: 1136.97,
    		l: "まで"
    	},
    	{
    		r: 80,
    		f: 1126.11,
    		l: "たい"
    	},
    	{
    		r: 81,
    		f: 1112.01,
    		l: "g"
    	},
    	{
    		r: 82,
    		f: 1110.21,
    		l: "w"
    	},
    	{
    		r: 83,
    		f: 1100.39,
    		l: "など"
    	},
    	{
    		r: 84,
    		f: 1092.65,
    		l: "k"
    	},
    	{
    		r: 85,
    		f: 1089.02,
    		l: "中"
    	},
    	{
    		r: 86,
    		f: 1087.64,
    		l: "P"
    	},
    	{
    		r: 87,
    		f: 1077.28,
    		l: "られる"
    	},
    	{
    		r: 88,
    		f: 1070.51,
    		l: "お"
    	},
    	{
    		r: 89,
    		f: 1022.92,
    		l: "ね"
    	},
    	{
    		r: 90,
    		f: 1022.88,
    		l: "，"
    	},
    	{
    		r: 91,
    		f: 1015.61,
    		l: "…"
    	},
    	{
    		r: 92,
    		f: 1000.99,
    		l: "へ"
    	},
    	{
    		r: 93,
    		f: 982.69,
    		l: "見る"
    	},
    	{
    		r: 94,
    		f: 980.59,
    		l: "ため"
    	},
    	{
    		r: 95,
    		f: 963.62,
    		l: "てる"
    	},
    	{
    		r: 96,
    		f: 948.8,
    		l: "M"
    	},
    	{
    		r: 97,
    		f: 940.51,
    		l: "そう"
    	},
    	{
    		r: 98,
    		f: 925.92,
    		l: "日本"
    	},
    	{
    		r: 99,
    		f: 924.53,
    		l: "おる"
    	},
    	{
    		r: 100,
    		f: 915.56,
    		l: "一"
    	},
    	{
    		r: 101,
    		f: 898.33,
    		l: "ので"
    	},
    	{
    		r: 102,
    		f: 895.11,
    		l: "いく"
    	},
    	{
    		r: 103,
    		f: 885.3,
    		l: "だけ"
    	},
    	{
    		r: 104,
    		f: 877.59,
    		l: "何"
    	},
    	{
    		r: 105,
    		f: 875.29,
    		l: "よ"
    	},
    	{
    		r: 106,
    		f: 873.44,
    		l: "I"
    	},
    	{
    		r: 107,
    		f: 840.65,
    		l: "自分"
    	},
    	{
    		r: 108,
    		f: 839.58,
    		l: "しまう"
    	},
    	{
    		r: 109,
    		f: 838.17,
    		l: "について"
    	},
    	{
    		r: 110,
    		f: 834.18,
    		l: "R"
    	},
    	{
    		r: 111,
    		f: 829.72,
    		l: "方"
    	},
    	{
    		r: 112,
    		f: 825.32,
    		l: "E"
    	},
    	{
    		r: 113,
    		f: 819.66,
    		l: "時"
    	},
    	{
    		r: 114,
    		f: 799.41,
    		l: "D"
    	},
    	{
    		r: 115,
    		f: 791.48,
    		l: "ぬ"
    	},
    	{
    		r: 116,
    		f: 782.05,
    		l: "問題"
    	},
    	{
    		r: 117,
    		f: 772.03,
    		l: "考える"
    	},
    	{
    		r: 118,
    		f: 766.23,
    		l: "O"
    	},
    	{
    		r: 119,
    		f: 748.27,
    		l: "せる"
    	},
    	{
    		r: 120,
    		f: 737.44,
    		l: "また"
    	},
    	{
    		r: 121,
    		f: 734.08,
    		l: "N"
    	},
    	{
    		r: 122,
    		f: 725.64,
    		l: "B"
    	},
    	{
    		r: 123,
    		f: 716.75,
    		l: "f"
    	},
    	{
    		r: 124,
    		f: 705.48,
    		l: "『"
    	},
    	{
    		r: 125,
    		f: 703.35,
    		l: "今"
    	},
    	{
    		r: 126,
    		f: 702.19,
    		l: "』"
    	},
    	{
    		r: 127,
    		f: 699.98,
    		l: "みる"
    	},
    	{
    		r: 128,
    		f: 698.53,
    		l: "L"
    	},
    	{
    		r: 129,
    		f: 695.44,
    		l: "でも"
    	},
    	{
    		r: 130,
    		f: 675.63,
    		l: "やる"
    	},
    	{
    		r: 131,
    		f: 661.99,
    		l: "わけ"
    	},
    	{
    		r: 132,
    		f: 650.23,
    		l: "ござる"
    	},
    	{
    		r: 133,
    		f: 642.6,
    		l: "たち"
    	},
    	{
    		r: 134,
    		f: 638.75,
    		l: "ところ"
    	},
    	{
    		r: 135,
    		f: 633.91,
    		l: "．"
    	},
    	{
    		r: 136,
    		f: 627.78,
    		l: "さ"
    	},
    	{
    		r: 137,
    		f: 615.98,
    		l: "いい"
    	},
    	{
    		r: 138,
    		f: 596.98,
    		l: "って"
    	},
    	{
    		r: 139,
    		f: 590.87,
    		l: "前"
    	},
    	{
    		r: 140,
    		f: 585.7,
    		l: "第"
    	},
    	{
    		r: 141,
    		f: 580.14,
    		l: "たり"
    	},
    	{
    		r: 142,
    		f: 577.58,
    		l: "性"
    	},
    	{
    		r: 143,
    		f: 568.04,
    		l: "行く"
    	},
    	{
    		r: 144,
    		f: 563.69,
    		l: "より"
    	},
    	{
    		r: 145,
    		f: 561.3,
    		l: "そして"
    	},
    	{
    		r: 146,
    		f: 560.8,
    		l: "けど"
    	},
    	{
    		r: 147,
    		f: 559.79,
    		l: "どう"
    	},
    	{
    		r: 148,
    		f: 551.97,
    		l: "出る"
    	},
    	{
    		r: 149,
    		f: 550.77,
    		l: "時間"
    	},
    	{
    		r: 150,
    		f: 549.7,
    		l: "会"
    	},
    	{
    		r: 151,
    		f: 537.33,
    		l: "書く"
    	},
    	{
    		r: 152,
    		f: 534.03,
    		l: "円"
    	},
    	{
    		r: 153,
    		f: 533.8,
    		l: "二"
    	},
    	{
    		r: 154,
    		f: 533.04,
    		l: "し"
    	},
    	{
    		r: 155,
    		f: 527.77,
    		l: "場合"
    	},
    	{
    		r: 156,
    		f: 526.2,
    		l: "持つ"
    	},
    	{
    		r: 157,
    		f: 515.52,
    		l: "必要"
    	},
    	{
    		r: 158,
    		f: 508.95,
    		l: "情報"
    	},
    	{
    		r: 159,
    		f: 501.01,
    		l: "○"
    	},
    	{
    		r: 160,
    		f: 495.56,
    		l: "しかし"
    	},
    	{
    		r: 161,
    		f: 492.98,
    		l: "F"
    	},
    	{
    		r: 162,
    		f: 484.8,
    		l: "v"
    	},
    	{
    		r: 163,
    		f: 481.44,
    		l: "とき"
    	},
    	{
    		r: 164,
    		f: 480.73,
    		l: "コメント"
    	},
    	{
    		r: 165,
    		f: 478.1,
    		l: "化"
    	},
    	{
    		r: 166,
    		f: 471.03,
    		l: "上"
    	},
    	{
    		r: 167,
    		f: 465.43,
    		l: "事"
    	},
    	{
    		r: 168,
    		f: 464.3,
    		l: "W"
    	},
    	{
    		r: 169,
    		f: 464.22,
    		l: "使う"
    	},
    	{
    		r: 170,
    		f: 462.43,
    		l: "行う"
    	},
    	{
    		r: 171,
    		f: 459.92,
    		l: "な"
    	},
    	{
    		r: 172,
    		f: 455.18,
    		l: "ご"
    	},
    	{
    		r: 173,
    		f: 453.58,
    		l: "話"
    	},
    	{
    		r: 174,
    		f: 453.14,
    		l: "くれる"
    	},
    	{
    		r: 175,
    		f: 451.09,
    		l: "U"
    	},
    	{
    		r: 176,
    		f: 446.16,
    		l: "ながら"
    	},
    	{
    		r: 177,
    		f: 442.95,
    		l: "よい"
    	},
    	{
    		r: 178,
    		f: 442.7,
    		l: "H"
    	},
    	{
    		r: 179,
    		f: 441.97,
    		l: "本"
    	},
    	{
    		r: 180,
    		f: 432.09,
    		l: "じゃ"
    	},
    	{
    		r: 181,
    		f: 430.8,
    		l: "ここ"
    	},
    	{
    		r: 182,
    		f: 429.1,
    		l: "分"
    	},
    	{
    		r: 183,
    		f: 426.14,
    		l: "十"
    	},
    	{
    		r: 184,
    		f: 425.43,
    		l: "目"
    	},
    	{
    		r: 185,
    		f: 424.65,
    		l: "多い"
    	},
    	{
    		r: 186,
    		f: 421.45,
    		l: "知る"
    	},
    	{
    		r: 187,
    		f: 420.74,
    		l: "■"
    	},
    	{
    		r: 188,
    		f: 418.19,
    		l: "G"
    	},
    	{
    		r: 189,
    		f: 412.67,
    		l: "今日"
    	},
    	{
    		r: 190,
    		f: 411.1,
    		l: "良い"
    	},
    	{
    		r: 191,
    		f: 408.98,
    		l: "関係"
    	},
    	{
    		r: 192,
    		f: 404.21,
    		l: "委員"
    	},
    	{
    		r: 193,
    		f: 403.3,
    		l: "後"
    	},
    	{
    		r: 194,
    		f: 401.69,
    		l: "かも"
    	},
    	{
    		r: 195,
    		f: 398.34,
    		l: "家"
    	},
    	{
    		r: 196,
    		f: 394.48,
    		l: "そういう"
    	},
    	{
    		r: 197,
    		f: 392.28,
    		l: "聞く"
    	},
    	{
    		r: 198,
    		f: 389.5,
    		l: "世界"
    	},
    	{
    		r: 199,
    		f: 389.34,
    		l: "気"
    	},
    	{
    		r: 200,
    		f: 383.39,
    		l: "点"
    	},
    	{
    		r: 201,
    		f: 382.65,
    		l: "万"
    	},
    	{
    		r: 202,
    		f: 381.6,
    		l: "べし"
    	},
    	{
    		r: 203,
    		f: 381.48,
    		l: "】"
    	},
    	{
    		r: 204,
    		f: 380.55,
    		l: "【"
    	},
    	{
    		r: 205,
    		f: 379.18,
    		l: "もう"
    	},
    	{
    		r: 206,
    		f: 379.03,
    		l: "わかる"
    	},
    	{
    		r: 207,
    		f: 377.46,
    		l: "バック"
    	},
    	{
    		r: 208,
    		f: 375.34,
    		l: "社会"
    	},
    	{
    		r: 209,
    		f: 375.02,
    		l: "読む"
    	},
    	{
    		r: 210,
    		f: 372.01,
    		l: "入る"
    	},
    	{
    		r: 211,
    		f: 371.13,
    		l: "〜"
    	},
    	{
    		r: 212,
    		f: 369.72,
    		l: "来る"
    	},
    	{
    		r: 213,
    		f: 364.89,
    		l: "トラック"
    	},
    	{
    		r: 214,
    		f: 360.33,
    		l: "によって"
    	},
    	{
    		r: 215,
    		f: 360.12,
    		l: "仕事"
    	},
    	{
    		r: 216,
    		f: 358.01,
    		l: "同じ"
    	},
    	{
    		r: 217,
    		f: 355.9,
    		l: "数"
    	},
    	{
    		r: 218,
    		f: 354.41,
    		l: "記事"
    	},
    	{
    		r: 219,
    		f: 346.64,
    		l: "いただく"
    	},
    	{
    		r: 220,
    		f: 344.83,
    		l: "彼"
    	},
    	{
    		r: 221,
    		f: 344.38,
    		l: "大"
    	},
    	{
    		r: 222,
    		f: 343.9,
    		l: "国"
    	},
    	{
    		r: 223,
    		f: 336.74,
    		l: "等"
    	},
    	{
    		r: 224,
    		f: 330.72,
    		l: "くださる"
    	},
    	{
    		r: 225,
    		f: 330.49,
    		l: "_"
    	},
    	{
    		r: 226,
    		f: 329.46,
    		l: "回"
    	},
    	{
    		r: 227,
    		f: 328.05,
    		l: "三"
    	},
    	{
    		r: 228,
    		f: 326.9,
    		l: "とか"
    	},
    	{
    		r: 229,
    		f: 324.74,
    		l: "君"
    	},
    	{
    		r: 230,
    		f: 324.66,
    		l: "法"
    	},
    	{
    		r: 231,
    		f: 323.97,
    		l: "K"
    	},
    	{
    		r: 232,
    		f: 321.75,
    		l: "意味"
    	},
    	{
    		r: 233,
    		f: 319.16,
    		l: "力"
    	},
    	{
    		r: 234,
    		f: 319,
    		l: "以上"
    	},
    	{
    		r: 235,
    		f: 318.59,
    		l: "J"
    	},
    	{
    		r: 236,
    		f: 313.99,
    		l: "会社"
    	},
    	{
    		r: 237,
    		f: 310.14,
    		l: "j"
    	},
    	{
    		r: 238,
    		f: 310.05,
    		l: "よる"
    	},
    	{
    		r: 239,
    		f: 306.4,
    		l: "ほど"
    	},
    	{
    		r: 240,
    		f: 305.97,
    		l: "そんな"
    	},
    	{
    		r: 241,
    		f: 305.03,
    		l: "人間"
    	},
    	{
    		r: 242,
    		f: 304.93,
    		l: "★"
    	},
    	{
    		r: 243,
    		f: 303.63,
    		l: "V"
    	},
    	{
    		r: 244,
    		f: 298.63,
    		l: "現在"
    	},
    	{
    		r: 245,
    		f: 296.6,
    		l: "作る"
    	},
    	{
    		r: 246,
    		f: 292.74,
    		l: "企業"
    	},
    	{
    		r: 247,
    		f: 292.72,
    		l: "氏"
    	},
    	{
    		r: 248,
    		f: 288.24,
    		l: "ちょっと"
    	},
    	{
    		r: 249,
    		f: 287.31,
    		l: "間"
    	},
    	{
    		r: 250,
    		f: 286.66,
    		l: "可能"
    	},
    	{
    		r: 251,
    		f: 285.81,
    		l: "感じる"
    	},
    	{
    		r: 252,
    		f: 285.39,
    		l: "出す"
    	},
    	{
    		r: 253,
    		f: 285.14,
    		l: "研究"
    	},
    	{
    		r: 254,
    		f: 282.27,
    		l: "投稿"
    	},
    	{
    		r: 255,
    		f: 281.68,
    		l: "他"
    	},
    	{
    		r: 256,
    		f: 280.77,
    		l: "アメリカ"
    	},
    	{
    		r: 257,
    		f: 280.21,
    		l: "しれる"
    	},
    	{
    		r: 258,
    		f: 278.23,
    		l: "けれども"
    	},
    	{
    		r: 259,
    		f: 276.63,
    		l: "リンク"
    	},
    	{
    		r: 260,
    		f: 276.54,
    		l: "今回"
    	},
    	{
    		r: 261,
    		f: 274,
    		l: "いたす"
    	},
    	{
    		r: 262,
    		f: 273.68,
    		l: "高い"
    	},
    	{
    		r: 263,
    		f: 273.29,
    		l: "す"
    	},
    	{
    		r: 264,
    		f: 271.58,
    		l: "次"
    	},
    	{
    		r: 265,
    		f: 269.14,
    		l: "ら"
    	},
    	{
    		r: 266,
    		f: 267.39,
    		l: "言葉"
    	},
    	{
    		r: 267,
    		f: 265.75,
    		l: "こういう"
    	},
    	{
    		r: 268,
    		f: 263.75,
    		l: "おく"
    	},
    	{
    		r: 269,
    		f: 263.45,
    		l: "僕"
    	},
    	{
    		r: 270,
    		f: 262.13,
    		l: "出来る"
    	},
    	{
    		r: 271,
    		f: 261.99,
    		l: "受ける"
    	},
    	{
    		r: 272,
    		f: 261.92,
    		l: "●"
    	},
    	{
    		r: 273,
    		f: 260.39,
    		l: "x"
    	},
    	{
    		r: 274,
    		f: 259.69,
    		l: "経済"
    	},
    	{
    		r: 275,
    		f: 256.89,
    		l: "あなた"
    	},
    	{
    		r: 276,
    		f: 256.71,
    		l: "手"
    	},
    	{
    		r: 277,
    		f: 256.65,
    		l: "もらう"
    	},
    	{
    		r: 278,
    		f: 256.52,
    		l: "そこ"
    	},
    	{
    		r: 279,
    		f: 255.07,
    		l: "による"
    	},
    	{
    		r: 280,
    		f: 255,
    		l: "最近"
    	},
    	{
    		r: 281,
    		f: 254.97,
    		l: "結果"
    	},
    	{
    		r: 282,
    		f: 254.9,
    		l: "買う"
    	},
    	{
    		r: 283,
    		f: 253.91,
    		l: "度"
    	},
    	{
    		r: 284,
    		f: 253.66,
    		l: "％"
    	},
    	{
    		r: 285,
    		f: 252.95,
    		l: "しか"
    	},
    	{
    		r: 286,
    		f: 250.53,
    		l: "違う"
    	},
    	{
    		r: 287,
    		f: 250.2,
    		l: "映画"
    	},
    	{
    		r: 288,
    		f: 249.95,
    		l: "／"
    	},
    	{
    		r: 289,
    		f: 249.49,
    		l: "先生"
    	},
    	{
    		r: 290,
    		f: 248.26,
    		l: "生活"
    	},
    	{
    		r: 291,
    		f: 248.1,
    		l: "にる"
    	},
    	{
    		r: 292,
    		f: 247.4,
    		l: "金"
    	},
    	{
    		r: 293,
    		f: 244.07,
    		l: "＝"
    	},
    	{
    		r: 294,
    		f: 243.86,
    		l: "時代"
    	},
    	{
    		r: 295,
    		f: 243.73,
    		l: "政府"
    	},
    	{
    		r: 296,
    		f: 243.43,
    		l: "非常"
    	},
    	{
    		r: 297,
    		f: 242.38,
    		l: "得る"
    	},
    	{
    		r: 298,
    		f: 241.47,
    		l: "御"
    	},
    	{
    		r: 299,
    		f: 241.29,
    		l: "＞"
    	},
    	{
    		r: 300,
    		f: 240.17,
    		l: "店"
    	},
    	{
    		r: 301,
    		f: 238.49,
    		l: "くらい"
    	},
    	{
    		r: 302,
    		f: 238.11,
    		l: "まだ"
    	},
    	{
    		r: 303,
    		f: 237.28,
    		l: "において"
    	},
    	{
    		r: 304,
    		f: 236.88,
    		l: "内容"
    	},
    	{
    		r: 305,
    		f: 236.87,
    		l: "^"
    	},
    	{
    		r: 306,
    		f: 235.68,
    		l: "一つ"
    	},
    	{
    		r: 307,
    		f: 234.72,
    		l: "心"
    	},
    	{
    		r: 308,
    		f: 234.25,
    		l: "――"
    	},
    	{
    		r: 309,
    		f: 232.04,
    		l: "説明"
    	},
    	{
    		r: 310,
    		f: 229.48,
    		l: "写真"
    	},
    	{
    		r: 311,
    		f: 228.05,
    		l: "ただ"
    	},
    	{
    		r: 312,
    		f: 226.71,
    		l: "サイト"
    	},
    	{
    		r: 313,
    		f: 226.58,
    		l: "教育"
    	},
    	{
    		r: 314,
    		f: 226.45,
    		l: "女性"
    	},
    	{
    		r: 315,
    		f: 226.31,
    		l: "子供"
    	},
    	{
    		r: 316,
    		f: 225.14,
    		l: "方法"
    	},
    	{
    		r: 317,
    		f: 224.28,
    		l: "に対して"
    	},
    	{
    		r: 318,
    		f: 222.91,
    		l: "＊"
    	},
    	{
    		r: 319,
    		f: 222.41,
    		l: "大きい"
    	},
    	{
    		r: 320,
    		f: 222.4,
    		l: "あるいは"
    	},
    	{
    		r: 321,
    		f: 221.21,
    		l: "名"
    	},
    	{
    		r: 322,
    		f: 220.74,
    		l: "利用"
    	},
    	{
    		r: 323,
    		f: 219.77,
    		l: "さらに"
    	},
    	{
    		r: 324,
    		f: 217.76,
    		l: "少し"
    	},
    	{
    		r: 325,
    		f: 216.88,
    		l: "紹介"
    	},
    	{
    		r: 326,
    		f: 215.72,
    		l: "技術"
    	},
    	{
    		r: 327,
    		f: 214.35,
    		l: "いろいろ"
    	},
    	{
    		r: 328,
    		f: 214.08,
    		l: "なんて"
    	},
    	{
    		r: 329,
    		f: 212.05,
    		l: "名前"
    	},
    	{
    		r: 330,
    		f: 211.93,
    		l: "参加"
    	},
    	{
    		r: 331,
    		f: 210.77,
    		l: "らしい"
    	},
    	{
    		r: 332,
    		f: 210.53,
    		l: "分かる"
    	},
    	{
    		r: 333,
    		f: 210.02,
    		l: "大きな"
    	},
    	{
    		r: 334,
    		f: 209.23,
    		l: "食べる"
    	},
    	{
    		r: 335,
    		f: 209.06,
    		l: "感じ"
    	},
    	{
    		r: 336,
    		f: 207.54,
    		l: "やはり"
    	},
    	{
    		r: 337,
    		f: 207.51,
    		l: "☆"
    	},
    	{
    		r: 338,
    		f: 206.32,
    		l: "く"
    	},
    	{
    		r: 339,
    		f: 206.09,
    		l: "うち"
    	},
    	{
    		r: 340,
    		f: 205.4,
    		l: "入れる"
    	},
    	{
    		r: 341,
    		f: 204.39,
    		l: "見える"
    	},
    	{
    		r: 342,
    		f: 204.21,
    		l: "どの"
    	},
    	{
    		r: 343,
    		f: 203.3,
    		l: "にとって"
    	},
    	{
    		r: 344,
    		f: 202.03,
    		l: "活動"
    	},
    	{
    		r: 345,
    		f: 201.93,
    		l: "東京"
    	},
    	{
    		r: 346,
    		f: 201.75,
    		l: "好き"
    	},
    	{
    		r: 347,
    		f: 200.53,
    		l: "どこ"
    	},
    	{
    		r: 348,
    		f: 199.85,
    		l: "かなり"
    	},
    	{
    		r: 349,
    		f: 199.82,
    		l: "こんな"
    	},
    	{
    		r: 350,
    		f: 199.37,
    		l: "状況"
    	},
    	{
    		r: 351,
    		f: 198.03,
    		l: "五"
    	},
    	{
    		r: 352,
    		f: 197.61,
    		l: "新しい"
    	},
    	{
    		r: 353,
    		f: 197.04,
    		l: "に対する"
    	},
    	{
    		r: 354,
    		f: 196.81,
    		l: "無い"
    	},
    	{
    		r: 355,
    		f: 195.51,
    		l: "強い"
    	},
    	{
    		r: 356,
    		f: 195.49,
    		l: "管理"
    	},
    	{
    		r: 357,
    		f: 195.39,
    		l: "特に"
    	},
    	{
    		r: 358,
    		f: 195.09,
    		l: "環境"
    	},
    	{
    		r: 359,
    		f: 194.74,
    		l: "ページ"
    	},
    	{
    		r: 360,
    		f: 194.55,
    		l: "Y"
    	},
    	{
    		r: 361,
    		f: 193.88,
    		l: "のに"
    	},
    	{
    		r: 362,
    		f: 193.1,
    		l: "地域"
    	},
    	{
    		r: 363,
    		f: 192.97,
    		l: "始める"
    	},
    	{
    		r: 364,
    		f: 192.95,
    		l: "本当に"
    	},
    	{
    		r: 365,
    		f: 192.82,
    		l: "悪い"
    	},
    	{
    		r: 366,
    		f: 192.48,
    		l: "実際"
    	},
    	{
    		r: 367,
    		f: 192.21,
    		l: "中国"
    	},
    	{
    		r: 368,
    		f: 191.93,
    		l: "市"
    	},
    	{
    		r: 369,
    		f: 191.78,
    		l: "先"
    	},
    	{
    		r: 370,
    		f: 190.95,
    		l: "誰"
    	},
    	{
    		r: 371,
    		f: 190.82,
    		l: "個人"
    	},
    	{
    		r: 372,
    		f: 190.46,
    		l: "意見"
    	},
    	{
    		r: 373,
    		f: 189.75,
    		l: "状態"
    	},
    	{
    		r: 374,
    		f: 189.63,
    		l: "歳"
    	},
    	{
    		r: 375,
    		f: 189.42,
    		l: "大学"
    	},
    	{
    		r: 376,
    		f: 188.97,
    		l: "多く"
    	},
    	{
    		r: 377,
    		f: 188.77,
    		l: "物"
    	},
    	{
    		r: 378,
    		f: 188.45,
    		l: "存在"
    	},
    	{
    		r: 379,
    		f: 188.12,
    		l: "最後"
    	},
    	{
    		r: 380,
    		f: 187.65,
    		l: "終わる"
    	},
    	{
    		r: 381,
    		f: 187.33,
    		l: "笑"
    	},
    	{
    		r: 382,
    		f: 187.29,
    		l: "つく"
    	},
    	{
    		r: 383,
    		f: 187.2,
    		l: "システム"
    	},
    	{
    		r: 384,
    		f: 187.14,
    		l: "すべて"
    	},
    	{
    		r: 385,
    		f: 187.08,
    		l: "彼女"
    	},
    	{
    		r: 386,
    		f: 187.03,
    		l: "理解"
    	},
    	{
    		r: 387,
    		f: 186.94,
    		l: "学校"
    	},
    	{
    		r: 388,
    		f: 186.57,
    		l: "部分"
    	},
    	{
    		r: 389,
    		f: 186.11,
    		l: "とても"
    	},
    	{
    		r: 390,
    		f: 185.07,
    		l: "電話"
    	},
    	{
    		r: 391,
    		f: 184.27,
    		l: "用"
    	},
    	{
    		r: 392,
    		f: 183.79,
    		l: "部"
    	},
    	{
    		r: 393,
    		f: 183.79,
    		l: "z"
    	},
    	{
    		r: 394,
    		f: 183.71,
    		l: "県"
    	},
    	{
    		r: 395,
    		f: 183.44,
    		l: "日記"
    	},
    	{
    		r: 396,
    		f: 182.73,
    		l: "メール"
    	},
    	{
    		r: 397,
    		f: 182.62,
    		l: "いける"
    	},
    	{
    		r: 398,
    		f: 182.61,
    		l: "制度"
    	},
    	{
    		r: 399,
    		f: 182.53,
    		l: "続ける"
    	},
    	{
    		r: 400,
    		f: 182.02,
    		l: "使用"
    	},
    	{
    		r: 401,
    		f: 181.44,
    		l: "スる"
    	},
    	{
    		r: 402,
    		f: 180.72,
    		l: "事業"
    	},
    	{
    		r: 403,
    		f: 180.23,
    		l: "四"
    	},
    	{
    		r: 404,
    		f: 179.81,
    		l: "固定"
    	},
    	{
    		r: 405,
    		f: 179.64,
    		l: "調査"
    	},
    	{
    		r: 406,
    		f: 179.63,
    		l: "変わる"
    	},
    	{
    		r: 407,
    		f: 179.62,
    		l: "続く"
    	},
    	{
    		r: 408,
    		f: 179.34,
    		l: "基本"
    	},
    	{
    		r: 409,
    		f: 179.33,
    		l: "もちろん"
    	},
    	{
    		r: 410,
    		f: 178.76,
    		l: "関連"
    	},
    	{
    		r: 411,
    		f: 178.74,
    		l: "一般"
    	},
    	{
    		r: 412,
    		f: 178.1,
    		l: "あと"
    	},
    	{
    		r: 413,
    		f: 176.87,
    		l: "開発"
    	},
    	{
    		r: 414,
    		f: 176.36,
    		l: "あの"
    	},
    	{
    		r: 415,
    		f: 175.97,
    		l: "音楽"
    	},
    	{
    		r: 416,
    		f: 175.91,
    		l: "一番"
    	},
    	{
    		r: 417,
    		f: 175.29,
    		l: "内"
    	},
    	{
    		r: 418,
    		f: 175.26,
    		l: "作品"
    	},
    	{
    		r: 419,
    		f: 175.01,
    		l: "側"
    	},
    	{
    		r: 420,
    		f: 175.01,
    		l: "重要"
    	},
    	{
    		r: 421,
    		f: 174.61,
    		l: "X"
    	},
    	{
    		r: 422,
    		f: 172.48,
    		l: "とる"
    	},
    	{
    		r: 423,
    		f: 172.16,
    		l: "最初"
    	},
    	{
    		r: 424,
    		f: 171.57,
    		l: "様"
    	},
    	{
    		r: 425,
    		f: 171.54,
    		l: "達"
    	},
    	{
    		r: 426,
    		f: 171.28,
    		l: "国民"
    	},
    	{
    		r: 427,
    		f: 171.16,
    		l: "サービス"
    	},
    	{
    		r: 428,
    		f: 171.15,
    		l: "もっと"
    	},
    	{
    		r: 429,
    		f: 169.37,
    		l: "に関する"
    	},
    	{
    		r: 430,
    		f: 169.02,
    		l: "こちら"
    	},
    	{
    		r: 431,
    		f: 168.92,
    		l: "かける"
    	},
    	{
    		r: 432,
    		f: 168.9,
    		l: "水"
    	},
    	{
    		r: 433,
    		f: 167.35,
    		l: "新"
    	},
    	{
    		r: 434,
    		f: 167.05,
    		l: "つける"
    	},
    	{
    		r: 435,
    		f: 166.62,
    		l: "事件"
    	},
    	{
    		r: 436,
    		f: 166.43,
    		l: "英語"
    	},
    	{
    		r: 437,
    		f: 166.1,
    		l: "所"
    	},
    	{
    		r: 438,
    		f: 166.04,
    		l: "質問"
    	},
    	{
    		r: 439,
    		f: 165.95,
    		l: "形"
    	},
    	{
    		r: 440,
    		f: 165.92,
    		l: "ほとんど"
    	},
    	{
    		r: 441,
    		f: 164.94,
    		l: "ふう"
    	},
    	{
    		r: 442,
    		f: 164.71,
    		l: "男"
    	},
    	{
    		r: 443,
    		f: 164.59,
    		l: "はず"
    	},
    	{
    		r: 444,
    		f: 164.46,
    		l: "まず"
    	},
    	{
    		r: 445,
    		f: 162.65,
    		l: "約"
    	},
    	{
    		r: 446,
    		f: 162.27,
    		l: "こう"
    	},
    	{
    		r: 447,
    		f: 161.62,
    		l: "主義"
    	},
    	{
    		r: 448,
    		f: 161.22,
    		l: "下"
    	},
    	{
    		r: 449,
    		f: 161.05,
    		l: "場"
    	},
    	{
    		r: 450,
    		f: 160.92,
    		l: "ちゃん"
    	},
    	{
    		r: 451,
    		f: 160.42,
    		l: "理由"
    	},
    	{
    		r: 452,
    		f: 160.28,
    		l: "書"
    	},
    	{
    		r: 453,
    		f: 158.75,
    		l: "社"
    	},
    	{
    		r: 454,
    		f: 158.66,
    		l: "──"
    	},
    	{
    		r: 455,
    		f: 158.39,
    		l: "ン"
    	},
    	{
    		r: 456,
    		f: 158.24,
    		l: "場所"
    	},
    	{
    		r: 457,
    		f: 158.21,
    		l: "機能"
    	},
    	{
    		r: 458,
    		f: 157.92,
    		l: "米"
    	},
    	{
    		r: 459,
    		f: 157.28,
    		l: "お願い"
    	},
    	{
    		r: 460,
    		f: 157.16,
    		l: "労働"
    	},
    	{
    		r: 461,
    		f: 157.08,
    		l: "いつも"
    	},
    	{
    		r: 462,
    		f: 157.03,
    		l: "→"
    	},
    	{
    		r: 463,
    		f: 156.94,
    		l: "車"
    	},
    	{
    		r: 464,
    		f: 156.65,
    		l: "相手"
    	},
    	{
    		r: 465,
    		f: 155.93,
    		l: "国際"
    	},
    	{
    		r: 466,
    		f: 155.92,
    		l: "自身"
    	},
    	{
    		r: 467,
    		f: 155.19,
    		l: "声"
    	},
    	{
    		r: 468,
    		f: 154.93,
    		l: "取る"
    	},
    	{
    		r: 469,
    		f: 154.72,
    		l: "計画"
    	},
    	{
    		r: 470,
    		f: 154.49,
    		l: "かかる"
    	},
    	{
    		r: 471,
    		f: 154.39,
    		l: "ほう"
    	},
    	{
    		r: 472,
    		f: 154.32,
    		l: "政治"
    	},
    	{
    		r: 473,
    		f: 153.9,
    		l: "別"
    	},
    	{
    		r: 474,
    		f: 153.26,
    		l: "ばかり"
    	},
    	{
    		r: 475,
    		f: 153.09,
    		l: "系"
    	},
    	{
    		r: 476,
    		f: 153.02,
    		l: "感"
    	},
    	{
    		r: 477,
    		f: 152.03,
    		l: "億"
    	},
    	{
    		r: 478,
    		f: 151.62,
    		l: "頃"
    	},
    	{
    		r: 479,
    		f: 151.62,
    		l: "号"
    	},
    	{
    		r: 480,
    		f: 151.54,
    		l: "における"
    	},
    	{
    		r: 481,
    		f: 151.46,
    		l: "長"
    	},
    	{
    		r: 482,
    		f: 150.29,
    		l: "日本人"
    	},
    	{
    		r: 483,
    		f: 150.17,
    		l: "今後"
    	},
    	{
    		r: 484,
    		f: 149.83,
    		l: "つまり"
    	},
    	{
    		r: 485,
    		f: 149.08,
    		l: "呼ぶ"
    	},
    	{
    		r: 486,
    		f: 148.88,
    		l: "まま"
    	},
    	{
    		r: 487,
    		f: 148.87,
    		l: "下さる"
    	},
    	{
    		r: 488,
    		f: 148.58,
    		l: "文化"
    	},
    	{
    		r: 489,
    		f: 147.55,
    		l: "体"
    	},
    	{
    		r: 490,
    		f: 146.78,
    		l: "与える"
    	},
    	{
    		r: 491,
    		f: 146.77,
    		l: "こ"
    	},
    	{
    		r: 492,
    		f: 146.45,
    		l: "ちゃう"
    	},
    	{
    		r: 493,
    		f: 146.23,
    		l: "大変"
    	},
    	{
    		r: 494,
    		f: 145.2,
    		l: "彼ら"
    	},
    	{
    		r: 495,
    		f: 145.09,
    		l: "評価"
    	},
    	{
    		r: 496,
    		f: 145.05,
    		l: "百"
    	},
    	{
    		r: 497,
    		f: 144.97,
    		l: "やすい"
    	},
    	{
    		r: 498,
    		f: 144.41,
    		l: "対応"
    	},
    	{
    		r: 499,
    		f: 144.24,
    		l: "求める"
    	},
    	{
    		r: 500,
    		f: 144.03,
    		l: "権"
    	},
    	{
    		r: 501,
    		f: 143.8,
    		l: "頭"
    	},
    	{
    		r: 502,
    		f: 143.68,
    		l: "あまり"
    	},
    	{
    		r: 503,
    		f: 143.56,
    		l: "子"
    	},
    	{
    		r: 504,
    		f: 143,
    		l: "自由"
    	},
    	{
    		r: 505,
    		f: 142.95,
    		l: "｜"
    	},
    	{
    		r: 506,
    		f: 142.52,
    		l: "すぎる"
    	},
    	{
    		r: 507,
    		f: 141,
    		l: "昨日"
    	},
    	{
    		r: 508,
    		f: 140.29,
    		l: "みたい"
    	},
    	{
    		r: 509,
    		f: 140.19,
    		l: "すぐ"
    	},
    	{
    		r: 510,
    		f: 140.17,
    		l: "これから"
    	},
    	{
    		r: 511,
    		f: 140.15,
    		l: "戻る"
    	},
    	{
    		r: 512,
    		f: 140.06,
    		l: "歴史"
    	},
    	{
    		r: 513,
    		f: 140.04,
    		l: "全体"
    	},
    	{
    		r: 514,
    		f: 140,
    		l: "長い"
    	},
    	{
    		r: 515,
    		f: 139.89,
    		l: "少ない"
    	},
    	{
    		r: 516,
    		f: 139.81,
    		l: "気持ち"
    	},
    	{
    		r: 517,
    		f: 139.6,
    		l: "報告"
    	},
    	{
    		r: 518,
    		f: 139.27,
    		l: "程度"
    	},
    	{
    		r: 519,
    		f: 138.83,
    		l: "◆"
    	},
    	{
    		r: 520,
    		f: 138.74,
    		l: "元"
    	},
    	{
    		r: 521,
    		f: 138.57,
    		l: "人々"
    	},
    	{
    		r: 522,
    		f: 138.48,
    		l: "＜"
    	},
    	{
    		r: 523,
    		f: 138.24,
    		l: "予定"
    	},
    	{
    		r: 524,
    		f: 137.97,
    		l: "代表"
    	},
    	{
    		r: 525,
    		f: 137.68,
    		l: "その後"
    	},
    	{
    		r: 526,
    		f: 137.65,
    		l: "経験"
    	},
    	{
    		r: 527,
    		f: 137.59,
    		l: "型"
    	},
    	{
    		r: 528,
    		f: 136.95,
    		l: "員"
    	},
    	{
    		r: 529,
    		f: 136.92,
    		l: "ネット"
    	},
    	{
    		r: 530,
    		f: 136.82,
    		l: "以外"
    	},
    	{
    		r: 531,
    		f: 136.79,
    		l: "なぁ"
    	},
    	{
    		r: 532,
    		f: 136.58,
    		l: "今年"
    	},
    	{
    		r: 533,
    		f: 136.52,
    		l: "価格"
    	},
    	{
    		r: 534,
    		f: 136.15,
    		l: "投資"
    	},
    	{
    		r: 535,
    		f: 135.9,
    		l: "経営"
    	},
    	{
    		r: 536,
    		f: 135.84,
    		l: "早い"
    	},
    	{
    		r: 537,
    		f: 135.61,
    		l: "ニュース"
    	},
    	{
    		r: 538,
    		f: 135.16,
    		l: "帰る"
    	},
    	{
    		r: 539,
    		f: 134.39,
    		l: "それぞれ"
    	},
    	{
    		r: 540,
    		f: 134.32,
    		l: "自然"
    	},
    	{
    		r: 541,
    		f: 134.2,
    		l: "商品"
    	},
    	{
    		r: 542,
    		f: 133.86,
    		l: "なかなか"
    	},
    	{
    		r: 543,
    		f: 133.81,
    		l: "発表"
    	},
    	{
    		r: 544,
    		f: 133.43,
    		l: "教える"
    	},
    	{
    		r: 545,
    		f: 133.41,
    		l: "目的"
    	},
    	{
    		r: 546,
    		f: 132.97,
    		l: "影響"
    	},
    	{
    		r: 547,
    		f: 132.9,
    		l: "地方"
    	},
    	{
    		r: 548,
    		f: 132.89,
    		l: "生きる"
    	},
    	{
    		r: 549,
    		f: 132.84,
    		l: "だから"
    	},
    	{
    		r: 550,
    		f: 132.84,
    		l: "テレビ"
    	},
    	{
    		r: 551,
    		f: 132.07,
    		l: "一緒"
    	},
    	{
    		r: 552,
    		f: 132,
    		l: "面"
    	},
    	{
    		r: 553,
    		f: 131.48,
    		l: "顔"
    	},
    	{
    		r: 554,
    		f: 131.42,
    		l: "選手"
    	},
    	{
    		r: 555,
    		f: 131.4,
    		l: "楽しい"
    	},
    	{
    		r: 556,
    		f: 130.5,
    		l: "道"
    	},
    	{
    		r: 557,
    		f: 130.39,
    		l: "けれど"
    	},
    	{
    		r: 558,
    		f: 130.26,
    		l: "みんな"
    	},
    	{
    		r: 559,
    		f: 130.06,
    		l: "子ども"
    	},
    	{
    		r: 560,
    		f: 129.91,
    		l: "実は"
    	},
    	{
    		r: 561,
    		f: 129.79,
    		l: "確か"
    	},
    	{
    		r: 562,
    		f: 129.69,
    		l: "でる"
    	},
    	{
    		r: 563,
    		f: 129.53,
    		l: "千"
    	},
    	{
    		r: 564,
    		f: 129.28,
    		l: "確認"
    	},
    	{
    		r: 565,
    		f: 129.08,
    		l: "ありがとう"
    	},
    	{
    		r: 566,
    		f: 128.74,
    		l: "夜"
    	},
    	{
    		r: 567,
    		f: 128.69,
    		l: "例えば"
    	},
    	{
    		r: 568,
    		f: 128.56,
    		l: "中心"
    	},
    	{
    		r: 569,
    		f: 128.42,
    		l: "市場"
    	},
    	{
    		r: 570,
    		f: 128.21,
    		l: "音"
    	},
    	{
    		r: 571,
    		f: 128.18,
    		l: "提供"
    	},
    	{
    		r: 572,
    		f: 127.82,
    		l: "事実"
    	},
    	{
    		r: 573,
    		f: 127.61,
    		l: "地"
    	},
    	{
    		r: 574,
    		f: 127.43,
    		l: "簡単"
    	},
    	{
    		r: 575,
    		f: 127.26,
    		l: "面白い"
    	},
    	{
    		r: 576,
    		f: 127.26,
    		l: "朝"
    	},
    	{
    		r: 577,
    		f: 127.13,
    		l: "版"
    	},
    	{
    		r: 578,
    		f: 127.03,
    		l: "学"
    	},
    	{
    		r: 579,
    		f: 127.02,
    		l: "なぜ"
    	},
    	{
    		r: 580,
    		f: 127,
    		l: "当然"
    	},
    	{
    		r: 581,
    		f: 126.97,
    		l: "以下"
    	},
    	{
    		r: 582,
    		f: 126.89,
    		l: "責任"
    	},
    	{
    		r: 583,
    		f: 126.67,
    		l: "六"
    	},
    	{
    		r: 584,
    		f: 126.29,
    		l: "ゲーム"
    	},
    	{
    		r: 585,
    		f: 126.23,
    		l: "議論"
    	},
    	{
    		r: 586,
    		f: 126.04,
    		l: "これら"
    	},
    	{
    		r: 587,
    		f: 125.89,
    		l: "以前"
    	},
    	{
    		r: 588,
    		f: 125.78,
    		l: "位"
    	},
    	{
    		r: 589,
    		f: 125.74,
    		l: "データ"
    	},
    	{
    		r: 590,
    		f: 125.06,
    		l: "示す"
    	},
    	{
    		r: 591,
    		f: 124.69,
    		l: "判断"
    	},
    	{
    		r: 592,
    		f: 124.62,
    		l: "例"
    	},
    	{
    		r: 593,
    		f: 124.4,
    		l: "専門"
    	},
    	{
    		r: 594,
    		f: 124.3,
    		l: "家族"
    	},
    	{
    		r: 595,
    		f: 123.87,
    		l: "しかも"
    	},
    	{
    		r: 596,
    		f: 123.71,
    		l: "初めて"
    	},
    	{
    		r: 597,
    		f: 123.55,
    		l: "勉強"
    	},
    	{
    		r: 598,
    		f: 123.19,
    		l: "申し上げる"
    	},
    	{
    		r: 599,
    		f: 123.18,
    		l: "話す"
    	},
    	{
    		r: 600,
    		f: 123.02,
    		l: "もつ"
    	},
    	{
    		r: 601,
    		f: 122.97,
    		l: "期待"
    	},
    	{
    		r: 602,
    		f: 122.69,
    		l: "難しい"
    	},
    	{
    		r: 603,
    		f: 122.57,
    		l: "そこで"
    	},
    	{
    		r: 604,
    		f: 122.48,
    		l: "いま"
    	},
    	{
    		r: 605,
    		f: 122.4,
    		l: "全く"
    	},
    	{
    		r: 606,
    		f: 122.05,
    		l: "韓国"
    	},
    	{
    		r: 607,
    		f: 122,
    		l: "外"
    	},
    	{
    		r: 608,
    		f: 122,
    		l: "たくさん"
    	},
    	{
    		r: 609,
    		f: 121.97,
    		l: "効果"
    	},
    	{
    		r: 610,
    		f: 121.79,
    		l: "検討"
    	},
    	{
    		r: 611,
    		f: 121.62,
    		l: "各"
    	},
    	{
    		r: 612,
    		f: 121.33,
    		l: "普通"
    	},
    	{
    		r: 613,
    		f: 121.21,
    		l: "組織"
    	},
    	{
    		r: 614,
    		f: 121.06,
    		l: "政策"
    	},
    	{
    		r: 615,
    		f: 120.81,
    		l: "町"
    	},
    	{
    		r: 616,
    		f: 120.6,
    		l: "行動"
    	},
    	{
    		r: 617,
    		f: 119.66,
    		l: "年間"
    	},
    	{
    		r: 618,
    		f: 119.45,
    		l: "こそ"
    	},
    	{
    		r: 619,
    		f: 119.45,
    		l: "置く"
    	},
    	{
    		r: 620,
    		f: 119.39,
    		l: "率"
    	},
    	{
    		r: 621,
    		f: 119.23,
    		l: "当時"
    	},
    	{
    		r: 622,
    		f: 119,
    		l: "学生"
    	},
    	{
    		r: 623,
    		f: 118.9,
    		l: "飲む"
    	},
    	{
    		r: 624,
    		f: 118.29,
    		l: "海"
    	},
    	{
    		r: 625,
    		f: 117.84,
    		l: "よく"
    	},
    	{
    		r: 626,
    		f: 117.61,
    		l: "販売"
    	},
    	{
    		r: 627,
    		f: 117.58,
    		l: "どんな"
    	},
    	{
    		r: 628,
    		f: 117.22,
    		l: "つつ"
    	},
    	{
    		r: 629,
    		f: 116.96,
    		l: "購入"
    	},
    	{
    		r: 630,
    		f: 116.84,
    		l: "科学"
    	},
    	{
    		r: 631,
    		f: 116.41,
    		l: "監督"
    	},
    	{
    		r: 632,
    		f: 116.37,
    		l: "意識"
    	},
    	{
    		r: 633,
    		f: 115.67,
    		l: "認める"
    	},
    	{
    		r: 634,
    		f: 115.65,
    		l: "欲しい"
    	},
    	{
    		r: 635,
    		f: 115.08,
    		l: "九"
    	},
    	{
    		r: 636,
    		f: 115.05,
    		l: "わ"
    	},
    	{
    		r: 637,
    		f: 114.99,
    		l: "通り"
    	},
    	{
    		r: 638,
    		f: 114.83,
    		l: "とも"
    	},
    	{
    		r: 639,
    		f: 114.49,
    		l: "立つ"
    	},
    	{
    		r: 640,
    		f: 114.26,
    		l: "生産"
    	},
    	{
    		r: 641,
    		f: 113.89,
    		l: "表現"
    	},
    	{
    		r: 642,
    		f: 113.8,
    		l: "戦争"
    	},
    	{
    		r: 643,
    		f: 113.73,
    		l: "ねる"
    	},
    	{
    		r: 644,
    		f: 113.68,
    		l: "参考"
    	},
    	{
    		r: 645,
    		f: 113.58,
    		l: "始まる"
    	},
    	{
    		r: 646,
    		f: 113.4,
    		l: "ひとつ"
    	},
    	{
    		r: 647,
    		f: 113.14,
    		l: "その他"
    	},
    	{
    		r: 648,
    		f: 112.98,
    		l: "決定"
    	},
    	{
    		r: 649,
    		f: 112.76,
    		l: "まあ"
    	},
    	{
    		r: 650,
    		f: 112.73,
    		l: "ぐらい"
    	},
    	{
    		r: 651,
    		f: 112.62,
    		l: "＆"
    	},
    	{
    		r: 652,
    		f: 112.56,
    		l: "曲"
    	},
    	{
    		r: 653,
    		f: 112.49,
    		l: "同"
    	},
    	{
    		r: 654,
    		f: 112.39,
    		l: "ク"
    	},
    	{
    		r: 655,
    		f: 112.26,
    		l: "やっぱり"
    	},
    	{
    		r: 656,
    		f: 112.23,
    		l: "法律"
    	},
    	{
    		r: 657,
    		f: 111.96,
    		l: "機関"
    	},
    	{
    		r: 658,
    		f: 110.75,
    		l: "開く"
    	},
    	{
    		r: 659,
    		f: 110.53,
    		l: "ビジネス"
    	},
    	{
    		r: 660,
    		f: 110.19,
    		l: "さて"
    	},
    	{
    		r: 661,
    		f: 110.03,
    		l: "対象"
    	},
    	{
    		r: 662,
    		f: 109.98,
    		l: "チーム"
    	},
    	{
    		r: 663,
    		f: 109.68,
    		l: "現実"
    	},
    	{
    		r: 664,
    		f: 109.52,
    		l: "進む"
    	},
    	{
    		r: 665,
    		f: 109.51,
    		l: "対策"
    	},
    	{
    		r: 666,
    		f: 109.11,
    		l: "作業"
    	},
    	{
    		r: 667,
    		f: 108.78,
    		l: "すごい"
    	},
    	{
    		r: 668,
    		f: 108.72,
    		l: "価値"
    	},
    	{
    		r: 669,
    		f: 108.57,
    		l: "テーマ"
    	},
    	{
    		r: 670,
    		f: 108.55,
    		l: "十分"
    	},
    	{
    		r: 671,
    		f: 108.48,
    		l: "含む"
    	},
    	{
    		r: 672,
    		f: 108.47,
    		l: "一部"
    	},
    	{
    		r: 673,
    		f: 108.25,
    		l: "語"
    	},
    	{
    		r: 674,
    		f: 108.22,
    		l: "決める"
    	},
    	{
    		r: 675,
    		f: 108.12,
    		l: "姿"
    	},
    	{
    		r: 676,
    		f: 108.08,
    		l: "新聞"
    	},
    	{
    		r: 677,
    		f: 108.04,
    		l: "一方"
    	},
    	{
    		r: 678,
    		f: 107.87,
    		l: "風"
    	},
    	{
    		r: 679,
    		f: 107.79,
    		l: "八"
    	},
    	{
    		r: 680,
    		f: 107.52,
    		l: "際"
    	},
    	{
    		r: 681,
    		f: 107.31,
    		l: "考え"
    	},
    	{
    		r: 682,
    		f: 107.11,
    		l: "ラ"
    	},
    	{
    		r: 683,
    		f: 107.1,
    		l: "残る"
    	},
    	{
    		r: 684,
    		f: 107.07,
    		l: "論"
    	},
    	{
    		r: 685,
    		f: 106.84,
    		l: "のみ"
    	},
    	{
    		r: 686,
    		f: 106.71,
    		l: "全て"
    	},
    	{
    		r: 687,
    		f: 106.52,
    		l: "及び"
    	},
    	{
    		r: 688,
    		f: 106.51,
    		l: "大臣"
    	},
    	{
    		r: 689,
    		f: 106.48,
    		l: "神"
    	},
    	{
    		r: 690,
    		f: 106.22,
    		l: "国家"
    	},
    	{
    		r: 691,
    		f: 105.95,
    		l: "件"
    	},
    	{
    		r: 692,
    		f: 105.94,
    		l: "語る"
    	},
    	{
    		r: 693,
    		f: 105.86,
    		l: "毎日"
    	},
    	{
    		r: 694,
    		f: 105.82,
    		l: "俺"
    	},
    	{
    		r: 695,
    		f: 105.8,
    		l: "試合"
    	},
    	{
    		r: 696,
    		f: 105.68,
    		l: "もし"
    	},
    	{
    		r: 697,
    		f: 105.26,
    		l: "七"
    	},
    	{
    		r: 698,
    		f: 105.25,
    		l: "ま"
    	},
    	{
    		r: 699,
    		f: 105.21,
    		l: "会議"
    	},
    	{
    		r: 700,
    		f: 105.07,
    		l: "いつ"
    	},
    	{
    		r: 701,
    		f: 105.02,
    		l: "指摘"
    	},
    	{
    		r: 702,
    		f: 104.86,
    		l: "言える"
    	},
    	{
    		r: 703,
    		f: 104.83,
    		l: "＾"
    	},
    	{
    		r: 704,
    		f: 104.76,
    		l: "歩く"
    	},
    	{
    		r: 705,
    		f: 104.72,
    		l: "製品"
    	},
    	{
    		r: 706,
    		f: 104.69,
    		l: "変化"
    	},
    	{
    		r: 707,
    		f: 104.49,
    		l: "結局"
    	},
    	{
    		r: 708,
    		f: 104.46,
    		l: "消費"
    	},
    	{
    		r: 709,
    		f: 104.3,
    		l: "保険"
    	},
    	{
    		r: 710,
    		f: 103.99,
    		l: "り"
    	},
    	{
    		r: 711,
    		f: 103.88,
    		l: "具体"
    	},
    	{
    		r: 712,
    		f: 103.75,
    		l: "あげる"
    	},
    	{
    		r: 713,
    		f: 103.74,
    		l: "人生"
    	},
    	{
    		r: 714,
    		f: 103.7,
    		l: "量"
    	},
    	{
    		r: 715,
    		f: 103.41,
    		l: "米国"
    	},
    	{
    		r: 716,
    		f: 103.2,
    		l: "表示"
    	},
    	{
    		r: 717,
    		f: 102.9,
    		l: "変える"
    	},
    	{
    		r: 718,
    		f: 102.84,
    		l: "精神"
    	},
    	{
    		r: 719,
    		f: 102.78,
    		l: "街"
    	},
    	{
    		r: 720,
    		f: 102.65,
    		l: "過去"
    	},
    	{
    		r: 721,
    		f: 102.53,
    		l: "レベル"
    	},
    	{
    		r: 722,
    		f: 102.52,
    		l: "我々"
    	},
    	{
    		r: 723,
    		f: 102.04,
    		l: "インターネット"
    	},
    	{
    		r: 724,
    		f: 101.83,
    		l: "能力"
    	},
    	{
    		r: 725,
    		f: 101.8,
    		l: "選ぶ"
    	},
    	{
    		r: 726,
    		f: 101.67,
    		l: "指導"
    	},
    	{
    		r: 727,
    		f: 101.22,
    		l: "更新"
    	},
    	{
    		r: 728,
    		f: 100.92,
    		l: "公開"
    	},
    	{
    		r: 729,
    		f: 100.65,
    		l: "日本語"
    	},
    	{
    		r: 730,
    		f: 100.63,
    		l: "皆さん"
    	},
    	{
    		r: 731,
    		f: 100.02,
    		l: "働く"
    	},
    	{
    		r: 732,
    		f: 100.02,
    		l: "―"
    	},
    	{
    		r: 733,
    		f: 100,
    		l: "屋"
    	},
    	{
    		r: 734,
    		f: 99.95,
    		l: "ほか"
    	},
    	{
    		r: 735,
    		f: 99.66,
    		l: "女"
    	},
    	{
    		r: 736,
    		f: 99.49,
    		l: "昔"
    	},
    	{
    		r: 737,
    		f: 99.37,
    		l: "担当"
    	},
    	{
    		r: 738,
    		f: 99.3,
    		l: "費"
    	},
    	{
    		r: 739,
    		f: 99.25,
    		l: "わたし"
    	},
    	{
    		r: 740,
    		f: 99.17,
    		l: "送る"
    	},
    	{
    		r: 741,
    		f: 99.11,
    		l: "明日"
    	},
    	{
    		r: 742,
    		f: 99.09,
    		l: "旅行"
    	},
    	{
    		r: 743,
    		f: 99.05,
    		l: "夢"
    	},
    	{
    		r: 744,
    		f: 98.94,
    		l: "それから"
    	},
    	{
    		r: 745,
    		f: 98.8,
    		l: "明らか"
    	},
    	{
    		r: 746,
    		f: 98.74,
    		l: "乗る"
    	},
    	{
    		r: 747,
    		f: 98.43,
    		l: "つくる"
    	},
    	{
    		r: 748,
    		f: 97.94,
    		l: "＿"
    	},
    	{
    		r: 749,
    		f: 97.71,
    		l: "木"
    	},
    	{
    		r: 750,
    		f: 97.6,
    		l: "機"
    	},
    	{
    		r: 751,
    		f: 97.58,
    		l: "大切"
    	},
    	{
    		r: 752,
    		f: 97.55,
    		l: "忘れる"
    	},
    	{
    		r: 753,
    		f: 97.53,
    		l: "局"
    	},
    	{
    		r: 754,
    		f: 97.42,
    		l: "行政"
    	},
    	{
    		r: 755,
    		f: 97.4,
    		l: "安全"
    	},
    	{
    		r: 756,
    		f: 97.31,
    		l: "外国"
    	},
    	{
    		r: 757,
    		f: 97.27,
    		l: "増える"
    	},
    	{
    		r: 758,
    		f: 96.97,
    		l: "お金"
    	},
    	{
    		r: 759,
    		f: 96.71,
    		l: "資料"
    	},
    	{
    		r: 760,
    		f: 96.57,
    		l: "部屋"
    	},
    	{
    		r: 761,
    		f: 96.4,
    		l: "行為"
    	},
    	{
    		r: 762,
    		f: 96.35,
    		l: "あ"
    	},
    	{
    		r: 763,
    		f: 96.31,
    		l: "平成"
    	},
    	{
    		r: 764,
    		f: 96.1,
    		l: "いや"
    	},
    	{
    		r: 765,
    		f: 96.04,
    		l: "なん"
    	},
    	{
    		r: 766,
    		f: 96.02,
    		l: "楽しむ"
    	},
    	{
    		r: 767,
    		f: 95.97,
    		l: "色"
    	},
    	{
    		r: 768,
    		f: 95.82,
    		l: "待つ"
    	},
    	{
    		r: 769,
    		f: 95.74,
    		l: "登録"
    	},
    	{
    		r: 770,
    		f: 95.66,
    		l: "ドイツ"
    	},
    	{
    		r: 771,
    		f: 95.61,
    		l: "うまい"
    	},
    	{
    		r: 772,
    		f: 95.5,
    		l: "設定"
    	},
    	{
    		r: 773,
    		f: 95.28,
    		l: "どういう"
    	},
    	{
    		r: 774,
    		f: 95.27,
    		l: "述べる"
    	},
    	{
    		r: 775,
    		f: 95.19,
    		l: "成功"
    	},
    	{
    		r: 776,
    		f: 95.03,
    		l: "努力"
    	},
    	{
    		r: 777,
    		f: 94.95,
    		l: "戦"
    	},
    	{
    		r: 778,
    		f: 94.7,
    		l: "団体"
    	},
    	{
    		r: 779,
    		f: 94.63,
    		l: "につきまして"
    	},
    	{
    		r: 780,
    		f: 94.58,
    		l: "支援"
    	},
    	{
    		r: 781,
    		f: 94.53,
    		l: "最も"
    	},
    	{
    		r: 782,
    		f: 94.49,
    		l: "自己"
    	},
    	{
    		r: 783,
    		f: 94.46,
    		l: "全"
    	},
    	{
    		r: 784,
    		f: 94.45,
    		l: "年度"
    	},
    	{
    		r: 785,
    		f: 94.44,
    		l: "運動"
    	},
    	{
    		r: 786,
    		f: 94.27,
    		l: "構造"
    	},
    	{
    		r: 787,
    		f: 94.26,
    		l: "特別"
    	},
    	{
    		r: 788,
    		f: 94.21,
    		l: "ド"
    	},
    	{
    		r: 789,
    		f: 94,
    		l: "解決"
    	},
    	{
    		r: 790,
    		f: 93.78,
    		l: "完全"
    	},
    	{
    		r: 791,
    		f: 93.59,
    		l: "品"
    	},
    	{
    		r: 792,
    		f: 93.53,
    		l: "訳"
    	},
    	{
    		r: 793,
    		f: 93.33,
    		l: "向かう"
    	},
    	{
    		r: 794,
    		f: 93.13,
    		l: "男性"
    	},
    	{
    		r: 795,
    		f: 93.1,
    		l: "結構"
    	},
    	{
    		r: 796,
    		f: 93.06,
    		l: "産業"
    	},
    	{
    		r: 797,
    		f: 92.87,
    		l: "軍"
    	},
    	{
    		r: 798,
    		f: 92.77,
    		l: "主"
    	},
    	{
    		r: 799,
    		f: 92.33,
    		l: "に関して"
    	},
    	{
    		r: 800,
    		f: 92.25,
    		l: "人気"
    	},
    	{
    		r: 801,
    		f: 92.23,
    		l: "お話"
    	},
    	{
    		r: 802,
    		f: 92.05,
    		l: "駅"
    	},
    	{
    		r: 803,
    		f: 92.04,
    		l: "描く"
    	},
    	{
    		r: 804,
    		f: 92.02,
    		l: "近く"
    	},
    	{
    		r: 805,
    		f: 91.96,
    		l: "最終"
    	},
    	{
    		r: 806,
    		f: 91.37,
    		l: "ドル"
    	},
    	{
    		r: 807,
    		f: 91.35,
    		l: "過ぎる"
    	},
    	{
    		r: 808,
    		f: 91.33,
    		l: "保護"
    	},
    	{
    		r: 809,
    		f: 91.28,
    		l: "上げる"
    	},
    	{
    		r: 810,
    		f: 91.26,
    		l: "再"
    	},
    	{
    		r: 811,
    		f: 91.15,
    		l: "グループ"
    	},
    	{
    		r: 812,
    		f: 91.11,
    		l: "生"
    	},
    	{
    		r: 813,
    		f: 91.09,
    		l: "ポイント"
    	},
    	{
    		r: 814,
    		f: 90.88,
    		l: "ども"
    	},
    	{
    		r: 815,
    		f: 90.86,
    		l: "センター"
    	},
    	{
    		r: 816,
    		f: 90.86,
    		l: "開催"
    	},
    	{
    		r: 817,
    		f: 90.84,
    		l: "方向"
    	},
    	{
    		r: 818,
    		f: 90.83,
    		l: "改革"
    	},
    	{
    		r: 819,
    		f: 90.8,
    		l: "検索"
    	},
    	{
    		r: 820,
    		f: 90.77,
    		l: "走る"
    	},
    	{
    		r: 821,
    		f: 90.75,
    		l: "生まれる"
    	},
    	{
    		r: 822,
    		f: 90.72,
    		l: "□"
    	},
    	{
    		r: 823,
    		f: 90.59,
    		l: "起こる"
    	},
    	{
    		r: 824,
    		f: 90.12,
    		l: "Q"
    	},
    	{
    		r: 825,
    		f: 89.95,
    		l: "健康"
    	},
    	{
    		r: 826,
    		f: 89.89,
    		l: "障害"
    	},
    	{
    		r: 827,
    		f: 89.86,
    		l: "ヶ月"
    	},
    	{
    		r: 828,
    		f: 89.84,
    		l: "起きる"
    	},
    	{
    		r: 829,
    		f: 89.43,
    		l: "協力"
    	},
    	{
    		r: 830,
    		f: 89.37,
    		l: "時期"
    	},
    	{
    		r: 831,
    		f: 89.33,
    		l: "料理"
    	},
    	{
    		r: 832,
    		f: 89.08,
    		l: "考え方"
    	},
    	{
    		r: 833,
    		f: 89.05,
    		l: "医療"
    	},
    	{
    		r: 834,
    		f: 89.04,
    		l: "頂く"
    	},
    	{
    		r: 835,
    		f: 88.94,
    		l: "金融"
    	},
    	{
    		r: 836,
    		f: 88.89,
    		l: "売る"
    	},
    	{
    		r: 837,
    		f: 88.88,
    		l: "試験"
    	},
    	{
    		r: 838,
    		f: 88.86,
    		l: "により"
    	},
    	{
    		r: 839,
    		f: 88.83,
    		l: "進める"
    	},
    	{
    		r: 840,
    		f: 88.79,
    		l: "死ぬ"
    	},
    	{
    		r: 841,
    		f: 88.69,
    		l: "フランス"
    	},
    	{
    		r: 842,
    		f: 88.61,
    		l: "近い"
    	},
    	{
    		r: 843,
    		f: 88.5,
    		l: "立場"
    	},
    	{
    		r: 844,
    		f: 88.48,
    		l: "契約"
    	},
    	{
    		r: 845,
    		f: 88.16,
    		l: "すでに"
    	},
    	{
    		r: 846,
    		f: 87.88,
    		l: "条件"
    	},
    	{
    		r: 847,
    		f: 87.84,
    		l: "放送"
    	},
    	{
    		r: 848,
    		f: 87.83,
    		l: "※"
    	},
    	{
    		r: 849,
    		f: 87.64,
    		l: "全国"
    	},
    	{
    		r: 850,
    		f: 87.58,
    		l: "違い"
    	},
    	{
    		r: 851,
    		f: 87.35,
    		l: "室"
    	},
    	{
    		r: 852,
    		f: 87.24,
    		l: "なあ"
    	},
    	{
    		r: 853,
    		f: 87.22,
    		l: "枚"
    	},
    	{
    		r: 854,
    		f: 87.12,
    		l: "ずっと"
    	},
    	{
    		r: 855,
    		f: 87.1,
    		l: "作成"
    	},
    	{
    		r: 856,
    		f: 87.07,
    		l: "足"
    	},
    	{
    		r: 857,
    		f: 87,
    		l: "学ぶ"
    	},
    	{
    		r: 858,
    		f: 86.87,
    		l: "成長"
    	},
    	{
    		r: 859,
    		f: 86.85,
    		l: "施設"
    	},
    	{
    		r: 860,
    		f: 86.81,
    		l: "リ"
    	},
    	{
    		r: 861,
    		f: 86.54,
    		l: "登場"
    	},
    	{
    		r: 862,
    		f: 86.51,
    		l: "知識"
    	},
    	{
    		r: 863,
    		f: 86.49,
    		l: "携帯"
    	},
    	{
    		r: 864,
    		f: 86.39,
    		l: "実現"
    	},
    	{
    		r: 865,
    		f: 86.35,
    		l: "友人"
    	},
    	{
    		r: 866,
    		f: 85.98,
    		l: "海外"
    	},
    	{
    		r: 867,
    		f: 85.86,
    		l: "原因"
    	},
    	{
    		r: 868,
    		f: 85.82,
    		l: "実施"
    	},
    	{
    		r: 869,
    		f: 85.76,
    		l: "昨年"
    	},
    	{
    		r: 870,
    		f: 85.64,
    		l: "〇"
    	},
    	{
    		r: 871,
    		f: 85.44,
    		l: "探す"
    	},
    	{
    		r: 872,
    		f: 85.26,
    		l: "病院"
    	},
    	{
    		r: 873,
    		f: 85.22,
    		l: "代"
    	},
    	{
    		r: 874,
    		f: 85.09,
    		l: "認識"
    	},
    	{
    		r: 875,
    		f: 85.06,
    		l: "夏"
    	},
    	{
    		r: 876,
    		f: 84.99,
    		l: "および"
    	},
    	{
    		r: 877,
    		f: 84.73,
    		l: "イメージ"
    	},
    	{
    		r: 878,
    		f: 84.72,
    		l: "段階"
    	},
    	{
    		r: 879,
    		f: 84.7,
    		l: "発生"
    	},
    	{
    		r: 880,
    		f: 84.58,
    		l: "反対"
    	},
    	{
    		r: 881,
    		f: 84.49,
    		l: "会う"
    	},
    	{
    		r: 882,
    		f: 84.45,
    		l: "期間"
    	},
    	{
    		r: 883,
    		f: 84.37,
    		l: "区"
    	},
    	{
    		r: 884,
    		f: 84.3,
    		l: "トップ"
    	},
    	{
    		r: 885,
    		f: 84.15,
    		l: "条"
    	},
    	{
    		r: 886,
    		f: 83.95,
    		l: "若い"
    	},
    	{
    		r: 887,
    		f: 83.94,
    		l: "見せる"
    	},
    	{
    		r: 888,
    		f: 83.88,
    		l: "午後"
    	},
    	{
    		r: 889,
    		f: 83.59,
    		l: "税"
    	},
    	{
    		r: 890,
    		f: 83.5,
    		l: "主張"
    	},
    	{
    		r: 891,
    		f: 83.31,
    		l: "変更"
    	},
    	{
    		r: 892,
    		f: 83.26,
    		l: "サッカー"
    	},
    	{
    		r: 893,
    		f: 83.22,
    		l: "パソコン"
    	},
    	{
    		r: 894,
    		f: 83.2,
    		l: "限り"
    	},
    	{
    		r: 895,
    		f: 83.13,
    		l: "＋"
    	},
    	{
    		r: 896,
    		f: 83.13,
    		l: "高"
    	},
    	{
    		r: 897,
    		f: 83.06,
    		l: "番組"
    	},
    	{
    		r: 898,
    		f: 83.01,
    		l: "今度"
    	},
    	{
    		r: 899,
    		f: 83,
    		l: "ホームページ"
    	},
    	{
    		r: 900,
    		f: 82.4,
    		l: "準備"
    	},
    	{
    		r: 901,
    		f: 82.35,
    		l: "処理"
    	},
    	{
    		r: 902,
    		f: 82.23,
    		l: "口"
    	},
    	{
    		r: 903,
    		f: 82.13,
    		l: "式"
    	},
    	{
    		r: 904,
    		f: 82.1,
    		l: "または"
    	},
    	{
    		r: 905,
    		f: 82.05,
    		l: "だって"
    	},
    	{
    		r: 906,
    		f: 81.99,
    		l: "絶対"
    	},
    	{
    		r: 907,
    		f: 81.85,
    		l: "伝える"
    	},
    	{
    		r: 908,
    		f: 81.79,
    		l: "結婚"
    	},
    	{
    		r: 909,
    		f: 81.76,
    		l: "社長"
    	},
    	{
    		r: 910,
    		f: 81.72,
    		l: "守る"
    	},
    	{
    		r: 911,
    		f: 81.71,
    		l: "体験"
    	},
    	{
    		r: 912,
    		f: 81.68,
    		l: "基準"
    	},
    	{
    		r: 913,
    		f: 81.62,
    		l: "発言"
    	},
    	{
    		r: 914,
    		f: 81.56,
    		l: "深い"
    	},
    	{
    		r: 915,
    		f: 81.44,
    		l: "住む"
    	},
    	{
    		r: 916,
    		f: 81.43,
    		l: "都市"
    	},
    	{
    		r: 917,
    		f: 81.36,
    		l: "ぞ"
    	},
    	{
    		r: 918,
    		f: 81.29,
    		l: "親"
    	},
    	{
    		r: 919,
    		f: 81.22,
    		l: "機会"
    	},
    	{
    		r: 920,
    		f: 81.19,
    		l: "展開"
    	},
    	{
    		r: 921,
    		f: 81.18,
    		l: "ほしい"
    	},
    	{
    		r: 922,
    		f: 81.07,
    		l: "授業"
    	},
    	{
    		r: 923,
    		f: 81.01,
    		l: "デザイン"
    	},
    	{
    		r: 924,
    		f: 80.85,
    		l: "火"
    	},
    	{
    		r: 925,
    		f: 80.66,
    		l: "自体"
    	},
    	{
    		r: 926,
    		f: 80.51,
    		l: "興味"
    	},
    	{
    		r: 927,
    		f: 80.47,
    		l: "掲載"
    	},
    	{
    		r: 928,
    		f: 80.31,
    		l: "含める"
    	},
    	{
    		r: 929,
    		f: 80,
    		l: "編集"
    	},
    	{
    		r: 930,
    		f: 79.53,
    		l: "選択"
    	},
    	{
    		r: 931,
    		f: 79.36,
    		l: "いわゆる"
    	},
    	{
    		r: 932,
    		f: 79.34,
    		l: "信じる"
    	},
    	{
    		r: 933,
    		f: 79.25,
    		l: "もん"
    	},
    	{
    		r: 934,
    		f: 79.23,
    		l: "週間"
    	},
    	{
    		r: 935,
    		f: 79.16,
    		l: "負担"
    	},
    	{
    		r: 936,
    		f: 79.16,
    		l: "文字"
    	},
    	{
    		r: 937,
    		f: 78.95,
    		l: "最大"
    	},
    	{
    		r: 938,
    		f: 78.94,
    		l: "無料"
    	},
    	{
    		r: 939,
    		f: 78.77,
    		l: "相談"
    	},
    	{
    		r: 940,
    		f: 78.77,
    		l: "注意"
    	},
    	{
    		r: 941,
    		f: 78.71,
    		l: "ホテル"
    	},
    	{
    		r: 942,
    		f: 78.46,
    		l: "まったく"
    	},
    	{
    		r: 943,
    		f: 78.36,
    		l: "株"
    	},
    	{
    		r: 944,
    		f: 78.33,
    		l: "思える"
    	},
    	{
    		r: 945,
    		f: 78.07,
    		l: "全部"
    	},
    	{
    		r: 946,
    		f: 78.06,
    		l: "しっかり"
    	},
    	{
    		r: 947,
    		f: 77.8,
    		l: "開始"
    	},
    	{
    		r: 948,
    		f: 77.78,
    		l: "上がる"
    	},
    	{
    		r: 949,
    		f: 77.56,
    		l: "身"
    	},
    	{
    		r: 950,
    		f: 77.5,
    		l: "イベント"
    	},
    	{
    		r: 951,
    		f: 77.46,
    		l: "分析"
    	},
    	{
    		r: 952,
    		f: 77.43,
    		l: "アクセス"
    	},
    	{
    		r: 953,
    		f: 77.37,
    		l: "同時に"
    	},
    	{
    		r: 954,
    		f: 77.35,
    		l: "詳細"
    	},
    	{
    		r: 955,
    		f: 77.31,
    		l: "合う"
    	},
    	{
    		r: 956,
    		f: 77.29,
    		l: "動く"
    	},
    	{
    		r: 957,
    		f: 77.23,
    		l: "える"
    	},
    	{
    		r: 958,
    		f: 77.22,
    		l: "先ほど"
    	},
    	{
    		r: 959,
    		f: 77.19,
    		l: "派"
    	},
    	{
    		r: 960,
    		f: 77.04,
    		l: "アップ"
    	},
    	{
    		r: 961,
    		f: 76.78,
    		l: "将来"
    	},
    	{
    		r: 962,
    		f: 76.78,
    		l: "予算"
    	},
    	{
    		r: 963,
    		f: 76.77,
    		l: "愛"
    	},
    	{
    		r: 964,
    		f: 76.76,
    		l: "目標"
    	},
    	{
    		r: 965,
    		f: 76.75,
    		l: "台"
    	},
    	{
    		r: 966,
    		f: 76.75,
    		l: "通信"
    	},
    	{
    		r: 967,
    		f: 76.72,
    		l: "△"
    	},
    	{
    		r: 968,
    		f: 76.63,
    		l: "比べる"
    	},
    	{
    		r: 969,
    		f: 76.63,
    		l: "プログラム"
    	},
    	{
    		r: 970,
    		f: 76.61,
    		l: "させる"
    	},
    	{
    		r: 971,
    		f: 76.56,
    		l: "分野"
    	},
    	{
    		r: 972,
    		f: 76.49,
    		l: "ちなみに"
    	},
    	{
    		r: 973,
    		f: 76.49,
    		l: "Z"
    	},
    	{
    		r: 974,
    		f: 76.48,
    		l: "花"
    	},
    	{
    		r: 975,
    		f: 76.37,
    		l: "向ける"
    	},
    	{
    		r: 976,
    		f: 76.29,
    		l: "国内"
    	},
    	{
    		r: 977,
    		f: 76.17,
    		l: "土"
    	},
    	{
    		r: 978,
    		f: 76.12,
    		l: "時刻"
    	},
    	{
    		r: 979,
    		f: 76.05,
    		l: "つ"
    	},
    	{
    		r: 980,
    		f: 75.91,
    		l: "そのまま"
    	},
    	{
    		r: 981,
    		f: 75.9,
    		l: "逆"
    	},
    	{
    		r: 982,
    		f: 75.72,
    		l: "発見"
    	},
    	{
    		r: 983,
    		f: 75.63,
    		l: "とにかく"
    	},
    	{
    		r: 984,
    		f: 75.57,
    		l: "きる"
    	},
    	{
    		r: 985,
    		f: 75.38,
    		l: "最高"
    	},
    	{
    		r: 986,
    		f: 75.38,
    		l: "頑張る"
    	},
    	{
    		r: 987,
    		f: 75.22,
    		l: "為"
    	},
    	{
    		r: 988,
    		f: 75.16,
    		l: "覚える"
    	},
    	{
    		r: 989,
    		f: 75.05,
    		l: "利益"
    	},
    	{
    		r: 990,
    		f: 75.05,
    		l: "どちら"
    	},
    	{
    		r: 991,
    		f: 75.01,
    		l: "小"
    	},
    	{
    		r: 992,
    		f: 74.99,
    		l: "銀行"
    	},
    	{
    		r: 993,
    		f: 74.98,
    		l: "終了"
    	},
    	{
    		r: 994,
    		f: 74.93,
    		l: "事務"
    	},
    	{
    		r: 995,
    		f: 74.82,
    		l: "出版"
    	},
    	{
    		r: 996,
    		f: 74.82,
    		l: "連絡"
    	},
    	{
    		r: 997,
    		f: 74.73,
    		l: "正しい"
    	},
    	{
    		r: 998,
    		f: 74.72,
    		l: "プロ"
    	},
    	{
    		r: 999,
    		f: 74.61,
    		l: "大会"
    	},
    	{
    		r: 1000,
    		f: 74.57,
    		l: "練習"
    	},
    	{
    		r: 1001,
    		f: 74.49,
    		l: "様々"
    	},
    	{
    		r: 1002,
    		f: 74.48,
    		l: "娘"
    	},
    	{
    		r: 1003,
    		f: 74.47,
    		l: "州"
    	},
    	{
    		r: 1004,
    		f: 74.37,
    		l: "こうした"
    	},
    	{
    		r: 1005,
    		f: 74.3,
    		l: "ファン"
    	},
    	{
    		r: 1006,
    		f: 74.29,
    		l: "同様"
    	},
    	{
    		r: 1007,
    		f: 74.28,
    		l: "小さな"
    	},
    	{
    		r: 1008,
    		f: 74.24,
    		l: "大阪"
    	},
    	{
    		r: 1009,
    		f: 74.23,
    		l: "共通"
    	},
    	{
    		r: 1010,
    		f: 74.2,
    		l: "つもり"
    	},
    	{
    		r: 1011,
    		f: 74.18,
    		l: "現代"
    	},
    	{
    		r: 1012,
    		f: 74.11,
    		l: "被害"
    	},
    	{
    		r: 1013,
    		f: 74.08,
    		l: "住宅"
    	},
    	{
    		r: 1014,
    		f: 74.01,
    		l: "選挙"
    	},
    	{
    		r: 1015,
    		f: 74.01,
    		l: "とともに"
    	},
    	{
    		r: 1016,
    		f: 73.93,
    		l: "新た"
    	},
    	{
    		r: 1017,
    		f: 73.84,
    		l: "大事"
    	},
    	{
    		r: 1018,
    		f: 73.83,
    		l: "あたり"
    	},
    	{
    		r: 1019,
    		f: 73.81,
    		l: "ろ"
    	},
    	{
    		r: 1020,
    		f: 73.78,
    		l: "安い"
    	},
    	{
    		r: 1021,
    		f: 73.7,
    		l: "山"
    	},
    	{
    		r: 1022,
    		f: 73.54,
    		l: "批判"
    	},
    	{
    		r: 1023,
    		f: 73.52,
    		l: "報道"
    	},
    	{
    		r: 1024,
    		f: 73.2,
    		l: "動き"
    	},
    	{
    		r: 1025,
    		f: 73.13,
    		l: "▼"
    	},
    	{
    		r: 1026,
    		f: 73.04,
    		l: "心配"
    	},
    	{
    		r: 1027,
    		f: 72.95,
    		l: "見つける"
    	},
    	{
    		r: 1028,
    		f: 72.94,
    		l: "本日"
    	},
    	{
    		r: 1029,
    		f: 72.92,
    		l: "残念"
    	},
    	{
    		r: 1030,
    		f: 72.89,
    		l: "なお"
    	},
    	{
    		r: 1031,
    		f: 72.89,
    		l: "クリック"
    	},
    	{
    		r: 1032,
    		f: 72.87,
    		l: "小さい"
    	},
    	{
    		r: 1033,
    		f: 72.61,
    		l: "業界"
    	},
    	{
    		r: 1034,
    		f: 72.58,
    		l: "相当"
    	},
    	{
    		r: 1035,
    		f: 72.55,
    		l: "どれ"
    	},
    	{
    		r: 1036,
    		f: 72.54,
    		l: "議員"
    	},
    	{
    		r: 1037,
    		f: 72.43,
    		l: "業務"
    	},
    	{
    		r: 1038,
    		f: 72.43,
    		l: "なか"
    	},
    	{
    		r: 1039,
    		f: 72.41,
    		l: "章"
    	},
    	{
    		r: 1040,
    		f: 72.39,
    		l: "調べる"
    	},
    	{
    		r: 1041,
    		f: 72.37,
    		l: "攻撃"
    	},
    	{
    		r: 1042,
    		f: 72.33,
    		l: "思い"
    	},
    	{
    		r: 1043,
    		f: 72.24,
    		l: "スポーツ"
    	},
    	{
    		r: 1044,
    		f: 72.13,
    		l: "メンバー"
    	},
    	{
    		r: 1045,
    		f: 72.07,
    		l: "世紀"
    	},
    	{
    		r: 1046,
    		f: 72.05,
    		l: "演奏"
    	},
    	{
    		r: 1047,
    		f: 71.94,
    		l: "家庭"
    	},
    	{
    		r: 1048,
    		f: 71.89,
    		l: "直接"
    	},
    	{
    		r: 1049,
    		f: 71.89,
    		l: "ところが"
    	},
    	{
    		r: 1050,
    		f: 71.65,
    		l: "聴く"
    	},
    	{
    		r: 1051,
    		f: 71.59,
    		l: "構成"
    	},
    	{
    		r: 1052,
    		f: 71.58,
    		l: "文章"
    	},
    	{
    		r: 1053,
    		f: 71.53,
    		l: "案"
    	},
    	{
    		r: 1054,
    		f: 71.49,
    		l: "異なる"
    	},
    	{
    		r: 1055,
    		f: 71.44,
    		l: "驚く"
    	},
    	{
    		r: 1056,
    		f: 71.39,
    		l: "希望"
    	},
    	{
    		r: 1057,
    		f: 71.35,
    		l: "もと"
    	},
    	{
    		r: 1058,
    		f: 71.29,
    		l: "記憶"
    	},
    	{
    		r: 1059,
    		f: 71.28,
    		l: "方々"
    	},
    	{
    		r: 1060,
    		f: 71.11,
    		l: "取引"
    	},
    	{
    		r: 1061,
    		f: 71.09,
    		l: "［"
    	},
    	{
    		r: 1062,
    		f: 71.01,
    		l: "美しい"
    	},
    	{
    		r: 1063,
    		f: 70.98,
    		l: "加える"
    	},
    	{
    		r: 1064,
    		f: 70.96,
    		l: "市民"
    	},
    	{
    		r: 1065,
    		f: 70.93,
    		l: "超"
    	},
    	{
    		r: 1066,
    		f: 70.87,
    		l: "とおり"
    	},
    	{
    		r: 1067,
    		f: 70.74,
    		l: "資金"
    	},
    	{
    		r: 1068,
    		f: 70.7,
    		l: "メディア"
    	},
    	{
    		r: 1069,
    		f: 70.69,
    		l: "友達"
    	},
    	{
    		r: 1070,
    		f: 70.68,
    		l: "危険"
    	},
    	{
    		r: 1071,
    		f: 70.62,
    		l: "運営"
    	},
    	{
    		r: 1072,
    		f: 70.6,
    		l: "導入"
    	},
    	{
    		r: 1073,
    		f: 70.45,
    		l: "予想"
    	},
    	{
    		r: 1074,
    		f: 70.4,
    		l: "ファイル"
    	},
    	{
    		r: 1075,
    		f: 70.23,
    		l: "いずれ"
    	},
    	{
    		r: 1076,
    		f: 70.22,
    		l: "モデル"
    	},
    	{
    		r: 1077,
    		f: 70.08,
    		l: "必ず"
    	},
    	{
    		r: 1078,
    		f: 70,
    		l: "たとえば"
    	},
    	{
    		r: 1079,
    		f: 69.98,
    		l: "答える"
    	},
    	{
    		r: 1080,
    		f: 69.77,
    		l: "レ"
    	},
    	{
    		r: 1081,
    		f: 69.76,
    		l: "発売"
    	},
    	{
    		r: 1082,
    		f: 69.7,
    		l: "はっきり"
    	},
    	{
    		r: 1083,
    		f: 69.66,
    		l: "寝る"
    	},
    	{
    		r: 1084,
    		f: 69.64,
    		l: "目指す"
    	},
    	{
    		r: 1085,
    		f: 69.64,
    		l: "話題"
    	},
    	{
    		r: 1086,
    		f: 69.59,
    		l: "建築"
    	},
    	{
    		r: 1087,
    		f: 69.57,
    		l: "印象"
    	},
    	{
    		r: 1088,
    		f: 69.45,
    		l: "詳しい"
    	},
    	{
    		r: 1089,
    		f: 69.39,
    		l: "課題"
    	},
    	{
    		r: 1090,
    		f: 69.35,
    		l: "￣"
    	},
    	{
    		r: 1091,
    		f: 69.34,
    		l: "事故"
    	},
    	{
    		r: 1092,
    		f: 69.23,
    		l: "ライブ"
    	},
    	{
    		r: 1093,
    		f: 69.15,
    		l: "低い"
    	},
    	{
    		r: 1094,
    		f: 69.11,
    		l: "ソフト"
    	},
    	{
    		r: 1095,
    		f: 68.94,
    		l: "額"
    	},
    	{
    		r: 1096,
    		f: 68.91,
    		l: "る"
    	},
    	{
    		r: 1097,
    		f: 68.66,
    		l: "バス"
    	},
    	{
    		r: 1098,
    		f: 68.57,
    		l: "困る"
    	},
    	{
    		r: 1099,
    		f: 68.56,
    		l: "母"
    	},
    	{
    		r: 1100,
    		f: 68.54,
    		l: "チェック"
    	},
    	{
    		r: 1101,
    		f: 68.48,
    		l: "ちゃんと"
    	},
    	{
    		r: 1102,
    		f: 68.46,
    		l: "われわれ"
    	},
    	{
    		r: 1103,
    		f: 68.3,
    		l: "］"
    	},
    	{
    		r: 1104,
    		f: 68.02,
    		l: "学習"
    	},
    	{
    		r: 1105,
    		f: 67.95,
    		l: "靴"
    	},
    	{
    		r: 1106,
    		f: 67.94,
    		l: "むしろ"
    	},
    	{
    		r: 1107,
    		f: 67.83,
    		l: "まさに"
    	},
    	{
    		r: 1108,
    		f: 67.82,
    		l: "権利"
    	},
    	{
    		r: 1109,
    		f: 67.78,
    		l: "発展"
    	},
    	{
    		r: 1110,
    		f: 67.76,
    		l: "記録"
    	},
    	{
    		r: 1111,
    		f: 67.69,
    		l: "割"
    	},
    	{
    		r: 1112,
    		f: 67.68,
    		l: "光"
    	},
    	{
    		r: 1113,
    		f: 67.61,
    		l: "個"
    	},
    	{
    		r: 1114,
    		f: 67.59,
    		l: "計算"
    	},
    	{
    		r: 1115,
    		f: 67.54,
    		l: "雨"
    	},
    	{
    		r: 1116,
    		f: 67.54,
    		l: "設計"
    	},
    	{
    		r: 1117,
    		f: 67.54,
    		l: "種類"
    	},
    	{
    		r: 1118,
    		f: 67.5,
    		l: "非"
    	},
    	{
    		r: 1119,
    		f: 67.41,
    		l: "現場"
    	},
    	{
    		r: 1120,
    		f: 67.39,
    		l: "途中"
    	},
    	{
    		r: 1121,
    		f: 67.31,
    		l: "気分"
    	},
    	{
    		r: 1122,
    		f: 67.27,
    		l: "昭和"
    	},
    	{
    		r: 1123,
    		f: 67.15,
    		l: "地球"
    	},
    	{
    		r: 1124,
    		f: 67.15,
    		l: "嬉しい"
    	},
    	{
    		r: 1125,
    		f: 67.12,
    		l: "移動"
    	},
    	{
    		r: 1126,
    		f: 67.05,
    		l: "絵"
    	},
    	{
    		r: 1127,
    		f: 66.92,
    		l: "ごと"
    	},
    	{
    		r: 1128,
    		f: 66.91,
    		l: "限る"
    	},
    	{
    		r: 1129,
    		f: 66.9,
    		l: "料"
    	},
    	{
    		r: 1130,
    		f: 66.85,
    		l: "発行"
    	},
    	{
    		r: 1131,
    		f: 66.8,
    		l: "宗教"
    	},
    	{
    		r: 1132,
    		f: 66.8,
    		l: "企画"
    	},
    	{
    		r: 1133,
    		f: 66.77,
    		l: "改正"
    	},
    	{
    		r: 1134,
    		f: 66.7,
    		l: "数字"
    	},
    	{
    		r: 1135,
    		f: 66.57,
    		l: "倍"
    	},
    	{
    		r: 1136,
    		f: 66.56,
    		l: "線"
    	},
    	{
    		r: 1137,
    		f: 66.45,
    		l: "そのもの"
    	},
    	{
    		r: 1138,
    		f: 66.44,
    		l: "不安"
    	},
    	{
    		r: 1139,
    		f: 66.34,
    		l: "自ら"
    	},
    	{
    		r: 1140,
    		f: 66.27,
    		l: "決まる"
    	},
    	{
    		r: 1141,
    		f: 66.17,
    		l: "広い"
    	},
    	{
    		r: 1142,
    		f: 66.12,
    		l: "広告"
    	},
    	{
    		r: 1143,
    		f: 65.99,
    		l: "土地"
    	},
    	{
    		r: 1144,
    		f: 65.94,
    		l: "それら"
    	},
    	{
    		r: 1145,
    		f: 65.93,
    		l: "有名"
    	},
    	{
    		r: 1146,
    		f: 65.92,
    		l: "基づく"
    	},
    	{
    		r: 1147,
    		f: 65.92,
    		l: "言語"
    	},
    	{
    		r: 1148,
    		f: 65.91,
    		l: "共同"
    	},
    	{
    		r: 1149,
    		f: 65.84,
    		l: "年代"
    	},
    	{
    		r: 1150,
    		f: 65.84,
    		l: "タイプ"
    	},
    	{
    		r: 1151,
    		f: 65.79,
    		l: "観る"
    	},
    	{
    		r: 1152,
    		f: 65.78,
    		l: "プロジェクト"
    	},
    	{
    		r: 1153,
    		f: 65.75,
    		l: "要求"
    	},
    	{
    		r: 1154,
    		f: 65.7,
    		l: "差"
    	},
    	{
    		r: 1155,
    		f: 65.64,
    		l: "残す"
    	},
    	{
    		r: 1156,
    		f: 65.61,
    		l: "教授"
    	},
    	{
    		r: 1157,
    		f: 65.52,
    		l: "さえ"
    	},
    	{
    		r: 1158,
    		f: 65.44,
    		l: "戦略"
    	},
    	{
    		r: 1159,
    		f: 65.42,
    		l: "営業"
    	},
    	{
    		r: 1160,
    		f: 65.26,
    		l: "制"
    	},
    	{
    		r: 1161,
    		f: 65.16,
    		l: "無理"
    	},
    	{
    		r: 1162,
    		f: 65.01,
    		l: "役割"
    	},
    	{
    		r: 1163,
    		f: 65.01,
    		l: "▲"
    	},
    	{
    		r: 1164,
    		f: 64.95,
    		l: "改善"
    	},
    	{
    		r: 1165,
    		f: 64.91,
    		l: "北朝鮮"
    	},
    	{
    		r: 1166,
    		f: 64.89,
    		l: "きっと"
    	},
    	{
    		r: 1167,
    		f: 64.82,
    		l: "期"
    	},
    	{
    		r: 1168,
    		f: 64.78,
    		l: "イギリス"
    	},
    	{
    		r: 1169,
    		f: 64.7,
    		l: "ユーザー"
    	},
    	{
    		r: 1170,
    		f: 64.69,
    		l: "撮影"
    	},
    	{
    		r: 1171,
    		f: 64.62,
    		l: "エネルギー"
    	},
    	{
    		r: 1172,
    		f: 64.56,
    		l: "知れる"
    	},
    	{
    		r: 1173,
    		f: 64.54,
    		l: "拡大"
    	},
    	{
    		r: 1174,
    		f: 64.52,
    		l: "色々"
    	},
    	{
    		r: 1175,
    		f: 64.4,
    		l: "いただける"
    	},
    	{
    		r: 1176,
    		f: 64.35,
    		l: "道路"
    	},
    	{
    		r: 1177,
    		f: 64.32,
    		l: "種"
    	},
    	{
    		r: 1178,
    		f: 64.25,
    		l: "切る"
    	},
    	{
    		r: 1179,
    		f: 64.09,
    		l: "憲法"
    	},
    	{
    		r: 1180,
    		f: 64.06,
    		l: "感謝"
    	},
    	{
    		r: 1181,
    		f: 64.02,
    		l: "い"
    	},
    	{
    		r: 1182,
    		f: 63.93,
    		l: "感覚"
    	},
    	{
    		r: 1183,
    		f: 63.88,
    		l: "旅"
    	},
    	{
    		r: 1184,
    		f: 63.63,
    		l: "紙"
    	},
    	{
    		r: 1185,
    		f: 63.58,
    		l: "高校"
    	},
    	{
    		r: 1186,
    		f: 63.48,
    		l: "なり"
    	},
    	{
    		r: 1187,
    		f: 63.45,
    		l: "付ける"
    	},
    	{
    		r: 1188,
    		f: 63.44,
    		l: "厳しい"
    	},
    	{
    		r: 1189,
    		f: 63.31,
    		l: "Ａ"
    	},
    	{
    		r: 1190,
    		f: 63.21,
    		l: "×"
    	},
    	{
    		r: 1191,
    		f: 63.07,
    		l: "仕方"
    	},
    	{
    		r: 1192,
    		f: 62.88,
    		l: "合わせる"
    	},
    	{
    		r: 1193,
    		f: 62.86,
    		l: "実行"
    	},
    	{
    		r: 1194,
    		f: 62.7,
    		l: "とりあえず"
    	},
    	{
    		r: 1195,
    		f: 62.6,
    		l: "記者"
    	},
    	{
    		r: 1196,
    		f: 62.56,
    		l: "通常"
    	},
    	{
    		r: 1197,
    		f: 62.52,
    		l: "既に"
    	},
    	{
    		r: 1198,
    		f: 62.52,
    		l: "現状"
    	},
    	{
    		r: 1199,
    		f: 62.5,
    		l: "建設"
    	},
    	{
    		r: 1200,
    		f: 62.45,
    		l: "味"
    	},
    	{
    		r: 1201,
    		f: 62.45,
    		l: "だが"
    	},
    	{
    		r: 1202,
    		f: 62.31,
    		l: "−"
    	},
    	{
    		r: 1203,
    		f: 62.28,
    		l: "スタッフ"
    	},
    	{
    		r: 1204,
    		f: 62.28,
    		l: "先日"
    	},
    	{
    		r: 1205,
    		f: 62.28,
    		l: "最新"
    	},
    	{
    		r: 1206,
    		f: 62.27,
    		l: "中央"
    	},
    	{
    		r: 1207,
    		f: 62.22,
    		l: "幸せ"
    	},
    	{
    		r: 1208,
    		f: 62.21,
    		l: "似る"
    	},
    	{
    		r: 1209,
    		f: 62.13,
    		l: "犬"
    	},
    	{
    		r: 1210,
    		f: 62.1,
    		l: "平均"
    	},
    	{
    		r: 1211,
    		f: 62.05,
    		l: "カード"
    	},
    	{
    		r: 1212,
    		f: 62.03,
    		l: "あれ"
    	},
    	{
    		r: 1213,
    		f: 62.01,
    		l: "物語"
    	},
    	{
    		r: 1214,
    		f: 61.75,
    		l: "末"
    	},
    	{
    		r: 1215,
    		f: 61.74,
    		l: "財政"
    	},
    	{
    		r: 1216,
    		f: 61.71,
    		l: "◇"
    	},
    	{
    		r: 1217,
    		f: 61.5,
    		l: "追加"
    	},
    	{
    		r: 1218,
    		f: 61.47,
    		l: "不思議"
    	},
    	{
    		r: 1219,
    		f: 61.44,
    		l: "ネットワーク"
    	},
    	{
    		r: 1220,
    		f: 61.41,
    		l: "警察"
    	},
    	{
    		r: 1221,
    		f: 61.39,
    		l: "初"
    	},
    	{
    		r: 1222,
    		f: 61.38,
    		l: "雑誌"
    	},
    	{
    		r: 1223,
    		f: 61.36,
    		l: "提案"
    	},
    	{
    		r: 1224,
    		f: 61.36,
    		l: "編"
    	},
    	{
    		r: 1225,
    		f: 61.3,
    		l: "思い出す"
    	},
    	{
    		r: 1226,
    		f: 61.27,
    		l: "大人"
    	},
    	{
    		r: 1227,
    		f: 61.16,
    		l: "日々"
    	},
    	{
    		r: 1228,
    		f: 61.03,
    		l: "様子"
    	},
    	{
    		r: 1229,
    		f: 60.96,
    		l: "なさる"
    	},
    	{
    		r: 1230,
    		f: 60.94,
    		l: "いろんな"
    	},
    	{
    		r: 1231,
    		f: 60.93,
    		l: "生徒"
    	},
    	{
    		r: 1232,
    		f: 60.92,
    		l: "にくい"
    	},
    	{
    		r: 1233,
    		f: 60.81,
    		l: "マン"
    	},
    	{
    		r: 1234,
    		f: 60.76,
    		l: "総合"
    	},
    	{
    		r: 1235,
    		f: 60.65,
    		l: "↓"
    	},
    	{
    		r: 1236,
    		f: 60.63,
    		l: "使える"
    	},
    	{
    		r: 1237,
    		f: 60.63,
    		l: "値"
    	},
    	{
    		r: 1238,
    		f: 60.58,
    		l: "活用"
    	},
    	{
    		r: 1239,
    		f: 60.56,
    		l: "決して"
    	},
    	{
    		r: 1240,
    		f: 60.54,
    		l: "交換"
    	},
    	{
    		r: 1241,
    		f: 60.51,
    		l: "身体"
    	},
    	{
    		r: 1242,
    		f: 60.46,
    		l: "整備"
    	},
    	{
    		r: 1243,
    		f: 60.35,
    		l: "リスク"
    	},
    	{
    		r: 1244,
    		f: 60.34,
    		l: "規定"
    	},
    	{
    		r: 1245,
    		f: 60.29,
    		l: "想像"
    	},
    	{
    		r: 1246,
    		f: 60.28,
    		l: "ああ"
    	},
    	{
    		r: 1247,
    		f: 60.26,
    		l: "ケース"
    	},
    	{
    		r: 1248,
    		f: 60.17,
    		l: "アジア"
    	},
    	{
    		r: 1249,
    		f: 60.03,
    		l: "左"
    	},
    	{
    		r: 1250,
    		f: 59.96,
    		l: "満足"
    	},
    	{
    		r: 1251,
    		f: 59.96,
    		l: "規模"
    	},
    	{
    		r: 1252,
    		f: 59.84,
    		l: "集"
    	},
    	{
    		r: 1253,
    		f: 59.8,
    		l: "本当"
    	},
    	{
    		r: 1254,
    		f: 59.77,
    		l: "以降"
    	},
    	{
    		r: 1255,
    		f: 59.75,
    		l: "比較"
    	},
    	{
    		r: 1256,
    		f: 59.72,
    		l: "素晴らしい"
    	},
    	{
    		r: 1257,
    		f: 59.68,
    		l: "法人"
    	},
    	{
    		r: 1258,
    		f: 59.6,
    		l: "クラス"
    	},
    	{
    		r: 1259,
    		f: 59.59,
    		l: "犯罪"
    	},
    	{
    		r: 1260,
    		f: 59.57,
    		l: "おっしゃる"
    	},
    	{
    		r: 1261,
    		f: 59.56,
    		l: "午前"
    	},
    	{
    		r: 1262,
    		f: 59.52,
    		l: "ちる"
    	},
    	{
    		r: 1263,
    		f: 59.48,
    		l: "会長"
    	},
    	{
    		r: 1264,
    		f: 59.45,
    		l: "せい"
    	},
    	{
    		r: 1265,
    		f: 59.44,
    		l: "通る"
    	},
    	{
    		r: 1266,
    		f: 59.37,
    		l: "なんと"
    	},
    	{
    		r: 1267,
    		f: 59.35,
    		l: "超える"
    	},
    	{
    		r: 1268,
    		f: 59.24,
    		l: "平和"
    	},
    	{
    		r: 1269,
    		f: 59.24,
    		l: "基礎"
    	},
    	{
    		r: 1270,
    		f: 59.16,
    		l: "特定"
    	},
    	{
    		r: 1271,
    		f: 59.13,
    		l: "ヨーロッパ"
    	},
    	{
    		r: 1272,
    		f: 59.11,
    		l: "ネタ"
    	},
    	{
    		r: 1273,
    		f: 59,
    		l: "流れ"
    	},
    	{
    		r: 1274,
    		f: 59,
    		l: "どうも"
    	},
    	{
    		r: 1275,
    		f: 58.94,
    		l: "ドア"
    	},
    	{
    		r: 1276,
    		f: 58.93,
    		l: "村"
    	},
    	{
    		r: 1277,
    		f: 58.93,
    		l: "画像"
    	},
    	{
    		r: 1278,
    		f: 58.92,
    		l: "少年"
    	},
    	{
    		r: 1279,
    		f: 58.9,
    		l: "いえる"
    	},
    	{
    		r: 1280,
    		f: 58.86,
    		l: "安定"
    	},
    	{
    		r: 1281,
    		f: 58.75,
    		l: "実験"
    	},
    	{
    		r: 1282,
    		f: 58.75,
    		l: "ちゃ"
    	},
    	{
    		r: 1283,
    		f: 58.68,
    		l: "つる"
    	},
    	{
    		r: 1284,
    		f: 58.64,
    		l: "メーカー"
    	},
    	{
    		r: 1285,
    		f: 58.62,
    		l: "間違い"
    	},
    	{
    		r: 1286,
    		f: 58.61,
    		l: "本人"
    	},
    	{
    		r: 1287,
    		f: 58.61,
    		l: "雰囲気"
    	},
    	{
    		r: 1288,
    		f: 58.6,
    		l: "国会"
    	},
    	{
    		r: 1289,
    		f: 58.59,
    		l: "気づく"
    	},
    	{
    		r: 1290,
    		f: 58.58,
    		l: "まぁ"
    	},
    	{
    		r: 1291,
    		f: 58.57,
    		l: "患者"
    	},
    	{
    		r: 1292,
    		f: 58.54,
    		l: "歌"
    	},
    	{
    		r: 1293,
    		f: 58.45,
    		l: "会場"
    	},
    	{
    		r: 1294,
    		f: 58.44,
    		l: "治療"
    	},
    	{
    		r: 1295,
    		f: 58.41,
    		l: "；"
    	},
    	{
    		r: 1296,
    		f: 58.39,
    		l: "ぜひ"
    	},
    	{
    		r: 1297,
    		f: 58.32,
    		l: "それでも"
    	},
    	{
    		r: 1298,
    		f: 58.31,
    		l: "電子"
    	},
    	{
    		r: 1299,
    		f: 58.23,
    		l: "小説"
    	},
    	{
    		r: 1300,
    		f: 58.16,
    		l: "箸"
    	},
    	{
    		r: 1301,
    		f: 58.07,
    		l: "死"
    	},
    	{
    		r: 1302,
    		f: 58.02,
    		l: "注目"
    	},
    	{
    		r: 1303,
    		f: 58.02,
    		l: "食事"
    	},
    	{
    		r: 1304,
    		f: 57.85,
    		l: "維持"
    	},
    	{
    		r: 1305,
    		f: 57.85,
    		l: "ほぼ"
    	},
    	{
    		r: 1306,
    		f: 57.83,
    		l: "文"
    	},
    	{
    		r: 1307,
    		f: 57.77,
    		l: "範囲"
    	},
    	{
    		r: 1308,
    		f: 57.77,
    		l: "コラム"
    	},
    	{
    		r: 1309,
    		f: 57.75,
    		l: "まとめる"
    	},
    	{
    		r: 1310,
    		f: 57.71,
    		l: "常に"
    	},
    	{
    		r: 1311,
    		f: 57.67,
    		l: "著作"
    	},
    	{
    		r: 1312,
    		f: 57.62,
    		l: "表"
    	},
    	{
    		r: 1313,
    		f: 57.57,
    		l: "ものの"
    	},
    	{
    		r: 1314,
    		f: 57.51,
    		l: "いっぱい"
    	},
    	{
    		r: 1315,
    		f: 57.44,
    		l: "失う"
    	},
    	{
    		r: 1316,
    		f: 57.38,
    		l: "夫"
    	},
    	{
    		r: 1317,
    		f: 57.36,
    		l: "理論"
    	},
    	{
    		r: 1318,
    		f: 57.34,
    		l: "秒"
    	},
    	{
    		r: 1319,
    		f: 57.34,
    		l: "日常"
    	},
    	{
    		r: 1320,
    		f: 57.33,
    		l: "イラク"
    	},
    	{
    		r: 1321,
    		f: 57.29,
    		l: "業者"
    	},
    	{
    		r: 1322,
    		f: 57.28,
    		l: "回答"
    	},
    	{
    		r: 1323,
    		f: 57.19,
    		l: "体制"
    	},
    	{
    		r: 1324,
    		f: 56.95,
    		l: "調整"
    	},
    	{
    		r: 1325,
    		f: 56.94,
    		l: "訴訟"
    	},
    	{
    		r: 1326,
    		f: 56.92,
    		l: "階"
    	},
    	{
    		r: 1327,
    		f: 56.89,
    		l: "酒"
    	},
    	{
    		r: 1328,
    		f: 56.83,
    		l: "やめる"
    	},
    	{
    		r: 1329,
    		f: 56.83,
    		l: "住民"
    	},
    	{
    		r: 1330,
    		f: 56.74,
    		l: "はじめ"
    	},
    	{
    		r: 1331,
    		f: 56.72,
    		l: "疑問"
    	},
    	{
    		r: 1332,
    		f: 56.64,
    		l: "ど"
    	},
    	{
    		r: 1333,
    		f: 56.63,
    		l: "当たる"
    	},
    	{
    		r: 1334,
    		f: 56.51,
    		l: "失敗"
    	},
    	{
    		r: 1335,
    		f: 56.49,
    		l: "落ちる"
    	},
    	{
    		r: 1336,
    		f: 56.43,
    		l: "繰り返す"
    	},
    	{
    		r: 1337,
    		f: 56.33,
    		l: "島"
    	},
    	{
    		r: 1338,
    		f: 56.19,
    		l: "息子"
    	},
    	{
    		r: 1339,
    		f: 56.16,
    		l: "資本"
    	},
    	{
    		r: 1340,
    		f: 56.1,
    		l: "事情"
    	},
    	{
    		r: 1341,
    		f: 56.01,
    		l: "応援"
    	},
    	{
    		r: 1342,
    		f: 56.01,
    		l: "コース"
    	},
    	{
    		r: 1343,
    		f: 55.95,
    		l: "》"
    	},
    	{
    		r: 1344,
    		f: 55.94,
    		l: "感想"
    	},
    	{
    		r: 1345,
    		f: 55.92,
    		l: "届く"
    	},
    	{
    		r: 1346,
    		f: 55.91,
    		l: "解説"
    	},
    	{
    		r: 1347,
    		f: 55.89,
    		l: "行なう"
    	},
    	{
    		r: 1348,
    		f: 55.86,
    		l: "妻"
    	},
    	{
    		r: 1349,
    		f: 55.82,
    		l: "シリーズ"
    	},
    	{
    		r: 1350,
    		f: 55.67,
    		l: "客"
    	},
    	{
    		r: 1351,
    		f: 55.64,
    		l: "公共"
    	},
    	{
    		r: 1352,
    		f: 55.63,
    		l: "民間"
    	},
    	{
    		r: 1353,
    		f: 55.62,
    		l: "イタリア"
    	},
    	{
    		r: 1354,
    		f: 55.48,
    		l: "弁護士"
    	},
    	{
    		r: 1355,
    		f: 55.44,
    		l: "なす"
    	},
    	{
    		r: 1356,
    		f: 55.34,
    		l: "裁判"
    	},
    	{
    		r: 1357,
    		f: 55.28,
    		l: "古い"
    	},
    	{
    		r: 1358,
    		f: 55.27,
    		l: "建物"
    	},
    	{
    		r: 1359,
    		f: 55.2,
    		l: "集まる"
    	},
    	{
    		r: 1360,
    		f: 55.19,
    		l: "対"
    	},
    	{
    		r: 1361,
    		f: 55.17,
    		l: "省"
    	},
    	{
    		r: 1362,
    		f: 55.17,
    		l: "措置"
    	},
    	{
    		r: 1363,
    		f: 55.06,
    		l: "組合"
    	},
    	{
    		r: 1364,
    		f: 55.05,
    		l: "に対し"
    	},
    	{
    		r: 1365,
    		f: 55.03,
    		l: "父"
    	},
    	{
    		r: 1366,
    		f: 55,
    		l: "払う"
    	},
    	{
    		r: 1367,
    		f: 54.85,
    		l: "本来"
    	},
    	{
    		r: 1368,
    		f: 54.84,
    		l: "元気"
    	},
    	{
    		r: 1369,
    		f: 54.75,
    		l: "一体"
    	},
    	{
    		r: 1370,
    		f: 54.74,
    		l: "宇宙"
    	},
    	{
    		r: 1371,
    		f: 54.74,
    		l: "《"
    	},
    	{
    		r: 1372,
    		f: 54.64,
    		l: "申す"
    	},
    	{
    		r: 1373,
    		f: 54.62,
    		l: "図"
    	},
    	{
    		r: 1374,
    		f: 54.57,
    		l: "シ"
    	},
    	{
    		r: 1375,
    		f: 54.56,
    		l: "引く"
    	},
    	{
    		r: 1376,
    		f: 54.55,
    		l: "クラブ"
    	},
    	{
    		r: 1377,
    		f: 54.54,
    		l: "タイトル"
    	},
    	{
    		r: 1378,
    		f: 54.5,
    		l: "作"
    	},
    	{
    		r: 1379,
    		f: 54.39,
    		l: "用いる"
    	},
    	{
    		r: 1380,
    		f: 54.33,
    		l: "番"
    	},
    	{
    		r: 1381,
    		f: 54.32,
    		l: "お客様"
    	},
    	{
    		r: 1382,
    		f: 54.25,
    		l: "採用"
    	},
    	{
    		r: 1383,
    		f: 54.21,
    		l: "しばらく"
    	},
    	{
    		r: 1384,
    		f: 54.1,
    		l: "二つ"
    	},
    	{
    		r: 1385,
    		f: 54.06,
    		l: "観光"
    	},
    	{
    		r: 1386,
    		f: 54.06,
    		l: "提出"
    	},
    	{
    		r: 1387,
    		f: 54.02,
    		l: "以来"
    	},
    	{
    		r: 1388,
    		f: 53.99,
    		l: "推進"
    	},
    	{
    		r: 1389,
    		f: 53.99,
    		l: "首相"
    	},
    	{
    		r: 1390,
    		f: 53.84,
    		l: "業"
    	},
    	{
    		r: 1391,
    		f: 53.83,
    		l: "向け"
    	},
    	{
    		r: 1392,
    		f: 53.83,
    		l: "確保"
    	},
    	{
    		r: 1393,
    		f: 53.83,
    		l: "動物"
    	},
    	{
    		r: 1394,
    		f: 53.83,
    		l: "集める"
    	},
    	{
    		r: 1395,
    		f: 53.82,
    		l: "離れる"
    	},
    	{
    		r: 1396,
    		f: 53.78,
    		l: "ただし"
    	},
    	{
    		r: 1397,
    		f: 53.74,
    		l: "検査"
    	},
    	{
    		r: 1398,
    		f: 53.74,
    		l: "映像"
    	},
    	{
    		r: 1399,
    		f: 53.66,
    		l: "信頼"
    	},
    	{
    		r: 1400,
    		f: 53.66,
    		l: "q"
    	},
    	{
    		r: 1401,
    		f: 53.64,
    		l: "要素"
    	},
    	{
    		r: 1402,
    		f: 53.62,
    		l: "触れる"
    	},
    	{
    		r: 1403,
    		f: 53.61,
    		l: "笑う"
    	},
    	{
    		r: 1404,
    		f: 53.54,
    		l: "どんどん"
    	},
    	{
    		r: 1405,
    		f: 53.53,
    		l: "世"
    	},
    	{
    		r: 1406,
    		f: 53.5,
    		l: "コスト"
    	},
    	{
    		r: 1407,
    		f: 53.31,
    		l: "人物"
    	},
    	{
    		r: 1408,
    		f: 53.14,
    		l: "規制"
    	},
    	{
    		r: 1409,
    		f: 53.09,
    		l: "空間"
    	},
    	{
    		r: 1410,
    		f: 52.98,
    		l: "記念"
    	},
    	{
    		r: 1411,
    		f: 52.91,
    		l: "方針"
    	},
    	{
    		r: 1412,
    		f: 52.9,
    		l: "もらえる"
    	},
    	{
    		r: 1413,
    		f: 52.86,
    		l: "よろしい"
    	},
    	{
    		r: 1414,
    		f: 52.85,
    		l: "もっとも"
    	},
    	{
    		r: 1415,
    		f: 52.85,
    		l: "役"
    	},
    	{
    		r: 1416,
    		f: 52.83,
    		l: "右"
    	},
    	{
    		r: 1417,
    		f: 52.76,
    		l: "楽しみ"
    	},
    	{
    		r: 1418,
    		f: 52.75,
    		l: "審議"
    	},
    	{
    		r: 1419,
    		f: 52.74,
    		l: "競争"
    	},
    	{
    		r: 1420,
    		f: 52.68,
    		l: "設置"
    	},
    	{
    		r: 1421,
    		f: 52.67,
    		l: "位置"
    	},
    	{
    		r: 1422,
    		f: 52.61,
    		l: "テスト"
    	},
    	{
    		r: 1423,
    		f: 52.58,
    		l: "全然"
    	},
    	{
    		r: 1424,
    		f: 52.5,
    		l: "費用"
    	},
    	{
    		r: 1425,
    		f: 52.46,
    		l: "株式会社"
    	},
    	{
    		r: 1426,
    		f: 52.45,
    		l: "席"
    	},
    	{
    		r: 1427,
    		f: 52.45,
    		l: "観"
    	},
    	{
    		r: 1428,
    		f: 52.42,
    		l: "ロ"
    	},
    	{
    		r: 1429,
    		f: 52.42,
    		l: "大統領"
    	},
    	{
    		r: 1430,
    		f: 52.35,
    		l: "指定"
    	},
    	{
    		r: 1431,
    		f: 52.18,
    		l: "事務所"
    	},
    	{
    		r: 1432,
    		f: 51.99,
    		l: "感情"
    	},
    	{
    		r: 1433,
    		f: 51.99,
    		l: "付く"
    	},
    	{
    		r: 1434,
    		f: 51.89,
    		l: "さまざま"
    	},
    	{
    		r: 1435,
    		f: 51.85,
    		l: "京都"
    	},
    	{
    		r: 1436,
    		f: 51.81,
    		l: "ランキング"
    	},
    	{
    		r: 1437,
    		f: 51.73,
    		l: "といった"
    	},
    	{
    		r: 1438,
    		f: 51.71,
    		l: "かかわる"
    	},
    	{
    		r: 1439,
    		f: 51.61,
    		l: "↑"
    	},
    	{
    		r: 1440,
    		f: 51.53,
    		l: "さすが"
    	},
    	{
    		r: 1441,
    		f: 51.53,
    		l: "許す"
    	},
    	{
    		r: 1442,
    		f: 51.52,
    		l: "空"
    	},
    	{
    		r: 1443,
    		f: 51.4,
    		l: "関わる"
    	},
    	{
    		r: 1444,
    		f: 51.4,
    		l: "起こす"
    	},
    	{
    		r: 1445,
    		f: 51.39,
    		l: "仲間"
    	},
    	{
    		r: 1446,
    		f: 51.38,
    		l: "メッセージ"
    	},
    	{
    		r: 1447,
    		f: 51.32,
    		l: "迎える"
    	},
    	{
    		r: 1448,
    		f: 51.25,
    		l: "整理"
    	},
    	{
    		r: 1449,
    		f: 51.23,
    		l: "協会"
    	},
    	{
    		r: 1450,
    		f: 51.19,
    		l: "モノ"
    	},
    	{
    		r: 1451,
    		f: 51.16,
    		l: "官"
    	},
    	{
    		r: 1452,
    		f: 51.15,
    		l: "至る"
    	},
    	{
    		r: 1453,
    		f: 51.07,
    		l: "ロシア"
    	},
    	{
    		r: 1454,
    		f: 51.07,
    		l: "多数"
    	},
    	{
    		r: 1455,
    		f: 50.99,
    		l: "デジタル"
    	},
    	{
    		r: 1456,
    		f: 50.95,
    		l: "耳"
    	},
    	{
    		r: 1457,
    		f: 50.94,
    		l: "積極"
    	},
    	{
    		r: 1458,
    		f: 50.89,
    		l: "かつ"
    	},
    	{
    		r: 1459,
    		f: 50.89,
    		l: "願う"
    	},
    	{
    		r: 1460,
    		f: 50.83,
    		l: "安心"
    	},
    	{
    		r: 1461,
    		f: 50.76,
    		l: "ダメ"
    	},
    	{
    		r: 1462,
    		f: 50.75,
    		l: "独立"
    	},
    	{
    		r: 1463,
    		f: 50.75,
    		l: "イン"
    	},
    	{
    		r: 1464,
    		f: 50.72,
    		l: "読者"
    	},
    	{
    		r: 1465,
    		f: 50.7,
    		l: "勝つ"
    	},
    	{
    		r: 1466,
    		f: 50.67,
    		l: "ぶり"
    	},
    	{
    		r: 1467,
    		f: 50.65,
    		l: "雇用"
    	},
    	{
    		r: 1468,
    		f: 50.56,
    		l: "なに"
    	},
    	{
    		r: 1469,
    		f: 50.47,
    		l: "傾向"
    	},
    	{
    		r: 1470,
    		f: 50.34,
    		l: "そもそも"
    	},
    	{
    		r: 1471,
    		f: 50.29,
    		l: "打つ"
    	},
    	{
    		r: 1472,
    		f: 50.26,
    		l: "賞"
    	},
    	{
    		r: 1473,
    		f: 50.23,
    		l: "誕生"
    	},
    	{
    		r: 1474,
    		f: 50.21,
    		l: "ぼく"
    	},
    	{
    		r: 1475,
    		f: 50.19,
    		l: "遅い"
    	},
    	{
    		r: 1476,
    		f: 50.18,
    		l: "流れる"
    	},
    	{
    		r: 1477,
    		f: 50.16,
    		l: "撮る"
    	},
    	{
    		r: 1478,
    		f: 50.08,
    		l: "いらっしゃる"
    	},
    	{
    		r: 1479,
    		f: 50.02,
    		l: "まいる"
    	},
    	{
    		r: 1480,
    		f: 50.02,
    		l: "バー"
    	},
    	{
    		r: 1481,
    		f: 50,
    		l: "都"
    	},
    	{
    		r: 1482,
    		f: 50,
    		l: "全員"
    	},
    	{
    		r: 1483,
    		f: 49.97,
    		l: "コンピュータ"
    	},
    	{
    		r: 1484,
    		f: 49.94,
    		l: "皆"
    	},
    	{
    		r: 1485,
    		f: 49.82,
    		l: "参照"
    	},
    	{
    		r: 1486,
    		f: 49.71,
    		l: "少なくとも"
    	},
    	{
    		r: 1487,
    		f: 49.68,
    		l: "地元"
    	},
    	{
    		r: 1488,
    		f: 49.67,
    		l: "壁"
    	},
    	{
    		r: 1489,
    		f: 49.65,
    		l: "是非"
    	},
    	{
    		r: 1490,
    		f: 49.6,
    		l: "明確"
    	},
    	{
    		r: 1491,
    		f: 49.59,
    		l: "つながる"
    	},
    	{
    		r: 1492,
    		f: 49.57,
    		l: "つて"
    	},
    	{
    		r: 1493,
    		f: 49.54,
    		l: "士"
    	},
    	{
    		r: 1494,
    		f: 49.52,
    		l: "特徴"
    	},
    	{
    		r: 1495,
    		f: 49.51,
    		l: "セット"
    	},
    	{
    		r: 1496,
    		f: 49.42,
    		l: "たつ"
    	},
    	{
    		r: 1497,
    		f: 49.42,
    		l: "皆様"
    	},
    	{
    		r: 1498,
    		f: 49.42,
    		l: "カメラ"
    	},
    	{
    		r: 1499,
    		f: 49.36,
    		l: "どうしても"
    	},
    	{
    		r: 1500,
    		f: 49.32,
    		l: "別に"
    	},
    	{
    		r: 1501,
    		f: 49.25,
    		l: "魅力"
    	},
    	{
    		r: 1502,
    		f: 49.23,
    		l: "人口"
    	},
    	{
    		r: 1503,
    		f: 49.2,
    		l: "反応"
    	},
    	{
    		r: 1504,
    		f: 49.2,
    		l: "きちんと"
    	},
    	{
    		r: 1505,
    		f: 49.16,
    		l: "まだまだ"
    	},
    	{
    		r: 1506,
    		f: 49.08,
    		l: "そういった"
    	},
    	{
    		r: 1507,
    		f: 49.08,
    		l: "手段"
    	},
    	{
    		r: 1508,
    		f: 49.07,
    		l: "有効"
    	},
    	{
    		r: 1509,
    		f: 49.02,
    		l: "タイ"
    	},
    	{
    		r: 1510,
    		f: 49,
    		l: "工場"
    	},
    	{
    		r: 1511,
    		f: 49,
    		l: "入力"
    	},
    	{
    		r: 1512,
    		f: 48.98,
    		l: "ビデオ"
    	},
    	{
    		r: 1513,
    		f: 48.98,
    		l: "注文"
    	},
    	{
    		r: 1514,
    		f: 48.97,
    		l: "集中"
    	},
    	{
    		r: 1515,
    		f: 48.93,
    		l: "あまりに"
    	},
    	{
    		r: 1516,
    		f: 48.9,
    		l: "さま"
    	},
    	{
    		r: 1517,
    		f: 48.85,
    		l: "一度"
    	},
    	{
    		r: 1518,
    		f: 48.75,
    		l: "脳"
    	},
    	{
    		r: 1519,
    		f: 48.73,
    		l: "北"
    	},
    	{
    		r: 1520,
    		f: 48.67,
    		l: "現象"
    	},
    	{
    		r: 1521,
    		f: 48.65,
    		l: "ビル"
    	},
    	{
    		r: 1522,
    		f: 48.6,
    		l: "団"
    	},
    	{
    		r: 1523,
    		f: 48.59,
    		l: "感動"
    	},
    	{
    		r: 1524,
    		f: 48.48,
    		l: "ソ"
    	},
    	{
    		r: 1525,
    		f: 48.46,
    		l: "Δ"
    	},
    	{
    		r: 1526,
    		f: 48.39,
    		l: "おいしい"
    	},
    	{
    		r: 1527,
    		f: 48.37,
    		l: "禁止"
    	},
    	{
    		r: 1528,
    		f: 48.37,
    		l: "サポート"
    	},
    	{
    		r: 1529,
    		f: 48.36,
    		l: "ずつ"
    	},
    	{
    		r: 1530,
    		f: 48.2,
    		l: "実践"
    	},
    	{
    		r: 1531,
    		f: 48.06,
    		l: "おそらく"
    	},
    	{
    		r: 1532,
    		f: 48.05,
    		l: "小泉"
    	},
    	{
    		r: 1533,
    		f: 48.02,
    		l: "職員"
    	},
    	{
    		r: 1534,
    		f: 48.01,
    		l: "理事"
    	},
    	{
    		r: 1535,
    		f: 47.99,
    		l: "会員"
    	},
    	{
    		r: 1536,
    		f: 47.94,
    		l: "案内"
    	},
    	{
    		r: 1537,
    		f: 47.93,
    		l: "過ごす"
    	},
    	{
    		r: 1538,
    		f: 47.92,
    		l: "薬"
    	},
    	{
    		r: 1539,
    		f: 47.92,
    		l: "シーン"
    	},
    	{
    		r: 1540,
    		f: 47.89,
    		l: "従来"
    	},
    	{
    		r: 1541,
    		f: 47.79,
    		l: "農業"
    	},
    	{
    		r: 1542,
    		f: 47.75,
    		l: "用意"
    	},
    	{
    		r: 1543,
    		f: 47.73,
    		l: "運用"
    	},
    	{
    		r: 1544,
    		f: 47.71,
    		l: "世代"
    	},
    	{
    		r: 1545,
    		f: 47.69,
    		l: "そうした"
    	},
    	{
    		r: 1546,
    		f: 47.68,
    		l: "歌う"
    	},
    	{
    		r: 1547,
    		f: 47.68,
    		l: "強化"
    	},
    	{
    		r: 1548,
    		f: 47.68,
    		l: "納得"
    	},
    	{
    		r: 1549,
    		f: 47.66,
    		l: "周り"
    	},
    	{
    		r: 1550,
    		f: 47.64,
    		l: "収入"
    	},
    	{
    		r: 1551,
    		f: 47.62,
    		l: "増加"
    	},
    	{
    		r: 1552,
    		f: 47.61,
    		l: "レポート"
    	},
    	{
    		r: 1553,
    		f: 47.61,
    		l: "年齢"
    	},
    	{
    		r: 1554,
    		f: 47.58,
    		l: "裏"
    	},
    	{
    		r: 1555,
    		f: 47.57,
    		l: "未来"
    	},
    	{
    		r: 1556,
    		f: 47.54,
    		l: "社員"
    	},
    	{
    		r: 1557,
    		f: 47.51,
    		l: "食"
    	},
    	{
    		r: 1558,
    		f: 47.45,
    		l: "教会"
    	},
    	{
    		r: 1559,
    		f: 47.45,
    		l: "舞台"
    	},
    	{
    		r: 1560,
    		f: 47.42,
    		l: "前回"
    	},
    	{
    		r: 1561,
    		f: 47.39,
    		l: "年金"
    	},
    	{
    		r: 1562,
    		f: 47.37,
    		l: "もう少し"
    	},
    	{
    		r: 1563,
    		f: 47.36,
    		l: "＠"
    	},
    	{
    		r: 1564,
    		f: 47.3,
    		l: "交通"
    	},
    	{
    		r: 1565,
    		f: 47.3,
    		l: "総"
    	},
    	{
    		r: 1566,
    		f: 47.3,
    		l: "料金"
    	},
    	{
    		r: 1567,
    		f: 47.3,
    		l: "教師"
    	},
    	{
    		r: 1568,
    		f: 47.28,
    		l: "重い"
    	},
    	{
    		r: 1569,
    		f: 47.12,
    		l: "どうして"
    	},
    	{
    		r: 1570,
    		f: 47.09,
    		l: "著"
    	},
    	{
    		r: 1571,
    		f: 47.06,
    		l: "森"
    	},
    	{
    		r: 1572,
    		f: 46.99,
    		l: "他人"
    	},
    	{
    		r: 1573,
    		f: 46.9,
    		l: "組"
    	},
    	{
    		r: 1574,
    		f: 46.86,
    		l: "株式"
    	},
    	{
    		r: 1575,
    		f: 46.83,
    		l: "上昇"
    	},
    	{
    		r: 1576,
    		f: 46.73,
    		l: "否定"
    	},
    	{
    		r: 1577,
    		f: 46.63,
    		l: "機械"
    	},
    	{
    		r: 1578,
    		f: 46.6,
    		l: "完成"
    	},
    	{
    		r: 1579,
    		f: 46.57,
    		l: "大好き"
    	},
    	{
    		r: 1580,
    		f: 46.53,
    		l: "ねぇ"
    	},
    	{
    		r: 1581,
    		f: 46.53,
    		l: "扱う"
    	},
    	{
    		r: 1582,
    		f: 46.51,
    		l: "修正"
    	},
    	{
    		r: 1583,
    		f: 46.48,
    		l: "くん"
    	},
    	{
    		r: 1584,
    		f: 46.45,
    		l: "電車"
    	},
    	{
    		r: 1585,
    		f: 46.4,
    		l: "一応"
    	},
    	{
    		r: 1586,
    		f: 46.39,
    		l: "向上"
    	},
    	{
    		r: 1587,
    		f: 46.35,
    		l: "負ける"
    	},
    	{
    		r: 1588,
    		f: 46.32,
    		l: "生じる"
    	},
    	{
    		r: 1589,
    		f: 46.28,
    		l: "週"
    	},
    	{
    		r: 1590,
    		f: 46.28,
    		l: "野球"
    	},
    	{
    		r: 1591,
    		f: 46.24,
    		l: "姿勢"
    	},
    	{
    		r: 1592,
    		f: 46.21,
    		l: "スペイン"
    	},
    	{
    		r: 1593,
    		f: 46.09,
    		l: "遊ぶ"
    	},
    	{
    		r: 1594,
    		f: 46.09,
    		l: "訪問"
    	},
    	{
    		r: 1595,
    		f: 46.07,
    		l: "引用"
    	},
    	{
    		r: 1596,
    		f: 46,
    		l: "インド"
    	},
    	{
    		r: 1597,
    		f: 45.97,
    		l: "並ぶ"
    	},
    	{
    		r: 1598,
    		f: 45.96,
    		l: "視点"
    	},
    	{
    		r: 1599,
    		f: 45.94,
    		l: "小学校"
    	},
    	{
    		r: 1600,
    		f: 45.87,
    		l: "電気"
    	},
    	{
    		r: 1601,
    		f: 45.86,
    		l: "ノ"
    	},
    	{
    		r: 1602,
    		f: 45.86,
    		l: "パ"
    	},
    	{
    		r: 1603,
    		f: 45.83,
    		l: "効率"
    	},
    	{
    		r: 1604,
    		f: 45.8,
    		l: "間違う"
    	},
    	{
    		r: 1605,
    		f: 45.79,
    		l: "芸術"
    	},
    	{
    		r: 1606,
    		f: 45.66,
    		l: "挙げる"
    	},
    	{
    		r: 1607,
    		f: 45.64,
    		l: "会話"
    	},
    	{
    		r: 1608,
    		f: 45.61,
    		l: "ドラマ"
    	},
    	{
    		r: 1609,
    		f: 45.59,
    		l: "再び"
    	},
    	{
    		r: 1610,
    		f: 45.57,
    		l: "春"
    	},
    	{
    		r: 1611,
    		f: 45.46,
    		l: "解釈"
    	},
    	{
    		r: 1612,
    		f: 45.4,
    		l: "ゆく"
    	},
    	{
    		r: 1613,
    		f: 45.39,
    		l: "猫"
    	},
    	{
    		r: 1614,
    		f: 45.38,
    		l: "４月"
    	},
    	{
    		r: 1615,
    		f: 45.37,
    		l: "資産"
    	},
    	{
    		r: 1616,
    		f: 45.34,
    		l: "行"
    	},
    	{
    		r: 1617,
    		f: 45.29,
    		l: "結論"
    	},
    	{
    		r: 1618,
    		f: 45.24,
    		l: "大丈夫"
    	},
    	{
    		r: 1619,
    		f: 45.24,
    		l: "止める"
    	},
    	{
    		r: 1620,
    		f: 45.19,
    		l: "取り組む"
    	},
    	{
    		r: 1621,
    		f: 45.17,
    		l: "かつて"
    	},
    	{
    		r: 1622,
    		f: 45.15,
    		l: "怖い"
    	},
    	{
    		r: 1623,
    		f: 45.1,
    		l: "半"
    	},
    	{
    		r: 1624,
    		f: 45.1,
    		l: "界"
    	},
    	{
    		r: 1625,
    		f: 45.08,
    		l: "製造"
    	},
    	{
    		r: 1626,
    		f: 45.03,
    		l: "困難"
    	},
    	{
    		r: 1627,
    		f: 44.98,
    		l: "回復"
    	},
    	{
    		r: 1628,
    		f: 44.96,
    		l: "◎"
    	},
    	{
    		r: 1629,
    		f: 44.95,
    		l: "美味しい"
    	},
    	{
    		r: 1630,
    		f: 44.93,
    		l: "適用"
    	},
    	{
    		r: 1631,
    		f: 44.92,
    		l: "母親"
    	},
    	{
    		r: 1632,
    		f: 44.9,
    		l: "取材"
    	},
    	{
    		r: 1633,
    		f: 44.87,
    		l: "やっと"
    	},
    	{
    		r: 1634,
    		f: 44.83,
    		l: "保障"
    	},
    	{
    		r: 1635,
    		f: 44.83,
    		l: "集団"
    	},
    	{
    		r: 1636,
    		f: 44.81,
    		l: "ルール"
    	},
    	{
    		r: 1637,
    		f: 44.81,
    		l: "卒業"
    	},
    	{
    		r: 1638,
    		f: 44.77,
    		l: "事態"
    	},
    	{
    		r: 1639,
    		f: 44.7,
    		l: "立てる"
    	},
    	{
    		r: 1640,
    		f: 44.68,
    		l: "雪"
    	},
    	{
    		r: 1641,
    		f: 44.68,
    		l: "画面"
    	},
    	{
    		r: 1642,
    		f: 44.63,
    		l: "おかしい"
    	},
    	{
    		r: 1643,
    		f: 44.58,
    		l: "資格"
    	},
    	{
    		r: 1644,
    		f: 44.55,
    		l: "時点"
    	},
    	{
    		r: 1645,
    		f: 44.54,
    		l: "病気"
    	},
    	{
    		r: 1646,
    		f: 44.53,
    		l: "なれる"
    	},
    	{
    		r: 1647,
    		f: 44.53,
    		l: "スタート"
    	},
    	{
    		r: 1648,
    		f: 44.5,
    		l: "更に"
    	},
    	{
    		r: 1649,
    		f: 44.49,
    		l: "活躍"
    	},
    	{
    		r: 1650,
    		f: 44.41,
    		l: "ですから"
    	},
    	{
    		r: 1651,
    		f: 44.38,
    		l: "馬"
    	},
    	{
    		r: 1652,
    		f: 44.32,
    		l: "冊"
    	},
    	{
    		r: 1653,
    		f: 44.28,
    		l: "問う"
    	},
    	{
    		r: 1654,
    		f: 44.25,
    		l: "ちょうど"
    	},
    	{
    		r: 1655,
    		f: 44.25,
    		l: "命"
    	},
    	{
    		r: 1656,
    		f: 44.23,
    		l: "殺す"
    	},
    	{
    		r: 1657,
    		f: 44.21,
    		l: "サイズ"
    	},
    	{
    		r: 1658,
    		f: 44.2,
    		l: "ころ"
    	},
    	{
    		r: 1659,
    		f: 44.19,
    		l: "限定"
    	},
    	{
    		r: 1660,
    		f: 44.12,
    		l: "ひとり"
    	},
    	{
    		r: 1661,
    		f: 44.12,
    		l: "医師"
    	},
    	{
    		r: 1662,
    		f: 43.98,
    		l: "工事"
    	},
    	{
    		r: 1663,
    		f: 43.94,
    		l: "居る"
    	},
    	{
    		r: 1664,
    		f: 43.92,
    		l: "無"
    	},
    	{
    		r: 1665,
    		f: 43.92,
    		l: "６月"
    	},
    	{
    		r: 1666,
    		f: 43.87,
    		l: "現れる"
    	},
    	{
    		r: 1667,
    		f: 43.85,
    		l: "正直"
    	},
    	{
    		r: 1668,
    		f: 43.84,
    		l: "原則"
    	},
    	{
    		r: 1669,
    		f: 43.83,
    		l: "自動車"
    	},
    	{
    		r: 1670,
    		f: 43.78,
    		l: "づくり"
    	},
    	{
    		r: 1671,
    		f: 43.77,
    		l: "では"
    	},
    	{
    		r: 1672,
    		f: 43.77,
    		l: "部門"
    	},
    	{
    		r: 1673,
    		f: 43.75,
    		l: "女の子"
    	},
    	{
    		r: 1674,
    		f: 43.75,
    		l: "出演"
    	},
    	{
    		r: 1675,
    		f: 43.73,
    		l: "民族"
    	},
    	{
    		r: 1676,
    		f: 43.73,
    		l: "充実"
    	},
    	{
    		r: 1677,
    		f: 43.67,
    		l: "伴う"
    	},
    	{
    		r: 1678,
    		f: 43.65,
    		l: "講演"
    	},
    	{
    		r: 1679,
    		f: 43.64,
    		l: "したがって"
    	},
    	{
    		r: 1680,
    		f: 43.61,
    		l: "瞬間"
    	},
    	{
    		r: 1681,
    		f: 43.6,
    		l: "がる"
    	},
    	{
    		r: 1682,
    		f: 43.6,
    		l: "交流"
    	},
    	{
    		r: 1683,
    		f: 43.56,
    		l: "大量"
    	},
    	{
    		r: 1684,
    		f: 43.54,
    		l: "回る"
    	},
    	{
    		r: 1685,
    		f: 43.53,
    		l: "久しぶり"
    	},
    	{
    		r: 1686,
    		f: 43.51,
    		l: "革命"
    	},
    	{
    		r: 1687,
    		f: 43.5,
    		l: "成果"
    	},
    	{
    		r: 1688,
    		f: 43.47,
    		l: "じ"
    	},
    	{
    		r: 1689,
    		f: 43.44,
    		l: "コミュニケーション"
    	},
    	{
    		r: 1690,
    		f: 43.41,
    		l: "任"
    	},
    	{
    		r: 1691,
    		f: 43.41,
    		l: "標準"
    	},
    	{
    		r: 1692,
    		f: 43.39,
    		l: "ひる"
    	},
    	{
    		r: 1693,
    		f: 43.36,
    		l: "まるで"
    	},
    	{
    		r: 1694,
    		f: 43.32,
    		l: "輸入"
    	},
    	{
    		r: 1695,
    		f: 43.31,
    		l: "やつ"
    	},
    	{
    		r: 1696,
    		f: 43.22,
    		l: "背景"
    	},
    	{
    		r: 1697,
    		f: 43.22,
    		l: "政権"
    	},
    	{
    		r: 1698,
    		f: 43.19,
    		l: "スタイル"
    	},
    	{
    		r: 1699,
    		f: 43.19,
    		l: "喜ぶ"
    	},
    	{
    		r: 1700,
    		f: 43.18,
    		l: "星"
    	},
    	{
    		r: 1701,
    		f: 43.17,
    		l: "協議"
    	},
    	{
    		r: 1702,
    		f: 43.16,
    		l: "っていう"
    	},
    	{
    		r: 1703,
    		f: 43.16,
    		l: "関心"
    	},
    	{
    		r: 1704,
    		f: 43.16,
    		l: "勝手"
    	},
    	{
    		r: 1705,
    		f: 43.09,
    		l: "一覧"
    	},
    	{
    		r: 1706,
    		f: 43.09,
    		l: "副"
    	},
    	{
    		r: 1707,
    		f: 43.02,
    		l: "取り上げる"
    	},
    	{
    		r: 1708,
    		f: 43.01,
    		l: "７月"
    	},
    	{
    		r: 1709,
    		f: 43,
    		l: "伝統"
    	},
    	{
    		r: 1710,
    		f: 42.99,
    		l: "横"
    	},
    	{
    		r: 1711,
    		f: 42.92,
    		l: "聞こえる"
    	},
    	{
    		r: 1712,
    		f: 42.84,
    		l: "民主"
    	},
    	{
    		r: 1713,
    		f: 42.81,
    		l: "制限"
    	},
    	{
    		r: 1714,
    		f: 42.79,
    		l: "投票"
    	},
    	{
    		r: 1715,
    		f: 42.79,
    		l: "どうぞ"
    	},
    	{
    		r: 1716,
    		f: 42.77,
    		l: "値段"
    	},
    	{
    		r: 1717,
    		f: 42.61,
    		l: "沖縄"
    	},
    	{
    		r: 1718,
    		f: 42.6,
    		l: "図る"
    	},
    	{
    		r: 1719,
    		f: 42.59,
    		l: "川"
    	},
    	{
    		r: 1720,
    		f: 42.59,
    		l: "軽い"
    	},
    	{
    		r: 1721,
    		f: 42.52,
    		l: "若者"
    	},
    	{
    		r: 1722,
    		f: 42.51,
    		l: "心理"
    	},
    	{
    		r: 1723,
    		f: 42.49,
    		l: "大体"
    	},
    	{
    		r: 1724,
    		f: 42.46,
    		l: "里"
    	},
    	{
    		r: 1725,
    		f: 42.45,
    		l: "掲示板"
    	},
    	{
    		r: 1726,
    		f: 42.41,
    		l: "番号"
    	},
    	{
    		r: 1727,
    		f: 42.4,
    		l: "トン"
    	},
    	{
    		r: 1728,
    		f: 42.4,
    		l: "前提"
    	},
    	{
    		r: 1729,
    		f: 42.36,
    		l: "館"
    	},
    	{
    		r: 1730,
    		f: 42.32,
    		l: "船"
    	},
    	{
    		r: 1731,
    		f: 42.28,
    		l: "ある程度"
    	},
    	{
    		r: 1732,
    		f: 42.28,
    		l: "突然"
    	},
    	{
    		r: 1733,
    		f: 42.24,
    		l: "なんだか"
    	},
    	{
    		r: 1734,
    		f: 42.23,
    		l: "半分"
    	},
    	{
    		r: 1735,
    		f: 42.22,
    		l: "思想"
    	},
    	{
    		r: 1736,
    		f: 42.15,
    		l: "オープン"
    	},
    	{
    		r: 1737,
    		f: 42.09,
    		l: "請求"
    	},
    	{
    		r: 1738,
    		f: 42.03,
    		l: "正確"
    	},
    	{
    		r: 1739,
    		f: 42.03,
    		l: "教室"
    	},
    	{
    		r: 1740,
    		f: 42.01,
    		l: "周辺"
    	},
    	{
    		r: 1741,
    		f: 42.01,
    		l: "セミナー"
    	},
    	{
    		r: 1742,
    		f: 41.98,
    		l: "リスト"
    	},
    	{
    		r: 1743,
    		f: 41.97,
    		l: "３月"
    	},
    	{
    		r: 1744,
    		f: 41.9,
    		l: "応じる"
    	},
    	{
    		r: 1745,
    		f: 41.89,
    		l: "不足"
    	},
    	{
    		r: 1746,
    		f: 41.87,
    		l: "実"
    	},
    	{
    		r: 1747,
    		f: 41.86,
    		l: "寒い"
    	},
    	{
    		r: 1748,
    		f: 41.86,
    		l: "デ"
    	},
    	{
    		r: 1749,
    		f: 41.85,
    		l: "法案"
    	},
    	{
    		r: 1750,
    		f: 41.83,
    		l: "東"
    	},
    	{
    		r: 1751,
    		f: 41.77,
    		l: "ボール"
    	},
    	{
    		r: 1752,
    		f: 41.76,
    		l: "すなわち"
    	},
    	{
    		r: 1753,
    		f: 41.75,
    		l: "コード"
    	},
    	{
    		r: 1754,
    		f: 41.73,
    		l: "王"
    	},
    	{
    		r: 1755,
    		f: 41.73,
    		l: "捨てる"
    	},
    	{
    		r: 1756,
    		f: 41.65,
    		l: "世の中"
    	},
    	{
    		r: 1757,
    		f: 41.64,
    		l: "みなさん"
    	},
    	{
    		r: 1758,
    		f: 41.61,
    		l: "取得"
    	},
    	{
    		r: 1759,
    		f: 41.6,
    		l: "項目"
    	},
    	{
    		r: 1760,
    		f: 41.58,
    		l: "そんなに"
    	},
    	{
    		r: 1761,
    		f: 41.58,
    		l: "旧"
    	},
    	{
    		r: 1762,
    		f: 41.58,
    		l: "性格"
    	},
    	{
    		r: 1763,
    		f: 41.56,
    		l: "次第"
    	},
    	{
    		r: 1764,
    		f: 41.54,
    		l: "顧客"
    	},
    	{
    		r: 1765,
    		f: 41.49,
    		l: "着る"
    	},
    	{
    		r: 1766,
    		f: 41.49,
    		l: "いかに"
    	},
    	{
    		r: 1767,
    		f: 41.45,
    		l: "減る"
    	},
    	{
    		r: 1768,
    		f: 41.43,
    		l: "避ける"
    	},
    	{
    		r: 1769,
    		f: 41.43,
    		l: "多分"
    	},
    	{
    		r: 1770,
    		f: 41.42,
    		l: "地区"
    	},
    	{
    		r: 1771,
    		f: 41.41,
    		l: "を通じて"
    	},
    	{
    		r: 1772,
    		f: 41.38,
    		l: "長期"
    	},
    	{
    		r: 1773,
    		f: 41.37,
    		l: "遠い"
    	},
    	{
    		r: 1774,
    		f: 41.31,
    		l: "がんばる"
    	},
    	{
    		r: 1775,
    		f: 41.3,
    		l: "ミ"
    	},
    	{
    		r: 1776,
    		f: 41.29,
    		l: "達成"
    	},
    	{
    		r: 1777,
    		f: 41.26,
    		l: "著者"
    	},
    	{
    		r: 1778,
    		f: 41.25,
    		l: "弱い"
    	},
    	{
    		r: 1779,
    		f: 41.23,
    		l: "ソフトウェア"
    	},
    	{
    		r: 1780,
    		f: 41.18,
    		l: "におきまして"
    	},
    	{
    		r: 1781,
    		f: 41.16,
    		l: "展示"
    	},
    	{
    		r: 1782,
    		f: 41.15,
    		l: "誌"
    	},
    	{
    		r: 1783,
    		f: 41.14,
    		l: "答え"
    	},
    	{
    		r: 1784,
    		f: 41.11,
    		l: "訪れる"
    	},
    	{
    		r: 1785,
    		f: 41.05,
    		l: "忙しい"
    	},
    	{
    		r: 1786,
    		f: 40.96,
    		l: "後半"
    	},
    	{
    		r: 1787,
    		f: 40.92,
    		l: "福祉"
    	},
    	{
    		r: 1788,
    		f: 40.87,
    		l: "到着"
    	},
    	{
    		r: 1789,
    		f: 40.87,
    		l: "ナ"
    	},
    	{
    		r: 1790,
    		f: 40.85,
    		l: "罪"
    	},
    	{
    		r: 1791,
    		f: 40.83,
    		l: "楽"
    	},
    	{
    		r: 1792,
    		f: 40.81,
    		l: "操作"
    	},
    	{
    		r: 1793,
    		f: 40.76,
    		l: "便利"
    	},
    	{
    		r: 1794,
    		f: 40.73,
    		l: "支配"
    	},
    	{
    		r: 1795,
    		f: 40.73,
    		l: "南"
    	},
    	{
    		r: 1796,
    		f: 40.72,
    		l: "何とか"
    	},
    	{
    		r: 1797,
    		f: 40.69,
    		l: "講座"
    	},
    	{
    		r: 1798,
    		f: 40.69,
    		l: "現地"
    	},
    	{
    		r: 1799,
    		f: 40.65,
    		l: "態度"
    	},
    	{
    		r: 1800,
    		f: 40.6,
    		l: "審査"
    	},
    	{
    		r: 1801,
    		f: 40.57,
    		l: "公園"
    	},
    	{
    		r: 1802,
    		f: 40.55,
    		l: "過程"
    	},
    	{
    		r: 1803,
    		f: 40.53,
    		l: "研修"
    	},
    	{
    		r: 1804,
    		f: 40.51,
    		l: "長官"
    	},
    	{
    		r: 1805,
    		f: 40.5,
    		l: "バランス"
    	},
    	{
    		r: 1806,
    		f: 40.5,
    		l: "変"
    	},
    	{
    		r: 1807,
    		f: 40.49,
    		l: "なー"
    	},
    	{
    		r: 1808,
    		f: 40.44,
    		l: "連続"
    	},
    	{
    		r: 1809,
    		f: 40.44,
    		l: "望む"
    	},
    	{
    		r: 1810,
    		f: 40.41,
    		l: "空気"
    	},
    	{
    		r: 1811,
    		f: 40.4,
    		l: "翻訳"
    	},
    	{
    		r: 1812,
    		f: 40.37,
    		l: "冬"
    	},
    	{
    		r: 1813,
    		f: 40.35,
    		l: "広がる"
    	},
    	{
    		r: 1814,
    		f: 40.32,
    		l: "単純"
    	},
    	{
    		r: 1815,
    		f: 40.28,
    		l: "短い"
    	},
    	{
    		r: 1816,
    		f: 40.25,
    		l: "５月"
    	},
    	{
    		r: 1817,
    		f: 40.23,
    		l: "飛ぶ"
    	},
    	{
    		r: 1818,
    		f: 40.23,
    		l: "予約"
    	},
    	{
    		r: 1819,
    		f: 40.18,
    		l: "構築"
    	},
    	{
    		r: 1820,
    		f: 40.17,
    		l: "党"
    	},
    	{
    		r: 1821,
    		f: 40.16,
    		l: "座る"
    	},
    	{
    		r: 1822,
    		f: 40.16,
    		l: "論文"
    	},
    	{
    		r: 1823,
    		f: 40.15,
    		l: "地震"
    	},
    	{
    		r: 1824,
    		f: 40.15,
    		l: "不"
    	},
    	{
    		r: 1825,
    		f: 40.09,
    		l: "パン"
    	},
    	{
    		r: 1826,
    		f: 40.07,
    		l: "記"
    	},
    	{
    		r: 1827,
    		f: 40.03,
    		l: "継続"
    	},
    	{
    		r: 1828,
    		f: 40.03,
    		l: "一言"
    	},
    	{
    		r: 1829,
    		f: 39.99,
    		l: "出会う"
    	},
    	{
    		r: 1830,
    		f: 39.97,
    		l: "内部"
    	},
    	{
    		r: 1831,
    		f: 39.96,
    		l: "豊か"
    	},
    	{
    		r: 1832,
    		f: 39.95,
    		l: "生命"
    	},
    	{
    		r: 1833,
    		f: 39.93,
    		l: "所得"
    	},
    	{
    		r: 1834,
    		f: 39.9,
    		l: "制作"
    	},
    	{
    		r: 1835,
    		f: 39.85,
    		l: "敵"
    	},
    	{
    		r: 1836,
    		f: 39.83,
    		l: "単位"
    	},
    	{
    		r: 1837,
    		f: 39.83,
    		l: "自信"
    	},
    	{
    		r: 1838,
    		f: 39.8,
    		l: "涙"
    	},
    	{
    		r: 1839,
    		f: 39.74,
    		l: "まずは"
    	},
    	{
    		r: 1840,
    		f: 39.72,
    		l: "科"
    	},
    	{
    		r: 1841,
    		f: 39.7,
    		l: "ゆっくり"
    	},
    	{
    		r: 1842,
    		f: 39.7,
    		l: "あらゆる"
    	},
    	{
    		r: 1843,
    		f: 39.67,
    		l: "ベース"
    	},
    	{
    		r: 1844,
    		f: 39.66,
    		l: "層"
    	},
    	{
    		r: 1845,
    		f: 39.57,
    		l: "毎年"
    	},
    	{
    		r: 1846,
    		f: 39.55,
    		l: "距離"
    	},
    	{
    		r: 1847,
    		f: 39.55,
    		l: "複数"
    	},
    	{
    		r: 1848,
    		f: 39.52,
    		l: "恋愛"
    	},
    	{
    		r: 1849,
    		f: 39.5,
    		l: "め"
    	},
    	{
    		r: 1850,
    		f: 39.49,
    		l: "英"
    	},
    	{
    		r: 1851,
    		f: 39.48,
    		l: "運転"
    	},
    	{
    		r: 1852,
    		f: 39.47,
    		l: "消える"
    	},
    	{
    		r: 1853,
    		f: 39.45,
    		l: "確実"
    	},
    	{
    		r: 1854,
    		f: 39.45,
    		l: "支持"
    	},
    	{
    		r: 1855,
    		f: 39.45,
    		l: "インタビュー"
    	},
    	{
    		r: 1856,
    		f: 39.44,
    		l: "ふる"
    	},
    	{
    		r: 1857,
    		f: 39.42,
    		l: "日間"
    	},
    	{
    		r: 1858,
    		f: 39.41,
    		l: "一定"
    	},
    	{
    		r: 1859,
    		f: 39.4,
    		l: "←"
    	},
    	{
    		r: 1860,
    		f: 39.36,
    		l: "交渉"
    	},
    	{
    		r: 1861,
    		f: 39.35,
    		l: "司法"
    	},
    	{
    		r: 1862,
    		f: 39.31,
    		l: "巻"
    	},
    	{
    		r: 1863,
    		f: 39.27,
    		l: "なんとか"
    	},
    	{
    		r: 1864,
    		f: 39.22,
    		l: "借りる"
    	},
    	{
    		r: 1865,
    		f: 39.17,
    		l: "押す"
    	},
    	{
    		r: 1866,
    		f: 39.16,
    		l: "方式"
    	},
    	{
    		r: 1867,
    		f: 39.16,
    		l: "普段"
    	},
    	{
    		r: 1868,
    		f: 39.14,
    		l: "出席"
    	},
    	{
    		r: 1869,
    		f: 39.09,
    		l: "金利"
    	},
    	{
    		r: 1870,
    		f: 39.08,
    		l: "アニメ"
    	},
    	{
    		r: 1871,
    		f: 39.08,
    		l: "ところで"
    	},
    	{
    		r: 1872,
    		f: 39.07,
    		l: "窓"
    	},
    	{
    		r: 1873,
    		f: 39.05,
    		l: "諸"
    	},
    	{
    		r: 1874,
    		f: 39.01,
    		l: "なくなる"
    	},
    	{
    		r: 1875,
    		f: 39,
    		l: "１つ"
    	},
    	{
    		r: 1876,
    		f: 38.98,
    		l: "危機"
    	},
    	{
    		r: 1877,
    		f: 38.98,
    		l: "やってくる"
    	},
    	{
    		r: 1878,
    		f: 38.97,
    		l: "痛い"
    	},
    	{
    		r: 1879,
    		f: 38.97,
    		l: "低"
    	},
    	{
    		r: 1880,
    		f: 38.9,
    		l: "次に"
    	},
    	{
    		r: 1881,
    		f: 38.89,
    		l: "募集"
    	},
    	{
    		r: 1882,
    		f: 38.86,
    		l: "定める"
    	},
    	{
    		r: 1883,
    		f: 38.85,
    		l: "史"
    	},
    	{
    		r: 1884,
    		f: 38.72,
    		l: "自宅"
    	},
    	{
    		r: 1885,
    		f: 38.72,
    		l: "上記"
    	},
    	{
    		r: 1886,
    		f: 38.71,
    		l: "人権"
    	},
    	{
    		r: 1887,
    		f: 38.7,
    		l: "複雑"
    	},
    	{
    		r: 1888,
    		f: 38.59,
    		l: "おかげ"
    	},
    	{
    		r: 1889,
    		f: 38.58,
    		l: "スーパー"
    	},
    	{
    		r: 1890,
    		f: 38.58,
    		l: "逮捕"
    	},
    	{
    		r: 1891,
    		f: 38.56,
    		l: "器"
    	},
    	{
    		r: 1892,
    		f: 38.44,
    		l: "級"
    	},
    	{
    		r: 1893,
    		f: 38.37,
    		l: "証明"
    	},
    	{
    		r: 1894,
    		f: 38.36,
    		l: "概念"
    	},
    	{
    		r: 1895,
    		f: 38.35,
    		l: "ツール"
    	},
    	{
    		r: 1896,
    		f: 38.35,
    		l: "果たす"
    	},
    	{
    		r: 1897,
    		f: 38.34,
    		l: "コンテンツ"
    	},
    	{
    		r: 1898,
    		f: 38.31,
    		l: "泣く"
    	},
    	{
    		r: 1899,
    		f: 38.31,
    		l: "秋"
    	},
    	{
    		r: 1900,
    		f: 38.28,
    		l: "単に"
    	},
    	{
    		r: 1901,
    		f: 38.24,
    		l: "今週"
    	},
    	{
    		r: 1902,
    		f: 38.23,
    		l: "空港"
    	},
    	{
    		r: 1903,
    		f: 38.21,
    		l: "適切"
    	},
    	{
    		r: 1904,
    		f: 38.2,
    		l: "財産"
    	},
    	{
    		r: 1905,
    		f: 38.15,
    		l: "判決"
    	},
    	{
    		r: 1906,
    		f: 38.13,
    		l: "作家"
    	},
    	{
    		r: 1907,
    		f: 38.1,
    		l: "もたらす"
    	},
    	{
    		r: 1908,
    		f: 38.08,
    		l: "マスコミ"
    	},
    	{
    		r: 1909,
    		f: 38.06,
    		l: "思考"
    	},
    	{
    		r: 1910,
    		f: 38.01,
    		l: "接続"
    	},
    	{
    		r: 1911,
    		f: 37.98,
    		l: "ようやく"
    	},
    	{
    		r: 1912,
    		f: 37.97,
    		l: "悩む"
    	},
    	{
    		r: 1913,
    		f: 37.96,
    		l: "形式"
    	},
    	{
    		r: 1914,
    		f: 37.91,
    		l: "違反"
    	},
    	{
    		r: 1915,
    		f: 37.81,
    		l: "義務"
    	},
    	{
    		r: 1916,
    		f: 37.73,
    		l: "再生"
    	},
    	{
    		r: 1917,
    		f: 37.72,
    		l: "破壊"
    	},
    	{
    		r: 1918,
    		f: 37.7,
    		l: "疲れる"
    	},
    	{
    		r: 1919,
    		f: 37.65,
    		l: "仕組み"
    	},
    	{
    		r: 1920,
    		f: 37.64,
    		l: "研究所"
    	},
    	{
    		r: 1921,
    		f: 37.63,
    		l: "国務大臣"
    	},
    	{
    		r: 1922,
    		f: 37.61,
    		l: "両"
    	},
    	{
    		r: 1923,
    		f: 37.59,
    		l: "受け入れる"
    	},
    	{
    		r: 1924,
    		f: 37.58,
    		l: "だす"
    	},
    	{
    		r: 1925,
    		f: 37.54,
    		l: "いくら"
    	},
    	{
    		r: 1926,
    		f: 37.52,
    		l: "フリー"
    	},
    	{
    		r: 1927,
    		f: 37.51,
    		l: "公式"
    	},
    	{
    		r: 1928,
    		f: 37.47,
    		l: "場面"
    	},
    	{
    		r: 1929,
    		f: 37.44,
    		l: "英国"
    	},
    	{
    		r: 1930,
    		f: 37.44,
    		l: "年生"
    	},
    	{
    		r: 1931,
    		f: 37.4,
    		l: "石"
    	},
    	{
    		r: 1932,
    		f: 37.37,
    		l: "激しい"
    	},
    	{
    		r: 1933,
    		f: 37.36,
    		l: "お客"
    	},
    	{
    		r: 1934,
    		f: 37.36,
    		l: "それにしても"
    	},
    	{
    		r: 1935,
    		f: 37.36,
    		l: "就職"
    	},
    	{
    		r: 1936,
    		f: 37.33,
    		l: "文書"
    	},
    	{
    		r: 1937,
    		f: 37.31,
    		l: "派遣"
    	},
    	{
    		r: 1938,
    		f: 37.3,
    		l: "Ｂ"
    	},
    	{
    		r: 1939,
    		f: 37.3,
    		l: "ｗ"
    	},
    	{
    		r: 1940,
    		f: 37.3,
    		l: "類"
    	},
    	{
    		r: 1941,
    		f: 37.25,
    		l: "テロ"
    	},
    	{
    		r: 1942,
    		f: 37.22,
    		l: "流す"
    	},
    	{
    		r: 1943,
    		f: 37.22,
    		l: "名無し"
    	},
    	{
    		r: 1944,
    		f: 37.21,
    		l: "真"
    	},
    	{
    		r: 1945,
    		f: 37.17,
    		l: "定義"
    	},
    	{
    		r: 1946,
    		f: 37.17,
    		l: "甘い"
    	},
    	{
    		r: 1947,
    		f: 37.16,
    		l: "素敵"
    	},
    	{
    		r: 1948,
    		f: 37.03,
    		l: "プロセス"
    	},
    	{
    		r: 1949,
    		f: 37.02,
    		l: "当たり前"
    	},
    	{
    		r: 1950,
    		f: 37.01,
    		l: "約束"
    	},
    	{
    		r: 1951,
    		f: 36.93,
    		l: "こんなに"
    	},
    	{
    		r: 1952,
    		f: 36.92,
    		l: "コピー"
    	},
    	{
    		r: 1953,
    		f: 36.91,
    		l: "出身"
    	},
    	{
    		r: 1954,
    		f: 36.91,
    		l: "っぽい"
    	},
    	{
    		r: 1955,
    		f: 36.89,
    		l: "局長"
    	},
    	{
    		r: 1956,
    		f: 36.81,
    		l: "事項"
    	},
    	{
    		r: 1957,
    		f: 36.8,
    		l: "観点"
    	},
    	{
    		r: 1958,
    		f: 36.77,
    		l: "質"
    	},
    	{
    		r: 1959,
    		f: 36.71,
    		l: "白"
    	},
    	{
    		r: 1960,
    		f: 36.68,
    		l: "趣味"
    	},
    	{
    		r: 1961,
    		f: 36.66,
    		l: "箱"
    	},
    	{
    		r: 1962,
    		f: 36.64,
    		l: "連れる"
    	},
    	{
    		r: 1963,
    		f: 36.59,
    		l: "‥"
    	},
    	{
    		r: 1964,
    		f: 36.59,
    		l: "ご覧"
    	},
    	{
    		r: 1965,
    		f: 36.56,
    		l: "出発"
    	},
    	{
    		r: 1966,
    		f: 36.52,
    		l: "終える"
    	},
    	{
    		r: 1967,
    		f: 36.52,
    		l: "魚"
    	},
    	{
    		r: 1968,
    		f: 36.5,
    		l: "会計"
    	},
    	{
    		r: 1969,
    		f: 36.48,
    		l: "いくつか"
    	},
    	{
    		r: 1970,
    		f: 36.47,
    		l: "開ける"
    	},
    	{
    		r: 1971,
    		f: 36.47,
    		l: "形成"
    	},
    	{
    		r: 1972,
    		f: 36.47,
    		l: "記述"
    	},
    	{
    		r: 1973,
    		f: 36.46,
    		l: "資源"
    	},
    	{
    		r: 1974,
    		f: 36.44,
    		l: "たぶん"
    	},
    	{
    		r: 1975,
    		f: 36.44,
    		l: "明るい"
    	},
    	{
    		r: 1976,
    		f: 36.41,
    		l: "事例"
    	},
    	{
    		r: 1977,
    		f: 36.38,
    		l: "着く"
    	},
    	{
    		r: 1978,
    		f: 36.38,
    		l: "金額"
    	},
    	{
    		r: 1979,
    		f: 36.36,
    		l: "きれい"
    	},
    	{
    		r: 1980,
    		f: 36.35,
    		l: "と共に"
    	},
    	{
    		r: 1981,
    		f: 36.31,
    		l: "証券"
    	},
    	{
    		r: 1982,
    		f: 36.31,
    		l: "ガ"
    	},
    	{
    		r: 1983,
    		f: 36.31,
    		l: "支える"
    	},
    	{
    		r: 1984,
    		f: 36.29,
    		l: "成立"
    	},
    	{
    		r: 1985,
    		f: 36.26,
    		l: "ひと"
    	},
    	{
    		r: 1986,
    		f: 36.14,
    		l: "軍事"
    	},
    	{
    		r: 1987,
    		f: 36.13,
    		l: "うれしい"
    	},
    	{
    		r: 1988,
    		f: 36.13,
    		l: "訓練"
    	},
    	{
    		r: 1989,
    		f: 36.11,
    		l: "来年"
    	},
    	{
    		r: 1990,
    		f: 36.04,
    		l: "食品"
    	},
    	{
    		r: 1991,
    		f: 36.01,
    		l: "育てる"
    	},
    	{
    		r: 1992,
    		f: 36.01,
    		l: "証拠"
    	},
    	{
    		r: 1993,
    		f: 35.97,
    		l: "ラジオ"
    	},
    	{
    		r: 1994,
    		f: 35.92,
    		l: "暑い"
    	},
    	{
    		r: 1995,
    		f: 35.88,
    		l: "プレゼント"
    	},
    	{
    		r: 1996,
    		f: 35.86,
    		l: "不明"
    	},
    	{
    		r: 1997,
    		f: 35.85,
    		l: "アルバム"
    	},
    	{
    		r: 1998,
    		f: 35.84,
    		l: "内閣"
    	},
    	{
    		r: 1999,
    		f: 35.78,
    		l: "北海道"
    	},
    	{
    		r: 2000,
    		f: 35.73,
    		l: "隣"
    	},
    	{
    		r: 2001,
    		f: 35.72,
    		l: "当"
    	},
    	{
    		r: 2002,
    		f: 35.69,
    		l: "裁判所"
    	},
    	{
    		r: 2003,
    		f: 35.69,
    		l: "挑戦"
    	},
    	{
    		r: 2004,
    		f: 35.68,
    		l: "やり方"
    	},
    	{
    		r: 2005,
    		f: 35.65,
    		l: "バンド"
    	},
    	{
    		r: 2006,
    		f: 35.59,
    		l: "鳥"
    	},
    	{
    		r: 2007,
    		f: 35.58,
    		l: "ブラジル"
    	},
    	{
    		r: 2008,
    		f: 35.57,
    		l: "物質"
    	},
    	{
    		r: 2009,
    		f: 35.57,
    		l: "胸"
    	},
    	{
    		r: 2010,
    		f: 35.56,
    		l: "実に"
    	},
    	{
    		r: 2011,
    		f: 35.55,
    		l: "いかが"
    	},
    	{
    		r: 2012,
    		f: 35.52,
    		l: "手法"
    	},
    	{
    		r: 2013,
    		f: 35.48,
    		l: "保存"
    	},
    	{
    		r: 2014,
    		f: 35.48,
    		l: "師"
    	},
    	{
    		r: 2015,
    		f: 35.48,
    		l: "相互"
    	},
    	{
    		r: 2016,
    		f: 35.42,
    		l: "依頼"
    	},
    	{
    		r: 2017,
    		f: 35.39,
    		l: "黒"
    	},
    	{
    		r: 2018,
    		f: 35.39,
    		l: "差別"
    	},
    	{
    		r: 2019,
    		f: 35.37,
    		l: "特集"
    	},
    	{
    		r: 2020,
    		f: 35.32,
    		l: "〔"
    	},
    	{
    		r: 2021,
    		f: 35.31,
    		l: "おもしろい"
    	},
    	{
    		r: 2022,
    		f: 35.3,
    		l: "設備"
    	},
    	{
    		r: 2023,
    		f: 35.28,
    		l: "発"
    	},
    	{
    		r: 2024,
    		f: 35.22,
    		l: "ひどい"
    	},
    	{
    		r: 2025,
    		f: 35.18,
    		l: "なんか"
    	},
    	{
    		r: 2026,
    		f: 35.17,
    		l: "お答え"
    	},
    	{
    		r: 2027,
    		f: 35.15,
    		l: "抱える"
    	},
    	{
    		r: 2028,
    		f: 35.14,
    		l: "未"
    	},
    	{
    		r: 2029,
    		f: 35.13,
    		l: "国連"
    	},
    	{
    		r: 2030,
    		f: 35.09,
    		l: "季節"
    	},
    	{
    		r: 2031,
    		f: 35.08,
    		l: "答弁"
    	},
    	{
    		r: 2032,
    		f: 35.07,
    		l: "下がる"
    	},
    	{
    		r: 2033,
    		f: 35.07,
    		l: "わずか"
    	},
    	{
    		r: 2034,
    		f: 35,
    		l: "意思"
    	},
    	{
    		r: 2035,
    		f: 34.99,
    		l: "初め"
    	},
    	{
    		r: 2036,
    		f: 34.99,
    		l: "伺う"
    	},
    	{
    		r: 2037,
    		f: 34.97,
    		l: "保証"
    	},
    	{
    		r: 2038,
    		f: 34.95,
    		l: "実態"
    	},
    	{
    		r: 2039,
    		f: 34.95,
    		l: "売れる"
    	},
    	{
    		r: 2040,
    		f: 34.95,
    		l: "当初"
    	},
    	{
    		r: 2041,
    		f: 34.91,
    		l: "もともと"
    	},
    	{
    		r: 2042,
    		f: 34.9,
    		l: "分ける"
    	},
    	{
    		r: 2043,
    		f: 34.9,
    		l: "装置"
    	},
    	{
    		r: 2044,
    		f: 34.9,
    		l: "〕"
    	},
    	{
    		r: 2045,
    		f: 34.89,
    		l: "怒る"
    	},
    	{
    		r: 2046,
    		f: 34.88,
    		l: "キロ"
    	},
    	{
    		r: 2047,
    		f: 34.87,
    		l: "被告"
    	},
    	{
    		r: 2048,
    		f: 34.87,
    		l: "図書館"
    	},
    	{
    		r: 2049,
    		f: 34.86,
    		l: "降る"
    	},
    	{
    		r: 2050,
    		f: 34.83,
    		l: "所有"
    	},
    	{
    		r: 2051,
    		f: 34.82,
    		l: "書き込み"
    	},
    	{
    		r: 2052,
    		f: 34.82,
    		l: "日時"
    	},
    	{
    		r: 2053,
    		f: 34.82,
    		l: "防止"
    	},
    	{
    		r: 2054,
    		f: 34.78,
    		l: "マンション"
    	},
    	{
    		r: 2055,
    		f: 34.76,
    		l: "リー"
    	},
    	{
    		r: 2056,
    		f: 34.69,
    		l: "肉"
    	},
    	{
    		r: 2057,
    		f: 34.64,
    		l: "越える"
    	},
    	{
    		r: 2058,
    		f: 34.63,
    		l: "アプリケーション"
    	},
    	{
    		r: 2059,
    		f: 34.61,
    		l: "需要"
    	},
    	{
    		r: 2060,
    		f: 34.61,
    		l: "凄い"
    	},
    	{
    		r: 2061,
    		f: 34.58,
    		l: "無視"
    	},
    	{
    		r: 2062,
    		f: 34.57,
    		l: "設立"
    	},
    	{
    		r: 2063,
    		f: 34.56,
    		l: "愛す"
    	},
    	{
    		r: 2064,
    		f: 34.55,
    		l: "総理"
    	},
    	{
    		r: 2065,
    		f: 34.53,
    		l: "できるだけ"
    	},
    	{
    		r: 2066,
    		f: 34.52,
    		l: "ショップ"
    	},
    	{
    		r: 2067,
    		f: 34.51,
    		l: "自転車"
    	},
    	{
    		r: 2068,
    		f: 34.47,
    		l: "生物"
    	},
    	{
    		r: 2069,
    		f: 34.44,
    		l: "メニュー"
    	},
    	{
    		r: 2070,
    		f: 34.44,
    		l: "改めて"
    	},
    	{
    		r: 2071,
    		f: 34.43,
    		l: "優勝"
    	},
    	{
    		r: 2072,
    		f: 34.43,
    		l: "多様"
    	},
    	{
    		r: 2073,
    		f: 34.4,
    		l: "特許"
    	},
    	{
    		r: 2074,
    		f: 34.37,
    		l: "補助"
    	},
    	{
    		r: 2075,
    		f: 34.37,
    		l: "有る"
    	},
    	{
    		r: 2076,
    		f: 34.36,
    		l: "を通して"
    	},
    	{
    		r: 2077,
    		f: 34.29,
    		l: "はじめる"
    	},
    	{
    		r: 2078,
    		f: 34.29,
    		l: "優しい"
    	},
    	{
    		r: 2079,
    		f: 34.27,
    		l: "不動産"
    	},
    	{
    		r: 2080,
    		f: 34.27,
    		l: "見つかる"
    	},
    	{
    		r: 2081,
    		f: 34.23,
    		l: "野菜"
    	},
    	{
    		r: 2082,
    		f: 34.21,
    		l: "バカ"
    	},
    	{
    		r: 2083,
    		f: 34.19,
    		l: "白い"
    	},
    	{
    		r: 2084,
    		f: 34.11,
    		l: "兆"
    	},
    	{
    		r: 2085,
    		f: 34.1,
    		l: "ライン"
    	},
    	{
    		r: 2086,
    		f: 34.09,
    		l: "承知"
    	},
    	{
    		r: 2087,
    		f: 34.06,
    		l: "父親"
    	},
    	{
    		r: 2088,
    		f: 34.04,
    		l: "供給"
    	},
    	{
    		r: 2089,
    		f: 34.03,
    		l: "秘密"
    	},
    	{
    		r: 2090,
    		f: 33.98,
    		l: "誰か"
    	},
    	{
    		r: 2091,
    		f: 33.97,
    		l: "独自"
    	},
    	{
    		r: 2092,
    		f: 33.97,
    		l: "許可"
    	},
    	{
    		r: 2093,
    		f: 33.97,
    		l: "獲得"
    	},
    	{
    		r: 2094,
    		f: 33.92,
    		l: "休み"
    	},
    	{
    		r: 2095,
    		f: 33.91,
    		l: "急"
    	},
    	{
    		r: 2096,
    		f: 33.89,
    		l: "嫌"
    	},
    	{
    		r: 2097,
    		f: 33.88,
    		l: "外交"
    	},
    	{
    		r: 2098,
    		f: 33.88,
    		l: "ねー"
    	},
    	{
    		r: 2099,
    		f: 33.87,
    		l: "セキュリティ"
    	},
    	{
    		r: 2100,
    		f: 33.86,
    		l: "論理"
    	},
    	{
    		r: 2101,
    		f: 33.84,
    		l: "赤"
    	},
    	{
    		r: 2102,
    		f: 33.81,
    		l: "西"
    	},
    	{
    		r: 2103,
    		f: 33.8,
    		l: "メイン"
    	},
    	{
    		r: 2104,
    		f: 33.78,
    		l: "かく"
    	},
    	{
    		r: 2105,
    		f: 33.75,
    		l: "とっても"
    	},
    	{
    		r: 2106,
    		f: 33.71,
    		l: "極めて"
    	},
    	{
    		r: 2107,
    		f: 33.71,
    		l: "本質"
    	},
    	{
    		r: 2108,
    		f: 33.65,
    		l: "多少"
    	},
    	{
    		r: 2109,
    		f: 33.63,
    		l: "出来事"
    	},
    	{
    		r: 2110,
    		f: 33.62,
    		l: "手紙"
    	},
    	{
    		r: 2111,
    		f: 33.61,
    		l: "策"
    	},
    	{
    		r: 2112,
    		f: 33.58,
    		l: "スト"
    	},
    	{
    		r: 2113,
    		f: 33.57,
    		l: "去年"
    	},
    	{
    		r: 2114,
    		f: 33.54,
    		l: "及ぶ"
    	},
    	{
    		r: 2115,
    		f: 33.52,
    		l: "項"
    	},
    	{
    		r: 2116,
    		f: 33.52,
    		l: "お互い"
    	},
    	{
    		r: 2117,
    		f: 33.51,
    		l: "９月"
    	},
    	{
    		r: 2118,
    		f: 33.42,
    		l: "汗"
    	},
    	{
    		r: 2119,
    		f: 33.39,
    		l: "強制"
    	},
    	{
    		r: 2120,
    		f: 33.37,
    		l: "宣言"
    	},
    	{
    		r: 2121,
    		f: 33.36,
    		l: "出かける"
    	},
    	{
    		r: 2122,
    		f: 33.35,
    		l: "病"
    	},
    	{
    		r: 2123,
    		f: 33.33,
    		l: "エンジン"
    	},
    	{
    		r: 2124,
    		f: 33.31,
    		l: "チャンス"
    	},
    	{
    		r: 2125,
    		f: 33.3,
    		l: "優先"
    	},
    	{
    		r: 2126,
    		f: 33.29,
    		l: "オンライン"
    	},
    	{
    		r: 2127,
    		f: 33.24,
    		l: "ソース"
    	},
    	{
    		r: 2128,
    		f: 33.22,
    		l: "人材"
    	},
    	{
    		r: 2129,
    		f: 33.17,
    		l: "頼む"
    	},
    	{
    		r: 2130,
    		f: 33.15,
    		l: "職業"
    	},
    	{
    		r: 2131,
    		f: 33.14,
    		l: "ついに"
    	},
    	{
    		r: 2132,
    		f: 33.14,
    		l: "援助"
    	},
    	{
    		r: 2133,
    		f: 33.12,
    		l: "申請"
    	},
    	{
    		r: 2134,
    		f: 33.12,
    		l: "それで"
    	},
    	{
    		r: 2135,
    		f: 33.12,
    		l: "取れる"
    	},
    	{
    		r: 2136,
    		f: 33.09,
    		l: "歩"
    	},
    	{
    		r: 2137,
    		f: 33.09,
    		l: "除く"
    	},
    	{
    		r: 2138,
    		f: 33.09,
    		l: "コーナー"
    	},
    	{
    		r: 2139,
    		f: 33.08,
    		l: "問"
    	},
    	{
    		r: 2140,
    		f: 32.99,
    		l: "ブランド"
    	},
    	{
    		r: 2141,
    		f: 32.95,
    		l: "高速"
    	},
    	{
    		r: 2142,
    		f: 32.94,
    		l: "マーク"
    	},
    	{
    		r: 2143,
    		f: 32.94,
    		l: "ろう"
    	},
    	{
    		r: 2144,
    		f: 32.9,
    		l: "特殊"
    	},
    	{
    		r: 2145,
    		f: 32.88,
    		l: "こっち"
    	},
    	{
    		r: 2146,
    		f: 32.87,
    		l: "ける"
    	},
    	{
    		r: 2147,
    		f: 32.86,
    		l: "次回"
    	},
    	{
    		r: 2148,
    		f: 32.85,
    		l: "文学"
    	},
    	{
    		r: 2149,
    		f: 32.82,
    		l: "お知らせ"
    	},
    	{
    		r: 2150,
    		f: 32.81,
    		l: "議会"
    	},
    	{
    		r: 2151,
    		f: 32.77,
    		l: "介護"
    	},
    	{
    		r: 2152,
    		f: 32.73,
    		l: "２つ"
    	},
    	{
    		r: 2153,
    		f: 32.71,
    		l: "唯一"
    	},
    	{
    		r: 2154,
    		f: 32.71,
    		l: "削除"
    	},
    	{
    		r: 2155,
    		f: 32.71,
    		l: "田中"
    	},
    	{
    		r: 2156,
    		f: 32.68,
    		l: "両方"
    	},
    	{
    		r: 2157,
    		f: 32.66,
    		l: "垢"
    	},
    	{
    		r: 2158,
    		f: 32.65,
    		l: "高める"
    	},
    	{
    		r: 2159,
    		f: 32.64,
    		l: "本部"
    	},
    	{
    		r: 2160,
    		f: 32.63,
    		l: "横浜"
    	},
    	{
    		r: 2161,
    		f: 32.58,
    		l: "処分"
    	},
    	{
    		r: 2162,
    		f: 32.56,
    		l: "きっかけ"
    	},
    	{
    		r: 2163,
    		f: 32.56,
    		l: "共有"
    	},
    	{
    		r: 2164,
    		f: 32.56,
    		l: "ママ"
    	},
    	{
    		r: 2165,
    		f: 32.54,
    		l: "学者"
    	},
    	{
    		r: 2166,
    		f: 32.5,
    		l: "夫婦"
    	},
    	{
    		r: 2167,
    		f: 32.45,
    		l: "\\"
    	},
    	{
    		r: 2168,
    		f: 32.41,
    		l: "買い物"
    	},
    	{
    		r: 2169,
    		f: 32.39,
    		l: "風景"
    	},
    	{
    		r: 2170,
    		f: 32.38,
    		l: "それほど"
    	},
    	{
    		r: 2171,
    		f: 32.38,
    		l: "中小"
    	},
    	{
    		r: 2172,
    		f: 32.37,
    		l: "追う"
    	},
    	{
    		r: 2173,
    		f: 32.37,
    		l: "レストラン"
    	},
    	{
    		r: 2174,
    		f: 32.31,
    		l: "高齢"
    	},
    	{
    		r: 2175,
    		f: 32.31,
    		l: "付"
    	},
    	{
    		r: 2176,
    		f: 32.31,
    		l: "製"
    	},
    	{
    		r: 2177,
    		f: 32.3,
    		l: "剤"
    	},
    	{
    		r: 2178,
    		f: 32.29,
    		l: "１月"
    	},
    	{
    		r: 2179,
    		f: 32.27,
    		l: "夕方"
    	},
    	{
    		r: 2180,
    		f: 32.27,
    		l: "少女"
    	},
    	{
    		r: 2181,
    		f: 32.26,
    		l: "勝利"
    	},
    	{
    		r: 2182,
    		f: 32.2,
    		l: "スピード"
    	},
    	{
    		r: 2183,
    		f: 32.2,
    		l: "職場"
    	},
    	{
    		r: 2184,
    		f: 32.19,
    		l: "スター"
    	},
    	{
    		r: 2185,
    		f: 32.13,
    		l: "材料"
    	},
    	{
    		r: 2186,
    		f: 32.08,
    		l: "考慮"
    	},
    	{
    		r: 2187,
    		f: 32.06,
    		l: "付き"
    	},
    	{
    		r: 2188,
    		f: 32.06,
    		l: "伝わる"
    	},
    	{
    		r: 2189,
    		f: 32.05,
    		l: "主人公"
    	},
    	{
    		r: 2190,
    		f: 32.02,
    		l: "実感"
    	},
    	{
    		r: 2191,
    		f: 32.01,
    		l: "近代"
    	},
    	{
    		r: 2192,
    		f: 32,
    		l: "航空"
    	},
    	{
    		r: 2193,
    		f: 31.97,
    		l: "一時"
    	},
    	{
    		r: 2194,
    		f: 31.96,
    		l: "字"
    	},
    	{
    		r: 2195,
    		f: 31.94,
    		l: "戦後"
    	},
    	{
    		r: 2196,
    		f: 31.94,
    		l: "分類"
    	},
    	{
    		r: 2197,
    		f: 31.91,
    		l: "コーヒー"
    	},
    	{
    		r: 2198,
    		f: 31.91,
    		l: "減少"
    	},
    	{
    		r: 2199,
    		f: 31.83,
    		l: "哲学"
    	},
    	{
    		r: 2200,
    		f: 31.82,
    		l: "運ぶ"
    	},
    	{
    		r: 2201,
    		f: 31.82,
    		l: "足りる"
    	},
    	{
    		r: 2202,
    		f: 31.81,
    		l: "コントロール"
    	},
    	{
    		r: 2203,
    		f: 31.81,
    		l: "ガン"
    	},
    	{
    		r: 2204,
    		f: 31.77,
    		l: "落とす"
    	},
    	{
    		r: 2205,
    		f: 31.76,
    		l: "核"
    	},
    	{
    		r: 2206,
    		f: 31.75,
    		l: "遊び"
    	},
    	{
    		r: 2207,
    		f: 31.73,
    		l: "ポ"
    	},
    	{
    		r: 2208,
    		f: 31.65,
    		l: "巨大"
    	},
    	{
    		r: 2209,
    		f: 31.64,
    		l: "台湾"
    	},
    	{
    		r: 2210,
    		f: 31.63,
    		l: "訴える"
    	},
    	{
    		r: 2211,
    		f: 31.6,
    		l: "同士"
    	},
    	{
    		r: 2212,
    		f: 31.59,
    		l: "表す"
    	},
    	{
    		r: 2213,
    		f: 31.58,
    		l: "慣れる"
    	},
    	{
    		r: 2214,
    		f: 31.58,
    		l: "佐藤"
    	},
    	{
    		r: 2215,
    		f: 31.57,
    		l: "修"
    	},
    	{
    		r: 2216,
    		f: 31.56,
    		l: "条約"
    	},
    	{
    		r: 2217,
    		f: 31.55,
    		l: "人類"
    	},
    	{
    		r: 2218,
    		f: 31.53,
    		l: "ワイン"
    	},
    	{
    		r: 2219,
    		f: 31.53,
    		l: "コン"
    	},
    	{
    		r: 2220,
    		f: 31.49,
    		l: "燭"
    	},
    	{
    		r: 2221,
    		f: 31.49,
    		l: "展"
    	},
    	{
    		r: 2222,
    		f: 31.49,
    		l: "個別"
    	},
    	{
    		r: 2223,
    		f: 31.47,
    		l: "パターン"
    	},
    	{
    		r: 2224,
    		f: 31.47,
    		l: "~"
    	},
    	{
    		r: 2225,
    		f: 31.46,
    		l: "だれ"
    	},
    	{
    		r: 2226,
    		f: 31.33,
    		l: "ビール"
    	},
    	{
    		r: 2227,
    		f: 31.32,
    		l: "首"
    	},
    	{
    		r: 2228,
    		f: 31.31,
    		l: "動かす"
    	},
    	{
    		r: 2229,
    		f: 31.3,
    		l: "波"
    	},
    	{
    		r: 2230,
    		f: 31.29,
    		l: "低下"
    	},
    	{
    		r: 2231,
    		f: 31.27,
    		l: "血"
    	},
    	{
    		r: 2232,
    		f: 31.27,
    		l: "機器"
    	},
    	{
    		r: 2233,
    		f: 31.25,
    		l: "死亡"
    	},
    	{
    		r: 2234,
    		f: 31.25,
    		l: "設ける"
    	},
    	{
    		r: 2235,
    		f: 31.25,
    		l: "捜査"
    	},
    	{
    		r: 2236,
    		f: 31.25,
    		l: "分の"
    	},
    	{
    		r: 2237,
    		f: 31.24,
    		l: "祭"
    	},
    	{
    		r: 2238,
    		f: 31.22,
    		l: "載る"
    	},
    	{
    		r: 2239,
    		f: 31.21,
    		l: "受け取る"
    	},
    	{
    		r: 2240,
    		f: 31.19,
    		l: "ボランティア"
    	},
    	{
    		r: 2241,
    		f: 31.19,
    		l: "説"
    	},
    	{
    		r: 2242,
    		f: 31.18,
    		l: "ホーム"
    	},
    	{
    		r: 2243,
    		f: 31.15,
    		l: "某"
    	},
    	{
    		r: 2244,
    		f: 31.15,
    		l: "抱く"
    	},
    	{
    		r: 2245,
    		f: 31.13,
    		l: "ネ"
    	},
    	{
    		r: 2246,
    		f: 31.13,
    		l: "ぜ"
    	},
    	{
    		r: 2247,
    		f: 31.12,
    		l: "理想"
    	},
    	{
    		r: 2248,
    		f: 31.09,
    		l: "天気"
    	},
    	{
    		r: 2249,
    		f: 31.08,
    		l: "止まる"
    	},
    	{
    		r: 2250,
    		f: 31.07,
    		l: "当局"
    	},
    	{
    		r: 2251,
    		f: 31.07,
    		l: "書籍"
    	},
    	{
    		r: 2252,
    		f: 31.07,
    		l: "挨拶"
    	},
    	{
    		r: 2253,
    		f: 31.06,
    		l: "バイト"
    	},
    	{
    		r: 2254,
    		f: 31.05,
    		l: "ガス"
    	},
    	{
    		r: 2255,
    		f: 31.05,
    		l: "受験"
    	},
    	{
    		r: 2256,
    		f: 31.03,
    		l: "オレ"
    	},
    	{
    		r: 2257,
    		f: 31.02,
    		l: "観察"
    	},
    	{
    		r: 2258,
    		f: 30.97,
    		l: "もう一度"
    	},
    	{
    		r: 2259,
    		f: 30.96,
    		l: "要因"
    	},
    	{
    		r: 2260,
    		f: 30.96,
    		l: "促進"
    	},
    	{
    		r: 2261,
    		f: 30.93,
    		l: "それでは"
    	},
    	{
    		r: 2262,
    		f: 30.86,
    		l: "税金"
    	},
    	{
    		r: 2263,
    		f: 30.84,
    		l: "異常"
    	},
    	{
    		r: 2264,
    		f: 30.81,
    		l: "無事"
    	},
    	{
    		r: 2265,
    		f: 30.8,
    		l: "合意"
    	},
    	{
    		r: 2266,
    		f: 30.78,
    		l: "戦う"
    	},
    	{
    		r: 2267,
    		f: 30.76,
    		l: "統計"
    	},
    	{
    		r: 2268,
    		f: 30.75,
    		l: "渡る"
    	},
    	{
    		r: 2269,
    		f: 30.67,
    		l: "キー"
    	},
    	{
    		r: 2270,
    		f: 30.66,
    		l: "たる"
    	},
    	{
    		r: 2271,
    		f: 30.66,
    		l: "服"
    	},
    	{
    		r: 2272,
    		f: 30.65,
    		l: "領域"
    	},
    	{
    		r: 2273,
    		f: 30.65,
    		l: "不可能"
    	},
    	{
    		r: 2274,
    		f: 30.64,
    		l: "普及"
    	},
    	{
    		r: 2275,
    		f: 30.62,
    		l: "周囲"
    	},
    	{
    		r: 2276,
    		f: 30.62,
    		l: "お前"
    	},
    	{
    		r: 2277,
    		f: 30.6,
    		l: "見事"
    	},
    	{
    		r: 2278,
    		f: 30.6,
    		l: "一切"
    	},
    	{
    		r: 2279,
    		f: 30.59,
    		l: "素材"
    	},
    	{
    		r: 2280,
    		f: 30.54,
    		l: "新規"
    	},
    	{
    		r: 2281,
    		f: 30.53,
    		l: "児童"
    	},
    	{
    		r: 2282,
    		f: 30.51,
    		l: "後ろ"
    	},
    	{
    		r: 2283,
    		f: 30.51,
    		l: "自民党"
    	},
    	{
    		r: 2284,
    		f: 30.5,
    		l: "把握"
    	},
    	{
    		r: 2285,
    		f: 30.5,
    		l: "前後"
    	},
    	{
    		r: 2286,
    		f: 30.49,
    		l: "又は"
    	},
    	{
    		r: 2287,
    		f: 30.45,
    		l: "リリース"
    	},
    	{
    		r: 2288,
    		f: 30.42,
    		l: "経つ"
    	},
    	{
    		r: 2289,
    		f: 30.42,
    		l: "権力"
    	},
    	{
    		r: 2290,
    		f: 30.41,
    		l: "細かい"
    	},
    	{
    		r: 2291,
    		f: 30.41,
    		l: "趣旨"
    	},
    	{
    		r: 2292,
    		f: 30.38,
    		l: "やや"
    	},
    	{
    		r: 2293,
    		f: 30.3,
    		l: "女子"
    	},
    	{
    		r: 2294,
    		f: 30.28,
    		l: "’"
    	},
    	{
    		r: 2295,
    		f: 30.27,
    		l: "予測"
    	},
    	{
    		r: 2296,
    		f: 30.27,
    		l: "自衛隊"
    	},
    	{
    		r: 2297,
    		f: 30.26,
    		l: "´"
    	},
    	{
    		r: 2298,
    		f: 30.25,
    		l: "オリジナル"
    	},
    	{
    		r: 2299,
    		f: 30.24,
    		l: "びっくり"
    	},
    	{
    		r: 2300,
    		f: 30.24,
    		l: "常識"
    	},
    	{
    		r: 2301,
    		f: 30.23,
    		l: "辰"
    	},
    	{
    		r: 2302,
    		f: 30.22,
    		l: "すっかり"
    	},
    	{
    		r: 2303,
    		f: 30.22,
    		l: "いよいよ"
    	},
    	{
    		r: 2304,
    		f: 30.2,
    		l: "出会い"
    	},
    	{
    		r: 2305,
    		f: 30.2,
    		l: "緊張"
    	},
    	{
    		r: 2306,
    		f: 30.19,
    		l: "〉"
    	},
    	{
    		r: 2307,
    		f: 30.17,
    		l: "ねえ"
    	},
    	{
    		r: 2308,
    		f: 30.16,
    		l: "沢山"
    	},
    	{
    		r: 2309,
    		f: 30.15,
    		l: "職"
    	},
    	{
    		r: 2310,
    		f: 30.14,
    		l: "博士"
    	},
    	{
    		r: 2311,
    		f: 30.14,
    		l: "〈"
    	},
    	{
    		r: 2312,
    		f: 30.11,
    		l: "返す"
    	},
    	{
    		r: 2313,
    		f: 30.11,
    		l: "教科書"
    	},
    	{
    		r: 2314,
    		f: 30.08,
    		l: "先週"
    	},
    	{
    		r: 2315,
    		f: 30.07,
    		l: "近づく"
    	},
    	{
    		r: 2316,
    		f: 30.06,
    		l: "がち"
    	},
    	{
    		r: 2317,
    		f: 30.06,
    		l: "問い合わせ"
    	},
    	{
    		r: 2318,
    		f: 30.05,
    		l: "２月"
    	},
    	{
    		r: 2319,
    		f: 30.03,
    		l: "朝鮮"
    	},
    	{
    		r: 2320,
    		f: 30.03,
    		l: "余裕"
    	},
    	{
    		r: 2321,
    		f: 30.03,
    		l: "代わり"
    	},
    	{
    		r: 2322,
    		f: 30.03,
    		l: "品質"
    	},
    	{
    		r: 2323,
    		f: 30.02,
    		l: "太陽"
    	},
    	{
    		r: 2324,
    		f: 29.99,
    		l: "とく"
    	},
    	{
    		r: 2325,
    		f: 29.99,
    		l: "勤務"
    	},
    	{
    		r: 2326,
    		f: 29.98,
    		l: "テキスト"
    	},
    	{
    		r: 2327,
    		f: 29.98,
    		l: "水準"
    	},
    	{
    		r: 2328,
    		f: 29.96,
    		l: "作り"
    	},
    	{
    		r: 2329,
    		f: 29.96,
    		l: "意図"
    	},
    	{
    		r: 2330,
    		f: 29.96,
    		l: "公務員"
    	},
    	{
    		r: 2331,
    		f: 29.95,
    		l: "復活"
    	},
    	{
    		r: 2332,
    		f: 29.95,
    		l: "用語"
    	},
    	{
    		r: 2333,
    		f: 29.94,
    		l: "進行"
    	},
    	{
    		r: 2334,
    		f: 29.92,
    		l: "近所"
    	},
    	{
    		r: 2335,
    		f: 29.91,
    		l: "育つ"
    	},
    	{
    		r: 2336,
    		f: 29.89,
    		l: "程"
    	},
    	{
    		r: 2337,
    		f: 29.88,
    		l: "無駄"
    	},
    	{
    		r: 2338,
    		f: 29.87,
    		l: "入り"
    	},
    	{
    		r: 2339,
    		f: 29.85,
    		l: "講師"
    	},
    	{
    		r: 2340,
    		f: 29.85,
    		l: "桜"
    	},
    	{
    		r: 2341,
    		f: 29.81,
    		l: "占める"
    	},
    	{
    		r: 2342,
    		f: 29.81,
    		l: "郵便"
    	},
    	{
    		r: 2343,
    		f: 29.79,
    		l: "パワー"
    	},
    	{
    		r: 2344,
    		f: 29.79,
    		l: "候補"
    	},
    	{
    		r: 2345,
    		f: 29.77,
    		l: "気付く"
    	},
    	{
    		r: 2346,
    		f: 29.77,
    		l: "指示"
    	},
    	{
    		r: 2347,
    		f: 29.75,
    		l: "留学"
    	},
    	{
    		r: 2348,
    		f: 29.72,
    		l: "いくつ"
    	},
    	{
    		r: 2349,
    		f: 29.71,
    		l: "ミス"
    	},
    	{
    		r: 2350,
    		f: 29.71,
    		l: "返事"
    	},
    	{
    		r: 2351,
    		f: 29.68,
    		l: "物価"
    	},
    	{
    		r: 2352,
    		f: 29.68,
    		l: "創造"
    	},
    	{
    		r: 2353,
    		f: 29.67,
    		l: "直す"
    	},
    	{
    		r: 2354,
    		f: 29.66,
    		l: "覆る"
    	},
    	{
    		r: 2355,
    		f: 29.64,
    		l: "統一"
    	},
    	{
    		r: 2356,
    		f: 29.62,
    		l: "たび"
    	},
    	{
    		r: 2357,
    		f: 29.6,
    		l: "々"
    	},
    	{
    		r: 2358,
    		f: 29.58,
    		l: "辺"
    	},
    	{
    		r: 2359,
    		f: 29.58,
    		l: "暮らす"
    	},
    	{
    		r: 2360,
    		f: 29.58,
    		l: "致す"
    	},
    	{
    		r: 2361,
    		f: 29.58,
    		l: "テーブル"
    	},
    	{
    		r: 2362,
    		f: 29.56,
    		l: "苦労"
    	},
    	{
    		r: 2363,
    		f: 29.54,
    		l: "漫画"
    	},
    	{
    		r: 2364,
    		f: 29.5,
    		l: "進化"
    	},
    	{
    		r: 2365,
    		f: 29.5,
    		l: "飛行機"
    	},
    	{
    		r: 2366,
    		f: 29.49,
    		l: "マガジン"
    	},
    	{
    		r: 2367,
    		f: 29.49,
    		l: "手術"
    	},
    	{
    		r: 2368,
    		f: 29.45,
    		l: "み"
    	},
    	{
    		r: 2369,
    		f: 29.45,
    		l: "リーグ"
    	},
    	{
    		r: 2370,
    		f: 29.42,
    		l: "それとも"
    	},
    	{
    		r: 2371,
    		f: 29.41,
    		l: "ツアー"
    	},
    	{
    		r: 2372,
    		f: 29.41,
    		l: "見解"
    	},
    	{
    		r: 2373,
    		f: 29.39,
    		l: "連合"
    	},
    	{
    		r: 2374,
    		f: 29.36,
    		l: "ホント"
    	},
    	{
    		r: 2375,
    		f: 29.36,
    		l: "貿易"
    	},
    	{
    		r: 2376,
    		f: 29.34,
    		l: "発想"
    	},
    	{
    		r: 2377,
    		f: 29.33,
    		l: "静か"
    	},
    	{
    		r: 2378,
    		f: 29.31,
    		l: "経過"
    	},
    	{
    		r: 2379,
    		f: 29.31,
    		l: "いきなり"
    	},
    	{
    		r: 2380,
    		f: 29.3,
    		l: "専用"
    	},
    	{
    		r: 2381,
    		f: 29.29,
    		l: "停止"
    	},
    	{
    		r: 2382,
    		f: 29.28,
    		l: "食う"
    	},
    	{
    		r: 2383,
    		f: 29.28,
    		l: "隠す"
    	},
    	{
    		r: 2384,
    		f: 29.26,
    		l: "クリスマス"
    	},
    	{
    		r: 2385,
    		f: 29.26,
    		l: "化学"
    	},
    	{
    		r: 2386,
    		f: 29.23,
    		l: "院"
    	},
    	{
    		r: 2387,
    		f: 29.22,
    		l: "番目"
    	},
    	{
    		r: 2388,
    		f: 29.22,
    		l: "事前"
    	},
    	{
    		r: 2389,
    		f: 29.22,
    		l: "ラン"
    	},
    	{
    		r: 2390,
    		f: 29.19,
    		l: "匹"
    	},
    	{
    		r: 2391,
    		f: 29.19,
    		l: "災害"
    	},
    	{
    		r: 2392,
    		f: 29.17,
    		l: "ピアノ"
    	},
    	{
    		r: 2393,
    		f: 29.16,
    		l: "連携"
    	},
    	{
    		r: 2394,
    		f: 29.16,
    		l: "信用"
    	},
    	{
    		r: 2395,
    		f: 29.15,
    		l: "増やす"
    	},
    	{
    		r: 2396,
    		f: 29.14,
    		l: "優れる"
    	},
    	{
    		r: 2397,
    		f: 29.12,
    		l: "狭い"
    	},
    	{
    		r: 2398,
    		f: 29.11,
    		l: "両親"
    	},
    	{
    		r: 2399,
    		f: 29.06,
    		l: "悲しい"
    	},
    	{
    		r: 2400,
    		f: 28.98,
    		l: "高度"
    	},
    	{
    		r: 2401,
    		f: 28.97,
    		l: "熱い"
    	},
    	{
    		r: 2402,
    		f: 28.95,
    		l: "宣伝"
    	},
    	{
    		r: 2403,
    		f: 28.95,
    		l: "症"
    	},
    	{
    		r: 2404,
    		f: 28.92,
    		l: "支払う"
    	},
    	{
    		r: 2405,
    		f: 28.9,
    		l: "迷惑"
    	},
    	{
    		r: 2406,
    		f: 28.89,
    		l: "切れる"
    	},
    	{
    		r: 2407,
    		f: 28.86,
    		l: "砲"
    	},
    	{
    		r: 2408,
    		f: 28.85,
    		l: "主要"
    	},
    	{
    		r: 2409,
    		f: 28.85,
    		l: "オーストラリア"
    	},
    	{
    		r: 2410,
    		f: 28.85,
    		l: "辛い"
    	},
    	{
    		r: 2411,
    		f: 28.84,
    		l: "配信"
    	},
    	{
    		r: 2412,
    		f: 28.84,
    		l: "ゴール"
    	},
    	{
    		r: 2413,
    		f: 28.83,
    		l: "確立"
    	},
    	{
    		r: 2414,
    		f: 28.79,
    		l: "統合"
    	},
    	{
    		r: 2415,
    		f: 28.78,
    		l: "コンサート"
    	},
    	{
    		r: 2416,
    		f: 28.78,
    		l: "謎"
    	},
    	{
    		r: 2417,
    		f: 28.77,
    		l: "時半"
    	},
    	{
    		r: 2418,
    		f: 28.77,
    		l: "何故"
    	},
    	{
    		r: 2419,
    		f: 28.77,
    		l: "げ"
    	},
    	{
    		r: 2420,
    		f: 28.76,
    		l: "ノート"
    	},
    	{
    		r: 2421,
    		f: 28.75,
    		l: "それなり"
    	},
    	{
    		r: 2422,
    		f: 28.74,
    		l: "ニューヨーク"
    	},
    	{
    		r: 2423,
    		f: 28.72,
    		l: "物理"
    	},
    	{
    		r: 2424,
    		f: 28.72,
    		l: "８月"
    	},
    	{
    		r: 2425,
    		f: 28.66,
    		l: "恋"
    	},
    	{
    		r: 2426,
    		f: 28.65,
    		l: "ストーリー"
    	},
    	{
    		r: 2427,
    		f: 28.64,
    		l: "ゼロ"
    	},
    	{
    		r: 2428,
    		f: 28.64,
    		l: "笑顔"
    	},
    	{
    		r: 2429,
    		f: 28.64,
    		l: "熱"
    	},
    	{
    		r: 2430,
    		f: 28.63,
    		l: "自動"
    	},
    	{
    		r: 2431,
    		f: 28.62,
    		l: "圏"
    	},
    	{
    		r: 2432,
    		f: 28.6,
    		l: "メモ"
    	},
    	{
    		r: 2433,
    		f: 28.6,
    		l: "アドバイス"
    	},
    	{
    		r: 2434,
    		f: 28.58,
    		l: "知的"
    	},
    	{
    		r: 2435,
    		f: 28.56,
    		l: "男女"
    	},
    	{
    		r: 2436,
    		f: 28.55,
    		l: "よろしく"
    	},
    	{
    		r: 2437,
    		f: 28.52,
    		l: "緊急"
    	},
    	{
    		r: 2438,
    		f: 28.51,
    		l: "気に入る"
    	},
    	{
    		r: 2439,
    		f: 28.49,
    		l: "動作"
    	},
    	{
    		r: 2440,
    		f: 28.47,
    		l: "輸出"
    	},
    	{
    		r: 2441,
    		f: 28.45,
    		l: "落ち着く"
    	},
    	{
    		r: 2442,
    		f: 28.42,
    		l: "かわいい"
    	},
    	{
    		r: 2443,
    		f: 28.42,
    		l: "先輩"
    	},
    	{
    		r: 2444,
    		f: 28.41,
    		l: "通じる"
    	},
    	{
    		r: 2445,
    		f: 28.39,
    		l: "本格"
    	},
    	{
    		r: 2446,
    		f: 28.36,
    		l: "合併"
    	},
    	{
    		r: 2447,
    		f: 28.36,
    		l: "すら"
    	},
    	{
    		r: 2448,
    		f: 28.36,
    		l: "反省"
    	},
    	{
    		r: 2449,
    		f: 28.3,
    		l: "像"
    	},
    	{
    		r: 2450,
    		f: 28.3,
    		l: "中身"
    	},
    	{
    		r: 2451,
    		f: 28.29,
    		l: "すばらしい"
    	},
    	{
    		r: 2452,
    		f: 28.29,
    		l: "製作"
    	},
    	{
    		r: 2453,
    		f: 28.28,
    		l: "サン"
    	},
    	{
    		r: 2454,
    		f: 28.28,
    		l: "牛"
    	},
    	{
    		r: 2455,
    		f: 28.27,
    		l: "診断"
    	},
    	{
    		r: 2456,
    		f: 28.25,
    		l: "要望"
    	},
    	{
    		r: 2457,
    		f: 28.23,
    		l: "ストレス"
    	},
    	{
    		r: 2458,
    		f: 28.23,
    		l: "工業"
    	},
    	{
    		r: 2459,
    		f: 28.21,
    		l: "ボタン"
    	},
    	{
    		r: 2460,
    		f: 28.2,
    		l: "アン"
    	},
    	{
    		r: 2461,
    		f: 28.18,
    		l: "試す"
    	},
    	{
    		r: 2462,
    		f: 28.13,
    		l: "うる"
    	},
    	{
    		r: 2463,
    		f: 28.13,
    		l: "ますます"
    	},
    	{
    		r: 2464,
    		f: 28.12,
    		l: "崩壊"
    	},
    	{
    		r: 2465,
    		f: 28.12,
    		l: "真実"
    	},
    	{
    		r: 2466,
    		f: 28.12,
    		l: "去る"
    	},
    	{
    		r: 2467,
    		f: 28.11,
    		l: "プレー"
    	},
    	{
    		r: 2468,
    		f: 28.11,
    		l: "適当"
    	},
    	{
    		r: 2469,
    		f: 28.08,
    		l: "国立"
    	},
    	{
    		r: 2470,
    		f: 28.06,
    		l: "貼る"
    	},
    	{
    		r: 2471,
    		f: 28.05,
    		l: "珍しい"
    	},
    	{
    		r: 2472,
    		f: 28.03,
    		l: "計"
    	},
    	{
    		r: 2473,
    		f: 28.01,
    		l: "喜び"
    	},
    	{
    		r: 2474,
    		f: 28,
    		l: "石油"
    	},
    	{
    		r: 2475,
    		f: 27.98,
    		l: "大幅"
    	},
    	{
    		r: 2476,
    		f: 27.98,
    		l: "自治体"
    	},
    	{
    		r: 2477,
    		f: 27.96,
    		l: "をもって"
    	},
    	{
    		r: 2478,
    		f: 27.96,
    		l: "せっかく"
    	},
    	{
    		r: 2479,
    		f: 27.95,
    		l: "天"
    	},
    	{
    		r: 2480,
    		f: 27.94,
    		l: "ブッシュ"
    	},
    	{
    		r: 2481,
    		f: 27.94,
    		l: "だめ"
    	},
    	{
    		r: 2482,
    		f: 27.93,
    		l: "貢献"
    	},
    	{
    		r: 2483,
    		f: 27.92,
    		l: "眺める"
    	},
    	{
    		r: 2484,
    		f: 27.92,
    		l: "配慮"
    	},
    	{
    		r: 2485,
    		f: 27.92,
    		l: "ごろ"
    	},
    	{
    		r: 2486,
    		f: 27.91,
    		l: "サイド"
    	},
    	{
    		r: 2487,
    		f: 27.89,
    		l: "若干"
    	},
    	{
    		r: 2488,
    		f: 27.88,
    		l: "スペース"
    	},
    	{
    		r: 2489,
    		f: 27.87,
    		l: "つい"
    	},
    	{
    		r: 2490,
    		f: 27.87,
    		l: "主催"
    	},
    	{
    		r: 2491,
    		f: 27.87,
    		l: "書類"
    	},
    	{
    		r: 2492,
    		f: 27.87,
    		l: "きょう"
    	},
    	{
    		r: 2493,
    		f: 27.87,
    		l: "韓"
    	},
    	{
    		r: 2494,
    		f: 27.85,
    		l: "調子"
    	},
    	{
    		r: 2495,
    		f: 27.85,
    		l: "ミサイル"
    	},
    	{
    		r: 2496,
    		f: 27.84,
    		l: "き"
    	},
    	{
    		r: 2497,
    		f: 27.83,
    		l: "単語"
    	},
    	{
    		r: 2498,
    		f: 27.81,
    		l: "パリ"
    	},
    	{
    		r: 2499,
    		f: 27.79,
    		l: "渡す"
    	},
    	{
    		r: 2500,
    		f: 27.77,
    		l: "表情"
    	},
    	{
    		r: 2501,
    		f: 27.76,
    		l: "基地"
    	},
    	{
    		r: 2502,
    		f: 27.76,
    		l: "速い"
    	},
    	{
    		r: 2503,
    		f: 27.75,
    		l: "気がつく"
    	},
    	{
    		r: 2504,
    		f: 27.75,
    		l: "ホール"
    	},
    	{
    		r: 2505,
    		f: 27.74,
    		l: "駐車"
    	},
    	{
    		r: 2506,
    		f: 27.73,
    		l: "比較的"
    	},
    	{
    		r: 2507,
    		f: 27.73,
    		l: "ガラス"
    	},
    	{
    		r: 2508,
    		f: 27.72,
    		l: "景気"
    	},
    	{
    		r: 2509,
    		f: 27.71,
    		l: "世間"
    	},
    	{
    		r: 2510,
    		f: 27.69,
    		l: "え"
    	},
    	{
    		r: 2511,
    		f: 27.68,
    		l: "植物"
    	},
    	{
    		r: 2512,
    		f: 27.68,
    		l: "カー"
    	},
    	{
    		r: 2513,
    		f: 27.68,
    		l: "あり方"
    	},
    	{
    		r: 2514,
    		f: 27.68,
    		l: "単なる"
    	},
    	{
    		r: 2515,
    		f: 27.63,
    		l: "セ"
    	},
    	{
    		r: 2516,
    		f: 27.63,
    		l: "楽しめる"
    	},
    	{
    		r: 2517,
    		f: 27.62,
    		l: "戦い"
    	},
    	{
    		r: 2518,
    		f: 27.62,
    		l: "自治"
    	},
    	{
    		r: 2519,
    		f: 27.6,
    		l: "限界"
    	},
    	{
    		r: 2520,
    		f: 27.6,
    		l: "ベスト"
    	},
    	{
    		r: 2521,
    		f: 27.59,
    		l: "トイレ"
    	},
    	{
    		r: 2522,
    		f: 27.59,
    		l: "ただいま"
    	},
    	{
    		r: 2523,
    		f: 27.57,
    		l: "抜く"
    	},
    	{
    		r: 2524,
    		f: 27.57,
    		l: "反映"
    	},
    	{
    		r: 2525,
    		f: 27.57,
    		l: "転換"
    	},
    	{
    		r: 2526,
    		f: 27.56,
    		l: "美"
    	},
    	{
    		r: 2527,
    		f: 27.56,
    		l: "タイム"
    	},
    	{
    		r: 2528,
    		f: 27.56,
    		l: "形態"
    	},
    	{
    		r: 2529,
    		f: 27.54,
    		l: "振る"
    	},
    	{
    		r: 2530,
    		f: 27.54,
    		l: "状"
    	},
    	{
    		r: 2531,
    		f: 27.53,
    		l: "嫌い"
    	},
    	{
    		r: 2532,
    		f: 27.52,
    		l: "奴"
    	},
    	{
    		r: 2533,
    		f: 27.51,
    		l: "感染"
    	},
    	{
    		r: 2534,
    		f: 27.49,
    		l: "逃げる"
    	},
    	{
    		r: 2535,
    		f: 27.46,
    		l: "根拠"
    	},
    	{
    		r: 2536,
    		f: 27.46,
    		l: "こうして"
    	},
    	{
    		r: 2537,
    		f: 27.45,
    		l: "原稿"
    	},
    	{
    		r: 2538,
    		f: 27.43,
    		l: "イエス"
    	},
    	{
    		r: 2539,
    		f: 27.42,
    		l: "そろそろ"
    	},
    	{
    		r: 2540,
    		f: 27.41,
    		l: "相場"
    	},
    	{
    		r: 2541,
    		f: 27.4,
    		l: "抜ける"
    	},
    	{
    		r: 2542,
    		f: 27.39,
    		l: "合格"
    	},
    	{
    		r: 2543,
    		f: 27.39,
    		l: "記載"
    	},
    	{
    		r: 2544,
    		f: 27.38,
    		l: "お母さん"
    	},
    	{
    		r: 2545,
    		f: 27.36,
    		l: "狙う"
    	},
    	{
    		r: 2546,
    		f: 27.33,
    		l: "地図"
    	},
    	{
    		r: 2547,
    		f: 27.33,
    		l: "人達"
    	},
    	{
    		r: 2548,
    		f: 27.32,
    		l: "ダウンロード"
    	},
    	{
    		r: 2549,
    		f: 27.32,
    		l: "大学院"
    	},
    	{
    		r: 2550,
    		f: 27.32,
    		l: "$"
    	},
    	{
    		r: 2551,
    		f: 27.3,
    		l: "拒否"
    	},
    	{
    		r: 2552,
    		f: 27.28,
    		l: "腕"
    	},
    	{
    		r: 2553,
    		f: 27.27,
    		l: "はい"
    	},
    	{
    		r: 2554,
    		f: 27.26,
    		l: "あう"
    	},
    	{
    		r: 2555,
    		f: 27.26,
    		l: "遅れる"
    	},
    	{
    		r: 2556,
    		f: 27.25,
    		l: "鈴木"
    	},
    	{
    		r: 2557,
    		f: 27.23,
    		l: "最低"
    	},
    	{
    		r: 2558,
    		f: 27.2,
    		l: "微妙"
    	},
    	{
    		r: 2559,
    		f: 27.2,
    		l: "見方"
    	},
    	{
    		r: 2560,
    		f: 27.19,
    		l: "結ぶ"
    	},
    	{
    		r: 2561,
    		f: 27.17,
    		l: "最"
    	},
    	{
    		r: 2562,
    		f: 27.17,
    		l: "下げる"
    	},
    	{
    		r: 2563,
    		f: 27.12,
    		l: "削減"
    	},
    	{
    		r: 2564,
    		f: 27.12,
    		l: "Ｍ"
    	},
    	{
    		r: 2565,
    		f: 27.11,
    		l: "青年"
    	},
    	{
    		r: 2566,
    		f: 27.11,
    		l: "我が国"
    	},
    	{
    		r: 2567,
    		f: 27.1,
    		l: "助ける"
    	},
    	{
    		r: 2568,
    		f: 27.1,
    		l: "役立つ"
    	},
    	{
    		r: 2569,
    		f: 27.1,
    		l: "しかしながら"
    	},
    	{
    		r: 2570,
    		f: 27.08,
    		l: "つぶやき"
    	},
    	{
    		r: 2571,
    		f: 27.06,
    		l: "劇場"
    	},
    	{
    		r: 2572,
    		f: 27.06,
    		l: "向く"
    	},
    	{
    		r: 2573,
    		f: 27.05,
    		l: "強調"
    	},
    	{
    		r: 2574,
    		f: 27.03,
    		l: "要するに"
    	},
    	{
    		r: 2575,
    		f: 27,
    		l: "防衛"
    	},
    	{
    		r: 2576,
    		f: 26.98,
    		l: "ロンドン"
    	},
    	{
    		r: 2577,
    		f: 26.96,
    		l: "世界中"
    	},
    	{
    		r: 2578,
    		f: 26.96,
    		l: "初期"
    	},
    	{
    		r: 2579,
    		f: 26.96,
    		l: "ホ"
    	},
    	{
    		r: 2580,
    		f: 26.94,
    		l: "機構"
    	},
    	{
    		r: 2581,
    		f: 26.93,
    		l: "どうやら"
    	},
    	{
    		r: 2582,
    		f: 26.9,
    		l: "床"
    	},
    	{
    		r: 2583,
    		f: 26.89,
    		l: "真剣"
    	},
    	{
    		r: 2584,
    		f: 26.86,
    		l: "おすすめ"
    	},
    	{
    		r: 2585,
    		f: 26.86,
    		l: "講義"
    	},
    	{
    		r: 2586,
    		f: 26.85,
    		l: "術"
    	},
    	{
    		r: 2587,
    		f: 26.83,
    		l: "対処"
    	},
    	{
    		r: 2588,
    		f: 26.83,
    		l: "隊"
    	},
    	{
    		r: 2589,
    		f: 26.83,
    		l: "読める"
    	},
    	{
    		r: 2590,
    		f: 26.82,
    		l: "実質"
    	},
    	{
    		r: 2591,
    		f: 26.79,
    		l: "貴重"
    	},
    	{
    		r: 2592,
    		f: 26.79,
    		l: "メートル"
    	},
    	{
    		r: 2593,
    		f: 26.78,
    		l: "もしくは"
    	},
    	{
    		r: 2594,
    		f: 26.77,
    		l: "収集"
    	},
    	{
    		r: 2595,
    		f: 26.76,
    		l: "▽"
    	},
    	{
    		r: 2596,
    		f: 26.74,
    		l: "工夫"
    	},
    	{
    		r: 2597,
    		f: 26.74,
    		l: "大手"
    	},
    	{
    		r: 2598,
    		f: 26.73,
    		l: "じゃあ"
    	},
    	{
    		r: 2599,
    		f: 26.72,
    		l: "諸国"
    	},
    	{
    		r: 2600,
    		f: 26.7,
    		l: "幅"
    	},
    	{
    		r: 2601,
    		f: 26.7,
    		l: "蠅"
    	},
    	{
    		r: 2602,
    		f: 26.7,
    		l: "そば"
    	},
    	{
    		r: 2603,
    		f: 26.68,
    		l: "迫る"
    	},
    	{
    		r: 2604,
    		f: 26.68,
    		l: "監視"
    	},
    	{
    		r: 2605,
    		f: 26.67,
    		l: "リーダー"
    	},
    	{
    		r: 2606,
    		f: 26.66,
    		l: "認定"
    	},
    	{
    		r: 2607,
    		f: 26.66,
    		l: "必ずしも"
    	},
    	{
    		r: 2608,
    		f: 26.66,
    		l: "文庫"
    	},
    	{
    		r: 2609,
    		f: 26.65,
    		l: "サーバー"
    	},
    	{
    		r: 2610,
    		f: 26.61,
    		l: "各種"
    	},
    	{
    		r: 2611,
    		f: 26.61,
    		l: "節"
    	},
    	{
    		r: 2612,
    		f: 26.59,
    		l: "福岡"
    	},
    	{
    		r: 2613,
    		f: 26.57,
    		l: "肩"
    	},
    	{
    		r: 2614,
    		f: 26.57,
    		l: "反"
    	},
    	{
    		r: 2615,
    		f: 26.56,
    		l: "すると"
    	},
    	{
    		r: 2616,
    		f: 26.56,
    		l: "券"
    	},
    	{
    		r: 2617,
    		f: 26.53,
    		l: "意外"
    	},
    	{
    		r: 2618,
    		f: 26.47,
    		l: "帰り"
    	},
    	{
    		r: 2619,
    		f: 26.47,
    		l: "容疑"
    	},
    	{
    		r: 2620,
    		f: 26.47,
    		l: "命令"
    	},
    	{
    		r: 2621,
    		f: 26.47,
    		l: "明治"
    	},
    	{
    		r: 2622,
    		f: 26.46,
    		l: "向こう"
    	},
    	{
    		r: 2623,
    		f: 26.46,
    		l: "根本"
    	},
    	{
    		r: 2624,
    		f: 26.45,
    		l: "重視"
    	},
    	{
    		r: 2625,
    		f: 26.44,
    		l: "ワン"
    	},
    	{
    		r: 2626,
    		f: 26.41,
    		l: "時々"
    	},
    	{
    		r: 2627,
    		f: 26.41,
    		l: "指"
    	},
    	{
    		r: 2628,
    		f: 26.38,
    		l: "依存"
    	},
    	{
    		r: 2629,
    		f: 26.37,
    		l: "医学"
    	},
    	{
    		r: 2630,
    		f: 26.36,
    		l: "手続"
    	},
    	{
    		r: 2631,
    		f: 26.36,
    		l: "けっこう"
    	},
    	{
    		r: 2632,
    		f: 26.33,
    		l: "株主"
    	},
    	{
    		r: 2633,
    		f: 26.33,
    		l: "プラス"
    	},
    	{
    		r: 2634,
    		f: 26.32,
    		l: "行ける"
    	},
    	{
    		r: 2635,
    		f: 26.3,
    		l: "刺激"
    	},
    	{
    		r: 2636,
    		f: 26.28,
    		l: "合理"
    	},
    	{
    		r: 2637,
    		f: 26.27,
    		l: "中間"
    	},
    	{
    		r: 2638,
    		f: 26.26,
    		l: "鉄道"
    	},
    	{
    		r: 2639,
    		f: 26.25,
    		l: "ゆ"
    	},
    	{
    		r: 2640,
    		f: 26.23,
    		l: "従う"
    	},
    	{
    		r: 2641,
    		f: 26.23,
    		l: "暗い"
    	},
    	{
    		r: 2642,
    		f: 26.19,
    		l: "入手"
    	},
    	{
    		r: 2643,
    		f: 26.19,
    		l: "才"
    	},
    	{
    		r: 2644,
    		f: 26.19,
    		l: "名古屋"
    	},
    	{
    		r: 2645,
    		f: 26.18,
    		l: "叫ぶ"
    	},
    	{
    		r: 2646,
    		f: 26.18,
    		l: "めぐる"
    	},
    	{
    		r: 2647,
    		f: 26.16,
    		l: "現"
    	},
    	{
    		r: 2648,
    		f: 26.16,
    		l: "こんにちは"
    	},
    	{
    		r: 2649,
    		f: 26.16,
    		l: "注"
    	},
    	{
    		r: 2650,
    		f: 26.1,
    		l: "組む"
    	},
    	{
    		r: 2651,
    		f: 26.08,
    		l: "相"
    	},
    	{
    		r: 2652,
    		f: 26.05,
    		l: "ロー"
    	},
    	{
    		r: 2653,
    		f: 26.04,
    		l: "印刷"
    	},
    	{
    		r: 2654,
    		f: 26.02,
    		l: "帰国"
    	},
    	{
    		r: 2655,
    		f: 26.01,
    		l: "発揮"
    	},
    	{
    		r: 2656,
    		f: 25.99,
    		l: "市町村"
    	},
    	{
    		r: 2657,
    		f: 25.98,
    		l: "何らかの"
    	},
    	{
    		r: 2658,
    		f: 25.96,
    		l: "規則"
    	},
    	{
    		r: 2659,
    		f: 25.93,
    		l: "賃金"
    	},
    	{
    		r: 2660,
    		f: 25.93,
    		l: "一致"
    	},
    	{
    		r: 2661,
    		f: 25.91,
    		l: "バージョン"
    	},
    	{
    		r: 2662,
    		f: 25.91,
    		l: "奥"
    	},
    	{
    		r: 2663,
    		f: 25.89,
    		l: "マーケティング"
    	},
    	{
    		r: 2664,
    		f: 25.87,
    		l: "主体"
    	},
    	{
    		r: 2665,
    		f: 25.87,
    		l: "トラブル"
    	},
    	{
    		r: 2666,
    		f: 25.86,
    		l: "原告"
    	},
    	{
    		r: 2667,
    		f: 25.86,
    		l: "経る"
    	},
    	{
    		r: 2668,
    		f: 25.84,
    		l: "部長"
    	},
    	{
    		r: 2669,
    		f: 25.83,
    		l: "習慣"
    	},
    	{
    		r: 2670,
    		f: 25.83,
    		l: "筆者"
    	},
    	{
    		r: 2671,
    		f: 25.81,
    		l: "以内"
    	},
    	{
    		r: 2672,
    		f: 25.81,
    		l: "だり"
    	},
    	{
    		r: 2673,
    		f: 25.79,
    		l: "カナダ"
    	},
    	{
    		r: 2674,
    		f: 25.78,
    		l: "校"
    	},
    	{
    		r: 2675,
    		f: 25.74,
    		l: "ロック"
    	},
    	{
    		r: 2676,
    		f: 25.74,
    		l: "模様"
    	},
    	{
    		r: 2677,
    		f: 25.72,
    		l: "日曜日"
    	},
    	{
    		r: 2678,
    		f: 25.72,
    		l: "目立つ"
    	},
    	{
    		r: 2679,
    		f: 25.7,
    		l: "速度"
    	},
    	{
    		r: 2680,
    		f: 25.69,
    		l: "焼く"
    	},
    	{
    		r: 2681,
    		f: 25.69,
    		l: "外部"
    	},
    	{
    		r: 2682,
    		f: 25.68,
    		l: "抵抗"
    	},
    	{
    		r: 2683,
    		f: 25.68,
    		l: "各国"
    	},
    	{
    		r: 2684,
    		f: 25.68,
    		l: "重ねる"
    	},
    	{
    		r: 2685,
    		f: 25.64,
    		l: "かねる"
    	},
    	{
    		r: 2686,
    		f: 25.62,
    		l: "ワールドカップ"
    	},
    	{
    		r: 2687,
    		f: 25.62,
    		l: "会見"
    	},
    	{
    		r: 2688,
    		f: 25.61,
    		l: "定期"
    	},
    	{
    		r: 2689,
    		f: 25.57,
    		l: "市内"
    	},
    	{
    		r: 2690,
    		f: 25.57,
    		l: "混乱"
    	},
    	{
    		r: 2691,
    		f: 25.51,
    		l: "医者"
    	},
    	{
    		r: 2692,
    		f: 25.51,
    		l: "自殺"
    	},
    	{
    		r: 2693,
    		f: 25.47,
    		l: "都合"
    	},
    	{
    		r: 2694,
    		f: 25.46,
    		l: "幸い"
    	},
    	{
    		r: 2695,
    		f: 25.45,
    		l: "検証"
    	},
    	{
    		r: 2696,
    		f: 25.44,
    		l: "概要"
    	},
    	{
    		r: 2697,
    		f: 25.44,
    		l: "温泉"
    	},
    	{
    		r: 2698,
    		f: 25.43,
    		l: "ジョン"
    	},
    	{
    		r: 2699,
    		f: 25.43,
    		l: "参る"
    	},
    	{
    		r: 2700,
    		f: 25.42,
    		l: "神様"
    	},
    	{
    		r: 2701,
    		f: 25.4,
    		l: "漢字"
    	},
    	{
    		r: 2702,
    		f: 25.38,
    		l: "ごく"
    	},
    	{
    		r: 2703,
    		f: 25.38,
    		l: "踏まえる"
    	},
    	{
    		r: 2704,
    		f: 25.38,
    		l: "役に立つ"
    	},
    	{
    		r: 2705,
    		f: 25.38,
    		l: "杯"
    	},
    	{
    		r: 2706,
    		f: 25.37,
    		l: "レース"
    	},
    	{
    		r: 2707,
    		f: 25.37,
    		l: "ご飯"
    	},
    	{
    		r: 2708,
    		f: 25.36,
    		l: "さっき"
    	},
    	{
    		r: 2709,
    		f: 25.36,
    		l: "賛成"
    	},
    	{
    		r: 2710,
    		f: 25.32,
    		l: "緑"
    	},
    	{
    		r: 2711,
    		f: 25.3,
    		l: "迷う"
    	},
    	{
    		r: 2712,
    		f: 25.29,
    		l: "民主党"
    	},
    	{
    		r: 2713,
    		f: 25.28,
    		l: "欧州"
    	},
    	{
    		r: 2714,
    		f: 25.27,
    		l: "帰宅"
    	},
    	{
    		r: 2715,
    		f: 25.25,
    		l: "城"
    	},
    	{
    		r: 2716,
    		f: 25.25,
    		l: "シーズン"
    	},
    	{
    		r: 2717,
    		f: 25.25,
    		l: "筋"
    	},
    	{
    		r: 2718,
    		f: 25.23,
    		l: "たとえ"
    	},
    	{
    		r: 2719,
    		f: 25.23,
    		l: "天皇"
    	},
    	{
    		r: 2720,
    		f: 25.21,
    		l: "前半"
    	},
    	{
    		r: 2721,
    		f: 25.18,
    		l: "ともかく"
    	},
    	{
    		r: 2722,
    		f: 25.18,
    		l: "重大"
    	},
    	{
    		r: 2723,
    		f: 25.17,
    		l: "流"
    	},
    	{
    		r: 2724,
    		f: 25.12,
    		l: "ゴルフ"
    	},
    	{
    		r: 2725,
    		f: 25.1,
    		l: "ユーザ"
    	},
    	{
    		r: 2726,
    		f: 25.1,
    		l: "題"
    	},
    	{
    		r: 2727,
    		f: 25.09,
    		l: "録音"
    	},
    	{
    		r: 2728,
    		f: 25.09,
    		l: "運"
    	},
    	{
    		r: 2729,
    		f: 25.04,
    		l: "必須"
    	},
    	{
    		r: 2730,
    		f: 25.03,
    		l: "林"
    	},
    	{
    		r: 2731,
    		f: 25.02,
    		l: "不満"
    	},
    	{
    		r: 2732,
    		f: 25.02,
    		l: "可愛い"
    	},
    	{
    		r: 2733,
    		f: 25.02,
    		l: "流通"
    	},
    	{
    		r: 2734,
    		f: 25,
    		l: "我が家"
    	},
    	{
    		r: 2735,
    		f: 24.99,
    		l: "扱い"
    	},
    	{
    		r: 2736,
    		f: 24.97,
    		l: "重"
    	},
    	{
    		r: 2737,
    		f: 24.96,
    		l: "原理"
    	},
    	{
    		r: 2738,
    		f: 24.95,
    		l: "比"
    	},
    	{
    		r: 2739,
    		f: 24.94,
    		l: "嘘"
    	},
    	{
    		r: 2740,
    		f: 24.94,
    		l: "多"
    	},
    	{
    		r: 2741,
    		f: 24.94,
    		l: "株価"
    	},
    	{
    		r: 2742,
    		f: 24.91,
    		l: "想定"
    	},
    	{
    		r: 2743,
    		f: 24.88,
    		l: "手続き"
    	},
    	{
    		r: 2744,
    		f: 24.84,
    		l: "要請"
    	},
    	{
    		r: 2745,
    		f: 24.83,
    		l: "楽器"
    	},
    	{
    		r: 2746,
    		f: 24.82,
    		l: "詩"
    	},
    	{
    		r: 2747,
    		f: 24.81,
    		l: "村上"
    	},
    	{
    		r: 2748,
    		f: 24.8,
    		l: "容易"
    	},
    	{
    		r: 2749,
    		f: 24.79,
    		l: "廃止"
    	},
    	{
    		r: 2750,
    		f: 24.76,
    		l: "魂"
    	},
    	{
    		r: 2751,
    		f: 24.76,
    		l: "綺麗"
    	},
    	{
    		r: 2752,
    		f: 24.75,
    		l: "イスラエル"
    	},
    	{
    		r: 2753,
    		f: 24.74,
    		l: "今月"
    	},
    	{
    		r: 2754,
    		f: 24.72,
    		l: "亡くなる"
    	},
    	{
    		r: 2755,
    		f: 24.72,
    		l: "興味深い"
    	},
    	{
    		r: 2756,
    		f: 24.71,
    		l: "滞在"
    	},
    	{
    		r: 2757,
    		f: 24.7,
    		l: "いったい"
    	},
    	{
    		r: 2758,
    		f: 24.7,
    		l: "上手い"
    	},
    	{
    		r: 2759,
    		f: 24.7,
    		l: "各地"
    	},
    	{
    		r: 2760,
    		f: 24.69,
    		l: "従業"
    	},
    	{
    		r: 2761,
    		f: 24.68,
    		l: "伸びる"
    	},
    	{
    		r: 2762,
    		f: 24.65,
    		l: "読書"
    	},
    	{
    		r: 2763,
    		f: 24.65,
    		l: "確定"
    	},
    	{
    		r: 2764,
    		f: 24.62,
    		l: "合計"
    	},
    	{
    		r: 2765,
    		f: 24.61,
    		l: "浮かぶ"
    	},
    	{
    		r: 2766,
    		f: 24.59,
    		l: "ヒット"
    	},
    	{
    		r: 2767,
    		f: 24.59,
    		l: "ＨＰ"
    	},
    	{
    		r: 2768,
    		f: 24.59,
    		l: "モード"
    	},
    	{
    		r: 2769,
    		f: 24.59,
    		l: "しょう"
    	},
    	{
    		r: 2770,
    		f: 24.58,
    		l: "タクシー"
    	},
    	{
    		r: 2771,
    		f: 24.55,
    		l: "発信"
    	},
    	{
    		r: 2772,
    		f: 24.52,
    		l: "済む"
    	},
    	{
    		r: 2773,
    		f: 24.51,
    		l: "振り返る"
    	},
    	{
    		r: 2774,
    		f: 24.48,
    		l: "執行"
    	},
    	{
    		r: 2775,
    		f: 24.48,
    		l: "連載"
    	},
    	{
    		r: 2776,
    		f: 24.47,
    		l: "香り"
    	},
    	{
    		r: 2777,
    		f: 24.45,
    		l: "フル"
    	},
    	{
    		r: 2778,
    		f: 24.43,
    		l: "恐怖"
    	},
    	{
    		r: 2779,
    		f: 24.43,
    		l: "思い出"
    	},
    	{
    		r: 2780,
    		f: 24.43,
    		l: "日経"
    	},
    	{
    		r: 2781,
    		f: 24.43,
    		l: "主人"
    	},
    	{
    		r: 2782,
    		f: 24.41,
    		l: "一瞬"
    	},
    	{
    		r: 2783,
    		f: 24.41,
    		l: "老人"
    	},
    	{
    		r: 2784,
    		f: 24.4,
    		l: "頁"
    	},
    	{
    		r: 2785,
    		f: 24.4,
    		l: "薄い"
    	},
    	{
    		r: 2786,
    		f: 24.39,
    		l: "当日"
    	},
    	{
    		r: 2787,
    		f: 24.38,
    		l: "早速"
    	},
    	{
    		r: 2788,
    		f: 24.38,
    		l: "備える"
    	},
    	{
    		r: 2789,
    		f: 24.36,
    		l: "関西"
    	},
    	{
    		r: 2790,
    		f: 24.33,
    		l: "赤い"
    	},
    	{
    		r: 2791,
    		f: 24.33,
    		l: "神戸"
    	},
    	{
    		r: 2792,
    		f: 24.31,
    		l: "時計"
    	},
    	{
    		r: 2793,
    		f: 24.26,
    		l: "割合"
    	},
    	{
    		r: 2794,
    		f: 24.25,
    		l: "正式"
    	},
    	{
    		r: 2795,
    		f: 24.24,
    		l: "はいる"
    	},
    	{
    		r: 2796,
    		f: 24.23,
    		l: "カラー"
    	},
    	{
    		r: 2797,
    		f: 24.23,
    		l: "出場"
    	},
    	{
    		r: 2798,
    		f: 24.22,
    		l: "残り"
    	},
    	{
    		r: 2799,
    		f: 24.19,
    		l: "まくる"
    	},
    	{
    		r: 2800,
    		f: 24.18,
    		l: "徹底"
    	},
    	{
    		r: 2801,
    		f: 24.17,
    		l: "穴"
    	},
    	{
    		r: 2802,
    		f: 24.17,
    		l: "収録"
    	},
    	{
    		r: 2803,
    		f: 24.16,
    		l: "板"
    	},
    	{
    		r: 2804,
    		f: 24.15,
    		l: "退職"
    	},
    	{
    		r: 2805,
    		f: 24.13,
    		l: "寄せる"
    	},
    	{
    		r: 2806,
    		f: 24.13,
    		l: "張る"
    	},
    	{
    		r: 2807,
    		f: 24.12,
    		l: "入学"
    	},
    	{
    		r: 2808,
    		f: 24.12,
    		l: "週末"
    	},
    	{
    		r: 2809,
    		f: 24.12,
    		l: "殺人"
    	},
    	{
    		r: 2810,
    		f: 24.12,
    		l: "代理"
    	},
    	{
    		r: 2811,
    		f: 24.1,
    		l: "演出"
    	},
    	{
    		r: 2812,
    		f: 24.1,
    		l: "かる"
    	},
    	{
    		r: 2813,
    		f: 24.09,
    		l: "掃除"
    	},
    	{
    		r: 2814,
    		f: 24.08,
    		l: "葉"
    	},
    	{
    		r: 2815,
    		f: 24.08,
    		l: "ショー"
    	},
    	{
    		r: 2816,
    		f: 24.06,
    		l: "公表"
    	},
    	{
    		r: 2817,
    		f: 24.05,
    		l: "インストール"
    	},
    	{
    		r: 2818,
    		f: 24.02,
    		l: "育成"
    	},
    	{
    		r: 2819,
    		f: 24.02,
    		l: "Ｋ"
    	},
    	{
    		r: 2820,
    		f: 24.02,
    		l: "実績"
    	},
    	{
    		r: 2821,
    		f: 24.02,
    		l: "だけど"
    	},
    	{
    		r: 2822,
    		f: 24.01,
    		l: "伺い"
    	},
    	{
    		r: 2823,
    		f: 24,
    		l: "昼"
    	},
    	{
    		r: 2824,
    		f: 23.99,
    		l: "使い方"
    	},
    	{
    		r: 2825,
    		f: 23.96,
    		l: "頼る"
    	},
    	{
    		r: 2826,
    		f: 23.95,
    		l: "パー"
    	},
    	{
    		r: 2827,
    		f: 23.95,
    		l: "もはや"
    	},
    	{
    		r: 2828,
    		f: 23.93,
    		l: "掛ける"
    	},
    	{
    		r: 2829,
    		f: 23.92,
    		l: "源"
    	},
    	{
    		r: 2830,
    		f: 23.91,
    		l: "店舗"
    	},
    	{
    		r: 2831,
    		f: 23.91,
    		l: "大型"
    	},
    	{
    		r: 2832,
    		f: 23.91,
    		l: "キリスト教"
    	},
    	{
    		r: 2833,
    		f: 23.9,
    		l: "ハイ"
    	},
    	{
    		r: 2834,
    		f: 23.89,
    		l: "載せる"
    	},
    	{
    		r: 2835,
    		f: 23.89,
    		l: "風呂"
    	},
    	{
    		r: 2836,
    		f: 23.89,
    		l: "生み出す"
    	},
    	{
    		r: 2837,
    		f: 23.88,
    		l: "どっち"
    	},
    	{
    		r: 2838,
    		f: 23.88,
    		l: "申し訳"
    	},
    	{
    		r: 2839,
    		f: 23.87,
    		l: "安"
    	},
    	{
    		r: 2840,
    		f: 23.86,
    		l: "ふと"
    	},
    	{
    		r: 2841,
    		f: 23.84,
    		l: "回転"
    	},
    	{
    		r: 2842,
    		f: 23.83,
    		l: "マイナス"
    	},
    	{
    		r: 2843,
    		f: 23.82,
    		l: "チケット"
    	},
    	{
    		r: 2844,
    		f: 23.81,
    		l: "犠牲"
    	},
    	{
    		r: 2845,
    		f: 23.81,
    		l: "暴力"
    	},
    	{
    		r: 2846,
    		f: 23.8,
    		l: "青"
    	},
    	{
    		r: 2847,
    		f: 23.8,
    		l: "細胞"
    	},
    	{
    		r: 2848,
    		f: 23.8,
    		l: "ことば"
    	},
    	{
    		r: 2849,
    		f: 23.78,
    		l: "ステージ"
    	},
    	{
    		r: 2850,
    		f: 23.78,
    		l: "はる"
    	},
    	{
    		r: 2851,
    		f: 23.77,
    		l: "そる"
    	},
    	{
    		r: 2852,
    		f: 23.77,
    		l: "ガイド"
    	},
    	{
    		r: 2853,
    		f: 23.72,
    		l: "稼ぐ"
    	},
    	{
    		r: 2854,
    		f: 23.7,
    		l: "広げる"
    	},
    	{
    		r: 2855,
    		f: 23.69,
    		l: "バイク"
    	},
    	{
    		r: 2856,
    		f: 23.69,
    		l: "知事"
    	},
    	{
    		r: 2857,
    		f: 23.68,
    		l: "勧め"
    	},
    	{
    		r: 2858,
    		f: 23.67,
    		l: "起業"
    	},
    	{
    		r: 2859,
    		f: 23.67,
    		l: "ロボット"
    	},
    	{
    		r: 2860,
    		f: 23.65,
    		l: "戦闘"
    	},
    	{
    		r: 2861,
    		f: 23.64,
    		l: "とこ"
    	},
    	{
    		r: 2862,
    		f: 23.64,
    		l: "たった"
    	},
    	{
    		r: 2863,
    		f: 23.63,
    		l: "１０月"
    	},
    	{
    		r: 2864,
    		f: 23.59,
    		l: "聖書"
    	},
    	{
    		r: 2865,
    		f: 23.59,
    		l: "しいる"
    	},
    	{
    		r: 2866,
    		f: 23.58,
    		l: "一気に"
    	},
    	{
    		r: 2867,
    		f: 23.57,
    		l: "移行"
    	},
    	{
    		r: 2868,
    		f: 23.55,
    		l: "はじめて"
    	},
    	{
    		r: 2869,
    		f: 23.55,
    		l: "正"
    	},
    	{
    		r: 2870,
    		f: 23.55,
    		l: "生かす"
    	},
    	{
    		r: 2871,
    		f: 23.54,
    		l: "成績"
    	},
    	{
    		r: 2872,
    		f: 23.53,
    		l: "通す"
    	},
    	{
    		r: 2873,
    		f: 23.51,
    		l: "お茶"
    	},
    	{
    		r: 2874,
    		f: 23.51,
    		l: "保つ"
    	},
    	{
    		r: 2875,
    		f: 23.49,
    		l: "同じく"
    	},
    	{
    		r: 2876,
    		f: 23.49,
    		l: "勝負"
    	},
    	{
    		r: 2877,
    		f: 23.48,
    		l: "翌日"
    	},
    	{
    		r: 2878,
    		f: 23.47,
    		l: "票"
    	},
    	{
    		r: 2879,
    		f: 23.46,
    		l: "直後"
    	},
    	{
    		r: 2880,
    		f: 23.45,
    		l: "左右"
    	},
    	{
    		r: 2881,
    		f: 23.44,
    		l: "やがて"
    	},
    	{
    		r: 2882,
    		f: 23.42,
    		l: "決勝"
    	},
    	{
    		r: 2883,
    		f: 23.42,
    		l: "所属"
    	},
    	{
    		r: 2884,
    		f: 23.41,
    		l: "演じる"
    	},
    	{
    		r: 2885,
    		f: 23.4,
    		l: "恥ずかしい"
    	},
    	{
    		r: 2886,
    		f: 23.4,
    		l: "キャラ"
    	},
    	{
    		r: 2887,
    		f: 23.4,
    		l: "面倒"
    	},
    	{
    		r: 2888,
    		f: 23.4,
    		l: "奪う"
    	},
    	{
    		r: 2889,
    		f: 23.38,
    		l: "測定"
    	},
    	{
    		r: 2890,
    		f: 23.37,
    		l: "千葉"
    	},
    	{
    		r: 2891,
    		f: 23.34,
    		l: "ブック"
    	},
    	{
    		r: 2892,
    		f: 23.34,
    		l: "ダイエット"
    	},
    	{
    		r: 2893,
    		f: 23.33,
    		l: "提示"
    	},
    	{
    		r: 2894,
    		f: 23.33,
    		l: "救う"
    	},
    	{
    		r: 2895,
    		f: 23.32,
    		l: "弾"
    	},
    	{
    		r: 2896,
    		f: 23.31,
    		l: "リング"
    	},
    	{
    		r: 2897,
    		f: 23.3,
    		l: "材"
    	},
    	{
    		r: 2898,
    		f: 23.27,
    		l: "府"
    	},
    	{
    		r: 2899,
    		f: 23.25,
    		l: "あんまり"
    	},
    	{
    		r: 2900,
    		f: 23.25,
    		l: "帯"
    	},
    	{
    		r: 2901,
    		f: 23.23,
    		l: "たまたま"
    	},
    	{
    		r: 2902,
    		f: 23.22,
    		l: "ベッド"
    	},
    	{
    		r: 2903,
    		f: 23.2,
    		l: "基盤"
    	},
    	{
    		r: 2904,
    		f: 23.16,
    		l: "ものすごい"
    	},
    	{
    		r: 2905,
    		f: 23.16,
    		l: "見学"
    	},
    	{
    		r: 2906,
    		f: 23.16,
    		l: "応募"
    	},
    	{
    		r: 2907,
    		f: 23.15,
    		l: "ファ"
    	},
    	{
    		r: 2908,
    		f: 23.14,
    		l: "枠"
    	},
    	{
    		r: 2909,
    		f: 23.12,
    		l: "厚生"
    	},
    	{
    		r: 2910,
    		f: 23.11,
    		l: "Ｃ"
    	},
    	{
    		r: 2911,
    		f: 23.11,
    		l: "配置"
    	},
    	{
    		r: 2912,
    		f: 23.11,
    		l: "道具"
    	},
    	{
    		r: 2913,
    		f: 23.1,
    		l: "ＣＤ"
    	},
    	{
    		r: 2914,
    		f: 23.1,
    		l: "刑事"
    	},
    	{
    		r: 2915,
    		f: 23.09,
    		l: "勢い"
    	},
    	{
    		r: 2916,
    		f: 23.09,
    		l: "Ｓ"
    	},
    	{
    		r: 2917,
    		f: 23.08,
    		l: "戻す"
    	},
    	{
    		r: 2918,
    		f: 23.08,
    		l: "対立"
    	},
    	{
    		r: 2919,
    		f: 23.08,
    		l: "散歩"
    	},
    	{
    		r: 2920,
    		f: 23.08,
    		l: "とれる"
    	},
    	{
    		r: 2921,
    		f: 23.06,
    		l: "症状"
    	},
    	{
    		r: 2922,
    		f: 23.06,
    		l: "入院"
    	},
    	{
    		r: 2923,
    		f: 23.05,
    		l: "教員"
    	},
    	{
    		r: 2924,
    		f: 23.04,
    		l: "キーワード"
    	},
    	{
    		r: 2925,
    		f: 23.01,
    		l: "中学"
    	},
    	{
    		r: 2926,
    		f: 22.97,
    		l: "表面"
    	},
    	{
    		r: 2927,
    		f: 22.97,
    		l: "情勢"
    	},
    	{
    		r: 2928,
    		f: 22.97,
    		l: "広島"
    	},
    	{
    		r: 2929,
    		f: 22.96,
    		l: "列"
    	},
    	{
    		r: 2930,
    		f: 22.95,
    		l: "腹"
    	},
    	{
    		r: 2931,
    		f: 22.93,
    		l: "玉"
    	},
    	{
    		r: 2932,
    		f: 22.89,
    		l: "レビュー"
    	},
    	{
    		r: 2933,
    		f: 22.88,
    		l: "学会"
    	},
    	{
    		r: 2934,
    		f: 22.87,
    		l: "ニーズ"
    	},
    	{
    		r: 2935,
    		f: 22.87,
    		l: "シンプル"
    	},
    	{
    		r: 2936,
    		f: 22.87,
    		l: "総会"
    	},
    	{
    		r: 2937,
    		f: 22.86,
    		l: "それに"
    	},
    	{
    		r: 2938,
    		f: 22.86,
    		l: "うえ"
    	},
    	{
    		r: 2939,
    		f: 22.86,
    		l: "通"
    	},
    	{
    		r: 2940,
    		f: 22.86,
    		l: "銘柄"
    	},
    	{
    		r: 2941,
    		f: 22.85,
    		l: "数学"
    	},
    	{
    		r: 2942,
    		f: 22.84,
    		l: "土曜日"
    	},
    	{
    		r: 2943,
    		f: 22.82,
    		l: "民"
    	},
    	{
    		r: 2944,
    		f: 22.82,
    		l: "やら"
    	},
    	{
    		r: 2945,
    		f: 22.82,
    		l: "承認"
    	},
    	{
    		r: 2946,
    		f: 22.81,
    		l: "なんとなく"
    	},
    	{
    		r: 2947,
    		f: 22.8,
    		l: "下記"
    	},
    	{
    		r: 2948,
    		f: 22.8,
    		l: "侵害"
    	},
    	{
    		r: 2949,
    		f: 22.8,
    		l: "増"
    	},
    	{
    		r: 2950,
    		f: 22.8,
    		l: "受賞"
    	},
    	{
    		r: 2951,
    		f: 22.8,
    		l: "痛み"
    	},
    	{
    		r: 2952,
    		f: 22.79,
    		l: "赤字"
    	},
    	{
    		r: 2953,
    		f: 22.79,
    		l: "公"
    	},
    	{
    		r: 2954,
    		f: 22.78,
    		l: "見かける"
    	},
    	{
    		r: 2955,
    		f: 22.77,
    		l: "腰"
    	},
    	{
    		r: 2956,
    		f: 22.76,
    		l: "お世話"
    	},
    	{
    		r: 2957,
    		f: 22.76,
    		l: "にかけて"
    	},
    	{
    		r: 2958,
    		f: 22.74,
    		l: "次々"
    	},
    	{
    		r: 2959,
    		f: 22.72,
    		l: "加工"
    	},
    	{
    		r: 2960,
    		f: 22.72,
    		l: "中村"
    	},
    	{
    		r: 2961,
    		f: 22.71,
    		l: "書店"
    	},
    	{
    		r: 2962,
    		f: 22.7,
    		l: "こる"
    	},
    	{
    		r: 2963,
    		f: 22.69,
    		l: "緩和"
    	},
    	{
    		r: 2964,
    		f: 22.68,
    		l: "マイ"
    	},
    	{
    		r: 2965,
    		f: 22.67,
    		l: "眠る"
    	},
    	{
    		r: 2966,
    		f: 22.66,
    		l: "ジャンル"
    	},
    	{
    		r: 2967,
    		f: 22.65,
    		l: "プラン"
    	},
    	{
    		r: 2968,
    		f: 22.65,
    		l: "お気に入り"
    	},
    	{
    		r: 2969,
    		f: 22.64,
    		l: "本当は"
    	},
    	{
    		r: 2970,
    		f: 22.63,
    		l: "個性"
    	},
    	{
    		r: 2971,
    		f: 22.62,
    		l: "作戦"
    	},
    	{
    		r: 2972,
    		f: 22.6,
    		l: "指揮"
    	},
    	{
    		r: 2973,
    		f: 22.6,
    		l: "技"
    	},
    	{
    		r: 2974,
    		f: 22.6,
    		l: "たまに"
    	},
    	{
    		r: 2975,
    		f: 22.58,
    		l: "たま"
    	},
    	{
    		r: 2976,
    		f: 22.57,
    		l: "誤解"
    	},
    	{
    		r: 2977,
    		f: 22.57,
    		l: "偶然"
    	},
    	{
    		r: 2978,
    		f: 22.57,
    		l: "群"
    	},
    	{
    		r: 2979,
    		f: 22.54,
    		l: "少々"
    	},
    	{
    		r: 2980,
    		f: 22.53,
    		l: "しく"
    	},
    	{
    		r: 2981,
    		f: 22.52,
    		l: "高まる"
    	},
    	{
    		r: 2982,
    		f: 22.52,
    		l: "ショック"
    	},
    	{
    		r: 2983,
    		f: 22.48,
    		l: "かう"
    	},
    	{
    		r: 2984,
    		f: 22.45,
    		l: "確信"
    	},
    	{
    		r: 2985,
    		f: 22.44,
    		l: "祈る"
    	},
    	{
    		r: 2986,
    		f: 22.43,
    		l: "意志"
    	},
    	{
    		r: 2987,
    		f: 22.42,
    		l: "ほる"
    	},
    	{
    		r: 2988,
    		f: 22.42,
    		l: "捉える"
    	},
    	{
    		r: 2989,
    		f: 22.4,
    		l: "知"
    	},
    	{
    		r: 2990,
    		f: 22.4,
    		l: "シート"
    	},
    	{
    		r: 2991,
    		f: 22.39,
    		l: "休む"
    	},
    	{
    		r: 2992,
    		f: 22.37,
    		l: "高校生"
    	},
    	{
    		r: 2993,
    		f: 22.35,
    		l: "きれる"
    	},
    	{
    		r: 2994,
    		f: 22.34,
    		l: "１２月"
    	},
    	{
    		r: 2995,
    		f: 22.34,
    		l: "パス"
    	},
    	{
    		r: 2996,
    		f: 22.33,
    		l: "ログ"
    	},
    	{
    		r: 2997,
    		f: 22.29,
    		l: "カフェ"
    	},
    	{
    		r: 2998,
    		f: 22.27,
    		l: "暮らし"
    	},
    	{
    		r: 2999,
    		f: 22.27,
    		l: "勇気"
    	},
    	{
    		r: 3000,
    		f: 22.27,
    		l: "｀"
    	},
    	{
    		r: 3001,
    		f: 22.25,
    		l: "カテゴリー"
    	},
    	{
    		r: 3002,
    		f: 22.25,
    		l: "売買"
    	},
    	{
    		r: 3003,
    		f: 22.24,
    		l: "公演"
    	},
    	{
    		r: 3004,
    		f: 22.24,
    		l: "画"
    	},
    	{
    		r: 3005,
    		f: 22.19,
    		l: "制御"
    	},
    	{
    		r: 3006,
    		f: 22.18,
    		l: "食べ物"
    	},
    	{
    		r: 3007,
    		f: 22.18,
    		l: "尋ねる"
    	},
    	{
    		r: 3008,
    		f: 22.17,
    		l: "にて"
    	},
    	{
    		r: 3009,
    		f: 22.15,
    		l: "キリスト"
    	},
    	{
    		r: 3010,
    		f: 22.14,
    		l: "レッスン"
    	},
    	{
    		r: 3011,
    		f: 22.13,
    		l: "法則"
    	},
    	{
    		r: 3012,
    		f: 22.12,
    		l: "作者"
    	},
    	{
    		r: 3013,
    		f: 22.12,
    		l: "メリット"
    	},
    	{
    		r: 3014,
    		f: 22.09,
    		l: "文句"
    	},
    	{
    		r: 3015,
    		f: 22.08,
    		l: "馬鹿"
    	},
    	{
    		r: 3016,
    		f: 22.08,
    		l: "生まれ"
    	},
    	{
    		r: 3017,
    		f: 22.08,
    		l: "失礼"
    	},
    	{
    		r: 3018,
    		f: 22.05,
    		l: "博物館"
    	},
    	{
    		r: 3019,
    		f: 22.03,
    		l: "神社"
    	},
    	{
    		r: 3020,
    		f: 22.03,
    		l: "予防"
    	},
    	{
    		r: 3021,
    		f: 22.03,
    		l: "正当"
    	},
    	{
    		r: 3022,
    		f: 22.02,
    		l: "データベース"
    	},
    	{
    		r: 3023,
    		f: 22.02,
    		l: "レス"
    	},
    	{
    		r: 3024,
    		f: 22.01,
    		l: "うん"
    	},
    	{
    		r: 3025,
    		f: 22.01,
    		l: "実家"
    	},
    	{
    		r: 3026,
    		f: 21.99,
    		l: "活性"
    	},
    	{
    		r: 3027,
    		f: 21.99,
    		l: "受信"
    	},
    	{
    		r: 3028,
    		f: 21.98,
    		l: "山本"
    	},
    	{
    		r: 3029,
    		f: 21.97,
    		l: "自主"
    	},
    	{
    		r: 3030,
    		f: 21.96,
    		l: "アンケート"
    	},
    	{
    		r: 3031,
    		f: 21.96,
    		l: "確率"
    	},
    	{
    		r: 3032,
    		f: 21.95,
    		l: "表明"
    	},
    	{
    		r: 3033,
    		f: 21.94,
    		l: "美術館"
    	},
    	{
    		r: 3034,
    		f: 21.93,
    		l: "解消"
    	},
    	{
    		r: 3035,
    		f: 21.92,
    		l: "オフィス"
    	},
    	{
    		r: 3036,
    		f: 21.92,
    		l: "座"
    	},
    	{
    		r: 3037,
    		f: 21.91,
    		l: "苦手"
    	},
    	{
    		r: 3038,
    		f: 21.91,
    		l: "爆発"
    	},
    	{
    		r: 3039,
    		f: 21.9,
    		l: "欧米"
    	},
    	{
    		r: 3040,
    		f: 21.9,
    		l: "肌"
    	},
    	{
    		r: 3041,
    		f: 21.89,
    		l: "信仰"
    	},
    	{
    		r: 3042,
    		f: 21.88,
    		l: "タイミング"
    	},
    	{
    		r: 3043,
    		f: 21.88,
    		l: "現行"
    	},
    	{
    		r: 3044,
    		f: 21.87,
    		l: "降りる"
    	},
    	{
    		r: 3045,
    		f: 21.86,
    		l: "解放"
    	},
    	{
    		r: 3046,
    		f: 21.86,
    		l: "カバー"
    	},
    	{
    		r: 3047,
    		f: 21.75,
    		l: "ペ"
    	},
    	{
    		r: 3048,
    		f: 21.75,
    		l: "発電"
    	},
    	{
    		r: 3049,
    		f: 21.73,
    		l: "カット"
    	},
    	{
    		r: 3050,
    		f: 21.71,
    		l: "デモ"
    	},
    	{
    		r: 3051,
    		f: 21.7,
    		l: "損害"
    	},
    	{
    		r: 3052,
    		f: 21.68,
    		l: "小学生"
    	},
    	{
    		r: 3053,
    		f: 21.68,
    		l: "判る"
    	},
    	{
    		r: 3054,
    		f: 21.67,
    		l: "取り組み"
    	},
    	{
    		r: 3055,
    		f: 21.67,
    		l: "満たす"
    	},
    	{
    		r: 3056,
    		f: 21.66,
    		l: "トレーニング"
    	},
    	{
    		r: 3057,
    		f: 21.66,
    		l: "アフリカ"
    	},
    	{
    		r: 3058,
    		f: 21.65,
    		l: "踊る"
    	},
    	{
    		r: 3059,
    		f: 21.64,
    		l: "悪"
    	},
    	{
    		r: 3060,
    		f: 21.63,
    		l: "妹"
    	},
    	{
    		r: 3061,
    		f: 21.63,
    		l: "競馬"
    	},
    	{
    		r: 3062,
    		f: 21.63,
    		l: "運命"
    	},
    	{
    		r: 3063,
    		f: 21.6,
    		l: "個々"
    	},
    	{
    		r: 3064,
    		f: 21.6,
    		l: "噂"
    	},
    	{
    		r: 3065,
    		f: 21.59,
    		l: "コンピューター"
    	},
    	{
    		r: 3066,
    		f: 21.59,
    		l: "３つ"
    	},
    	{
    		r: 3067,
    		f: 21.59,
    		l: "経費"
    	},
    	{
    		r: 3068,
    		f: 21.59,
    		l: "アル"
    	},
    	{
    		r: 3069,
    		f: 21.58,
    		l: "招く"
    	},
    	{
    		r: 3070,
    		f: 21.58,
    		l: "ええ"
    	},
    	{
    		r: 3071,
    		f: 21.57,
    		l: "本書"
    	},
    	{
    		r: 3072,
    		f: 21.57,
    		l: "週刊"
    	},
    	{
    		r: 3073,
    		f: 21.57,
    		l: "建てる"
    	},
    	{
    		r: 3074,
    		f: 21.55,
    		l: "原"
    	},
    	{
    		r: 3075,
    		f: 21.55,
    		l: "仕様"
    	},
    	{
    		r: 3076,
    		f: 21.55,
    		l: "マンガ"
    	},
    	{
    		r: 3077,
    		f: 21.54,
    		l: "園"
    	},
    	{
    		r: 3078,
    		f: 21.54,
    		l: "電力"
    	},
    	{
    		r: 3079,
    		f: 21.52,
    		l: "オフ"
    	},
    	{
    		r: 3080,
    		f: 21.51,
    		l: "発達"
    	},
    	{
    		r: 3081,
    		f: 21.51,
    		l: "来"
    	},
    	{
    		r: 3082,
    		f: 21.49,
    		l: "矛盾"
    	},
    	{
    		r: 3083,
    		f: 21.48,
    		l: "ハウス"
    	},
    	{
    		r: 3084,
    		f: 21.48,
    		l: "性能"
    	},
    	{
    		r: 3085,
    		f: 21.48,
    		l: "立派"
    	},
    	{
    		r: 3086,
    		f: 21.45,
    		l: "役員"
    	},
    	{
    		r: 3087,
    		f: 21.45,
    		l: "大いに"
    	},
    	{
    		r: 3088,
    		f: 21.44,
    		l: "影"
    	},
    	{
    		r: 3089,
    		f: 21.44,
    		l: "象徴"
    	},
    	{
    		r: 3090,
    		f: 21.44,
    		l: "性質"
    	},
    	{
    		r: 3091,
    		f: 21.43,
    		l: "送信"
    	},
    	{
    		r: 3092,
    		f: 21.43,
    		l: "勝"
    	},
    	{
    		r: 3093,
    		f: 21.42,
    		l: "わが国"
    	},
    	{
    		r: 3094,
    		f: 21.4,
    		l: "あえて"
    	},
    	{
    		r: 3095,
    		f: 21.39,
    		l: "あー"
    	},
    	{
    		r: 3096,
    		f: 21.39,
    		l: "上手"
    	},
    	{
    		r: 3097,
    		f: 21.38,
    		l: "圧力"
    	},
    	{
    		r: 3098,
    		f: 21.37,
    		l: "風邪"
    	},
    	{
    		r: 3099,
    		f: 21.36,
    		l: "アウト"
    	},
    	{
    		r: 3100,
    		f: 21.35,
    		l: "スキル"
    	},
    	{
    		r: 3101,
    		f: 21.33,
    		l: "得意"
    	},
    	{
    		r: 3102,
    		f: 21.31,
    		l: "温度"
    	},
    	{
    		r: 3103,
    		f: 21.3,
    		l: "初心者"
    	},
    	{
    		r: 3104,
    		f: 21.3,
    		l: "一生懸命"
    	},
    	{
    		r: 3105,
    		f: 21.29,
    		l: "香港"
    	},
    	{
    		r: 3106,
    		f: 21.28,
    		l: "急ぐ"
    	},
    	{
    		r: 3107,
    		f: 21.28,
    		l: "必死"
    	},
    	{
    		r: 3108,
    		f: 21.27,
    		l: "ラーメン"
    	},
    	{
    		r: 3109,
    		f: 21.27,
    		l: "わざわざ"
    	},
    	{
    		r: 3110,
    		f: 21.25,
    		l: "そうすると"
    	},
    	{
    		r: 3111,
    		f: 21.24,
    		l: "ゴミ"
    	},
    	{
    		r: 3112,
    		f: 21.24,
    		l: "ギター"
    	},
    	{
    		r: 3113,
    		f: 21.24,
    		l: "だける"
    	},
    	{
    		r: 3114,
    		f: 21.24,
    		l: "具合"
    	},
    	{
    		r: 3115,
    		f: 21.23,
    		l: "橋"
    	},
    	{
    		r: 3116,
    		f: 21.2,
    		l: "神経"
    	},
    	{
    		r: 3117,
    		f: 21.2,
    		l: "作用"
    	},
    	{
    		r: 3118,
    		f: 21.19,
    		l: "いわば"
    	},
    	{
    		r: 3119,
    		f: 21.18,
    		l: "庭"
    	},
    	{
    		r: 3120,
    		f: 21.18,
    		l: "本物"
    	},
    	{
    		r: 3121,
    		f: 21.17,
    		l: "過ぎ"
    	},
    	{
    		r: 3122,
    		f: 21.16,
    		l: "意義"
    	},
    	{
    		r: 3123,
    		f: 21.14,
    		l: "抑える"
    	},
    	{
    		r: 3124,
    		f: 21.14,
    		l: "新宿"
    	},
    	{
    		r: 3125,
    		f: 21.12,
    		l: "ライフ"
    	},
    	{
    		r: 3126,
    		f: 21.12,
    		l: "延長"
    	},
    	{
    		r: 3127,
    		f: 21.11,
    		l: "観客"
    	},
    	{
    		r: 3128,
    		f: 21.08,
    		l: "ＮＨＫ"
    	},
    	{
    		r: 3129,
    		f: 21.05,
    		l: "深刻"
    	},
    	{
    		r: 3130,
    		f: 21.05,
    		l: "ｍ"
    	},
    	{
    		r: 3131,
    		f: 21.05,
    		l: "ファンド"
    	},
    	{
    		r: 3132,
    		f: 21.04,
    		l: "恐ろしい"
    	},
    	{
    		r: 3133,
    		f: 21.03,
    		l: "路線"
    	},
    	{
    		r: 3134,
    		f: 21.03,
    		l: "又"
    	},
    	{
    		r: 3135,
    		f: 21.02,
    		l: "マシン"
    	},
    	{
    		r: 3136,
    		f: 21.02,
    		l: "武器"
    	},
    	{
    		r: 3137,
    		f: 21,
    		l: "取締役"
    	},
    	{
    		r: 3138,
    		f: 21,
    		l: "ほんの"
    	},
    	{
    		r: 3139,
    		f: 20.99,
    		l: "方面"
    	},
    	{
    		r: 3140,
    		f: 20.98,
    		l: "盛り上がる"
    	},
    	{
    		r: 3141,
    		f: 20.97,
    		l: "自立"
    	},
    	{
    		r: 3142,
    		f: 20.97,
    		l: "荷物"
    	},
    	{
    		r: 3143,
    		f: 20.97,
    		l: "録"
    	},
    	{
    		r: 3144,
    		f: 20.97,
    		l: "ローン"
    	},
    	{
    		r: 3145,
    		f: 20.95,
    		l: "直前"
    	},
    	{
    		r: 3146,
    		f: 20.94,
    		l: "見直し"
    	},
    	{
    		r: 3147,
    		f: 20.92,
    		l: "既存"
    	},
    	{
    		r: 3148,
    		f: 20.92,
    		l: "部品"
    	},
    	{
    		r: 3149,
    		f: 20.9,
    		l: "アイデア"
    	},
    	{
    		r: 3150,
    		f: 20.9,
    		l: "モン"
    	},
    	{
    		r: 3151,
    		f: 20.89,
    		l: "かな"
    	},
    	{
    		r: 3152,
    		f: 20.89,
    		l: "負う"
    	},
    	{
    		r: 3153,
    		f: 20.88,
    		l: "ゆう"
    	},
    	{
    		r: 3154,
    		f: 20.88,
    		l: "幹部"
    	},
    	{
    		r: 3155,
    		f: 20.88,
    		l: "相変わらず"
    	},
    	{
    		r: 3156,
    		f: 20.87,
    		l: "殆ど"
    	},
    	{
    		r: 3157,
    		f: 20.87,
    		l: "本気"
    	},
    	{
    		r: 3158,
    		f: 20.86,
    		l: "最適"
    	},
    	{
    		r: 3159,
    		f: 20.84,
    		l: "きく"
    	},
    	{
    		r: 3160,
    		f: 20.84,
    		l: "１１月"
    	},
    	{
    		r: 3161,
    		f: 20.84,
    		l: "地下"
    	},
    	{
    		r: 3162,
    		f: 20.84,
    		l: "慎重"
    	},
    	{
    		r: 3163,
    		f: 20.83,
    		l: "アート"
    	},
    	{
    		r: 3164,
    		f: 20.82,
    		l: "悩み"
    	},
    	{
    		r: 3165,
    		f: 20.8,
    		l: "ずいぶん"
    	},
    	{
    		r: 3166,
    		f: 20.8,
    		l: "もしか"
    	},
    	{
    		r: 3167,
    		f: 20.79,
    		l: "学問"
    	},
    	{
    		r: 3168,
    		f: 20.78,
    		l: "髪"
    	},
    	{
    		r: 3169,
    		f: 20.78,
    		l: "見通し"
    	},
    	{
    		r: 3170,
    		f: 20.78,
    		l: "導く"
    	},
    	{
    		r: 3171,
    		f: 20.77,
    		l: "伸ばす"
    	},
    	{
    		r: 3172,
    		f: 20.76,
    		l: "マニュアル"
    	},
    	{
    		r: 3173,
    		f: 20.76,
    		l: "進出"
    	},
    	{
    		r: 3174,
    		f: 20.76,
    		l: "劇"
    	},
    	{
    		r: 3175,
    		f: 20.76,
    		l: "為替"
    	},
    	{
    		r: 3176,
    		f: 20.75,
    		l: "久々"
    	},
    	{
    		r: 3177,
    		f: 20.75,
    		l: "エリア"
    	},
    	{
    		r: 3178,
    		f: 20.74,
    		l: "丁寧"
    	},
    	{
    		r: 3179,
    		f: 20.74,
    		l: "総裁"
    	},
    	{
    		r: 3180,
    		f: 20.73,
    		l: "視聴"
    	},
    	{
    		r: 3181,
    		f: 20.73,
    		l: "あがる"
    	},
    	{
    		r: 3182,
    		f: 20.73,
    		l: "我が"
    	},
    	{
    		r: 3183,
    		f: 20.71,
    		l: "かた"
    	},
    	{
    		r: 3184,
    		f: 20.7,
    		l: "産"
    	},
    	{
    		r: 3185,
    		f: 20.7,
    		l: "かしら"
    	},
    	{
    		r: 3186,
    		f: 20.69,
    		l: "袋"
    	},
    	{
    		r: 3187,
    		f: 20.69,
    		l: "歯"
    	},
    	{
    		r: 3188,
    		f: 20.69,
    		l: "格差"
    	},
    	{
    		r: 3189,
    		f: 20.67,
    		l: "区別"
    	},
    	{
    		r: 3190,
    		f: 20.65,
    		l: "カレー"
    	},
    	{
    		r: 3191,
    		f: 20.65,
    		l: "支払い"
    	},
    	{
    		r: 3192,
    		f: 20.65,
    		l: "塩"
    	},
    	{
    		r: 3193,
    		f: 20.64,
    		l: "休日"
    	},
    	{
    		r: 3194,
    		f: 20.64,
    		l: "当社"
    	},
    	{
    		r: 3195,
    		f: 20.63,
    		l: "解析"
    	},
    	{
    		r: 3196,
    		f: 20.62,
    		l: "課"
    	},
    	{
    		r: 3197,
    		f: 20.61,
    		l: "投げる"
    	},
    	{
    		r: 3198,
    		f: 20.61,
    		l: "上司"
    	},
    	{
    		r: 3199,
    		f: 20.59,
    		l: "耐える"
    	},
    	{
    		r: 3200,
    		f: 20.59,
    		l: "民営"
    	},
    	{
    		r: 3201,
    		f: 20.59,
    		l: "法的"
    	},
    	{
    		r: 3202,
    		f: 20.58,
    		l: "呂"
    	},
    	{
    		r: 3203,
    		f: 20.58,
    		l: "周年"
    	},
    	{
    		r: 3204,
    		f: 20.57,
    		l: "よー"
    	},
    	{
    		r: 3205,
    		f: 20.55,
    		l: "従って"
    	},
    	{
    		r: 3206,
    		f: 20.53,
    		l: "医"
    	},
    	{
    		r: 3207,
    		f: 20.52,
    		l: "吹く"
    	},
    	{
    		r: 3208,
    		f: 20.52,
    		l: "しばしば"
    	},
    	{
    		r: 3209,
    		f: 20.52,
    		l: "兄弟"
    	},
    	{
    		r: 3210,
    		f: 20.51,
    		l: "だいたい"
    	},
    	{
    		r: 3211,
    		f: 20.51,
    		l: "競技"
    	},
    	{
    		r: 3212,
    		f: 20.51,
    		l: "辺り"
    	},
    	{
    		r: 3213,
    		f: 20.48,
    		l: "弾く"
    	},
    	{
    		r: 3214,
    		f: 20.48,
    		l: "当事者"
    	},
    	{
    		r: 3215,
    		f: 20.48,
    		l: "素直"
    	},
    	{
    		r: 3216,
    		f: 20.44,
    		l: "決算"
    	},
    	{
    		r: 3217,
    		f: 20.44,
    		l: "スクール"
    	},
    	{
    		r: 3218,
    		f: 20.44,
    		l: "あたる"
    	},
    	{
    		r: 3219,
    		f: 20.43,
    		l: "はるか"
    	},
    	{
    		r: 3220,
    		f: 20.41,
    		l: "すむ"
    	},
    	{
    		r: 3221,
    		f: 20.4,
    		l: "アーティスト"
    	},
    	{
    		r: 3222,
    		f: 20.4,
    		l: "大衆"
    	},
    	{
    		r: 3223,
    		f: 20.4,
    		l: "回す"
    	},
    	{
    		r: 3224,
    		f: 20.39,
    		l: "人事"
    	},
    	{
    		r: 3225,
    		f: 20.39,
    		l: "勢力"
    	},
    	{
    		r: 3226,
    		f: 20.39,
    		l: "キャンペーン"
    	},
    	{
    		r: 3227,
    		f: 20.39,
    		l: "不正"
    	},
    	{
    		r: 3228,
    		f: 20.37,
    		l: "議長"
    	},
    	{
    		r: 3229,
    		f: 20.37,
    		l: "報酬"
    	},
    	{
    		r: 3230,
    		f: 20.37,
    		l: "マーケット"
    	},
    	{
    		r: 3231,
    		f: 20.35,
    		l: "便"
    	},
    	{
    		r: 3232,
    		f: 20.32,
    		l: "応用"
    	},
    	{
    		r: 3233,
    		f: 20.32,
    		l: "振興"
    	},
    	{
    		r: 3234,
    		f: 20.31,
    		l: "ソ連"
    	},
    	{
    		r: 3235,
    		f: 20.31,
    		l: "だんだん"
    	},
    	{
    		r: 3236,
    		f: 20.3,
    		l: "変換"
    	},
    	{
    		r: 3237,
    		f: 20.29,
    		l: "減らす"
    	},
    	{
    		r: 3238,
    		f: 20.29,
    		l: "連邦"
    	},
    	{
    		r: 3239,
    		f: 20.29,
    		l: "衝撃"
    	},
    	{
    		r: 3240,
    		f: 20.29,
    		l: "レコード"
    	},
    	{
    		r: 3241,
    		f: 20.29,
    		l: "今朝"
    	},
    	{
    		r: 3242,
    		f: 20.26,
    		l: "権限"
    	},
    	{
    		r: 3243,
    		f: 20.26,
    		l: "充分"
    	},
    	{
    		r: 3244,
    		f: 20.24,
    		l: "きわめて"
    	},
    	{
    		r: 3245,
    		f: 20.23,
    		l: "動向"
    	},
    	{
    		r: 3246,
    		f: 20.22,
    		l: "丸"
    	},
    	{
    		r: 3247,
    		f: 20.2,
    		l: "ノウハウ"
    	},
    	{
    		r: 3248,
    		f: 20.2,
    		l: "まい"
    	},
    	{
    		r: 3249,
    		f: 20.19,
    		l: "あくまで"
    	},
    	{
    		r: 3250,
    		f: 20.17,
    		l: "怒り"
    	},
    	{
    		r: 3251,
    		f: 20.17,
    		l: "掲げる"
    	},
    	{
    		r: 3252,
    		f: 20.17,
    		l: "さる"
    	},
    	{
    		r: 3253,
    		f: 20.16,
    		l: "療法"
    	},
    	{
    		r: 3254,
    		f: 20.15,
    		l: "搭載"
    	},
    	{
    		r: 3255,
    		f: 20.15,
    		l: "収益"
    	},
    	{
    		r: 3256,
    		f: 20.15,
    		l: "それだけ"
    	},
    	{
    		r: 3257,
    		f: 20.15,
    		l: "どんなに"
    	},
    	{
    		r: 3258,
    		f: 20.14,
    		l: "人数"
    	},
    	{
    		r: 3259,
    		f: 20.14,
    		l: "縁"
    	},
    	{
    		r: 3260,
    		f: 20.14,
    		l: "ほんとう"
    	},
    	{
    		r: 3261,
    		f: 20.13,
    		l: "政党"
    	},
    	{
    		r: 3262,
    		f: 20.13,
    		l: "違法"
    	},
    	{
    		r: 3263,
    		f: 20.12,
    		l: "スケジュール"
    	},
    	{
    		r: 3264,
    		f: 20.12,
    		l: "とくに"
    	},
    	{
    		r: 3265,
    		f: 20.09,
    		l: "寂しい"
    	},
    	{
    		r: 3266,
    		f: 20.09,
    		l: "来週"
    	},
    	{
    		r: 3267,
    		f: 20.09,
    		l: "オランダ"
    	},
    	{
    		r: 3268,
    		f: 20.07,
    		l: "本体"
    	},
    	{
    		r: 3269,
    		f: 20.05,
    		l: "塾"
    	},
    	{
    		r: 3270,
    		f: 20.05,
    		l: "骨"
    	},
    	{
    		r: 3271,
    		f: 20.05,
    		l: "我慢"
    	},
    	{
    		r: 3272,
    		f: 20.04,
    		l: "一生"
    	},
    	{
    		r: 3273,
    		f: 20.03,
    		l: "原作"
    	},
    	{
    		r: 3274,
    		f: 20.01,
    		l: "ベトナム"
    	},
    	{
    		r: 3275,
    		f: 20.01,
    		l: "底"
    	},
    	{
    		r: 3276,
    		f: 19.99,
    		l: "仮に"
    	},
    	{
    		r: 3277,
    		f: 19.99,
    		l: "書き込む"
    	},
    	{
    		r: 3278,
    		f: 19.99,
    		l: "ワーク"
    	},
    	{
    		r: 3279,
    		f: 19.99,
    		l: "たいへん"
    	},
    	{
    		r: 3280,
    		f: 19.99,
    		l: "強力"
    	},
    	{
    		r: 3281,
    		f: 19.98,
    		l: "お尋ね"
    	},
    	{
    		r: 3282,
    		f: 19.94,
    		l: "コミュニティ"
    	},
    	{
    		r: 3283,
    		f: 19.94,
    		l: "箇所"
    	},
    	{
    		r: 3284,
    		f: 19.94,
    		l: "達す"
    	},
    	{
    		r: 3285,
    		f: 19.94,
    		l: "族"
    	},
    	{
    		r: 3286,
    		f: 19.94,
    		l: "陥る"
    	},
    	{
    		r: 3287,
    		f: 19.93,
    		l: "貰う"
    	},
    	{
    		r: 3288,
    		f: 19.92,
    		l: "圧倒的"
    	},
    	{
    		r: 3289,
    		f: 19.92,
    		l: "高橋"
    	},
    	{
    		r: 3290,
    		f: 19.9,
    		l: "免許"
    	},
    	{
    		r: 3291,
    		f: 19.9,
    		l: "ユーロ"
    	},
    	{
    		r: 3292,
    		f: 19.88,
    		l: "付け"
    	},
    	{
    		r: 3293,
    		f: 19.88,
    		l: "港"
    	},
    	{
    		r: 3294,
    		f: 19.87,
    		l: "聖"
    	},
    	{
    		r: 3295,
    		f: 19.84,
    		l: "アドレス"
    	},
    	{
    		r: 3296,
    		f: 19.82,
    		l: "移る"
    	},
    	{
    		r: 3297,
    		f: 19.81,
    		l: "実力"
    	},
    	{
    		r: 3298,
    		f: 19.81,
    		l: "裁判官"
    	},
    	{
    		r: 3299,
    		f: 19.8,
    		l: "云う"
    	},
    	{
    		r: 3300,
    		f: 19.8,
    		l: "なぜなら"
    	},
    	{
    		r: 3301,
    		f: 19.8,
    		l: "恋人"
    	},
    	{
    		r: 3302,
    		f: 19.8,
    		l: "首都"
    	},
    	{
    		r: 3303,
    		f: 19.77,
    		l: "質疑"
    	},
    	{
    		r: 3304,
    		f: 19.76,
    		l: "なるほど"
    	},
    	{
    		r: 3305,
    		f: 19.75,
    		l: "住所"
    	},
    	{
    		r: 3306,
    		f: 19.75,
    		l: "防ぐ"
    	},
    	{
    		r: 3307,
    		f: 19.75,
    		l: "へん"
    	},
    	{
    		r: 3308,
    		f: 19.74,
    		l: "書ける"
    	},
    	{
    		r: 3309,
    		f: 19.74,
    		l: "歓迎"
    	},
    	{
    		r: 3310,
    		f: 19.74,
    		l: "なにか"
    	},
    	{
    		r: 3311,
    		f: 19.73,
    		l: "あたし"
    	},
    	{
    		r: 3312,
    		f: 19.72,
    		l: "子育て"
    	},
    	{
    		r: 3313,
    		f: 19.71,
    		l: "黒い"
    	},
    	{
    		r: 3314,
    		f: 19.7,
    		l: "懐かしい"
    	},
    	{
    		r: 3315,
    		f: 19.7,
    		l: "順"
    	},
    	{
    		r: 3316,
    		f: 19.67,
    		l: "韻"
    	},
    	{
    		r: 3317,
    		f: 19.67,
    		l: "作曲"
    	},
    	{
    		r: 3318,
    		f: 19.66,
    		l: "失業"
    	},
    	{
    		r: 3319,
    		f: 19.66,
    		l: "太郎"
    	},
    	{
    		r: 3320,
    		f: 19.65,
    		l: "ぼる"
    	},
    	{
    		r: 3321,
    		f: 19.64,
    		l: "客観"
    	},
    	{
    		r: 3322,
    		f: 19.62,
    		l: "田舎"
    	},
    	{
    		r: 3323,
    		f: 19.62,
    		l: "任せる"
    	},
    	{
    		r: 3324,
    		f: 19.61,
    		l: "鍵"
    	},
    	{
    		r: 3325,
    		f: 19.6,
    		l: "勿論"
    	},
    	{
    		r: 3326,
    		f: 19.6,
    		l: "指す"
    	},
    	{
    		r: 3327,
    		f: 19.58,
    		l: "リン"
    	},
    	{
    		r: 3328,
    		f: 19.57,
    		l: "￥"
    	},
    	{
    		r: 3329,
    		f: 19.55,
    		l: "同社"
    	},
    	{
    		r: 3330,
    		f: 19.54,
    		l: "売上"
    	},
    	{
    		r: 3331,
    		f: 19.54,
    		l: "リアル"
    	},
    	{
    		r: 3332,
    		f: 19.53,
    		l: "倫理"
    	},
    	{
    		r: 3333,
    		f: 19.52,
    		l: "中古"
    	},
    	{
    		r: 3334,
    		f: 19.5,
    		l: "卵"
    	},
    	{
    		r: 3335,
    		f: 19.5,
    		l: "見つめる"
    	},
    	{
    		r: 3336,
    		f: 19.5,
    		l: "朝日"
    	},
    	{
    		r: 3337,
    		f: 19.5,
    		l: "高級"
    	},
    	{
    		r: 3338,
    		f: 19.5,
    		l: "消す"
    	},
    	{
    		r: 3339,
    		f: 19.5,
    		l: "辞書"
    	},
    	{
    		r: 3340,
    		f: 19.49,
    		l: "市長"
    	},
    	{
    		r: 3341,
    		f: 19.49,
    		l: "一種"
    	},
    	{
    		r: 3342,
    		f: 19.48,
    		l: "入門"
    	},
    	{
    		r: 3343,
    		f: 19.48,
    		l: "そういえば"
    	},
    	{
    		r: 3344,
    		f: 19.48,
    		l: "キャラクター"
    	},
    	{
    		r: 3345,
    		f: 19.48,
    		l: "出張"
    	},
    	{
    		r: 3346,
    		f: 19.48,
    		l: "苦しい"
    	},
    	{
    		r: 3347,
    		f: 19.47,
    		l: "夕食"
    	},
    	{
    		r: 3348,
    		f: 19.45,
    		l: "叩く"
    	},
    	{
    		r: 3349,
    		f: 19.44,
    		l: "存じる"
    	},
    	{
    		r: 3350,
    		f: 19.43,
    		l: "ダウン"
    	},
    	{
    		r: 3351,
    		f: 19.43,
    		l: "深夜"
    	},
    	{
    		r: 3352,
    		f: 19.43,
    		l: "協定"
    	},
    	{
    		r: 3353,
    		f: 19.43,
    		l: "癒す"
    	},
    	{
    		r: 3354,
    		f: 19.4,
    		l: "買える"
    	},
    	{
    		r: 3355,
    		f: 19.4,
    		l: "半年"
    	},
    	{
    		r: 3356,
    		f: 19.39,
    		l: "息"
    	},
    	{
    		r: 3357,
    		f: 19.39,
    		l: "豊富"
    	},
    	{
    		r: 3358,
    		f: 19.37,
    		l: "身近"
    	},
    	{
    		r: 3359,
    		f: 19.37,
    		l: "たく"
    	},
    	{
    		r: 3360,
    		f: 19.37,
    		l: "うつ"
    	},
    	{
    		r: 3361,
    		f: 19.33,
    		l: "物件"
    	},
    	{
    		r: 3362,
    		f: 19.32,
    		l: "ハード"
    	},
    	{
    		r: 3363,
    		f: 19.31,
    		l: "余り"
    	},
    	{
    		r: 3364,
    		f: 19.29,
    		l: "着"
    	},
    	{
    		r: 3365,
    		f: 19.28,
    		l: "優秀"
    	},
    	{
    		r: 3366,
    		f: 19.26,
    		l: "加わる"
    	},
    	{
    		r: 3367,
    		f: 19.25,
    		l: "弟"
    	},
    	{
    		r: 3368,
    		f: 19.25,
    		l: "角"
    	},
    	{
    		r: 3369,
    		f: 19.25,
    		l: "面接"
    	},
    	{
    		r: 3370,
    		f: 19.24,
    		l: "部隊"
    	},
    	{
    		r: 3371,
    		f: 19.23,
    		l: "マレーシア"
    	},
    	{
    		r: 3372,
    		f: 19.23,
    		l: "すぎ"
    	},
    	{
    		r: 3373,
    		f: 19.22,
    		l: "ハワイ"
    	},
    	{
    		r: 3374,
    		f: 19.22,
    		l: "給与"
    	},
    	{
    		r: 3375,
    		f: 19.2,
    		l: "明"
    	},
    	{
    		r: 3376,
    		f: 19.19,
    		l: "尽くす"
    	},
    	{
    		r: 3377,
    		f: 19.18,
    		l: "咲く"
    	},
    	{
    		r: 3378,
    		f: 19.18,
    		l: "発音"
    	},
    	{
    		r: 3379,
    		f: 19.17,
    		l: "配布"
    	},
    	{
    		r: 3380,
    		f: 19.16,
    		l: "同意"
    	},
    	{
    		r: 3381,
    		f: 19.16,
    		l: "オススメ"
    	},
    	{
    		r: 3382,
    		f: 19.15,
    		l: "交付"
    	},
    	{
    		r: 3383,
    		f: 19.15,
    		l: "ありがたい"
    	},
    	{
    		r: 3384,
    		f: 19.14,
    		l: "ワ"
    	},
    	{
    		r: 3385,
    		f: 19.14,
    		l: "並べる"
    	},
    	{
    		r: 3386,
    		f: 19.14,
    		l: "保有"
    	},
    	{
    		r: 3387,
    		f: 19.13,
    		l: "課長"
    	},
    	{
    		r: 3388,
    		f: 19.11,
    		l: "こだわる"
    	},
    	{
    		r: 3389,
    		f: 19.11,
    		l: "体系"
    	},
    	{
    		r: 3390,
    		f: 19.09,
    		l: "ユダヤ"
    	},
    	{
    		r: 3391,
    		f: 19.08,
    		l: "同一"
    	},
    	{
    		r: 3392,
    		f: 19.07,
    		l: "加藤"
    	},
    	{
    		r: 3393,
    		f: 19.07,
    		l: "官僚"
    	},
    	{
    		r: 3394,
    		f: 19.06,
    		l: "列車"
    	},
    	{
    		r: 3395,
    		f: 19.05,
    		l: "茶"
    	},
    	{
    		r: 3396,
    		f: 19.04,
    		l: "朝日新聞"
    	},
    	{
    		r: 3397,
    		f: 19.04,
    		l: "構想"
    	},
    	{
    		r: 3398,
    		f: 19.03,
    		l: "陣"
    	},
    	{
    		r: 3399,
    		f: 19.03,
    		l: "口座"
    	},
    	{
    		r: 3400,
    		f: 19.03,
    		l: "説得"
    	},
    	{
    		r: 3401,
    		f: 19.01,
    		l: "決議"
    	},
    	{
    		r: 3402,
    		f: 19.01,
    		l: "地位"
    	},
    	{
    		r: 3403,
    		f: 18.99,
    		l: "完了"
    	},
    	{
    		r: 3404,
    		f: 18.99,
    		l: "進歩"
    	},
    	{
    		r: 3405,
    		f: 18.98,
    		l: "追求"
    	},
    	{
    		r: 3406,
    		f: 18.98,
    		l: "続き"
    	},
    	{
    		r: 3407,
    		f: 18.97,
    		l: "欄"
    	},
    	{
    		r: 3408,
    		f: 18.97,
    		l: "和"
    	},
    	{
    		r: 3409,
    		f: 18.97,
    		l: "カ月"
    	},
    	{
    		r: 3410,
    		f: 18.97,
    		l: "乗せる"
    	},
    	{
    		r: 3411,
    		f: 18.94,
    		l: "燃料"
    	},
    	{
    		r: 3412,
    		f: 18.94,
    		l: "あわせる"
    	},
    	{
    		r: 3413,
    		f: 18.94,
    		l: "ご存知"
    	},
    	{
    		r: 3414,
    		f: 18.93,
    		l: "壊れる"
    	},
    	{
    		r: 3415,
    		f: 18.93,
    		l: "排除"
    	},
    	{
    		r: 3416,
    		f: 18.93,
    		l: "ポスト"
    	},
    	{
    		r: 3417,
    		f: 18.93,
    		l: "解除"
    	},
    	{
    		r: 3418,
    		f: 18.92,
    		l: "Ｑ"
    	},
    	{
    		r: 3419,
    		f: 18.92,
    		l: "好み"
    	},
    	{
    		r: 3420,
    		f: 18.92,
    		l: "加入"
    	},
    	{
    		r: 3421,
    		f: 18.92,
    		l: "側面"
    	},
    	{
    		r: 3422,
    		f: 18.92,
    		l: "開設"
    	},
    	{
    		r: 3423,
    		f: 18.91,
    		l: "辞める"
    	},
    	{
    		r: 3424,
    		f: 18.9,
    		l: "在庫"
    	},
    	{
    		r: 3425,
    		f: 18.88,
    		l: "とらえる"
    	},
    	{
    		r: 3426,
    		f: 18.88,
    		l: "離婚"
    	},
    	{
    		r: 3427,
    		f: 18.87,
    		l: "回収"
    	},
    	{
    		r: 3428,
    		f: 18.87,
    		l: "っけ"
    	},
    	{
    		r: 3429,
    		f: 18.87,
    		l: "生む"
    	},
    	{
    		r: 3430,
    		f: 18.86,
    		l: "ドライブ"
    	},
    	{
    		r: 3431,
    		f: 18.86,
    		l: "あちこち"
    	},
    	{
    		r: 3432,
    		f: 18.85,
    		l: "鏡"
    	},
    	{
    		r: 3433,
    		f: 18.84,
    		l: "当該"
    	},
    	{
    		r: 3434,
    		f: 18.84,
    		l: "移転"
    	},
    	{
    		r: 3435,
    		f: 18.83,
    		l: "全般"
    	},
    	{
    		r: 3436,
    		f: 18.83,
    		l: "ウイルス"
    	},
    	{
    		r: 3437,
    		f: 18.82,
    		l: "全面"
    	},
    	{
    		r: 3438,
    		f: 18.81,
    		l: "非難"
    	},
    	{
    		r: 3439,
    		f: 18.81,
    		l: "修理"
    	},
    	{
    		r: 3440,
    		f: 18.79,
    		l: "集合"
    	},
    	{
    		r: 3441,
    		f: 18.78,
    		l: "誘う"
    	},
    	{
    		r: 3442,
    		f: 18.75,
    		l: "音声"
    	},
    	{
    		r: 3443,
    		f: 18.75,
    		l: "視"
    	},
    	{
    		r: 3444,
    		f: 18.75,
    		l: "施行"
    	},
    	{
    		r: 3445,
    		f: 18.75,
    		l: "増す"
    	},
    	{
    		r: 3446,
    		f: 18.73,
    		l: "共に"
    	},
    	{
    		r: 3447,
    		f: 18.72,
    		l: "効く"
    	},
    	{
    		r: 3448,
    		f: 18.72,
    		l: "カウンター"
    	},
    	{
    		r: 3449,
    		f: 18.71,
    		l: "文明"
    	},
    	{
    		r: 3450,
    		f: 18.7,
    		l: "流行"
    	},
    	{
    		r: 3451,
    		f: 18.69,
    		l: "ジャパン"
    	},
    	{
    		r: 3452,
    		f: 18.68,
    		l: "不良"
    	},
    	{
    		r: 3453,
    		f: 18.68,
    		l: "美術"
    	},
    	{
    		r: 3454,
    		f: 18.68,
    		l: "三つ"
    	},
    	{
    		r: 3455,
    		f: 18.67,
    		l: "名誉"
    	},
    	{
    		r: 3456,
    		f: 18.67,
    		l: "田"
    	},
    	{
    		r: 3457,
    		f: 18.67,
    		l: "変動"
    	},
    	{
    		r: 3458,
    		f: 18.67,
    		l: "都道府県"
    	},
    	{
    		r: 3459,
    		f: 18.67,
    		l: "ちょっとした"
    	},
    	{
    		r: 3460,
    		f: 18.67,
    		l: "逆に"
    	},
    	{
    		r: 3461,
    		f: 18.66,
    		l: "ケーキ"
    	},
    	{
    		r: 3462,
    		f: 18.65,
    		l: "受講"
    	},
    	{
    		r: 3463,
    		f: 18.65,
    		l: "商店"
    	},
    	{
    		r: 3464,
    		f: 18.63,
    		l: "伝説"
    	},
    	{
    		r: 3465,
    		f: 18.61,
    		l: "言"
    	},
    	{
    		r: 3466,
    		f: 18.6,
    		l: "堂"
    	},
    	{
    		r: 3467,
    		f: 18.59,
    		l: "輝く"
    	},
    	{
    		r: 3468,
    		f: 18.58,
    		l: "マイクロソフト"
    	},
    	{
    		r: 3469,
    		f: 18.56,
    		l: "再開"
    	},
    	{
    		r: 3470,
    		f: 18.56,
    		l: "休憩"
    	},
    	{
    		r: 3471,
    		f: 18.56,
    		l: "握る"
    	},
    	{
    		r: 3472,
    		f: 18.56,
    		l: "松本"
    	},
    	{
    		r: 3473,
    		f: 18.55,
    		l: "階級"
    	},
    	{
    		r: 3474,
    		f: 18.55,
    		l: "公的"
    	},
    	{
    		r: 3475,
    		f: 18.54,
    		l: "江戸"
    	},
    	{
    		r: 3476,
    		f: 18.54,
    		l: "キャリア"
    	},
    	{
    		r: 3477,
    		f: 18.54,
    		l: "転職"
    	},
    	{
    		r: 3478,
    		f: 18.52,
    		l: "ライト"
    	},
    	{
    		r: 3479,
    		f: 18.52,
    		l: "先進"
    	},
    	{
    		r: 3480,
    		f: 18.51,
    		l: "遺伝子"
    	},
    	{
    		r: 3481,
    		f: 18.51,
    		l: "農家"
    	},
    	{
    		r: 3482,
    		f: 18.5,
    		l: "総務"
    	},
    	{
    		r: 3483,
    		f: 18.49,
    		l: "雲"
    	},
    	{
    		r: 3484,
    		f: 18.48,
    		l: "税込"
    	},
    	{
    		r: 3485,
    		f: 18.48,
    		l: "油"
    	},
    	{
    		r: 3486,
    		f: 18.48,
    		l: "アプローチ"
    	},
    	{
    		r: 3487,
    		f: 18.48,
    		l: "濃い"
    	},
    	{
    		r: 3488,
    		f: 18.48,
    		l: "ないし"
    	},
    	{
    		r: 3489,
    		f: 18.48,
    		l: "あくまでも"
    	},
    	{
    		r: 3490,
    		f: 18.47,
    		l: "当てる"
    	},
    	{
    		r: 3491,
    		f: 18.47,
    		l: "ワールド"
    	},
    	{
    		r: 3492,
    		f: 18.47,
    		l: "お父さん"
    	},
    	{
    		r: 3493,
    		f: 18.45,
    		l: "小林"
    	},
    	{
    		r: 3494,
    		f: 18.43,
    		l: "デビュー"
    	},
    	{
    		r: 3495,
    		f: 18.43,
    		l: "紛争"
    	},
    	{
    		r: 3496,
    		f: 18.43,
    		l: "ステップ"
    	},
    	{
    		r: 3497,
    		f: 18.42,
    		l: "決意"
    	},
    	{
    		r: 3498,
    		f: 18.41,
    		l: "オン"
    	},
    	{
    		r: 3499,
    		f: 18.41,
    		l: "一杯"
    	},
    	{
    		r: 3500,
    		f: 18.4,
    		l: "移民"
    	},
    	{
    		r: 3501,
    		f: 18.4,
    		l: "ロード"
    	},
    	{
    		r: 3502,
    		f: 18.4,
    		l: "プロフィール"
    	},
    	{
    		r: 3503,
    		f: 18.4,
    		l: "ローマ"
    	},
    	{
    		r: 3504,
    		f: 18.39,
    		l: "毎週"
    	},
    	{
    		r: 3505,
    		f: 18.39,
    		l: "ダンス"
    	},
    	{
    		r: 3506,
    		f: 18.36,
    		l: "伊藤"
    	},
    	{
    		r: 3507,
    		f: 18.35,
    		l: "階段"
    	},
    	{
    		r: 3508,
    		f: 18.35,
    		l: "損"
    	},
    	{
    		r: 3509,
    		f: 18.35,
    		l: "施策"
    	},
    	{
    		r: 3510,
    		f: 18.34,
    		l: "被"
    	},
    	{
    		r: 3511,
    		f: 18.34,
    		l: "男子"
    	},
    	{
    		r: 3512,
    		f: 18.34,
    		l: "渋谷"
    	},
    	{
    		r: 3513,
    		f: 18.34,
    		l: "育児"
    	},
    	{
    		r: 3514,
    		f: 18.33,
    		l: "学部"
    	},
    	{
    		r: 3515,
    		f: 18.33,
    		l: "ボク"
    	},
    	{
    		r: 3516,
    		f: 18.33,
    		l: "懸念"
    	},
    	{
    		r: 3517,
    		f: 18.32,
    		l: "買収"
    	},
    	{
    		r: 3518,
    		f: 18.31,
    		l: "不幸"
    	},
    	{
    		r: 3519,
    		f: 18.3,
    		l: "知恵"
    	},
    	{
    		r: 3520,
    		f: 18.3,
    		l: "沿う"
    	},
    	{
    		r: 3521,
    		f: 18.3,
    		l: "冷たい"
    	},
    	{
    		r: 3522,
    		f: 18.29,
    		l: "快適"
    	},
    	{
    		r: 3523,
    		f: 18.28,
    		l: "柱"
    	},
    	{
    		r: 3524,
    		f: 18.28,
    		l: "ファッション"
    	},
    	{
    		r: 3525,
    		f: 18.28,
    		l: "パパ"
    	},
    	{
    		r: 3526,
    		f: 18.27,
    		l: "苦しむ"
    	},
    	{
    		r: 3527,
    		f: 18.26,
    		l: "軸"
    	},
    	{
    		r: 3528,
    		f: 18.26,
    		l: "畑"
    	},
    	{
    		r: 3529,
    		f: 18.25,
    		l: "行事"
    	},
    	{
    		r: 3530,
    		f: 18.24,
    		l: "金曜日"
    	},
    	{
    		r: 3531,
    		f: 18.24,
    		l: "うーん"
    	},
    	{
    		r: 3532,
    		f: 18.23,
    		l: "サイン"
    	},
    	{
    		r: 3533,
    		f: 18.23,
    		l: "考察"
    	},
    	{
    		r: 3534,
    		f: 18.21,
    		l: "リズム"
    	},
    	{
    		r: 3535,
    		f: 18.2,
    		l: "成り立つ"
    	},
    	{
    		r: 3536,
    		f: 18.19,
    		l: "ドメイン"
    	},
    	{
    		r: 3537,
    		f: 18.18,
    		l: "体調"
    	},
    	{
    		r: 3538,
    		f: 18.17,
    		l: "手数料"
    	},
    	{
    		r: 3539,
    		f: 18.16,
    		l: "例外"
    	},
    	{
    		r: 3540,
    		f: 18.16,
    		l: "兵器"
    	},
    	{
    		r: 3541,
    		f: 18.15,
    		l: "眼"
    	},
    	{
    		r: 3542,
    		f: 18.15,
    		l: "解る"
    	},
    	{
    		r: 3543,
    		f: 18.14,
    		l: "中止"
    	},
    	{
    		r: 3544,
    		f: 18.14,
    		l: "債権"
    	},
    	{
    		r: 3545,
    		f: 18.13,
    		l: "主婦"
    	},
    	{
    		r: 3546,
    		f: 18.13,
    		l: "証"
    	},
    	{
    		r: 3547,
    		f: 18.12,
    		l: "賠償"
    	},
    	{
    		r: 3548,
    		f: 18.11,
    		l: "融資"
    	},
    	{
    		r: 3549,
    		f: 18.11,
    		l: "カップ"
    	},
    	{
    		r: 3550,
    		f: 18.1,
    		l: "奥さん"
    	},
    	{
    		r: 3551,
    		f: 18.09,
    		l: "暖かい"
    	},
    	{
    		r: 3552,
    		f: 18.09,
    		l: "しょ"
    	},
    	{
    		r: 3553,
    		f: 18.08,
    		l: "理念"
    	},
    	{
    		r: 3554,
    		f: 18.08,
    		l: "発射"
    	},
    	{
    		r: 3555,
    		f: 18.08,
    		l: "‐"
    	},
    	{
    		r: 3556,
    		f: 18.07,
    		l: "公正"
    	},
    	{
    		r: 3557,
    		f: 18.07,
    		l: "マネジメント"
    	},
    	{
    		r: 3558,
    		f: 18.07,
    		l: "取り入れる"
    	},
    	{
    		r: 3559,
    		f: 18.07,
    		l: "給料"
    	},
    	{
    		r: 3560,
    		f: 18.05,
    		l: "マイル"
    	},
    	{
    		r: 3561,
    		f: 18.05,
    		l: "言い方"
    	},
    	{
    		r: 3562,
    		f: 18.05,
    		l: "繋がる"
    	},
    	{
    		r: 3563,
    		f: 18.05,
    		l: "ほんと"
    	},
    	{
    		r: 3564,
    		f: 18.03,
    		l: "前日"
    	},
    	{
    		r: 3565,
    		f: 18.03,
    		l: "洗濯"
    	},
    	{
    		r: 3566,
    		f: 18.02,
    		l: "暇"
    	},
    	{
    		r: 3567,
    		f: 18,
    		l: "すねる"
    	},
    	{
    		r: 3568,
    		f: 17.99,
    		l: "アイテム"
    	},
    	{
    		r: 3569,
    		f: 17.99,
    		l: "疑う"
    	},
    	{
    		r: 3570,
    		f: 17.98,
    		l: "商売"
    	},
    	{
    		r: 3571,
    		f: 17.98,
    		l: "グローバル"
    	},
    	{
    		r: 3572,
    		f: 17.96,
    		l: "恐らく"
    	},
    	{
    		r: 3573,
    		f: 17.96,
    		l: "科目"
    	},
    	{
    		r: 3574,
    		f: 17.96,
    		l: "連"
    	},
    	{
    		r: 3575,
    		f: 17.96,
    		l: "短期"
    	},
    	{
    		r: 3576,
    		f: 17.95,
    		l: "特性"
    	},
    	{
    		r: 3577,
    		f: 17.95,
    		l: "復帰"
    	},
    	{
    		r: 3578,
    		f: 17.94,
    		l: "付近"
    	},
    	{
    		r: 3579,
    		f: 17.93,
    		l: "廃棄"
    	},
    	{
    		r: 3580,
    		f: 17.92,
    		l: "門"
    	},
    	{
    		r: 3581,
    		f: 17.92,
    		l: "素人"
    	},
    	{
    		r: 3582,
    		f: 17.91,
    		l: "犯人"
    	},
    	{
    		r: 3583,
    		f: 17.9,
    		l: "盤"
    	},
    	{
    		r: 3584,
    		f: 17.9,
    		l: "北京"
    	},
    	{
    		r: 3585,
    		f: 17.9,
    		l: "永遠"
    	},
    	{
    		r: 3586,
    		f: 17.89,
    		l: "まち"
    	},
    	{
    		r: 3587,
    		f: 17.88,
    		l: "ブーム"
    	},
    	{
    		r: 3588,
    		f: 17.88,
    		l: "念"
    	},
    	{
    		r: 3589,
    		f: 17.88,
    		l: "尊重"
    	},
    	{
    		r: 3590,
    		f: 17.87,
    		l: "古代"
    	},
    	{
    		r: 3591,
    		f: 17.87,
    		l: "ブルー"
    	},
    	{
    		r: 3592,
    		f: 17.87,
    		l: "帝国"
    	},
    	{
    		r: 3593,
    		f: 17.86,
    		l: "冒頭"
    	},
    	{
    		r: 3594,
    		f: 17.83,
    		l: "マスター"
    	},
    	{
    		r: 3595,
    		f: 17.82,
    		l: "郵政"
    	},
    	{
    		r: 3596,
    		f: 17.82,
    		l: "体重"
    	},
    	{
    		r: 3597,
    		f: 17.8,
    		l: "随分"
    	},
    	{
    		r: 3598,
    		f: 17.79,
    		l: "本件"
    	},
    	{
    		r: 3599,
    		f: 17.78,
    		l: "有"
    	},
    	{
    		r: 3600,
    		f: 17.78,
    		l: "通貨"
    	},
    	{
    		r: 3601,
    		f: 17.77,
    		l: "木村"
    	},
    	{
    		r: 3602,
    		f: 17.75,
    		l: "動画"
    	},
    	{
    		r: 3603,
    		f: 17.74,
    		l: "バブル"
    	},
    	{
    		r: 3604,
    		f: 17.73,
    		l: "龍"
    	},
    	{
    		r: 3605,
    		f: 17.72,
    		l: "ルート"
    	},
    	{
    		r: 3606,
    		f: 17.71,
    		l: "上海"
    	},
    	{
    		r: 3607,
    		f: 17.68,
    		l: "財"
    	},
    	{
    		r: 3608,
    		f: 17.68,
    		l: "人工"
    	},
    	{
    		r: 3609,
    		f: 17.67,
    		l: "気温"
    	},
    	{
    		r: 3610,
    		f: 17.67,
    		l: "適正"
    	},
    	{
    		r: 3611,
    		f: 17.66,
    		l: "記す"
    	},
    	{
    		r: 3612,
    		f: 17.66,
    		l: "─"
    	},
    	{
    		r: 3613,
    		f: 17.65,
    		l: "新潟"
    	},
    	{
    		r: 3614,
    		f: 17.64,
    		l: "エン"
    	},
    	{
    		r: 3615,
    		f: 17.63,
    		l: "ばる"
    	},
    	{
    		r: 3616,
    		f: 17.62,
    		l: "抗議"
    	},
    	{
    		r: 3617,
    		f: 17.62,
    		l: "パフォーマンス"
    	},
    	{
    		r: 3618,
    		f: 17.61,
    		l: "広場"
    	},
    	{
    		r: 3619,
    		f: 17.61,
    		l: "台風"
    	},
    	{
    		r: 3620,
    		f: 17.59,
    		l: "徐々に"
    	},
    	{
    		r: 3621,
    		f: 17.58,
    		l: "受付"
    	},
    	{
    		r: 3622,
    		f: 17.58,
    		l: "祭り"
    	},
    	{
    		r: 3623,
    		f: 17.57,
    		l: "苦笑"
    	},
    	{
    		r: 3624,
    		f: 17.55,
    		l: "ショッピング"
    	},
    	{
    		r: 3625,
    		f: 17.54,
    		l: "ダム"
    	},
    	{
    		r: 3626,
    		f: 17.54,
    		l: "生涯"
    	},
    	{
    		r: 3627,
    		f: 17.53,
    		l: "しま"
    	},
    	{
    		r: 3628,
    		f: 17.53,
    		l: "妙"
    	},
    	{
    		r: 3629,
    		f: 17.53,
    		l: "自覚"
    	},
    	{
    		r: 3630,
    		f: 17.53,
    		l: "寄る"
    	},
    	{
    		r: 3631,
    		f: 17.51,
    		l: "比率"
    	},
    	{
    		r: 3632,
    		f: 17.5,
    		l: "拉致"
    	},
    	{
    		r: 3633,
    		f: 17.49,
    		l: "上映"
    	},
    	{
    		r: 3634,
    		f: 17.49,
    		l: "しゃべる"
    	},
    	{
    		r: 3635,
    		f: 17.47,
    		l: "ジャズ"
    	},
    	{
    		r: 3636,
    		f: 17.47,
    		l: "仏"
    	},
    	{
    		r: 3637,
    		f: 17.46,
    		l: "飾る"
    	},
    	{
    		r: 3638,
    		f: 17.45,
    		l: "再度"
    	},
    	{
    		r: 3639,
    		f: 17.42,
    		l: "観測"
    	},
    	{
    		r: 3640,
    		f: 17.42,
    		l: "誤る"
    	},
    	{
    		r: 3641,
    		f: 17.41,
    		l: "ミニ"
    	},
    	{
    		r: 3642,
    		f: 17.41,
    		l: "兄"
    	},
    	{
    		r: 3643,
    		f: 17.41,
    		l: "純粋"
    	},
    	{
    		r: 3644,
    		f: 17.4,
    		l: "拍手"
    	},
    	{
    		r: 3645,
    		f: 17.39,
    		l: "要件"
    	},
    	{
    		r: 3646,
    		f: 17.39,
    		l: "赤ちゃん"
    	},
    	{
    		r: 3647,
    		f: 17.39,
    		l: "札幌"
    	},
    	{
    		r: 3648,
    		f: 17.39,
    		l: "どころ"
    	},
    	{
    		r: 3649,
    		f: 17.36,
    		l: "数値"
    	},
    	{
    		r: 3650,
    		f: 17.36,
    		l: "基"
    	},
    	{
    		r: 3651,
    		f: 17.35,
    		l: "鼻"
    	},
    	{
    		r: 3652,
    		f: 17.35,
    		l: "保守"
    	},
    	{
    		r: 3653,
    		f: 17.35,
    		l: "どおり"
    	},
    	{
    		r: 3654,
    		f: 17.35,
    		l: "欠く"
    	},
    	{
    		r: 3655,
    		f: 17.34,
    		l: "ヨ"
    	},
    	{
    		r: 3656,
    		f: 17.34,
    		l: "おもう"
    	},
    	{
    		r: 3657,
    		f: 17.33,
    		l: "覚悟"
    	},
    	{
    		r: 3658,
    		f: 17.32,
    		l: "にわたって"
    	},
    	{
    		r: 3659,
    		f: 17.3,
    		l: "生き方"
    	},
    	{
    		r: 3660,
    		f: 17.29,
    		l: "務める"
    	},
    	{
    		r: 3661,
    		f: 17.29,
    		l: "お腹"
    	},
    	{
    		r: 3662,
    		f: 17.29,
    		l: "財源"
    	},
    	{
    		r: 3663,
    		f: 17.28,
    		l: "吉田"
    	},
    	{
    		r: 3664,
    		f: 17.28,
    		l: "たまる"
    	},
    	{
    		r: 3665,
    		f: 17.28,
    		l: "オーナー"
    	},
    	{
    		r: 3666,
    		f: 17.25,
    		l: "駄目"
    	},
    	{
    		r: 3667,
    		f: 17.25,
    		l: "そ"
    	},
    	{
    		r: 3668,
    		f: 17.23,
    		l: "経緯"
    	},
    	{
    		r: 3669,
    		f: 17.23,
    		l: "支出"
    	},
    	{
    		r: 3670,
    		f: 17.23,
    		l: "后"
    	},
    	{
    		r: 3671,
    		f: 17.22,
    		l: "やさしい"
    	},
    	{
    		r: 3672,
    		f: 17.22,
    		l: "倒れる"
    	},
    	{
    		r: 3673,
    		f: 17.22,
    		l: "疲れ"
    	},
    	{
    		r: 3674,
    		f: 17.21,
    		l: "まさか"
    	},
    	{
    		r: 3675,
    		f: 17.2,
    		l: "鬼"
    	},
    	{
    		r: 3676,
    		f: 17.2,
    		l: "べ"
    	},
    	{
    		r: 3677,
    		f: 17.19,
    		l: "Ｄ"
    	},
    	{
    		r: 3678,
    		f: 17.19,
    		l: "さえる"
    	},
    	{
    		r: 3679,
    		f: 17.19,
    		l: "対話"
    	},
    	{
    		r: 3680,
    		f: 17.19,
    		l: "ジャ"
    	},
    	{
    		r: 3681,
    		f: 17.18,
    		l: "入り口"
    	},
    	{
    		r: 3682,
    		f: 17.17,
    		l: "吸う"
    	},
    	{
    		r: 3683,
    		f: 17.17,
    		l: "Ｔ"
    	},
    	{
    		r: 3684,
    		f: 17.16,
    		l: "長年"
    	},
    	{
    		r: 3685,
    		f: 17.15,
    		l: "毎回"
    	},
    	{
    		r: 3686,
    		f: 17.15,
    		l: "返信"
    	},
    	{
    		r: 3687,
    		f: 17.15,
    		l: "会談"
    	},
    	{
    		r: 3688,
    		f: 17.15,
    		l: "ソニー"
    	},
    	{
    		r: 3689,
    		f: 17.15,
    		l: "信号"
    	},
    	{
    		r: 3690,
    		f: 17.14,
    		l: "借金"
    	},
    	{
    		r: 3691,
    		f: 17.14,
    		l: "監査"
    	},
    	{
    		r: 3692,
    		f: 17.12,
    		l: "タバコ"
    	},
    	{
    		r: 3693,
    		f: 17.12,
    		l: "溢れる"
    	},
    	{
    		r: 3694,
    		f: 17.11,
    		l: "選択肢"
    	},
    	{
    		r: 3695,
    		f: 17.11,
    		l: "囲む"
    	},
    	{
    		r: 3696,
    		f: 17.11,
    		l: "広報"
    	},
    	{
    		r: 3697,
    		f: 17.1,
    		l: "ティー"
    	},
    	{
    		r: 3698,
    		f: 17.1,
    		l: "エントリー"
    	},
    	{
    		r: 3699,
    		f: 17.1,
    		l: "付き合う"
    	},
    	{
    		r: 3700,
    		f: 17.09,
    		l: "−−"
    	},
    	{
    		r: 3701,
    		f: 17.09,
    		l: "過剰"
    	},
    	{
    		r: 3702,
    		f: 17.09,
    		l: "おめでとう"
    	},
    	{
    		r: 3703,
    		f: 17.08,
    		l: "谷"
    	},
    	{
    		r: 3704,
    		f: 17.08,
    		l: "極端"
    	},
    	{
    		r: 3705,
    		f: 17.08,
    		l: "商業"
    	},
    	{
    		r: 3706,
    		f: 17.07,
    		l: "イラン"
    	},
    	{
    		r: 3707,
    		f: 17.07,
    		l: "気味"
    	},
    	{
    		r: 3708,
    		f: 17.07,
    		l: "たっぷり"
    	},
    	{
    		r: 3709,
    		f: 17.07,
    		l: "大半"
    	},
    	{
    		r: 3710,
    		f: 17.06,
    		l: "社内"
    	},
    	{
    		r: 3711,
    		f: 17.05,
    		l: "旦那"
    	},
    	{
    		r: 3712,
    		f: 17.04,
    		l: "調達"
    	},
    	{
    		r: 3713,
    		f: 17.04,
    		l: "辞典"
    	},
    	{
    		r: 3714,
    		f: 17.02,
    		l: "担う"
    	},
    	{
    		r: 3715,
    		f: 17.01,
    		l: "正義"
    	},
    	{
    		r: 3716,
    		f: 17,
    		l: "ペット"
    	},
    	{
    		r: 3717,
    		f: 16.99,
    		l: "完璧"
    	},
    	{
    		r: 3718,
    		f: 16.99,
    		l: "世帯"
    	},
    	{
    		r: 3719,
    		f: 16.98,
    		l: "襲う"
    	},
    	{
    		r: 3720,
    		f: 16.98,
    		l: "そうそう"
    	},
    	{
    		r: 3721,
    		f: 16.98,
    		l: "審判"
    	},
    	{
    		r: 3722,
    		f: 16.97,
    		l: "くらう"
    	},
    	{
    		r: 3723,
    		f: 16.97,
    		l: "大戦"
    	},
    	{
    		r: 3724,
    		f: 16.97,
    		l: "間違える"
    	},
    	{
    		r: 3725,
    		f: 16.96,
    		l: "教材"
    	},
    	{
    		r: 3726,
    		f: 16.95,
    		l: "阪神"
    	},
    	{
    		r: 3727,
    		f: 16.95,
    		l: "後に"
    	},
    	{
    		r: 3728,
    		f: 16.94,
    		l: "上る"
    	},
    	{
    		r: 3729,
    		f: 16.94,
    		l: "外務省"
    	},
    	{
    		r: 3730,
    		f: 16.94,
    		l: "スキー"
    	},
    	{
    		r: 3731,
    		f: 16.92,
    		l: "ヒト"
    	},
    	{
    		r: 3732,
    		f: 16.91,
    		l: "たん"
    	},
    	{
    		r: 3733,
    		f: 16.9,
    		l: "制定"
    	},
    	{
    		r: 3734,
    		f: 16.9,
    		l: "才能"
    	},
    	{
    		r: 3735,
    		f: 16.88,
    		l: "発明"
    	},
    	{
    		r: 3736,
    		f: 16.87,
    		l: "そのうち"
    	},
    	{
    		r: 3737,
    		f: 16.87,
    		l: "あふれる"
    	},
    	{
    		r: 3738,
    		f: 16.86,
    		l: "ノー"
    	},
    	{
    		r: 3739,
    		f: 16.86,
    		l: "幸福"
    	},
    	{
    		r: 3740,
    		f: 16.86,
    		l: "通知"
    	},
    	{
    		r: 3741,
    		f: 16.85,
    		l: "汚染"
    	},
    	{
    		r: 3742,
    		f: 16.84,
    		l: "クリア"
    	},
    	{
    		r: 3743,
    		f: 16.84,
    		l: "体力"
    	},
    	{
    		r: 3744,
    		f: 16.83,
    		l: "見直す"
    	},
    	{
    		r: 3745,
    		f: 16.82,
    		l: "邪魔"
    	},
    	{
    		r: 3746,
    		f: 16.81,
    		l: "冷静"
    	},
    	{
    		r: 3747,
    		f: 16.81,
    		l: "込む"
    	},
    	{
    		r: 3748,
    		f: 16.81,
    		l: "血液"
    	},
    	{
    		r: 3749,
    		f: 16.8,
    		l: "サラリーマン"
    	},
    	{
    		r: 3750,
    		f: 16.79,
    		l: "地上"
    	},
    	{
    		r: 3751,
    		f: 16.78,
    		l: "まわり"
    	},
    	{
    		r: 3752,
    		f: 16.78,
    		l: "Ｆ"
    	},
    	{
    		r: 3753,
    		f: 16.76,
    		l: "通勤"
    	},
    	{
    		r: 3754,
    		f: 16.76,
    		l: "反論"
    	},
    	{
    		r: 3755,
    		f: 16.75,
    		l: "キャンプ"
    	},
    	{
    		r: 3756,
    		f: 16.75,
    		l: "あり"
    	},
    	{
    		r: 3757,
    		f: 16.73,
    		l: "青い"
    	},
    	{
    		r: 3758,
    		f: 16.73,
    		l: "味わう"
    	},
    	{
    		r: 3759,
    		f: 16.71,
    		l: "コンビニ"
    	},
    	{
    		r: 3760,
    		f: 16.71,
    		l: "幅広い"
    	},
    	{
    		r: 3761,
    		f: 16.71,
    		l: "オリンピック"
    	},
    	{
    		r: 3762,
    		f: 16.7,
    		l: "正常"
    	},
    	{
    		r: 3763,
    		f: 16.7,
    		l: "人格"
    	},
    	{
    		r: 3764,
    		f: 16.69,
    		l: "独特"
    	},
    	{
    		r: 3765,
    		f: 16.69,
    		l: "意欲"
    	},
    	{
    		r: 3766,
    		f: 16.68,
    		l: "パーティ"
    	},
    	{
    		r: 3767,
    		f: 16.67,
    		l: "開放"
    	},
    	{
    		r: 3768,
    		f: 16.67,
    		l: "ＴＶ"
    	},
    	{
    		r: 3769,
    		f: 16.67,
    		l: "中国人"
    	},
    	{
    		r: 3770,
    		f: 16.66,
    		l: "面積"
    	},
    	{
    		r: 3771,
    		f: 16.66,
    		l: "熱心"
    	},
    	{
    		r: 3772,
    		f: 16.66,
    		l: "さす"
    	},
    	{
    		r: 3773,
    		f: 16.64,
    		l: "だらけ"
    	},
    	{
    		r: 3774,
    		f: 16.63,
    		l: "オプション"
    	},
    	{
    		r: 3775,
    		f: 16.62,
    		l: "サーバ"
    	},
    	{
    		r: 3776,
    		f: 16.62,
    		l: "原子力"
    	},
    	{
    		r: 3777,
    		f: 16.62,
    		l: "分離"
    	},
    	{
    		r: 3778,
    		f: 16.62,
    		l: "段"
    	},
    	{
    		r: 3779,
    		f: 16.62,
    		l: "呼吸"
    	},
    	{
    		r: 3780,
    		f: 16.61,
    		l: "日程"
    	},
    	{
    		r: 3781,
    		f: 16.61,
    		l: "移す"
    	},
    	{
    		r: 3782,
    		f: 16.61,
    		l: "最悪"
    	},
    	{
    		r: 3783,
    		f: 16.6,
    		l: "友"
    	},
    	{
    		r: 3784,
    		f: 16.6,
    		l: "さあ"
    	},
    	{
    		r: 3785,
    		f: 16.58,
    		l: "演技"
    	},
    	{
    		r: 3786,
    		f: 16.58,
    		l: "ポール"
    	},
    	{
    		r: 3787,
    		f: 16.57,
    		l: "好む"
    	},
    	{
    		r: 3788,
    		f: 16.56,
    		l: "積む"
    	},
    	{
    		r: 3789,
    		f: 16.55,
    		l: "放置"
    	},
    	{
    		r: 3790,
    		f: 16.55,
    		l: "我"
    	},
    	{
    		r: 3791,
    		f: 16.54,
    		l: "やっぱ"
    	},
    	{
    		r: 3792,
    		f: 16.54,
    		l: "イヤ"
    	},
    	{
    		r: 3793,
    		f: 16.53,
    		l: "すね"
    	},
    	{
    		r: 3794,
    		f: 16.53,
    		l: "保健"
    	},
    	{
    		r: 3795,
    		f: 16.52,
    		l: "そりゃ"
    	},
    	{
    		r: 3796,
    		f: 16.52,
    		l: "改良"
    	},
    	{
    		r: 3797,
    		f: 16.52,
    		l: "執筆"
    	},
    	{
    		r: 3798,
    		f: 16.52,
    		l: "っす"
    	},
    	{
    		r: 3799,
    		f: 16.51,
    		l: "集会"
    	},
    	{
    		r: 3800,
    		f: 16.5,
    		l: "なんとも"
    	},
    	{
    		r: 3801,
    		f: 16.5,
    		l: "店員"
    	},
    	{
    		r: 3802,
    		f: 16.49,
    		l: "気軽"
    	},
    	{
    		r: 3803,
    		f: 16.49,
    		l: "つらい"
    	},
    	{
    		r: 3804,
    		f: 16.49,
    		l: "毎月"
    	},
    	{
    		r: 3805,
    		f: 16.49,
    		l: "男の子"
    	},
    	{
    		r: 3806,
    		f: 16.49,
    		l: "分かれる"
    	},
    	{
    		r: 3807,
    		f: 16.48,
    		l: "開示"
    	},
    	{
    		r: 3808,
    		f: 16.48,
    		l: "頂ける"
    	},
    	{
    		r: 3809,
    		f: 16.48,
    		l: "アクション"
    	},
    	{
    		r: 3810,
    		f: 16.47,
    		l: "診療"
    	},
    	{
    		r: 3811,
    		f: 16.47,
    		l: "たしかに"
    	},
    	{
    		r: 3812,
    		f: 16.46,
    		l: "有する"
    	},
    	{
    		r: 3813,
    		f: 16.46,
    		l: "悪化"
    	},
    	{
    		r: 3814,
    		f: 16.45,
    		l: "両者"
    	},
    	{
    		r: 3815,
    		f: 16.45,
    		l: "フィルム"
    	},
    	{
    		r: 3816,
    		f: 16.45,
    		l: "見れる"
    	},
    	{
    		r: 3817,
    		f: 16.45,
    		l: "拡張"
    	},
    	{
    		r: 3818,
    		f: 16.45,
    		l: "ピン"
    	},
    	{
    		r: 3819,
    		f: 16.45,
    		l: "みな"
    	},
    	{
    		r: 3820,
    		f: 16.45,
    		l: "在住"
    	},
    	{
    		r: 3821,
    		f: 16.44,
    		l: "幼稚園"
    	},
    	{
    		r: 3822,
    		f: 16.44,
    		l: "選"
    	},
    	{
    		r: 3823,
    		f: 16.44,
    		l: "目次"
    	},
    	{
    		r: 3824,
    		f: 16.43,
    		l: "済み"
    	},
    	{
    		r: 3825,
    		f: 16.43,
    		l: "出せる"
    	},
    	{
    		r: 3826,
    		f: 16.43,
    		l: "看板"
    	},
    	{
    		r: 3827,
    		f: 16.41,
    		l: "仏教"
    	},
    	{
    		r: 3828,
    		f: 16.41,
    		l: "引退"
    	},
    	{
    		r: 3829,
    		f: 16.41,
    		l: "セックス"
    	},
    	{
    		r: 3830,
    		f: 16.41,
    		l: "名称"
    	},
    	{
    		r: 3831,
    		f: 16.4,
    		l: "上位"
    	},
    	{
    		r: 3832,
    		f: 16.4,
    		l: "姉"
    	},
    	{
    		r: 3833,
    		f: 16.39,
    		l: "路"
    	},
    	{
    		r: 3834,
    		f: 16.39,
    		l: "無線"
    	},
    	{
    		r: 3835,
    		f: 16.39,
    		l: "近年"
    	},
    	{
    		r: 3836,
    		f: 16.36,
    		l: "山田"
    	},
    	{
    		r: 3837,
    		f: 16.35,
    		l: "幾つ"
    	},
    	{
    		r: 3838,
    		f: 16.34,
    		l: "文献"
    	},
    	{
    		r: 3839,
    		f: 16.33,
    		l: "空く"
    	},
    	{
    		r: 3840,
    		f: 16.32,
    		l: "引き続き"
    	},
    	{
    		r: 3841,
    		f: 16.31,
    		l: "不要"
    	},
    	{
    		r: 3842,
    		f: 16.3,
    		l: "果たして"
    	},
    	{
    		r: 3843,
    		f: 16.28,
    		l: "就任"
    	},
    	{
    		r: 3844,
    		f: 16.28,
    		l: "こむ"
    	},
    	{
    		r: 3845,
    		f: 16.28,
    		l: "椅子"
    	},
    	{
    		r: 3846,
    		f: 16.28,
    		l: "かえる"
    	},
    	{
    		r: 3847,
    		f: 16.27,
    		l: "いつか"
    	},
    	{
    		r: 3848,
    		f: 16.27,
    		l: "ゆえ"
    	},
    	{
    		r: 3849,
    		f: 16.27,
    		l: "上回る"
    	},
    	{
    		r: 3850,
    		f: 16.26,
    		l: "Ｈ"
    	},
    	{
    		r: 3851,
    		f: 16.26,
    		l: "有利"
    	},
    	{
    		r: 3852,
    		f: 16.25,
    		l: "出現"
    	},
    	{
    		r: 3853,
    		f: 16.25,
    		l: "おじさん"
    	},
    	{
    		r: 3854,
    		f: 16.25,
    		l: "感心"
    	},
    	{
    		r: 3855,
    		f: 16.24,
    		l: "連中"
    	},
    	{
    		r: 3856,
    		f: 16.23,
    		l: "庁"
    	},
    	{
    		r: 3857,
    		f: 16.22,
    		l: "心から"
    	},
    	{
    		r: 3858,
    		f: 16.22,
    		l: "いたる"
    	},
    	{
    		r: 3859,
    		f: 16.22,
    		l: "魔法"
    	},
    	{
    		r: 3860,
    		f: 16.2,
    		l: "網"
    	},
    	{
    		r: 3861,
    		f: 16.2,
    		l: "出産"
    	},
    	{
    		r: 3862,
    		f: 16.19,
    		l: "家具"
    	},
    	{
    		r: 3863,
    		f: 16.19,
    		l: "課税"
    	},
    	{
    		r: 3864,
    		f: 16.18,
    		l: "関東"
    	},
    	{
    		r: 3865,
    		f: 16.18,
    		l: "こなす"
    	},
    	{
    		r: 3866,
    		f: 16.17,
    		l: "しよう"
    	},
    	{
    		r: 3867,
    		f: 16.16,
    		l: "中田"
    	},
    	{
    		r: 3868,
    		f: 16.15,
    		l: "Ｗ杯"
    	},
    	{
    		r: 3869,
    		f: 16.15,
    		l: "イスラム"
    	},
    	{
    		r: 3870,
    		f: 16.14,
    		l: "業績"
    	},
    	{
    		r: 3871,
    		f: 16.14,
    		l: "スイス"
    	},
    	{
    		r: 3872,
    		f: 16.14,
    		l: "車両"
    	},
    	{
    		r: 3873,
    		f: 16.1,
    		l: "不可欠"
    	},
    	{
    		r: 3874,
    		f: 16.1,
    		l: "関与"
    	},
    	{
    		r: 3875,
    		f: 16.09,
    		l: "月曜日"
    	},
    	{
    		r: 3876,
    		f: 16.09,
    		l: "神奈川"
    	},
    	{
    		r: 3877,
    		f: 16.08,
    		l: "得"
    	},
    	{
    		r: 3878,
    		f: 16.07,
    		l: "プレイヤー"
    	},
    	{
    		r: 3879,
    		f: 16.07,
    		l: "中学生"
    	},
    	{
    		r: 3880,
    		f: 16.06,
    		l: "筋肉"
    	},
    	{
    		r: 3881,
    		f: 16.06,
    		l: "アパート"
    	},
    	{
    		r: 3882,
    		f: 16.05,
    		l: "サイ"
    	},
    	{
    		r: 3883,
    		f: 16.05,
    		l: "踏む"
    	},
    	{
    		r: 3884,
    		f: 16.05,
    		l: "西洋"
    	},
    	{
    		r: 3885,
    		f: 16.03,
    		l: "傷"
    	},
    	{
    		r: 3886,
    		f: 16.03,
    		l: "外す"
    	},
    	{
    		r: 3887,
    		f: 16.02,
    		l: "まして"
    	},
    	{
    		r: 3888,
    		f: 16.02,
    		l: "九州"
    	},
    	{
    		r: 3889,
    		f: 16.02,
    		l: "霊"
    	},
    	{
    		r: 3890,
    		f: 16.02,
    		l: "同時"
    	},
    	{
    		r: 3891,
    		f: 16.02,
    		l: "及ぼす"
    	},
    	{
    		r: 3892,
    		f: 16,
    		l: "スタジオ"
    	},
    	{
    		r: 3893,
    		f: 16,
    		l: "思わず"
    	},
    	{
    		r: 3894,
    		f: 16,
    		l: "真面目"
    	},
    	{
    		r: 3895,
    		f: 16,
    		l: "諦める"
    	},
    	{
    		r: 3896,
    		f: 16,
    		l: "じゃん"
    	},
    	{
    		r: 3897,
    		f: 16,
    		l: "ブロック"
    	},
    	{
    		r: 3898,
    		f: 16,
    		l: "学科"
    	},
    	{
    		r: 3899,
    		f: 15.97,
    		l: "衛生"
    	},
    	{
    		r: 3900,
    		f: 15.96,
    		l: "渡辺"
    	},
    	{
    		r: 3901,
    		f: 15.95,
    		l: "中学校"
    	},
    	{
    		r: 3902,
    		f: 15.94,
    		l: "大勢"
    	},
    	{
    		r: 3903,
    		f: 15.93,
    		l: "ゲスト"
    	},
    	{
    		r: 3904,
    		f: 15.92,
    		l: "まとも"
    	},
    	{
    		r: 3905,
    		f: 15.92,
    		l: "債務"
    	},
    	{
    		r: 3906,
    		f: 15.91,
    		l: "断る"
    	},
    	{
    		r: 3907,
    		f: 15.91,
    		l: "同僚"
    	},
    	{
    		r: 3908,
    		f: 15.9,
    		l: "持てる"
    	},
    	{
    		r: 3909,
    		f: 15.89,
    		l: "コム"
    	},
    	{
    		r: 3910,
    		f: 15.88,
    		l: "包む"
    	},
    	{
    		r: 3911,
    		f: 15.86,
    		l: "バラ"
    	},
    	{
    		r: 3912,
    		f: 15.86,
    		l: "愛情"
    	},
    	{
    		r: 3913,
    		f: 15.84,
    		l: "洗う"
    	},
    	{
    		r: 3914,
    		f: 15.84,
    		l: "余計"
    	},
    	{
    		r: 3915,
    		f: 15.83,
    		l: "エピソード"
    	},
    	{
    		r: 3916,
    		f: 15.83,
    		l: "起動"
    	},
    	{
    		r: 3917,
    		f: 15.82,
    		l: "一見"
    	},
    	{
    		r: 3918,
    		f: 15.82,
    		l: "ワタ"
    	},
    	{
    		r: 3919,
    		f: 15.81,
    		l: "配る"
    	},
    	{
    		r: 3920,
    		f: 15.81,
    		l: "つかむ"
    	},
    	{
    		r: 3921,
    		f: 15.8,
    		l: "電源"
    	},
    	{
    		r: 3922,
    		f: 15.8,
    		l: "ひたすら"
    	},
    	{
    		r: 3923,
    		f: 15.8,
    		l: "覗く"
    	},
    	{
    		r: 3924,
    		f: 15.8,
    		l: "日銀"
    	},
    	{
    		r: 3925,
    		f: 15.79,
    		l: "疑い"
    	},
    	{
    		r: 3926,
    		f: 15.78,
    		l: "少数"
    	},
    	{
    		r: 3927,
    		f: 15.78,
    		l: "プレ"
    	},
    	{
    		r: 3928,
    		f: 15.78,
    		l: "署名"
    	},
    	{
    		r: 3929,
    		f: 15.77,
    		l: "アリ"
    	},
    	{
    		r: 3930,
    		f: 15.77,
    		l: "回避"
    	},
    	{
    		r: 3931,
    		f: 15.76,
    		l: "知り合い"
    	},
    	{
    		r: 3932,
    		f: 15.76,
    		l: "金持ち"
    	},
    	{
    		r: 3933,
    		f: 15.75,
    		l: "弁当"
    	},
    	{
    		r: 3934,
    		f: 15.74,
    		l: "センス"
    	},
    	{
    		r: 3935,
    		f: 15.74,
    		l: "ペース"
    	},
    	{
    		r: 3936,
    		f: 15.74,
    		l: "格好"
    	},
    	{
    		r: 3937,
    		f: 15.74,
    		l: "興奮"
    	},
    	{
    		r: 3938,
    		f: 15.73,
    		l: "平等"
    	},
    	{
    		r: 3939,
    		f: 15.71,
    		l: "欠ける"
    	},
    	{
    		r: 3940,
    		f: 15.71,
    		l: "パスワード"
    	},
    	{
    		r: 3941,
    		f: 15.71,
    		l: "ベンチャー"
    	},
    	{
    		r: 3942,
    		f: 15.7,
    		l: "ほんとに"
    	},
    	{
    		r: 3943,
    		f: 15.7,
    		l: "決断"
    	},
    	{
    		r: 3944,
    		f: 15.7,
    		l: "対抗"
    	},
    	{
    		r: 3945,
    		f: 15.69,
    		l: "球"
    	},
    	{
    		r: 3946,
    		f: 15.69,
    		l: "行使"
    	},
    	{
    		r: 3947,
    		f: 15.68,
    		l: "抑制"
    	},
    	{
    		r: 3948,
    		f: 15.68,
    		l: "インドネシア"
    	},
    	{
    		r: 3949,
    		f: 15.67,
    		l: "該当"
    	},
    	{
    		r: 3950,
    		f: 15.67,
    		l: "一連"
    	},
    	{
    		r: 3951,
    		f: 15.67,
    		l: "認知"
    	},
    	{
    		r: 3952,
    		f: 15.65,
    		l: "衛星"
    	},
    	{
    		r: 3953,
    		f: 15.64,
    		l: "要"
    	},
    	{
    		r: 3954,
    		f: 15.64,
    		l: "登る"
    	},
    	{
    		r: 3955,
    		f: 15.63,
    		l: "努める"
    	},
    	{
    		r: 3956,
    		f: 15.63,
    		l: "証人"
    	},
    	{
    		r: 3957,
    		f: 15.61,
    		l: "今や"
    	},
    	{
    		r: 3958,
    		f: 15.61,
    		l: "虫"
    	},
    	{
    		r: 3959,
    		f: 15.6,
    		l: "チャレンジ"
    	},
    	{
    		r: 3960,
    		f: 15.6,
    		l: "テープ"
    	},
    	{
    		r: 3961,
    		f: 15.6,
    		l: "夏休み"
    	},
    	{
    		r: 3962,
    		f: 15.6,
    		l: "通過"
    	},
    	{
    		r: 3963,
    		f: 15.59,
    		l: "他者"
    	},
    	{
    		r: 3964,
    		f: 15.59,
    		l: "平"
    	},
    	{
    		r: 3965,
    		f: 15.59,
    		l: "現金"
    	},
    	{
    		r: 3966,
    		f: 15.58,
    		l: "通う"
    	},
    	{
    		r: 3967,
    		f: 15.58,
    		l: "エッセイ"
    	},
    	{
    		r: 3968,
    		f: 15.58,
    		l: "経由"
    	},
    	{
    		r: 3969,
    		f: 15.58,
    		l: "パーティー"
    	},
    	{
    		r: 3970,
    		f: 15.58,
    		l: "レイ"
    	},
    	{
    		r: 3971,
    		f: 15.57,
    		l: "勝ち"
    	},
    	{
    		r: 3972,
    		f: 15.57,
    		l: "透明"
    	},
    	{
    		r: 3973,
    		f: 15.56,
    		l: "映る"
    	},
    	{
    		r: 3974,
    		f: 15.56,
    		l: "支部"
    	},
    	{
    		r: 3975,
    		f: 15.54,
    		l: "脅威"
    	},
    	{
    		r: 3976,
    		f: 15.54,
    		l: "つた"
    	},
    	{
    		r: 3977,
    		f: 15.52,
    		l: "にゃ"
    	},
    	{
    		r: 3978,
    		f: 15.52,
    		l: "デスク"
    	},
    	{
    		r: 3979,
    		f: 15.52,
    		l: "自社"
    	},
    	{
    		r: 3980,
    		f: 15.52,
    		l: "一層"
    	},
    	{
    		r: 3981,
    		f: 15.52,
    		l: "児"
    	},
    	{
    		r: 3982,
    		f: 15.51,
    		l: "親子"
    	},
    	{
    		r: 3983,
    		f: 15.5,
    		l: "期限"
    	},
    	{
    		r: 3984,
    		f: 15.5,
    		l: "新鮮"
    	},
    	{
    		r: 3985,
    		f: 15.5,
    		l: "農民"
    	},
    	{
    		r: 3986,
    		f: 15.49,
    		l: "違和感"
    	},
    	{
    		r: 3987,
    		f: 15.48,
    		l: "引っ張る"
    	},
    	{
    		r: 3988,
    		f: 15.48,
    		l: "輪"
    	},
    	{
    		r: 3989,
    		f: 15.47,
    		l: "やる気"
    	},
    	{
    		r: 3990,
    		f: 15.47,
    		l: "警告"
    	},
    	{
    		r: 3991,
    		f: 15.47,
    		l: "鉄"
    	},
    	{
    		r: 3992,
    		f: 15.46,
    		l: "宿"
    	},
    	{
    		r: 3993,
    		f: 15.45,
    		l: "ぶる"
    	},
    	{
    		r: 3994,
    		f: 15.45,
    		l: "応える"
    	},
    	{
    		r: 3995,
    		f: 15.45,
    		l: "地下鉄"
    	},
    	{
    		r: 3996,
    		f: 15.44,
    		l: "世論"
    	},
    	{
    		r: 3997,
    		f: 15.44,
    		l: "通訳"
    	},
    	{
    		r: 3998,
    		f: 15.42,
    		l: "意"
    	},
    	{
    		r: 3999,
    		f: 15.4,
    		l: "放つ"
    	},
    	{
    		r: 4000,
    		f: 15.38,
    		l: "パッケージ"
    	},
    	{
    		r: 4001,
    		f: 15.38,
    		l: "指数"
    	},
    	{
    		r: 4002,
    		f: 15.38,
    		l: "野"
    	},
    	{
    		r: 4003,
    		f: 15.35,
    		l: "ひく"
    	},
    	{
    		r: 4004,
    		f: 15.35,
    		l: "机"
    	},
    	{
    		r: 4005,
    		f: 15.34,
    		l: "了承"
    	},
    	{
    		r: 4006,
    		f: 15.34,
    		l: "お待ち"
    	},
    	{
    		r: 4007,
    		f: 15.34,
    		l: "吸収"
    	},
    	{
    		r: 4008,
    		f: 15.34,
    		l: "以後"
    	},
    	{
    		r: 4009,
    		f: 15.33,
    		l: "はかる"
    	},
    	{
    		r: 4010,
    		f: 15.33,
    		l: "柄"
    	},
    	{
    		r: 4011,
    		f: 15.33,
    		l: "数々"
    	},
    	{
    		r: 4012,
    		f: 15.31,
    		l: "巡る"
    	},
    	{
    		r: 4013,
    		f: 15.31,
    		l: "収穫"
    	},
    	{
    		r: 4014,
    		f: 15.3,
    		l: "プール"
    	},
    	{
    		r: 4015,
    		f: 15.3,
    		l: "嫌う"
    	},
    	{
    		r: 4016,
    		f: 15.29,
    		l: "自"
    	},
    	{
    		r: 4017,
    		f: 15.28,
    		l: "込める"
    	},
    	{
    		r: 4018,
    		f: 15.28,
    		l: "ですが"
    	},
    	{
    		r: 4019,
    		f: 15.28,
    		l: "肉体"
    	},
    	{
    		r: 4020,
    		f: 15.28,
    		l: "上場"
    	},
    	{
    		r: 4021,
    		f: 15.27,
    		l: "機種"
    	},
    	{
    		r: 4022,
    		f: 15.26,
    		l: "奇跡"
    	},
    	{
    		r: 4023,
    		f: 15.26,
    		l: "つなぐ"
    	},
    	{
    		r: 4024,
    		f: 15.26,
    		l: "投入"
    	},
    	{
    		r: 4025,
    		f: 15.25,
    		l: "一貫"
    	},
    	{
    		r: 4026,
    		f: 15.24,
    		l: "俳優"
    	},
    	{
    		r: 4027,
    		f: 15.24,
    		l: "先頭"
    	},
    	{
    		r: 4028,
    		f: 15.23,
    		l: "のんびり"
    	},
    	{
    		r: 4029,
    		f: 15.22,
    		l: "パート"
    	},
    	{
    		r: 4030,
    		f: 15.22,
    		l: "パートナー"
    	},
    	{
    		r: 4031,
    		f: 15.22,
    		l: "協"
    	},
    	{
    		r: 4032,
    		f: 15.21,
    		l: "背中"
    	},
    	{
    		r: 4033,
    		f: 15.21,
    		l: "埋める"
    	},
    	{
    		r: 4034,
    		f: 15.21,
    		l: "次元"
    	},
    	{
    		r: 4035,
    		f: 15.2,
    		l: "貸す"
    	},
    	{
    		r: 4036,
    		f: 15.2,
    		l: "化粧"
    	},
    	{
    		r: 4037,
    		f: 15.2,
    		l: "皮"
    	},
    	{
    		r: 4038,
    		f: 15.2,
    		l: "ルーム"
    	},
    	{
    		r: 4039,
    		f: 15.19,
    		l: "あっ"
    	},
    	{
    		r: 4040,
    		f: 15.19,
    		l: "ついでに"
    	},
    	{
    		r: 4041,
    		f: 15.19,
    		l: "商"
    	},
    	{
    		r: 4042,
    		f: 15.18,
    		l: "いかなる"
    	},
    	{
    		r: 4043,
    		f: 15.16,
    		l: "山口"
    	},
    	{
    		r: 4044,
    		f: 15.16,
    		l: "装備"
    	},
    	{
    		r: 4045,
    		f: 15.16,
    		l: "物事"
    	},
    	{
    		r: 4046,
    		f: 15.16,
    		l: "楽天"
    	},
    	{
    		r: 4047,
    		f: 15.16,
    		l: "異"
    	},
    	{
    		r: 4048,
    		f: 15.15,
    		l: "トーク"
    	},
    	{
    		r: 4049,
    		f: 15.15,
    		l: "毛"
    	},
    	{
    		r: 4050,
    		f: 15.15,
    		l: "だいぶ"
    	},
    	{
    		r: 4051,
    		f: 15.13,
    		l: "故"
    	},
    	{
    		r: 4052,
    		f: 15.12,
    		l: "ぽい"
    	},
    	{
    		r: 4053,
    		f: 15.12,
    		l: "がら"
    	},
    	{
    		r: 4054,
    		f: 15.12,
    		l: "テクノロジー"
    	},
    	{
    		r: 4055,
    		f: 15.12,
    		l: "同盟"
    	},
    	{
    		r: 4056,
    		f: 15.11,
    		l: "玄関"
    	},
    	{
    		r: 4057,
    		f: 15.11,
    		l: "扉"
    	},
    	{
    		r: 4058,
    		f: 15.11,
    		l: "兵士"
    	},
    	{
    		r: 4059,
    		f: 15.1,
    		l: "ドン"
    	},
    	{
    		r: 4060,
    		f: 15.1,
    		l: "揃う"
    	},
    	{
    		r: 4061,
    		f: 15.09,
    		l: "委託"
    	},
    	{
    		r: 4062,
    		f: 15.07,
    		l: "閲覧"
    	},
    	{
    		r: 4063,
    		f: 15.07,
    		l: "僕ら"
    	},
    	{
    		r: 4064,
    		f: 15.06,
    		l: "等々"
    	},
    	{
    		r: 4065,
    		f: 15.04,
    		l: "昼食"
    	},
    	{
    		r: 4066,
    		f: 15.03,
    		l: "光景"
    	},
    	{
    		r: 4067,
    		f: 15.03,
    		l: "カン"
    	},
    	{
    		r: 4068,
    		f: 15.02,
    		l: "入場"
    	},
    	{
    		r: 4069,
    		f: 15.02,
    		l: "救済"
    	},
    	{
    		r: 4070,
    		f: 15.02,
    		l: "カテゴリ"
    	},
    	{
    		r: 4071,
    		f: 15.01,
    		l: "記入"
    	},
    	{
    		r: 4072,
    		f: 15.01,
    		l: "作れる"
    	},
    	{
    		r: 4073,
    		f: 15.01,
    		l: "タン"
    	},
    	{
    		r: 4074,
    		f: 15,
    		l: "参拝"
    	},
    	{
    		r: 4075,
    		f: 15,
    		l: "話し合い"
    	},
    	{
    		r: 4076,
    		f: 14.99,
    		l: "入"
    	},
    	{
    		r: 4077,
    		f: 14.99,
    		l: "補償"
    	},
    	{
    		r: 4078,
    		f: 14.98,
    		l: "響く"
    	},
    	{
    		r: 4079,
    		f: 14.96,
    		l: "国籍"
    	},
    	{
    		r: 4080,
    		f: 14.96,
    		l: "重なる"
    	},
    	{
    		r: 4081,
    		f: 14.96,
    		l: "掛かる"
    	},
    	{
    		r: 4082,
    		f: 14.95,
    		l: "閉じる"
    	},
    	{
    		r: 4083,
    		f: 14.95,
    		l: "絵本"
    	},
    	{
    		r: 4084,
    		f: 14.95,
    		l: "共感"
    	},
    	{
    		r: 4085,
    		f: 14.94,
    		l: "日曜"
    	},
    	{
    		r: 4086,
    		f: 14.94,
    		l: "この世"
    	},
    	{
    		r: 4087,
    		f: 14.94,
    		l: "何人"
    	},
    	{
    		r: 4088,
    		f: 14.93,
    		l: "アルバイト"
    	},
    	{
    		r: 4089,
    		f: 14.92,
    		l: "国境"
    	},
    	{
    		r: 4090,
    		f: 14.92,
    		l: "思いつく"
    	},
    	{
    		r: 4091,
    		f: 14.92,
    		l: "申し込み"
    	},
    	{
    		r: 4092,
    		f: 14.92,
    		l: "あきらめる"
    	},
    	{
    		r: 4093,
    		f: 14.91,
    		l: "工学"
    	},
    	{
    		r: 4094,
    		f: 14.91,
    		l: "探る"
    	},
    	{
    		r: 4095,
    		f: 14.91,
    		l: "手元"
    	},
    	{
    		r: 4096,
    		f: 14.9,
    		l: "がたい"
    	},
    	{
    		r: 4097,
    		f: 14.9,
    		l: "ケア"
    	},
    	{
    		r: 4098,
    		f: 14.89,
    		l: "芸能"
    	},
    	{
    		r: 4099,
    		f: 14.89,
    		l: "そちら"
    	},
    	{
    		r: 4100,
    		f: 14.89,
    		l: "およそ"
    	},
    	{
    		r: 4101,
    		f: 14.88,
    		l: "笑い"
    	},
    	{
    		r: 4102,
    		f: 14.88,
    		l: "典型"
    	},
    	{
    		r: 4103,
    		f: 14.88,
    		l: "かわる"
    	},
    	{
    		r: 4104,
    		f: 14.87,
    		l: "双方"
    	},
    	{
    		r: 4105,
    		f: 14.87,
    		l: "マジ"
    	},
    	{
    		r: 4106,
    		f: 14.87,
    		l: "恵まれる"
    	},
    	{
    		r: 4107,
    		f: 14.87,
    		l: "ともに"
    	},
    	{
    		r: 4108,
    		f: 14.86,
    		l: "後者"
    	},
    	{
    		r: 4109,
    		f: 14.86,
    		l: "観戦"
    	},
    	{
    		r: 4110,
    		f: 14.86,
    		l: "在日"
    	},
    	{
    		r: 4111,
    		f: 14.85,
    		l: "静岡"
    	},
    	{
    		r: 4112,
    		f: 14.85,
    		l: "養成"
    	},
    	{
    		r: 4113,
    		f: 14.85,
    		l: "現役"
    	},
    	{
    		r: 4114,
    		f: 14.84,
    		l: "沖"
    	},
    	{
    		r: 4115,
    		f: 14.84,
    		l: "再現"
    	},
    	{
    		r: 4116,
    		f: 14.84,
    		l: "心臓"
    	},
    	{
    		r: 4117,
    		f: 14.82,
    		l: "尊敬"
    	},
    	{
    		r: 4118,
    		f: 14.82,
    		l: "恐れる"
    	},
    	{
    		r: 4119,
    		f: 14.82,
    		l: "女優"
    	},
    	{
    		r: 4120,
    		f: 14.81,
    		l: "ホワイト"
    	},
    	{
    		r: 4121,
    		f: 14.81,
    		l: "お話し"
    	},
    	{
    		r: 4122,
    		f: 14.81,
    		l: "武"
    	},
    	{
    		r: 4123,
    		f: 14.81,
    		l: "宮崎"
    	},
    	{
    		r: 4124,
    		f: 14.8,
    		l: "権威"
    	},
    	{
    		r: 4125,
    		f: 14.8,
    		l: "メールアドレス"
    	},
    	{
    		r: 4126,
    		f: 14.8,
    		l: "浴びる"
    	},
    	{
    		r: 4127,
    		f: 14.8,
    		l: "テクニック"
    	},
    	{
    		r: 4128,
    		f: 14.79,
    		l: "返る"
    	},
    	{
    		r: 4129,
    		f: 14.79,
    		l: "保育"
    	},
    	{
    		r: 4130,
    		f: 14.79,
    		l: "別れる"
    	},
    	{
    		r: 4131,
    		f: 14.77,
    		l: "拾う"
    	},
    	{
    		r: 4132,
    		f: 14.77,
    		l: "センチ"
    	},
    	{
    		r: 4133,
    		f: 14.76,
    		l: "税制"
    	},
    	{
    		r: 4134,
    		f: 14.75,
    		l: "おれ"
    	},
    	{
    		r: 4135,
    		f: 14.75,
    		l: "本社"
    	},
    	{
    		r: 4136,
    		f: 14.74,
    		l: "ラスト"
    	},
    	{
    		r: 4137,
    		f: 14.73,
    		l: "実用"
    	},
    	{
    		r: 4138,
    		f: 14.72,
    		l: "強"
    	},
    	{
    		r: 4139,
    		f: 14.72,
    		l: "制約"
    	},
    	{
    		r: 4140,
    		f: 14.71,
    		l: "オブ"
    	},
    	{
    		r: 4141,
    		f: 14.71,
    		l: "演劇"
    	},
    	{
    		r: 4142,
    		f: 14.7,
    		l: "人種"
    	},
    	{
    		r: 4143,
    		f: 14.7,
    		l: "条例"
    	},
    	{
    		r: 4144,
    		f: 14.7,
    		l: "有料"
    	},
    	{
    		r: 4145,
    		f: 14.7,
    		l: "審"
    	},
    	{
    		r: 4146,
    		f: 14.7,
    		l: "判定"
    	},
    	{
    		r: 4147,
    		f: 14.7,
    		l: "住まい"
    	},
    	{
    		r: 4148,
    		f: 14.69,
    		l: "占い"
    	},
    	{
    		r: 4149,
    		f: 14.69,
    		l: "瓦"
    	},
    	{
    		r: 4150,
    		f: 14.69,
    		l: "順位"
    	},
    	{
    		r: 4151,
    		f: 14.69,
    		l: "急速"
    	},
    	{
    		r: 4152,
    		f: 14.68,
    		l: "インフレ"
    	},
    	{
    		r: 4153,
    		f: 14.68,
    		l: "フォーラム"
    	},
    	{
    		r: 4154,
    		f: 14.67,
    		l: "詐欺"
    	},
    	{
    		r: 4155,
    		f: 14.67,
    		l: "可"
    	},
    	{
    		r: 4156,
    		f: 14.67,
    		l: "ヘッド"
    	},
    	{
    		r: 4157,
    		f: 14.67,
    		l: "築く"
    	},
    	{
    		r: 4158,
    		f: 14.66,
    		l: "朝食"
    	},
    	{
    		r: 4159,
    		f: 14.66,
    		l: "独占"
    	},
    	{
    		r: 4160,
    		f: 14.66,
    		l: "シナリオ"
    	},
    	{
    		r: 4161,
    		f: 14.66,
    		l: "輸送"
    	},
    	{
    		r: 4162,
    		f: 14.65,
    		l: "高等"
    	},
    	{
    		r: 4163,
    		f: 14.64,
    		l: "推測"
    	},
    	{
    		r: 4164,
    		f: 14.63,
    		l: "天然"
    	},
    	{
    		r: 4165,
    		f: 14.61,
    		l: "下手"
    	},
    	{
    		r: 4166,
    		f: 14.61,
    		l: "知人"
    	},
    	{
    		r: 4167,
    		f: 14.61,
    		l: "頻繁"
    	},
    	{
    		r: 4168,
    		f: 14.6,
    		l: "まとまる"
    	},
    	{
    		r: 4169,
    		f: 14.57,
    		l: "姫"
    	},
    	{
    		r: 4170,
    		f: 14.57,
    		l: "闇"
    	},
    	{
    		r: 4171,
    		f: 14.57,
    		l: "向き"
    	},
    	{
    		r: 4172,
    		f: 14.57,
    		l: "勝てる"
    	},
    	{
    		r: 4173,
    		f: 14.55,
    		l: "言及"
    	},
    	{
    		r: 4174,
    		f: 14.54,
    		l: "睡眠"
    	},
    	{
    		r: 4175,
    		f: 14.54,
    		l: "大学生"
    	},
    	{
    		r: 4176,
    		f: 14.54,
    		l: "解く"
    	},
    	{
    		r: 4177,
    		f: 14.54,
    		l: "提言"
    	},
    	{
    		r: 4178,
    		f: 14.53,
    		l: "自慢"
    	},
    	{
    		r: 4179,
    		f: 14.53,
    		l: "人形"
    	},
    	{
    		r: 4180,
    		f: 14.53,
    		l: "つづける"
    	},
    	{
    		r: 4181,
    		f: 14.52,
    		l: "鍋"
    	},
    	{
    		r: 4182,
    		f: 14.52,
    		l: "銀"
    	},
    	{
    		r: 4183,
    		f: 14.52,
    		l: "望ましい"
    	},
    	{
    		r: 4184,
    		f: 14.51,
    		l: "不当"
    	},
    	{
    		r: 4185,
    		f: 14.51,
    		l: "訪ねる"
    	},
    	{
    		r: 4186,
    		f: 14.51,
    		l: "毎"
    	},
    	{
    		r: 4187,
    		f: 14.51,
    		l: "持ち込む"
    	},
    	{
    		r: 4188,
    		f: 14.5,
    		l: "間に合う"
    	},
    	{
    		r: 4189,
    		f: 14.49,
    		l: "グッズ"
    	},
    	{
    		r: 4190,
    		f: 14.49,
    		l: "展望"
    	},
    	{
    		r: 4191,
    		f: 14.47,
    		l: "郡"
    	},
    	{
    		r: 4192,
    		f: 14.47,
    		l: "どうせ"
    	},
    	{
    		r: 4193,
    		f: 14.46,
    		l: "国語"
    	},
    	{
    		r: 4194,
    		f: 14.46,
    		l: "職人"
    	},
    	{
    		r: 4195,
    		f: 14.45,
    		l: "試みる"
    	},
    	{
    		r: 4196,
    		f: 14.44,
    		l: "焦点"
    	},
    	{
    		r: 4197,
    		f: 14.43,
    		l: "おまえ"
    	},
    	{
    		r: 4198,
    		f: 14.42,
    		l: "総額"
    	},
    	{
    		r: 4199,
    		f: 14.42,
    		l: "食料"
    	},
    	{
    		r: 4200,
    		f: 14.42,
    		l: "銃"
    	},
    	{
    		r: 4201,
    		f: 14.42,
    		l: "井上"
    	},
    	{
    		r: 4202,
    		f: 14.41,
    		l: "フォーム"
    	},
    	{
    		r: 4203,
    		f: 14.41,
    		l: "あんた"
    	},
    	{
    		r: 4204,
    		f: 14.41,
    		l: "略"
    	},
    	{
    		r: 4205,
    		f: 14.41,
    		l: "古典"
    	},
    	{
    		r: 4206,
    		f: 14.4,
    		l: "この辺"
    	},
    	{
    		r: 4207,
    		f: 14.4,
    		l: "黙る"
    	},
    	{
    		r: 4208,
    		f: 14.39,
    		l: "テニス"
    	},
    	{
    		r: 4209,
    		f: 14.39,
    		l: "貧しい"
    	},
    	{
    		r: 4210,
    		f: 14.39,
    		l: "じっくり"
    	},
    	{
    		r: 4211,
    		f: 14.39,
    		l: "増大"
    	},
    	{
    		r: 4212,
    		f: 14.38,
    		l: "闘争"
    	},
    	{
    		r: 4213,
    		f: 14.38,
    		l: "タグ"
    	},
    	{
    		r: 4214,
    		f: 14.38,
    		l: "池田"
    	},
    	{
    		r: 4215,
    		f: 14.37,
    		l: "相対"
    	},
    	{
    		r: 4216,
    		f: 14.36,
    		l: "追記"
    	},
    	{
    		r: 4217,
    		f: 14.35,
    		l: "当選"
    	},
    	{
    		r: 4218,
    		f: 14.35,
    		l: "ランチ"
    	},
    	{
    		r: 4219,
    		f: 14.35,
    		l: "日中"
    	},
    	{
    		r: 4220,
    		f: 14.35,
    		l: "預金"
    	},
    	{
    		r: 4221,
    		f: 14.35,
    		l: "特"
    	},
    	{
    		r: 4222,
    		f: 14.34,
    		l: "オタク"
    	},
    	{
    		r: 4223,
    		f: 14.34,
    		l: "キーボード"
    	},
    	{
    		r: 4224,
    		f: 14.34,
    		l: "アピール"
    	},
    	{
    		r: 4225,
    		f: 14.34,
    		l: "組み合わせ"
    	},
    	{
    		r: 4226,
    		f: 14.34,
    		l: "金属"
    	},
    	{
    		r: 4227,
    		f: 14.33,
    		l: "産む"
    	},
    	{
    		r: 4228,
    		f: 14.33,
    		l: "はまる"
    	},
    	{
    		r: 4229,
    		f: 14.33,
    		l: "評判"
    	},
    	{
    		r: 4230,
    		f: 14.31,
    		l: "ぶつ"
    	},
    	{
    		r: 4231,
    		f: 14.31,
    		l: "レッド"
    	},
    	{
    		r: 4232,
    		f: 14.3,
    		l: "共産党"
    	},
    	{
    		r: 4233,
    		f: 14.3,
    		l: "絞る"
    	},
    	{
    		r: 4234,
    		f: 14.3,
    		l: "前年"
    	},
    	{
    		r: 4235,
    		f: 14.3,
    		l: "給付"
    	},
    	{
    		r: 4236,
    		f: 14.3,
    		l: "主演"
    	},
    	{
    		r: 4237,
    		f: 14.29,
    		l: "いかにも"
    	},
    	{
    		r: 4238,
    		f: 14.29,
    		l: "編成"
    	},
    	{
    		r: 4239,
    		f: 14.29,
    		l: "まつ"
    	},
    	{
    		r: 4240,
    		f: 14.29,
    		l: "証言"
    	},
    	{
    		r: 4241,
    		f: 14.28,
    		l: "カップル"
    	},
    	{
    		r: 4242,
    		f: 14.28,
    		l: "提起"
    	},
    	{
    		r: 4243,
    		f: 14.28,
    		l: "実務"
    	},
    	{
    		r: 4244,
    		f: 14.28,
    		l: "誇る"
    	},
    	{
    		r: 4245,
    		f: 14.26,
    		l: "提携"
    	},
    	{
    		r: 4246,
    		f: 14.26,
    		l: "損失"
    	},
    	{
    		r: 4247,
    		f: 14.25,
    		l: "太"
    	},
    	{
    		r: 4248,
    		f: 14.24,
    		l: "早期"
    	},
    	{
    		r: 4249,
    		f: 14.24,
    		l: "ポジション"
    	},
    	{
    		r: 4250,
    		f: 14.24,
    		l: "手当"
    	},
    	{
    		r: 4251,
    		f: 14.22,
    		l: "埼玉"
    	},
    	{
    		r: 4252,
    		f: 14.22,
    		l: "コーチ"
    	},
    	{
    		r: 4253,
    		f: 14.22,
    		l: "スコア"
    	},
    	{
    		r: 4254,
    		f: 14.22,
    		l: "厚い"
    	},
    	{
    		r: 4255,
    		f: 14.21,
    		l: "栄養"
    	},
    	{
    		r: 4256,
    		f: 14.21,
    		l: "結びつく"
    	},
    	{
    		r: 4257,
    		f: 14.2,
    		l: "分割"
    	},
    	{
    		r: 4258,
    		f: 14.19,
    		l: "判明"
    	},
    	{
    		r: 4259,
    		f: 14.19,
    		l: "健全"
    	},
    	{
    		r: 4260,
    		f: 14.19,
    		l: "半ば"
    	},
    	{
    		r: 4261,
    		f: 14.18,
    		l: "イラスト"
    	},
    	{
    		r: 4262,
    		f: 14.18,
    		l: "持続"
    	},
    	{
    		r: 4263,
    		f: 14.17,
    		l: "結婚式"
    	},
    	{
    		r: 4264,
    		f: 14.16,
    		l: "のる"
    	},
    	{
    		r: 4265,
    		f: 14.15,
    		l: "弁護"
    	},
    	{
    		r: 4266,
    		f: 14.15,
    		l: "妥当"
    	},
    	{
    		r: 4267,
    		f: 14.15,
    		l: "ション"
    	},
    	{
    		r: 4268,
    		f: 14.15,
    		l: "之"
    	},
    	{
    		r: 4269,
    		f: 14.14,
    		l: "豆"
    	},
    	{
    		r: 4270,
    		f: 14.14,
    		l: "臭い"
    	},
    	{
    		r: 4271,
    		f: 14.13,
    		l: "好"
    	},
    	{
    		r: 4272,
    		f: 14.13,
    		l: "ふさわしい"
    	},
    	{
    		r: 4273,
    		f: 14.13,
    		l: "控える"
    	},
    	{
    		r: 4274,
    		f: 14.13,
    		l: "宮"
    	},
    	{
    		r: 4275,
    		f: 14.13,
    		l: "仲"
    	},
    	{
    		r: 4276,
    		f: 14.12,
    		l: "えっ"
    	},
    	{
    		r: 4277,
    		f: 14.12,
    		l: "鑑賞"
    	},
    	{
    		r: 4278,
    		f: 14.12,
    		l: "オペラ"
    	},
    	{
    		r: 4279,
    		f: 14.11,
    		l: "メキシコ"
    	},
    	{
    		r: 4280,
    		f: 14.11,
    		l: "教"
    	},
    	{
    		r: 4281,
    		f: 14.11,
    		l: "評論"
    	},
    	{
    		r: 4282,
    		f: 14.1,
    		l: "わが"
    	},
    	{
    		r: 4283,
    		f: 14.1,
    		l: "後で"
    	},
    	{
    		r: 4284,
    		f: 14.1,
    		l: "覆う"
    	},
    	{
    		r: 4285,
    		f: 14.09,
    		l: "剣"
    	},
    	{
    		r: 4286,
    		f: 14.09,
    		l: "臨時"
    	},
    	{
    		r: 4287,
    		f: 14.09,
    		l: "あく"
    	},
    	{
    		r: 4288,
    		f: 14.08,
    		l: "拠点"
    	},
    	{
    		r: 4289,
    		f: 14.08,
    		l: "宿泊"
    	},
    	{
    		r: 4290,
    		f: 14.07,
    		l: "ディスク"
    	},
    	{
    		r: 4291,
    		f: 14.07,
    		l: "繊維"
    	},
    	{
    		r: 4292,
    		f: 14.06,
    		l: "ふたり"
    	},
    	{
    		r: 4293,
    		f: 14.06,
    		l: "ボード"
    	},
    	{
    		r: 4294,
    		f: 14.06,
    		l: "会合"
    	},
    	{
    		r: 4295,
    		f: 14.06,
    		l: "ジャーナリスト"
    	},
    	{
    		r: 4296,
    		f: 14.05,
    		l: "閉鎖"
    	},
    	{
    		r: 4297,
    		f: 14.05,
    		l: "話し合う"
    	},
    	{
    		r: 4298,
    		f: 14.05,
    		l: "論議"
    	},
    	{
    		r: 4299,
    		f: 14.05,
    		l: "壊す"
    	},
    	{
    		r: 4300,
    		f: 14.04,
    		l: "お昼"
    	},
    	{
    		r: 4301,
    		f: 14.04,
    		l: "座長"
    	},
    	{
    		r: 4302,
    		f: 14.03,
    		l: "天才"
    	},
    	{
    		r: 4303,
    		f: 14.02,
    		l: "サンプル"
    	},
    	{
    		r: 4304,
    		f: 14.01,
    		l: "深める"
    	},
    	{
    		r: 4305,
    		f: 14,
    		l: "いざ"
    	},
    	{
    		r: 4306,
    		f: 14,
    		l: "オー"
    	},
    	{
    		r: 4307,
    		f: 14,
    		l: "犯す"
    	},
    	{
    		r: 4308,
    		f: 13.99,
    		l: "動機"
    	},
    	{
    		r: 4309,
    		f: 13.98,
    		l: "妄想"
    	},
    	{
    		r: 4310,
    		f: 13.98,
    		l: "せめて"
    	},
    	{
    		r: 4311,
    		f: 13.97,
    		l: "長野"
    	},
    	{
    		r: 4312,
    		f: 13.96,
    		l: "がん"
    	},
    	{
    		r: 4313,
    		f: 13.96,
    		l: "働き"
    	},
    	{
    		r: 4314,
    		f: 13.96,
    		l: "堀江"
    	},
    	{
    		r: 4315,
    		f: 13.96,
    		l: "届け"
    	},
    	{
    		r: 4316,
    		f: 13.95,
    		l: "試み"
    	},
    	{
    		r: 4317,
    		f: 13.95,
    		l: "論じる"
    	},
    	{
    		r: 4318,
    		f: 13.94,
    		l: "加盟"
    	},
    	{
    		r: 4319,
    		f: 13.94,
    		l: "とどまる"
    	},
    	{
    		r: 4320,
    		f: 13.94,
    		l: "スープ"
    	},
    	{
    		r: 4321,
    		f: 13.93,
    		l: "マップ"
    	},
    	{
    		r: 4322,
    		f: 13.92,
    		l: "呼びかける"
    	},
    	{
    		r: 4323,
    		f: 13.92,
    		l: "帳"
    	},
    	{
    		r: 4324,
    		f: 13.92,
    		l: "美容"
    	},
    	{
    		r: 4325,
    		f: 13.92,
    		l: "晩"
    	},
    	{
    		r: 4326,
    		f: 13.91,
    		l: "草"
    	},
    	{
    		r: 4327,
    		f: 13.91,
    		l: "キング"
    	},
    	{
    		r: 4328,
    		f: 13.91,
    		l: "保全"
    	},
    	{
    		r: 4329,
    		f: 13.91,
    		l: "何処"
    	},
    	{
    		r: 4330,
    		f: 13.9,
    		l: "パネル"
    	},
    	{
    		r: 4331,
    		f: 13.9,
    		l: "演説"
    	},
    	{
    		r: 4332,
    		f: 13.89,
    		l: "衆議院"
    	},
    	{
    		r: 4333,
    		f: 13.88,
    		l: "中国語"
    	},
    	{
    		r: 4334,
    		f: 13.87,
    		l: "促す"
    	},
    	{
    		r: 4335,
    		f: 13.87,
    		l: "買い"
    	},
    	{
    		r: 4336,
    		f: 13.86,
    		l: "プレス"
    	},
    	{
    		r: 4337,
    		f: 13.86,
    		l: "実情"
    	},
    	{
    		r: 4338,
    		f: 13.85,
    		l: "チャンネル"
    	},
    	{
    		r: 4339,
    		f: 13.84,
    		l: "文字数"
    	},
    	{
    		r: 4340,
    		f: 13.84,
    		l: "つき"
    	},
    	{
    		r: 4341,
    		f: 13.83,
    		l: "兵"
    	},
    	{
    		r: 4342,
    		f: 13.83,
    		l: "取り出す"
    	},
    	{
    		r: 4343,
    		f: 13.81,
    		l: "東大"
    	},
    	{
    		r: 4344,
    		f: 13.8,
    		l: "雑感"
    	},
    	{
    		r: 4345,
    		f: 13.8,
    		l: "元々"
    	},
    	{
    		r: 4346,
    		f: 13.78,
    		l: "あぁ"
    	},
    	{
    		r: 4347,
    		f: 13.77,
    		l: "運転手"
    	},
    	{
    		r: 4348,
    		f: 13.76,
    		l: "フィールド"
    	},
    	{
    		r: 4349,
    		f: 13.75,
    		l: "タル"
    	},
    	{
    		r: 4350,
    		f: 13.74,
    		l: "徹底的"
    	},
    	{
    		r: 4351,
    		f: 13.74,
    		l: "造る"
    	},
    	{
    		r: 4352,
    		f: 13.73,
    		l: "あれこれ"
    	},
    	{
    		r: 4353,
    		f: 13.73,
    		l: "窓口"
    	},
    	{
    		r: 4354,
    		f: 13.73,
    		l: "打ち合わせ"
    	},
    	{
    		r: 4355,
    		f: 13.73,
    		l: "勧める"
    	},
    	{
    		r: 4356,
    		f: 13.72,
    		l: "かぶる"
    	},
    	{
    		r: 4357,
    		f: 13.71,
    		l: "愛する"
    	},
    	{
    		r: 4358,
    		f: 13.71,
    		l: "飽きる"
    	},
    	{
    		r: 4359,
    		f: 13.71,
    		l: "背"
    	},
    	{
    		r: 4360,
    		f: 13.71,
    		l: "にあたって"
    	},
    	{
    		r: 4361,
    		f: 13.7,
    		l: "お菓子"
    	},
    	{
    		r: 4362,
    		f: 13.7,
    		l: "購読"
    	},
    	{
    		r: 4363,
    		f: 13.7,
    		l: "得点"
    	},
    	{
    		r: 4364,
    		f: 13.7,
    		l: "ペン"
    	},
    	{
    		r: 4365,
    		f: 13.7,
    		l: "立法"
    	},
    	{
    		r: 4366,
    		f: 13.7,
    		l: "真ん中"
    	},
    	{
    		r: 4367,
    		f: 13.69,
    		l: "否"
    	},
    	{
    		r: 4368,
    		f: 13.68,
    		l: "遠く"
    	},
    	{
    		r: 4369,
    		f: 13.68,
    		l: "成分"
    	},
    	{
    		r: 4370,
    		f: 13.68,
    		l: "飛ばす"
    	},
    	{
    		r: 4371,
    		f: 13.66,
    		l: "国債"
    	},
    	{
    		r: 4372,
    		f: 13.66,
    		l: "とりわけ"
    	},
    	{
    		r: 4373,
    		f: 13.65,
    		l: "つづく"
    	},
    	{
    		r: 4374,
    		f: 13.65,
    		l: "コート"
    	},
    	{
    		r: 4375,
    		f: 13.64,
    		l: "推薦"
    	},
    	{
    		r: 4376,
    		f: 13.64,
    		l: "手順"
    	},
    	{
    		r: 4377,
    		f: 13.64,
    		l: "本文"
    	},
    	{
    		r: 4378,
    		f: 13.64,
    		l: "求人"
    	},
    	{
    		r: 4379,
    		f: 13.64,
    		l: "お礼"
    	},
    	{
    		r: 4380,
    		f: 13.64,
    		l: "ケーブル"
    	},
    	{
    		r: 4381,
    		f: 13.64,
    		l: "清"
    	},
    	{
    		r: 4382,
    		f: 13.64,
    		l: "屋根"
    	},
    	{
    		r: 4383,
    		f: 13.64,
    		l: "財務"
    	},
    	{
    		r: 4384,
    		f: 13.63,
    		l: "根"
    	},
    	{
    		r: 4385,
    		f: 13.63,
    		l: "サー"
    	},
    	{
    		r: 4386,
    		f: 13.62,
    		l: "突っ込む"
    	},
    	{
    		r: 4387,
    		f: 13.62,
    		l: "寺"
    	},
    	{
    		r: 4388,
    		f: 13.62,
    		l: "反発"
    	},
    	{
    		r: 4389,
    		f: 13.62,
    		l: "ヒント"
    	},
    	{
    		r: 4390,
    		f: 13.62,
    		l: "管"
    	},
    	{
    		r: 4391,
    		f: 13.62,
    		l: "巻く"
    	},
    	{
    		r: 4392,
    		f: 13.61,
    		l: "端"
    	},
    	{
    		r: 4393,
    		f: 13.6,
    		l: "福井"
    	},
    	{
    		r: 4394,
    		f: 13.6,
    		l: "゜"
    	},
    	{
    		r: 4395,
    		f: 13.59,
    		l: "放映"
    	},
    	{
    		r: 4396,
    		f: 13.59,
    		l: "豚"
    	},
    	{
    		r: 4397,
    		f: 13.58,
    		l: "支給"
    	},
    	{
    		r: 4398,
    		f: 13.58,
    		l: "ブル"
    	},
    	{
    		r: 4399,
    		f: 13.58,
    		l: "あらかじめ"
    	},
    	{
    		r: 4400,
    		f: 13.58,
    		l: "プレーヤー"
    	},
    	{
    		r: 4401,
    		f: 13.58,
    		l: "遺産"
    	},
    	{
    		r: 4402,
    		f: 13.57,
    		l: "に従って"
    	},
    	{
    		r: 4403,
    		f: 13.57,
    		l: "招待"
    	},
    	{
    		r: 4404,
    		f: 13.57,
    		l: "第三者"
    	},
    	{
    		r: 4405,
    		f: 13.57,
    		l: "無くなる"
    	},
    	{
    		r: 4406,
    		f: 13.57,
    		l: "神話"
    	},
    	{
    		r: 4407,
    		f: 13.57,
    		l: "視線"
    	},
    	{
    		r: 4408,
    		f: 13.56,
    		l: "四月"
    	},
    	{
    		r: 4409,
    		f: 13.54,
    		l: "予選"
    	},
    	{
    		r: 4410,
    		f: 13.54,
    		l: "解明"
    	},
    	{
    		r: 4411,
    		f: 13.53,
    		l: "収支"
    	},
    	{
    		r: 4412,
    		f: 13.52,
    		l: "スライド"
    	},
    	{
    		r: 4413,
    		f: 13.51,
    		l: "匂い"
    	},
    	{
    		r: 4414,
    		f: 13.51,
    		l: "前向き"
    	},
    	{
    		r: 4415,
    		f: 13.51,
    		l: "グルメ"
    	},
    	{
    		r: 4416,
    		f: 13.51,
    		l: "Ｅ"
    	},
    	{
    		r: 4417,
    		f: 13.5,
    		l: "今夜"
    	},
    	{
    		r: 4418,
    		f: 13.49,
    		l: "乾燥"
    	},
    	{
    		r: 4419,
    		f: 13.49,
    		l: "だからこそ"
    	},
    	{
    		r: 4420,
    		f: 13.49,
    		l: "適宜"
    	},
    	{
    		r: 4421,
    		f: 13.49,
    		l: "活発"
    	},
    	{
    		r: 4422,
    		f: 13.48,
    		l: "立ち上がる"
    	},
    	{
    		r: 4423,
    		f: 13.48,
    		l: "釣り"
    	},
    	{
    		r: 4424,
    		f: 13.48,
    		l: "容量"
    	},
    	{
    		r: 4425,
    		f: 13.47,
    		l: "告げる"
    	},
    	{
    		r: 4426,
    		f: 13.47,
    		l: "基金"
    	},
    	{
    		r: 4427,
    		f: 13.47,
    		l: "はじまる"
    	},
    	{
    		r: 4428,
    		f: 13.46,
    		l: "湖"
    	},
    	{
    		r: 4429,
    		f: 13.46,
    		l: "要る"
    	},
    	{
    		r: 4430,
    		f: 13.45,
    		l: "修行"
    	},
    	{
    		r: 4431,
    		f: 13.45,
    		l: "売却"
    	},
    	{
    		r: 4432,
    		f: 13.45,
    		l: "早め"
    	},
    	{
    		r: 4433,
    		f: 13.45,
    		l: "いっしょ"
    	},
    	{
    		r: 4434,
    		f: 13.45,
    		l: "飛行"
    	},
    	{
    		r: 4435,
    		f: 13.44,
    		l: "成る"
    	},
    	{
    		r: 4436,
    		f: 13.44,
    		l: "サークル"
    	},
    	{
    		r: 4437,
    		f: 13.44,
    		l: "警備"
    	},
    	{
    		r: 4438,
    		f: 13.44,
    		l: "それる"
    	},
    	{
    		r: 4439,
    		f: 13.44,
    		l: "余地"
    	},
    	{
    		r: 4440,
    		f: 13.43,
    		l: "膨大"
    	},
    	{
    		r: 4441,
    		f: 13.43,
    		l: "発送"
    	},
    	{
    		r: 4442,
    		f: 13.43,
    		l: "旨"
    	},
    	{
    		r: 4443,
    		f: 13.43,
    		l: "憧れる"
    	},
    	{
    		r: 4444,
    		f: 13.43,
    		l: "不安定"
    	},
    	{
    		r: 4445,
    		f: 13.43,
    		l: "送料"
    	},
    	{
    		r: 4446,
    		f: 13.42,
    		l: "鳴る"
    	},
    	{
    		r: 4447,
    		f: 13.42,
    		l: "リード"
    	},
    	{
    		r: 4448,
    		f: 13.41,
    		l: "民事"
    	},
    	{
    		r: 4449,
    		f: 13.41,
    		l: "トップページ"
    	},
    	{
    		r: 4450,
    		f: 13.4,
    		l: "規格"
    	},
    	{
    		r: 4451,
    		f: 13.4,
    		l: "潜在"
    	},
    	{
    		r: 4452,
    		f: 13.39,
    		l: "景色"
    	},
    	{
    		r: 4453,
    		f: 13.38,
    		l: "弊社"
    	},
    	{
    		r: 4454,
    		f: 13.38,
    		l: "脇"
    	},
    	{
    		r: 4455,
    		f: 13.38,
    		l: "さっそく"
    	},
    	{
    		r: 4456,
    		f: 13.38,
    		l: "配分"
    	},
    	{
    		r: 4457,
    		f: 13.37,
    		l: "店長"
    	},
    	{
    		r: 4458,
    		f: 13.37,
    		l: "長崎"
    	},
    	{
    		r: 4459,
    		f: 13.36,
    		l: "見守る"
    	},
    	{
    		r: 4460,
    		f: 13.36,
    		l: "国土"
    	},
    	{
    		r: 4461,
    		f: 13.35,
    		l: "ごめんなさい"
    	},
    	{
    		r: 4462,
    		f: 13.34,
    		l: "パック"
    	},
    	{
    		r: 4463,
    		f: 13.34,
    		l: "おこなう"
    	},
    	{
    		r: 4464,
    		f: 13.33,
    		l: "古"
    	},
    	{
    		r: 4465,
    		f: 13.33,
    		l: "コンサルタント"
    	},
    	{
    		r: 4466,
    		f: 13.32,
    		l: "擁護"
    	},
    	{
    		r: 4467,
    		f: 13.31,
    		l: "突破"
    	},
    	{
    		r: 4468,
    		f: 13.3,
    		l: "いれる"
    	},
    	{
    		r: 4469,
    		f: 13.3,
    		l: "ルー"
    	},
    	{
    		r: 4470,
    		f: 13.3,
    		l: "自動的"
    	},
    	{
    		r: 4471,
    		f: 13.29,
    		l: "都会"
    	},
    	{
    		r: 4472,
    		f: 13.29,
    		l: "ニュー"
    	},
    	{
    		r: 4473,
    		f: 13.28,
    		l: "偉い"
    	},
    	{
    		r: 4474,
    		f: 13.28,
    		l: "承る"
    	},
    	{
    		r: 4475,
    		f: 13.28,
    		l: "なので"
    	},
    	{
    		r: 4476,
    		f: 13.27,
    		l: "オブジェクト"
    	},
    	{
    		r: 4477,
    		f: 13.27,
    		l: "仙台"
    	},
    	{
    		r: 4478,
    		f: 13.27,
    		l: "まわる"
    	},
    	{
    		r: 4479,
    		f: 13.25,
    		l: "豪華"
    	},
    	{
    		r: 4480,
    		f: 13.25,
    		l: "やたら"
    	},
    	{
    		r: 4481,
    		f: 13.25,
    		l: "交代"
    	},
    	{
    		r: 4482,
    		f: 13.24,
    		l: "花火"
    	},
    	{
    		r: 4483,
    		f: 13.24,
    		l: "下落"
    	},
    	{
    		r: 4484,
    		f: 13.24,
    		l: "まずい"
    	},
    	{
    		r: 4485,
    		f: 13.23,
    		l: "受け止める"
    	},
    	{
    		r: 4486,
    		f: 13.23,
    		l: "引き起こす"
    	},
    	{
    		r: 4487,
    		f: 13.23,
    		l: "訂正"
    	},
    	{
    		r: 4488,
    		f: 13.23,
    		l: "回数"
    	},
    	{
    		r: 4489,
    		f: 13.22,
    		l: "ビックリ"
    	},
    	{
    		r: 4490,
    		f: 13.22,
    		l: "つながり"
    	},
    	{
    		r: 4491,
    		f: 13.21,
    		l: "ブラック"
    	},
    	{
    		r: 4492,
    		f: 13.21,
    		l: "作り出す"
    	},
    	{
    		r: 4493,
    		f: 13.21,
    		l: "度目"
    	},
    	{
    		r: 4494,
    		f: 13.2,
    		l: "確かめる"
    	},
    	{
    		r: 4495,
    		f: 13.2,
    		l: "ミーティング"
    	},
    	{
    		r: 4496,
    		f: 13.19,
    		l: "講習"
    	},
    	{
    		r: 4497,
    		f: 13.19,
    		l: "墓"
    	},
    	{
    		r: 4498,
    		f: 13.19,
    		l: "Ｇ"
    	},
    	{
    		r: 4499,
    		f: 13.18,
    		l: "ずる"
    	},
    	{
    		r: 4500,
    		f: 13.18,
    		l: "みなす"
    	},
    	{
    		r: 4501,
    		f: 13.17,
    		l: "寄付"
    	},
    	{
    		r: 4502,
    		f: 13.17,
    		l: "マネージャー"
    	},
    	{
    		r: 4503,
    		f: 13.17,
    		l: "巻き込む"
    	},
    	{
    		r: 4504,
    		f: 13.17,
    		l: "先行"
    	},
    	{
    		r: 4505,
    		f: 13.17,
    		l: "表紙"
    	},
    	{
    		r: 4506,
    		f: 13.16,
    		l: "泉"
    	},
    	{
    		r: 4507,
    		f: 13.15,
    		l: "冒険"
    	},
    	{
    		r: 4508,
    		f: 13.15,
    		l: "中継"
    	},
    	{
    		r: 4509,
    		f: 13.14,
    		l: "保持"
    	},
    	{
    		r: 4510,
    		f: 13.14,
    		l: "コンセプト"
    	},
    	{
    		r: 4511,
    		f: 13.14,
    		l: "視覚"
    	},
    	{
    		r: 4512,
    		f: 13.14,
    		l: "工作"
    	},
    	{
    		r: 4513,
    		f: 13.13,
    		l: "地獄"
    	},
    	{
    		r: 4514,
    		f: 13.13,
    		l: "大陸"
    	},
    	{
    		r: 4515,
    		f: 13.13,
    		l: "フレーム"
    	},
    	{
    		r: 4516,
    		f: 13.12,
    		l: "看護"
    	},
    	{
    		r: 4517,
    		f: 13.12,
    		l: "売り上げ"
    	},
    	{
    		r: 4518,
    		f: 13.11,
    		l: "無し"
    	},
    	{
    		r: 4519,
    		f: 13.11,
    		l: "もうすぐ"
    	},
    	{
    		r: 4520,
    		f: 13.11,
    		l: "ピーター"
    	},
    	{
    		r: 4521,
    		f: 13.11,
    		l: "角度"
    	},
    	{
    		r: 4522,
    		f: 13.11,
    		l: "控訴"
    	},
    	{
    		r: 4523,
    		f: 13.1,
    		l: "勘違い"
    	},
    	{
    		r: 4524,
    		f: 13.1,
    		l: "端末"
    	},
    	{
    		r: 4525,
    		f: 13.08,
    		l: "余る"
    	},
    	{
    		r: 4526,
    		f: 13.08,
    		l: "栽培"
    	},
    	{
    		r: 4527,
    		f: 13.08,
    		l: "定着"
    	},
    	{
    		r: 4528,
    		f: 13.08,
    		l: "必然"
    	},
    	{
    		r: 4529,
    		f: 13.08,
    		l: "触る"
    	},
    	{
    		r: 4530,
    		f: 13.07,
    		l: "かん"
    	},
    	{
    		r: 4531,
    		f: 13.06,
    		l: "ライセンス"
    	},
    	{
    		r: 4532,
    		f: 13.05,
    		l: "破る"
    	},
    	{
    		r: 4533,
    		f: 13.04,
    		l: "後悔"
    	},
    	{
    		r: 4534,
    		f: 13.04,
    		l: "出力"
    	},
    	{
    		r: 4535,
    		f: 13.04,
    		l: "想い"
    	},
    	{
    		r: 4536,
    		f: 13.04,
    		l: "指標"
    	},
    	{
    		r: 4537,
    		f: 13.04,
    		l: "オークション"
    	},
    	{
    		r: 4538,
    		f: 13.04,
    		l: "見た目"
    	},
    	{
    		r: 4539,
    		f: 13.04,
    		l: "脚本"
    	},
    	{
    		r: 4540,
    		f: 13.03,
    		l: "ランド"
    	},
    	{
    		r: 4541,
    		f: 13.02,
    		l: "順番"
    	},
    	{
    		r: 4542,
    		f: 13.02,
    		l: "疑惑"
    	},
    	{
    		r: 4543,
    		f: 13.02,
    		l: "恐れ"
    	},
    	{
    		r: 4544,
    		f: 13.02,
    		l: "応答"
    	},
    	{
    		r: 4545,
    		f: 13.01,
    		l: "語学"
    	},
    	{
    		r: 4546,
    		f: 13,
    		l: "拘束"
    	},
    	{
    		r: 4547,
    		f: 13,
    		l: "妊娠"
    	},
    	{
    		r: 4548,
    		f: 13,
    		l: "録画"
    	},
    	{
    		r: 4549,
    		f: 13,
    		l: "クラシック"
    	},
    	{
    		r: 4550,
    		f: 12.99,
    		l: "やれる"
    	},
    	{
    		r: 4551,
    		f: 12.98,
    		l: "改行"
    	},
    	{
    		r: 4552,
    		f: 12.98,
    		l: "愛知"
    	},
    	{
    		r: 4553,
    		f: 12.98,
    		l: "ベル"
    	},
    	{
    		r: 4554,
    		f: 12.98,
    		l: "ポー"
    	},
    	{
    		r: 4555,
    		f: 12.97,
    		l: "タウン"
    	},
    	{
    		r: 4556,
    		f: 12.97,
    		l: "削る"
    	},
    	{
    		r: 4557,
    		f: 12.96,
    		l: "記号"
    	},
    	{
    		r: 4558,
    		f: 12.95,
    		l: "再建"
    	},
    	{
    		r: 4559,
    		f: 12.95,
    		l: "池"
    	},
    	{
    		r: 4560,
    		f: 12.94,
    		l: "奈良"
    	},
    	{
    		r: 4561,
    		f: 12.94,
    		l: "代替"
    	},
    	{
    		r: 4562,
    		f: 12.94,
    		l: "細い"
    	},
    	{
    		r: 4563,
    		f: 12.93,
    		l: "幼児"
    	},
    	{
    		r: 4564,
    		f: 12.92,
    		l: "電波"
    	},
    	{
    		r: 4565,
    		f: 12.92,
    		l: "転載"
    	},
    	{
    		r: 4566,
    		f: 12.92,
    		l: "たいてい"
    	},
    	{
    		r: 4567,
    		f: 12.91,
    		l: "フィリピン"
    	},
    	{
    		r: 4568,
    		f: 12.91,
    		l: "生成"
    	},
    	{
    		r: 4569,
    		f: 12.91,
    		l: "意外と"
    	},
    	{
    		r: 4570,
    		f: 12.91,
    		l: "接触"
    	},
    	{
    		r: 4571,
    		f: 12.91,
    		l: "時には"
    	},
    	{
    		r: 4572,
    		f: 12.91,
    		l: "トルコ"
    	},
    	{
    		r: 4573,
    		f: 12.91,
    		l: "大分"
    	},
    	{
    		r: 4574,
    		f: 12.9,
    		l: "表記"
    	},
    	{
    		r: 4575,
    		f: 12.9,
    		l: "新人"
    	},
    	{
    		r: 4576,
    		f: 12.9,
    		l: "情熱"
    	},
    	{
    		r: 4577,
    		f: 12.89,
    		l: "昨夜"
    	},
    	{
    		r: 4578,
    		f: 12.89,
    		l: "申込"
    	},
    	{
    		r: 4579,
    		f: 12.89,
    		l: "私的"
    	},
    	{
    		r: 4580,
    		f: 12.89,
    		l: "正解"
    	},
    	{
    		r: 4581,
    		f: 12.89,
    		l: "次第に"
    	},
    	{
    		r: 4582,
    		f: 12.88,
    		l: "殺害"
    	},
    	{
    		r: 4583,
    		f: 12.88,
    		l: "何だか"
    	},
    	{
    		r: 4584,
    		f: 12.88,
    		l: "カ国"
    	},
    	{
    		r: 4585,
    		f: 12.88,
    		l: "親切"
    	},
    	{
    		r: 4586,
    		f: 12.87,
    		l: "冗談"
    	},
    	{
    		r: 4587,
    		f: 12.87,
    		l: "昼間"
    	},
    	{
    		r: 4588,
    		f: 12.86,
    		l: "バン"
    	},
    	{
    		r: 4589,
    		f: 12.86,
    		l: "絵画"
    	},
    	{
    		r: 4590,
    		f: 12.84,
    		l: "稽古"
    	},
    	{
    		r: 4591,
    		f: 12.84,
    		l: "対戦"
    	},
    	{
    		r: 4592,
    		f: 12.84,
    		l: "来日"
    	},
    	{
    		r: 4593,
    		f: 12.83,
    		l: "循環"
    	},
    	{
    		r: 4594,
    		f: 12.83,
    		l: "萌える"
    	},
    	{
    		r: 4595,
    		f: 12.83,
    		l: "蓄積"
    	},
    	{
    		r: 4596,
    		f: 12.83,
    		l: "小型"
    	},
    	{
    		r: 4597,
    		f: 12.83,
    		l: "クロ"
    	},
    	{
    		r: 4598,
    		f: 12.82,
    		l: "悪魔"
    	},
    	{
    		r: 4599,
    		f: 12.82,
    		l: "オーディオ"
    	},
    	{
    		r: 4600,
    		f: 12.81,
    		l: "モー"
    	},
    	{
    		r: 4601,
    		f: 12.81,
    		l: "海岸"
    	},
    	{
    		r: 4602,
    		f: 12.81,
    		l: "取り戻す"
    	},
    	{
    		r: 4603,
    		f: 12.8,
    		l: "きつい"
    	},
    	{
    		r: 4604,
    		f: 12.8,
    		l: "視野"
    	},
    	{
    		r: 4605,
    		f: 12.8,
    		l: "天井"
    	},
    	{
    		r: 4606,
    		f: 12.79,
    		l: "戸"
    	},
    	{
    		r: 4607,
    		f: 12.79,
    		l: "与党"
    	},
    	{
    		r: 4608,
    		f: 12.79,
    		l: "縦"
    	},
    	{
    		r: 4609,
    		f: 12.79,
    		l: "通販"
    	},
    	{
    		r: 4610,
    		f: 12.78,
    		l: "中華"
    	},
    	{
    		r: 4611,
    		f: 12.78,
    		l: "トレード"
    	},
    	{
    		r: 4612,
    		f: 12.78,
    		l: "ウチ"
    	},
    	{
    		r: 4613,
    		f: 12.78,
    		l: "ワシントン"
    	},
    	{
    		r: 4614,
    		f: 12.77,
    		l: "治安"
    	},
    	{
    		r: 4615,
    		f: 12.77,
    		l: "認証"
    	},
    	{
    		r: 4616,
    		f: 12.76,
    		l: "論点"
    	},
    	{
    		r: 4617,
    		f: 12.76,
    		l: "申告"
    	},
    	{
    		r: 4618,
    		f: 12.74,
    		l: "泊"
    	},
    	{
    		r: 4619,
    		f: 12.74,
    		l: "三月"
    	},
    	{
    		r: 4620,
    		f: 12.73,
    		l: "労働省"
    	},
    	{
    		r: 4621,
    		f: 12.73,
    		l: "出荷"
    	},
    	{
    		r: 4622,
    		f: 12.72,
    		l: "ジョージ"
    	},
    	{
    		r: 4623,
    		f: 12.72,
    		l: "順調"
    	},
    	{
    		r: 4624,
    		f: 12.72,
    		l: "エジプト"
    	},
    	{
    		r: 4625,
    		f: 12.71,
    		l: "官房"
    	},
    	{
    		r: 4626,
    		f: 12.71,
    		l: "満ちる"
    	},
    	{
    		r: 4627,
    		f: 12.71,
    		l: "かい"
    	},
    	{
    		r: 4628,
    		f: 12.71,
    		l: "レンタル"
    	},
    	{
    		r: 4629,
    		f: 12.7,
    		l: "ジーコ"
    	},
    	{
    		r: 4630,
    		f: 12.69,
    		l: "デザイナー"
    	},
    	{
    		r: 4631,
    		f: 12.69,
    		l: "貴方"
    	},
    	{
    		r: 4632,
    		f: 12.68,
    		l: "かえって"
    	},
    	{
    		r: 4633,
    		f: 12.67,
    		l: "飼う"
    	},
    	{
    		r: 4634,
    		f: 12.67,
    		l: "付き合い"
    	},
    	{
    		r: 4635,
    		f: 12.66,
    		l: "シン"
    	},
    	{
    		r: 4636,
    		f: 12.66,
    		l: "補足"
    	},
    	{
    		r: 4637,
    		f: 12.66,
    		l: "小売"
    	},
    	{
    		r: 4638,
    		f: 12.66,
    		l: "撤退"
    	},
    	{
    		r: 4639,
    		f: 12.65,
    		l: "並びに"
    	},
    	{
    		r: 4640,
    		f: 12.64,
    		l: "グリーン"
    	},
    	{
    		r: 4641,
    		f: 12.64,
    		l: "関数"
    	},
    	{
    		r: 4642,
    		f: 12.64,
    		l: "代わる"
    	},
    	{
    		r: 4643,
    		f: 12.64,
    		l: "当面"
    	},
    	{
    		r: 4644,
    		f: 12.63,
    		l: "創設"
    	},
    	{
    		r: 4645,
    		f: 12.62,
    		l: "やりとり"
    	},
    	{
    		r: 4646,
    		f: 12.62,
    		l: "塗る"
    	},
    	{
    		r: 4647,
    		f: 12.62,
    		l: "笋"
    	},
    	{
    		r: 4648,
    		f: 12.62,
    		l: "貧困"
    	},
    	{
    		r: 4649,
    		f: 12.62,
    		l: "なく"
    	},
    	{
    		r: 4650,
    		f: 12.62,
    		l: "著しい"
    	},
    	{
    		r: 4651,
    		f: 12.62,
    		l: "到達"
    	},
    	{
    		r: 4652,
    		f: 12.62,
    		l: "軍隊"
    	},
    	{
    		r: 4653,
    		f: 12.62,
    		l: "勧告"
    	},
    	{
    		r: 4654,
    		f: 12.61,
    		l: "もしも"
    	},
    	{
    		r: 4655,
    		f: 12.61,
    		l: "死者"
    	},
    	{
    		r: 4656,
    		f: 12.61,
    		l: "アイドル"
    	},
    	{
    		r: 4657,
    		f: 12.61,
    		l: "健"
    	},
    	{
    		r: 4658,
    		f: 12.6,
    		l: "満載"
    	},
    	{
    		r: 4659,
    		f: 12.59,
    		l: "スポット"
    	},
    	{
    		r: 4660,
    		f: 12.59,
    		l: "コト"
    	},
    	{
    		r: 4661,
    		f: 12.59,
    		l: "鬚"
    	},
    	{
    		r: 4662,
    		f: 12.58,
    		l: "寿司"
    	},
    	{
    		r: 4663,
    		f: 12.57,
    		l: "討論"
    	},
    	{
    		r: 4664,
    		f: 12.57,
    		l: "英会話"
    	},
    	{
    		r: 4665,
    		f: 12.57,
    		l: "弱"
    	},
    	{
    		r: 4666,
    		f: 12.57,
    		l: "活かす"
    	},
    	{
    		r: 4667,
    		f: 12.57,
    		l: "グレード"
    	},
    	{
    		r: 4668,
    		f: 12.56,
    		l: "ごめん"
    	},
    	{
    		r: 4669,
    		f: 12.56,
    		l: "放棄"
    	},
    	{
    		r: 4670,
    		f: 12.56,
    		l: "歌詞"
    	},
    	{
    		r: 4671,
    		f: 12.55,
    		l: "プリント"
    	},
    	{
    		r: 4672,
    		f: 12.54,
    		l: "いちばん"
    	},
    	{
    		r: 4673,
    		f: 12.54,
    		l: "手間"
    	},
    	{
    		r: 4674,
    		f: 12.53,
    		l: "究極"
    	},
    	{
    		r: 4675,
    		f: 12.53,
    		l: "人民"
    	},
    	{
    		r: 4676,
    		f: 12.53,
    		l: "スーツ"
    	},
    	{
    		r: 4677,
    		f: 12.52,
    		l: "強烈"
    	},
    	{
    		r: 4678,
    		f: 12.52,
    		l: "シングル"
    	},
    	{
    		r: 4679,
    		f: 12.51,
    		l: "仮"
    	},
    	{
    		r: 4680,
    		f: 12.5,
    		l: "本番"
    	},
    	{
    		r: 4681,
    		f: 12.5,
    		l: "数える"
    	},
    	{
    		r: 4682,
    		f: 12.49,
    		l: "迅速"
    	},
    	{
    		r: 4683,
    		f: 12.49,
    		l: "体質"
    	},
    	{
    		r: 4684,
    		f: 12.48,
    		l: "正面"
    	},
    	{
    		r: 4685,
    		f: 12.48,
    		l: "地帯"
    	},
    	{
    		r: 4686,
    		f: 12.48,
    		l: "つまらない"
    	},
    	{
    		r: 4687,
    		f: 12.47,
    		l: "塔"
    	},
    	{
    		r: 4688,
    		f: 12.47,
    		l: "新幹線"
    	},
    	{
    		r: 4689,
    		f: 12.45,
    		l: "南部"
    	},
    	{
    		r: 4690,
    		f: 12.44,
    		l: "収める"
    	},
    	{
    		r: 4691,
    		f: 12.44,
    		l: "天使"
    	},
    	{
    		r: 4692,
    		f: 12.43,
    		l: "メモリ"
    	},
    	{
    		r: 4693,
    		f: 12.43,
    		l: "チョコレート"
    	},
    	{
    		r: 4694,
    		f: 12.43,
    		l: "ポルトガル"
    	},
    	{
    		r: 4695,
    		f: 12.43,
    		l: "創る"
    	},
    	{
    		r: 4696,
    		f: 12.42,
    		l: "役所"
    	},
    	{
    		r: 4697,
    		f: 12.42,
    		l: "定価"
    	},
    	{
    		r: 4698,
    		f: 12.42,
    		l: "本屋"
    	},
    	{
    		r: 4699,
    		f: 12.41,
    		l: "描写"
    	},
    	{
    		r: 4700,
    		f: 12.4,
    		l: "橋本"
    	},
    	{
    		r: 4701,
    		f: 12.4,
    		l: "ポンド"
    	},
    	{
    		r: 4702,
    		f: 12.4,
    		l: "休暇"
    	},
    	{
    		r: 4703,
    		f: 12.4,
    		l: "割る"
    	},
    	{
    		r: 4704,
    		f: 12.39,
    		l: "行方"
    	},
    	{
    		r: 4705,
    		f: 12.39,
    		l: "習う"
    	},
    	{
    		r: 4706,
    		f: 12.38,
    		l: "気が付く"
    	},
    	{
    		r: 4707,
    		f: 12.38,
    		l: "ヽ"
    	},
    	{
    		r: 4708,
    		f: 12.38,
    		l: "土産"
    	},
    	{
    		r: 4709,
    		f: 12.38,
    		l: "あら"
    	},
    	{
    		r: 4710,
    		f: 12.38,
    		l: "奇妙"
    	},
    	{
    		r: 4711,
    		f: 12.38,
    		l: "こいつ"
    	},
    	{
    		r: 4712,
    		f: 12.36,
    		l: "のむ"
    	},
    	{
    		r: 4713,
    		f: 12.36,
    		l: "批評"
    	},
    	{
    		r: 4714,
    		f: 12.36,
    		l: "注ぐ"
    	},
    	{
    		r: 4715,
    		f: 12.35,
    		l: "減"
    	},
    	{
    		r: 4716,
    		f: 12.34,
    		l: "絡む"
    	},
    	{
    		r: 4717,
    		f: 12.34,
    		l: "羽"
    	},
    	{
    		r: 4718,
    		f: 12.34,
    		l: "論争"
    	},
    	{
    		r: 4719,
    		f: 12.34,
    		l: "徒歩"
    	},
    	{
    		r: 4720,
    		f: 12.34,
    		l: "図書"
    	},
    	{
    		r: 4721,
    		f: 12.34,
    		l: "あいだ"
    	},
    	{
    		r: 4722,
    		f: 12.33,
    		l: "披露"
    	},
    	{
    		r: 4723,
    		f: 12.33,
    		l: "コレクション"
    	},
    	{
    		r: 4724,
    		f: 12.32,
    		l: "関"
    	},
    	{
    		r: 4725,
    		f: 12.32,
    		l: "シェア"
    	},
    	{
    		r: 4726,
    		f: 12.32,
    		l: "ターゲット"
    	},
    	{
    		r: 4727,
    		f: 12.3,
    		l: "何故か"
    	},
    	{
    		r: 4728,
    		f: 12.3,
    		l: "別れ"
    	},
    	{
    		r: 4729,
    		f: 12.3,
    		l: "植民"
    	},
    	{
    		r: 4730,
    		f: 12.3,
    		l: "何となく"
    	},
    	{
    		r: 4731,
    		f: 12.29,
    		l: "Ｐ"
    	},
    	{
    		r: 4732,
    		f: 12.29,
    		l: "オレンジ"
    	},
    	{
    		r: 4733,
    		f: 12.29,
    		l: "にもかかわらず"
    	},
    	{
    		r: 4734,
    		f: 12.29,
    		l: "未満"
    	},
    	{
    		r: 4735,
    		f: 12.29,
    		l: "松"
    	},
    	{
    		r: 4736,
    		f: 12.29,
    		l: "長男"
    	},
    	{
    		r: 4737,
    		f: 12.28,
    		l: "好評"
    	},
    	{
    		r: 4738,
    		f: 12.27,
    		l: "怪しい"
    	},
    	{
    		r: 4739,
    		f: 12.27,
    		l: "ライ"
    	},
    	{
    		r: 4740,
    		f: 12.27,
    		l: "ボーナス"
    	},
    	{
    		r: 4741,
    		f: 12.27,
    		l: "参入"
    	},
    	{
    		r: 4742,
    		f: 12.27,
    		l: "した"
    	},
    	{
    		r: 4743,
    		f: 12.27,
    		l: "幻想"
    	},
    	{
    		r: 4744,
    		f: 12.26,
    		l: "例える"
    	},
    	{
    		r: 4745,
    		f: 12.26,
    		l: "学年"
    	},
    	{
    		r: 4746,
    		f: 12.25,
    		l: "セッション"
    	},
    	{
    		r: 4747,
    		f: 12.25,
    		l: "侵略"
    	},
    	{
    		r: 4748,
    		f: 12.25,
    		l: "危ない"
    	},
    	{
    		r: 4749,
    		f: 12.25,
    		l: "用品"
    	},
    	{
    		r: 4750,
    		f: 12.25,
    		l: "缶"
    	},
    	{
    		r: 4751,
    		f: 12.25,
    		l: "砂"
    	},
    	{
    		r: 4752,
    		f: 12.25,
    		l: "プライバシー"
    	},
    	{
    		r: 4753,
    		f: 12.25,
    		l: "したがう"
    	},
    	{
    		r: 4754,
    		f: 12.24,
    		l: "李"
    	},
    	{
    		r: 4755,
    		f: 12.24,
    		l: "ポスター"
    	},
    	{
    		r: 4756,
    		f: 12.23,
    		l: "革新"
    	},
    	{
    		r: 4757,
    		f: 12.23,
    		l: "衝突"
    	},
    	{
    		r: 4758,
    		f: 12.23,
    		l: "匿名"
    	},
    	{
    		r: 4759,
    		f: 12.23,
    		l: "全角"
    	},
    	{
    		r: 4760,
    		f: 12.23,
    		l: "トー"
    	},
    	{
    		r: 4761,
    		f: 12.23,
    		l: "ヤツ"
    	},
    	{
    		r: 4762,
    		f: 12.22,
    		l: "フランス語"
    	},
    	{
    		r: 4763,
    		f: 12.22,
    		l: "偉大"
    	},
    	{
    		r: 4764,
    		f: 12.21,
    		l: "何より"
    	},
    	{
    		r: 4765,
    		f: 12.21,
    		l: "出資"
    	},
    	{
    		r: 4766,
    		f: 12.21,
    		l: "驚き"
    	},
    	{
    		r: 4767,
    		f: 12.21,
    		l: "チップ"
    	},
    	{
    		r: 4768,
    		f: 12.21,
    		l: "シュート"
    	},
    	{
    		r: 4769,
    		f: 12.2,
    		l: "居住"
    	},
    	{
    		r: 4770,
    		f: 12.2,
    		l: "拝見"
    	},
    	{
    		r: 4771,
    		f: 12.2,
    		l: "著書"
    	},
    	{
    		r: 4772,
    		f: 12.2,
    		l: "抽象"
    	},
    	{
    		r: 4773,
    		f: 12.19,
    		l: "孫"
    	},
    	{
    		r: 4774,
    		f: 12.19,
    		l: "治る"
    	},
    	{
    		r: 4775,
    		f: 12.18,
    		l: "理"
    	},
    	{
    		r: 4776,
    		f: 12.18,
    		l: "スクリーン"
    	},
    	{
    		r: 4777,
    		f: 12.17,
    		l: "マッチ"
    	},
    	{
    		r: 4778,
    		f: 12.17,
    		l: "勤める"
    	},
    	{
    		r: 4779,
    		f: 12.17,
    		l: "逆転"
    	},
    	{
    		r: 4780,
    		f: 12.15,
    		l: "きめる"
    	},
    	{
    		r: 4781,
    		f: 12.14,
    		l: "諸君"
    	},
    	{
    		r: 4782,
    		f: 12.14,
    		l: "了解"
    	},
    	{
    		r: 4783,
    		f: 12.14,
    		l: "スイッチ"
    	},
    	{
    		r: 4784,
    		f: 12.13,
    		l: "ボックス"
    	},
    	{
    		r: 4785,
    		f: 12.13,
    		l: "クルマ"
    	},
    	{
    		r: 4786,
    		f: 12.13,
    		l: "隠れる"
    	},
    	{
    		r: 4787,
    		f: 12.13,
    		l: "共和"
    	},
    	{
    		r: 4788,
    		f: 12.13,
    		l: "復興"
    	},
    	{
    		r: 4789,
    		f: 12.13,
    		l: "喫煙"
    	},
    	{
    		r: 4790,
    		f: 12.12,
    		l: "乗り越える"
    	},
    	{
    		r: 4791,
    		f: 12.12,
    		l: "統制"
    	},
    	{
    		r: 4792,
    		f: 12.12,
    		l: "幹事"
    	},
    	{
    		r: 4793,
    		f: 12.12,
    		l: "解散"
    	},
    	{
    		r: 4794,
    		f: 12.1,
    		l: "ランク"
    	},
    	{
    		r: 4795,
    		f: 12.1,
    		l: "蔵"
    	},
    	{
    		r: 4796,
    		f: 12.1,
    		l: "誘導"
    	},
    	{
    		r: 4797,
    		f: 12.1,
    		l: "願い"
    	},
    	{
    		r: 4798,
    		f: 12.1,
    		l: "麺"
    	},
    	{
    		r: 4799,
    		f: 12.09,
    		l: "文法"
    	},
    	{
    		r: 4800,
    		f: 12.09,
    		l: "秩序"
    	},
    	{
    		r: 4801,
    		f: 12.08,
    		l: "争い"
    	},
    	{
    		r: 4802,
    		f: 12.08,
    		l: "チベット"
    	},
    	{
    		r: 4803,
    		f: 12.08,
    		l: "書評"
    	},
    	{
    		r: 4804,
    		f: 12.08,
    		l: "重点"
    	},
    	{
    		r: 4805,
    		f: 12.08,
    		l: "軒"
    	},
    	{
    		r: 4806,
    		f: 12.07,
    		l: "悲劇"
    	},
    	{
    		r: 4807,
    		f: 12.06,
    		l: "怪我"
    	},
    	{
    		r: 4808,
    		f: 12.06,
    		l: "マウス"
    	},
    	{
    		r: 4809,
    		f: 12.06,
    		l: "単独"
    	},
    	{
    		r: 4810,
    		f: 12.06,
    		l: "報じる"
    	},
    	{
    		r: 4811,
    		f: 12.05,
    		l: "年末"
    	},
    	{
    		r: 4812,
    		f: 12.05,
    		l: "即"
    	},
    	{
    		r: 4813,
    		f: 12.05,
    		l: "炎"
    	},
    	{
    		r: 4814,
    		f: 12.04,
    		l: "ごとし"
    	},
    	{
    		r: 4815,
    		f: 12.04,
    		l: "ジャンプ"
    	},
    	{
    		r: 4816,
    		f: 12.04,
    		l: "脂肪"
    	},
    	{
    		r: 4817,
    		f: 12.04,
    		l: "署"
    	},
    	{
    		r: 4818,
    		f: 12.04,
    		l: "会える"
    	},
    	{
    		r: 4819,
    		f: 12.03,
    		l: "縮小"
    	},
    	{
    		r: 4820,
    		f: 12.03,
    		l: "フェ"
    	},
    	{
    		r: 4821,
    		f: 12.03,
    		l: "占領"
    	},
    	{
    		r: 4822,
    		f: 12.02,
    		l: "研"
    	},
    	{
    		r: 4823,
    		f: 12.02,
    		l: "枠組み"
    	},
    	{
    		r: 4824,
    		f: 12.02,
    		l: "規約"
    	},
    	{
    		r: 4825,
    		f: 12.01,
    		l: "共"
    	},
    	{
    		r: 4826,
    		f: 12.01,
    		l: "テイ"
    	},
    	{
    		r: 4827,
    		f: 12.01,
    		l: "携わる"
    	},
    	{
    		r: 4828,
    		f: 12.01,
    		l: "陽"
    	},
    	{
    		r: 4829,
    		f: 12,
    		l: "不法"
    	},
    	{
    		r: 4830,
    		f: 12,
    		l: "ダン"
    	},
    	{
    		r: 4831,
    		f: 12,
    		l: "樹"
    	},
    	{
    		r: 4832,
    		f: 12,
    		l: "トロ"
    	},
    	{
    		r: 4833,
    		f: 12,
    		l: "探偵"
    	},
    	{
    		r: 4834,
    		f: 11.99,
    		l: "しる"
    	},
    	{
    		r: 4835,
    		f: 11.99,
    		l: "農村"
    	},
    	{
    		r: 4836,
    		f: 11.98,
    		l: "進展"
    	},
    	{
    		r: 4837,
    		f: 11.98,
    		l: "倒す"
    	},
    	{
    		r: 4838,
    		f: 11.98,
    		l: "日付"
    	},
    	{
    		r: 4839,
    		f: 11.98,
    		l: "創作"
    	},
    	{
    		r: 4840,
    		f: 11.98,
    		l: "眠い"
    	},
    	{
    		r: 4841,
    		f: 11.97,
    		l: "武装"
    	},
    	{
    		r: 4842,
    		f: 11.97,
    		l: "によりまして"
    	},
    	{
    		r: 4843,
    		f: 11.97,
    		l: "婦人"
    	},
    	{
    		r: 4844,
    		f: 11.95,
    		l: "天国"
    	},
    	{
    		r: 4845,
    		f: 11.95,
    		l: "声明"
    	},
    	{
    		r: 4846,
    		f: 11.95,
    		l: "エル"
    	},
    	{
    		r: 4847,
    		f: 11.95,
    		l: "ケン"
    	},
    	{
    		r: 4848,
    		f: 11.95,
    		l: "構う"
    	},
    	{
    		r: 4849,
    		f: 11.94,
    		l: "ライター"
    	},
    	{
    		r: 4850,
    		f: 11.93,
    		l: "とうとう"
    	},
    	{
    		r: 4851,
    		f: 11.93,
    		l: "美人"
    	},
    	{
    		r: 4852,
    		f: 11.93,
    		l: "贈る"
    	},
    	{
    		r: 4853,
    		f: 11.92,
    		l: "ロス"
    	},
    	{
    		r: 4854,
    		f: 11.92,
    		l: "竹"
    	},
    	{
    		r: 4855,
    		f: 11.92,
    		l: "難い"
    	},
    	{
    		r: 4856,
    		f: 11.91,
    		l: "皮膚"
    	},
    	{
    		r: 4857,
    		f: 11.91,
    		l: "初日"
    	},
    	{
    		r: 4858,
    		f: 11.91,
    		l: "こども"
    	},
    	{
    		r: 4859,
    		f: 11.91,
    		l: "うい"
    	},
    	{
    		r: 4860,
    		f: 11.9,
    		l: "マイケル"
    	},
    	{
    		r: 4861,
    		f: 11.9,
    		l: "どー"
    	},
    	{
    		r: 4862,
    		f: 11.89,
    		l: "とう"
    	},
    	{
    		r: 4863,
    		f: 11.89,
    		l: "下す"
    	},
    	{
    		r: 4864,
    		f: 11.89,
    		l: "Ｒ"
    	},
    	{
    		r: 4865,
    		f: 11.89,
    		l: "みせる"
    	},
    	{
    		r: 4866,
    		f: 11.89,
    		l: "ちょ"
    	},
    	{
    		r: 4867,
    		f: 11.88,
    		l: "平日"
    	},
    	{
    		r: 4868,
    		f: 11.88,
    		l: "お伝え"
    	},
    	{
    		r: 4869,
    		f: 11.88,
    		l: "氷"
    	},
    	{
    		r: 4870,
    		f: 11.88,
    		l: "魔"
    	},
    	{
    		r: 4871,
    		f: 11.88,
    		l: "整える"
    	},
    	{
    		r: 4872,
    		f: 11.87,
    		l: "まことに"
    	},
    	{
    		r: 4873,
    		f: 11.87,
    		l: "公社"
    	},
    	{
    		r: 4874,
    		f: 11.87,
    		l: "推定"
    	},
    	{
    		r: 4875,
    		f: 11.87,
    		l: "振動"
    	},
    	{
    		r: 4876,
    		f: 11.86,
    		l: "リエ"
    	},
    	{
    		r: 4877,
    		f: 11.86,
    		l: "志"
    	},
    	{
    		r: 4878,
    		f: 11.85,
    		l: "回路"
    	},
    	{
    		r: 4879,
    		f: 11.85,
    		l: "外れる"
    	},
    	{
    		r: 4880,
    		f: 11.85,
    		l: "金銭"
    	},
    	{
    		r: 4881,
    		f: 11.85,
    		l: "由来"
    	},
    	{
    		r: 4882,
    		f: 11.85,
    		l: "蓮"
    	},
    	{
    		r: 4883,
    		f: 11.84,
    		l: "東北"
    	},
    	{
    		r: 4884,
    		f: 11.84,
    		l: "孤独"
    	},
    	{
    		r: 4885,
    		f: 11.83,
    		l: "レンズ"
    	},
    	{
    		r: 4886,
    		f: 11.83,
    		l: "ステ"
    	},
    	{
    		r: 4887,
    		f: 11.83,
    		l: "ピンク"
    	},
    	{
    		r: 4888,
    		f: 11.82,
    		l: "トラ"
    	},
    	{
    		r: 4889,
    		f: 11.82,
    		l: "割引"
    	},
    	{
    		r: 4890,
    		f: 11.81,
    		l: "インフルエンザ"
    	},
    	{
    		r: 4891,
    		f: 11.81,
    		l: "崩れる"
    	},
    	{
    		r: 4892,
    		f: 11.8,
    		l: "騒ぐ"
    	},
    	{
    		r: 4893,
    		f: 11.8,
    		l: "暗号"
    	},
    	{
    		r: 4894,
    		f: 11.8,
    		l: "チーズ"
    	},
    	{
    		r: 4895,
    		f: 11.8,
    		l: "共産"
    	},
    	{
    		r: 4896,
    		f: 11.8,
    		l: "ソウル"
    	},
    	{
    		r: 4897,
    		f: 11.79,
    		l: "策定"
    	},
    	{
    		r: 4898,
    		f: 11.78,
    		l: "最中"
    	},
    	{
    		r: 4899,
    		f: 11.78,
    		l: "だし"
    	},
    	{
    		r: 4900,
    		f: 11.78,
    		l: "チャン"
    	},
    	{
    		r: 4901,
    		f: 11.78,
    		l: "公平"
    	},
    	{
    		r: 4902,
    		f: 11.78,
    		l: "負け"
    	},
    	{
    		r: 4903,
    		f: 11.77,
    		l: "アルコール"
    	},
    	{
    		r: 4904,
    		f: 11.77,
    		l: "尚"
    	},
    	{
    		r: 4905,
    		f: 11.77,
    		l: "燃える"
    	},
    	{
    		r: 4906,
    		f: 11.76,
    		l: "謝罪"
    	},
    	{
    		r: 4907,
    		f: 11.76,
    		l: "分間"
    	},
    	{
    		r: 4908,
    		f: 11.76,
    		l: "現時点"
    	},
    	{
    		r: 4909,
    		f: 11.76,
    		l: "助成"
    	},
    	{
    		r: 4910,
    		f: 11.76,
    		l: "衣装"
    	},
    	{
    		r: 4911,
    		f: 11.76,
    		l: "磨く"
    	},
    	{
    		r: 4912,
    		f: 11.75,
    		l: "うどん"
    	},
    	{
    		r: 4913,
    		f: 11.75,
    		l: "エラー"
    	},
    	{
    		r: 4914,
    		f: 11.75,
    		l: "単"
    	},
    	{
    		r: 4915,
    		f: 11.74,
    		l: "改造"
    	},
    	{
    		r: 4916,
    		f: 11.74,
    		l: "照らす"
    	},
    	{
    		r: 4917,
    		f: 11.74,
    		l: "インフラ"
    	},
    	{
    		r: 4918,
    		f: 11.74,
    		l: "國"
    	},
    	{
    		r: 4919,
    		f: 11.73,
    		l: "加速"
    	},
    	{
    		r: 4920,
    		f: 11.73,
    		l: "パーセント"
    	},
    	{
    		r: 4921,
    		f: 11.73,
    		l: "あそこ"
    	},
    	{
    		r: 4922,
    		f: 11.73,
    		l: "メジャー"
    	},
    	{
    		r: 4923,
    		f: 11.73,
    		l: "ポリシー"
    	},
    	{
    		r: 4924,
    		f: 11.72,
    		l: "介入"
    	},
    	{
    		r: 4925,
    		f: 11.72,
    		l: "要する"
    	},
    	{
    		r: 4926,
    		f: 11.72,
    		l: "クール"
    	},
    	{
    		r: 4927,
    		f: 11.71,
    		l: "皿"
    	},
    	{
    		r: 4928,
    		f: 11.71,
    		l: "新作"
    	},
    	{
    		r: 4929,
    		f: 11.7,
    		l: "途上"
    	},
    	{
    		r: 4930,
    		f: 11.7,
    		l: "ふえる"
    	},
    	{
    		r: 4931,
    		f: 11.7,
    		l: "むずかしい"
    	},
    	{
    		r: 4932,
    		f: 11.69,
    		l: "液晶"
    	},
    	{
    		r: 4933,
    		f: 11.69,
    		l: "直"
    	},
    	{
    		r: 4934,
    		f: 11.69,
    		l: "欲望"
    	},
    	{
    		r: 4935,
    		f: 11.69,
    		l: "済ませる"
    	},
    	{
    		r: 4936,
    		f: 11.68,
    		l: "というのも"
    	},
    	{
    		r: 4937,
    		f: 11.68,
    		l: "区域"
    	},
    	{
    		r: 4938,
    		f: 11.68,
    		l: "破綻"
    	},
    	{
    		r: 4939,
    		f: 11.66,
    		l: "スウェーデン"
    	},
    	{
    		r: 4940,
    		f: 11.65,
    		l: "だい"
    	},
    	{
    		r: 4941,
    		f: 11.65,
    		l: "鑑定"
    	},
    	{
    		r: 4942,
    		f: 11.64,
    		l: "マイク"
    	},
    	{
    		r: 4943,
    		f: 11.64,
    		l: "盗む"
    	},
    	{
    		r: 4944,
    		f: 11.63,
    		l: "保管"
    	},
    	{
    		r: 4945,
    		f: 11.63,
    		l: "Ｎ"
    	},
    	{
    		r: 4946,
    		f: 11.62,
    		l: "若手"
    	},
    	{
    		r: 4947,
    		f: 11.61,
    		l: "リサイクル"
    	},
    	{
    		r: 4948,
    		f: 11.61,
    		l: "鋭い"
    	},
    	{
    		r: 4949,
    		f: 11.61,
    		l: "何と"
    	},
    	{
    		r: 4950,
    		f: 11.6,
    		l: "手伝う"
    	},
    	{
    		r: 4951,
    		f: 11.59,
    		l: "パレスチナ"
    	},
    	{
    		r: 4952,
    		f: 11.59,
    		l: "無意識"
    	},
    	{
    		r: 4953,
    		f: 11.59,
    		l: "ペーパー"
    	},
    	{
    		r: 4954,
    		f: 11.59,
    		l: "いまだに"
    	},
    	{
    		r: 4955,
    		f: 11.59,
    		l: "まとめ"
    	},
    	{
    		r: 4956,
    		f: 11.58,
    		l: "公害"
    	},
    	{
    		r: 4957,
    		f: 11.58,
    		l: "会館"
    	},
    	{
    		r: 4958,
    		f: 11.58,
    		l: "つぶやく"
    	},
    	{
    		r: 4959,
    		f: 11.58,
    		l: "不十分"
    	},
    	{
    		r: 4960,
    		f: 11.57,
    		l: "映画館"
    	},
    	{
    		r: 4961,
    		f: 11.57,
    		l: "スコットランド"
    	},
    	{
    		r: 4962,
    		f: 11.57,
    		l: "事柄"
    	},
    	{
    		r: 4963,
    		f: 11.57,
    		l: "ローカル"
    	},
    	{
    		r: 4964,
    		f: 11.57,
    		l: "異議"
    	},
    	{
    		r: 4965,
    		f: 11.57,
    		l: "法廷"
    	},
    	{
    		r: 4966,
    		f: 11.56,
    		l: "平気"
    	},
    	{
    		r: 4967,
    		f: 11.55,
    		l: "‘"
    	},
    	{
    		r: 4968,
    		f: 11.55,
    		l: "移住"
    	},
    	{
    		r: 4969,
    		f: 11.55,
    		l: "処置"
    	},
    	{
    		r: 4970,
    		f: 11.55,
    		l: "悔しい"
    	},
    	{
    		r: 4971,
    		f: 11.55,
    		l: "留学生"
    	},
    	{
    		r: 4972,
    		f: 11.55,
    		l: "従事"
    	},
    	{
    		r: 4973,
    		f: 11.54,
    		l: "もったいない"
    	},
    	{
    		r: 4974,
    		f: 11.54,
    		l: "デバイス"
    	},
    	{
    		r: 4975,
    		f: 11.54,
    		l: "敷地"
    	},
    	{
    		r: 4976,
    		f: 11.54,
    		l: "分散"
    	},
    	{
    		r: 4977,
    		f: 11.53,
    		l: "ドライバー"
    	},
    	{
    		r: 4978,
    		f: 11.53,
    		l: "とかいう"
    	},
    	{
    		r: 4979,
    		f: 11.53,
    		l: "分科"
    	},
    	{
    		r: 4980,
    		f: 11.53,
    		l: "モバイル"
    	},
    	{
    		r: 4981,
    		f: 11.53,
    		l: "発足"
    	},
    	{
    		r: 4982,
    		f: 11.53,
    		l: "しょうが"
    	},
    	{
    		r: 4983,
    		f: 11.52,
    		l: "しかる"
    	},
    	{
    		r: 4984,
    		f: 11.52,
    		l: "棚"
    	},
    	{
    		r: 4985,
    		f: 11.51,
    		l: "突入"
    	},
    	{
    		r: 4986,
    		f: 11.51,
    		l: "すみません"
    	},
    	{
    		r: 4987,
    		f: 11.51,
    		l: "室内"
    	},
    	{
    		r: 4988,
    		f: 11.5,
    		l: "走行"
    	},
    	{
    		r: 4989,
    		f: 11.5,
    		l: "姉妹"
    	},
    	{
    		r: 4990,
    		f: 11.49,
    		l: "議事"
    	},
    	{
    		r: 4991,
    		f: 11.49,
    		l: "文部"
    	},
    	{
    		r: 4992,
    		f: 11.48,
    		l: "づらい"
    	},
    	{
    		r: 4993,
    		f: 11.48,
    		l: "かよう"
    	},
    	{
    		r: 4994,
    		f: 11.48,
    		l: "観念"
    	},
    	{
    		r: 4995,
    		f: 11.48,
    		l: "未だに"
    	},
    	{
    		r: 4996,
    		f: 11.48,
    		l: "調べ"
    	},
    	{
    		r: 4997,
    		f: 11.48,
    		l: "歌手"
    	},
    	{
    		r: 4998,
    		f: 11.48,
    		l: "臨床"
    	},
    	{
    		r: 4999,
    		f: 11.47,
    		l: "上下"
    	},
    	{
    		r: 5000,
    		f: 11.47,
    		l: "くせ"
    	},
    	{
    		r: 5001,
    		f: 11.47,
    		l: "学術"
    	},
    	{
    		r: 5002,
    		f: 11.47,
    		l: "電池"
    	},
    	{
    		r: 5003,
    		f: 11.46,
    		l: "履歴"
    	},
    	{
    		r: 5004,
    		f: 11.45,
    		l: "解雇"
    	},
    	{
    		r: 5005,
    		f: 11.45,
    		l: "先月"
    	},
    	{
    		r: 5006,
    		f: 11.44,
    		l: "コール"
    	},
    	{
    		r: 5007,
    		f: 11.44,
    		l: "{"
    	},
    	{
    		r: 5008,
    		f: 11.44,
    		l: "川崎"
    	},
    	{
    		r: 5009,
    		f: 11.42,
    		l: "インテリア"
    	},
    	{
    		r: 5010,
    		f: 11.42,
    		l: "家電"
    	},
    	{
    		r: 5011,
    		f: 11.42,
    		l: "爆弾"
    	},
    	{
    		r: 5012,
    		f: 11.42,
    		l: "マル"
    	},
    	{
    		r: 5013,
    		f: 11.42,
    		l: "店内"
    	},
    	{
    		r: 5014,
    		f: 11.42,
    		l: "漂う"
    	},
    	{
    		r: 5015,
    		f: 11.41,
    		l: "周"
    	},
    	{
    		r: 5016,
    		f: 11.4,
    		l: "おお"
    	},
    	{
    		r: 5017,
    		f: 11.4,
    		l: "言い訳"
    	},
    	{
    		r: 5018,
    		f: 11.4,
    		l: "同期"
    	},
    	{
    		r: 5019,
    		f: 11.39,
    		l: "移植"
    	},
    	{
    		r: 5020,
    		f: 11.39,
    		l: "ジャック"
    	},
    	{
    		r: 5021,
    		f: 11.38,
    		l: "施工"
    	},
    	{
    		r: 5022,
    		f: 11.38,
    		l: "自国"
    	},
    	{
    		r: 5023,
    		f: 11.38,
    		l: "セール"
    	},
    	{
    		r: 5024,
    		f: 11.38,
    		l: "理屈"
    	},
    	{
    		r: 5025,
    		f: 11.38,
    		l: "収容"
    	},
    	{
    		r: 5026,
    		f: 11.38,
    		l: "全身"
    	},
    	{
    		r: 5027,
    		f: 11.38,
    		l: "示唆"
    	},
    	{
    		r: 5028,
    		f: 11.37,
    		l: "惹く"
    	},
    	{
    		r: 5029,
    		f: 11.37,
    		l: "率直"
    	},
    	{
    		r: 5030,
    		f: 11.37,
    		l: "耐震"
    	},
    	{
    		r: 5031,
    		f: 11.37,
    		l: "駅前"
    	},
    	{
    		r: 5032,
    		f: 11.37,
    		l: "Ｊ"
    	},
    	{
    		r: 5033,
    		f: 11.36,
    		l: "いったん"
    	},
    	{
    		r: 5034,
    		f: 11.36,
    		l: "報"
    	},
    	{
    		r: 5035,
    		f: 11.36,
    		l: "儲かる"
    	},
    	{
    		r: 5036,
    		f: 11.35,
    		l: "伝"
    	},
    	{
    		r: 5037,
    		f: 11.35,
    		l: "職務"
    	},
    	{
    		r: 5038,
    		f: 11.35,
    		l: "商標"
    	},
    	{
    		r: 5039,
    		f: 11.35,
    		l: "あつい"
    	},
    	{
    		r: 5040,
    		f: 11.35,
    		l: "絶望"
    	},
    	{
    		r: 5041,
    		f: 11.34,
    		l: "食堂"
    	},
    	{
    		r: 5042,
    		f: 11.34,
    		l: "連休"
    	},
    	{
    		r: 5043,
    		f: 11.33,
    		l: "何とも"
    	},
    	{
    		r: 5044,
    		f: 11.32,
    		l: "マス"
    	},
    	{
    		r: 5045,
    		f: 11.32,
    		l: "イイ"
    	},
    	{
    		r: 5046,
    		f: 11.31,
    		l: "予備"
    	},
    	{
    		r: 5047,
    		f: 11.31,
    		l: "入社"
    	},
    	{
    		r: 5048,
    		f: 11.31,
    		l: "イングランド"
    	},
    	{
    		r: 5049,
    		f: 11.31,
    		l: "晴れる"
    	},
    	{
    		r: 5050,
    		f: 11.3,
    		l: "部会"
    	},
    	{
    		r: 5051,
    		f: 11.3,
    		l: "グランド"
    	},
    	{
    		r: 5052,
    		f: 11.3,
    		l: "出勤"
    	},
    	{
    		r: 5053,
    		f: 11.29,
    		l: "警戒"
    	},
    	{
    		r: 5054,
    		f: 11.29,
    		l: "オーバー"
    	},
    	{
    		r: 5055,
    		f: 11.28,
    		l: "トヨタ"
    	},
    	{
    		r: 5056,
    		f: 11.28,
    		l: "だく"
    	},
    	{
    		r: 5057,
    		f: 11.28,
    		l: "イス"
    	},
    	{
    		r: 5058,
    		f: 11.27,
    		l: "引き出す"
    	},
    	{
    		r: 5059,
    		f: 11.27,
    		l: "融合"
    	},
    	{
    		r: 5060,
    		f: 11.27,
    		l: "棒"
    	},
    	{
    		r: 5061,
    		f: 11.27,
    		l: "お送り"
    	},
    	{
    		r: 5062,
    		f: 11.27,
    		l: "返済"
    	},
    	{
    		r: 5063,
    		f: 11.26,
    		l: "外務"
    	},
    	{
    		r: 5064,
    		f: 11.25,
    		l: "どうか"
    	},
    	{
    		r: 5065,
    		f: 11.25,
    		l: "省庁"
    	},
    	{
    		r: 5066,
    		f: 11.25,
    		l: "付属"
    	},
    	{
    		r: 5067,
    		f: 11.25,
    		l: "犯"
    	},
    	{
    		r: 5068,
    		f: 11.25,
    		l: "助かる"
    	},
    	{
    		r: 5069,
    		f: 11.25,
    		l: "露"
    	},
    	{
    		r: 5070,
    		f: 11.24,
    		l: "組み合わせる"
    	},
    	{
    		r: 5071,
    		f: 11.24,
    		l: "かれる"
    	},
    	{
    		r: 5072,
    		f: 11.24,
    		l: "泊まる"
    	},
    	{
    		r: 5073,
    		f: 11.23,
    		l: "芝居"
    	},
    	{
    		r: 5074,
    		f: 11.23,
    		l: "節約"
    	},
    	{
    		r: 5075,
    		f: 11.22,
    		l: "メイド"
    	},
    	{
    		r: 5076,
    		f: 11.22,
    		l: "値上げ"
    	},
    	{
    		r: 5077,
    		f: 11.22,
    		l: "またまた"
    	},
    	{
    		r: 5078,
    		f: 11.21,
    		l: "火曜日"
    	},
    	{
    		r: 5079,
    		f: 11.21,
    		l: "清水"
    	},
    	{
    		r: 5080,
    		f: 11.21,
    		l: "ウソ"
    	},
    	{
    		r: 5081,
    		f: 11.21,
    		l: "手前"
    	},
    	{
    		r: 5082,
    		f: 11.21,
    		l: "あい"
    	},
    	{
    		r: 5083,
    		f: 11.21,
    		l: "司会"
    	},
    	{
    		r: 5084,
    		f: 11.2,
    		l: "防衛庁"
    	},
    	{
    		r: 5085,
    		f: 11.2,
    		l: "湯"
    	},
    	{
    		r: 5086,
    		f: 11.2,
    		l: "ゼミ"
    	},
    	{
    		r: 5087,
    		f: 11.19,
    		l: "手作り"
    	},
    	{
    		r: 5088,
    		f: 11.19,
    		l: "いい加減"
    	},
    	{
    		r: 5089,
    		f: 11.18,
    		l: "惑星"
    	},
    	{
    		r: 5090,
    		f: 11.18,
    		l: "岡田"
    	},
    	{
    		r: 5091,
    		f: 11.18,
    		l: "合同"
    	},
    	{
    		r: 5092,
    		f: 11.17,
    		l: "主導"
    	},
    	{
    		r: 5093,
    		f: 11.17,
    		l: "ＯＫ"
    	},
    	{
    		r: 5094,
    		f: 11.17,
    		l: "わく"
    	},
    	{
    		r: 5095,
    		f: 11.17,
    		l: "治"
    	},
    	{
    		r: 5096,
    		f: 11.17,
    		l: "善"
    	},
    	{
    		r: 5097,
    		f: 11.17,
    		l: "ソロ"
    	},
    	{
    		r: 5098,
    		f: 11.17,
    		l: "部下"
    	},
    	{
    		r: 5099,
    		f: 11.17,
    		l: "公団"
    	},
    	{
    		r: 5100,
    		f: 11.16,
    		l: "かまう"
    	},
    	{
    		r: 5101,
    		f: 11.15,
    		l: "吐く"
    	},
    	{
    		r: 5102,
    		f: 11.14,
    		l: "クロス"
    	},
    	{
    		r: 5103,
    		f: 11.14,
    		l: "習得"
    	},
    	{
    		r: 5104,
    		f: 11.14,
    		l: "直面"
    	},
    	{
    		r: 5105,
    		f: 11.14,
    		l: "高知"
    	},
    	{
    		r: 5106,
    		f: 11.14,
    		l: "さくら"
    	},
    	{
    		r: 5107,
    		f: 11.14,
    		l: "アルゼンチン"
    	},
    	{
    		r: 5108,
    		f: 11.14,
    		l: "コミック"
    	},
    	{
    		r: 5109,
    		f: 11.14,
    		l: "談"
    	},
    	{
    		r: 5110,
    		f: 11.13,
    		l: "転送"
    	},
    	{
    		r: 5111,
    		f: 11.13,
    		l: "ギリシャ"
    	},
    	{
    		r: 5112,
    		f: 11.13,
    		l: "セリフ"
    	},
    	{
    		r: 5113,
    		f: 11.13,
    		l: "校長"
    	},
    	{
    		r: 5114,
    		f: 11.12,
    		l: "ボー"
    	},
    	{
    		r: 5115,
    		f: 11.12,
    		l: "華"
    	},
    	{
    		r: 5116,
    		f: 11.12,
    		l: "域"
    	},
    	{
    		r: 5117,
    		f: 11.12,
    		l: "検察"
    	},
    	{
    		r: 5118,
    		f: 11.12,
    		l: "踊り"
    	},
    	{
    		r: 5119,
    		f: 11.12,
    		l: "無限"
    	},
    	{
    		r: 5120,
    		f: 11.11,
    		l: "両国"
    	},
    	{
    		r: 5121,
    		f: 11.1,
    		l: "助け"
    	},
    	{
    		r: 5122,
    		f: 11.1,
    		l: "農林"
    	},
    	{
    		r: 5123,
    		f: 11.1,
    		l: "スペシャル"
    	},
    	{
    		r: 5124,
    		f: 11.1,
    		l: "統治"
    	},
    	{
    		r: 5125,
    		f: 11.09,
    		l: "純"
    	},
    	{
    		r: 5126,
    		f: 11.09,
    		l: "早朝"
    	},
    	{
    		r: 5127,
    		f: 11.09,
    		l: "福島"
    	},
    	{
    		r: 5128,
    		f: 11.09,
    		l: "県内"
    	},
    	{
    		r: 5129,
    		f: 11.09,
    		l: "良"
    	},
    	{
    		r: 5130,
    		f: 11.08,
    		l: "史上"
    	},
    	{
    		r: 5131,
    		f: 11.07,
    		l: "背後"
    	},
    	{
    		r: 5132,
    		f: 11.07,
    		l: "間接"
    	},
    	{
    		r: 5133,
    		f: 11.05,
    		l: "トマト"
    	},
    	{
    		r: 5134,
    		f: 11.05,
    		l: "粉"
    	},
    	{
    		r: 5135,
    		f: 11.05,
    		l: "後日"
    	},
    	{
    		r: 5136,
    		f: 11.05,
    		l: "感性"
    	},
    	{
    		r: 5137,
    		f: 11.05,
    		l: "モニター"
    	},
    	{
    		r: 5138,
    		f: 11.04,
    		l: "めざす"
    	},
    	{
    		r: 5139,
    		f: 11.04,
    		l: "省略"
    	},
    	{
    		r: 5140,
    		f: 11.03,
    		l: "無効"
    	},
    	{
    		r: 5141,
    		f: 11.02,
    		l: "剛"
    	},
    	{
    		r: 5142,
    		f: 11.02,
    		l: "騙す"
    	},
    	{
    		r: 5143,
    		f: 11.02,
    		l: "オイル"
    	},
    	{
    		r: 5144,
    		f: 11.02,
    		l: "王国"
    	},
    	{
    		r: 5145,
    		f: 11.01,
    		l: "}"
    	},
    	{
    		r: 5146,
    		f: 11.01,
    		l: "速報"
    	},
    	{
    		r: 5147,
    		f: 11.01,
    		l: "バイ"
    	},
    	{
    		r: 5148,
    		f: 11.01,
    		l: "郊外"
    	},
    	{
    		r: 5149,
    		f: 11.01,
    		l: "代金"
    	},
    	{
    		r: 5150,
    		f: 11,
    		l: "ネコ"
    	},
    	{
    		r: 5151,
    		f: 10.99,
    		l: "歩む"
    	},
    	{
    		r: 5152,
    		f: 10.97,
    		l: "そこそこ"
    	},
    	{
    		r: 5153,
    		f: 10.97,
    		l: "能"
    	},
    	{
    		r: 5154,
    		f: 10.97,
    		l: "似合う"
    	},
    	{
    		r: 5155,
    		f: 10.97,
    		l: "やって来る"
    	},
    	{
    		r: 5156,
    		f: 10.97,
    		l: "彼等"
    	},
    	{
    		r: 5157,
    		f: 10.96,
    		l: "植える"
    	},
    	{
    		r: 5158,
    		f: 10.96,
    		l: "使命"
    	},
    	{
    		r: 5159,
    		f: 10.96,
    		l: "財団"
    	},
    	{
    		r: 5160,
    		f: 10.96,
    		l: "五月"
    	},
    	{
    		r: 5161,
    		f: 10.96,
    		l: "戦前"
    	},
    	{
    		r: 5162,
    		f: 10.96,
    		l: "故障"
    	},
    	{
    		r: 5163,
    		f: 10.95,
    		l: "ポケット"
    	},
    	{
    		r: 5164,
    		f: 10.95,
    		l: "他方"
    	},
    	{
    		r: 5165,
    		f: 10.95,
    		l: "メカニズム"
    	},
    	{
    		r: 5166,
    		f: 10.95,
    		l: "カッコ"
    	},
    	{
    		r: 5167,
    		f: 10.95,
    		l: "答申"
    	},
    	{
    		r: 5168,
    		f: 10.94,
    		l: "直ちに"
    	},
    	{
    		r: 5169,
    		f: 10.94,
    		l: "境界"
    	},
    	{
    		r: 5170,
    		f: 10.92,
    		l: "毒"
    	},
    	{
    		r: 5171,
    		f: 10.91,
    		l: "どこか"
    	},
    	{
    		r: 5172,
    		f: 10.91,
    		l: "ぶつかる"
    	},
    	{
    		r: 5173,
    		f: 10.91,
    		l: "用途"
    	},
    	{
    		r: 5174,
    		f: 10.91,
    		l: "真理"
    	},
    	{
    		r: 5175,
    		f: 10.91,
    		l: "誇り"
    	},
    	{
    		r: 5176,
    		f: 10.9,
    		l: "要約"
    	},
    	{
    		r: 5177,
    		f: 10.9,
    		l: "盛り込む"
    	},
    	{
    		r: 5178,
    		f: 10.9,
    		l: "石川"
    	},
    	{
    		r: 5179,
    		f: 10.89,
    		l: "ブラ"
    	},
    	{
    		r: 5180,
    		f: 10.89,
    		l: "王子"
    	},
    	{
    		r: 5181,
    		f: 10.89,
    		l: "仮説"
    	},
    	{
    		r: 5182,
    		f: 10.89,
    		l: "引き上げる"
    	},
    	{
    		r: 5183,
    		f: 10.89,
    		l: "アップル"
    	},
    	{
    		r: 5184,
    		f: 10.89,
    		l: "伸び"
    	},
    	{
    		r: 5185,
    		f: 10.89,
    		l: "宅"
    	},
    	{
    		r: 5186,
    		f: 10.88,
    		l: "キャンパス"
    	},
    	{
    		r: 5187,
    		f: 10.88,
    		l: "さっぱり"
    	},
    	{
    		r: 5188,
    		f: 10.88,
    		l: "用紙"
    	},
    	{
    		r: 5189,
    		f: 10.87,
    		l: "出来"
    	},
    	{
    		r: 5190,
    		f: 10.87,
    		l: "講じる"
    	},
    	{
    		r: 5191,
    		f: 10.87,
    		l: "易い"
    	},
    	{
    		r: 5192,
    		f: 10.86,
    		l: "味方"
    	},
    	{
    		r: 5193,
    		f: 10.86,
    		l: "癖"
    	},
    	{
    		r: 5194,
    		f: 10.86,
    		l: "押さえる"
    	},
    	{
    		r: 5195,
    		f: 10.86,
    		l: "主役"
    	},
    	{
    		r: 5196,
    		f: 10.85,
    		l: "布"
    	},
    	{
    		r: 5197,
    		f: 10.85,
    		l: "国産"
    	},
    	{
    		r: 5198,
    		f: 10.85,
    		l: "一環"
    	},
    	{
    		r: 5199,
    		f: 10.85,
    		l: "ついで"
    	},
    	{
    		r: 5200,
    		f: 10.84,
    		l: "喋る"
    	},
    	{
    		r: 5201,
    		f: 10.84,
    		l: "へる"
    	},
    	{
    		r: 5202,
    		f: 10.83,
    		l: "英文"
    	},
    	{
    		r: 5203,
    		f: 10.83,
    		l: "類似"
    	},
    	{
    		r: 5204,
    		f: 10.83,
    		l: "届ける"
    	},
    	{
    		r: 5205,
    		f: 10.83,
    		l: "詰まる"
    	},
    	{
    		r: 5206,
    		f: 10.83,
    		l: "揃える"
    	},
    	{
    		r: 5207,
    		f: 10.82,
    		l: "軽減"
    	},
    	{
    		r: 5208,
    		f: 10.82,
    		l: "蹴る"
    	},
    	{
    		r: 5209,
    		f: 10.81,
    		l: "あっという間に"
    	},
    	{
    		r: 5210,
    		f: 10.81,
    		l: "様式"
    	},
    	{
    		r: 5211,
    		f: 10.81,
    		l: "任務"
    	},
    	{
    		r: 5212,
    		f: 10.81,
    		l: "跡"
    	},
    	{
    		r: 5213,
    		f: 10.81,
    		l: "ベン"
    	},
    	{
    		r: 5214,
    		f: 10.8,
    		l: "守備"
    	},
    	{
    		r: 5215,
    		f: 10.8,
    		l: "制裁"
    	},
    	{
    		r: 5216,
    		f: 10.8,
    		l: "幕"
    	},
    	{
    		r: 5217,
    		f: 10.8,
    		l: "在"
    	},
    	{
    		r: 5218,
    		f: 10.8,
    		l: "兵庫"
    	},
    	{
    		r: 5219,
    		f: 10.79,
    		l: "サウンド"
    	},
    	{
    		r: 5220,
    		f: 10.79,
    		l: "教養"
    	},
    	{
    		r: 5221,
    		f: 10.79,
    		l: "沿い"
    	},
    	{
    		r: 5222,
    		f: 10.78,
    		l: "トム"
    	},
    	{
    		r: 5223,
    		f: 10.78,
    		l: "侵入"
    	},
    	{
    		r: 5224,
    		f: 10.78,
    		l: "Ｙ"
    	},
    	{
    		r: 5225,
    		f: 10.78,
    		l: "にわたる"
    	},
    	{
    		r: 5226,
    		f: 10.77,
    		l: "ちがう"
    	},
    	{
    		r: 5227,
    		f: 10.76,
    		l: "光る"
    	},
    	{
    		r: 5228,
    		f: 10.76,
    		l: "予感"
    	},
    	{
    		r: 5229,
    		f: 10.75,
    		l: "リア"
    	},
    	{
    		r: 5230,
    		f: 10.75,
    		l: "的確"
    	},
    	{
    		r: 5231,
    		f: 10.75,
    		l: "雑貨"
    	},
    	{
    		r: 5232,
    		f: 10.75,
    		l: "ユニット"
    	},
    	{
    		r: 5233,
    		f: 10.75,
    		l: "互いに"
    	},
    	{
    		r: 5234,
    		f: 10.75,
    		l: "肝心"
    	},
    	{
    		r: 5235,
    		f: 10.75,
    		l: "狙い"
    	},
    	{
    		r: 5236,
    		f: 10.74,
    		l: "訳す"
    	},
    	{
    		r: 5237,
    		f: 10.74,
    		l: "前進"
    	},
    	{
    		r: 5238,
    		f: 10.74,
    		l: "在り方"
    	},
    	{
    		r: 5239,
    		f: 10.73,
    		l: "温暖"
    	},
    	{
    		r: 5240,
    		f: 10.73,
    		l: "予報"
    	},
    	{
    		r: 5241,
    		f: 10.73,
    		l: "フェア"
    	},
    	{
    		r: 5242,
    		f: 10.73,
    		l: "遅れ"
    	},
    	{
    		r: 5243,
    		f: 10.73,
    		l: "こころ"
    	},
    	{
    		r: 5244,
    		f: 10.73,
    		l: "浸透"
    	},
    	{
    		r: 5245,
    		f: 10.72,
    		l: "ミュージック"
    	},
    	{
    		r: 5246,
    		f: 10.71,
    		l: "最高裁"
    	},
    	{
    		r: 5247,
    		f: 10.71,
    		l: "係"
    	},
    	{
    		r: 5248,
    		f: 10.71,
    		l: "警察官"
    	},
    	{
    		r: 5249,
    		f: 10.7,
    		l: "利"
    	},
    	{
    		r: 5250,
    		f: 10.7,
    		l: "法制"
    	},
    	{
    		r: 5251,
    		f: 10.7,
    		l: "照明"
    	},
    	{
    		r: 5252,
    		f: 10.68,
    		l: "バックアップ"
    	},
    	{
    		r: 5253,
    		f: 10.68,
    		l: "調"
    	},
    	{
    		r: 5254,
    		f: 10.68,
    		l: "キッチン"
    	},
    	{
    		r: 5255,
    		f: 10.68,
    		l: "通用"
    	},
    	{
    		r: 5256,
    		f: 10.68,
    		l: "クス"
    	},
    	{
    		r: 5257,
    		f: 10.68,
    		l: "クリ"
    	},
    	{
    		r: 5258,
    		f: 10.67,
    		l: "キャッシュ"
    	},
    	{
    		r: 5259,
    		f: 10.67,
    		l: "あらためて"
    	},
    	{
    		r: 5260,
    		f: 10.67,
    		l: "付加"
    	},
    	{
    		r: 5261,
    		f: 10.67,
    		l: "木曜日"
    	},
    	{
    		r: 5262,
    		f: 10.67,
    		l: "施す"
    	},
    	{
    		r: 5263,
    		f: 10.67,
    		l: "答"
    	},
    	{
    		r: 5264,
    		f: 10.66,
    		l: "推移"
    	},
    	{
    		r: 5265,
    		f: 10.66,
    		l: "繰り返し"
    	},
    	{
    		r: 5266,
    		f: 10.66,
    		l: "こだわり"
    	},
    	{
    		r: 5267,
    		f: 10.66,
    		l: "京"
    	},
    	{
    		r: 5268,
    		f: 10.65,
    		l: "本音"
    	},
    	{
    		r: 5269,
    		f: 10.65,
    		l: "回線"
    	},
    	{
    		r: 5270,
    		f: 10.65,
    		l: "スムーズ"
    	},
    	{
    		r: 5271,
    		f: 10.64,
    		l: "ばあちゃん"
    	},
    	{
    		r: 5272,
    		f: 10.64,
    		l: "色んな"
    	},
    	{
    		r: 5273,
    		f: 10.64,
    		l: "飛び出す"
    	},
    	{
    		r: 5274,
    		f: 10.64,
    		l: "まし"
    	},
    	{
    		r: 5275,
    		f: 10.64,
    		l: "最大限"
    	},
    	{
    		r: 5276,
    		f: 10.64,
    		l: "温かい"
    	},
    	{
    		r: 5277,
    		f: 10.63,
    		l: "おい"
    	},
    	{
    		r: 5278,
    		f: 10.63,
    		l: "何事"
    	},
    	{
    		r: 5279,
    		f: 10.63,
    		l: "タッチ"
    	},
    	{
    		r: 5280,
    		f: 10.63,
    		l: "合"
    	},
    	{
    		r: 5281,
    		f: 10.63,
    		l: "解"
    	},
    	{
    		r: 5282,
    		f: 10.63,
    		l: "調和"
    	},
    	{
    		r: 5283,
    		f: 10.63,
    		l: "煙"
    	},
    	{
    		r: 5284,
    		f: 10.63,
    		l: "信託"
    	},
    	{
    		r: 5285,
    		f: 10.62,
    		l: "ぴったり"
    	},
    	{
    		r: 5286,
    		f: 10.62,
    		l: "一月"
    	},
    	{
    		r: 5287,
    		f: 10.62,
    		l: "担保"
    	},
    	{
    		r: 5288,
    		f: 10.62,
    		l: "課程"
    	},
    	{
    		r: 5289,
    		f: 10.62,
    		l: "案件"
    	},
    	{
    		r: 5290,
    		f: 10.61,
    		l: "バトン"
    	},
    	{
    		r: 5291,
    		f: 10.61,
    		l: "信"
    	},
    	{
    		r: 5292,
    		f: 10.61,
    		l: "地裁"
    	},
    	{
    		r: 5293,
    		f: 10.61,
    		l: "欠陥"
    	},
    	{
    		r: 5294,
    		f: 10.61,
    		l: "肯定"
    	},
    	{
    		r: 5295,
    		f: 10.61,
    		l: "に当たって"
    	},
    	{
    		r: 5296,
    		f: 10.61,
    		l: "キス"
    	},
    	{
    		r: 5297,
    		f: 10.61,
    		l: "有限"
    	},
    	{
    		r: 5298,
    		f: 10.61,
    		l: "発注"
    	},
    	{
    		r: 5299,
    		f: 10.6,
    		l: "業種"
    	},
    	{
    		r: 5300,
    		f: 10.6,
    		l: "森林"
    	},
    	{
    		r: 5301,
    		f: 10.6,
    		l: "牛乳"
    	},
    	{
    		r: 5302,
    		f: 10.6,
    		l: "決定的"
    	},
    	{
    		r: 5303,
    		f: 10.6,
    		l: "見込み"
    	},
    	{
    		r: 5304,
    		f: 10.6,
    		l: "みえる"
    	},
    	{
    		r: 5305,
    		f: 10.59,
    		l: "法令"
    	},
    	{
    		r: 5306,
    		f: 10.59,
    		l: "バイオ"
    	},
    	{
    		r: 5307,
    		f: 10.59,
    		l: "シンガポール"
    	},
    	{
    		r: 5308,
    		f: 10.59,
    		l: "試し"
    	},
    	{
    		r: 5309,
    		f: 10.59,
    		l: "その間"
    	},
    	{
    		r: 5310,
    		f: 10.59,
    		l: "ジュース"
    	},
    	{
    		r: 5311,
    		f: 10.58,
    		l: "ロング"
    	},
    	{
    		r: 5312,
    		f: 10.58,
    		l: "地点"
    	},
    	{
    		r: 5313,
    		f: 10.58,
    		l: "糸"
    	},
    	{
    		r: 5314,
    		f: 10.58,
    		l: "レシピ"
    	},
    	{
    		r: 5315,
    		f: 10.58,
    		l: "背負う"
    	},
    	{
    		r: 5316,
    		f: 10.58,
    		l: "欲"
    	},
    	{
    		r: 5317,
    		f: 10.57,
    		l: "独"
    	},
    	{
    		r: 5318,
    		f: 10.57,
    		l: "インパクト"
    	},
    	{
    		r: 5319,
    		f: 10.57,
    		l: "少子化"
    	},
    	{
    		r: 5320,
    		f: 10.57,
    		l: "くい"
    	},
    	{
    		r: 5321,
    		f: 10.57,
    		l: "サブ"
    	},
    	{
    		r: 5322,
    		f: 10.57,
    		l: "柔らかい"
    	},
    	{
    		r: 5323,
    		f: 10.56,
    		l: "ドット"
    	},
    	{
    		r: 5324,
    		f: 10.55,
    		l: "辿る"
    	},
    	{
    		r: 5325,
    		f: 10.55,
    		l: "かなう"
    	},
    	{
    		r: 5326,
    		f: 10.55,
    		l: "かたち"
    	},
    	{
    		r: 5327,
    		f: 10.55,
    		l: "気配"
    	},
    	{
    		r: 5328,
    		f: 10.54,
    		l: "うるさい"
    	},
    	{
    		r: 5329,
    		f: 10.54,
    		l: "枝"
    	},
    	{
    		r: 5330,
    		f: 10.54,
    		l: "参議院"
    	},
    	{
    		r: 5331,
    		f: 10.53,
    		l: "外資"
    	},
    	{
    		r: 5332,
    		f: 10.53,
    		l: "寮"
    	},
    	{
    		r: 5333,
    		f: 10.53,
    		l: "慌てる"
    	},
    	{
    		r: 5334,
    		f: 10.51,
    		l: "チョコ"
    	},
    	{
    		r: 5335,
    		f: 10.51,
    		l: "アイルランド"
    	},
    	{
    		r: 5336,
    		f: 10.51,
    		l: "インター"
    	},
    	{
    		r: 5337,
    		f: 10.51,
    		l: "聞ける"
    	},
    	{
    		r: 5338,
    		f: 10.51,
    		l: "きり"
    	},
    	{
    		r: 5339,
    		f: 10.51,
    		l: "ヘ"
    	},
    	{
    		r: 5340,
    		f: 10.51,
    		l: "幼い"
    	},
    	{
    		r: 5341,
    		f: 10.51,
    		l: "適応"
    	},
    	{
    		r: 5342,
    		f: 10.5,
    		l: "云々"
    	},
    	{
    		r: 5343,
    		f: 10.5,
    		l: "掘る"
    	},
    	{
    		r: 5344,
    		f: 10.5,
    		l: "分解"
    	},
    	{
    		r: 5345,
    		f: 10.5,
    		l: "右手"
    	},
    	{
    		r: 5346,
    		f: 10.5,
    		l: "避難"
    	},
    	{
    		r: 5347,
    		f: 10.49,
    		l: "国鉄"
    	},
    	{
    		r: 5348,
    		f: 10.49,
    		l: "件数"
    	},
    	{
    		r: 5349,
    		f: 10.48,
    		l: "かぁ"
    	},
    	{
    		r: 5350,
    		f: 10.48,
    		l: "兼"
    	},
    	{
    		r: 5351,
    		f: 10.48,
    		l: "素"
    	},
    	{
    		r: 5352,
    		f: 10.47,
    		l: "岩"
    	},
    	{
    		r: 5353,
    		f: 10.47,
    		l: "臨む"
    	},
    	{
    		r: 5354,
    		f: 10.46,
    		l: "演習"
    	},
    	{
    		r: 5355,
    		f: 10.45,
    		l: "すっきり"
    	},
    	{
    		r: 5356,
    		f: 10.45,
    		l: "水曜日"
    	},
    	{
    		r: 5357,
    		f: 10.45,
    		l: "儲ける"
    	},
    	{
    		r: 5358,
    		f: 10.45,
    		l: "プログラミング"
    	},
    	{
    		r: 5359,
    		f: 10.44,
    		l: "うける"
    	},
    	{
    		r: 5360,
    		f: 10.44,
    		l: "ごはん"
    	},
    	{
    		r: 5361,
    		f: 10.43,
    		l: "アホ"
    	},
    	{
    		r: 5362,
    		f: 10.42,
    		l: "中東"
    	},
    	{
    		r: 5363,
    		f: 10.42,
    		l: "支店"
    	},
    	{
    		r: 5364,
    		f: 10.42,
    		l: "身分"
    	},
    	{
    		r: 5365,
    		f: 10.42,
    		l: "農地"
    	},
    	{
    		r: 5366,
    		f: 10.41,
    		l: "コツ"
    	},
    	{
    		r: 5367,
    		f: 10.41,
    		l: "信者"
    	},
    	{
    		r: 5368,
    		f: 10.41,
    		l: "メンテナンス"
    	},
    	{
    		r: 5369,
    		f: 10.4,
    		l: "負荷"
    	},
    	{
    		r: 5370,
    		f: 10.4,
    		l: "グラフ"
    	},
    	{
    		r: 5371,
    		f: 10.4,
    		l: "克服"
    	},
    	{
    		r: 5372,
    		f: 10.39,
    		l: "話せる"
    	},
    	{
    		r: 5373,
    		f: 10.39,
    		l: "ジム"
    	},
    	{
    		r: 5374,
    		f: 10.39,
    		l: "出来上がる"
    	},
    	{
    		r: 5375,
    		f: 10.39,
    		l: "なるべく"
    	},
    	{
    		r: 5376,
    		f: 10.38,
    		l: "冷蔵庫"
    	},
    	{
    		r: 5377,
    		f: 10.38,
    		l: "銀座"
    	},
    	{
    		r: 5378,
    		f: 10.38,
    		l: "私立"
    	},
    	{
    		r: 5379,
    		f: 10.37,
    		l: "継承"
    	},
    	{
    		r: 5380,
    		f: 10.37,
    		l: "気候"
    	},
    	{
    		r: 5381,
    		f: 10.36,
    		l: "志向"
    	},
    	{
    		r: 5382,
    		f: 10.36,
    		l: "佐々木"
    	},
    	{
    		r: 5383,
    		f: 10.36,
    		l: "結成"
    	},
    	{
    		r: 5384,
    		f: 10.36,
    		l: "意向"
    	},
    	{
    		r: 5385,
    		f: 10.36,
    		l: "夫人"
    	},
    	{
    		r: 5386,
    		f: 10.36,
    		l: "ビジョン"
    	},
    	{
    		r: 5387,
    		f: 10.35,
    		l: "不況"
    	},
    	{
    		r: 5388,
    		f: 10.35,
    		l: "格"
    	},
    	{
    		r: 5389,
    		f: 10.34,
    		l: "青春"
    	},
    	{
    		r: 5390,
    		f: 10.34,
    		l: "階層"
    	},
    	{
    		r: 5391,
    		f: 10.34,
    		l: "バッグ"
    	},
    	{
    		r: 5392,
    		f: 10.34,
    		l: "数多い"
    	},
    	{
    		r: 5393,
    		f: 10.34,
    		l: "か月"
    	},
    	{
    		r: 5394,
    		f: 10.33,
    		l: "弁"
    	},
    	{
    		r: 5395,
    		f: 10.33,
    		l: "都内"
    	},
    	{
    		r: 5396,
    		f: 10.33,
    		l: "日頃"
    	},
    	{
    		r: 5397,
    		f: 10.33,
    		l: "スタジアム"
    	},
    	{
    		r: 5398,
    		f: 10.33,
    		l: "抜き"
    	},
    	{
    		r: 5399,
    		f: 10.32,
    		l: "講談社"
    	},
    	{
    		r: 5400,
    		f: 10.32,
    		l: "食材"
    	},
    	{
    		r: 5401,
    		f: 10.31,
    		l: "唱える"
    	},
    	{
    		r: 5402,
    		f: 10.31,
    		l: "問い"
    	},
    	{
    		r: 5403,
    		f: 10.31,
    		l: "豆腐"
    	},
    	{
    		r: 5404,
    		f: 10.31,
    		l: "仁"
    	},
    	{
    		r: 5405,
    		f: 10.3,
    		l: "靖国"
    	},
    	{
    		r: 5406,
    		f: 10.3,
    		l: "遭遇"
    	},
    	{
    		r: 5407,
    		f: 10.3,
    		l: "あける"
    	},
    	{
    		r: 5408,
    		f: 10.3,
    		l: "利く"
    	},
    	{
    		r: 5409,
    		f: 10.3,
    		l: "流出"
    	},
    	{
    		r: 5410,
    		f: 10.29,
    		l: "に対しまして"
    	},
    	{
    		r: 5411,
    		f: 10.29,
    		l: "公立"
    	},
    	{
    		r: 5412,
    		f: 10.29,
    		l: "サラダ"
    	},
    	{
    		r: 5413,
    		f: 10.29,
    		l: "強度"
    	},
    	{
    		r: 5414,
    		f: 10.28,
    		l: "しかた"
    	},
    	{
    		r: 5415,
    		f: 10.28,
    		l: "最強"
    	},
    	{
    		r: 5416,
    		f: 10.27,
    		l: "改定"
    	},
    	{
    		r: 5417,
    		f: 10.27,
    		l: "なぜか"
    	},
    	{
    		r: 5418,
    		f: 10.27,
    		l: "どれほど"
    	},
    	{
    		r: 5419,
    		f: 10.27,
    		l: "泳ぐ"
    	},
    	{
    		r: 5420,
    		f: 10.27,
    		l: "ハン"
    	},
    	{
    		r: 5421,
    		f: 10.27,
    		l: "連盟"
    	},
    	{
    		r: 5422,
    		f: 10.27,
    		l: "詰める"
    	},
    	{
    		r: 5423,
    		f: 10.27,
    		l: "往復"
    	},
    	{
    		r: 5424,
    		f: 10.26,
    		l: "思い切る"
    	},
    	{
    		r: 5425,
    		f: 10.26,
    		l: "有力"
    	},
    	{
    		r: 5426,
    		f: 10.25,
    		l: "昨今"
    	},
    	{
    		r: 5427,
    		f: 10.25,
    		l: "あっさり"
    	},
    	{
    		r: 5428,
    		f: 10.25,
    		l: "仮定"
    	},
    	{
    		r: 5429,
    		f: 10.25,
    		l: "膝"
    	},
    	{
    		r: 5430,
    		f: 10.25,
    		l: "話しかける"
    	},
    	{
    		r: 5431,
    		f: 10.25,
    		l: "シフト"
    	},
    	{
    		r: 5432,
    		f: 10.24,
    		l: "オーダー"
    	},
    	{
    		r: 5433,
    		f: 10.24,
    		l: "ファミリー"
    	},
    	{
    		r: 5434,
    		f: 10.23,
    		l: "太い"
    	},
    	{
    		r: 5435,
    		f: 10.23,
    		l: "告白"
    	},
    	{
    		r: 5436,
    		f: 10.23,
    		l: "チェーン"
    	},
    	{
    		r: 5437,
    		f: 10.22,
    		l: "ベルリン"
    	},
    	{
    		r: 5438,
    		f: 10.22,
    		l: "指名"
    	},
    	{
    		r: 5439,
    		f: 10.22,
    		l: "励ます"
    	},
    	{
    		r: 5440,
    		f: 10.22,
    		l: "或いは"
    	},
    	{
    		r: 5441,
    		f: 10.21,
    		l: "づける"
    	},
    	{
    		r: 5442,
    		f: 10.21,
    		l: "闘う"
    	},
    	{
    		r: 5443,
    		f: 10.21,
    		l: "辞任"
    	},
    	{
    		r: 5444,
    		f: 10.21,
    		l: "嵐"
    	},
    	{
    		r: 5445,
    		f: 10.2,
    		l: "マッサージ"
    	},
    	{
    		r: 5446,
    		f: 10.2,
    		l: "寿命"
    	},
    	{
    		r: 5447,
    		f: 10.2,
    		l: "安倍"
    	},
    	{
    		r: 5448,
    		f: 10.2,
    		l: "引き受ける"
    	},
    	{
    		r: 5449,
    		f: 10.2,
    		l: "撃つ"
    	},
    	{
    		r: 5450,
    		f: 10.2,
    		l: "現に"
    	},
    	{
    		r: 5451,
    		f: 10.2,
    		l: "パーク"
    	},
    	{
    		r: 5452,
    		f: 10.19,
    		l: "一旦"
    	},
    	{
    		r: 5453,
    		f: 10.19,
    		l: "大国"
    	},
    	{
    		r: 5454,
    		f: 10.19,
    		l: "誤り"
    	},
    	{
    		r: 5455,
    		f: 10.19,
    		l: "やく"
    	},
    	{
    		r: 5456,
    		f: 10.18,
    		l: "奴隷"
    	},
    	{
    		r: 5457,
    		f: 10.18,
    		l: "経"
    	},
    	{
    		r: 5458,
    		f: 10.18,
    		l: "癌"
    	},
    	{
    		r: 5459,
    		f: 10.17,
    		l: "変革"
    	},
    	{
    		r: 5460,
    		f: 10.17,
    		l: "故郷"
    	},
    	{
    		r: 5461,
    		f: 10.16,
    		l: "おしゃべり"
    	},
    	{
    		r: 5462,
    		f: 10.16,
    		l: "係る"
    	},
    	{
    		r: 5463,
    		f: 10.16,
    		l: "急激"
    	},
    	{
    		r: 5464,
    		f: 10.15,
    		l: "ラッキー"
    	},
    	{
    		r: 5465,
    		f: 10.15,
    		l: "地面"
    	},
    	{
    		r: 5466,
    		f: 10.14,
    		l: "とんでもない"
    	},
    	{
    		r: 5467,
    		f: 10.14,
    		l: "残業"
    	},
    	{
    		r: 5468,
    		f: 10.14,
    		l: "告知"
    	},
    	{
    		r: 5469,
    		f: 10.13,
    		l: "大使"
    	},
    	{
    		r: 5470,
    		f: 10.13,
    		l: "ω"
    	},
    	{
    		r: 5471,
    		f: 10.13,
    		l: "媒体"
    	},
    	{
    		r: 5472,
    		f: 10.12,
    		l: "進学"
    	},
    	{
    		r: 5473,
    		f: 10.12,
    		l: "やむ"
    	},
    	{
    		r: 5474,
    		f: 10.12,
    		l: "労"
    	},
    	{
    		r: 5475,
    		f: 10.12,
    		l: "刊行"
    	},
    	{
    		r: 5476,
    		f: 10.12,
    		l: "じっと"
    	},
    	{
    		r: 5477,
    		f: 10.12,
    		l: "感激"
    	},
    	{
    		r: 5478,
    		f: 10.12,
    		l: "但し"
    	},
    	{
    		r: 5479,
    		f: 10.11,
    		l: "見出し"
    	},
    	{
    		r: 5480,
    		f: 10.11,
    		l: "プライベート"
    	},
    	{
    		r: 5481,
    		f: 10.11,
    		l: "雇う"
    	},
    	{
    		r: 5482,
    		f: 10.11,
    		l: "砂糖"
    	},
    	{
    		r: 5483,
    		f: 10.11,
    		l: "嬢"
    	},
    	{
    		r: 5484,
    		f: 10.11,
    		l: "食糧"
    	},
    	{
    		r: 5485,
    		f: 10.1,
    		l: "崩す"
    	},
    	{
    		r: 5486,
    		f: 10.1,
    		l: "っぱなし"
    	},
    	{
    		r: 5487,
    		f: 10.1,
    		l: "エロ"
    	},
    	{
    		r: 5488,
    		f: 10.1,
    		l: "役者"
    	},
    	{
    		r: 5489,
    		f: 10.1,
    		l: "原油"
    	},
    	{
    		r: 5490,
    		f: 10.1,
    		l: "祈り"
    	},
    	{
    		r: 5491,
    		f: 10.1,
    		l: "弟子"
    	},
    	{
    		r: 5492,
    		f: 10.1,
    		l: "どうにも"
    	},
    	{
    		r: 5493,
    		f: 10.08,
    		l: "ブリ"
    	},
    	{
    		r: 5494,
    		f: 10.08,
    		l: "全力"
    	},
    	{
    		r: 5495,
    		f: 10.08,
    		l: "流行る"
    	},
    	{
    		r: 5496,
    		f: 10.07,
    		l: "外側"
    	},
    	{
    		r: 5497,
    		f: 10.07,
    		l: "正規"
    	},
    	{
    		r: 5498,
    		f: 10.07,
    		l: "申"
    	},
    	{
    		r: 5499,
    		f: 10.07,
    		l: "ラブ"
    	},
    	{
    		r: 5500,
    		f: 10.07,
    		l: "ゲイ"
    	},
    	{
    		r: 5501,
    		f: 10.07,
    		l: "バックナンバー"
    	},
    	{
    		r: 5502,
    		f: 10.06,
    		l: "世話"
    	},
    	{
    		r: 5503,
    		f: 10.06,
    		l: "タイヤ"
    	},
    	{
    		r: 5504,
    		f: 10.06,
    		l: "エンジニア"
    	},
    	{
    		r: 5505,
    		f: 10.05,
    		l: "創業"
    	},
    	{
    		r: 5506,
    		f: 10.05,
    		l: "準"
    	},
    	{
    		r: 5507,
    		f: 10.05,
    		l: "贅沢"
    	},
    	{
    		r: 5508,
    		f: 10.04,
    		l: "警官"
    	},
    	{
    		r: 5509,
    		f: 10.04,
    		l: "チャート"
    	},
    	{
    		r: 5510,
    		f: 10.04,
    		l: "たしか"
    	},
    	{
    		r: 5511,
    		f: 10.04,
    		l: "脚"
    	},
    	{
    		r: 5512,
    		f: 10.04,
    		l: "わり"
    	},
    	{
    		r: 5513,
    		f: 10.03,
    		l: "入国"
    	},
    	{
    		r: 5514,
    		f: 10.03,
    		l: "アナ"
    	},
    	{
    		r: 5515,
    		f: 10.03,
    		l: "新年"
    	},
    	{
    		r: 5516,
    		f: 10.03,
    		l: "相続"
    	},
    	{
    		r: 5517,
    		f: 10.03,
    		l: "坂"
    	},
    	{
    		r: 5518,
    		f: 10.03,
    		l: "アイディア"
    	},
    	{
    		r: 5519,
    		f: 10.02,
    		l: "おもちゃ"
    	},
    	{
    		r: 5520,
    		f: 10.02,
    		l: "フード"
    	},
    	{
    		r: 5521,
    		f: 10.02,
    		l: "作り上げる"
    	},
    	{
    		r: 5522,
    		f: 10.02,
    		l: "工程"
    	},
    	{
    		r: 5523,
    		f: 10.01,
    		l: "りん"
    	},
    	{
    		r: 5524,
    		f: 10,
    		l: "さい"
    	},
    	{
    		r: 5525,
    		f: 10,
    		l: "虐待"
    	},
    	{
    		r: 5526,
    		f: 10,
    		l: "丁目"
    	},
    	{
    		r: 5527,
    		f: 9.99,
    		l: "定員"
    	},
    	{
    		r: 5528,
    		f: 9.99,
    		l: "消化"
    	},
    	{
    		r: 5529,
    		f: 9.99,
    		l: "懇談"
    	},
    	{
    		r: 5530,
    		f: 9.98,
    		l: "ロン"
    	},
    	{
    		r: 5531,
    		f: 9.97,
    		l: "極"
    	},
    	{
    		r: 5532,
    		f: 9.97,
    		l: "激"
    	},
    	{
    		r: 5533,
    		f: 9.97,
    		l: "国々"
    	},
    	{
    		r: 5534,
    		f: 9.96,
    		l: "カタログ"
    	},
    	{
    		r: 5535,
    		f: 9.96,
    		l: "秘書"
    	},
    	{
    		r: 5536,
    		f: 9.95,
    		l: "鶏"
    	},
    	{
    		r: 5537,
    		f: 9.95,
    		l: "合唱"
    	},
    	{
    		r: 5538,
    		f: 9.95,
    		l: "マクロ"
    	},
    	{
    		r: 5539,
    		f: 9.95,
    		l: "鹿児島"
    	},
    	{
    		r: 5540,
    		f: 9.95,
    		l: "のち"
    	},
    	{
    		r: 5541,
    		f: 9.94,
    		l: "有機"
    	},
    	{
    		r: 5542,
    		f: 9.94,
    		l: "それと"
    	},
    	{
    		r: 5543,
    		f: 9.94,
    		l: "顧問"
    	},
    	{
    		r: 5544,
    		f: 9.94,
    		l: "開幕"
    	},
    	{
    		r: 5545,
    		f: 9.94,
    		l: "合成"
    	},
    	{
    		r: 5546,
    		f: 9.94,
    		l: "厚生省"
    	},
    	{
    		r: 5547,
    		f: 9.94,
    		l: "大使館"
    	},
    	{
    		r: 5548,
    		f: 9.94,
    		l: "筈"
    	},
    	{
    		r: 5549,
    		f: 9.94,
    		l: "サイエンス"
    	},
    	{
    		r: 5550,
    		f: 9.93,
    		l: "組み込む"
    	},
    	{
    		r: 5551,
    		f: 9.93,
    		l: "隆"
    	},
    	{
    		r: 5552,
    		f: 9.93,
    		l: "投手"
    	},
    	{
    		r: 5553,
    		f: 9.92,
    		l: "貯金"
    	},
    	{
    		r: 5554,
    		f: 9.92,
    		l: "取り扱う"
    	},
    	{
    		r: 5555,
    		f: 9.92,
    		l: "書き方"
    	},
    	{
    		r: 5556,
    		f: 9.92,
    		l: "内側"
    	},
    	{
    		r: 5557,
    		f: 9.91,
    		l: "倉庫"
    	},
    	{
    		r: 5558,
    		f: 9.91,
    		l: "すく"
    	},
    	{
    		r: 5559,
    		f: 9.91,
    		l: "始まり"
    	},
    	{
    		r: 5560,
    		f: 9.91,
    		l: "雑記"
    	},
    	{
    		r: 5561,
    		f: 9.91,
    		l: "ホスト"
    	},
    	{
    		r: 5562,
    		f: 9.91,
    		l: "穏やか"
    	},
    	{
    		r: 5563,
    		f: 9.91,
    		l: "悲しみ"
    	},
    	{
    		r: 5564,
    		f: 9.91,
    		l: "放題"
    	},
    	{
    		r: 5565,
    		f: 9.9,
    		l: "死刑"
    	},
    	{
    		r: 5566,
    		f: 9.9,
    		l: "さぁ"
    	},
    	{
    		r: 5567,
    		f: 9.9,
    		l: "前者"
    	},
    	{
    		r: 5568,
    		f: 9.9,
    		l: "遺跡"
    	},
    	{
    		r: 5569,
    		f: 9.9,
    		l: "サル"
    	},
    	{
    		r: 5570,
    		f: 9.9,
    		l: "シンポジウム"
    	},
    	{
    		r: 5571,
    		f: 9.89,
    		l: "阿る"
    	},
    	{
    		r: 5572,
    		f: 9.89,
    		l: "帽子"
    	},
    	{
    		r: 5573,
    		f: 9.89,
    		l: "セクション"
    	},
    	{
    		r: 5574,
    		f: 9.89,
    		l: "堂々"
    	},
    	{
    		r: 5575,
    		f: 9.89,
    		l: "毎日新聞"
    	},
    	{
    		r: 5576,
    		f: 9.88,
    		l: "認可"
    	},
    	{
    		r: 5577,
    		f: 9.88,
    		l: "富"
    	},
    	{
    		r: 5578,
    		f: 9.88,
    		l: "手帳"
    	},
    	{
    		r: 5579,
    		f: 9.88,
    		l: "定"
    	},
    	{
    		r: 5580,
    		f: 9.88,
    		l: "大蔵省"
    	},
    	{
    		r: 5581,
    		f: 9.87,
    		l: "調理"
    	},
    	{
    		r: 5582,
    		f: 9.87,
    		l: "こもる"
    	},
    	{
    		r: 5583,
    		f: 9.87,
    		l: "欲求"
    	},
    	{
    		r: 5584,
    		f: 9.87,
    		l: "ギャラリー"
    	},
    	{
    		r: 5585,
    		f: 9.87,
    		l: "カリフォルニア"
    	},
    	{
    		r: 5586,
    		f: 9.87,
    		l: "丘"
    	},
    	{
    		r: 5587,
    		f: 9.87,
    		l: "正月"
    	},
    	{
    		r: 5588,
    		f: 9.86,
    		l: "大地"
    	},
    	{
    		r: 5589,
    		f: 9.86,
    		l: "カレンダー"
    	},
    	{
    		r: 5590,
    		f: 9.86,
    		l: "こんばんは"
    	},
    	{
    		r: 5591,
    		f: 9.85,
    		l: "につく"
    	},
    	{
    		r: 5592,
    		f: 9.85,
    		l: "かっこいい"
    	},
    	{
    		r: 5593,
    		f: 9.85,
    		l: "選手権"
    	},
    	{
    		r: 5594,
    		f: 9.85,
    		l: "軌道"
    	},
    	{
    		r: 5595,
    		f: 9.85,
    		l: "落ち込む"
    	},
    	{
    		r: 5596,
    		f: 9.84,
    		l: "シャツ"
    	},
    	{
    		r: 5597,
    		f: 9.84,
    		l: "戦術"
    	},
    	{
    		r: 5598,
    		f: 9.84,
    		l: "防災"
    	},
    	{
    		r: 5599,
    		f: 9.84,
    		l: "梅雨"
    	},
    	{
    		r: 5600,
    		f: 9.84,
    		l: "セン"
    	},
    	{
    		r: 5601,
    		f: 9.84,
    		l: "飲食"
    	},
    	{
    		r: 5602,
    		f: 9.83,
    		l: "接近"
    	},
    	{
    		r: 5603,
    		f: 9.83,
    		l: "飯"
    	},
    	{
    		r: 5604,
    		f: 9.83,
    		l: "疾患"
    	},
    	{
    		r: 5605,
    		f: 9.83,
    		l: "コア"
    	},
    	{
    		r: 5606,
    		f: 9.83,
    		l: "文部省"
    	},
    	{
    		r: 5607,
    		f: 9.82,
    		l: "小川"
    	},
    	{
    		r: 5608,
    		f: 9.82,
    		l: "見出す"
    	},
    	{
    		r: 5609,
    		f: 9.82,
    		l: "ピーク"
    	},
    	{
    		r: 5610,
    		f: 9.82,
    		l: "独身"
    	},
    	{
    		r: 5611,
    		f: 9.82,
    		l: "吉"
    	},
    	{
    		r: 5612,
    		f: 9.82,
    		l: "巨人"
    	},
    	{
    		r: 5613,
    		f: 9.82,
    		l: "はねる"
    	},
    	{
    		r: 5614,
    		f: 9.82,
    		l: "消滅"
    	},
    	{
    		r: 5615,
    		f: 9.81,
    		l: "解体"
    	},
    	{
    		r: 5616,
    		f: 9.81,
    		l: "眠れる"
    	},
    	{
    		r: 5617,
    		f: 9.81,
    		l: "曲がる"
    	},
    	{
    		r: 5618,
    		f: 9.81,
    		l: "先端"
    	},
    	{
    		r: 5619,
    		f: 9.81,
    		l: "配当"
    	},
    	{
    		r: 5620,
    		f: 9.8,
    		l: "曖昧"
    	},
    	{
    		r: 5621,
    		f: 9.8,
    		l: "両手"
    	},
    	{
    		r: 5622,
    		f: 9.8,
    		l: "藤田"
    	},
    	{
    		r: 5623,
    		f: 9.79,
    		l: "固い"
    	},
    	{
    		r: 5624,
    		f: 9.79,
    		l: "褒める"
    	},
    	{
    		r: 5625,
    		f: 9.79,
    		l: "争う"
    	},
    	{
    		r: 5626,
    		f: 9.79,
    		l: "在宅"
    	},
    	{
    		r: 5627,
    		f: 9.79,
    		l: "クロアチア"
    	},
    	{
    		r: 5628,
    		f: 9.79,
    		l: "一流"
    	},
    	{
    		r: 5629,
    		f: 9.79,
    		l: "スパイ"
    	},
    	{
    		r: 5630,
    		f: 9.78,
    		l: "覚める"
    	},
    	{
    		r: 5631,
    		f: 9.78,
    		l: "余"
    	},
    	{
    		r: 5632,
    		f: 9.78,
    		l: "羊"
    	},
    	{
    		r: 5633,
    		f: 9.78,
    		l: "ドキドキ"
    	},
    	{
    		r: 5634,
    		f: 9.78,
    		l: "殴る"
    	},
    	{
    		r: 5635,
    		f: 9.77,
    		l: "結合"
    	},
    	{
    		r: 5636,
    		f: 9.77,
    		l: "控除"
    	},
    	{
    		r: 5637,
    		f: 9.77,
    		l: "生き物"
    	},
    	{
    		r: 5638,
    		f: 9.77,
    		l: "庶民"
    	},
    	{
    		r: 5639,
    		f: 9.77,
    		l: "傑作"
    	},
    	{
    		r: 5640,
    		f: 9.76,
    		l: "実習"
    	},
    	{
    		r: 5641,
    		f: 9.76,
    		l: "譲る"
    	},
    	{
    		r: 5642,
    		f: 9.75,
    		l: "ボス"
    	},
    	{
    		r: 5643,
    		f: 9.75,
    		l: "後輩"
    	},
    	{
    		r: 5644,
    		f: 9.74,
    		l: "複製"
    	},
    	{
    		r: 5645,
    		f: 9.74,
    		l: "コマンド"
    	},
    	{
    		r: 5646,
    		f: 9.74,
    		l: "反日"
    	},
    	{
    		r: 5647,
    		f: 9.74,
    		l: "えー"
    	},
    	{
    		r: 5648,
    		f: 9.74,
    		l: "分担"
    	},
    	{
    		r: 5649,
    		f: 9.73,
    		l: "漁業"
    	},
    	{
    		r: 5650,
    		f: 9.72,
    		l: "分権"
    	},
    	{
    		r: 5651,
    		f: 9.72,
    		l: "再会"
    	},
    	{
    		r: 5652,
    		f: 9.72,
    		l: "画家"
    	},
    	{
    		r: 5653,
    		f: 9.72,
    		l: "読売新聞"
    	},
    	{
    		r: 5654,
    		f: 9.72,
    		l: "香"
    	},
    	{
    		r: 5655,
    		f: 9.72,
    		l: "学期"
    	},
    	{
    		r: 5656,
    		f: 9.72,
    		l: "ラップ"
    	},
    	{
    		r: 5657,
    		f: 9.71,
    		l: "ショウ"
    	},
    	{
    		r: 5658,
    		f: 9.71,
    		l: "仲良く"
    	},
    	{
    		r: 5659,
    		f: 9.7,
    		l: "チラシ"
    	},
    	{
    		r: 5660,
    		f: 9.7,
    		l: "クラ"
    	},
    	{
    		r: 5661,
    		f: 9.7,
    		l: "財布"
    	},
    	{
    		r: 5662,
    		f: 9.7,
    		l: "最低限"
    	},
    	{
    		r: 5663,
    		f: 9.7,
    		l: "教え"
    	},
    	{
    		r: 5664,
    		f: 9.7,
    		l: "被災"
    	},
    	{
    		r: 5665,
    		f: 9.69,
    		l: "固める"
    	},
    	{
    		r: 5666,
    		f: 9.69,
    		l: "裏切る"
    	},
    	{
    		r: 5667,
    		f: 9.68,
    		l: "待ち"
    	},
    	{
    		r: 5668,
    		f: 9.68,
    		l: "目撃"
    	},
    	{
    		r: 5669,
    		f: 9.68,
    		l: "幸運"
    	},
    	{
    		r: 5670,
    		f: 9.68,
    		l: "Ｏ"
    	},
    	{
    		r: 5671,
    		f: 9.68,
    		l: "申し込む"
    	},
    	{
    		r: 5672,
    		f: 9.68,
    		l: "テン"
    	},
    	{
    		r: 5673,
    		f: 9.68,
    		l: "任意"
    	},
    	{
    		r: 5674,
    		f: 9.67,
    		l: "イカ"
    	},
    	{
    		r: 5675,
    		f: 9.67,
    		l: "グラス"
    	},
    	{
    		r: 5676,
    		f: 9.67,
    		l: "六月"
    	},
    	{
    		r: 5677,
    		f: 9.67,
    		l: "なおす"
    	},
    	{
    		r: 5678,
    		f: 9.67,
    		l: "獣"
    	},
    	{
    		r: 5679,
    		f: 9.66,
    		l: "誠"
    	},
    	{
    		r: 5680,
    		f: 9.66,
    		l: "始め"
    	},
    	{
    		r: 5681,
    		f: 9.66,
    		l: "師匠"
    	},
    	{
    		r: 5682,
    		f: 9.66,
    		l: "中川"
    	},
    	{
    		r: 5683,
    		f: 9.66,
    		l: "早々"
    	},
    	{
    		r: 5684,
    		f: 9.65,
    		l: "デート"
    	},
    	{
    		r: 5685,
    		f: 9.65,
    		l: "生存"
    	},
    	{
    		r: 5686,
    		f: 9.65,
    		l: "周波数"
    	},
    	{
    		r: 5687,
    		f: 9.65,
    		l: "履く"
    	},
    	{
    		r: 5688,
    		f: 9.64,
    		l: "斎藤"
    	},
    	{
    		r: 5689,
    		f: 9.64,
    		l: "人員"
    	},
    	{
    		r: 5690,
    		f: 9.64,
    		l: "黒人"
    	},
    	{
    		r: 5691,
    		f: 9.63,
    		l: "地理"
    	},
    	{
    		r: 5692,
    		f: 9.63,
    		l: "取り"
    	},
    	{
    		r: 5693,
    		f: 9.63,
    		l: "計量"
    	},
    	{
    		r: 5694,
    		f: 9.62,
    		l: "行き"
    	},
    	{
    		r: 5695,
    		f: 9.62,
    		l: "ミュージシャン"
    	},
    	{
    		r: 5696,
    		f: 9.62,
    		l: "就業"
    	},
    	{
    		r: 5697,
    		f: 9.61,
    		l: "朝刊"
    	},
    	{
    		r: 5698,
    		f: 9.61,
    		l: "つかう"
    	},
    	{
    		r: 5699,
    		f: 9.61,
    		l: "スポンサー"
    	},
    	{
    		r: 5700,
    		f: 9.6,
    		l: "ＳＦ"
    	},
    	{
    		r: 5701,
    		f: 9.6,
    		l: "遺族"
    	},
    	{
    		r: 5702,
    		f: 9.59,
    		l: "開業"
    	},
    	{
    		r: 5703,
    		f: 9.59,
    		l: "海洋"
    	},
    	{
    		r: 5704,
    		f: 9.59,
    		l: "飛び込む"
    	},
    	{
    		r: 5705,
    		f: 9.59,
    		l: "普遍"
    	},
    	{
    		r: 5706,
    		f: 9.59,
    		l: "ならでは"
    	},
    	{
    		r: 5707,
    		f: 9.59,
    		l: "禁じる"
    	},
    	{
    		r: 5708,
    		f: 9.58,
    		l: "家事"
    	},
    	{
    		r: 5709,
    		f: 9.58,
    		l: "各社"
    	},
    	{
    		r: 5710,
    		f: 9.58,
    		l: "定年"
    	},
    	{
    		r: 5711,
    		f: 9.57,
    		l: "姉さん"
    	},
    	{
    		r: 5712,
    		f: 9.57,
    		l: "オヤジ"
    	},
    	{
    		r: 5713,
    		f: 9.57,
    		l: "東京大学"
    	},
    	{
    		r: 5714,
    		f: 9.57,
    		l: "適す"
    	},
    	{
    		r: 5715,
    		f: 9.56,
    		l: "書き"
    	},
    	{
    		r: 5716,
    		f: 9.56,
    		l: "フロー"
    	},
    	{
    		r: 5717,
    		f: 9.56,
    		l: "いつの間にか"
    	},
    	{
    		r: 5718,
    		f: 9.55,
    		l: "不快"
    	},
    	{
    		r: 5719,
    		f: 9.55,
    		l: "海軍"
    	},
    	{
    		r: 5720,
    		f: 9.54,
    		l: "賃貸"
    	},
    	{
    		r: 5721,
    		f: 9.54,
    		l: "解答"
    	},
    	{
    		r: 5722,
    		f: 9.54,
    		l: "伝達"
    	},
    	{
    		r: 5723,
    		f: 9.54,
    		l: "点検"
    	},
    	{
    		r: 5724,
    		f: 9.54,
    		l: "シティ"
    	},
    	{
    		r: 5725,
    		f: 9.53,
    		l: "信念"
    	},
    	{
    		r: 5726,
    		f: 9.53,
    		l: "ポート"
    	},
    	{
    		r: 5727,
    		f: 9.53,
    		l: "知り合う"
    	},
    	{
    		r: 5728,
    		f: 9.53,
    		l: "どなた"
    	},
    	{
    		r: 5729,
    		f: 9.52,
    		l: "未だ"
    	},
    	{
    		r: 5730,
    		f: 9.51,
    		l: "死体"
    	},
    	{
    		r: 5731,
    		f: 9.51,
    		l: "採る"
    	},
    	{
    		r: 5732,
    		f: 9.51,
    		l: "一郎"
    	},
    	{
    		r: 5733,
    		f: 9.51,
    		l: "宗"
    	},
    	{
    		r: 5734,
    		f: 9.51,
    		l: "レート"
    	},
    	{
    		r: 5735,
    		f: 9.5,
    		l: "お手伝い"
    	},
    	{
    		r: 5736,
    		f: 9.5,
    		l: "ファースト"
    	},
    	{
    		r: 5737,
    		f: 9.5,
    		l: "おば"
    	},
    	{
    		r: 5738,
    		f: 9.5,
    		l: "外出"
    	},
    	{
    		r: 5739,
    		f: 9.5,
    		l: "インチ"
    	},
    	{
    		r: 5740,
    		f: 9.5,
    		l: "太る"
    	},
    	{
    		r: 5741,
    		f: 9.49,
    		l: "傘"
    	},
    	{
    		r: 5742,
    		f: 9.49,
    		l: "親父"
    	},
    	{
    		r: 5743,
    		f: 9.49,
    		l: "排出"
    	},
    	{
    		r: 5744,
    		f: 9.49,
    		l: "高額"
    	},
    	{
    		r: 5745,
    		f: 9.49,
    		l: "遂行"
    	},
    	{
    		r: 5746,
    		f: 9.48,
    		l: "ナイフ"
    	},
    	{
    		r: 5747,
    		f: 9.48,
    		l: "スピーカー"
    	},
    	{
    		r: 5748,
    		f: 9.48,
    		l: "傷つける"
    	},
    	{
    		r: 5749,
    		f: 9.47,
    		l: "成人"
    	},
    	{
    		r: 5750,
    		f: 9.47,
    		l: "牛肉"
    	},
    	{
    		r: 5751,
    		f: 9.47,
    		l: "印"
    	},
    	{
    		r: 5752,
    		f: 9.47,
    		l: "マナー"
    	},
    	{
    		r: 5753,
    		f: 9.47,
    		l: "学園"
    	},
    	{
    		r: 5754,
    		f: 9.47,
    		l: "新書"
    	},
    	{
    		r: 5755,
    		f: 9.47,
    		l: "入札"
    	},
    	{
    		r: 5756,
    		f: 9.46,
    		l: "実装"
    	},
    	{
    		r: 5757,
    		f: 9.46,
    		l: "乗り込む"
    	},
    	{
    		r: 5758,
    		f: 9.45,
    		l: "決済"
    	},
    	{
    		r: 5759,
    		f: 9.45,
    		l: "まう"
    	},
    	{
    		r: 5760,
    		f: 9.45,
    		l: "マネー"
    	},
    	{
    		r: 5761,
    		f: 9.45,
    		l: "サポーター"
    	},
    	{
    		r: 5762,
    		f: 9.45,
    		l: "班"
    	},
    	{
    		r: 5763,
    		f: 9.45,
    		l: "特典"
    	},
    	{
    		r: 5764,
    		f: 9.44,
    		l: "儀式"
    	},
    	{
    		r: 5765,
    		f: 9.44,
    		l: "建"
    	},
    	{
    		r: 5766,
    		f: 9.44,
    		l: "カラオケ"
    	},
    	{
    		r: 5767,
    		f: 9.44,
    		l: "実証"
    	},
    	{
    		r: 5768,
    		f: 9.44,
    		l: "ハート"
    	},
    	{
    		r: 5769,
    		f: 9.44,
    		l: "デル"
    	},
    	{
    		r: 5770,
    		f: 9.44,
    		l: "針"
    	},
    	{
    		r: 5771,
    		f: 9.44,
    		l: "辻"
    	},
    	{
    		r: 5772,
    		f: 9.44,
    		l: "エントリ"
    	},
    	{
    		r: 5773,
    		f: 9.44,
    		l: "二度と"
    	},
    	{
    		r: 5774,
    		f: 9.44,
    		l: "曲目"
    	},
    	{
    		r: 5775,
    		f: 9.44,
    		l: "キレイ"
    	},
    	{
    		r: 5776,
    		f: 9.43,
    		l: "自衛"
    	},
    	{
    		r: 5777,
    		f: 9.43,
    		l: "笑える"
    	},
    	{
    		r: 5778,
    		f: 9.43,
    		l: "沈む"
    	},
    	{
    		r: 5779,
    		f: 9.42,
    		l: "挟む"
    	},
    	{
    		r: 5780,
    		f: 9.42,
    		l: "ガソリン"
    	},
    	{
    		r: 5781,
    		f: 9.42,
    		l: "焦る"
    	},
    	{
    		r: 5782,
    		f: 9.42,
    		l: "掴む"
    	},
    	{
    		r: 5783,
    		f: 9.41,
    		l: "こりゃ"
    	},
    	{
    		r: 5784,
    		f: 9.41,
    		l: "接す"
    	},
    	{
    		r: 5785,
    		f: 9.41,
    		l: "新刊"
    	},
    	{
    		r: 5786,
    		f: 9.4,
    		l: "世界一"
    	},
    	{
    		r: 5787,
    		f: 9.4,
    		l: "固有"
    	},
    	{
    		r: 5788,
    		f: 9.4,
    		l: "熊本"
    	},
    	{
    		r: 5789,
    		f: 9.4,
    		l: "リソース"
    	},
    	{
    		r: 5790,
    		f: 9.39,
    		l: "フレーズ"
    	},
    	{
    		r: 5791,
    		f: 9.38,
    		l: "董"
    	},
    	{
    		r: 5792,
    		f: 9.38,
    		l: "アカデミー"
    	},
    	{
    		r: 5793,
    		f: 9.38,
    		l: "有無"
    	},
    	{
    		r: 5794,
    		f: 9.38,
    		l: "中野"
    	},
    	{
    		r: 5795,
    		f: 9.38,
    		l: "沈黙"
    	},
    	{
    		r: 5796,
    		f: 9.38,
    		l: "大気"
    	},
    	{
    		r: 5797,
    		f: 9.38,
    		l: "おばさん"
    	},
    	{
    		r: 5798,
    		f: 9.37,
    		l: "中略"
    	},
    	{
    		r: 5799,
    		f: 9.37,
    		l: "予告"
    	},
    	{
    		r: 5800,
    		f: 9.37,
    		l: "ビザ"
    	},
    	{
    		r: 5801,
    		f: 9.37,
    		l: "工房"
    	},
    	{
    		r: 5802,
    		f: 9.36,
    		l: "石原"
    	},
    	{
    		r: 5803,
    		f: 9.36,
    		l: "難民"
    	},
    	{
    		r: 5804,
    		f: 9.36,
    		l: "チン"
    	},
    	{
    		r: 5805,
    		f: 9.35,
    		l: "交わす"
    	},
    	{
    		r: 5806,
    		f: 9.35,
    		l: "属性"
    	},
    	{
    		r: 5807,
    		f: 9.35,
    		l: "幾ら"
    	},
    	{
    		r: 5808,
    		f: 9.35,
    		l: "倒産"
    	},
    	{
    		r: 5809,
    		f: 9.35,
    		l: "渋滞"
    	},
    	{
    		r: 5810,
    		f: 9.35,
    		l: "地味"
    	},
    	{
    		r: 5811,
    		f: 9.33,
    		l: "取り扱い"
    	},
    	{
    		r: 5812,
    		f: 9.32,
    		l: "ダブル"
    	},
    	{
    		r: 5813,
    		f: 9.32,
    		l: "揺れる"
    	},
    	{
    		r: 5814,
    		f: 9.32,
    		l: "先物"
    	},
    	{
    		r: 5815,
    		f: 9.32,
    		l: "引越し"
    	},
    	{
    		r: 5816,
    		f: 9.32,
    		l: "図面"
    	},
    	{
    		r: 5817,
    		f: 9.31,
    		l: "抜粋"
    	},
    	{
    		r: 5818,
    		f: 9.31,
    		l: "消防"
    	},
    	{
    		r: 5819,
    		f: 9.31,
    		l: "起訴"
    	},
    	{
    		r: 5820,
    		f: 9.31,
    		l: "切り替える"
    	},
    	{
    		r: 5821,
    		f: 9.3,
    		l: "検出"
    	},
    	{
    		r: 5822,
    		f: 9.3,
    		l: "多々"
    	},
    	{
    		r: 5823,
    		f: 9.3,
    		l: "４つ"
    	},
    	{
    		r: 5824,
    		f: 9.3,
    		l: "ユニーク"
    	},
    	{
    		r: 5825,
    		f: 9.3,
    		l: "限度"
    	},
    	{
    		r: 5826,
    		f: 9.3,
    		l: "整う"
    	},
    	{
    		r: 5827,
    		f: 9.3,
    		l: "まえる"
    	},
    	{
    		r: 5828,
    		f: 9.29,
    		l: "ダメージ"
    	},
    	{
    		r: 5829,
    		f: 9.29,
    		l: "左手"
    	},
    	{
    		r: 5830,
    		f: 9.29,
    		l: "欠点"
    	},
    	{
    		r: 5831,
    		f: 9.29,
    		l: "水道"
    	},
    	{
    		r: 5832,
    		f: 9.28,
    		l: "陰"
    	},
    	{
    		r: 5833,
    		f: 9.28,
    		l: "北部"
    	},
    	{
    		r: 5834,
    		f: 9.28,
    		l: "取り込む"
    	},
    	{
    		r: 5835,
    		f: 9.28,
    		l: "要は"
    	},
    	{
    		r: 5836,
    		f: 9.28,
    		l: "検定"
    	},
    	{
    		r: 5837,
    		f: 9.28,
    		l: "台詞"
    	},
    	{
    		r: 5838,
    		f: 9.28,
    		l: "柔軟"
    	},
    	{
    		r: 5839,
    		f: 9.28,
    		l: "としまして"
    	},
    	{
    		r: 5840,
    		f: 9.27,
    		l: "アーカイブ"
    	},
    	{
    		r: 5841,
    		f: 9.27,
    		l: "何ら"
    	},
    	{
    		r: 5842,
    		f: 9.27,
    		l: "ショット"
    	},
    	{
    		r: 5843,
    		f: 9.27,
    		l: "ねこ"
    	},
    	{
    		r: 5844,
    		f: 9.27,
    		l: "明記"
    	},
    	{
    		r: 5845,
    		f: 9.27,
    		l: "学力"
    	},
    	{
    		r: 5846,
    		f: 9.25,
    		l: "分子"
    	},
    	{
    		r: 5847,
    		f: 9.25,
    		l: "計測"
    	},
    	{
    		r: 5848,
    		f: 9.25,
    		l: "東洋"
    	},
    	{
    		r: 5849,
    		f: 9.25,
    		l: "まさしく"
    	},
    	{
    		r: 5850,
    		f: 9.25,
    		l: "ヵ月"
    	},
    	{
    		r: 5851,
    		f: 9.24,
    		l: "マニア"
    	},
    	{
    		r: 5852,
    		f: 9.24,
    		l: "親戚"
    	},
    	{
    		r: 5853,
    		f: 9.24,
    		l: "告発"
    	},
    	{
    		r: 5854,
    		f: 9.24,
    		l: "宿題"
    	},
    	{
    		r: 5855,
    		f: 9.23,
    		l: "追及"
    	},
    	{
    		r: 5856,
    		f: 9.23,
    		l: "郎"
    	},
    	{
    		r: 5857,
    		f: 9.23,
    		l: "青木"
    	},
    	{
    		r: 5858,
    		f: 9.23,
    		l: "牧師"
    	},
    	{
    		r: 5859,
    		f: 9.23,
    		l: "もしかして"
    	},
    	{
    		r: 5860,
    		f: 9.22,
    		l: "対照"
    	},
    	{
    		r: 5861,
    		f: 9.22,
    		l: "振り"
    	},
    	{
    		r: 5862,
    		f: 9.22,
    		l: "一家"
    	},
    	{
    		r: 5863,
    		f: 9.22,
    		l: "あん"
    	},
    	{
    		r: 5864,
    		f: 9.22,
    		l: "ＣＭ"
    	},
    	{
    		r: 5865,
    		f: 9.22,
    		l: "体育"
    	},
    	{
    		r: 5866,
    		f: 9.21,
    		l: "ゐる"
    	},
    	{
    		r: 5867,
    		f: 9.21,
    		l: "さらす"
    	},
    	{
    		r: 5868,
    		f: 9.21,
    		l: "シャワー"
    	},
    	{
    		r: 5869,
    		f: 9.21,
    		l: "貴族"
    	},
    	{
    		r: 5870,
    		f: 9.21,
    		l: "疲労"
    	},
    	{
    		r: 5871,
    		f: 9.21,
    		l: "賢い"
    	},
    	{
    		r: 5872,
    		f: 9.21,
    		l: "フロント"
    	},
    	{
    		r: 5873,
    		f: 9.21,
    		l: "前述"
    	},
    	{
    		r: 5874,
    		f: 9.21,
    		l: "特例"
    	},
    	{
    		r: 5875,
    		f: 9.21,
    		l: "精度"
    	},
    	{
    		r: 5876,
    		f: 9.21,
    		l: "傾ける"
    	},
    	{
    		r: 5877,
    		f: 9.2,
    		l: "夫妻"
    	},
    	{
    		r: 5878,
    		f: 9.19,
    		l: "よほど"
    	},
    	{
    		r: 5879,
    		f: 9.19,
    		l: "中途半端"
    	},
    	{
    		r: 5880,
    		f: 9.18,
    		l: "追いかける"
    	},
    	{
    		r: 5881,
    		f: 9.18,
    		l: "ロール"
    	},
    	{
    		r: 5882,
    		f: 9.18,
    		l: "岐阜"
    	},
    	{
    		r: 5883,
    		f: 9.18,
    		l: "ライバル"
    	},
    	{
    		r: 5884,
    		f: 9.17,
    		l: "あいつ"
    	},
    	{
    		r: 5885,
    		f: 9.17,
    		l: "バックトラック"
    	},
    	{
    		r: 5886,
    		f: 9.16,
    		l: "ジャー"
    	},
    	{
    		r: 5887,
    		f: 9.16,
    		l: "福"
    	},
    	{
    		r: 5888,
    		f: 9.16,
    		l: "反射"
    	},
    	{
    		r: 5889,
    		f: 9.16,
    		l: "福田"
    	},
    	{
    		r: 5890,
    		f: 9.16,
    		l: "使い"
    	},
    	{
    		r: 5891,
    		f: 9.16,
    		l: "原料"
    	},
    	{
    		r: 5892,
    		f: 9.16,
    		l: "中立"
    	},
    	{
    		r: 5893,
    		f: 9.16,
    		l: "心地よい"
    	},
    	{
    		r: 5894,
    		f: 9.15,
    		l: "曰く"
    	},
    	{
    		r: 5895,
    		f: 9.15,
    		l: "相違"
    	},
    	{
    		r: 5896,
    		f: 9.15,
    		l: "ぶん"
    	},
    	{
    		r: 5897,
    		f: 9.14,
    		l: "大抵"
    	},
    	{
    		r: 5898,
    		f: 9.14,
    		l: "特有"
    	},
    	{
    		r: 5899,
    		f: 9.14,
    		l: "山形"
    	},
    	{
    		r: 5900,
    		f: 9.14,
    		l: "ドキュメント"
    	},
    	{
    		r: 5901,
    		f: 9.14,
    		l: "電"
    	},
    	{
    		r: 5902,
    		f: 9.14,
    		l: "苦痛"
    	},
    	{
    		r: 5903,
    		f: 9.13,
    		l: "改訂"
    	},
    	{
    		r: 5904,
    		f: 9.13,
    		l: "アナログ"
    	},
    	{
    		r: 5905,
    		f: 9.13,
    		l: "ついつい"
    	},
    	{
    		r: 5906,
    		f: 9.13,
    		l: "脱出"
    	},
    	{
    		r: 5907,
    		f: 9.13,
    		l: "づく"
    	},
    	{
    		r: 5908,
    		f: 9.13,
    		l: "防犯"
    	},
    	{
    		r: 5909,
    		f: 9.13,
    		l: "汚い"
    	},
    	{
    		r: 5910,
    		f: 9.13,
    		l: "フジテレビ"
    	},
    	{
    		r: 5911,
    		f: 9.13,
    		l: "指針"
    	},
    	{
    		r: 5912,
    		f: 9.12,
    		l: "ビン"
    	},
    	{
    		r: 5913,
    		f: 9.12,
    		l: "主流"
    	},
    	{
    		r: 5914,
    		f: 9.12,
    		l: "友だち"
    	},
    	{
    		r: 5915,
    		f: 9.11,
    		l: "たどる"
    	},
    	{
    		r: 5916,
    		f: 9.11,
    		l: "浮く"
    	},
    	{
    		r: 5917,
    		f: 9.1,
    		l: "浅い"
    	},
    	{
    		r: 5918,
    		f: 9.1,
    		l: "テンポ"
    	},
    	{
    		r: 5919,
    		f: 9.1,
    		l: "この間"
    	},
    	{
    		r: 5920,
    		f: 9.1,
    		l: "上級"
    	},
    	{
    		r: 5921,
    		f: 9.1,
    		l: "徳"
    	},
    	{
    		r: 5922,
    		f: 9.1,
    		l: "全米"
    	},
    	{
    		r: 5923,
    		f: 9.09,
    		l: "お薦め"
    	},
    	{
    		r: 5924,
    		f: 9.09,
    		l: "なし"
    	},
    	{
    		r: 5925,
    		f: 9.09,
    		l: "刑務所"
    	},
    	{
    		r: 5926,
    		f: 9.09,
    		l: "クレジットカード"
    	},
    	{
    		r: 5927,
    		f: 9.09,
    		l: "まじめ"
    	},
    	{
    		r: 5928,
    		f: 9.09,
    		l: "技能"
    	},
    	{
    		r: 5929,
    		f: 9.08,
    		l: "出口"
    	},
    	{
    		r: 5930,
    		f: 9.08,
    		l: "次世代"
    	},
    	{
    		r: 5931,
    		f: 9.08,
    		l: "専攻"
    	},
    	{
    		r: 5932,
    		f: 9.08,
    		l: "湧く"
    	},
    	{
    		r: 5933,
    		f: 9.08,
    		l: "カネ"
    	},
    	{
    		r: 5934,
    		f: 9.08,
    		l: "しめる"
    	},
    	{
    		r: 5935,
    		f: 9.07,
    		l: "誓う"
    	},
    	{
    		r: 5936,
    		f: 9.06,
    		l: "尻"
    	},
    	{
    		r: 5937,
    		f: 9.06,
    		l: "覆い"
    	},
    	{
    		r: 5938,
    		f: 9.06,
    		l: "オーケストラ"
    	},
    	{
    		r: 5939,
    		f: 9.06,
    		l: "強める"
    	},
    	{
    		r: 5940,
    		f: 9.06,
    		l: "あんなに"
    	},
    	{
    		r: 5941,
    		f: 9.06,
    		l: "リラックス"
    	},
    	{
    		r: 5942,
    		f: 9.05,
    		l: "デフレ"
    	},
    	{
    		r: 5943,
    		f: 9.05,
    		l: "貧乏"
    	},
    	{
    		r: 5944,
    		f: 9.05,
    		l: "ギャップ"
    	},
    	{
    		r: 5945,
    		f: 9.05,
    		l: "すこし"
    	},
    	{
    		r: 5946,
    		f: 9.05,
    		l: "太平洋"
    	},
    	{
    		r: 5947,
    		f: 9.04,
    		l: "山崎"
    	},
    	{
    		r: 5948,
    		f: 9.04,
    		l: "刊"
    	},
    	{
    		r: 5949,
    		f: 9.04,
    		l: "婦"
    	},
    	{
    		r: 5950,
    		f: 9.04,
    		l: "進"
    	},
    	{
    		r: 5951,
    		f: 9.03,
    		l: "つまる"
    	},
    	{
    		r: 5952,
    		f: 9.03,
    		l: "ドイツ語"
    	},
    	{
    		r: 5953,
    		f: 9.03,
    		l: "舌"
    	},
    	{
    		r: 5954,
    		f: 9.03,
    		l: "硬い"
    	},
    	{
    		r: 5955,
    		f: 9.03,
    		l: "リフォーム"
    	},
    	{
    		r: 5956,
    		f: 9.02,
    		l: "苦しみ"
    	},
    	{
    		r: 5957,
    		f: 9.02,
    		l: "ファー"
    	},
    	{
    		r: 5958,
    		f: 9.02,
    		l: "賢治"
    	},
    	{
    		r: 5959,
    		f: 9.01,
    		l: "ハリウッド"
    	},
    	{
    		r: 5960,
    		f: 9.01,
    		l: "一斉"
    	},
    	{
    		r: 5961,
    		f: 9.01,
    		l: "厳密"
    	},
    	{
    		r: 5962,
    		f: 9.01,
    		l: "ボディ"
    	},
    	{
    		r: 5963,
    		f: 9.01,
    		l: "クマ"
    	},
    	{
    		r: 5964,
    		f: 9.01,
    		l: "県民"
    	},
    	{
    		r: 5965,
    		f: 9,
    		l: "ときどき"
    	},
    	{
    		r: 5966,
    		f: 9,
    		l: "費やす"
    	},
    	{
    		r: 5967,
    		f: 8.99,
    		l: "パーツ"
    	},
    	{
    		r: 5968,
    		f: 8.99,
    		l: "きっちり"
    	},
    	{
    		r: 5969,
    		f: 8.99,
    		l: "ファンタジー"
    	},
    	{
    		r: 5970,
    		f: 8.99,
    		l: "挑む"
    	},
    	{
    		r: 5971,
    		f: 8.99,
    		l: "区分"
    	},
    	{
    		r: 5972,
    		f: 8.99,
    		l: "おっ"
    	},
    	{
    		r: 5973,
    		f: 8.98,
    		l: "トレンド"
    	},
    	{
    		r: 5974,
    		f: 8.98,
    		l: "司令"
    	},
    	{
    		r: 5975,
    		f: 8.98,
    		l: "セル"
    	},
    	{
    		r: 5976,
    		f: 8.98,
    		l: "分裂"
    	},
    	{
    		r: 5977,
    		f: 8.98,
    		l: "日本国"
    	},
    	{
    		r: 5978,
    		f: 8.97,
    		l: "旗"
    	},
    	{
    		r: 5979,
    		f: 8.97,
    		l: "鎌倉"
    	},
    	{
    		r: 5980,
    		f: 8.97,
    		l: "気楽"
    	},
    	{
    		r: 5981,
    		f: 8.97,
    		l: "Ｌ"
    	},
    	{
    		r: 5982,
    		f: 8.96,
    		l: "白人"
    	},
    	{
    		r: 5983,
    		f: 8.95,
    		l: "かむ"
    	},
    	{
    		r: 5984,
    		f: 8.95,
    		l: "アンテナ"
    	},
    	{
    		r: 5985,
    		f: 8.95,
    		l: "コンサルティング"
    	},
    	{
    		r: 5986,
    		f: 8.95,
    		l: "経理"
    	},
    	{
    		r: 5987,
    		f: 8.95,
    		l: "徴収"
    	},
    	{
    		r: 5988,
    		f: 8.94,
    		l: "岡山"
    	},
    	{
    		r: 5989,
    		f: 8.94,
    		l: "具"
    	},
    	{
    		r: 5990,
    		f: 8.93,
    		l: "利害"
    	},
    	{
    		r: 5991,
    		f: 8.93,
    		l: "東南アジア"
    	},
    	{
    		r: 5992,
    		f: 8.93,
    		l: "共謀"
    	},
    	{
    		r: 5993,
    		f: 8.93,
    		l: "尽きる"
    	},
    	{
    		r: 5994,
    		f: 8.93,
    		l: "所長"
    	},
    	{
    		r: 5995,
    		f: 8.92,
    		l: "あいさつ"
    	},
    	{
    		r: 5996,
    		f: 8.92,
    		l: "レン"
    	},
    	{
    		r: 5997,
    		f: 8.91,
    		l: "スタンド"
    	},
    	{
    		r: 5998,
    		f: 8.91,
    		l: "重量"
    	},
    	{
    		r: 5999,
    		f: 8.91,
    		l: "汁"
    	},
    	{
    		r: 6000,
    		f: 8.91,
    		l: "一つ一つ"
    	},
    	{
    		r: 6001,
    		f: 8.91,
    		l: "道徳"
    	},
    	{
    		r: 6002,
    		f: 8.9,
    		l: "マリア"
    	},
    	{
    		r: 6003,
    		f: 8.9,
    		l: "混ぜる"
    	},
    	{
    		r: 6004,
    		f: 8.9,
    		l: "説く"
    	},
    	{
    		r: 6005,
    		f: 8.9,
    		l: "再編"
    	},
    	{
    		r: 6006,
    		f: 8.89,
    		l: "コマ"
    	},
    	{
    		r: 6007,
    		f: 8.89,
    		l: "ロケット"
    	},
    	{
    		r: 6008,
    		f: 8.89,
    		l: "喧嘩"
    	},
    	{
    		r: 6009,
    		f: 8.89,
    		l: "生地"
    	},
    	{
    		r: 6010,
    		f: 8.89,
    		l: "カ所"
    	},
    	{
    		r: 6011,
    		f: 8.89,
    		l: "中年"
    	},
    	{
    		r: 6012,
    		f: 8.89,
    		l: "擦る"
    	},
    	{
    		r: 6013,
    		f: 8.89,
    		l: "リアルタイム"
    	},
    	{
    		r: 6014,
    		f: 8.88,
    		l: "派手"
    	},
    	{
    		r: 6015,
    		f: 8.88,
    		l: "対決"
    	},
    	{
    		r: 6016,
    		f: 8.87,
    		l: "店頭"
    	},
    	{
    		r: 6017,
    		f: 8.87,
    		l: "情けない"
    	},
    	{
    		r: 6018,
    		f: 8.87,
    		l: "フォト"
    	},
    	{
    		r: 6019,
    		f: 8.87,
    		l: "大都市"
    	},
    	{
    		r: 6020,
    		f: 8.87,
    		l: "相次ぐ"
    	},
    	{
    		r: 6021,
    		f: 8.87,
    		l: "下る"
    	},
    	{
    		r: 6022,
    		f: 8.87,
    		l: "還元"
    	},
    	{
    		r: 6023,
    		f: 8.86,
    		l: "っ子"
    	},
    	{
    		r: 6024,
    		f: 8.86,
    		l: "入試"
    	},
    	{
    		r: 6025,
    		f: 8.85,
    		l: "首脳"
    	},
    	{
    		r: 6026,
    		f: 8.85,
    		l: "ワークショップ"
    	},
    	{
    		r: 6027,
    		f: 8.85,
    		l: "洋"
    	},
    	{
    		r: 6028,
    		f: 8.85,
    		l: "鍛える"
    	},
    	{
    		r: 6029,
    		f: 8.85,
    		l: "この頃"
    	},
    	{
    		r: 6030,
    		f: 8.84,
    		l: "博"
    	},
    	{
    		r: 6031,
    		f: 8.84,
    		l: "学級"
    	},
    	{
    		r: 6032,
    		f: 8.84,
    		l: "丸い"
    	},
    	{
    		r: 6033,
    		f: 8.84,
    		l: "案外"
    	},
    	{
    		r: 6034,
    		f: 8.84,
    		l: "苦情"
    	},
    	{
    		r: 6035,
    		f: 8.84,
    		l: "海上"
    	},
    	{
    		r: 6036,
    		f: 8.83,
    		l: "アマゾン"
    	},
    	{
    		r: 6037,
    		f: 8.83,
    		l: "バグ"
    	},
    	{
    		r: 6038,
    		f: 8.83,
    		l: "エイズ"
    	},
    	{
    		r: 6039,
    		f: 8.83,
    		l: "あてる"
    	},
    	{
    		r: 6040,
    		f: 8.83,
    		l: "同志"
    	},
    	{
    		r: 6041,
    		f: 8.82,
    		l: "ハー"
    	},
    	{
    		r: 6042,
    		f: 8.82,
    		l: "デー"
    	},
    	{
    		r: 6043,
    		f: 8.81,
    		l: "〓"
    	},
    	{
    		r: 6044,
    		f: 8.81,
    		l: "成熟"
    	},
    	{
    		r: 6045,
    		f: 8.81,
    		l: "エンド"
    	},
    	{
    		r: 6046,
    		f: 8.81,
    		l: "工"
    	},
    	{
    		r: 6047,
    		f: 8.81,
    		l: "フジ"
    	},
    	{
    		r: 6048,
    		f: 8.8,
    		l: "目覚める"
    	},
    	{
    		r: 6049,
    		f: 8.8,
    		l: "長時間"
    	},
    	{
    		r: 6050,
    		f: 8.8,
    		l: "女王"
    	},
    	{
    		r: 6051,
    		f: 8.8,
    		l: "系統"
    	},
    	{
    		r: 6052,
    		f: 8.8,
    		l: "独裁"
    	},
    	{
    		r: 6053,
    		f: 8.8,
    		l: "嫁"
    	},
    	{
    		r: 6054,
    		f: 8.79,
    		l: "立"
    	},
    	{
    		r: 6055,
    		f: 8.79,
    		l: "分布"
    	},
    	{
    		r: 6056,
    		f: 8.79,
    		l: "プロデューサー"
    	},
    	{
    		r: 6057,
    		f: 8.79,
    		l: "フェイス"
    	},
    	{
    		r: 6058,
    		f: 8.79,
    		l: "動"
    	},
    	{
    		r: 6059,
    		f: 8.78,
    		l: "騒動"
    	},
    	{
    		r: 6060,
    		f: 8.78,
    		l: "妨害"
    	},
    	{
    		r: 6061,
    		f: 8.78,
    		l: "禁煙"
    	},
    	{
    		r: 6062,
    		f: 8.78,
    		l: "はじめまして"
    	},
    	{
    		r: 6063,
    		f: 8.78,
    		l: "そこら"
    	},
    	{
    		r: 6064,
    		f: 8.78,
    		l: "安易"
    	},
    	{
    		r: 6065,
    		f: 8.77,
    		l: "ブレーキ"
    	},
    	{
    		r: 6066,
    		f: 8.77,
    		l: "実体"
    	},
    	{
    		r: 6067,
    		f: 8.77,
    		l: "返還"
    	},
    	{
    		r: 6068,
    		f: 8.77,
    		l: "日系"
    	},
    	{
    		r: 6069,
    		f: 8.77,
    		l: "小屋"
    	},
    	{
    		r: 6070,
    		f: 8.77,
    		l: "営利"
    	},
    	{
    		r: 6071,
    		f: 8.76,
    		l: "介"
    	},
    	{
    		r: 6072,
    		f: 8.76,
    		l: "タレント"
    	},
    	{
    		r: 6073,
    		f: 8.76,
    		l: "おまけ"
    	},
    	{
    		r: 6074,
    		f: 8.76,
    		l: "マルチ"
    	},
    	{
    		r: 6075,
    		f: 8.76,
    		l: "藤原"
    	},
    	{
    		r: 6076,
    		f: 8.76,
    		l: "モンゴル"
    	},
    	{
    		r: 6077,
    		f: 8.75,
    		l: "アラブ"
    	},
    	{
    		r: 6078,
    		f: 8.75,
    		l: "野党"
    	},
    	{
    		r: 6079,
    		f: 8.74,
    		l: "言うまでもない"
    	},
    	{
    		r: 6080,
    		f: 8.74,
    		l: "力強い"
    	},
    	{
    		r: 6081,
    		f: 8.74,
    		l: "倶楽部"
    	},
    	{
    		r: 6082,
    		f: 8.74,
    		l: "譲渡"
    	},
    	{
    		r: 6083,
    		f: 8.74,
    		l: "役人"
    	},
    	{
    		r: 6084,
    		f: 8.74,
    		l: "回り"
    	},
    	{
    		r: 6085,
    		f: 8.74,
    		l: "（株）"
    	},
    	{
    		r: 6086,
    		f: 8.74,
    		l: "他社"
    	},
    	{
    		r: 6087,
    		f: 8.74,
    		l: "ＪＲ"
    	},
    	{
    		r: 6088,
    		f: 8.73,
    		l: "黄色"
    	},
    	{
    		r: 6089,
    		f: 8.72,
    		l: "属する"
    	},
    	{
    		r: 6090,
    		f: 8.72,
    		l: "高価"
    	},
    	{
    		r: 6091,
    		f: 8.72,
    		l: "亜"
    	},
    	{
    		r: 6092,
    		f: 8.72,
    		l: "改める"
    	},
    	{
    		r: 6093,
    		f: 8.72,
    		l: "売り場"
    	},
    	{
    		r: 6094,
    		f: 8.71,
    		l: "親しい"
    	},
    	{
    		r: 6095,
    		f: 8.71,
    		l: "公益"
    	},
    	{
    		r: 6096,
    		f: 8.71,
    		l: "スクリプト"
    	},
    	{
    		r: 6097,
    		f: 8.71,
    		l: "どうにか"
    	},
    	{
    		r: 6098,
    		f: 8.71,
    		l: "そうして"
    	},
    	{
    		r: 6099,
    		f: 8.7,
    		l: "全文"
    	},
    	{
    		r: 6100,
    		f: 8.7,
    		l: "たてる"
    	},
    	{
    		r: 6101,
    		f: 8.7,
    		l: "七月"
    	},
    	{
    		r: 6102,
    		f: 8.7,
    		l: "ウィンドウ"
    	},
    	{
    		r: 6103,
    		f: 8.69,
    		l: "達する"
    	},
    	{
    		r: 6104,
    		f: 8.69,
    		l: "ウェア"
    	},
    	{
    		r: 6105,
    		f: 8.69,
    		l: "心がける"
    	},
    	{
    		r: 6106,
    		f: 8.69,
    		l: "焼酎"
    	},
    	{
    		r: 6107,
    		f: 8.69,
    		l: "住"
    	},
    	{
    		r: 6108,
    		f: 8.68,
    		l: "パンツ"
    	},
    	{
    		r: 6109,
    		f: 8.68,
    		l: "土曜"
    	},
    	{
    		r: 6110,
    		f: 8.68,
    		l: "反面"
    	},
    	{
    		r: 6111,
    		f: 8.68,
    		l: "イオン"
    	},
    	{
    		r: 6112,
    		f: 8.67,
    		l: "迫力"
    	},
    	{
    		r: 6113,
    		f: 8.67,
    		l: "僕たち"
    	},
    	{
    		r: 6114,
    		f: 8.67,
    		l: "脱"
    	},
    	{
    		r: 6115,
    		f: 8.67,
    		l: "支払"
    	},
    	{
    		r: 6116,
    		f: 8.67,
    		l: "札"
    	},
    	{
    		r: 6117,
    		f: 8.67,
    		l: "フォント"
    	},
    	{
    		r: 6118,
    		f: 8.67,
    		l: "理性"
    	},
    	{
    		r: 6119,
    		f: 8.67,
    		l: "卒"
    	},
    	{
    		r: 6120,
    		f: 8.66,
    		l: "方策"
    	},
    	{
    		r: 6121,
    		f: 8.66,
    		l: "有害"
    	},
    	{
    		r: 6122,
    		f: 8.66,
    		l: "上げ"
    	},
    	{
    		r: 6123,
    		f: 8.66,
    		l: "菌"
    	},
    	{
    		r: 6124,
    		f: 8.66,
    		l: "クリスチャン"
    	},
    	{
    		r: 6125,
    		f: 8.66,
    		l: "成"
    	},
    	{
    		r: 6126,
    		f: 8.65,
    		l: "狂う"
    	},
    	{
    		r: 6127,
    		f: 8.65,
    		l: "Ｘ"
    	},
    	{
    		r: 6128,
    		f: 8.65,
    		l: "乗客"
    	},
    	{
    		r: 6129,
    		f: 8.65,
    		l: "幸"
    	},
    	{
    		r: 6130,
    		f: 8.65,
    		l: "布団"
    	},
    	{
    		r: 6131,
    		f: 8.65,
    		l: "片手"
    	},
    	{
    		r: 6132,
    		f: 8.65,
    		l: "かぎり"
    	},
    	{
    		r: 6133,
    		f: 8.65,
    		l: "終る"
    	},
    	{
    		r: 6134,
    		f: 8.65,
    		l: "イヤー"
    	},
    	{
    		r: 6135,
    		f: 8.64,
    		l: "スタンス"
    	},
    	{
    		r: 6136,
    		f: 8.64,
    		l: "座席"
    	},
    	{
    		r: 6137,
    		f: 8.63,
    		l: "盛ん"
    	},
    	{
    		r: 6138,
    		f: 8.63,
    		l: "松井"
    	},
    	{
    		r: 6139,
    		f: 8.63,
    		l: "形状"
    	},
    	{
    		r: 6140,
    		f: 8.63,
    		l: "ほら"
    	},
    	{
    		r: 6141,
    		f: 8.63,
    		l: "ログイン"
    	},
    	{
    		r: 6142,
    		f: 8.63,
    		l: "ナンバー"
    	},
    	{
    		r: 6143,
    		f: 8.63,
    		l: "推奨"
    	},
    	{
    		r: 6144,
    		f: 8.63,
    		l: "建て"
    	},
    	{
    		r: 6145,
    		f: 8.63,
    		l: "サイクル"
    	},
    	{
    		r: 6146,
    		f: 8.63,
    		l: "立ち寄る"
    	},
    	{
    		r: 6147,
    		f: 8.62,
    		l: "常"
    	},
    	{
    		r: 6148,
    		f: 8.62,
    		l: "ゲート"
    	},
    	{
    		r: 6149,
    		f: 8.62,
    		l: "主権"
    	},
    	{
    		r: 6150,
    		f: 8.62,
    		l: "もどる"
    	},
    	{
    		r: 6151,
    		f: 8.62,
    		l: "瞳"
    	},
    	{
    		r: 6152,
    		f: 8.61,
    		l: "遭う"
    	},
    	{
    		r: 6153,
    		f: 8.61,
    		l: "開拓"
    	},
    	{
    		r: 6154,
    		f: 8.61,
    		l: "右側"
    	},
    	{
    		r: 6155,
    		f: 8.61,
    		l: "メイク"
    	},
    	{
    		r: 6156,
    		f: 8.6,
    		l: "原点"
    	},
    	{
    		r: 6157,
    		f: 8.6,
    		l: "胃"
    	},
    	{
    		r: 6158,
    		f: 8.6,
    		l: "粒"
    	},
    	{
    		r: 6159,
    		f: 8.59,
    		l: "夜間"
    	},
    	{
    		r: 6160,
    		f: 8.59,
    		l: "並み"
    	},
    	{
    		r: 6161,
    		f: 8.59,
    		l: "ストップ"
    	},
    	{
    		r: 6162,
    		f: 8.58,
    		l: "速"
    	},
    	{
    		r: 6163,
    		f: 8.58,
    		l: "年収"
    	},
    	{
    		r: 6164,
    		f: 8.58,
    		l: "等しい"
    	},
    	{
    		r: 6165,
    		f: 8.58,
    		l: "偽造"
    	},
    	{
    		r: 6166,
    		f: 8.58,
    		l: "出品"
    	},
    	{
    		r: 6167,
    		f: 8.57,
    		l: "写る"
    	},
    	{
    		r: 6168,
    		f: 8.57,
    		l: "今年度"
    	},
    	{
    		r: 6169,
    		f: 8.57,
    		l: "散る"
    	},
    	{
    		r: 6170,
    		f: 8.56,
    		l: "服装"
    	},
    	{
    		r: 6171,
    		f: 8.56,
    		l: "いち"
    	},
    	{
    		r: 6172,
    		f: 8.55,
    		l: "利点"
    	},
    	{
    		r: 6173,
    		f: 8.55,
    		l: "アップデート"
    	},
    	{
    		r: 6174,
    		f: 8.55,
    		l: "繰り広げる"
    	},
    	{
    		r: 6175,
    		f: 8.54,
    		l: "短縮"
    	},
    	{
    		r: 6176,
    		f: 8.54,
    		l: "貨幣"
    	},
    	{
    		r: 6177,
    		f: 8.54,
    		l: "難"
    	},
    	{
    		r: 6178,
    		f: 8.54,
    		l: "中旬"
    	},
    	{
    		r: 6179,
    		f: 8.54,
    		l: "納める"
    	},
    	{
    		r: 6180,
    		f: 8.54,
    		l: "大した"
    	},
    	{
    		r: 6181,
    		f: 8.54,
    		l: "青山"
    	},
    	{
    		r: 6182,
    		f: 8.53,
    		l: "膨らむ"
    	},
    	{
    		r: 6183,
    		f: 8.53,
    		l: "産地"
    	},
    	{
    		r: 6184,
    		f: 8.53,
    		l: "生える"
    	},
    	{
    		r: 6185,
    		f: 8.53,
    		l: "民衆"
    	},
    	{
    		r: 6186,
    		f: 8.53,
    		l: "九月"
    	},
    	{
    		r: 6187,
    		f: 8.52,
    		l: "年寄り"
    	},
    	{
    		r: 6188,
    		f: 8.52,
    		l: "仕上げる"
    	},
    	{
    		r: 6189,
    		f: 8.52,
    		l: "まっ"
    	},
    	{
    		r: 6190,
    		f: 8.52,
    		l: "矢"
    	},
    	{
    		r: 6191,
    		f: 8.52,
    		l: "ビット"
    	},
    	{
    		r: 6192,
    		f: 8.52,
    		l: "厚"
    	},
    	{
    		r: 6193,
    		f: 8.51,
    		l: "偏見"
    	},
    	{
    		r: 6194,
    		f: 8.51,
    		l: "ヘン"
    	},
    	{
    		r: 6195,
    		f: 8.5,
    		l: "教訓"
    	},
    	{
    		r: 6196,
    		f: 8.5,
    		l: "坂本"
    	},
    	{
    		r: 6197,
    		f: 8.5,
    		l: "視察"
    	},
    	{
    		r: 6198,
    		f: 8.5,
    		l: "八月"
    	},
    	{
    		r: 6199,
    		f: 8.5,
    		l: "主任"
    	},
    	{
    		r: 6200,
    		f: 8.48,
    		l: "リゾート"
    	},
    	{
    		r: 6201,
    		f: 8.48,
    		l: "響き"
    	},
    	{
    		r: 6202,
    		f: 8.48,
    		l: "悲惨"
    	},
    	{
    		r: 6203,
    		f: 8.48,
    		l: "強いる"
    	},
    	{
    		r: 6204,
    		f: 8.48,
    		l: "ワクワク"
    	},
    	{
    		r: 6205,
    		f: 8.48,
    		l: "言論"
    	},
    	{
    		r: 6206,
    		f: 8.48,
    		l: "翼"
    	},
    	{
    		r: 6207,
    		f: 8.48,
    		l: "来月"
    	},
    	{
    		r: 6208,
    		f: 8.47,
    		l: "主題"
    	},
    	{
    		r: 6209,
    		f: 8.47,
    		l: "早急"
    	},
    	{
    		r: 6210,
    		f: 8.47,
    		l: "対談"
    	},
    	{
    		r: 6211,
    		f: 8.47,
    		l: "ベルト"
    	},
    	{
    		r: 6212,
    		f: 8.47,
    		l: "選定"
    	},
    	{
    		r: 6213,
    		f: 8.47,
    		l: "中断"
    	},
    	{
    		r: 6214,
    		f: 8.46,
    		l: "ムービー"
    	},
    	{
    		r: 6215,
    		f: 8.46,
    		l: "条項"
    	},
    	{
    		r: 6216,
    		f: 8.46,
    		l: "添える"
    	},
    	{
    		r: 6217,
    		f: 8.46,
    		l: "のぞく"
    	},
    	{
    		r: 6218,
    		f: 8.46,
    		l: "保育園"
    	},
    	{
    		r: 6219,
    		f: 8.46,
    		l: "痩せる"
    	},
    	{
    		r: 6220,
    		f: 8.46,
    		l: "福音"
    	},
    	{
    		r: 6221,
    		f: 8.46,
    		l: "診察"
    	},
    	{
    		r: 6222,
    		f: 8.46,
    		l: "縛る"
    	},
    	{
    		r: 6223,
    		f: 8.45,
    		l: "東アジア"
    	},
    	{
    		r: 6224,
    		f: 8.45,
    		l: "マジック"
    	},
    	{
    		r: 6225,
    		f: 8.44,
    		l: "正体"
    	},
    	{
    		r: 6226,
    		f: 8.44,
    		l: "原発"
    	},
    	{
    		r: 6227,
    		f: 8.44,
    		l: "自作"
    	},
    	{
    		r: 6228,
    		f: 8.44,
    		l: "キン"
    	},
    	{
    		r: 6229,
    		f: 8.43,
    		l: "〃"
    	},
    	{
    		r: 6230,
    		f: 8.43,
    		l: "生き残る"
    	},
    	{
    		r: 6231,
    		f: 8.43,
    		l: "テンション"
    	},
    	{
    		r: 6232,
    		f: 8.42,
    		l: "土日"
    	},
    	{
    		r: 6233,
    		f: 8.42,
    		l: "デパート"
    	},
    	{
    		r: 6234,
    		f: 8.42,
    		l: "偽装"
    	},
    	{
    		r: 6235,
    		f: 8.42,
    		l: "ジャケット"
    	},
    	{
    		r: 6236,
    		f: 8.42,
    		l: "富山"
    	},
    	{
    		r: 6237,
    		f: 8.42,
    		l: "作り方"
    	},
    	{
    		r: 6238,
    		f: 8.42,
    		l: "入会"
    	},
    	{
    		r: 6239,
    		f: 8.42,
    		l: "不能"
    	},
    	{
    		r: 6240,
    		f: 8.41,
    		l: "レジ"
    	},
    	{
    		r: 6241,
    		f: 8.41,
    		l: "保"
    	},
    	{
    		r: 6242,
    		f: 8.41,
    		l: "そろう"
    	},
    	{
    		r: 6243,
    		f: 8.41,
    		l: "刻む"
    	},
    	{
    		r: 6244,
    		f: 8.41,
    		l: "捧げる"
    	},
    	{
    		r: 6245,
    		f: 8.4,
    		l: "葬儀"
    	},
    	{
    		r: 6246,
    		f: 8.4,
    		l: "起源"
    	},
    	{
    		r: 6247,
    		f: 8.4,
    		l: "攻める"
    	},
    	{
    		r: 6248,
    		f: 8.4,
    		l: "国防"
    	},
    	{
    		r: 6249,
    		f: 8.4,
    		l: "アカウント"
    	},
    	{
    		r: 6250,
    		f: 8.4,
    		l: "黄"
    	},
    	{
    		r: 6251,
    		f: 8.4,
    		l: "系列"
    	},
    	{
    		r: 6252,
    		f: 8.4,
    		l: "礼拝"
    	},
    	{
    		r: 6253,
    		f: 8.4,
    		l: "夢中"
    	},
    	{
    		r: 6254,
    		f: 8.39,
    		l: "持ち出す"
    	},
    	{
    		r: 6255,
    		f: 8.39,
    		l: "エコ"
    	},
    	{
    		r: 6256,
    		f: 8.39,
    		l: "クレーム"
    	},
    	{
    		r: 6257,
    		f: 8.39,
    		l: "ミッション"
    	},
    	{
    		r: 6258,
    		f: 8.38,
    		l: "煮る"
    	},
    	{
    		r: 6259,
    		f: 8.38,
    		l: "本年"
    	},
    	{
    		r: 6260,
    		f: 8.38,
    		l: "複合"
    	},
    	{
    		r: 6261,
    		f: 8.38,
    		l: "アイコ"
    	},
    	{
    		r: 6262,
    		f: 8.38,
    		l: "リサーチ"
    	},
    	{
    		r: 6263,
    		f: 8.38,
    		l: "気象"
    	},
    	{
    		r: 6264,
    		f: 8.37,
    		l: "摂取"
    	},
    	{
    		r: 6265,
    		f: 8.37,
    		l: "火災"
    	},
    	{
    		r: 6266,
    		f: 8.37,
    		l: "近藤"
    	},
    	{
    		r: 6267,
    		f: 8.37,
    		l: "やり取り"
    	},
    	{
    		r: 6268,
    		f: 8.37,
    		l: "オール"
    	},
    	{
    		r: 6269,
    		f: 8.37,
    		l: "被る"
    	},
    	{
    		r: 6270,
    		f: 8.37,
    		l: "混む"
    	},
    	{
    		r: 6271,
    		f: 8.37,
    		l: "裸"
    	},
    	{
    		r: 6272,
    		f: 8.37,
    		l: "ごみ"
    	},
    	{
    		r: 6273,
    		f: 8.37,
    		l: "和解"
    	},
    	{
    		r: 6274,
    		f: 8.37,
    		l: "トンネル"
    	},
    	{
    		r: 6275,
    		f: 8.36,
    		l: "そっち"
    	},
    	{
    		r: 6276,
    		f: 8.36,
    		l: "二月"
    	},
    	{
    		r: 6277,
    		f: 8.36,
    		l: "打"
    	},
    	{
    		r: 6278,
    		f: 8.36,
    		l: "バッテリー"
    	},
    	{
    		r: 6279,
    		f: 8.35,
    		l: "ノン"
    	},
    	{
    		r: 6280,
    		f: 8.35,
    		l: "名乗る"
    	},
    	{
    		r: 6281,
    		f: 8.35,
    		l: "恐縮"
    	},
    	{
    		r: 6282,
    		f: 8.35,
    		l: "そしたら"
    	},
    	{
    		r: 6283,
    		f: 8.35,
    		l: "タダ"
    	},
    	{
    		r: 6284,
    		f: 8.35,
    		l: "球団"
    	},
    	{
    		r: 6285,
    		f: 8.35,
    		l: "おまけに"
    	},
    	{
    		r: 6286,
    		f: 8.35,
    		l: "合宿"
    	},
    	{
    		r: 6287,
    		f: 8.35,
    		l: "飛躍"
    	},
    	{
    		r: 6288,
    		f: 8.34,
    		l: "真相"
    	},
    	{
    		r: 6289,
    		f: 8.34,
    		l: "黄金"
    	},
    	{
    		r: 6290,
    		f: 8.34,
    		l: "補正"
    	},
    	{
    		r: 6291,
    		f: 8.34,
    		l: "ゾーン"
    	},
    	{
    		r: 6292,
    		f: 8.33,
    		l: "家賃"
    	},
    	{
    		r: 6293,
    		f: 8.33,
    		l: "居酒屋"
    	},
    	{
    		r: 6294,
    		f: 8.33,
    		l: "簡易"
    	},
    	{
    		r: 6295,
    		f: 8.33,
    		l: "同日"
    	},
    	{
    		r: 6296,
    		f: 8.33,
    		l: "ずれる"
    	},
    	{
    		r: 6297,
    		f: 8.33,
    		l: "キャスト"
    	},
    	{
    		r: 6298,
    		f: 8.33,
    		l: "三郎"
    	},
    	{
    		r: 6299,
    		f: 8.33,
    		l: "規範"
    	},
    	{
    		r: 6300,
    		f: 8.33,
    		l: "公衆"
    	},
    	{
    		r: 6301,
    		f: 8.33,
    		l: "脆弱"
    	},
    	{
    		r: 6302,
    		f: 8.32,
    		l: "ことし"
    	},
    	{
    		r: 6303,
    		f: 8.32,
    		l: "打ち出す"
    	},
    	{
    		r: 6304,
    		f: 8.31,
    		l: "ビーチ"
    	},
    	{
    		r: 6305,
    		f: 8.31,
    		l: "主として"
    	},
    	{
    		r: 6306,
    		f: 8.31,
    		l: "逃れる"
    	},
    	{
    		r: 6307,
    		f: 8.31,
    		l: "刺す"
    	},
    	{
    		r: 6308,
    		f: 8.31,
    		l: "阻止"
    	},
    	{
    		r: 6309,
    		f: 8.31,
    		l: "ほっと"
    	},
    	{
    		r: 6310,
    		f: 8.31,
    		l: "持ち主"
    	},
    	{
    		r: 6311,
    		f: 8.31,
    		l: "町村"
    	},
    	{
    		r: 6312,
    		f: 8.31,
    		l: "預ける"
    	},
    	{
    		r: 6313,
    		f: 8.31,
    		l: "令"
    	},
    	{
    		r: 6314,
    		f: 8.3,
    		l: "真似"
    	},
    	{
    		r: 6315,
    		f: 8.3,
    		l: "ゆとり"
    	},
    	{
    		r: 6316,
    		f: 8.3,
    		l: "アメリカン"
    	},
    	{
    		r: 6317,
    		f: 8.3,
    		l: "添付"
    	},
    	{
    		r: 6318,
    		f: 8.3,
    		l: "花粉"
    	},
    	{
    		r: 6319,
    		f: 8.29,
    		l: "塗装"
    	},
    	{
    		r: 6320,
    		f: 8.29,
    		l: "堪能"
    	},
    	{
    		r: 6321,
    		f: 8.29,
    		l: "晴れ"
    	},
    	{
    		r: 6322,
    		f: 8.29,
    		l: "子会社"
    	},
    	{
    		r: 6323,
    		f: 8.29,
    		l: "存続"
    	},
    	{
    		r: 6324,
    		f: 8.29,
    		l: "気持ちよい"
    	},
    	{
    		r: 6325,
    		f: 8.28,
    		l: "国庫"
    	},
    	{
    		r: 6326,
    		f: 8.28,
    		l: "ボケ"
    	},
    	{
    		r: 6327,
    		f: 8.28,
    		l: "石井"
    	},
    	{
    		r: 6328,
    		f: 8.27,
    		l: "シミュレーション"
    	},
    	{
    		r: 6329,
    		f: 8.27,
    		l: "中島"
    	},
    	{
    		r: 6330,
    		f: 8.27,
    		l: "採択"
    	},
    	{
    		r: 6331,
    		f: 8.27,
    		l: "識別"
    	},
    	{
    		r: 6332,
    		f: 8.27,
    		l: "無断"
    	},
    	{
    		r: 6333,
    		f: 8.26,
    		l: "有す"
    	},
    	{
    		r: 6334,
    		f: 8.26,
    		l: "ボート"
    	},
    	{
    		r: 6335,
    		f: 8.26,
    		l: "スケール"
    	},
    	{
    		r: 6336,
    		f: 8.25,
    		l: "引き"
    	},
    	{
    		r: 6337,
    		f: 8.25,
    		l: "恥"
    	},
    	{
    		r: 6338,
    		f: 8.25,
    		l: "不便"
    	},
    	{
    		r: 6339,
    		f: 8.25,
    		l: "焼き"
    	},
    	{
    		r: 6340,
    		f: 8.25,
    		l: "英雄"
    	},
    	{
    		r: 6341,
    		f: 8.25,
    		l: "拡充"
    	},
    	{
    		r: 6342,
    		f: 8.25,
    		l: "造"
    	},
    	{
    		r: 6343,
    		f: 8.24,
    		l: "涼しい"
    	},
    	{
    		r: 6344,
    		f: 8.24,
    		l: "ビッグ"
    	},
    	{
    		r: 6345,
    		f: 8.24,
    		l: "中山"
    	},
    	{
    		r: 6346,
    		f: 8.24,
    		l: "ぢ"
    	},
    	{
    		r: 6347,
    		f: 8.24,
    		l: "歩行"
    	},
    	{
    		r: 6348,
    		f: 8.24,
    		l: "今まで"
    	},
    	{
    		r: 6349,
    		f: 8.24,
    		l: "ガイドライン"
    	},
    	{
    		r: 6350,
    		f: 8.23,
    		l: "そっくり"
    	},
    	{
    		r: 6351,
    		f: 8.23,
    		l: "青少年"
    	},
    	{
    		r: 6352,
    		f: 8.23,
    		l: "広域"
    	},
    	{
    		r: 6353,
    		f: 8.23,
    		l: "名簿"
    	},
    	{
    		r: 6354,
    		f: 8.23,
    		l: "優位"
    	},
    	{
    		r: 6355,
    		f: 8.22,
    		l: "雄"
    	},
    	{
    		r: 6356,
    		f: 8.22,
    		l: "命じる"
    	},
    	{
    		r: 6357,
    		f: 8.22,
    		l: "スタンダード"
    	},
    	{
    		r: 6358,
    		f: 8.22,
    		l: "小生"
    	},
    	{
    		r: 6359,
    		f: 8.22,
    		l: "行列"
    	},
    	{
    		r: 6360,
    		f: 8.22,
    		l: "ドレス"
    	},
    	{
    		r: 6361,
    		f: 8.21,
    		l: "麻薬"
    	},
    	{
    		r: 6362,
    		f: 8.21,
    		l: "依然として"
    	},
    	{
    		r: 6363,
    		f: 8.21,
    		l: "青森"
    	},
    	{
    		r: 6364,
    		f: 8.21,
    		l: "名刺"
    	},
    	{
    		r: 6365,
    		f: 8.21,
    		l: "五輪"
    	},
    	{
    		r: 6366,
    		f: 8.21,
    		l: "配達"
    	},
    	{
    		r: 6367,
    		f: 8.21,
    		l: "ＮＰＯ"
    	},
    	{
    		r: 6368,
    		f: 8.21,
    		l: "がた"
    	},
    	{
    		r: 6369,
    		f: 8.2,
    		l: "ディスプレイ"
    	},
    	{
    		r: 6370,
    		f: 8.2,
    		l: "バル"
    	},
    	{
    		r: 6371,
    		f: 8.2,
    		l: "よね"
    	},
    	{
    		r: 6372,
    		f: 8.2,
    		l: "独り言"
    	},
    	{
    		r: 6373,
    		f: 8.19,
    		l: "誠実"
    	},
    	{
    		r: 6374,
    		f: 8.19,
    		l: "せいぜい"
    	},
    	{
    		r: 6375,
    		f: 8.19,
    		l: "和田"
    	},
    	{
    		r: 6376,
    		f: 8.19,
    		l: "良心"
    	},
    	{
    		r: 6377,
    		f: 8.19,
    		l: "頻度"
    	},
    	{
    		r: 6378,
    		f: 8.19,
    		l: "単行本"
    	},
    	{
    		r: 6379,
    		f: 8.18,
    		l: "ごらん"
    	},
    	{
    		r: 6380,
    		f: 8.18,
    		l: "他国"
    	},
    	{
    		r: 6381,
    		f: 8.18,
    		l: "皮肉"
    	},
    	{
    		r: 6382,
    		f: 8.18,
    		l: "連動"
    	},
    	{
    		r: 6383,
    		f: 8.17,
    		l: "奉仕"
    	},
    	{
    		r: 6384,
    		f: 8.17,
    		l: "公認"
    	},
    	{
    		r: 6385,
    		f: 8.17,
    		l: "砂漠"
    	},
    	{
    		r: 6386,
    		f: 8.17,
    		l: "猿"
    	},
    	{
    		r: 6387,
    		f: 8.17,
    		l: "局面"
    	},
    	{
    		r: 6388,
    		f: 8.16,
    		l: "安保"
    	},
    	{
    		r: 6389,
    		f: 8.16,
    		l: "住居"
    	},
    	{
    		r: 6390,
    		f: 8.16,
    		l: "スロー"
    	},
    	{
    		r: 6391,
    		f: 8.16,
    		l: "発す"
    	},
    	{
    		r: 6392,
    		f: 8.16,
    		l: "追い込む"
    	},
    	{
    		r: 6393,
    		f: 8.16,
    		l: "月刊"
    	},
    	{
    		r: 6394,
    		f: 8.16,
    		l: "是正"
    	},
    	{
    		r: 6395,
    		f: 8.15,
    		l: "後期"
    	},
    	{
    		r: 6396,
    		f: 8.15,
    		l: "わし"
    	},
    	{
    		r: 6397,
    		f: 8.15,
    		l: "梅"
    	},
    	{
    		r: 6398,
    		f: 8.15,
    		l: "竜"
    	},
    	{
    		r: 6399,
    		f: 8.14,
    		l: "イライラ"
    	},
    	{
    		r: 6400,
    		f: 8.14,
    		l: "土壌"
    	},
    	{
    		r: 6401,
    		f: 8.14,
    		l: "詩人"
    	},
    	{
    		r: 6402,
    		f: 8.14,
    		l: "分配"
    	},
    	{
    		r: 6403,
    		f: 8.14,
    		l: "バリ"
    	},
    	{
    		r: 6404,
    		f: 8.13,
    		l: "締結"
    	},
    	{
    		r: 6405,
    		f: 8.13,
    		l: "持参"
    	},
    	{
    		r: 6406,
    		f: 8.13,
    		l: "エリート"
    	},
    	{
    		r: 6407,
    		f: 8.13,
    		l: "抗"
    	},
    	{
    		r: 6408,
    		f: 8.13,
    		l: "左翼"
    	},
    	{
    		r: 6409,
    		f: 8.12,
    		l: "藤"
    	},
    	{
    		r: 6410,
    		f: 8.12,
    		l: "霧"
    	},
    	{
    		r: 6411,
    		f: 8.12,
    		l: "ブルース"
    	},
    	{
    		r: 6412,
    		f: 8.12,
    		l: "まく"
    	},
    	{
    		r: 6413,
    		f: 8.12,
    		l: "腐る"
    	},
    	{
    		r: 6414,
    		f: 8.12,
    		l: "定番"
    	},
    	{
    		r: 6415,
    		f: 8.12,
    		l: "いくらでも"
    	},
    	{
    		r: 6416,
    		f: 8.11,
    		l: "割り"
    	},
    	{
    		r: 6417,
    		f: 8.11,
    		l: "ライヴ"
    	},
    	{
    		r: 6418,
    		f: 8.11,
    		l: "修復"
    	},
    	{
    		r: 6419,
    		f: 8.11,
    		l: "敬意"
    	},
    	{
    		r: 6420,
    		f: 8.11,
    		l: "貫く"
    	},
    	{
    		r: 6421,
    		f: 8.11,
    		l: "王様"
    	},
    	{
    		r: 6422,
    		f: 8.11,
    		l: "小野"
    	},
    	{
    		r: 6423,
    		f: 8.11,
    		l: "左側"
    	},
    	{
    		r: 6424,
    		f: 8.1,
    		l: "プレッシャー"
    	},
    	{
    		r: 6425,
    		f: 8.1,
    		l: "ショート"
    	},
    	{
    		r: 6426,
    		f: 8.1,
    		l: "ふつう"
    	},
    	{
    		r: 6427,
    		f: 8.1,
    		l: "明白"
    	},
    	{
    		r: 6428,
    		f: 8.1,
    		l: "己"
    	},
    	{
    		r: 6429,
    		f: 8.09,
    		l: "支障"
    	},
    	{
    		r: 6430,
    		f: 8.09,
    		l: "大胆"
    	},
    	{
    		r: 6431,
    		f: 8.09,
    		l: "除去"
    	},
    	{
    		r: 6432,
    		f: 8.09,
    		l: "罰"
    	},
    	{
    		r: 6433,
    		f: 8.09,
    		l: "エアコン"
    	},
    	{
    		r: 6434,
    		f: 8.08,
    		l: "展覧"
    	},
    	{
    		r: 6435,
    		f: 8.08,
    		l: "納税"
    	},
    	{
    		r: 6436,
    		f: 8.08,
    		l: "シカゴ"
    	},
    	{
    		r: 6437,
    		f: 8.08,
    		l: "ハンドル"
    	},
    	{
    		r: 6438,
    		f: 8.08,
    		l: "小遣い"
    	},
    	{
    		r: 6439,
    		f: 8.07,
    		l: "丁度"
    	},
    	{
    		r: 6440,
    		f: 8.07,
    		l: "きちっと"
    	},
    	{
    		r: 6441,
    		f: 8.06,
    		l: "からだ"
    	},
    	{
    		r: 6442,
    		f: 8.06,
    		l: "遠慮"
    	},
    	{
    		r: 6443,
    		f: 8.06,
    		l: "退屈"
    	},
    	{
    		r: 6444,
    		f: 8.06,
    		l: "大正"
    	},
    	{
    		r: 6445,
    		f: 8.06,
    		l: "出会える"
    	},
    	{
    		r: 6446,
    		f: 8.06,
    		l: "助言"
    	},
    	{
    		r: 6447,
    		f: 8.06,
    		l: "圧縮"
    	},
    	{
    		r: 6448,
    		f: 8.06,
    		l: "小規模"
    	},
    	{
    		r: 6449,
    		f: 8.06,
    		l: "義"
    	},
    	{
    		r: 6450,
    		f: 8.05,
    		l: "曇る"
    	},
    	{
    		r: 6451,
    		f: 8.05,
    		l: "小沢"
    	},
    	{
    		r: 6452,
    		f: 8.05,
    		l: "ハム"
    	},
    	{
    		r: 6453,
    		f: 8.05,
    		l: "関わり"
    	},
    	{
    		r: 6454,
    		f: 8.05,
    		l: "ゆったり"
    	},
    	{
    		r: 6455,
    		f: 8.05,
    		l: "明示"
    	},
    	{
    		r: 6456,
    		f: 8.05,
    		l: "わたる"
    	},
    	{
    		r: 6457,
    		f: 8.04,
    		l: "いちいち"
    	},
    	{
    		r: 6458,
    		f: 8.04,
    		l: "復旧"
    	},
    	{
    		r: 6459,
    		f: 8.04,
    		l: "下旬"
    	},
    	{
    		r: 6460,
    		f: 8.04,
    		l: "はずす"
    	},
    	{
    		r: 6461,
    		f: 8.03,
    		l: "レット"
    	},
    	{
    		r: 6462,
    		f: 8.03,
    		l: "数量"
    	},
    	{
    		r: 6463,
    		f: 8.03,
    		l: "司"
    	},
    	{
    		r: 6464,
    		f: 8.03,
    		l: "ペルー"
    	},
    	{
    		r: 6465,
    		f: 8.03,
    		l: "野生"
    	},
    	{
    		r: 6466,
    		f: 8.03,
    		l: "友好"
    	},
    	{
    		r: 6467,
    		f: 8.03,
    		l: "およぶ"
    	},
    	{
    		r: 6468,
    		f: 8.03,
    		l: "諮問"
    	},
    	{
    		r: 6469,
    		f: 8.02,
    		l: "最小限"
    	},
    	{
    		r: 6470,
    		f: 8.02,
    		l: "残高"
    	},
    	{
    		r: 6471,
    		f: 8.02,
    		l: "祖母"
    	},
    	{
    		r: 6472,
    		f: 8.02,
    		l: "ハードウェア"
    	},
    	{
    		r: 6473,
    		f: 8.01,
    		l: "寄与"
    	},
    	{
    		r: 6474,
    		f: 8.01,
    		l: "素朴"
    	},
    	{
    		r: 6475,
    		f: 8.01,
    		l: "クリーム"
    	},
    	{
    		r: 6476,
    		f: 8,
    		l: "上限"
    	},
    	{
    		r: 6477,
    		f: 8,
    		l: "武力"
    	},
    	{
    		r: 6478,
    		f: 8,
    		l: "ドキュメンタリー"
    	},
    	{
    		r: 6479,
    		f: 8,
    		l: "近隣"
    	},
    	{
    		r: 6480,
    		f: 8,
    		l: "ジャン"
    	},
    	{
    		r: 6481,
    		f: 7.99,
    		l: "不信"
    	},
    	{
    		r: 6482,
    		f: 7.99,
    		l: "ストレート"
    	},
    	{
    		r: 6483,
    		f: 7.99,
    		l: "運賃"
    	},
    	{
    		r: 6484,
    		f: 7.99,
    		l: "ポーランド"
    	},
    	{
    		r: 6485,
    		f: 7.98,
    		l: "ノリ"
    	},
    	{
    		r: 6486,
    		f: 7.98,
    		l: "トーナメント"
    	},
    	{
    		r: 6487,
    		f: 7.98,
    		l: "要領"
    	},
    	{
    		r: 6488,
    		f: 7.97,
    		l: "発掘"
    	},
    	{
    		r: 6489,
    		f: 7.97,
    		l: "劣る"
    	},
    	{
    		r: 6490,
    		f: 7.97,
    		l: "ソフトバンク"
    	},
    	{
    		r: 6491,
    		f: 7.97,
    		l: "茨城"
    	},
    	{
    		r: 6492,
    		f: 7.97,
    		l: "新築"
    	},
    	{
    		r: 6493,
    		f: 7.97,
    		l: "取り付ける"
    	},
    	{
    		r: 6494,
    		f: 7.97,
    		l: "仮想"
    	},
    	{
    		r: 6495,
    		f: 7.96,
    		l: "叱る"
    	},
    	{
    		r: 6496,
    		f: 7.96,
    		l: "コンテスト"
    	},
    	{
    		r: 6497,
    		f: 7.95,
    		l: "どころか"
    	},
    	{
    		r: 6498,
    		f: 7.95,
    		l: "円滑"
    	},
    	{
    		r: 6499,
    		f: 7.95,
    		l: "直感"
    	},
    	{
    		r: 6500,
    		f: 7.95,
    		l: "はく"
    	},
    	{
    		r: 6501,
    		f: 7.95,
    		l: "カルチャー"
    	},
    	{
    		r: 6502,
    		f: 7.94,
    		l: "紫"
    	},
    	{
    		r: 6503,
    		f: 7.94,
    		l: "佑"
    	},
    	{
    		r: 6504,
    		f: 7.94,
    		l: "ホット"
    	},
    	{
    		r: 6505,
    		f: 7.94,
    		l: "過激"
    	},
    	{
    		r: 6506,
    		f: 7.94,
    		l: "秋田"
    	},
    	{
    		r: 6507,
    		f: 7.93,
    		l: "引き継ぐ"
    	},
    	{
    		r: 6508,
    		f: 7.93,
    		l: "斬る"
    	},
    	{
    		r: 6509,
    		f: 7.93,
    		l: "ばか"
    	},
    	{
    		r: 6510,
    		f: 7.93,
    		l: "忠実"
    	},
    	{
    		r: 6511,
    		f: 7.92,
    		l: "ナイト"
    	},
    	{
    		r: 6512,
    		f: 7.92,
    		l: "付け加える"
    	},
    	{
    		r: 6513,
    		f: 7.92,
    		l: "読売"
    	},
    	{
    		r: 6514,
    		f: 7.92,
    		l: "彼氏"
    	},
    	{
    		r: 6515,
    		f: 7.92,
    		l: "えらい"
    	},
    	{
    		r: 6516,
    		f: 7.92,
    		l: "娯楽"
    	},
    	{
    		r: 6517,
    		f: 7.92,
    		l: "相性"
    	},
    	{
    		r: 6518,
    		f: 7.92,
    		l: "パチンコ"
    	},
    	{
    		r: 6519,
    		f: 7.91,
    		l: "変身"
    	},
    	{
    		r: 6520,
    		f: 7.91,
    		l: "たまらない"
    	},
    	{
    		r: 6521,
    		f: 7.91,
    		l: "うむ"
    	},
    	{
    		r: 6522,
    		f: 7.91,
    		l: "収まる"
    	},
    	{
    		r: 6523,
    		f: 7.91,
    		l: "灯"
    	},
    	{
    		r: 6524,
    		f: 7.91,
    		l: "弘"
    	},
    	{
    		r: 6525,
    		f: 7.91,
    		l: "ベテラン"
    	},
    	{
    		r: 6526,
    		f: 7.9,
    		l: "見上げる"
    	},
    	{
    		r: 6527,
    		f: 7.9,
    		l: "債"
    	},
    	{
    		r: 6528,
    		f: 7.9,
    		l: "大蔵"
    	},
    	{
    		r: 6529,
    		f: 7.9,
    		l: "生態"
    	},
    	{
    		r: 6530,
    		f: 7.9,
    		l: "盛る"
    	},
    	{
    		r: 6531,
    		f: 7.9,
    		l: "挿入"
    	},
    	{
    		r: 6532,
    		f: 7.9,
    		l: "脱ぐ"
    	},
    	{
    		r: 6533,
    		f: 7.89,
    		l: "コンクリート"
    	},
    	{
    		r: 6534,
    		f: 7.89,
    		l: "受注"
    	},
    	{
    		r: 6535,
    		f: 7.89,
    		l: "阿部"
    	},
    	{
    		r: 6536,
    		f: 7.88,
    		l: "トータル"
    	},
    	{
    		r: 6537,
    		f: 7.88,
    		l: "不利"
    	},
    	{
    		r: 6538,
    		f: 7.88,
    		l: "協調"
    	},
    	{
    		r: 6539,
    		f: 7.88,
    		l: "模索"
    	},
    	{
    		r: 6540,
    		f: 7.88,
    		l: "サーチ"
    	},
    	{
    		r: 6541,
    		f: 7.87,
    		l: "遺伝"
    	},
    	{
    		r: 6542,
    		f: 7.87,
    		l: "仕掛ける"
    	},
    	{
    		r: 6543,
    		f: 7.87,
    		l: "発する"
    	},
    	{
    		r: 6544,
    		f: 7.86,
    		l: "仕掛け"
    	},
    	{
    		r: 6545,
    		f: 7.86,
    		l: "句"
    	},
    	{
    		r: 6546,
    		f: 7.86,
    		l: "称す"
    	},
    	{
    		r: 6547,
    		f: 7.86,
    		l: "廊下"
    	},
    	{
    		r: 6548,
    		f: 7.86,
    		l: "酸"
    	},
    	{
    		r: 6549,
    		f: 7.86,
    		l: "地方自治体"
    	},
    	{
    		r: 6550,
    		f: 7.86,
    		l: "内田"
    	},
    	{
    		r: 6551,
    		f: 7.86,
    		l: "手配"
    	},
    	{
    		r: 6552,
    		f: 7.86,
    		l: "国王"
    	},
    	{
    		r: 6553,
    		f: 7.85,
    		l: "議決"
    	},
    	{
    		r: 6554,
    		f: 7.85,
    		l: "をめぐって"
    	},
    	{
    		r: 6555,
    		f: 7.85,
    		l: "強引"
    	},
    	{
    		r: 6556,
    		f: 7.85,
    		l: "短編"
    	},
    	{
    		r: 6557,
    		f: 7.85,
    		l: "痛感"
    	},
    	{
    		r: 6558,
    		f: 7.84,
    		l: "片付ける"
    	},
    	{
    		r: 6559,
    		f: 7.84,
    		l: "かけ"
    	},
    	{
    		r: 6560,
    		f: 7.84,
    		l: "出生"
    	},
    	{
    		r: 6561,
    		f: 7.84,
    		l: "スピーチ"
    	},
    	{
    		r: 6562,
    		f: 7.84,
    		l: "一括"
    	},
    	{
    		r: 6563,
    		f: 7.83,
    		l: "刀"
    	},
    	{
    		r: 6564,
    		f: 7.83,
    		l: "爆笑"
    	},
    	{
    		r: 6565,
    		f: 7.83,
    		l: "石炭"
    	},
    	{
    		r: 6566,
    		f: 7.83,
    		l: "お祈り"
    	},
    	{
    		r: 6567,
    		f: 7.83,
    		l: "刑"
    	},
    	{
    		r: 6568,
    		f: 7.82,
    		l: "分る"
    	},
    	{
    		r: 6569,
    		f: 7.82,
    		l: "綴る"
    	},
    	{
    		r: 6570,
    		f: 7.82,
    		l: "リクエスト"
    	},
    	{
    		r: 6571,
    		f: 7.82,
    		l: "天候"
    	},
    	{
    		r: 6572,
    		f: 7.82,
    		l: "手軽"
    	},
    	{
    		r: 6573,
    		f: 7.82,
    		l: "選出"
    	},
    	{
    		r: 6574,
    		f: 7.82,
    		l: "かわり"
    	},
    	{
    		r: 6575,
    		f: 7.82,
    		l: "反する"
    	},
    	{
    		r: 6576,
    		f: 7.82,
    		l: "浮気"
    	},
    	{
    		r: 6577,
    		f: 7.82,
    		l: "ニュージーランド"
    	},
    	{
    		r: 6578,
    		f: 7.82,
    		l: "看護婦"
    	},
    	{
    		r: 6579,
    		f: 7.81,
    		l: "殿"
    	},
    	{
    		r: 6580,
    		f: 7.81,
    		l: "駆使"
    	},
    	{
    		r: 6581,
    		f: 7.81,
    		l: "登山"
    	},
    	{
    		r: 6582,
    		f: 7.81,
    		l: "ヒーロー"
    	},
    	{
    		r: 6583,
    		f: 7.8,
    		l: "計上"
    	},
    	{
    		r: 6584,
    		f: 7.8,
    		l: "パンフレット"
    	},
    	{
    		r: 6585,
    		f: 7.8,
    		l: "協同"
    	},
    	{
    		r: 6586,
    		f: 7.79,
    		l: "選任"
    	},
    	{
    		r: 6587,
    		f: 7.79,
    		l: "Ｉ"
    	},
    	{
    		r: 6588,
    		f: 7.79,
    		l: "無償"
    	},
    	{
    		r: 6589,
    		f: 7.79,
    		l: "合法"
    	},
    	{
    		r: 6590,
    		f: 7.78,
    		l: "ステーション"
    	},
    	{
    		r: 6591,
    		f: 7.78,
    		l: "パッ"
    	},
    	{
    		r: 6592,
    		f: 7.78,
    		l: "向き合う"
    	},
    	{
    		r: 6593,
    		f: 7.78,
    		l: "歴"
    	},
    	{
    		r: 6594,
    		f: 7.78,
    		l: "送付"
    	},
    	{
    		r: 6595,
    		f: 7.77,
    		l: "中世"
    	},
    	{
    		r: 6596,
    		f: 7.77,
    		l: "騒音"
    	},
    	{
    		r: 6597,
    		f: 7.76,
    		l: "隊員"
    	},
    	{
    		r: 6598,
    		f: 7.76,
    		l: "モーツァルト"
    	},
    	{
    		r: 6599,
    		f: 7.76,
    		l: "外来"
    	},
    	{
    		r: 6600,
    		f: 7.76,
    		l: "シャープ"
    	},
    	{
    		r: 6601,
    		f: 7.76,
    		l: "仲裁"
    	},
    	{
    		r: 6602,
    		f: 7.76,
    		l: "奥様"
    	},
    	{
    		r: 6603,
    		f: 7.76,
    		l: "参画"
    	},
    	{
    		r: 6604,
    		f: 7.76,
    		l: "キム"
    	},
    	{
    		r: 6605,
    		f: 7.76,
    		l: "紅茶"
    	},
    	{
    		r: 6606,
    		f: 7.75,
    		l: "棟"
    	},
    	{
    		r: 6607,
    		f: 7.75,
    		l: "領土"
    	},
    	{
    		r: 6608,
    		f: 7.75,
    		l: "井"
    	},
    	{
    		r: 6609,
    		f: 7.75,
    		l: "チャット"
    	},
    	{
    		r: 6610,
    		f: 7.75,
    		l: "集約"
    	},
    	{
    		r: 6611,
    		f: 7.75,
    		l: "神秘"
    	},
    	{
    		r: 6612,
    		f: 7.75,
    		l: "家計"
    	},
    	{
    		r: 6613,
    		f: 7.75,
    		l: "四国"
    	},
    	{
    		r: 6614,
    		f: 7.75,
    		l: "でかい"
    	},
    	{
    		r: 6615,
    		f: 7.74,
    		l: "連想"
    	},
    	{
    		r: 6616,
    		f: 7.74,
    		l: "同行"
    	},
    	{
    		r: 6617,
    		f: 7.74,
    		l: "減税"
    	},
    	{
    		r: 6618,
    		f: 7.74,
    		l: "いささか"
    	},
    	{
    		r: 6619,
    		f: 7.74,
    		l: "岸"
    	},
    	{
    		r: 6620,
    		f: 7.73,
    		l: "アレンジ"
    	},
    	{
    		r: 6621,
    		f: 7.73,
    		l: "妥協"
    	},
    	{
    		r: 6622,
    		f: 7.73,
    		l: "ベンチ"
    	},
    	{
    		r: 6623,
    		f: 7.73,
    		l: "検察官"
    	},
    	{
    		r: 6624,
    		f: 7.73,
    		l: "酸素"
    	},
    	{
    		r: 6625,
    		f: 7.73,
    		l: "パニック"
    	},
    	{
    		r: 6626,
    		f: 7.73,
    		l: "ビタミン"
    	},
    	{
    		r: 6627,
    		f: 7.73,
    		l: "鳴らす"
    	},
    	{
    		r: 6628,
    		f: 7.73,
    		l: "兄さん"
    	},
    	{
    		r: 6629,
    		f: 7.72,
    		l: "祝"
    	},
    	{
    		r: 6630,
    		f: 7.72,
    		l: "テクニカル"
    	},
    	{
    		r: 6631,
    		f: 7.72,
    		l: "奨励"
    	},
    	{
    		r: 6632,
    		f: 7.72,
    		l: "歯科"
    	},
    	{
    		r: 6633,
    		f: 7.72,
    		l: "セント"
    	},
    	{
    		r: 6634,
    		f: 7.72,
    		l: "たどり着く"
    	},
    	{
    		r: 6635,
    		f: 7.71,
    		l: "ホルモン"
    	},
    	{
    		r: 6636,
    		f: 7.71,
    		l: "陸上"
    	},
    	{
    		r: 6637,
    		f: 7.71,
    		l: "液"
    	},
    	{
    		r: 6638,
    		f: 7.71,
    		l: "肥料"
    	},
    	{
    		r: 6639,
    		f: 7.71,
    		l: "同級生"
    	},
    	{
    		r: 6640,
    		f: 7.7,
    		l: "取り除く"
    	},
    	{
    		r: 6641,
    		f: 7.7,
    		l: "溜まる"
    	},
    	{
    		r: 6642,
    		f: 7.7,
    		l: "抽選"
    	},
    	{
    		r: 6643,
    		f: 7.69,
    		l: "エレベーター"
    	},
    	{
    		r: 6644,
    		f: 7.69,
    		l: "氏名"
    	},
    	{
    		r: 6645,
    		f: 7.69,
    		l: "軽"
    	},
    	{
    		r: 6646,
    		f: 7.68,
    		l: "親友"
    	},
    	{
    		r: 6647,
    		f: 7.68,
    		l: "におい"
    	},
    	{
    		r: 6648,
    		f: 7.68,
    		l: "直接的"
    	},
    	{
    		r: 6649,
    		f: 7.68,
    		l: "西部"
    	},
    	{
    		r: 6650,
    		f: 7.67,
    		l: "黒字"
    	},
    	{
    		r: 6651,
    		f: 7.67,
    		l: "移籍"
    	},
    	{
    		r: 6652,
    		f: 7.67,
    		l: "そうですね"
    	},
    	{
    		r: 6653,
    		f: 7.67,
    		l: "顕著"
    	},
    	{
    		r: 6654,
    		f: 7.67,
    		l: "預かる"
    	},
    	{
    		r: 6655,
    		f: 7.67,
    		l: "ホッ"
    	},
    	{
    		r: 6656,
    		f: 7.67,
    		l: "丼"
    	},
    	{
    		r: 6657,
    		f: 7.67,
    		l: "切れ"
    	},
    	{
    		r: 6658,
    		f: 7.67,
    		l: "絶対に"
    	},
    	{
    		r: 6659,
    		f: 7.67,
    		l: "ｃｍ"
    	},
    	{
    		r: 6660,
    		f: 7.67,
    		l: "フォーマット"
    	},
    	{
    		r: 6661,
    		f: 7.67,
    		l: "潰す"
    	},
    	{
    		r: 6662,
    		f: 7.67,
    		l: "見込む"
    	},
    	{
    		r: 6663,
    		f: 7.67,
    		l: "航空機"
    	},
    	{
    		r: 6664,
    		f: 7.66,
    		l: "らん"
    	},
    	{
    		r: 6665,
    		f: 7.66,
    		l: "畳"
    	},
    	{
    		r: 6666,
    		f: 7.66,
    		l: "農薬"
    	},
    	{
    		r: 6667,
    		f: 7.65,
    		l: "コチ"
    	},
    	{
    		r: 6668,
    		f: 7.65,
    		l: "少"
    	},
    	{
    		r: 6669,
    		f: 7.65,
    		l: "セールス"
    	},
    	{
    		r: 6670,
    		f: 7.65,
    		l: "靖国神社"
    	},
    	{
    		r: 6671,
    		f: 7.65,
    		l: "総括"
    	},
    	{
    		r: 6672,
    		f: 7.64,
    		l: "当てはまる"
    	},
    	{
    		r: 6673,
    		f: 7.64,
    		l: "軍人"
    	},
    	{
    		r: 6674,
    		f: 7.64,
    		l: "もてる"
    	},
    	{
    		r: 6675,
    		f: 7.63,
    		l: "折る"
    	},
    	{
    		r: 6676,
    		f: 7.63,
    		l: "僅か"
    	},
    	{
    		r: 6677,
    		f: 7.63,
    		l: "そうなると"
    	},
    	{
    		r: 6678,
    		f: 7.63,
    		l: "雑談"
    	},
    	{
    		r: 6679,
    		f: 7.63,
    		l: "見逃す"
    	},
    	{
    		r: 6680,
    		f: 7.63,
    		l: "酷い"
    	},
    	{
    		r: 6681,
    		f: 7.63,
    		l: "計る"
    	},
    	{
    		r: 6682,
    		f: 7.63,
    		l: "国道"
    	},
    	{
    		r: 6683,
    		f: 7.63,
    		l: "無名"
    	},
    	{
    		r: 6684,
    		f: 7.63,
    		l: "固まる"
    	},
    	{
    		r: 6685,
    		f: 7.62,
    		l: "性別"
    	},
    	{
    		r: 6686,
    		f: 7.62,
    		l: "弔"
    	},
    	{
    		r: 6687,
    		f: 7.62,
    		l: "好奇"
    	},
    	{
    		r: 6688,
    		f: 7.62,
    		l: "まっすぐ"
    	},
    	{
    		r: 6689,
    		f: 7.62,
    		l: "幻"
    	},
    	{
    		r: 6690,
    		f: 7.62,
    		l: "気持"
    	},
    	{
    		r: 6691,
    		f: 7.62,
    		l: "ストック"
    	},
    	{
    		r: 6692,
    		f: 7.62,
    		l: "みなさま"
    	},
    	{
    		r: 6693,
    		f: 7.62,
    		l: "みずから"
    	},
    	{
    		r: 6694,
    		f: 7.62,
    		l: "ロバート"
    	},
    	{
    		r: 6695,
    		f: 7.61,
    		l: "にあたる"
    	},
    	{
    		r: 6696,
    		f: 7.61,
    		l: "通報"
    	},
    	{
    		r: 6697,
    		f: 7.61,
    		l: "替える"
    	},
    	{
    		r: 6698,
    		f: 7.61,
    		l: "攻略"
    	},
    	{
    		r: 6699,
    		f: 7.61,
    		l: "虐殺"
    	},
    	{
    		r: 6700,
    		f: 7.6,
    		l: "構える"
    	},
    	{
    		r: 6701,
    		f: 7.6,
    		l: "受け付ける"
    	},
    	{
    		r: 6702,
    		f: 7.59,
    		l: "適合"
    	},
    	{
    		r: 6703,
    		f: 7.59,
    		l: "思いっきり"
    	},
    	{
    		r: 6704,
    		f: 7.59,
    		l: "滑る"
    	},
    	{
    		r: 6705,
    		f: 7.59,
    		l: "逃す"
    	},
    	{
    		r: 6706,
    		f: 7.59,
    		l: "一員"
    	},
    	{
    		r: 6707,
    		f: 7.59,
    		l: "まる"
    	},
    	{
    		r: 6708,
    		f: 7.59,
    		l: "水分"
    	},
    	{
    		r: 6709,
    		f: 7.59,
    		l: "足す"
    	},
    	{
    		r: 6710,
    		f: 7.59,
    		l: "核兵器"
    	},
    	{
    		r: 6711,
    		f: 7.58,
    		l: "お祭り"
    	},
    	{
    		r: 6712,
    		f: 7.58,
    		l: "周知"
    	},
    	{
    		r: 6713,
    		f: 7.58,
    		l: "洋服"
    	},
    	{
    		r: 6714,
    		f: 7.58,
    		l: "ほん"
    	},
    	{
    		r: 6715,
    		f: 7.58,
    		l: "性的"
    	},
    	{
    		r: 6716,
    		f: 7.57,
    		l: "置き換える"
    	},
    	{
    		r: 6717,
    		f: 7.57,
    		l: "皇帝"
    	},
    	{
    		r: 6718,
    		f: 7.57,
    		l: "ＥＵ"
    	},
    	{
    		r: 6719,
    		f: 7.57,
    		l: "発覚"
    	},
    	{
    		r: 6720,
    		f: 7.57,
    		l: "当たり"
    	},
    	{
    		r: 6721,
    		f: 7.57,
    		l: "足元"
    	},
    	{
    		r: 6722,
    		f: 7.57,
    		l: "乏しい"
    	},
    	{
    		r: 6723,
    		f: 7.56,
    		l: "日誌"
    	},
    	{
    		r: 6724,
    		f: 7.56,
    		l: "太田"
    	},
    	{
    		r: 6725,
    		f: 7.56,
    		l: "闘い"
    	},
    	{
    		r: 6726,
    		f: 7.56,
    		l: "ウェイ"
    	},
    	{
    		r: 6727,
    		f: 7.56,
    		l: "余談"
    	},
    	{
    		r: 6728,
    		f: 7.56,
    		l: "数多く"
    	},
    	{
    		r: 6729,
    		f: 7.56,
    		l: "外見"
    	},
    	{
    		r: 6730,
    		f: 7.56,
    		l: "読み"
    	},
    	{
    		r: 6731,
    		f: 7.56,
    		l: "目安"
    	},
    	{
    		r: 6732,
    		f: 7.55,
    		l: "滝"
    	},
    	{
    		r: 6733,
    		f: 7.54,
    		l: "デザート"
    	},
    	{
    		r: 6734,
    		f: 7.54,
    		l: "知性"
    	},
    	{
    		r: 6735,
    		f: 7.54,
    		l: "満つ"
    	},
    	{
    		r: 6736,
    		f: 7.53,
    		l: "薬物"
    	},
    	{
    		r: 6737,
    		f: 7.53,
    		l: "敏感"
    	},
    	{
    		r: 6738,
    		f: 7.53,
    		l: "ミリ"
    	},
    	{
    		r: 6739,
    		f: 7.53,
    		l: "来年度"
    	},
    	{
    		r: 6740,
    		f: 7.53,
    		l: "乳"
    	},
    	{
    		r: 6741,
    		f: 7.53,
    		l: "醤油"
    	},
    	{
    		r: 6742,
    		f: 7.52,
    		l: "ぜんぜん"
    	},
    	{
    		r: 6743,
    		f: 7.52,
    		l: "ついてる"
    	},
    	{
    		r: 6744,
    		f: 7.52,
    		l: "品目"
    	},
    	{
    		r: 6745,
    		f: 7.51,
    		l: "トライ"
    	},
    	{
    		r: 6746,
    		f: 7.51,
    		l: "総長"
    	},
    	{
    		r: 6747,
    		f: 7.51,
    		l: "衝動"
    	},
    	{
    		r: 6748,
    		f: 7.51,
    		l: "点数"
    	},
    	{
    		r: 6749,
    		f: 7.51,
    		l: "フィンランド"
    	},
    	{
    		r: 6750,
    		f: 7.51,
    		l: "主観"
    	},
    	{
    		r: 6751,
    		f: 7.51,
    		l: "スカ"
    	},
    	{
    		r: 6752,
    		f: 7.51,
    		l: "収納"
    	},
    	{
    		r: 6753,
    		f: 7.51,
    		l: "岩手"
    	},
    	{
    		r: 6754,
    		f: 7.51,
    		l: "税率"
    	},
    	{
    		r: 6755,
    		f: 7.5,
    		l: "西村"
    	},
    	{
    		r: 6756,
    		f: 7.5,
    		l: "今更"
    	},
    	{
    		r: 6757,
    		f: 7.5,
    		l: "ボン"
    	},
    	{
    		r: 6758,
    		f: 7.5,
    		l: "ナン"
    	},
    	{
    		r: 6759,
    		f: 7.5,
    		l: "題名"
    	},
    	{
    		r: 6760,
    		f: 7.5,
    		l: "部員"
    	},
    	{
    		r: 6761,
    		f: 7.49,
    		l: "豊"
    	},
    	{
    		r: 6762,
    		f: 7.49,
    		l: "横断"
    	},
    	{
    		r: 6763,
    		f: 7.49,
    		l: "担任"
    	},
    	{
    		r: 6764,
    		f: 7.49,
    		l: "翌年"
    	},
    	{
    		r: 6765,
    		f: 7.48,
    		l: "文脈"
    	},
    	{
    		r: 6766,
    		f: 7.48,
    		l: "容器"
    	},
    	{
    		r: 6767,
    		f: 7.48,
    		l: "基調"
    	},
    	{
    		r: 6768,
    		f: 7.48,
    		l: "酔う"
    	},
    	{
    		r: 6769,
    		f: 7.48,
    		l: "無関係"
    	},
    	{
    		r: 6770,
    		f: 7.47,
    		l: "お陰"
    	},
    	{
    		r: 6771,
    		f: 7.47,
    		l: "閣僚"
    	},
    	{
    		r: 6772,
    		f: 7.47,
    		l: "兼ねる"
    	},
    	{
    		r: 6773,
    		f: 7.47,
    		l: "内面"
    	},
    	{
    		r: 6774,
    		f: 7.47,
    		l: "活"
    	},
    	{
    		r: 6775,
    		f: 7.47,
    		l: "アイス"
    	},
    	{
    		r: 6776,
    		f: 7.46,
    		l: "許容"
    	},
    	{
    		r: 6777,
    		f: 7.46,
    		l: "選考"
    	},
    	{
    		r: 6778,
    		f: 7.46,
    		l: "さほど"
    	},
    	{
    		r: 6779,
    		f: 7.46,
    		l: "宝"
    	},
    	{
    		r: 6780,
    		f: 7.46,
    		l: "本能"
    	},
    	{
    		r: 6781,
    		f: 7.45,
    		l: "思い込む"
    	},
    	{
    		r: 6782,
    		f: 7.44,
    		l: "レンジ"
    	},
    	{
    		r: 6783,
    		f: 7.44,
    		l: "につれて"
    	},
    	{
    		r: 6784,
    		f: 7.44,
    		l: "ねらう"
    	},
    	{
    		r: 6785,
    		f: 7.44,
    		l: "将棋"
    	},
    	{
    		r: 6786,
    		f: 7.44,
    		l: "混じる"
    	},
    	{
    		r: 6787,
    		f: 7.44,
    		l: "キャンセル"
    	},
    	{
    		r: 6788,
    		f: 7.44,
    		l: "うた"
    	},
    	{
    		r: 6789,
    		f: 7.44,
    		l: "医薬品"
    	},
    	{
    		r: 6790,
    		f: 7.44,
    		l: "かわいそう"
    	},
    	{
    		r: 6791,
    		f: 7.44,
    		l: "条文"
    	},
    	{
    		r: 6792,
    		f: 7.43,
    		l: "いじる"
    	},
    	{
    		r: 6793,
    		f: 7.43,
    		l: "開店"
    	},
    	{
    		r: 6794,
    		f: 7.43,
    		l: "合流"
    	},
    	{
    		r: 6795,
    		f: 7.42,
    		l: "亭"
    	},
    	{
    		r: 6796,
    		f: 7.42,
    		l: "しつこい"
    	},
    	{
    		r: 6797,
    		f: 7.42,
    		l: "心地"
    	},
    	{
    		r: 6798,
    		f: 7.42,
    		l: "遂げる"
    	},
    	{
    		r: 6799,
    		f: 7.42,
    		l: "競合"
    	},
    	{
    		r: 6800,
    		f: 7.42,
    		l: "たいした"
    	},
    	{
    		r: 6801,
    		f: 7.42,
    		l: "浩"
    	},
    	{
    		r: 6802,
    		f: 7.42,
    		l: "干渉"
    	},
    	{
    		r: 6803,
    		f: 7.41,
    		l: "車内"
    	},
    	{
    		r: 6804,
    		f: 7.41,
    		l: "将軍"
    	},
    	{
    		r: 6805,
    		f: 7.41,
    		l: "卒業生"
    	},
    	{
    		r: 6806,
    		f: 7.41,
    		l: "謝る"
    	},
    	{
    		r: 6807,
    		f: 7.41,
    		l: "負傷"
    	},
    	{
    		r: 6808,
    		f: 7.4,
    		l: "騒ぎ"
    	},
    	{
    		r: 6809,
    		f: 7.4,
    		l: "ブース"
    	},
    	{
    		r: 6810,
    		f: 7.4,
    		l: "部署"
    	},
    	{
    		r: 6811,
    		f: 7.4,
    		l: "新着"
    	},
    	{
    		r: 6812,
    		f: 7.39,
    		l: "テロリスト"
    	},
    	{
    		r: 6813,
    		f: 7.39,
    		l: "飲み物"
    	},
    	{
    		r: 6814,
    		f: 7.39,
    		l: "熊"
    	},
    	{
    		r: 6815,
    		f: 7.39,
    		l: "原価"
    	},
    	{
    		r: 6816,
    		f: 7.39,
    		l: "商工"
    	},
    	{
    		r: 6817,
    		f: 7.38,
    		l: "先ず"
    	},
    	{
    		r: 6818,
    		f: 7.38,
    		l: "喉"
    	},
    	{
    		r: 6819,
    		f: 7.38,
    		l: "お祝い"
    	},
    	{
    		r: 6820,
    		f: 7.38,
    		l: "入り込む"
    	},
    	{
    		r: 6821,
    		f: 7.38,
    		l: "任命"
    	},
    	{
    		r: 6822,
    		f: 7.38,
    		l: "路上"
    	},
    	{
    		r: 6823,
    		f: 7.37,
    		l: "差す"
    	},
    	{
    		r: 6824,
    		f: 7.37,
    		l: "通産省"
    	},
    	{
    		r: 6825,
    		f: 7.37,
    		l: "上野"
    	},
    	{
    		r: 6826,
    		f: 7.37,
    		l: "震災"
    	},
    	{
    		r: 6827,
    		f: 7.37,
    		l: "ライフスタイル"
    	},
    	{
    		r: 6828,
    		f: 7.37,
    		l: "はぁ"
    	},
    	{
    		r: 6829,
    		f: 7.37,
    		l: "長女"
    	},
    	{
    		r: 6830,
    		f: 7.37,
    		l: "彫刻"
    	},
    	{
    		r: 6831,
    		f: 7.37,
    		l: "リニューアル"
    	},
    	{
    		r: 6832,
    		f: 7.37,
    		l: "就く"
    	},
    	{
    		r: 6833,
    		f: 7.37,
    		l: "大和"
    	},
    	{
    		r: 6834,
    		f: 7.37,
    		l: "労使"
    	},
    	{
    		r: 6835,
    		f: 7.37,
    		l: "傷つく"
    	},
    	{
    		r: 6836,
    		f: 7.36,
    		l: "どっか"
    	},
    	{
    		r: 6837,
    		f: 7.36,
    		l: "品物"
    	},
    	{
    		r: 6838,
    		f: 7.36,
    		l: "職種"
    	},
    	{
    		r: 6839,
    		f: 7.36,
    		l: "商法"
    	},
    	{
    		r: 6840,
    		f: 7.36,
    		l: "ガル"
    	},
    	{
    		r: 6841,
    		f: 7.35,
    		l: "航海"
    	},
    	{
    		r: 6842,
    		f: 7.35,
    		l: "クイズ"
    	},
    	{
    		r: 6843,
    		f: 7.35,
    		l: "近"
    	},
    	{
    		r: 6844,
    		f: 7.35,
    		l: "飲める"
    	},
    	{
    		r: 6845,
    		f: 7.35,
    		l: "山下"
    	},
    	{
    		r: 6846,
    		f: 7.35,
    		l: "弾圧"
    	},
    	{
    		r: 6847,
    		f: 7.34,
    		l: "カンボジア"
    	},
    	{
    		r: 6848,
    		f: 7.34,
    		l: "芸"
    	},
    	{
    		r: 6849,
    		f: 7.34,
    		l: "賛同"
    	},
    	{
    		r: 6850,
    		f: 7.34,
    		l: "南北"
    	},
    	{
    		r: 6851,
    		f: 7.34,
    		l: "短期間"
    	},
    	{
    		r: 6852,
    		f: 7.34,
    		l: "カウンセリング"
    	},
    	{
    		r: 6853,
    		f: 7.34,
    		l: "津波"
    	},
    	{
    		r: 6854,
    		f: 7.34,
    		l: "景観"
    	},
    	{
    		r: 6855,
    		f: 7.34,
    		l: "予言"
    	},
    	{
    		r: 6856,
    		f: 7.34,
    		l: "原子"
    	},
    	{
    		r: 6857,
    		f: 7.33,
    		l: "判"
    	},
    	{
    		r: 6858,
    		f: 7.33,
    		l: "大声"
    	},
    	{
    		r: 6859,
    		f: 7.33,
    		l: "審理"
    	},
    	{
    		r: 6860,
    		f: 7.33,
    		l: "実在"
    	},
    	{
    		r: 6861,
    		f: 7.33,
    		l: "ウィーン"
    	},
    	{
    		r: 6862,
    		f: 7.33,
    		l: "ミルク"
    	},
    	{
    		r: 6863,
    		f: 7.32,
    		l: "本田"
    	},
    	{
    		r: 6864,
    		f: 7.32,
    		l: "リストラ"
    	},
    	{
    		r: 6865,
    		f: 7.32,
    		l: "議題"
    	},
    	{
    		r: 6866,
    		f: 7.32,
    		l: "プラットフォーム"
    	},
    	{
    		r: 6867,
    		f: 7.31,
    		l: "戦場"
    	},
    	{
    		r: 6868,
    		f: 7.31,
    		l: "六本木"
    	},
    	{
    		r: 6869,
    		f: 7.31,
    		l: "下ろす"
    	},
    	{
    		r: 6870,
    		f: 7.31,
    		l: "破産"
    	},
    	{
    		r: 6871,
    		f: 7.31,
    		l: "景"
    	},
    	{
    		r: 6872,
    		f: 7.31,
    		l: "果物"
    	},
    	{
    		r: 6873,
    		f: 7.31,
    		l: "給食"
    	},
    	{
    		r: 6874,
    		f: 7.31,
    		l: "アンド"
    	},
    	{
    		r: 6875,
    		f: 7.3,
    		l: "α"
    	},
    	{
    		r: 6876,
    		f: 7.3,
    		l: "フェスティバル"
    	},
    	{
    		r: 6877,
    		f: 7.29,
    		l: "喫茶店"
    	},
    	{
    		r: 6878,
    		f: 7.29,
    		l: "セイ"
    	},
    	{
    		r: 6879,
    		f: 7.29,
    		l: "筆"
    	},
    	{
    		r: 6880,
    		f: 7.29,
    		l: "開会"
    	},
    	{
    		r: 6881,
    		f: 7.29,
    		l: "ミュージカル"
    	},
    	{
    		r: 6882,
    		f: 7.29,
    		l: "亀"
    	},
    	{
    		r: 6883,
    		f: 7.29,
    		l: "出願"
    	},
    	{
    		r: 6884,
    		f: 7.29,
    		l: "単価"
    	},
    	{
    		r: 6885,
    		f: 7.29,
    		l: "キャッチ"
    	},
    	{
    		r: 6886,
    		f: 7.29,
    		l: "防御"
    	},
    	{
    		r: 6887,
    		f: 7.29,
    		l: "構図"
    	},
    	{
    		r: 6888,
    		f: 7.28,
    		l: "ゴム"
    	},
    	{
    		r: 6889,
    		f: 7.28,
    		l: "おしゃれ"
    	},
    	{
    		r: 6890,
    		f: 7.28,
    		l: "たけ"
    	},
    	{
    		r: 6891,
    		f: 7.27,
    		l: "連日"
    	},
    	{
    		r: 6892,
    		f: 7.27,
    		l: "外相"
    	},
    	{
    		r: 6893,
    		f: 7.27,
    		l: "餌"
    	},
    	{
    		r: 6894,
    		f: 7.27,
    		l: "微笑む"
    	},
    	{
    		r: 6895,
    		f: 7.27,
    		l: "身長"
    	},
    	{
    		r: 6896,
    		f: 7.27,
    		l: "合間"
    	},
    	{
    		r: 6897,
    		f: 7.27,
    		l: "名作"
    	},
    	{
    		r: 6898,
    		f: 7.27,
    		l: "恒例"
    	},
    	{
    		r: 6899,
    		f: 7.26,
    		l: "トピック"
    	},
    	{
    		r: 6900,
    		f: 7.26,
    		l: "台所"
    	},
    	{
    		r: 6901,
    		f: 7.26,
    		l: "すか"
    	},
    	{
    		r: 6902,
    		f: 7.26,
    		l: "メガネ"
    	},
    	{
    		r: 6903,
    		f: 7.26,
    		l: "かの"
    	},
    	{
    		r: 6904,
    		f: 7.25,
    		l: "抽出"
    	},
    	{
    		r: 6905,
    		f: 7.25,
    		l: "刃"
    	},
    	{
    		r: 6906,
    		f: 7.25,
    		l: "敗戦"
    	},
    	{
    		r: 6907,
    		f: 7.25,
    		l: "密接"
    	},
    	{
    		r: 6908,
    		f: 7.25,
    		l: "涼"
    	},
    	{
    		r: 6909,
    		f: 7.25,
    		l: "永田"
    	},
    	{
    		r: 6910,
    		f: 7.25,
    		l: "初回"
    	},
    	{
    		r: 6911,
    		f: 7.25,
    		l: "水平"
    	},
    	{
    		r: 6912,
    		f: 7.25,
    		l: "ロゴ"
    	},
    	{
    		r: 6913,
    		f: 7.25,
    		l: "流動"
    	},
    	{
    		r: 6914,
    		f: 7.24,
    		l: "訴え"
    	},
    	{
    		r: 6915,
    		f: 7.24,
    		l: "ちまう"
    	},
    	{
    		r: 6916,
    		f: 7.24,
    		l: "コンパクト"
    	},
    	{
    		r: 6917,
    		f: 7.24,
    		l: "好ましい"
    	},
    	{
    		r: 6918,
    		f: 7.24,
    		l: "リチャード"
    	},
    	{
    		r: 6919,
    		f: 7.24,
    		l: "噛む"
    	},
    	{
    		r: 6920,
    		f: 7.24,
    		l: "満"
    	},
    	{
    		r: 6921,
    		f: 7.23,
    		l: "法曹"
    	},
    	{
    		r: 6922,
    		f: 7.23,
    		l: "励む"
    	},
    	{
    		r: 6923,
    		f: 7.23,
    		l: "敷く"
    	},
    	{
    		r: 6924,
    		f: 7.23,
    		l: "祝日"
    	},
    	{
    		r: 6925,
    		f: 7.23,
    		l: "留まる"
    	},
    	{
    		r: 6926,
    		f: 7.23,
    		l: "現われる"
    	},
    	{
    		r: 6927,
    		f: 7.23,
    		l: "よって"
    	},
    	{
    		r: 6928,
    		f: 7.22,
    		l: "測る"
    	},
    	{
    		r: 6929,
    		f: 7.22,
    		l: "東西"
    	},
    	{
    		r: 6930,
    		f: 7.22,
    		l: "無意味"
    	},
    	{
    		r: 6931,
    		f: 7.22,
    		l: "に際して"
    	},
    	{
    		r: 6932,
    		f: 7.22,
    		l: "新設"
    	},
    	{
    		r: 6933,
    		f: 7.22,
    		l: "ジン"
    	},
    	{
    		r: 6934,
    		f: 7.21,
    		l: "土台"
    	},
    	{
    		r: 6935,
    		f: 7.21,
    		l: "よし"
    	},
    	{
    		r: 6936,
    		f: 7.21,
    		l: "着物"
    	},
    	{
    		r: 6937,
    		f: 7.2,
    		l: "名目"
    	},
    	{
    		r: 6938,
    		f: 7.2,
    		l: "不在"
    	},
    	{
    		r: 6939,
    		f: 7.2,
    		l: "引き続く"
    	},
    	{
    		r: 6940,
    		f: 7.2,
    		l: "制服"
    	},
    	{
    		r: 6941,
    		f: 7.2,
    		l: "何で"
    	},
    	{
    		r: 6942,
    		f: 7.2,
    		l: "前田"
    	},
    	{
    		r: 6943,
    		f: 7.2,
    		l: "カイ"
    	},
    	{
    		r: 6944,
    		f: 7.2,
    		l: "体内"
    	},
    	{
    		r: 6945,
    		f: 7.2,
    		l: "ケイ"
    	},
    	{
    		r: 6946,
    		f: 7.2,
    		l: "いやいや"
    	},
    	{
    		r: 6947,
    		f: 7.2,
    		l: "お湯"
    	},
    	{
    		r: 6948,
    		f: 7.2,
    		l: "ぶつける"
    	},
    	{
    		r: 6949,
    		f: 7.19,
    		l: "パスタ"
    	},
    	{
    		r: 6950,
    		f: 7.19,
    		l: "国旗"
    	},
    	{
    		r: 6951,
    		f: 7.19,
    		l: "モール"
    	},
    	{
    		r: 6952,
    		f: 7.18,
    		l: "補給"
    	},
    	{
    		r: 6953,
    		f: 7.18,
    		l: "〒"
    	},
    	{
    		r: 6954,
    		f: 7.18,
    		l: "始末"
    	},
    	{
    		r: 6955,
    		f: 7.18,
    		l: "題材"
    	},
    	{
    		r: 6956,
    		f: 7.17,
    		l: "デンマーク"
    	},
    	{
    		r: 6957,
    		f: 7.17,
    		l: "たばこ"
    	},
    	{
    		r: 6958,
    		f: 7.17,
    		l: "おはよう"
    	},
    	{
    		r: 6959,
    		f: 7.17,
    		l: "祖父"
    	},
    	{
    		r: 6960,
    		f: 7.17,
    		l: "受け継ぐ"
    	},
    	{
    		r: 6961,
    		f: 7.16,
    		l: "比例"
    	},
    	{
    		r: 6962,
    		f: 7.16,
    		l: "機動"
    	},
    	{
    		r: 6963,
    		f: 7.16,
    		l: "調節"
    	},
    	{
    		r: 6964,
    		f: 7.16,
    		l: "日本銀行"
    	},
    	{
    		r: 6965,
    		f: 7.16,
    		l: "造り"
    	},
    	{
    		r: 6966,
    		f: 7.16,
    		l: "歳出"
    	},
    	{
    		r: 6967,
    		f: 7.15,
    		l: "ナウ"
    	},
    	{
    		r: 6968,
    		f: 7.15,
    		l: "すっごい"
    	},
    	{
    		r: 6969,
    		f: 7.15,
    		l: "有難う"
    	},
    	{
    		r: 6970,
    		f: 7.15,
    		l: "艦"
    	},
    	{
    		r: 6971,
    		f: 7.15,
    		l: "入荷"
    	},
    	{
    		r: 6972,
    		f: 7.14,
    		l: "願望"
    	},
    	{
    		r: 6973,
    		f: 7.14,
    		l: "一行"
    	},
    	{
    		r: 6974,
    		f: 7.14,
    		l: "ホームズ"
    	},
    	{
    		r: 6975,
    		f: 7.14,
    		l: "モジュール"
    	},
    	{
    		r: 6976,
    		f: 7.14,
    		l: "理科"
    	},
    	{
    		r: 6977,
    		f: 7.14,
    		l: "サミット"
    	},
    	{
    		r: 6978,
    		f: 7.13,
    		l: "すいません"
    	},
    	{
    		r: 6979,
    		f: 7.13,
    		l: "ソング"
    	},
    	{
    		r: 6980,
    		f: 7.13,
    		l: "別途"
    	},
    	{
    		r: 6981,
    		f: 7.13,
    		l: "官庁"
    	},
    	{
    		r: 6982,
    		f: 7.13,
    		l: "サム"
    	},
    	{
    		r: 6983,
    		f: 7.13,
    		l: "武士"
    	},
    	{
    		r: 6984,
    		f: 7.13,
    		l: "蕎麦"
    	},
    	{
    		r: 6985,
    		f: 7.13,
    		l: "やばい"
    	},
    	{
    		r: 6986,
    		f: 7.12,
    		l: "フォロー"
    	},
    	{
    		r: 6987,
    		f: 7.12,
    		l: "同等"
    	},
    	{
    		r: 6988,
    		f: 7.12,
    		l: "ストリート"
    	},
    	{
    		r: 6989,
    		f: 7.12,
    		l: "芝"
    	},
    	{
    		r: 6990,
    		f: 7.12,
    		l: "カトリック"
    	},
    	{
    		r: 6991,
    		f: 7.12,
    		l: "無責任"
    	},
    	{
    		r: 6992,
    		f: 7.12,
    		l: "メソッド"
    	},
    	{
    		r: 6993,
    		f: 7.12,
    		l: "処"
    	},
    	{
    		r: 6994,
    		f: 7.12,
    		l: "提唱"
    	},
    	{
    		r: 6995,
    		f: 7.12,
    		l: "募金"
    	},
    	{
    		r: 6996,
    		f: 7.12,
    		l: "すすめる"
    	},
    	{
    		r: 6997,
    		f: 7.11,
    		l: "市販"
    	},
    	{
    		r: 6998,
    		f: 7.11,
    		l: "日刊"
    	},
    	{
    		r: 6999,
    		f: 7.11,
    		l: "銭"
    	},
    	{
    		r: 7000,
    		f: 7.11,
    		l: "他の"
    	},
    	{
    		r: 7001,
    		f: 7.11,
    		l: "入居"
    	},
    	{
    		r: 7002,
    		f: 7.11,
    		l: "助手"
    	},
    	{
    		r: 7003,
    		f: 7.11,
    		l: "成田"
    	},
    	{
    		r: 7004,
    		f: 7.11,
    		l: "アド"
    	},
    	{
    		r: 7005,
    		f: 7.1,
    		l: "パスポート"
    	},
    	{
    		r: 7006,
    		f: 7.1,
    		l: "ギリギリ"
    	},
    	{
    		r: 7007,
    		f: 7.1,
    		l: "モスクワ"
    	},
    	{
    		r: 7008,
    		f: 7.1,
    		l: "アレルギー"
    	},
    	{
    		r: 7009,
    		f: 7.1,
    		l: "特権"
    	},
    	{
    		r: 7010,
    		f: 7.1,
    		l: "聞かす"
    	},
    	{
    		r: 7011,
    		f: 7.1,
    		l: "管轄"
    	},
    	{
    		r: 7012,
    		f: 7.1,
    		l: "位置づける"
    	},
    	{
    		r: 7013,
    		f: 7.1,
    		l: "ラウンド"
    	},
    	{
    		r: 7014,
    		f: 7.09,
    		l: "はて"
    	},
    	{
    		r: 7015,
    		f: 7.09,
    		l: "汚れ"
    	},
    	{
    		r: 7016,
    		f: 7.09,
    		l: "フォン"
    	},
    	{
    		r: 7017,
    		f: 7.08,
    		l: "政"
    	},
    	{
    		r: 7018,
    		f: 7.08,
    		l: "尾"
    	},
    	{
    		r: 7019,
    		f: 7.08,
    		l: "建つ"
    	},
    	{
    		r: 7020,
    		f: 7.08,
    		l: "真に"
    	},
    	{
    		r: 7021,
    		f: 7.08,
    		l: "マラソン"
    	},
    	{
    		r: 7022,
    		f: 7.08,
    		l: "引っ越す"
    	},
    	{
    		r: 7023,
    		f: 7.08,
    		l: "にわたり"
    	},
    	{
    		r: 7024,
    		f: 7.08,
    		l: "連帯"
    	},
    	{
    		r: 7025,
    		f: 7.08,
    		l: "らい"
    	},
    	{
    		r: 7026,
    		f: 7.07,
    		l: "着実"
    	},
    	{
    		r: 7027,
    		f: 7.07,
    		l: "人件"
    	},
    	{
    		r: 7028,
    		f: 7.07,
    		l: "Ｗ"
    	},
    	{
    		r: 7029,
    		f: 7.07,
    		l: "技法"
    	},
    	{
    		r: 7030,
    		f: 7.07,
    		l: "あまりの"
    	},
    	{
    		r: 7031,
    		f: 7.07,
    		l: "不具合"
    	},
    	{
    		r: 7032,
    		f: 7.07,
    		l: "オフィシャル"
    	},
    	{
    		r: 7033,
    		f: 7.07,
    		l: "検"
    	},
    	{
    		r: 7034,
    		f: 7.07,
    		l: "時事"
    	},
    	{
    		r: 7035,
    		f: 7.07,
    		l: "プレゼン"
    	},
    	{
    		r: 7036,
    		f: 7.07,
    		l: "フライ"
    	},
    	{
    		r: 7037,
    		f: 7.07,
    		l: "副作用"
    	},
    	{
    		r: 7038,
    		f: 7.07,
    		l: "関節"
    	},
    	{
    		r: 7039,
    		f: 7.07,
    		l: "濃度"
    	},
    	{
    		r: 7040,
    		f: 7.07,
    		l: "戦士"
    	},
    	{
    		r: 7041,
    		f: 7.07,
    		l: "十月"
    	},
    	{
    		r: 7042,
    		f: 7.07,
    		l: "中毒"
    	},
    	{
    		r: 7043,
    		f: 7.06,
    		l: "社会党"
    	},
    	{
    		r: 7044,
    		f: 7.06,
    		l: "あたかも"
    	},
    	{
    		r: 7045,
    		f: 7.06,
    		l: "登校"
    	},
    	{
    		r: 7046,
    		f: 7.05,
    		l: "プレゼンテーション"
    	},
    	{
    		r: 7047,
    		f: 7.05,
    		l: "バナナ"
    	},
    	{
    		r: 7048,
    		f: 7.05,
    		l: "味噌"
    	},
    	{
    		r: 7049,
    		f: 7.05,
    		l: "プライド"
    	},
    	{
    		r: 7050,
    		f: 7.05,
    		l: "不定期"
    	},
    	{
    		r: 7051,
    		f: 7.05,
    		l: "イチ"
    	},
    	{
    		r: 7052,
    		f: 7.05,
    		l: "追跡"
    	},
    	{
    		r: 7053,
    		f: 7.05,
    		l: "とぶ"
    	},
    	{
    		r: 7054,
    		f: 7.04,
    		l: "旬"
    	},
    	{
    		r: 7055,
    		f: 7.04,
    		l: "延期"
    	},
    	{
    		r: 7056,
    		f: 7.04,
    		l: "松田"
    	},
    	{
    		r: 7057,
    		f: 7.04,
    		l: "各自"
    	},
    	{
    		r: 7058,
    		f: 7.04,
    		l: "馴染み"
    	},
    	{
    		r: 7059,
    		f: 7.03,
    		l: "お互いに"
    	},
    	{
    		r: 7060,
    		f: 7.03,
    		l: "ともあれ"
    	},
    	{
    		r: 7061,
    		f: 7.03,
    		l: "値する"
    	},
    	{
    		r: 7062,
    		f: 7.03,
    		l: "繁栄"
    	},
    	{
    		r: 7063,
    		f: 7.03,
    		l: "暴走"
    	},
    	{
    		r: 7064,
    		f: 7.03,
    		l: "ヤフー"
    	},
    	{
    		r: 7065,
    		f: 7.03,
    		l: "免疫"
    	},
    	{
    		r: 7066,
    		f: 7.02,
    		l: "ターン"
    	},
    	{
    		r: 7067,
    		f: 7.02,
    		l: "老"
    	},
    	{
    		r: 7068,
    		f: 7.02,
    		l: "いじめ"
    	},
    	{
    		r: 7069,
    		f: 7.02,
    		l: "着手"
    	},
    	{
    		r: 7070,
    		f: 7.02,
    		l: "新型"
    	},
    	{
    		r: 7071,
    		f: 7.02,
    		l: "のせる"
    	},
    	{
    		r: 7072,
    		f: 7.01,
    		l: "教わる"
    	},
    	{
    		r: 7073,
    		f: 7.01,
    		l: "中盤"
    	},
    	{
    		r: 7074,
    		f: 7.01,
    		l: "江"
    	},
    	{
    		r: 7075,
    		f: 7,
    		l: "河"
    	},
    	{
    		r: 7076,
    		f: 7,
    		l: "のぼる"
    	},
    	{
    		r: 7077,
    		f: 7,
    		l: "優"
    	},
    	{
    		r: 7078,
    		f: 7,
    		l: "チリ"
    	},
    	{
    		r: 7079,
    		f: 7,
    		l: "桁"
    	},
    	{
    		r: 7080,
    		f: 7,
    		l: "おかしな"
    	},
    	{
    		r: 7081,
    		f: 6.99,
    		l: "均衡"
    	},
    	{
    		r: 7082,
    		f: 6.99,
    		l: "プラスチック"
    	},
    	{
    		r: 7083,
    		f: 6.99,
    		l: "ロビー"
    	},
    	{
    		r: 7084,
    		f: 6.99,
    		l: "到来"
    	},
    	{
    		r: 7085,
    		f: 6.99,
    		l: "弦"
    	},
    	{
    		r: 7086,
    		f: 6.99,
    		l: "建造"
    	},
    	{
    		r: 7087,
    		f: 6.99,
    		l: "精一杯"
    	},
    	{
    		r: 7088,
    		f: 6.99,
    		l: "用事"
    	},
    	{
    		r: 7089,
    		f: 6.99,
    		l: "下りる"
    	},
    	{
    		r: 7090,
    		f: 6.98,
    		l: "さっさと"
    	},
    	{
    		r: 7091,
    		f: 6.98,
    		l: "商人"
    	},
    	{
    		r: 7092,
    		f: 6.98,
    		l: "タワー"
    	},
    	{
    		r: 7093,
    		f: 6.98,
    		l: "上田"
    	},
    	{
    		r: 7094,
    		f: 6.97,
    		l: "馬場"
    	},
    	{
    		r: 7095,
    		f: 6.97,
    		l: "つなげる"
    	},
    	{
    		r: 7096,
    		f: 6.97,
    		l: "お疲れ様"
    	},
    	{
    		r: 7097,
    		f: 6.97,
    		l: "指向"
    	},
    	{
    		r: 7098,
    		f: 6.97,
    		l: "中核"
    	},
    	{
    		r: 7099,
    		f: 6.97,
    		l: "勘定"
    	},
    	{
    		r: 7100,
    		f: 6.97,
    		l: "運行"
    	},
    	{
    		r: 7101,
    		f: 6.97,
    		l: "兄ちゃん"
    	},
    	{
    		r: 7102,
    		f: 6.97,
    		l: "早"
    	},
    	{
    		r: 7103,
    		f: 6.96,
    		l: "時に"
    	},
    	{
    		r: 7104,
    		f: 6.96,
    		l: "十二月"
    	},
    	{
    		r: 7105,
    		f: 6.96,
    		l: "ムード"
    	},
    	{
    		r: 7106,
    		f: 6.96,
    		l: "同情"
    	},
    	{
    		r: 7107,
    		f: 6.96,
    		l: "学歴"
    	},
    	{
    		r: 7108,
    		f: 6.96,
    		l: "入口"
    	},
    	{
    		r: 7109,
    		f: 6.96,
    		l: "止む"
    	},
    	{
    		r: 7110,
    		f: 6.95,
    		l: "接する"
    	},
    	{
    		r: 7111,
    		f: 6.95,
    		l: "有用"
    	},
    	{
    		r: 7112,
    		f: 6.95,
    		l: "農"
    	},
    	{
    		r: 7113,
    		f: 6.94,
    		l: "更"
    	},
    	{
    		r: 7114,
    		f: 6.94,
    		l: "恩恵"
    	},
    	{
    		r: 7115,
    		f: 6.94,
    		l: "強まる"
    	},
    	{
    		r: 7116,
    		f: 6.94,
    		l: "いやー"
    	},
    	{
    		r: 7117,
    		f: 6.94,
    		l: "法務省"
    	},
    	{
    		r: 7118,
    		f: 6.93,
    		l: "炉"
    	},
    	{
    		r: 7119,
    		f: 6.93,
    		l: "領"
    	},
    	{
    		r: 7120,
    		f: 6.93,
    		l: "うかがう"
    	},
    	{
    		r: 7121,
    		f: 6.93,
    		l: "開"
    	},
    	{
    		r: 7122,
    		f: 6.93,
    		l: "もる"
    	},
    	{
    		r: 7123,
    		f: 6.93,
    		l: "ニック"
    	},
    	{
    		r: 7124,
    		f: 6.92,
    		l: "好調"
    	},
    	{
    		r: 7125,
    		f: 6.92,
    		l: "言動"
    	},
    	{
    		r: 7126,
    		f: 6.92,
    		l: "お笑い"
    	},
    	{
    		r: 7127,
    		f: 6.92,
    		l: "養う"
    	},
    	{
    		r: 7128,
    		f: 6.92,
    		l: "弱者"
    	},
    	{
    		r: 7129,
    		f: 6.92,
    		l: "代行"
    	},
    	{
    		r: 7130,
    		f: 6.92,
    		l: "経歴"
    	},
    	{
    		r: 7131,
    		f: 6.92,
    		l: "片方"
    	},
    	{
    		r: 7132,
    		f: 6.92,
    		l: "気の毒"
    	},
    	{
    		r: 7133,
    		f: 6.92,
    		l: "害"
    	},
    	{
    		r: 7134,
    		f: 6.92,
    		l: "食欲"
    	},
    	{
    		r: 7135,
    		f: 6.92,
    		l: "返答"
    	},
    	{
    		r: 7136,
    		f: 6.91,
    		l: "不自由"
    	},
    	{
    		r: 7137,
    		f: 6.91,
    		l: "容認"
    	},
    	{
    		r: 7138,
    		f: 6.91,
    		l: "自律"
    	},
    	{
    		r: 7139,
    		f: 6.91,
    		l: "茂"
    	},
    	{
    		r: 7140,
    		f: 6.91,
    		l: "如何"
    	},
    	{
    		r: 7141,
    		f: 6.9,
    		l: "フラッシュ"
    	},
    	{
    		r: 7142,
    		f: 6.9,
    		l: "うそ"
    	},
    	{
    		r: 7143,
    		f: 6.9,
    		l: "隣接"
    	},
    	{
    		r: 7144,
    		f: 6.9,
    		l: "順序"
    	},
    	{
    		r: 7145,
    		f: 6.9,
    		l: "前期"
    	},
    	{
    		r: 7146,
    		f: 6.9,
    		l: "そっと"
    	},
    	{
    		r: 7147,
    		f: 6.9,
    		l: "リビング"
    	},
    	{
    		r: 7148,
    		f: 6.9,
    		l: "メモリー"
    	},
    	{
    		r: 7149,
    		f: 6.89,
    		l: "然"
    	},
    	{
    		r: 7150,
    		f: 6.89,
    		l: "無知"
    	},
    	{
    		r: 7151,
    		f: 6.89,
    		l: "秋葉原"
    	},
    	{
    		r: 7152,
    		f: 6.89,
    		l: "宮城"
    	},
    	{
    		r: 7153,
    		f: 6.89,
    		l: "リス"
    	},
    	{
    		r: 7154,
    		f: 6.89,
    		l: "中部"
    	},
    	{
    		r: 7155,
    		f: 6.89,
    		l: "坊"
    	},
    	{
    		r: 7156,
    		f: 6.88,
    		l: "同居"
    	},
    	{
    		r: 7157,
    		f: 6.88,
    		l: "責める"
    	},
    	{
    		r: 7158,
    		f: 6.88,
    		l: "遺体"
    	},
    	{
    		r: 7159,
    		f: 6.88,
    		l: "追いつく"
    	},
    	{
    		r: 7160,
    		f: 6.88,
    		l: "創"
    	},
    	{
    		r: 7161,
    		f: 6.88,
    		l: "寺院"
    	},
    	{
    		r: 7162,
    		f: 6.88,
    		l: "きのう"
    	},
    	{
    		r: 7163,
    		f: 6.88,
    		l: "金沢"
    	},
    	{
    		r: 7164,
    		f: 6.88,
    		l: "とどめる"
    	},
    	{
    		r: 7165,
    		f: 6.88,
    		l: "役目"
    	},
    	{
    		r: 7166,
    		f: 6.88,
    		l: "ふたつ"
    	},
    	{
    		r: 7167,
    		f: 6.88,
    		l: "乗り"
    	},
    	{
    		r: 7168,
    		f: 6.88,
    		l: "澤"
    	},
    	{
    		r: 7169,
    		f: 6.87,
    		l: "ご存じ"
    	},
    	{
    		r: 7170,
    		f: 6.86,
    		l: "即ち"
    	},
    	{
    		r: 7171,
    		f: 6.86,
    		l: "途端"
    	},
    	{
    		r: 7172,
    		f: 6.86,
    		l: "住人"
    	},
    	{
    		r: 7173,
    		f: 6.86,
    		l: "事典"
    	},
    	{
    		r: 7174,
    		f: 6.86,
    		l: "上陸"
    	},
    	{
    		r: 7175,
    		f: 6.86,
    		l: "Tシャツ"
    	},
    	{
    		r: 7176,
    		f: 6.85,
    		l: "打撃"
    	},
    	{
    		r: 7177,
    		f: 6.85,
    		l: "あちら"
    	},
    	{
    		r: 7178,
    		f: 6.84,
    		l: "セブン"
    	},
    	{
    		r: 7179,
    		f: 6.84,
    		l: "こっそり"
    	},
    	{
    		r: 7180,
    		f: 6.84,
    		l: "ハッピー"
    	},
    	{
    		r: 7181,
    		f: 6.84,
    		l: "最小"
    	},
    	{
    		r: 7182,
    		f: 6.84,
    		l: "テレビ局"
    	},
    	{
    		r: 7183,
    		f: 6.84,
    		l: "保安"
    	},
    	{
    		r: 7184,
    		f: 6.84,
    		l: "ボリューム"
    	},
    	{
    		r: 7185,
    		f: 6.84,
    		l: "模型"
    	},
    	{
    		r: 7186,
    		f: 6.84,
    		l: "ミラー"
    	},
    	{
    		r: 7187,
    		f: 6.84,
    		l: "気力"
    	},
    	{
    		r: 7188,
    		f: 6.83,
    		l: "じゃう"
    	},
    	{
    		r: 7189,
    		f: 6.83,
    		l: "西欧"
    	},
    	{
    		r: 7190,
    		f: 6.83,
    		l: "鮮やか"
    	},
    	{
    		r: 7191,
    		f: 6.83,
    		l: "国有"
    	},
    	{
    		r: 7192,
    		f: 6.83,
    		l: "メタ"
    	},
    	{
    		r: 7193,
    		f: 6.83,
    		l: "診る"
    	},
    	{
    		r: 7194,
    		f: 6.83,
    		l: "ドラム"
    	},
    	{
    		r: 7195,
    		f: 6.82,
    		l: "向う"
    	},
    	{
    		r: 7196,
    		f: 6.82,
    		l: "聴取"
    	},
    	{
    		r: 7197,
    		f: 6.82,
    		l: "物資"
    	},
    	{
    		r: 7198,
    		f: 6.82,
    		l: "晋"
    	},
    	{
    		r: 7199,
    		f: 6.82,
    		l: "知能"
    	},
    	{
    		r: 7200,
    		f: 6.82,
    		l: "サロン"
    	},
    	{
    		r: 7201,
    		f: 6.82,
    		l: "アフガニスタン"
    	},
    	{
    		r: 7202,
    		f: 6.82,
    		l: "決着"
    	},
    	{
    		r: 7203,
    		f: 6.82,
    		l: "テル"
    	},
    	{
    		r: 7204,
    		f: 6.82,
    		l: "教徒"
    	},
    	{
    		r: 7205,
    		f: 6.81,
    		l: "査定"
    	},
    	{
    		r: 7206,
    		f: 6.81,
    		l: "心身"
    	},
    	{
    		r: 7207,
    		f: 6.81,
    		l: "唐"
    	},
    	{
    		r: 7208,
    		f: 6.81,
    		l: "折"
    	},
    	{
    		r: 7209,
    		f: 6.81,
    		l: "マック"
    	},
    	{
    		r: 7210,
    		f: 6.81,
    		l: "交える"
    	},
    	{
    		r: 7211,
    		f: 6.81,
    		l: "抑圧"
    	},
    	{
    		r: 7212,
    		f: 6.8,
    		l: "月曜"
    	},
    	{
    		r: 7213,
    		f: 6.8,
    		l: "念頭"
    	},
    	{
    		r: 7214,
    		f: 6.8,
    		l: "ローズ"
    	},
    	{
    		r: 7215,
    		f: 6.8,
    		l: "出"
    	},
    	{
    		r: 7216,
    		f: 6.8,
    		l: "環"
    	},
    	{
    		r: 7217,
    		f: 6.8,
    		l: "見送る"
    	},
    	{
    		r: 7218,
    		f: 6.8,
    		l: "一昨日"
    	},
    	{
    		r: 7219,
    		f: 6.8,
    		l: "アニメーション"
    	},
    	{
    		r: 7220,
    		f: 6.8,
    		l: "連結"
    	},
    	{
    		r: 7221,
    		f: 6.8,
    		l: "増税"
    	},
    	{
    		r: 7222,
    		f: 6.8,
    		l: "債券"
    	},
    	{
    		r: 7223,
    		f: 6.8,
    		l: "好意"
    	},
    	{
    		r: 7224,
    		f: 6.8,
    		l: "楽曲"
    	},
    	{
    		r: 7225,
    		f: 6.79,
    		l: "登"
    	},
    	{
    		r: 7226,
    		f: 6.79,
    		l: "ラグビー"
    	},
    	{
    		r: 7227,
    		f: 6.79,
    		l: "めん"
    	},
    	{
    		r: 7228,
    		f: 6.79,
    		l: "いし"
    	},
    	{
    		r: 7229,
    		f: 6.78,
    		l: "魔女"
    	},
    	{
    		r: 7230,
    		f: 6.78,
    		l: "喪失"
    	},
    	{
    		r: 7231,
    		f: 6.78,
    		l: "前方"
    	},
    	{
    		r: 7232,
    		f: 6.78,
    		l: "ハンド"
    	},
    	{
    		r: 7233,
    		f: 6.78,
    		l: "竹中"
    	},
    	{
    		r: 7234,
    		f: 6.78,
    		l: "助教授"
    	},
    	{
    		r: 7235,
    		f: 6.78,
    		l: "日本酒"
    	},
    	{
    		r: 7236,
    		f: 6.77,
    		l: "立体"
    	},
    	{
    		r: 7237,
    		f: 6.77,
    		l: "断念"
    	},
    	{
    		r: 7238,
    		f: 6.77,
    		l: "恐い"
    	},
    	{
    		r: 7239,
    		f: 6.77,
    		l: "法務"
    	},
    	{
    		r: 7240,
    		f: 6.77,
    		l: "押し"
    	},
    	{
    		r: 7241,
    		f: 6.77,
    		l: "ブロード"
    	},
    	{
    		r: 7242,
    		f: 6.76,
    		l: "除外"
    	},
    	{
    		r: 7243,
    		f: 6.76,
    		l: "バトル"
    	},
    	{
    		r: 7244,
    		f: 6.76,
    		l: "春の"
    	},
    	{
    		r: 7245,
    		f: 6.76,
    		l: "汚れる"
    	},
    	{
    		r: 7246,
    		f: 6.76,
    		l: "ランプ"
    	},
    	{
    		r: 7247,
    		f: 6.76,
    		l: "音響"
    	},
    	{
    		r: 7248,
    		f: 6.76,
    		l: "断熱"
    	},
    	{
    		r: 7249,
    		f: 6.76,
    		l: "テント"
    	},
    	{
    		r: 7250,
    		f: 6.76,
    		l: "急増"
    	},
    	{
    		r: 7251,
    		f: 6.76,
    		l: "結びつける"
    	},
    	{
    		r: 7252,
    		f: 6.76,
    		l: "呼び出す"
    	},
    	{
    		r: 7253,
    		f: 6.75,
    		l: "混雑"
    	},
    	{
    		r: 7254,
    		f: 6.75,
    		l: "犯行"
    	},
    	{
    		r: 7255,
    		f: 6.75,
    		l: "エビ"
    	},
    	{
    		r: 7256,
    		f: 6.75,
    		l: "当方"
    	},
    	{
    		r: 7257,
    		f: 6.75,
    		l: "欧"
    	},
    	{
    		r: 7258,
    		f: 6.75,
    		l: "生理"
    	},
    	{
    		r: 7259,
    		f: 6.75,
    		l: "たたく"
    	},
    	{
    		r: 7260,
    		f: 6.75,
    		l: "算定"
    	},
    	{
    		r: 7261,
    		f: 6.75,
    		l: "帝"
    	},
    	{
    		r: 7262,
    		f: 6.75,
    		l: "暫定"
    	},
    	{
    		r: 7263,
    		f: 6.75,
    		l: "まわす"
    	},
    	{
    		r: 7264,
    		f: 6.75,
    		l: "安価"
    	},
    	{
    		r: 7265,
    		f: 6.75,
    		l: "内蔵"
    	},
    	{
    		r: 7266,
    		f: 6.74,
    		l: "ハードディスク"
    	},
    	{
    		r: 7267,
    		f: 6.73,
    		l: "はたして"
    	},
    	{
    		r: 7268,
    		f: 6.73,
    		l: "さらなる"
    	},
    	{
    		r: 7269,
    		f: 6.73,
    		l: "越す"
    	},
    	{
    		r: 7270,
    		f: 6.73,
    		l: "足る"
    	},
    	{
    		r: 7271,
    		f: 6.73,
    		l: "隙間"
    	},
    	{
    		r: 7272,
    		f: 6.73,
    		l: "オーストリア"
    	},
    	{
    		r: 7273,
    		f: 6.73,
    		l: "中期"
    	},
    	{
    		r: 7274,
    		f: 6.73,
    		l: "許せる"
    	},
    	{
    		r: 7275,
    		f: 6.73,
    		l: "交差点"
    	},
    	{
    		r: 7276,
    		f: 6.72,
    		l: "のり"
    	},
    	{
    		r: 7277,
    		f: 6.72,
    		l: "上達"
    	},
    	{
    		r: 7278,
    		f: 6.72,
    		l: "補う"
    	},
    	{
    		r: 7279,
    		f: 6.72,
    		l: "ラリー"
    	},
    	{
    		r: 7280,
    		f: 6.71,
    		l: "祝う"
    	},
    	{
    		r: 7281,
    		f: 6.71,
    		l: "ゞ"
    	},
    	{
    		r: 7282,
    		f: 6.71,
    		l: "トリノ"
    	},
    	{
    		r: 7283,
    		f: 6.71,
    		l: "タンク"
    	},
    	{
    		r: 7284,
    		f: 6.71,
    		l: "黄色い"
    	},
    	{
    		r: 7285,
    		f: 6.71,
    		l: "評議"
    	},
    	{
    		r: 7286,
    		f: 6.71,
    		l: "友情"
    	},
    	{
    		r: 7287,
    		f: 6.71,
    		l: "ましてや"
    	},
    	{
    		r: 7288,
    		f: 6.71,
    		l: "助"
    	},
    	{
    		r: 7289,
    		f: 6.71,
    		l: "切ない"
    	},
    	{
    		r: 7290,
    		f: 6.71,
    		l: "フィギュア"
    	},
    	{
    		r: 7291,
    		f: 6.71,
    		l: "通行"
    	},
    	{
    		r: 7292,
    		f: 6.71,
    		l: "宏"
    	},
    	{
    		r: 7293,
    		f: 6.7,
    		l: "書物"
    	},
    	{
    		r: 7294,
    		f: 6.7,
    		l: "大豆"
    	},
    	{
    		r: 7295,
    		f: 6.7,
    		l: "アマチュア"
    	},
    	{
    		r: 7296,
    		f: 6.7,
    		l: "漏れる"
    	},
    	{
    		r: 7297,
    		f: 6.7,
    		l: "付与"
    	},
    	{
    		r: 7298,
    		f: 6.7,
    		l: "想う"
    	},
    	{
    		r: 7299,
    		f: 6.7,
    		l: "うっかり"
    	},
    	{
    		r: 7300,
    		f: 6.7,
    		l: "おなか"
    	},
    	{
    		r: 7301,
    		f: 6.7,
    		l: "虎"
    	},
    	{
    		r: 7302,
    		f: 6.69,
    		l: "もとより"
    	},
    	{
    		r: 7303,
    		f: 6.69,
    		l: "東海"
    	},
    	{
    		r: 7304,
    		f: 6.69,
    		l: "あっち"
    	},
    	{
    		r: 7305,
    		f: 6.69,
    		l: "万博"
    	},
    	{
    		r: 7306,
    		f: 6.69,
    		l: "のど"
    	},
    	{
    		r: 7307,
    		f: 6.69,
    		l: "都心"
    	},
    	{
    		r: 7308,
    		f: 6.69,
    		l: "タオル"
    	},
    	{
    		r: 7309,
    		f: 6.69,
    		l: "ドコモ"
    	},
    	{
    		r: 7310,
    		f: 6.69,
    		l: "エージェント"
    	},
    	{
    		r: 7311,
    		f: 6.68,
    		l: "暴露"
    	},
    	{
    		r: 7312,
    		f: 6.68,
    		l: "コミュニティー"
    	},
    	{
    		r: 7313,
    		f: 6.68,
    		l: "青空"
    	},
    	{
    		r: 7314,
    		f: 6.68,
    		l: "永久"
    	},
    	{
    		r: 7315,
    		f: 6.67,
    		l: "ボストン"
    	},
    	{
    		r: 7316,
    		f: 6.67,
    		l: "内外"
    	},
    	{
    		r: 7317,
    		f: 6.67,
    		l: "終始"
    	},
    	{
    		r: 7318,
    		f: 6.67,
    		l: "交際"
    	},
    	{
    		r: 7319,
    		f: 6.67,
    		l: "続"
    	},
    	{
    		r: 7320,
    		f: 6.67,
    		l: "ジョーク"
    	},
    	{
    		r: 7321,
    		f: 6.67,
    		l: "了"
    	},
    	{
    		r: 7322,
    		f: 6.67,
    		l: "書記"
    	},
    	{
    		r: 7323,
    		f: 6.66,
    		l: "動員"
    	},
    	{
    		r: 7324,
    		f: 6.66,
    		l: "未知"
    	},
    	{
    		r: 7325,
    		f: 6.65,
    		l: "言い換える"
    	},
    	{
    		r: 7326,
    		f: 6.65,
    		l: "抜本"
    	},
    	{
    		r: 7327,
    		f: 6.65,
    		l: "ステキ"
    	},
    	{
    		r: 7328,
    		f: 6.65,
    		l: "発動"
    	},
    	{
    		r: 7329,
    		f: 6.65,
    		l: "ギフト"
    	},
    	{
    		r: 7330,
    		f: 6.65,
    		l: "パイ"
    	},
    	{
    		r: 7331,
    		f: 6.65,
    		l: "大島"
    	},
    	{
    		r: 7332,
    		f: 6.65,
    		l: "陸軍"
    	},
    	{
    		r: 7333,
    		f: 6.64,
    		l: "県立"
    	},
    	{
    		r: 7334,
    		f: 6.64,
    		l: "パイプ"
    	},
    	{
    		r: 7335,
    		f: 6.64,
    		l: "ベイ"
    	},
    	{
    		r: 7336,
    		f: 6.64,
    		l: "孤立"
    	},
    	{
    		r: 7337,
    		f: 6.63,
    		l: "シンボル"
    	},
    	{
    		r: 7338,
    		f: 6.63,
    		l: "お子さん"
    	},
    	{
    		r: 7339,
    		f: 6.63,
    		l: "矯正"
    	},
    	{
    		r: 7340,
    		f: 6.63,
    		l: "仮面"
    	},
    	{
    		r: 7341,
    		f: 6.63,
    		l: "煙草"
    	},
    	{
    		r: 7342,
    		f: 6.63,
    		l: "イチロー"
    	},
    	{
    		r: 7343,
    		f: 6.63,
    		l: "ドクター"
    	},
    	{
    		r: 7344,
    		f: 6.63,
    		l: "レイアウト"
    	},
    	{
    		r: 7345,
    		f: 6.62,
    		l: "集まり"
    	},
    	{
    		r: 7346,
    		f: 6.62,
    		l: "次期"
    	},
    	{
    		r: 7347,
    		f: 6.62,
    		l: "広大"
    	},
    	{
    		r: 7348,
    		f: 6.62,
    		l: "よそ"
    	},
    	{
    		r: 7349,
    		f: 6.62,
    		l: "教科"
    	},
    	{
    		r: 7350,
    		f: 6.61,
    		l: "多発"
    	},
    	{
    		r: 7351,
    		f: 6.61,
    		l: "アメ"
    	},
    	{
    		r: 7352,
    		f: 6.61,
    		l: "ヘルプ"
    	},
    	{
    		r: 7353,
    		f: 6.61,
    		l: "あいまい"
    	},
    	{
    		r: 7354,
    		f: 6.61,
    		l: "岡本"
    	},
    	{
    		r: 7355,
    		f: 6.61,
    		l: "訊く"
    	},
    	{
    		r: 7356,
    		f: 6.61,
    		l: "ゴールド"
    	},
    	{
    		r: 7357,
    		f: 6.61,
    		l: "救急"
    	},
    	{
    		r: 7358,
    		f: 6.61,
    		l: "原爆"
    	},
    	{
    		r: 7359,
    		f: 6.6,
    		l: "罰金"
    	},
    	{
    		r: 7360,
    		f: 6.6,
    		l: "ぎりぎり"
    	},
    	{
    		r: 7361,
    		f: 6.6,
    		l: "単一"
    	},
    	{
    		r: 7362,
    		f: 6.6,
    		l: "ピッチ"
    	},
    	{
    		r: 7363,
    		f: 6.6,
    		l: "注射"
    	},
    	{
    		r: 7364,
    		f: 6.6,
    		l: "受験生"
    	},
    	{
    		r: 7365,
    		f: 6.59,
    		l: "リーダーシップ"
    	},
    	{
    		r: 7366,
    		f: 6.59,
    		l: "ジェイ"
    	},
    	{
    		r: 7367,
    		f: 6.59,
    		l: "しばし"
    	},
    	{
    		r: 7368,
    		f: 6.59,
    		l: "歩道"
    	},
    	{
    		r: 7369,
    		f: 6.59,
    		l: "モラル"
    	},
    	{
    		r: 7370,
    		f: 6.59,
    		l: "守"
    	},
    	{
    		r: 7371,
    		f: 6.59,
    		l: "特色"
    	},
    	{
    		r: 7372,
    		f: 6.59,
    		l: "探検"
    	},
    	{
    		r: 7373,
    		f: 6.59,
    		l: "閣議"
    	},
    	{
    		r: 7374,
    		f: 6.59,
    		l: "あわてる"
    	},
    	{
    		r: 7375,
    		f: 6.59,
    		l: "竹内"
    	},
    	{
    		r: 7376,
    		f: 6.58,
    		l: "出入り"
    	},
    	{
    		r: 7377,
    		f: 6.58,
    		l: "サンタ"
    	},
    	{
    		r: 7378,
    		f: 6.58,
    		l: "シャー"
    	},
    	{
    		r: 7379,
    		f: 6.58,
    		l: "ミステリー"
    	},
    	{
    		r: 7380,
    		f: 6.58,
    		l: "ペア"
    	},
    	{
    		r: 7381,
    		f: 6.58,
    		l: "資質"
    	},
    	{
    		r: 7382,
    		f: 6.58,
    		l: "加"
    	},
    	{
    		r: 7383,
    		f: 6.58,
    		l: "アク"
    	},
    	{
    		r: 7384,
    		f: 6.58,
    		l: "反す"
    	},
    	{
    		r: 7385,
    		f: 6.58,
    		l: "シール"
    	},
    	{
    		r: 7386,
    		f: 6.58,
    		l: "シルバー"
    	},
    	{
    		r: 7387,
    		f: 6.58,
    		l: "変る"
    	},
    	{
    		r: 7388,
    		f: 6.57,
    		l: "大騒ぎ"
    	},
    	{
    		r: 7389,
    		f: 6.57,
    		l: "並"
    	},
    	{
    		r: 7390,
    		f: 6.57,
    		l: "劇的"
    	},
    	{
    		r: 7391,
    		f: 6.57,
    		l: "はや"
    	},
    	{
    		r: 7392,
    		f: 6.57,
    		l: "即座"
    	},
    	{
    		r: 7393,
    		f: 6.57,
    		l: "とめる"
    	},
    	{
    		r: 7394,
    		f: 6.56,
    		l: "戦力"
    	},
    	{
    		r: 7395,
    		f: 6.56,
    		l: "損なう"
    	},
    	{
    		r: 7396,
    		f: 6.56,
    		l: "選び"
    	},
    	{
    		r: 7397,
    		f: 6.56,
    		l: "堀"
    	},
    	{
    		r: 7398,
    		f: 6.56,
    		l: "後退"
    	},
    	{
    		r: 7399,
    		f: 6.56,
    		l: "やん"
    	},
    	{
    		r: 7400,
    		f: 6.56,
    		l: "公明党"
    	},
    	{
    		r: 7401,
    		f: 6.56,
    		l: "原文"
    	},
    	{
    		r: 7402,
    		f: 6.56,
    		l: "散策"
    	},
    	{
    		r: 7403,
    		f: 6.56,
    		l: "画期的"
    	},
    	{
    		r: 7404,
    		f: 6.55,
    		l: "打ち込む"
    	},
    	{
    		r: 7405,
    		f: 6.55,
    		l: "火星"
    	},
    	{
    		r: 7406,
    		f: 6.54,
    		l: "たか"
    	},
    	{
    		r: 7407,
    		f: 6.54,
    		l: "閉める"
    	},
    	{
    		r: 7408,
    		f: 6.54,
    		l: "追悼"
    	},
    	{
    		r: 7409,
    		f: 6.54,
    		l: "マイクロ"
    	},
    	{
    		r: 7410,
    		f: 6.54,
    		l: "余りに"
    	},
    	{
    		r: 7411,
    		f: 6.53,
    		l: "引き上げ"
    	},
    	{
    		r: 7412,
    		f: 6.53,
    		l: "文字通り"
    	},
    	{
    		r: 7413,
    		f: 6.53,
    		l: "起床"
    	},
    	{
    		r: 7414,
    		f: 6.53,
    		l: "駒"
    	},
    	{
    		r: 7415,
    		f: 6.53,
    		l: "眼鏡"
    	},
    	{
    		r: 7416,
    		f: 6.53,
    		l: "練る"
    	},
    	{
    		r: 7417,
    		f: 6.53,
    		l: "集計"
    	},
    	{
    		r: 7418,
    		f: 6.53,
    		l: "浜"
    	},
    	{
    		r: 7419,
    		f: 6.53,
    		l: "新興"
    	},
    	{
    		r: 7420,
    		f: 6.53,
    		l: "マスク"
    	},
    	{
    		r: 7421,
    		f: 6.52,
    		l: "後継"
    	},
    	{
    		r: 7422,
    		f: 6.52,
    		l: "宮本"
    	},
    	{
    		r: 7423,
    		f: 6.52,
    		l: "本土"
    	},
    	{
    		r: 7424,
    		f: 6.52,
    		l: "断言"
    	},
    	{
    		r: 7425,
    		f: 6.52,
    		l: "露出"
    	},
    	{
    		r: 7426,
    		f: 6.52,
    		l: "免除"
    	},
    	{
    		r: 7427,
    		f: 6.51,
    		l: "惜しむ"
    	},
    	{
    		r: 7428,
    		f: 6.51,
    		l: "器具"
    	},
    	{
    		r: 7429,
    		f: 6.51,
    		l: "行える"
    	},
    	{
    		r: 7430,
    		f: 6.51,
    		l: "ちなむ"
    	},
    	{
    		r: 7431,
    		f: 6.51,
    		l: "優遇"
    	},
    	{
    		r: 7432,
    		f: 6.51,
    		l: "帰還"
    	},
    	{
    		r: 7433,
    		f: 6.51,
    		l: "中でも"
    	},
    	{
    		r: 7434,
    		f: 6.51,
    		l: "何時"
    	},
    	{
    		r: 7435,
    		f: 6.51,
    		l: "課す"
    	},
    	{
    		r: 7436,
    		f: 6.5,
    		l: "率いる"
    	},
    	{
    		r: 7437,
    		f: 6.5,
    		l: "富む"
    	},
    	{
    		r: 7438,
    		f: 6.5,
    		l: "痛む"
    	},
    	{
    		r: 7439,
    		f: 6.5,
    		l: "頭痛"
    	},
    	{
    		r: 7440,
    		f: 6.5,
    		l: "律"
    	},
    	{
    		r: 7441,
    		f: 6.49,
    		l: "四半期"
    	},
    	{
    		r: 7442,
    		f: 6.49,
    		l: "宴会"
    	},
    	{
    		r: 7443,
    		f: 6.49,
    		l: "鹿"
    	},
    	{
    		r: 7444,
    		f: 6.49,
    		l: "うらやましい"
    	},
    	{
    		r: 7445,
    		f: 6.49,
    		l: "補完"
    	},
    	{
    		r: 7446,
    		f: 6.49,
    		l: "受け入れ"
    	},
    	{
    		r: 7447,
    		f: 6.49,
    		l: "はやる"
    	},
    	{
    		r: 7448,
    		f: 6.48,
    		l: "うたう"
    	},
    	{
    		r: 7449,
    		f: 6.48,
    		l: "くじ"
    	},
    	{
    		r: 7450,
    		f: 6.48,
    		l: "スカート"
    	},
    	{
    		r: 7451,
    		f: 6.48,
    		l: "不自然"
    	},
    	{
    		r: 7452,
    		f: 6.48,
    		l: "個体"
    	},
    	{
    		r: 7453,
    		f: 6.48,
    		l: "ネーム"
    	},
    	{
    		r: 7454,
    		f: 6.48,
    		l: "とまる"
    	},
    	{
    		r: 7455,
    		f: 6.48,
    		l: "引っかかる"
    	},
    	{
    		r: 7456,
    		f: 6.47,
    		l: "落札"
    	},
    	{
    		r: 7457,
    		f: 6.47,
    		l: "割れる"
    	},
    	{
    		r: 7458,
    		f: 6.47,
    		l: "需給"
    	},
    	{
    		r: 7459,
    		f: 6.47,
    		l: "三浦"
    	},
    	{
    		r: 7460,
    		f: 6.47,
    		l: "著名"
    	},
    	{
    		r: 7461,
    		f: 6.46,
    		l: "唇"
    	},
    	{
    		r: 7462,
    		f: 6.46,
    		l: "完結"
    	},
    	{
    		r: 7463,
    		f: 6.46,
    		l: "嘆く"
    	},
    	{
    		r: 7464,
    		f: 6.46,
    		l: "広まる"
    	},
    	{
    		r: 7465,
    		f: 6.46,
    		l: "外貨"
    	},
    	{
    		r: 7466,
    		f: 6.46,
    		l: "作文"
    	},
    	{
    		r: 7467,
    		f: 6.46,
    		l: "通路"
    	},
    	{
    		r: 7468,
    		f: 6.46,
    		l: "気合"
    	},
    	{
    		r: 7469,
    		f: 6.46,
    		l: "Ｖ"
    	},
    	{
    		r: 7470,
    		f: 6.46,
    		l: "立案"
    	},
    	{
    		r: 7471,
    		f: 6.46,
    		l: "全額"
    	},
    	{
    		r: 7472,
    		f: 6.46,
    		l: "通話"
    	},
    	{
    		r: 7473,
    		f: 6.45,
    		l: "リターン"
    	},
    	{
    		r: 7474,
    		f: 6.45,
    		l: "愛国心"
    	},
    	{
    		r: 7475,
    		f: 6.45,
    		l: "充電"
    	},
    	{
    		r: 7476,
    		f: 6.45,
    		l: "意味合い"
    	},
    	{
    		r: 7477,
    		f: 6.45,
    		l: "色彩"
    	},
    	{
    		r: 7478,
    		f: 6.44,
    		l: "食物"
    	},
    	{
    		r: 7479,
    		f: 6.44,
    		l: "在る"
    	},
    	{
    		r: 7480,
    		f: 6.44,
    		l: "参戦"
    	},
    	{
    		r: 7481,
    		f: 6.44,
    		l: "共存"
    	},
    	{
    		r: 7482,
    		f: 6.44,
    		l: "蓋"
    	},
    	{
    		r: 7483,
    		f: 6.44,
    		l: "症候群"
    	},
    	{
    		r: 7484,
    		f: 6.44,
    		l: "ってな"
    	},
    	{
    		r: 7485,
    		f: 6.44,
    		l: "繋ぐ"
    	},
    	{
    		r: 7486,
    		f: 6.44,
    		l: "手がける"
    	},
    	{
    		r: 7487,
    		f: 6.44,
    		l: "木材"
    	},
    	{
    		r: 7488,
    		f: 6.44,
    		l: "敗北"
    	},
    	{
    		r: 7489,
    		f: 6.43,
    		l: "化す"
    	},
    	{
    		r: 7490,
    		f: 6.43,
    		l: "こす"
    	},
    	{
    		r: 7491,
    		f: 6.43,
    		l: "浸る"
    	},
    	{
    		r: 7492,
    		f: 6.43,
    		l: "昨晩"
    	},
    	{
    		r: 7493,
    		f: 6.43,
    		l: "荒川"
    	},
    	{
    		r: 7494,
    		f: 6.43,
    		l: "高騰"
    	},
    	{
    		r: 7495,
    		f: 6.43,
    		l: "退院"
    	},
    	{
    		r: 7496,
    		f: 6.42,
    		l: "所管"
    	},
    	{
    		r: 7497,
    		f: 6.42,
    		l: "ヒロイン"
    	},
    	{
    		r: 7498,
    		f: 6.42,
    		l: "妨げる"
    	},
    	{
    		r: 7499,
    		f: 6.42,
    		l: "品種"
    	},
    	{
    		r: 7500,
    		f: 6.42,
    		l: "遺憾"
    	},
    	{
    		r: 7501,
    		f: 6.42,
    		l: "見極める"
    	},
    	{
    		r: 7502,
    		f: 6.42,
    		l: "ひょっと"
    	},
    	{
    		r: 7503,
    		f: 6.42,
    		l: "つぶす"
    	},
    	{
    		r: 7504,
    		f: 6.42,
    		l: "包括"
    	},
    	{
    		r: 7505,
    		f: 6.42,
    		l: "臓器"
    	},
    	{
    		r: 7506,
    		f: 6.42,
    		l: "爪"
    	},
    	{
    		r: 7507,
    		f: 6.42,
    		l: "ドラゴン"
    	},
    	{
    		r: 7508,
    		f: 6.41,
    		l: "指令"
    	},
    	{
    		r: 7509,
    		f: 6.41,
    		l: "書房"
    	},
    	{
    		r: 7510,
    		f: 6.41,
    		l: "見受ける"
    	},
    	{
    		r: 7511,
    		f: 6.41,
    		l: "退場"
    	},
    	{
    		r: 7512,
    		f: 6.41,
    		l: "突く"
    	},
    	{
    		r: 7513,
    		f: 6.41,
    		l: "ベストセラー"
    	},
    	{
    		r: 7514,
    		f: 6.41,
    		l: "親しむ"
    	},
    	{
    		r: 7515,
    		f: 6.41,
    		l: "選べる"
    	},
    	{
    		r: 7516,
    		f: 6.41,
    		l: "宜しい"
    	},
    	{
    		r: 7517,
    		f: 6.41,
    		l: "コンタクト"
    	},
    	{
    		r: 7518,
    		f: 6.4,
    		l: "マット"
    	},
    	{
    		r: 7519,
    		f: 6.4,
    		l: "市役所"
    	},
    	{
    		r: 7520,
    		f: 6.4,
    		l: "竹島"
    	},
    	{
    		r: 7521,
    		f: 6.4,
    		l: "なくす"
    	},
    	{
    		r: 7522,
    		f: 6.4,
    		l: "リカ"
    	},
    	{
    		r: 7523,
    		f: 6.4,
    		l: "書面"
    	},
    	{
    		r: 7524,
    		f: 6.4,
    		l: "盛り上げる"
    	},
    	{
    		r: 7525,
    		f: 6.39,
    		l: "事象"
    	},
    	{
    		r: 7526,
    		f: 6.39,
    		l: "留意"
    	},
    	{
    		r: 7527,
    		f: 6.39,
    		l: "体操"
    	},
    	{
    		r: 7528,
    		f: 6.39,
    		l: "不審"
    	},
    	{
    		r: 7529,
    		f: 6.39,
    		l: "治す"
    	},
    	{
    		r: 7530,
    		f: 6.38,
    		l: "社説"
    	},
    	{
    		r: 7531,
    		f: 6.38,
    		l: "芽"
    	},
    	{
    		r: 7532,
    		f: 6.38,
    		l: "乗れる"
    	},
    	{
    		r: 7533,
    		f: 6.38,
    		l: "痛"
    	},
    	{
    		r: 7534,
    		f: 6.38,
    		l: "颪"
    	},
    	{
    		r: 7535,
    		f: 6.38,
    		l: "芸術家"
    	},
    	{
    		r: 7536,
    		f: 6.38,
    		l: "異動"
    	},
    	{
    		r: 7537,
    		f: 6.38,
    		l: "完"
    	},
    	{
    		r: 7538,
    		f: 6.37,
    		l: "インターナショナル"
    	},
    	{
    		r: 7539,
    		f: 6.37,
    		l: "陸"
    	},
    	{
    		r: 7540,
    		f: 6.37,
    		l: "多大"
    	},
    	{
    		r: 7541,
    		f: 6.37,
    		l: "抜群"
    	},
    	{
    		r: 7542,
    		f: 6.37,
    		l: "火山"
    	},
    	{
    		r: 7543,
    		f: 6.37,
    		l: "労務"
    	},
    	{
    		r: 7544,
    		f: 6.37,
    		l: "野田"
    	},
    	{
    		r: 7545,
    		f: 6.37,
    		l: "テンプレート"
    	},
    	{
    		r: 7546,
    		f: 6.36,
    		l: "冷凍"
    	},
    	{
    		r: 7547,
    		f: 6.36,
    		l: "ベルギー"
    	},
    	{
    		r: 7548,
    		f: 6.36,
    		l: "いまいち"
    	},
    	{
    		r: 7549,
    		f: 6.36,
    		l: "年賀状"
    	},
    	{
    		r: 7550,
    		f: 6.36,
    		l: "七夕"
    	},
    	{
    		r: 7551,
    		f: 6.35,
    		l: "苦"
    	},
    	{
    		r: 7552,
    		f: 6.35,
    		l: "ハッキリ"
    	},
    	{
    		r: 7553,
    		f: 6.35,
    		l: "うし"
    	},
    	{
    		r: 7554,
    		f: 6.35,
    		l: "パイロット"
    	},
    	{
    		r: 7555,
    		f: 6.35,
    		l: "出し"
    	},
    	{
    		r: 7556,
    		f: 6.35,
    		l: "日本一"
    	},
    	{
    		r: 7557,
    		f: 6.35,
    		l: "徹"
    	},
    	{
    		r: 7558,
    		f: 6.35,
    		l: "パーマ"
    	},
    	{
    		r: 7559,
    		f: 6.35,
    		l: "説教"
    	},
    	{
    		r: 7560,
    		f: 6.35,
    		l: "一昨年"
    	},
    	{
    		r: 7561,
    		f: 6.35,
    		l: "こたえる"
    	},
    	{
    		r: 7562,
    		f: 6.34,
    		l: "どん"
    	},
    	{
    		r: 7563,
    		f: 6.34,
    		l: "クレジット"
    	},
    	{
    		r: 7564,
    		f: 6.34,
    		l: "登記"
    	},
    	{
    		r: 7565,
    		f: 6.34,
    		l: "仲介"
    	},
    	{
    		r: 7566,
    		f: 6.34,
    		l: "エイ"
    	},
    	{
    		r: 7567,
    		f: 6.34,
    		l: "半導体"
    	},
    	{
    		r: 7568,
    		f: 6.33,
    		l: "何かと"
    	},
    	{
    		r: 7569,
    		f: 6.33,
    		l: "ナイ"
    	},
    	{
    		r: 7570,
    		f: 6.33,
    		l: "炒める"
    	},
    	{
    		r: 7571,
    		f: 6.33,
    		l: "放射"
    	},
    	{
    		r: 7572,
    		f: 6.33,
    		l: "ホンダ"
    	},
    	{
    		r: 7573,
    		f: 6.33,
    		l: "劇団"
    	},
    	{
    		r: 7574,
    		f: 6.32,
    		l: "自発"
    	},
    	{
    		r: 7575,
    		f: 6.32,
    		l: "明ける"
    	},
    	{
    		r: 7576,
    		f: 6.32,
    		l: "ロマン"
    	},
    	{
    		r: 7577,
    		f: 6.32,
    		l: "髪の毛"
    	},
    	{
    		r: 7578,
    		f: 6.31,
    		l: "如し"
    	},
    	{
    		r: 7579,
    		f: 6.31,
    		l: "アリス"
    	},
    	{
    		r: 7580,
    		f: 6.31,
    		l: "物体"
    	},
    	{
    		r: 7581,
    		f: 6.31,
    		l: "救助"
    	},
    	{
    		r: 7582,
    		f: 6.31,
    		l: "見合う"
    	},
    	{
    		r: 7583,
    		f: 6.31,
    		l: "同年"
    	},
    	{
    		r: 7584,
    		f: 6.31,
    		l: "一同"
    	},
    	{
    		r: 7585,
    		f: 6.31,
    		l: "奮闘"
    	},
    	{
    		r: 7586,
    		f: 6.31,
    		l: "野村"
    	},
    	{
    		r: 7587,
    		f: 6.31,
    		l: "騎士"
    	},
    	{
    		r: 7588,
    		f: 6.31,
    		l: "順次"
    	},
    	{
    		r: 7589,
    		f: 6.3,
    		l: "ドーム"
    	},
    	{
    		r: 7590,
    		f: 6.3,
    		l: "装着"
    	},
    	{
    		r: 7591,
    		f: 6.3,
    		l: "圧倒"
    	},
    	{
    		r: 7592,
    		f: 6.3,
    		l: "なう"
    	},
    	{
    		r: 7593,
    		f: 6.3,
    		l: "間近"
    	},
    	{
    		r: 7594,
    		f: 6.3,
    		l: "決心"
    	},
    	{
    		r: 7595,
    		f: 6.29,
    		l: "フルーツ"
    	},
    	{
    		r: 7596,
    		f: 6.29,
    		l: "容赦"
    	},
    	{
    		r: 7597,
    		f: 6.29,
    		l: "均等"
    	},
    	{
    		r: 7598,
    		f: 6.29,
    		l: "偏る"
    	},
    	{
    		r: 7599,
    		f: 6.29,
    		l: "切符"
    	},
    	{
    		r: 7600,
    		f: 6.29,
    		l: "キット"
    	},
    	{
    		r: 7601,
    		f: 6.29,
    		l: "乾く"
    	},
    	{
    		r: 7602,
    		f: 6.29,
    		l: "池袋"
    	},
    	{
    		r: 7603,
    		f: 6.29,
    		l: "に関しまして"
    	},
    	{
    		r: 7604,
    		f: 6.29,
    		l: "カスタマイズ"
    	},
    	{
    		r: 7605,
    		f: 6.29,
    		l: "ディスカッション"
    	},
    	{
    		r: 7606,
    		f: 6.29,
    		l: "給"
    	},
    	{
    		r: 7607,
    		f: 6.28,
    		l: "兵隊"
    	},
    	{
    		r: 7608,
    		f: 6.28,
    		l: "よくなる"
    	},
    	{
    		r: 7609,
    		f: 6.28,
    		l: "空中"
    	},
    	{
    		r: 7610,
    		f: 6.28,
    		l: "別々"
    	},
    	{
    		r: 7611,
    		f: 6.28,
    		l: "隼"
    	},
    	{
    		r: 7612,
    		f: 6.28,
    		l: "朝鮮半島"
    	},
    	{
    		r: 7613,
    		f: 6.28,
    		l: "荒れる"
    	},
    	{
    		r: 7614,
    		f: 6.27,
    		l: "押し付ける"
    	},
    	{
    		r: 7615,
    		f: 6.27,
    		l: "差異"
    	},
    	{
    		r: 7616,
    		f: 6.27,
    		l: "タスク"
    	},
    	{
    		r: 7617,
    		f: 6.27,
    		l: "良好"
    	},
    	{
    		r: 7618,
    		f: 6.27,
    		l: "実効"
    	},
    	{
    		r: 7619,
    		f: 6.27,
    		l: "敗"
    	},
    	{
    		r: 7620,
    		f: 6.27,
    		l: "隅"
    	},
    	{
    		r: 7621,
    		f: 6.27,
    		l: "組み立てる"
    	},
    	{
    		r: 7622,
    		f: 6.27,
    		l: "なにしろ"
    	},
    	{
    		r: 7623,
    		f: 6.27,
    		l: "波動"
    	},
    	{
    		r: 7624,
    		f: 6.27,
    		l: "ネイティブ"
    	},
    	{
    		r: 7625,
    		f: 6.27,
    		l: "狩り"
    	},
    	{
    		r: 7626,
    		f: 6.26,
    		l: "創立"
    	},
    	{
    		r: 7627,
    		f: 6.26,
    		l: "連発"
    	},
    	{
    		r: 7628,
    		f: 6.26,
    		l: "年々"
    	},
    	{
    		r: 7629,
    		f: 6.26,
    		l: "装飾"
    	},
    	{
    		r: 7630,
    		f: 6.26,
    		l: "瞑想"
    	},
    	{
    		r: 7631,
    		f: 6.26,
    		l: "関税"
    	},
    	{
    		r: 7632,
    		f: 6.26,
    		l: "夕刊"
    	},
    	{
    		r: 7633,
    		f: 6.26,
    		l: "変数"
    	},
    	{
    		r: 7634,
    		f: 6.26,
    		l: "いまだ"
    	},
    	{
    		r: 7635,
    		f: 6.26,
    		l: "ハル"
    	},
    	{
    		r: 7636,
    		f: 6.26,
    		l: "利子"
    	},
    	{
    		r: 7637,
    		f: 6.26,
    		l: "無数"
    	},
    	{
    		r: 7638,
    		f: 6.26,
    		l: "後方"
    	},
    	{
    		r: 7639,
    		f: 6.26,
    		l: "ちょっぴり"
    	},
    	{
    		r: 7640,
    		f: 6.26,
    		l: "衣"
    	},
    	{
    		r: 7641,
    		f: 6.26,
    		l: "外観"
    	},
    	{
    		r: 7642,
    		f: 6.26,
    		l: "わざと"
    	},
    	{
    		r: 7643,
    		f: 6.26,
    		l: "簿"
    	},
    	{
    		r: 7644,
    		f: 6.26,
    		l: "ジョー"
    	},
    	{
    		r: 7645,
    		f: 6.26,
    		l: "契機"
    	},
    	{
    		r: 7646,
    		f: 6.25,
    		l: "金子"
    	},
    	{
    		r: 7647,
    		f: 6.25,
    		l: "就労"
    	},
    	{
    		r: 7648,
    		f: 6.25,
    		l: "紅"
    	},
    	{
    		r: 7649,
    		f: 6.25,
    		l: "体感"
    	},
    	{
    		r: 7650,
    		f: 6.24,
    		l: "切り"
    	},
    	{
    		r: 7651,
    		f: 6.24,
    		l: "購買"
    	},
    	{
    		r: 7652,
    		f: 6.24,
    		l: "誠に"
    	},
    	{
    		r: 7653,
    		f: 6.24,
    		l: "ポップ"
    	},
    	{
    		r: 7654,
    		f: 6.24,
    		l: "織る"
    	},
    	{
    		r: 7655,
    		f: 6.24,
    		l: "てん"
    	},
    	{
    		r: 7656,
    		f: 6.24,
    		l: "間隔"
    	},
    	{
    		r: 7657,
    		f: 6.24,
    		l: "運輸"
    	},
    	{
    		r: 7658,
    		f: 6.24,
    		l: "感触"
    	},
    	{
    		r: 7659,
    		f: 6.23,
    		l: "フラット"
    	},
    	{
    		r: 7660,
    		f: 6.23,
    		l: "一般人"
    	},
    	{
    		r: 7661,
    		f: 6.23,
    		l: "バンク"
    	},
    	{
    		r: 7662,
    		f: 6.23,
    		l: "有益"
    	},
    	{
    		r: 7663,
    		f: 6.23,
    		l: "お天気"
    	},
    	{
    		r: 7664,
    		f: 6.23,
    		l: "放射線"
    	},
    	{
    		r: 7665,
    		f: 6.23,
    		l: "トリ"
    	},
    	{
    		r: 7666,
    		f: 6.22,
    		l: "てい"
    	},
    	{
    		r: 7667,
    		f: 6.22,
    		l: "巡回"
    	},
    	{
    		r: 7668,
    		f: 6.22,
    		l: "坪"
    	},
    	{
    		r: 7669,
    		f: 6.22,
    		l: "呑む"
    	},
    	{
    		r: 7670,
    		f: 6.22,
    		l: "旨い"
    	},
    	{
    		r: 7671,
    		f: 6.22,
    		l: "トランス"
    	},
    	{
    		r: 7672,
    		f: 6.22,
    		l: "要旨"
    	},
    	{
    		r: 7673,
    		f: 6.22,
    		l: "狼"
    	},
    	{
    		r: 7674,
    		f: 6.22,
    		l: "泥棒"
    	},
    	{
    		r: 7675,
    		f: 6.22,
    		l: "東証"
    	},
    	{
    		r: 7676,
    		f: 6.21,
    		l: "ギャグ"
    	},
    	{
    		r: 7677,
    		f: 6.21,
    		l: "餅"
    	},
    	{
    		r: 7678,
    		f: 6.21,
    		l: "上演"
    	},
    	{
    		r: 7679,
    		f: 6.21,
    		l: "密度"
    	},
    	{
    		r: 7680,
    		f: 6.21,
    		l: "菜"
    	},
    	{
    		r: 7681,
    		f: 6.21,
    		l: "相撲"
    	},
    	{
    		r: 7682,
    		f: 6.2,
    		l: "ませる"
    	},
    	{
    		r: 7683,
    		f: 6.2,
    		l: "ジェット"
    	},
    	{
    		r: 7684,
    		f: 6.2,
    		l: "出掛ける"
    	},
    	{
    		r: 7685,
    		f: 6.2,
    		l: "警視庁"
    	},
    	{
    		r: 7686,
    		f: 6.2,
    		l: "プラグ"
    	},
    	{
    		r: 7687,
    		f: 6.2,
    		l: "ライオン"
    	},
    	{
    		r: 7688,
    		f: 6.2,
    		l: "稼げる"
    	},
    	{
    		r: 7689,
    		f: 6.2,
    		l: "解ける"
    	},
    	{
    		r: 7690,
    		f: 6.2,
    		l: "晴"
    	},
    	{
    		r: 7691,
    		f: 6.2,
    		l: "エア"
    	},
    	{
    		r: 7692,
    		f: 6.2,
    		l: "カーテン"
    	},
    	{
    		r: 7693,
    		f: 6.2,
    		l: "市街地"
    	},
    	{
    		r: 7694,
    		f: 6.19,
    		l: "対外"
    	},
    	{
    		r: 7695,
    		f: 6.19,
    		l: "センサー"
    	},
    	{
    		r: 7696,
    		f: 6.19,
    		l: "がっかり"
    	},
    	{
    		r: 7697,
    		f: 6.19,
    		l: "重複"
    	},
    	{
    		r: 7698,
    		f: 6.19,
    		l: "ｇ"
    	},
    	{
    		r: 7699,
    		f: 6.18,
    		l: "簡潔"
    	},
    	{
    		r: 7700,
    		f: 6.18,
    		l: "甲"
    	},
    	{
    		r: 7701,
    		f: 6.18,
    		l: "梁"
    	},
    	{
    		r: 7702,
    		f: 6.18,
    		l: "憂鬱"
    	},
    	{
    		r: 7703,
    		f: 6.18,
    		l: "プロデュース"
    	},
    	{
    		r: 7704,
    		f: 6.18,
    		l: "お詫び"
    	},
    	{
    		r: 7705,
    		f: 6.18,
    		l: "三重"
    	},
    	{
    		r: 7706,
    		f: 6.18,
    		l: "勢"
    	},
    	{
    		r: 7707,
    		f: 6.17,
    		l: "ウィルス"
    	},
    	{
    		r: 7708,
    		f: 6.17,
    		l: "桃"
    	},
    	{
    		r: 7709,
    		f: 6.17,
    		l: "斜め"
    	},
    	{
    		r: 7710,
    		f: 6.17,
    		l: "ばっかり"
    	},
    	{
    		r: 7711,
    		f: 6.17,
    		l: "裏側"
    	},
    	{
    		r: 7712,
    		f: 6.17,
    		l: "創出"
    	},
    	{
    		r: 7713,
    		f: 6.17,
    		l: "バルセロナ"
    	},
    	{
    		r: 7714,
    		f: 6.17,
    		l: "外人"
    	},
    	{
    		r: 7715,
    		f: 6.17,
    		l: "フロア"
    	},
    	{
    		r: 7716,
    		f: 6.17,
    		l: "大根"
    	},
    	{
    		r: 7717,
    		f: 6.16,
    		l: "贈り物"
    	},
    	{
    		r: 7718,
    		f: 6.16,
    		l: "アスベスト"
    	},
    	{
    		r: 7719,
    		f: 6.16,
    		l: "切手"
    	},
    	{
    		r: 7720,
    		f: 6.16,
    		l: "根底"
    	},
    	{
    		r: 7721,
    		f: 6.16,
    		l: "営む"
    	},
    	{
    		r: 7722,
    		f: 6.16,
    		l: "こい"
    	},
    	{
    		r: 7723,
    		f: 6.16,
    		l: "半数"
    	},
    	{
    		r: 7724,
    		f: 6.16,
    		l: "因果"
    	},
    	{
    		r: 7725,
    		f: 6.15,
    		l: "繊細"
    	},
    	{
    		r: 7726,
    		f: 6.15,
    		l: "おける"
    	},
    	{
    		r: 7727,
    		f: 6.15,
    		l: "バレる"
    	},
    	{
    		r: 7728,
    		f: 6.15,
    		l: "国交"
    	},
    	{
    		r: 7729,
    		f: 6.15,
    		l: "ＮＴＴ"
    	},
    	{
    		r: 7730,
    		f: 6.15,
    		l: "傾く"
    	},
    	{
    		r: 7731,
    		f: 6.14,
    		l: "転じる"
    	},
    	{
    		r: 7732,
    		f: 6.14,
    		l: "フォード"
    	},
    	{
    		r: 7733,
    		f: 6.14,
    		l: "裁量"
    	},
    	{
    		r: 7734,
    		f: 6.14,
    		l: "最先端"
    	},
    	{
    		r: 7735,
    		f: 6.14,
    		l: "モダン"
    	},
    	{
    		r: 7736,
    		f: 6.13,
    		l: "暗殺"
    	},
    	{
    		r: 7737,
    		f: 6.13,
    		l: "出店"
    	},
    	{
    		r: 7738,
    		f: 6.13,
    		l: "タマ"
    	},
    	{
    		r: 7739,
    		f: 6.13,
    		l: "カメラマン"
    	},
    	{
    		r: 7740,
    		f: 6.13,
    		l: "互換"
    	},
    	{
    		r: 7741,
    		f: 6.13,
    		l: "秀"
    	},
    	{
    		r: 7742,
    		f: 6.13,
    		l: "再発"
    	},
    	{
    		r: 7743,
    		f: 6.12,
    		l: "共済"
    	},
    	{
    		r: 7744,
    		f: 6.12,
    		l: "道場"
    	},
    	{
    		r: 7745,
    		f: 6.12,
    		l: "果て"
    	},
    	{
    		r: 7746,
    		f: 6.12,
    		l: "効用"
    	},
    	{
    		r: 7747,
    		f: 6.12,
    		l: "名詞"
    	},
    	{
    		r: 7748,
    		f: 6.12,
    		l: "結末"
    	},
    	{
    		r: 7749,
    		f: 6.12,
    		l: "済"
    	},
    	{
    		r: 7750,
    		f: 6.12,
    		l: "離す"
    	},
    	{
    		r: 7751,
    		f: 6.12,
    		l: "凝る"
    	},
    	{
    		r: 7752,
    		f: 6.12,
    		l: "いのち"
    	},
    	{
    		r: 7753,
    		f: 6.11,
    		l: "モンスター"
    	},
    	{
    		r: 7754,
    		f: 6.11,
    		l: "だます"
    	},
    	{
    		r: 7755,
    		f: 6.11,
    		l: "水木"
    	},
    	{
    		r: 7756,
    		f: 6.11,
    		l: "ツボ"
    	},
    	{
    		r: 7757,
    		f: 6.11,
    		l: "休業"
    	},
    	{
    		r: 7758,
    		f: 6.11,
    		l: "今頃"
    	},
    	{
    		r: 7759,
    		f: 6.11,
    		l: "おとなしい"
    	},
    	{
    		r: 7760,
    		f: 6.1,
    		l: "両立"
    	},
    	{
    		r: 7761,
    		f: 6.1,
    		l: "高原"
    	},
    	{
    		r: 7762,
    		f: 6.1,
    		l: "怠る"
    	},
    	{
    		r: 7763,
    		f: 6.1,
    		l: "テレ"
    	},
    	{
    		r: 7764,
    		f: 6.1,
    		l: "キック"
    	},
    	{
    		r: 7765,
    		f: 6.1,
    		l: "拒絶"
    	},
    	{
    		r: 7766,
    		f: 6.1,
    		l: "隊長"
    	},
    	{
    		r: 7767,
    		f: 6.1,
    		l: "タカ"
    	},
    	{
    		r: 7768,
    		f: 6.09,
    		l: "貯蓄"
    	},
    	{
    		r: 7769,
    		f: 6.09,
    		l: "修了"
    	},
    	{
    		r: 7770,
    		f: 6.09,
    		l: "南米"
    	},
    	{
    		r: 7771,
    		f: 6.09,
    		l: "つまむ"
    	},
    	{
    		r: 7772,
    		f: 6.09,
    		l: "題す"
    	},
    	{
    		r: 7773,
    		f: 6.08,
    		l: "グラム"
    	},
    	{
    		r: 7774,
    		f: 6.08,
    		l: "問合せ"
    	},
    	{
    		r: 7775,
    		f: 6.08,
    		l: "立ち止まる"
    	},
    	{
    		r: 7776,
    		f: 6.08,
    		l: "クッキング"
    	},
    	{
    		r: 7777,
    		f: 6.08,
    		l: "強盗"
    	},
    	{
    		r: 7778,
    		f: 6.08,
    		l: "芸能人"
    	},
    	{
    		r: 7779,
    		f: 6.08,
    		l: "篇"
    	},
    	{
    		r: 7780,
    		f: 6.07,
    		l: "上部"
    	},
    	{
    		r: 7781,
    		f: 6.07,
    		l: "由"
    	},
    	{
    		r: 7782,
    		f: 6.07,
    		l: "オープニング"
    	},
    	{
    		r: 7783,
    		f: 6.07,
    		l: "格安"
    	},
    	{
    		r: 7784,
    		f: 6.07,
    		l: "共生"
    	},
    	{
    		r: 7785,
    		f: 6.07,
    		l: "放出"
    	},
    	{
    		r: 7786,
    		f: 6.07,
    		l: "ゴー"
    	},
    	{
    		r: 7787,
    		f: 6.07,
    		l: "属す"
    	},
    	{
    		r: 7788,
    		f: 6.06,
    		l: "次ぐ"
    	},
    	{
    		r: 7789,
    		f: 6.06,
    		l: "学長"
    	},
    	{
    		r: 7790,
    		f: 6.06,
    		l: "駆ける"
    	},
    	{
    		r: 7791,
    		f: 6.06,
    		l: "挫折"
    	},
    	{
    		r: 7792,
    		f: 6.06,
    		l: "誘拐"
    	},
    	{
    		r: 7793,
    		f: 6.05,
    		l: "ハマる"
    	},
    	{
    		r: 7794,
    		f: 6.05,
    		l: "愚か"
    	},
    	{
    		r: 7795,
    		f: 6.05,
    		l: "河野"
    	},
    	{
    		r: 7796,
    		f: 6.05,
    		l: "富士"
    	},
    	{
    		r: 7797,
    		f: 6.05,
    		l: "ハイテク"
    	},
    	{
    		r: 7798,
    		f: 6.05,
    		l: "通称"
    	},
    	{
    		r: 7799,
    		f: 6.05,
    		l: "母子"
    	},
    	{
    		r: 7800,
    		f: 6.05,
    		l: "みつ"
    	},
    	{
    		r: 7801,
    		f: 6.05,
    		l: "震える"
    	},
    	{
    		r: 7802,
    		f: 6.05,
    		l: "不可"
    	},
    	{
    		r: 7803,
    		f: 6.05,
    		l: "ミックス"
    	},
    	{
    		r: 7804,
    		f: 6.05,
    		l: "バレ"
    	},
    	{
    		r: 7805,
    		f: 6.04,
    		l: "厳格"
    	},
    	{
    		r: 7806,
    		f: 6.04,
    		l: "美味い"
    	},
    	{
    		r: 7807,
    		f: 6.04,
    		l: "出題"
    	},
    	{
    		r: 7808,
    		f: 6.04,
    		l: "むく"
    	},
    	{
    		r: 7809,
    		f: 6.04,
    		l: "まんま"
    	},
    	{
    		r: 7810,
    		f: 6.04,
    		l: "貴"
    	},
    	{
    		r: 7811,
    		f: 6.04,
    		l: "しんどい"
    	},
    	{
    		r: 7812,
    		f: 6.04,
    		l: "トニー"
    	},
    	{
    		r: 7813,
    		f: 6.04,
    		l: "近郊"
    	},
    	{
    		r: 7814,
    		f: 6.04,
    		l: "レギュラー"
    	},
    	{
    		r: 7815,
    		f: 6.04,
    		l: "ホラー"
    	},
    	{
    		r: 7816,
    		f: 6.04,
    		l: "ラム"
    	},
    	{
    		r: 7817,
    		f: 6.03,
    		l: "半島"
    	},
    	{
    		r: 7818,
    		f: 6.03,
    		l: "周期"
    	},
    	{
    		r: 7819,
    		f: 6.03,
    		l: "くだ"
    	},
    	{
    		r: 7820,
    		f: 6.03,
    		l: "つくづく"
    	},
    	{
    		r: 7821,
    		f: 6.03,
    		l: "到底"
    	},
    	{
    		r: 7822,
    		f: 6.03,
    		l: "読み返す"
    	},
    	{
    		r: 7823,
    		f: 6.03,
    		l: "しん"
    	},
    	{
    		r: 7824,
    		f: 6.02,
    		l: "待機"
    	},
    	{
    		r: 7825,
    		f: 6.02,
    		l: "アブ"
    	},
    	{
    		r: 7826,
    		f: 6.02,
    		l: "こめる"
    	},
    	{
    		r: 7827,
    		f: 6.02,
    		l: "群馬"
    	},
    	{
    		r: 7828,
    		f: 6.02,
    		l: "専業"
    	},
    	{
    		r: 7829,
    		f: 6.02,
    		l: "判例"
    	},
    	{
    		r: 7830,
    		f: 6.02,
    		l: "素早い"
    	},
    	{
    		r: 7831,
    		f: 6.02,
    		l: "ふれる"
    	},
    	{
    		r: 7832,
    		f: 6.02,
    		l: "極力"
    	},
    	{
    		r: 7833,
    		f: 6.02,
    		l: "高値"
    	},
    	{
    		r: 7834,
    		f: 6.02,
    		l: "阻害"
    	},
    	{
    		r: 7835,
    		f: 6.02,
    		l: "地名"
    	},
    	{
    		r: 7836,
    		f: 6.01,
    		l: "常時"
    	},
    	{
    		r: 7837,
    		f: 6.01,
    		l: "ワード"
    	},
    	{
    		r: 7838,
    		f: 6.01,
    		l: "屋台"
    	},
    	{
    		r: 7839,
    		f: 6.01,
    		l: "立地"
    	},
    	{
    		r: 7840,
    		f: 6.01,
    		l: "よっぽど"
    	},
    	{
    		r: 7841,
    		f: 6.01,
    		l: "急遽"
    	},
    	{
    		r: 7842,
    		f: 6.01,
    		l: "食生活"
    	},
    	{
    		r: 7843,
    		f: 6,
    		l: "ディレクター"
    	},
    	{
    		r: 7844,
    		f: 6,
    		l: "例年"
    	},
    	{
    		r: 7845,
    		f: 6,
    		l: "濡れる"
    	},
    	{
    		r: 7846,
    		f: 6,
    		l: "おいで"
    	},
    	{
    		r: 7847,
    		f: 5.99,
    		l: "藩"
    	},
    	{
    		r: 7848,
    		f: 5.99,
    		l: "リハビリ"
    	},
    	{
    		r: 7849,
    		f: 5.99,
    		l: "功"
    	},
    	{
    		r: 7850,
    		f: 5.99,
    		l: "持ち帰る"
    	},
    	{
    		r: 7851,
    		f: 5.99,
    		l: "曲げる"
    	},
    	{
    		r: 7852,
    		f: 5.99,
    		l: "いまや"
    	},
    	{
    		r: 7853,
    		f: 5.99,
    		l: "税理士"
    	},
    	{
    		r: 7854,
    		f: 5.99,
    		l: "次男"
    	},
    	{
    		r: 7855,
    		f: 5.99,
    		l: "医学部"
    	},
    	{
    		r: 7856,
    		f: 5.99,
    		l: "舛"
    	},
    	{
    		r: 7857,
    		f: 5.98,
    		l: "算数"
    	},
    	{
    		r: 7858,
    		f: 5.98,
    		l: "是"
    	},
    	{
    		r: 7859,
    		f: 5.98,
    		l: "仕上げ"
    	},
    	{
    		r: 7860,
    		f: 5.98,
    		l: "皇室"
    	},
    	{
    		r: 7861,
    		f: 5.98,
    		l: "おろす"
    	},
    	{
    		r: 7862,
    		f: 5.97,
    		l: "木造"
    	},
    	{
    		r: 7863,
    		f: 5.97,
    		l: "経路"
    	},
    	{
    		r: 7864,
    		f: 5.97,
    		l: "有り難い"
    	},
    	{
    		r: 7865,
    		f: 5.97,
    		l: "踏み込む"
    	},
    	{
    		r: 7866,
    		f: 5.97,
    		l: "風味"
    	},
    	{
    		r: 7867,
    		f: 5.97,
    		l: "液体"
    	},
    	{
    		r: 7868,
    		f: 5.97,
    		l: "短時間"
    	},
    	{
    		r: 7869,
    		f: 5.97,
    		l: "四つ"
    	},
    	{
    		r: 7870,
    		f: 5.97,
    		l: "締め切り"
    	},
    	{
    		r: 7871,
    		f: 5.97,
    		l: "野郎"
    	},
    	{
    		r: 7872,
    		f: 5.96,
    		l: "進路"
    	},
    	{
    		r: 7873,
    		f: 5.96,
    		l: "悪意"
    	},
    	{
    		r: 7874,
    		f: 5.96,
    		l: "動詞"
    	},
    	{
    		r: 7875,
    		f: 5.96,
    		l: "ロケ"
    	},
    	{
    		r: 7876,
    		f: 5.96,
    		l: "交響曲"
    	},
    	{
    		r: 7877,
    		f: 5.96,
    		l: "雷"
    	},
    	{
    		r: 7878,
    		f: 5.96,
    		l: "めくる"
    	},
    	{
    		r: 7879,
    		f: 5.96,
    		l: "安田"
    	},
    	{
    		r: 7880,
    		f: 5.96,
    		l: "はさむ"
    	},
    	{
    		r: 7881,
    		f: 5.95,
    		l: "先祖"
    	},
    	{
    		r: 7882,
    		f: 5.95,
    		l: "昼寝"
    	},
    	{
    		r: 7883,
    		f: 5.95,
    		l: "洗練"
    	},
    	{
    		r: 7884,
    		f: 5.95,
    		l: "ノーベル"
    	},
    	{
    		r: 7885,
    		f: 5.95,
    		l: "あらわれる"
    	},
    	{
    		r: 7886,
    		f: 5.95,
    		l: "折れる"
    	},
    	{
    		r: 7887,
    		f: 5.95,
    		l: "結晶"
    	},
    	{
    		r: 7888,
    		f: 5.95,
    		l: "サンフランシスコ"
    	},
    	{
    		r: 7889,
    		f: 5.95,
    		l: "麻"
    	},
    	{
    		r: 7890,
    		f: 5.95,
    		l: "格闘"
    	},
    	{
    		r: 7891,
    		f: 5.95,
    		l: "加害"
    	},
    	{
    		r: 7892,
    		f: 5.95,
    		l: "頬"
    	},
    	{
    		r: 7893,
    		f: 5.95,
    		l: "法科"
    	},
    	{
    		r: 7894,
    		f: 5.95,
    		l: "配偶"
    	},
    	{
    		r: 7895,
    		f: 5.95,
    		l: "ふり"
    	},
    	{
    		r: 7896,
    		f: 5.95,
    		l: "メス"
    	},
    	{
    		r: 7897,
    		f: 5.95,
    		l: "腓"
    	},
    	{
    		r: 7898,
    		f: 5.95,
    		l: "乙"
    	},
    	{
    		r: 7899,
    		f: 5.95,
    		l: "欠如"
    	},
    	{
    		r: 7900,
    		f: 5.94,
    		l: "フランク"
    	},
    	{
    		r: 7901,
    		f: 5.94,
    		l: "捜索"
    	},
    	{
    		r: 7902,
    		f: 5.94,
    		l: "見なす"
    	},
    	{
    		r: 7903,
    		f: 5.94,
    		l: "間もなく"
    	},
    	{
    		r: 7904,
    		f: 5.94,
    		l: "とらわれる"
    	},
    	{
    		r: 7905,
    		f: 5.94,
    		l: "満員"
    	},
    	{
    		r: 7906,
    		f: 5.94,
    		l: "嫌悪"
    	},
    	{
    		r: 7907,
    		f: 5.94,
    		l: "代理人"
    	},
    	{
    		r: 7908,
    		f: 5.94,
    		l: "ハーブ"
    	},
    	{
    		r: 7909,
    		f: 5.93,
    		l: "肝"
    	},
    	{
    		r: 7910,
    		f: 5.93,
    		l: "有名人"
    	},
    	{
    		r: 7911,
    		f: 5.93,
    		l: "判事"
    	},
    	{
    		r: 7912,
    		f: 5.93,
    		l: "クン"
    	},
    	{
    		r: 7913,
    		f: 5.93,
    		l: "ネギ"
    	},
    	{
    		r: 7914,
    		f: 5.93,
    		l: "文化財"
    	},
    	{
    		r: 7915,
    		f: 5.92,
    		l: "ラベル"
    	},
    	{
    		r: 7916,
    		f: 5.92,
    		l: "東芝"
    	},
    	{
    		r: 7917,
    		f: 5.92,
    		l: "先般"
    	},
    	{
    		r: 7918,
    		f: 5.92,
    		l: "四季"
    	},
    	{
    		r: 7919,
    		f: 5.92,
    		l: "広める"
    	},
    	{
    		r: 7920,
    		f: 5.92,
    		l: "所要"
    	},
    	{
    		r: 7921,
    		f: 5.92,
    		l: "転がる"
    	},
    	{
    		r: 7922,
    		f: 5.92,
    		l: "マザー"
    	},
    	{
    		r: 7923,
    		f: 5.92,
    		l: "猛"
    	},
    	{
    		r: 7924,
    		f: 5.91,
    		l: "目当て"
    	},
    	{
    		r: 7925,
    		f: 5.91,
    		l: "リンゴ"
    	},
    	{
    		r: 7926,
    		f: 5.91,
    		l: "川口"
    	},
    	{
    		r: 7927,
    		f: 5.91,
    		l: "子孫"
    	},
    	{
    		r: 7928,
    		f: 5.91,
    		l: "加減"
    	},
    	{
    		r: 7929,
    		f: 5.91,
    		l: "ストーン"
    	},
    	{
    		r: 7930,
    		f: 5.91,
    		l: "お越し"
    	},
    	{
    		r: 7931,
    		f: 5.91,
    		l: "おなじみ"
    	},
    	{
    		r: 7932,
    		f: 5.91,
    		l: "オーラ"
    	},
    	{
    		r: 7933,
    		f: 5.9,
    		l: "下回る"
    	},
    	{
    		r: 7934,
    		f: 5.9,
    		l: "異様"
    	},
    	{
    		r: 7935,
    		f: 5.9,
    		l: "めちゃくちゃ"
    	},
    	{
    		r: 7936,
    		f: 5.9,
    		l: "さておく"
    	},
    	{
    		r: 7937,
    		f: 5.9,
    		l: "弊害"
    	},
    	{
    		r: 7938,
    		f: 5.9,
    		l: "ぼんやり"
    	},
    	{
    		r: 7939,
    		f: 5.9,
    		l: "酢"
    	},
    	{
    		r: 7940,
    		f: 5.9,
    		l: "はた"
    	},
    	{
    		r: 7941,
    		f: 5.9,
    		l: "所詮"
    	},
    	{
    		r: 7942,
    		f: 5.9,
    		l: "瓶"
    	},
    	{
    		r: 7943,
    		f: 5.9,
    		l: "陰謀"
    	},
    	{
    		r: 7944,
    		f: 5.9,
    		l: "ピックアップ"
    	},
    	{
    		r: 7945,
    		f: 5.89,
    		l: "ニュアンス"
    	},
    	{
    		r: 7946,
    		f: 5.89,
    		l: "増殖"
    	},
    	{
    		r: 7947,
    		f: 5.89,
    		l: "十一月"
    	},
    	{
    		r: 7948,
    		f: 5.89,
    		l: "整合"
    	},
    	{
    		r: 7949,
    		f: 5.89,
    		l: "介す"
    	},
    	{
    		r: 7950,
    		f: 5.89,
    		l: "通学"
    	},
    	{
    		r: 7951,
    		f: 5.89,
    		l: "残酷"
    	},
    	{
    		r: 7952,
    		f: 5.89,
    		l: "啓発"
    	},
    	{
    		r: 7953,
    		f: 5.88,
    		l: "偽"
    	},
    	{
    		r: 7954,
    		f: 5.88,
    		l: "カッ"
    	},
    	{
    		r: 7955,
    		f: 5.88,
    		l: "まり"
    	},
    	{
    		r: 7956,
    		f: 5.88,
    		l: "あたりまえ"
    	},
    	{
    		r: 7957,
    		f: 5.88,
    		l: "カロリー"
    	},
    	{
    		r: 7958,
    		f: 5.88,
    		l: "絶滅"
    	},
    	{
    		r: 7959,
    		f: 5.88,
    		l: "寸前"
    	},
    	{
    		r: 7960,
    		f: 5.88,
    		l: "曲線"
    	},
    	{
    		r: 7961,
    		f: 5.88,
    		l: "郵送"
    	},
    	{
    		r: 7962,
    		f: 5.88,
    		l: "ポーズ"
    	},
    	{
    		r: 7963,
    		f: 5.88,
    		l: "満点"
    	},
    	{
    		r: 7964,
    		f: 5.88,
    		l: "指輪"
    	},
    	{
    		r: 7965,
    		f: 5.87,
    		l: "親族"
    	},
    	{
    		r: 7966,
    		f: 5.87,
    		l: "口頭"
    	},
    	{
    		r: 7967,
    		f: 5.87,
    		l: "マイナー"
    	},
    	{
    		r: 7968,
    		f: 5.87,
    		l: "初代"
    	},
    	{
    		r: 7969,
    		f: 5.87,
    		l: "秘める"
    	},
    	{
    		r: 7970,
    		f: 5.87,
    		l: "だんな"
    	},
    	{
    		r: 7971,
    		f: 5.87,
    		l: "チキン"
    	},
    	{
    		r: 7972,
    		f: 5.87,
    		l: "かし"
    	},
    	{
    		r: 7973,
    		f: 5.86,
    		l: "公判"
    	},
    	{
    		r: 7974,
    		f: 5.86,
    		l: "右翼"
    	},
    	{
    		r: 7975,
    		f: 5.86,
    		l: "対比"
    	},
    	{
    		r: 7976,
    		f: 5.86,
    		l: "ラボ"
    	},
    	{
    		r: 7977,
    		f: 5.86,
    		l: "農産物"
    	},
    	{
    		r: 7978,
    		f: 5.86,
    		l: "できあがる"
    	},
    	{
    		r: 7979,
    		f: 5.86,
    		l: "愛用"
    	},
    	{
    		r: 7980,
    		f: 5.86,
    		l: "水面"
    	},
    	{
    		r: 7981,
    		f: 5.86,
    		l: "宛"
    	},
    	{
    		r: 7982,
    		f: 5.86,
    		l: "ホー"
    	},
    	{
    		r: 7983,
    		f: 5.86,
    		l: "賭ける"
    	},
    	{
    		r: 7984,
    		f: 5.85,
    		l: "ルイス"
    	},
    	{
    		r: 7985,
    		f: 5.85,
    		l: "圧迫"
    	},
    	{
    		r: 7986,
    		f: 5.85,
    		l: "虹"
    	},
    	{
    		r: 7987,
    		f: 5.85,
    		l: "つぐ"
    	},
    	{
    		r: 7988,
    		f: 5.85,
    		l: "ふく"
    	},
    	{
    		r: 7989,
    		f: 5.85,
    		l: "フィルター"
    	},
    	{
    		r: 7990,
    		f: 5.85,
    		l: "稼ぎ"
    	},
    	{
    		r: 7991,
    		f: 5.84,
    		l: "療養"
    	},
    	{
    		r: 7992,
    		f: 5.84,
    		l: "眞"
    	},
    	{
    		r: 7993,
    		f: 5.84,
    		l: "発症"
    	},
    	{
    		r: 7994,
    		f: 5.84,
    		l: "バンコク"
    	},
    	{
    		r: 7995,
    		f: 5.84,
    		l: "風俗"
    	},
    	{
    		r: 7996,
    		f: 5.84,
    		l: "アクセサリー"
    	},
    	{
    		r: 7997,
    		f: 5.84,
    		l: "有意義"
    	},
    	{
    		r: 7998,
    		f: 5.84,
    		l: "稼働"
    	},
    	{
    		r: 7999,
    		f: 5.84,
    		l: "飼育"
    	},
    	{
    		r: 8000,
    		f: 5.83,
    		l: "Ｔシャツ"
    	},
    	{
    		r: 8001,
    		f: 5.83,
    		l: "卸売"
    	},
    	{
    		r: 8002,
    		f: 5.83,
    		l: "一律"
    	},
    	{
    		r: 8003,
    		f: 5.83,
    		l: "カズ"
    	},
    	{
    		r: 8004,
    		f: 5.83,
    		l: "葛藤"
    	},
    	{
    		r: 8005,
    		f: 5.82,
    		l: "引きずる"
    	},
    	{
    		r: 8006,
    		f: 5.82,
    		l: "石田"
    	},
    	{
    		r: 8007,
    		f: 5.82,
    		l: "集落"
    	},
    	{
    		r: 8008,
    		f: 5.82,
    		l: "ニッポン放送"
    	},
    	{
    		r: 8009,
    		f: 5.81,
    		l: "探索"
    	},
    	{
    		r: 8010,
    		f: 5.81,
    		l: "極東"
    	},
    	{
    		r: 8011,
    		f: 5.81,
    		l: "活力"
    	},
    	{
    		r: 8012,
    		f: 5.81,
    		l: "舞"
    	},
    	{
    		r: 8013,
    		f: 5.81,
    		l: "実例"
    	},
    	{
    		r: 8014,
    		f: 5.81,
    		l: "じつは"
    	},
    	{
    		r: 8015,
    		f: 5.8,
    		l: "羨ましい"
    	},
    	{
    		r: 8016,
    		f: 5.8,
    		l: "わたくし"
    	},
    	{
    		r: 8017,
    		f: 5.8,
    		l: "戦車"
    	},
    	{
    		r: 8018,
    		f: 5.8,
    		l: "捕まえる"
    	},
    	{
    		r: 8019,
    		f: 5.8,
    		l: "くま"
    	},
    	{
    		r: 8020,
    		f: 5.8,
    		l: "長谷川"
    	},
    	{
    		r: 8021,
    		f: 5.8,
    		l: "自称"
    	},
    	{
    		r: 8022,
    		f: 5.8,
    		l: "口調"
    	},
    	{
    		r: 8023,
    		f: 5.8,
    		l: "フリ"
    	},
    	{
    		r: 8024,
    		f: 5.8,
    		l: "端的"
    	},
    	{
    		r: 8025,
    		f: 5.8,
    		l: "膜"
    	},
    	{
    		r: 8026,
    		f: 5.8,
    		l: "カリキュラム"
    	},
    	{
    		r: 8027,
    		f: 5.8,
    		l: "もとづく"
    	},
    	{
    		r: 8028,
    		f: 5.8,
    		l: "修士"
    	},
    	{
    		r: 8029,
    		f: 5.8,
    		l: "宝石"
    	},
    	{
    		r: 8030,
    		f: 5.8,
    		l: "警察庁"
    	},
    	{
    		r: 8031,
    		f: 5.79,
    		l: "スミス"
    	},
    	{
    		r: 8032,
    		f: 5.79,
    		l: "根源"
    	},
    	{
    		r: 8033,
    		f: 5.79,
    		l: "不倫"
    	},
    	{
    		r: 8034,
    		f: 5.79,
    		l: "低迷"
    	},
    	{
    		r: 8035,
    		f: 5.79,
    		l: "停滞"
    	},
    	{
    		r: 8036,
    		f: 5.79,
    		l: "アイデンティティ"
    	},
    	{
    		r: 8037,
    		f: 5.79,
    		l: "正に"
    	},
    	{
    		r: 8038,
    		f: 5.79,
    		l: "落語"
    	},
    	{
    		r: 8039,
    		f: 5.79,
    		l: "苦悩"
    	},
    	{
    		r: 8040,
    		f: 5.78,
    		l: "益"
    	},
    	{
    		r: 8041,
    		f: 5.78,
    		l: "稀"
    	},
    	{
    		r: 8042,
    		f: 5.78,
    		l: "フライト"
    	},
    	{
    		r: 8043,
    		f: 5.78,
    		l: "メン"
    	},
    	{
    		r: 8044,
    		f: 5.78,
    		l: "コイン"
    	},
    	{
    		r: 8045,
    		f: 5.78,
    		l: "ホン"
    	},
    	{
    		r: 8046,
    		f: 5.78,
    		l: "ノイズ"
    	},
    	{
    		r: 8047,
    		f: 5.78,
    		l: "プロモーション"
    	},
    	{
    		r: 8048,
    		f: 5.78,
    		l: "教団"
    	},
    	{
    		r: 8049,
    		f: 5.78,
    		l: "正社員"
    	},
    	{
    		r: 8050,
    		f: 5.78,
    		l: "鮮明"
    	},
    	{
    		r: 8051,
    		f: 5.78,
    		l: "すぐれる"
    	},
    	{
    		r: 8052,
    		f: 5.78,
    		l: "御存じ"
    	},
    	{
    		r: 8053,
    		f: 5.78,
    		l: "悪質"
    	},
    	{
    		r: 8054,
    		f: 5.78,
    		l: "ジャーナリズム"
    	},
    	{
    		r: 8055,
    		f: 5.77,
    		l: "イマイチ"
    	},
    	{
    		r: 8056,
    		f: 5.77,
    		l: "圓"
    	},
    	{
    		r: 8057,
    		f: 5.77,
    		l: "ジーンズ"
    	},
    	{
    		r: 8058,
    		f: 5.77,
    		l: "プロレス"
    	},
    	{
    		r: 8059,
    		f: 5.77,
    		l: "アナウンス"
    	},
    	{
    		r: 8060,
    		f: 5.77,
    		l: "市川"
    	},
    	{
    		r: 8061,
    		f: 5.77,
    		l: "ほめる"
    	},
    	{
    		r: 8062,
    		f: 5.77,
    		l: "ストア"
    	},
    	{
    		r: 8063,
    		f: 5.77,
    		l: "ゲル"
    	},
    	{
    		r: 8064,
    		f: 5.77,
    		l: "５つ"
    	},
    	{
    		r: 8065,
    		f: 5.77,
    		l: "はなれる"
    	},
    	{
    		r: 8066,
    		f: 5.76,
    		l: "ノルウェー"
    	},
    	{
    		r: 8067,
    		f: 5.76,
    		l: "ヤン"
    	},
    	{
    		r: 8068,
    		f: 5.76,
    		l: "同感"
    	},
    	{
    		r: 8069,
    		f: 5.76,
    		l: "エリ"
    	},
    	{
    		r: 8070,
    		f: 5.76,
    		l: "勧誘"
    	},
    	{
    		r: 8071,
    		f: 5.76,
    		l: "なのに"
    	},
    	{
    		r: 8072,
    		f: 5.76,
    		l: "終戦"
    	},
    	{
    		r: 8073,
    		f: 5.76,
    		l: "コンビ"
    	},
    	{
    		r: 8074,
    		f: 5.76,
    		l: "っぷり"
    	},
    	{
    		r: 8075,
    		f: 5.75,
    		l: "対す"
    	},
    	{
    		r: 8076,
    		f: 5.75,
    		l: "ネオ"
    	},
    	{
    		r: 8077,
    		f: 5.75,
    		l: "おやじ"
    	},
    	{
    		r: 8078,
    		f: 5.75,
    		l: "劣化"
    	},
    	{
    		r: 8079,
    		f: 5.74,
    		l: "滋賀"
    	},
    	{
    		r: 8080,
    		f: 5.74,
    		l: "源泉"
    	},
    	{
    		r: 8081,
    		f: 5.74,
    		l: "負"
    	},
    	{
    		r: 8082,
    		f: 5.74,
    		l: "真っ赤"
    	},
    	{
    		r: 8083,
    		f: 5.74,
    		l: "たて"
    	},
    	{
    		r: 8084,
    		f: 5.74,
    		l: "勤労"
    	},
    	{
    		r: 8085,
    		f: 5.74,
    		l: "義務教育"
    	},
    	{
    		r: 8086,
    		f: 5.73,
    		l: "にまつわる"
    	},
    	{
    		r: 8087,
    		f: 5.73,
    		l: "炭"
    	},
    	{
    		r: 8088,
    		f: 5.73,
    		l: "名義"
    	},
    	{
    		r: 8089,
    		f: 5.73,
    		l: "敢えて"
    	},
    	{
    		r: 8090,
    		f: 5.73,
    		l: "取り巻く"
    	},
    	{
    		r: 8091,
    		f: 5.72,
    		l: "人質"
    	},
    	{
    		r: 8092,
    		f: 5.72,
    		l: "はっ"
    	},
    	{
    		r: 8093,
    		f: 5.72,
    		l: "まもなく"
    	},
    	{
    		r: 8094,
    		f: 5.72,
    		l: "巣"
    	},
    	{
    		r: 8095,
    		f: 5.72,
    		l: "度合い"
    	},
    	{
    		r: 8096,
    		f: 5.72,
    		l: "増強"
    	},
    	{
    		r: 8097,
    		f: 5.72,
    		l: "若"
    	},
    	{
    		r: 8098,
    		f: 5.72,
    		l: "祝福"
    	},
    	{
    		r: 8099,
    		f: 5.71,
    		l: "アマ"
    	},
    	{
    		r: 8100,
    		f: 5.71,
    		l: "斉藤"
    	},
    	{
    		r: 8101,
    		f: 5.71,
    		l: "莫大"
    	},
    	{
    		r: 8102,
    		f: 5.71,
    		l: "梅田"
    	},
    	{
    		r: 8103,
    		f: 5.71,
    		l: "音色"
    	},
    	{
    		r: 8104,
    		f: 5.71,
    		l: "戦時"
    	},
    	{
    		r: 8105,
    		f: 5.71,
    		l: "ちっとも"
    	},
    	{
    		r: 8106,
    		f: 5.71,
    		l: "創刊"
    	},
    	{
    		r: 8107,
    		f: 5.71,
    		l: "ちん"
    	},
    	{
    		r: 8108,
    		f: 5.71,
    		l: "杉"
    	},
    	{
    		r: 8109,
    		f: 5.71,
    		l: "チェコ"
    	},
    	{
    		r: 8110,
    		f: 5.71,
    		l: "明かす"
    	},
    	{
    		r: 8111,
    		f: 5.71,
    		l: "危うい"
    	},
    	{
    		r: 8112,
    		f: 5.71,
    		l: "後藤"
    	},
    	{
    		r: 8113,
    		f: 5.71,
    		l: "ドリンク"
    	},
    	{
    		r: 8114,
    		f: 5.71,
    		l: "売春"
    	},
    	{
    		r: 8115,
    		f: 5.71,
    		l: "書士"
    	},
    	{
    		r: 8116,
    		f: 5.71,
    		l: "ディズニー"
    	},
    	{
    		r: 8117,
    		f: 5.71,
    		l: "通り過ぎる"
    	},
    	{
    		r: 8118,
    		f: 5.71,
    		l: "太鼓"
    	},
    	{
    		r: 8119,
    		f: 5.7,
    		l: "ヴァイオリン"
    	},
    	{
    		r: 8120,
    		f: 5.7,
    		l: "旅館"
    	},
    	{
    		r: 8121,
    		f: 5.7,
    		l: "岡"
    	},
    	{
    		r: 8122,
    		f: 5.7,
    		l: "併せる"
    	},
    	{
    		r: 8123,
    		f: 5.69,
    		l: "パブリック"
    	},
    	{
    		r: 8124,
    		f: 5.69,
    		l: "革"
    	},
    	{
    		r: 8125,
    		f: 5.69,
    		l: "ブリッジ"
    	},
    	{
    		r: 8126,
    		f: 5.69,
    		l: "境"
    	},
    	{
    		r: 8127,
    		f: 5.69,
    		l: "討議"
    	},
    	{
    		r: 8128,
    		f: 5.69,
    		l: "湿度"
    	},
    	{
    		r: 8129,
    		f: 5.69,
    		l: "ゆき"
    	},
    	{
    		r: 8130,
    		f: 5.69,
    		l: "情緒"
    	},
    	{
    		r: 8131,
    		f: 5.69,
    		l: "カリスマ"
    	},
    	{
    		r: 8132,
    		f: 5.69,
    		l: "貯める"
    	},
    	{
    		r: 8133,
    		f: 5.69,
    		l: "熱意"
    	},
    	{
    		r: 8134,
    		f: 5.69,
    		l: "必見"
    	},
    	{
    		r: 8135,
    		f: 5.69,
    		l: "飲料"
    	},
    	{
    		r: 8136,
    		f: 5.69,
    		l: "屋敷"
    	},
    	{
    		r: 8137,
    		f: 5.68,
    		l: "飼い主"
    	},
    	{
    		r: 8138,
    		f: 5.68,
    		l: "ダンナ"
    	},
    	{
    		r: 8139,
    		f: 5.68,
    		l: "込み"
    	},
    	{
    		r: 8140,
    		f: 5.68,
    		l: "明け"
    	},
    	{
    		r: 8141,
    		f: 5.68,
    		l: "振り回す"
    	},
    	{
    		r: 8142,
    		f: 5.68,
    		l: "弱点"
    	},
    	{
    		r: 8143,
    		f: 5.68,
    		l: "問い合わせる"
    	},
    	{
    		r: 8144,
    		f: 5.68,
    		l: "ドラッグ"
    	},
    	{
    		r: 8145,
    		f: 5.68,
    		l: "さき"
    	},
    	{
    		r: 8146,
    		f: 5.68,
    		l: "敗れる"
    	},
    	{
    		r: 8147,
    		f: 5.68,
    		l: "共演"
    	},
    	{
    		r: 8148,
    		f: 5.67,
    		l: "正日"
    	},
    	{
    		r: 8149,
    		f: 5.67,
    		l: "一族"
    	},
    	{
    		r: 8150,
    		f: 5.67,
    		l: "替え"
    	},
    	{
    		r: 8151,
    		f: 5.67,
    		l: "漢"
    	},
    	{
    		r: 8152,
    		f: 5.67,
    		l: "手入れ"
    	},
    	{
    		r: 8153,
    		f: 5.67,
    		l: "異性"
    	},
    	{
    		r: 8154,
    		f: 5.67,
    		l: "嫉妬"
    	},
    	{
    		r: 8155,
    		f: 5.67,
    		l: "機材"
    	},
    	{
    		r: 8156,
    		f: 5.67,
    		l: "なら"
    	},
    	{
    		r: 8157,
    		f: 5.67,
    		l: "西側"
    	},
    	{
    		r: 8158,
    		f: 5.67,
    		l: "平行"
    	},
    	{
    		r: 8159,
    		f: 5.67,
    		l: "だからといって"
    	},
    	{
    		r: 8160,
    		f: 5.67,
    		l: "街道"
    	},
    	{
    		r: 8161,
    		f: 5.67,
    		l: "摂る"
    	},
    	{
    		r: 8162,
    		f: 5.67,
    		l: "大震災"
    	},
    	{
    		r: 8163,
    		f: 5.67,
    		l: "幹"
    	},
    	{
    		r: 8164,
    		f: 5.67,
    		l: "万全"
    	},
    	{
    		r: 8165,
    		f: 5.67,
    		l: "チャンピオン"
    	},
    	{
    		r: 8166,
    		f: 5.67,
    		l: "毎朝"
    	},
    	{
    		r: 8167,
    		f: 5.66,
    		l: "かす"
    	},
    	{
    		r: 8168,
    		f: 5.66,
    		l: "頭脳"
    	},
    	{
    		r: 8169,
    		f: 5.66,
    		l: "対等"
    	},
    	{
    		r: 8170,
    		f: 5.66,
    		l: "根性"
    	},
    	{
    		r: 8171,
    		f: 5.66,
    		l: "ハリー"
    	},
    	{
    		r: 8172,
    		f: 5.66,
    		l: "エース"
    	},
    	{
    		r: 8173,
    		f: 5.66,
    		l: "おこる"
    	},
    	{
    		r: 8174,
    		f: 5.66,
    		l: "一目"
    	},
    	{
    		r: 8175,
    		f: 5.65,
    		l: "動ける"
    	},
    	{
    		r: 8176,
    		f: 5.65,
    		l: "推理"
    	},
    	{
    		r: 8177,
    		f: 5.65,
    		l: "配給"
    	},
    	{
    		r: 8178,
    		f: 5.65,
    		l: "ユーモア"
    	},
    	{
    		r: 8179,
    		f: 5.65,
    		l: "調停"
    	},
    	{
    		r: 8180,
    		f: 5.65,
    		l: "イデオロギー"
    	},
    	{
    		r: 8181,
    		f: 5.65,
    		l: "早起き"
    	},
    	{
    		r: 8182,
    		f: 5.65,
    		l: "親指"
    	},
    	{
    		r: 8183,
    		f: 5.65,
    		l: "活字"
    	},
    	{
    		r: 8184,
    		f: 5.65,
    		l: "時折"
    	},
    	{
    		r: 8185,
    		f: 5.65,
    		l: "なおかつ"
    	},
    	{
    		r: 8186,
    		f: 5.65,
    		l: "今井"
    	},
    	{
    		r: 8187,
    		f: 5.65,
    		l: "割り当てる"
    	},
    	{
    		r: 8188,
    		f: 5.64,
    		l: "県警"
    	},
    	{
    		r: 8189,
    		f: 5.64,
    		l: "専念"
    	},
    	{
    		r: 8190,
    		f: 5.64,
    		l: "きみ"
    	},
    	{
    		r: 8191,
    		f: 5.64,
    		l: "空き"
    	},
    	{
    		r: 8192,
    		f: 5.64,
    		l: "河川"
    	},
    	{
    		r: 8193,
    		f: 5.64,
    		l: "パンチ"
    	},
    	{
    		r: 8194,
    		f: 5.64,
    		l: "慰安"
    	},
    	{
    		r: 8195,
    		f: 5.64,
    		l: "通達"
    	},
    	{
    		r: 8196,
    		f: 5.63,
    		l: "売り"
    	},
    	{
    		r: 8197,
    		f: 5.63,
    		l: "捕まる"
    	},
    	{
    		r: 8198,
    		f: 5.63,
    		l: "所持"
    	},
    	{
    		r: 8199,
    		f: 5.63,
    		l: "敗訴"
    	},
    	{
    		r: 8200,
    		f: 5.63,
    		l: "ヒル"
    	},
    	{
    		r: 8201,
    		f: 5.63,
    		l: "すげる"
    	},
    	{
    		r: 8202,
    		f: 5.63,
    		l: "試写"
    	},
    	{
    		r: 8203,
    		f: 5.63,
    		l: "並行"
    	},
    	{
    		r: 8204,
    		f: 5.63,
    		l: "とたん"
    	},
    	{
    		r: 8205,
    		f: 5.63,
    		l: "先制"
    	},
    	{
    		r: 8206,
    		f: 5.63,
    		l: "可決"
    	},
    	{
    		r: 8207,
    		f: 5.63,
    		l: "差し出す"
    	},
    	{
    		r: 8208,
    		f: 5.63,
    		l: "北米"
    	},
    	{
    		r: 8209,
    		f: 5.63,
    		l: "ユニ"
    	},
    	{
    		r: 8210,
    		f: 5.62,
    		l: "一口"
    	},
    	{
    		r: 8211,
    		f: 5.62,
    		l: "エンディング"
    	},
    	{
    		r: 8212,
    		f: 5.62,
    		l: "長所"
    	},
    	{
    		r: 8213,
    		f: 5.62,
    		l: "取扱い"
    	},
    	{
    		r: 8214,
    		f: 5.62,
    		l: "全集"
    	},
    	{
    		r: 8215,
    		f: 5.62,
    		l: "母さん"
    	},
    	{
    		r: 8216,
    		f: 5.62,
    		l: "出番"
    	},
    	{
    		r: 8217,
    		f: 5.62,
    		l: "負債"
    	},
    	{
    		r: 8218,
    		f: 5.62,
    		l: "楽譜"
    	},
    	{
    		r: 8219,
    		f: 5.62,
    		l: "クリップ"
    	},
    	{
    		r: 8220,
    		f: 5.61,
    		l: "貨物"
    	},
    	{
    		r: 8221,
    		f: 5.61,
    		l: "紳士"
    	},
    	{
    		r: 8222,
    		f: 5.61,
    		l: "いやぁ"
    	},
    	{
    		r: 8223,
    		f: 5.61,
    		l: "それなのに"
    	},
    	{
    		r: 8224,
    		f: 5.61,
    		l: "久"
    	},
    	{
    		r: 8225,
    		f: 5.61,
    		l: "もっぱら"
    	},
    	{
    		r: 8226,
    		f: 5.61,
    		l: "風土"
    	},
    	{
    		r: 8227,
    		f: 5.61,
    		l: "庭園"
    	},
    	{
    		r: 8228,
    		f: 5.61,
    		l: "バラバラ"
    	},
    	{
    		r: 8229,
    		f: 5.6,
    		l: "フィードバック"
    	},
    	{
    		r: 8230,
    		f: 5.6,
    		l: "すい"
    	},
    	{
    		r: 8231,
    		f: 5.6,
    		l: "安藤"
    	},
    	{
    		r: 8232,
    		f: 5.6,
    		l: "民法"
    	},
    	{
    		r: 8233,
    		f: 5.6,
    		l: "弓"
    	},
    	{
    		r: 8234,
    		f: 5.6,
    		l: "遂に"
    	},
    	{
    		r: 8235,
    		f: 5.6,
    		l: "いかん"
    	},
    	{
    		r: 8236,
    		f: 5.6,
    		l: "フー"
    	},
    	{
    		r: 8237,
    		f: 5.6,
    		l: "風潮"
    	},
    	{
    		r: 8238,
    		f: 5.59,
    		l: "ブラウン"
    	},
    	{
    		r: 8239,
    		f: 5.59,
    		l: "変形"
    	},
    	{
    		r: 8240,
    		f: 5.59,
    		l: "しょっちゅう"
    	},
    	{
    		r: 8241,
    		f: 5.59,
    		l: "富士山"
    	},
    	{
    		r: 8242,
    		f: 5.59,
    		l: "小学"
    	},
    	{
    		r: 8243,
    		f: 5.59,
    		l: "思惑"
    	},
    	{
    		r: 8244,
    		f: 5.59,
    		l: "日本海"
    	},
    	{
    		r: 8245,
    		f: 5.59,
    		l: "産経新聞"
    	},
    	{
    		r: 8246,
    		f: 5.58,
    		l: "参"
    	},
    	{
    		r: 8247,
    		f: 5.58,
    		l: "花見"
    	},
    	{
    		r: 8248,
    		f: 5.58,
    		l: "大賞"
    	},
    	{
    		r: 8249,
    		f: 5.58,
    		l: "麻痺"
    	},
    	{
    		r: 8250,
    		f: 5.58,
    		l: "教官"
    	},
    	{
    		r: 8251,
    		f: 5.58,
    		l: "舞う"
    	},
    	{
    		r: 8252,
    		f: 5.58,
    		l: "暦"
    	},
    	{
    		r: 8253,
    		f: 5.58,
    		l: "溶ける"
    	},
    	{
    		r: 8254,
    		f: 5.58,
    		l: "まつり"
    	},
    	{
    		r: 8255,
    		f: 5.58,
    		l: "いっそう"
    	},
    	{
    		r: 8256,
    		f: 5.58,
    		l: "効力"
    	},
    	{
    		r: 8257,
    		f: 5.57,
    		l: "学院"
    	},
    	{
    		r: 8258,
    		f: 5.57,
    		l: "スリー"
    	},
    	{
    		r: 8259,
    		f: 5.57,
    		l: "グラフィック"
    	},
    	{
    		r: 8260,
    		f: 5.57,
    		l: "藤井"
    	},
    	{
    		r: 8261,
    		f: 5.57,
    		l: "錯覚"
    	},
    	{
    		r: 8262,
    		f: 5.57,
    		l: "当分"
    	},
    	{
    		r: 8263,
    		f: 5.56,
    		l: "潜水艦"
    	},
    	{
    		r: 8264,
    		f: 5.56,
    		l: "おおむね"
    	},
    	{
    		r: 8265,
    		f: 5.56,
    		l: "愚痴"
    	},
    	{
    		r: 8266,
    		f: 5.56,
    		l: "煽る"
    	},
    	{
    		r: 8267,
    		f: 5.56,
    		l: "清掃"
    	},
    	{
    		r: 8268,
    		f: 5.56,
    		l: "字幕"
    	},
    	{
    		r: 8269,
    		f: 5.56,
    		l: "乗車"
    	},
    	{
    		r: 8270,
    		f: 5.56,
    		l: "次郎"
    	},
    	{
    		r: 8271,
    		f: 5.56,
    		l: "募る"
    	},
    	{
    		r: 8272,
    		f: 5.56,
    		l: "如何に"
    	},
    	{
    		r: 8273,
    		f: 5.55,
    		l: "混合"
    	},
    	{
    		r: 8274,
    		f: 5.55,
    		l: "愛媛"
    	},
    	{
    		r: 8275,
    		f: 5.55,
    		l: "何者"
    	},
    	{
    		r: 8276,
    		f: 5.55,
    		l: "機内"
    	},
    	{
    		r: 8277,
    		f: 5.55,
    		l: "試行錯誤"
    	},
    	{
    		r: 8278,
    		f: 5.55,
    		l: "刑法"
    	},
    	{
    		r: 8279,
    		f: 5.55,
    		l: "小物"
    	},
    	{
    		r: 8280,
    		f: 5.55,
    		l: "ばん"
    	},
    	{
    		r: 8281,
    		f: 5.54,
    		l: "楽観"
    	},
    	{
    		r: 8282,
    		f: 5.54,
    		l: "ヒルズ"
    	},
    	{
    		r: 8283,
    		f: 5.54,
    		l: "死後"
    	},
    	{
    		r: 8284,
    		f: 5.54,
    		l: "人体"
    	},
    	{
    		r: 8285,
    		f: 5.54,
    		l: "試算"
    	},
    	{
    		r: 8286,
    		f: 5.54,
    		l: "衆院"
    	},
    	{
    		r: 8287,
    		f: 5.54,
    		l: "満喫"
    	},
    	{
    		r: 8288,
    		f: 5.54,
    		l: "ガキ"
    	},
    	{
    		r: 8289,
    		f: 5.54,
    		l: "秘訣"
    	},
    	{
    		r: 8290,
    		f: 5.54,
    		l: "パキスタン"
    	},
    	{
    		r: 8291,
    		f: 5.54,
    		l: "酸化"
    	},
    	{
    		r: 8292,
    		f: 5.53,
    		l: "お寺"
    	},
    	{
    		r: 8293,
    		f: 5.53,
    		l: "庵"
    	},
    	{
    		r: 8294,
    		f: 5.53,
    		l: "救い"
    	},
    	{
    		r: 8295,
    		f: 5.53,
    		l: "苗"
    	},
    	{
    		r: 8296,
    		f: 5.53,
    		l: "合わせ"
    	},
    	{
    		r: 8297,
    		f: 5.53,
    		l: "前年度"
    	},
    	{
    		r: 8298,
    		f: 5.53,
    		l: "溝"
    	},
    	{
    		r: 8299,
    		f: 5.53,
    		l: "ギャンブル"
    	},
    	{
    		r: 8300,
    		f: 5.53,
    		l: "金曜"
    	},
    	{
    		r: 8301,
    		f: 5.52,
    		l: "小倉"
    	},
    	{
    		r: 8302,
    		f: 5.52,
    		l: "高裁"
    	},
    	{
    		r: 8303,
    		f: 5.52,
    		l: "屋上"
    	},
    	{
    		r: 8304,
    		f: 5.52,
    		l: "お断り"
    	},
    	{
    		r: 8305,
    		f: 5.52,
    		l: "実物"
    	},
    	{
    		r: 8306,
    		f: 5.52,
    		l: "集積"
    	},
    	{
    		r: 8307,
    		f: 5.52,
    		l: "態勢"
    	},
    	{
    		r: 8308,
    		f: 5.52,
    		l: "超過"
    	},
    	{
    		r: 8309,
    		f: 5.52,
    		l: "タブ"
    	},
    	{
    		r: 8310,
    		f: 5.52,
    		l: "おくれる"
    	},
    	{
    		r: 8311,
    		f: 5.52,
    		l: "久保"
    	},
    	{
    		r: 8312,
    		f: 5.52,
    		l: "頂点"
    	},
    	{
    		r: 8313,
    		f: 5.52,
    		l: "白書"
    	},
    	{
    		r: 8314,
    		f: 5.52,
    		l: "前面"
    	},
    	{
    		r: 8315,
    		f: 5.52,
    		l: "驚異"
    	},
    	{
    		r: 8316,
    		f: 5.51,
    		l: "問いかける"
    	},
    	{
    		r: 8317,
    		f: 5.51,
    		l: "絶えず"
    	},
    	{
    		r: 8318,
    		f: 5.51,
    		l: "政令"
    	},
    	{
    		r: 8319,
    		f: 5.51,
    		l: "シェフ"
    	},
    	{
    		r: 8320,
    		f: 5.51,
    		l: "外科"
    	},
    	{
    		r: 8321,
    		f: 5.51,
    		l: "未熟"
    	},
    	{
    		r: 8322,
    		f: 5.51,
    		l: "文芸"
    	},
    	{
    		r: 8323,
    		f: 5.5,
    		l: "本店"
    	},
    	{
    		r: 8324,
    		f: 5.5,
    		l: "新品"
    	},
    	{
    		r: 8325,
    		f: 5.5,
    		l: "読み方"
    	},
    	{
    		r: 8326,
    		f: 5.5,
    		l: "ランダム"
    	},
    	{
    		r: 8327,
    		f: 5.5,
    		l: "陽気"
    	},
    	{
    		r: 8328,
    		f: 5.5,
    		l: "ヨガ"
    	},
    	{
    		r: 8329,
    		f: 5.5,
    		l: "皆さま"
    	},
    	{
    		r: 8330,
    		f: 5.5,
    		l: "浮上"
    	},
    	{
    		r: 8331,
    		f: 5.5,
    		l: "互い"
    	},
    	{
    		r: 8332,
    		f: 5.5,
    		l: "利便"
    	},
    	{
    		r: 8333,
    		f: 5.5,
    		l: "換算"
    	},
    	{
    		r: 8334,
    		f: 5.5,
    		l: "平安"
    	},
    	{
    		r: 8335,
    		f: 5.5,
    		l: "おじいちゃん"
    	},
    	{
    		r: 8336,
    		f: 5.5,
    		l: "常任"
    	},
    	{
    		r: 8337,
    		f: 5.49,
    		l: "遡る"
    	},
    	{
    		r: 8338,
    		f: 5.49,
    		l: "につれ"
    	},
    	{
    		r: 8339,
    		f: 5.49,
    		l: "死ねる"
    	},
    	{
    		r: 8340,
    		f: 5.49,
    		l: "魔術"
    	},
    	{
    		r: 8341,
    		f: 5.49,
    		l: "補佐"
    	},
    	{
    		r: 8342,
    		f: 5.49,
    		l: "カウンセラー"
    	},
    	{
    		r: 8343,
    		f: 5.49,
    		l: "動き出す"
    	},
    	{
    		r: 8344,
    		f: 5.49,
    		l: "ズボン"
    	},
    	{
    		r: 8345,
    		f: 5.49,
    		l: "排水"
    	},
    	{
    		r: 8346,
    		f: 5.49,
    		l: "サクラ"
    	},
    	{
    		r: 8347,
    		f: 5.48,
    		l: "多額"
    	},
    	{
    		r: 8348,
    		f: 5.48,
    		l: "湾"
    	},
    	{
    		r: 8349,
    		f: 5.48,
    		l: "続々"
    	},
    	{
    		r: 8350,
    		f: 5.48,
    		l: "復元"
    	},
    	{
    		r: 8351,
    		f: 5.48,
    		l: "悪影響"
    	},
    	{
    		r: 8352,
    		f: 5.48,
    		l: "ユース"
    	},
    	{
    		r: 8353,
    		f: 5.48,
    		l: "機体"
    	},
    	{
    		r: 8354,
    		f: 5.48,
    		l: "市立"
    	},
    	{
    		r: 8355,
    		f: 5.48,
    		l: "キレ"
    	},
    	{
    		r: 8356,
    		f: 5.47,
    		l: "直径"
    	},
    	{
    		r: 8357,
    		f: 5.47,
    		l: "マスメディア"
    	},
    	{
    		r: 8358,
    		f: 5.47,
    		l: "待遇"
    	},
    	{
    		r: 8359,
    		f: 5.47,
    		l: "ラス"
    	},
    	{
    		r: 8360,
    		f: 5.47,
    		l: "喫茶"
    	},
    	{
    		r: 8361,
    		f: 5.47,
    		l: "直線"
    	},
    	{
    		r: 8362,
    		f: 5.47,
    		l: "於く"
    	},
    	{
    		r: 8363,
    		f: 5.47,
    		l: "栄光"
    	},
    	{
    		r: 8364,
    		f: 5.47,
    		l: "公募"
    	},
    	{
    		r: 8365,
    		f: 5.46,
    		l: "何でも"
    	},
    	{
    		r: 8366,
    		f: 5.46,
    		l: "音楽家"
    	},
    	{
    		r: 8367,
    		f: 5.46,
    		l: "何気ない"
    	},
    	{
    		r: 8368,
    		f: 5.46,
    		l: "泥"
    	},
    	{
    		r: 8369,
    		f: 5.46,
    		l: "さよう"
    	},
    	{
    		r: 8370,
    		f: 5.46,
    		l: "シャッター"
    	},
    	{
    		r: 8371,
    		f: 5.46,
    		l: "ヨルダン"
    	},
    	{
    		r: 8372,
    		f: 5.46,
    		l: "内装"
    	},
    	{
    		r: 8373,
    		f: 5.46,
    		l: "パブ"
    	},
    	{
    		r: 8374,
    		f: 5.46,
    		l: "第一歩"
    	},
    	{
    		r: 8375,
    		f: 5.46,
    		l: "団塊"
    	},
    	{
    		r: 8376,
    		f: 5.46,
    		l: "付す"
    	},
    	{
    		r: 8377,
    		f: 5.46,
    		l: "補強"
    	},
    	{
    		r: 8378,
    		f: 5.46,
    		l: "おいおい"
    	},
    	{
    		r: 8379,
    		f: 5.46,
    		l: "常連"
    	},
    	{
    		r: 8380,
    		f: 5.46,
    		l: "名物"
    	},
    	{
    		r: 8381,
    		f: 5.46,
    		l: "平野"
    	},
    	{
    		r: 8382,
    		f: 5.46,
    		l: "多彩"
    	},
    	{
    		r: 8383,
    		f: 5.45,
    		l: "売"
    	},
    	{
    		r: 8384,
    		f: 5.45,
    		l: "家畜"
    	},
    	{
    		r: 8385,
    		f: 5.45,
    		l: "人びと"
    	},
    	{
    		r: 8386,
    		f: 5.45,
    		l: "罠"
    	},
    	{
    		r: 8387,
    		f: 5.45,
    		l: "お部屋"
    	},
    	{
    		r: 8388,
    		f: 5.45,
    		l: "同氏"
    	},
    	{
    		r: 8389,
    		f: 5.45,
    		l: "残"
    	},
    	{
    		r: 8390,
    		f: 5.45,
    		l: "高木"
    	},
    	{
    		r: 8391,
    		f: 5.45,
    		l: "沿岸"
    	},
    	{
    		r: 8392,
    		f: 5.45,
    		l: "いじめる"
    	},
    	{
    		r: 8393,
    		f: 5.45,
    		l: "＄"
    	},
    	{
    		r: 8394,
    		f: 5.45,
    		l: "壮大"
    	},
    	{
    		r: 8395,
    		f: 5.45,
    		l: "ふた"
    	},
    	{
    		r: 8396,
    		f: 5.45,
    		l: "フリーター"
    	},
    	{
    		r: 8397,
    		f: 5.45,
    		l: "ポジティブ"
    	},
    	{
    		r: 8398,
    		f: 5.45,
    		l: "過度"
    	},
    	{
    		r: 8399,
    		f: 5.44,
    		l: "コラボレーション"
    	},
    	{
    		r: 8400,
    		f: 5.44,
    		l: "続編"
    	},
    	{
    		r: 8401,
    		f: 5.44,
    		l: "ちと"
    	},
    	{
    		r: 8402,
    		f: 5.44,
    		l: "代目"
    	},
    	{
    		r: 8403,
    		f: 5.44,
    		l: "団結"
    	},
    	{
    		r: 8404,
    		f: 5.44,
    		l: "人柄"
    	},
    	{
    		r: 8405,
    		f: 5.44,
    		l: "情報処理"
    	},
    	{
    		r: 8406,
    		f: 5.44,
    		l: "西日本"
    	},
    	{
    		r: 8407,
    		f: 5.43,
    		l: "熱狂"
    	},
    	{
    		r: 8408,
    		f: 5.43,
    		l: "立て"
    	},
    	{
    		r: 8409,
    		f: 5.43,
    		l: "舎"
    	},
    	{
    		r: 8410,
    		f: 5.43,
    		l: "ウクライナ"
    	},
    	{
    		r: 8411,
    		f: 5.43,
    		l: "当る"
    	},
    	{
    		r: 8412,
    		f: 5.43,
    		l: "祖国"
    	},
    	{
    		r: 8413,
    		f: 5.43,
    		l: "委ねる"
    	},
    	{
    		r: 8414,
    		f: 5.43,
    		l: "キリ"
    	},
    	{
    		r: 8415,
    		f: 5.43,
    		l: "志望"
    	},
    	{
    		r: 8416,
    		f: 5.43,
    		l: "カール"
    	},
    	{
    		r: 8417,
    		f: 5.43,
    		l: "清潔"
    	},
    	{
    		r: 8418,
    		f: 5.43,
    		l: "期日"
    	},
    	{
    		r: 8419,
    		f: 5.42,
    		l: "良質"
    	},
    	{
    		r: 8420,
    		f: 5.42,
    		l: "貝"
    	},
    	{
    		r: 8421,
    		f: 5.42,
    		l: "当店"
    	},
    	{
    		r: 8422,
    		f: 5.42,
    		l: "本棚"
    	},
    	{
    		r: 8423,
    		f: 5.42,
    		l: "機密"
    	},
    	{
    		r: 8424,
    		f: 5.42,
    		l: "宮殿"
    	},
    	{
    		r: 8425,
    		f: 5.42,
    		l: "カウント"
    	},
    	{
    		r: 8426,
    		f: 5.41,
    		l: "復讐"
    	},
    	{
    		r: 8427,
    		f: 5.41,
    		l: "心境"
    	},
    	{
    		r: 8428,
    		f: 5.41,
    		l: "密か"
    	},
    	{
    		r: 8429,
    		f: 5.41,
    		l: "ひとこと"
    	},
    	{
    		r: 8430,
    		f: 5.41,
    		l: "着用"
    	},
    	{
    		r: 8431,
    		f: 5.41,
    		l: "カーブ"
    	},
    	{
    		r: 8432,
    		f: 5.4,
    		l: "おいら"
    	},
    	{
    		r: 8433,
    		f: 5.4,
    		l: "号線"
    	},
    	{
    		r: 8434,
    		f: 5.4,
    		l: "聞き取る"
    	},
    	{
    		r: 8435,
    		f: 5.4,
    		l: "下着"
    	},
    	{
    		r: 8436,
    		f: 5.4,
    		l: "建前"
    	},
    	{
    		r: 8437,
    		f: 5.4,
    		l: "マルクス"
    	},
    	{
    		r: 8438,
    		f: 5.4,
    		l: "好感"
    	},
    	{
    		r: 8439,
    		f: 5.39,
    		l: "ため息"
    	},
    	{
    		r: 8440,
    		f: 5.39,
    		l: "稿"
    	},
    	{
    		r: 8441,
    		f: 5.39,
    		l: "精密"
    	},
    	{
    		r: 8442,
    		f: 5.39,
    		l: "配列"
    	},
    	{
    		r: 8443,
    		f: 5.39,
    		l: "食卓"
    	},
    	{
    		r: 8444,
    		f: 5.39,
    		l: "わくわく"
    	},
    	{
    		r: 8445,
    		f: 5.39,
    		l: "今晩"
    	},
    	{
    		r: 8446,
    		f: 5.39,
    		l: "三菱"
    	},
    	{
    		r: 8447,
    		f: 5.39,
    		l: "着目"
    	},
    	{
    		r: 8448,
    		f: 5.39,
    		l: "夢見る"
    	},
    	{
    		r: 8449,
    		f: 5.39,
    		l: "語彙"
    	},
    	{
    		r: 8450,
    		f: 5.39,
    		l: "共同通信"
    	},
    	{
    		r: 8451,
    		f: 5.39,
    		l: "スー"
    	},
    	{
    		r: 8452,
    		f: 5.38,
    		l: "クリニック"
    	},
    	{
    		r: 8453,
    		f: 5.38,
    		l: "豪"
    	},
    	{
    		r: 8454,
    		f: 5.38,
    		l: "まれ"
    	},
    	{
    		r: 8455,
    		f: 5.38,
    		l: "餃子"
    	},
    	{
    		r: 8456,
    		f: 5.38,
    		l: "ガーデン"
    	},
    	{
    		r: 8457,
    		f: 5.37,
    		l: "ガイドブック"
    	},
    	{
    		r: 8458,
    		f: 5.37,
    		l: "康"
    	},
    	{
    		r: 8459,
    		f: 5.37,
    		l: "方言"
    	},
    	{
    		r: 8460,
    		f: 5.37,
    		l: "随時"
    	},
    	{
    		r: 8461,
    		f: 5.37,
    		l: "ニッポン"
    	},
    	{
    		r: 8462,
    		f: 5.37,
    		l: "ステレオ"
    	},
    	{
    		r: 8463,
    		f: 5.37,
    		l: "重力"
    	},
    	{
    		r: 8464,
    		f: 5.37,
    		l: "漠然と"
    	},
    	{
    		r: 8465,
    		f: 5.37,
    		l: "皆無"
    	},
    	{
    		r: 8466,
    		f: 5.37,
    		l: "プロフェッショナル"
    	},
    	{
    		r: 8467,
    		f: 5.37,
    		l: "承諾"
    	},
    	{
    		r: 8468,
    		f: 5.37,
    		l: "店主"
    	},
    	{
    		r: 8469,
    		f: 5.36,
    		l: "最善"
    	},
    	{
    		r: 8470,
    		f: 5.36,
    		l: "真摯"
    	},
    	{
    		r: 8471,
    		f: 5.36,
    		l: "戸田"
    	},
    	{
    		r: 8472,
    		f: 5.36,
    		l: "グレー"
    	},
    	{
    		r: 8473,
    		f: 5.36,
    		l: "フィット"
    	},
    	{
    		r: 8474,
    		f: 5.36,
    		l: "脅迫"
    	},
    	{
    		r: 8475,
    		f: 5.36,
    		l: "双子"
    	},
    	{
    		r: 8476,
    		f: 5.35,
    		l: "脱線"
    	},
    	{
    		r: 8477,
    		f: 5.35,
    		l: "量的"
    	},
    	{
    		r: 8478,
    		f: 5.35,
    		l: "緑色"
    	},
    	{
    		r: 8479,
    		f: 5.35,
    		l: "過言"
    	},
    	{
    		r: 8480,
    		f: 5.35,
    		l: "彰"
    	},
    	{
    		r: 8481,
    		f: 5.35,
    		l: "会費"
    	},
    	{
    		r: 8482,
    		f: 5.35,
    		l: "物語る"
    	},
    	{
    		r: 8483,
    		f: 5.35,
    		l: "見渡す"
    	},
    	{
    		r: 8484,
    		f: 5.34,
    		l: "前作"
    	},
    	{
    		r: 8485,
    		f: 5.34,
    		l: "提訴"
    	},
    	{
    		r: 8486,
    		f: 5.34,
    		l: "麻生"
    	},
    	{
    		r: 8487,
    		f: 5.34,
    		l: "方程式"
    	},
    	{
    		r: 8488,
    		f: 5.34,
    		l: "フォーク"
    	},
    	{
    		r: 8489,
    		f: 5.34,
    		l: "ことに"
    	},
    	{
    		r: 8490,
    		f: 5.34,
    		l: "反響"
    	},
    	{
    		r: 8491,
    		f: 5.34,
    		l: "近辺"
    	},
    	{
    		r: 8492,
    		f: 5.34,
    		l: "ァ"
    	},
    	{
    		r: 8493,
    		f: 5.34,
    		l: "ビニール"
    	},
    	{
    		r: 8494,
    		f: 5.34,
    		l: "両面"
    	},
    	{
    		r: 8495,
    		f: 5.34,
    		l: "亮"
    	},
    	{
    		r: 8496,
    		f: 5.34,
    		l: "過ごせる"
    	},
    	{
    		r: 8497,
    		f: 5.34,
    		l: "密着"
    	},
    	{
    		r: 8498,
    		f: 5.33,
    		l: "摩擦"
    	},
    	{
    		r: 8499,
    		f: 5.33,
    		l: "糖尿"
    	},
    	{
    		r: 8500,
    		f: 5.33,
    		l: "ｋｍ"
    	},
    	{
    		r: 8501,
    		f: 5.33,
    		l: "蛇"
    	},
    	{
    		r: 8502,
    		f: 5.33,
    		l: "バッハ"
    	},
    	{
    		r: 8503,
    		f: 5.33,
    		l: "死去"
    	},
    	{
    		r: 8504,
    		f: 5.33,
    		l: "遠藤"
    	},
    	{
    		r: 8505,
    		f: 5.33,
    		l: "甲斐"
    	},
    	{
    		r: 8506,
    		f: 5.33,
    		l: "達人"
    	},
    	{
    		r: 8507,
    		f: 5.33,
    		l: "レーザー"
    	},
    	{
    		r: 8508,
    		f: 5.33,
    		l: "表れる"
    	},
    	{
    		r: 8509,
    		f: 5.33,
    		l: "誘惑"
    	},
    	{
    		r: 8510,
    		f: 5.33,
    		l: "進捗"
    	},
    	{
    		r: 8511,
    		f: 5.33,
    		l: "脅かす"
    	},
    	{
    		r: 8512,
    		f: 5.33,
    		l: "つぎ"
    	},
    	{
    		r: 8513,
    		f: 5.33,
    		l: "終"
    	},
    	{
    		r: 8514,
    		f: 5.32,
    		l: "玄"
    	},
    	{
    		r: 8515,
    		f: 5.32,
    		l: "懸賞"
    	},
    	{
    		r: 8516,
    		f: 5.32,
    		l: "ナショナル"
    	},
    	{
    		r: 8517,
    		f: 5.32,
    		l: "田村"
    	},
    	{
    		r: 8518,
    		f: 5.32,
    		l: "オート"
    	},
    	{
    		r: 8519,
    		f: 5.32,
    		l: "切り離す"
    	},
    	{
    		r: 8520,
    		f: 5.32,
    		l: "ハナ"
    	},
    	{
    		r: 8521,
    		f: 5.32,
    		l: "凍結"
    	},
    	{
    		r: 8522,
    		f: 5.32,
    		l: "模倣"
    	},
    	{
    		r: 8523,
    		f: 5.32,
    		l: "おっさん"
    	},
    	{
    		r: 8524,
    		f: 5.32,
    		l: "各々"
    	},
    	{
    		r: 8525,
    		f: 5.32,
    		l: "鳴く"
    	},
    	{
    		r: 8526,
    		f: 5.32,
    		l: "学べる"
    	},
    	{
    		r: 8527,
    		f: 5.31,
    		l: "たす"
    	},
    	{
    		r: 8528,
    		f: 5.31,
    		l: "延々と"
    	},
    	{
    		r: 8529,
    		f: 5.31,
    		l: "消極"
    	},
    	{
    		r: 8530,
    		f: 5.31,
    		l: "駆けつける"
    	},
    	{
    		r: 8531,
    		f: 5.31,
    		l: "国外"
    	},
    	{
    		r: 8532,
    		f: 5.31,
    		l: "談合"
    	},
    	{
    		r: 8533,
    		f: 5.31,
    		l: "客席"
    	},
    	{
    		r: 8534,
    		f: 5.31,
    		l: "女神"
    	},
    	{
    		r: 8535,
    		f: 5.31,
    		l: "に関し"
    	},
    	{
    		r: 8536,
    		f: 5.31,
    		l: "冷戦"
    	},
    	{
    		r: 8537,
    		f: 5.31,
    		l: "キャプテン"
    	},
    	{
    		r: 8538,
    		f: 5.31,
    		l: "引き取る"
    	},
    	{
    		r: 8539,
    		f: 5.31,
    		l: "電流"
    	},
    	{
    		r: 8540,
    		f: 5.3,
    		l: "ぜひとも"
    	},
    	{
    		r: 8541,
    		f: 5.3,
    		l: "見地"
    	},
    	{
    		r: 8542,
    		f: 5.3,
    		l: "衰退"
    	},
    	{
    		r: 8543,
    		f: 5.3,
    		l: "心情"
    	},
    	{
    		r: 8544,
    		f: 5.3,
    		l: "新潮"
    	},
    	{
    		r: 8545,
    		f: 5.3,
    		l: "重み"
    	},
    	{
    		r: 8546,
    		f: 5.3,
    		l: "かって"
    	},
    	{
    		r: 8547,
    		f: 5.3,
    		l: "つねに"
    	},
    	{
    		r: 8548,
    		f: 5.3,
    		l: "セカンド"
    	},
    	{
    		r: 8549,
    		f: 5.29,
    		l: "深まる"
    	},
    	{
    		r: 8550,
    		f: 5.29,
    		l: "労力"
    	},
    	{
    		r: 8551,
    		f: 5.29,
    		l: "浮かべる"
    	},
    	{
    		r: 8552,
    		f: 5.29,
    		l: "見当たる"
    	},
    	{
    		r: 8553,
    		f: 5.29,
    		l: "松下"
    	},
    	{
    		r: 8554,
    		f: 5.29,
    		l: "国歌"
    	},
    	{
    		r: 8555,
    		f: 5.29,
    		l: "格段"
    	},
    	{
    		r: 8556,
    		f: 5.29,
    		l: "栗"
    	},
    	{
    		r: 8557,
    		f: 5.29,
    		l: "定例"
    	},
    	{
    		r: 8558,
    		f: 5.29,
    		l: "伊"
    	},
    	{
    		r: 8559,
    		f: 5.29,
    		l: "コンポーネント"
    	},
    	{
    		r: 8560,
    		f: 5.29,
    		l: "競う"
    	},
    	{
    		r: 8561,
    		f: 5.29,
    		l: "ウラ"
    	},
    	{
    		r: 8562,
    		f: 5.29,
    		l: "陪審"
    	},
    	{
    		r: 8563,
    		f: 5.29,
    		l: "懲役"
    	},
    	{
    		r: 8564,
    		f: 5.28,
    		l: "ダイレクト"
    	},
    	{
    		r: 8565,
    		f: 5.28,
    		l: "最良"
    	},
    	{
    		r: 8566,
    		f: 5.28,
    		l: "味わい"
    	},
    	{
    		r: 8567,
    		f: 5.28,
    		l: "買"
    	},
    	{
    		r: 8568,
    		f: 5.28,
    		l: "ラッシュ"
    	},
    	{
    		r: 8569,
    		f: 5.28,
    		l: "ちがい"
    	},
    	{
    		r: 8570,
    		f: 5.28,
    		l: "ボトル"
    	},
    	{
    		r: 8571,
    		f: 5.28,
    		l: "マリ"
    	},
    	{
    		r: 8572,
    		f: 5.28,
    		l: "群れ"
    	},
    	{
    		r: 8573,
    		f: 5.28,
    		l: "育"
    	},
    	{
    		r: 8574,
    		f: 5.28,
    		l: "日数"
    	},
    	{
    		r: 8575,
    		f: 5.28,
    		l: "来店"
    	},
    	{
    		r: 8576,
    		f: 5.28,
    		l: "現物"
    	},
    	{
    		r: 8577,
    		f: 5.28,
    		l: "慶"
    	},
    	{
    		r: 8578,
    		f: 5.27,
    		l: "堅い"
    	},
    	{
    		r: 8579,
    		f: 5.27,
    		l: "末期"
    	},
    	{
    		r: 8580,
    		f: 5.27,
    		l: "うつ病"
    	},
    	{
    		r: 8581,
    		f: 5.27,
    		l: "大げさ"
    	},
    	{
    		r: 8582,
    		f: 5.27,
    		l: "水産"
    	},
    	{
    		r: 8583,
    		f: 5.27,
    		l: "手助け"
    	},
    	{
    		r: 8584,
    		f: 5.27,
    		l: "乱"
    	},
    	{
    		r: 8585,
    		f: 5.26,
    		l: "遅刻"
    	},
    	{
    		r: 8586,
    		f: 5.26,
    		l: "家屋"
    	},
    	{
    		r: 8587,
    		f: 5.26,
    		l: "カート"
    	},
    	{
    		r: 8588,
    		f: 5.26,
    		l: "直る"
    	},
    	{
    		r: 8589,
    		f: 5.26,
    		l: "次長"
    	},
    	{
    		r: 8590,
    		f: 5.26,
    		l: "非公開"
    	},
    	{
    		r: 8591,
    		f: 5.26,
    		l: "表彰"
    	},
    	{
    		r: 8592,
    		f: 5.26,
    		l: "公安"
    	},
    	{
    		r: 8593,
    		f: 5.26,
    		l: "やむを得ない"
    	},
    	{
    		r: 8594,
    		f: 5.26,
    		l: "式典"
    	},
    	{
    		r: 8595,
    		f: 5.26,
    		l: "くさい"
    	},
    	{
    		r: 8596,
    		f: 5.26,
    		l: "一角"
    	},
    	{
    		r: 8597,
    		f: 5.26,
    		l: "歯医者"
    	},
    	{
    		r: 8598,
    		f: 5.26,
    		l: "解約"
    	},
    	{
    		r: 8599,
    		f: 5.26,
    		l: "簑"
    	},
    	{
    		r: 8600,
    		f: 5.26,
    		l: "長距離"
    	},
    	{
    		r: 8601,
    		f: 5.26,
    		l: "反復"
    	},
    	{
    		r: 8602,
    		f: 5.26,
    		l: "本年度"
    	},
    	{
    		r: 8603,
    		f: 5.26,
    		l: "取扱"
    	},
    	{
    		r: 8604,
    		f: 5.26,
    		l: "ダーク"
    	},
    	{
    		r: 8605,
    		f: 5.25,
    		l: "絶賛"
    	},
    	{
    		r: 8606,
    		f: 5.25,
    		l: "無罪"
    	},
    	{
    		r: 8607,
    		f: 5.25,
    		l: "持ち上げる"
    	},
    	{
    		r: 8608,
    		f: 5.25,
    		l: "ディレクトリ"
    	},
    	{
    		r: 8609,
    		f: 5.25,
    		l: "有罪"
    	},
    	{
    		r: 8610,
    		f: 5.25,
    		l: "国益"
    	},
    	{
    		r: 8611,
    		f: 5.25,
    		l: "悩ます"
    	},
    	{
    		r: 8612,
    		f: 5.25,
    		l: "目前"
    	},
    	{
    		r: 8613,
    		f: 5.25,
    		l: "くだらない"
    	},
    	{
    		r: 8614,
    		f: 5.25,
    		l: "投与"
    	},
    	{
    		r: 8615,
    		f: 5.25,
    		l: "甲子園"
    	},
    	{
    		r: 8616,
    		f: 5.25,
    		l: "塊"
    	},
    	{
    		r: 8617,
    		f: 5.24,
    		l: "伝承"
    	},
    	{
    		r: 8618,
    		f: 5.24,
    		l: "所在"
    	},
    	{
    		r: 8619,
    		f: 5.24,
    		l: "乗り換える"
    	},
    	{
    		r: 8620,
    		f: 5.24,
    		l: "栃木"
    	},
    	{
    		r: 8621,
    		f: 5.24,
    		l: "懇親"
    	},
    	{
    		r: 8622,
    		f: 5.24,
    		l: "淳"
    	},
    	{
    		r: 8623,
    		f: 5.24,
    		l: "われ"
    	},
    	{
    		r: 8624,
    		f: 5.24,
    		l: "架空"
    	},
    	{
    		r: 8625,
    		f: 5.24,
    		l: "津"
    	},
    	{
    		r: 8626,
    		f: 5.24,
    		l: "乗り出す"
    	},
    	{
    		r: 8627,
    		f: 5.24,
    		l: "コーン"
    	},
    	{
    		r: 8628,
    		f: 5.24,
    		l: "きん"
    	},
    	{
    		r: 8629,
    		f: 5.24,
    		l: "上空"
    	},
    	{
    		r: 8630,
    		f: 5.24,
    		l: "美女"
    	},
    	{
    		r: 8631,
    		f: 5.24,
    		l: "絶妙"
    	},
    	{
    		r: 8632,
    		f: 5.24,
    		l: "楽章"
    	},
    	{
    		r: 8633,
    		f: 5.24,
    		l: "陳述"
    	},
    	{
    		r: 8634,
    		f: 5.24,
    		l: "ポピュラー"
    	},
    	{
    		r: 8635,
    		f: 5.23,
    		l: "スマート"
    	},
    	{
    		r: 8636,
    		f: 5.23,
    		l: "暖房"
    	},
    	{
    		r: 8637,
    		f: 5.23,
    		l: "叶う"
    	},
    	{
    		r: 8638,
    		f: 5.23,
    		l: "細部"
    	},
    	{
    		r: 8639,
    		f: 5.23,
    		l: "菓子"
    	},
    	{
    		r: 8640,
    		f: 5.23,
    		l: "生息"
    	},
    	{
    		r: 8641,
    		f: 5.23,
    		l: "ともなう"
    	},
    	{
    		r: 8642,
    		f: 5.22,
    		l: "虚偽"
    	},
    	{
    		r: 8643,
    		f: 5.22,
    		l: "ふやす"
    	},
    	{
    		r: 8644,
    		f: 5.22,
    		l: "継ぐ"
    	},
    	{
    		r: 8645,
    		f: 5.22,
    		l: "教職員"
    	},
    	{
    		r: 8646,
    		f: 5.22,
    		l: "ややこしい"
    	},
    	{
    		r: 8647,
    		f: 5.22,
    		l: "情"
    	},
    	{
    		r: 8648,
    		f: 5.22,
    		l: "一歩"
    	},
    	{
    		r: 8649,
    		f: 5.22,
    		l: "フィル"
    	},
    	{
    		r: 8650,
    		f: 5.22,
    		l: "反動"
    	},
    	{
    		r: 8651,
    		f: 5.22,
    		l: "地道"
    	},
    	{
    		r: 8652,
    		f: 5.22,
    		l: "巧み"
    	},
    	{
    		r: 8653,
    		f: 5.22,
    		l: "笛"
    	},
    	{
    		r: 8654,
    		f: 5.22,
    		l: "神田"
    	},
    	{
    		r: 8655,
    		f: 5.22,
    		l: "孝"
    	},
    	{
    		r: 8656,
    		f: 5.22,
    		l: "不調"
    	},
    	{
    		r: 8657,
    		f: 5.22,
    		l: "算出"
    	},
    	{
    		r: 8658,
    		f: 5.21,
    		l: "撤去"
    	},
    	{
    		r: 8659,
    		f: 5.21,
    		l: "スローガン"
    	},
    	{
    		r: 8660,
    		f: 5.21,
    		l: "法定"
    	},
    	{
    		r: 8661,
    		f: 5.21,
    		l: "何やら"
    	},
    	{
    		r: 8662,
    		f: 5.21,
    		l: "ガード"
    	},
    	{
    		r: 8663,
    		f: 5.2,
    		l: "になう"
    	},
    	{
    		r: 8664,
    		f: 5.2,
    		l: "オオカミ"
    	},
    	{
    		r: 8665,
    		f: 5.2,
    		l: "埋まる"
    	},
    	{
    		r: 8666,
    		f: 5.2,
    		l: "ジュニア"
    	},
    	{
    		r: 8667,
    		f: 5.2,
    		l: "一時期"
    	},
    	{
    		r: 8668,
    		f: 5.2,
    		l: "栄"
    	},
    	{
    		r: 8669,
    		f: 5.2,
    		l: "出向く"
    	},
    	{
    		r: 8670,
    		f: 5.2,
    		l: "事案"
    	},
    	{
    		r: 8671,
    		f: 5.2,
    		l: "租税"
    	},
    	{
    		r: 8672,
    		f: 5.2,
    		l: "タイル"
    	},
    	{
    		r: 8673,
    		f: 5.19,
    		l: "且つ"
    	},
    	{
    		r: 8674,
    		f: 5.19,
    		l: "極める"
    	},
    	{
    		r: 8675,
    		f: 5.19,
    		l: "いつのまにか"
    	},
    	{
    		r: 8676,
    		f: 5.19,
    		l: "命名"
    	},
    	{
    		r: 8677,
    		f: 5.19,
    		l: "高層"
    	},
    	{
    		r: 8678,
    		f: 5.18,
    		l: "稼動"
    	},
    	{
    		r: 8679,
    		f: 5.18,
    		l: "無縁"
    	},
    	{
    		r: 8680,
    		f: 5.18,
    		l: "躊躇"
    	},
    	{
    		r: 8681,
    		f: 5.18,
    		l: "数少ない"
    	},
    	{
    		r: 8682,
    		f: 5.18,
    		l: "浄化"
    	},
    	{
    		r: 8683,
    		f: 5.18,
    		l: "はやい"
    	},
    	{
    		r: 8684,
    		f: 5.18,
    		l: "呟く"
    	},
    	{
    		r: 8685,
    		f: 5.18,
    		l: "アルミ"
    	},
    	{
    		r: 8686,
    		f: 5.18,
    		l: "いか"
    	},
    	{
    		r: 8687,
    		f: 5.18,
    		l: "十字架"
    	},
    	{
    		r: 8688,
    		f: 5.18,
    		l: "速やか"
    	},
    	{
    		r: 8689,
    		f: 5.18,
    		l: "則"
    	},
    	{
    		r: 8690,
    		f: 5.18,
    		l: "傍聴"
    	},
    	{
    		r: 8691,
    		f: 5.18,
    		l: "房"
    	},
    	{
    		r: 8692,
    		f: 5.17,
    		l: "連鎖"
    	},
    	{
    		r: 8693,
    		f: 5.17,
    		l: "ピース"
    	},
    	{
    		r: 8694,
    		f: 5.17,
    		l: "バター"
    	},
    	{
    		r: 8695,
    		f: 5.17,
    		l: "屋外"
    	},
    	{
    		r: 8696,
    		f: 5.17,
    		l: "コンクール"
    	},
    	{
    		r: 8697,
    		f: 5.17,
    		l: "鉱山"
    	},
    	{
    		r: 8698,
    		f: 5.17,
    		l: "野口"
    	},
    	{
    		r: 8699,
    		f: 5.17,
    		l: "過酷"
    	},
    	{
    		r: 8700,
    		f: 5.17,
    		l: "適度"
    	},
    	{
    		r: 8701,
    		f: 5.16,
    		l: "本名"
    	},
    	{
    		r: 8702,
    		f: 5.16,
    		l: "任期"
    	},
    	{
    		r: 8703,
    		f: 5.16,
    		l: "請願"
    	},
    	{
    		r: 8704,
    		f: 5.16,
    		l: "象"
    	},
    	{
    		r: 8705,
    		f: 5.16,
    		l: "デフォルト"
    	},
    	{
    		r: 8706,
    		f: 5.16,
    		l: "インターフェース"
    	},
    	{
    		r: 8707,
    		f: 5.16,
    		l: "はてな"
    	},
    	{
    		r: 8708,
    		f: 5.16,
    		l: "ファイナル"
    	},
    	{
    		r: 8709,
    		f: 5.16,
    		l: "うわ"
    	},
    	{
    		r: 8710,
    		f: 5.16,
    		l: "冷える"
    	},
    	{
    		r: 8711,
    		f: 5.16,
    		l: "なおさら"
    	},
    	{
    		r: 8712,
    		f: 5.16,
    		l: "添加"
    	},
    	{
    		r: 8713,
    		f: 5.15,
    		l: "燃焼"
    	},
    	{
    		r: 8714,
    		f: 5.15,
    		l: "幽霊"
    	},
    	{
    		r: 8715,
    		f: 5.15,
    		l: "自力"
    	},
    	{
    		r: 8716,
    		f: 5.15,
    		l: "分け"
    	},
    	{
    		r: 8717,
    		f: 5.15,
    		l: "立証"
    	},
    	{
    		r: 8718,
    		f: 5.15,
    		l: "ひとつひとつ"
    	},
    	{
    		r: 8719,
    		f: 5.15,
    		l: "神聖"
    	},
    	{
    		r: 8720,
    		f: 5.15,
    		l: "フィクション"
    	},
    	{
    		r: 8721,
    		f: 5.15,
    		l: "マルチメディア"
    	},
    	{
    		r: 8722,
    		f: 5.15,
    		l: "寿"
    	},
    	{
    		r: 8723,
    		f: 5.15,
    		l: "採点"
    	},
    	{
    		r: 8724,
    		f: 5.14,
    		l: "操る"
    	},
    	{
    		r: 8725,
    		f: 5.14,
    		l: "徒然"
    	},
    	{
    		r: 8726,
    		f: 5.14,
    		l: "峰"
    	},
    	{
    		r: 8727,
    		f: 5.14,
    		l: "暫く"
    	},
    	{
    		r: 8728,
    		f: 5.14,
    		l: "案の定"
    	},
    	{
    		r: 8729,
    		f: 5.14,
    		l: "視界"
    	},
    	{
    		r: 8730,
    		f: 5.14,
    		l: "芯"
    	},
    	{
    		r: 8731,
    		f: 5.14,
    		l: "打ち上げ"
    	},
    	{
    		r: 8732,
    		f: 5.13,
    		l: "あて"
    	},
    	{
    		r: 8733,
    		f: 5.13,
    		l: "礼儀"
    	},
    	{
    		r: 8734,
    		f: 5.13,
    		l: "コメ"
    	},
    	{
    		r: 8735,
    		f: 5.13,
    		l: "味わえる"
    	},
    	{
    		r: 8736,
    		f: 5.13,
    		l: "使い勝手"
    	},
    	{
    		r: 8737,
    		f: 5.13,
    		l: "監修"
    	},
    	{
    		r: 8738,
    		f: 5.13,
    		l: "水泳"
    	},
    	{
    		r: 8739,
    		f: 5.13,
    		l: "握手"
    	},
    	{
    		r: 8740,
    		f: 5.12,
    		l: "アカ"
    	},
    	{
    		r: 8741,
    		f: 5.12,
    		l: "くっつく"
    	},
    	{
    		r: 8742,
    		f: 5.12,
    		l: "身内"
    	},
    	{
    		r: 8743,
    		f: 5.12,
    		l: "沸く"
    	},
    	{
    		r: 8744,
    		f: 5.12,
    		l: "暴行"
    	},
    	{
    		r: 8745,
    		f: 5.12,
    		l: "大塚"
    	},
    	{
    		r: 8746,
    		f: 5.12,
    		l: "紀"
    	},
    	{
    		r: 8747,
    		f: 5.12,
    		l: "インク"
    	},
    	{
    		r: 8748,
    		f: 5.12,
    		l: "オス"
    	},
    	{
    		r: 8749,
    		f: 5.12,
    		l: "ナチス"
    	},
    	{
    		r: 8750,
    		f: 5.12,
    		l: "牧場"
    	},
    	{
    		r: 8751,
    		f: 5.12,
    		l: "戸惑う"
    	},
    	{
    		r: 8752,
    		f: 5.12,
    		l: "移譲"
    	},
    	{
    		r: 8753,
    		f: 5.11,
    		l: "惜しい"
    	},
    	{
    		r: 8754,
    		f: 5.11,
    		l: "バーチャル"
    	},
    	{
    		r: 8755,
    		f: 5.11,
    		l: "値上がり"
    	},
    	{
    		r: 8756,
    		f: 5.11,
    		l: "主力"
    	},
    	{
    		r: 8757,
    		f: 5.11,
    		l: "パレード"
    	},
    	{
    		r: 8758,
    		f: 5.11,
    		l: "きまる"
    	},
    	{
    		r: 8759,
    		f: 5.11,
    		l: "相関"
    	},
    	{
    		r: 8760,
    		f: 5.11,
    		l: "スケート"
    	},
    	{
    		r: 8761,
    		f: 5.11,
    		l: "補欠"
    	},
    	{
    		r: 8762,
    		f: 5.11,
    		l: "プレミアム"
    	},
    	{
    		r: 8763,
    		f: 5.11,
    		l: "広"
    	},
    	{
    		r: 8764,
    		f: 5.11,
    		l: "すすむ"
    	},
    	{
    		r: 8765,
    		f: 5.11,
    		l: "スイング"
    	},
    	{
    		r: 8766,
    		f: 5.11,
    		l: "大物"
    	},
    	{
    		r: 8767,
    		f: 5.11,
    		l: "方位"
    	},
    	{
    		r: 8768,
    		f: 5.1,
    		l: "土木"
    	},
    	{
    		r: 8769,
    		f: 5.1,
    		l: "呆れる"
    	},
    	{
    		r: 8770,
    		f: 5.1,
    		l: "ブー"
    	},
    	{
    		r: 8771,
    		f: 5.1,
    		l: "イスラム教"
    	},
    	{
    		r: 8772,
    		f: 5.1,
    		l: "めでたい"
    	},
    	{
    		r: 8773,
    		f: 5.1,
    		l: "アナウンサー"
    	},
    	{
    		r: 8774,
    		f: 5.09,
    		l: "パーソナル"
    	},
    	{
    		r: 8775,
    		f: 5.09,
    		l: "俳句"
    	},
    	{
    		r: 8776,
    		f: 5.09,
    		l: "恵み"
    	},
    	{
    		r: 8777,
    		f: 5.09,
    		l: "腸"
    	},
    	{
    		r: 8778,
    		f: 5.09,
    		l: "北欧"
    	},
    	{
    		r: 8779,
    		f: 5.09,
    		l: "様相"
    	},
    	{
    		r: 8780,
    		f: 5.09,
    		l: "ありま"
    	},
    	{
    		r: 8781,
    		f: 5.09,
    		l: "農場"
    	},
    	{
    		r: 8782,
    		f: 5.09,
    		l: "ルイ"
    	},
    	{
    		r: 8783,
    		f: 5.09,
    		l: "対面"
    	},
    	{
    		r: 8784,
    		f: 5.09,
    		l: "工芸"
    	},
    	{
    		r: 8785,
    		f: 5.09,
    		l: "自我"
    	},
    	{
    		r: 8786,
    		f: 5.09,
    		l: "鐘"
    	},
    	{
    		r: 8787,
    		f: 5.09,
    		l: "おしまい"
    	},
    	{
    		r: 8788,
    		f: 5.08,
    		l: "追い出す"
    	},
    	{
    		r: 8789,
    		f: 5.08,
    		l: "流石"
    	},
    	{
    		r: 8790,
    		f: 5.08,
    		l: "出展"
    	},
    	{
    		r: 8791,
    		f: 5.08,
    		l: "ずーっと"
    	},
    	{
    		r: 8792,
    		f: 5.08,
    		l: "論者"
    	},
    	{
    		r: 8793,
    		f: 5.08,
    		l: "貰える"
    	},
    	{
    		r: 8794,
    		f: 5.08,
    		l: "肺"
    	},
    	{
    		r: 8795,
    		f: 5.07,
    		l: "正統"
    	},
    	{
    		r: 8796,
    		f: 5.07,
    		l: "捜す"
    	},
    	{
    		r: 8797,
    		f: 5.07,
    		l: "着ける"
    	},
    	{
    		r: 8798,
    		f: 5.07,
    		l: "断片"
    	},
    	{
    		r: 8799,
    		f: 5.07,
    		l: "腐敗"
    	},
    	{
    		r: 8800,
    		f: 5.07,
    		l: "帯びる"
    	},
    	{
    		r: 8801,
    		f: 5.07,
    		l: "ミル"
    	},
    	{
    		r: 8802,
    		f: 5.07,
    		l: "責務"
    	},
    	{
    		r: 8803,
    		f: 5.07,
    		l: "リスニング"
    	},
    	{
    		r: 8804,
    		f: 5.07,
    		l: "クシ"
    	},
    	{
    		r: 8805,
    		f: 5.07,
    		l: "戦線"
    	},
    	{
    		r: 8806,
    		f: 5.07,
    		l: "年月"
    	},
    	{
    		r: 8807,
    		f: 5.07,
    		l: "車線"
    	},
    	{
    		r: 8808,
    		f: 5.07,
    		l: "駐在"
    	},
    	{
    		r: 8809,
    		f: 5.07,
    		l: "聴衆"
    	},
    	{
    		r: 8810,
    		f: 5.07,
    		l: "襲撃"
    	},
    	{
    		r: 8811,
    		f: 5.07,
    		l: "ささやか"
    	},
    	{
    		r: 8812,
    		f: 5.07,
    		l: "中傷"
    	},
    	{
    		r: 8813,
    		f: 5.06,
    		l: "託す"
    	},
    	{
    		r: 8814,
    		f: 5.06,
    		l: "落下"
    	},
    	{
    		r: 8815,
    		f: 5.06,
    		l: "ライダー"
    	},
    	{
    		r: 8816,
    		f: 5.06,
    		l: "党首"
    	},
    	{
    		r: 8817,
    		f: 5.06,
    		l: "麦"
    	},
    	{
    		r: 8818,
    		f: 5.06,
    		l: "主宰"
    	},
    	{
    		r: 8819,
    		f: 5.05,
    		l: "ウォーター"
    	},
    	{
    		r: 8820,
    		f: 5.05,
    		l: "終盤"
    	},
    	{
    		r: 8821,
    		f: 5.05,
    		l: "日月"
    	},
    	{
    		r: 8822,
    		f: 5.05,
    		l: "悪口"
    	},
    	{
    		r: 8823,
    		f: 5.05,
    		l: "Ｕ"
    	},
    	{
    		r: 8824,
    		f: 5.05,
    		l: "謙虚"
    	},
    	{
    		r: 8825,
    		f: 5.05,
    		l: "締める"
    	},
    	{
    		r: 8826,
    		f: 5.05,
    		l: "神戸大"
    	},
    	{
    		r: 8827,
    		f: 5.04,
    		l: "じん"
    	},
    	{
    		r: 8828,
    		f: 5.04,
    		l: "血管"
    	},
    	{
    		r: 8829,
    		f: 5.04,
    		l: "幕府"
    	},
    	{
    		r: 8830,
    		f: 5.04,
    		l: "たりる"
    	},
    	{
    		r: 8831,
    		f: 5.04,
    		l: "遵守"
    	},
    	{
    		r: 8832,
    		f: 5.04,
    		l: "火事"
    	},
    	{
    		r: 8833,
    		f: 5.04,
    		l: "からむ"
    	},
    	{
    		r: 8834,
    		f: 5.04,
    		l: "メロディ"
    	},
    	{
    		r: 8835,
    		f: 5.03,
    		l: "ネス"
    	},
    	{
    		r: 8836,
    		f: 5.03,
    		l: "今さら"
    	},
    	{
    		r: 8837,
    		f: 5.03,
    		l: "原田"
    	},
    	{
    		r: 8838,
    		f: 5.03,
    		l: "復習"
    	},
    	{
    		r: 8839,
    		f: 5.03,
    		l: "うさぎ"
    	},
    	{
    		r: 8840,
    		f: 5.03,
    		l: "快感"
    	},
    	{
    		r: 8841,
    		f: 5.03,
    		l: "すき"
    	},
    	{
    		r: 8842,
    		f: 5.03,
    		l: "欠席"
    	},
    	{
    		r: 8843,
    		f: 5.03,
    		l: "沢"
    	},
    	{
    		r: 8844,
    		f: 5.03,
    		l: "位置づけ"
    	},
    	{
    		r: 8845,
    		f: 5.03,
    		l: "人組"
    	},
    	{
    		r: 8846,
    		f: 5.03,
    		l: "早く"
    	},
    	{
    		r: 8847,
    		f: 5.03,
    		l: "ワクチン"
    	},
    	{
    		r: 8848,
    		f: 5.03,
    		l: "釣る"
    	},
    	{
    		r: 8849,
    		f: 5.02,
    		l: "そろえる"
    	},
    	{
    		r: 8850,
    		f: 5.02,
    		l: "種々"
    	},
    	{
    		r: 8851,
    		f: 5.02,
    		l: "ベランダ"
    	},
    	{
    		r: 8852,
    		f: 5.02,
    		l: "アドバイザー"
    	},
    	{
    		r: 8853,
    		f: 5.02,
    		l: "糖"
    	},
    	{
    		r: 8854,
    		f: 5.02,
    		l: "漬け"
    	},
    	{
    		r: 8855,
    		f: 5.02,
    		l: "猶予"
    	},
    	{
    		r: 8856,
    		f: 5.02,
    		l: "詞"
    	},
    	{
    		r: 8857,
    		f: 5.02,
    		l: "開花"
    	},
    	{
    		r: 8858,
    		f: 5.02,
    		l: "洪水"
    	},
    	{
    		r: 8859,
    		f: 5.02,
    		l: "起用"
    	},
    	{
    		r: 8860,
    		f: 5.02,
    		l: "一通り"
    	},
    	{
    		r: 8861,
    		f: 5.01,
    		l: "球場"
    	},
    	{
    		r: 8862,
    		f: 5.01,
    		l: "内科"
    	},
    	{
    		r: 8863,
    		f: 5.01,
    		l: "シニア"
    	},
    	{
    		r: 8864,
    		f: 5.01,
    		l: "瀬"
    	},
    	{
    		r: 8865,
    		f: 5.01,
    		l: "潜む"
    	},
    	{
    		r: 8866,
    		f: 5.01,
    		l: "体育館"
    	},
    	{
    		r: 8867,
    		f: 5.01,
    		l: "あれだけ"
    	},
    	{
    		r: 8868,
    		f: 5.01,
    		l: "物足りない"
    	},
    	{
    		r: 8869,
    		f: 5.01,
    		l: "おきる"
    	},
    	{
    		r: 8870,
    		f: 5.01,
    		l: "仕入れる"
    	},
    	{
    		r: 8871,
    		f: 5.01,
    		l: "下げ"
    	},
    	{
    		r: 8872,
    		f: 5.01,
    		l: "先立つ"
    	},
    	{
    		r: 8873,
    		f: 5.01,
    		l: "交通省"
    	},
    	{
    		r: 8874,
    		f: 5.01,
    		l: "合致"
    	},
    	{
    		r: 8875,
    		f: 5.01,
    		l: "マインド"
    	},
    	{
    		r: 8876,
    		f: 5,
    		l: "つきあう"
    	},
    	{
    		r: 8877,
    		f: 5,
    		l: "なにやら"
    	},
    	{
    		r: 8878,
    		f: 5,
    		l: "大人気"
    	},
    	{
    		r: 8879,
    		f: 5,
    		l: "智"
    	},
    	{
    		r: 8880,
    		f: 5,
    		l: "しみじみ"
    	},
    	{
    		r: 8881,
    		f: 5,
    		l: "燃やす"
    	},
    	{
    		r: 8882,
    		f: 5,
    		l: "止め"
    	},
    	{
    		r: 8883,
    		f: 5,
    		l: "岩波"
    	},
    	{
    		r: 8884,
    		f: 5,
    		l: "切"
    	},
    	{
    		r: 8885,
    		f: 5,
    		l: "三角"
    	},
    	{
    		r: 8886,
    		f: 4.99,
    		l: "ウォン"
    	},
    	{
    		r: 8887,
    		f: 4.99,
    		l: "あらわす"
    	},
    	{
    		r: 8888,
    		f: 4.99,
    		l: "リック"
    	},
    	{
    		r: 8889,
    		f: 4.99,
    		l: "快楽"
    	},
    	{
    		r: 8890,
    		f: 4.99,
    		l: "力学"
    	},
    	{
    		r: 8891,
    		f: 4.99,
    		l: "ナシ"
    	},
    	{
    		r: 8892,
    		f: 4.99,
    		l: "朗読"
    	},
    	{
    		r: 8893,
    		f: 4.99,
    		l: "部落"
    	},
    	{
    		r: 8894,
    		f: 4.99,
    		l: "ボブ"
    	},
    	{
    		r: 8895,
    		f: 4.99,
    		l: "ヘリ"
    	},
    	{
    		r: 8896,
    		f: 4.99,
    		l: "ヲ"
    	},
    	{
    		r: 8897,
    		f: 4.98,
    		l: "油断"
    	},
    	{
    		r: 8898,
    		f: 4.98,
    		l: "神学"
    	},
    	{
    		r: 8899,
    		f: 4.98,
    		l: "乱暴"
    	},
    	{
    		r: 8900,
    		f: 4.98,
    		l: "すける"
    	},
    	{
    		r: 8901,
    		f: 4.98,
    		l: "ダイヤモンド"
    	},
    	{
    		r: 8902,
    		f: 4.97,
    		l: "音質"
    	},
    	{
    		r: 8903,
    		f: 4.97,
    		l: "ウッド"
    	},
    	{
    		r: 8904,
    		f: 4.97,
    		l: "慣習"
    	},
    	{
    		r: 8905,
    		f: 4.97,
    		l: "ラマ"
    	},
    	{
    		r: 8906,
    		f: 4.97,
    		l: "連れ"
    	},
    	{
    		r: 8907,
    		f: 4.97,
    		l: "神殿"
    	},
    	{
    		r: 8908,
    		f: 4.97,
    		l: "道のり"
    	},
    	{
    		r: 8909,
    		f: 4.97,
    		l: "法規"
    	},
    	{
    		r: 8910,
    		f: 4.97,
    		l: "目線"
    	},
    	{
    		r: 8911,
    		f: 4.97,
    		l: "紅葉"
    	},
    	{
    		r: 8912,
    		f: 4.97,
    		l: "思い浮かべる"
    	},
    	{
    		r: 8913,
    		f: 4.97,
    		l: "争点"
    	},
    	{
    		r: 8914,
    		f: 4.97,
    		l: "ハッ"
    	},
    	{
    		r: 8915,
    		f: 4.97,
    		l: "物流"
    	},
    	{
    		r: 8916,
    		f: 4.96,
    		l: "入浴"
    	},
    	{
    		r: 8917,
    		f: 4.96,
    		l: "厳選"
    	},
    	{
    		r: 8918,
    		f: 4.96,
    		l: "ワイヤレス"
    	},
    	{
    		r: 8919,
    		f: 4.96,
    		l: "合衆国"
    	},
    	{
    		r: 8920,
    		f: 4.96,
    		l: "送り出す"
    	},
    	{
    		r: 8921,
    		f: 4.96,
    		l: "医院"
    	},
    	{
    		r: 8922,
    		f: 4.96,
    		l: "輝き"
    	},
    	{
    		r: 8923,
    		f: 4.96,
    		l: "打ち上げる"
    	},
    	{
    		r: 8924,
    		f: 4.96,
    		l: "漏れ"
    	},
    	{
    		r: 8925,
    		f: 4.96,
    		l: "立ち向かう"
    	},
    	{
    		r: 8926,
    		f: 4.96,
    		l: "撤回"
    	},
    	{
    		r: 8927,
    		f: 4.96,
    		l: "君たち"
    	},
    	{
    		r: 8928,
    		f: 4.96,
    		l: "何もかも"
    	},
    	{
    		r: 8929,
    		f: 4.95,
    		l: "積み重ねる"
    	},
    	{
    		r: 8930,
    		f: 4.95,
    		l: "税収"
    	},
    	{
    		r: 8931,
    		f: 4.95,
    		l: "レーニン"
    	},
    	{
    		r: 8932,
    		f: 4.95,
    		l: "まかせる"
    	},
    	{
    		r: 8933,
    		f: 4.95,
    		l: "小島"
    	},
    	{
    		r: 8934,
    		f: 4.94,
    		l: "いむ"
    	},
    	{
    		r: 8935,
    		f: 4.94,
    		l: "処罰"
    	},
    	{
    		r: 8936,
    		f: 4.94,
    		l: "グラウンド"
    	},
    	{
    		r: 8937,
    		f: 4.94,
    		l: "採取"
    	},
    	{
    		r: 8938,
    		f: 4.94,
    		l: "と同時に"
    	},
    	{
    		r: 8939,
    		f: 4.94,
    		l: "義務づける"
    	},
    	{
    		r: 8940,
    		f: 4.94,
    		l: "手書き"
    	},
    	{
    		r: 8941,
    		f: 4.94,
    		l: "フラ"
    	},
    	{
    		r: 8942,
    		f: 4.94,
    		l: "無理やり"
    	},
    	{
    		r: 8943,
    		f: 4.94,
    		l: "ミネラル"
    	},
    	{
    		r: 8944,
    		f: 4.94,
    		l: "ピザ"
    	},
    	{
    		r: 8945,
    		f: 4.94,
    		l: "甘える"
    	},
    	{
    		r: 8946,
    		f: 4.94,
    		l: "準決勝"
    	},
    	{
    		r: 8947,
    		f: 4.94,
    		l: "在籍"
    	},
    	{
    		r: 8948,
    		f: 4.94,
    		l: "帰属"
    	},
    	{
    		r: 8949,
    		f: 4.94,
    		l: "踏み出す"
    	},
    	{
    		r: 8950,
    		f: 4.94,
    		l: "どる"
    	},
    	{
    		r: 8951,
    		f: 4.94,
    		l: "集う"
    	},
    	{
    		r: 8952,
    		f: 4.94,
    		l: "経常"
    	},
    	{
    		r: 8953,
    		f: 4.93,
    		l: "初頭"
    	},
    	{
    		r: 8954,
    		f: 4.93,
    		l: "頼り"
    	},
    	{
    		r: 8955,
    		f: 4.93,
    		l: "申込む"
    	},
    	{
    		r: 8956,
    		f: 4.93,
    		l: "レール"
    	},
    	{
    		r: 8957,
    		f: 4.93,
    		l: "ざっと"
    	},
    	{
    		r: 8958,
    		f: 4.93,
    		l: "覚え"
    	},
    	{
    		r: 8959,
    		f: 4.93,
    		l: "ゆえに"
    	},
    	{
    		r: 8960,
    		f: 4.93,
    		l: "冷める"
    	},
    	{
    		r: 8961,
    		f: 4.93,
    		l: "法学部"
    	},
    	{
    		r: 8962,
    		f: 4.93,
    		l: "東部"
    	},
    	{
    		r: 8963,
    		f: 4.93,
    		l: "巨額"
    	},
    	{
    		r: 8964,
    		f: 4.92,
    		l: "切断"
    	},
    	{
    		r: 8965,
    		f: 4.92,
    		l: "罰則"
    	},
    	{
    		r: 8966,
    		f: 4.92,
    		l: "インデックス"
    	},
    	{
    		r: 8967,
    		f: 4.92,
    		l: "嫌がる"
    	},
    	{
    		r: 8968,
    		f: 4.92,
    		l: "内心"
    	},
    	{
    		r: 8969,
    		f: 4.92,
    		l: "成す"
    	},
    	{
    		r: 8970,
    		f: 4.92,
    		l: "尊厳"
    	},
    	{
    		r: 8971,
    		f: 4.92,
    		l: "校舎"
    	},
    	{
    		r: 8972,
    		f: 4.92,
    		l: "ばれる"
    	},
    	{
    		r: 8973,
    		f: 4.92,
    		l: "猪瀬"
    	},
    	{
    		r: 8974,
    		f: 4.92,
    		l: "ドライ"
    	},
    	{
    		r: 8975,
    		f: 4.92,
    		l: "敗退"
    	},
    	{
    		r: 8976,
    		f: 4.92,
    		l: "さわやか"
    	},
    	{
    		r: 8977,
    		f: 4.92,
    		l: "地形"
    	},
    	{
    		r: 8978,
    		f: 4.92,
    		l: "静"
    	},
    	{
    		r: 8979,
    		f: 4.91,
    		l: "和歌山"
    	},
    	{
    		r: 8980,
    		f: 4.91,
    		l: "大野"
    	},
    	{
    		r: 8981,
    		f: 4.91,
    		l: "不祥事"
    	},
    	{
    		r: 8982,
    		f: 4.91,
    		l: "張"
    	},
    	{
    		r: 8983,
    		f: 4.91,
    		l: "目玉"
    	},
    	{
    		r: 8984,
    		f: 4.91,
    		l: "起因"
    	},
    	{
    		r: 8985,
    		f: 4.91,
    		l: "ネガティブ"
    	},
    	{
    		r: 8986,
    		f: 4.9,
    		l: "絆"
    	},
    	{
    		r: 8987,
    		f: 4.9,
    		l: "プレート"
    	},
    	{
    		r: 8988,
    		f: 4.9,
    		l: "南京"
    	},
    	{
    		r: 8989,
    		f: 4.9,
    		l: "カエル"
    	},
    	{
    		r: 8990,
    		f: 4.9,
    		l: "暗示"
    	},
    	{
    		r: 8991,
    		f: 4.9,
    		l: "女子高"
    	},
    	{
    		r: 8992,
    		f: 4.9,
    		l: "レモン"
    	},
    	{
    		r: 8993,
    		f: 4.9,
    		l: "規律"
    	},
    	{
    		r: 8994,
    		f: 4.9,
    		l: "見当"
    	},
    	{
    		r: 8995,
    		f: 4.9,
    		l: "女房"
    	},
    	{
    		r: 8996,
    		f: 4.9,
    		l: "優雅"
    	},
    	{
    		r: 8997,
    		f: 4.9,
    		l: "留める"
    	},
    	{
    		r: 8998,
    		f: 4.9,
    		l: "敵対"
    	},
    	{
    		r: 8999,
    		f: 4.9,
    		l: "シドニー"
    	},
    	{
    		r: 9000,
    		f: 4.9,
    		l: "聴ける"
    	},
    	{
    		r: 9001,
    		f: 4.9,
    		l: "ヒアリング"
    	},
    	{
    		r: 9002,
    		f: 4.9,
    		l: "気持ちいい"
    	},
    	{
    		r: 9003,
    		f: 4.9,
    		l: "おわる"
    	},
    	{
    		r: 9004,
    		f: 4.9,
    		l: "償還"
    	},
    	{
    		r: 9005,
    		f: 4.89,
    		l: "ＰＲ"
    	},
    	{
    		r: 9006,
    		f: 4.89,
    		l: "スリ"
    	},
    	{
    		r: 9007,
    		f: 4.89,
    		l: "驚かす"
    	},
    	{
    		r: 9008,
    		f: 4.89,
    		l: "ぽん"
    	},
    	{
    		r: 9009,
    		f: 4.89,
    		l: "全日本"
    	},
    	{
    		r: 9010,
    		f: 4.89,
    		l: "帰り道"
    	},
    	{
    		r: 9011,
    		f: 4.89,
    		l: "つとめる"
    	},
    	{
    		r: 9012,
    		f: 4.89,
    		l: "バレエ"
    	},
    	{
    		r: 9013,
    		f: 4.88,
    		l: "町内"
    	},
    	{
    		r: 9014,
    		f: 4.88,
    		l: "ほほ"
    	},
    	{
    		r: 9015,
    		f: 4.88,
    		l: "写す"
    	},
    	{
    		r: 9016,
    		f: 4.88,
    		l: "昇る"
    	},
    	{
    		r: 9017,
    		f: 4.88,
    		l: "税務"
    	},
    	{
    		r: 9018,
    		f: 4.88,
    		l: "工法"
    	},
    	{
    		r: 9019,
    		f: 4.88,
    		l: "デメリット"
    	},
    	{
    		r: 9020,
    		f: 4.88,
    		l: "肖像"
    	},
    	{
    		r: 9021,
    		f: 4.88,
    		l: "もも"
    	},
    	{
    		r: 9022,
    		f: 4.88,
    		l: "知らす"
    	},
    	{
    		r: 9023,
    		f: 4.88,
    		l: "外食"
    	},
    	{
    		r: 9024,
    		f: 4.88,
    		l: "モーター"
    	},
    	{
    		r: 9025,
    		f: 4.88,
    		l: "クリス"
    	},
    	{
    		r: 9026,
    		f: 4.88,
    		l: "キープ"
    	},
    	{
    		r: 9027,
    		f: 4.88,
    		l: "奏者"
    	},
    	{
    		r: 9028,
    		f: 4.88,
    		l: "所見"
    	},
    	{
    		r: 9029,
    		f: 4.88,
    		l: "区間"
    	},
    	{
    		r: 9030,
    		f: 4.88,
    		l: "ハンガリー"
    	},
    	{
    		r: 9031,
    		f: 4.88,
    		l: "浮かび上がる"
    	},
    	{
    		r: 9032,
    		f: 4.87,
    		l: "うま"
    	},
    	{
    		r: 9033,
    		f: 4.87,
    		l: "解剖"
    	},
    	{
    		r: 9034,
    		f: 4.87,
    		l: "威力"
    	},
    	{
    		r: 9035,
    		f: 4.87,
    		l: "永"
    	},
    	{
    		r: 9036,
    		f: 4.87,
    		l: "異論"
    	},
    	{
    		r: 9037,
    		f: 4.87,
    		l: "ビジネスマン"
    	},
    	{
    		r: 9038,
    		f: 4.87,
    		l: "ビートルズ"
    	},
    	{
    		r: 9039,
    		f: 4.87,
    		l: "翌"
    	},
    	{
    		r: 9040,
    		f: 4.87,
    		l: "儲け"
    	},
    	{
    		r: 9041,
    		f: 4.86,
    		l: "市街"
    	},
    	{
    		r: 9042,
    		f: 4.86,
    		l: "持ち歩く"
    	},
    	{
    		r: 9043,
    		f: 4.86,
    		l: "飾り"
    	},
    	{
    		r: 9044,
    		f: 4.86,
    		l: "肥満"
    	},
    	{
    		r: 9045,
    		f: 4.86,
    		l: "恵"
    	},
    	{
    		r: 9046,
    		f: 4.86,
    		l: "人事院"
    	},
    	{
    		r: 9047,
    		f: 4.86,
    		l: "拳"
    	},
    	{
    		r: 9048,
    		f: 4.86,
    		l: "キャベツ"
    	},
    	{
    		r: 9049,
    		f: 4.86,
    		l: "エキサイト"
    	},
    	{
    		r: 9050,
    		f: 4.86,
    		l: "深"
    	},
    	{
    		r: 9051,
    		f: 4.85,
    		l: "らっしゃる"
    	},
    	{
    		r: 9052,
    		f: 4.85,
    		l: "余分"
    	},
    	{
    		r: 9053,
    		f: 4.85,
    		l: "無難"
    	},
    	{
    		r: 9054,
    		f: 4.85,
    		l: "転"
    	},
    	{
    		r: 9055,
    		f: 4.85,
    		l: "成し遂げる"
    	},
    	{
    		r: 9056,
    		f: 4.85,
    		l: "一晩"
    	},
    	{
    		r: 9057,
    		f: 4.85,
    		l: "断定"
    	},
    	{
    		r: 9058,
    		f: 4.85,
    		l: "誉める"
    	},
    	{
    		r: 9059,
    		f: 4.85,
    		l: "ヶ所"
    	},
    	{
    		r: 9060,
    		f: 4.85,
    		l: "たがる"
    	},
    	{
    		r: 9061,
    		f: 4.85,
    		l: "ドラえもん"
    	},
    	{
    		r: 9062,
    		f: 4.85,
    		l: "帰れる"
    	},
    	{
    		r: 9063,
    		f: 4.85,
    		l: "銀河"
    	},
    	{
    		r: 9064,
    		f: 4.84,
    		l: "昭"
    	},
    	{
    		r: 9065,
    		f: 4.84,
    		l: "現す"
    	},
    	{
    		r: 9066,
    		f: 4.84,
    		l: "満開"
    	},
    	{
    		r: 9067,
    		f: 4.84,
    		l: "野外"
    	},
    	{
    		r: 9068,
    		f: 4.84,
    		l: "こん"
    	},
    	{
    		r: 9069,
    		f: 4.84,
    		l: "妖精"
    	},
    	{
    		r: 9070,
    		f: 4.84,
    		l: "薦める"
    	},
    	{
    		r: 9071,
    		f: 4.84,
    		l: "片"
    	},
    	{
    		r: 9072,
    		f: 4.84,
    		l: "爽やか"
    	},
    	{
    		r: 9073,
    		f: 4.84,
    		l: "薄"
    	},
    	{
    		r: 9074,
    		f: 4.84,
    		l: "追放"
    	},
    	{
    		r: 9075,
    		f: 4.84,
    		l: "高田"
    	},
    	{
    		r: 9076,
    		f: 4.84,
    		l: "探求"
    	},
    	{
    		r: 9077,
    		f: 4.84,
    		l: "加算"
    	},
    	{
    		r: 9078,
    		f: 4.83,
    		l: "運動会"
    	},
    	{
    		r: 9079,
    		f: 4.83,
    		l: "便り"
    	},
    	{
    		r: 9080,
    		f: 4.83,
    		l: "真っ白"
    	},
    	{
    		r: 9081,
    		f: 4.83,
    		l: "湘南"
    	},
    	{
    		r: 9082,
    		f: 4.83,
    		l: "農林省"
    	},
    	{
    		r: 9083,
    		f: 4.83,
    		l: "家内"
    	},
    	{
    		r: 9084,
    		f: 4.83,
    		l: "博多"
    	},
    	{
    		r: 9085,
    		f: 4.83,
    		l: "ぬる"
    	},
    	{
    		r: 9086,
    		f: 4.83,
    		l: "プログラマ"
    	},
    	{
    		r: 9087,
    		f: 4.83,
    		l: "扶助"
    	},
    	{
    		r: 9088,
    		f: 4.83,
    		l: "取組"
    	},
    	{
    		r: 9089,
    		f: 4.83,
    		l: "格闘技"
    	},
    	{
    		r: 9090,
    		f: 4.83,
    		l: "声優"
    	},
    	{
    		r: 9091,
    		f: 4.83,
    		l: "出回る"
    	},
    	{
    		r: 9092,
    		f: 4.82,
    		l: "冷やす"
    	},
    	{
    		r: 9093,
    		f: 4.82,
    		l: "華やか"
    	},
    	{
    		r: 9094,
    		f: 4.82,
    		l: "リーディング"
    	},
    	{
    		r: 9095,
    		f: 4.82,
    		l: "ナショナリズム"
    	},
    	{
    		r: 9096,
    		f: 4.82,
    		l: "プラザ"
    	},
    	{
    		r: 9097,
    		f: 4.82,
    		l: "墓地"
    	},
    	{
    		r: 9098,
    		f: 4.82,
    		l: "強行"
    	},
    	{
    		r: 9099,
    		f: 4.82,
    		l: "絶える"
    	},
    	{
    		r: 9100,
    		f: 4.82,
    		l: "近づける"
    	},
    	{
    		r: 9101,
    		f: 4.82,
    		l: "忍耐"
    	},
    	{
    		r: 9102,
    		f: 4.82,
    		l: "風水"
    	},
    	{
    		r: 9103,
    		f: 4.82,
    		l: "けっして"
    	},
    	{
    		r: 9104,
    		f: 4.82,
    		l: "月額"
    	},
    	{
    		r: 9105,
    		f: 4.82,
    		l: "無関心"
    	},
    	{
    		r: 9106,
    		f: 4.82,
    		l: "御礼"
    	},
    	{
    		r: 9107,
    		f: 4.82,
    		l: "シアター"
    	},
    	{
    		r: 9108,
    		f: 4.82,
    		l: "回戦"
    	},
    	{
    		r: 9109,
    		f: 4.82,
    		l: "ドリーム"
    	},
    	{
    		r: 9110,
    		f: 4.82,
    		l: "スキャン"
    	},
    	{
    		r: 9111,
    		f: 4.81,
    		l: "作物"
    	},
    	{
    		r: 9112,
    		f: 4.81,
    		l: "団地"
    	},
    	{
    		r: 9113,
    		f: 4.81,
    		l: "褒美"
    	},
    	{
    		r: 9114,
    		f: 4.81,
    		l: "枯れる"
    	},
    	{
    		r: 9115,
    		f: 4.81,
    		l: "濃厚"
    	},
    	{
    		r: 9116,
    		f: 4.81,
    		l: "有権者"
    	},
    	{
    		r: 9117,
    		f: 4.81,
    		l: "積み上げる"
    	},
    	{
    		r: 9118,
    		f: 4.81,
    		l: "受容"
    	},
    	{
    		r: 9119,
    		f: 4.8,
    		l: "採決"
    	},
    	{
    		r: 9120,
    		f: 4.8,
    		l: "無用"
    	},
    	{
    		r: 9121,
    		f: 4.8,
    		l: "駆る"
    	},
    	{
    		r: 9122,
    		f: 4.8,
    		l: "上流"
    	},
    	{
    		r: 9123,
    		f: 4.8,
    		l: "拭く"
    	},
    	{
    		r: 9124,
    		f: 4.8,
    		l: "カタカナ"
    	},
    	{
    		r: 9125,
    		f: 4.8,
    		l: "鳥取"
    	},
    	{
    		r: 9126,
    		f: 4.8,
    		l: "電圧"
    	},
    	{
    		r: 9127,
    		f: 4.8,
    		l: "逃げ出す"
    	},
    	{
    		r: 9128,
    		f: 4.79,
    		l: "パラメータ"
    	},
    	{
    		r: 9129,
    		f: 4.79,
    		l: "自民"
    	},
    	{
    		r: 9130,
    		f: 4.79,
    		l: "でかける"
    	},
    	{
    		r: 9131,
    		f: 4.79,
    		l: "シネマ"
    	},
    	{
    		r: 9132,
    		f: 4.79,
    		l: "線路"
    	},
    	{
    		r: 9133,
    		f: 4.79,
    		l: "催す"
    	},
    	{
    		r: 9134,
    		f: 4.79,
    		l: "サーフィン"
    	},
    	{
    		r: 9135,
    		f: 4.79,
    		l: "納豆"
    	},
    	{
    		r: 9136,
    		f: 4.79,
    		l: "マネ"
    	},
    	{
    		r: 9137,
    		f: 4.79,
    		l: "配送"
    	},
    	{
    		r: 9138,
    		f: 4.79,
    		l: "食器"
    	},
    	{
    		r: 9139,
    		f: 4.79,
    		l: "最高裁判所"
    	},
    	{
    		r: 9140,
    		f: 4.79,
    		l: "遠征"
    	},
    	{
    		r: 9141,
    		f: 4.79,
    		l: "積もる"
    	},
    	{
    		r: 9142,
    		f: 4.79,
    		l: "トピックス"
    	},
    	{
    		r: 9143,
    		f: 4.79,
    		l: "つぶれる"
    	},
    	{
    		r: 9144,
    		f: 4.79,
    		l: "ライス"
    	},
    	{
    		r: 9145,
    		f: 4.78,
    		l: "ビラ"
    	},
    	{
    		r: 9146,
    		f: 4.78,
    		l: "手足"
    	},
    	{
    		r: 9147,
    		f: 4.78,
    		l: "ウィリアム"
    	},
    	{
    		r: 9148,
    		f: 4.78,
    		l: "回想"
    	},
    	{
    		r: 9149,
    		f: 4.78,
    		l: "めったに"
    	},
    	{
    		r: 9150,
    		f: 4.78,
    		l: "ただただ"
    	},
    	{
    		r: 9151,
    		f: 4.78,
    		l: "芸人"
    	},
    	{
    		r: 9152,
    		f: 4.78,
    		l: "愉快"
    	},
    	{
    		r: 9153,
    		f: 4.78,
    		l: "やす"
    	},
    	{
    		r: 9154,
    		f: 4.78,
    		l: "シャンプー"
    	},
    	{
    		r: 9155,
    		f: 4.78,
    		l: "越し"
    	},
    	{
    		r: 9156,
    		f: 4.78,
    		l: "盾"
    	},
    	{
    		r: 9157,
    		f: 4.78,
    		l: "名曲"
    	},
    	{
    		r: 9158,
    		f: 4.77,
    		l: "カレッジ"
    	},
    	{
    		r: 9159,
    		f: 4.77,
    		l: "図式"
    	},
    	{
    		r: 9160,
    		f: 4.77,
    		l: "詰め"
    	},
    	{
    		r: 9161,
    		f: 4.77,
    		l: "接客"
    	},
    	{
    		r: 9162,
    		f: 4.77,
    		l: "唄"
    	},
    	{
    		r: 9163,
    		f: 4.77,
    		l: "徳島"
    	},
    	{
    		r: 9164,
    		f: 4.77,
    		l: "懸命"
    	},
    	{
    		r: 9165,
    		f: 4.77,
    		l: "薫"
    	},
    	{
    		r: 9166,
    		f: 4.77,
    		l: "なんらかの"
    	},
    	{
    		r: 9167,
    		f: 4.77,
    		l: "喰う"
    	},
    	{
    		r: 9168,
    		f: 4.77,
    		l: "併用"
    	},
    	{
    		r: 9169,
    		f: 4.77,
    		l: "平凡"
    	},
    	{
    		r: 9170,
    		f: 4.77,
    		l: "働きかける"
    	},
    	{
    		r: 9171,
    		f: 4.77,
    		l: "わる"
    	},
    	{
    		r: 9172,
    		f: 4.76,
    		l: "時価"
    	},
    	{
    		r: 9173,
    		f: 4.76,
    		l: "少い"
    	},
    	{
    		r: 9174,
    		f: 4.76,
    		l: "刺身"
    	},
    	{
    		r: 9175,
    		f: 4.76,
    		l: "下降"
    	},
    	{
    		r: 9176,
    		f: 4.76,
    		l: "ピラミッド"
    	},
    	{
    		r: 9177,
    		f: 4.76,
    		l: "仮名"
    	},
    	{
    		r: 9178,
    		f: 4.76,
    		l: "インテル"
    	},
    	{
    		r: 9179,
    		f: 4.76,
    		l: "タコ"
    	},
    	{
    		r: 9180,
    		f: 4.76,
    		l: "ロイヤル"
    	},
    	{
    		r: 9181,
    		f: 4.76,
    		l: "面す"
    	},
    	{
    		r: 9182,
    		f: 4.75,
    		l: "ぞう"
    	},
    	{
    		r: 9183,
    		f: 4.75,
    		l: "レーベル"
    	},
    	{
    		r: 9184,
    		f: 4.75,
    		l: "政治家"
    	},
    	{
    		r: 9185,
    		f: 4.75,
    		l: "戦犯"
    	},
    	{
    		r: 9186,
    		f: 4.75,
    		l: "評"
    	},
    	{
    		r: 9187,
    		f: 4.75,
    		l: "デッキ"
    	},
    	{
    		r: 9188,
    		f: 4.75,
    		l: "リース"
    	},
    	{
    		r: 9189,
    		f: 4.75,
    		l: "彩"
    	},
    	{
    		r: 9190,
    		f: 4.75,
    		l: "翌朝"
    	},
    	{
    		r: 9191,
    		f: 4.75,
    		l: "迄"
    	},
    	{
    		r: 9192,
    		f: 4.75,
    		l: "詰"
    	},
    	{
    		r: 9193,
    		f: 4.75,
    		l: "改修"
    	},
    	{
    		r: 9194,
    		f: 4.75,
    		l: "遠隔"
    	},
    	{
    		r: 9195,
    		f: 4.74,
    		l: "拠出"
    	},
    	{
    		r: 9196,
    		f: 4.74,
    		l: "考古学"
    	},
    	{
    		r: 9197,
    		f: 4.74,
    		l: "危惧"
    	},
    	{
    		r: 9198,
    		f: 4.74,
    		l: "純正"
    	},
    	{
    		r: 9199,
    		f: 4.74,
    		l: "コス"
    	},
    	{
    		r: 9200,
    		f: 4.74,
    		l: "蛙"
    	},
    	{
    		r: 9201,
    		f: 4.74,
    		l: "上旬"
    	},
    	{
    		r: 9202,
    		f: 4.73,
    		l: "大家"
    	},
    	{
    		r: 9203,
    		f: 4.73,
    		l: "入金"
    	},
    	{
    		r: 9204,
    		f: 4.73,
    		l: "粒子"
    	},
    	{
    		r: 9205,
    		f: 4.73,
    		l: "わがまま"
    	},
    	{
    		r: 9206,
    		f: 4.73,
    		l: "転ぶ"
    	},
    	{
    		r: 9207,
    		f: 4.73,
    		l: "閉店"
    	},
    	{
    		r: 9208,
    		f: 4.73,
    		l: "百貨店"
    	},
    	{
    		r: 9209,
    		f: 4.73,
    		l: "官邸"
    	},
    	{
    		r: 9210,
    		f: 4.73,
    		l: "悟る"
    	},
    	{
    		r: 9211,
    		f: 4.73,
    		l: "たびたび"
    	},
    	{
    		r: 9212,
    		f: 4.73,
    		l: "不完全"
    	},
    	{
    		r: 9213,
    		f: 4.73,
    		l: "そいつ"
    	},
    	{
    		r: 9214,
    		f: 4.73,
    		l: "配備"
    	},
    	{
    		r: 9215,
    		f: 4.73,
    		l: "パチ"
    	},
    	{
    		r: 9216,
    		f: 4.73,
    		l: "やけど"
    	},
    	{
    		r: 9217,
    		f: 4.72,
    		l: "閉まる"
    	},
    	{
    		r: 9218,
    		f: 4.72,
    		l: "クッキー"
    	},
    	{
    		r: 9219,
    		f: 4.72,
    		l: "善意"
    	},
    	{
    		r: 9220,
    		f: 4.72,
    		l: "函"
    	},
    	{
    		r: 9221,
    		f: 4.72,
    		l: "予め"
    	},
    	{
    		r: 9222,
    		f: 4.72,
    		l: "聡"
    	},
    	{
    		r: 9223,
    		f: 4.72,
    		l: "日の丸"
    	},
    	{
    		r: 9224,
    		f: 4.71,
    		l: "ミラノ"
    	},
    	{
    		r: 9225,
    		f: 4.71,
    		l: "馬券"
    	},
    	{
    		r: 9226,
    		f: 4.71,
    		l: "礼"
    	},
    	{
    		r: 9227,
    		f: 4.71,
    		l: "綿"
    	},
    	{
    		r: 9228,
    		f: 4.71,
    		l: "万が一"
    	},
    	{
    		r: 9229,
    		f: 4.71,
    		l: "若年"
    	},
    	{
    		r: 9230,
    		f: 4.71,
    		l: "命題"
    	},
    	{
    		r: 9231,
    		f: 4.71,
    		l: "湿る"
    	},
    	{
    		r: 9232,
    		f: 4.71,
    		l: "ハッカー"
    	},
    	{
    		r: 9233,
    		f: 4.71,
    		l: "先程"
    	},
    	{
    		r: 9234,
    		f: 4.7,
    		l: "広範"
    	},
    	{
    		r: 9235,
    		f: 4.7,
    		l: "価"
    	},
    	{
    		r: 9236,
    		f: 4.7,
    		l: "民家"
    	},
    	{
    		r: 9237,
    		f: 4.7,
    		l: "松山"
    	},
    	{
    		r: 9238,
    		f: 4.7,
    		l: "っきり"
    	},
    	{
    		r: 9239,
    		f: 4.7,
    		l: "プロセッサ"
    	},
    	{
    		r: 9240,
    		f: 4.7,
    		l: "精"
    	},
    	{
    		r: 9241,
    		f: 4.7,
    		l: "焼肉"
    	},
    	{
    		r: 9242,
    		f: 4.69,
    		l: "法学"
    	},
    	{
    		r: 9243,
    		f: 4.69,
    		l: "狂気"
    	},
    	{
    		r: 9244,
    		f: 4.69,
    		l: "洞"
    	},
    	{
    		r: 9245,
    		f: 4.69,
    		l: "ゴールデン"
    	},
    	{
    		r: 9246,
    		f: 4.69,
    		l: "暗闇"
    	},
    	{
    		r: 9247,
    		f: 4.69,
    		l: "筆頭"
    	},
    	{
    		r: 9248,
    		f: 4.69,
    		l: "創価学会"
    	},
    	{
    		r: 9249,
    		f: 4.69,
    		l: "レコーダー"
    	},
    	{
    		r: 9250,
    		f: 4.69,
    		l: "撮れる"
    	},
    	{
    		r: 9251,
    		f: 4.68,
    		l: "水槽"
    	},
    	{
    		r: 9252,
    		f: 4.68,
    		l: "返品"
    	},
    	{
    		r: 9253,
    		f: 4.68,
    		l: "採算"
    	},
    	{
    		r: 9254,
    		f: 4.68,
    		l: "籠"
    	},
    	{
    		r: 9255,
    		f: 4.68,
    		l: "押しつける"
    	},
    	{
    		r: 9256,
    		f: 4.68,
    		l: "フラン"
    	},
    	{
    		r: 9257,
    		f: 4.68,
    		l: "上院"
    	},
    	{
    		r: 9258,
    		f: 4.68,
    		l: "焼"
    	},
    	{
    		r: 9259,
    		f: 4.68,
    		l: "暗記"
    	},
    	{
    		r: 9260,
    		f: 4.68,
    		l: "いくらか"
    	},
    	{
    		r: 9261,
    		f: 4.68,
    		l: "爆破"
    	},
    	{
    		r: 9262,
    		f: 4.68,
    		l: "出動"
    	},
    	{
    		r: 9263,
    		f: 4.68,
    		l: "ソフトウエア"
    	},
    	{
    		r: 9264,
    		f: 4.68,
    		l: "動揺"
    	},
    	{
    		r: 9265,
    		f: 4.68,
    		l: "結城"
    	},
    	{
    		r: 9266,
    		f: 4.68,
    		l: "音源"
    	},
    	{
    		r: 9267,
    		f: 4.68,
    		l: "銅"
    	},
    	{
    		r: 9268,
    		f: 4.67,
    		l: "ピアニスト"
    	},
    	{
    		r: 9269,
    		f: 4.67,
    		l: "着陸"
    	},
    	{
    		r: 9270,
    		f: 4.67,
    		l: "捏造"
    	},
    	{
    		r: 9271,
    		f: 4.67,
    		l: "星野"
    	},
    	{
    		r: 9272,
    		f: 4.67,
    		l: "耐久"
    	},
    	{
    		r: 9273,
    		f: 4.67,
    		l: "資材"
    	},
    	{
    		r: 9274,
    		f: 4.67,
    		l: "講"
    	},
    	{
    		r: 9275,
    		f: 4.67,
    		l: "無力"
    	},
    	{
    		r: 9276,
    		f: 4.67,
    		l: "教諭"
    	},
    	{
    		r: 9277,
    		f: 4.67,
    		l: "みかん"
    	},
    	{
    		r: 9278,
    		f: 4.67,
    		l: "小道具"
    	},
    	{
    		r: 9279,
    		f: 4.67,
    		l: "ネクタイ"
    	},
    	{
    		r: 9280,
    		f: 4.67,
    		l: "お宅"
    	},
    	{
    		r: 9281,
    		f: 4.67,
    		l: "もち"
    	},
    	{
    		r: 9282,
    		f: 4.67,
    		l: "強要"
    	},
    	{
    		r: 9283,
    		f: 4.67,
    		l: "名人"
    	},
    	{
    		r: 9284,
    		f: 4.67,
    		l: "言説"
    	},
    	{
    		r: 9285,
    		f: 4.66,
    		l: "大工"
    	},
    	{
    		r: 9286,
    		f: 4.66,
    		l: "差し上げる"
    	},
    	{
    		r: 9287,
    		f: 4.66,
    		l: "いっそ"
    	},
    	{
    		r: 9288,
    		f: 4.66,
    		l: "ナノ"
    	},
    	{
    		r: 9289,
    		f: 4.66,
    		l: "はん"
    	},
    	{
    		r: 9290,
    		f: 4.66,
    		l: "内訳"
    	},
    	{
    		r: 9291,
    		f: 4.66,
    		l: "室長"
    	},
    	{
    		r: 9292,
    		f: 4.66,
    		l: "わん"
    	},
    	{
    		r: 9293,
    		f: 4.66,
    		l: "アトピー"
    	},
    	{
    		r: 9294,
    		f: 4.65,
    		l: "浜松"
    	},
    	{
    		r: 9295,
    		f: 4.65,
    		l: "投じる"
    	},
    	{
    		r: 9296,
    		f: 4.65,
    		l: "吉川"
    	},
    	{
    		r: 9297,
    		f: 4.65,
    		l: "救出"
    	},
    	{
    		r: 9298,
    		f: 4.65,
    		l: "財務省"
    	},
    	{
    		r: 9299,
    		f: 4.65,
    		l: "着替える"
    	},
    	{
    		r: 9300,
    		f: 4.65,
    		l: "お正月"
    	},
    	{
    		r: 9301,
    		f: 4.65,
    		l: "超越"
    	},
    	{
    		r: 9302,
    		f: 4.65,
    		l: "亡命"
    	},
    	{
    		r: 9303,
    		f: 4.65,
    		l: "足跡"
    	},
    	{
    		r: 9304,
    		f: 4.65,
    		l: "優良"
    	},
    	{
    		r: 9305,
    		f: 4.65,
    		l: "ウォール"
    	},
    	{
    		r: 9306,
    		f: 4.65,
    		l: "預言"
    	},
    	{
    		r: 9307,
    		f: 4.65,
    		l: "マレー"
    	},
    	{
    		r: 9308,
    		f: 4.65,
    		l: "言い分"
    	},
    	{
    		r: 9309,
    		f: 4.65,
    		l: "薔薇"
    	},
    	{
    		r: 9310,
    		f: 4.65,
    		l: "名付ける"
    	},
    	{
    		r: 9311,
    		f: 4.64,
    		l: "昆虫"
    	},
    	{
    		r: 9312,
    		f: 4.64,
    		l: "作動"
    	},
    	{
    		r: 9313,
    		f: 4.64,
    		l: "映し出す"
    	},
    	{
    		r: 9314,
    		f: 4.64,
    		l: "水素"
    	},
    	{
    		r: 9315,
    		f: 4.64,
    		l: "わぁ"
    	},
    	{
    		r: 9316,
    		f: 4.64,
    		l: "婚約"
    	},
    	{
    		r: 9317,
    		f: 4.64,
    		l: "まじ"
    	},
    	{
    		r: 9318,
    		f: 4.64,
    		l: "コップ"
    	},
    	{
    		r: 9319,
    		f: 4.64,
    		l: "岡崎"
    	},
    	{
    		r: 9320,
    		f: 4.64,
    		l: "撒く"
    	},
    	{
    		r: 9321,
    		f: 4.64,
    		l: "フセイン"
    	},
    	{
    		r: 9322,
    		f: 4.64,
    		l: "活気"
    	},
    	{
    		r: 9323,
    		f: 4.64,
    		l: "製薬"
    	},
    	{
    		r: 9324,
    		f: 4.64,
    		l: "思い出せる"
    	},
    	{
    		r: 9325,
    		f: 4.63,
    		l: "ループ"
    	},
    	{
    		r: 9326,
    		f: 4.63,
    		l: "接種"
    	},
    	{
    		r: 9327,
    		f: 4.63,
    		l: "仕上がる"
    	},
    	{
    		r: 9328,
    		f: 4.63,
    		l: "エール"
    	},
    	{
    		r: 9329,
    		f: 4.63,
    		l: "オウム"
    	},
    	{
    		r: 9330,
    		f: 4.63,
    		l: "カルト"
    	},
    	{
    		r: 9331,
    		f: 4.62,
    		l: "込"
    	},
    	{
    		r: 9332,
    		f: 4.62,
    		l: "伝道"
    	},
    	{
    		r: 9333,
    		f: 4.62,
    		l: "延ばす"
    	},
    	{
    		r: 9334,
    		f: 4.62,
    		l: "悲鳴"
    	},
    	{
    		r: 9335,
    		f: 4.62,
    		l: "乾杯"
    	},
    	{
    		r: 9336,
    		f: 4.62,
    		l: "不適切"
    	},
    	{
    		r: 9337,
    		f: 4.62,
    		l: "総研"
    	},
    	{
    		r: 9338,
    		f: 4.62,
    		l: "味付け"
    	},
    	{
    		r: 9339,
    		f: 4.62,
    		l: "口コミ"
    	},
    	{
    		r: 9340,
    		f: 4.62,
    		l: "ぐっと"
    	},
    	{
    		r: 9341,
    		f: 4.62,
    		l: "フレンチ"
    	},
    	{
    		r: 9342,
    		f: 4.62,
    		l: "宜しく"
    	},
    	{
    		r: 9343,
    		f: 4.62,
    		l: "アラビア"
    	},
    	{
    		r: 9344,
    		f: 4.62,
    		l: "さく"
    	},
    	{
    		r: 9345,
    		f: 4.62,
    		l: "商社"
    	},
    	{
    		r: 9346,
    		f: 4.62,
    		l: "本題"
    	},
    	{
    		r: 9347,
    		f: 4.61,
    		l: "暴動"
    	},
    	{
    		r: 9348,
    		f: 4.61,
    		l: "わっ"
    	},
    	{
    		r: 9349,
    		f: 4.61,
    		l: "艇"
    	},
    	{
    		r: 9350,
    		f: 4.61,
    		l: "短"
    	},
    	{
    		r: 9351,
    		f: 4.61,
    		l: "赴任"
    	},
    	{
    		r: 9352,
    		f: 4.61,
    		l: "ティッシュ"
    	},
    	{
    		r: 9353,
    		f: 4.61,
    		l: "地価"
    	},
    	{
    		r: 9354,
    		f: 4.61,
    		l: "ダイナミック"
    	},
    	{
    		r: 9355,
    		f: 4.61,
    		l: "損傷"
    	},
    	{
    		r: 9356,
    		f: 4.61,
    		l: "ゲイツ"
    	},
    	{
    		r: 9357,
    		f: 4.61,
    		l: "カラス"
    	},
    	{
    		r: 9358,
    		f: 4.61,
    		l: "おばあさん"
    	},
    	{
    		r: 9359,
    		f: 4.6,
    		l: "つと"
    	},
    	{
    		r: 9360,
    		f: 4.6,
    		l: "選抜"
    	},
    	{
    		r: 9361,
    		f: 4.6,
    		l: "大橋"
    	},
    	{
    		r: 9362,
    		f: 4.6,
    		l: "空白"
    	},
    	{
    		r: 9363,
    		f: 4.6,
    		l: "片山"
    	},
    	{
    		r: 9364,
    		f: 4.6,
    		l: "ピッタリ"
    	},
    	{
    		r: 9365,
    		f: 4.6,
    		l: "キムチ"
    	},
    	{
    		r: 9366,
    		f: 4.6,
    		l: "脱却"
    	},
    	{
    		r: 9367,
    		f: 4.6,
    		l: "余儀ない"
    	},
    	{
    		r: 9368,
    		f: 4.6,
    		l: "カギ"
    	},
    	{
    		r: 9369,
    		f: 4.6,
    		l: "オリーブ"
    	},
    	{
    		r: 9370,
    		f: 4.6,
    		l: "部数"
    	},
    	{
    		r: 9371,
    		f: 4.6,
    		l: "多摩"
    	},
    	{
    		r: 9372,
    		f: 4.6,
    		l: "ムダ"
    	},
    	{
    		r: 9373,
    		f: 4.6,
    		l: "薬局"
    	},
    	{
    		r: 9374,
    		f: 4.59,
    		l: "早稲田"
    	},
    	{
    		r: 9375,
    		f: 4.59,
    		l: "救急車"
    	},
    	{
    		r: 9376,
    		f: 4.59,
    		l: "ちょい"
    	},
    	{
    		r: 9377,
    		f: 4.59,
    		l: "理系"
    	},
    	{
    		r: 9378,
    		f: 4.59,
    		l: "離れ"
    	},
    	{
    		r: 9379,
    		f: 4.59,
    		l: "枕"
    	},
    	{
    		r: 9380,
    		f: 4.59,
    		l: "攻め"
    	},
    	{
    		r: 9381,
    		f: 4.59,
    		l: "マクドナルド"
    	},
    	{
    		r: 9382,
    		f: 4.59,
    		l: "リッチ"
    	},
    	{
    		r: 9383,
    		f: 4.59,
    		l: "無言"
    	},
    	{
    		r: 9384,
    		f: 4.58,
    		l: "蝶"
    	},
    	{
    		r: 9385,
    		f: 4.58,
    		l: "いまさら"
    	},
    	{
    		r: 9386,
    		f: 4.58,
    		l: "試練"
    	},
    	{
    		r: 9387,
    		f: 4.58,
    		l: "歌声"
    	},
    	{
    		r: 9388,
    		f: 4.58,
    		l: "ためらう"
    	},
    	{
    		r: 9389,
    		f: 4.58,
    		l: "初級"
    	},
    	{
    		r: 9390,
    		f: 4.58,
    		l: "免れる"
    	},
    	{
    		r: 9391,
    		f: 4.58,
    		l: "ざる"
    	},
    	{
    		r: 9392,
    		f: 4.58,
    		l: "失望"
    	},
    	{
    		r: 9393,
    		f: 4.58,
    		l: "生き生き"
    	},
    	{
    		r: 9394,
    		f: 4.58,
    		l: "院長"
    	},
    	{
    		r: 9395,
    		f: 4.58,
    		l: "直行"
    	},
    	{
    		r: 9396,
    		f: 4.58,
    		l: "寛"
    	},
    	{
    		r: 9397,
    		f: 4.58,
    		l: "見舞い"
    	},
    	{
    		r: 9398,
    		f: 4.58,
    		l: "多用"
    	},
    	{
    		r: 9399,
    		f: 4.58,
    		l: "却下"
    	},
    	{
    		r: 9400,
    		f: 4.58,
    		l: "洞窟"
    	},
    	{
    		r: 9401,
    		f: 4.58,
    		l: "それどころか"
    	},
    	{
    		r: 9402,
    		f: 4.58,
    		l: "アナリスト"
    	},
    	{
    		r: 9403,
    		f: 4.58,
    		l: "細か"
    	},
    	{
    		r: 9404,
    		f: 4.58,
    		l: "ネーミング"
    	},
    	{
    		r: 9405,
    		f: 4.57,
    		l: "零細"
    	},
    	{
    		r: 9406,
    		f: 4.57,
    		l: "好く"
    	},
    	{
    		r: 9407,
    		f: 4.57,
    		l: "ハーフ"
    	},
    	{
    		r: 9408,
    		f: 4.57,
    		l: "みつける"
    	},
    	{
    		r: 9409,
    		f: 4.57,
    		l: "走り回る"
    	},
    	{
    		r: 9410,
    		f: 4.57,
    		l: "張り"
    	},
    	{
    		r: 9411,
    		f: 4.57,
    		l: "類型"
    	},
    	{
    		r: 9412,
    		f: 4.57,
    		l: "抜け出す"
    	},
    	{
    		r: 9413,
    		f: 4.56,
    		l: "昼休み"
    	},
    	{
    		r: 9414,
    		f: 4.56,
    		l: "消耗"
    	},
    	{
    		r: 9415,
    		f: 4.56,
    		l: "撤廃"
    	},
    	{
    		r: 9416,
    		f: 4.56,
    		l: "即す"
    	},
    	{
    		r: 9417,
    		f: 4.56,
    		l: "仰る"
    	},
    	{
    		r: 9418,
    		f: 4.56,
    		l: "たら"
    	},
    	{
    		r: 9419,
    		f: 4.56,
    		l: "畜産"
    	},
    	{
    		r: 9420,
    		f: 4.56,
    		l: "利権"
    	},
    	{
    		r: 9421,
    		f: 4.56,
    		l: "スルー"
    	},
    	{
    		r: 9422,
    		f: 4.56,
    		l: "啓蒙"
    	},
    	{
    		r: 9423,
    		f: 4.56,
    		l: "曜日"
    	},
    	{
    		r: 9424,
    		f: 4.56,
    		l: "弾力"
    	},
    	{
    		r: 9425,
    		f: 4.56,
    		l: "全開"
    	},
    	{
    		r: 9426,
    		f: 4.56,
    		l: "厄介"
    	},
    	{
    		r: 9427,
    		f: 4.56,
    		l: "ゝ"
    	},
    	{
    		r: 9428,
    		f: 4.56,
    		l: "熊谷"
    	},
    	{
    		r: 9429,
    		f: 4.56,
    		l: "エンターテイメント"
    	},
    	{
    		r: 9430,
    		f: 4.56,
    		l: "カ年"
    	},
    	{
    		r: 9431,
    		f: 4.55,
    		l: "またもや"
    	},
    	{
    		r: 9432,
    		f: 4.55,
    		l: "ロープ"
    	},
    	{
    		r: 9433,
    		f: 4.55,
    		l: "近畿"
    	},
    	{
    		r: 9434,
    		f: 4.55,
    		l: "先方"
    	},
    	{
    		r: 9435,
    		f: 4.55,
    		l: "ストライキ"
    	},
    	{
    		r: 9436,
    		f: 4.55,
    		l: "染める"
    	},
    	{
    		r: 9437,
    		f: 4.55,
    		l: "響"
    	},
    	{
    		r: 9438,
    		f: 4.55,
    		l: "フィルタ"
    	},
    	{
    		r: 9439,
    		f: 4.55,
    		l: "ミン"
    	},
    	{
    		r: 9440,
    		f: 4.55,
    		l: "山梨"
    	},
    	{
    		r: 9441,
    		f: 4.55,
    		l: "柴田"
    	},
    	{
    		r: 9442,
    		f: 4.55,
    		l: "イブ"
    	},
    	{
    		r: 9443,
    		f: 4.55,
    		l: "ディナー"
    	},
    	{
    		r: 9444,
    		f: 4.55,
    		l: "こないだ"
    	},
    	{
    		r: 9445,
    		f: 4.55,
    		l: "勘弁"
    	},
    	{
    		r: 9446,
    		f: 4.54,
    		l: "頂上"
    	},
    	{
    		r: 9447,
    		f: 4.54,
    		l: "お子様"
    	},
    	{
    		r: 9448,
    		f: 4.54,
    		l: "思いやり"
    	},
    	{
    		r: 9449,
    		f: 4.54,
    		l: "海水"
    	},
    	{
    		r: 9450,
    		f: 4.54,
    		l: "ウラン"
    	},
    	{
    		r: 9451,
    		f: 4.54,
    		l: "いままで"
    	},
    	{
    		r: 9452,
    		f: 4.54,
    		l: "地盤"
    	},
    	{
    		r: 9453,
    		f: 4.54,
    		l: "世田谷"
    	},
    	{
    		r: 9454,
    		f: 4.54,
    		l: "りんご"
    	},
    	{
    		r: 9455,
    		f: 4.54,
    		l: "路地"
    	},
    	{
    		r: 9456,
    		f: 4.54,
    		l: "ディーラー"
    	},
    	{
    		r: 9457,
    		f: 4.54,
    		l: "ならびに"
    	},
    	{
    		r: 9458,
    		f: 4.54,
    		l: "なめる"
    	},
    	{
    		r: 9459,
    		f: 4.54,
    		l: "事後"
    	},
    	{
    		r: 9460,
    		f: 4.54,
    		l: "バイオリン"
    	},
    	{
    		r: 9461,
    		f: 4.53,
    		l: "未定"
    	},
    	{
    		r: 9462,
    		f: 4.53,
    		l: "くくる"
    	},
    	{
    		r: 9463,
    		f: 4.53,
    		l: "盛り上がり"
    	},
    	{
    		r: 9464,
    		f: 4.53,
    		l: "リアリティ"
    	},
    	{
    		r: 9465,
    		f: 4.53,
    		l: "パッチ"
    	},
    	{
    		r: 9466,
    		f: 4.53,
    		l: "キューバ"
    	},
    	{
    		r: 9467,
    		f: 4.53,
    		l: "紀行"
    	},
    	{
    		r: 9468,
    		f: 4.53,
    		l: "揚げ"
    	},
    	{
    		r: 9469,
    		f: 4.52,
    		l: "受けとめる"
    	},
    	{
    		r: 9470,
    		f: 4.52,
    		l: "リマ"
    	},
    	{
    		r: 9471,
    		f: 4.52,
    		l: "享受"
    	},
    	{
    		r: 9472,
    		f: 4.52,
    		l: "喚起"
    	},
    	{
    		r: 9473,
    		f: 4.52,
    		l: "ベット"
    	},
    	{
    		r: 9474,
    		f: 4.52,
    		l: "お花"
    	},
    	{
    		r: 9475,
    		f: 4.52,
    		l: "姉歯"
    	},
    	{
    		r: 9476,
    		f: 4.52,
    		l: "スッキリ"
    	},
    	{
    		r: 9477,
    		f: 4.52,
    		l: "損益"
    	},
    	{
    		r: 9478,
    		f: 4.52,
    		l: "殻"
    	},
    	{
    		r: 9479,
    		f: 4.52,
    		l: "年上"
    	},
    	{
    		r: 9480,
    		f: 4.52,
    		l: "森田"
    	},
    	{
    		r: 9481,
    		f: 4.52,
    		l: "限"
    	},
    	{
    		r: 9482,
    		f: 4.52,
    		l: "町長"
    	},
    	{
    		r: 9483,
    		f: 4.51,
    		l: "潮"
    	},
    	{
    		r: 9484,
    		f: 4.51,
    		l: "集客"
    	},
    	{
    		r: 9485,
    		f: 4.51,
    		l: "カッコイイ"
    	},
    	{
    		r: 9486,
    		f: 4.51,
    		l: "搭乗"
    	},
    	{
    		r: 9487,
    		f: 4.51,
    		l: "居心地"
    	},
    	{
    		r: 9488,
    		f: 4.51,
    		l: "流入"
    	},
    	{
    		r: 9489,
    		f: 4.51,
    		l: "失点"
    	},
    	{
    		r: 9490,
    		f: 4.51,
    		l: "洗礼"
    	},
    	{
    		r: 9491,
    		f: 4.51,
    		l: "東ティモール"
    	},
    	{
    		r: 9492,
    		f: 4.51,
    		l: "離脱"
    	},
    	{
    		r: 9493,
    		f: 4.51,
    		l: "晃"
    	},
    	{
    		r: 9494,
    		f: 4.51,
    		l: "網羅"
    	},
    	{
    		r: 9495,
    		f: 4.5,
    		l: "おそれる"
    	},
    	{
    		r: 9496,
    		f: 4.5,
    		l: "文言"
    	},
    	{
    		r: 9497,
    		f: 4.5,
    		l: "したう"
    	},
    	{
    		r: 9498,
    		f: 4.5,
    		l: "裕"
    	},
    	{
    		r: 9499,
    		f: 4.5,
    		l: "クルー"
    	},
    	{
    		r: 9500,
    		f: 4.5,
    		l: "ネパール"
    	},
    	{
    		r: 9501,
    		f: 4.5,
    		l: "着せる"
    	},
    	{
    		r: 9502,
    		f: 4.5,
    		l: "宮沢"
    	},
    	{
    		r: 9503,
    		f: 4.5,
    		l: "鶴"
    	},
    	{
    		r: 9504,
    		f: 4.5,
    		l: "紙面"
    	},
    	{
    		r: 9505,
    		f: 4.5,
    		l: "山中"
    	},
    	{
    		r: 9506,
    		f: 4.5,
    		l: "出世"
    	},
    	{
    		r: 9507,
    		f: 4.5,
    		l: "プリン"
    	},
    	{
    		r: 9508,
    		f: 4.49,
    		l: "倍増"
    	},
    	{
    		r: 9509,
    		f: 4.49,
    		l: "飲酒"
    	},
    	{
    		r: 9510,
    		f: 4.49,
    		l: "リハーサル"
    	},
    	{
    		r: 9511,
    		f: 4.49,
    		l: "アタック"
    	},
    	{
    		r: 9512,
    		f: 4.49,
    		l: "上品"
    	},
    	{
    		r: 9513,
    		f: 4.49,
    		l: "カス"
    	},
    	{
    		r: 9514,
    		f: 4.49,
    		l: "尋問"
    	},
    	{
    		r: 9515,
    		f: 4.49,
    		l: "繁殖"
    	},
    	{
    		r: 9516,
    		f: 4.49,
    		l: "盗難"
    	},
    	{
    		r: 9517,
    		f: 4.49,
    		l: "望"
    	},
    	{
    		r: 9518,
    		f: 4.48,
    		l: "考"
    	},
    	{
    		r: 9519,
    		f: 4.48,
    		l: "先住民"
    	},
    	{
    		r: 9520,
    		f: 4.48,
    		l: "手持ち"
    	},
    	{
    		r: 9521,
    		f: 4.48,
    		l: "前編"
    	},
    	{
    		r: 9522,
    		f: 4.48,
    		l: "パンク"
    	},
    	{
    		r: 9523,
    		f: 4.48,
    		l: "乗り切る"
    	},
    	{
    		r: 9524,
    		f: 4.48,
    		l: "はずれる"
    	},
    	{
    		r: 9525,
    		f: 4.48,
    		l: "愛国"
    	},
    	{
    		r: 9526,
    		f: 4.48,
    		l: "致命"
    	},
    	{
    		r: 9527,
    		f: 4.48,
    		l: "蘭"
    	},
    	{
    		r: 9528,
    		f: 4.48,
    		l: "カジノ"
    	},
    	{
    		r: 9529,
    		f: 4.48,
    		l: "まき"
    	},
    	{
    		r: 9530,
    		f: 4.48,
    		l: "ようこそ"
    	},
    	{
    		r: 9531,
    		f: 4.48,
    		l: "レーザ"
    	},
    	{
    		r: 9532,
    		f: 4.48,
    		l: "突如"
    	},
    	{
    		r: 9533,
    		f: 4.48,
    		l: "ユニフォーム"
    	},
    	{
    		r: 9534,
    		f: 4.48,
    		l: "広がり"
    	},
    	{
    		r: 9535,
    		f: 4.48,
    		l: "ツリー"
    	},
    	{
    		r: 9536,
    		f: 4.48,
    		l: "チー"
    	},
    	{
    		r: 9537,
    		f: 4.48,
    		l: "暗黙"
    	},
    	{
    		r: 9538,
    		f: 4.48,
    		l: "奨学"
    	},
    	{
    		r: 9539,
    		f: 4.48,
    		l: "分かつ"
    	},
    	{
    		r: 9540,
    		f: 4.48,
    		l: "プロトコル"
    	},
    	{
    		r: 9541,
    		f: 4.47,
    		l: "トーン"
    	},
    	{
    		r: 9542,
    		f: 4.47,
    		l: "部位"
    	},
    	{
    		r: 9543,
    		f: 4.47,
    		l: "部活"
    	},
    	{
    		r: 9544,
    		f: 4.47,
    		l: "反戦"
    	},
    	{
    		r: 9545,
    		f: 4.47,
    		l: "オイラ"
    	},
    	{
    		r: 9546,
    		f: 4.47,
    		l: "むろん"
    	},
    	{
    		r: 9547,
    		f: 4.47,
    		l: "据える"
    	},
    	{
    		r: 9548,
    		f: 4.47,
    		l: "実名"
    	},
    	{
    		r: 9549,
    		f: 4.47,
    		l: "懐"
    	},
    	{
    		r: 9550,
    		f: 4.47,
    		l: "徹夜"
    	},
    	{
    		r: 9551,
    		f: 4.47,
    		l: "検事"
    	},
    	{
    		r: 9552,
    		f: 4.47,
    		l: "渡"
    	},
    	{
    		r: 9553,
    		f: 4.47,
    		l: "かご"
    	},
    	{
    		r: 9554,
    		f: 4.47,
    		l: "都度"
    	},
    	{
    		r: 9555,
    		f: 4.47,
    		l: "小山"
    	},
    	{
    		r: 9556,
    		f: 4.47,
    		l: "夕"
    	},
    	{
    		r: 9557,
    		f: 4.47,
    		l: "先発"
    	},
    	{
    		r: 9558,
    		f: 4.46,
    		l: "ウン"
    	},
    	{
    		r: 9559,
    		f: 4.46,
    		l: "受給"
    	},
    	{
    		r: 9560,
    		f: 4.46,
    		l: "本業"
    	},
    	{
    		r: 9561,
    		f: 4.46,
    		l: "メーター"
    	},
    	{
    		r: 9562,
    		f: 4.46,
    		l: "殺し"
    	},
    	{
    		r: 9563,
    		f: 4.46,
    		l: "スティック"
    	},
    	{
    		r: 9564,
    		f: 4.46,
    		l: "変容"
    	},
    	{
    		r: 9565,
    		f: 4.46,
    		l: "其の"
    	},
    	{
    		r: 9566,
    		f: 4.46,
    		l: "カツ"
    	},
    	{
    		r: 9567,
    		f: 4.45,
    		l: "チェロ"
    	},
    	{
    		r: 9568,
    		f: 4.45,
    		l: "飛"
    	},
    	{
    		r: 9569,
    		f: 4.45,
    		l: "ヒマ"
    	},
    	{
    		r: 9570,
    		f: 4.45,
    		l: "泰"
    	},
    	{
    		r: 9571,
    		f: 4.45,
    		l: "クルーズ"
    	},
    	{
    		r: 9572,
    		f: 4.45,
    		l: "あ〜"
    	},
    	{
    		r: 9573,
    		f: 4.45,
    		l: "是非とも"
    	},
    	{
    		r: 9574,
    		f: 4.45,
    		l: "トラウマ"
    	},
    	{
    		r: 9575,
    		f: 4.45,
    		l: "ライブラリ"
    	},
    	{
    		r: 9576,
    		f: 4.45,
    		l: "副業"
    	},
    	{
    		r: 9577,
    		f: 4.45,
    		l: "キャピタル"
    	},
    	{
    		r: 9578,
    		f: 4.45,
    		l: "舟"
    	},
    	{
    		r: 9579,
    		f: 4.45,
    		l: "聖堂"
    	},
    	{
    		r: 9580,
    		f: 4.45,
    		l: "送金"
    	},
    	{
    		r: 9581,
    		f: 4.45,
    		l: "リットル"
    	},
    	{
    		r: 9582,
    		f: 4.45,
    		l: "原案"
    	},
    	{
    		r: 9583,
    		f: 4.45,
    		l: "拡散"
    	},
    	{
    		r: 9584,
    		f: 4.45,
    		l: "準拠"
    	},
    	{
    		r: 9585,
    		f: 4.45,
    		l: "不愉快"
    	},
    	{
    		r: 9586,
    		f: 4.45,
    		l: "申し出る"
    	},
    	{
    		r: 9587,
    		f: 4.45,
    		l: "車椅子"
    	},
    	{
    		r: 9588,
    		f: 4.45,
    		l: "アシスタント"
    	},
    	{
    		r: 9589,
    		f: 4.45,
    		l: "校正"
    	},
    	{
    		r: 9590,
    		f: 4.45,
    		l: "アルゴリズム"
    	},
    	{
    		r: 9591,
    		f: 4.44,
    		l: "包装"
    	},
    	{
    		r: 9592,
    		f: 4.44,
    		l: "ヘタ"
    	},
    	{
    		r: 9593,
    		f: 4.44,
    		l: "後援"
    	},
    	{
    		r: 9594,
    		f: 4.44,
    		l: "泣ける"
    	},
    	{
    		r: 9595,
    		f: 4.44,
    		l: "育む"
    	},
    	{
    		r: 9596,
    		f: 4.44,
    		l: "ちら"
    	},
    	{
    		r: 9597,
    		f: 4.44,
    		l: "ベビー"
    	},
    	{
    		r: 9598,
    		f: 4.43,
    		l: "処方"
    	},
    	{
    		r: 9599,
    		f: 4.43,
    		l: "醜い"
    	},
    	{
    		r: 9600,
    		f: 4.43,
    		l: "はぐ"
    	},
    	{
    		r: 9601,
    		f: 4.43,
    		l: "はなし"
    	},
    	{
    		r: 9602,
    		f: 4.43,
    		l: "毎度"
    	},
    	{
    		r: 9603,
    		f: 4.43,
    		l: "ダイオキシン"
    	},
    	{
    		r: 9604,
    		f: 4.43,
    		l: "シリコンバレー"
    	},
    	{
    		r: 9605,
    		f: 4.43,
    		l: "読み込む"
    	},
    	{
    		r: 9606,
    		f: 4.43,
    		l: "隔離"
    	},
    	{
    		r: 9607,
    		f: 4.43,
    		l: "陣営"
    	},
    	{
    		r: 9608,
    		f: 4.43,
    		l: "骨折"
    	},
    	{
    		r: 9609,
    		f: 4.43,
    		l: "直結"
    	},
    	{
    		r: 9610,
    		f: 4.43,
    		l: "湾岸"
    	},
    	{
    		r: 9611,
    		f: 4.43,
    		l: "丸山"
    	},
    	{
    		r: 9612,
    		f: 4.43,
    		l: "不公平"
    	},
    	{
    		r: 9613,
    		f: 4.42,
    		l: "掲示"
    	},
    	{
    		r: 9614,
    		f: 4.42,
    		l: "封筒"
    	},
    	{
    		r: 9615,
    		f: 4.42,
    		l: "総数"
    	},
    	{
    		r: 9616,
    		f: 4.42,
    		l: "逝く"
    	},
    	{
    		r: 9617,
    		f: 4.42,
    		l: "談話"
    	},
    	{
    		r: 9618,
    		f: 4.42,
    		l: "只今"
    	},
    	{
    		r: 9619,
    		f: 4.42,
    		l: "或"
    	},
    	{
    		r: 9620,
    		f: 4.42,
    		l: "転落"
    	},
    	{
    		r: 9621,
    		f: 4.42,
    		l: "ヒトラー"
    	},
    	{
    		r: 9622,
    		f: 4.42,
    		l: "一人ひとり"
    	},
    	{
    		r: 9623,
    		f: 4.42,
    		l: "委任"
    	},
    	{
    		r: 9624,
    		f: 4.42,
    		l: "薬品"
    	},
    	{
    		r: 9625,
    		f: 4.41,
    		l: "ふだん"
    	},
    	{
    		r: 9626,
    		f: 4.41,
    		l: "頂戴"
    	},
    	{
    		r: 9627,
    		f: 4.41,
    		l: "一端"
    	},
    	{
    		r: 9628,
    		f: 4.41,
    		l: "冷却"
    	},
    	{
    		r: 9629,
    		f: 4.41,
    		l: "大雨"
    	},
    	{
    		r: 9630,
    		f: 4.41,
    		l: "ボロボロ"
    	},
    	{
    		r: 9631,
    		f: 4.41,
    		l: "台数"
    	},
    	{
    		r: 9632,
    		f: 4.41,
    		l: "崇拝"
    	},
    	{
    		r: 9633,
    		f: 4.41,
    		l: "念願"
    	},
    	{
    		r: 9634,
    		f: 4.41,
    		l: "ボーイ"
    	},
    	{
    		r: 9635,
    		f: 4.41,
    		l: "水中"
    	},
    	{
    		r: 9636,
    		f: 4.41,
    		l: "潰れる"
    	},
    	{
    		r: 9637,
    		f: 4.41,
    		l: "搾取"
    	},
    	{
    		r: 9638,
    		f: 4.41,
    		l: "試作"
    	},
    	{
    		r: 9639,
    		f: 4.41,
    		l: "意地"
    	},
    	{
    		r: 9640,
    		f: 4.41,
    		l: "定額"
    	},
    	{
    		r: 9641,
    		f: 4.4,
    		l: "暴力団"
    	},
    	{
    		r: 9642,
    		f: 4.4,
    		l: "なじむ"
    	},
    	{
    		r: 9643,
    		f: 4.4,
    		l: "賞賛"
    	},
    	{
    		r: 9644,
    		f: 4.4,
    		l: "あせる"
    	},
    	{
    		r: 9645,
    		f: 4.4,
    		l: "コネ"
    	},
    	{
    		r: 9646,
    		f: 4.4,
    		l: "ソナタ"
    	},
    	{
    		r: 9647,
    		f: 4.4,
    		l: "慢性"
    	},
    	{
    		r: 9648,
    		f: 4.4,
    		l: "プリンタ"
    	},
    	{
    		r: 9649,
    		f: 4.39,
    		l: "老後"
    	},
    	{
    		r: 9650,
    		f: 4.39,
    		l: "ネズミ"
    	},
    	{
    		r: 9651,
    		f: 4.39,
    		l: "ドロップ"
    	},
    	{
    		r: 9652,
    		f: 4.39,
    		l: "見本"
    	},
    	{
    		r: 9653,
    		f: 4.39,
    		l: "とい"
    	},
    	{
    		r: 9654,
    		f: 4.39,
    		l: "県知事"
    	},
    	{
    		r: 9655,
    		f: 4.39,
    		l: "侵攻"
    	},
    	{
    		r: 9656,
    		f: 4.39,
    		l: "品川"
    	},
    	{
    		r: 9657,
    		f: 4.39,
    		l: "引き下げる"
    	},
    	{
    		r: 9658,
    		f: 4.39,
    		l: "北側"
    	},
    	{
    		r: 9659,
    		f: 4.39,
    		l: "読み取る"
    	},
    	{
    		r: 9660,
    		f: 4.39,
    		l: "愛好"
    	},
    	{
    		r: 9661,
    		f: 4.39,
    		l: "葬式"
    	},
    	{
    		r: 9662,
    		f: 4.39,
    		l: "産婆"
    	},
    	{
    		r: 9663,
    		f: 4.39,
    		l: "イノベーション"
    	},
    	{
    		r: 9664,
    		f: 4.39,
    		l: "引き込む"
    	},
    	{
    		r: 9665,
    		f: 4.39,
    		l: "泡"
    	},
    	{
    		r: 9666,
    		f: 4.39,
    		l: "麻酔"
    	},
    	{
    		r: 9667,
    		f: 4.39,
    		l: "修習"
    	},
    	{
    		r: 9668,
    		f: 4.38,
    		l: "ターミナル"
    	},
    	{
    		r: 9669,
    		f: 4.38,
    		l: "三木"
    	},
    	{
    		r: 9670,
    		f: 4.38,
    		l: "小笠原"
    	},
    	{
    		r: 9671,
    		f: 4.38,
    		l: "化石"
    	},
    	{
    		r: 9672,
    		f: 4.38,
    		l: "過ち"
    	},
    	{
    		r: 9673,
    		f: 4.38,
    		l: "コメディ"
    	},
    	{
    		r: 9674,
    		f: 4.37,
    		l: "手渡す"
    	},
    	{
    		r: 9675,
    		f: 4.37,
    		l: "荘"
    	},
    	{
    		r: 9676,
    		f: 4.37,
    		l: "転勤"
    	},
    	{
    		r: 9677,
    		f: 4.37,
    		l: "ふるさと"
    	},
    	{
    		r: 9678,
    		f: 4.37,
    		l: "理不尽"
    	},
    	{
    		r: 9679,
    		f: 4.37,
    		l: "申し出"
    	},
    	{
    		r: 9680,
    		f: 4.37,
    		l: "三井"
    	},
    	{
    		r: 9681,
    		f: 4.37,
    		l: "明快"
    	},
    	{
    		r: 9682,
    		f: 4.37,
    		l: "むら"
    	},
    	{
    		r: 9683,
    		f: 4.37,
    		l: "列島"
    	},
    	{
    		r: 9684,
    		f: 4.37,
    		l: "ヒデ"
    	},
    	{
    		r: 9685,
    		f: 4.37,
    		l: "傍"
    	},
    	{
    		r: 9686,
    		f: 4.37,
    		l: "オト"
    	},
    	{
    		r: 9687,
    		f: 4.37,
    		l: "行進"
    	},
    	{
    		r: 9688,
    		f: 4.37,
    		l: "詰め込む"
    	},
    	{
    		r: 9689,
    		f: 4.37,
    		l: "ちの"
    	},
    	{
    		r: 9690,
    		f: 4.37,
    		l: "省く"
    	},
    	{
    		r: 9691,
    		f: 4.37,
    		l: "公庫"
    	},
    	{
    		r: 9692,
    		f: 4.36,
    		l: "おなじ"
    	},
    	{
    		r: 9693,
    		f: 4.36,
    		l: "公述"
    	},
    	{
    		r: 9694,
    		f: 4.36,
    		l: "知覚"
    	},
    	{
    		r: 9695,
    		f: 4.36,
    		l: "歴代"
    	},
    	{
    		r: 9696,
    		f: 4.36,
    		l: "北村"
    	},
    	{
    		r: 9697,
    		f: 4.36,
    		l: "簡素"
    	},
    	{
    		r: 9698,
    		f: 4.36,
    		l: "寛容"
    	},
    	{
    		r: 9699,
    		f: 4.36,
    		l: "解読"
    	},
    	{
    		r: 9700,
    		f: 4.36,
    		l: "淡い"
    	},
    	{
    		r: 9701,
    		f: 4.36,
    		l: "汎用"
    	},
    	{
    		r: 9702,
    		f: 4.36,
    		l: "垂直"
    	},
    	{
    		r: 9703,
    		f: 4.36,
    		l: "キミ"
    	},
    	{
    		r: 9704,
    		f: 4.36,
    		l: "セクシー"
    	},
    	{
    		r: 9705,
    		f: 4.36,
    		l: "コーディネーター"
    	},
    	{
    		r: 9706,
    		f: 4.36,
    		l: "歩ける"
    	},
    	{
    		r: 9707,
    		f: 4.36,
    		l: "グッド"
    	},
    	{
    		r: 9708,
    		f: 4.35,
    		l: "近況"
    	},
    	{
    		r: 9709,
    		f: 4.35,
    		l: "鳩"
    	},
    	{
    		r: 9710,
    		f: 4.35,
    		l: "悪夢"
    	},
    	{
    		r: 9711,
    		f: 4.35,
    		l: "中級"
    	},
    	{
    		r: 9712,
    		f: 4.35,
    		l: "ＯＢ"
    	},
    	{
    		r: 9713,
    		f: 4.35,
    		l: "軍団"
    	},
    	{
    		r: 9714,
    		f: 4.35,
    		l: "セキュリティー"
    	},
    	{
    		r: 9715,
    		f: 4.35,
    		l: "ノード"
    	},
    	{
    		r: 9716,
    		f: 4.35,
    		l: "夕飯"
    	},
    	{
    		r: 9717,
    		f: 4.35,
    		l: "こんど"
    	},
    	{
    		r: 9718,
    		f: 4.35,
    		l: "予期"
    	},
    	{
    		r: 9719,
    		f: 4.35,
    		l: "不気味"
    	},
    	{
    		r: 9720,
    		f: 4.35,
    		l: "過失"
    	},
    	{
    		r: 9721,
    		f: 4.35,
    		l: "特異"
    	},
    	{
    		r: 9722,
    		f: 4.35,
    		l: "木々"
    	},
    	{
    		r: 9723,
    		f: 4.35,
    		l: "バスク"
    	},
    	{
    		r: 9724,
    		f: 4.35,
    		l: "接点"
    	},
    	{
    		r: 9725,
    		f: 4.35,
    		l: "変遷"
    	},
    	{
    		r: 9726,
    		f: 4.35,
    		l: "嗜好"
    	},
    	{
    		r: 9727,
    		f: 4.35,
    		l: "すう"
    	},
    	{
    		r: 9728,
    		f: 4.35,
    		l: "不利益"
    	},
    	{
    		r: 9729,
    		f: 4.34,
    		l: "いいえ"
    	},
    	{
    		r: 9730,
    		f: 4.34,
    		l: "ヨハネ"
    	},
    	{
    		r: 9731,
    		f: 4.34,
    		l: "トリック"
    	},
    	{
    		r: 9732,
    		f: 4.34,
    		l: "定食"
    	},
    	{
    		r: 9733,
    		f: 4.34,
    		l: "赤ん坊"
    	},
    	{
    		r: 9734,
    		f: 4.34,
    		l: "大作"
    	},
    	{
    		r: 9735,
    		f: 4.34,
    		l: "サンド"
    	},
    	{
    		r: 9736,
    		f: 4.34,
    		l: "柳"
    	},
    	{
    		r: 9737,
    		f: 4.34,
    		l: "軽視"
    	},
    	{
    		r: 9738,
    		f: 4.34,
    		l: "任す"
    	},
    	{
    		r: 9739,
    		f: 4.34,
    		l: "マグロ"
    	},
    	{
    		r: 9740,
    		f: 4.34,
    		l: "要注意"
    	},
    	{
    		r: 9741,
    		f: 4.33,
    		l: "見舞う"
    	},
    	{
    		r: 9742,
    		f: 4.33,
    		l: "暴れる"
    	},
    	{
    		r: 9743,
    		f: 4.33,
    		l: "バリバリ"
    	},
    	{
    		r: 9744,
    		f: 4.33,
    		l: "田んぼ"
    	},
    	{
    		r: 9745,
    		f: 4.33,
    		l: "不備"
    	},
    	{
    		r: 9746,
    		f: 4.33,
    		l: "ボクシング"
    	},
    	{
    		r: 9747,
    		f: 4.33,
    		l: "雑"
    	},
    	{
    		r: 9748,
    		f: 4.33,
    		l: "目録"
    	},
    	{
    		r: 9749,
    		f: 4.33,
    		l: "手塚"
    	},
    	{
    		r: 9750,
    		f: 4.33,
    		l: "勘案"
    	},
    	{
    		r: 9751,
    		f: 4.33,
    		l: "工藤"
    	},
    	{
    		r: 9752,
    		f: 4.33,
    		l: "お出かけ"
    	},
    	{
    		r: 9753,
    		f: 4.33,
    		l: "巻き"
    	},
    	{
    		r: 9754,
    		f: 4.33,
    		l: "宅配"
    	},
    	{
    		r: 9755,
    		f: 4.33,
    		l: "ラテン"
    	},
    	{
    		r: 9756,
    		f: 4.33,
    		l: "峠"
    	},
    	{
    		r: 9757,
    		f: 4.33,
    		l: "とある"
    	},
    	{
    		r: 9758,
    		f: 4.32,
    		l: "宝くじ"
    	},
    	{
    		r: 9759,
    		f: 4.32,
    		l: "テキサス"
    	},
    	{
    		r: 9760,
    		f: 4.32,
    		l: "いと"
    	},
    	{
    		r: 9761,
    		f: 4.32,
    		l: "解禁"
    	},
    	{
    		r: 9762,
    		f: 4.32,
    		l: "尿"
    	},
    	{
    		r: 9763,
    		f: 4.32,
    		l: "隠蔽"
    	},
    	{
    		r: 9764,
    		f: 4.32,
    		l: "典"
    	},
    	{
    		r: 9765,
    		f: 4.32,
    		l: "トス"
    	},
    	{
    		r: 9766,
    		f: 4.31,
    		l: "啓"
    	},
    	{
    		r: 9767,
    		f: 4.31,
    		l: "レター"
    	},
    	{
    		r: 9768,
    		f: 4.31,
    		l: "クリーン"
    	},
    	{
    		r: 9769,
    		f: 4.31,
    		l: "ヤクザ"
    	},
    	{
    		r: 9770,
    		f: 4.31,
    		l: "ゴメン"
    	},
    	{
    		r: 9771,
    		f: 4.31,
    		l: "猛烈"
    	},
    	{
    		r: 9772,
    		f: 4.31,
    		l: "サラ"
    	},
    	{
    		r: 9773,
    		f: 4.31,
    		l: "Ｚ"
    	},
    	{
    		r: 9774,
    		f: 4.31,
    		l: "中枢"
    	},
    	{
    		r: 9775,
    		f: 4.31,
    		l: "女児"
    	},
    	{
    		r: 9776,
    		f: 4.31,
    		l: "学位"
    	},
    	{
    		r: 9777,
    		f: 4.31,
    		l: "一挙"
    	},
    	{
    		r: 9778,
    		f: 4.31,
    		l: "内定"
    	},
    	{
    		r: 9779,
    		f: 4.31,
    		l: "カルロス"
    	},
    	{
    		r: 9780,
    		f: 4.31,
    		l: "生体"
    	},
    	{
    		r: 9781,
    		f: 4.31,
    		l: "血圧"
    	},
    	{
    		r: 9782,
    		f: 4.31,
    		l: "養護"
    	},
    	{
    		r: 9783,
    		f: 4.31,
    		l: "アイスランド"
    	},
    	{
    		r: 9784,
    		f: 4.31,
    		l: "ヨット"
    	},
    	{
    		r: 9785,
    		f: 4.31,
    		l: "ハズ"
    	},
    	{
    		r: 9786,
    		f: 4.31,
    		l: "ここら"
    	},
    	{
    		r: 9787,
    		f: 4.31,
    		l: "出費"
    	},
    	{
    		r: 9788,
    		f: 4.31,
    		l: "酵素"
    	},
    	{
    		r: 9789,
    		f: 4.31,
    		l: "厳重"
    	},
    	{
    		r: 9790,
    		f: 4.31,
    		l: "税関"
    	},
    	{
    		r: 9791,
    		f: 4.31,
    		l: "混同"
    	},
    	{
    		r: 9792,
    		f: 4.31,
    		l: "うんざり"
    	},
    	{
    		r: 9793,
    		f: 4.31,
    		l: "日差し"
    	},
    	{
    		r: 9794,
    		f: 4.3,
    		l: "ヒューマン"
    	},
    	{
    		r: 9795,
    		f: 4.3,
    		l: "果実"
    	},
    	{
    		r: 9796,
    		f: 4.3,
    		l: "執着"
    	},
    	{
    		r: 9797,
    		f: 4.3,
    		l: "反乱"
    	},
    	{
    		r: 9798,
    		f: 4.3,
    		l: "介助"
    	},
    	{
    		r: 9799,
    		f: 4.3,
    		l: "対価"
    	},
    	{
    		r: 9800,
    		f: 4.3,
    		l: "標本"
    	},
    	{
    		r: 9801,
    		f: 4.3,
    		l: "モチーフ"
    	},
    	{
    		r: 9802,
    		f: 4.3,
    		l: "金儲け"
    	},
    	{
    		r: 9803,
    		f: 4.3,
    		l: "神さま"
    	},
    	{
    		r: 9804,
    		f: 4.3,
    		l: "入れ"
    	},
    	{
    		r: 9805,
    		f: 4.3,
    		l: "焼却"
    	},
    	{
    		r: 9806,
    		f: 4.3,
    		l: "弾ける"
    	},
    	{
    		r: 9807,
    		f: 4.3,
    		l: "母国"
    	},
    	{
    		r: 9808,
    		f: 4.3,
    		l: "カンファレンス"
    	},
    	{
    		r: 9809,
    		f: 4.3,
    		l: "とことん"
    	},
    	{
    		r: 9810,
    		f: 4.3,
    		l: "柔軟性"
    	},
    	{
    		r: 9811,
    		f: 4.3,
    		l: "税法"
    	},
    	{
    		r: 9812,
    		f: 4.3,
    		l: "投げかける"
    	},
    	{
    		r: 9813,
    		f: 4.3,
    		l: "下り"
    	},
    	{
    		r: 9814,
    		f: 4.3,
    		l: "被疑"
    	},
    	{
    		r: 9815,
    		f: 4.29,
    		l: "目下"
    	},
    	{
    		r: 9816,
    		f: 4.29,
    		l: "なみ"
    	},
    	{
    		r: 9817,
    		f: 4.29,
    		l: "ギア"
    	},
    	{
    		r: 9818,
    		f: 4.29,
    		l: "芝生"
    	},
    	{
    		r: 9819,
    		f: 4.29,
    		l: "操縦"
    	},
    	{
    		r: 9820,
    		f: 4.29,
    		l: "ケガ"
    	},
    	{
    		r: 9821,
    		f: 4.29,
    		l: "散々"
    	},
    	{
    		r: 9822,
    		f: 4.29,
    		l: "テラス"
    	},
    	{
    		r: 9823,
    		f: 4.29,
    		l: "怒鳴る"
    	},
    	{
    		r: 9824,
    		f: 4.29,
    		l: "年数"
    	},
    	{
    		r: 9825,
    		f: 4.29,
    		l: "つめ"
    	},
    	{
    		r: 9826,
    		f: 4.29,
    		l: "ひまわり"
    	},
    	{
    		r: 9827,
    		f: 4.29,
    		l: "それだけに"
    	},
    	{
    		r: 9828,
    		f: 4.29,
    		l: "功績"
    	},
    	{
    		r: 9829,
    		f: 4.28,
    		l: "特急"
    	},
    	{
    		r: 9830,
    		f: 4.28,
    		l: "昇格"
    	},
    	{
    		r: 9831,
    		f: 4.28,
    		l: "拒む"
    	},
    	{
    		r: 9832,
    		f: 4.28,
    		l: "遅延"
    	},
    	{
    		r: 9833,
    		f: 4.28,
    		l: "狩猟"
    	},
    	{
    		r: 9834,
    		f: 4.28,
    		l: "捕らえる"
    	},
    	{
    		r: 9835,
    		f: 4.28,
    		l: "務"
    	},
    	{
    		r: 9836,
    		f: 4.28,
    		l: "若しくは"
    	},
    	{
    		r: 9837,
    		f: 4.28,
    		l: "香川"
    	},
    	{
    		r: 9838,
    		f: 4.28,
    		l: "手放す"
    	},
    	{
    		r: 9839,
    		f: 4.28,
    		l: "コマーシャル"
    	},
    	{
    		r: 9840,
    		f: 4.28,
    		l: "長期間"
    	},
    	{
    		r: 9841,
    		f: 4.28,
    		l: "下車"
    	},
    	{
    		r: 9842,
    		f: 4.28,
    		l: "さりげ"
    	},
    	{
    		r: 9843,
    		f: 4.28,
    		l: "一方で"
    	},
    	{
    		r: 9844,
    		f: 4.27,
    		l: "帰省"
    	},
    	{
    		r: 9845,
    		f: 4.27,
    		l: "待たす"
    	},
    	{
    		r: 9846,
    		f: 4.27,
    		l: "ペットボトル"
    	},
    	{
    		r: 9847,
    		f: 4.27,
    		l: "プロバイダー"
    	},
    	{
    		r: 9848,
    		f: 4.27,
    		l: "届"
    	},
    	{
    		r: 9849,
    		f: 4.27,
    		l: "ヨーグルト"
    	},
    	{
    		r: 9850,
    		f: 4.27,
    		l: "ちょこっと"
    	},
    	{
    		r: 9851,
    		f: 4.27,
    		l: "合戦"
    	},
    	{
    		r: 9852,
    		f: 4.27,
    		l: "郵政省"
    	},
    	{
    		r: 9853,
    		f: 4.27,
    		l: "杖"
    	},
    	{
    		r: 9854,
    		f: 4.27,
    		l: "惚れる"
    	},
    	{
    		r: 9855,
    		f: 4.27,
    		l: "園芸"
    	},
    	{
    		r: 9856,
    		f: 4.26,
    		l: "おじいさん"
    	},
    	{
    		r: 9857,
    		f: 4.26,
    		l: "ＮＹ"
    	},
    	{
    		r: 9858,
    		f: 4.26,
    		l: "配線"
    	},
    	{
    		r: 9859,
    		f: 4.26,
    		l: "呉"
    	},
    	{
    		r: 9860,
    		f: 4.26,
    		l: "カビ"
    	},
    	{
    		r: 9861,
    		f: 4.26,
    		l: "云"
    	},
    	{
    		r: 9862,
    		f: 4.26,
    		l: "振込"
    	},
    	{
    		r: 9863,
    		f: 4.26,
    		l: "羽田"
    	},
    	{
    		r: 9864,
    		f: 4.26,
    		l: "こわい"
    	},
    	{
    		r: 9865,
    		f: 4.26,
    		l: "定時"
    	},
    	{
    		r: 9866,
    		f: 4.26,
    		l: "米ドル"
    	},
    	{
    		r: 9867,
    		f: 4.26,
    		l: "一品"
    	},
    	{
    		r: 9868,
    		f: 4.26,
    		l: "根幹"
    	},
    	{
    		r: 9869,
    		f: 4.26,
    		l: "シアトル"
    	},
    	{
    		r: 9870,
    		f: 4.26,
    		l: "アッ"
    	},
    	{
    		r: 9871,
    		f: 4.26,
    		l: "松岡"
    	},
    	{
    		r: 9872,
    		f: 4.26,
    		l: "隙"
    	},
    	{
    		r: 9873,
    		f: 4.25,
    		l: "まあまあ"
    	},
    	{
    		r: 9874,
    		f: 4.25,
    		l: "一周"
    	},
    	{
    		r: 9875,
    		f: 4.25,
    		l: "タブー"
    	},
    	{
    		r: 9876,
    		f: 4.25,
    		l: "無条件"
    	},
    	{
    		r: 9877,
    		f: 4.25,
    		l: "来場"
    	},
    	{
    		r: 9878,
    		f: 4.25,
    		l: "艦隊"
    	},
    	{
    		r: 9879,
    		f: 4.25,
    		l: "安値"
    	},
    	{
    		r: 9880,
    		f: 4.25,
    		l: "チェンジ"
    	},
    	{
    		r: 9881,
    		f: 4.25,
    		l: "前線"
    	},
    	{
    		r: 9882,
    		f: 4.25,
    		l: "手がかり"
    	},
    	{
    		r: 9883,
    		f: 4.25,
    		l: "ひっかかる"
    	},
    	{
    		r: 9884,
    		f: 4.25,
    		l: "一向に"
    	},
    	{
    		r: 9885,
    		f: 4.25,
    		l: "奄美"
    	},
    	{
    		r: 9886,
    		f: 4.25,
    		l: "殺到"
    	},
    	{
    		r: 9887,
    		f: 4.24,
    		l: "利息"
    	},
    	{
    		r: 9888,
    		f: 4.24,
    		l: "チャールズ"
    	},
    	{
    		r: 9889,
    		f: 4.24,
    		l: "シャン"
    	},
    	{
    		r: 9890,
    		f: 4.24,
    		l: "低減"
    	},
    	{
    		r: 9891,
    		f: 4.24,
    		l: "通産"
    	},
    	{
    		r: 9892,
    		f: 4.24,
    		l: "傲慢"
    	},
    	{
    		r: 9893,
    		f: 4.24,
    		l: "ジェームス"
    	},
    	{
    		r: 9894,
    		f: 4.24,
    		l: "桂"
    	},
    	{
    		r: 9895,
    		f: 4.24,
    		l: "プラント"
    	},
    	{
    		r: 9896,
    		f: 4.24,
    		l: "ふざける"
    	},
    	{
    		r: 9897,
    		f: 4.24,
    		l: "かんじる"
    	},
    	{
    		r: 9898,
    		f: 4.24,
    		l: "扶養"
    	},
    	{
    		r: 9899,
    		f: 4.24,
    		l: "お家"
    	},
    	{
    		r: 9900,
    		f: 4.24,
    		l: "残留"
    	},
    	{
    		r: 9901,
    		f: 4.24,
    		l: "ハゲ"
    	},
    	{
    		r: 9902,
    		f: 4.24,
    		l: "ガンガン"
    	},
    	{
    		r: 9903,
    		f: 4.24,
    		l: "ラック"
    	},
    	{
    		r: 9904,
    		f: 4.24,
    		l: "陽子"
    	},
    	{
    		r: 9905,
    		f: 4.24,
    		l: "早くから"
    	},
    	{
    		r: 9906,
    		f: 4.23,
    		l: "アラン"
    	},
    	{
    		r: 9907,
    		f: 4.23,
    		l: "なぞ"
    	},
    	{
    		r: 9908,
    		f: 4.23,
    		l: "増田"
    	},
    	{
    		r: 9909,
    		f: 4.23,
    		l: "アンプ"
    	},
    	{
    		r: 9910,
    		f: 4.23,
    		l: "染まる"
    	},
    	{
    		r: 9911,
    		f: 4.23,
    		l: "就寝"
    	},
    	{
    		r: 9912,
    		f: 4.23,
    		l: "ディフェンス"
    	},
    	{
    		r: 9913,
    		f: 4.23,
    		l: "ピンチ"
    	},
    	{
    		r: 9914,
    		f: 4.23,
    		l: "琴"
    	},
    	{
    		r: 9915,
    		f: 4.23,
    		l: "快い"
    	},
    	{
    		r: 9916,
    		f: 4.23,
    		l: "たずねる"
    	},
    	{
    		r: 9917,
    		f: 4.23,
    		l: "終結"
    	},
    	{
    		r: 9918,
    		f: 4.23,
    		l: "冠"
    	},
    	{
    		r: 9919,
    		f: 4.22,
    		l: "かかえる"
    	},
    	{
    		r: 9920,
    		f: 4.22,
    		l: "本家"
    	},
    	{
    		r: 9921,
    		f: 4.22,
    		l: "スターリン"
    	},
    	{
    		r: 9922,
    		f: 4.22,
    		l: "面白"
    	},
    	{
    		r: 9923,
    		f: 4.22,
    		l: "留守"
    	},
    	{
    		r: 9924,
    		f: 4.22,
    		l: "音量"
    	},
    	{
    		r: 9925,
    		f: 4.22,
    		l: "月間"
    	},
    	{
    		r: 9926,
    		f: 4.22,
    		l: "無論"
    	},
    	{
    		r: 9927,
    		f: 4.22,
    		l: "ハラ"
    	},
    	{
    		r: 9928,
    		f: 4.22,
    		l: "笑み"
    	},
    	{
    		r: 9929,
    		f: 4.22,
    		l: "ゆかり"
    	},
    	{
    		r: 9930,
    		f: 4.22,
    		l: "みどり"
    	},
    	{
    		r: 9931,
    		f: 4.22,
    		l: "天体"
    	},
    	{
    		r: 9932,
    		f: 4.22,
    		l: "柏崎"
    	},
    	{
    		r: 9933,
    		f: 4.22,
    		l: "ジュン"
    	},
    	{
    		r: 9934,
    		f: 4.22,
    		l: "何しろ"
    	},
    	{
    		r: 9935,
    		f: 4.22,
    		l: "カラ"
    	},
    	{
    		r: 9936,
    		f: 4.22,
    		l: "しづ"
    	},
    	{
    		r: 9937,
    		f: 4.22,
    		l: "フットボール"
    	},
    	{
    		r: 9938,
    		f: 4.22,
    		l: "帰"
    	},
    	{
    		r: 9939,
    		f: 4.21,
    		l: "絶つ"
    	},
    	{
    		r: 9940,
    		f: 4.21,
    		l: "薄れる"
    	},
    	{
    		r: 9941,
    		f: 4.21,
    		l: "停電"
    	},
    	{
    		r: 9942,
    		f: 4.21,
    		l: "アクティブ"
    	},
    	{
    		r: 9943,
    		f: 4.21,
    		l: "ナイス"
    	},
    	{
    		r: 9944,
    		f: 4.21,
    		l: "イルカ"
    	},
    	{
    		r: 9945,
    		f: 4.21,
    		l: "逸脱"
    	},
    	{
    		r: 9946,
    		f: 4.21,
    		l: "スキ"
    	},
    	{
    		r: 9947,
    		f: 4.21,
    		l: "糞"
    	},
    	{
    		r: 9948,
    		f: 4.21,
    		l: "ホームレス"
    	},
    	{
    		r: 9949,
    		f: 4.21,
    		l: "申立"
    	},
    	{
    		r: 9950,
    		f: 4.21,
    		l: "ひとまず"
    	},
    	{
    		r: 9951,
    		f: 4.21,
    		l: "ステーキ"
    	},
    	{
    		r: 9952,
    		f: 4.21,
    		l: "立候補"
    	},
    	{
    		r: 9953,
    		f: 4.21,
    		l: "老舗"
    	},
    	{
    		r: 9954,
    		f: 4.21,
    		l: "発酵"
    	},
    	{
    		r: 9955,
    		f: 4.2,
    		l: "こんなふうに"
    	},
    	{
    		r: 9956,
    		f: 4.2,
    		l: "補"
    	},
    	{
    		r: 9957,
    		f: 4.2,
    		l: "誘致"
    	},
    	{
    		r: 9958,
    		f: 4.2,
    		l: "釈放"
    	},
    	{
    		r: 9959,
    		f: 4.2,
    		l: "温"
    	},
    	{
    		r: 9960,
    		f: 4.2,
    		l: "インディアン"
    	},
    	{
    		r: 9961,
    		f: 4.2,
    		l: "灰"
    	},
    	{
    		r: 9962,
    		f: 4.2,
    		l: "ボロい"
    	},
    	{
    		r: 9963,
    		f: 4.2,
    		l: "処遇"
    	},
    	{
    		r: 9964,
    		f: 4.2,
    		l: "セルフ"
    	},
    	{
    		r: 9965,
    		f: 4.2,
    		l: "半額"
    	},
    	{
    		r: 9966,
    		f: 4.2,
    		l: "見積もり"
    	},
    	{
    		r: 9967,
    		f: 4.2,
    		l: "通告"
    	},
    	{
    		r: 9968,
    		f: 4.2,
    		l: "王朝"
    	},
    	{
    		r: 9969,
    		f: 4.2,
    		l: "西川"
    	},
    	{
    		r: 9970,
    		f: 4.2,
    		l: "ロサンゼルス"
    	},
    	{
    		r: 9971,
    		f: 4.2,
    		l: "破棄"
    	},
    	{
    		r: 9972,
    		f: 4.2,
    		l: "探査"
    	},
    	{
    		r: 9973,
    		f: 4.2,
    		l: "救援"
    	},
    	{
    		r: 9974,
    		f: 4.19,
    		l: "晒す"
    	},
    	{
    		r: 9975,
    		f: 4.19,
    		l: "農園"
    	},
    	{
    		r: 9976,
    		f: 4.19,
    		l: "連ねる"
    	},
    	{
    		r: 9977,
    		f: 4.19,
    		l: "ユニバーサル"
    	},
    	{
    		r: 9978,
    		f: 4.19,
    		l: "横田"
    	},
    	{
    		r: 9979,
    		f: 4.19,
    		l: "投下"
    	},
    	{
    		r: 9980,
    		f: 4.19,
    		l: "鋼"
    	},
    	{
    		r: 9981,
    		f: 4.19,
    		l: "抑止"
    	},
    	{
    		r: 9982,
    		f: 4.19,
    		l: "待ち合わせ"
    	},
    	{
    		r: 9983,
    		f: 4.19,
    		l: "プロレタリアート"
    	},
    	{
    		r: 9984,
    		f: 4.19,
    		l: "ウサギ"
    	},
    	{
    		r: 9985,
    		f: 4.19,
    		l: "自爆"
    	},
    	{
    		r: 9986,
    		f: 4.18,
    		l: "北九州"
    	},
    	{
    		r: 9987,
    		f: 4.18,
    		l: "おにぎり"
    	},
    	{
    		r: 9988,
    		f: 4.18,
    		l: "とりあげる"
    	},
    	{
    		r: 9989,
    		f: 4.18,
    		l: "見物"
    	},
    	{
    		r: 9990,
    		f: 4.18,
    		l: "打てる"
    	},
    	{
    		r: 9991,
    		f: 4.18,
    		l: "当地"
    	},
    	{
    		r: 9992,
    		f: 4.18,
    		l: "ガール"
    	},
    	{
    		r: 9993,
    		f: 4.18,
    		l: "一度に"
    	},
    	{
    		r: 9994,
    		f: 4.18,
    		l: "うなずく"
    	},
    	{
    		r: 9995,
    		f: 4.18,
    		l: "過半数"
    	},
    	{
    		r: 9996,
    		f: 4.18,
    		l: "メンタル"
    	},
    	{
    		r: 9997,
    		f: 4.18,
    		l: "上がり"
    	},
    	{
    		r: 9998,
    		f: 4.18,
    		l: "サマ"
    	},
    	{
    		r: 9999,
    		f: 4.18,
    		l: "紐"
    	},
    	{
    		r: 10000,
    		f: 4.17,
    		l: "標的"
    	},
    	{
    		r: 10001,
    		f: 4.17,
    		l: "君が代"
    	},
    	{
    		r: 10002,
    		f: 4.17,
    		l: "改札"
    	},
    	{
    		r: 10003,
    		f: 4.17,
    		l: "悲しむ"
    	},
    	{
    		r: 10004,
    		f: 4.17,
    		l: "打ち"
    	},
    	{
    		r: 10005,
    		f: 4.17,
    		l: "インサイダー"
    	},
    	{
    		r: 10006,
    		f: 4.17,
    		l: "しくむ"
    	},
    	{
    		r: 10007,
    		f: 4.17,
    		l: "トレーダー"
    	},
    	{
    		r: 10008,
    		f: 4.17,
    		l: "麻雀"
    	},
    	{
    		r: 10009,
    		f: 4.17,
    		l: "年配"
    	},
    	{
    		r: 10010,
    		f: 4.17,
    		l: "くら"
    	},
    	{
    		r: 10011,
    		f: 4.16,
    		l: "浅草"
    	},
    	{
    		r: 10012,
    		f: 4.16,
    		l: "切り口"
    	},
    	{
    		r: 10013,
    		f: 4.16,
    		l: "地蔵"
    	},
    	{
    		r: 10014,
    		f: 4.16,
    		l: "引っ越し"
    	},
    	{
    		r: 10015,
    		f: 4.16,
    		l: "美味"
    	},
    	{
    		r: 10016,
    		f: 4.16,
    		l: "無理矢理"
    	},
    	{
    		r: 10017,
    		f: 4.16,
    		l: "手伝い"
    	},
    	{
    		r: 10018,
    		f: 4.16,
    		l: "童話"
    	},
    	{
    		r: 10019,
    		f: 4.16,
    		l: "秘"
    	},
    	{
    		r: 10020,
    		f: 4.16,
    		l: "うに"
    	},
    	{
    		r: 10021,
    		f: 4.16,
    		l: "ヘル"
    	},
    	{
    		r: 10022,
    		f: 4.16,
    		l: "洗浄"
    	},
    	{
    		r: 10023,
    		f: 4.16,
    		l: "失"
    	},
    	{
    		r: 10024,
    		f: 4.16,
    		l: "洗脳"
    	},
    	{
    		r: 10025,
    		f: 4.16,
    		l: "接"
    	},
    	{
    		r: 10026,
    		f: 4.16,
    		l: "一人暮らし"
    	},
    	{
    		r: 10027,
    		f: 4.16,
    		l: "加熱"
    	},
    	{
    		r: 10028,
    		f: 4.16,
    		l: "切り替え"
    	},
    	{
    		r: 10029,
    		f: 4.16,
    		l: "レコーディング"
    	},
    	{
    		r: 10030,
    		f: 4.16,
    		l: "ビジュアル"
    	},
    	{
    		r: 10031,
    		f: 4.16,
    		l: "モニタ"
    	},
    	{
    		r: 10032,
    		f: 4.16,
    		l: "貸付"
    	},
    	{
    		r: 10033,
    		f: 4.16,
    		l: "清算"
    	},
    	{
    		r: 10034,
    		f: 4.15,
    		l: "名所"
    	},
    	{
    		r: 10035,
    		f: 4.15,
    		l: "輩"
    	},
    	{
    		r: 10036,
    		f: 4.15,
    		l: "かわす"
    	},
    	{
    		r: 10037,
    		f: 4.15,
    		l: "げん"
    	},
    	{
    		r: 10038,
    		f: 4.15,
    		l: "培う"
    	},
    	{
    		r: 10039,
    		f: 4.15,
    		l: "純一郎"
    	},
    	{
    		r: 10040,
    		f: 4.15,
    		l: "所在地"
    	},
    	{
    		r: 10041,
    		f: 4.15,
    		l: "人道"
    	},
    	{
    		r: 10042,
    		f: 4.15,
    		l: "気圧"
    	},
    	{
    		r: 10043,
    		f: 4.15,
    		l: "見失う"
    	},
    	{
    		r: 10044,
    		f: 4.15,
    		l: "ディン"
    	},
    	{
    		r: 10045,
    		f: 4.15,
    		l: "下部"
    	},
    	{
    		r: 10046,
    		f: 4.15,
    		l: "ｋｇ"
    	},
    	{
    		r: 10047,
    		f: 4.15,
    		l: "見習う"
    	},
    	{
    		r: 10048,
    		f: 4.15,
    		l: "踏み切る"
    	},
    	{
    		r: 10049,
    		f: 4.15,
    		l: "歪む"
    	},
    	{
    		r: 10050,
    		f: 4.15,
    		l: "独創"
    	},
    	{
    		r: 10051,
    		f: 4.15,
    		l: "ナンパ"
    	},
    	{
    		r: 10052,
    		f: 4.15,
    		l: "同窓会"
    	},
    	{
    		r: 10053,
    		f: 4.15,
    		l: "凍る"
    	},
    	{
    		r: 10054,
    		f: 4.14,
    		l: "戴く"
    	},
    	{
    		r: 10055,
    		f: 4.14,
    		l: "歌舞伎"
    	},
    	{
    		r: 10056,
    		f: 4.14,
    		l: "父母"
    	},
    	{
    		r: 10057,
    		f: 4.14,
    		l: "干す"
    	},
    	{
    		r: 10058,
    		f: 4.14,
    		l: "要す"
    	},
    	{
    		r: 10059,
    		f: 4.14,
    		l: "おかけ"
    	},
    	{
    		r: 10060,
    		f: 4.14,
    		l: "写"
    	},
    	{
    		r: 10061,
    		f: 4.14,
    		l: "洗剤"
    	},
    	{
    		r: 10062,
    		f: 4.13,
    		l: "運送"
    	},
    	{
    		r: 10063,
    		f: 4.13,
    		l: "高山"
    	},
    	{
    		r: 10064,
    		f: 4.13,
    		l: "役立てる"
    	},
    	{
    		r: 10065,
    		f: 4.13,
    		l: "考え直す"
    	},
    	{
    		r: 10066,
    		f: 4.13,
    		l: "用地"
    	},
    	{
    		r: 10067,
    		f: 4.13,
    		l: "喜"
    	},
    	{
    		r: 10068,
    		f: 4.13,
    		l: "通商"
    	},
    	{
    		r: 10069,
    		f: 4.13,
    		l: "近々"
    	},
    	{
    		r: 10070,
    		f: 4.13,
    		l: "知見"
    	},
    	{
    		r: 10071,
    		f: 4.13,
    		l: "多忙"
    	},
    	{
    		r: 10072,
    		f: 4.13,
    		l: "運輸省"
    	},
    	{
    		r: 10073,
    		f: 4.13,
    		l: "引き下げ"
    	},
    	{
    		r: 10074,
    		f: 4.13,
    		l: "単身"
    	},
    	{
    		r: 10075,
    		f: 4.13,
    		l: "疾病"
    	},
    	{
    		r: 10076,
    		f: 4.13,
    		l: "しむ"
    	},
    	{
    		r: 10077,
    		f: 4.13,
    		l: "軽量"
    	},
    	{
    		r: 10078,
    		f: 4.13,
    		l: "些細"
    	},
    	{
    		r: 10079,
    		f: 4.13,
    		l: "利回り"
    	},
    	{
    		r: 10080,
    		f: 4.13,
    		l: "日光"
    	},
    	{
    		r: 10081,
    		f: 4.13,
    		l: "ケンカ"
    	},
    	{
    		r: 10082,
    		f: 4.13,
    		l: "空想"
    	},
    	{
    		r: 10083,
    		f: 4.13,
    		l: "エンタープライズ"
    	},
    	{
    		r: 10084,
    		f: 4.13,
    		l: "鉛筆"
    	},
    	{
    		r: 10085,
    		f: 4.13,
    		l: "クーラー"
    	},
    	{
    		r: 10086,
    		f: 4.13,
    		l: "勘"
    	},
    	{
    		r: 10087,
    		f: 4.13,
    		l: "水着"
    	},
    	{
    		r: 10088,
    		f: 4.13,
    		l: "除"
    	},
    	{
    		r: 10089,
    		f: 4.12,
    		l: "思い込み"
    	},
    	{
    		r: 10090,
    		f: 4.12,
    		l: "投機"
    	},
    	{
    		r: 10091,
    		f: 4.12,
    		l: "瞬時"
    	},
    	{
    		r: 10092,
    		f: 4.12,
    		l: "船舶"
    	},
    	{
    		r: 10093,
    		f: 4.12,
    		l: "時差"
    	},
    	{
    		r: 10094,
    		f: 4.12,
    		l: "精力"
    	},
    	{
    		r: 10095,
    		f: 4.12,
    		l: "やわらかい"
    	},
    	{
    		r: 10096,
    		f: 4.12,
    		l: "ヘア"
    	},
    	{
    		r: 10097,
    		f: 4.12,
    		l: "いいかげん"
    	},
    	{
    		r: 10098,
    		f: 4.11,
    		l: "玩具"
    	},
    	{
    		r: 10099,
    		f: 4.11,
    		l: "炊く"
    	},
    	{
    		r: 10100,
    		f: 4.11,
    		l: "日報"
    	},
    	{
    		r: 10101,
    		f: 4.11,
    		l: "多岐"
    	},
    	{
    		r: 10102,
    		f: 4.11,
    		l: "武田"
    	},
    	{
    		r: 10103,
    		f: 4.11,
    		l: "伊東"
    	},
    	{
    		r: 10104,
    		f: 4.11,
    		l: "物凄い"
    	},
    	{
    		r: 10105,
    		f: 4.11,
    		l: "登勢"
    	},
    	{
    		r: 10106,
    		f: 4.11,
    		l: "グランプリ"
    	},
    	{
    		r: 10107,
    		f: 4.11,
    		l: "歳入"
    	},
    	{
    		r: 10108,
    		f: 4.11,
    		l: "年内"
    	},
    	{
    		r: 10109,
    		f: 4.11,
    		l: "愛子"
    	},
    	{
    		r: 10110,
    		f: 4.11,
    		l: "本編"
    	},
    	{
    		r: 10111,
    		f: 4.11,
    		l: "けい"
    	},
    	{
    		r: 10112,
    		f: 4.11,
    		l: "排気"
    	},
    	{
    		r: 10113,
    		f: 4.11,
    		l: "錠"
    	},
    	{
    		r: 10114,
    		f: 4.11,
    		l: "献金"
    	},
    	{
    		r: 10115,
    		f: 4.11,
    		l: "樹木"
    	},
    	{
    		r: 10116,
    		f: 4.11,
    		l: "ジャム"
    	},
    	{
    		r: 10117,
    		f: 4.11,
    		l: "集め"
    	},
    	{
    		r: 10118,
    		f: 4.1,
    		l: "拘る"
    	},
    	{
    		r: 10119,
    		f: 4.1,
    		l: "寄り"
    	},
    	{
    		r: 10120,
    		f: 4.1,
    		l: "バリエーション"
    	},
    	{
    		r: 10121,
    		f: 4.1,
    		l: "お許し"
    	},
    	{
    		r: 10122,
    		f: 4.1,
    		l: "炭鉱"
    	},
    	{
    		r: 10123,
    		f: 4.1,
    		l: "市議会"
    	},
    	{
    		r: 10124,
    		f: 4.1,
    		l: "後記"
    	},
    	{
    		r: 10125,
    		f: 4.1,
    		l: "病棟"
    	},
    	{
    		r: 10126,
    		f: 4.1,
    		l: "仰ぐ"
    	},
    	{
    		r: 10127,
    		f: 4.1,
    		l: "償却"
    	},
    	{
    		r: 10128,
    		f: 4.1,
    		l: "婚"
    	},
    	{
    		r: 10129,
    		f: 4.1,
    		l: "さらう"
    	},
    	{
    		r: 10130,
    		f: 4.1,
    		l: "ゆえる"
    	},
    	{
    		r: 10131,
    		f: 4.09,
    		l: "満州"
    	},
    	{
    		r: 10132,
    		f: 4.09,
    		l: "映す"
    	},
    	{
    		r: 10133,
    		f: 4.09,
    		l: "天下"
    	},
    	{
    		r: 10134,
    		f: 4.09,
    		l: "供"
    	},
    	{
    		r: 10135,
    		f: 4.09,
    		l: "語源"
    	},
    	{
    		r: 10136,
    		f: 4.09,
    		l: "リオ"
    	},
    	{
    		r: 10137,
    		f: 4.09,
    		l: "日本共産党"
    	},
    	{
    		r: 10138,
    		f: 4.09,
    		l: "視力"
    	},
    	{
    		r: 10139,
    		f: 4.09,
    		l: "南アフリカ"
    	},
    	{
    		r: 10140,
    		f: 4.09,
    		l: "補充"
    	},
    	{
    		r: 10141,
    		f: 4.09,
    		l: "知名度"
    	},
    	{
    		r: 10142,
    		f: 4.09,
    		l: "埋め込む"
    	},
    	{
    		r: 10143,
    		f: 4.09,
    		l: "正反対"
    	},
    	{
    		r: 10144,
    		f: 4.09,
    		l: "さら"
    	},
    	{
    		r: 10145,
    		f: 4.09,
    		l: "もむ"
    	},
    	{
    		r: 10146,
    		f: 4.09,
    		l: "部族"
    	},
    	{
    		r: 10147,
    		f: 4.09,
    		l: "三昧"
    	},
    	{
    		r: 10148,
    		f: 4.09,
    		l: "藤沢"
    	},
    	{
    		r: 10149,
    		f: 4.09,
    		l: "怪獣"
    	},
    	{
    		r: 10150,
    		f: 4.09,
    		l: "過疎"
    	},
    	{
    		r: 10151,
    		f: 4.09,
    		l: "悪用"
    	},
    	{
    		r: 10152,
    		f: 4.09,
    		l: "この先"
    	},
    	{
    		r: 10153,
    		f: 4.09,
    		l: "とてつもない"
    	},
    	{
    		r: 10154,
    		f: 4.09,
    		l: "実況"
    	},
    	{
    		r: 10155,
    		f: 4.09,
    		l: "伴奏"
    	},
    	{
    		r: 10156,
    		f: 4.08,
    		l: "永井"
    	},
    	{
    		r: 10157,
    		f: 4.08,
    		l: "ジャーナル"
    	},
    	{
    		r: 10158,
    		f: 4.08,
    		l: "タイムズ"
    	},
    	{
    		r: 10159,
    		f: 4.08,
    		l: "国営"
    	},
    	{
    		r: 10160,
    		f: 4.08,
    		l: "めっちゃ"
    	},
    	{
    		r: 10161,
    		f: 4.08,
    		l: "対人"
    	},
    	{
    		r: 10162,
    		f: 4.08,
    		l: "アフガン"
    	},
    	{
    		r: 10163,
    		f: 4.08,
    		l: "父さん"
    	},
    	{
    		r: 10164,
    		f: 4.08,
    		l: "割く"
    	},
    	{
    		r: 10165,
    		f: 4.07,
    		l: "ＧＤＰ"
    	},
    	{
    		r: 10166,
    		f: 4.07,
    		l: "リセット"
    	},
    	{
    		r: 10167,
    		f: 4.07,
    		l: "広範囲"
    	},
    	{
    		r: 10168,
    		f: 4.07,
    		l: "脅す"
    	},
    	{
    		r: 10169,
    		f: 4.07,
    		l: "とっくに"
    	},
    	{
    		r: 10170,
    		f: 4.07,
    		l: "路面"
    	},
    	{
    		r: 10171,
    		f: 4.07,
    		l: "ヾ"
    	},
    	{
    		r: 10172,
    		f: 4.07,
    		l: "取り寄せる"
    	},
    	{
    		r: 10173,
    		f: 4.07,
    		l: "三位一体"
    	},
    	{
    		r: 10174,
    		f: 4.07,
    		l: "皇太子"
    	},
    	{
    		r: 10175,
    		f: 4.07,
    		l: "誠意"
    	},
    	{
    		r: 10176,
    		f: 4.07,
    		l: "夜中"
    	},
    	{
    		r: 10177,
    		f: 4.07,
    		l: "隻"
    	},
    	{
    		r: 10178,
    		f: 4.07,
    		l: "委"
    	},
    	{
    		r: 10179,
    		f: 4.07,
    		l: "毀損"
    	},
    	{
    		r: 10180,
    		f: 4.07,
    		l: "ボーカル"
    	},
    	{
    		r: 10181,
    		f: 4.07,
    		l: "眠り"
    	},
    	{
    		r: 10182,
    		f: 4.07,
    		l: "ポリ"
    	},
    	{
    		r: 10183,
    		f: 4.07,
    		l: "名づける"
    	},
    	{
    		r: 10184,
    		f: 4.07,
    		l: "古本屋"
    	},
    	{
    		r: 10185,
    		f: 4.07,
    		l: "宿命"
    	},
    	{
    		r: 10186,
    		f: 4.07,
    		l: "小児"
    	},
    	{
    		r: 10187,
    		f: 4.07,
    		l: "拷問"
    	},
    	{
    		r: 10188,
    		f: 4.07,
    		l: "見抜く"
    	},
    	{
    		r: 10189,
    		f: 4.07,
    		l: "昨年度"
    	},
    	{
    		r: 10190,
    		f: 4.07,
    		l: "改変"
    	},
    	{
    		r: 10191,
    		f: 4.06,
    		l: "直ぐに"
    	},
    	{
    		r: 10192,
    		f: 4.06,
    		l: "グレる"
    	},
    	{
    		r: 10193,
    		f: 4.06,
    		l: "熱帯"
    	},
    	{
    		r: 10194,
    		f: 4.06,
    		l: "せん"
    	},
    	{
    		r: 10195,
    		f: 4.06,
    		l: "郷"
    	},
    	{
    		r: 10196,
    		f: 4.06,
    		l: "芋"
    	},
    	{
    		r: 10197,
    		f: 4.06,
    		l: "ばら"
    	},
    	{
    		r: 10198,
    		f: 4.06,
    		l: "ダンサー"
    	},
    	{
    		r: 10199,
    		f: 4.06,
    		l: "推計"
    	},
    	{
    		r: 10200,
    		f: 4.06,
    		l: "梨"
    	},
    	{
    		r: 10201,
    		f: 4.06,
    		l: "クセ"
    	},
    	{
    		r: 10202,
    		f: 4.06,
    		l: "緩やか"
    	},
    	{
    		r: 10203,
    		f: 4.06,
    		l: "哲"
    	},
    	{
    		r: 10204,
    		f: 4.06,
    		l: "公営"
    	},
    	{
    		r: 10205,
    		f: 4.06,
    		l: "カイロ"
    	},
    	{
    		r: 10206,
    		f: 4.06,
    		l: "年中"
    	},
    	{
    		r: 10207,
    		f: 4.06,
    		l: "前記"
    	},
    	{
    		r: 10208,
    		f: 4.05,
    		l: "内臓"
    	},
    	{
    		r: 10209,
    		f: 4.05,
    		l: "党員"
    	},
    	{
    		r: 10210,
    		f: 4.05,
    		l: "このごろ"
    	},
    	{
    		r: 10211,
    		f: 4.05,
    		l: "折角"
    	},
    	{
    		r: 10212,
    		f: 4.05,
    		l: "鈴"
    	},
    	{
    		r: 10213,
    		f: 4.05,
    		l: "なんだかんだ"
    	},
    	{
    		r: 10214,
    		f: 4.05,
    		l: "覚ます"
    	},
    	{
    		r: 10215,
    		f: 4.05,
    		l: "アイスクリーム"
    	},
    	{
    		r: 10216,
    		f: 4.05,
    		l: "思い入れ"
    	},
    	{
    		r: 10217,
    		f: 4.05,
    		l: "匹敵"
    	},
    	{
    		r: 10218,
    		f: 4.05,
    		l: "ペイ"
    	},
    	{
    		r: 10219,
    		f: 4.05,
    		l: "中共"
    	},
    	{
    		r: 10220,
    		f: 4.05,
    		l: "タンパク質"
    	},
    	{
    		r: 10221,
    		f: 4.05,
    		l: "爾"
    	},
    	{
    		r: 10222,
    		f: 4.05,
    		l: "カニ"
    	},
    	{
    		r: 10223,
    		f: 4.05,
    		l: "税込み"
    	},
    	{
    		r: 10224,
    		f: 4.05,
    		l: "バーツ"
    	},
    	{
    		r: 10225,
    		f: 4.05,
    		l: "反撃"
    	},
    	{
    		r: 10226,
    		f: 4.04,
    		l: "興行"
    	},
    	{
    		r: 10227,
    		f: 4.04,
    		l: "海底"
    	},
    	{
    		r: 10228,
    		f: 4.04,
    		l: "楼"
    	},
    	{
    		r: 10229,
    		f: 4.04,
    		l: "人脈"
    	},
    	{
    		r: 10230,
    		f: 4.04,
    		l: "適格"
    	},
    	{
    		r: 10231,
    		f: 4.04,
    		l: "爆撃"
    	},
    	{
    		r: 10232,
    		f: 4.04,
    		l: "安保理"
    	},
    	{
    		r: 10233,
    		f: 4.04,
    		l: "分別"
    	},
    	{
    		r: 10234,
    		f: 4.04,
    		l: "聖なる"
    	},
    	{
    		r: 10235,
    		f: 4.04,
    		l: "神父"
    	},
    	{
    		r: 10236,
    		f: 4.04,
    		l: "ごまかす"
    	},
    	{
    		r: 10237,
    		f: 4.04,
    		l: "日焼け"
    	},
    	{
    		r: 10238,
    		f: 4.04,
    		l: "よくよく"
    	},
    	{
    		r: 10239,
    		f: 4.04,
    		l: "専務"
    	},
    	{
    		r: 10240,
    		f: 4.04,
    		l: "さかのぼる"
    	},
    	{
    		r: 10241,
    		f: 4.03,
    		l: "投"
    	},
    	{
    		r: 10242,
    		f: 4.03,
    		l: "最期"
    	},
    	{
    		r: 10243,
    		f: 4.03,
    		l: "うーむ"
    	},
    	{
    		r: 10244,
    		f: 4.03,
    		l: "スキン"
    	},
    	{
    		r: 10245,
    		f: 4.03,
    		l: "駐留"
    	},
    	{
    		r: 10246,
    		f: 4.03,
    		l: "合図"
    	},
    	{
    		r: 10247,
    		f: 4.03,
    		l: "議席"
    	},
    	{
    		r: 10248,
    		f: 4.03,
    		l: "標識"
    	},
    	{
    		r: 10249,
    		f: 4.03,
    		l: "燃費"
    	},
    	{
    		r: 10250,
    		f: 4.03,
    		l: "戦国"
    	},
    	{
    		r: 10251,
    		f: 4.03,
    		l: "デカ"
    	},
    	{
    		r: 10252,
    		f: 4.03,
    		l: "供述"
    	},
    	{
    		r: 10253,
    		f: 4.03,
    		l: "夜明け"
    	},
    	{
    		r: 10254,
    		f: 4.03,
    		l: "持ち合わせる"
    	},
    	{
    		r: 10255,
    		f: 4.03,
    		l: "八木"
    	},
    	{
    		r: 10256,
    		f: 4.03,
    		l: "髪型"
    	},
    	{
    		r: 10257,
    		f: 4.02,
    		l: "主席"
    	},
    	{
    		r: 10258,
    		f: 4.02,
    		l: "生まれ変わる"
    	},
    	{
    		r: 10259,
    		f: 4.02,
    		l: "国政"
    	},
    	{
    		r: 10260,
    		f: 4.02,
    		l: "廃"
    	},
    	{
    		r: 10261,
    		f: 4.02,
    		l: "突き"
    	},
    	{
    		r: 10262,
    		f: 4.02,
    		l: "天下り"
    	},
    	{
    		r: 10263,
    		f: 4.02,
    		l: "祐"
    	},
    	{
    		r: 10264,
    		f: 4.02,
    		l: "セクター"
    	},
    	{
    		r: 10265,
    		f: 4.02,
    		l: "報復"
    	},
    	{
    		r: 10266,
    		f: 4.02,
    		l: "邸"
    	},
    	{
    		r: 10267,
    		f: 4.02,
    		l: "お誘い"
    	},
    	{
    		r: 10268,
    		f: 4.02,
    		l: "空ける"
    	},
    	{
    		r: 10269,
    		f: 4.02,
    		l: "検診"
    	},
    	{
    		r: 10270,
    		f: 4.01,
    		l: "持"
    	},
    	{
    		r: 10271,
    		f: 4.01,
    		l: "農協"
    	},
    	{
    		r: 10272,
    		f: 4.01,
    		l: "廻る"
    	},
    	{
    		r: 10273,
    		f: 4.01,
    		l: "ならば"
    	},
    	{
    		r: 10274,
    		f: 4.01,
    		l: "僧"
    	},
    	{
    		r: 10275,
    		f: 4.01,
    		l: "お盆"
    	},
    	{
    		r: 10276,
    		f: 4.01,
    		l: "まさ"
    	},
    	{
    		r: 10277,
    		f: 4.01,
    		l: "いただき"
    	},
    	{
    		r: 10278,
    		f: 4.01,
    		l: "有能"
    	},
    	{
    		r: 10279,
    		f: 4.01,
    		l: "酔っ払う"
    	},
    	{
    		r: 10280,
    		f: 4.01,
    		l: "俊"
    	},
    	{
    		r: 10281,
    		f: 4.01,
    		l: "開通"
    	},
    	{
    		r: 10282,
    		f: 4.01,
    		l: "吾"
    	},
    	{
    		r: 10283,
    		f: 4.01,
    		l: "居場所"
    	},
    	{
    		r: 10284,
    		f: 4.01,
    		l: "ダイヤ"
    	},
    	{
    		r: 10285,
    		f: 4.01,
    		l: "面倒くさい"
    	},
    	{
    		r: 10286,
    		f: 4.01,
    		l: "進め方"
    	},
    	{
    		r: 10287,
    		f: 4.01,
    		l: "まくり"
    	},
    	{
    		r: 10288,
    		f: 4.01,
    		l: "糧"
    	},
    	{
    		r: 10289,
    		f: 4.01,
    		l: "すれ違う"
    	},
    	{
    		r: 10290,
    		f: 4,
    		l: "的中"
    	},
    	{
    		r: 10291,
    		f: 4,
    		l: "手のひら"
    	},
    	{
    		r: 10292,
    		f: 4,
    		l: "アルファベット"
    	},
    	{
    		r: 10293,
    		f: 4,
    		l: "配"
    	},
    	{
    		r: 10294,
    		f: 4,
    		l: "質量"
    	},
    	{
    		r: 10295,
    		f: 4,
    		l: "つくす"
    	},
    	{
    		r: 10296,
    		f: 4,
    		l: "そっ"
    	},
    	{
    		r: 10297,
    		f: 4,
    		l: "異例"
    	},
    	{
    		r: 10298,
    		f: 4,
    		l: "神道"
    	},
    	{
    		r: 10299,
    		f: 4,
    		l: "だらだら"
    	},
    	{
    		r: 10300,
    		f: 4,
    		l: "主治医"
    	},
    	{
    		r: 10301,
    		f: 4,
    		l: "紫外線"
    	},
    	{
    		r: 10302,
    		f: 4,
    		l: "サックス"
    	},
    	{
    		r: 10303,
    		f: 4,
    		l: "勇"
    	},
    	{
    		r: 10304,
    		f: 3.99,
    		l: "佐野"
    	},
    	{
    		r: 10305,
    		f: 3.99,
    		l: "思い起こす"
    	},
    	{
    		r: 10306,
    		f: 3.99,
    		l: "メガ"
    	},
    	{
    		r: 10307,
    		f: 3.99,
    		l: "臭"
    	},
    	{
    		r: 10308,
    		f: 3.99,
    		l: "β"
    	},
    	{
    		r: 10309,
    		f: 3.99,
    		l: "取組む"
    	},
    	{
    		r: 10310,
    		f: 3.99,
    		l: "ひょっとしたら"
    	},
    	{
    		r: 10311,
    		f: 3.99,
    		l: "ペンギン"
    	},
    	{
    		r: 10312,
    		f: 3.99,
    		l: "アクセント"
    	},
    	{
    		r: 10313,
    		f: 3.99,
    		l: "量子"
    	},
    	{
    		r: 10314,
    		f: 3.99,
    		l: "錦"
    	},
    	{
    		r: 10315,
    		f: 3.99,
    		l: "薬剤"
    	},
    	{
    		r: 10316,
    		f: 3.99,
    		l: "ガム"
    	},
    	{
    		r: 10317,
    		f: 3.99,
    		l: "続出"
    	},
    	{
    		r: 10318,
    		f: 3.99,
    		l: "垣間見る"
    	},
    	{
    		r: 10319,
    		f: 3.99,
    		l: "腕時計"
    	},
    	{
    		r: 10320,
    		f: 3.99,
    		l: "ワイド"
    	},
    	{
    		r: 10321,
    		f: 3.99,
    		l: "モーニング"
    	},
    	{
    		r: 10322,
    		f: 3.99,
    		l: "ダイビング"
    	},
    	{
    		r: 10323,
    		f: 3.99,
    		l: "竹下"
    	},
    	{
    		r: 10324,
    		f: 3.99,
    		l: "盗聴"
    	},
    	{
    		r: 10325,
    		f: 3.99,
    		l: "望み"
    	},
    	{
    		r: 10326,
    		f: 3.99,
    		l: "賞金"
    	},
    	{
    		r: 10327,
    		f: 3.99,
    		l: "原始"
    	},
    	{
    		r: 10328,
    		f: 3.99,
    		l: "ミサ"
    	},
    	{
    		r: 10329,
    		f: 3.99,
    		l: "メロディー"
    	},
    	{
    		r: 10330,
    		f: 3.99,
    		l: "郷土"
    	},
    	{
    		r: 10331,
    		f: 3.98,
    		l: "ぐるぐる"
    	},
    	{
    		r: 10332,
    		f: 3.98,
    		l: "ギリシア"
    	},
    	{
    		r: 10333,
    		f: 3.98,
    		l: "反抗"
    	},
    	{
    		r: 10334,
    		f: 3.98,
    		l: "草子"
    	},
    	{
    		r: 10335,
    		f: 3.98,
    		l: "長編"
    	},
    	{
    		r: 10336,
    		f: 3.98,
    		l: "パル"
    	},
    	{
    		r: 10337,
    		f: 3.98,
    		l: "ロジック"
    	},
    	{
    		r: 10338,
    		f: 3.98,
    		l: "ワークス"
    	},
    	{
    		r: 10339,
    		f: 3.98,
    		l: "古田"
    	},
    	{
    		r: 10340,
    		f: 3.98,
    		l: "手袋"
    	},
    	{
    		r: 10341,
    		f: 3.98,
    		l: "ありがと"
    	},
    	{
    		r: 10342,
    		f: 3.98,
    		l: "尾崎"
    	},
    	{
    		r: 10343,
    		f: 3.98,
    		l: "定数"
    	},
    	{
    		r: 10344,
    		f: 3.98,
    		l: "モデム"
    	},
    	{
    		r: 10345,
    		f: 3.98,
    		l: "菊"
    	},
    	{
    		r: 10346,
    		f: 3.98,
    		l: "休止"
    	},
    	{
    		r: 10347,
    		f: 3.98,
    		l: "故意"
    	},
    	{
    		r: 10348,
    		f: 3.98,
    		l: "ＴＢＳ"
    	},
    	{
    		r: 10349,
    		f: 3.98,
    		l: "隣人"
    	},
    	{
    		r: 10350,
    		f: 3.98,
    		l: "物品"
    	},
    	{
    		r: 10351,
    		f: 3.98,
    		l: "吟味"
    	},
    	{
    		r: 10352,
    		f: 3.98,
    		l: "受かる"
    	},
    	{
    		r: 10353,
    		f: 3.97,
    		l: "バタバタ"
    	},
    	{
    		r: 10354,
    		f: 3.97,
    		l: "あな"
    	},
    	{
    		r: 10355,
    		f: 3.97,
    		l: "つくり"
    	},
    	{
    		r: 10356,
    		f: 3.97,
    		l: "分岐"
    	},
    	{
    		r: 10357,
    		f: 3.97,
    		l: "ツーリング"
    	},
    	{
    		r: 10358,
    		f: 3.97,
    		l: "地主"
    	},
    	{
    		r: 10359,
    		f: 3.97,
    		l: "むかし"
    	},
    	{
    		r: 10360,
    		f: 3.97,
    		l: "平面"
    	},
    	{
    		r: 10361,
    		f: 3.97,
    		l: "防"
    	},
    	{
    		r: 10362,
    		f: 3.97,
    		l: "見え"
    	},
    	{
    		r: 10363,
    		f: 3.97,
    		l: "高性能"
    	},
    	{
    		r: 10364,
    		f: 3.97,
    		l: "ココロ"
    	},
    	{
    		r: 10365,
    		f: 3.97,
    		l: "獲る"
    	},
    	{
    		r: 10366,
    		f: 3.96,
    		l: "労組"
    	},
    	{
    		r: 10367,
    		f: 3.96,
    		l: "巧"
    	},
    	{
    		r: 10368,
    		f: 3.96,
    		l: "出所"
    	},
    	{
    		r: 10369,
    		f: 3.96,
    		l: "女史"
    	},
    	{
    		r: 10370,
    		f: 3.96,
    		l: "揺れ"
    	},
    	{
    		r: 10371,
    		f: 3.96,
    		l: "増進"
    	},
    	{
    		r: 10372,
    		f: 3.96,
    		l: "横山"
    	},
    	{
    		r: 10373,
    		f: 3.96,
    		l: "片隅"
    	},
    	{
    		r: 10374,
    		f: 3.96,
    		l: "手首"
    	},
    	{
    		r: 10375,
    		f: 3.96,
    		l: "義理"
    	},
    	{
    		r: 10376,
    		f: 3.96,
    		l: "ロッテ"
    	},
    	{
    		r: 10377,
    		f: 3.96,
    		l: "同性愛"
    	},
    	{
    		r: 10378,
    		f: 3.96,
    		l: "誤差"
    	},
    	{
    		r: 10379,
    		f: 3.96,
    		l: "いわく"
    	},
    	{
    		r: 10380,
    		f: 3.96,
    		l: "一息"
    	},
    	{
    		r: 10381,
    		f: 3.96,
    		l: "ダル"
    	},
    	{
    		r: 10382,
    		f: 3.96,
    		l: "壁紙"
    	},
    	{
    		r: 10383,
    		f: 3.96,
    		l: "積み重ね"
    	},
    	{
    		r: 10384,
    		f: 3.96,
    		l: "横たわる"
    	},
    	{
    		r: 10385,
    		f: 3.95,
    		l: "手口"
    	},
    	{
    		r: 10386,
    		f: 3.95,
    		l: "納期"
    	},
    	{
    		r: 10387,
    		f: 3.95,
    		l: "年末年始"
    	},
    	{
    		r: 10388,
    		f: 3.95,
    		l: "済ます"
    	},
    	{
    		r: 10389,
    		f: 3.95,
    		l: "非常勤"
    	},
    	{
    		r: 10390,
    		f: 3.95,
    		l: "ツン"
    	},
    	{
    		r: 10391,
    		f: 3.95,
    		l: "注意深い"
    	},
    	{
    		r: 10392,
    		f: 3.95,
    		l: "スロット"
    	},
    	{
    		r: 10393,
    		f: 3.95,
    		l: "揚げる"
    	},
    	{
    		r: 10394,
    		f: 3.95,
    		l: "吸い込む"
    	},
    	{
    		r: 10395,
    		f: 3.95,
    		l: "スプーン"
    	},
    	{
    		r: 10396,
    		f: 3.95,
    		l: "エッチ"
    	},
    	{
    		r: 10397,
    		f: 3.95,
    		l: "マネジャー"
    	},
    	{
    		r: 10398,
    		f: 3.94,
    		l: "強み"
    	},
    	{
    		r: 10399,
    		f: 3.94,
    		l: "とり"
    	},
    	{
    		r: 10400,
    		f: 3.94,
    		l: "スリム"
    	},
    	{
    		r: 10401,
    		f: 3.94,
    		l: "傷害"
    	},
    	{
    		r: 10402,
    		f: 3.94,
    		l: "はな"
    	},
    	{
    		r: 10403,
    		f: 3.94,
    		l: "川上"
    	},
    	{
    		r: 10404,
    		f: 3.94,
    		l: "和食"
    	},
    	{
    		r: 10405,
    		f: 3.94,
    		l: "アキ"
    	},
    	{
    		r: 10406,
    		f: 3.94,
    		l: "どく"
    	},
    	{
    		r: 10407,
    		f: 3.94,
    		l: "パケット"
    	},
    	{
    		r: 10408,
    		f: 3.94,
    		l: "ちく"
    	},
    	{
    		r: 10409,
    		f: 3.94,
    		l: "商用"
    	},
    	{
    		r: 10410,
    		f: 3.94,
    		l: "寝室"
    	},
    	{
    		r: 10411,
    		f: 3.94,
    		l: "エホバ"
    	},
    	{
    		r: 10412,
    		f: 3.94,
    		l: "社交"
    	},
    	{
    		r: 10413,
    		f: 3.94,
    		l: "工務"
    	},
    	{
    		r: 10414,
    		f: 3.94,
    		l: "衆"
    	},
    	{
    		r: 10415,
    		f: 3.94,
    		l: "遊べる"
    	},
    	{
    		r: 10416,
    		f: 3.94,
    		l: "究明"
    	},
    	{
    		r: 10417,
    		f: 3.94,
    		l: "附属"
    	},
    	{
    		r: 10418,
    		f: 3.94,
    		l: "束"
    	},
    	{
    		r: 10419,
    		f: 3.94,
    		l: "愛着"
    	},
    	{
    		r: 10420,
    		f: 3.94,
    		l: "奥深い"
    	},
    	{
    		r: 10421,
    		f: 3.94,
    		l: "願"
    	},
    	{
    		r: 10422,
    		f: 3.94,
    		l: "たかが"
    	},
    	{
    		r: 10423,
    		f: 3.94,
    		l: "自閉症"
    	},
    	{
    		r: 10424,
    		f: 3.94,
    		l: "出血"
    	},
    	{
    		r: 10425,
    		f: 3.94,
    		l: "港湾"
    	},
    	{
    		r: 10426,
    		f: 3.93,
    		l: "貸出"
    	},
    	{
    		r: 10427,
    		f: 3.93,
    		l: "スカイ"
    	},
    	{
    		r: 10428,
    		f: 3.93,
    		l: "難易"
    	},
    	{
    		r: 10429,
    		f: 3.93,
    		l: "丈夫"
    	},
    	{
    		r: 10430,
    		f: 3.93,
    		l: "絶好"
    	},
    	{
    		r: 10431,
    		f: 3.93,
    		l: "早稲田大学"
    	},
    	{
    		r: 10432,
    		f: 3.93,
    		l: "禅"
    	},
    	{
    		r: 10433,
    		f: 3.93,
    		l: "議"
    	},
    	{
    		r: 10434,
    		f: 3.93,
    		l: "遮断"
    	},
    	{
    		r: 10435,
    		f: 3.93,
    		l: "射撃"
    	},
    	{
    		r: 10436,
    		f: 3.93,
    		l: "めく"
    	},
    	{
    		r: 10437,
    		f: 3.92,
    		l: "最前線"
    	},
    	{
    		r: 10438,
    		f: 3.92,
    		l: "自給"
    	},
    	{
    		r: 10439,
    		f: 3.92,
    		l: "増額"
    	},
    	{
    		r: 10440,
    		f: 3.92,
    		l: "ｐ"
    	},
    	{
    		r: 10441,
    		f: 3.92,
    		l: "日本橋"
    	},
    	{
    		r: 10442,
    		f: 3.92,
    		l: "独り"
    	},
    	{
    		r: 10443,
    		f: 3.92,
    		l: "読み上げる"
    	},
    	{
    		r: 10444,
    		f: 3.92,
    		l: "国務"
    	},
    	{
    		r: 10445,
    		f: 3.92,
    		l: "知識人"
    	},
    	{
    		r: 10446,
    		f: 3.92,
    		l: "イチゴ"
    	},
    	{
    		r: 10447,
    		f: 3.92,
    		l: "ふん"
    	},
    	{
    		r: 10448,
    		f: 3.92,
    		l: "ポチ"
    	},
    	{
    		r: 10449,
    		f: 3.92,
    		l: "放火"
    	},
    	{
    		r: 10450,
    		f: 3.92,
    		l: "ウル"
    	},
    	{
    		r: 10451,
    		f: 3.92,
    		l: "小銭"
    	},
    	{
    		r: 10452,
    		f: 3.92,
    		l: "お気"
    	},
    	{
    		r: 10453,
    		f: 3.92,
    		l: "会計士"
    	},
    	{
    		r: 10454,
    		f: 3.92,
    		l: "標"
    	},
    	{
    		r: 10455,
    		f: 3.92,
    		l: "賛否"
    	},
    	{
    		r: 10456,
    		f: 3.92,
    		l: "炭素"
    	},
    	{
    		r: 10457,
    		f: 3.92,
    		l: "着席"
    	},
    	{
    		r: 10458,
    		f: 3.92,
    		l: "民俗"
    	},
    	{
    		r: 10459,
    		f: 3.91,
    		l: "夕日"
    	},
    	{
    		r: 10460,
    		f: 3.91,
    		l: "受診"
    	},
    	{
    		r: 10461,
    		f: 3.91,
    		l: "楽園"
    	},
    	{
    		r: 10462,
    		f: 3.91,
    		l: "島根"
    	},
    	{
    		r: 10463,
    		f: 3.91,
    		l: "相応しい"
    	},
    	{
    		r: 10464,
    		f: 3.91,
    		l: "蘇る"
    	},
    	{
    		r: 10465,
    		f: 3.91,
    		l: "水田"
    	},
    	{
    		r: 10466,
    		f: 3.91,
    		l: "最優秀"
    	},
    	{
    		r: 10467,
    		f: 3.91,
    		l: "否める"
    	},
    	{
    		r: 10468,
    		f: 3.91,
    		l: "尺度"
    	},
    	{
    		r: 10469,
    		f: 3.91,
    		l: "朗"
    	},
    	{
    		r: 10470,
    		f: 3.91,
    		l: "唐突"
    	},
    	{
    		r: 10471,
    		f: 3.91,
    		l: "春樹"
    	},
    	{
    		r: 10472,
    		f: 3.91,
    		l: "寸法"
    	},
    	{
    		r: 10473,
    		f: 3.91,
    		l: "ファックス"
    	},
    	{
    		r: 10474,
    		f: 3.91,
    		l: "恐竜"
    	},
    	{
    		r: 10475,
    		f: 3.91,
    		l: "ミシン"
    	},
    	{
    		r: 10476,
    		f: 3.9,
    		l: "只"
    	},
    	{
    		r: 10477,
    		f: 3.9,
    		l: "おかず"
    	},
    	{
    		r: 10478,
    		f: 3.9,
    		l: "トーマス"
    	},
    	{
    		r: 10479,
    		f: 3.9,
    		l: "明細"
    	},
    	{
    		r: 10480,
    		f: 3.9,
    		l: "凄まじい"
    	},
    	{
    		r: 10481,
    		f: 3.9,
    		l: "つかめる"
    	},
    	{
    		r: 10482,
    		f: 3.9,
    		l: "隠し"
    	},
    	{
    		r: 10483,
    		f: 3.9,
    		l: "奴ら"
    	},
    	{
    		r: 10484,
    		f: 3.9,
    		l: "めぐみ"
    	},
    	{
    		r: 10485,
    		f: 3.9,
    		l: "一刻"
    	},
    	{
    		r: 10486,
    		f: 3.9,
    		l: "日経新聞"
    	},
    	{
    		r: 10487,
    		f: 3.89,
    		l: "古書"
    	},
    	{
    		r: 10488,
    		f: 3.89,
    		l: "本場"
    	},
    	{
    		r: 10489,
    		f: 3.89,
    		l: "呼べる"
    	},
    	{
    		r: 10490,
    		f: 3.89,
    		l: "真っ暗"
    	},
    	{
    		r: 10491,
    		f: 3.89,
    		l: "東欧"
    	},
    	{
    		r: 10492,
    		f: 3.89,
    		l: "百科"
    	},
    	{
    		r: 10493,
    		f: 3.89,
    		l: "アテネ"
    	},
    	{
    		r: 10494,
    		f: 3.89,
    		l: "ケリー"
    	},
    	{
    		r: 10495,
    		f: 3.89,
    		l: "東方"
    	},
    	{
    		r: 10496,
    		f: 3.89,
    		l: "焼ける"
    	},
    	{
    		r: 10497,
    		f: 3.89,
    		l: "暮れる"
    	},
    	{
    		r: 10498,
    		f: 3.89,
    		l: "照"
    	},
    	{
    		r: 10499,
    		f: 3.89,
    		l: "賢明"
    	},
    	{
    		r: 10500,
    		f: 3.88,
    		l: "哀しい"
    	},
    	{
    		r: 10501,
    		f: 3.88,
    		l: "接待"
    	},
    	{
    		r: 10502,
    		f: 3.88,
    		l: "痛める"
    	},
    	{
    		r: 10503,
    		f: 3.88,
    		l: "高松"
    	},
    	{
    		r: 10504,
    		f: 3.88,
    		l: "遥か"
    	},
    	{
    		r: 10505,
    		f: 3.88,
    		l: "走れる"
    	},
    	{
    		r: 10506,
    		f: 3.88,
    		l: "リレー"
    	},
    	{
    		r: 10507,
    		f: 3.88,
    		l: "斎"
    	},
    	{
    		r: 10508,
    		f: 3.88,
    		l: "滅多に"
    	},
    	{
    		r: 10509,
    		f: 3.88,
    		l: "セミ"
    	},
    	{
    		r: 10510,
    		f: 3.88,
    		l: "じゅう"
    	},
    	{
    		r: 10511,
    		f: 3.88,
    		l: "斬新"
    	},
    	{
    		r: 10512,
    		f: 3.88,
    		l: "糾弾"
    	},
    	{
    		r: 10513,
    		f: 3.88,
    		l: "岩波書店"
    	},
    	{
    		r: 10514,
    		f: 3.88,
    		l: "零"
    	},
    	{
    		r: 10515,
    		f: 3.88,
    		l: "宿舎"
    	},
    	{
    		r: 10516,
    		f: 3.87,
    		l: "原題"
    	},
    	{
    		r: 10517,
    		f: 3.87,
    		l: "うわさ"
    	},
    	{
    		r: 10518,
    		f: 3.87,
    		l: "協奏曲"
    	},
    	{
    		r: 10519,
    		f: 3.87,
    		l: "処刑"
    	},
    	{
    		r: 10520,
    		f: 3.87,
    		l: "染色"
    	},
    	{
    		r: 10521,
    		f: 3.87,
    		l: "明瞭"
    	},
    	{
    		r: 10522,
    		f: 3.87,
    		l: "日産"
    	},
    	{
    		r: 10523,
    		f: 3.87,
    		l: "おくる"
    	},
    	{
    		r: 10524,
    		f: 3.87,
    		l: "ランナー"
    	},
    	{
    		r: 10525,
    		f: 3.87,
    		l: "いたずら"
    	},
    	{
    		r: 10526,
    		f: 3.87,
    		l: "日帰り"
    	},
    	{
    		r: 10527,
    		f: 3.87,
    		l: "アーキテクチャ"
    	},
    	{
    		r: 10528,
    		f: 3.87,
    		l: "ｂ"
    	},
    	{
    		r: 10529,
    		f: 3.87,
    		l: "侍"
    	},
    	{
    		r: 10530,
    		f: 3.87,
    		l: "浦和"
    	},
    	{
    		r: 10531,
    		f: 3.87,
    		l: "建設省"
    	},
    	{
    		r: 10532,
    		f: 3.87,
    		l: "オルガン"
    	},
    	{
    		r: 10533,
    		f: 3.86,
    		l: "サマー"
    	},
    	{
    		r: 10534,
    		f: 3.86,
    		l: "バージョンアップ"
    	},
    	{
    		r: 10535,
    		f: 3.86,
    		l: "イエロー"
    	},
    	{
    		r: 10536,
    		f: 3.86,
    		l: "巷"
    	},
    	{
    		r: 10537,
    		f: 3.86,
    		l: "くらべる"
    	},
    	{
    		r: 10538,
    		f: 3.86,
    		l: "そん"
    	},
    	{
    		r: 10539,
    		f: 3.86,
    		l: "マニアック"
    	},
    	{
    		r: 10540,
    		f: 3.86,
    		l: "人前"
    	},
    	{
    		r: 10541,
    		f: 3.86,
    		l: "佐賀"
    	},
    	{
    		r: 10542,
    		f: 3.86,
    		l: "毎晩"
    	},
    	{
    		r: 10543,
    		f: 3.86,
    		l: "核心"
    	},
    	{
    		r: 10544,
    		f: 3.86,
    		l: "ベリー"
    	},
    	{
    		r: 10545,
    		f: 3.86,
    		l: "考案"
    	},
    	{
    		r: 10546,
    		f: 3.86,
    		l: "違憲"
    	},
    	{
    		r: 10547,
    		f: 3.86,
    		l: "盛"
    	},
    	{
    		r: 10548,
    		f: 3.86,
    		l: "貸し"
    	},
    	{
    		r: 10549,
    		f: 3.86,
    		l: "大将"
    	},
    	{
    		r: 10550,
    		f: 3.86,
    		l: "荒い"
    	},
    	{
    		r: 10551,
    		f: 3.86,
    		l: "お迎え"
    	},
    	{
    		r: 10552,
    		f: 3.86,
    		l: "道徳的"
    	},
    	{
    		r: 10553,
    		f: 3.86,
    		l: "描ける"
    	},
    	{
    		r: 10554,
    		f: 3.86,
    		l: "徳川"
    	},
    	{
    		r: 10555,
    		f: 3.86,
    		l: "飲み込む"
    	},
    	{
    		r: 10556,
    		f: 3.86,
    		l: "真夏"
    	},
    	{
    		r: 10557,
    		f: 3.85,
    		l: "望遠鏡"
    	},
    	{
    		r: 10558,
    		f: 3.85,
    		l: "何かしら"
    	},
    	{
    		r: 10559,
    		f: 3.85,
    		l: "タラ"
    	},
    	{
    		r: 10560,
    		f: 3.85,
    		l: "さっと"
    	},
    	{
    		r: 10561,
    		f: 3.85,
    		l: "補修"
    	},
    	{
    		r: 10562,
    		f: 3.85,
    		l: "縫う"
    	},
    	{
    		r: 10563,
    		f: 3.85,
    		l: "送れる"
    	},
    	{
    		r: 10564,
    		f: 3.85,
    		l: "アメリカ合衆国"
    	},
    	{
    		r: 10565,
    		f: 3.85,
    		l: "政界"
    	},
    	{
    		r: 10566,
    		f: 3.85,
    		l: "御座る"
    	},
    	{
    		r: 10567,
    		f: 3.85,
    		l: "カスタム"
    	},
    	{
    		r: 10568,
    		f: 3.85,
    		l: "多種"
    	},
    	{
    		r: 10569,
    		f: 3.84,
    		l: "バット"
    	},
    	{
    		r: 10570,
    		f: 3.84,
    		l: "チェックイン"
    	},
    	{
    		r: 10571,
    		f: 3.84,
    		l: "叫び"
    	},
    	{
    		r: 10572,
    		f: 3.84,
    		l: "汚す"
    	},
    	{
    		r: 10573,
    		f: 3.84,
    		l: "装う"
    	},
    	{
    		r: 10574,
    		f: 3.84,
    		l: "ＦＷ"
    	},
    	{
    		r: 10575,
    		f: 3.84,
    		l: "中日"
    	},
    	{
    		r: 10576,
    		f: 3.84,
    		l: "ウエスト"
    	},
    	{
    		r: 10577,
    		f: 3.84,
    		l: "ファイナンス"
    	},
    	{
    		r: 10578,
    		f: 3.84,
    		l: "すし"
    	},
    	{
    		r: 10579,
    		f: 3.84,
    		l: "半日"
    	},
    	{
    		r: 10580,
    		f: 3.84,
    		l: "年版"
    	},
    	{
    		r: 10581,
    		f: 3.84,
    		l: "水野"
    	},
    	{
    		r: 10582,
    		f: 3.84,
    		l: "ヨウ"
    	},
    	{
    		r: 10583,
    		f: 3.84,
    		l: "ねん"
    	},
    	{
    		r: 10584,
    		f: 3.84,
    		l: "振る舞い"
    	},
    	{
    		r: 10585,
    		f: 3.84,
    		l: "カム"
    	},
    	{
    		r: 10586,
    		f: 3.84,
    		l: "ヘクタール"
    	},
    	{
    		r: 10587,
    		f: 3.84,
    		l: "ワイ"
    	},
    	{
    		r: 10588,
    		f: 3.84,
    		l: "コンプレックス"
    	},
    	{
    		r: 10589,
    		f: 3.84,
    		l: "聞き取れる"
    	},
    	{
    		r: 10590,
    		f: 3.84,
    		l: "激励"
    	},
    	{
    		r: 10591,
    		f: 3.83,
    		l: "チャイナ"
    	},
    	{
    		r: 10592,
    		f: 3.83,
    		l: "静止"
    	},
    	{
    		r: 10593,
    		f: 3.83,
    		l: "やせる"
    	},
    	{
    		r: 10594,
    		f: 3.83,
    		l: "もうける"
    	},
    	{
    		r: 10595,
    		f: 3.83,
    		l: "議定"
    	},
    	{
    		r: 10596,
    		f: 3.83,
    		l: "クビ"
    	},
    	{
    		r: 10597,
    		f: 3.83,
    		l: "電脳"
    	},
    	{
    		r: 10598,
    		f: 3.83,
    		l: "忘年会"
    	},
    	{
    		r: 10599,
    		f: 3.83,
    		l: "挑発"
    	},
    	{
    		r: 10600,
    		f: 3.83,
    		l: "エステ"
    	},
    	{
    		r: 10601,
    		f: 3.83,
    		l: "連勝"
    	},
    	{
    		r: 10602,
    		f: 3.83,
    		l: "発作"
    	},
    	{
    		r: 10603,
    		f: 3.83,
    		l: "フェリー"
    	},
    	{
    		r: 10604,
    		f: 3.83,
    		l: "兎"
    	},
    	{
    		r: 10605,
    		f: 3.83,
    		l: "失格"
    	},
    	{
    		r: 10606,
    		f: 3.83,
    		l: "語りかける"
    	},
    	{
    		r: 10607,
    		f: 3.82,
    		l: "延びる"
    	},
    	{
    		r: 10608,
    		f: 3.82,
    		l: "庫"
    	},
    	{
    		r: 10609,
    		f: 3.82,
    		l: "一大"
    	},
    	{
    		r: 10610,
    		f: 3.82,
    		l: "バス停"
    	},
    	{
    		r: 10611,
    		f: 3.82,
    		l: "むける"
    	},
    	{
    		r: 10612,
    		f: 3.82,
    		l: "初戦"
    	},
    	{
    		r: 10613,
    		f: 3.82,
    		l: "フロリダ"
    	},
    	{
    		r: 10614,
    		f: 3.82,
    		l: "華麗"
    	},
    	{
    		r: 10615,
    		f: 3.82,
    		l: "茹でる"
    	},
    	{
    		r: 10616,
    		f: 3.82,
    		l: "けが"
    	},
    	{
    		r: 10617,
    		f: 3.82,
    		l: "公約"
    	},
    	{
    		r: 10618,
    		f: 3.82,
    		l: "弥生"
    	},
    	{
    		r: 10619,
    		f: 3.81,
    		l: "ためる"
    	},
    	{
    		r: 10620,
    		f: 3.81,
    		l: "ゲリラ"
    	},
    	{
    		r: 10621,
    		f: 3.81,
    		l: "値下げ"
    	},
    	{
    		r: 10622,
    		f: 3.81,
    		l: "茶色"
    	},
    	{
    		r: 10623,
    		f: 3.81,
    		l: "散らす"
    	},
    	{
    		r: 10624,
    		f: 3.81,
    		l: "冊子"
    	},
    	{
    		r: 10625,
    		f: 3.81,
    		l: "ことごとく"
    	},
    	{
    		r: 10626,
    		f: 3.81,
    		l: "陛下"
    	},
    	{
    		r: 10627,
    		f: 3.81,
    		l: "日立"
    	},
    	{
    		r: 10628,
    		f: 3.81,
    		l: "所定"
    	},
    	{
    		r: 10629,
    		f: 3.81,
    		l: "機嫌"
    	},
    	{
    		r: 10630,
    		f: 3.81,
    		l: "゛"
    	},
    	{
    		r: 10631,
    		f: 3.81,
    		l: "閉ざす"
    	},
    	{
    		r: 10632,
    		f: 3.81,
    		l: "味噌汁"
    	},
    	{
    		r: 10633,
    		f: 3.81,
    		l: "初版"
    	},
    	{
    		r: 10634,
    		f: 3.81,
    		l: "騎手"
    	},
    	{
    		r: 10635,
    		f: 3.8,
    		l: "オリ"
    	},
    	{
    		r: 10636,
    		f: 3.8,
    		l: "ランニング"
    	},
    	{
    		r: 10637,
    		f: 3.8,
    		l: "明かり"
    	},
    	{
    		r: 10638,
    		f: 3.8,
    		l: "アイヌ"
    	},
    	{
    		r: 10639,
    		f: 3.8,
    		l: "京都大学"
    	},
    	{
    		r: 10640,
    		f: 3.8,
    		l: "育ち"
    	},
    	{
    		r: 10641,
    		f: 3.8,
    		l: "おさまる"
    	},
    	{
    		r: 10642,
    		f: 3.8,
    		l: "羅"
    	},
    	{
    		r: 10643,
    		f: 3.8,
    		l: "警報"
    	},
    	{
    		r: 10644,
    		f: 3.8,
    		l: "造形"
    	},
    	{
    		r: 10645,
    		f: 3.8,
    		l: "中曽根"
    	},
    	{
    		r: 10646,
    		f: 3.8,
    		l: "昇"
    	},
    	{
    		r: 10647,
    		f: 3.79,
    		l: "フラワー"
    	},
    	{
    		r: 10648,
    		f: 3.79,
    		l: "近頃"
    	},
    	{
    		r: 10649,
    		f: 3.79,
    		l: "塗り"
    	},
    	{
    		r: 10650,
    		f: 3.79,
    		l: "不透明"
    	},
    	{
    		r: 10651,
    		f: 3.79,
    		l: "珍"
    	},
    	{
    		r: 10652,
    		f: 3.79,
    		l: "摘発"
    	},
    	{
    		r: 10653,
    		f: 3.79,
    		l: "ベータ"
    	},
    	{
    		r: 10654,
    		f: 3.79,
    		l: "相手方"
    	},
    	{
    		r: 10655,
    		f: 3.79,
    		l: "同月"
    	},
    	{
    		r: 10656,
    		f: 3.79,
    		l: "産物"
    	},
    	{
    		r: 10657,
    		f: 3.79,
    		l: "交易"
    	},
    	{
    		r: 10658,
    		f: 3.79,
    		l: "飛行場"
    	},
    	{
    		r: 10659,
    		f: 3.79,
    		l: "袖"
    	},
    	{
    		r: 10660,
    		f: 3.79,
    		l: "船長"
    	},
    	{
    		r: 10661,
    		f: 3.79,
    		l: "端子"
    	},
    	{
    		r: 10662,
    		f: 3.79,
    		l: "司祭"
    	},
    	{
    		r: 10663,
    		f: 3.79,
    		l: "言いよう"
    	},
    	{
    		r: 10664,
    		f: 3.79,
    		l: "後ほど"
    	},
    	{
    		r: 10665,
    		f: 3.79,
    		l: "本国"
    	},
    	{
    		r: 10666,
    		f: 3.79,
    		l: "胡"
    	},
    	{
    		r: 10667,
    		f: 3.79,
    		l: "佐"
    	},
    	{
    		r: 10668,
    		f: 3.79,
    		l: "心構え"
    	},
    	{
    		r: 10669,
    		f: 3.79,
    		l: "繋がり"
    	},
    	{
    		r: 10670,
    		f: 3.79,
    		l: "白黒"
    	},
    	{
    		r: 10671,
    		f: 3.79,
    		l: "当の"
    	},
    	{
    		r: 10672,
    		f: 3.79,
    		l: "殿下"
    	},
    	{
    		r: 10673,
    		f: 3.79,
    		l: "事業主"
    	},
    	{
    		r: 10674,
    		f: 3.79,
    		l: "さよなら"
    	},
    	{
    		r: 10675,
    		f: 3.78,
    		l: "赤外線"
    	},
    	{
    		r: 10676,
    		f: 3.78,
    		l: "藤本"
    	},
    	{
    		r: 10677,
    		f: 3.78,
    		l: "薬剤師"
    	},
    	{
    		r: 10678,
    		f: 3.78,
    		l: "興"
    	},
    	{
    		r: 10679,
    		f: 3.78,
    		l: "前々"
    	},
    	{
    		r: 10680,
    		f: 3.78,
    		l: "カブ"
    	},
    	{
    		r: 10681,
    		f: 3.78,
    		l: "敬"
    	},
    	{
    		r: 10682,
    		f: 3.78,
    		l: "憶える"
    	},
    	{
    		r: 10683,
    		f: 3.78,
    		l: "先行き"
    	},
    	{
    		r: 10684,
    		f: 3.78,
    		l: "二郎"
    	},
    	{
    		r: 10685,
    		f: 3.78,
    		l: "右脳"
    	},
    	{
    		r: 10686,
    		f: 3.78,
    		l: "体温"
    	},
    	{
    		r: 10687,
    		f: 3.78,
    		l: "控えめ"
    	},
    	{
    		r: 10688,
    		f: 3.78,
    		l: "乗り物"
    	},
    	{
    		r: 10689,
    		f: 3.78,
    		l: "全域"
    	},
    	{
    		r: 10690,
    		f: 3.78,
    		l: "ボルト"
    	},
    	{
    		r: 10691,
    		f: 3.77,
    		l: "丈"
    	},
    	{
    		r: 10692,
    		f: 3.77,
    		l: "区画"
    	},
    	{
    		r: 10693,
    		f: 3.77,
    		l: "アダルト"
    	},
    	{
    		r: 10694,
    		f: 3.77,
    		l: "枚数"
    	},
    	{
    		r: 10695,
    		f: 3.77,
    		l: "教義"
    	},
    	{
    		r: 10696,
    		f: 3.77,
    		l: "悲観"
    	},
    	{
    		r: 10697,
    		f: 3.77,
    		l: "外傷"
    	},
    	{
    		r: 10698,
    		f: 3.77,
    		l: "つたの"
    	},
    	{
    		r: 10699,
    		f: 3.77,
    		l: "でん"
    	},
    	{
    		r: 10700,
    		f: 3.77,
    		l: "更生"
    	},
    	{
    		r: 10701,
    		f: 3.77,
    		l: "両側"
    	},
    	{
    		r: 10702,
    		f: 3.77,
    		l: "柏"
    	},
    	{
    		r: 10703,
    		f: 3.77,
    		l: "リモコン"
    	},
    	{
    		r: 10704,
    		f: 3.77,
    		l: "左利き"
    	},
    	{
    		r: 10705,
    		f: 3.77,
    		l: "国内外"
    	},
    	{
    		r: 10706,
    		f: 3.77,
    		l: "キャップ"
    	},
    	{
    		r: 10707,
    		f: 3.77,
    		l: "支え"
    	},
    	{
    		r: 10708,
    		f: 3.77,
    		l: "逃亡"
    	},
    	{
    		r: 10709,
    		f: 3.77,
    		l: "暗黒"
    	},
    	{
    		r: 10710,
    		f: 3.77,
    		l: "各省"
    	},
    	{
    		r: 10711,
    		f: 3.77,
    		l: "コーラス"
    	},
    	{
    		r: 10712,
    		f: 3.77,
    		l: "ナチュラル"
    	},
    	{
    		r: 10713,
    		f: 3.77,
    		l: "ポンプ"
    	},
    	{
    		r: 10714,
    		f: 3.77,
    		l: "宇宙船"
    	},
    	{
    		r: 10715,
    		f: 3.77,
    		l: "遺言"
    	},
    	{
    		r: 10716,
    		f: 3.77,
    		l: "電化"
    	},
    	{
    		r: 10717,
    		f: 3.77,
    		l: "ご無沙汰"
    	},
    	{
    		r: 10718,
    		f: 3.77,
    		l: "三島"
    	},
    	{
    		r: 10719,
    		f: 3.76,
    		l: "割り切る"
    	},
    	{
    		r: 10720,
    		f: 3.76,
    		l: "面会"
    	},
    	{
    		r: 10721,
    		f: 3.76,
    		l: "エルサレム"
    	},
    	{
    		r: 10722,
    		f: 3.76,
    		l: "一面"
    	},
    	{
    		r: 10723,
    		f: 3.76,
    		l: "納入"
    	},
    	{
    		r: 10724,
    		f: 3.76,
    		l: "正す"
    	},
    	{
    		r: 10725,
    		f: 3.76,
    		l: "角川"
    	},
    	{
    		r: 10726,
    		f: 3.76,
    		l: "県庁"
    	},
    	{
    		r: 10727,
    		f: 3.76,
    		l: "すべ"
    	},
    	{
    		r: 10728,
    		f: 3.76,
    		l: "こえる"
    	},
    	{
    		r: 10729,
    		f: 3.76,
    		l: "細菌"
    	},
    	{
    		r: 10730,
    		f: 3.76,
    		l: "ちょう"
    	},
    	{
    		r: 10731,
    		f: 3.75,
    		l: "要員"
    	},
    	{
    		r: 10732,
    		f: 3.75,
    		l: "概ね"
    	},
    	{
    		r: 10733,
    		f: 3.75,
    		l: "教皇"
    	},
    	{
    		r: 10734,
    		f: 3.75,
    		l: "賜る"
    	},
    	{
    		r: 10735,
    		f: 3.75,
    		l: "買取"
    	},
    	{
    		r: 10736,
    		f: 3.75,
    		l: "累積"
    	},
    	{
    		r: 10737,
    		f: 3.75,
    		l: "文科"
    	},
    	{
    		r: 10738,
    		f: 3.75,
    		l: "新田"
    	},
    	{
    		r: 10739,
    		f: 3.75,
    		l: "歩み"
    	},
    	{
    		r: 10740,
    		f: 3.75,
    		l: "覆す"
    	},
    	{
    		r: 10741,
    		f: 3.75,
    		l: "なかでも"
    	},
    	{
    		r: 10742,
    		f: 3.75,
    		l: "チューブ"
    	},
    	{
    		r: 10743,
    		f: 3.75,
    		l: "台頭"
    	},
    	{
    		r: 10744,
    		f: 3.75,
    		l: "村長"
    	},
    	{
    		r: 10745,
    		f: 3.75,
    		l: "生き延びる"
    	},
    	{
    		r: 10746,
    		f: 3.75,
    		l: "過大"
    	},
    	{
    		r: 10747,
    		f: 3.75,
    		l: "無職"
    	},
    	{
    		r: 10748,
    		f: 3.75,
    		l: "消去"
    	},
    	{
    		r: 10749,
    		f: 3.75,
    		l: "破滅"
    	},
    	{
    		r: 10750,
    		f: 3.75,
    		l: "見いだす"
    	},
    	{
    		r: 10751,
    		f: 3.75,
    		l: "選別"
    	},
    	{
    		r: 10752,
    		f: 3.75,
    		l: "西武"
    	},
    	{
    		r: 10753,
    		f: 3.75,
    		l: "格納"
    	},
    	{
    		r: 10754,
    		f: 3.75,
    		l: "肝臓"
    	},
    	{
    		r: 10755,
    		f: 3.75,
    		l: "途方"
    	},
    	{
    		r: 10756,
    		f: 3.75,
    		l: "断食"
    	},
    	{
    		r: 10757,
    		f: 3.74,
    		l: "投影"
    	},
    	{
    		r: 10758,
    		f: 3.74,
    		l: "苦い"
    	},
    	{
    		r: 10759,
    		f: 3.74,
    		l: "熱中"
    	},
    	{
    		r: 10760,
    		f: 3.74,
    		l: "届出"
    	},
    	{
    		r: 10761,
    		f: 3.74,
    		l: "僧侶"
    	},
    	{
    		r: 10762,
    		f: 3.74,
    		l: "分業"
    	},
    	{
    		r: 10763,
    		f: 3.74,
    		l: "モロッコ"
    	},
    	{
    		r: 10764,
    		f: 3.74,
    		l: "長文"
    	},
    	{
    		r: 10765,
    		f: 3.74,
    		l: "買い取る"
    	},
    	{
    		r: 10766,
    		f: 3.74,
    		l: "ジョニー"
    	},
    	{
    		r: 10767,
    		f: 3.74,
    		l: "面談"
    	},
    	{
    		r: 10768,
    		f: 3.74,
    		l: "ふたたび"
    	},
    	{
    		r: 10769,
    		f: 3.74,
    		l: "年次"
    	},
    	{
    		r: 10770,
    		f: 3.74,
    		l: "クリントン"
    	},
    	{
    		r: 10771,
    		f: 3.74,
    		l: "付録"
    	},
    	{
    		r: 10772,
    		f: 3.73,
    		l: "柔道"
    	},
    	{
    		r: 10773,
    		f: 3.73,
    		l: "連行"
    	},
    	{
    		r: 10774,
    		f: 3.73,
    		l: "悪徳"
    	},
    	{
    		r: 10775,
    		f: 3.73,
    		l: "包丁"
    	},
    	{
    		r: 10776,
    		f: 3.73,
    		l: "CAD"
    	},
    	{
    		r: 10777,
    		f: 3.73,
    		l: "同調"
    	},
    	{
    		r: 10778,
    		f: 3.73,
    		l: "ダッシュ"
    	},
    	{
    		r: 10779,
    		f: 3.73,
    		l: "妙に"
    	},
    	{
    		r: 10780,
    		f: 3.73,
    		l: "一国"
    	},
    	{
    		r: 10781,
    		f: 3.73,
    		l: "暴落"
    	},
    	{
    		r: 10782,
    		f: 3.73,
    		l: "はう"
    	},
    	{
    		r: 10783,
    		f: 3.73,
    		l: "担い手"
    	},
    	{
    		r: 10784,
    		f: 3.73,
    		l: "公司"
    	},
    	{
    		r: 10785,
    		f: 3.73,
    		l: "諸島"
    	},
    	{
    		r: 10786,
    		f: 3.73,
    		l: "よみがえる"
    	},
    	{
    		r: 10787,
    		f: 3.73,
    		l: "有識者"
    	},
    	{
    		r: 10788,
    		f: 3.73,
    		l: "改装"
    	},
    	{
    		r: 10789,
    		f: 3.73,
    		l: "思いつき"
    	},
    	{
    		r: 10790,
    		f: 3.73,
    		l: "がい"
    	},
    	{
    		r: 10791,
    		f: 3.73,
    		l: "ミュンヘン"
    	},
    	{
    		r: 10792,
    		f: 3.73,
    		l: "抱きしめる"
    	},
    	{
    		r: 10793,
    		f: 3.73,
    		l: "気合い"
    	},
    	{
    		r: 10794,
    		f: 3.72,
    		l: "一夜"
    	},
    	{
    		r: 10795,
    		f: 3.72,
    		l: "統括"
    	},
    	{
    		r: 10796,
    		f: 3.72,
    		l: "供与"
    	},
    	{
    		r: 10797,
    		f: 3.72,
    		l: "に当たる"
    	},
    	{
    		r: 10798,
    		f: 3.72,
    		l: "脂"
    	},
    	{
    		r: 10799,
    		f: 3.72,
    		l: "矢野"
    	},
    	{
    		r: 10800,
    		f: 3.72,
    		l: "冷房"
    	},
    	{
    		r: 10801,
    		f: 3.72,
    		l: "ナポレオン"
    	},
    	{
    		r: 10802,
    		f: 3.72,
    		l: "レオ"
    	},
    	{
    		r: 10803,
    		f: 3.72,
    		l: "憎む"
    	},
    	{
    		r: 10804,
    		f: 3.72,
    		l: "手当て"
    	},
    	{
    		r: 10805,
    		f: 3.72,
    		l: "月別"
    	},
    	{
    		r: 10806,
    		f: 3.72,
    		l: "サボる"
    	},
    	{
    		r: 10807,
    		f: 3.72,
    		l: "ストレッチ"
    	},
    	{
    		r: 10808,
    		f: 3.71,
    		l: "主査"
    	},
    	{
    		r: 10809,
    		f: 3.71,
    		l: "蔓延"
    	},
    	{
    		r: 10810,
    		f: 3.71,
    		l: "ビート"
    	},
    	{
    		r: 10811,
    		f: 3.71,
    		l: "プライア"
    	},
    	{
    		r: 10812,
    		f: 3.71,
    		l: "開演"
    	},
    	{
    		r: 10813,
    		f: 3.71,
    		l: "陳情"
    	},
    	{
    		r: 10814,
    		f: 3.71,
    		l: "ドール"
    	},
    	{
    		r: 10815,
    		f: 3.71,
    		l: "批准"
    	},
    	{
    		r: 10816,
    		f: 3.71,
    		l: "眺め"
    	},
    	{
    		r: 10817,
    		f: 3.71,
    		l: "玄米"
    	},
    	{
    		r: 10818,
    		f: 3.71,
    		l: "ひさし"
    	},
    	{
    		r: 10819,
    		f: 3.71,
    		l: "インスタント"
    	},
    	{
    		r: 10820,
    		f: 3.71,
    		l: "漏らす"
    	},
    	{
    		r: 10821,
    		f: 3.71,
    		l: "運搬"
    	},
    	{
    		r: 10822,
    		f: 3.71,
    		l: "予備校"
    	},
    	{
    		r: 10823,
    		f: 3.71,
    		l: "イタリアン"
    	},
    	{
    		r: 10824,
    		f: 3.71,
    		l: "ぶっ"
    	},
    	{
    		r: 10825,
    		f: 3.71,
    		l: "遼"
    	},
    	{
    		r: 10826,
    		f: 3.71,
    		l: "引ける"
    	},
    	{
    		r: 10827,
    		f: 3.71,
    		l: "母体"
    	},
    	{
    		r: 10828,
    		f: 3.71,
    		l: "宅地"
    	},
    	{
    		r: 10829,
    		f: 3.71,
    		l: "ご馳走"
    	},
    	{
    		r: 10830,
    		f: 3.71,
    		l: "幸子"
    	},
    	{
    		r: 10831,
    		f: 3.71,
    		l: "断然"
    	},
    	{
    		r: 10832,
    		f: 3.71,
    		l: "日ごろ"
    	},
    	{
    		r: 10833,
    		f: 3.71,
    		l: "富士通"
    	},
    	{
    		r: 10834,
    		f: 3.71,
    		l: "リモート"
    	},
    	{
    		r: 10835,
    		f: 3.7,
    		l: "お洒落"
    	},
    	{
    		r: 10836,
    		f: 3.7,
    		l: "本稿"
    	},
    	{
    		r: 10837,
    		f: 3.7,
    		l: "恐る"
    	},
    	{
    		r: 10838,
    		f: 3.7,
    		l: "索引"
    	},
    	{
    		r: 10839,
    		f: 3.7,
    		l: "われる"
    	},
    	{
    		r: 10840,
    		f: 3.7,
    		l: "大嫌い"
    	},
    	{
    		r: 10841,
    		f: 3.7,
    		l: "見据える"
    	},
    	{
    		r: 10842,
    		f: 3.7,
    		l: "破損"
    	},
    	{
    		r: 10843,
    		f: 3.7,
    		l: "ハードル"
    	},
    	{
    		r: 10844,
    		f: 3.7,
    		l: "見知らぬ"
    	},
    	{
    		r: 10845,
    		f: 3.7,
    		l: "さんざん"
    	},
    	{
    		r: 10846,
    		f: 3.7,
    		l: "まったり"
    	},
    	{
    		r: 10847,
    		f: 3.7,
    		l: "こく"
    	},
    	{
    		r: 10848,
    		f: 3.7,
    		l: "灰色"
    	},
    	{
    		r: 10849,
    		f: 3.7,
    		l: "取り消す"
    	},
    	{
    		r: 10850,
    		f: 3.7,
    		l: "裁く"
    	},
    	{
    		r: 10851,
    		f: 3.7,
    		l: "過"
    	},
    	{
    		r: 10852,
    		f: 3.7,
    		l: "構内"
    	},
    	{
    		r: 10853,
    		f: 3.7,
    		l: "ベタ"
    	},
    	{
    		r: 10854,
    		f: 3.7,
    		l: "思い立つ"
    	},
    	{
    		r: 10855,
    		f: 3.7,
    		l: "貯蔵"
    	},
    	{
    		r: 10856,
    		f: 3.7,
    		l: "工学部"
    	},
    	{
    		r: 10857,
    		f: 3.69,
    		l: "王者"
    	},
    	{
    		r: 10858,
    		f: 3.69,
    		l: "混ざる"
    	},
    	{
    		r: 10859,
    		f: 3.69,
    		l: "魅了"
    	},
    	{
    		r: 10860,
    		f: 3.69,
    		l: "すんなり"
    	},
    	{
    		r: 10861,
    		f: 3.69,
    		l: "希薄"
    	},
    	{
    		r: 10862,
    		f: 3.69,
    		l: "気まま"
    	},
    	{
    		r: 10863,
    		f: 3.69,
    		l: "古川"
    	},
    	{
    		r: 10864,
    		f: 3.69,
    		l: "後編"
    	},
    	{
    		r: 10865,
    		f: 3.69,
    		l: "暁"
    	},
    	{
    		r: 10866,
    		f: 3.69,
    		l: "税源"
    	},
    	{
    		r: 10867,
    		f: 3.69,
    		l: "にあたり"
    	},
    	{
    		r: 10868,
    		f: 3.69,
    		l: "青色"
    	},
    	{
    		r: 10869,
    		f: 3.69,
    		l: "マリー"
    	},
    	{
    		r: 10870,
    		f: 3.69,
    		l: "将"
    	},
    	{
    		r: 10871,
    		f: 3.69,
    		l: "漱石"
    	},
    	{
    		r: 10872,
    		f: 3.69,
    		l: "足らず"
    	},
    	{
    		r: 10873,
    		f: 3.69,
    		l: "相方"
    	},
    	{
    		r: 10874,
    		f: 3.69,
    		l: "スクロール"
    	},
    	{
    		r: 10875,
    		f: 3.68,
    		l: "ジョーンズ"
    	},
    	{
    		r: 10876,
    		f: 3.68,
    		l: "ネジ"
    	},
    	{
    		r: 10877,
    		f: 3.68,
    		l: "だんだんと"
    	},
    	{
    		r: 10878,
    		f: 3.68,
    		l: "斜面"
    	},
    	{
    		r: 10879,
    		f: 3.68,
    		l: "空軍"
    	},
    	{
    		r: 10880,
    		f: 3.68,
    		l: "発端"
    	},
    	{
    		r: 10881,
    		f: 3.68,
    		l: "仕事場"
    	},
    	{
    		r: 10882,
    		f: 3.68,
    		l: "次官"
    	},
    	{
    		r: 10883,
    		f: 3.68,
    		l: "くむ"
    	},
    	{
    		r: 10884,
    		f: 3.68,
    		l: "あたたかい"
    	},
    	{
    		r: 10885,
    		f: 3.68,
    		l: "豚肉"
    	},
    	{
    		r: 10886,
    		f: 3.67,
    		l: "あるく"
    	},
    	{
    		r: 10887,
    		f: 3.67,
    		l: "微生物"
    	},
    	{
    		r: 10888,
    		f: 3.67,
    		l: "不服"
    	},
    	{
    		r: 10889,
    		f: 3.67,
    		l: "たいす"
    	},
    	{
    		r: 10890,
    		f: 3.67,
    		l: "一段と"
    	},
    	{
    		r: 10891,
    		f: 3.67,
    		l: "函館"
    	},
    	{
    		r: 10892,
    		f: 3.67,
    		l: "オシャレ"
    	},
    	{
    		r: 10893,
    		f: 3.67,
    		l: "ムリ"
    	},
    	{
    		r: 10894,
    		f: 3.67,
    		l: "至上"
    	},
    	{
    		r: 10895,
    		f: 3.67,
    		l: "サード"
    	},
    	{
    		r: 10896,
    		f: 3.67,
    		l: "藍"
    	},
    	{
    		r: 10897,
    		f: 3.67,
    		l: "優待"
    	},
    	{
    		r: 10898,
    		f: 3.67,
    		l: "労災"
    	},
    	{
    		r: 10899,
    		f: 3.67,
    		l: "取り締まり"
    	},
    	{
    		r: 10900,
    		f: 3.67,
    		l: "信長"
    	},
    	{
    		r: 10901,
    		f: 3.67,
    		l: "幼少"
    	},
    	{
    		r: 10902,
    		f: 3.67,
    		l: "こんなにも"
    	},
    	{
    		r: 10903,
    		f: 3.67,
    		l: "北東"
    	},
    	{
    		r: 10904,
    		f: 3.67,
    		l: "一文"
    	},
    	{
    		r: 10905,
    		f: 3.67,
    		l: "アンチ"
    	},
    	{
    		r: 10906,
    		f: 3.66,
    		l: "乙女"
    	},
    	{
    		r: 10907,
    		f: 3.66,
    		l: "れん"
    	},
    	{
    		r: 10908,
    		f: 3.66,
    		l: "速記"
    	},
    	{
    		r: 10909,
    		f: 3.66,
    		l: "競売"
    	},
    	{
    		r: 10910,
    		f: 3.66,
    		l: "かっこよい"
    	},
    	{
    		r: 10911,
    		f: 3.66,
    		l: "共和党"
    	},
    	{
    		r: 10912,
    		f: 3.66,
    		l: "おこす"
    	},
    	{
    		r: 10913,
    		f: 3.66,
    		l: "属"
    	},
    	{
    		r: 10914,
    		f: 3.66,
    		l: "ＦＡＸ"
    	},
    	{
    		r: 10915,
    		f: 3.66,
    		l: "接着"
    	},
    	{
    		r: 10916,
    		f: 3.66,
    		l: "ジェフ"
    	},
    	{
    		r: 10917,
    		f: 3.66,
    		l: "個室"
    	},
    	{
    		r: 10918,
    		f: 3.66,
    		l: "ありとあらゆる"
    	},
    	{
    		r: 10919,
    		f: 3.66,
    		l: "埋もれる"
    	},
    	{
    		r: 10920,
    		f: 3.66,
    		l: "黒田"
    	},
    	{
    		r: 10921,
    		f: 3.66,
    		l: "制覇"
    	},
    	{
    		r: 10922,
    		f: 3.66,
    		l: "役職"
    	},
    	{
    		r: 10923,
    		f: 3.66,
    		l: "際立つ"
    	},
    	{
    		r: 10924,
    		f: 3.66,
    		l: "ニコニコ"
    	},
    	{
    		r: 10925,
    		f: 3.66,
    		l: "目先"
    	},
    	{
    		r: 10926,
    		f: 3.66,
    		l: "攻勢"
    	},
    	{
    		r: 10927,
    		f: 3.66,
    		l: "かりに"
    	},
    	{
    		r: 10928,
    		f: 3.66,
    		l: "許諾"
    	},
    	{
    		r: 10929,
    		f: 3.65,
    		l: "突撃"
    	},
    	{
    		r: 10930,
    		f: 3.65,
    		l: "ディック"
    	},
    	{
    		r: 10931,
    		f: 3.65,
    		l: "頑固"
    	},
    	{
    		r: 10932,
    		f: 3.65,
    		l: "切実"
    	},
    	{
    		r: 10933,
    		f: 3.65,
    		l: "下半身"
    	},
    	{
    		r: 10934,
    		f: 3.65,
    		l: "レジャー"
    	},
    	{
    		r: 10935,
    		f: 3.65,
    		l: "へぇ"
    	},
    	{
    		r: 10936,
    		f: 3.65,
    		l: "偏差"
    	},
    	{
    		r: 10937,
    		f: 3.65,
    		l: "一体化"
    	},
    	{
    		r: 10938,
    		f: 3.65,
    		l: "転倒"
    	},
    	{
    		r: 10939,
    		f: 3.65,
    		l: "衣服"
    	},
    	{
    		r: 10940,
    		f: 3.65,
    		l: "折衝"
    	},
    	{
    		r: 10941,
    		f: 3.65,
    		l: "英寿"
    	},
    	{
    		r: 10942,
    		f: 3.65,
    		l: "切り取る"
    	},
    	{
    		r: 10943,
    		f: 3.65,
    		l: "追"
    	},
    	{
    		r: 10944,
    		f: 3.65,
    		l: "駆動"
    	},
    	{
    		r: 10945,
    		f: 3.65,
    		l: "入れ替える"
    	},
    	{
    		r: 10946,
    		f: 3.65,
    		l: "解像度"
    	},
    	{
    		r: 10947,
    		f: 3.65,
    		l: "スティング"
    	},
    	{
    		r: 10948,
    		f: 3.64,
    		l: "滑走"
    	},
    	{
    		r: 10949,
    		f: 3.64,
    		l: "注入"
    	},
    	{
    		r: 10950,
    		f: 3.64,
    		l: "むかう"
    	},
    	{
    		r: 10951,
    		f: 3.64,
    		l: "あきれる"
    	},
    	{
    		r: 10952,
    		f: 3.64,
    		l: "殺る"
    	},
    	{
    		r: 10953,
    		f: 3.64,
    		l: "語り合う"
    	},
    	{
    		r: 10954,
    		f: 3.64,
    		l: "淡路"
    	},
    	{
    		r: 10955,
    		f: 3.64,
    		l: "ムシる"
    	},
    	{
    		r: 10956,
    		f: 3.64,
    		l: "期す"
    	},
    	{
    		r: 10957,
    		f: 3.64,
    		l: "末端"
    	},
    	{
    		r: 10958,
    		f: 3.64,
    		l: "マンハッタン"
    	},
    	{
    		r: 10959,
    		f: 3.64,
    		l: "たとえる"
    	},
    	{
    		r: 10960,
    		f: 3.64,
    		l: "っと"
    	},
    	{
    		r: 10961,
    		f: 3.64,
    		l: "マダム"
    	},
    	{
    		r: 10962,
    		f: 3.64,
    		l: "気質"
    	},
    	{
    		r: 10963,
    		f: 3.64,
    		l: "課金"
    	},
    	{
    		r: 10964,
    		f: 3.64,
    		l: "ヘリコプター"
    	},
    	{
    		r: 10965,
    		f: 3.64,
    		l: "弁論"
    	},
    	{
    		r: 10966,
    		f: 3.64,
    		l: "凶悪"
    	},
    	{
    		r: 10967,
    		f: 3.64,
    		l: "松永"
    	},
    	{
    		r: 10968,
    		f: 3.64,
    		l: "くう"
    	},
    	{
    		r: 10969,
    		f: 3.64,
    		l: "たちまち"
    	},
    	{
    		r: 10970,
    		f: 3.64,
    		l: "モト"
    	},
    	{
    		r: 10971,
    		f: 3.64,
    		l: "ルカ"
    	},
    	{
    		r: 10972,
    		f: 3.64,
    		l: "キューブ"
    	},
    	{
    		r: 10973,
    		f: 3.64,
    		l: "健太郎"
    	},
    	{
    		r: 10974,
    		f: 3.64,
    		l: "担ぐ"
    	},
    	{
    		r: 10975,
    		f: 3.63,
    		l: "子宮"
    	},
    	{
    		r: 10976,
    		f: 3.63,
    		l: "憤る"
    	},
    	{
    		r: 10977,
    		f: 3.63,
    		l: "重宝"
    	},
    	{
    		r: 10978,
    		f: 3.63,
    		l: "難解"
    	},
    	{
    		r: 10979,
    		f: 3.63,
    		l: "捕獲"
    	},
    	{
    		r: 10980,
    		f: 3.63,
    		l: "雅"
    	},
    	{
    		r: 10981,
    		f: 3.63,
    		l: "ご苦労"
    	},
    	{
    		r: 10982,
    		f: 3.63,
    		l: "彼方"
    	},
    	{
    		r: 10983,
    		f: 3.63,
    		l: "因みに"
    	},
    	{
    		r: 10984,
    		f: 3.63,
    		l: "スタディ"
    	},
    	{
    		r: 10985,
    		f: 3.63,
    		l: "みずほ"
    	},
    	{
    		r: 10986,
    		f: 3.63,
    		l: "宝物"
    	},
    	{
    		r: 10987,
    		f: 3.63,
    		l: "ベクトル"
    	},
    	{
    		r: 10988,
    		f: 3.63,
    		l: "すわる"
    	},
    	{
    		r: 10989,
    		f: 3.63,
    		l: "回し"
    	},
    	{
    		r: 10990,
    		f: 3.63,
    		l: "太陽光"
    	},
    	{
    		r: 10991,
    		f: 3.63,
    		l: "赴く"
    	},
    	{
    		r: 10992,
    		f: 3.62,
    		l: "漏洩"
    	},
    	{
    		r: 10993,
    		f: 3.62,
    		l: "征服"
    	},
    	{
    		r: 10994,
    		f: 3.62,
    		l: "飛び交う"
    	},
    	{
    		r: 10995,
    		f: 3.62,
    		l: "ヘンリー"
    	},
    	{
    		r: 10996,
    		f: 3.62,
    		l: "山頂"
    	},
    	{
    		r: 10997,
    		f: 3.62,
    		l: "趣"
    	},
    	{
    		r: 10998,
    		f: 3.62,
    		l: "貯まる"
    	},
    	{
    		r: 10999,
    		f: 3.62,
    		l: "地方裁判所"
    	},
    	{
    		r: 11000,
    		f: 3.62,
    		l: "旋律"
    	},
    	{
    		r: 11001,
    		f: 3.62,
    		l: "ワーキング"
    	},
    	{
    		r: 11002,
    		f: 3.62,
    		l: "万一"
    	},
    	{
    		r: 11003,
    		f: 3.62,
    		l: "因子"
    	},
    	{
    		r: 11004,
    		f: 3.62,
    		l: "名言"
    	},
    	{
    		r: 11005,
    		f: 3.62,
    		l: "裕福"
    	},
    	{
    		r: 11006,
    		f: 3.62,
    		l: "変貌"
    	},
    	{
    		r: 11007,
    		f: 3.62,
    		l: "送り込む"
    	},
    	{
    		r: 11008,
    		f: 3.62,
    		l: "政務次官"
    	},
    	{
    		r: 11009,
    		f: 3.62,
    		l: "街頭"
    	},
    	{
    		r: 11010,
    		f: 3.62,
    		l: "フィード"
    	},
    	{
    		r: 11011,
    		f: 3.62,
    		l: "賛美"
    	},
    	{
    		r: 11012,
    		f: 3.62,
    		l: "ウォーク"
    	},
    	{
    		r: 11013,
    		f: 3.62,
    		l: "サンドイッチ"
    	},
    	{
    		r: 11014,
    		f: 3.62,
    		l: "押し寄せる"
    	},
    	{
    		r: 11015,
    		f: 3.61,
    		l: "悠"
    	},
    	{
    		r: 11016,
    		f: 3.61,
    		l: "すてき"
    	},
    	{
    		r: 11017,
    		f: 3.61,
    		l: "大小"
    	},
    	{
    		r: 11018,
    		f: 3.61,
    		l: "にたいして"
    	},
    	{
    		r: 11019,
    		f: 3.61,
    		l: "断固"
    	},
    	{
    		r: 11020,
    		f: 3.61,
    		l: "光学"
    	},
    	{
    		r: 11021,
    		f: 3.61,
    		l: "武道"
    	},
    	{
    		r: 11022,
    		f: 3.61,
    		l: "ちょいと"
    	},
    	{
    		r: 11023,
    		f: 3.61,
    		l: "講ずる"
    	},
    	{
    		r: 11024,
    		f: 3.61,
    		l: "辞職"
    	},
    	{
    		r: 11025,
    		f: 3.61,
    		l: "ａ"
    	},
    	{
    		r: 11026,
    		f: 3.61,
    		l: "言い聞かせる"
    	},
    	{
    		r: 11027,
    		f: 3.61,
    		l: "ついていける"
    	},
    	{
    		r: 11028,
    		f: 3.61,
    		l: "履修"
    	},
    	{
    		r: 11029,
    		f: 3.61,
    		l: "代償"
    	},
    	{
    		r: 11030,
    		f: 3.61,
    		l: "ハンター"
    	},
    	{
    		r: 11031,
    		f: 3.61,
    		l: "ひな"
    	},
    	{
    		r: 11032,
    		f: 3.61,
    		l: "かね"
    	},
    	{
    		r: 11033,
    		f: 3.61,
    		l: "再検討"
    	},
    	{
    		r: 11034,
    		f: 3.6,
    		l: "なぐ"
    	},
    	{
    		r: 11035,
    		f: 3.6,
    		l: "古来"
    	},
    	{
    		r: 11036,
    		f: 3.6,
    		l: "高温"
    	},
    	{
    		r: 11037,
    		f: 3.6,
    		l: "ヒロ"
    	},
    	{
    		r: 11038,
    		f: 3.6,
    		l: "驚愕"
    	},
    	{
    		r: 11039,
    		f: 3.6,
    		l: "乱れる"
    	},
    	{
    		r: 11040,
    		f: 3.6,
    		l: "靴下"
    	},
    	{
    		r: 11041,
    		f: 3.6,
    		l: "トウ"
    	},
    	{
    		r: 11042,
    		f: 3.6,
    		l: "マネージメント"
    	},
    	{
    		r: 11043,
    		f: 3.6,
    		l: "ストレージ"
    	},
    	{
    		r: 11044,
    		f: 3.6,
    		l: "ばらばら"
    	},
    	{
    		r: 11045,
    		f: 3.6,
    		l: "崖"
    	},
    	{
    		r: 11046,
    		f: 3.6,
    		l: "千代田"
    	},
    	{
    		r: 11047,
    		f: 3.6,
    		l: "帖"
    	},
    	{
    		r: 11048,
    		f: 3.6,
    		l: "妖怪"
    	},
    	{
    		r: 11049,
    		f: 3.6,
    		l: "文化庁"
    	},
    	{
    		r: 11050,
    		f: 3.6,
    		l: "盛況"
    	},
    	{
    		r: 11051,
    		f: 3.6,
    		l: "明言"
    	},
    	{
    		r: 11052,
    		f: 3.6,
    		l: "宝塚"
    	},
    	{
    		r: 11053,
    		f: 3.6,
    		l: "叶える"
    	},
    	{
    		r: 11054,
    		f: 3.6,
    		l: "御覧"
    	},
    	{
    		r: 11055,
    		f: 3.6,
    		l: "洞察"
    	},
    	{
    		r: 11056,
    		f: 3.6,
    		l: "温める"
    	},
    	{
    		r: 11057,
    		f: 3.6,
    		l: "行き着く"
    	},
    	{
    		r: 11058,
    		f: 3.6,
    		l: "カリ"
    	},
    	{
    		r: 11059,
    		f: 3.59,
    		l: "おう"
    	},
    	{
    		r: 11060,
    		f: 3.59,
    		l: "充てる"
    	},
    	{
    		r: 11061,
    		f: 3.59,
    		l: "文体"
    	},
    	{
    		r: 11062,
    		f: 3.59,
    		l: "手抜き"
    	},
    	{
    		r: 11063,
    		f: 3.59,
    		l: "美学"
    	},
    	{
    		r: 11064,
    		f: 3.59,
    		l: "現職"
    	},
    	{
    		r: 11065,
    		f: 3.59,
    		l: "つきあい"
    	},
    	{
    		r: 11066,
    		f: 3.59,
    		l: "参事官"
    	},
    	{
    		r: 11067,
    		f: 3.59,
    		l: "催眠"
    	},
    	{
    		r: 11068,
    		f: 3.59,
    		l: "ふれあう"
    	},
    	{
    		r: 11069,
    		f: 3.59,
    		l: "見合い"
    	},
    	{
    		r: 11070,
    		f: 3.59,
    		l: "それでいて"
    	},
    	{
    		r: 11071,
    		f: 3.58,
    		l: "京大"
    	},
    	{
    		r: 11072,
    		f: 3.58,
    		l: "ネック"
    	},
    	{
    		r: 11073,
    		f: 3.58,
    		l: "占有"
    	},
    	{
    		r: 11074,
    		f: 3.58,
    		l: "パール"
    	},
    	{
    		r: 11075,
    		f: 3.58,
    		l: "要点"
    	},
    	{
    		r: 11076,
    		f: 3.58,
    		l: "便宜"
    	},
    	{
    		r: 11077,
    		f: 3.58,
    		l: "だに"
    	},
    	{
    		r: 11078,
    		f: 3.58,
    		l: "チック"
    	},
    	{
    		r: 11079,
    		f: 3.58,
    		l: "回帰"
    	},
    	{
    		r: 11080,
    		f: 3.58,
    		l: "納品"
    	},
    	{
    		r: 11081,
    		f: 3.58,
    		l: "有事"
    	},
    	{
    		r: 11082,
    		f: 3.58,
    		l: "真っ先"
    	},
    	{
    		r: 11083,
    		f: 3.58,
    		l: "ひっそり"
    	},
    	{
    		r: 11084,
    		f: 3.58,
    		l: "傾斜"
    	},
    	{
    		r: 11085,
    		f: 3.58,
    		l: "ヤング"
    	},
    	{
    		r: 11086,
    		f: 3.58,
    		l: "卸"
    	},
    	{
    		r: 11087,
    		f: 3.58,
    		l: "逢う"
    	},
    	{
    		r: 11088,
    		f: 3.58,
    		l: "海賊"
    	},
    	{
    		r: 11089,
    		f: 3.58,
    		l: "腫瘍"
    	},
    	{
    		r: 11090,
    		f: 3.58,
    		l: "列挙"
    	},
    	{
    		r: 11091,
    		f: 3.58,
    		l: "異質"
    	},
    	{
    		r: 11092,
    		f: 3.58,
    		l: "ムラ"
    	},
    	{
    		r: 11093,
    		f: 3.58,
    		l: "月末"
    	},
    	{
    		r: 11094,
    		f: 3.57,
    		l: "初対面"
    	},
    	{
    		r: 11095,
    		f: 3.57,
    		l: "くり"
    	},
    	{
    		r: 11096,
    		f: 3.57,
    		l: "使いこなす"
    	},
    	{
    		r: 11097,
    		f: 3.57,
    		l: "図鑑"
    	},
    	{
    		r: 11098,
    		f: 3.57,
    		l: "おおよそ"
    	},
    	{
    		r: 11099,
    		f: 3.57,
    		l: "根強い"
    	},
    	{
    		r: 11100,
    		f: 3.57,
    		l: "忍"
    	},
    	{
    		r: 11101,
    		f: 3.57,
    		l: "ウインドウ"
    	},
    	{
    		r: 11102,
    		f: 3.57,
    		l: "しあわせ"
    	},
    	{
    		r: 11103,
    		f: 3.57,
    		l: "訳者"
    	},
    	{
    		r: 11104,
    		f: 3.57,
    		l: "白石"
    	},
    	{
    		r: 11105,
    		f: 3.57,
    		l: "粋"
    	},
    	{
    		r: 11106,
    		f: 3.57,
    		l: "作詞"
    	},
    	{
    		r: 11107,
    		f: 3.57,
    		l: "馴染む"
    	},
    	{
    		r: 11108,
    		f: 3.57,
    		l: "代物"
    	},
    	{
    		r: 11109,
    		f: 3.57,
    		l: "パズル"
    	},
    	{
    		r: 11110,
    		f: 3.56,
    		l: "蚊"
    	},
    	{
    		r: 11111,
    		f: 3.56,
    		l: "バッファ"
    	},
    	{
    		r: 11112,
    		f: 3.56,
    		l: "聴覚"
    	},
    	{
    		r: 11113,
    		f: 3.56,
    		l: "即時"
    	},
    	{
    		r: 11114,
    		f: 3.56,
    		l: "謂"
    	},
    	{
    		r: 11115,
    		f: 3.56,
    		l: "飯田"
    	},
    	{
    		r: 11116,
    		f: 3.56,
    		l: "塗料"
    	},
    	{
    		r: 11117,
    		f: 3.56,
    		l: "新車"
    	},
    	{
    		r: 11118,
    		f: 3.56,
    		l: "井戸"
    	},
    	{
    		r: 11119,
    		f: 3.56,
    		l: "赤坂"
    	},
    	{
    		r: 11120,
    		f: 3.56,
    		l: "リポート"
    	},
    	{
    		r: 11121,
    		f: 3.56,
    		l: "鈍い"
    	},
    	{
    		r: 11122,
    		f: 3.56,
    		l: "納付"
    	},
    	{
    		r: 11123,
    		f: 3.56,
    		l: "少人数"
    	},
    	{
    		r: 11124,
    		f: 3.56,
    		l: "俗"
    	},
    	{
    		r: 11125,
    		f: 3.56,
    		l: "無謀"
    	},
    	{
    		r: 11126,
    		f: 3.56,
    		l: "花嫁"
    	},
    	{
    		r: 11127,
    		f: 3.56,
    		l: "選び方"
    	},
    	{
    		r: 11128,
    		f: 3.56,
    		l: "服用"
    	},
    	{
    		r: 11129,
    		f: 3.56,
    		l: "あとがき"
    	},
    	{
    		r: 11130,
    		f: 3.56,
    		l: "パッド"
    	},
    	{
    		r: 11131,
    		f: 3.56,
    		l: "授与"
    	},
    	{
    		r: 11132,
    		f: 3.56,
    		l: "標高"
    	},
    	{
    		r: 11133,
    		f: 3.56,
    		l: "代える"
    	},
    	{
    		r: 11134,
    		f: 3.56,
    		l: "図形"
    	},
    	{
    		r: 11135,
    		f: 3.56,
    		l: "穀物"
    	},
    	{
    		r: 11136,
    		f: 3.56,
    		l: "困惑"
    	},
    	{
    		r: 11137,
    		f: 3.56,
    		l: "分厚い"
    	},
    	{
    		r: 11138,
    		f: 3.56,
    		l: "文学部"
    	},
    	{
    		r: 11139,
    		f: 3.56,
    		l: "上京"
    	},
    	{
    		r: 11140,
    		f: 3.56,
    		l: "リフレッシュ"
    	},
    	{
    		r: 11141,
    		f: 3.55,
    		l: "ミュージアム"
    	},
    	{
    		r: 11142,
    		f: 3.55,
    		l: "っちゅう"
    	},
    	{
    		r: 11143,
    		f: 3.55,
    		l: "つくば"
    	},
    	{
    		r: 11144,
    		f: 3.55,
    		l: "蒸気"
    	},
    	{
    		r: 11145,
    		f: 3.55,
    		l: "電磁波"
    	},
    	{
    		r: 11146,
    		f: 3.55,
    		l: "強固"
    	},
    	{
    		r: 11147,
    		f: 3.55,
    		l: "姉ちゃん"
    	},
    	{
    		r: 11148,
    		f: 3.55,
    		l: "万能"
    	},
    	{
    		r: 11149,
    		f: 3.55,
    		l: "吉野"
    	},
    	{
    		r: 11150,
    		f: 3.55,
    		l: "結集"
    	},
    	{
    		r: 11151,
    		f: 3.55,
    		l: "メタル"
    	},
    	{
    		r: 11152,
    		f: 3.55,
    		l: "役場"
    	},
    	{
    		r: 11153,
    		f: 3.55,
    		l: "忍者"
    	},
    	{
    		r: 11154,
    		f: 3.55,
    		l: "桜井"
    	},
    	{
    		r: 11155,
    		f: 3.55,
    		l: "必至"
    	},
    	{
    		r: 11156,
    		f: 3.55,
    		l: "仕入れ"
    	},
    	{
    		r: 11157,
    		f: 3.55,
    		l: "侮辱"
    	},
    	{
    		r: 11158,
    		f: 3.55,
    		l: "寄稿"
    	},
    	{
    		r: 11159,
    		f: 3.55,
    		l: "となり"
    	},
    	{
    		r: 11160,
    		f: 3.55,
    		l: "慮る"
    	},
    	{
    		r: 11161,
    		f: 3.55,
    		l: "カラダ"
    	},
    	{
    		r: 11162,
    		f: 3.54,
    		l: "吉岡"
    	},
    	{
    		r: 11163,
    		f: 3.54,
    		l: "作法"
    	},
    	{
    		r: 11164,
    		f: 3.54,
    		l: "良識"
    	},
    	{
    		r: 11165,
    		f: 3.54,
    		l: "バレンタイン"
    	},
    	{
    		r: 11166,
    		f: 3.54,
    		l: "味覚"
    	},
    	{
    		r: 11167,
    		f: 3.54,
    		l: "新潮社"
    	},
    	{
    		r: 11168,
    		f: 3.54,
    		l: "番外"
    	},
    	{
    		r: 11169,
    		f: 3.54,
    		l: "向かい"
    	},
    	{
    		r: 11170,
    		f: 3.54,
    		l: "受託"
    	},
    	{
    		r: 11171,
    		f: 3.54,
    		l: "大学院生"
    	},
    	{
    		r: 11172,
    		f: 3.54,
    		l: "クリーニング"
    	},
    	{
    		r: 11173,
    		f: 3.54,
    		l: "歩き回る"
    	},
    	{
    		r: 11174,
    		f: 3.54,
    		l: "平田"
    	},
    	{
    		r: 11175,
    		f: 3.54,
    		l: "メダル"
    	},
    	{
    		r: 11176,
    		f: 3.54,
    		l: "時給"
    	},
    	{
    		r: 11177,
    		f: 3.54,
    		l: "ニセ"
    	},
    	{
    		r: 11178,
    		f: 3.54,
    		l: "片づける"
    	},
    	{
    		r: 11179,
    		f: 3.54,
    		l: "小松"
    	},
    	{
    		r: 11180,
    		f: 3.54,
    		l: "派閥"
    	},
    	{
    		r: 11181,
    		f: 3.54,
    		l: "傍ら"
    	},
    	{
    		r: 11182,
    		f: 3.54,
    		l: "米価"
    	},
    	{
    		r: 11183,
    		f: 3.54,
    		l: "苦しめる"
    	},
    	{
    		r: 11184,
    		f: 3.54,
    		l: "テクノ"
    	},
    	{
    		r: 11185,
    		f: 3.54,
    		l: "着信"
    	},
    	{
    		r: 11186,
    		f: 3.54,
    		l: "相応"
    	},
    	{
    		r: 11187,
    		f: 3.54,
    		l: "終焉"
    	},
    	{
    		r: 11188,
    		f: 3.54,
    		l: "テール"
    	},
    	{
    		r: 11189,
    		f: 3.54,
    		l: "樹立"
    	},
    	{
    		r: 11190,
    		f: 3.54,
    		l: "係数"
    	},
    	{
    		r: 11191,
    		f: 3.53,
    		l: "堤"
    	},
    	{
    		r: 11192,
    		f: 3.53,
    		l: "大して"
    	},
    	{
    		r: 11193,
    		f: 3.53,
    		l: "遣う"
    	},
    	{
    		r: 11194,
    		f: 3.53,
    		l: "公然"
    	},
    	{
    		r: 11195,
    		f: 3.53,
    		l: "空手"
    	},
    	{
    		r: 11196,
    		f: 3.53,
    		l: "歌舞伎町"
    	},
    	{
    		r: 11197,
    		f: 3.53,
    		l: "鹿島"
    	},
    	{
    		r: 11198,
    		f: 3.53,
    		l: "西尾"
    	},
    	{
    		r: 11199,
    		f: 3.53,
    		l: "ブラインド"
    	},
    	{
    		r: 11200,
    		f: 3.53,
    		l: "木下"
    	},
    	{
    		r: 11201,
    		f: 3.53,
    		l: "ただちに"
    	},
    	{
    		r: 11202,
    		f: 3.53,
    		l: "模擬"
    	},
    	{
    		r: 11203,
    		f: 3.53,
    		l: "崎"
    	},
    	{
    		r: 11204,
    		f: 3.53,
    		l: "始動"
    	},
    	{
    		r: 11205,
    		f: 3.53,
    		l: "力量"
    	},
    	{
    		r: 11206,
    		f: 3.53,
    		l: "舐める"
    	},
    	{
    		r: 11207,
    		f: 3.53,
    		l: "ハブ"
    	},
    	{
    		r: 11208,
    		f: 3.53,
    		l: "散会"
    	},
    	{
    		r: 11209,
    		f: 3.53,
    		l: "歓声"
    	},
    	{
    		r: 11210,
    		f: 3.53,
    		l: "逃避"
    	},
    	{
    		r: 11211,
    		f: 3.53,
    		l: "ワシ"
    	},
    	{
    		r: 11212,
    		f: 3.53,
    		l: "道路公団"
    	},
    	{
    		r: 11213,
    		f: 3.52,
    		l: "ぼう"
    	},
    	{
    		r: 11214,
    		f: 3.52,
    		l: "併合"
    	},
    	{
    		r: 11215,
    		f: 3.52,
    		l: "留保"
    	},
    	{
    		r: 11216,
    		f: 3.52,
    		l: "秋山"
    	},
    	{
    		r: 11217,
    		f: 3.52,
    		l: "有志"
    	},
    	{
    		r: 11218,
    		f: 3.52,
    		l: "カプセル"
    	},
    	{
    		r: 11219,
    		f: 3.52,
    		l: "処女"
    	},
    	{
    		r: 11220,
    		f: 3.52,
    		l: "参院"
    	},
    	{
    		r: 11221,
    		f: 3.52,
    		l: "カナ"
    	},
    	{
    		r: 11222,
    		f: 3.52,
    		l: "バリュー"
    	},
    	{
    		r: 11223,
    		f: 3.52,
    		l: "わざ"
    	},
    	{
    		r: 11224,
    		f: 3.52,
    		l: "お忙しい"
    	},
    	{
    		r: 11225,
    		f: 3.52,
    		l: "ホームステイ"
    	},
    	{
    		r: 11226,
    		f: 3.52,
    		l: "感銘"
    	},
    	{
    		r: 11227,
    		f: 3.52,
    		l: "おん"
    	},
    	{
    		r: 11228,
    		f: 3.52,
    		l: "増設"
    	},
    	{
    		r: 11229,
    		f: 3.52,
    		l: "旅立つ"
    	},
    	{
    		r: 11230,
    		f: 3.52,
    		l: "浪費"
    	},
    	{
    		r: 11231,
    		f: 3.52,
    		l: "籍"
    	},
    	{
    		r: 11232,
    		f: 3.52,
    		l: "おぼえる"
    	},
    	{
    		r: 11233,
    		f: 3.52,
    		l: "直樹"
    	},
    	{
    		r: 11234,
    		f: 3.52,
    		l: "ノック"
    	},
    	{
    		r: 11235,
    		f: 3.52,
    		l: "派生"
    	},
    	{
    		r: 11236,
    		f: 3.52,
    		l: "指紋"
    	},
    	{
    		r: 11237,
    		f: 3.52,
    		l: "小児科"
    	},
    	{
    		r: 11238,
    		f: 3.52,
    		l: "舞踊"
    	},
    	{
    		r: 11239,
    		f: 3.52,
    		l: "振り向く"
    	},
    	{
    		r: 11240,
    		f: 3.52,
    		l: "使い分ける"
    	},
    	{
    		r: 11241,
    		f: 3.52,
    		l: "益々"
    	},
    	{
    		r: 11242,
    		f: 3.52,
    		l: "アンコール"
    	},
    	{
    		r: 11243,
    		f: 3.52,
    		l: "墜落"
    	},
    	{
    		r: 11244,
    		f: 3.51,
    		l: "鯨"
    	},
    	{
    		r: 11245,
    		f: 3.51,
    		l: "アンサンブル"
    	},
    	{
    		r: 11246,
    		f: 3.51,
    		l: "鉢"
    	},
    	{
    		r: 11247,
    		f: 3.51,
    		l: "少量"
    	},
    	{
    		r: 11248,
    		f: 3.51,
    		l: "おき"
    	},
    	{
    		r: 11249,
    		f: 3.51,
    		l: "利潤"
    	},
    	{
    		r: 11250,
    		f: 3.51,
    		l: "信条"
    	},
    	{
    		r: 11251,
    		f: 3.51,
    		l: "哲也"
    	},
    	{
    		r: 11252,
    		f: 3.51,
    		l: "しき"
    	},
    	{
    		r: 11253,
    		f: 3.51,
    		l: "反転"
    	},
    	{
    		r: 11254,
    		f: 3.51,
    		l: "社外"
    	},
    	{
    		r: 11255,
    		f: 3.51,
    		l: "〆"
    	},
    	{
    		r: 11256,
    		f: 3.51,
    		l: "応対"
    	},
    	{
    		r: 11257,
    		f: 3.51,
    		l: "量産"
    	},
    	{
    		r: 11258,
    		f: 3.51,
    		l: "アンダー"
    	},
    	{
    		r: 11259,
    		f: 3.51,
    		l: "ジェームズ"
    	},
    	{
    		r: 11260,
    		f: 3.51,
    		l: "延"
    	},
    	{
    		r: 11261,
    		f: 3.51,
    		l: "いやあ"
    	},
    	{
    		r: 11262,
    		f: 3.51,
    		l: "後世"
    	},
    	{
    		r: 11263,
    		f: 3.5,
    		l: "見慣れる"
    	},
    	{
    		r: 11264,
    		f: 3.5,
    		l: "移入"
    	},
    	{
    		r: 11265,
    		f: 3.5,
    		l: "保健所"
    	},
    	{
    		r: 11266,
    		f: 3.5,
    		l: "情景"
    	},
    	{
    		r: 11267,
    		f: 3.5,
    		l: "亀井"
    	},
    	{
    		r: 11268,
    		f: 3.5,
    		l: "チコ"
    	},
    	{
    		r: 11269,
    		f: 3.5,
    		l: "ミクロ"
    	},
    	{
    		r: 11270,
    		f: 3.5,
    		l: "呼称"
    	},
    	{
    		r: 11271,
    		f: 3.5,
    		l: "旅人"
    	},
    	{
    		r: 11272,
    		f: 3.5,
    		l: "迫害"
    	},
    	{
    		r: 11273,
    		f: 3.5,
    		l: "肩書き"
    	},
    	{
    		r: 11274,
    		f: 3.5,
    		l: "インフォメーション"
    	},
    	{
    		r: 11275,
    		f: 3.5,
    		l: "ナス"
    	},
    	{
    		r: 11276,
    		f: 3.5,
    		l: "水曜"
    	},
    	{
    		r: 11277,
    		f: 3.5,
    		l: "丸ごと"
    	},
    	{
    		r: 11278,
    		f: 3.5,
    		l: "はずれ"
    	},
    	{
    		r: 11279,
    		f: 3.5,
    		l: "ソファー"
    	},
    	{
    		r: 11280,
    		f: 3.5,
    		l: "オーディション"
    	},
    	{
    		r: 11281,
    		f: 3.5,
    		l: "オピニオン"
    	},
    	{
    		r: 11282,
    		f: 3.5,
    		l: "ジレンマ"
    	},
    	{
    		r: 11283,
    		f: 3.5,
    		l: "差し込む"
    	},
    	{
    		r: 11284,
    		f: 3.5,
    		l: "ハリス"
    	},
    	{
    		r: 11285,
    		f: 3.49,
    		l: "明後日"
    	},
    	{
    		r: 11286,
    		f: 3.49,
    		l: "吹奏楽"
    	},
    	{
    		r: 11287,
    		f: 3.49,
    		l: "下院"
    	},
    	{
    		r: 11288,
    		f: 3.49,
    		l: "わら"
    	},
    	{
    		r: 11289,
    		f: 3.49,
    		l: "石綿"
    	},
    	{
    		r: 11290,
    		f: 3.49,
    		l: "サンデー"
    	},
    	{
    		r: 11291,
    		f: 3.49,
    		l: "ハリケーン"
    	},
    	{
    		r: 11292,
    		f: 3.49,
    		l: "消"
    	},
    	{
    		r: 11293,
    		f: 3.49,
    		l: "共鳴"
    	},
    	{
    		r: 11294,
    		f: 3.49,
    		l: "主たる"
    	},
    	{
    		r: 11295,
    		f: 3.49,
    		l: "身の回り"
    	},
    	{
    		r: 11296,
    		f: 3.49,
    		l: "激減"
    	},
    	{
    		r: 11297,
    		f: 3.49,
    		l: "こぼす"
    	},
    	{
    		r: 11298,
    		f: 3.49,
    		l: "そら"
    	},
    	{
    		r: 11299,
    		f: 3.49,
    		l: "壊滅"
    	},
    	{
    		r: 11300,
    		f: 3.49,
    		l: "換気"
    	},
    	{
    		r: 11301,
    		f: 3.49,
    		l: "レバー"
    	},
    	{
    		r: 11302,
    		f: 3.49,
    		l: "空腹"
    	},
    	{
    		r: 11303,
    		f: 3.49,
    		l: "来訪"
    	},
    	{
    		r: 11304,
    		f: 3.49,
    		l: "ポートフォリオ"
    	},
    	{
    		r: 11305,
    		f: 3.49,
    		l: "電動"
    	},
    	{
    		r: 11306,
    		f: 3.49,
    		l: "ふむ"
    	},
    	{
    		r: 11307,
    		f: 3.49,
    		l: "セクハラ"
    	},
    	{
    		r: 11308,
    		f: 3.49,
    		l: "共著"
    	},
    	{
    		r: 11309,
    		f: 3.49,
    		l: "ブルジョア"
    	},
    	{
    		r: 11310,
    		f: 3.49,
    		l: "オンリー"
    	},
    	{
    		r: 11311,
    		f: 3.49,
    		l: "期末"
    	},
    	{
    		r: 11312,
    		f: 3.48,
    		l: "ほかなる"
    	},
    	{
    		r: 11313,
    		f: 3.48,
    		l: "縄文"
    	},
    	{
    		r: 11314,
    		f: 3.48,
    		l: "ゴールデンウィーク"
    	},
    	{
    		r: 11315,
    		f: 3.48,
    		l: "必修"
    	},
    	{
    		r: 11316,
    		f: 3.48,
    		l: "人文"
    	},
    	{
    		r: 11317,
    		f: 3.48,
    		l: "のく"
    	},
    	{
    		r: 11318,
    		f: 3.48,
    		l: "シューズ"
    	},
    	{
    		r: 11319,
    		f: 3.48,
    		l: "オファー"
    	},
    	{
    		r: 11320,
    		f: 3.48,
    		l: "フン"
    	},
    	{
    		r: 11321,
    		f: 3.48,
    		l: "替わる"
    	},
    	{
    		r: 11322,
    		f: 3.48,
    		l: "るる"
    	},
    	{
    		r: 11323,
    		f: 3.48,
    		l: "定か"
    	},
    	{
    		r: 11324,
    		f: 3.48,
    		l: "ヤマ"
    	},
    	{
    		r: 11325,
    		f: 3.48,
    		l: "読了"
    	},
    	{
    		r: 11326,
    		f: 3.48,
    		l: "山岳"
    	},
    	{
    		r: 11327,
    		f: 3.47,
    		l: "ヤード"
    	},
    	{
    		r: 11328,
    		f: 3.47,
    		l: "発祥"
    	},
    	{
    		r: 11329,
    		f: 3.47,
    		l: "浴衣"
    	},
    	{
    		r: 11330,
    		f: 3.47,
    		l: "亡くす"
    	},
    	{
    		r: 11331,
    		f: 3.47,
    		l: "交互"
    	},
    	{
    		r: 11332,
    		f: 3.47,
    		l: "淡々"
    	},
    	{
    		r: 11333,
    		f: 3.47,
    		l: "ワープロ"
    	},
    	{
    		r: 11334,
    		f: 3.47,
    		l: "すごす"
    	},
    	{
    		r: 11335,
    		f: 3.47,
    		l: "半減"
    	},
    	{
    		r: 11336,
    		f: 3.47,
    		l: "セーブ"
    	},
    	{
    		r: 11337,
    		f: 3.47,
    		l: "不必要"
    	},
    	{
    		r: 11338,
    		f: 3.47,
    		l: "メトロ"
    	},
    	{
    		r: 11339,
    		f: 3.47,
    		l: "不振"
    	},
    	{
    		r: 11340,
    		f: 3.47,
    		l: "ホルダー"
    	},
    	{
    		r: 11341,
    		f: 3.47,
    		l: "頭部"
    	},
    	{
    		r: 11342,
    		f: 3.47,
    		l: "盛り"
    	},
    	{
    		r: 11343,
    		f: 3.47,
    		l: "新入"
    	},
    	{
    		r: 11344,
    		f: 3.47,
    		l: "降ろす"
    	},
    	{
    		r: 11345,
    		f: 3.47,
    		l: "点滴"
    	},
    	{
    		r: 11346,
    		f: 3.47,
    		l: "行き先"
    	},
    	{
    		r: 11347,
    		f: 3.47,
    		l: "島田"
    	},
    	{
    		r: 11348,
    		f: 3.46,
    		l: "中原"
    	},
    	{
    		r: 11349,
    		f: 3.46,
    		l: "感度"
    	},
    	{
    		r: 11350,
    		f: 3.46,
    		l: "エコノミスト"
    	},
    	{
    		r: 11351,
    		f: 3.46,
    		l: "儀礼"
    	},
    	{
    		r: 11352,
    		f: 3.46,
    		l: "弾道"
    	},
    	{
    		r: 11353,
    		f: 3.46,
    		l: "背筋"
    	},
    	{
    		r: 11354,
    		f: 3.46,
    		l: "圭"
    	},
    	{
    		r: 11355,
    		f: 3.46,
    		l: "時速"
    	},
    	{
    		r: 11356,
    		f: 3.46,
    		l: "運び"
    	},
    	{
    		r: 11357,
    		f: 3.46,
    		l: "我ら"
    	},
    	{
    		r: 11358,
    		f: 3.46,
    		l: "日弁連"
    	},
    	{
    		r: 11359,
    		f: 3.46,
    		l: "実業"
    	},
    	{
    		r: 11360,
    		f: 3.46,
    		l: "マックス"
    	},
    	{
    		r: 11361,
    		f: 3.46,
    		l: "換える"
    	},
    	{
    		r: 11362,
    		f: 3.46,
    		l: "昇進"
    	},
    	{
    		r: 11363,
    		f: 3.46,
    		l: "慣行"
    	},
    	{
    		r: 11364,
    		f: 3.46,
    		l: "ダース"
    	},
    	{
    		r: 11365,
    		f: 3.46,
    		l: "親善"
    	},
    	{
    		r: 11366,
    		f: 3.46,
    		l: "やけに"
    	},
    	{
    		r: 11367,
    		f: 3.45,
    		l: "膨張"
    	},
    	{
    		r: 11368,
    		f: 3.45,
    		l: "ダイヤル"
    	},
    	{
    		r: 11369,
    		f: 3.45,
    		l: "かかわり"
    	},
    	{
    		r: 11370,
    		f: 3.45,
    		l: "売上げ"
    	},
    	{
    		r: 11371,
    		f: 3.45,
    		l: "合気道"
    	},
    	{
    		r: 11372,
    		f: 3.45,
    		l: "だるい"
    	},
    	{
    		r: 11373,
    		f: 3.45,
    		l: "向"
    	},
    	{
    		r: 11374,
    		f: 3.45,
    		l: "消毒"
    	},
    	{
    		r: 11375,
    		f: 3.45,
    		l: "代謝"
    	},
    	{
    		r: 11376,
    		f: 3.45,
    		l: "すじ"
    	},
    	{
    		r: 11377,
    		f: 3.45,
    		l: "レポ"
    	},
    	{
    		r: 11378,
    		f: 3.45,
    		l: "内緒"
    	},
    	{
    		r: 11379,
    		f: 3.45,
    		l: "晩年"
    	},
    	{
    		r: 11380,
    		f: 3.45,
    		l: "保留"
    	},
    	{
    		r: 11381,
    		f: 3.45,
    		l: "サバ"
    	},
    	{
    		r: 11382,
    		f: 3.45,
    		l: "幾何"
    	},
    	{
    		r: 11383,
    		f: 3.45,
    		l: "書簡"
    	},
    	{
    		r: 11384,
    		f: 3.45,
    		l: "過ぎ去る"
    	},
    	{
    		r: 11385,
    		f: 3.45,
    		l: "強姦"
    	},
    	{
    		r: 11386,
    		f: 3.45,
    		l: "わが家"
    	},
    	{
    		r: 11387,
    		f: 3.45,
    		l: "長老"
    	},
    	{
    		r: 11388,
    		f: 3.45,
    		l: "今季"
    	},
    	{
    		r: 11389,
    		f: 3.45,
    		l: "宣告"
    	},
    	{
    		r: 11390,
    		f: 3.45,
    		l: "滞る"
    	},
    	{
    		r: 11391,
    		f: 3.45,
    		l: "樹脂"
    	},
    	{
    		r: 11392,
    		f: 3.45,
    		l: "ひととき"
    	},
    	{
    		r: 11393,
    		f: 3.45,
    		l: "首長"
    	},
    	{
    		r: 11394,
    		f: 3.45,
    		l: "食い"
    	},
    	{
    		r: 11395,
    		f: 3.45,
    		l: "セレクト"
    	},
    	{
    		r: 11396,
    		f: 3.44,
    		l: "未成年"
    	},
    	{
    		r: 11397,
    		f: 3.44,
    		l: "コーラ"
    	},
    	{
    		r: 11398,
    		f: 3.44,
    		l: "受益"
    	},
    	{
    		r: 11399,
    		f: 3.44,
    		l: "カントリー"
    	},
    	{
    		r: 11400,
    		f: 3.44,
    		l: "アラスカ"
    	},
    	{
    		r: 11401,
    		f: 3.44,
    		l: "見捨てる"
    	},
    	{
    		r: 11402,
    		f: 3.44,
    		l: "アインシュタイン"
    	},
    	{
    		r: 11403,
    		f: 3.44,
    		l: "待望"
    	},
    	{
    		r: 11404,
    		f: 3.44,
    		l: "思ふ"
    	},
    	{
    		r: 11405,
    		f: 3.44,
    		l: "歪み"
    	},
    	{
    		r: 11406,
    		f: 3.44,
    		l: "特区"
    	},
    	{
    		r: 11407,
    		f: 3.44,
    		l: "スキャンダル"
    	},
    	{
    		r: 11408,
    		f: 3.44,
    		l: "苦戦"
    	},
    	{
    		r: 11409,
    		f: 3.44,
    		l: "君主"
    	},
    	{
    		r: 11410,
    		f: 3.44,
    		l: "公債"
    	},
    	{
    		r: 11411,
    		f: 3.44,
    		l: "キラキラ"
    	},
    	{
    		r: 11412,
    		f: 3.43,
    		l: "鷹"
    	},
    	{
    		r: 11413,
    		f: 3.43,
    		l: "いち早い"
    	},
    	{
    		r: 11414,
    		f: 3.43,
    		l: "感じ取る"
    	},
    	{
    		r: 11415,
    		f: 3.43,
    		l: "につき"
    	},
    	{
    		r: 11416,
    		f: 3.43,
    		l: "能率"
    	},
    	{
    		r: 11417,
    		f: 3.43,
    		l: "にせる"
    	},
    	{
    		r: 11418,
    		f: 3.43,
    		l: "バレー"
    	},
    	{
    		r: 11419,
    		f: 3.43,
    		l: "咳"
    	},
    	{
    		r: 11420,
    		f: 3.43,
    		l: "渡航"
    	},
    	{
    		r: 11421,
    		f: 3.43,
    		l: "くわえる"
    	},
    	{
    		r: 11422,
    		f: 3.43,
    		l: "星座"
    	},
    	{
    		r: 11423,
    		f: 3.43,
    		l: "セットアップ"
    	},
    	{
    		r: 11424,
    		f: 3.43,
    		l: "勝者"
    	},
    	{
    		r: 11425,
    		f: 3.43,
    		l: "内藤"
    	},
    	{
    		r: 11426,
    		f: 3.43,
    		l: "アポ"
    	},
    	{
    		r: 11427,
    		f: 3.43,
    		l: "真空"
    	},
    	{
    		r: 11428,
    		f: 3.43,
    		l: "健在"
    	},
    	{
    		r: 11429,
    		f: 3.43,
    		l: "一帯"
    	},
    	{
    		r: 11430,
    		f: 3.43,
    		l: "決戦"
    	},
    	{
    		r: 11431,
    		f: 3.43,
    		l: "放射能"
    	},
    	{
    		r: 11432,
    		f: 3.43,
    		l: "原型"
    	},
    	{
    		r: 11433,
    		f: 3.43,
    		l: "淵"
    	},
    	{
    		r: 11434,
    		f: 3.43,
    		l: "高揚"
    	},
    	{
    		r: 11435,
    		f: 3.43,
    		l: "無人"
    	},
    	{
    		r: 11436,
    		f: 3.43,
    		l: "水戸"
    	},
    	{
    		r: 11437,
    		f: 3.43,
    		l: "眉"
    	},
    	{
    		r: 11438,
    		f: 3.42,
    		l: "調味"
    	},
    	{
    		r: 11439,
    		f: 3.42,
    		l: "湿気"
    	},
    	{
    		r: 11440,
    		f: 3.42,
    		l: "連立"
    	},
    	{
    		r: 11441,
    		f: 3.42,
    		l: "とら"
    	},
    	{
    		r: 11442,
    		f: 3.42,
    		l: "長々"
    	},
    	{
    		r: 11443,
    		f: 3.42,
    		l: "ひも"
    	},
    	{
    		r: 11444,
    		f: 3.42,
    		l: "町田"
    	},
    	{
    		r: 11445,
    		f: 3.42,
    		l: "カバン"
    	},
    	{
    		r: 11446,
    		f: 3.42,
    		l: "火力"
    	},
    	{
    		r: 11447,
    		f: 3.42,
    		l: "靖"
    	},
    	{
    		r: 11448,
    		f: 3.42,
    		l: "トライアル"
    	},
    	{
    		r: 11449,
    		f: 3.42,
    		l: "修学旅行"
    	},
    	{
    		r: 11450,
    		f: 3.42,
    		l: "草原"
    	},
    	{
    		r: 11451,
    		f: 3.42,
    		l: "ていう"
    	},
    	{
    		r: 11452,
    		f: 3.42,
    		l: "メンテ"
    	},
    	{
    		r: 11453,
    		f: 3.42,
    		l: "すばやい"
    	},
    	{
    		r: 11454,
    		f: 3.42,
    		l: "田口"
    	},
    	{
    		r: 11455,
    		f: 3.41,
    		l: "目の当たり"
    	},
    	{
    		r: 11456,
    		f: 3.41,
    		l: "ピット"
    	},
    	{
    		r: 11457,
    		f: 3.41,
    		l: "呈す"
    	},
    	{
    		r: 11458,
    		f: 3.41,
    		l: "甥"
    	},
    	{
    		r: 11459,
    		f: 3.41,
    		l: "積"
    	},
    	{
    		r: 11460,
    		f: 3.41,
    		l: "耕"
    	},
    	{
    		r: 11461,
    		f: 3.41,
    		l: "コク"
    	},
    	{
    		r: 11462,
    		f: 3.41,
    		l: "省エネ"
    	},
    	{
    		r: 11463,
    		f: 3.41,
    		l: "レック"
    	},
    	{
    		r: 11464,
    		f: 3.41,
    		l: "出国"
    	},
    	{
    		r: 11465,
    		f: 3.41,
    		l: "リボン"
    	},
    	{
    		r: 11466,
    		f: 3.41,
    		l: "ロク"
    	},
    	{
    		r: 11467,
    		f: 3.41,
    		l: "葉っぱ"
    	},
    	{
    		r: 11468,
    		f: 3.41,
    		l: "年来"
    	},
    	{
    		r: 11469,
    		f: 3.41,
    		l: "あいにく"
    	},
    	{
    		r: 11470,
    		f: 3.41,
    		l: "被爆"
    	},
    	{
    		r: 11471,
    		f: 3.41,
    		l: "パウロ"
    	},
    	{
    		r: 11472,
    		f: 3.41,
    		l: "内戦"
    	},
    	{
    		r: 11473,
    		f: 3.41,
    		l: "小麦"
    	},
    	{
    		r: 11474,
    		f: 3.41,
    		l: "はしゃぐ"
    	},
    	{
    		r: 11475,
    		f: 3.41,
    		l: "ちび"
    	},
    	{
    		r: 11476,
    		f: 3.41,
    		l: "電話機"
    	},
    	{
    		r: 11477,
    		f: 3.41,
    		l: "じゃぁ"
    	},
    	{
    		r: 11478,
    		f: 3.41,
    		l: "大久保"
    	},
    	{
    		r: 11479,
    		f: 3.4,
    		l: "村人"
    	},
    	{
    		r: 11480,
    		f: 3.4,
    		l: "各人"
    	},
    	{
    		r: 11481,
    		f: 3.4,
    		l: "故に"
    	},
    	{
    		r: 11482,
    		f: 3.4,
    		l: "退席"
    	},
    	{
    		r: 11483,
    		f: 3.4,
    		l: "含有"
    	},
    	{
    		r: 11484,
    		f: 3.4,
    		l: "可愛らしい"
    	},
    	{
    		r: 11485,
    		f: 3.4,
    		l: "依る"
    	},
    	{
    		r: 11486,
    		f: 3.4,
    		l: "大まか"
    	},
    	{
    		r: 11487,
    		f: 3.4,
    		l: "親方"
    	},
    	{
    		r: 11488,
    		f: 3.4,
    		l: "らく"
    	},
    	{
    		r: 11489,
    		f: 3.39,
    		l: "通院"
    	},
    	{
    		r: 11490,
    		f: 3.39,
    		l: "衰える"
    	},
    	{
    		r: 11491,
    		f: 3.39,
    		l: "細"
    	},
    	{
    		r: 11492,
    		f: 3.39,
    		l: "値引き"
    	},
    	{
    		r: 11493,
    		f: 3.39,
    		l: "ツイン"
    	},
    	{
    		r: 11494,
    		f: 3.39,
    		l: "ハリ"
    	},
    	{
    		r: 11495,
    		f: 3.39,
    		l: "風習"
    	},
    	{
    		r: 11496,
    		f: 3.39,
    		l: "まね"
    	},
    	{
    		r: 11497,
    		f: 3.39,
    		l: "乖離"
    	},
    	{
    		r: 11498,
    		f: 3.39,
    		l: "食らう"
    	},
    	{
    		r: 11499,
    		f: 3.39,
    		l: "リバー"
    	},
    	{
    		r: 11500,
    		f: 3.39,
    		l: "波及"
    	},
    	{
    		r: 11501,
    		f: 3.39,
    		l: "ウー"
    	},
    	{
    		r: 11502,
    		f: 3.39,
    		l: "凶"
    	},
    	{
    		r: 11503,
    		f: 3.39,
    		l: "ＣＧ"
    	},
    	{
    		r: 11504,
    		f: 3.39,
    		l: "使徒"
    	},
    	{
    		r: 11505,
    		f: 3.39,
    		l: "見積"
    	},
    	{
    		r: 11506,
    		f: 3.39,
    		l: "ニフティ"
    	},
    	{
    		r: 11507,
    		f: 3.39,
    		l: "キャスター"
    	},
    	{
    		r: 11508,
    		f: 3.39,
    		l: "公務"
    	},
    	{
    		r: 11509,
    		f: 3.39,
    		l: "同然"
    	},
    	{
    		r: 11510,
    		f: 3.39,
    		l: "元来"
    	},
    	{
    		r: 11511,
    		f: 3.39,
    		l: "披露宴"
    	},
    	{
    		r: 11512,
    		f: 3.38,
    		l: "閉じ込める"
    	},
    	{
    		r: 11513,
    		f: 3.38,
    		l: "為す"
    	},
    	{
    		r: 11514,
    		f: 3.38,
    		l: "一読"
    	},
    	{
    		r: 11515,
    		f: 3.38,
    		l: "孤児"
    	},
    	{
    		r: 11516,
    		f: 3.38,
    		l: "恣意"
    	},
    	{
    		r: 11517,
    		f: 3.38,
    		l: "実演"
    	},
    	{
    		r: 11518,
    		f: 3.38,
    		l: "媒介"
    	},
    	{
    		r: 11519,
    		f: 3.38,
    		l: "ブーツ"
    	},
    	{
    		r: 11520,
    		f: 3.38,
    		l: "勝ち取る"
    	},
    	{
    		r: 11521,
    		f: 3.38,
    		l: "グリップ"
    	},
    	{
    		r: 11522,
    		f: 3.38,
    		l: "爽快"
    	},
    	{
    		r: 11523,
    		f: 3.38,
    		l: "照会"
    	},
    	{
    		r: 11524,
    		f: 3.38,
    		l: "磁気"
    	},
    	{
    		r: 11525,
    		f: 3.38,
    		l: "他人事"
    	},
    	{
    		r: 11526,
    		f: 3.38,
    		l: "かすか"
    	},
    	{
    		r: 11527,
    		f: 3.38,
    		l: "一線"
    	},
    	{
    		r: 11528,
    		f: 3.38,
    		l: "クラーク"
    	},
    	{
    		r: 11529,
    		f: 3.38,
    		l: "生ずる"
    	},
    	{
    		r: 11530,
    		f: 3.38,
    		l: "石鹸"
    	},
    	{
    		r: 11531,
    		f: 3.37,
    		l: "別名"
    	},
    	{
    		r: 11532,
    		f: 3.37,
    		l: "堕落"
    	},
    	{
    		r: 11533,
    		f: 3.37,
    		l: "カクテル"
    	},
    	{
    		r: 11534,
    		f: 3.37,
    		l: "淋しい"
    	},
    	{
    		r: 11535,
    		f: 3.37,
    		l: "節目"
    	},
    	{
    		r: 11536,
    		f: 3.37,
    		l: "レイプ"
    	},
    	{
    		r: 11537,
    		f: 3.37,
    		l: "愛読"
    	},
    	{
    		r: 11538,
    		f: 3.37,
    		l: "精霊"
    	},
    	{
    		r: 11539,
    		f: 3.37,
    		l: "資する"
    	},
    	{
    		r: 11540,
    		f: 3.37,
    		l: "丁"
    	},
    	{
    		r: 11541,
    		f: 3.37,
    		l: "ひいては"
    	},
    	{
    		r: 11542,
    		f: 3.37,
    		l: "五つ"
    	},
    	{
    		r: 11543,
    		f: 3.37,
    		l: "セントラル"
    	},
    	{
    		r: 11544,
    		f: 3.37,
    		l: "高官"
    	},
    	{
    		r: 11545,
    		f: 3.37,
    		l: "廣"
    	},
    	{
    		r: 11546,
    		f: 3.37,
    		l: "プレミア"
    	},
    	{
    		r: 11547,
    		f: 3.37,
    		l: "荷"
    	},
    	{
    		r: 11548,
    		f: 3.37,
    		l: "まとう"
    	},
    	{
    		r: 11549,
    		f: 3.37,
    		l: "今期"
    	},
    	{
    		r: 11550,
    		f: 3.37,
    		l: "繁盛"
    	},
    	{
    		r: 11551,
    		f: 3.37,
    		l: "はめる"
    	},
    	{
    		r: 11552,
    		f: 3.37,
    		l: "下位"
    	},
    	{
    		r: 11553,
    		f: 3.37,
    		l: "婚姻"
    	},
    	{
    		r: 11554,
    		f: 3.37,
    		l: "五郎"
    	},
    	{
    		r: 11555,
    		f: 3.37,
    		l: "ぬいぐるみ"
    	},
    	{
    		r: 11556,
    		f: 3.37,
    		l: "休める"
    	},
    	{
    		r: 11557,
    		f: 3.37,
    		l: "兆し"
    	},
    	{
    		r: 11558,
    		f: 3.37,
    		l: "奏でる"
    	},
    	{
    		r: 11559,
    		f: 3.37,
    		l: "組み立て"
    	},
    	{
    		r: 11560,
    		f: 3.36,
    		l: "基く"
    	},
    	{
    		r: 11561,
    		f: 3.36,
    		l: "半端"
    	},
    	{
    		r: 11562,
    		f: 3.36,
    		l: "スカウト"
    	},
    	{
    		r: 11563,
    		f: 3.36,
    		l: "西田"
    	},
    	{
    		r: 11564,
    		f: 3.36,
    		l: "スケッチ"
    	},
    	{
    		r: 11565,
    		f: 3.36,
    		l: "嘉"
    	},
    	{
    		r: 11566,
    		f: 3.36,
    		l: "ドリル"
    	},
    	{
    		r: 11567,
    		f: 3.36,
    		l: "切り開く"
    	},
    	{
    		r: 11568,
    		f: 3.36,
    		l: "アウトドア"
    	},
    	{
    		r: 11569,
    		f: 3.36,
    		l: "気まぐれ"
    	},
    	{
    		r: 11570,
    		f: 3.36,
    		l: "やり直す"
    	},
    	{
    		r: 11571,
    		f: 3.36,
    		l: "スクエア"
    	},
    	{
    		r: 11572,
    		f: 3.36,
    		l: "間際"
    	},
    	{
    		r: 11573,
    		f: 3.36,
    		l: "歩き"
    	},
    	{
    		r: 11574,
    		f: 3.36,
    		l: "当てはめる"
    	},
    	{
    		r: 11575,
    		f: 3.36,
    		l: "リトル"
    	},
    	{
    		r: 11576,
    		f: 3.35,
    		l: "色合い"
    	},
    	{
    		r: 11577,
    		f: 3.35,
    		l: "頷く"
    	},
    	{
    		r: 11578,
    		f: 3.35,
    		l: "基幹"
    	},
    	{
    		r: 11579,
    		f: 3.35,
    		l: "異国"
    	},
    	{
    		r: 11580,
    		f: 3.35,
    		l: "停車"
    	},
    	{
    		r: 11581,
    		f: 3.35,
    		l: "ほんま"
    	},
    	{
    		r: 11582,
    		f: 3.35,
    		l: "ポテト"
    	},
    	{
    		r: 11583,
    		f: 3.35,
    		l: "備わる"
    	},
    	{
    		r: 11584,
    		f: 3.35,
    		l: "谷口"
    	},
    	{
    		r: 11585,
    		f: 3.35,
    		l: "でっかい"
    	},
    	{
    		r: 11586,
    		f: 3.35,
    		l: "繰り出す"
    	},
    	{
    		r: 11587,
    		f: 3.35,
    		l: "斗"
    	},
    	{
    		r: 11588,
    		f: 3.35,
    		l: "シック"
    	},
    	{
    		r: 11589,
    		f: 3.35,
    		l: "風情"
    	},
    	{
    		r: 11590,
    		f: 3.35,
    		l: "原材料"
    	},
    	{
    		r: 11591,
    		f: 3.35,
    		l: "シリア"
    	},
    	{
    		r: 11592,
    		f: 3.35,
    		l: "メシ"
    	},
    	{
    		r: 11593,
    		f: 3.35,
    		l: "構え"
    	},
    	{
    		r: 11594,
    		f: 3.35,
    		l: "大いなる"
    	},
    	{
    		r: 11595,
    		f: 3.35,
    		l: "愛人"
    	},
    	{
    		r: 11596,
    		f: 3.35,
    		l: "コンディション"
    	},
    	{
    		r: 11597,
    		f: 3.35,
    		l: "シンガー"
    	},
    	{
    		r: 11598,
    		f: 3.35,
    		l: "炭酸"
    	},
    	{
    		r: 11599,
    		f: 3.35,
    		l: "ギャル"
    	},
    	{
    		r: 11600,
    		f: 3.35,
    		l: "格別"
    	},
    	{
    		r: 11601,
    		f: 3.35,
    		l: "掛け"
    	},
    	{
    		r: 11602,
    		f: 3.35,
    		l: "ベラ"
    	},
    	{
    		r: 11603,
    		f: 3.35,
    		l: "渋い"
    	},
    	{
    		r: 11604,
    		f: 3.34,
    		l: "予知"
    	},
    	{
    		r: 11605,
    		f: 3.34,
    		l: "迷い"
    	},
    	{
    		r: 11606,
    		f: 3.34,
    		l: "祝い"
    	},
    	{
    		r: 11607,
    		f: 3.34,
    		l: "潮流"
    	},
    	{
    		r: 11608,
    		f: 3.34,
    		l: "真意"
    	},
    	{
    		r: 11609,
    		f: 3.34,
    		l: "大晦日"
    	},
    	{
    		r: 11610,
    		f: 3.34,
    		l: "荒らす"
    	},
    	{
    		r: 11611,
    		f: 3.34,
    		l: "ぬく"
    	},
    	{
    		r: 11612,
    		f: 3.34,
    		l: "満席"
    	},
    	{
    		r: 11613,
    		f: 3.34,
    		l: "ぐるみ"
    	},
    	{
    		r: 11614,
    		f: 3.34,
    		l: "ジャガイモ"
    	},
    	{
    		r: 11615,
    		f: 3.34,
    		l: "分譲"
    	},
    	{
    		r: 11616,
    		f: 3.34,
    		l: "プロダクション"
    	},
    	{
    		r: 11617,
    		f: 3.34,
    		l: "割れ"
    	},
    	{
    		r: 11618,
    		f: 3.34,
    		l: "特価"
    	},
    	{
    		r: 11619,
    		f: 3.34,
    		l: "羽目"
    	},
    	{
    		r: 11620,
    		f: 3.34,
    		l: "占う"
    	},
    	{
    		r: 11621,
    		f: 3.34,
    		l: "くつろぐ"
    	},
    	{
    		r: 11622,
    		f: 3.34,
    		l: "大差"
    	},
    	{
    		r: 11623,
    		f: 3.34,
    		l: "外壁"
    	},
    	{
    		r: 11624,
    		f: 3.34,
    		l: "阪急"
    	},
    	{
    		r: 11625,
    		f: 3.34,
    		l: "キュー"
    	},
    	{
    		r: 11626,
    		f: 3.34,
    		l: "交差"
    	},
    	{
    		r: 11627,
    		f: 3.34,
    		l: "年下"
    	},
    	{
    		r: 11628,
    		f: 3.34,
    		l: "追い詰める"
    	},
    	{
    		r: 11629,
    		f: 3.34,
    		l: "シチュエーション"
    	},
    	{
    		r: 11630,
    		f: 3.34,
    		l: "かけ離れる"
    	},
    	{
    		r: 11631,
    		f: 3.34,
    		l: "ハガキ"
    	},
    	{
    		r: 11632,
    		f: 3.34,
    		l: "高め"
    	},
    	{
    		r: 11633,
    		f: 3.33,
    		l: "土佐"
    	},
    	{
    		r: 11634,
    		f: 3.33,
    		l: "相反"
    	},
    	{
    		r: 11635,
    		f: 3.33,
    		l: "私見"
    	},
    	{
    		r: 11636,
    		f: 3.33,
    		l: "ゲノム"
    	},
    	{
    		r: 11637,
    		f: 3.33,
    		l: "前夜"
    	},
    	{
    		r: 11638,
    		f: 3.33,
    		l: "不可解"
    	},
    	{
    		r: 11639,
    		f: 3.33,
    		l: "非常識"
    	},
    	{
    		r: 11640,
    		f: 3.33,
    		l: "クラッシュ"
    	},
    	{
    		r: 11641,
    		f: 3.33,
    		l: "がらみ"
    	},
    	{
    		r: 11642,
    		f: 3.33,
    		l: "箱根"
    	},
    	{
    		r: 11643,
    		f: 3.33,
    		l: "段落"
    	},
    	{
    		r: 11644,
    		f: 3.33,
    		l: "賢"
    	},
    	{
    		r: 11645,
    		f: 3.33,
    		l: "返却"
    	},
    	{
    		r: 11646,
    		f: 3.33,
    		l: "筆記"
    	},
    	{
    		r: 11647,
    		f: 3.33,
    		l: "クリエイティブ"
    	},
    	{
    		r: 11648,
    		f: 3.33,
    		l: "学内"
    	},
    	{
    		r: 11649,
    		f: 3.33,
    		l: "巧妙"
    	},
    	{
    		r: 11650,
    		f: 3.33,
    		l: "可視"
    	},
    	{
    		r: 11651,
    		f: 3.33,
    		l: "わたす"
    	},
    	{
    		r: 11652,
    		f: 3.33,
    		l: "快晴"
    	},
    	{
    		r: 11653,
    		f: 3.33,
    		l: "速攻"
    	},
    	{
    		r: 11654,
    		f: 3.33,
    		l: "メーカ"
    	},
    	{
    		r: 11655,
    		f: 3.33,
    		l: "しみる"
    	},
    	{
    		r: 11656,
    		f: 3.32,
    		l: "かっこ"
    	},
    	{
    		r: 11657,
    		f: 3.32,
    		l: "続行"
    	},
    	{
    		r: 11658,
    		f: 3.32,
    		l: "めんどくさい"
    	},
    	{
    		r: 11659,
    		f: 3.32,
    		l: "一概に"
    	},
    	{
    		r: 11660,
    		f: 3.32,
    		l: "グロ"
    	},
    	{
    		r: 11661,
    		f: 3.32,
    		l: "つっこむ"
    	},
    	{
    		r: 11662,
    		f: 3.32,
    		l: "就学"
    	},
    	{
    		r: 11663,
    		f: 3.32,
    		l: "表題"
    	},
    	{
    		r: 11664,
    		f: 3.32,
    		l: "お目にかかる"
    	},
    	{
    		r: 11665,
    		f: 3.32,
    		l: "通算"
    	},
    	{
    		r: 11666,
    		f: 3.32,
    		l: "噴火"
    	},
    	{
    		r: 11667,
    		f: 3.32,
    		l: "義務付ける"
    	},
    	{
    		r: 11668,
    		f: 3.32,
    		l: "元年"
    	},
    	{
    		r: 11669,
    		f: 3.32,
    		l: "守れる"
    	},
    	{
    		r: 11670,
    		f: 3.32,
    		l: "見落とす"
    	},
    	{
    		r: 11671,
    		f: 3.32,
    		l: "産経"
    	},
    	{
    		r: 11672,
    		f: 3.32,
    		l: "クリスタル"
    	},
    	{
    		r: 11673,
    		f: 3.32,
    		l: "ウルトラ"
    	},
    	{
    		r: 11674,
    		f: 3.32,
    		l: "悟"
    	},
    	{
    		r: 11675,
    		f: 3.32,
    		l: "無くす"
    	},
    	{
    		r: 11676,
    		f: 3.32,
    		l: "ルーツ"
    	},
    	{
    		r: 11677,
    		f: 3.32,
    		l: "掘り下げる"
    	},
    	{
    		r: 11678,
    		f: 3.32,
    		l: "あきらか"
    	},
    	{
    		r: 11679,
    		f: 3.32,
    		l: "つれづれ"
    	},
    	{
    		r: 11680,
    		f: 3.32,
    		l: "打ち切る"
    	},
    	{
    		r: 11681,
    		f: 3.32,
    		l: "団長"
    	},
    	{
    		r: 11682,
    		f: 3.32,
    		l: "歳児"
    	},
    	{
    		r: 11683,
    		f: 3.32,
    		l: "個々人"
    	},
    	{
    		r: 11684,
    		f: 3.32,
    		l: "地雷"
    	},
    	{
    		r: 11685,
    		f: 3.32,
    		l: "修道"
    	},
    	{
    		r: 11686,
    		f: 3.32,
    		l: "おす"
    	},
    	{
    		r: 11687,
    		f: 3.32,
    		l: "トレーナー"
    	},
    	{
    		r: 11688,
    		f: 3.32,
    		l: "既成"
    	},
    	{
    		r: 11689,
    		f: 3.32,
    		l: "強気"
    	},
    	{
    		r: 11690,
    		f: 3.32,
    		l: "結束"
    	},
    	{
    		r: 11691,
    		f: 3.32,
    		l: "練"
    	},
    	{
    		r: 11692,
    		f: 3.32,
    		l: "党内"
    	},
    	{
    		r: 11693,
    		f: 3.32,
    		l: "精進"
    	},
    	{
    		r: 11694,
    		f: 3.32,
    		l: "ビス"
    	},
    	{
    		r: 11695,
    		f: 3.32,
    		l: "自負"
    	},
    	{
    		r: 11696,
    		f: 3.32,
    		l: "プリンター"
    	},
    	{
    		r: 11697,
    		f: 3.32,
    		l: "止"
    	},
    	{
    		r: 11698,
    		f: 3.31,
    		l: "指先"
    	},
    	{
    		r: 11699,
    		f: 3.31,
    		l: "信徒"
    	},
    	{
    		r: 11700,
    		f: 3.31,
    		l: "遠ざかる"
    	},
    	{
    		r: 11701,
    		f: 3.31,
    		l: "可哀想"
    	},
    	{
    		r: 11702,
    		f: 3.31,
    		l: "定休"
    	},
    	{
    		r: 11703,
    		f: 3.31,
    		l: "離"
    	},
    	{
    		r: 11704,
    		f: 3.31,
    		l: "整体"
    	},
    	{
    		r: 11705,
    		f: 3.31,
    		l: "体型"
    	},
    	{
    		r: 11706,
    		f: 3.31,
    		l: "お返し"
    	},
    	{
    		r: 11707,
    		f: 3.31,
    		l: "段取り"
    	},
    	{
    		r: 11708,
    		f: 3.31,
    		l: "排他"
    	},
    	{
    		r: 11709,
    		f: 3.31,
    		l: "賞味"
    	},
    	{
    		r: 11710,
    		f: 3.31,
    		l: "コツコツ"
    	},
    	{
    		r: 11711,
    		f: 3.31,
    		l: "差額"
    	},
    	{
    		r: 11712,
    		f: 3.31,
    		l: "強硬"
    	},
    	{
    		r: 11713,
    		f: 3.31,
    		l: "とんでも"
    	},
    	{
    		r: 11714,
    		f: 3.31,
    		l: "残虐"
    	},
    	{
    		r: 11715,
    		f: 3.31,
    		l: "草案"
    	},
    	{
    		r: 11716,
    		f: 3.31,
    		l: "密"
    	},
    	{
    		r: 11717,
    		f: 3.31,
    		l: "後押し"
    	},
    	{
    		r: 11718,
    		f: 3.31,
    		l: "きびしい"
    	},
    	{
    		r: 11719,
    		f: 3.31,
    		l: "めずらしい"
    	},
    	{
    		r: 11720,
    		f: 3.3,
    		l: "修道院"
    	},
    	{
    		r: 11721,
    		f: 3.3,
    		l: "アルファ"
    	},
    	{
    		r: 11722,
    		f: 3.3,
    		l: "新卒"
    	},
    	{
    		r: 11723,
    		f: 3.3,
    		l: "ダイエー"
    	},
    	{
    		r: 11724,
    		f: 3.3,
    		l: "齢"
    	},
    	{
    		r: 11725,
    		f: 3.3,
    		l: "妊婦"
    	},
    	{
    		r: 11726,
    		f: 3.3,
    		l: "始"
    	},
    	{
    		r: 11727,
    		f: 3.3,
    		l: "エクアドル"
    	},
    	{
    		r: 11728,
    		f: 3.3,
    		l: "中長期"
    	},
    	{
    		r: 11729,
    		f: 3.3,
    		l: "ＤＦ"
    	},
    	{
    		r: 11730,
    		f: 3.3,
    		l: "働ける"
    	},
    	{
    		r: 11731,
    		f: 3.3,
    		l: "お隣"
    	},
    	{
    		r: 11732,
    		f: 3.3,
    		l: "間取り"
    	},
    	{
    		r: 11733,
    		f: 3.3,
    		l: "均一"
    	},
    	{
    		r: 11734,
    		f: 3.3,
    		l: "陳"
    	},
    	{
    		r: 11735,
    		f: 3.3,
    		l: "はし"
    	},
    	{
    		r: 11736,
    		f: 3.3,
    		l: "ゴミ箱"
    	},
    	{
    		r: 11737,
    		f: 3.3,
    		l: "インタフェース"
    	},
    	{
    		r: 11738,
    		f: 3.3,
    		l: "同国"
    	},
    	{
    		r: 11739,
    		f: 3.3,
    		l: "小学館"
    	},
    	{
    		r: 11740,
    		f: 3.3,
    		l: "卓"
    	},
    	{
    		r: 11741,
    		f: 3.3,
    		l: "幕末"
    	},
    	{
    		r: 11742,
    		f: 3.3,
    		l: "ですけれど"
    	},
    	{
    		r: 11743,
    		f: 3.3,
    		l: "ミャンマー"
    	},
    	{
    		r: 11744,
    		f: 3.3,
    		l: "なにせ"
    	},
    	{
    		r: 11745,
    		f: 3.3,
    		l: "禁"
    	},
    	{
    		r: 11746,
    		f: 3.3,
    		l: "ヒゲ"
    	},
    	{
    		r: 11747,
    		f: 3.3,
    		l: "見下ろす"
    	},
    	{
    		r: 11748,
    		f: 3.3,
    		l: "鎖"
    	},
    	{
    		r: 11749,
    		f: 3.3,
    		l: "極限"
    	},
    	{
    		r: 11750,
    		f: 3.29,
    		l: "仕える"
    	},
    	{
    		r: 11751,
    		f: 3.29,
    		l: "宙"
    	},
    	{
    		r: 11752,
    		f: 3.29,
    		l: "コロンビア"
    	},
    	{
    		r: 11753,
    		f: 3.29,
    		l: "ラインナップ"
    	},
    	{
    		r: 11754,
    		f: 3.29,
    		l: "風車"
    	},
    	{
    		r: 11755,
    		f: 3.29,
    		l: "尊い"
    	},
    	{
    		r: 11756,
    		f: 3.29,
    		l: "カンパニー"
    	},
    	{
    		r: 11757,
    		f: 3.29,
    		l: "ひざ"
    	},
    	{
    		r: 11758,
    		f: 3.29,
    		l: "ラフ"
    	},
    	{
    		r: 11759,
    		f: 3.29,
    		l: "鉄鋼"
    	},
    	{
    		r: 11760,
    		f: 3.29,
    		l: "激化"
    	},
    	{
    		r: 11761,
    		f: 3.29,
    		l: "菅"
    	},
    	{
    		r: 11762,
    		f: 3.29,
    		l: "ゆる"
    	},
    	{
    		r: 11763,
    		f: 3.29,
    		l: "金メダル"
    	},
    	{
    		r: 11764,
    		f: 3.29,
    		l: "上方"
    	},
    	{
    		r: 11765,
    		f: 3.29,
    		l: "マネージャ"
    	},
    	{
    		r: 11766,
    		f: 3.29,
    		l: "洋楽"
    	},
    	{
    		r: 11767,
    		f: 3.29,
    		l: "請負"
    	},
    	{
    		r: 11768,
    		f: 3.29,
    		l: "だけれども"
    	},
    	{
    		r: 11769,
    		f: 3.29,
    		l: "車体"
    	},
    	{
    		r: 11770,
    		f: 3.29,
    		l: "サムライ"
    	},
    	{
    		r: 11771,
    		f: 3.29,
    		l: "コル"
    	},
    	{
    		r: 11772,
    		f: 3.28,
    		l: "ミドル"
    	},
    	{
    		r: 11773,
    		f: 3.28,
    		l: "水上"
    	},
    	{
    		r: 11774,
    		f: 3.28,
    		l: "封印"
    	},
    	{
    		r: 11775,
    		f: 3.28,
    		l: "祖先"
    	},
    	{
    		r: 11776,
    		f: 3.28,
    		l: "入賞"
    	},
    	{
    		r: 11777,
    		f: 3.28,
    		l: "生前"
    	},
    	{
    		r: 11778,
    		f: 3.28,
    		l: "ポット"
    	},
    	{
    		r: 11779,
    		f: 3.28,
    		l: "這う"
    	},
    	{
    		r: 11780,
    		f: 3.28,
    		l: "吐き出す"
    	},
    	{
    		r: 11781,
    		f: 3.28,
    		l: "ε"
    	},
    	{
    		r: 11782,
    		f: 3.28,
    		l: "ストーブ"
    	},
    	{
    		r: 11783,
    		f: 3.28,
    		l: "うり"
    	},
    	{
    		r: 11784,
    		f: 3.28,
    		l: "Σ"
    	},
    	{
    		r: 11785,
    		f: 3.28,
    		l: "柳沢"
    	},
    	{
    		r: 11786,
    		f: 3.28,
    		l: "途切れる"
    	},
    	{
    		r: 11787,
    		f: 3.28,
    		l: "肇"
    	},
    	{
    		r: 11788,
    		f: 3.28,
    		l: "聖地"
    	},
    	{
    		r: 11789,
    		f: 3.28,
    		l: "冷"
    	},
    	{
    		r: 11790,
    		f: 3.28,
    		l: "潜る"
    	},
    	{
    		r: 11791,
    		f: 3.28,
    		l: "裏付ける"
    	},
    	{
    		r: 11792,
    		f: 3.28,
    		l: "定まる"
    	},
    	{
    		r: 11793,
    		f: 3.28,
    		l: "仲良し"
    	},
    	{
    		r: 11794,
    		f: 3.28,
    		l: "資料館"
    	},
    	{
    		r: 11795,
    		f: 3.28,
    		l: "特長"
    	},
    	{
    		r: 11796,
    		f: 3.28,
    		l: "ダニエル"
    	},
    	{
    		r: 11797,
    		f: 3.28,
    		l: "芳"
    	},
    	{
    		r: 11798,
    		f: 3.28,
    		l: "ディーゼル"
    	},
    	{
    		r: 11799,
    		f: 3.28,
    		l: "サスペンス"
    	},
    	{
    		r: 11800,
    		f: 3.28,
    		l: "発散"
    	},
    	{
    		r: 11801,
    		f: 3.28,
    		l: "紅白"
    	},
    	{
    		r: 11802,
    		f: 3.28,
    		l: "片道"
    	},
    	{
    		r: 11803,
    		f: 3.28,
    		l: "どっと"
    	},
    	{
    		r: 11804,
    		f: 3.28,
    		l: "塀"
    	},
    	{
    		r: 11805,
    		f: 3.28,
    		l: "断"
    	},
    	{
    		r: 11806,
    		f: 3.28,
    		l: "囚人"
    	},
    	{
    		r: 11807,
    		f: 3.27,
    		l: "独断"
    	},
    	{
    		r: 11808,
    		f: 3.27,
    		l: "呪い"
    	},
    	{
    		r: 11809,
    		f: 3.27,
    		l: "暮れ"
    	},
    	{
    		r: 11810,
    		f: 3.27,
    		l: "翔"
    	},
    	{
    		r: 11811,
    		f: 3.27,
    		l: "館長"
    	},
    	{
    		r: 11812,
    		f: 3.27,
    		l: "ロビン"
    	},
    	{
    		r: 11813,
    		f: 3.27,
    		l: "時空"
    	},
    	{
    		r: 11814,
    		f: 3.27,
    		l: "キーパー"
    	},
    	{
    		r: 11815,
    		f: 3.27,
    		l: "真夜中"
    	},
    	{
    		r: 11816,
    		f: 3.27,
    		l: "そうだ"
    	},
    	{
    		r: 11817,
    		f: 3.27,
    		l: "論調"
    	},
    	{
    		r: 11818,
    		f: 3.27,
    		l: "奥田"
    	},
    	{
    		r: 11819,
    		f: 3.27,
    		l: "未遂"
    	},
    	{
    		r: 11820,
    		f: 3.27,
    		l: "ダイアリー"
    	},
    	{
    		r: 11821,
    		f: 3.27,
    		l: "シグナル"
    	},
    	{
    		r: 11822,
    		f: 3.27,
    		l: "くぐる"
    	},
    	{
    		r: 11823,
    		f: 3.27,
    		l: "吠える"
    	},
    	{
    		r: 11824,
    		f: 3.27,
    		l: "減量"
    	},
    	{
    		r: 11825,
    		f: 3.27,
    		l: "ありのまま"
    	},
    	{
    		r: 11826,
    		f: 3.27,
    		l: "終身"
    	},
    	{
    		r: 11827,
    		f: 3.27,
    		l: "生後"
    	},
    	{
    		r: 11828,
    		f: 3.26,
    		l: "かに"
    	},
    	{
    		r: 11829,
    		f: 3.26,
    		l: "ビーズ"
    	},
    	{
    		r: 11830,
    		f: 3.26,
    		l: "オペレーション"
    	},
    	{
    		r: 11831,
    		f: 3.26,
    		l: "こする"
    	},
    	{
    		r: 11832,
    		f: 3.26,
    		l: "表参道"
    	},
    	{
    		r: 11833,
    		f: 3.26,
    		l: "一部分"
    	},
    	{
    		r: 11834,
    		f: 3.26,
    		l: "伝授"
    	},
    	{
    		r: 11835,
    		f: 3.26,
    		l: "主語"
    	},
    	{
    		r: 11836,
    		f: 3.26,
    		l: "種目"
    	},
    	{
    		r: 11837,
    		f: 3.26,
    		l: "既"
    	},
    	{
    		r: 11838,
    		f: 3.26,
    		l: "貴女"
    	},
    	{
    		r: 11839,
    		f: 3.26,
    		l: "切り捨てる"
    	},
    	{
    		r: 11840,
    		f: 3.26,
    		l: "界隈"
    	},
    	{
    		r: 11841,
    		f: 3.26,
    		l: "特質"
    	},
    	{
    		r: 11842,
    		f: 3.26,
    		l: "あげく"
    	},
    	{
    		r: 11843,
    		f: 3.26,
    		l: "戸籍"
    	},
    	{
    		r: 11844,
    		f: 3.26,
    		l: "事由"
    	},
    	{
    		r: 11845,
    		f: 3.26,
    		l: "細川"
    	},
    	{
    		r: 11846,
    		f: 3.26,
    		l: "引き出し"
    	},
    	{
    		r: 11847,
    		f: 3.26,
    		l: "ディズニーランド"
    	},
    	{
    		r: 11848,
    		f: 3.26,
    		l: "大金"
    	},
    	{
    		r: 11849,
    		f: 3.25,
    		l: "養子"
    	},
    	{
    		r: 11850,
    		f: 3.25,
    		l: "｝"
    	},
    	{
    		r: 11851,
    		f: 3.25,
    		l: "スイカ"
    	},
    	{
    		r: 11852,
    		f: 3.25,
    		l: "居間"
    	},
    	{
    		r: 11853,
    		f: 3.25,
    		l: "乗用車"
    	},
    	{
    		r: 11854,
    		f: 3.25,
    		l: "新生"
    	},
    	{
    		r: 11855,
    		f: 3.25,
    		l: "さがす"
    	},
    	{
    		r: 11856,
    		f: 3.25,
    		l: "長生き"
    	},
    	{
    		r: 11857,
    		f: 3.25,
    		l: "格言"
    	},
    	{
    		r: 11858,
    		f: 3.25,
    		l: "近寄る"
    	},
    	{
    		r: 11859,
    		f: 3.25,
    		l: "紙幣"
    	},
    	{
    		r: 11860,
    		f: 3.25,
    		l: "秀吉"
    	},
    	{
    		r: 11861,
    		f: 3.25,
    		l: "中堅"
    	},
    	{
    		r: 11862,
    		f: 3.25,
    		l: "どうし"
    	},
    	{
    		r: 11863,
    		f: 3.25,
    		l: "尽力"
    	},
    	{
    		r: 11864,
    		f: 3.25,
    		l: "屈辱"
    	},
    	{
    		r: 11865,
    		f: 3.25,
    		l: "国税"
    	},
    	{
    		r: 11866,
    		f: 3.25,
    		l: "Ω"
    	},
    	{
    		r: 11867,
    		f: 3.25,
    		l: "コンテナ"
    	},
    	{
    		r: 11868,
    		f: 3.25,
    		l: "戦死"
    	},
    	{
    		r: 11869,
    		f: 3.25,
    		l: "一段落"
    	},
    	{
    		r: 11870,
    		f: 3.25,
    		l: "簿記"
    	},
    	{
    		r: 11871,
    		f: 3.25,
    		l: "レーダー"
    	},
    	{
    		r: 11872,
    		f: 3.25,
    		l: "従軍"
    	},
    	{
    		r: 11873,
    		f: 3.25,
    		l: "原動力"
    	},
    	{
    		r: 11874,
    		f: 3.25,
    		l: "先送り"
    	},
    	{
    		r: 11875,
    		f: 3.25,
    		l: "風船"
    	},
    	{
    		r: 11876,
    		f: 3.25,
    		l: "志願"
    	},
    	{
    		r: 11877,
    		f: 3.25,
    		l: "渦"
    	},
    	{
    		r: 11878,
    		f: 3.25,
    		l: "財界"
    	},
    	{
    		r: 11879,
    		f: 3.24,
    		l: "魅せる"
    	},
    	{
    		r: 11880,
    		f: 3.24,
    		l: "老化"
    	},
    	{
    		r: 11881,
    		f: 3.24,
    		l: "打開"
    	},
    	{
    		r: 11882,
    		f: 3.24,
    		l: "引き分け"
    	},
    	{
    		r: 11883,
    		f: 3.24,
    		l: "大雪"
    	},
    	{
    		r: 11884,
    		f: 3.24,
    		l: "花束"
    	},
    	{
    		r: 11885,
    		f: 3.24,
    		l: "判別"
    	},
    	{
    		r: 11886,
    		f: 3.24,
    		l: "那覇"
    	},
    	{
    		r: 11887,
    		f: 3.24,
    		l: "趣向"
    	},
    	{
    		r: 11888,
    		f: 3.24,
    		l: "新井"
    	},
    	{
    		r: 11889,
    		f: 3.24,
    		l: "低音"
    	},
    	{
    		r: 11890,
    		f: 3.24,
    		l: "伊勢"
    	},
    	{
    		r: 11891,
    		f: 3.24,
    		l: "しぼる"
    	},
    	{
    		r: 11892,
    		f: 3.24,
    		l: "破れる"
    	},
    	{
    		r: 11893,
    		f: 3.24,
    		l: "なでる"
    	},
    	{
    		r: 11894,
    		f: 3.24,
    		l: "組み"
    	},
    	{
    		r: 11895,
    		f: 3.24,
    		l: "没頭"
    	},
    	{
    		r: 11896,
    		f: 3.24,
    		l: "ワゴン"
    	},
    	{
    		r: 11897,
    		f: 3.24,
    		l: "依然"
    	},
    	{
    		r: 11898,
    		f: 3.24,
    		l: "胎児"
    	},
    	{
    		r: 11899,
    		f: 3.24,
    		l: "女子大"
    	},
    	{
    		r: 11900,
    		f: 3.24,
    		l: "ひっくり返す"
    	},
    	{
    		r: 11901,
    		f: 3.24,
    		l: "愛犬"
    	},
    	{
    		r: 11902,
    		f: 3.24,
    		l: "タレ"
    	},
    	{
    		r: 11903,
    		f: 3.24,
    		l: "ヨシ"
    	},
    	{
    		r: 11904,
    		f: 3.24,
    		l: "クライマックス"
    	},
    	{
    		r: 11905,
    		f: 3.24,
    		l: "戻れる"
    	},
    	{
    		r: 11906,
    		f: 3.24,
    		l: "ムーア"
    	},
    	{
    		r: 11907,
    		f: 3.23,
    		l: "唯"
    	},
    	{
    		r: 11908,
    		f: 3.23,
    		l: "エキス"
    	},
    	{
    		r: 11909,
    		f: 3.23,
    		l: "仕上がり"
    	},
    	{
    		r: 11910,
    		f: 3.23,
    		l: "ケチ"
    	},
    	{
    		r: 11911,
    		f: 3.23,
    		l: "もろもろ"
    	},
    	{
    		r: 11912,
    		f: 3.23,
    		l: "見分ける"
    	},
    	{
    		r: 11913,
    		f: 3.23,
    		l: "辛"
    	},
    	{
    		r: 11914,
    		f: 3.23,
    		l: "真っ黒"
    	},
    	{
    		r: 11915,
    		f: 3.23,
    		l: "骨格"
    	},
    	{
    		r: 11916,
    		f: 3.23,
    		l: "荒木"
    	},
    	{
    		r: 11917,
    		f: 3.23,
    		l: "軌跡"
    	},
    	{
    		r: 11918,
    		f: 3.23,
    		l: "うろうろ"
    	},
    	{
    		r: 11919,
    		f: 3.23,
    		l: "裁定"
    	},
    	{
    		r: 11920,
    		f: 3.23,
    		l: "懐疑"
    	},
    	{
    		r: 11921,
    		f: 3.23,
    		l: "車検"
    	},
    	{
    		r: 11922,
    		f: 3.22,
    		l: "乗"
    	},
    	{
    		r: 11923,
    		f: 3.22,
    		l: "二酸化炭素"
    	},
    	{
    		r: 11924,
    		f: 3.22,
    		l: "表わす"
    	},
    	{
    		r: 11925,
    		f: 3.22,
    		l: "大笑い"
    	},
    	{
    		r: 11926,
    		f: 3.22,
    		l: "蛍光"
    	},
    	{
    		r: 11927,
    		f: 3.22,
    		l: "上着"
    	},
    	{
    		r: 11928,
    		f: 3.22,
    		l: "使"
    	},
    	{
    		r: 11929,
    		f: 3.22,
    		l: "目黒"
    	},
    	{
    		r: 11930,
    		f: 3.22,
    		l: "幾"
    	},
    	{
    		r: 11931,
    		f: 3.22,
    		l: "鮨"
    	},
    	{
    		r: 11932,
    		f: 3.22,
    		l: "ＰＫ"
    	},
    	{
    		r: 11933,
    		f: 3.22,
    		l: "振替"
    	},
    	{
    		r: 11934,
    		f: 3.22,
    		l: "占拠"
    	},
    	{
    		r: 11935,
    		f: 3.22,
    		l: "ゴジラ"
    	},
    	{
    		r: 11936,
    		f: 3.22,
    		l: "欠かす"
    	},
    	{
    		r: 11937,
    		f: 3.22,
    		l: "エサ"
    	},
    	{
    		r: 11938,
    		f: 3.22,
    		l: "野中"
    	},
    	{
    		r: 11939,
    		f: 3.22,
    		l: "道筋"
    	},
    	{
    		r: 11940,
    		f: 3.22,
    		l: "出社"
    	},
    	{
    		r: 11941,
    		f: 3.22,
    		l: "ミシェル"
    	},
    	{
    		r: 11942,
    		f: 3.22,
    		l: "勲章"
    	},
    	{
    		r: 11943,
    		f: 3.22,
    		l: "唄う"
    	},
    	{
    		r: 11944,
    		f: 3.22,
    		l: "ぱっと"
    	},
    	{
    		r: 11945,
    		f: 3.22,
    		l: "しら"
    	},
    	{
    		r: 11946,
    		f: 3.22,
    		l: "帯広"
    	},
    	{
    		r: 11947,
    		f: 3.22,
    		l: "パース"
    	},
    	{
    		r: 11948,
    		f: 3.22,
    		l: "重たい"
    	},
    	{
    		r: 11949,
    		f: 3.21,
    		l: "盧"
    	},
    	{
    		r: 11950,
    		f: 3.21,
    		l: "和平"
    	},
    	{
    		r: 11951,
    		f: 3.21,
    		l: "番手"
    	},
    	{
    		r: 11952,
    		f: 3.21,
    		l: "思春期"
    	},
    	{
    		r: 11953,
    		f: 3.21,
    		l: "はあ"
    	},
    	{
    		r: 11954,
    		f: 3.21,
    		l: "ヨー"
    	},
    	{
    		r: 11955,
    		f: 3.21,
    		l: "久しい"
    	},
    	{
    		r: 11956,
    		f: 3.21,
    		l: "セッティング"
    	},
    	{
    		r: 11957,
    		f: 3.21,
    		l: "しっくり"
    	},
    	{
    		r: 11958,
    		f: 3.21,
    		l: "仕切る"
    	},
    	{
    		r: 11959,
    		f: 3.21,
    		l: "冥福"
    	},
    	{
    		r: 11960,
    		f: 3.21,
    		l: "渡部"
    	},
    	{
    		r: 11961,
    		f: 3.21,
    		l: "弱る"
    	},
    	{
    		r: 11962,
    		f: 3.21,
    		l: "ぺん"
    	},
    	{
    		r: 11963,
    		f: 3.21,
    		l: "美少女"
    	},
    	{
    		r: 11964,
    		f: 3.21,
    		l: "霊的"
    	},
    	{
    		r: 11965,
    		f: 3.21,
    		l: "伊豆"
    	},
    	{
    		r: 11966,
    		f: 3.21,
    		l: "呪文"
    	},
    	{
    		r: 11967,
    		f: 3.2,
    		l: "バンクーバー"
    	},
    	{
    		r: 11968,
    		f: 3.2,
    		l: "逆らう"
    	},
    	{
    		r: 11969,
    		f: 3.2,
    		l: "帽"
    	},
    	{
    		r: 11970,
    		f: 3.2,
    		l: "メロン"
    	},
    	{
    		r: 11971,
    		f: 3.2,
    		l: "試聴"
    	},
    	{
    		r: 11972,
    		f: 3.2,
    		l: "開場"
    	},
    	{
    		r: 11973,
    		f: 3.2,
    		l: "総称"
    	},
    	{
    		r: 11974,
    		f: 3.2,
    		l: "旺盛"
    	},
    	{
    		r: 11975,
    		f: 3.2,
    		l: "無茶"
    	},
    	{
    		r: 11976,
    		f: 3.2,
    		l: "浅野"
    	},
    	{
    		r: 11977,
    		f: 3.2,
    		l: "どうこう"
    	},
    	{
    		r: 11978,
    		f: 3.2,
    		l: "任天堂"
    	},
    	{
    		r: 11979,
    		f: 3.2,
    		l: "盛りだくさん"
    	},
    	{
    		r: 11980,
    		f: 3.2,
    		l: "余剰"
    	},
    	{
    		r: 11981,
    		f: 3.2,
    		l: "パラダイス"
    	},
    	{
    		r: 11982,
    		f: 3.2,
    		l: "履行"
    	},
    	{
    		r: 11983,
    		f: 3.2,
    		l: "操業"
    	},
    	{
    		r: 11984,
    		f: 3.2,
    		l: "無能"
    	},
    	{
    		r: 11985,
    		f: 3.2,
    		l: "ご機嫌"
    	},
    	{
    		r: 11986,
    		f: 3.2,
    		l: "書斎"
    	},
    	{
    		r: 11987,
    		f: 3.2,
    		l: "面々"
    	},
    	{
    		r: 11988,
    		f: 3.2,
    		l: "インターン"
    	},
    	{
    		r: 11989,
    		f: 3.2,
    		l: "まめ"
    	},
    	{
    		r: 11990,
    		f: 3.19,
    		l: "平穏"
    	},
    	{
    		r: 11991,
    		f: 3.19,
    		l: "エッセンス"
    	},
    	{
    		r: 11992,
    		f: 3.19,
    		l: "野望"
    	},
    	{
    		r: 11993,
    		f: 3.19,
    		l: "衣類"
    	},
    	{
    		r: 11994,
    		f: 3.19,
    		l: "献身"
    	},
    	{
    		r: 11995,
    		f: 3.19,
    		l: "おり"
    	},
    	{
    		r: 11996,
    		f: 3.19,
    		l: "明日香"
    	},
    	{
    		r: 11997,
    		f: 3.19,
    		l: "祥"
    	},
    	{
    		r: 11998,
    		f: 3.19,
    		l: "スパイス"
    	},
    	{
    		r: 11999,
    		f: 3.19,
    		l: "南西"
    	},
    	{
    		r: 12000,
    		f: 3.19,
    		l: "バックス"
    	},
    	{
    		r: 12001,
    		f: 3.19,
    		l: "ファーム"
    	},
    	{
    		r: 12002,
    		f: 3.19,
    		l: "食後"
    	},
    	{
    		r: 12003,
    		f: 3.19,
    		l: "起つ"
    	},
    	{
    		r: 12004,
    		f: 3.19,
    		l: "こま"
    	},
    	{
    		r: 12005,
    		f: 3.19,
    		l: "導"
    	},
    	{
    		r: 12006,
    		f: 3.19,
    		l: "王道"
    	},
    	{
    		r: 12007,
    		f: 3.19,
    		l: "検挙"
    	},
    	{
    		r: 12008,
    		f: 3.18,
    		l: "名門"
    	},
    	{
    		r: 12009,
    		f: 3.18,
    		l: "強豪"
    	},
    	{
    		r: 12010,
    		f: 3.18,
    		l: "ウリ"
    	},
    	{
    		r: 12011,
    		f: 3.18,
    		l: "諒"
    	},
    	{
    		r: 12012,
    		f: 3.18,
    		l: "現存"
    	},
    	{
    		r: 12013,
    		f: 3.18,
    		l: "立ち去る"
    	},
    	{
    		r: 12014,
    		f: 3.18,
    		l: "有馬"
    	},
    	{
    		r: 12015,
    		f: 3.18,
    		l: "教委"
    	},
    	{
    		r: 12016,
    		f: 3.18,
    		l: "民放"
    	},
    	{
    		r: 12017,
    		f: 3.18,
    		l: "熱気"
    	},
    	{
    		r: 12018,
    		f: 3.18,
    		l: "ボイス"
    	},
    	{
    		r: 12019,
    		f: 3.18,
    		l: "すさまじい"
    	},
    	{
    		r: 12020,
    		f: 3.18,
    		l: "窃盗"
    	},
    	{
    		r: 12021,
    		f: 3.18,
    		l: "謳う"
    	},
    	{
    		r: 12022,
    		f: 3.18,
    		l: "インチキ"
    	},
    	{
    		r: 12023,
    		f: 3.18,
    		l: "改悪"
    	},
    	{
    		r: 12024,
    		f: 3.18,
    		l: "本位"
    	},
    	{
    		r: 12025,
    		f: 3.18,
    		l: "うなる"
    	},
    	{
    		r: 12026,
    		f: 3.18,
    		l: "朝日新聞社"
    	},
    	{
    		r: 12027,
    		f: 3.18,
    		l: "ポリス"
    	},
    	{
    		r: 12028,
    		f: 3.18,
    		l: "会期"
    	},
    	{
    		r: 12029,
    		f: 3.18,
    		l: "伸"
    	},
    	{
    		r: 12030,
    		f: 3.18,
    		l: "稲"
    	},
    	{
    		r: 12031,
    		f: 3.18,
    		l: "生き"
    	},
    	{
    		r: 12032,
    		f: 3.18,
    		l: "土屋"
    	},
    	{
    		r: 12033,
    		f: 3.18,
    		l: "憎しみ"
    	},
    	{
    		r: 12034,
    		f: 3.18,
    		l: "タメ"
    	},
    	{
    		r: 12035,
    		f: 3.18,
    		l: "当人"
    	},
    	{
    		r: 12036,
    		f: 3.18,
    		l: "拍子"
    	},
    	{
    		r: 12037,
    		f: 3.18,
    		l: "滅びる"
    	},
    	{
    		r: 12038,
    		f: 3.18,
    		l: "白紙"
    	},
    	{
    		r: 12039,
    		f: 3.18,
    		l: "求む"
    	},
    	{
    		r: 12040,
    		f: 3.18,
    		l: "釜"
    	},
    	{
    		r: 12041,
    		f: 3.18,
    		l: "走り"
    	},
    	{
    		r: 12042,
    		f: 3.18,
    		l: "木製"
    	},
    	{
    		r: 12043,
    		f: 3.18,
    		l: "かろうじて"
    	},
    	{
    		r: 12044,
    		f: 3.18,
    		l: "果てる"
    	},
    	{
    		r: 12045,
    		f: 3.18,
    		l: "浪"
    	},
    	{
    		r: 12046,
    		f: 3.18,
    		l: "いちご"
    	},
    	{
    		r: 12047,
    		f: 3.17,
    		l: "スラム"
    	},
    	{
    		r: 12048,
    		f: 3.17,
    		l: "こぐ"
    	},
    	{
    		r: 12049,
    		f: 3.17,
    		l: "読解"
    	},
    	{
    		r: 12050,
    		f: 3.17,
    		l: "全土"
    	},
    	{
    		r: 12051,
    		f: 3.17,
    		l: "先入観"
    	},
    	{
    		r: 12052,
    		f: 3.17,
    		l: "挙句"
    	},
    	{
    		r: 12053,
    		f: 3.17,
    		l: "杉山"
    	},
    	{
    		r: 12054,
    		f: 3.17,
    		l: "巡り"
    	},
    	{
    		r: 12055,
    		f: 3.17,
    		l: "増幅"
    	},
    	{
    		r: 12056,
    		f: 3.17,
    		l: "ＮＯ"
    	},
    	{
    		r: 12057,
    		f: 3.17,
    		l: "比重"
    	},
    	{
    		r: 12058,
    		f: 3.17,
    		l: "水質"
    	},
    	{
    		r: 12059,
    		f: 3.17,
    		l: "ゆだねる"
    	},
    	{
    		r: 12060,
    		f: 3.17,
    		l: "手動"
    	},
    	{
    		r: 12061,
    		f: 3.17,
    		l: "プログラマー"
    	},
    	{
    		r: 12062,
    		f: 3.17,
    		l: "ウォーキング"
    	},
    	{
    		r: 12063,
    		f: 3.17,
    		l: "スワップ"
    	},
    	{
    		r: 12064,
    		f: 3.17,
    		l: "金庫"
    	},
    	{
    		r: 12065,
    		f: 3.17,
    		l: "終値"
    	},
    	{
    		r: 12066,
    		f: 3.17,
    		l: "トリオ"
    	},
    	{
    		r: 12067,
    		f: 3.17,
    		l: "いっさい"
    	},
    	{
    		r: 12068,
    		f: 3.17,
    		l: "例会"
    	},
    	{
    		r: 12069,
    		f: 3.17,
    		l: "慰める"
    	},
    	{
    		r: 12070,
    		f: 3.17,
    		l: "わるい"
    	},
    	{
    		r: 12071,
    		f: 3.17,
    		l: "範疇"
    	},
    	{
    		r: 12072,
    		f: 3.17,
    		l: "植"
    	},
    	{
    		r: 12073,
    		f: 3.16,
    		l: "恵比寿"
    	},
    	{
    		r: 12074,
    		f: 3.16,
    		l: "熟成"
    	},
    	{
    		r: 12075,
    		f: 3.16,
    		l: "例文"
    	},
    	{
    		r: 12076,
    		f: 3.16,
    		l: "推論"
    	},
    	{
    		r: 12077,
    		f: 3.16,
    		l: "ソファ"
    	},
    	{
    		r: 12078,
    		f: 3.16,
    		l: "ユーティリティ"
    	},
    	{
    		r: 12079,
    		f: 3.16,
    		l: "座談"
    	},
    	{
    		r: 12080,
    		f: 3.16,
    		l: "よけい"
    	},
    	{
    		r: 12081,
    		f: 3.16,
    		l: "波長"
    	},
    	{
    		r: 12082,
    		f: 3.16,
    		l: "思いこむ"
    	},
    	{
    		r: 12083,
    		f: 3.16,
    		l: "実戦"
    	},
    	{
    		r: 12084,
    		f: 3.16,
    		l: "分泌"
    	},
    	{
    		r: 12085,
    		f: 3.16,
    		l: "ズバリ"
    	},
    	{
    		r: 12086,
    		f: 3.16,
    		l: "飼料"
    	},
    	{
    		r: 12087,
    		f: 3.15,
    		l: "てか"
    	},
    	{
    		r: 12088,
    		f: 3.15,
    		l: "帯域"
    	},
    	{
    		r: 12089,
    		f: 3.15,
    		l: "坊主"
    	},
    	{
    		r: 12090,
    		f: 3.15,
    		l: "服部"
    	},
    	{
    		r: 12091,
    		f: 3.15,
    		l: "治癒"
    	},
    	{
    		r: 12092,
    		f: 3.15,
    		l: "オッサン"
    	},
    	{
    		r: 12093,
    		f: 3.15,
    		l: "人様"
    	},
    	{
    		r: 12094,
    		f: 3.15,
    		l: "課する"
    	},
    	{
    		r: 12095,
    		f: 3.15,
    		l: "語れる"
    	},
    	{
    		r: 12096,
    		f: 3.15,
    		l: "民生"
    	},
    	{
    		r: 12097,
    		f: 3.15,
    		l: "剣道"
    	},
    	{
    		r: 12098,
    		f: 3.15,
    		l: "肘"
    	},
    	{
    		r: 12099,
    		f: 3.15,
    		l: "振るう"
    	},
    	{
    		r: 12100,
    		f: 3.15,
    		l: "墨"
    	},
    	{
    		r: 12101,
    		f: 3.15,
    		l: "いつしか"
    	},
    	{
    		r: 12102,
    		f: 3.15,
    		l: "缶詰"
    	},
    	{
    		r: 12103,
    		f: 3.15,
    		l: "サーキット"
    	},
    	{
    		r: 12104,
    		f: 3.15,
    		l: "スティーブ"
    	},
    	{
    		r: 12105,
    		f: 3.15,
    		l: "顔面"
    	},
    	{
    		r: 12106,
    		f: 3.15,
    		l: "バーベキュー"
    	},
    	{
    		r: 12107,
    		f: 3.15,
    		l: "生きがい"
    	},
    	{
    		r: 12108,
    		f: 3.15,
    		l: "愛車"
    	},
    	{
    		r: 12109,
    		f: 3.15,
    		l: "土井"
    	},
    	{
    		r: 12110,
    		f: 3.15,
    		l: "コンセンサス"
    	},
    	{
    		r: 12111,
    		f: 3.15,
    		l: "三宅"
    	},
    	{
    		r: 12112,
    		f: 3.15,
    		l: "本命"
    	},
    	{
    		r: 12113,
    		f: 3.15,
    		l: "これぞ"
    	},
    	{
    		r: 12114,
    		f: 3.15,
    		l: "難点"
    	},
    	{
    		r: 12115,
    		f: 3.15,
    		l: "固執"
    	},
    	{
    		r: 12116,
    		f: 3.15,
    		l: "宗派"
    	},
    	{
    		r: 12117,
    		f: 3.15,
    		l: "ボウ"
    	},
    	{
    		r: 12118,
    		f: 3.15,
    		l: "見返り"
    	},
    	{
    		r: 12119,
    		f: 3.15,
    		l: "貸し出し"
    	},
    	{
    		r: 12120,
    		f: 3.15,
    		l: "熟練"
    	},
    	{
    		r: 12121,
    		f: 3.14,
    		l: "伝記"
    	},
    	{
    		r: 12122,
    		f: 3.14,
    		l: "大森"
    	},
    	{
    		r: 12123,
    		f: 3.14,
    		l: "人的"
    	},
    	{
    		r: 12124,
    		f: 3.14,
    		l: "理学"
    	},
    	{
    		r: 12125,
    		f: 3.14,
    		l: "なつかしい"
    	},
    	{
    		r: 12126,
    		f: 3.14,
    		l: "聖霊"
    	},
    	{
    		r: 12127,
    		f: 3.14,
    		l: "オリックス"
    	},
    	{
    		r: 12128,
    		f: 3.14,
    		l: "電灯"
    	},
    	{
    		r: 12129,
    		f: 3.14,
    		l: "立ち読み"
    	},
    	{
    		r: 12130,
    		f: 3.14,
    		l: "あれる"
    	},
    	{
    		r: 12131,
    		f: 3.14,
    		l: "一転"
    	},
    	{
    		r: 12132,
    		f: 3.14,
    		l: "追伸"
    	},
    	{
    		r: 12133,
    		f: 3.14,
    		l: "彼女ら"
    	},
    	{
    		r: 12134,
    		f: 3.14,
    		l: "釘"
    	},
    	{
    		r: 12135,
    		f: 3.14,
    		l: "松尾"
    	},
    	{
    		r: 12136,
    		f: 3.14,
    		l: "画質"
    	},
    	{
    		r: 12137,
    		f: 3.14,
    		l: "カモ"
    	},
    	{
    		r: 12138,
    		f: 3.14,
    		l: "長寿"
    	},
    	{
    		r: 12139,
    		f: 3.14,
    		l: "澄"
    	},
    	{
    		r: 12140,
    		f: 3.14,
    		l: "クラフト"
    	},
    	{
    		r: 12141,
    		f: 3.14,
    		l: "綾"
    	},
    	{
    		r: 12142,
    		f: 3.14,
    		l: "短大"
    	},
    	{
    		r: 12143,
    		f: 3.13,
    		l: "インストラクター"
    	},
    	{
    		r: 12144,
    		f: 3.13,
    		l: "柵"
    	},
    	{
    		r: 12145,
    		f: 3.13,
    		l: "シスコ"
    	},
    	{
    		r: 12146,
    		f: 3.13,
    		l: "単体"
    	},
    	{
    		r: 12147,
    		f: 3.13,
    		l: "埋葬"
    	},
    	{
    		r: 12148,
    		f: 3.13,
    		l: "マトリックス"
    	},
    	{
    		r: 12149,
    		f: 3.13,
    		l: "八王子"
    	},
    	{
    		r: 12150,
    		f: 3.13,
    		l: "定量"
    	},
    	{
    		r: 12151,
    		f: 3.13,
    		l: "出典"
    	},
    	{
    		r: 12152,
    		f: 3.13,
    		l: "酒井"
    	},
    	{
    		r: 12153,
    		f: 3.13,
    		l: "見かけ"
    	},
    	{
    		r: 12154,
    		f: 3.13,
    		l: "グッ"
    	},
    	{
    		r: 12155,
    		f: 3.13,
    		l: "マルコ"
    	},
    	{
    		r: 12156,
    		f: 3.13,
    		l: "売店"
    	},
    	{
    		r: 12157,
    		f: 3.13,
    		l: "下痢"
    	},
    	{
    		r: 12158,
    		f: 3.13,
    		l: "休"
    	},
    	{
    		r: 12159,
    		f: 3.13,
    		l: "変態"
    	},
    	{
    		r: 12160,
    		f: 3.13,
    		l: "別荘"
    	},
    	{
    		r: 12161,
    		f: 3.13,
    		l: "ふるう"
    	},
    	{
    		r: 12162,
    		f: 3.13,
    		l: "序盤"
    	},
    	{
    		r: 12163,
    		f: 3.13,
    		l: "障壁"
    	},
    	{
    		r: 12164,
    		f: 3.13,
    		l: "ステンレス"
    	},
    	{
    		r: 12165,
    		f: 3.13,
    		l: "国崎"
    	},
    	{
    		r: 12166,
    		f: 3.13,
    		l: "つう"
    	},
    	{
    		r: 12167,
    		f: 3.13,
    		l: "クエスト"
    	},
    	{
    		r: 12168,
    		f: 3.13,
    		l: "ワイルド"
    	},
    	{
    		r: 12169,
    		f: 3.13,
    		l: "ワル"
    	},
    	{
    		r: 12170,
    		f: 3.13,
    		l: "毛布"
    	},
    	{
    		r: 12171,
    		f: 3.13,
    		l: "コンセント"
    	},
    	{
    		r: 12172,
    		f: 3.13,
    		l: "朱"
    	},
    	{
    		r: 12173,
    		f: 3.13,
    		l: "大田"
    	},
    	{
    		r: 12174,
    		f: 3.13,
    		l: "真っ"
    	},
    	{
    		r: 12175,
    		f: 3.13,
    		l: "硬直"
    	},
    	{
    		r: 12176,
    		f: 3.13,
    		l: "上層"
    	},
    	{
    		r: 12177,
    		f: 3.12,
    		l: "フィリップ"
    	},
    	{
    		r: 12178,
    		f: 3.12,
    		l: "建国"
    	},
    	{
    		r: 12179,
    		f: 3.12,
    		l: "松浦"
    	},
    	{
    		r: 12180,
    		f: 3.12,
    		l: "コリア"
    	},
    	{
    		r: 12181,
    		f: 3.12,
    		l: "離職"
    	},
    	{
    		r: 12182,
    		f: 3.12,
    		l: "厚み"
    	},
    	{
    		r: 12183,
    		f: 3.12,
    		l: "新曲"
    	},
    	{
    		r: 12184,
    		f: 3.12,
    		l: "その道"
    	},
    	{
    		r: 12185,
    		f: 3.12,
    		l: "香水"
    	},
    	{
    		r: 12186,
    		f: 3.12,
    		l: "伝播"
    	},
    	{
    		r: 12187,
    		f: 3.12,
    		l: "称する"
    	},
    	{
    		r: 12188,
    		f: 3.12,
    		l: "正論"
    	},
    	{
    		r: 12189,
    		f: 3.12,
    		l: "大石"
    	},
    	{
    		r: 12190,
    		f: 3.12,
    		l: "バリアフリー"
    	},
    	{
    		r: 12191,
    		f: 3.12,
    		l: "ささやく"
    	},
    	{
    		r: 12192,
    		f: 3.12,
    		l: "不都合"
    	},
    	{
    		r: 12193,
    		f: 3.12,
    		l: "フォーカス"
    	},
    	{
    		r: 12194,
    		f: 3.12,
    		l: "本学"
    	},
    	{
    		r: 12195,
    		f: 3.12,
    		l: "忠"
    	},
    	{
    		r: 12196,
    		f: 3.12,
    		l: "祀る"
    	},
    	{
    		r: 12197,
    		f: 3.12,
    		l: "測量"
    	},
    	{
    		r: 12198,
    		f: 3.12,
    		l: "のばす"
    	},
    	{
    		r: 12199,
    		f: 3.12,
    		l: "パンダ"
    	},
    	{
    		r: 12200,
    		f: 3.12,
    		l: "度々"
    	},
    	{
    		r: 12201,
    		f: 3.11,
    		l: "行き来"
    	},
    	{
    		r: 12202,
    		f: 3.11,
    		l: "またがる"
    	},
    	{
    		r: 12203,
    		f: 3.11,
    		l: "エゴ"
    	},
    	{
    		r: 12204,
    		f: 3.11,
    		l: "弔い"
    	},
    	{
    		r: 12205,
    		f: 3.11,
    		l: "地上波"
    	},
    	{
    		r: 12206,
    		f: 3.11,
    		l: "覚醒"
    	},
    	{
    		r: 12207,
    		f: 3.11,
    		l: "淘汰"
    	},
    	{
    		r: 12208,
    		f: 3.11,
    		l: "あした"
    	},
    	{
    		r: 12209,
    		f: 3.11,
    		l: "南側"
    	},
    	{
    		r: 12210,
    		f: 3.11,
    		l: "退社"
    	},
    	{
    		r: 12211,
    		f: 3.11,
    		l: "アール"
    	},
    	{
    		r: 12212,
    		f: 3.11,
    		l: "史料"
    	},
    	{
    		r: 12213,
    		f: 3.11,
    		l: "呼び出し"
    	},
    	{
    		r: 12214,
    		f: 3.11,
    		l: "会報"
    	},
    	{
    		r: 12215,
    		f: 3.11,
    		l: "ムーン"
    	},
    	{
    		r: 12216,
    		f: 3.11,
    		l: "ヒュー"
    	},
    	{
    		r: 12217,
    		f: 3.11,
    		l: "Ｆ１"
    	},
    	{
    		r: 12218,
    		f: 3.11,
    		l: "差し引く"
    	},
    	{
    		r: 12219,
    		f: 3.11,
    		l: "かぐ"
    	},
    	{
    		r: 12220,
    		f: 3.11,
    		l: "幾度"
    	},
    	{
    		r: 12221,
    		f: 3.11,
    		l: "ファクター"
    	},
    	{
    		r: 12222,
    		f: 3.11,
    		l: "スプリング"
    	},
    	{
    		r: 12223,
    		f: 3.11,
    		l: "ヶ国"
    	},
    	{
    		r: 12224,
    		f: 3.11,
    		l: "ホワイトハウス"
    	},
    	{
    		r: 12225,
    		f: 3.11,
    		l: "深み"
    	},
    	{
    		r: 12226,
    		f: 3.11,
    		l: "樋口"
    	},
    	{
    		r: 12227,
    		f: 3.11,
    		l: "ウェールズ"
    	},
    	{
    		r: 12228,
    		f: 3.11,
    		l: "北陸"
    	},
    	{
    		r: 12229,
    		f: 3.11,
    		l: "三者"
    	},
    	{
    		r: 12230,
    		f: 3.11,
    		l: "暮らせる"
    	},
    	{
    		r: 12231,
    		f: 3.1,
    		l: "ベートーヴェン"
    	},
    	{
    		r: 12232,
    		f: 3.1,
    		l: "ビーム"
    	},
    	{
    		r: 12233,
    		f: 3.1,
    		l: "縁起"
    	},
    	{
    		r: 12234,
    		f: 3.1,
    		l: "混在"
    	},
    	{
    		r: 12235,
    		f: 3.1,
    		l: "フランクフルト"
    	},
    	{
    		r: 12236,
    		f: 3.1,
    		l: "如く"
    	},
    	{
    		r: 12237,
    		f: 3.1,
    		l: "琉球"
    	},
    	{
    		r: 12238,
    		f: 3.1,
    		l: "マイホーム"
    	},
    	{
    		r: 12239,
    		f: 3.1,
    		l: "スピン"
    	},
    	{
    		r: 12240,
    		f: 3.1,
    		l: "粉飾"
    	},
    	{
    		r: 12241,
    		f: 3.1,
    		l: "位置付ける"
    	},
    	{
    		r: 12242,
    		f: 3.1,
    		l: "一節"
    	},
    	{
    		r: 12243,
    		f: 3.1,
    		l: "武部"
    	},
    	{
    		r: 12244,
    		f: 3.1,
    		l: "音波"
    	},
    	{
    		r: 12245,
    		f: 3.1,
    		l: "ちょうだい"
    	},
    	{
    		r: 12246,
    		f: 3.09,
    		l: "ｃ"
    	},
    	{
    		r: 12247,
    		f: 3.09,
    		l: "駐"
    	},
    	{
    		r: 12248,
    		f: 3.09,
    		l: "儀"
    	},
    	{
    		r: 12249,
    		f: 3.09,
    		l: "封鎖"
    	},
    	{
    		r: 12250,
    		f: 3.09,
    		l: "駆除"
    	},
    	{
    		r: 12251,
    		f: 3.09,
    		l: "プロテスタント"
    	},
    	{
    		r: 12252,
    		f: 3.09,
    		l: "はなはだ"
    	},
    	{
    		r: 12253,
    		f: 3.09,
    		l: "知らせ"
    	},
    	{
    		r: 12254,
    		f: 3.09,
    		l: "嫌がらせ"
    	},
    	{
    		r: 12255,
    		f: 3.09,
    		l: "抱っこ"
    	},
    	{
    		r: 12256,
    		f: 3.09,
    		l: "社名"
    	},
    	{
    		r: 12257,
    		f: 3.09,
    		l: "環境省"
    	},
    	{
    		r: 12258,
    		f: 3.09,
    		l: "書き換える"
    	},
    	{
    		r: 12259,
    		f: 3.09,
    		l: "夜景"
    	},
    	{
    		r: 12260,
    		f: 3.09,
    		l: "生計"
    	},
    	{
    		r: 12261,
    		f: 3.09,
    		l: "｛"
    	},
    	{
    		r: 12262,
    		f: 3.09,
    		l: "発熱"
    	},
    	{
    		r: 12263,
    		f: 3.09,
    		l: "村山"
    	},
    	{
    		r: 12264,
    		f: 3.09,
    		l: "区切る"
    	},
    	{
    		r: 12265,
    		f: 3.09,
    		l: "朴"
    	},
    	{
    		r: 12266,
    		f: 3.09,
    		l: "さも"
    	},
    	{
    		r: 12267,
    		f: 3.09,
    		l: "量販"
    	},
    	{
    		r: 12268,
    		f: 3.09,
    		l: "そそる"
    	},
    	{
    		r: 12269,
    		f: 3.09,
    		l: "ファシズム"
    	},
    	{
    		r: 12270,
    		f: 3.09,
    		l: "封建"
    	},
    	{
    		r: 12271,
    		f: 3.09,
    		l: "聖人"
    	},
    	{
    		r: 12272,
    		f: 3.09,
    		l: "永住"
    	},
    	{
    		r: 12273,
    		f: 3.09,
    		l: "自明"
    	},
    	{
    		r: 12274,
    		f: 3.09,
    		l: "境内"
    	},
    	{
    		r: 12275,
    		f: 3.09,
    		l: "鯖"
    	},
    	{
    		r: 12276,
    		f: 3.09,
    		l: "帰す"
    	},
    	{
    		r: 12277,
    		f: 3.08,
    		l: "落ち"
    	},
    	{
    		r: 12278,
    		f: 3.08,
    		l: "伝送"
    	},
    	{
    		r: 12279,
    		f: 3.08,
    		l: "即興"
    	},
    	{
    		r: 12280,
    		f: 3.08,
    		l: "症例"
    	},
    	{
    		r: 12281,
    		f: 3.08,
    		l: "海域"
    	},
    	{
    		r: 12282,
    		f: 3.08,
    		l: "うなぎ"
    	},
    	{
    		r: 12283,
    		f: 3.08,
    		l: "放る"
    	},
    	{
    		r: 12284,
    		f: 3.08,
    		l: "ステータス"
    	},
    	{
    		r: 12285,
    		f: 3.08,
    		l: "空洞"
    	},
    	{
    		r: 12286,
    		f: 3.08,
    		l: "集英社"
    	},
    	{
    		r: 12287,
    		f: 3.08,
    		l: "大谷"
    	},
    	{
    		r: 12288,
    		f: 3.08,
    		l: "馬車"
    	},
    	{
    		r: 12289,
    		f: 3.08,
    		l: "ジャングル"
    	},
    	{
    		r: 12290,
    		f: 3.08,
    		l: "キノコ"
    	},
    	{
    		r: 12291,
    		f: 3.08,
    		l: "植木"
    	},
    	{
    		r: 12292,
    		f: 3.08,
    		l: "充"
    	},
    	{
    		r: 12293,
    		f: 3.08,
    		l: "陳列"
    	},
    	{
    		r: 12294,
    		f: 3.08,
    		l: "今ひとつ"
    	},
    	{
    		r: 12295,
    		f: 3.08,
    		l: "クーポン"
    	},
    	{
    		r: 12296,
    		f: 3.08,
    		l: "鞄"
    	},
    	{
    		r: 12297,
    		f: 3.07,
    		l: "恒久"
    	},
    	{
    		r: 12298,
    		f: 3.07,
    		l: "大きめ"
    	},
    	{
    		r: 12299,
    		f: 3.07,
    		l: "仕立てる"
    	},
    	{
    		r: 12300,
    		f: 3.07,
    		l: "改"
    	},
    	{
    		r: 12301,
    		f: 3.07,
    		l: "当て"
    	},
    	{
    		r: 12302,
    		f: 3.07,
    		l: "すぐさま"
    	},
    	{
    		r: 12303,
    		f: 3.07,
    		l: "主旨"
    	},
    	{
    		r: 12304,
    		f: 3.07,
    		l: "不平等"
    	},
    	{
    		r: 12305,
    		f: 3.07,
    		l: "がけ"
    	},
    	{
    		r: 12306,
    		f: 3.07,
    		l: "落書き"
    	},
    	{
    		r: 12307,
    		f: 3.07,
    		l: "公聴"
    	},
    	{
    		r: 12308,
    		f: 3.07,
    		l: "快"
    	},
    	{
    		r: 12309,
    		f: 3.07,
    		l: "盛岡"
    	},
    	{
    		r: 12310,
    		f: 3.07,
    		l: "助長"
    	},
    	{
    		r: 12311,
    		f: 3.07,
    		l: "ハンバーガー"
    	},
    	{
    		r: 12312,
    		f: 3.07,
    		l: "懲戒"
    	},
    	{
    		r: 12313,
    		f: 3.07,
    		l: "ズレ"
    	},
    	{
    		r: 12314,
    		f: 3.07,
    		l: "ぶどう"
    	},
    	{
    		r: 12315,
    		f: 3.07,
    		l: "艶"
    	},
    	{
    		r: 12316,
    		f: 3.07,
    		l: "下流"
    	},
    	{
    		r: 12317,
    		f: 3.07,
    		l: "入所"
    	},
    	{
    		r: 12318,
    		f: 3.07,
    		l: "かじる"
    	},
    	{
    		r: 12319,
    		f: 3.07,
    		l: "ラウンジ"
    	},
    	{
    		r: 12320,
    		f: 3.07,
    		l: "寄"
    	},
    	{
    		r: 12321,
    		f: 3.06,
    		l: "テレビ朝日"
    	},
    	{
    		r: 12322,
    		f: 3.06,
    		l: "ときには"
    	},
    	{
    		r: 12323,
    		f: 3.06,
    		l: "専任"
    	},
    	{
    		r: 12324,
    		f: 3.06,
    		l: "わける"
    	},
    	{
    		r: 12325,
    		f: 3.06,
    		l: "配付"
    	},
    	{
    		r: 12326,
    		f: 3.06,
    		l: "捕る"
    	},
    	{
    		r: 12327,
    		f: 3.06,
    		l: "四郎"
    	},
    	{
    		r: 12328,
    		f: 3.06,
    		l: "日和"
    	},
    	{
    		r: 12329,
    		f: 3.06,
    		l: "甘味"
    	},
    	{
    		r: 12330,
    		f: 3.06,
    		l: "必需"
    	},
    	{
    		r: 12331,
    		f: 3.06,
    		l: "ｋ"
    	},
    	{
    		r: 12332,
    		f: 3.06,
    		l: "エレベータ"
    	},
    	{
    		r: 12333,
    		f: 3.06,
    		l: "何一つ"
    	},
    	{
    		r: 12334,
    		f: 3.06,
    		l: "減額"
    	},
    	{
    		r: 12335,
    		f: 3.06,
    		l: "自前"
    	},
    	{
    		r: 12336,
    		f: 3.06,
    		l: "旭"
    	},
    	{
    		r: 12337,
    		f: 3.06,
    		l: "森山"
    	},
    	{
    		r: 12338,
    		f: 3.05,
    		l: "顎"
    	},
    	{
    		r: 12339,
    		f: 3.05,
    		l: "東日本"
    	},
    	{
    		r: 12340,
    		f: 3.05,
    		l: "放浪"
    	},
    	{
    		r: 12341,
    		f: 3.05,
    		l: "ババ"
    	},
    	{
    		r: 12342,
    		f: 3.05,
    		l: "御飯"
    	},
    	{
    		r: 12343,
    		f: 3.05,
    		l: "月日"
    	},
    	{
    		r: 12344,
    		f: 3.05,
    		l: "そうこう"
    	},
    	{
    		r: 12345,
    		f: 3.05,
    		l: "ちよ"
    	},
    	{
    		r: 12346,
    		f: 3.05,
    		l: "雑音"
    	},
    	{
    		r: 12347,
    		f: 3.05,
    		l: "スプレー"
    	},
    	{
    		r: 12348,
    		f: 3.05,
    		l: "分断"
    	},
    	{
    		r: 12349,
    		f: 3.05,
    		l: "恨み"
    	},
    	{
    		r: 12350,
    		f: 3.05,
    		l: "罪悪"
    	},
    	{
    		r: 12351,
    		f: 3.05,
    		l: "長引く"
    	},
    	{
    		r: 12352,
    		f: 3.05,
    		l: "腰痛"
    	},
    	{
    		r: 12353,
    		f: 3.05,
    		l: "凹む"
    	},
    	{
    		r: 12354,
    		f: 3.05,
    		l: "改憲"
    	},
    	{
    		r: 12355,
    		f: 3.05,
    		l: "ひらく"
    	},
    	{
    		r: 12356,
    		f: 3.05,
    		l: "申し立て"
    	},
    	{
    		r: 12357,
    		f: 3.05,
    		l: "学費"
    	},
    	{
    		r: 12358,
    		f: 3.04,
    		l: "開講"
    	},
    	{
    		r: 12359,
    		f: 3.04,
    		l: "仕込む"
    	},
    	{
    		r: 12360,
    		f: 3.04,
    		l: "打合せ"
    	},
    	{
    		r: 12361,
    		f: 3.04,
    		l: "つま"
    	},
    	{
    		r: 12362,
    		f: 3.04,
    		l: "パワフル"
    	},
    	{
    		r: 12363,
    		f: 3.04,
    		l: "アミ"
    	},
    	{
    		r: 12364,
    		f: 3.04,
    		l: "知らせる"
    	},
    	{
    		r: 12365,
    		f: 3.04,
    		l: "構文"
    	},
    	{
    		r: 12366,
    		f: 3.04,
    		l: "候"
    	},
    	{
    		r: 12367,
    		f: 3.04,
    		l: "下北沢"
    	},
    	{
    		r: 12368,
    		f: 3.04,
    		l: "読み書き"
    	},
    	{
    		r: 12369,
    		f: 3.04,
    		l: "じゅん"
    	},
    	{
    		r: 12370,
    		f: 3.04,
    		l: "文系"
    	},
    	{
    		r: 12371,
    		f: 3.04,
    		l: "震度"
    	},
    	{
    		r: 12372,
    		f: 3.04,
    		l: "せっせと"
    	},
    	{
    		r: 12373,
    		f: 3.04,
    		l: "環境庁"
    	},
    	{
    		r: 12374,
    		f: 3.04,
    		l: "グローブ"
    	},
    	{
    		r: 12375,
    		f: 3.04,
    		l: "導き出す"
    	},
    	{
    		r: 12376,
    		f: 3.04,
    		l: "ソーセージ"
    	},
    	{
    		r: 12377,
    		f: 3.04,
    		l: "女系"
    	},
    	{
    		r: 12378,
    		f: 3.04,
    		l: "起る"
    	},
    	{
    		r: 12379,
    		f: 3.04,
    		l: "直撃"
    	},
    	{
    		r: 12380,
    		f: 3.03,
    		l: "潤"
    	},
    	{
    		r: 12381,
    		f: 3.03,
    		l: "見積もる"
    	},
    	{
    		r: 12382,
    		f: 3.03,
    		l: "報う"
    	},
    	{
    		r: 12383,
    		f: 3.03,
    		l: "憲章"
    	},
    	{
    		r: 12384,
    		f: 3.03,
    		l: "そんなふうに"
    	},
    	{
    		r: 12385,
    		f: 3.03,
    		l: "少子"
    	},
    	{
    		r: 12386,
    		f: 3.03,
    		l: "おみやげ"
    	},
    	{
    		r: 12387,
    		f: 3.03,
    		l: "灸"
    	},
    	{
    		r: 12388,
    		f: 3.03,
    		l: "ガバ"
    	},
    	{
    		r: 12389,
    		f: 3.03,
    		l: "前原"
    	},
    	{
    		r: 12390,
    		f: 3.03,
    		l: "高野"
    	},
    	{
    		r: 12391,
    		f: 3.03,
    		l: "漁師"
    	},
    	{
    		r: 12392,
    		f: 3.03,
    		l: "窒素"
    	},
    	{
    		r: 12393,
    		f: 3.03,
    		l: "おっちゃん"
    	},
    	{
    		r: 12394,
    		f: 3.03,
    		l: "大々的"
    	},
    	{
    		r: 12395,
    		f: 3.03,
    		l: "東亜"
    	},
    	{
    		r: 12396,
    		f: 3.03,
    		l: "哀れ"
    	},
    	{
    		r: 12397,
    		f: 3.03,
    		l: "歯止め"
    	},
    	{
    		r: 12398,
    		f: 3.03,
    		l: "中高年"
    	},
    	{
    		r: 12399,
    		f: 3.03,
    		l: "セラピー"
    	},
    	{
    		r: 12400,
    		f: 3.03,
    		l: "ブタ"
    	},
    	{
    		r: 12401,
    		f: 3.03,
    		l: "戦記"
    	},
    	{
    		r: 12402,
    		f: 3.03,
    		l: "疑わしい"
    	},
    	{
    		r: 12403,
    		f: 3.03,
    		l: "スキーム"
    	},
    	{
    		r: 12404,
    		f: 3.03,
    		l: "やう"
    	},
    	{
    		r: 12405,
    		f: 3.03,
    		l: "堺"
    	},
    	{
    		r: 12406,
    		f: 3.03,
    		l: "歌劇"
    	},
    	{
    		r: 12407,
    		f: 3.03,
    		l: "充足"
    	},
    	{
    		r: 12408,
    		f: 3.03,
    		l: "中途"
    	},
    	{
    		r: 12409,
    		f: 3.03,
    		l: "しっとり"
    	},
    	{
    		r: 12410,
    		f: 3.03,
    		l: "歳月"
    	},
    	{
    		r: 12411,
    		f: 3.03,
    		l: "買い手"
    	},
    	{
    		r: 12412,
    		f: 3.02,
    		l: "ロッカー"
    	},
    	{
    		r: 12413,
    		f: 3.02,
    		l: "横須賀"
    	},
    	{
    		r: 12414,
    		f: 3.02,
    		l: "ＧＷ"
    	},
    	{
    		r: 12415,
    		f: 3.02,
    		l: "言い渡す"
    	},
    	{
    		r: 12416,
    		f: 3.02,
    		l: "ジョンソン"
    	},
    	{
    		r: 12417,
    		f: 3.02,
    		l: "話し方"
    	},
    	{
    		r: 12418,
    		f: 3.02,
    		l: "造成"
    	},
    	{
    		r: 12419,
    		f: 3.02,
    		l: "とおす"
    	},
    	{
    		r: 12420,
    		f: 3.02,
    		l: "顕"
    	},
    	{
    		r: 12421,
    		f: 3.02,
    		l: "横切る"
    	},
    	{
    		r: 12422,
    		f: 3.02,
    		l: "レンタカー"
    	},
    	{
    		r: 12423,
    		f: 3.02,
    		l: "細工"
    	},
    	{
    		r: 12424,
    		f: 3.02,
    		l: "姓"
    	},
    	{
    		r: 12425,
    		f: 3.02,
    		l: "取り替える"
    	},
    	{
    		r: 12426,
    		f: 3.02,
    		l: "緻密"
    	},
    	{
    		r: 12427,
    		f: 3.02,
    		l: "結"
    	},
    	{
    		r: 12428,
    		f: 3.02,
    		l: "本誌"
    	},
    	{
    		r: 12429,
    		f: 3.02,
    		l: "ブレア"
    	},
    	{
    		r: 12430,
    		f: 3.01,
    		l: "ダラダラ"
    	},
    	{
    		r: 12431,
    		f: 3.01,
    		l: "アクセル"
    	},
    	{
    		r: 12432,
    		f: 3.01,
    		l: "取消"
    	},
    	{
    		r: 12433,
    		f: 3.01,
    		l: "買物"
    	},
    	{
    		r: 12434,
    		f: 3.01,
    		l: "メカ"
    	},
    	{
    		r: 12435,
    		f: 3.01,
    		l: "大方"
    	},
    	{
    		r: 12436,
    		f: 3.01,
    		l: "技師"
    	},
    	{
    		r: 12437,
    		f: 3.01,
    		l: "昌"
    	},
    	{
    		r: 12438,
    		f: 3.01,
    		l: "常務"
    	},
    	{
    		r: 12439,
    		f: 3.01,
    		l: "声援"
    	},
    	{
    		r: 12440,
    		f: 3.01,
    		l: "圧勝"
    	},
    	{
    		r: 12441,
    		f: 3.01,
    		l: "一色"
    	},
    	{
    		r: 12442,
    		f: 3.01,
    		l: "噺"
    	},
    	{
    		r: 12443,
    		f: 3.01,
    		l: "鉱物"
    	},
    	{
    		r: 12444,
    		f: 3.01,
    		l: "噴出"
    	},
    	{
    		r: 12445,
    		f: 3.01,
    		l: "心中"
    	},
    	{
    		r: 12446,
    		f: 3.01,
    		l: "さわる"
    	},
    	{
    		r: 12447,
    		f: 3.01,
    		l: "刑罰"
    	},
    	{
    		r: 12448,
    		f: 3.01,
    		l: "実写"
    	},
    	{
    		r: 12449,
    		f: 3.01,
    		l: "卓球"
    	},
    	{
    		r: 12450,
    		f: 3.01,
    		l: "あき"
    	},
    	{
    		r: 12451,
    		f: 3.01,
    		l: "この上ない"
    	},
    	{
    		r: 12452,
    		f: 3.01,
    		l: "ジェン"
    	},
    	{
    		r: 12453,
    		f: 3.01,
    		l: "棄却"
    	},
    	{
    		r: 12454,
    		f: 3.01,
    		l: "しぬ"
    	},
    	{
    		r: 12455,
    		f: 3,
    		l: "キャロル"
    	},
    	{
    		r: 12456,
    		f: 3,
    		l: "産学"
    	},
    	{
    		r: 12457,
    		f: 3,
    		l: "ケネディ"
    	},
    	{
    		r: 12458,
    		f: 3,
    		l: "疑念"
    	},
    	{
    		r: 12459,
    		f: 3,
    		l: "プロダクト"
    	},
    	{
    		r: 12460,
    		f: 3,
    		l: "拳銃"
    	},
    	{
    		r: 12461,
    		f: 3,
    		l: "忠告"
    	},
    	{
    		r: 12462,
    		f: 3,
    		l: "兆候"
    	},
    	{
    		r: 12463,
    		f: 3,
    		l: "咲かせる"
    	},
    	{
    		r: 12464,
    		f: 3,
    		l: "流用"
    	},
    	{
    		r: 12465,
    		f: 3,
    		l: "運河"
    	},
    	{
    		r: 12466,
    		f: 3,
    		l: "敦"
    	},
    	{
    		r: 12467,
    		f: 3,
    		l: "鉛"
    	},
    	{
    		r: 12468,
    		f: 3,
    		l: "夕暮れ"
    	},
    	{
    		r: 12469,
    		f: 3,
    		l: "築地"
    	},
    	{
    		r: 12470,
    		f: 3,
    		l: "レントゲン"
    	},
    	{
    		r: 12471,
    		f: 3,
    		l: "夜空"
    	},
    	{
    		r: 12472,
    		f: 3,
    		l: "釣れる"
    	},
    	{
    		r: 12473,
    		f: 3,
    		l: "親会社"
    	},
    	{
    		r: 12474,
    		f: 3,
    		l: "小池"
    	},
    	{
    		r: 12475,
    		f: 3,
    		l: "北方"
    	},
    	{
    		r: 12476,
    		f: 3,
    		l: "繁華"
    	},
    	{
    		r: 12477,
    		f: 3,
    		l: "大宮"
    	},
    	{
    		r: 12478,
    		f: 3,
    		l: "各位"
    	},
    	{
    		r: 12479,
    		f: 3,
    		l: "転用"
    	},
    	{
    		r: 12480,
    		f: 3,
    		l: "返金"
    	},
    	{
    		r: 12481,
    		f: 3,
    		l: "書き手"
    	},
    	{
    		r: 12482,
    		f: 3,
    		l: "やりがい"
    	},
    	{
    		r: 12483,
    		f: 3,
    		l: "ピート"
    	},
    	{
    		r: 12484,
    		f: 3,
    		l: "失踪"
    	},
    	{
    		r: 12485,
    		f: 3,
    		l: "カーン"
    	},
    	{
    		r: 12486,
    		f: 3,
    		l: "模範"
    	},
    	{
    		r: 12487,
    		f: 2.99,
    		l: "口実"
    	},
    	{
    		r: 12488,
    		f: 2.99,
    		l: "怪物"
    	},
    	{
    		r: 12489,
    		f: 2.99,
    		l: "安打"
    	},
    	{
    		r: 12490,
    		f: 2.99,
    		l: "符号"
    	},
    	{
    		r: 12491,
    		f: 2.99,
    		l: "狂"
    	},
    	{
    		r: 12492,
    		f: 2.99,
    		l: "装"
    	},
    	{
    		r: 12493,
    		f: 2.99,
    		l: "買い換える"
    	},
    	{
    		r: 12494,
    		f: 2.99,
    		l: "カジュアル"
    	},
    	{
    		r: 12495,
    		f: 2.99,
    		l: "ＤＮＡ"
    	},
    	{
    		r: 12496,
    		f: 2.99,
    		l: "必読"
    	},
    	{
    		r: 12497,
    		f: 2.99,
    		l: "動的"
    	},
    	{
    		r: 12498,
    		f: 2.99,
    		l: "ケンブリッジ"
    	},
    	{
    		r: 12499,
    		f: 2.99,
    		l: "踏み入れる"
    	},
    	{
    		r: 12500,
    		f: 2.99,
    		l: "ゆでる"
    	},
    	{
    		r: 12501,
    		f: 2.99,
    		l: "橘"
    	},
    	{
    		r: 12502,
    		f: 2.99,
    		l: "ホイール"
    	},
    	{
    		r: 12503,
    		f: 2.99,
    		l: "海老"
    	},
    	{
    		r: 12504,
    		f: 2.99,
    		l: "虜"
    	},
    	{
    		r: 12505,
    		f: 2.99,
    		l: "浮き彫り"
    	},
    	{
    		r: 12506,
    		f: 2.99,
    		l: "国民党"
    	},
    	{
    		r: 12507,
    		f: 2.99,
    		l: "町民"
    	},
    	{
    		r: 12508,
    		f: 2.99,
    		l: "隣国"
    	},
    	{
    		r: 12509,
    		f: 2.99,
    		l: "織り込む"
    	},
    	{
    		r: 12510,
    		f: 2.99,
    		l: "絶大"
    	},
    	{
    		r: 12511,
    		f: 2.98,
    		l: "はつ"
    	},
    	{
    		r: 12512,
    		f: 2.98,
    		l: "しようが"
    	},
    	{
    		r: 12513,
    		f: 2.98,
    		l: "なんせ"
    	},
    	{
    		r: 12514,
    		f: 2.98,
    		l: "締切"
    	},
    	{
    		r: 12515,
    		f: 2.98,
    		l: "街並み"
    	},
    	{
    		r: 12516,
    		f: 2.98,
    		l: "ＧＫ"
    	},
    	{
    		r: 12517,
    		f: 2.98,
    		l: "ホセ"
    	},
    	{
    		r: 12518,
    		f: 2.98,
    		l: "極度"
    	},
    	{
    		r: 12519,
    		f: 2.98,
    		l: "濃縮"
    	},
    	{
    		r: 12520,
    		f: 2.98,
    		l: "生殖"
    	},
    	{
    		r: 12521,
    		f: 2.98,
    		l: "英和"
    	},
    	{
    		r: 12522,
    		f: 2.98,
    		l: "のべる"
    	},
    	{
    		r: 12523,
    		f: 2.98,
    		l: "ボウル"
    	},
    	{
    		r: 12524,
    		f: 2.98,
    		l: "嫁さん"
    	},
    	{
    		r: 12525,
    		f: 2.98,
    		l: "ってか"
    	},
    	{
    		r: 12526,
    		f: 2.98,
    		l: "くれぐれも"
    	},
    	{
    		r: 12527,
    		f: 2.98,
    		l: "ナンセンス"
    	},
    	{
    		r: 12528,
    		f: 2.98,
    		l: "並列"
    	},
    	{
    		r: 12529,
    		f: 2.98,
    		l: "荒廃"
    	},
    	{
    		r: 12530,
    		f: 2.98,
    		l: "予習"
    	},
    	{
    		r: 12531,
    		f: 2.98,
    		l: "マキ"
    	},
    	{
    		r: 12532,
    		f: 2.98,
    		l: "入植"
    	},
    	{
    		r: 12533,
    		f: 2.98,
    		l: "取り囲む"
    	},
    	{
    		r: 12534,
    		f: 2.98,
    		l: "地検"
    	},
    	{
    		r: 12535,
    		f: 2.98,
    		l: "重症"
    	},
    	{
    		r: 12536,
    		f: 2.98,
    		l: "添削"
    	},
    	{
    		r: 12537,
    		f: 2.98,
    		l: "従属"
    	},
    	{
    		r: 12538,
    		f: 2.98,
    		l: "りっぱ"
    	},
    	{
    		r: 12539,
    		f: 2.97,
    		l: "吉祥寺"
    	},
    	{
    		r: 12540,
    		f: 2.97,
    		l: "英単語"
    	},
    	{
    		r: 12541,
    		f: 2.97,
    		l: "天ぷら"
    	},
    	{
    		r: 12542,
    		f: 2.97,
    		l: "ブライアン"
    	},
    	{
    		r: 12543,
    		f: 2.97,
    		l: "地中海"
    	},
    	{
    		r: 12544,
    		f: 2.97,
    		l: "仕る"
    	},
    	{
    		r: 12545,
    		f: 2.97,
    		l: "器用"
    	},
    	{
    		r: 12546,
    		f: 2.97,
    		l: "倍率"
    	},
    	{
    		r: 12547,
    		f: 2.97,
    		l: "寝不足"
    	},
    	{
    		r: 12548,
    		f: 2.97,
    		l: "出くわす"
    	},
    	{
    		r: 12549,
    		f: 2.97,
    		l: "賞品"
    	},
    	{
    		r: 12550,
    		f: 2.97,
    		l: "商取引"
    	},
    	{
    		r: 12551,
    		f: 2.97,
    		l: "先駆"
    	},
    	{
    		r: 12552,
    		f: 2.97,
    		l: "入れ替わる"
    	},
    	{
    		r: 12553,
    		f: 2.97,
    		l: "台本"
    	},
    	{
    		r: 12554,
    		f: 2.97,
    		l: "ひとりひとり"
    	},
    	{
    		r: 12555,
    		f: 2.97,
    		l: "はがき"
    	},
    	{
    		r: 12556,
    		f: 2.97,
    		l: "対峙"
    	},
    	{
    		r: 12557,
    		f: 2.97,
    		l: "ノベル"
    	},
    	{
    		r: 12558,
    		f: 2.97,
    		l: "増資"
    	},
    	{
    		r: 12559,
    		f: 2.97,
    		l: "チョット"
    	},
    	{
    		r: 12560,
    		f: 2.97,
    		l: "果"
    	},
    	{
    		r: 12561,
    		f: 2.96,
    		l: "ゴロ"
    	},
    	{
    		r: 12562,
    		f: 2.96,
    		l: "信州"
    	},
    	{
    		r: 12563,
    		f: 2.96,
    		l: "比喩"
    	},
    	{
    		r: 12564,
    		f: 2.96,
    		l: "みち"
    	},
    	{
    		r: 12565,
    		f: 2.96,
    		l: "風力"
    	},
    	{
    		r: 12566,
    		f: 2.96,
    		l: "ホームラン"
    	},
    	{
    		r: 12567,
    		f: 2.96,
    		l: "仮称"
    	},
    	{
    		r: 12568,
    		f: 2.96,
    		l: "舞踏"
    	},
    	{
    		r: 12569,
    		f: 2.96,
    		l: "ゲン"
    	},
    	{
    		r: 12570,
    		f: 2.96,
    		l: "開戦"
    	},
    	{
    		r: 12571,
    		f: 2.96,
    		l: "元旦"
    	},
    	{
    		r: 12572,
    		f: 2.96,
    		l: "傘下"
    	},
    	{
    		r: 12573,
    		f: 2.96,
    		l: "木曜"
    	},
    	{
    		r: 12574,
    		f: 2.96,
    		l: "太平洋戦争"
    	},
    	{
    		r: 12575,
    		f: 2.96,
    		l: "山間"
    	},
    	{
    		r: 12576,
    		f: 2.96,
    		l: "砂浜"
    	},
    	{
    		r: 12577,
    		f: 2.96,
    		l: "古本"
    	},
    	{
    		r: 12578,
    		f: 2.96,
    		l: "サングラス"
    	},
    	{
    		r: 12579,
    		f: 2.96,
    		l: "都立"
    	},
    	{
    		r: 12580,
    		f: 2.96,
    		l: "からかう"
    	},
    	{
    		r: 12581,
    		f: 2.96,
    		l: "コック"
    	},
    	{
    		r: 12582,
    		f: 2.96,
    		l: "スズキ"
    	},
    	{
    		r: 12583,
    		f: 2.96,
    		l: "眠気"
    	},
    	{
    		r: 12584,
    		f: 2.96,
    		l: "心強い"
    	},
    	{
    		r: 12585,
    		f: 2.96,
    		l: "おや"
    	},
    	{
    		r: 12586,
    		f: 2.96,
    		l: "払拭"
    	},
    	{
    		r: 12587,
    		f: 2.96,
    		l: "ｖ"
    	},
    	{
    		r: 12588,
    		f: 2.96,
    		l: "希"
    	},
    	{
    		r: 12589,
    		f: 2.95,
    		l: "多重"
    	},
    	{
    		r: 12590,
    		f: 2.95,
    		l: "コーディネート"
    	},
    	{
    		r: 12591,
    		f: 2.95,
    		l: "用具"
    	},
    	{
    		r: 12592,
    		f: 2.95,
    		l: "ＩＣ"
    	},
    	{
    		r: 12593,
    		f: 2.95,
    		l: "痴呆"
    	},
    	{
    		r: 12594,
    		f: 2.95,
    		l: "農政"
    	},
    	{
    		r: 12595,
    		f: 2.95,
    		l: "病人"
    	},
    	{
    		r: 12596,
    		f: 2.95,
    		l: "舗装"
    	},
    	{
    		r: 12597,
    		f: 2.95,
    		l: "山村"
    	},
    	{
    		r: 12598,
    		f: 2.95,
    		l: "執拗"
    	},
    	{
    		r: 12599,
    		f: 2.95,
    		l: "全長"
    	},
    	{
    		r: 12600,
    		f: 2.95,
    		l: "誹謗"
    	},
    	{
    		r: 12601,
    		f: 2.95,
    		l: "総じて"
    	},
    	{
    		r: 12602,
    		f: 2.95,
    		l: "沼"
    	},
    	{
    		r: 12603,
    		f: 2.95,
    		l: "自在"
    	},
    	{
    		r: 12604,
    		f: 2.95,
    		l: "チャネル"
    	},
    	{
    		r: 12605,
    		f: 2.95,
    		l: "文面"
    	},
    	{
    		r: 12606,
    		f: 2.95,
    		l: "久保田"
    	},
    	{
    		r: 12607,
    		f: 2.95,
    		l: "アダム"
    	},
    	{
    		r: 12608,
    		f: 2.95,
    		l: "フィート"
    	},
    	{
    		r: 12609,
    		f: 2.95,
    		l: "あわせて"
    	},
    	{
    		r: 12610,
    		f: 2.95,
    		l: "感受性"
    	},
    	{
    		r: 12611,
    		f: 2.95,
    		l: "フェーズ"
    	},
    	{
    		r: 12612,
    		f: 2.95,
    		l: "人情"
    	},
    	{
    		r: 12613,
    		f: 2.94,
    		l: "第一人者"
    	},
    	{
    		r: 12614,
    		f: 2.94,
    		l: "宿る"
    	},
    	{
    		r: 12615,
    		f: 2.94,
    		l: "婆"
    	},
    	{
    		r: 12616,
    		f: 2.94,
    		l: "初夏"
    	},
    	{
    		r: 12617,
    		f: 2.94,
    		l: "分量"
    	},
    	{
    		r: 12618,
    		f: 2.94,
    		l: "根付く"
    	},
    	{
    		r: 12619,
    		f: 2.94,
    		l: "塩素"
    	},
    	{
    		r: 12620,
    		f: 2.94,
    		l: "南極"
    	},
    	{
    		r: 12621,
    		f: 2.94,
    		l: "兄貴"
    	},
    	{
    		r: 12622,
    		f: 2.94,
    		l: "天文"
    	},
    	{
    		r: 12623,
    		f: 2.94,
    		l: "ドリブル"
    	},
    	{
    		r: 12624,
    		f: 2.94,
    		l: "ゆり"
    	},
    	{
    		r: 12625,
    		f: 2.94,
    		l: "気持ち良い"
    	},
    	{
    		r: 12626,
    		f: 2.94,
    		l: "最多"
    	},
    	{
    		r: 12627,
    		f: 2.94,
    		l: "愉しい"
    	},
    	{
    		r: 12628,
    		f: 2.94,
    		l: "既婚"
    	},
    	{
    		r: 12629,
    		f: 2.94,
    		l: "ポルノ"
    	},
    	{
    		r: 12630,
    		f: 2.94,
    		l: "税務署"
    	},
    	{
    		r: 12631,
    		f: 2.94,
    		l: "ひそか"
    	},
    	{
    		r: 12632,
    		f: 2.94,
    		l: "振り込む"
    	},
    	{
    		r: 12633,
    		f: 2.94,
    		l: "運航"
    	},
    	{
    		r: 12634,
    		f: 2.94,
    		l: "澄む"
    	},
    	{
    		r: 12635,
    		f: 2.94,
    		l: "実る"
    	},
    	{
    		r: 12636,
    		f: 2.94,
    		l: "想い出"
    	},
    	{
    		r: 12637,
    		f: 2.94,
    		l: "インプット"
    	},
    	{
    		r: 12638,
    		f: 2.94,
    		l: "広東"
    	},
    	{
    		r: 12639,
    		f: 2.94,
    		l: "上述"
    	},
    	{
    		r: 12640,
    		f: 2.94,
    		l: "小僧"
    	},
    	{
    		r: 12641,
    		f: 2.94,
    		l: "通りすがり"
    	},
    	{
    		r: 12642,
    		f: 2.94,
    		l: "造船"
    	},
    	{
    		r: 12643,
    		f: 2.94,
    		l: "なんら"
    	},
    	{
    		r: 12644,
    		f: 2.94,
    		l: "回生"
    	},
    	{
    		r: 12645,
    		f: 2.94,
    		l: "伝導"
    	},
    	{
    		r: 12646,
    		f: 2.94,
    		l: "憎悪"
    	},
    	{
    		r: 12647,
    		f: 2.94,
    		l: "遊園"
    	},
    	{
    		r: 12648,
    		f: 2.94,
    		l: "取り残す"
    	},
    	{
    		r: 12649,
    		f: 2.94,
    		l: "いす"
    	},
    	{
    		r: 12650,
    		f: 2.93,
    		l: "賑やか"
    	},
    	{
    		r: 12651,
    		f: 2.93,
    		l: "休養"
    	},
    	{
    		r: 12652,
    		f: 2.93,
    		l: "しのぐ"
    	},
    	{
    		r: 12653,
    		f: 2.93,
    		l: "魅"
    	},
    	{
    		r: 12654,
    		f: 2.93,
    		l: "無垢"
    	},
    	{
    		r: 12655,
    		f: 2.93,
    		l: "消失"
    	},
    	{
    		r: 12656,
    		f: 2.93,
    		l: "捕虜"
    	},
    	{
    		r: 12657,
    		f: 2.93,
    		l: "言い回し"
    	},
    	{
    		r: 12658,
    		f: 2.93,
    		l: "滅ぼす"
    	},
    	{
    		r: 12659,
    		f: 2.93,
    		l: "故人"
    	},
    	{
    		r: 12660,
    		f: 2.93,
    		l: "すませる"
    	},
    	{
    		r: 12661,
    		f: 2.93,
    		l: "マルクス主義"
    	},
    	{
    		r: 12662,
    		f: 2.93,
    		l: "小鳥"
    	},
    	{
    		r: 12663,
    		f: 2.93,
    		l: "出頭"
    	},
    	{
    		r: 12664,
    		f: 2.93,
    		l: "チャイルド"
    	},
    	{
    		r: 12665,
    		f: 2.93,
    		l: "ラスベガス"
    	},
    	{
    		r: 12666,
    		f: 2.93,
    		l: "くに"
    	},
    	{
    		r: 12667,
    		f: 2.93,
    		l: "開き直る"
    	},
    	{
    		r: 12668,
    		f: 2.93,
    		l: "バーガー"
    	},
    	{
    		r: 12669,
    		f: 2.93,
    		l: "備蓄"
    	},
    	{
    		r: 12670,
    		f: 2.93,
    		l: "正午"
    	},
    	{
    		r: 12671,
    		f: 2.93,
    		l: "紛失"
    	},
    	{
    		r: 12672,
    		f: 2.93,
    		l: "無題"
    	},
    	{
    		r: 12673,
    		f: 2.93,
    		l: "免責"
    	},
    	{
    		r: 12674,
    		f: 2.93,
    		l: "満月"
    	},
    	{
    		r: 12675,
    		f: 2.93,
    		l: "シベリア"
    	},
    	{
    		r: 12676,
    		f: 2.92,
    		l: "種族"
    	},
    	{
    		r: 12677,
    		f: 2.92,
    		l: "フック"
    	},
    	{
    		r: 12678,
    		f: 2.92,
    		l: "利上げ"
    	},
    	{
    		r: 12679,
    		f: 2.92,
    		l: "伐採"
    	},
    	{
    		r: 12680,
    		f: 2.92,
    		l: "閉会"
    	},
    	{
    		r: 12681,
    		f: 2.92,
    		l: "割り当て"
    	},
    	{
    		r: 12682,
    		f: 2.92,
    		l: "宮内"
    	},
    	{
    		r: 12683,
    		f: 2.92,
    		l: "伴"
    	},
    	{
    		r: 12684,
    		f: 2.92,
    		l: "海峡"
    	},
    	{
    		r: 12685,
    		f: 2.92,
    		l: "洋子"
    	},
    	{
    		r: 12686,
    		f: 2.92,
    		l: "急性"
    	},
    	{
    		r: 12687,
    		f: 2.92,
    		l: "つけ"
    	},
    	{
    		r: 12688,
    		f: 2.92,
    		l: "検閲"
    	},
    	{
    		r: 12689,
    		f: 2.92,
    		l: "前置き"
    	},
    	{
    		r: 12690,
    		f: 2.92,
    		l: "ひろ"
    	},
    	{
    		r: 12691,
    		f: 2.92,
    		l: "重点的"
    	},
    	{
    		r: 12692,
    		f: 2.92,
    		l: "小冊子"
    	},
    	{
    		r: 12693,
    		f: 2.92,
    		l: "雑草"
    	},
    	{
    		r: 12694,
    		f: 2.92,
    		l: "東側"
    	},
    	{
    		r: 12695,
    		f: 2.92,
    		l: "新婚"
    	},
    	{
    		r: 12696,
    		f: 2.91,
    		l: "調書"
    	},
    	{
    		r: 12697,
    		f: 2.91,
    		l: "麓"
    	},
    	{
    		r: 12698,
    		f: 2.91,
    		l: "区切り"
    	},
    	{
    		r: 12699,
    		f: 2.91,
    		l: "鉄骨"
    	},
    	{
    		r: 12700,
    		f: 2.91,
    		l: "凝縮"
    	},
    	{
    		r: 12701,
    		f: 2.91,
    		l: "ヘルス"
    	},
    	{
    		r: 12702,
    		f: 2.91,
    		l: "尊"
    	},
    	{
    		r: 12703,
    		f: 2.91,
    		l: "主題歌"
    	},
    	{
    		r: 12704,
    		f: 2.91,
    		l: "坂口"
    	},
    	{
    		r: 12705,
    		f: 2.91,
    		l: "おさめる"
    	},
    	{
    		r: 12706,
    		f: 2.91,
    		l: "質的"
    	},
    	{
    		r: 12707,
    		f: 2.91,
    		l: "アトリエ"
    	},
    	{
    		r: 12708,
    		f: 2.91,
    		l: "至福"
    	},
    	{
    		r: 12709,
    		f: 2.91,
    		l: "商談"
    	},
    	{
    		r: 12710,
    		f: 2.91,
    		l: "毅"
    	},
    	{
    		r: 12711,
    		f: 2.91,
    		l: "マフラー"
    	},
    	{
    		r: 12712,
    		f: 2.91,
    		l: "岩田"
    	},
    	{
    		r: 12713,
    		f: 2.91,
    		l: "たくましい"
    	},
    	{
    		r: 12714,
    		f: 2.9,
    		l: "たこ"
    	},
    	{
    		r: 12715,
    		f: 2.9,
    		l: "顔色"
    	},
    	{
    		r: 12716,
    		f: 2.9,
    		l: "電球"
    	},
    	{
    		r: 12717,
    		f: 2.9,
    		l: "近鉄"
    	},
    	{
    		r: 12718,
    		f: 2.9,
    		l: "銭湯"
    	},
    	{
    		r: 12719,
    		f: 2.9,
    		l: "激怒"
    	},
    	{
    		r: 12720,
    		f: 2.9,
    		l: "知らず"
    	},
    	{
    		r: 12721,
    		f: 2.9,
    		l: "タフ"
    	},
    	{
    		r: 12722,
    		f: 2.9,
    		l: "足立"
    	},
    	{
    		r: 12723,
    		f: 2.9,
    		l: "経済学部"
    	},
    	{
    		r: 12724,
    		f: 2.9,
    		l: "おおい"
    	},
    	{
    		r: 12725,
    		f: 2.9,
    		l: "不条理"
    	},
    	{
    		r: 12726,
    		f: 2.9,
    		l: "ジャンク"
    	},
    	{
    		r: 12727,
    		f: 2.9,
    		l: "珈琲"
    	},
    	{
    		r: 12728,
    		f: 2.9,
    		l: "渓"
    	},
    	{
    		r: 12729,
    		f: 2.9,
    		l: "猟"
    	},
    	{
    		r: 12730,
    		f: 2.9,
    		l: "上半身"
    	},
    	{
    		r: 12731,
    		f: 2.9,
    		l: "健闘"
    	},
    	{
    		r: 12732,
    		f: 2.9,
    		l: "趙"
    	},
    	{
    		r: 12733,
    		f: 2.9,
    		l: "病室"
    	},
    	{
    		r: 12734,
    		f: 2.9,
    		l: "経済企画庁"
    	},
    	{
    		r: 12735,
    		f: 2.9,
    		l: "平壌"
    	},
    	{
    		r: 12736,
    		f: 2.9,
    		l: "発砲"
    	},
    	{
    		r: 12737,
    		f: 2.9,
    		l: "昔ながら"
    	},
    	{
    		r: 12738,
    		f: 2.9,
    		l: "おとな"
    	},
    	{
    		r: 12739,
    		f: 2.9,
    		l: "カウントダウン"
    	},
    	{
    		r: 12740,
    		f: 2.89,
    		l: "在学"
    	},
    	{
    		r: 12741,
    		f: 2.89,
    		l: "今時"
    	},
    	{
    		r: 12742,
    		f: 2.89,
    		l: "キリスト教徒"
    	},
    	{
    		r: 12743,
    		f: 2.89,
    		l: "昼飯"
    	},
    	{
    		r: 12744,
    		f: 2.89,
    		l: "醸造"
    	},
    	{
    		r: 12745,
    		f: 2.89,
    		l: "コントローラ"
    	},
    	{
    		r: 12746,
    		f: 2.89,
    		l: "クッション"
    	},
    	{
    		r: 12747,
    		f: 2.89,
    		l: "新株"
    	},
    	{
    		r: 12748,
    		f: 2.89,
    		l: "チャーター"
    	},
    	{
    		r: 12749,
    		f: 2.89,
    		l: "氾濫"
    	},
    	{
    		r: 12750,
    		f: 2.89,
    		l: "好き嫌い"
    	},
    	{
    		r: 12751,
    		f: 2.89,
    		l: "バグダッド"
    	},
    	{
    		r: 12752,
    		f: 2.89,
    		l: "洲"
    	},
    	{
    		r: 12753,
    		f: 2.89,
    		l: "戦艦"
    	},
    	{
    		r: 12754,
    		f: 2.89,
    		l: "醍醐味"
    	},
    	{
    		r: 12755,
    		f: 2.89,
    		l: "蟹"
    	},
    	{
    		r: 12756,
    		f: 2.89,
    		l: "本紙"
    	},
    	{
    		r: 12757,
    		f: 2.89,
    		l: "奇"
    	},
    	{
    		r: 12758,
    		f: 2.89,
    		l: "宣"
    	},
    	{
    		r: 12759,
    		f: 2.89,
    		l: "制す"
    	},
    	{
    		r: 12760,
    		f: 2.89,
    		l: "エリック"
    	},
    	{
    		r: 12761,
    		f: 2.89,
    		l: "リクルート"
    	},
    	{
    		r: 12762,
    		f: 2.89,
    		l: "椿"
    	},
    	{
    		r: 12763,
    		f: 2.89,
    		l: "整形"
    	},
    	{
    		r: 12764,
    		f: 2.89,
    		l: "まかなう"
    	},
    	{
    		r: 12765,
    		f: 2.88,
    		l: "にたいする"
    	},
    	{
    		r: 12766,
    		f: 2.88,
    		l: "詩集"
    	},
    	{
    		r: 12767,
    		f: 2.88,
    		l: "着工"
    	},
    	{
    		r: 12768,
    		f: 2.88,
    		l: "乱用"
    	},
    	{
    		r: 12769,
    		f: 2.88,
    		l: "供養"
    	},
    	{
    		r: 12770,
    		f: 2.88,
    		l: "ＯＬ"
    	},
    	{
    		r: 12771,
    		f: 2.88,
    		l: "セーター"
    	},
    	{
    		r: 12772,
    		f: 2.88,
    		l: "雛"
    	},
    	{
    		r: 12773,
    		f: 2.88,
    		l: "大山"
    	},
    	{
    		r: 12774,
    		f: 2.88,
    		l: "赤十字"
    	},
    	{
    		r: 12775,
    		f: 2.88,
    		l: "減速"
    	},
    	{
    		r: 12776,
    		f: 2.88,
    		l: "心底"
    	},
    	{
    		r: 12777,
    		f: 2.88,
    		l: "のびる"
    	},
    	{
    		r: 12778,
    		f: 2.88,
    		l: "ダンボール"
    	},
    	{
    		r: 12779,
    		f: 2.88,
    		l: "動力"
    	},
    	{
    		r: 12780,
    		f: 2.88,
    		l: "申しわけ"
    	},
    	{
    		r: 12781,
    		f: 2.88,
    		l: "恩"
    	},
    	{
    		r: 12782,
    		f: 2.87,
    		l: "武蔵"
    	},
    	{
    		r: 12783,
    		f: 2.87,
    		l: "がかり"
    	},
    	{
    		r: 12784,
    		f: 2.87,
    		l: "見張る"
    	},
    	{
    		r: 12785,
    		f: 2.87,
    		l: "真っ直ぐ"
    	},
    	{
    		r: 12786,
    		f: 2.87,
    		l: "グアム"
    	},
    	{
    		r: 12787,
    		f: 2.87,
    		l: "漕ぐ"
    	},
    	{
    		r: 12788,
    		f: 2.87,
    		l: "エアー"
    	},
    	{
    		r: 12789,
    		f: 2.87,
    		l: "ほのぼの"
    	},
    	{
    		r: 12790,
    		f: 2.87,
    		l: "スーパーマーケット"
    	},
    	{
    		r: 12791,
    		f: 2.87,
    		l: "喜劇"
    	},
    	{
    		r: 12792,
    		f: 2.87,
    		l: "辞退"
    	},
    	{
    		r: 12793,
    		f: 2.87,
    		l: "お参り"
    	},
    	{
    		r: 12794,
    		f: 2.87,
    		l: "マメ"
    	},
    	{
    		r: 12795,
    		f: 2.87,
    		l: "テック"
    	},
    	{
    		r: 12796,
    		f: 2.87,
    		l: "蒸し暑い"
    	},
    	{
    		r: 12797,
    		f: 2.87,
    		l: "身元"
    	},
    	{
    		r: 12798,
    		f: 2.87,
    		l: "本数"
    	},
    	{
    		r: 12799,
    		f: 2.87,
    		l: "皇族"
    	},
    	{
    		r: 12800,
    		f: 2.87,
    		l: "強風"
    	},
    	{
    		r: 12801,
    		f: 2.87,
    		l: "設問"
    	},
    	{
    		r: 12802,
    		f: 2.87,
    		l: "未明"
    	},
    	{
    		r: 12803,
    		f: 2.87,
    		l: "書き上げる"
    	},
    	{
    		r: 12804,
    		f: 2.87,
    		l: "白鳥"
    	},
    	{
    		r: 12805,
    		f: 2.87,
    		l: "上り"
    	},
    	{
    		r: 12806,
    		f: 2.87,
    		l: "素子"
    	},
    	{
    		r: 12807,
    		f: 2.87,
    		l: "断絶"
    	},
    	{
    		r: 12808,
    		f: 2.87,
    		l: "常々"
    	},
    	{
    		r: 12809,
    		f: 2.87,
    		l: "シルク"
    	},
    	{
    		r: 12810,
    		f: 2.87,
    		l: "存分"
    	},
    	{
    		r: 12811,
    		f: 2.87,
    		l: "硬化"
    	},
    	{
    		r: 12812,
    		f: 2.87,
    		l: "吊る"
    	},
    	{
    		r: 12813,
    		f: 2.87,
    		l: "レディ"
    	},
    	{
    		r: 12814,
    		f: 2.87,
    		l: "増員"
    	},
    	{
    		r: 12815,
    		f: 2.86,
    		l: "帳簿"
    	},
    	{
    		r: 12816,
    		f: 2.86,
    		l: "堅持"
    	},
    	{
    		r: 12817,
    		f: 2.86,
    		l: "防げる"
    	},
    	{
    		r: 12818,
    		f: 2.86,
    		l: "金色"
    	},
    	{
    		r: 12819,
    		f: 2.86,
    		l: "叔母"
    	},
    	{
    		r: 12820,
    		f: 2.86,
    		l: "自治省"
    	},
    	{
    		r: 12821,
    		f: 2.86,
    		l: "法務大臣"
    	},
    	{
    		r: 12822,
    		f: 2.86,
    		l: "よぶ"
    	},
    	{
    		r: 12823,
    		f: 2.86,
    		l: "温室"
    	},
    	{
    		r: 12824,
    		f: 2.86,
    		l: "逐次"
    	},
    	{
    		r: 12825,
    		f: 2.86,
    		l: "モチ"
    	},
    	{
    		r: 12826,
    		f: 2.86,
    		l: "倉"
    	},
    	{
    		r: 12827,
    		f: 2.86,
    		l: "酒造"
    	},
    	{
    		r: 12828,
    		f: 2.86,
    		l: "紀元前"
    	},
    	{
    		r: 12829,
    		f: 2.86,
    		l: "誘い"
    	},
    	{
    		r: 12830,
    		f: 2.86,
    		l: "イレブン"
    	},
    	{
    		r: 12831,
    		f: 2.86,
    		l: "ｓ"
    	},
    	{
    		r: 12832,
    		f: 2.86,
    		l: "あや"
    	},
    	{
    		r: 12833,
    		f: 2.86,
    		l: "緊密"
    	},
    	{
    		r: 12834,
    		f: 2.86,
    		l: "見回す"
    	},
    	{
    		r: 12835,
    		f: 2.86,
    		l: "クロック"
    	},
    	{
    		r: 12836,
    		f: 2.86,
    		l: "カセット"
    	},
    	{
    		r: 12837,
    		f: 2.86,
    		l: "起す"
    	},
    	{
    		r: 12838,
    		f: 2.86,
    		l: "アルク"
    	},
    	{
    		r: 12839,
    		f: 2.86,
    		l: "よぎる"
    	},
    	{
    		r: 12840,
    		f: 2.86,
    		l: "盛大"
    	},
    	{
    		r: 12841,
    		f: 2.86,
    		l: "締め"
    	},
    	{
    		r: 12842,
    		f: 2.86,
    		l: "鶏肉"
    	},
    	{
    		r: 12843,
    		f: 2.86,
    		l: "サンパウロ"
    	},
    	{
    		r: 12844,
    		f: 2.86,
    		l: "ビリー"
    	},
    	{
    		r: 12845,
    		f: 2.86,
    		l: "思いやる"
    	},
    	{
    		r: 12846,
    		f: 2.86,
    		l: "平山"
    	},
    	{
    		r: 12847,
    		f: 2.86,
    		l: "手掛ける"
    	},
    	{
    		r: 12848,
    		f: 2.86,
    		l: "推し進める"
    	},
    	{
    		r: 12849,
    		f: 2.86,
    		l: "見つけ出す"
    	},
    	{
    		r: 12850,
    		f: 2.86,
    		l: "ひねる"
    	},
    	{
    		r: 12851,
    		f: 2.86,
    		l: "はおる"
    	},
    	{
    		r: 12852,
    		f: 2.86,
    		l: "会計検査院"
    	},
    	{
    		r: 12853,
    		f: 2.86,
    		l: "同点"
    	},
    	{
    		r: 12854,
    		f: 2.85,
    		l: "懲りる"
    	},
    	{
    		r: 12855,
    		f: 2.85,
    		l: "ヘッジファンド"
    	},
    	{
    		r: 12856,
    		f: 2.85,
    		l: "王家"
    	},
    	{
    		r: 12857,
    		f: 2.85,
    		l: "カメ"
    	},
    	{
    		r: 12858,
    		f: 2.85,
    		l: "賑わう"
    	},
    	{
    		r: 12859,
    		f: 2.85,
    		l: "イザ"
    	},
    	{
    		r: 12860,
    		f: 2.85,
    		l: "推察"
    	},
    	{
    		r: 12861,
    		f: 2.85,
    		l: "好物"
    	},
    	{
    		r: 12862,
    		f: 2.85,
    		l: "まんが"
    	},
    	{
    		r: 12863,
    		f: 2.85,
    		l: "一級"
    	},
    	{
    		r: 12864,
    		f: 2.85,
    		l: "試食"
    	},
    	{
    		r: 12865,
    		f: 2.85,
    		l: "古今"
    	},
    	{
    		r: 12866,
    		f: 2.85,
    		l: "山内"
    	},
    	{
    		r: 12867,
    		f: 2.85,
    		l: "アンナ"
    	},
    	{
    		r: 12868,
    		f: 2.85,
    		l: "学芸"
    	},
    	{
    		r: 12869,
    		f: 2.85,
    		l: "ずらす"
    	},
    	{
    		r: 12870,
    		f: 2.85,
    		l: "とかす"
    	},
    	{
    		r: 12871,
    		f: 2.85,
    		l: "痕跡"
    	},
    	{
    		r: 12872,
    		f: 2.85,
    		l: "新入生"
    	},
    	{
    		r: 12873,
    		f: 2.85,
    		l: "めど"
    	},
    	{
    		r: 12874,
    		f: 2.85,
    		l: "ヘルパー"
    	},
    	{
    		r: 12875,
    		f: 2.85,
    		l: "粗"
    	},
    	{
    		r: 12876,
    		f: 2.85,
    		l: "ダイニング"
    	},
    	{
    		r: 12877,
    		f: 2.85,
    		l: "おそらくは"
    	},
    	{
    		r: 12878,
    		f: 2.85,
    		l: "椎名"
    	},
    	{
    		r: 12879,
    		f: 2.85,
    		l: "譜"
    	},
    	{
    		r: 12880,
    		f: 2.85,
    		l: "巨匠"
    	},
    	{
    		r: 12881,
    		f: 2.85,
    		l: "一変"
    	},
    	{
    		r: 12882,
    		f: 2.85,
    		l: "派兵"
    	},
    	{
    		r: 12883,
    		f: 2.85,
    		l: "特撮"
    	},
    	{
    		r: 12884,
    		f: 2.85,
    		l: "有数"
    	},
    	{
    		r: 12885,
    		f: 2.85,
    		l: "社団"
    	},
    	{
    		r: 12886,
    		f: 2.85,
    		l: "ライブラリー"
    	},
    	{
    		r: 12887,
    		f: 2.85,
    		l: "金魚"
    	},
    	{
    		r: 12888,
    		f: 2.85,
    		l: "付随"
    	},
    	{
    		r: 12889,
    		f: 2.85,
    		l: "ぜん"
    	},
    	{
    		r: 12890,
    		f: 2.85,
    		l: "生育"
    	},
    	{
    		r: 12891,
    		f: 2.84,
    		l: "余韻"
    	},
    	{
    		r: 12892,
    		f: 2.84,
    		l: "腎臓"
    	},
    	{
    		r: 12893,
    		f: 2.84,
    		l: "村田"
    	},
    	{
    		r: 12894,
    		f: 2.84,
    		l: "放り込む"
    	},
    	{
    		r: 12895,
    		f: 2.84,
    		l: "７つ"
    	},
    	{
    		r: 12896,
    		f: 2.84,
    		l: "守護"
    	},
    	{
    		r: 12897,
    		f: 2.84,
    		l: "再三"
    	},
    	{
    		r: 12898,
    		f: 2.84,
    		l: "チャージ"
    	},
    	{
    		r: 12899,
    		f: 2.84,
    		l: "急行"
    	},
    	{
    		r: 12900,
    		f: 2.84,
    		l: "軽蔑"
    	},
    	{
    		r: 12901,
    		f: 2.84,
    		l: "リベラル"
    	},
    	{
    		r: 12902,
    		f: 2.84,
    		l: "将校"
    	},
    	{
    		r: 12903,
    		f: 2.84,
    		l: "読み解く"
    	},
    	{
    		r: 12904,
    		f: 2.84,
    		l: "富裕"
    	},
    	{
    		r: 12905,
    		f: 2.84,
    		l: "跡地"
    	},
    	{
    		r: 12906,
    		f: 2.84,
    		l: "Ｗｅｂ"
    	},
    	{
    		r: 12907,
    		f: 2.84,
    		l: "先着"
    	},
    	{
    		r: 12908,
    		f: 2.84,
    		l: "れい"
    	},
    	{
    		r: 12909,
    		f: 2.84,
    		l: "親密"
    	},
    	{
    		r: 12910,
    		f: 2.84,
    		l: "初歩"
    	},
    	{
    		r: 12911,
    		f: 2.84,
    		l: "エレクトロニクス"
    	},
    	{
    		r: 12912,
    		f: 2.84,
    		l: "忠誠"
    	},
    	{
    		r: 12913,
    		f: 2.84,
    		l: "たれ"
    	},
    	{
    		r: 12914,
    		f: 2.84,
    		l: "貴い"
    	},
    	{
    		r: 12915,
    		f: 2.83,
    		l: "粘土"
    	},
    	{
    		r: 12916,
    		f: 2.83,
    		l: "ゴロゴロ"
    	},
    	{
    		r: 12917,
    		f: 2.83,
    		l: "予告編"
    	},
    	{
    		r: 12918,
    		f: 2.83,
    		l: "織田"
    	},
    	{
    		r: 12919,
    		f: 2.83,
    		l: "略称"
    	},
    	{
    		r: 12920,
    		f: 2.83,
    		l: "酔い"
    	},
    	{
    		r: 12921,
    		f: 2.83,
    		l: "エンターテインメント"
    	},
    	{
    		r: 12922,
    		f: 2.83,
    		l: "有給"
    	},
    	{
    		r: 12923,
    		f: 2.83,
    		l: "取締"
    	},
    	{
    		r: 12924,
    		f: 2.83,
    		l: "同市"
    	},
    	{
    		r: 12925,
    		f: 2.83,
    		l: "重度"
    	},
    	{
    		r: 12926,
    		f: 2.83,
    		l: "先々"
    	},
    	{
    		r: 12927,
    		f: 2.83,
    		l: "物色"
    	},
    	{
    		r: 12928,
    		f: 2.83,
    		l: "ソロモン"
    	},
    	{
    		r: 12929,
    		f: 2.83,
    		l: "街角"
    	},
    	{
    		r: 12930,
    		f: 2.83,
    		l: "Ｊリーグ"
    	},
    	{
    		r: 12931,
    		f: 2.83,
    		l: "ガレージ"
    	},
    	{
    		r: 12932,
    		f: 2.83,
    		l: "久し振り"
    	},
    	{
    		r: 12933,
    		f: 2.83,
    		l: "おかあさん"
    	},
    	{
    		r: 12934,
    		f: 2.83,
    		l: "退く"
    	},
    	{
    		r: 12935,
    		f: 2.83,
    		l: "こんばんわ"
    	},
    	{
    		r: 12936,
    		f: 2.83,
    		l: "前もって"
    	},
    	{
    		r: 12937,
    		f: 2.83,
    		l: "売り出す"
    	},
    	{
    		r: 12938,
    		f: 2.83,
    		l: "樽"
    	},
    	{
    		r: 12939,
    		f: 2.83,
    		l: "エリザベス"
    	},
    	{
    		r: 12940,
    		f: 2.83,
    		l: "果たせる"
    	},
    	{
    		r: 12941,
    		f: 2.83,
    		l: "ｘ"
    	},
    	{
    		r: 12942,
    		f: 2.83,
    		l: "男優"
    	},
    	{
    		r: 12943,
    		f: 2.83,
    		l: "暴く"
    	},
    	{
    		r: 12944,
    		f: 2.83,
    		l: "不特定"
    	},
    	{
    		r: 12945,
    		f: 2.83,
    		l: "数式"
    	},
    	{
    		r: 12946,
    		f: 2.83,
    		l: "待ち時間"
    	},
    	{
    		r: 12947,
    		f: 2.83,
    		l: "露呈"
    	},
    	{
    		r: 12948,
    		f: 2.83,
    		l: "ハイビジョン"
    	},
    	{
    		r: 12949,
    		f: 2.83,
    		l: "シリアル"
    	},
    	{
    		r: 12950,
    		f: 2.83,
    		l: "インテリ"
    	},
    	{
    		r: 12951,
    		f: 2.83,
    		l: "蜂"
    	},
    	{
    		r: 12952,
    		f: 2.83,
    		l: "ブレンド"
    	},
    	{
    		r: 12953,
    		f: 2.82,
    		l: "町並み"
    	},
    	{
    		r: 12954,
    		f: 2.82,
    		l: "一途"
    	},
    	{
    		r: 12955,
    		f: 2.82,
    		l: "雑学"
    	},
    	{
    		r: 12956,
    		f: 2.82,
    		l: "にらむ"
    	},
    	{
    		r: 12957,
    		f: 2.82,
    		l: "血糖"
    	},
    	{
    		r: 12958,
    		f: 2.82,
    		l: "突きつける"
    	},
    	{
    		r: 12959,
    		f: 2.82,
    		l: "クジラ"
    	},
    	{
    		r: 12960,
    		f: 2.82,
    		l: "隣る"
    	},
    	{
    		r: 12961,
    		f: 2.82,
    		l: "阻む"
    	},
    	{
    		r: 12962,
    		f: 2.82,
    		l: "総体"
    	},
    	{
    		r: 12963,
    		f: 2.82,
    		l: "叔父"
    	},
    	{
    		r: 12964,
    		f: 2.82,
    		l: "支社"
    	},
    	{
    		r: 12965,
    		f: 2.82,
    		l: "押し込む"
    	},
    	{
    		r: 12966,
    		f: 2.82,
    		l: "伏せる"
    	},
    	{
    		r: 12967,
    		f: 2.82,
    		l: "ミスター"
    	},
    	{
    		r: 12968,
    		f: 2.82,
    		l: "近日"
    	},
    	{
    		r: 12969,
    		f: 2.82,
    		l: "キッ"
    	},
    	{
    		r: 12970,
    		f: 2.82,
    		l: "多め"
    	},
    	{
    		r: 12971,
    		f: 2.82,
    		l: "編著"
    	},
    	{
    		r: 12972,
    		f: 2.82,
    		l: "安部"
    	},
    	{
    		r: 12973,
    		f: 2.82,
    		l: "苦難"
    	},
    	{
    		r: 12974,
    		f: 2.82,
    		l: "オールド"
    	},
    	{
    		r: 12975,
    		f: 2.82,
    		l: "体格"
    	},
    	{
    		r: 12976,
    		f: 2.82,
    		l: "不全"
    	},
    	{
    		r: 12977,
    		f: 2.82,
    		l: "侵す"
    	},
    	{
    		r: 12978,
    		f: 2.82,
    		l: "護衛"
    	},
    	{
    		r: 12979,
    		f: 2.82,
    		l: "モノクロ"
    	},
    	{
    		r: 12980,
    		f: 2.82,
    		l: "略す"
    	},
    	{
    		r: 12981,
    		f: 2.81,
    		l: "野心"
    	},
    	{
    		r: 12982,
    		f: 2.81,
    		l: "お好み焼き"
    	},
    	{
    		r: 12983,
    		f: 2.81,
    		l: "サク"
    	},
    	{
    		r: 12984,
    		f: 2.81,
    		l: "否決"
    	},
    	{
    		r: 12985,
    		f: 2.81,
    		l: "愛想"
    	},
    	{
    		r: 12986,
    		f: 2.81,
    		l: "意気込み"
    	},
    	{
    		r: 12987,
    		f: 2.81,
    		l: "損ねる"
    	},
    	{
    		r: 12988,
    		f: 2.81,
    		l: "おっぱい"
    	},
    	{
    		r: 12989,
    		f: 2.81,
    		l: "オペレーティングシステム"
    	},
    	{
    		r: 12990,
    		f: 2.81,
    		l: "栄える"
    	},
    	{
    		r: 12991,
    		f: 2.81,
    		l: "贈与"
    	},
    	{
    		r: 12992,
    		f: 2.81,
    		l: "諸々"
    	},
    	{
    		r: 12993,
    		f: 2.81,
    		l: "出馬"
    	},
    	{
    		r: 12994,
    		f: 2.81,
    		l: "借入金"
    	},
    	{
    		r: 12995,
    		f: 2.81,
    		l: "プラズマ"
    	},
    	{
    		r: 12996,
    		f: 2.81,
    		l: "光栄"
    	},
    	{
    		r: 12997,
    		f: 2.81,
    		l: "兵衛"
    	},
    	{
    		r: 12998,
    		f: 2.81,
    		l: "ソビエト"
    	},
    	{
    		r: 12999,
    		f: 2.81,
    		l: "シャトル"
    	},
    	{
    		r: 13000,
    		f: 2.81,
    		l: "こぼれる"
    	},
    	{
    		r: 13001,
    		f: 2.81,
    		l: "矢印"
    	},
    	{
    		r: 13002,
    		f: 2.81,
    		l: "つれる"
    	},
    	{
    		r: 13003,
    		f: 2.81,
    		l: "生々しい"
    	},
    	{
    		r: 13004,
    		f: 2.81,
    		l: "停る"
    	},
    	{
    		r: 13005,
    		f: 2.81,
    		l: "取り締まる"
    	},
    	{
    		r: 13006,
    		f: 2.81,
    		l: "孔"
    	},
    	{
    		r: 13007,
    		f: 2.81,
    		l: "探し出す"
    	},
    	{
    		r: 13008,
    		f: 2.81,
    		l: "売り物"
    	},
    	{
    		r: 13009,
    		f: 2.81,
    		l: "エコノミー"
    	},
    	{
    		r: 13010,
    		f: 2.81,
    		l: "シーク"
    	},
    	{
    		r: 13011,
    		f: 2.81,
    		l: "貸与"
    	},
    	{
    		r: 13012,
    		f: 2.81,
    		l: "転移"
    	},
    	{
    		r: 13013,
    		f: 2.81,
    		l: "悪循環"
    	},
    	{
    		r: 13014,
    		f: 2.81,
    		l: "打者"
    	},
    	{
    		r: 13015,
    		f: 2.81,
    		l: "少額"
    	},
    	{
    		r: 13016,
    		f: 2.81,
    		l: "大西"
    	},
    	{
    		r: 13017,
    		f: 2.81,
    		l: "スリップ"
    	},
    	{
    		r: 13018,
    		f: 2.81,
    		l: "モットー"
    	},
    	{
    		r: 13019,
    		f: 2.81,
    		l: "食える"
    	},
    	{
    		r: 13020,
    		f: 2.81,
    		l: "ウエア"
    	},
    	{
    		r: 13021,
    		f: 2.81,
    		l: "前例"
    	},
    	{
    		r: 13022,
    		f: 2.81,
    		l: "エンジニアリング"
    	},
    	{
    		r: 13023,
    		f: 2.81,
    		l: "小平"
    	},
    	{
    		r: 13024,
    		f: 2.81,
    		l: "モモ"
    	},
    	{
    		r: 13025,
    		f: 2.8,
    		l: "ケニア"
    	},
    	{
    		r: 13026,
    		f: 2.8,
    		l: "最長"
    	},
    	{
    		r: 13027,
    		f: 2.8,
    		l: "司馬"
    	},
    	{
    		r: 13028,
    		f: 2.8,
    		l: "受理"
    	},
    	{
    		r: 13029,
    		f: 2.8,
    		l: "混沌"
    	},
    	{
    		r: 13030,
    		f: 2.8,
    		l: "きたる"
    	},
    	{
    		r: 13031,
    		f: 2.8,
    		l: "ぶらぶら"
    	},
    	{
    		r: 13032,
    		f: 2.8,
    		l: "お方"
    	},
    	{
    		r: 13033,
    		f: 2.8,
    		l: "もって"
    	},
    	{
    		r: 13034,
    		f: 2.8,
    		l: "結核"
    	},
    	{
    		r: 13035,
    		f: 2.8,
    		l: "短歌"
    	},
    	{
    		r: 13036,
    		f: 2.8,
    		l: "発光"
    	},
    	{
    		r: 13037,
    		f: 2.8,
    		l: "彩る"
    	},
    	{
    		r: 13038,
    		f: 2.8,
    		l: "綱"
    	},
    	{
    		r: 13039,
    		f: 2.8,
    		l: "微"
    	},
    	{
    		r: 13040,
    		f: 2.8,
    		l: "くし"
    	},
    	{
    		r: 13041,
    		f: 2.8,
    		l: "スパイク"
    	},
    	{
    		r: 13042,
    		f: 2.8,
    		l: "音程"
    	},
    	{
    		r: 13043,
    		f: 2.79,
    		l: "助け合う"
    	},
    	{
    		r: 13044,
    		f: 2.79,
    		l: "ずれ"
    	},
    	{
    		r: 13045,
    		f: 2.79,
    		l: "陶器"
    	},
    	{
    		r: 13046,
    		f: 2.79,
    		l: "AU"
    	},
    	{
    		r: 13047,
    		f: 2.79,
    		l: "賄う"
    	},
    	{
    		r: 13048,
    		f: 2.79,
    		l: "多量"
    	},
    	{
    		r: 13049,
    		f: 2.79,
    		l: "ＰＰ"
    	},
    	{
    		r: 13050,
    		f: 2.79,
    		l: "ニックネーム"
    	},
    	{
    		r: 13051,
    		f: 2.79,
    		l: "抗生"
    	},
    	{
    		r: 13052,
    		f: 2.79,
    		l: "露骨"
    	},
    	{
    		r: 13053,
    		f: 2.79,
    		l: "欠落"
    	},
    	{
    		r: 13054,
    		f: 2.79,
    		l: "濫用"
    	},
    	{
    		r: 13055,
    		f: 2.79,
    		l: "配属"
    	},
    	{
    		r: 13056,
    		f: 2.79,
    		l: "精子"
    	},
    	{
    		r: 13057,
    		f: 2.79,
    		l: "柿"
    	},
    	{
    		r: 13058,
    		f: 2.79,
    		l: "イコール"
    	},
    	{
    		r: 13059,
    		f: 2.79,
    		l: "しつける"
    	},
    	{
    		r: 13060,
    		f: 2.79,
    		l: "緊迫"
    	},
    	{
    		r: 13061,
    		f: 2.79,
    		l: "元祖"
    	},
    	{
    		r: 13062,
    		f: 2.79,
    		l: "ブルジョアジー"
    	},
    	{
    		r: 13063,
    		f: 2.79,
    		l: "形容詞"
    	},
    	{
    		r: 13064,
    		f: 2.79,
    		l: "天文学"
    	},
    	{
    		r: 13065,
    		f: 2.79,
    		l: "誘発"
    	},
    	{
    		r: 13066,
    		f: 2.79,
    		l: "一元化"
    	},
    	{
    		r: 13067,
    		f: 2.79,
    		l: "フラメンコ"
    	},
    	{
    		r: 13068,
    		f: 2.79,
    		l: "バケツ"
    	},
    	{
    		r: 13069,
    		f: 2.79,
    		l: "在留"
    	},
    	{
    		r: 13070,
    		f: 2.78,
    		l: "置き場"
    	},
    	{
    		r: 13071,
    		f: 2.78,
    		l: "号機"
    	},
    	{
    		r: 13072,
    		f: 2.78,
    		l: "同席"
    	},
    	{
    		r: 13073,
    		f: 2.78,
    		l: "王妃"
    	},
    	{
    		r: 13074,
    		f: 2.78,
    		l: "秦"
    	},
    	{
    		r: 13075,
    		f: 2.78,
    		l: "すます"
    	},
    	{
    		r: 13076,
    		f: 2.78,
    		l: "ツキ"
    	},
    	{
    		r: 13077,
    		f: 2.78,
    		l: "容姿"
    	},
    	{
    		r: 13078,
    		f: 2.78,
    		l: "音符"
    	},
    	{
    		r: 13079,
    		f: 2.78,
    		l: "問屋"
    	},
    	{
    		r: 13080,
    		f: 2.78,
    		l: "アミノ酸"
    	},
    	{
    		r: 13081,
    		f: 2.78,
    		l: "下町"
    	},
    	{
    		r: 13082,
    		f: 2.78,
    		l: "あおる"
    	},
    	{
    		r: 13083,
    		f: 2.78,
    		l: "累計"
    	},
    	{
    		r: 13084,
    		f: 2.78,
    		l: "タケ"
    	},
    	{
    		r: 13085,
    		f: 2.78,
    		l: "輝"
    	},
    	{
    		r: 13086,
    		f: 2.78,
    		l: "すかさず"
    	},
    	{
    		r: 13087,
    		f: 2.78,
    		l: "碑"
    	},
    	{
    		r: 13088,
    		f: 2.78,
    		l: "望める"
    	},
    	{
    		r: 13089,
    		f: 2.78,
    		l: "かわいらしい"
    	},
    	{
    		r: 13090,
    		f: 2.78,
    		l: "ディスカウント"
    	},
    	{
    		r: 13091,
    		f: 2.77,
    		l: "中庭"
    	},
    	{
    		r: 13092,
    		f: 2.77,
    		l: "おぉ"
    	},
    	{
    		r: 13093,
    		f: 2.77,
    		l: "ｍｍ"
    	},
    	{
    		r: 13094,
    		f: 2.77,
    		l: "バッチリ"
    	},
    	{
    		r: 13095,
    		f: 2.77,
    		l: "フレッシュ"
    	},
    	{
    		r: 13096,
    		f: 2.77,
    		l: "ノンフィクション"
    	},
    	{
    		r: 13097,
    		f: 2.77,
    		l: "思い知らす"
    	},
    	{
    		r: 13098,
    		f: 2.77,
    		l: "領収"
    	},
    	{
    		r: 13099,
    		f: 2.77,
    		l: "昼過ぎ"
    	},
    	{
    		r: 13100,
    		f: 2.77,
    		l: "昆布"
    	},
    	{
    		r: 13101,
    		f: 2.77,
    		l: "ラケット"
    	},
    	{
    		r: 13102,
    		f: 2.77,
    		l: "立川"
    	},
    	{
    		r: 13103,
    		f: 2.77,
    		l: "希少"
    	},
    	{
    		r: 13104,
    		f: 2.77,
    		l: "ヒップ"
    	},
    	{
    		r: 13105,
    		f: 2.77,
    		l: "フジモリ"
    	},
    	{
    		r: 13106,
    		f: 2.77,
    		l: "大前提"
    	},
    	{
    		r: 13107,
    		f: 2.77,
    		l: "レクチャー"
    	},
    	{
    		r: 13108,
    		f: 2.77,
    		l: "小売り"
    	},
    	{
    		r: 13109,
    		f: 2.77,
    		l: "勝る"
    	},
    	{
    		r: 13110,
    		f: 2.77,
    		l: "飴"
    	},
    	{
    		r: 13111,
    		f: 2.77,
    		l: "かさ"
    	},
    	{
    		r: 13112,
    		f: 2.77,
    		l: "放課後"
    	},
    	{
    		r: 13113,
    		f: 2.77,
    		l: "修繕"
    	},
    	{
    		r: 13114,
    		f: 2.77,
    		l: "合える"
    	},
    	{
    		r: 13115,
    		f: 2.77,
    		l: "庁舎"
    	},
    	{
    		r: 13116,
    		f: 2.77,
    		l: "受け"
    	},
    	{
    		r: 13117,
    		f: 2.77,
    		l: "お過ごし"
    	},
    	{
    		r: 13118,
    		f: 2.77,
    		l: "おじ"
    	},
    	{
    		r: 13119,
    		f: 2.77,
    		l: "びん"
    	},
    	{
    		r: 13120,
    		f: 2.77,
    		l: "シル"
    	},
    	{
    		r: 13121,
    		f: 2.77,
    		l: "杉浦"
    	},
    	{
    		r: 13122,
    		f: 2.77,
    		l: "たべる"
    	},
    	{
    		r: 13123,
    		f: 2.77,
    		l: "卿"
    	},
    	{
    		r: 13124,
    		f: 2.77,
    		l: "盆"
    	},
    	{
    		r: 13125,
    		f: 2.77,
    		l: "似顔絵"
    	},
    	{
    		r: 13126,
    		f: 2.77,
    		l: "証書"
    	},
    	{
    		r: 13127,
    		f: 2.77,
    		l: "シミ"
    	},
    	{
    		r: 13128,
    		f: 2.77,
    		l: "おでん"
    	},
    	{
    		r: 13129,
    		f: 2.76,
    		l: "穂"
    	},
    	{
    		r: 13130,
    		f: 2.76,
    		l: "再婚"
    	},
    	{
    		r: 13131,
    		f: 2.76,
    		l: "ハングル"
    	},
    	{
    		r: 13132,
    		f: 2.76,
    		l: "はり"
    	},
    	{
    		r: 13133,
    		f: 2.76,
    		l: "病む"
    	},
    	{
    		r: 13134,
    		f: 2.76,
    		l: "不意"
    	},
    	{
    		r: 13135,
    		f: 2.76,
    		l: "谷川"
    	},
    	{
    		r: 13136,
    		f: 2.76,
    		l: "花びら"
    	},
    	{
    		r: 13137,
    		f: 2.76,
    		l: "乗っ取る"
    	},
    	{
    		r: 13138,
    		f: 2.76,
    		l: "左足"
    	},
    	{
    		r: 13139,
    		f: 2.76,
    		l: "首位"
    	},
    	{
    		r: 13140,
    		f: 2.76,
    		l: "東急"
    	},
    	{
    		r: 13141,
    		f: 2.76,
    		l: "割安"
    	},
    	{
    		r: 13142,
    		f: 2.76,
    		l: "落とし穴"
    	},
    	{
    		r: 13143,
    		f: 2.76,
    		l: "憶測"
    	},
    	{
    		r: 13144,
    		f: 2.76,
    		l: "小坂"
    	},
    	{
    		r: 13145,
    		f: 2.76,
    		l: "ノーマン"
    	},
    	{
    		r: 13146,
    		f: 2.76,
    		l: "敬遠"
    	},
    	{
    		r: 13147,
    		f: 2.76,
    		l: "うかがえる"
    	},
    	{
    		r: 13148,
    		f: 2.76,
    		l: "あてはまる"
    	},
    	{
    		r: 13149,
    		f: 2.75,
    		l: "管弦楽"
    	},
    	{
    		r: 13150,
    		f: 2.75,
    		l: "グレン"
    	},
    	{
    		r: 13151,
    		f: 2.75,
    		l: "空調"
    	},
    	{
    		r: 13152,
    		f: 2.75,
    		l: "追いやる"
    	},
    	{
    		r: 13153,
    		f: 2.75,
    		l: "晴天"
    	},
    	{
    		r: 13154,
    		f: 2.75,
    		l: "受動"
    	},
    	{
    		r: 13155,
    		f: 2.75,
    		l: "障る"
    	},
    	{
    		r: 13156,
    		f: 2.75,
    		l: "画素"
    	},
    	{
    		r: 13157,
    		f: 2.75,
    		l: "あからさま"
    	},
    	{
    		r: 13158,
    		f: 2.75,
    		l: "怠慢"
    	},
    	{
    		r: 13159,
    		f: 2.75,
    		l: "Ｑ＆Ａ"
    	},
    	{
    		r: 13160,
    		f: 2.75,
    		l: "積立"
    	},
    	{
    		r: 13161,
    		f: 2.75,
    		l: "通れる"
    	},
    	{
    		r: 13162,
    		f: 2.75,
    		l: "サンダル"
    	},
    	{
    		r: 13163,
    		f: 2.75,
    		l: "否認"
    	},
    	{
    		r: 13164,
    		f: 2.75,
    		l: "召す"
    	},
    	{
    		r: 13165,
    		f: 2.75,
    		l: "ヘルメット"
    	},
    	{
    		r: 13166,
    		f: 2.75,
    		l: "平方メートル"
    	},
    	{
    		r: 13167,
    		f: 2.75,
    		l: "衣料"
    	},
    	{
    		r: 13168,
    		f: 2.75,
    		l: "バスケット"
    	},
    	{
    		r: 13169,
    		f: 2.75,
    		l: "飲み屋"
    	},
    	{
    		r: 13170,
    		f: 2.75,
    		l: "言明"
    	},
    	{
    		r: 13171,
    		f: 2.75,
    		l: "共用"
    	},
    	{
    		r: 13172,
    		f: 2.75,
    		l: "自伝"
    	},
    	{
    		r: 13173,
    		f: 2.75,
    		l: "勝訴"
    	},
    	{
    		r: 13174,
    		f: 2.75,
    		l: "翻弄"
    	},
    	{
    		r: 13175,
    		f: 2.75,
    		l: "荒"
    	},
    	{
    		r: 13176,
    		f: 2.75,
    		l: "ギタリスト"
    	},
    	{
    		r: 13177,
    		f: 2.75,
    		l: "取り付け"
    	},
    	{
    		r: 13178,
    		f: 2.75,
    		l: "デッド"
    	},
    	{
    		r: 13179,
    		f: 2.75,
    		l: "神宮"
    	},
    	{
    		r: 13180,
    		f: 2.75,
    		l: "尻尾"
    	},
    	{
    		r: 13181,
    		f: 2.75,
    		l: "タイガー"
    	},
    	{
    		r: 13182,
    		f: 2.75,
    		l: "にし"
    	},
    	{
    		r: 13183,
    		f: 2.74,
    		l: "流域"
    	},
    	{
    		r: 13184,
    		f: 2.74,
    		l: "ホース"
    	},
    	{
    		r: 13185,
    		f: 2.74,
    		l: "大綱"
    	},
    	{
    		r: 13186,
    		f: 2.74,
    		l: "部類"
    	},
    	{
    		r: 13187,
    		f: 2.74,
    		l: "解任"
    	},
    	{
    		r: 13188,
    		f: 2.74,
    		l: "カルシウム"
    	},
    	{
    		r: 13189,
    		f: 2.74,
    		l: "虚構"
    	},
    	{
    		r: 13190,
    		f: 2.74,
    		l: "権益"
    	},
    	{
    		r: 13191,
    		f: 2.74,
    		l: "反則"
    	},
    	{
    		r: 13192,
    		f: 2.74,
    		l: "フタ"
    	},
    	{
    		r: 13193,
    		f: 2.74,
    		l: "お宝"
    	},
    	{
    		r: 13194,
    		f: 2.74,
    		l: "おりる"
    	},
    	{
    		r: 13195,
    		f: 2.74,
    		l: "黙々と"
    	},
    	{
    		r: 13196,
    		f: 2.74,
    		l: "同胞"
    	},
    	{
    		r: 13197,
    		f: 2.74,
    		l: "行き届く"
    	},
    	{
    		r: 13198,
    		f: 2.74,
    		l: "寒"
    	},
    	{
    		r: 13199,
    		f: 2.74,
    		l: "短所"
    	},
    	{
    		r: 13200,
    		f: 2.74,
    		l: "リアクション"
    	},
    	{
    		r: 13201,
    		f: 2.74,
    		l: "卒論"
    	},
    	{
    		r: 13202,
    		f: 2.74,
    		l: "養殖"
    	},
    	{
    		r: 13203,
    		f: 2.74,
    		l: "戯言"
    	},
    	{
    		r: 13204,
    		f: 2.74,
    		l: "医薬"
    	},
    	{
    		r: 13205,
    		f: 2.74,
    		l: "石垣"
    	},
    	{
    		r: 13206,
    		f: 2.74,
    		l: "言わば"
    	},
    	{
    		r: 13207,
    		f: 2.74,
    		l: "ポップス"
    	},
    	{
    		r: 13208,
    		f: 2.73,
    		l: "占"
    	},
    	{
    		r: 13209,
    		f: 2.73,
    		l: "府県"
    	},
    	{
    		r: 13210,
    		f: 2.73,
    		l: "でく"
    	},
    	{
    		r: 13211,
    		f: 2.73,
    		l: "個展"
    	},
    	{
    		r: 13212,
    		f: 2.73,
    		l: "神経質"
    	},
    	{
    		r: 13213,
    		f: 2.73,
    		l: "レジュメ"
    	},
    	{
    		r: 13214,
    		f: 2.73,
    		l: "筒"
    	},
    	{
    		r: 13215,
    		f: 2.73,
    		l: "照射"
    	},
    	{
    		r: 13216,
    		f: 2.73,
    		l: "給油"
    	},
    	{
    		r: 13217,
    		f: 2.73,
    		l: "まだしも"
    	},
    	{
    		r: 13218,
    		f: 2.73,
    		l: "コウ"
    	},
    	{
    		r: 13219,
    		f: 2.73,
    		l: "買い上げ"
    	},
    	{
    		r: 13220,
    		f: 2.73,
    		l: "変質"
    	},
    	{
    		r: 13221,
    		f: 2.73,
    		l: "すみやか"
    	},
    	{
    		r: 13222,
    		f: 2.73,
    		l: "同和"
    	},
    	{
    		r: 13223,
    		f: 2.73,
    		l: "配合"
    	},
    	{
    		r: 13224,
    		f: 2.73,
    		l: "時として"
    	},
    	{
    		r: 13225,
    		f: 2.73,
    		l: "社民党"
    	},
    	{
    		r: 13226,
    		f: 2.73,
    		l: "厨房"
    	},
    	{
    		r: 13227,
    		f: 2.73,
    		l: "適性"
    	},
    	{
    		r: 13228,
    		f: 2.73,
    		l: "注釈"
    	},
    	{
    		r: 13229,
    		f: 2.73,
    		l: "山々"
    	},
    	{
    		r: 13230,
    		f: 2.73,
    		l: "吐き気"
    	},
    	{
    		r: 13231,
    		f: 2.73,
    		l: "明治維新"
    	},
    	{
    		r: 13232,
    		f: 2.73,
    		l: "右足"
    	},
    	{
    		r: 13233,
    		f: 2.73,
    		l: "ピエール"
    	},
    	{
    		r: 13234,
    		f: 2.73,
    		l: "大木"
    	},
    	{
    		r: 13235,
    		f: 2.73,
    		l: "省令"
    	},
    	{
    		r: 13236,
    		f: 2.73,
    		l: "動脈"
    	},
    	{
    		r: 13237,
    		f: 2.73,
    		l: "にぎやか"
    	},
    	{
    		r: 13238,
    		f: 2.73,
    		l: "トレーディング"
    	},
    	{
    		r: 13239,
    		f: 2.73,
    		l: "垂れる"
    	},
    	{
    		r: 13240,
    		f: 2.73,
    		l: "とうてい"
    	},
    	{
    		r: 13241,
    		f: 2.73,
    		l: "輪郭"
    	},
    	{
    		r: 13242,
    		f: 2.73,
    		l: "ハワード"
    	},
    	{
    		r: 13243,
    		f: 2.73,
    		l: "両替"
    	},
    	{
    		r: 13244,
    		f: 2.73,
    		l: "しかるべき"
    	},
    	{
    		r: 13245,
    		f: 2.73,
    		l: "蓄える"
    	},
    	{
    		r: 13246,
    		f: 2.72,
    		l: "陵"
    	},
    	{
    		r: 13247,
    		f: 2.72,
    		l: "撲滅"
    	},
    	{
    		r: 13248,
    		f: 2.72,
    		l: "マオリ"
    	},
    	{
    		r: 13249,
    		f: 2.72,
    		l: "なつ"
    	},
    	{
    		r: 13250,
    		f: 2.72,
    		l: "偵察"
    	},
    	{
    		r: 13251,
    		f: 2.72,
    		l: "完売"
    	},
    	{
    		r: 13252,
    		f: 2.72,
    		l: "伯"
    	},
    	{
    		r: 13253,
    		f: 2.72,
    		l: "ブロー"
    	},
    	{
    		r: 13254,
    		f: 2.72,
    		l: "のら"
    	},
    	{
    		r: 13255,
    		f: 2.72,
    		l: "譲歩"
    	},
    	{
    		r: 13256,
    		f: 2.72,
    		l: "有り得る"
    	},
    	{
    		r: 13257,
    		f: 2.72,
    		l: "健二"
    	},
    	{
    		r: 13258,
    		f: 2.72,
    		l: "アントニオ"
    	},
    	{
    		r: 13259,
    		f: 2.72,
    		l: "かけがえ"
    	},
    	{
    		r: 13260,
    		f: 2.72,
    		l: "稔"
    	},
    	{
    		r: 13261,
    		f: 2.72,
    		l: "こんにちわ"
    	},
    	{
    		r: 13262,
    		f: 2.72,
    		l: "崇高"
    	},
    	{
    		r: 13263,
    		f: 2.72,
    		l: "手形"
    	},
    	{
    		r: 13264,
    		f: 2.72,
    		l: "大王"
    	},
    	{
    		r: 13265,
    		f: 2.72,
    		l: "思い通り"
    	},
    	{
    		r: 13266,
    		f: 2.72,
    		l: "地質"
    	},
    	{
    		r: 13267,
    		f: 2.72,
    		l: "日本食"
    	},
    	{
    		r: 13268,
    		f: 2.72,
    		l: "ぐる"
    	},
    	{
    		r: 13269,
    		f: 2.72,
    		l: "ボディー"
    	},
    	{
    		r: 13270,
    		f: 2.72,
    		l: "ルビー"
    	},
    	{
    		r: 13271,
    		f: 2.72,
    		l: "アタマ"
    	},
    	{
    		r: 13272,
    		f: 2.72,
    		l: "深層"
    	},
    	{
    		r: 13273,
    		f: 2.71,
    		l: "定理"
    	},
    	{
    		r: 13274,
    		f: 2.71,
    		l: "ファクト"
    	},
    	{
    		r: 13275,
    		f: 2.71,
    		l: "押収"
    	},
    	{
    		r: 13276,
    		f: 2.71,
    		l: "境地"
    	},
    	{
    		r: 13277,
    		f: 2.71,
    		l: "仏壇"
    	},
    	{
    		r: 13278,
    		f: 2.71,
    		l: "材質"
    	},
    	{
    		r: 13279,
    		f: 2.71,
    		l: "あっという間"
    	},
    	{
    		r: 13280,
    		f: 2.71,
    		l: "越"
    	},
    	{
    		r: 13281,
    		f: 2.71,
    		l: "先人"
    	},
    	{
    		r: 13282,
    		f: 2.71,
    		l: "不合理"
    	},
    	{
    		r: 13283,
    		f: 2.71,
    		l: "凝らす"
    	},
    	{
    		r: 13284,
    		f: 2.71,
    		l: "紗子"
    	},
    	{
    		r: 13285,
    		f: 2.71,
    		l: "定款"
    	},
    	{
    		r: 13286,
    		f: 2.71,
    		l: "一発"
    	},
    	{
    		r: 13287,
    		f: 2.71,
    		l: "射程"
    	},
    	{
    		r: 13288,
    		f: 2.71,
    		l: "ピル"
    	},
    	{
    		r: 13289,
    		f: 2.71,
    		l: "再販"
    	},
    	{
    		r: 13290,
    		f: 2.71,
    		l: "緒"
    	},
    	{
    		r: 13291,
    		f: 2.71,
    		l: "ショパン"
    	},
    	{
    		r: 13292,
    		f: 2.71,
    		l: "所沢"
    	},
    	{
    		r: 13293,
    		f: 2.71,
    		l: "不問"
    	},
    	{
    		r: 13294,
    		f: 2.71,
    		l: "クローズアップ"
    	},
    	{
    		r: 13295,
    		f: 2.71,
    		l: "特許庁"
    	},
    	{
    		r: 13296,
    		f: 2.71,
    		l: "ワザ"
    	},
    	{
    		r: 13297,
    		f: 2.71,
    		l: "溶かす"
    	},
    	{
    		r: 13298,
    		f: 2.71,
    		l: "多角"
    	},
    	{
    		r: 13299,
    		f: 2.71,
    		l: "事物"
    	},
    	{
    		r: 13300,
    		f: 2.71,
    		l: "軍国"
    	},
    	{
    		r: 13301,
    		f: 2.71,
    		l: "シェル"
    	},
    	{
    		r: 13302,
    		f: 2.71,
    		l: "スタンプ"
    	},
    	{
    		r: 13303,
    		f: 2.71,
    		l: "異変"
    	},
    	{
    		r: 13304,
    		f: 2.71,
    		l: "安堵"
    	},
    	{
    		r: 13305,
    		f: 2.71,
    		l: "バリー"
    	},
    	{
    		r: 13306,
    		f: 2.71,
    		l: "静寂"
    	},
    	{
    		r: 13307,
    		f: 2.71,
    		l: "閉塞"
    	},
    	{
    		r: 13308,
    		f: 2.71,
    		l: "随所"
    	},
    	{
    		r: 13309,
    		f: 2.7,
    		l: "オーロラ"
    	},
    	{
    		r: 13310,
    		f: 2.7,
    		l: "集い"
    	},
    	{
    		r: 13311,
    		f: 2.7,
    		l: "ヘッドホン"
    	},
    	{
    		r: 13312,
    		f: 2.7,
    		l: "かま"
    	},
    	{
    		r: 13313,
    		f: 2.7,
    		l: "かならず"
    	},
    	{
    		r: 13314,
    		f: 2.7,
    		l: "払える"
    	},
    	{
    		r: 13315,
    		f: 2.7,
    		l: "無駄遣い"
    	},
    	{
    		r: 13316,
    		f: 2.7,
    		l: "ばり"
    	},
    	{
    		r: 13317,
    		f: 2.7,
    		l: "巡礼"
    	},
    	{
    		r: 13318,
    		f: 2.7,
    		l: "真偽"
    	},
    	{
    		r: 13319,
    		f: 2.7,
    		l: "いちおう"
    	},
    	{
    		r: 13320,
    		f: 2.7,
    		l: "下方"
    	},
    	{
    		r: 13321,
    		f: 2.7,
    		l: "救世主"
    	},
    	{
    		r: 13322,
    		f: 2.7,
    		l: "サラ金"
    	},
    	{
    		r: 13323,
    		f: 2.7,
    		l: "実話"
    	},
    	{
    		r: 13324,
    		f: 2.7,
    		l: "取り消し"
    	},
    	{
    		r: 13325,
    		f: 2.7,
    		l: "みごと"
    	},
    	{
    		r: 13326,
    		f: 2.7,
    		l: "デリー"
    	},
    	{
    		r: 13327,
    		f: 2.7,
    		l: "特産"
    	},
    	{
    		r: 13328,
    		f: 2.7,
    		l: "おろか"
    	},
    	{
    		r: 13329,
    		f: 2.7,
    		l: "無邪気"
    	},
    	{
    		r: 13330,
    		f: 2.7,
    		l: "学説"
    	},
    	{
    		r: 13331,
    		f: 2.7,
    		l: "細分"
    	},
    	{
    		r: 13332,
    		f: 2.7,
    		l: "脳裏"
    	},
    	{
    		r: 13333,
    		f: 2.7,
    		l: "非行"
    	},
    	{
    		r: 13334,
    		f: 2.7,
    		l: "感知"
    	},
    	{
    		r: 13335,
    		f: 2.7,
    		l: "頑張れる"
    	},
    	{
    		r: 13336,
    		f: 2.7,
    		l: "人当たり"
    	},
    	{
    		r: 13337,
    		f: 2.7,
    		l: "増収"
    	},
    	{
    		r: 13338,
    		f: 2.7,
    		l: "和風"
    	},
    	{
    		r: 13339,
    		f: 2.7,
    		l: "休息"
    	},
    	{
    		r: 13340,
    		f: 2.69,
    		l: "学び"
    	},
    	{
    		r: 13341,
    		f: 2.69,
    		l: "やれやれ"
    	},
    	{
    		r: 13342,
    		f: 2.69,
    		l: "海苔"
    	},
    	{
    		r: 13343,
    		f: 2.69,
    		l: "別個"
    	},
    	{
    		r: 13344,
    		f: 2.69,
    		l: "メアリー"
    	},
    	{
    		r: 13345,
    		f: 2.69,
    		l: "聴こえる"
    	},
    	{
    		r: 13346,
    		f: 2.69,
    		l: "射殺"
    	},
    	{
    		r: 13347,
    		f: 2.69,
    		l: "後部"
    	},
    	{
    		r: 13348,
    		f: 2.69,
    		l: "文春"
    	},
    	{
    		r: 13349,
    		f: 2.69,
    		l: "点灯"
    	},
    	{
    		r: 13350,
    		f: 2.69,
    		l: "貧弱"
    	},
    	{
    		r: 13351,
    		f: 2.69,
    		l: "ヘビー"
    	},
    	{
    		r: 13352,
    		f: 2.69,
    		l: "脱力"
    	},
    	{
    		r: 13353,
    		f: 2.69,
    		l: "いも"
    	},
    	{
    		r: 13354,
    		f: 2.69,
    		l: "中南米"
    	},
    	{
    		r: 13355,
    		f: 2.69,
    		l: "さようなら"
    	},
    	{
    		r: 13356,
    		f: 2.69,
    		l: "浜田"
    	},
    	{
    		r: 13357,
    		f: 2.69,
    		l: "獣医"
    	},
    	{
    		r: 13358,
    		f: 2.69,
    		l: "オーブン"
    	},
    	{
    		r: 13359,
    		f: 2.69,
    		l: "ムッ"
    	},
    	{
    		r: 13360,
    		f: 2.69,
    		l: "年明け"
    	},
    	{
    		r: 13361,
    		f: 2.69,
    		l: "マーチ"
    	},
    	{
    		r: 13362,
    		f: 2.69,
    		l: "生態学"
    	},
    	{
    		r: 13363,
    		f: 2.69,
    		l: "岡野"
    	},
    	{
    		r: 13364,
    		f: 2.69,
    		l: "恐慌"
    	},
    	{
    		r: 13365,
    		f: 2.69,
    		l: "昔話"
    	},
    	{
    		r: 13366,
    		f: 2.69,
    		l: "ドック"
    	},
    	{
    		r: 13367,
    		f: 2.69,
    		l: "南方"
    	},
    	{
    		r: 13368,
    		f: 2.69,
    		l: "切り出す"
    	},
    	{
    		r: 13369,
    		f: 2.69,
    		l: "辛口"
    	},
    	{
    		r: 13370,
    		f: 2.69,
    		l: "ロット"
    	},
    	{
    		r: 13371,
    		f: 2.69,
    		l: "魔法使い"
    	},
    	{
    		r: 13372,
    		f: 2.69,
    		l: "勤勉"
    	},
    	{
    		r: 13373,
    		f: 2.69,
    		l: "σ"
    	},
    	{
    		r: 13374,
    		f: 2.68,
    		l: "きた"
    	},
    	{
    		r: 13375,
    		f: 2.68,
    		l: "獅子"
    	},
    	{
    		r: 13376,
    		f: 2.68,
    		l: "最短"
    	},
    	{
    		r: 13377,
    		f: 2.68,
    		l: "圧巻"
    	},
    	{
    		r: 13378,
    		f: 2.68,
    		l: "一様"
    	},
    	{
    		r: 13379,
    		f: 2.68,
    		l: "アース"
    	},
    	{
    		r: 13380,
    		f: 2.68,
    		l: "睡る"
    	},
    	{
    		r: 13381,
    		f: 2.68,
    		l: "宮廷"
    	},
    	{
    		r: 13382,
    		f: 2.68,
    		l: "括る"
    	},
    	{
    		r: 13383,
    		f: 2.68,
    		l: "波紋"
    	},
    	{
    		r: 13384,
    		f: 2.68,
    		l: "浸かる"
    	},
    	{
    		r: 13385,
    		f: 2.68,
    		l: "化合"
    	},
    	{
    		r: 13386,
    		f: 2.68,
    		l: "刃物"
    	},
    	{
    		r: 13387,
    		f: 2.68,
    		l: "あたえる"
    	},
    	{
    		r: 13388,
    		f: 2.68,
    		l: "慰謝"
    	},
    	{
    		r: 13389,
    		f: 2.68,
    		l: "人妻"
    	},
    	{
    		r: 13390,
    		f: 2.68,
    		l: "観劇"
    	},
    	{
    		r: 13391,
    		f: 2.68,
    		l: "戯曲"
    	},
    	{
    		r: 13392,
    		f: 2.68,
    		l: "攻防"
    	},
    	{
    		r: 13393,
    		f: 2.68,
    		l: "放す"
    	},
    	{
    		r: 13394,
    		f: 2.68,
    		l: "公民館"
    	},
    	{
    		r: 13395,
    		f: 2.68,
    		l: "パロディ"
    	},
    	{
    		r: 13396,
    		f: 2.68,
    		l: "改築"
    	},
    	{
    		r: 13397,
    		f: 2.68,
    		l: "んじゃ"
    	},
    	{
    		r: 13398,
    		f: 2.68,
    		l: "編曲"
    	},
    	{
    		r: 13399,
    		f: 2.68,
    		l: "矢先"
    	},
    	{
    		r: 13400,
    		f: 2.68,
    		l: "重んじる"
    	},
    	{
    		r: 13401,
    		f: 2.68,
    		l: "勃発"
    	},
    	{
    		r: 13402,
    		f: 2.68,
    		l: "創り出す"
    	},
    	{
    		r: 13403,
    		f: 2.68,
    		l: "拓"
    	},
    	{
    		r: 13404,
    		f: 2.68,
    		l: "緩い"
    	},
    	{
    		r: 13405,
    		f: 2.68,
    		l: "至"
    	},
    	{
    		r: 13406,
    		f: 2.67,
    		l: "連敗"
    	},
    	{
    		r: 13407,
    		f: 2.67,
    		l: "急落"
    	},
    	{
    		r: 13408,
    		f: 2.67,
    		l: "催し"
    	},
    	{
    		r: 13409,
    		f: 2.67,
    		l: "予見"
    	},
    	{
    		r: 13410,
    		f: 2.67,
    		l: "偏"
    	},
    	{
    		r: 13411,
    		f: 2.67,
    		l: "葬る"
    	},
    	{
    		r: 13412,
    		f: 2.67,
    		l: "プライス"
    	},
    	{
    		r: 13413,
    		f: 2.67,
    		l: "浴"
    	},
    	{
    		r: 13414,
    		f: 2.67,
    		l: "ナース"
    	},
    	{
    		r: 13415,
    		f: 2.67,
    		l: "栓"
    	},
    	{
    		r: 13416,
    		f: 2.67,
    		l: "柔らか"
    	},
    	{
    		r: 13417,
    		f: 2.67,
    		l: "晶"
    	},
    	{
    		r: 13418,
    		f: 2.67,
    		l: "道中"
    	},
    	{
    		r: 13419,
    		f: 2.67,
    		l: "支度"
    	},
    	{
    		r: 13420,
    		f: 2.67,
    		l: "乳幼児"
    	},
    	{
    		r: 13421,
    		f: 2.67,
    		l: "茎"
    	},
    	{
    		r: 13422,
    		f: 2.67,
    		l: "冬季"
    	},
    	{
    		r: 13423,
    		f: 2.67,
    		l: "世俗"
    	},
    	{
    		r: 13424,
    		f: 2.67,
    		l: "完備"
    	},
    	{
    		r: 13425,
    		f: 2.67,
    		l: "帰路"
    	},
    	{
    		r: 13426,
    		f: 2.67,
    		l: "営み"
    	},
    	{
    		r: 13427,
    		f: 2.67,
    		l: "村井"
    	},
    	{
    		r: 13428,
    		f: 2.67,
    		l: "仮設"
    	},
    	{
    		r: 13429,
    		f: 2.67,
    		l: "往々"
    	},
    	{
    		r: 13430,
    		f: 2.67,
    		l: "母校"
    	},
    	{
    		r: 13431,
    		f: 2.67,
    		l: "工具"
    	},
    	{
    		r: 13432,
    		f: 2.67,
    		l: "ろくに"
    	},
    	{
    		r: 13433,
    		f: 2.67,
    		l: "俊輔"
    	},
    	{
    		r: 13434,
    		f: 2.66,
    		l: "ニンニク"
    	},
    	{
    		r: 13435,
    		f: 2.66,
    		l: "悔やむ"
    	},
    	{
    		r: 13436,
    		f: 2.66,
    		l: "ならぶ"
    	},
    	{
    		r: 13437,
    		f: 2.66,
    		l: "カルテ"
    	},
    	{
    		r: 13438,
    		f: 2.66,
    		l: "マリン"
    	},
    	{
    		r: 13439,
    		f: 2.66,
    		l: "生誕"
    	},
    	{
    		r: 13440,
    		f: 2.66,
    		l: "働きかけ"
    	},
    	{
    		r: 13441,
    		f: 2.66,
    		l: "ブラシ"
    	},
    	{
    		r: 13442,
    		f: 2.66,
    		l: "苛立つ"
    	},
    	{
    		r: 13443,
    		f: 2.66,
    		l: "帆"
    	},
    	{
    		r: 13444,
    		f: 2.66,
    		l: "アリア"
    	},
    	{
    		r: 13445,
    		f: 2.66,
    		l: "告訴"
    	},
    	{
    		r: 13446,
    		f: 2.66,
    		l: "遥かに"
    	},
    	{
    		r: 13447,
    		f: 2.66,
    		l: "使い道"
    	},
    	{
    		r: 13448,
    		f: 2.66,
    		l: "護"
    	},
    	{
    		r: 13449,
    		f: 2.66,
    		l: "サウジアラビア"
    	},
    	{
    		r: 13450,
    		f: 2.66,
    		l: "早川"
    	},
    	{
    		r: 13451,
    		f: 2.66,
    		l: "振る舞う"
    	},
    	{
    		r: 13452,
    		f: 2.66,
    		l: "わい"
    	},
    	{
    		r: 13453,
    		f: 2.66,
    		l: "シロ"
    	},
    	{
    		r: 13454,
    		f: 2.66,
    		l: "フェミニズム"
    	},
    	{
    		r: 13455,
    		f: 2.66,
    		l: "守り"
    	},
    	{
    		r: 13456,
    		f: 2.66,
    		l: "緩む"
    	},
    	{
    		r: 13457,
    		f: 2.66,
    		l: "激動"
    	},
    	{
    		r: 13458,
    		f: 2.66,
    		l: "レッズ"
    	},
    	{
    		r: 13459,
    		f: 2.66,
    		l: "やらす"
    	},
    	{
    		r: 13460,
    		f: 2.66,
    		l: "沙"
    	},
    	{
    		r: 13461,
    		f: 2.66,
    		l: "フレンドリー"
    	},
    	{
    		r: 13462,
    		f: 2.66,
    		l: "病状"
    	},
    	{
    		r: 13463,
    		f: 2.66,
    		l: "アルプス"
    	},
    	{
    		r: 13464,
    		f: 2.66,
    		l: "粘る"
    	},
    	{
    		r: 13465,
    		f: 2.66,
    		l: "なじみ"
    	},
    	{
    		r: 13466,
    		f: 2.66,
    		l: "宇都宮"
    	},
    	{
    		r: 13467,
    		f: 2.66,
    		l: "プーケット"
    	},
    	{
    		r: 13468,
    		f: 2.66,
    		l: "諭"
    	},
    	{
    		r: 13469,
    		f: 2.66,
    		l: "ありえる"
    	},
    	{
    		r: 13470,
    		f: 2.66,
    		l: "バタ"
    	},
    	{
    		r: 13471,
    		f: 2.66,
    		l: "ところどころ"
    	},
    	{
    		r: 13472,
    		f: 2.66,
    		l: "やっかい"
    	},
    	{
    		r: 13473,
    		f: 2.66,
    		l: "道理"
    	},
    	{
    		r: 13474,
    		f: 2.66,
    		l: "喜ばしい"
    	},
    	{
    		r: 13475,
    		f: 2.66,
    		l: "出逢う"
    	},
    	{
    		r: 13476,
    		f: 2.66,
    		l: "土俵"
    	},
    	{
    		r: 13477,
    		f: 2.66,
    		l: "謙"
    	},
    	{
    		r: 13478,
    		f: 2.66,
    		l: "杜"
    	},
    	{
    		r: 13479,
    		f: 2.66,
    		l: "滑稽"
    	},
    	{
    		r: 13480,
    		f: 2.66,
    		l: "ニュートン"
    	},
    	{
    		r: 13481,
    		f: 2.66,
    		l: "敬語"
    	},
    	{
    		r: 13482,
    		f: 2.65,
    		l: "沈没"
    	},
    	{
    		r: 13483,
    		f: 2.65,
    		l: "絞り込む"
    	},
    	{
    		r: 13484,
    		f: 2.65,
    		l: "演算"
    	},
    	{
    		r: 13485,
    		f: 2.65,
    		l: "見所"
    	},
    	{
    		r: 13486,
    		f: 2.65,
    		l: "秀逸"
    	},
    	{
    		r: 13487,
    		f: 2.65,
    		l: "シンクロ"
    	},
    	{
    		r: 13488,
    		f: 2.65,
    		l: "ユナイテッド"
    	},
    	{
    		r: 13489,
    		f: 2.65,
    		l: "旧約"
    	},
    	{
    		r: 13490,
    		f: 2.65,
    		l: "シカ"
    	},
    	{
    		r: 13491,
    		f: 2.65,
    		l: "石毛"
    	},
    	{
    		r: 13492,
    		f: 2.65,
    		l: "薄暗い"
    	},
    	{
    		r: 13493,
    		f: 2.65,
    		l: "概観"
    	},
    	{
    		r: 13494,
    		f: 2.65,
    		l: "蒸留"
    	},
    	{
    		r: 13495,
    		f: 2.65,
    		l: "ラッセル"
    	},
    	{
    		r: 13496,
    		f: 2.65,
    		l: "ブルガリア"
    	},
    	{
    		r: 13497,
    		f: 2.65,
    		l: "起立"
    	},
    	{
    		r: 13498,
    		f: 2.65,
    		l: "買い求める"
    	},
    	{
    		r: 13499,
    		f: 2.65,
    		l: "伺える"
    	},
    	{
    		r: 13500,
    		f: 2.65,
    		l: "無念"
    	},
    	{
    		r: 13501,
    		f: 2.65,
    		l: "汽車"
    	},
    	{
    		r: 13502,
    		f: 2.65,
    		l: "末尾"
    	},
    	{
    		r: 13503,
    		f: 2.65,
    		l: "牙"
    	},
    	{
    		r: 13504,
    		f: 2.65,
    		l: "平井"
    	},
    	{
    		r: 13505,
    		f: 2.65,
    		l: "子犬"
    	},
    	{
    		r: 13506,
    		f: 2.65,
    		l: "家康"
    	},
    	{
    		r: 13507,
    		f: 2.64,
    		l: "多田"
    	},
    	{
    		r: 13508,
    		f: 2.64,
    		l: "見識"
    	},
    	{
    		r: 13509,
    		f: 2.64,
    		l: "おもし"
    	},
    	{
    		r: 13510,
    		f: 2.64,
    		l: "馳せる"
    	},
    	{
    		r: 13511,
    		f: 2.64,
    		l: "新郎"
    	},
    	{
    		r: 13512,
    		f: 2.64,
    		l: "目印"
    	},
    	{
    		r: 13513,
    		f: 2.64,
    		l: "キッド"
    	},
    	{
    		r: 13514,
    		f: 2.64,
    		l: "絶版"
    	},
    	{
    		r: 13515,
    		f: 2.64,
    		l: "くちる"
    	},
    	{
    		r: 13516,
    		f: 2.64,
    		l: "一段"
    	},
    	{
    		r: 13517,
    		f: 2.64,
    		l: "旧来"
    	},
    	{
    		r: 13518,
    		f: 2.64,
    		l: "海辺"
    	},
    	{
    		r: 13519,
    		f: 2.64,
    		l: "えん"
    	},
    	{
    		r: 13520,
    		f: 2.64,
    		l: "着替え"
    	},
    	{
    		r: 13521,
    		f: 2.64,
    		l: "有望"
    	},
    	{
    		r: 13522,
    		f: 2.64,
    		l: "評す"
    	},
    	{
    		r: 13523,
    		f: 2.64,
    		l: "部局"
    	},
    	{
    		r: 13524,
    		f: 2.64,
    		l: "アダプタ"
    	},
    	{
    		r: 13525,
    		f: 2.64,
    		l: "まずまず"
    	},
    	{
    		r: 13526,
    		f: 2.64,
    		l: "槍"
    	},
    	{
    		r: 13527,
    		f: 2.64,
    		l: "偽る"
    	},
    	{
    		r: 13528,
    		f: 2.64,
    		l: "追随"
    	},
    	{
    		r: 13529,
    		f: 2.64,
    		l: "下請け"
    	},
    	{
    		r: 13530,
    		f: 2.64,
    		l: "なんで"
    	},
    	{
    		r: 13531,
    		f: 2.64,
    		l: "運勢"
    	},
    	{
    		r: 13532,
    		f: 2.64,
    		l: "郵貯"
    	},
    	{
    		r: 13533,
    		f: 2.64,
    		l: "私鉄"
    	},
    	{
    		r: 13534,
    		f: 2.64,
    		l: "相棒"
    	},
    	{
    		r: 13535,
    		f: 2.64,
    		l: "囲碁"
    	},
    	{
    		r: 13536,
    		f: 2.64,
    		l: "番地"
    	},
    	{
    		r: 13537,
    		f: 2.64,
    		l: "在来"
    	},
    	{
    		r: 13538,
    		f: 2.64,
    		l: "男児"
    	},
    	{
    		r: 13539,
    		f: 2.64,
    		l: "歌える"
    	},
    	{
    		r: 13540,
    		f: 2.64,
    		l: "妃"
    	},
    	{
    		r: 13541,
    		f: 2.64,
    		l: "飢える"
    	},
    	{
    		r: 13542,
    		f: 2.64,
    		l: "平然と"
    	},
    	{
    		r: 13543,
    		f: 2.63,
    		l: "ゴマ"
    	},
    	{
    		r: 13544,
    		f: 2.63,
    		l: "祭典"
    	},
    	{
    		r: 13545,
    		f: 2.63,
    		l: "さきほど"
    	},
    	{
    		r: 13546,
    		f: 2.63,
    		l: "離島"
    	},
    	{
    		r: 13547,
    		f: 2.63,
    		l: "概略"
    	},
    	{
    		r: 13548,
    		f: 2.63,
    		l: "デブ"
    	},
    	{
    		r: 13549,
    		f: 2.63,
    		l: "かんがみる"
    	},
    	{
    		r: 13550,
    		f: 2.63,
    		l: "発病"
    	},
    	{
    		r: 13551,
    		f: 2.63,
    		l: "竣工"
    	},
    	{
    		r: 13552,
    		f: 2.63,
    		l: "両論"
    	},
    	{
    		r: 13553,
    		f: 2.63,
    		l: "司教"
    	},
    	{
    		r: 13554,
    		f: 2.62,
    		l: "アレン"
    	},
    	{
    		r: 13555,
    		f: 2.62,
    		l: "坂道"
    	},
    	{
    		r: 13556,
    		f: 2.62,
    		l: "勝敗"
    	},
    	{
    		r: 13557,
    		f: 2.62,
    		l: "縮める"
    	},
    	{
    		r: 13558,
    		f: 2.62,
    		l: "ｅ"
    	},
    	{
    		r: 13559,
    		f: 2.62,
    		l: "野原"
    	},
    	{
    		r: 13560,
    		f: 2.62,
    		l: "感慨"
    	},
    	{
    		r: 13561,
    		f: 2.62,
    		l: "無制限"
    	},
    	{
    		r: 13562,
    		f: 2.62,
    		l: "此処"
    	},
    	{
    		r: 13563,
    		f: 2.62,
    		l: "田植え"
    	},
    	{
    		r: 13564,
    		f: 2.62,
    		l: "係員"
    	},
    	{
    		r: 13565,
    		f: 2.62,
    		l: "再考"
    	},
    	{
    		r: 13566,
    		f: 2.62,
    		l: "スコット"
    	},
    	{
    		r: 13567,
    		f: 2.62,
    		l: "拍車"
    	},
    	{
    		r: 13568,
    		f: 2.62,
    		l: "いきさつ"
    	},
    	{
    		r: 13569,
    		f: 2.62,
    		l: "インサイド"
    	},
    	{
    		r: 13570,
    		f: 2.62,
    		l: "償う"
    	},
    	{
    		r: 13571,
    		f: 2.62,
    		l: "パートナーシップ"
    	},
    	{
    		r: 13572,
    		f: 2.62,
    		l: "留"
    	},
    	{
    		r: 13573,
    		f: 2.62,
    		l: "概算"
    	},
    	{
    		r: 13574,
    		f: 2.62,
    		l: "かお"
    	},
    	{
    		r: 13575,
    		f: 2.62,
    		l: "奥行き"
    	},
    	{
    		r: 13576,
    		f: 2.62,
    		l: "キュート"
    	},
    	{
    		r: 13577,
    		f: 2.62,
    		l: "大輔"
    	},
    	{
    		r: 13578,
    		f: 2.62,
    		l: "ダライ"
    	},
    	{
    		r: 13579,
    		f: 2.62,
    		l: "中西"
    	},
    	{
    		r: 13580,
    		f: 2.62,
    		l: "四方"
    	},
    	{
    		r: 13581,
    		f: 2.62,
    		l: "人命"
    	},
    	{
    		r: 13582,
    		f: 2.62,
    		l: "振舞う"
    	},
    	{
    		r: 13583,
    		f: 2.62,
    		l: "集結"
    	},
    	{
    		r: 13584,
    		f: 2.62,
    		l: "人身"
    	},
    	{
    		r: 13585,
    		f: 2.62,
    		l: "ロイター"
    	},
    	{
    		r: 13586,
    		f: 2.62,
    		l: "別物"
    	},
    	{
    		r: 13587,
    		f: 2.62,
    		l: "遠距離"
    	},
    	{
    		r: 13588,
    		f: 2.62,
    		l: "のっとる"
    	},
    	{
    		r: 13589,
    		f: 2.62,
    		l: "腹筋"
    	},
    	{
    		r: 13590,
    		f: 2.62,
    		l: "林業"
    	},
    	{
    		r: 13591,
    		f: 2.62,
    		l: "耕作"
    	},
    	{
    		r: 13592,
    		f: 2.62,
    		l: "北上"
    	},
    	{
    		r: 13593,
    		f: 2.62,
    		l: "起"
    	},
    	{
    		r: 13594,
    		f: 2.62,
    		l: "テラ"
    	},
    	{
    		r: 13595,
    		f: 2.62,
    		l: "位置付け"
    	},
    	{
    		r: 13596,
    		f: 2.62,
    		l: "現像"
    	},
    	{
    		r: 13597,
    		f: 2.62,
    		l: "シイ"
    	},
    	{
    		r: 13598,
    		f: 2.62,
    		l: "用法"
    	},
    	{
    		r: 13599,
    		f: 2.62,
    		l: "論評"
    	},
    	{
    		r: 13600,
    		f: 2.61,
    		l: "クアラルンプール"
    	},
    	{
    		r: 13601,
    		f: 2.61,
    		l: "銃撃"
    	},
    	{
    		r: 13602,
    		f: 2.61,
    		l: "切に"
    	},
    	{
    		r: 13603,
    		f: 2.61,
    		l: "引き返す"
    	},
    	{
    		r: 13604,
    		f: 2.61,
    		l: "汚職"
    	},
    	{
    		r: 13605,
    		f: 2.61,
    		l: "台無し"
    	},
    	{
    		r: 13606,
    		f: 2.61,
    		l: "異端"
    	},
    	{
    		r: 13607,
    		f: 2.61,
    		l: "クイーン"
    	},
    	{
    		r: 13608,
    		f: 2.61,
    		l: "脳死"
    	},
    	{
    		r: 13609,
    		f: 2.61,
    		l: "うんちく"
    	},
    	{
    		r: 13610,
    		f: 2.61,
    		l: "自白"
    	},
    	{
    		r: 13611,
    		f: 2.61,
    		l: "くわしい"
    	},
    	{
    		r: 13612,
    		f: 2.61,
    		l: "退治"
    	},
    	{
    		r: 13613,
    		f: 2.61,
    		l: "引き寄せる"
    	},
    	{
    		r: 13614,
    		f: 2.61,
    		l: "ラジ"
    	},
    	{
    		r: 13615,
    		f: 2.61,
    		l: "大口"
    	},
    	{
    		r: 13616,
    		f: 2.61,
    		l: "名声"
    	},
    	{
    		r: 13617,
    		f: 2.61,
    		l: "コトバ"
    	},
    	{
    		r: 13618,
    		f: 2.61,
    		l: "仮面ライダー"
    	},
    	{
    		r: 13619,
    		f: 2.61,
    		l: "宴"
    	},
    	{
    		r: 13620,
    		f: 2.61,
    		l: "求職"
    	},
    	{
    		r: 13621,
    		f: 2.61,
    		l: "一安心"
    	},
    	{
    		r: 13622,
    		f: 2.61,
    		l: "親近"
    	},
    	{
    		r: 13623,
    		f: 2.61,
    		l: "右上"
    	},
    	{
    		r: 13624,
    		f: 2.61,
    		l: "都知事"
    	},
    	{
    		r: 13625,
    		f: 2.61,
    		l: "永続"
    	},
    	{
    		r: 13626,
    		f: 2.61,
    		l: "ミック"
    	},
    	{
    		r: 13627,
    		f: 2.61,
    		l: "弾む"
    	},
    	{
    		r: 13628,
    		f: 2.61,
    		l: "軽快"
    	},
    	{
    		r: 13629,
    		f: 2.61,
    		l: "くだり"
    	},
    	{
    		r: 13630,
    		f: 2.61,
    		l: "開館"
    	},
    	{
    		r: 13631,
    		f: 2.61,
    		l: "和子"
    	},
    	{
    		r: 13632,
    		f: 2.6,
    		l: "えび"
    	},
    	{
    		r: 13633,
    		f: 2.6,
    		l: "新薬"
    	},
    	{
    		r: 13634,
    		f: 2.6,
    		l: "内政"
    	},
    	{
    		r: 13635,
    		f: 2.6,
    		l: "代名詞"
    	},
    	{
    		r: 13636,
    		f: 2.6,
    		l: "復刻"
    	},
    	{
    		r: 13637,
    		f: 2.6,
    		l: "若林"
    	},
    	{
    		r: 13638,
    		f: 2.6,
    		l: "といふ"
    	},
    	{
    		r: 13639,
    		f: 2.6,
    		l: "小切手"
    	},
    	{
    		r: 13640,
    		f: 2.6,
    		l: "後進"
    	},
    	{
    		r: 13641,
    		f: 2.6,
    		l: "神戸大学"
    	},
    	{
    		r: 13642,
    		f: 2.6,
    		l: "上原"
    	},
    	{
    		r: 13643,
    		f: 2.6,
    		l: "分化"
    	},
    	{
    		r: 13644,
    		f: 2.6,
    		l: "ほっとく"
    	},
    	{
    		r: 13645,
    		f: 2.6,
    		l: "特派"
    	},
    	{
    		r: 13646,
    		f: 2.6,
    		l: "テッド"
    	},
    	{
    		r: 13647,
    		f: 2.6,
    		l: "ストリーム"
    	},
    	{
    		r: 13648,
    		f: 2.6,
    		l: "薪"
    	},
    	{
    		r: 13649,
    		f: 2.6,
    		l: "ぼん"
    	},
    	{
    		r: 13650,
    		f: 2.6,
    		l: "ぶす"
    	},
    	{
    		r: 13651,
    		f: 2.6,
    		l: "疎通"
    	},
    	{
    		r: 13652,
    		f: 2.6,
    		l: "挙がる"
    	},
    	{
    		r: 13653,
    		f: 2.6,
    		l: "防水"
    	},
    	{
    		r: 13654,
    		f: 2.6,
    		l: "成就"
    	},
    	{
    		r: 13655,
    		f: 2.6,
    		l: "売り手"
    	},
    	{
    		r: 13656,
    		f: 2.6,
    		l: "浦"
    	},
    	{
    		r: 13657,
    		f: 2.6,
    		l: "アスキー"
    	},
    	{
    		r: 13658,
    		f: 2.6,
    		l: "一元"
    	},
    	{
    		r: 13659,
    		f: 2.6,
    		l: "融通"
    	},
    	{
    		r: 13660,
    		f: 2.6,
    		l: "ジェリー"
    	},
    	{
    		r: 13661,
    		f: 2.6,
    		l: "怯える"
    	},
    	{
    		r: 13662,
    		f: 2.6,
    		l: "愛称"
    	},
    	{
    		r: 13663,
    		f: 2.6,
    		l: "定め"
    	},
    	{
    		r: 13664,
    		f: 2.6,
    		l: "インターンシップ"
    	},
    	{
    		r: 13665,
    		f: 2.6,
    		l: "議案"
    	},
    	{
    		r: 13666,
    		f: 2.6,
    		l: "察知"
    	},
    	{
    		r: 13667,
    		f: 2.6,
    		l: "音読"
    	},
    	{
    		r: 13668,
    		f: 2.6,
    		l: "山道"
    	},
    	{
    		r: 13669,
    		f: 2.6,
    		l: "卑怯"
    	},
    	{
    		r: 13670,
    		f: 2.6,
    		l: "本案"
    	},
    	{
    		r: 13671,
    		f: 2.6,
    		l: "内陸"
    	},
    	{
    		r: 13672,
    		f: 2.59,
    		l: "金髪"
    	},
    	{
    		r: 13673,
    		f: 2.59,
    		l: "お嬢さん"
    	},
    	{
    		r: 13674,
    		f: 2.59,
    		l: "夏場"
    	},
    	{
    		r: 13675,
    		f: 2.59,
    		l: "諜報"
    	},
    	{
    		r: 13676,
    		f: 2.59,
    		l: "束縛"
    	},
    	{
    		r: 13677,
    		f: 2.59,
    		l: "後々"
    	},
    	{
    		r: 13678,
    		f: 2.59,
    		l: "漁船"
    	},
    	{
    		r: 13679,
    		f: 2.59,
    		l: "付着"
    	},
    	{
    		r: 13680,
    		f: 2.59,
    		l: "田原"
    	},
    	{
    		r: 13681,
    		f: 2.59,
    		l: "皇"
    	},
    	{
    		r: 13682,
    		f: 2.59,
    		l: "人為"
    	},
    	{
    		r: 13683,
    		f: 2.59,
    		l: "賭け"
    	},
    	{
    		r: 13684,
    		f: 2.59,
    		l: "デイリー"
    	},
    	{
    		r: 13685,
    		f: 2.59,
    		l: "図表"
    	},
    	{
    		r: 13686,
    		f: 2.59,
    		l: "原宿"
    	},
    	{
    		r: 13687,
    		f: 2.59,
    		l: "田園"
    	},
    	{
    		r: 13688,
    		f: 2.59,
    		l: "便乗"
    	},
    	{
    		r: 13689,
    		f: 2.59,
    		l: "双方向"
    	},
    	{
    		r: 13690,
    		f: 2.59,
    		l: "先取り"
    	},
    	{
    		r: 13691,
    		f: 2.59,
    		l: "逃げ"
    	},
    	{
    		r: 13692,
    		f: 2.59,
    		l: "不運"
    	},
    	{
    		r: 13693,
    		f: 2.59,
    		l: "下請"
    	},
    	{
    		r: 13694,
    		f: 2.59,
    		l: "レフ"
    	},
    	{
    		r: 13695,
    		f: 2.59,
    		l: "対岸"
    	},
    	{
    		r: 13696,
    		f: 2.59,
    		l: "本心"
    	},
    	{
    		r: 13697,
    		f: 2.58,
    		l: "件名"
    	},
    	{
    		r: 13698,
    		f: 2.58,
    		l: "口語"
    	},
    	{
    		r: 13699,
    		f: 2.58,
    		l: "伊丹"
    	},
    	{
    		r: 13700,
    		f: 2.58,
    		l: "吹き込む"
    	},
    	{
    		r: 13701,
    		f: 2.58,
    		l: "借家"
    	},
    	{
    		r: 13702,
    		f: 2.58,
    		l: "えい"
    	},
    	{
    		r: 13703,
    		f: 2.58,
    		l: "絶品"
    	},
    	{
    		r: 13704,
    		f: 2.58,
    		l: "タイムリー"
    	},
    	{
    		r: 13705,
    		f: 2.58,
    		l: "胴"
    	},
    	{
    		r: 13706,
    		f: 2.58,
    		l: "わな"
    	},
    	{
    		r: 13707,
    		f: 2.58,
    		l: "プロレタリア"
    	},
    	{
    		r: 13708,
    		f: 2.58,
    		l: "楽屋"
    	},
    	{
    		r: 13709,
    		f: 2.58,
    		l: "能動"
    	},
    	{
    		r: 13710,
    		f: 2.58,
    		l: "つかまる"
    	},
    	{
    		r: 13711,
    		f: 2.58,
    		l: "佳"
    	},
    	{
    		r: 13712,
    		f: 2.58,
    		l: "包囲"
    	},
    	{
    		r: 13713,
    		f: 2.58,
    		l: "可笑しい"
    	},
    	{
    		r: 13714,
    		f: 2.58,
    		l: "センタ"
    	},
    	{
    		r: 13715,
    		f: 2.58,
    		l: "一人前"
    	},
    	{
    		r: 13716,
    		f: 2.58,
    		l: "コントラスト"
    	},
    	{
    		r: 13717,
    		f: 2.58,
    		l: "怪しげ"
    	},
    	{
    		r: 13718,
    		f: 2.58,
    		l: "挙式"
    	},
    	{
    		r: 13719,
    		f: 2.58,
    		l: "援護"
    	},
    	{
    		r: 13720,
    		f: 2.58,
    		l: "落選"
    	},
    	{
    		r: 13721,
    		f: 2.58,
    		l: "華人"
    	},
    	{
    		r: 13722,
    		f: 2.58,
    		l: "空襲"
    	},
    	{
    		r: 13723,
    		f: 2.58,
    		l: "公言"
    	},
    	{
    		r: 13724,
    		f: 2.58,
    		l: "いとう"
    	},
    	{
    		r: 13725,
    		f: 2.58,
    		l: "次いで"
    	},
    	{
    		r: 13726,
    		f: 2.58,
    		l: "前衛"
    	},
    	{
    		r: 13727,
    		f: 2.58,
    		l: "惑わす"
    	},
    	{
    		r: 13728,
    		f: 2.58,
    		l: "扱える"
    	},
    	{
    		r: 13729,
    		f: 2.58,
    		l: "一因"
    	},
    	{
    		r: 13730,
    		f: 2.57,
    		l: "用心"
    	},
    	{
    		r: 13731,
    		f: 2.57,
    		l: "生き抜く"
    	},
    	{
    		r: 13732,
    		f: 2.57,
    		l: "利率"
    	},
    	{
    		r: 13733,
    		f: 2.57,
    		l: "これだけ"
    	},
    	{
    		r: 13734,
    		f: 2.57,
    		l: "赤色"
    	},
    	{
    		r: 13735,
    		f: 2.57,
    		l: "器官"
    	},
    	{
    		r: 13736,
    		f: 2.57,
    		l: "お粗末"
    	},
    	{
    		r: 13737,
    		f: 2.57,
    		l: "ＶＳ"
    	},
    	{
    		r: 13738,
    		f: 2.57,
    		l: "長岡"
    	},
    	{
    		r: 13739,
    		f: 2.57,
    		l: "兵力"
    	},
    	{
    		r: 13740,
    		f: 2.57,
    		l: "天地"
    	},
    	{
    		r: 13741,
    		f: 2.57,
    		l: "有価"
    	},
    	{
    		r: 13742,
    		f: 2.57,
    		l: "マフィア"
    	},
    	{
    		r: 13743,
    		f: 2.57,
    		l: "応急"
    	},
    	{
    		r: 13744,
    		f: 2.57,
    		l: "武藤"
    	},
    	{
    		r: 13745,
    		f: 2.57,
    		l: "性欲"
    	},
    	{
    		r: 13746,
    		f: 2.57,
    		l: "姪"
    	},
    	{
    		r: 13747,
    		f: 2.57,
    		l: "たのしい"
    	},
    	{
    		r: 13748,
    		f: 2.57,
    		l: "元素"
    	},
    	{
    		r: 13749,
    		f: 2.57,
    		l: "表象"
    	},
    	{
    		r: 13750,
    		f: 2.57,
    		l: "延べ"
    	},
    	{
    		r: 13751,
    		f: 2.57,
    		l: "ねずみ"
    	},
    	{
    		r: 13752,
    		f: 2.56,
    		l: "非公式"
    	},
    	{
    		r: 13753,
    		f: 2.56,
    		l: "ドンドン"
    	},
    	{
    		r: 13754,
    		f: 2.56,
    		l: "動き回る"
    	},
    	{
    		r: 13755,
    		f: 2.56,
    		l: "寅"
    	},
    	{
    		r: 13756,
    		f: 2.56,
    		l: "武蔵野"
    	},
    	{
    		r: 13757,
    		f: 2.56,
    		l: "イヌ"
    	},
    	{
    		r: 13758,
    		f: 2.56,
    		l: "愛しい"
    	},
    	{
    		r: 13759,
    		f: 2.56,
    		l: "召集"
    	},
    	{
    		r: 13760,
    		f: 2.56,
    		l: "最古"
    	},
    	{
    		r: 13761,
    		f: 2.56,
    		l: "管内"
    	},
    	{
    		r: 13762,
    		f: 2.56,
    		l: "王室"
    	},
    	{
    		r: 13763,
    		f: 2.56,
    		l: "トウモロコシ"
    	},
    	{
    		r: 13764,
    		f: 2.56,
    		l: "販促"
    	},
    	{
    		r: 13765,
    		f: 2.56,
    		l: "お便り"
    	},
    	{
    		r: 13766,
    		f: 2.56,
    		l: "直ぐ"
    	},
    	{
    		r: 13767,
    		f: 2.56,
    		l: "賀"
    	},
    	{
    		r: 13768,
    		f: 2.56,
    		l: "片付け"
    	},
    	{
    		r: 13769,
    		f: 2.56,
    		l: "揃い"
    	},
    	{
    		r: 13770,
    		f: 2.56,
    		l: "取り合う"
    	},
    	{
    		r: 13771,
    		f: 2.56,
    		l: "アフター"
    	},
    	{
    		r: 13772,
    		f: 2.56,
    		l: "バード"
    	},
    	{
    		r: 13773,
    		f: 2.56,
    		l: "画一"
    	},
    	{
    		r: 13774,
    		f: 2.56,
    		l: "挙動"
    	},
    	{
    		r: 13775,
    		f: 2.56,
    		l: "艦長"
    	},
    	{
    		r: 13776,
    		f: 2.56,
    		l: "直し"
    	},
    	{
    		r: 13777,
    		f: 2.56,
    		l: "ハイブリッド"
    	},
    	{
    		r: 13778,
    		f: 2.56,
    		l: "渡し"
    	},
    	{
    		r: 13779,
    		f: 2.56,
    		l: "大通り"
    	},
    	{
    		r: 13780,
    		f: 2.56,
    		l: "豪州"
    	},
    	{
    		r: 13781,
    		f: 2.56,
    		l: "没収"
    	},
    	{
    		r: 13782,
    		f: 2.56,
    		l: "日本テレビ"
    	},
    	{
    		r: 13783,
    		f: 2.56,
    		l: "双"
    	},
    	{
    		r: 13784,
    		f: 2.56,
    		l: "マーティン"
    	},
    	{
    		r: 13785,
    		f: 2.56,
    		l: "ハチ"
    	},
    	{
    		r: 13786,
    		f: 2.56,
    		l: "加味"
    	},
    	{
    		r: 13787,
    		f: 2.56,
    		l: "横行"
    	},
    	{
    		r: 13788,
    		f: 2.56,
    		l: "誇張"
    	},
    	{
    		r: 13789,
    		f: 2.56,
    		l: "頒布"
    	},
    	{
    		r: 13790,
    		f: 2.56,
    		l: "初演"
    	},
    	{
    		r: 13791,
    		f: 2.56,
    		l: "系譜"
    	},
    	{
    		r: 13792,
    		f: 2.56,
    		l: "問答"
    	},
    	{
    		r: 13793,
    		f: 2.56,
    		l: "マイペース"
    	},
    	{
    		r: 13794,
    		f: 2.56,
    		l: "円形"
    	},
    	{
    		r: 13795,
    		f: 2.56,
    		l: "書き直す"
    	},
    	{
    		r: 13796,
    		f: 2.56,
    		l: "ことわざ"
    	},
    	{
    		r: 13797,
    		f: 2.56,
    		l: "しがみつく"
    	},
    	{
    		r: 13798,
    		f: 2.55,
    		l: "優勢"
    	},
    	{
    		r: 13799,
    		f: 2.55,
    		l: "古く"
    	},
    	{
    		r: 13800,
    		f: 2.55,
    		l: "レーン"
    	},
    	{
    		r: 13801,
    		f: 2.55,
    		l: "竹田"
    	},
    	{
    		r: 13802,
    		f: 2.55,
    		l: "ユネスコ"
    	},
    	{
    		r: 13803,
    		f: 2.55,
    		l: "あそぶ"
    	},
    	{
    		r: 13804,
    		f: 2.55,
    		l: "ハンセン病"
    	},
    	{
    		r: 13805,
    		f: 2.55,
    		l: "菊池"
    	},
    	{
    		r: 13806,
    		f: 2.55,
    		l: "ふらふら"
    	},
    	{
    		r: 13807,
    		f: 2.55,
    		l: "伯爵"
    	},
    	{
    		r: 13808,
    		f: 2.55,
    		l: "内職"
    	},
    	{
    		r: 13809,
    		f: 2.55,
    		l: "要塞"
    	},
    	{
    		r: 13810,
    		f: 2.55,
    		l: "所蔵"
    	},
    	{
    		r: 13811,
    		f: 2.55,
    		l: "立ち会う"
    	},
    	{
    		r: 13812,
    		f: 2.55,
    		l: "年頃"
    	},
    	{
    		r: 13813,
    		f: 2.55,
    		l: "足首"
    	},
    	{
    		r: 13814,
    		f: 2.55,
    		l: "上告"
    	},
    	{
    		r: 13815,
    		f: 2.55,
    		l: "農林水産省"
    	},
    	{
    		r: 13816,
    		f: 2.55,
    		l: "ハンカチ"
    	},
    	{
    		r: 13817,
    		f: 2.55,
    		l: "亀田"
    	},
    	{
    		r: 13818,
    		f: 2.55,
    		l: "通り抜ける"
    	},
    	{
    		r: 13819,
    		f: 2.55,
    		l: "を以て"
    	},
    	{
    		r: 13820,
    		f: 2.55,
    		l: "講和"
    	},
    	{
    		r: 13821,
    		f: 2.55,
    		l: "反米"
    	},
    	{
    		r: 13822,
    		f: 2.55,
    		l: "屋内"
    	},
    	{
    		r: 13823,
    		f: 2.54,
    		l: "生理学"
    	},
    	{
    		r: 13824,
    		f: 2.54,
    		l: "英訳"
    	},
    	{
    		r: 13825,
    		f: 2.54,
    		l: "文庫本"
    	},
    	{
    		r: 13826,
    		f: 2.54,
    		l: "イラ"
    	},
    	{
    		r: 13827,
    		f: 2.54,
    		l: "くるむ"
    	},
    	{
    		r: 13828,
    		f: 2.54,
    		l: "バラード"
    	},
    	{
    		r: 13829,
    		f: 2.54,
    		l: "探究"
    	},
    	{
    		r: 13830,
    		f: 2.54,
    		l: "か国"
    	},
    	{
    		r: 13831,
    		f: 2.54,
    		l: "滑らか"
    	},
    	{
    		r: 13832,
    		f: 2.54,
    		l: "察"
    	},
    	{
    		r: 13833,
    		f: 2.54,
    		l: "五十嵐"
    	},
    	{
    		r: 13834,
    		f: 2.54,
    		l: "監禁"
    	},
    	{
    		r: 13835,
    		f: 2.54,
    		l: "下品"
    	},
    	{
    		r: 13836,
    		f: 2.54,
    		l: "ＭＦ"
    	},
    	{
    		r: 13837,
    		f: 2.54,
    		l: "釧路"
    	},
    	{
    		r: 13838,
    		f: 2.54,
    		l: "使い捨て"
    	},
    	{
    		r: 13839,
    		f: 2.54,
    		l: "ワンピース"
    	},
    	{
    		r: 13840,
    		f: 2.54,
    		l: "次女"
    	},
    	{
    		r: 13841,
    		f: 2.54,
    		l: "ディス"
    	},
    	{
    		r: 13842,
    		f: 2.54,
    		l: "布告"
    	},
    	{
    		r: 13843,
    		f: 2.54,
    		l: "持ち"
    	},
    	{
    		r: 13844,
    		f: 2.54,
    		l: "車種"
    	},
    	{
    		r: 13845,
    		f: 2.54,
    		l: "カトリック教"
    	},
    	{
    		r: 13846,
    		f: 2.54,
    		l: "エド"
    	},
    	{
    		r: 13847,
    		f: 2.54,
    		l: "吉本"
    	},
    	{
    		r: 13848,
    		f: 2.54,
    		l: "換金"
    	},
    	{
    		r: 13849,
    		f: 2.54,
    		l: "マリオ"
    	},
    	{
    		r: 13850,
    		f: 2.54,
    		l: "あやしい"
    	},
    	{
    		r: 13851,
    		f: 2.54,
    		l: "点字"
    	},
    	{
    		r: 13852,
    		f: 2.54,
    		l: "かぼちゃ"
    	},
    	{
    		r: 13853,
    		f: 2.54,
    		l: "日テレ"
    	},
    	{
    		r: 13854,
    		f: 2.54,
    		l: "トホホ"
    	},
    	{
    		r: 13855,
    		f: 2.54,
    		l: "ふるまう"
    	},
    	{
    		r: 13856,
    		f: 2.54,
    		l: "大自然"
    	},
    	{
    		r: 13857,
    		f: 2.54,
    		l: "創始"
    	},
    	{
    		r: 13858,
    		f: 2.54,
    		l: "近付く"
    	},
    	{
    		r: 13859,
    		f: 2.54,
    		l: "誤認"
    	},
    	{
    		r: 13860,
    		f: 2.54,
    		l: "不合格"
    	},
    	{
    		r: 13861,
    		f: 2.54,
    		l: "ジャクソン"
    	},
    	{
    		r: 13862,
    		f: 2.54,
    		l: "参列"
    	},
    	{
    		r: 13863,
    		f: 2.53,
    		l: "生年月日"
    	},
    	{
    		r: 13864,
    		f: 2.53,
    		l: "呼び名"
    	},
    	{
    		r: 13865,
    		f: 2.53,
    		l: "このほど"
    	},
    	{
    		r: 13866,
    		f: 2.53,
    		l: "アサ"
    	},
    	{
    		r: 13867,
    		f: 2.53,
    		l: "直子"
    	},
    	{
    		r: 13868,
    		f: 2.53,
    		l: "とかく"
    	},
    	{
    		r: 13869,
    		f: 2.53,
    		l: "恥じる"
    	},
    	{
    		r: 13870,
    		f: 2.53,
    		l: "浅田"
    	},
    	{
    		r: 13871,
    		f: 2.53,
    		l: "マドリード"
    	},
    	{
    		r: 13872,
    		f: 2.53,
    		l: "既得"
    	},
    	{
    		r: 13873,
    		f: 2.53,
    		l: "乗務"
    	},
    	{
    		r: 13874,
    		f: 2.53,
    		l: "ざま"
    	},
    	{
    		r: 13875,
    		f: 2.53,
    		l: "沸騰"
    	},
    	{
    		r: 13876,
    		f: 2.53,
    		l: "ウイスキー"
    	},
    	{
    		r: 13877,
    		f: 2.53,
    		l: "タバ"
    	},
    	{
    		r: 13878,
    		f: 2.53,
    		l: "エキスパート"
    	},
    	{
    		r: 13879,
    		f: 2.53,
    		l: "富豪"
    	},
    	{
    		r: 13880,
    		f: 2.53,
    		l: "パット"
    	},
    	{
    		r: 13881,
    		f: 2.53,
    		l: "新婦"
    	},
    	{
    		r: 13882,
    		f: 2.53,
    		l: "根気"
    	},
    	{
    		r: 13883,
    		f: 2.53,
    		l: "サウナ"
    	},
    	{
    		r: 13884,
    		f: 2.53,
    		l: "日本経済新聞"
    	},
    	{
    		r: 13885,
    		f: 2.53,
    		l: "仮処分"
    	},
    	{
    		r: 13886,
    		f: 2.53,
    		l: "ソル"
    	},
    	{
    		r: 13887,
    		f: 2.53,
    		l: "虫歯"
    	},
    	{
    		r: 13888,
    		f: 2.53,
    		l: "大連"
    	},
    	{
    		r: 13889,
    		f: 2.53,
    		l: "煮込む"
    	},
    	{
    		r: 13890,
    		f: 2.53,
    		l: "力士"
    	},
    	{
    		r: 13891,
    		f: 2.53,
    		l: "代弁"
    	},
    	{
    		r: 13892,
    		f: 2.53,
    		l: "欠"
    	},
    	{
    		r: 13893,
    		f: 2.53,
    		l: "弥"
    	},
    	{
    		r: 13894,
    		f: 2.52,
    		l: "代用"
    	},
    	{
    		r: 13895,
    		f: 2.52,
    		l: "ふんだんに"
    	},
    	{
    		r: 13896,
    		f: 2.52,
    		l: "真似る"
    	},
    	{
    		r: 13897,
    		f: 2.52,
    		l: "大雑把"
    	},
    	{
    		r: 13898,
    		f: 2.52,
    		l: "キリン"
    	},
    	{
    		r: 13899,
    		f: 2.52,
    		l: "かなえる"
    	},
    	{
    		r: 13900,
    		f: 2.52,
    		l: "留守番"
    	},
    	{
    		r: 13901,
    		f: 2.52,
    		l: "不動"
    	},
    	{
    		r: 13902,
    		f: 2.52,
    		l: "川端"
    	},
    	{
    		r: 13903,
    		f: 2.52,
    		l: "想"
    	},
    	{
    		r: 13904,
    		f: 2.52,
    		l: "秀雄"
    	},
    	{
    		r: 13905,
    		f: 2.52,
    		l: "境遇"
    	},
    	{
    		r: 13906,
    		f: 2.52,
    		l: "北海"
    	},
    	{
    		r: 13907,
    		f: 2.52,
    		l: "さぼる"
    	},
    	{
    		r: 13908,
    		f: 2.52,
    		l: "混入"
    	},
    	{
    		r: 13909,
    		f: 2.52,
    		l: "独学"
    	},
    	{
    		r: 13910,
    		f: 2.52,
    		l: "狐"
    	},
    	{
    		r: 13911,
    		f: 2.52,
    		l: "意匠"
    	},
    	{
    		r: 13912,
    		f: 2.52,
    		l: "ウルトラマン"
    	},
    	{
    		r: 13913,
    		f: 2.52,
    		l: "歪曲"
    	},
    	{
    		r: 13914,
    		f: 2.52,
    		l: "水害"
    	},
    	{
    		r: 13915,
    		f: 2.52,
    		l: "撫でる"
    	},
    	{
    		r: 13916,
    		f: 2.52,
    		l: "逃走"
    	},
    	{
    		r: 13917,
    		f: 2.52,
    		l: "採集"
    	},
    	{
    		r: 13918,
    		f: 2.52,
    		l: "まっとう"
    	},
    	{
    		r: 13919,
    		f: 2.52,
    		l: "せしめる"
    	},
    	{
    		r: 13920,
    		f: 2.52,
    		l: "阪"
    	},
    	{
    		r: 13921,
    		f: 2.52,
    		l: "かれこれ"
    	},
    	{
    		r: 13922,
    		f: 2.52,
    		l: "カラフル"
    	},
    	{
    		r: 13923,
    		f: 2.52,
    		l: "繁"
    	},
    	{
    		r: 13924,
    		f: 2.52,
    		l: "流布"
    	},
    	{
    		r: 13925,
    		f: 2.51,
    		l: "ワイヤー"
    	},
    	{
    		r: 13926,
    		f: 2.51,
    		l: "磁石"
    	},
    	{
    		r: 13927,
    		f: 2.51,
    		l: "緩める"
    	},
    	{
    		r: 13928,
    		f: 2.51,
    		l: "祈願"
    	},
    	{
    		r: 13929,
    		f: 2.51,
    		l: "不器用"
    	},
    	{
    		r: 13930,
    		f: 2.51,
    		l: "ラオス"
    	},
    	{
    		r: 13931,
    		f: 2.51,
    		l: "ハローワーク"
    	},
    	{
    		r: 13932,
    		f: 2.51,
    		l: "溜める"
    	},
    	{
    		r: 13933,
    		f: 2.51,
    		l: "ファイア"
    	},
    	{
    		r: 13934,
    		f: 2.51,
    		l: "調教"
    	},
    	{
    		r: 13935,
    		f: 2.51,
    		l: "大津"
    	},
    	{
    		r: 13936,
    		f: 2.51,
    		l: "着々と"
    	},
    	{
    		r: 13937,
    		f: 2.51,
    		l: "ひきこもる"
    	},
    	{
    		r: 13938,
    		f: 2.51,
    		l: "ナレーション"
    	},
    	{
    		r: 13939,
    		f: 2.51,
    		l: "塚本"
    	},
    	{
    		r: 13940,
    		f: 2.51,
    		l: "スチール"
    	},
    	{
    		r: 13941,
    		f: 2.51,
    		l: "邪悪"
    	},
    	{
    		r: 13942,
    		f: 2.51,
    		l: "陰陽"
    	},
    	{
    		r: 13943,
    		f: 2.51,
    		l: "台場"
    	},
    	{
    		r: 13944,
    		f: 2.51,
    		l: "ビビる"
    	},
    	{
    		r: 13945,
    		f: 2.51,
    		l: "健常"
    	},
    	{
    		r: 13946,
    		f: 2.51,
    		l: "未経験"
    	},
    	{
    		r: 13947,
    		f: 2.51,
    		l: "ジュネーブ"
    	},
    	{
    		r: 13948,
    		f: 2.51,
    		l: "皇位"
    	},
    	{
    		r: 13949,
    		f: 2.51,
    		l: "いふ"
    	},
    	{
    		r: 13950,
    		f: 2.51,
    		l: "綱領"
    	},
    	{
    		r: 13951,
    		f: 2.51,
    		l: "豆乳"
    	},
    	{
    		r: 13952,
    		f: 2.51,
    		l: "仲良い"
    	},
    	{
    		r: 13953,
    		f: 2.51,
    		l: "リフト"
    	},
    	{
    		r: 13954,
    		f: 2.51,
    		l: "汲む"
    	},
    	{
    		r: 13955,
    		f: 2.51,
    		l: "河合"
    	},
    	{
    		r: 13956,
    		f: 2.51,
    		l: "劉"
    	},
    	{
    		r: 13957,
    		f: 2.51,
    		l: "押える"
    	},
    	{
    		r: 13958,
    		f: 2.51,
    		l: "場内"
    	},
    	{
    		r: 13959,
    		f: 2.51,
    		l: "愕然"
    	},
    	{
    		r: 13960,
    		f: 2.51,
    		l: "星空"
    	},
    	{
    		r: 13961,
    		f: 2.51,
    		l: "達也"
    	},
    	{
    		r: 13962,
    		f: 2.51,
    		l: "篤"
    	},
    	{
    		r: 13963,
    		f: 2.51,
    		l: "押し出す"
    	},
    	{
    		r: 13964,
    		f: 2.51,
    		l: "乗り換え"
    	},
    	{
    		r: 13965,
    		f: 2.51,
    		l: "招集"
    	},
    	{
    		r: 13966,
    		f: 2.51,
    		l: "投げ出す"
    	},
    	{
    		r: 13967,
    		f: 2.51,
    		l: "壁画"
    	},
    	{
    		r: 13968,
    		f: 2.51,
    		l: "ハロ"
    	},
    	{
    		r: 13969,
    		f: 2.51,
    		l: "思いがけない"
    	},
    	{
    		r: 13970,
    		f: 2.51,
    		l: "思い返す"
    	},
    	{
    		r: 13971,
    		f: 2.51,
    		l: "新橋"
    	},
    	{
    		r: 13972,
    		f: 2.51,
    		l: "めちゃめちゃ"
    	},
    	{
    		r: 13973,
    		f: 2.5,
    		l: "下地"
    	},
    	{
    		r: 13974,
    		f: 2.5,
    		l: "免"
    	},
    	{
    		r: 13975,
    		f: 2.5,
    		l: "新装"
    	},
    	{
    		r: 13976,
    		f: 2.5,
    		l: "規程"
    	},
    	{
    		r: 13977,
    		f: 2.5,
    		l: "返し"
    	},
    	{
    		r: 13978,
    		f: 2.5,
    		l: "割高"
    	},
    	{
    		r: 13979,
    		f: 2.5,
    		l: "リーズナブル"
    	},
    	{
    		r: 13980,
    		f: 2.5,
    		l: "書式"
    	},
    	{
    		r: 13981,
    		f: 2.5,
    		l: "監理"
    	},
    	{
    		r: 13982,
    		f: 2.5,
    		l: "中絶"
    	},
    	{
    		r: 13983,
    		f: 2.5,
    		l: "軍備"
    	},
    	{
    		r: 13984,
    		f: 2.5,
    		l: "備考"
    	},
    	{
    		r: 13985,
    		f: 2.5,
    		l: "吉村"
    	},
    	{
    		r: 13986,
    		f: 2.5,
    		l: "パーフェクト"
    	},
    	{
    		r: 13987,
    		f: 2.5,
    		l: "癒着"
    	},
    	{
    		r: 13988,
    		f: 2.5,
    		l: "石橋"
    	},
    	{
    		r: 13989,
    		f: 2.5,
    		l: "落胆"
    	},
    	{
    		r: 13990,
    		f: 2.5,
    		l: "払い"
    	},
    	{
    		r: 13991,
    		f: 2.5,
    		l: "関す"
    	},
    	{
    		r: 13992,
    		f: 2.5,
    		l: "牽引"
    	},
    	{
    		r: 13993,
    		f: 2.5,
    		l: "決め手"
    	},
    	{
    		r: 13994,
    		f: 2.5,
    		l: "水族館"
    	},
    	{
    		r: 13995,
    		f: 2.49,
    		l: "一日中"
    	},
    	{
    		r: 13996,
    		f: 2.49,
    		l: "水晶"
    	},
    	{
    		r: 13997,
    		f: 2.49,
    		l: "シャイ"
    	},
    	{
    		r: 13998,
    		f: 2.49,
    		l: "エッジ"
    	},
    	{
    		r: 13999,
    		f: 2.49,
    		l: "沿線"
    	},
    	{
    		r: 14000,
    		f: 2.49,
    		l: "すがる"
    	},
    	{
    		r: 14001,
    		f: 2.49,
    		l: "監獄"
    	},
    	{
    		r: 14002,
    		f: 2.49,
    		l: "レスポンス"
    	},
    	{
    		r: 14003,
    		f: 2.49,
    		l: "三角形"
    	},
    	{
    		r: 14004,
    		f: 2.49,
    		l: "ヤマト"
    	},
    	{
    		r: 14005,
    		f: 2.49,
    		l: "取りまとめる"
    	},
    	{
    		r: 14006,
    		f: 2.49,
    		l: "張り切る"
    	},
    	{
    		r: 14007,
    		f: 2.49,
    		l: "版元"
    	},
    	{
    		r: 14008,
    		f: 2.49,
    		l: "大人しい"
    	},
    	{
    		r: 14009,
    		f: 2.49,
    		l: "溶け込む"
    	},
    	{
    		r: 14010,
    		f: 2.49,
    		l: "切り上げる"
    	},
    	{
    		r: 14011,
    		f: 2.49,
    		l: "幾分"
    	},
    	{
    		r: 14012,
    		f: 2.49,
    		l: "離せる"
    	},
    	{
    		r: 14013,
    		f: 2.49,
    		l: "ベーシック"
    	},
    	{
    		r: 14014,
    		f: 2.49,
    		l: "協業"
    	},
    	{
    		r: 14015,
    		f: 2.49,
    		l: "八田"
    	},
    	{
    		r: 14016,
    		f: 2.49,
    		l: "アレックス"
    	},
    	{
    		r: 14017,
    		f: 2.49,
    		l: "日本円"
    	},
    	{
    		r: 14018,
    		f: 2.49,
    		l: "行程"
    	},
    	{
    		r: 14019,
    		f: 2.49,
    		l: "シュー"
    	},
    	{
    		r: 14020,
    		f: 2.49,
    		l: "松子"
    	},
    	{
    		r: 14021,
    		f: 2.49,
    		l: "数時間"
    	},
    	{
    		r: 14022,
    		f: 2.49,
    		l: "質感"
    	},
    	{
    		r: 14023,
    		f: 2.49,
    		l: "邦人"
    	},
    	{
    		r: 14024,
    		f: 2.49,
    		l: "ショートカット"
    	},
    	{
    		r: 14025,
    		f: 2.49,
    		l: "院生"
    	},
    	{
    		r: 14026,
    		f: 2.49,
    		l: "断層"
    	},
    	{
    		r: 14027,
    		f: 2.49,
    		l: "ヒール"
    	},
    	{
    		r: 14028,
    		f: 2.49,
    		l: "そういや"
    	},
    	{
    		r: 14029,
    		f: 2.49,
    		l: "丸の内"
    	},
    	{
    		r: 14030,
    		f: 2.49,
    		l: "ルネサンス"
    	},
    	{
    		r: 14031,
    		f: 2.49,
    		l: "ジル"
    	},
    	{
    		r: 14032,
    		f: 2.49,
    		l: "別館"
    	},
    	{
    		r: 14033,
    		f: 2.49,
    		l: "お疲れさま"
    	},
    	{
    		r: 14034,
    		f: 2.49,
    		l: "モス"
    	},
    	{
    		r: 14035,
    		f: 2.49,
    		l: "採掘"
    	},
    	{
    		r: 14036,
    		f: 2.49,
    		l: "一遍"
    	},
    	{
    		r: 14037,
    		f: 2.48,
    		l: "トラベル"
    	},
    	{
    		r: 14038,
    		f: 2.48,
    		l: "ぼちぼち"
    	},
    	{
    		r: 14039,
    		f: 2.48,
    		l: "振込む"
    	},
    	{
    		r: 14040,
    		f: 2.48,
    		l: "母語"
    	},
    	{
    		r: 14041,
    		f: 2.48,
    		l: "射る"
    	},
    	{
    		r: 14042,
    		f: 2.48,
    		l: "よむ"
    	},
    	{
    		r: 14043,
    		f: 2.48,
    		l: "軍部"
    	},
    	{
    		r: 14044,
    		f: 2.48,
    		l: "かいな"
    	},
    	{
    		r: 14045,
    		f: 2.48,
    		l: "お守り"
    	},
    	{
    		r: 14046,
    		f: 2.48,
    		l: "投棄"
    	},
    	{
    		r: 14047,
    		f: 2.48,
    		l: "黒板"
    	},
    	{
    		r: 14048,
    		f: 2.48,
    		l: "からい"
    	},
    	{
    		r: 14049,
    		f: 2.48,
    		l: "時効"
    	},
    	{
    		r: 14050,
    		f: 2.48,
    		l: "尼崎"
    	},
    	{
    		r: 14051,
    		f: 2.48,
    		l: "旭川"
    	},
    	{
    		r: 14052,
    		f: 2.48,
    		l: "一掃"
    	},
    	{
    		r: 14053,
    		f: 2.48,
    		l: "ハザード"
    	},
    	{
    		r: 14054,
    		f: 2.48,
    		l: "フェラーリ"
    	},
    	{
    		r: 14055,
    		f: 2.48,
    		l: "史観"
    	},
    	{
    		r: 14056,
    		f: 2.48,
    		l: "称号"
    	},
    	{
    		r: 14057,
    		f: 2.48,
    		l: "手頃"
    	},
    	{
    		r: 14058,
    		f: 2.48,
    		l: "ワット"
    	},
    	{
    		r: 14059,
    		f: 2.48,
    		l: "進入"
    	},
    	{
    		r: 14060,
    		f: 2.48,
    		l: "和菓子"
    	},
    	{
    		r: 14061,
    		f: 2.48,
    		l: "必勝"
    	},
    	{
    		r: 14062,
    		f: 2.48,
    		l: "反感"
    	},
    	{
    		r: 14063,
    		f: 2.48,
    		l: "あす"
    	},
    	{
    		r: 14064,
    		f: 2.48,
    		l: "日野"
    	},
    	{
    		r: 14065,
    		f: 2.48,
    		l: "チカ"
    	},
    	{
    		r: 14066,
    		f: 2.48,
    		l: "極秘"
    	},
    	{
    		r: 14067,
    		f: 2.48,
    		l: "養老"
    	},
    	{
    		r: 14068,
    		f: 2.48,
    		l: "豊田"
    	},
    	{
    		r: 14069,
    		f: 2.47,
    		l: "古墳"
    	},
    	{
    		r: 14070,
    		f: 2.47,
    		l: "アトラクション"
    	},
    	{
    		r: 14071,
    		f: 2.47,
    		l: "ヤマハ"
    	},
    	{
    		r: 14072,
    		f: 2.47,
    		l: "ヴァイ"
    	},
    	{
    		r: 14073,
    		f: 2.47,
    		l: "合体"
    	},
    	{
    		r: 14074,
    		f: 2.47,
    		l: "不機嫌"
    	},
    	{
    		r: 14075,
    		f: 2.47,
    		l: "品切れ"
    	},
    	{
    		r: 14076,
    		f: 2.47,
    		l: "潜入"
    	},
    	{
    		r: 14077,
    		f: 2.47,
    		l: "一眼"
    	},
    	{
    		r: 14078,
    		f: 2.47,
    		l: "西ドイツ"
    	},
    	{
    		r: 14079,
    		f: 2.47,
    		l: "後任"
    	},
    	{
    		r: 14080,
    		f: 2.47,
    		l: "姑"
    	},
    	{
    		r: 14081,
    		f: 2.47,
    		l: "考え出す"
    	},
    	{
    		r: 14082,
    		f: 2.47,
    		l: "出没"
    	},
    	{
    		r: 14083,
    		f: 2.47,
    		l: "足場"
    	},
    	{
    		r: 14084,
    		f: 2.47,
    		l: "見せつける"
    	},
    	{
    		r: 14085,
    		f: 2.47,
    		l: "下宿"
    	},
    	{
    		r: 14086,
    		f: 2.47,
    		l: "その頃"
    	},
    	{
    		r: 14087,
    		f: 2.47,
    		l: "骨董"
    	},
    	{
    		r: 14088,
    		f: 2.47,
    		l: "ドーナツ"
    	},
    	{
    		r: 14089,
    		f: 2.47,
    		l: "不景気"
    	},
    	{
    		r: 14090,
    		f: 2.47,
    		l: "塁"
    	},
    	{
    		r: 14091,
    		f: 2.47,
    		l: "緑地"
    	},
    	{
    		r: 14092,
    		f: 2.47,
    		l: "かりる"
    	},
    	{
    		r: 14093,
    		f: 2.47,
    		l: "こまかい"
    	},
    	{
    		r: 14094,
    		f: 2.47,
    		l: "祖"
    	},
    	{
    		r: 14095,
    		f: 2.47,
    		l: "實"
    	},
    	{
    		r: 14096,
    		f: 2.47,
    		l: "バイアス"
    	},
    	{
    		r: 14097,
    		f: 2.47,
    		l: "大平"
    	},
    	{
    		r: 14098,
    		f: 2.47,
    		l: "月給"
    	},
    	{
    		r: 14099,
    		f: 2.47,
    		l: "併設"
    	},
    	{
    		r: 14100,
    		f: 2.47,
    		l: "ハワイアン"
    	},
    	{
    		r: 14101,
    		f: 2.47,
    		l: "はれる"
    	},
    	{
    		r: 14102,
    		f: 2.47,
    		l: "レジスト"
    	},
    	{
    		r: 14103,
    		f: 2.47,
    		l: "転生"
    	},
    	{
    		r: 14104,
    		f: 2.47,
    		l: "テクスト"
    	},
    	{
    		r: 14105,
    		f: 2.47,
    		l: "ナベ"
    	},
    	{
    		r: 14106,
    		f: 2.47,
    		l: "レベルアップ"
    	},
    	{
    		r: 14107,
    		f: 2.47,
    		l: "伝言"
    	},
    	{
    		r: 14108,
    		f: 2.47,
    		l: "しきりに"
    	},
    	{
    		r: 14109,
    		f: 2.47,
    		l: "所存"
    	},
    	{
    		r: 14110,
    		f: 2.47,
    		l: "配管"
    	},
    	{
    		r: 14111,
    		f: 2.47,
    		l: "雀"
    	},
    	{
    		r: 14112,
    		f: 2.47,
    		l: "赤松"
    	},
    	{
    		r: 14113,
    		f: 2.47,
    		l: "聖職"
    	},
    	{
    		r: 14114,
    		f: 2.46,
    		l: "和む"
    	},
    	{
    		r: 14115,
    		f: 2.46,
    		l: "危惧す"
    	},
    	{
    		r: 14116,
    		f: 2.46,
    		l: "円盤"
    	},
    	{
    		r: 14117,
    		f: 2.46,
    		l: "わらしべ"
    	},
    	{
    		r: 14118,
    		f: 2.46,
    		l: "毒性"
    	},
    	{
    		r: 14119,
    		f: 2.46,
    		l: "絶好調"
    	},
    	{
    		r: 14120,
    		f: 2.46,
    		l: "立花"
    	},
    	{
    		r: 14121,
    		f: 2.46,
    		l: "道端"
    	},
    	{
    		r: 14122,
    		f: 2.46,
    		l: "堪える"
    	},
    	{
    		r: 14123,
    		f: 2.46,
    		l: "スペル"
    	},
    	{
    		r: 14124,
    		f: 2.46,
    		l: "春日"
    	},
    	{
    		r: 14125,
    		f: 2.46,
    		l: "浴びせる"
    	},
    	{
    		r: 14126,
    		f: 2.46,
    		l: "隔てる"
    	},
    	{
    		r: 14127,
    		f: 2.46,
    		l: "敏"
    	},
    	{
    		r: 14128,
    		f: 2.46,
    		l: "専門医"
    	},
    	{
    		r: 14129,
    		f: 2.46,
    		l: "窮屈"
    	},
    	{
    		r: 14130,
    		f: 2.46,
    		l: "種子"
    	},
    	{
    		r: 14131,
    		f: 2.46,
    		l: "頻発"
    	},
    	{
    		r: 14132,
    		f: 2.46,
    		l: "金星"
    	},
    	{
    		r: 14133,
    		f: 2.46,
    		l: "生死"
    	},
    	{
    		r: 14134,
    		f: 2.46,
    		l: "略奪"
    	},
    	{
    		r: 14135,
    		f: 2.46,
    		l: "鴨"
    	},
    	{
    		r: 14136,
    		f: 2.46,
    		l: "中心地"
    	},
    	{
    		r: 14137,
    		f: 2.46,
    		l: "同種"
    	},
    	{
    		r: 14138,
    		f: 2.46,
    		l: "刺繍"
    	},
    	{
    		r: 14139,
    		f: 2.46,
    		l: "別人"
    	},
    	{
    		r: 14140,
    		f: 2.45,
    		l: "綿密"
    	},
    	{
    		r: 14141,
    		f: 2.45,
    		l: "クーデター"
    	},
    	{
    		r: 14142,
    		f: 2.45,
    		l: "行儀"
    	},
    	{
    		r: 14143,
    		f: 2.45,
    		l: "月収"
    	},
    	{
    		r: 14144,
    		f: 2.45,
    		l: "機関車"
    	},
    	{
    		r: 14145,
    		f: 2.45,
    		l: "悟り"
    	},
    	{
    		r: 14146,
    		f: 2.45,
    		l: "コンペ"
    	},
    	{
    		r: 14147,
    		f: 2.45,
    		l: "みそ"
    	},
    	{
    		r: 14148,
    		f: 2.45,
    		l: "鉄人"
    	},
    	{
    		r: 14149,
    		f: 2.45,
    		l: "ヌード"
    	},
    	{
    		r: 14150,
    		f: 2.45,
    		l: "憂慮"
    	},
    	{
    		r: 14151,
    		f: 2.45,
    		l: "抹茶"
    	},
    	{
    		r: 14152,
    		f: 2.45,
    		l: "強迫"
    	},
    	{
    		r: 14153,
    		f: 2.45,
    		l: "重厚"
    	},
    	{
    		r: 14154,
    		f: 2.45,
    		l: "増減"
    	},
    	{
    		r: 14155,
    		f: 2.45,
    		l: "たいして"
    	},
    	{
    		r: 14156,
    		f: 2.45,
    		l: "彫る"
    	},
    	{
    		r: 14157,
    		f: 2.45,
    		l: "不起訴"
    	},
    	{
    		r: 14158,
    		f: 2.45,
    		l: "印鑑"
    	},
    	{
    		r: 14159,
    		f: 2.45,
    		l: "ウマ"
    	},
    	{
    		r: 14160,
    		f: 2.45,
    		l: "スナック"
    	},
    	{
    		r: 14161,
    		f: 2.45,
    		l: "ボールペン"
    	},
    	{
    		r: 14162,
    		f: 2.45,
    		l: "突き進む"
    	},
    	{
    		r: 14163,
    		f: 2.45,
    		l: "受け取れる"
    	},
    	{
    		r: 14164,
    		f: 2.45,
    		l: "伊達"
    	},
    	{
    		r: 14165,
    		f: 2.45,
    		l: "悪役"
    	},
    	{
    		r: 14166,
    		f: 2.45,
    		l: "雅子"
    	},
    	{
    		r: 14167,
    		f: 2.45,
    		l: "セルビア"
    	},
    	{
    		r: 14168,
    		f: 2.45,
    		l: "うんと"
    	},
    	{
    		r: 14169,
    		f: 2.45,
    		l: "ノーマル"
    	},
    	{
    		r: 14170,
    		f: 2.45,
    		l: "単調"
    	},
    	{
    		r: 14171,
    		f: 2.45,
    		l: "トロイ"
    	},
    	{
    		r: 14172,
    		f: 2.45,
    		l: "トリー"
    	},
    	{
    		r: 14173,
    		f: 2.45,
    		l: "鳥居"
    	},
    	{
    		r: 14174,
    		f: 2.45,
    		l: "へー"
    	},
    	{
    		r: 14175,
    		f: 2.45,
    		l: "図解"
    	},
    	{
    		r: 14176,
    		f: 2.45,
    		l: "こまめ"
    	},
    	{
    		r: 14177,
    		f: 2.45,
    		l: "源氏"
    	},
    	{
    		r: 14178,
    		f: 2.45,
    		l: "未然"
    	},
    	{
    		r: 14179,
    		f: 2.45,
    		l: "養育"
    	},
    	{
    		r: 14180,
    		f: 2.45,
    		l: "善い"
    	},
    	{
    		r: 14181,
    		f: 2.45,
    		l: "率先"
    	},
    	{
    		r: 14182,
    		f: 2.45,
    		l: "つぎ込む"
    	},
    	{
    		r: 14183,
    		f: 2.45,
    		l: "要綱"
    	},
    	{
    		r: 14184,
    		f: 2.45,
    		l: "疾走"
    	},
    	{
    		r: 14185,
    		f: 2.45,
    		l: "自粛"
    	},
    	{
    		r: 14186,
    		f: 2.45,
    		l: "全滅"
    	},
    	{
    		r: 14187,
    		f: 2.45,
    		l: "電機"
    	},
    	{
    		r: 14188,
    		f: 2.45,
    		l: "見聞"
    	},
    	{
    		r: 14189,
    		f: 2.45,
    		l: "有難い"
    	},
    	{
    		r: 14190,
    		f: 2.45,
    		l: "豪雨"
    	},
    	{
    		r: 14191,
    		f: 2.45,
    		l: "カミさん"
    	},
    	{
    		r: 14192,
    		f: 2.45,
    		l: "縄"
    	},
    	{
    		r: 14193,
    		f: 2.45,
    		l: "心得"
    	},
    	{
    		r: 14194,
    		f: 2.44,
    		l: "待ち受ける"
    	},
    	{
    		r: 14195,
    		f: 2.44,
    		l: "緑茶"
    	},
    	{
    		r: 14196,
    		f: 2.44,
    		l: "松原"
    	},
    	{
    		r: 14197,
    		f: 2.44,
    		l: "トランプ"
    	},
    	{
    		r: 14198,
    		f: 2.44,
    		l: "μ"
    	},
    	{
    		r: 14199,
    		f: 2.44,
    		l: "そのうえ"
    	},
    	{
    		r: 14200,
    		f: 2.44,
    		l: "大佐"
    	},
    	{
    		r: 14201,
    		f: 2.44,
    		l: "梱包"
    	},
    	{
    		r: 14202,
    		f: 2.44,
    		l: "幹線"
    	},
    	{
    		r: 14203,
    		f: 2.44,
    		l: "恵子"
    	},
    	{
    		r: 14204,
    		f: 2.44,
    		l: "蜜"
    	},
    	{
    		r: 14205,
    		f: 2.44,
    		l: "ラテン語"
    	},
    	{
    		r: 14206,
    		f: 2.44,
    		l: "県議会"
    	},
    	{
    		r: 14207,
    		f: 2.44,
    		l: "フルート"
    	},
    	{
    		r: 14208,
    		f: 2.44,
    		l: "笑わせる"
    	},
    	{
    		r: 14209,
    		f: 2.44,
    		l: "読み物"
    	},
    	{
    		r: 14210,
    		f: 2.44,
    		l: "木星"
    	},
    	{
    		r: 14211,
    		f: 2.44,
    		l: "宋"
    	},
    	{
    		r: 14212,
    		f: 2.44,
    		l: "衛"
    	},
    	{
    		r: 14213,
    		f: 2.44,
    		l: "かくして"
    	},
    	{
    		r: 14214,
    		f: 2.44,
    		l: "顔つき"
    	},
    	{
    		r: 14215,
    		f: 2.44,
    		l: "プッシュ"
    	},
    	{
    		r: 14216,
    		f: 2.44,
    		l: "頭上"
    	},
    	{
    		r: 14217,
    		f: 2.44,
    		l: "成り行き"
    	},
    	{
    		r: 14218,
    		f: 2.44,
    		l: "手記"
    	},
    	{
    		r: 14219,
    		f: 2.44,
    		l: "エフェクト"
    	},
    	{
    		r: 14220,
    		f: 2.44,
    		l: "連覇"
    	},
    	{
    		r: 14221,
    		f: 2.44,
    		l: "私学"
    	},
    	{
    		r: 14222,
    		f: 2.44,
    		l: "三田"
    	},
    	{
    		r: 14223,
    		f: 2.44,
    		l: "埃"
    	},
    	{
    		r: 14224,
    		f: 2.44,
    		l: "グレイ"
    	},
    	{
    		r: 14225,
    		f: 2.44,
    		l: "エドワード"
    	},
    	{
    		r: 14226,
    		f: 2.44,
    		l: "対称"
    	},
    	{
    		r: 14227,
    		f: 2.43,
    		l: "資"
    	},
    	{
    		r: 14228,
    		f: 2.43,
    		l: "疎い"
    	},
    	{
    		r: 14229,
    		f: 2.43,
    		l: "痒い"
    	},
    	{
    		r: 14230,
    		f: 2.43,
    		l: "ヤンキー"
    	},
    	{
    		r: 14231,
    		f: 2.43,
    		l: "スマ"
    	},
    	{
    		r: 14232,
    		f: 2.43,
    		l: "パイオニア"
    	},
    	{
    		r: 14233,
    		f: 2.43,
    		l: "きち"
    	},
    	{
    		r: 14234,
    		f: 2.43,
    		l: "ピュア"
    	},
    	{
    		r: 14235,
    		f: 2.43,
    		l: "オートバイ"
    	},
    	{
    		r: 14236,
    		f: 2.43,
    		l: "編む"
    	},
    	{
    		r: 14237,
    		f: 2.43,
    		l: "パワーアップ"
    	},
    	{
    		r: 14238,
    		f: 2.43,
    		l: "当座"
    	},
    	{
    		r: 14239,
    		f: 2.43,
    		l: "凌"
    	},
    	{
    		r: 14240,
    		f: 2.43,
    		l: "鳴き声"
    	},
    	{
    		r: 14241,
    		f: 2.43,
    		l: "訳注"
    	},
    	{
    		r: 14242,
    		f: 2.43,
    		l: "軽井沢"
    	},
    	{
    		r: 14243,
    		f: 2.43,
    		l: "出来高"
    	},
    	{
    		r: 14244,
    		f: 2.43,
    		l: "風刺"
    	},
    	{
    		r: 14245,
    		f: 2.43,
    		l: "しだい"
    	},
    	{
    		r: 14246,
    		f: 2.43,
    		l: "回顧"
    	},
    	{
    		r: 14247,
    		f: 2.43,
    		l: "炎症"
    	},
    	{
    		r: 14248,
    		f: 2.43,
    		l: "等級"
    	},
    	{
    		r: 14249,
    		f: 2.43,
    		l: "おと"
    	},
    	{
    		r: 14250,
    		f: 2.43,
    		l: "りょう"
    	},
    	{
    		r: 14251,
    		f: 2.43,
    		l: "小樽"
    	},
    	{
    		r: 14252,
    		f: 2.43,
    		l: "カウンタ"
    	},
    	{
    		r: 14253,
    		f: 2.43,
    		l: "築"
    	},
    	{
    		r: 14254,
    		f: 2.43,
    		l: "マンゴー"
    	},
    	{
    		r: 14255,
    		f: 2.43,
    		l: "岩崎"
    	},
    	{
    		r: 14256,
    		f: 2.43,
    		l: "精通"
    	},
    	{
    		r: 14257,
    		f: 2.43,
    		l: "幼稚"
    	},
    	{
    		r: 14258,
    		f: 2.43,
    		l: "善悪"
    	},
    	{
    		r: 14259,
    		f: 2.43,
    		l: "盗作"
    	},
    	{
    		r: 14260,
    		f: 2.43,
    		l: "係わる"
    	},
    	{
    		r: 14261,
    		f: 2.43,
    		l: "かぶせる"
    	},
    	{
    		r: 14262,
    		f: 2.43,
    		l: "同上"
    	},
    	{
    		r: 14263,
    		f: 2.43,
    		l: "解す"
    	},
    	{
    		r: 14264,
    		f: 2.43,
    		l: "流れ込む"
    	},
    	{
    		r: 14265,
    		f: 2.43,
    		l: "遅らせる"
    	},
    	{
    		r: 14266,
    		f: 2.43,
    		l: "絹"
    	},
    	{
    		r: 14267,
    		f: 2.43,
    		l: "カーソル"
    	},
    	{
    		r: 14268,
    		f: 2.43,
    		l: "恨む"
    	},
    	{
    		r: 14269,
    		f: 2.43,
    		l: "根元"
    	},
    	{
    		r: 14270,
    		f: 2.43,
    		l: "一泊"
    	},
    	{
    		r: 14271,
    		f: 2.43,
    		l: "ＩＤ"
    	},
    	{
    		r: 14272,
    		f: 2.43,
    		l: "芽生える"
    	},
    	{
    		r: 14273,
    		f: 2.43,
    		l: "しゅう"
    	},
    	{
    		r: 14274,
    		f: 2.43,
    		l: "頼もしい"
    	},
    	{
    		r: 14275,
    		f: 2.43,
    		l: "敷居"
    	},
    	{
    		r: 14276,
    		f: 2.43,
    		l: "おさえる"
    	},
    	{
    		r: 14277,
    		f: 2.42,
    		l: "バネ"
    	},
    	{
    		r: 14278,
    		f: 2.42,
    		l: "専属"
    	},
    	{
    		r: 14279,
    		f: 2.42,
    		l: "書名"
    	},
    	{
    		r: 14280,
    		f: 2.42,
    		l: "新約"
    	},
    	{
    		r: 14281,
    		f: 2.42,
    		l: "終り"
    	},
    	{
    		r: 14282,
    		f: 2.42,
    		l: "タック"
    	},
    	{
    		r: 14283,
    		f: 2.42,
    		l: "散乱"
    	},
    	{
    		r: 14284,
    		f: 2.42,
    		l: "野蛮"
    	},
    	{
    		r: 14285,
    		f: 2.42,
    		l: "断面"
    	},
    	{
    		r: 14286,
    		f: 2.42,
    		l: "しない"
    	},
    	{
    		r: 14287,
    		f: 2.42,
    		l: "あっせん"
    	},
    	{
    		r: 14288,
    		f: 2.42,
    		l: "ベール"
    	},
    	{
    		r: 14289,
    		f: 2.42,
    		l: "館内"
    	},
    	{
    		r: 14290,
    		f: 2.42,
    		l: "つくり出す"
    	},
    	{
    		r: 14291,
    		f: 2.42,
    		l: "ＢＧＭ"
    	},
    	{
    		r: 14292,
    		f: 2.42,
    		l: "つかまえる"
    	},
    	{
    		r: 14293,
    		f: 2.42,
    		l: "請け負う"
    	},
    	{
    		r: 14294,
    		f: 2.42,
    		l: "潔い"
    	},
    	{
    		r: 14295,
    		f: 2.42,
    		l: "ダブる"
    	},
    	{
    		r: 14296,
    		f: 2.42,
    		l: "プロパガンダ"
    	},
    	{
    		r: 14297,
    		f: 2.42,
    		l: "おねがい"
    	},
    	{
    		r: 14298,
    		f: 2.42,
    		l: "修得"
    	},
    	{
    		r: 14299,
    		f: 2.42,
    		l: "この方"
    	},
    	{
    		r: 14300,
    		f: 2.42,
    		l: "萬"
    	},
    	{
    		r: 14301,
    		f: 2.42,
    		l: "貞"
    	},
    	{
    		r: 14302,
    		f: 2.42,
    		l: "壮絶"
    	},
    	{
    		r: 14303,
    		f: 2.42,
    		l: "リスナー"
    	},
    	{
    		r: 14304,
    		f: 2.42,
    		l: "体裁"
    	},
    	{
    		r: 14305,
    		f: 2.42,
    		l: "痴漢"
    	},
    	{
    		r: 14306,
    		f: 2.42,
    		l: "レンガ"
    	},
    	{
    		r: 14307,
    		f: 2.42,
    		l: "陶芸"
    	},
    	{
    		r: 14308,
    		f: 2.42,
    		l: "因縁"
    	},
    	{
    		r: 14309,
    		f: 2.42,
    		l: "急上昇"
    	},
    	{
    		r: 14310,
    		f: 2.41,
    		l: "病理"
    	},
    	{
    		r: 14311,
    		f: 2.41,
    		l: "スティーブン"
    	},
    	{
    		r: 14312,
    		f: 2.41,
    		l: "安楽"
    	},
    	{
    		r: 14313,
    		f: 2.41,
    		l: "満腹"
    	},
    	{
    		r: 14314,
    		f: 2.41,
    		l: "号泣"
    	},
    	{
    		r: 14315,
    		f: 2.41,
    		l: "別紙"
    	},
    	{
    		r: 14316,
    		f: 2.41,
    		l: "和声"
    	},
    	{
    		r: 14317,
    		f: 2.41,
    		l: "唖然"
    	},
    	{
    		r: 14318,
    		f: 2.41,
    		l: "ちぎる"
    	},
    	{
    		r: 14319,
    		f: 2.41,
    		l: "ダウ"
    	},
    	{
    		r: 14320,
    		f: 2.41,
    		l: "りえ"
    	},
    	{
    		r: 14321,
    		f: 2.41,
    		l: "悪人"
    	},
    	{
    		r: 14322,
    		f: 2.41,
    		l: "花屋"
    	},
    	{
    		r: 14323,
    		f: 2.41,
    		l: "読み取れる"
    	},
    	{
    		r: 14324,
    		f: 2.41,
    		l: "シリアス"
    	},
    	{
    		r: 14325,
    		f: 2.41,
    		l: "河原"
    	},
    	{
    		r: 14326,
    		f: 2.41,
    		l: "壁面"
    	},
    	{
    		r: 14327,
    		f: 2.41,
    		l: "コリン"
    	},
    	{
    		r: 14328,
    		f: 2.41,
    		l: "唸る"
    	},
    	{
    		r: 14329,
    		f: 2.41,
    		l: "仙"
    	},
    	{
    		r: 14330,
    		f: 2.41,
    		l: "弁理"
    	},
    	{
    		r: 14331,
    		f: 2.41,
    		l: "辞"
    	},
    	{
    		r: 14332,
    		f: 2.41,
    		l: "当番"
    	},
    	{
    		r: 14333,
    		f: 2.41,
    		l: "停める"
    	},
    	{
    		r: 14334,
    		f: 2.41,
    		l: "岬"
    	},
    	{
    		r: 14335,
    		f: 2.41,
    		l: "偽善"
    	},
    	{
    		r: 14336,
    		f: 2.41,
    		l: "交響楽"
    	},
    	{
    		r: 14337,
    		f: 2.41,
    		l: "ミナ"
    	},
    	{
    		r: 14338,
    		f: 2.41,
    		l: "エンジェル"
    	},
    	{
    		r: 14339,
    		f: 2.41,
    		l: "特約"
    	},
    	{
    		r: 14340,
    		f: 2.41,
    		l: "竿"
    	},
    	{
    		r: 14341,
    		f: 2.41,
    		l: "ティム"
    	},
    	{
    		r: 14342,
    		f: 2.41,
    		l: "ブドウ"
    	},
    	{
    		r: 14343,
    		f: 2.41,
    		l: "慰霊"
    	},
    	{
    		r: 14344,
    		f: 2.41,
    		l: "櫻井"
    	},
    	{
    		r: 14345,
    		f: 2.41,
    		l: "モニタリング"
    	},
    	{
    		r: 14346,
    		f: 2.41,
    		l: "爺"
    	},
    	{
    		r: 14347,
    		f: 2.41,
    		l: "優越"
    	},
    	{
    		r: 14348,
    		f: 2.41,
    		l: "ベーコン"
    	},
    	{
    		r: 14349,
    		f: 2.41,
    		l: "ファイト"
    	},
    	{
    		r: 14350,
    		f: 2.41,
    		l: "数理"
    	},
    	{
    		r: 14351,
    		f: 2.41,
    		l: "ヤミ"
    	},
    	{
    		r: 14352,
    		f: 2.41,
    		l: "慈善"
    	},
    	{
    		r: 14353,
    		f: 2.41,
    		l: "羽根"
    	},
    	{
    		r: 14354,
    		f: 2.41,
    		l: "会派"
    	},
    	{
    		r: 14355,
    		f: 2.4,
    		l: "絡み合う"
    	},
    	{
    		r: 14356,
    		f: 2.4,
    		l: "山岡"
    	},
    	{
    		r: 14357,
    		f: 2.4,
    		l: "博覧"
    	},
    	{
    		r: 14358,
    		f: 2.4,
    		l: "モル"
    	},
    	{
    		r: 14359,
    		f: 2.4,
    		l: "落合"
    	},
    	{
    		r: 14360,
    		f: 2.4,
    		l: "共催"
    	},
    	{
    		r: 14361,
    		f: 2.4,
    		l: "でき"
    	},
    	{
    		r: 14362,
    		f: 2.4,
    		l: "ゆるい"
    	},
    	{
    		r: 14363,
    		f: 2.4,
    		l: "憲"
    	},
    	{
    		r: 14364,
    		f: 2.4,
    		l: "ダイジェスト"
    	},
    	{
    		r: 14365,
    		f: 2.4,
    		l: "思い当たる"
    	},
    	{
    		r: 14366,
    		f: 2.4,
    		l: "炸裂"
    	},
    	{
    		r: 14367,
    		f: 2.4,
    		l: "ながめる"
    	},
    	{
    		r: 14368,
    		f: 2.4,
    		l: "そらす"
    	},
    	{
    		r: 14369,
    		f: 2.4,
    		l: "範"
    	},
    	{
    		r: 14370,
    		f: 2.4,
    		l: "内需"
    	},
    	{
    		r: 14371,
    		f: 2.4,
    		l: "蒸す"
    	},
    	{
    		r: 14372,
    		f: 2.4,
    		l: "水路"
    	},
    	{
    		r: 14373,
    		f: 2.4,
    		l: "鎧"
    	},
    	{
    		r: 14374,
    		f: 2.4,
    		l: "焼き鳥"
    	},
    	{
    		r: 14375,
    		f: 2.4,
    		l: "トレイ"
    	},
    	{
    		r: 14376,
    		f: 2.4,
    		l: "生き残り"
    	},
    	{
    		r: 14377,
    		f: 2.4,
    		l: "遊戯"
    	},
    	{
    		r: 14378,
    		f: 2.4,
    		l: "既定"
    	},
    	{
    		r: 14379,
    		f: 2.4,
    		l: "申し述べる"
    	},
    	{
    		r: 14380,
    		f: 2.4,
    		l: "台北"
    	},
    	{
    		r: 14381,
    		f: 2.4,
    		l: "由紀夫"
    	},
    	{
    		r: 14382,
    		f: 2.4,
    		l: "ルーマニア"
    	},
    	{
    		r: 14383,
    		f: 2.4,
    		l: "フランチャイズ"
    	},
    	{
    		r: 14384,
    		f: 2.4,
    		l: "協賛"
    	},
    	{
    		r: 14385,
    		f: 2.39,
    		l: "自分勝手"
    	},
    	{
    		r: 14386,
    		f: 2.39,
    		l: "うさ"
    	},
    	{
    		r: 14387,
    		f: 2.39,
    		l: "与る"
    	},
    	{
    		r: 14388,
    		f: 2.39,
    		l: "ジーニョ"
    	},
    	{
    		r: 14389,
    		f: 2.39,
    		l: "思案"
    	},
    	{
    		r: 14390,
    		f: 2.39,
    		l: "南東"
    	},
    	{
    		r: 14391,
    		f: 2.39,
    		l: "ユニオン"
    	},
    	{
    		r: 14392,
    		f: 2.39,
    		l: "もめる"
    	},
    	{
    		r: 14393,
    		f: 2.39,
    		l: "廃墟"
    	},
    	{
    		r: 14394,
    		f: 2.39,
    		l: "チーフ"
    	},
    	{
    		r: 14395,
    		f: 2.39,
    		l: "不毛"
    	},
    	{
    		r: 14396,
    		f: 2.39,
    		l: "米兵"
    	},
    	{
    		r: 14397,
    		f: 2.39,
    		l: "先導"
    	},
    	{
    		r: 14398,
    		f: 2.39,
    		l: "砦"
    	},
    	{
    		r: 14399,
    		f: 2.39,
    		l: "ひで"
    	},
    	{
    		r: 14400,
    		f: 2.39,
    		l: "順に"
    	},
    	{
    		r: 14401,
    		f: 2.39,
    		l: "処方箋"
    	},
    	{
    		r: 14402,
    		f: 2.39,
    		l: "査察"
    	},
    	{
    		r: 14403,
    		f: 2.39,
    		l: "自決"
    	},
    	{
    		r: 14404,
    		f: 2.39,
    		l: "年月日"
    	},
    	{
    		r: 14405,
    		f: 2.39,
    		l: "飢餓"
    	},
    	{
    		r: 14406,
    		f: 2.39,
    		l: "睨む"
    	},
    	{
    		r: 14407,
    		f: 2.39,
    		l: "どきどき"
    	},
    	{
    		r: 14408,
    		f: 2.39,
    		l: "出雲"
    	},
    	{
    		r: 14409,
    		f: 2.39,
    		l: "経団連"
    	},
    	{
    		r: 14410,
    		f: 2.39,
    		l: "きのこ"
    	},
    	{
    		r: 14411,
    		f: 2.39,
    		l: "錬金術"
    	},
    	{
    		r: 14412,
    		f: 2.39,
    		l: "さまよう"
    	},
    	{
    		r: 14413,
    		f: 2.39,
    		l: "いとこ"
    	},
    	{
    		r: 14414,
    		f: 2.39,
    		l: "復刊"
    	},
    	{
    		r: 14415,
    		f: 2.39,
    		l: "威嚇"
    	},
    	{
    		r: 14416,
    		f: 2.39,
    		l: "握り"
    	},
    	{
    		r: 14417,
    		f: 2.39,
    		l: "滅亡"
    	},
    	{
    		r: 14418,
    		f: 2.39,
    		l: "外野"
    	},
    	{
    		r: 14419,
    		f: 2.39,
    		l: "６つ"
    	},
    	{
    		r: 14420,
    		f: 2.39,
    		l: "歓喜"
    	},
    	{
    		r: 14421,
    		f: 2.39,
    		l: "手話"
    	},
    	{
    		r: 14422,
    		f: 2.39,
    		l: "全編"
    	},
    	{
    		r: 14423,
    		f: 2.39,
    		l: "控え"
    	},
    	{
    		r: 14424,
    		f: 2.39,
    		l: "サントラ"
    	},
    	{
    		r: 14425,
    		f: 2.39,
    		l: "海面"
    	},
    	{
    		r: 14426,
    		f: 2.39,
    		l: "不変"
    	},
    	{
    		r: 14427,
    		f: 2.39,
    		l: "ペイント"
    	},
    	{
    		r: 14428,
    		f: 2.39,
    		l: "製図"
    	},
    	{
    		r: 14429,
    		f: 2.39,
    		l: "ノミネート"
    	},
    	{
    		r: 14430,
    		f: 2.38,
    		l: "ペダル"
    	},
    	{
    		r: 14431,
    		f: 2.38,
    		l: "上質"
    	},
    	{
    		r: 14432,
    		f: 2.38,
    		l: "連なる"
    	},
    	{
    		r: 14433,
    		f: 2.38,
    		l: "本館"
    	},
    	{
    		r: 14434,
    		f: 2.38,
    		l: "雌"
    	},
    	{
    		r: 14435,
    		f: 2.38,
    		l: "バク"
    	},
    	{
    		r: 14436,
    		f: 2.38,
    		l: "東京タワー"
    	},
    	{
    		r: 14437,
    		f: 2.38,
    		l: "人参"
    	},
    	{
    		r: 14438,
    		f: 2.38,
    		l: "小中学校"
    	},
    	{
    		r: 14439,
    		f: 2.38,
    		l: "ニコラ"
    	},
    	{
    		r: 14440,
    		f: 2.38,
    		l: "けんか"
    	},
    	{
    		r: 14441,
    		f: 2.38,
    		l: "ハーモニー"
    	},
    	{
    		r: 14442,
    		f: 2.38,
    		l: "育毛"
    	},
    	{
    		r: 14443,
    		f: 2.38,
    		l: "論説"
    	},
    	{
    		r: 14444,
    		f: 2.38,
    		l: "色気"
    	},
    	{
    		r: 14445,
    		f: 2.38,
    		l: "笑い声"
    	},
    	{
    		r: 14446,
    		f: 2.38,
    		l: "意地悪"
    	},
    	{
    		r: 14447,
    		f: 2.38,
    		l: "素顔"
    	},
    	{
    		r: 14448,
    		f: 2.38,
    		l: "目覚まし"
    	},
    	{
    		r: 14449,
    		f: 2.38,
    		l: "明石"
    	},
    	{
    		r: 14450,
    		f: 2.38,
    		l: "想起"
    	},
    	{
    		r: 14451,
    		f: 2.38,
    		l: "菅野"
    	},
    	{
    		r: 14452,
    		f: 2.38,
    		l: "前項"
    	},
    	{
    		r: 14453,
    		f: 2.38,
    		l: "南国"
    	},
    	{
    		r: 14454,
    		f: 2.38,
    		l: "火葬"
    	},
    	{
    		r: 14455,
    		f: 2.38,
    		l: "ポルシェ"
    	},
    	{
    		r: 14456,
    		f: 2.38,
    		l: "加筆"
    	},
    	{
    		r: 14457,
    		f: 2.38,
    		l: "鉱業"
    	},
    	{
    		r: 14458,
    		f: 2.38,
    		l: "後遺症"
    	},
    	{
    		r: 14459,
    		f: 2.37,
    		l: "フロイト"
    	},
    	{
    		r: 14460,
    		f: 2.37,
    		l: "投球"
    	},
    	{
    		r: 14461,
    		f: 2.37,
    		l: "寄贈"
    	},
    	{
    		r: 14462,
    		f: 2.37,
    		l: "西暦"
    	},
    	{
    		r: 14463,
    		f: 2.37,
    		l: "砕く"
    	},
    	{
    		r: 14464,
    		f: 2.37,
    		l: "たたかう"
    	},
    	{
    		r: 14465,
    		f: 2.37,
    		l: "グローバリゼーション"
    	},
    	{
    		r: 14466,
    		f: 2.37,
    		l: "錬る"
    	},
    	{
    		r: 14467,
    		f: 2.37,
    		l: "私生活"
    	},
    	{
    		r: 14468,
    		f: 2.37,
    		l: "レタス"
    	},
    	{
    		r: 14469,
    		f: 2.37,
    		l: "車輪"
    	},
    	{
    		r: 14470,
    		f: 2.37,
    		l: "岩国"
    	},
    	{
    		r: 14471,
    		f: 2.37,
    		l: "立ち直る"
    	},
    	{
    		r: 14472,
    		f: 2.37,
    		l: "まちがい"
    	},
    	{
    		r: 14473,
    		f: 2.37,
    		l: "静香"
    	},
    	{
    		r: 14474,
    		f: 2.37,
    		l: "フェンス"
    	},
    	{
    		r: 14475,
    		f: 2.37,
    		l: "ノブ"
    	},
    	{
    		r: 14476,
    		f: 2.37,
    		l: "匠"
    	},
    	{
    		r: 14477,
    		f: 2.37,
    		l: "積雪"
    	},
    	{
    		r: 14478,
    		f: 2.37,
    		l: "電電"
    	},
    	{
    		r: 14479,
    		f: 2.37,
    		l: "特製"
    	},
    	{
    		r: 14480,
    		f: 2.37,
    		l: "たどりつく"
    	},
    	{
    		r: 14481,
    		f: 2.37,
    		l: "一撃"
    	},
    	{
    		r: 14482,
    		f: 2.37,
    		l: "体現"
    	},
    	{
    		r: 14483,
    		f: 2.37,
    		l: "獲物"
    	},
    	{
    		r: 14484,
    		f: 2.37,
    		l: "慶應義塾"
    	},
    	{
    		r: 14485,
    		f: 2.37,
    		l: "定住"
    	},
    	{
    		r: 14486,
    		f: 2.37,
    		l: "リーチ"
    	},
    	{
    		r: 14487,
    		f: 2.37,
    		l: "ミソ"
    	},
    	{
    		r: 14488,
    		f: 2.37,
    		l: "ＢＢＣ"
    	},
    	{
    		r: 14489,
    		f: 2.37,
    		l: "手直し"
    	},
    	{
    		r: 14490,
    		f: 2.37,
    		l: "平常"
    	},
    	{
    		r: 14491,
    		f: 2.37,
    		l: "学童"
    	},
    	{
    		r: 14492,
    		f: 2.37,
    		l: "養"
    	},
    	{
    		r: 14493,
    		f: 2.37,
    		l: "化け"
    	},
    	{
    		r: 14494,
    		f: 2.37,
    		l: "ジャッジ"
    	},
    	{
    		r: 14495,
    		f: 2.37,
    		l: "モスク"
    	},
    	{
    		r: 14496,
    		f: 2.37,
    		l: "寝かせる"
    	},
    	{
    		r: 14497,
    		f: 2.37,
    		l: "カオス"
    	},
    	{
    		r: 14498,
    		f: 2.37,
    		l: "ピアス"
    	},
    	{
    		r: 14499,
    		f: 2.37,
    		l: "リュック"
    	},
    	{
    		r: 14500,
    		f: 2.37,
    		l: "中国共産党"
    	},
    	{
    		r: 14501,
    		f: 2.37,
    		l: "塚"
    	},
    	{
    		r: 14502,
    		f: 2.37,
    		l: "アジ"
    	},
    	{
    		r: 14503,
    		f: 2.36,
    		l: "杉本"
    	},
    	{
    		r: 14504,
    		f: 2.36,
    		l: "恐るべき"
    	},
    	{
    		r: 14505,
    		f: 2.36,
    		l: "デュアル"
    	},
    	{
    		r: 14506,
    		f: 2.36,
    		l: "精神病"
    	},
    	{
    		r: 14507,
    		f: 2.36,
    		l: "嗅ぐ"
    	},
    	{
    		r: 14508,
    		f: 2.36,
    		l: "初恋"
    	},
    	{
    		r: 14509,
    		f: 2.36,
    		l: "試料"
    	},
    	{
    		r: 14510,
    		f: 2.36,
    		l: "一昔"
    	},
    	{
    		r: 14511,
    		f: 2.36,
    		l: "繋げる"
    	},
    	{
    		r: 14512,
    		f: 2.36,
    		l: "おまかせ"
    	},
    	{
    		r: 14513,
    		f: 2.36,
    		l: "長調"
    	},
    	{
    		r: 14514,
    		f: 2.36,
    		l: "飛び降りる"
    	},
    	{
    		r: 14515,
    		f: 2.36,
    		l: "主審"
    	},
    	{
    		r: 14516,
    		f: 2.36,
    		l: "西海岸"
    	},
    	{
    		r: 14517,
    		f: 2.36,
    		l: "ニュースレター"
    	},
    	{
    		r: 14518,
    		f: 2.36,
    		l: "稲葉"
    	},
    	{
    		r: 14519,
    		f: 2.36,
    		l: "さめる"
    	},
    	{
    		r: 14520,
    		f: 2.36,
    		l: "あいかわらず"
    	},
    	{
    		r: 14521,
    		f: 2.36,
    		l: "二日酔い"
    	},
    	{
    		r: 14522,
    		f: 2.36,
    		l: "ドロ"
    	},
    	{
    		r: 14523,
    		f: 2.36,
    		l: "乱す"
    	},
    	{
    		r: 14524,
    		f: 2.36,
    		l: "÷"
    	},
    	{
    		r: 14525,
    		f: 2.36,
    		l: "タイガース"
    	},
    	{
    		r: 14526,
    		f: 2.36,
    		l: "サーカス"
    	},
    	{
    		r: 14527,
    		f: 2.36,
    		l: "公示"
    	},
    	{
    		r: 14528,
    		f: 2.36,
    		l: "客室"
    	},
    	{
    		r: 14529,
    		f: 2.36,
    		l: "決めつける"
    	},
    	{
    		r: 14530,
    		f: 2.36,
    		l: "救命"
    	},
    	{
    		r: 14531,
    		f: 2.36,
    		l: "結び付ける"
    	},
    	{
    		r: 14532,
    		f: 2.36,
    		l: "退去"
    	},
    	{
    		r: 14533,
    		f: 2.36,
    		l: "人名"
    	},
    	{
    		r: 14534,
    		f: 2.36,
    		l: "思索"
    	},
    	{
    		r: 14535,
    		f: 2.36,
    		l: "税別"
    	},
    	{
    		r: 14536,
    		f: 2.36,
    		l: "中央アジア"
    	},
    	{
    		r: 14537,
    		f: 2.36,
    		l: "漁"
    	},
    	{
    		r: 14538,
    		f: 2.36,
    		l: "則る"
    	},
    	{
    		r: 14539,
    		f: 2.36,
    		l: "逆行"
    	},
    	{
    		r: 14540,
    		f: 2.36,
    		l: "貸"
    	},
    	{
    		r: 14541,
    		f: 2.36,
    		l: "低温"
    	},
    	{
    		r: 14542,
    		f: 2.36,
    		l: "やり直し"
    	},
    	{
    		r: 14543,
    		f: 2.36,
    		l: "溶接"
    	},
    	{
    		r: 14544,
    		f: 2.36,
    		l: "特段"
    	},
    	{
    		r: 14545,
    		f: 2.36,
    		l: "ふじ"
    	},
    	{
    		r: 14546,
    		f: 2.36,
    		l: "浴室"
    	},
    	{
    		r: 14547,
    		f: 2.36,
    		l: "山積み"
    	},
    	{
    		r: 14548,
    		f: 2.36,
    		l: "上乗せ"
    	},
    	{
    		r: 14549,
    		f: 2.35,
    		l: "ＳＳ"
    	},
    	{
    		r: 14550,
    		f: 2.35,
    		l: "サイレン"
    	},
    	{
    		r: 14551,
    		f: 2.35,
    		l: "品格"
    	},
    	{
    		r: 14552,
    		f: 2.35,
    		l: "頼み"
    	},
    	{
    		r: 14553,
    		f: 2.35,
    		l: "小麦粉"
    	},
    	{
    		r: 14554,
    		f: 2.35,
    		l: "不可避"
    	},
    	{
    		r: 14555,
    		f: 2.35,
    		l: "打破"
    	},
    	{
    		r: 14556,
    		f: 2.35,
    		l: "メッセンジャー"
    	},
    	{
    		r: 14557,
    		f: 2.35,
    		l: "待てる"
    	},
    	{
    		r: 14558,
    		f: 2.35,
    		l: "斡旋"
    	},
    	{
    		r: 14559,
    		f: 2.35,
    		l: "行財政"
    	},
    	{
    		r: 14560,
    		f: 2.35,
    		l: "直視"
    	},
    	{
    		r: 14561,
    		f: 2.35,
    		l: "終点"
    	},
    	{
    		r: 14562,
    		f: 2.35,
    		l: "尋常"
    	},
    	{
    		r: 14563,
    		f: 2.35,
    		l: "賞与"
    	},
    	{
    		r: 14564,
    		f: 2.35,
    		l: "校内"
    	},
    	{
    		r: 14565,
    		f: 2.35,
    		l: "信憑"
    	},
    	{
    		r: 14566,
    		f: 2.35,
    		l: "鳩山"
    	},
    	{
    		r: 14567,
    		f: 2.35,
    		l: "祖父母"
    	},
    	{
    		r: 14568,
    		f: 2.35,
    		l: "免税"
    	},
    	{
    		r: 14569,
    		f: 2.35,
    		l: "エディタ"
    	},
    	{
    		r: 14570,
    		f: 2.35,
    		l: "レオン"
    	},
    	{
    		r: 14571,
    		f: 2.35,
    		l: "おちる"
    	},
    	{
    		r: 14572,
    		f: 2.35,
    		l: "仕草"
    	},
    	{
    		r: 14573,
    		f: 2.35,
    		l: "抵触"
    	},
    	{
    		r: 14574,
    		f: 2.35,
    		l: "出稼ぎ"
    	},
    	{
    		r: 14575,
    		f: 2.35,
    		l: "キモ"
    	},
    	{
    		r: 14576,
    		f: 2.35,
    		l: "力不足"
    	},
    	{
    		r: 14577,
    		f: 2.35,
    		l: "効能"
    	},
    	{
    		r: 14578,
    		f: 2.35,
    		l: "あの世"
    	},
    	{
    		r: 14579,
    		f: 2.34,
    		l: "脳みそ"
    	},
    	{
    		r: 14580,
    		f: 2.34,
    		l: "白色"
    	},
    	{
    		r: 14581,
    		f: 2.34,
    		l: "外界"
    	},
    	{
    		r: 14582,
    		f: 2.34,
    		l: "毛沢東"
    	},
    	{
    		r: 14583,
    		f: 2.34,
    		l: "蔵書"
    	},
    	{
    		r: 14584,
    		f: 2.34,
    		l: "服従"
    	},
    	{
    		r: 14585,
    		f: 2.34,
    		l: "極意"
    	},
    	{
    		r: 14586,
    		f: 2.34,
    		l: "打ち明ける"
    	},
    	{
    		r: 14587,
    		f: 2.34,
    		l: "エッセー"
    	},
    	{
    		r: 14588,
    		f: 2.34,
    		l: "発進"
    	},
    	{
    		r: 14589,
    		f: 2.34,
    		l: "カンヌ"
    	},
    	{
    		r: 14590,
    		f: 2.34,
    		l: "スポンジ"
    	},
    	{
    		r: 14591,
    		f: 2.34,
    		l: "近江"
    	},
    	{
    		r: 14592,
    		f: 2.34,
    		l: "身柄"
    	},
    	{
    		r: 14593,
    		f: 2.34,
    		l: "徹す"
    	},
    	{
    		r: 14594,
    		f: 2.34,
    		l: "皇后"
    	},
    	{
    		r: 14595,
    		f: 2.34,
    		l: "もどき"
    	},
    	{
    		r: 14596,
    		f: 2.34,
    		l: "揶揄"
    	},
    	{
    		r: 14597,
    		f: 2.34,
    		l: "徴兵"
    	},
    	{
    		r: 14598,
    		f: 2.34,
    		l: "会食"
    	},
    	{
    		r: 14599,
    		f: 2.34,
    		l: "耐性"
    	},
    	{
    		r: 14600,
    		f: 2.34,
    		l: "川柳"
    	},
    	{
    		r: 14601,
    		f: 2.34,
    		l: "パンドラ"
    	},
    	{
    		r: 14602,
    		f: 2.34,
    		l: "初旬"
    	},
    	{
    		r: 14603,
    		f: 2.34,
    		l: "売り込む"
    	},
    	{
    		r: 14604,
    		f: 2.34,
    		l: "こらえる"
    	},
    	{
    		r: 14605,
    		f: 2.34,
    		l: "ポータブル"
    	},
    	{
    		r: 14606,
    		f: 2.34,
    		l: "じゃー"
    	},
    	{
    		r: 14607,
    		f: 2.34,
    		l: "飛びつく"
    	},
    	{
    		r: 14608,
    		f: 2.34,
    		l: "真珠"
    	},
    	{
    		r: 14609,
    		f: 2.34,
    		l: "ピカ"
    	},
    	{
    		r: 14610,
    		f: 2.34,
    		l: "半角"
    	},
    	{
    		r: 14611,
    		f: 2.34,
    		l: "たたえる"
    	},
    	{
    		r: 14612,
    		f: 2.34,
    		l: "トロント"
    	},
    	{
    		r: 14613,
    		f: 2.33,
    		l: "スライス"
    	},
    	{
    		r: 14614,
    		f: 2.33,
    		l: "きもの"
    	},
    	{
    		r: 14615,
    		f: 2.33,
    		l: "イースター"
    	},
    	{
    		r: 14616,
    		f: 2.33,
    		l: "ホークス"
    	},
    	{
    		r: 14617,
    		f: 2.33,
    		l: "武術"
    	},
    	{
    		r: 14618,
    		f: 2.33,
    		l: "くどい"
    	},
    	{
    		r: 14619,
    		f: 2.33,
    		l: "呪う"
    	},
    	{
    		r: 14620,
    		f: 2.33,
    		l: "後述"
    	},
    	{
    		r: 14621,
    		f: 2.33,
    		l: "揺らぐ"
    	},
    	{
    		r: 14622,
    		f: 2.33,
    		l: "電線"
    	},
    	{
    		r: 14623,
    		f: 2.33,
    		l: "ノア"
    	},
    	{
    		r: 14624,
    		f: 2.33,
    		l: "ガザ"
    	},
    	{
    		r: 14625,
    		f: 2.33,
    		l: "脱退"
    	},
    	{
    		r: 14626,
    		f: 2.33,
    		l: "右下"
    	},
    	{
    		r: 14627,
    		f: 2.33,
    		l: "義父"
    	},
    	{
    		r: 14628,
    		f: 2.33,
    		l: "鍵盤"
    	},
    	{
    		r: 14629,
    		f: 2.33,
    		l: "自営業"
    	},
    	{
    		r: 14630,
    		f: 2.33,
    		l: "光線"
    	},
    	{
    		r: 14631,
    		f: 2.33,
    		l: "成田空港"
    	},
    	{
    		r: 14632,
    		f: 2.33,
    		l: "腑"
    	},
    	{
    		r: 14633,
    		f: 2.33,
    		l: "続報"
    	},
    	{
    		r: 14634,
    		f: 2.33,
    		l: "宣教師"
    	},
    	{
    		r: 14635,
    		f: 2.33,
    		l: "必殺"
    	},
    	{
    		r: 14636,
    		f: 2.33,
    		l: "内的"
    	},
    	{
    		r: 14637,
    		f: 2.33,
    		l: "ゼリー"
    	},
    	{
    		r: 14638,
    		f: 2.33,
    		l: "横目"
    	},
    	{
    		r: 14639,
    		f: 2.33,
    		l: "ツケ"
    	},
    	{
    		r: 14640,
    		f: 2.33,
    		l: "同性"
    	},
    	{
    		r: 14641,
    		f: 2.33,
    		l: "一目瞭然"
    	},
    	{
    		r: 14642,
    		f: 2.33,
    		l: "人手"
    	},
    	{
    		r: 14643,
    		f: 2.33,
    		l: "文藝春秋"
    	},
    	{
    		r: 14644,
    		f: 2.32,
    		l: "キツ"
    	},
    	{
    		r: 14645,
    		f: 2.32,
    		l: "絡める"
    	},
    	{
    		r: 14646,
    		f: 2.32,
    		l: "明け方"
    	},
    	{
    		r: 14647,
    		f: 2.32,
    		l: "聞き手"
    	},
    	{
    		r: 14648,
    		f: 2.32,
    		l: "拙い"
    	},
    	{
    		r: 14649,
    		f: 2.32,
    		l: "酸味"
    	},
    	{
    		r: 14650,
    		f: 2.32,
    		l: "レッテル"
    	},
    	{
    		r: 14651,
    		f: 2.32,
    		l: "漢方"
    	},
    	{
    		r: 14652,
    		f: 2.32,
    		l: "祭壇"
    	},
    	{
    		r: 14653,
    		f: 2.32,
    		l: "十字"
    	},
    	{
    		r: 14654,
    		f: 2.32,
    		l: "製剤"
    	},
    	{
    		r: 14655,
    		f: 2.32,
    		l: "主食"
    	},
    	{
    		r: 14656,
    		f: 2.32,
    		l: "剃る"
    	},
    	{
    		r: 14657,
    		f: 2.32,
    		l: "男系"
    	},
    	{
    		r: 14658,
    		f: 2.32,
    		l: "火曜"
    	},
    	{
    		r: 14659,
    		f: 2.32,
    		l: "イスラーム"
    	},
    	{
    		r: 14660,
    		f: 2.32,
    		l: "災い"
    	},
    	{
    		r: 14661,
    		f: 2.32,
    		l: "くっきり"
    	},
    	{
    		r: 14662,
    		f: 2.32,
    		l: "民謡"
    	},
    	{
    		r: 14663,
    		f: 2.32,
    		l: "日の出"
    	},
    	{
    		r: 14664,
    		f: 2.32,
    		l: "杉並"
    	},
    	{
    		r: 14665,
    		f: 2.32,
    		l: "直人"
    	},
    	{
    		r: 14666,
    		f: 2.32,
    		l: "特筆"
    	},
    	{
    		r: 14667,
    		f: 2.32,
    		l: "駆け引き"
    	},
    	{
    		r: 14668,
    		f: 2.32,
    		l: "バスケットボール"
    	},
    	{
    		r: 14669,
    		f: 2.32,
    		l: "かぎる"
    	},
    	{
    		r: 14670,
    		f: 2.32,
    		l: "西宮"
    	},
    	{
    		r: 14671,
    		f: 2.32,
    		l: "くらし"
    	},
    	{
    		r: 14672,
    		f: 2.32,
    		l: "ペニス"
    	},
    	{
    		r: 14673,
    		f: 2.32,
    		l: "発刊"
    	},
    	{
    		r: 14674,
    		f: 2.32,
    		l: "主将"
    	},
    	{
    		r: 14675,
    		f: 2.32,
    		l: "ギャラ"
    	},
    	{
    		r: 14676,
    		f: 2.32,
    		l: "さながら"
    	},
    	{
    		r: 14677,
    		f: 2.32,
    		l: "個所"
    	},
    	{
    		r: 14678,
    		f: 2.32,
    		l: "つかえる"
    	},
    	{
    		r: 14679,
    		f: 2.32,
    		l: "申し入れ"
    	},
    	{
    		r: 14680,
    		f: 2.32,
    		l: "住友"
    	},
    	{
    		r: 14681,
    		f: 2.32,
    		l: "いぬ"
    	},
    	{
    		r: 14682,
    		f: 2.32,
    		l: "投信"
    	},
    	{
    		r: 14683,
    		f: 2.32,
    		l: "鯛"
    	},
    	{
    		r: 14684,
    		f: 2.32,
    		l: "バーゲン"
    	},
    	{
    		r: 14685,
    		f: 2.32,
    		l: "メンバ"
    	},
    	{
    		r: 14686,
    		f: 2.32,
    		l: "エディション"
    	},
    	{
    		r: 14687,
    		f: 2.32,
    		l: "人間らしい"
    	},
    	{
    		r: 14688,
    		f: 2.32,
    		l: "レバノン"
    	},
    	{
    		r: 14689,
    		f: 2.31,
    		l: "厳正"
    	},
    	{
    		r: 14690,
    		f: 2.31,
    		l: "つぶる"
    	},
    	{
    		r: 14691,
    		f: 2.31,
    		l: "しっぽ"
    	},
    	{
    		r: 14692,
    		f: 2.31,
    		l: "もの凄い"
    	},
    	{
    		r: 14693,
    		f: 2.31,
    		l: "起点"
    	},
    	{
    		r: 14694,
    		f: 2.31,
    		l: "灯油"
    	},
    	{
    		r: 14695,
    		f: 2.31,
    		l: "観覧"
    	},
    	{
    		r: 14696,
    		f: 2.31,
    		l: "ぼやく"
    	},
    	{
    		r: 14697,
    		f: 2.31,
    		l: "バッシング"
    	},
    	{
    		r: 14698,
    		f: 2.31,
    		l: "棚田"
    	},
    	{
    		r: 14699,
    		f: 2.31,
    		l: "あんま"
    	},
    	{
    		r: 14700,
    		f: 2.31,
    		l: "柴"
    	},
    	{
    		r: 14701,
    		f: 2.31,
    		l: "プレーオフ"
    	},
    	{
    		r: 14702,
    		f: 2.31,
    		l: "空母"
    	},
    	{
    		r: 14703,
    		f: 2.31,
    		l: "マウント"
    	},
    	{
    		r: 14704,
    		f: 2.31,
    		l: "カゴ"
    	},
    	{
    		r: 14705,
    		f: 2.31,
    		l: "まこと"
    	},
    	{
    		r: 14706,
    		f: 2.31,
    		l: "生意気"
    	},
    	{
    		r: 14707,
    		f: 2.31,
    		l: "けす"
    	},
    	{
    		r: 14708,
    		f: 2.31,
    		l: "有線"
    	},
    	{
    		r: 14709,
    		f: 2.31,
    		l: "ハンバーグ"
    	},
    	{
    		r: 14710,
    		f: 2.31,
    		l: "右肩"
    	},
    	{
    		r: 14711,
    		f: 2.31,
    		l: "カキ"
    	},
    	{
    		r: 14712,
    		f: 2.31,
    		l: "出先"
    	},
    	{
    		r: 14713,
    		f: 2.31,
    		l: "巻末"
    	},
    	{
    		r: 14714,
    		f: 2.31,
    		l: "走り出す"
    	},
    	{
    		r: 14715,
    		f: 2.31,
    		l: "揺さぶる"
    	},
    	{
    		r: 14716,
    		f: 2.31,
    		l: "義母"
    	},
    	{
    		r: 14717,
    		f: 2.31,
    		l: "學"
    	},
    	{
    		r: 14718,
    		f: 2.31,
    		l: "団子"
    	},
    	{
    		r: 14719,
    		f: 2.31,
    		l: "よろこぶ"
    	},
    	{
    		r: 14720,
    		f: 2.31,
    		l: "段々"
    	},
    	{
    		r: 14721,
    		f: 2.31,
    		l: "何せ"
    	},
    	{
    		r: 14722,
    		f: 2.31,
    		l: "スマイル"
    	},
    	{
    		r: 14723,
    		f: 2.31,
    		l: "差し支える"
    	},
    	{
    		r: 14724,
    		f: 2.31,
    		l: "収縮"
    	},
    	{
    		r: 14725,
    		f: 2.31,
    		l: "締めくくる"
    	},
    	{
    		r: 14726,
    		f: 2.31,
    		l: "キチン"
    	},
    	{
    		r: 14727,
    		f: 2.31,
    		l: "検知"
    	},
    	{
    		r: 14728,
    		f: 2.31,
    		l: "ゾウ"
    	},
    	{
    		r: 14729,
    		f: 2.3,
    		l: "裏腹"
    	},
    	{
    		r: 14730,
    		f: 2.3,
    		l: "小柄"
    	},
    	{
    		r: 14731,
    		f: 2.3,
    		l: "密輸"
    	},
    	{
    		r: 14732,
    		f: 2.3,
    		l: "ＰＭ"
    	},
    	{
    		r: 14733,
    		f: 2.3,
    		l: "ロフト"
    	},
    	{
    		r: 14734,
    		f: 2.3,
    		l: "倒壊"
    	},
    	{
    		r: 14735,
    		f: 2.3,
    		l: "中越"
    	},
    	{
    		r: 14736,
    		f: 2.3,
    		l: "在外"
    	},
    	{
    		r: 14737,
    		f: 2.3,
    		l: "すくう"
    	},
    	{
    		r: 14738,
    		f: 2.3,
    		l: "団員"
    	},
    	{
    		r: 14739,
    		f: 2.3,
    		l: "セメント"
    	},
    	{
    		r: 14740,
    		f: 2.3,
    		l: "負け犬"
    	},
    	{
    		r: 14741,
    		f: 2.3,
    		l: "便秘"
    	},
    	{
    		r: 14742,
    		f: 2.3,
    		l: "思い描く"
    	},
    	{
    		r: 14743,
    		f: 2.3,
    		l: "電報"
    	},
    	{
    		r: 14744,
    		f: 2.3,
    		l: "ＦＩＦＡ"
    	},
    	{
    		r: 14745,
    		f: 2.3,
    		l: "適"
    	},
    	{
    		r: 14746,
    		f: 2.3,
    		l: "奪"
    	},
    	{
    		r: 14747,
    		f: 2.3,
    		l: "顕微鏡"
    	},
    	{
    		r: 14748,
    		f: 2.3,
    		l: "ドラフト"
    	},
    	{
    		r: 14749,
    		f: 2.3,
    		l: "アーサー"
    	},
    	{
    		r: 14750,
    		f: 2.3,
    		l: "プレビュー"
    	},
    	{
    		r: 14751,
    		f: 2.3,
    		l: "官民"
    	},
    	{
    		r: 14752,
    		f: 2.3,
    		l: "最下位"
    	},
    	{
    		r: 14753,
    		f: 2.3,
    		l: "セーフ"
    	},
    	{
    		r: 14754,
    		f: 2.3,
    		l: "入れ替え"
    	},
    	{
    		r: 14755,
    		f: 2.3,
    		l: "醸成"
    	},
    	{
    		r: 14756,
    		f: 2.3,
    		l: "丞"
    	},
    	{
    		r: 14757,
    		f: 2.3,
    		l: "関心事"
    	},
    	{
    		r: 14758,
    		f: 2.3,
    		l: "顕在"
    	},
    	{
    		r: 14759,
    		f: 2.3,
    		l: "直近"
    	},
    	{
    		r: 14760,
    		f: 2.3,
    		l: "豪快"
    	},
    	{
    		r: 14761,
    		f: 2.3,
    		l: "シーツ"
    	},
    	{
    		r: 14762,
    		f: 2.3,
    		l: "討つ"
    	},
    	{
    		r: 14763,
    		f: 2.3,
    		l: "きたす"
    	},
    	{
    		r: 14764,
    		f: 2.3,
    		l: "健一"
    	},
    	{
    		r: 14765,
    		f: 2.3,
    		l: "嘆き"
    	},
    	{
    		r: 14766,
    		f: 2.3,
    		l: "冤罪"
    	},
    	{
    		r: 14767,
    		f: 2.3,
    		l: "重心"
    	},
    	{
    		r: 14768,
    		f: 2.3,
    		l: "一味"
    	},
    	{
    		r: 14769,
    		f: 2.3,
    		l: "無差別"
    	},
    	{
    		r: 14770,
    		f: 2.3,
    		l: "仏像"
    	},
    	{
    		r: 14771,
    		f: 2.3,
    		l: "売れ行き"
    	},
    	{
    		r: 14772,
    		f: 2.3,
    		l: "ミレニアム"
    	},
    	{
    		r: 14773,
    		f: 2.3,
    		l: "乱れ"
    	},
    	{
    		r: 14774,
    		f: 2.3,
    		l: "マーカー"
    	},
    	{
    		r: 14775,
    		f: 2.3,
    		l: "蛋白"
    	},
    	{
    		r: 14776,
    		f: 2.3,
    		l: "乞う"
    	},
    	{
    		r: 14777,
    		f: 2.3,
    		l: "和夫"
    	},
    	{
    		r: 14778,
    		f: 2.3,
    		l: "現況"
    	},
    	{
    		r: 14779,
    		f: 2.3,
    		l: "ガーナ"
    	},
    	{
    		r: 14780,
    		f: 2.3,
    		l: "アングル"
    	},
    	{
    		r: 14781,
    		f: 2.3,
    		l: "切り替わる"
    	},
    	{
    		r: 14782,
    		f: 2.3,
    		l: "検察庁"
    	},
    	{
    		r: 14783,
    		f: 2.29,
    		l: "実地"
    	},
    	{
    		r: 14784,
    		f: 2.29,
    		l: "こら"
    	},
    	{
    		r: 14785,
    		f: 2.29,
    		l: "さびしい"
    	},
    	{
    		r: 14786,
    		f: 2.29,
    		l: "心得る"
    	},
    	{
    		r: 14787,
    		f: 2.29,
    		l: "晩餐"
    	},
    	{
    		r: 14788,
    		f: 2.29,
    		l: "とっさ"
    	},
    	{
    		r: 14789,
    		f: 2.29,
    		l: "利己"
    	},
    	{
    		r: 14790,
    		f: 2.29,
    		l: "顧みる"
    	},
    	{
    		r: 14791,
    		f: 2.29,
    		l: "ふまえる"
    	},
    	{
    		r: 14792,
    		f: 2.29,
    		l: "慕う"
    	},
    	{
    		r: 14793,
    		f: 2.29,
    		l: "講堂"
    	},
    	{
    		r: 14794,
    		f: 2.29,
    		l: "プランニング"
    	},
    	{
    		r: 14795,
    		f: 2.29,
    		l: "ズーム"
    	},
    	{
    		r: 14796,
    		f: 2.29,
    		l: "彗星"
    	},
    	{
    		r: 14797,
    		f: 2.29,
    		l: "サンプリング"
    	},
    	{
    		r: 14798,
    		f: 2.29,
    		l: "西口"
    	},
    	{
    		r: 14799,
    		f: 2.29,
    		l: "山脈"
    	},
    	{
    		r: 14800,
    		f: 2.29,
    		l: "年長"
    	},
    	{
    		r: 14801,
    		f: 2.29,
    		l: "果てしない"
    	},
    	{
    		r: 14802,
    		f: 2.29,
    		l: "男らしい"
    	},
    	{
    		r: 14803,
    		f: 2.29,
    		l: "称える"
    	},
    	{
    		r: 14804,
    		f: 2.29,
    		l: "投融資"
    	},
    	{
    		r: 14805,
    		f: 2.29,
    		l: "後回し"
    	},
    	{
    		r: 14806,
    		f: 2.29,
    		l: "旅費"
    	},
    	{
    		r: 14807,
    		f: 2.29,
    		l: "航路"
    	},
    	{
    		r: 14808,
    		f: 2.29,
    		l: "結社"
    	},
    	{
    		r: 14809,
    		f: 2.29,
    		l: "ナマ"
    	},
    	{
    		r: 14810,
    		f: 2.29,
    		l: "バスケ"
    	},
    	{
    		r: 14811,
    		f: 2.29,
    		l: "川島"
    	},
    	{
    		r: 14812,
    		f: 2.29,
    		l: "てっきり"
    	},
    	{
    		r: 14813,
    		f: 2.29,
    		l: "食用"
    	},
    	{
    		r: 14814,
    		f: 2.28,
    		l: "間抜け"
    	},
    	{
    		r: 14815,
    		f: 2.28,
    		l: "ブレーク"
    	},
    	{
    		r: 14816,
    		f: 2.28,
    		l: "ほどほど"
    	},
    	{
    		r: 14817,
    		f: 2.28,
    		l: "ジーン"
    	},
    	{
    		r: 14818,
    		f: 2.28,
    		l: "気象庁"
    	},
    	{
    		r: 14819,
    		f: 2.28,
    		l: "鵬"
    	},
    	{
    		r: 14820,
    		f: 2.28,
    		l: "醸し出す"
    	},
    	{
    		r: 14821,
    		f: 2.28,
    		l: "勉"
    	},
    	{
    		r: 14822,
    		f: 2.28,
    		l: "粉砕"
    	},
    	{
    		r: 14823,
    		f: 2.28,
    		l: "読み手"
    	},
    	{
    		r: 14824,
    		f: 2.28,
    		l: "一々"
    	},
    	{
    		r: 14825,
    		f: 2.28,
    		l: "葵"
    	},
    	{
    		r: 14826,
    		f: 2.28,
    		l: "引数"
    	},
    	{
    		r: 14827,
    		f: 2.28,
    		l: "リタイア"
    	},
    	{
    		r: 14828,
    		f: 2.28,
    		l: "近道"
    	},
    	{
    		r: 14829,
    		f: 2.28,
    		l: "本拠地"
    	},
    	{
    		r: 14830,
    		f: 2.28,
    		l: "人魚"
    	},
    	{
    		r: 14831,
    		f: 2.28,
    		l: "床屋"
    	},
    	{
    		r: 14832,
    		f: 2.28,
    		l: "志す"
    	},
    	{
    		r: 14833,
    		f: 2.28,
    		l: "隠れ"
    	},
    	{
    		r: 14834,
    		f: 2.28,
    		l: "転売"
    	},
    	{
    		r: 14835,
    		f: 2.28,
    		l: "断ち切る"
    	},
    	{
    		r: 14836,
    		f: 2.28,
    		l: "前身"
    	},
    	{
    		r: 14837,
    		f: 2.28,
    		l: "八幡"
    	},
    	{
    		r: 14838,
    		f: 2.28,
    		l: "つなぎ"
    	},
    	{
    		r: 14839,
    		f: 2.28,
    		l: "ブラッド"
    	},
    	{
    		r: 14840,
    		f: 2.28,
    		l: "齋藤"
    	},
    	{
    		r: 14841,
    		f: 2.28,
    		l: "探知"
    	},
    	{
    		r: 14842,
    		f: 2.28,
    		l: "フッ"
    	},
    	{
    		r: 14843,
    		f: 2.28,
    		l: "ティーン"
    	},
    	{
    		r: 14844,
    		f: 2.28,
    		l: "断じて"
    	},
    	{
    		r: 14845,
    		f: 2.28,
    		l: "試乗"
    	},
    	{
    		r: 14846,
    		f: 2.28,
    		l: "築き上げる"
    	},
    	{
    		r: 14847,
    		f: 2.28,
    		l: "五感"
    	},
    	{
    		r: 14848,
    		f: 2.28,
    		l: "語句"
    	},
    	{
    		r: 14849,
    		f: 2.28,
    		l: "環状"
    	},
    	{
    		r: 14850,
    		f: 2.28,
    		l: "ぶろ"
    	},
    	{
    		r: 14851,
    		f: 2.28,
    		l: "フライパン"
    	},
    	{
    		r: 14852,
    		f: 2.28,
    		l: "あご"
    	},
    	{
    		r: 14853,
    		f: 2.28,
    		l: "コーディング"
    	},
    	{
    		r: 14854,
    		f: 2.28,
    		l: "血統"
    	},
    	{
    		r: 14855,
    		f: 2.28,
    		l: "模"
    	},
    	{
    		r: 14856,
    		f: 2.28,
    		l: "気取る"
    	},
    	{
    		r: 14857,
    		f: 2.28,
    		l: "大袈裟"
    	},
    	{
    		r: 14858,
    		f: 2.28,
    		l: "建材"
    	},
    	{
    		r: 14859,
    		f: 2.28,
    		l: "シャフト"
    	},
    	{
    		r: 14860,
    		f: 2.28,
    		l: "ステッカー"
    	},
    	{
    		r: 14861,
    		f: 2.28,
    		l: "直に"
    	},
    	{
    		r: 14862,
    		f: 2.28,
    		l: "代議士"
    	},
    	{
    		r: 14863,
    		f: 2.28,
    		l: "駅伝"
    	},
    	{
    		r: 14864,
    		f: 2.28,
    		l: "スリランカ"
    	},
    	{
    		r: 14865,
    		f: 2.28,
    		l: "総て"
    	},
    	{
    		r: 14866,
    		f: 2.28,
    		l: "附帯"
    	},
    	{
    		r: 14867,
    		f: 2.28,
    		l: "絵柄"
    	},
    	{
    		r: 14868,
    		f: 2.28,
    		l: "忘れ"
    	},
    	{
    		r: 14869,
    		f: 2.28,
    		l: "濱"
    	},
    	{
    		r: 14870,
    		f: 2.27,
    		l: "ルネッサンス"
    	},
    	{
    		r: 14871,
    		f: 2.27,
    		l: "平ら"
    	},
    	{
    		r: 14872,
    		f: 2.27,
    		l: "シーア"
    	},
    	{
    		r: 14873,
    		f: 2.27,
    		l: "農作物"
    	},
    	{
    		r: 14874,
    		f: 2.27,
    		l: "総勢"
    	},
    	{
    		r: 14875,
    		f: 2.27,
    		l: "出向"
    	},
    	{
    		r: 14876,
    		f: 2.27,
    		l: "佐伯"
    	},
    	{
    		r: 14877,
    		f: 2.27,
    		l: "飛び立つ"
    	},
    	{
    		r: 14878,
    		f: 2.27,
    		l: "普"
    	},
    	{
    		r: 14879,
    		f: 2.27,
    		l: "自虐"
    	},
    	{
    		r: 14880,
    		f: 2.27,
    		l: "つつく"
    	},
    	{
    		r: 14881,
    		f: 2.27,
    		l: "被験者"
    	},
    	{
    		r: 14882,
    		f: 2.27,
    		l: "陳腐"
    	},
    	{
    		r: 14883,
    		f: 2.27,
    		l: "重傷"
    	},
    	{
    		r: 14884,
    		f: 2.27,
    		l: "小雨"
    	},
    	{
    		r: 14885,
    		f: 2.27,
    		l: "偽物"
    	},
    	{
    		r: 14886,
    		f: 2.27,
    		l: "精製"
    	},
    	{
    		r: 14887,
    		f: 2.27,
    		l: "引き合い"
    	},
    	{
    		r: 14888,
    		f: 2.27,
    		l: "割愛"
    	},
    	{
    		r: 14889,
    		f: 2.27,
    		l: "長らく"
    	},
    	{
    		r: 14890,
    		f: 2.27,
    		l: "水銀"
    	},
    	{
    		r: 14891,
    		f: 2.27,
    		l: "まなざし"
    	},
    	{
    		r: 14892,
    		f: 2.27,
    		l: "言い出す"
    	},
    	{
    		r: 14893,
    		f: 2.27,
    		l: "覇権"
    	},
    	{
    		r: 14894,
    		f: 2.27,
    		l: "ナナ"
    	},
    	{
    		r: 14895,
    		f: 2.27,
    		l: "森下"
    	},
    	{
    		r: 14896,
    		f: 2.27,
    		l: "公用"
    	},
    	{
    		r: 14897,
    		f: 2.27,
    		l: "観音"
    	},
    	{
    		r: 14898,
    		f: 2.27,
    		l: "手腕"
    	},
    	{
    		r: 14899,
    		f: 2.27,
    		l: "ライム"
    	},
    	{
    		r: 14900,
    		f: 2.27,
    		l: "ひらめく"
    	},
    	{
    		r: 14901,
    		f: 2.27,
    		l: "定型"
    	},
    	{
    		r: 14902,
    		f: 2.27,
    		l: "懸案"
    	},
    	{
    		r: 14903,
    		f: 2.27,
    		l: "中谷"
    	},
    	{
    		r: 14904,
    		f: 2.27,
    		l: "駆け込む"
    	},
    	{
    		r: 14905,
    		f: 2.27,
    		l: "和音"
    	},
    	{
    		r: 14906,
    		f: 2.27,
    		l: "来客"
    	},
    	{
    		r: 14907,
    		f: 2.27,
    		l: "教え子"
    	},
    	{
    		r: 14908,
    		f: 2.27,
    		l: "模試"
    	},
    	{
    		r: 14909,
    		f: 2.27,
    		l: "等価"
    	},
    	{
    		r: 14910,
    		f: 2.26,
    		l: "近世"
    	},
    	{
    		r: 14911,
    		f: 2.26,
    		l: "宣教"
    	},
    	{
    		r: 14912,
    		f: 2.26,
    		l: "ロケーション"
    	},
    	{
    		r: 14913,
    		f: 2.26,
    		l: "アパレル"
    	},
    	{
    		r: 14914,
    		f: 2.26,
    		l: "ふしぎ"
    	},
    	{
    		r: 14915,
    		f: 2.26,
    		l: "調印"
    	},
    	{
    		r: 14916,
    		f: 2.26,
    		l: "あえる"
    	},
    	{
    		r: 14917,
    		f: 2.26,
    		l: "専売"
    	},
    	{
    		r: 14918,
    		f: 2.26,
    		l: "敬称"
    	},
    	{
    		r: 14919,
    		f: 2.26,
    		l: "送迎"
    	},
    	{
    		r: 14920,
    		f: 2.26,
    		l: "どっぷり"
    	},
    	{
    		r: 14921,
    		f: 2.26,
    		l: "ケット"
    	},
    	{
    		r: 14922,
    		f: 2.26,
    		l: "インテリジェンス"
    	},
    	{
    		r: 14923,
    		f: 2.26,
    		l: "編入"
    	},
    	{
    		r: 14924,
    		f: 2.26,
    		l: "逸品"
    	},
    	{
    		r: 14925,
    		f: 2.26,
    		l: "ブス"
    	},
    	{
    		r: 14926,
    		f: 2.26,
    		l: "きゅう"
    	},
    	{
    		r: 14927,
    		f: 2.26,
    		l: "長続き"
    	},
    	{
    		r: 14928,
    		f: 2.26,
    		l: "答案"
    	},
    	{
    		r: 14929,
    		f: 2.26,
    		l: "じい"
    	},
    	{
    		r: 14930,
    		f: 2.26,
    		l: "電磁"
    	},
    	{
    		r: 14931,
    		f: 2.26,
    		l: "みゆき"
    	},
    	{
    		r: 14932,
    		f: 2.26,
    		l: "ハト"
    	},
    	{
    		r: 14933,
    		f: 2.26,
    		l: "練馬"
    	},
    	{
    		r: 14934,
    		f: 2.26,
    		l: "牧"
    	},
    	{
    		r: 14935,
    		f: 2.26,
    		l: "ガリ"
    	},
    	{
    		r: 14936,
    		f: 2.26,
    		l: "微分"
    	},
    	{
    		r: 14937,
    		f: 2.26,
    		l: "パラパラ"
    	},
    	{
    		r: 14938,
    		f: 2.26,
    		l: "中等"
    	},
    	{
    		r: 14939,
    		f: 2.26,
    		l: "格付け"
    	},
    	{
    		r: 14940,
    		f: 2.26,
    		l: "洋画"
    	},
    	{
    		r: 14941,
    		f: 2.26,
    		l: "絶叫"
    	},
    	{
    		r: 14942,
    		f: 2.26,
    		l: "終末"
    	},
    	{
    		r: 14943,
    		f: 2.26,
    		l: "帰結"
    	},
    	{
    		r: 14944,
    		f: 2.26,
    		l: "有様"
    	},
    	{
    		r: 14945,
    		f: 2.26,
    		l: "タール"
    	},
    	{
    		r: 14946,
    		f: 2.26,
    		l: "ハイライト"
    	},
    	{
    		r: 14947,
    		f: 2.26,
    		l: "威"
    	},
    	{
    		r: 14948,
    		f: 2.26,
    		l: "筋力"
    	},
    	{
    		r: 14949,
    		f: 2.26,
    		l: "業態"
    	},
    	{
    		r: 14950,
    		f: 2.26,
    		l: "じわじわ"
    	},
    	{
    		r: 14951,
    		f: 2.26,
    		l: "占星術"
    	},
    	{
    		r: 14952,
    		f: 2.26,
    		l: "あったかい"
    	},
    	{
    		r: 14953,
    		f: 2.25,
    		l: "躍進"
    	},
    	{
    		r: 14954,
    		f: 2.25,
    		l: "葉書"
    	},
    	{
    		r: 14955,
    		f: 2.25,
    		l: "アンティーク"
    	},
    	{
    		r: 14956,
    		f: 2.25,
    		l: "トースト"
    	},
    	{
    		r: 14957,
    		f: 2.25,
    		l: "キズ"
    	},
    	{
    		r: 14958,
    		f: 2.25,
    		l: "ただす"
    	},
    	{
    		r: 14959,
    		f: 2.25,
    		l: "旅客"
    	},
    	{
    		r: 14960,
    		f: 2.25,
    		l: "左上"
    	},
    	{
    		r: 14961,
    		f: 2.25,
    		l: "折り紙"
    	},
    	{
    		r: 14962,
    		f: 2.25,
    		l: "ギルド"
    	},
    	{
    		r: 14963,
    		f: 2.25,
    		l: "訓"
    	},
    	{
    		r: 14964,
    		f: 2.25,
    		l: "本性"
    	},
    	{
    		r: 14965,
    		f: 2.25,
    		l: "果樹"
    	},
    	{
    		r: 14966,
    		f: 2.25,
    		l: "鮎"
    	},
    	{
    		r: 14967,
    		f: 2.25,
    		l: "さいたま"
    	},
    	{
    		r: 14968,
    		f: 2.25,
    		l: "河口"
    	},
    	{
    		r: 14969,
    		f: 2.25,
    		l: "学識"
    	},
    	{
    		r: 14970,
    		f: 2.25,
    		l: "魔力"
    	},
    	{
    		r: 14971,
    		f: 2.25,
    		l: "ベンツ"
    	},
    	{
    		r: 14972,
    		f: 2.25,
    		l: "争議"
    	},
    	{
    		r: 14973,
    		f: 2.25,
    		l: "萎縮"
    	},
    	{
    		r: 14974,
    		f: 2.25,
    		l: "溺れる"
    	},
    	{
    		r: 14975,
    		f: 2.25,
    		l: "水谷"
    	},
    	{
    		r: 14976,
    		f: 2.25,
    		l: "格子"
    	},
    	{
    		r: 14977,
    		f: 2.25,
    		l: "堤防"
    	},
    	{
    		r: 14978,
    		f: 2.25,
    		l: "トンボ"
    	},
    	{
    		r: 14979,
    		f: 2.25,
    		l: "片岡"
    	},
    	{
    		r: 14980,
    		f: 2.24,
    		l: "劣等"
    	},
    	{
    		r: 14981,
    		f: 2.24,
    		l: "邦訳"
    	},
    	{
    		r: 14982,
    		f: 2.24,
    		l: "易"
    	},
    	{
    		r: 14983,
    		f: 2.24,
    		l: "なぁー"
    	},
    	{
    		r: 14984,
    		f: 2.24,
    		l: "足音"
    	},
    	{
    		r: 14985,
    		f: 2.24,
    		l: "カンタン"
    	},
    	{
    		r: 14986,
    		f: 2.24,
    		l: "静脈"
    	},
    	{
    		r: 14987,
    		f: 2.24,
    		l: "サーブ"
    	},
    	{
    		r: 14988,
    		f: 2.24,
    		l: "欺瞞"
    	},
    	{
    		r: 14989,
    		f: 2.24,
    		l: "廉価"
    	},
    	{
    		r: 14990,
    		f: 2.24,
    		l: "実技"
    	},
    	{
    		r: 14991,
    		f: 2.24,
    		l: "呆然と"
    	},
    	{
    		r: 14992,
    		f: 2.24,
    		l: "確固たる"
    	},
    	{
    		r: 14993,
    		f: 2.24,
    		l: "丹羽"
    	},
    	{
    		r: 14994,
    		f: 2.24,
    		l: "弁明"
    	},
    	{
    		r: 14995,
    		f: 2.24,
    		l: "摘む"
    	},
    	{
    		r: 14996,
    		f: 2.24,
    		l: "夕べ"
    	},
    	{
    		r: 14997,
    		f: 2.24,
    		l: "売場"
    	},
    	{
    		r: 14998,
    		f: 2.24,
    		l: "たたき台"
    	},
    	{
    		r: 14999,
    		f: 2.24,
    		l: "かしこ"
    	},
    	{
    		r: 15000,
    		f: 2.24,
    		l: "バックグラウンド"
    	}
    ];

    const searchManagerStyles = r$3 `
:host {
  display: block;
  font-family: Roboto;
  position: relative;
  z-index: 9999;
  /* --mdc-theme-surface: white; */
}
mwc-textfield {
  width: 100%;
}

mwc-tab-bar {
  position: absolute;
  bottom: 57px;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  border: 1px solid #bdbdbd;
}

#words-results, #kanji-results {
  padding-bottom: 52px;
}

search-item-element {
  padding: 15px 0;
  /* padding-bottom: 15px;
  margin-bottom: 15px; */
  border-bottom: 1px solid #eeeeee;
}
`;

    var _kanjis = [
    	[
    		1,
    		"亜",
    		1,
    		"rank next, come after, Asia, sub-, -ous (in acids)",
    		"-"
    	],
    	[
    		2,
    		"哀",
    		1,
    		"pity, have mercy on, sympathize with",
    		"pity, have mercy on, sympathize with, grief, sorrow, misery; compassion, pathos"
    	],
    	[
    		3,
    		"挨",
    		0,
    		"push open",
    		"-"
    	],
    	[
    		4,
    		"愛",
    		3,
    		"love, affection, favorite",
    		"-"
    	],
    	[
    		5,
    		"曖",
    		0,
    		"dark; not clear",
    		"-"
    	],
    	[
    		6,
    		"悪",
    		4,
    		"evil, wrong, vice, wickedness, lawlessness",
    		"bad, evil, wrong; immoral; malicious; blamable; injurious; detrimental, malignant; be indisposed; inferior; homely; poor (memory); inclement; unlucy; out of order; unsavory"
    	],
    	[
    		7,
    		"握",
    		1,
    		"grasp, hold; make (sushi balls); assume (power); make (money); get (proof)",
    		"grasp, hold; make (sushi balls); assume (power); make (money); get (proof)"
    	],
    	[
    		8,
    		"圧",
    		2,
    		"press, oppress, dominate, overwhelm",
    		"-"
    	],
    	[
    		9,
    		"扱",
    		1,
    		"-",
    		"treat; entertain; manage, deal with, conduct, work on; handle; manipulate"
    	],
    	[
    		10,
    		"宛",
    		0,
    		"-",
    		"address (a letter)"
    	],
    	[
    		11,
    		"嵐",
    		1,
    		"-",
    		"storm, tempest"
    	],
    	[
    		12,
    		"安",
    		4,
    		"be rested, feel at ease, be relieved, repose",
    		"cheap, inexpensive; peaceful, quiet; gossipy, thoughtless"
    	],
    	[
    		13,
    		"案",
    		2,
    		"proposition, suggestion, plan, idea; opinion; expectation; bill, draft, measure; table",
    		"-"
    	],
    	[
    		14,
    		"暗",
    		3,
    		"dark",
    		"dark, gloomy, somber; dim, faint; ignorant"
    	],
    	[
    		15,
    		"以",
    		4,
    		"with, by, by means of; because; in view of",
    		"-"
    	],
    	[
    		16,
    		"衣",
    		2,
    		"garment",
    		"clothes, robe; dressing; frosting; coating"
    	],
    	[
    		17,
    		"位",
    		3,
    		"rank, place, grade",
    		"grade, rank; court order, dignity, nobility; situation; throne, crown"
    	],
    	[
    		18,
    		"囲",
    		2,
    		"enclosure",
    		"enclose, surround, encircle; besiege; preserve, store; keep"
    	],
    	[
    		19,
    		"医",
    		4,
    		"medicine, the healing art; doctor",
    		"-"
    	],
    	[
    		20,
    		"依",
    		2,
    		"depend on",
    		"-"
    	],
    	[
    		21,
    		"委",
    		2,
    		"entrust to, discard",
    		"entrust to, devote (oneself) to"
    	],
    	[
    		22,
    		"威",
    		1,
    		"dignity, majesty, authority",
    		"-"
    	],
    	[
    		23,
    		"為",
    		1,
    		"change; be of use; reach to",
    		"-"
    	],
    	[
    		24,
    		"畏",
    		0,
    		"fear, be overawed, be apprehensive",
    		"fear, be overawed, be apprehensive"
    	],
    	[
    		25,
    		"胃",
    		2,
    		"stomach; paunch, crop, craw",
    		"-"
    	],
    	[
    		26,
    		"尉",
    		1,
    		"jailer; old man; rank; company officer",
    		"-"
    	],
    	[
    		27,
    		"異",
    		2,
    		"uncommonness, strangeness, queerness; difference",
    		"differ, vary; be unusual"
    	],
    	[
    		28,
    		"移",
    		2,
    		"move, change, shift, pass into, drift; soak in; be infected, catch (a cold); catch fire, spread",
    		"move, change, shift, pass into, drift; soak in; be infected, catch (a cold); catch fire, spread; transfer; pour into, divert(attention), give (a disease to someone)"
    	],
    	[
    		29,
    		"萎",
    		0,
    		"wither, droop, weaken; be paralyzed, be lame",
    		"wither, droop, weaken; be paralyzed, be lame"
    	],
    	[
    		30,
    		"偉",
    		3,
    		"greatness",
    		"great, famous, excellent, remarkable"
    	],
    	[
    		31,
    		"椅",
    		0,
    		"chair",
    		"-"
    	],
    	[
    		32,
    		"彙",
    		0,
    		"same kind",
    		"-"
    	],
    	[
    		33,
    		"意",
    		4,
    		"mind, heart; care; liking, taste; inclination, will, intention; thought, idea; desire",
    		"-"
    	],
    	[
    		34,
    		"違",
    		3,
    		"differ, vary; disagree with; be mistaken; cross or pass (someone); No (negation)",
    		"differ, vary; disagree with; be mistaken; cross or pass (someone); No (negation); change, alter, disguise; make a mistake; break (a promise); sprain, dislocate; cross (two sticks)"
    	],
    	[
    		35,
    		"維",
    		1,
    		"tie, rope",
    		"-"
    	],
    	[
    		36,
    		"慰",
    		1,
    		"amuse oneself; make sport of; seduce",
    		"amuse oneself; make sport of; seduce; comfort, console, cheer"
    	],
    	[
    		37,
    		"遺",
    		1,
    		"leave behind; bequeath; save, reserve",
    		"-"
    	],
    	[
    		38,
    		"緯",
    		1,
    		"woof; horizontal; left and right; parallels of latitude; latitude",
    		"-"
    	],
    	[
    		39,
    		"域",
    		2,
    		"region; limits; stage, level",
    		"-"
    	],
    	[
    		40,
    		"育",
    		3,
    		"be raised, be brought up, grow, grow up",
    		"be raised, be brought up, grow, grow up; raise, rear, bring up"
    	],
    	[
    		41,
    		"一",
    		5,
    		"one, a",
    		"one, a unit; the same; just; once"
    	],
    	[
    		42,
    		"壱",
    		1,
    		"one",
    		"-"
    	],
    	[
    		43,
    		"逸",
    		1,
    		"idleness, leisure",
    		"-"
    	],
    	[
    		44,
    		"茨",
    		0,
    		"thorn, brier",
    		"thorn, brier"
    	],
    	[
    		45,
    		"芋",
    		1,
    		"-",
    		"potato"
    	],
    	[
    		46,
    		"引",
    		3,
    		"draw, pull, haul, tug, jerk, drag, trail, bend, attract; lead (horses or captives); draw (lines); admit; install (utilities); quote, refer to; look up (words); subtract, reduce; apply, daub on; blunt (a sword); patronize; choose; draw (a line); catch (a cold); retreat, withdraw, retire; subside",
    		"draw, pull, haul, tug, jerk, drag, trail, bend, attract; lead (horses or captives); draw (lines); admit; install (utilities); quote, refer to; look up (words); subtract, reduce; apply, daub on; blunt (a sword); patronize; choose; draw (a line); catch (a cold); retreat, withdraw, retire; subside; close, be over; can discount; slink away"
    	],
    	[
    		47,
    		"印",
    		2,
    		"seal, stamp, mark",
    		"sign, mark; symbol, emblem; badge; evidence; souvenir; token; brand, trademark; signs, indications; omen; seal"
    	],
    	[
    		48,
    		"因",
    		3,
    		"cause, factor",
    		"depend on, be limited to"
    	],
    	[
    		49,
    		"咽",
    		0,
    		"be choked, be smothered",
    		"-"
    	],
    	[
    		50,
    		"姻",
    		1,
    		"marry",
    		"-"
    	],
    	[
    		51,
    		"員",
    		4,
    		"member; number; the one in charge",
    		"-"
    	],
    	[
    		52,
    		"院",
    		4,
    		"mansion; temple; palace; hospital; school; institution; congress; ex-emperor",
    		"-"
    	],
    	[
    		53,
    		"淫",
    		0,
    		"lewdness, licentiousness",
    		"licentious, indecent, lewd"
    	],
    	[
    		54,
    		"陰",
    		1,
    		"the yin principle; negative; melancholy; north side of a mountain; sex organs; secret; shadow; south side of a river; negative electrode; earth; bottom; back; inactivity; nighttime; moon",
    		"darken; cloud up; be obscured; shade; back; (your) assistance"
    	],
    	[
    		55,
    		"飲",
    		4,
    		"drinking; feast",
    		"drink, taste, take; swallow, devour; smoke; conceal (a weapon); accept (an idea); despise"
    	],
    	[
    		56,
    		"隠",
    		1,
    		"hide, conceal, cover, veil, cloak, disguise",
    		"hide, conceal, cover, veil, cloak, disguise; disappear; pass away; be anonymous; lurk"
    	],
    	[
    		57,
    		"韻",
    		1,
    		"rhyme; elegance; tone",
    		"-"
    	],
    	[
    		58,
    		"右",
    		5,
    		"right, right hand",
    		"right, right hand"
    	],
    	[
    		59,
    		"宇",
    		2,
    		"eaves; roof; house; heaven",
    		"-"
    	],
    	[
    		60,
    		"羽",
    		2,
    		"feather",
    		"feather; plumage, wing; blade, paddle, fan"
    	],
    	[
    		61,
    		"雨",
    		5,
    		"rain, fainfall",
    		"rain, rainfall"
    	],
    	[
    		62,
    		"唄",
    		1,
    		"-",
    		"songs accompanied by the samisen"
    	],
    	[
    		63,
    		"鬱",
    		0,
    		"gloom, depression, melancholy",
    		"-"
    	],
    	[
    		64,
    		"畝",
    		1,
    		"-",
    		"ridge (in a field), furrow, rib or cord (in cloth)"
    	],
    	[
    		65,
    		"浦",
    		1,
    		"-",
    		"creek, inlet; bay, gulf; beach, seacoast"
    	],
    	[
    		66,
    		"運",
    		4,
    		"destiny, fate, lot, fortune, luck",
    		"transport, carry; progress, advance"
    	],
    	[
    		67,
    		"雲",
    		2,
    		"cloud",
    		"cloud"
    	],
    	[
    		68,
    		"永",
    		2,
    		"long, lengthy",
    		"long, lengthy"
    	],
    	[
    		69,
    		"泳",
    		3,
    		"swim; totter; keep afloat, get along",
    		"swim; totter; keep afloat, get along"
    	],
    	[
    		70,
    		"英",
    		4,
    		"England, Britain; gifted person; wit",
    		"-"
    	],
    	[
    		71,
    		"映",
    		4,
    		"reflecting; projection",
    		"shine, be brilliant; look attractive; be reflected; match, harmonize, be becoming; be taken (a photo); copy, transcribe, duplicate, reproduce, trace; describe, picture, photograph"
    	],
    	[
    		72,
    		"栄",
    		2,
    		"prosperity, glory, splendor, honor",
    		"prosper, flourish, thrive; glory; shine, be brilliant; look attractive"
    	],
    	[
    		73,
    		"営",
    		2,
    		"camp, performing",
    		"perform (ceremoies); build; conduct (business); follow (a profession), operate (a store)"
    	],
    	[
    		74,
    		"詠",
    		1,
    		"poem; song; singing; composing",
    		"recite, chant"
    	],
    	[
    		75,
    		"影",
    		1,
    		"shadow",
    		"light; shadow; silhouette; phantom; reflection, figure, trace"
    	],
    	[
    		76,
    		"鋭",
    		2,
    		"sharpness; edge; (sharp) weapon; picked men (soldiers), the pick",
    		"pointed, sharp; violent, scathing; keen (sense); sharp (ear); penetrating (eye); shrewd"
    	],
    	[
    		77,
    		"衛",
    		1,
    		"protection",
    		"-"
    	],
    	[
    		78,
    		"易",
    		3,
    		"easiness; divination, augury, fortunetelling",
    		"easy, simple, light; habitual"
    	],
    	[
    		79,
    		"疫",
    		1,
    		"epidemic",
    		"-"
    	],
    	[
    		80,
    		"益",
    		1,
    		"gain, benefit, profit, use, advantage",
    		"-"
    	],
    	[
    		81,
    		"液",
    		2,
    		"liquid, fluid, juice, sap, secretion",
    		"-"
    	],
    	[
    		82,
    		"駅",
    		4,
    		"post town; stage; station",
    		"-"
    	],
    	[
    		83,
    		"悦",
    		1,
    		"joy, rapture, ecstasy, amusement",
    		"-"
    	],
    	[
    		84,
    		"越",
    		3,
    		"cross; pass; spend; tide over; outrun; exceed; surpass; move; go; come",
    		"cross; pass; spend; tide over; outrun; exceed; surpass; move; go; come; go beyond; exceed; clear (an obstacle); overstep (authority)"
    	],
    	[
    		85,
    		"謁",
    		1,
    		"audience (with a ruler)",
    		"-"
    	],
    	[
    		86,
    		"閲",
    		1,
    		"inspection, revision",
    		"-"
    	],
    	[
    		87,
    		"円",
    		5,
    		"circle; yen",
    		"round, circular, spherical"
    	],
    	[
    		88,
    		"延",
    		2,
    		"stretching",
    		"extend, lengthen, stretch, spread; be postponed; increase; grow; progress, develop; be straightened, be flattened, be smoothed; be exhausted; let (nails) grow; straighten; uncoil; spread out; reach out; postpone; dilute; smooth out; develop (talents); amass (riches); make (a bed); widen"
    	],
    	[
    		89,
    		"沿",
    		1,
    		"following along",
    		"run along; lie along; be situated on"
    	],
    	[
    		90,
    		"炎",
    		1,
    		"inflammation",
    		"flame, blaze"
    	],
    	[
    		91,
    		"怨",
    		0,
    		"bear a grudge, show resentment; be jealous",
    		"-"
    	],
    	[
    		92,
    		"宴",
    		1,
    		"feast, banquet, party, entertainment",
    		"-"
    	],
    	[
    		93,
    		"媛",
    		1,
    		"princess; young lady of noble birth",
    		"-"
    	],
    	[
    		94,
    		"援",
    		1,
    		"help, save",
    		"-"
    	],
    	[
    		95,
    		"園",
    		3,
    		"garden, yard, plantation, farm",
    		"garden, park"
    	],
    	[
    		96,
    		"煙",
    		3,
    		"smoke",
    		"smoke, smolder, be smoky; smoky; fumes; spray"
    	],
    	[
    		97,
    		"猿",
    		1,
    		"monkey",
    		"monkey, ape; minic; sly person; door bolt; fastener"
    	],
    	[
    		98,
    		"遠",
    		3,
    		"far, distant, remote; hard (of hearing)",
    		"far, distant, remote; hard (of hearing)"
    	],
    	[
    		99,
    		"鉛",
    		1,
    		"lead(metal)",
    		"lead(metal)"
    	],
    	[
    		100,
    		"塩",
    		2,
    		"salt",
    		"salt, seasoning"
    	],
    	[
    		101,
    		"演",
    		3,
    		"perform, play, act, enact, render, stage, put on",
    		"-"
    	],
    	[
    		102,
    		"縁",
    		1,
    		"relation, connection, affinity, ties, bond; blood relation; karma relation; fate, destiny; chance; marriage; acquaintance; marriage alliance; veranda, balcony",
    		"edge, verge, shore, side, brink, margin, brim, rim, flange, frill, frame, bank, fringe, border"
    	],
    	[
    		103,
    		"艶",
    		1,
    		"luster, glaze, polish; charm",
    		"gloss, luster, glaze, polish, brightness; charm, romance, love"
    	],
    	[
    		104,
    		"汚",
    		2,
    		"make dirty, stain, pollute, defile, contaminate; disgrace, dishonor; rape",
    		"make dirty, stain, pollute, defile, contaminate; disgrace, dishonor; rape; get dirty; be defiled; be contaminated; filthy; unfair; soil; debauch; be stained, tarnish; dirty, filthy, unclean, soiled; shabby; indecent, obscene; base, sordid; stingy; foul"
    	],
    	[
    		105,
    		"王",
    		3,
    		"king, rule, magnate, baron",
    		"-"
    	],
    	[
    		106,
    		"凹",
    		1,
    		"hollow, sunken",
    		"-"
    	],
    	[
    		107,
    		"央",
    		2,
    		"middle",
    		"-"
    	],
    	[
    		108,
    		"応",
    		2,
    		"yes, all right",
    		"respond, answer; be affected by (pain or stimulation); be effective"
    	],
    	[
    		109,
    		"往",
    		1,
    		"let go; chase away",
    		"-"
    	],
    	[
    		110,
    		"押",
    		3,
    		"push, shove; press, squash, compress; stamp, seal; do in spite of",
    		"push, shove; press, squash, compress; stamp, seal; do in spite of; stop, check, restrain, pin down; suppress, subdue, control; catch, arrest; govern; stop (the ears); withhold; attach, seize; secure (evidence), estimate conservatively"
    	],
    	[
    		111,
    		"旺",
    		1,
    		"flourishing, successful; beautiful; vigorous",
    		"-"
    	],
    	[
    		112,
    		"欧",
    		2,
    		"Europe",
    		"-"
    	],
    	[
    		113,
    		"殴",
    		1,
    		"hit, beat, thrash",
    		"hit, beat, thrash"
    	],
    	[
    		114,
    		"桜",
    		1,
    		"flowering cherry; cherry blossoms; pink color; horse meat",
    		"flowering cherry; cherry blossoms; pink color; horse meat"
    	],
    	[
    		115,
    		"翁",
    		1,
    		"old man, venerable",
    		"-"
    	],
    	[
    		116,
    		"奥",
    		2,
    		"heart, interior",
    		"heart, interior"
    	],
    	[
    		117,
    		"横",
    		3,
    		"horizontal",
    		"side, flank; horizontal direction; width, breadth, beam; woof"
    	],
    	[
    		118,
    		"岡",
    		1,
    		"-",
    		"hill, knoll, rising ground"
    	],
    	[
    		119,
    		"屋",
    		4,
    		"house, roof",
    		"shop, store; seller, dealer; business"
    	],
    	[
    		120,
    		"億",
    		2,
    		"100,000,000",
    		"-"
    	],
    	[
    		121,
    		"憶",
    		1,
    		"think, remember",
    		"-"
    	],
    	[
    		122,
    		"臆",
    		0,
    		"timidity; breast, heart, mind",
    		"-"
    	],
    	[
    		123,
    		"虞",
    		1,
    		"-",
    		"fear; anxiety; concern; uneasiness"
    	],
    	[
    		124,
    		"乙",
    		1,
    		"B, second; the latter; duplicate",
    		"-"
    	],
    	[
    		125,
    		"俺",
    		0,
    		"-",
    		"I"
    	],
    	[
    		126,
    		"卸",
    		1,
    		"-",
    		"sell at wholesale; grated (vegetables); wholesale"
    	],
    	[
    		127,
    		"音",
    		4,
    		"sound; noise; pronunciation; tone",
    		"sound, noise, roar; fame; tone, note, voice, chirping"
    	],
    	[
    		128,
    		"恩",
    		1,
    		"kindness, goodness, favor, mercy, blessing, benefit",
    		"-"
    	],
    	[
    		129,
    		"温",
    		2,
    		"warm, heat",
    		"warm, heat; warm oneself, sun oneself, get warm; mild, genial, cordial"
    	],
    	[
    		130,
    		"穏",
    		1,
    		"calm, quiet, peace; moderation",
    		"calm, quiet, peace; moderation"
    	],
    	[
    		131,
    		"下",
    		5,
    		"low class; inferiority; second, or last volume",
    		"come down, go down; get down, descend; be given; be less than; have diarrhea; retire; leave the capital; give, confer; oblige, favor with; let down, lower; issue (orders); hand down (decisions); have diarrhea; lay (hands) on; step down; get off; swoop down; land; take down, pull down, lift down, drop; launch; let off (passengers); wear (for the first time); cause (abortion); grate; invoke; exercise; borrow (in subtraction); lock; hang down, dangle; fall; abate; wane; stand back; go behind; be granted; hang; wear (a decoration); reduce (rank); move back; let go, dismiss; remove; grant; draw (money), withdraw; lower part, bottom, base, foot; downstairs; subordinate place; below average; part payment; under, lower; sub-, subordinate; preliminary; the foot; lower stream; latter; lower part of the body; the masses, the servants; the governed; vicinity"
    	],
    	[
    		132,
    		"化",
    		3,
    		"influence; bewitch, enchant, confuse, delude",
    		"bewitch, enchant, confuse, delude; appear in disguise"
    	],
    	[
    		133,
    		"火",
    		5,
    		"fire, Tuesday",
    		"fire, flame, blaze"
    	],
    	[
    		134,
    		"加",
    		3,
    		"addition, increase",
    		"join in; accede to; gain in (influence); increase; add, sum up; append; include; inflict"
    	],
    	[
    		135,
    		"可",
    		3,
    		"good, passable; approval; safe to say, ability to do",
    		"-"
    	],
    	[
    		136,
    		"仮",
    		2,
    		"(Buddhist) vanity",
    		"tempory, provisional; informal, unauthorized; fleeting; assumed (name); interim; acting; temporarily, provisionally; for example; for argument's sake; even for an instant; even as a joke"
    	],
    	[
    		137,
    		"何",
    		5,
    		"what",
    		"what"
    	],
    	[
    		138,
    		"花",
    		4,
    		"flower",
    		"flower, blossom; cherry blossoms; essence, spirit, pride; pearl; youth; best days; beautiful woman, flower arrangement; flower-card game"
    	],
    	[
    		139,
    		"佳",
    		1,
    		"good, excellent, beautiful",
    		"-"
    	],
    	[
    		140,
    		"価",
    		2,
    		"price, cost, value, worth",
    		"price, cost, value, worth"
    	],
    	[
    		141,
    		"果",
    		3,
    		"fruit, reward",
    		"carry out, achieve, complete; realize, perform, fulfill; end, be finished, be exhausted; die, perish; limit, bounds, extremity, result; fate"
    	],
    	[
    		142,
    		"河",
    		2,
    		"river, stream",
    		"river, stream"
    	],
    	[
    		143,
    		"苛",
    		0,
    		"torment, scold, chastise",
    		"-"
    	],
    	[
    		144,
    		"科",
    		3,
    		"course, branch, department, faculty, school, college; arm (of defense); family (in biology)",
    		"-"
    	],
    	[
    		145,
    		"架",
    		1,
    		"frame, mount, stand, support; hang up; shelf",
    		"build (a bridge), hang"
    	],
    	[
    		146,
    		"夏",
    		4,
    		"summer",
    		"summer"
    	],
    	[
    		147,
    		"家",
    		4,
    		"house",
    		"house, home, residence; housing; family, household; family name; fortune; shop, store, seller; dealer"
    	],
    	[
    		148,
    		"荷",
    		2,
    		"shoulder-pole load",
    		"load, baggage, freight, cargo; burden"
    	],
    	[
    		149,
    		"華",
    		1,
    		"flower, petal, shining, luster, China",
    		"flower"
    	],
    	[
    		150,
    		"菓",
    		2,
    		"cakes; fruit",
    		"-"
    	],
    	[
    		151,
    		"貨",
    		2,
    		"property, freight, goods",
    		"-"
    	],
    	[
    		152,
    		"渦",
    		1,
    		"eddy, whirlpool, vortex",
    		"eddy, whirlpool, vortex"
    	],
    	[
    		153,
    		"過",
    		3,
    		"excess; error",
    		"pass, go past; elapse; exceed; spend; tide over; go through; live, (eat) too much; err; fault, error, indiscretion"
    	],
    	[
    		154,
    		"嫁",
    		1,
    		"marry (a man); be married to; blame",
    		"marry off; get married; bride, young wife, daughter-in law"
    	],
    	[
    		155,
    		"暇",
    		1,
    		"rest, leisure",
    		"time; leisure; poor business; leave of absence; dismissal; divorce"
    	],
    	[
    		156,
    		"禍",
    		1,
    		"calamity, misfortune",
    		"-"
    	],
    	[
    		157,
    		"靴",
    		3,
    		"shoes",
    		"shoes, boots"
    	],
    	[
    		158,
    		"寡",
    		1,
    		"minority, few, minimum; widow,",
    		"-"
    	],
    	[
    		159,
    		"歌",
    		4,
    		"sing, recite, chant, carol",
    		"sing, recite, chant, carol; poem, tanka, ballad, poetry; singing"
    	],
    	[
    		160,
    		"箇",
    		1,
    		"counters for things",
    		"-"
    	],
    	[
    		161,
    		"稼",
    		1,
    		"work, earn money",
    		"work, earn money"
    	],
    	[
    		162,
    		"課",
    		2,
    		"lesson; section, department; allotment, division",
    		"-"
    	],
    	[
    		163,
    		"蚊",
    		1,
    		"-",
    		"mosquito"
    	],
    	[
    		164,
    		"牙",
    		0,
    		"tusk, fang, canine tooth, eyetooth",
    		"tusk, fang, canine tooth, eyetooth"
    	],
    	[
    		165,
    		"瓦",
    		0,
    		"tile",
    		"tile"
    	],
    	[
    		166,
    		"我",
    		1,
    		"ego, self, selfishness, egotism",
    		"I, oneself, self, ego"
    	],
    	[
    		167,
    		"画",
    		4,
    		"picture, drawing, painting, sketch; stroke (in a character)",
    		"-"
    	],
    	[
    		168,
    		"芽",
    		1,
    		"sprout, spear, germ",
    		"sprout, spear, germ"
    	],
    	[
    		169,
    		"賀",
    		1,
    		"congratulations, felicitations, compliments, joy of the occasion",
    		"-"
    	],
    	[
    		170,
    		"雅",
    		1,
    		"elegance, refined taste",
    		"-"
    	],
    	[
    		171,
    		"餓",
    		1,
    		"be hungry, starve, thirst",
    		"-"
    	],
    	[
    		172,
    		"介",
    		2,
    		"shell, shellfish",
    		"-"
    	],
    	[
    		173,
    		"回",
    		3,
    		"time; round, game, bout, heat, inning, innings; go around",
    		"and, turn, go around; revolve, rotate, spin, gyrate; patrol, tour; take effect (medicine); be distributed; be past (time); be transferred; circularize; pass around; forward, transmit; refer to; transfer; lend money"
    	],
    	[
    		174,
    		"灰",
    		2,
    		"ashes",
    		"ashes"
    	],
    	[
    		175,
    		"会",
    		4,
    		"Buddhist ceremony; understanding; meeting, assembly; party; association, club",
    		"meet, interview"
    	],
    	[
    		176,
    		"快",
    		2,
    		"pleasure, enjoyment",
    		"pleasant, agreeable, comfortable, refreshing, delightful; well (from illness)"
    	],
    	[
    		177,
    		"戒",
    		1,
    		"commandment; admonition",
    		"admonish, warn, prohibit"
    	],
    	[
    		178,
    		"改",
    		2,
    		"change, modify, convert; renew, renovate; reform, mend, rectify; amend, revise, improve; examine, inspect, search",
    		"change, modify, convert; renew, renovate; reform, mend, rectify; amend, revise, improve; examine, inspect, search; be renewed, be renovated; be modified, be revised; be improved, be reformed; be ceremonious"
    	],
    	[
    		179,
    		"怪",
    		1,
    		"mystery; apparition",
    		"doubt; be suspicious of; wonder at; undependable, mysterious, strange"
    	],
    	[
    		180,
    		"拐",
    		1,
    		"falsify, kidnap",
    		"-"
    	],
    	[
    		181,
    		"悔",
    		1,
    		"repend, regret",
    		"repend, regret;repent of; mourn for, condole with; vexing, regretable, mortifying"
    	],
    	[
    		182,
    		"海",
    		4,
    		"sea, ocean",
    		"sea, ocean"
    	],
    	[
    		183,
    		"界",
    		4,
    		"circle, world, boundary, limits",
    		"-"
    	],
    	[
    		184,
    		"皆",
    		3,
    		"all, everybody, everything",
    		"all, everybody, everything"
    	],
    	[
    		185,
    		"械",
    		2,
    		"fetters; machine; instrument",
    		"-"
    	],
    	[
    		186,
    		"絵",
    		3,
    		"picture, drawing, painting, sketch, illustration, cut, print",
    		"-"
    	],
    	[
    		187,
    		"開",
    		4,
    		"opening",
    		"open, unfold, unroll, uncover, unpack, untie, unseal; establish; clear (land); pioneer; clear the way; convene; enlighten ( a country); bloom; differ, have a margin; widen (the space between); become civilized, become modernized; become sensible; be opened to traffic; feel relief; be open; grow, develop (a town); start, commence; become vacant, become empty, be disengaged, be free; empty, vacate; leave (a space); clear (the table); make (a hole); reserve (a seat), stay away from; dawn; end, expire, be over; begin"
    	],
    	[
    		188,
    		"階",
    		2,
    		"stair, staircase; round; step; grade; story, floor; counter for stories (in a building)",
    		"-"
    	],
    	[
    		189,
    		"塊",
    		1,
    		"lump, chunk, clod, mass, clot, ingot",
    		"lump, chunk, clod, mass; clump, cluster, group; flock; bigotry; personification (of)"
    	],
    	[
    		190,
    		"楷",
    		0,
    		"square-character style; straight tree; correctness, rule, model",
    		"-"
    	],
    	[
    		191,
    		"解",
    		3,
    		"explanation, notes; key; excuse; understanding",
    		"untie, undo, loosen, unpack; unravel, disentangle, unsew; dismantle; solve, answer; dispel; cancel; absolve; release; dismiss (a person); explain; comb out; get loose, come untied; relent; be solved, be dispelled; be relieved (of a job)"
    	],
    	[
    		192,
    		"潰",
    		0,
    		"crush, smash, break; dissipate; waste(time); kill, butcher; demolish; melt down",
    		"be smashed, be destroyed, collapse; be defaced(type); be ruined; be worn down; crush, smash, break; dissipate; waste(time); kill, butcher; demolish; melt down"
    	],
    	[
    		193,
    		"壊",
    		1,
    		"break",
    		"break; destroy; tear up; crack; smack; mar; be broken; be demolished; fall into ruin"
    	],
    	[
    		194,
    		"懐",
    		1,
    		"heart, feeling",
    		"bosom, breast, heart; pocket, purse; dear, longed-for; yearning for; yearn for, miss someone; win over, win another’s heart; become attached to"
    	],
    	[
    		195,
    		"諧",
    		0,
    		"harmony, order, suitability",
    		"-"
    	],
    	[
    		196,
    		"貝",
    		2,
    		"-",
    		"shell, shellfish"
    	],
    	[
    		197,
    		"外",
    		5,
    		"outside, without, beside, beyond the scope off",
    		"outside, exterior, open air; some other place; outside; the rest; take off, remove, unfasten, undo, detach, disconnect, put out off gear; miss, fail; avoid, evade, dodge; be off, come off, be or get out of place, be out of gear, run off the track, slip out or off, be dislocated, be disconnected, be off the hook (a phone), be unbuttoned, be unzipped"
    	],
    	[
    		198,
    		"劾",
    		1,
    		"criminal investigation",
    		"-"
    	],
    	[
    		199,
    		"害",
    		3,
    		"injury, harm, damage, mischief, interference",
    		"-"
    	],
    	[
    		200,
    		"崖",
    		0,
    		"cliff, bluff, precipice",
    		"cliff, bluff, precipice"
    	],
    	[
    		201,
    		"涯",
    		1,
    		"shore",
    		"-"
    	],
    	[
    		202,
    		"街",
    		1,
    		"street, avenue; town",
    		"town; quarters; street"
    	],
    	[
    		203,
    		"慨",
    		1,
    		"be sad",
    		"-"
    	],
    	[
    		204,
    		"蓋",
    		0,
    		"cover",
    		"cover, lid, flap, hood"
    	],
    	[
    		205,
    		"該",
    		1,
    		"the said",
    		"-"
    	],
    	[
    		206,
    		"概",
    		1,
    		"approximation; condition, situation",
    		"-"
    	],
    	[
    		207,
    		"骸",
    		0,
    		"bone, body",
    		"-"
    	],
    	[
    		208,
    		"垣",
    		1,
    		"-",
    		"fence, hedge, wall"
    	],
    	[
    		209,
    		"柿",
    		0,
    		"-",
    		"persimmon"
    	],
    	[
    		210,
    		"各",
    		2,
    		"each",
    		"each, every, either, respectively"
    	],
    	[
    		211,
    		"角",
    		2,
    		"angle; corner; square; squared timber; target",
    		"corner, angle; edge; angularity; harshness; horn, feeler, tentacle"
    	],
    	[
    		212,
    		"拡",
    		2,
    		"expand, enlarge, widen; unfurl; open (arms or a package), stretch, spread",
    		"-"
    	],
    	[
    		213,
    		"革",
    		2,
    		"tanned leather",
    		"skin; hide; leather; fur, pelt; bark; peeling, husk, shell; film, cream"
    	],
    	[
    		214,
    		"格",
    		3,
    		"status, rank; capacity, character; standard; a rule; a case (in law); case (in grammer)",
    		"-"
    	],
    	[
    		215,
    		"核",
    		1,
    		"nucleus, core, seed, kernel",
    		"-"
    	],
    	[
    		216,
    		"殻",
    		1,
    		"husk, hull, nutshell; cast-off skin; tofu refuse; corpse; earth's crust",
    		"husk, hull, nutshell; cast-off skin; tofu refuse; corpse; earth's crust"
    	],
    	[
    		217,
    		"郭",
    		1,
    		"enclosure; quarters",
    		"-"
    	],
    	[
    		218,
    		"覚",
    		3,
    		"remember, memorize; learn, perceive; feel, experience, know; expect",
    		"remember, memorize; learn, perceive; feel, experience, know; expect; awake, wake up; be disillusioned; sober up"
    	],
    	[
    		219,
    		"較",
    		2,
    		"compare, balance, contrast",
    		"-"
    	],
    	[
    		220,
    		"隔",
    		1,
    		"distance, every other, alternate",
    		"separate, interpose; screen, shield; estrange; be distant from, be separated from, become estranged"
    	],
    	[
    		221,
    		"閣",
    		1,
    		"tower, tall building, palace, cabinet (of a government)",
    		"-"
    	],
    	[
    		222,
    		"確",
    		3,
    		"firm, tight, hard, solid",
    		"ascertain, confirm, verify; sure, positive; accurate; reliable; sound, firm; clear, evident; genuine; able, competent; sober, sane; I think; if I remember right; certainly, doubtless; for certain"
    	],
    	[
    		223,
    		"獲",
    		1,
    		"get, acquire, find, earn, win, gain, receive; can, be able to, may; commit (sin)",
    		"get, acquire, find, earn, win, gain, receive; can, be able to, may; commit (sin)"
    	],
    	[
    		224,
    		"嚇",
    		1,
    		"threaten; frighten; intimidate",
    		"-"
    	],
    	[
    		225,
    		"穫",
    		1,
    		"harvest, reap",
    		"-"
    	],
    	[
    		226,
    		"学",
    		5,
    		"learning, study, science, scholarship, erudition",
    		"learn, study"
    	],
    	[
    		227,
    		"岳",
    		1,
    		"peak, mountain",
    		"peak, mountain"
    	],
    	[
    		228,
    		"楽",
    		4,
    		"music; comfort, ease, relief; pleasure; concluding program",
    		"enjoy; amuse oneself; anticipate; merry, pleasant, cheerful, joyful"
    	],
    	[
    		229,
    		"額",
    		2,
    		"tablet, plaque, framed picture; sum, quantity, amount, volume; denomination",
    		"forehead, brow"
    	],
    	[
    		230,
    		"顎",
    		0,
    		"jaw",
    		"jaw, chin"
    	],
    	[
    		231,
    		"掛",
    		1,
    		"-",
    		"hang on, be suspended from, be caught, be trapped; be built; begin; arrive at; require, cost; play against, oppose; be splashed; weigh (a pound); be levied; (the instrument or tool) works; attack, fall on; is now showing at; consult; depend (on a son); hang, set up (a ladder); cover; construct, install; sit down; sprinkle, pour on; put on; ring up; weigh; multiply; levy; pay (in installments); anchor; start (a machine); wind, turn on (radio); spend on; offer (prizes); put (under treatment); set (on fire); duty; person in charge; expenses, charges; tax; dependence (on someone); scale; outward appearance; construction; beginning; bite (of a tool)"
    	],
    	[
    		232,
    		"潟",
    		1,
    		"-",
    		"lagoon"
    	],
    	[
    		233,
    		"括",
    		1,
    		"tie up, hang (someone); arrest; fasten",
    		"-"
    	],
    	[
    		234,
    		"活",
    		3,
    		"living; being helped; resuscitation",
    		"-"
    	],
    	[
    		235,
    		"喝",
    		1,
    		"scold, get hoarse",
    		"-"
    	],
    	[
    		236,
    		"渇",
    		1,
    		"thirst",
    		"be thirsty; feel dry; dry up, be parched"
    	],
    	[
    		237,
    		"割",
    		3,
    		"divide, cut, halve; separate; split, rip; break, crack, smash; dilute",
    		"divide, break, rate, percentage"
    	],
    	[
    		238,
    		"葛",
    		0,
    		"arrowroot, a strong-fiber vine",
    		"arrowroot; arrowroot starch"
    	],
    	[
    		239,
    		"滑",
    		1,
    		"slide, glide, skate; be slippery; slip; fail in exams",
    		"slide, glide, skate; be slippery; slip; fail in exams; smooth"
    	],
    	[
    		240,
    		"褐",
    		1,
    		"woolen kimono",
    		"-"
    	],
    	[
    		241,
    		"轄",
    		1,
    		"wedge",
    		"-"
    	],
    	[
    		242,
    		"且",
    		1,
    		"-",
    		"also, futhermore"
    	],
    	[
    		243,
    		"株",
    		1,
    		"-",
    		"stump; shares, stocks; connections; business; counter for small plants"
    	],
    	[
    		244,
    		"釜",
    		0,
    		"-",
    		"kettle, cauldron, iron pot; bioler"
    	],
    	[
    		245,
    		"鎌",
    		1,
    		"-",
    		"sickle, scythe; trick"
    	],
    	[
    		246,
    		"刈",
    		1,
    		"-",
    		"cut, clip; shear; reap; trim, prune"
    	],
    	[
    		247,
    		"干",
    		2,
    		"parch, get dry; ebb, recede",
    		"parch, get dry; ebb, recede; dry; desiccate; drain (off); drink up; dry up"
    	],
    	[
    		248,
    		"刊",
    		2,
    		"publishig; carve, engrave",
    		"-"
    	],
    	[
    		249,
    		"甘",
    		2,
    		"presume upon, take advantage of; coax",
    		"presume upon, take advantage of; coax; pamper, be indulgent, coddle; sweet; honeyed (words); lenient; half-witted; easy-going; soft, mild; loose; trashy, sentimental"
    	],
    	[
    		250,
    		"汗",
    		2,
    		"be sweaty",
    		"perspiration"
    	],
    	[
    		251,
    		"缶",
    		1,
    		"can",
    		"-"
    	],
    	[
    		252,
    		"完",
    		3,
    		"comletion, end",
    		"-"
    	],
    	[
    		253,
    		"肝",
    		1,
    		"liver",
    		"liver, pluck, courage, nerve"
    	],
    	[
    		254,
    		"官",
    		3,
    		"the Government, the authorities; the Court",
    		"-"
    	],
    	[
    		255,
    		"冠",
    		1,
    		"crown, diadem; first, best, peerless",
    		"crown, diadem; a top character radical"
    	],
    	[
    		256,
    		"巻",
    		2,
    		"volume, book, part; reel",
    		"roll up; wind, coil; tie around; wind up; roll (of silk); volume, book; winding (of a clock)"
    	],
    	[
    		257,
    		"看",
    		2,
    		"see",
    		"-"
    	],
    	[
    		258,
    		"陥",
    		1,
    		"fall into, get into, slide into, lapse into; cave in, sink; fall (a fort)",
    		"fall into, get into, slide into, lapse into; cave in, sink; fall (a fort); ensnare, tempt"
    	],
    	[
    		259,
    		"乾",
    		2,
    		"heaven; emperor",
    		"dry, dry up; be dry; desiccate"
    	],
    	[
    		260,
    		"勘",
    		1,
    		"perception, intuition; the sixth sense",
    		"-"
    	],
    	[
    		261,
    		"患",
    		1,
    		"disease",
    		"be ill, suffer from; be afficted"
    	],
    	[
    		262,
    		"貫",
    		1,
    		"8.3/1 pounds",
    		"pierce, penetrate, perforate; shoot through; attain (one's object)"
    	],
    	[
    		263,
    		"寒",
    		3,
    		"midwinter, coldest season",
    		"cold, chilly"
    	],
    	[
    		264,
    		"喚",
    		1,
    		"cry, scream, yell, shout, clamor",
    		"-"
    	],
    	[
    		265,
    		"堪",
    		1,
    		"endure; support; withstand, resist, brave, weather; be fit for, be equal to",
    		"endure; support; withstand, resist, brave, weather; be fit for, be equal to"
    	],
    	[
    		266,
    		"換",
    		2,
    		"change, turn, convert, exchange, renew, substitute, replace",
    		"change, turn, convert, exchange, renew, substitute, replace; relieve"
    	],
    	[
    		267,
    		"敢",
    		1,
    		"sad, tragic, pitiful; frail, feeble; fleeting; unkind",
    		"-"
    	],
    	[
    		268,
    		"棺",
    		1,
    		"casket, coffin",
    		"-"
    	],
    	[
    		269,
    		"款",
    		1,
    		"article, section; goodwill, friendship; collusion",
    		"-"
    	],
    	[
    		270,
    		"間",
    		5,
    		"interval; space; between; among; discord; favorable opportunity; six feet",
    		"space, interval, gap; between, among; midway; on the way; distance; time, period; relationship; room; pause; rest (in music); a while; leisure; luck; timing, harmony"
    	],
    	[
    		271,
    		"閑",
    		1,
    		"leisure",
    		"-"
    	],
    	[
    		272,
    		"勧",
    		1,
    		"recommend, advise, encourage; offer (wine)",
    		"recommend, advise, encourage; offer (wine)"
    	],
    	[
    		273,
    		"寛",
    		1,
    		"leniency, generosity",
    		"-"
    	],
    	[
    		274,
    		"幹",
    		1,
    		"(tree) trunk",
    		"(tree) trunk"
    	],
    	[
    		275,
    		"感",
    		3,
    		"feeling, sensation, sentiment; sense; emotion; impression; intuition",
    		"-"
    	],
    	[
    		276,
    		"漢",
    		4,
    		"Han (Dynasty); (old name for China), masculine suffix",
    		"-"
    	],
    	[
    		277,
    		"慣",
    		3,
    		"experience; become a habit",
    		"tame, charm (animals); train, exercise, drill; habituate, accustom to; get used to, become experienced; be tamed; get too familiar, mature"
    	],
    	[
    		278,
    		"管",
    		2,
    		"pipe, tube; (brush) holder; wind instrument",
    		"pipe, tube; drunken talk"
    	],
    	[
    		279,
    		"関",
    		3,
    		"barrier, gateway",
    		"concern oneself in, have to do with; affect, influence; stick to (opinions); barrier, checking station"
    	],
    	[
    		280,
    		"歓",
    		1,
    		"joy, pleasure",
    		"-"
    	],
    	[
    		281,
    		"監",
    		1,
    		"office, government office; director, head official",
    		"-"
    	],
    	[
    		282,
    		"緩",
    		1,
    		"loosen, lessen; relax; be unguarded; be moderate",
    		"loose, slack; lenient, generous, slow; easy (grade); gentle; slow (stream); loosen, lessen; relax; be unguarded; be moderate; unbend, unfasten; ease, slacken; mitigate"
    	],
    	[
    		283,
    		"憾",
    		1,
    		"regret, be sorry for",
    		"-"
    	],
    	[
    		284,
    		"還",
    		1,
    		"return; take one's leave; come again; come around (time)",
    		"-"
    	],
    	[
    		285,
    		"館",
    		4,
    		"mansion, large building, hall",
    		"mansion; temporary residence"
    	],
    	[
    		286,
    		"環",
    		2,
    		"ring",
    		"-"
    	],
    	[
    		287,
    		"簡",
    		2,
    		"brevity, simplicity",
    		"-"
    	],
    	[
    		288,
    		"観",
    		3,
    		"look, appearance; spectacle; condition; view, outlook",
    		"-"
    	],
    	[
    		289,
    		"韓",
    		0,
    		"Korea",
    		"-"
    	],
    	[
    		290,
    		"艦",
    		1,
    		"warship",
    		"-"
    	],
    	[
    		291,
    		"鑑",
    		1,
    		"take warning from, learn a lesson from",
    		"take warning from, learn a lesson from"
    	],
    	[
    		292,
    		"丸",
    		2,
    		"full (month); perfection; purity; the ship-name suffix anciently used after the name of a sword or a child",
    		"full (month); perfection; purity; the ship-name suffix anciently used after the name of a sword or a child; make round, round off, roll up, curl up; seduce; cajole; explain away; round, circular, spherical"
    	],
    	[
    		293,
    		"含",
    		2,
    		"hold in the mouth; bear in mind, understand; cherish, harbor; contain, comprise, have, hold, include, embrace; be charged or loaded with, be dripping with, be full of, be suffused with",
    		"hold in the mouth; bear in mind, understand; cherish, harbor; contain, comprise, have, hold, include, embrace; be charged or loaded with, be dripping with, be full of, be suffused with; include, instruct, make one understand"
    	],
    	[
    		294,
    		"岸",
    		2,
    		"bank, shore, coast, brink",
    		"bank, shore, coast, brink"
    	],
    	[
    		295,
    		"岩",
    		2,
    		"rock, crag; reef",
    		"rock, crag; reef"
    	],
    	[
    		296,
    		"玩",
    		0,
    		"play; take pleasure in; play (on an instrument); play with; make sport of; trifle with (affections)",
    		"-"
    	],
    	[
    		297,
    		"眼",
    		1,
    		"eye; look, gaze; notice, attention; viewpoint; discrimination, insight; experience; treatment; care, favor, pity; texture, weave; mesh; grain, square; sight, vision; tooth (of a saw); weight; eye (of a needle)",
    		"eye"
    	],
    	[
    		298,
    		"頑",
    		1,
    		"stubborn; foolish",
    		"-"
    	],
    	[
    		299,
    		"顔",
    		3,
    		"face, countenance",
    		"face, countenance, expression; honor, prestige"
    	],
    	[
    		300,
    		"願",
    		3,
    		"prayer, petition, vow",
    		"desire, wish, hope; beg, implore"
    	],
    	[
    		301,
    		"企",
    		1,
    		"plan, plot, propose, design, intend, contemplate; attempt, undertake",
    		"plan, plot, propose, design, intend, contemplate; attempt, undertake"
    	],
    	[
    		302,
    		"伎",
    		1,
    		"deed, skill",
    		"-"
    	],
    	[
    		303,
    		"危",
    		3,
    		"be afraid of, feel uneasy about, shrink from",
    		"fear, have misgivings, be doubtful, mistrust; dangerous; critical, grave; uncertain, unreliable; limping; narrow, close; watch out"
    	],
    	[
    		304,
    		"机",
    		2,
    		"desk, table",
    		"desk, table"
    	],
    	[
    		305,
    		"気",
    		5,
    		"spirit, mind, soul, heart; intention; bent, interest; mood, feeling; temper, disposition, nature; care, attention; air, atmosphere; flavor; odor; energy, essence; indications, symptoms; taste; touch, dash, shade, trace; spark, flash; suspicion",
    		"-"
    	],
    	[
    		306,
    		"岐",
    		1,
    		"forking road; street; scene; quarters; arena, theater",
    		"-"
    	],
    	[
    		307,
    		"希",
    		2,
    		"Greece",
    		"-"
    	],
    	[
    		308,
    		"忌",
    		1,
    		"mourning; death anniversary; something detestable",
    		"abhor, have an aversion for, avoid, shun; taboo; abstain from; objectionable, abominable, offensive; ominous, unlucky"
    	],
    	[
    		309,
    		"汽",
    		1,
    		"vapor, steam",
    		"-"
    	],
    	[
    		310,
    		"奇",
    		1,
    		"strangeness, curiosity, eccentricity",
    		"-"
    	],
    	[
    		311,
    		"祈",
    		2,
    		"pray; wish",
    		"pray; wish"
    	],
    	[
    		312,
    		"季",
    		2,
    		"season",
    		"-"
    	],
    	[
    		313,
    		"紀",
    		1,
    		"account, narrative, history, annals, geological period",
    		"-"
    	],
    	[
    		314,
    		"軌",
    		1,
    		"wheel track; railway; orbit; rut; rule; model; road, way of doing",
    		"-"
    	],
    	[
    		315,
    		"既",
    		1,
    		"previously; already, long ago; on the point of; actually",
    		"previously; already, long ago; on the point of; actually"
    	],
    	[
    		316,
    		"記",
    		3,
    		"account, narrative, history, annals; remembering; writing; the Kojiki",
    		"write down; inscribe; mention, give an account of"
    	],
    	[
    		317,
    		"起",
    		4,
    		"get up, rise, awake; occur; (a fire) is kindled",
    		"get up, rise, awake; occur; (a fire) is kindled; raise up, set up, pick up (someone); open, begin; promote, organize; generate; get sick; awaken; establish; plow; kindle (a fire); happen; break out; originate in; rise, flourish, spring up; be produced; have an attack of"
    	],
    	[
    		318,
    		"飢",
    		1,
    		"be hungry, starve",
    		"be hungry, starve"
    	],
    	[
    		319,
    		"鬼",
    		1,
    		"devil, demon; spirits of the dead",
    		"devil, demon, ghost; spirits of the dead; fiend; creditor; the one who is \"it\" (in games)"
    	],
    	[
    		320,
    		"帰",
    		4,
    		"return; take one's leave; come again; come around (time)",
    		"return; take one's leave; come again; come around (time); send (someone) back"
    	],
    	[
    		321,
    		"基",
    		2,
    		"radical (in chemistry); counter for lanterns, wreaths, motors, silos, and heavy machines; foundation; fundamentals; basis",
    		"basis, foundation, origin"
    	],
    	[
    		322,
    		"寄",
    		3,
    	],
    	[
    		323,
    		"規",
    		3,
    		"standard; measure",
    		"-"

