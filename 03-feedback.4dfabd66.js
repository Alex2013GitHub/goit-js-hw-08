var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",o=0/0,i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,v=function(){return s.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return o;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):r.test(e)?o:+e}t=function(e,t,o){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return g(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),function(e,t,o){var i,r,a,f,u,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function S(t){var n=i,o=r;return i=r=void 0,c=t,f=e.apply(o,n)}function j(e){var n=e-l,o=e-c;return void 0===l||n>=t||n<0||d&&o>=a}function x(){var e,n,o,i=v();if(j(i))return O(i);u=setTimeout(x,(e=i-l,n=i-c,o=t-e,d?p(o,a-n):o))}function O(e){return(u=void 0,b&&i)?S(e):(i=r=void 0,f)}function h(){var e,n=v(),o=j(n);if(i=arguments,r=this,l=n,o){if(void 0===u)return c=e=l,u=setTimeout(x,t),s?S(e):f;if(d)return u=setTimeout(x,t),S(l)}return void 0===u&&(u=setTimeout(x,t)),f}return t=y(t)||0,g(o)&&(s=!!o.leading,a=(d="maxWait"in o)?m(y(o.maxWait)||0,t):a,b="trailing"in o?!!o.trailing:b),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=r=u=void 0},h.flush=function(){return void 0===u?f:O(v())},h}(e,t,{leading:i,maxWait:t,trailing:r})};const b="feedback-form-state",S={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};(function(){let e=JSON.parse(localStorage.getItem(b));e&&(S.input.value=e.email||"",S.textarea.value=e.message||"")})(),S.form.addEventListener("submit",function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(b))),localStorage.removeItem(b),S.form.reset()}),S.input.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(){let e={email:S.input.value,message:S.textarea.value};localStorage.setItem(b,JSON.stringify(e))},500));
//# sourceMappingURL=03-feedback.4dfabd66.js.map
