(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function e(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};function g(a){a=a.a;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function h(a,b){return a.f?(b.a||(b.a=new a.f(b.value)),b.a):b.value}
class k{constructor(a,b){this.b=a;this.f=b;this.a={};this.c=!0;if(0<this.b.length){for(a=0;a<this.b.length;a++){b=this.b[a];var c=b[0];this.a[c.toString()]=new l(c,b[1])}this.c=!0}}g(){if(this.c){if(this.f){var a=this.a,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].a;c&&c.g()}}}else{this.b.length=0;a=g(this);a.sort();for(b=0;b<a.length;b++){var d=this.a[a[b]];(c=d.a)&&c.g();this.b.push([d.key,d.value])}this.c=!0}return this.b}entries(){var a=[],b=g(this);b.sort();for(var c=
0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,h(this,d)])}return new m(a)}keys(){var a=[],b=g(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.a[b[c]].key);return new m(a)}values(){var a=[],b=g(this);b.sort();for(var c=0;c<b.length;c++)a.push(h(this,this.a[b[c]]));return new m(a)}set(a,b){var c=new l(a);this.f?(c.a=b,c.value=b.g()):c.value=b;this.a[a.toString()]=c;this.c=!1;return this}get(a){if(a=this.a[a.toString()])return h(this,a)}has(a){return a.toString()in this.a}}
class l{constructor(a,b){this.key=a;this.value=b;this.a=void 0}}class m{constructor(a){this.a=0;this.b=a}next(){return this.a<this.b.length?{done:!1,value:this.b[this.a++]}:{done:!0,value:void 0}}}"undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.iterator&&(m.prototype[Symbol.iterator]=function(){return this});function n(){}var p="function"==typeof Uint8Array;function q(a,b,c){a.b=null;b||(b=[]);a.j=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var d=a.a[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||p&&d instanceof Uint8Array)){a.h=b-a.f;a.c=d;break a}}a.h=Number.MAX_VALUE}a.i={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.h)d+=a.f,a.a[d]=a.a[d]||r;else{var f=a.h+a.f;a.a[f]||(a.c=a.a[f]={});a.c[d]=a.c[d]||r}}var r=[];
function t(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===r?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===r?a.c[b]=[]:c}function u(a){a=t(a,2);return null==a?0:a}function v(a){a=t(a,16);a=null==a?a:!!a;return null==a?!1:a}function w(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=t(a,c);d&&(a.b[c]=new b(d))}return a.b[c]}function x(a){if(a.b)for(var b in a.b){var c=a.b[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].g();else c&&c.g()}}n.prototype.g=function(){x(this);return this.a};
n.prototype.toString=function(){x(this);return this.a.toString()};function y(a){q(this,a,z)}e(y,n);var z=[5];function A(a){q(this,a,B)}e(A,n);var B=[17];function D(a){q(this,a,E)}e(D,n);var E=[27];function F(a){q(this,a,G)}e(F,n);var G=[8];var H=class{constructor(){}};function I(a,b){a=a.getElementsByTagName("META");for(let c=0;c<a.length;++c)if(a[c].getAttribute("name")===b)return a[c].getAttribute("content");return""};function J(a,b,c){a.a.addEventListener(b,c)}
class K{constructor(a,b){this.a=b;a=I(b,"namespace");if(!a){a="ns-"+Math.random().toString(36).substr(2,5);a:{var c=b.getElementsByTagName("META");for(let d=0;d<c.length;++d)if("namespace"===c[d].getAttribute("name")){c[d].setAttribute("content",a);break a}c=b.querySelector("#mys-meta");c||(c=document.createElement("div"),c.id="mys-meta",c.style.position="absolute",c.style.display="none",b.appendChild(c));b=document.createElement("META");b.setAttribute("name","namespace");b.setAttribute("content",
a);c.appendChild(b)}}}};class L{constructor(){this.a={}}set(a,b){this.a[a]=b}get(a){return this.a[a]}};class M extends H{constructor(){super();this.a=new L}};function N(a){var b=O;2==u(b)||w(w(b,D,1),A,10)&&v(w(w(b,D,1),A,10))||(b=0,mys.engine&&(b=mys.engine.stage()),0==(b&1)&&J(a.a,"overallStart",()=>{}),J(a.a,"browserStart",()=>{}),J(a.a,"browserReady",()=>{}),J(a.a,"browserQuiet",()=>{}))}class P{constructor(a,b){this.b=a;this.a=b}};new y;var Q=class extends M{constructor(a){super(a);new k([])}};var R=class extends Q{};class S extends R{};{var T=b=>new S(b);const a=document.getElementById("mys-content");if(a){const b=new K(document.head,a),c=T(b),d=new P(c,b);var U=d.b.a,V=I(b.a,"runtime_data");if(V){const f=JSON.parse(V);for(const C in f)U.set(C,f[C])}var O,W=I(b.a,"render_config")||"[]";O=new F(W?JSON.parse(W):null);N(d)}};}).call(this);
