!function(){var e,t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var r="Expected a function",a=0/0,u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,v=s||m||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,g=function(){return v.Date.now()};function S(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":o(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return a;if(S(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var i=l.test(e);return i||c.test(e)?d(e.slice(2),i?2:8):f.test(e)?a:+e}i=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return S(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw TypeError(r);function v(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function p(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||s&&i>=a}function x(){var e,n,i,o=g();if(p(o))return h(o);f=setTimeout(x,(e=o-l,n=o-c,i=t-e,s?b(i,a-n):i))}function h(e){return(f=void 0,m&&i)?v(e):(i=o=void 0,u)}function O(){var e,n=g(),r=p(n);if(i=arguments,o=this,l=n,r){if(void 0===f)return c=e=l,f=setTimeout(x,t),d?v(e):u;if(s)return f=setTimeout(x,t),v(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=j(t)||0,S(n)&&(d=!!n.leading,a=(s="maxWait"in n)?y(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},O.flush=function(){return void 0===f?u:h(g())},O}(e,t,{leading:i,maxWait:t,trailing:o})};var x="feedback-form-state",h={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};(e=JSON.parse(localStorage.getItem(x)))&&(h.input.value=e.email||"",h.textarea.value=e.message||""),h.form.addEventListener("submit",function(e){e.preventDefault(),localStorage.removeItem(x),h.form.reset()}),h.input.addEventListener("input",((t=i)&&t.__esModule?t.default:t)(function(){var e={email:h.input.value,message:h.textarea.value};localStorage.setItem(x,JSON.stringify(e))},500))}();
//# sourceMappingURL=03-feedback.8706f929.js.map