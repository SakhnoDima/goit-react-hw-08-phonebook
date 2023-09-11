/*! For license information please see 551.9d0c79d2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[551],{5551:function(t,r,e){e.r(r),e.d(r,{default:function(){return S}});var n,o,i,a,c=e(5861),u=e(9439),s=e(2791),l=e(8174),h=e(168),f=e(5867),p=f.zo.form(n||(n=(0,h.Z)(["\n  margin: 16px auto;\n  display: flex;\n  flex-direction: column;\n  max-width: ",";\n  padding: ",";\n  background-color: var(--dark-background);\n  color: var(--dark-text);\n  box-shadow: ",";\n  border-radius: ",";\n"])),(function(t){return t.theme.spacing(100)}),(function(t){return t.theme.spacing(3)}),(function(t){return t.theme.shadows.regular}),(function(t){return t.theme.spacing(1)})),d=f.zo.input(o||(o=(0,h.Z)(["\n  outline: 0;\n  border: 1px solid var(--button-border);\n  padding: 8px 12px;\n  font: inherit;\n  cursor: pointer;\n  background-color: var(--dark-background);\n  color: var(--light-text);\n  &:focus {\n    border: 1px solid ",";\n  }\n"])),(function(t){return t.theme.colors.accent})),v=f.zo.button(i||(i=(0,h.Z)(["\n  margin: 0 auto;\n  width: 150px;\n  padding: 8px 16px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: ",";\n  border: 1px solid ",";\n  color: var(--light-text);\n  background-color: var(--button-background);\n  font-size: ",";\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(t){return t.theme.spacing(1)}),(function(t){return t.theme.colors.dark}),(function(t){return t.theme.fontSizes.medium}),(function(t){return t.theme.colors.accent})),g=f.zo.label(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ",";\n  color: var(--light-text);\n  font-size: 20px;\n"])),(function(t){return t.theme.spacing(8)})),m=e(9434),y=e(318),x=e(7246),w=e(3329);function b(){b=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(S){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof f?r:f,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:k(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function f(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==r&&e.call(m,i)&&(v=m);var y=d.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function k(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new w(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(y),u(y,c,"Generator"),u(y,i,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var k,L,E=localStorage.getItem(x.EH),j=function(){var t=(0,m.I0)(),r=(0,s.useState)(""),e=(0,u.Z)(r,2),n=e[0],o=e[1],i=(0,s.useState)(""),a=(0,u.Z)(i,2),h=a[0],f=a[1],x=(0,s.useState)(""),k=(0,u.Z)(x,2),L=k[0],j=k[1],_=function(t){var r=t.target,e=r.name,n=r.value;switch(e){case"name":return o(n);case"email":return f(n);case"password":return j(n)}},O=function(){var r=(0,c.Z)(b().mark((function r(e){return b().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,t(y.O.register({name:n,email:h,password:L})).unwrap();case 4:r.next=11;break;case 6:r.prev=6,r.t0=r.catch(1),alert("Something went wrong, try again"),l.Am.error(r.t0,{autoClose:2e3,theme:"".concat("theme-dark"===E?"dark":"light")}),console.log(r.t0);case 11:f(""),o(""),j("");case 14:case"end":return r.stop()}}),r,null,[[1,6]])})));return function(t){return r.apply(this,arguments)}}();return(0,w.jsxs)(p,{onSubmit:O,autoComplete:"off",children:[(0,w.jsxs)(g,{children:["Username",(0,w.jsx)(d,{onChange:_,type:"text",name:"name",value:n})]}),(0,w.jsxs)(g,{children:["Email",(0,w.jsx)(d,{onChange:_,type:"email",name:"email",value:h})]}),(0,w.jsxs)(g,{children:["Password",(0,w.jsx)(d,{onChange:_,type:"password",name:"password",value:L})]}),(0,w.jsx)(v,{type:"submit",children:"Register"})]})},_=f.zo.section(k||(k=(0,h.Z)(["\n  margin: 40px auto;\n  padding: 16px;\n  max-width: 800px;\n  box-shadow: 0px 4px 10px 4px #9e9e9e;\n  border-radius: 4px;\n  background-color: var(--dark-background);\n  color: var(--dark-text);\n"]))),O=f.zo.h2(L||(L=(0,h.Z)(["\n  color: var(--light-text);\n  text-align: center;\n  margin-bottom: ",";\n"])),(function(t){return t.theme.spacing(8)})),S=function(){return(0,w.jsxs)(_,{children:[(0,w.jsx)(O,{children:"Registration Form"}),(0,w.jsx)(j,{})]})}}}]);
//# sourceMappingURL=551.9d0c79d2.chunk.js.map