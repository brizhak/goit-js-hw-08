!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var n=o("1WSnx"),l=document.querySelector("form"),u=document.querySelector("input"),i=document.querySelector("textarea"),f=JSON.parse(localStorage.getItem("feedback-form-state"));null!==f&&(u.value=f.email,i.value=f.message);var c=e(n).throttle((function(){var e={email:u.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);l.addEventListener("input",(function(e){var t=e.target;(t.matches("input")||t.matches("textarea"))&&c()})),l.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),l.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.c3756dcf.js.map