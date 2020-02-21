(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{10:function(n,e,t){n.exports=t.p+"static/media/checked.facd84e9.svg"},15:function(n,e,t){n.exports=t.p+"static/media/plus.223a3e98.svg"},19:function(n,e,t){n.exports=t(28)},28:function(n,e,t){"use strict";t.r(e);var r,o=t(0),a=t.n(o),i=t(4),c=t.n(i),u=t(1),l=t(2),d=t(3),f=t(17),s=t(16);!function(n){n[n.addTodo=0]="addTodo",n[n.removeTodo=1]="removeTodo",n[n.toggleDone=2]="toggleDone"}(r||(r={}));var p=Object(o.createContext)([]),b=Object(o.createContext)(void 0);function m(n,e){switch(e.type){case r.addTodo:var t=[].concat(Object(s.a)(n),[e.payload]);return window.localStorage.setItem("todos",JSON.stringify(t)),t;case r.removeTodo:var o=n.filter((function(n){return n.id!==e.payload}));return window.localStorage.setItem("todos",JSON.stringify(o)),o;case r.toggleDone:var a=n.map((function(n){return n.id===e.payload?Object(f.a)({},n,{isDone:!n.isDone}):n}));return window.localStorage.setItem("todos",JSON.stringify(a)),a;default:return n}}function v(n){var e=n.children,t=Object(o.useReducer)(m,JSON.parse(window.localStorage.getItem("todos"))||[]),r=Object(d.a)(t,2),i=r[0],c=r[1];return a.a.createElement(p.Provider,{value:i},a.a.createElement(b.Provider,{value:c},e))}function g(){return Object(o.useContext)(b)}var h=t(10),x=t.n(h);function w(){var n=Object(u.a)(["\n  position: relative;\n  cursor: pointer;\n\n  &::after {\n    content: '';\n    display: block;\n    width: 32px;\n    height: 32px;\n    border: 2px solid #aaa;\n    border-radius: 50%;\n  }\n"]);return w=function(){return n},n}function O(){var n=Object(u.a)(["\n  cursor: pointer;\n"]);return O=function(){return n},n}function j(){var n=Object(u.a)(["\n  color: ",";\n  font-weight: 400;\n  font-size: 20px;\n\n  &:hover {\n    text-decoration: line-through;\n  }\n"]);return j=function(){return n},n}function y(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]);return y=function(){return n},n}function E(n){var e=n.todo,t=g();function o(){t({type:r.toggleDone,payload:e.id})}return a.a.createElement(D,null,a.a.createElement(C,{isDone:e.isDone,onClick:function(){t({type:r.removeTodo,payload:e.id})}},e.title),e.isDone?a.a.createElement(S,{onClick:o,src:x.a,alt:e.title}):a.a.createElement(T,{onClick:o}))}var k,D=l.b.div(y()),C=l.b.h2(j(),(function(n){return n.isDone?"#999":"#555"})),S=l.b.img(O()),T=l.b.span(w());function z(){var n=Object(u.a)(["\n  font-size: 18px;\n  font-style: italic;\n  text-align: center;\n  color: ",";\n"]);return z=function(){return n},n}function J(){var n=Object(o.useContext)(p);return a.a.createElement(a.a.Fragment,null,n.length?n.map((function(n){return a.a.createElement(E,{key:n.id,todo:n})})):a.a.createElement(I,null,"Gratz! No todos, go learn React!"))}!function(n){n.white="#fff",n.primary="#2196f3",n.dark="#555",n.lightGray="#f2f2f2"}(k||(k={}));var I=l.b.div(z(),k.dark),N=t(14),F=t.n(N);function L(){var n=Object(u.a)(["\n  border: 2px solid ",";\n  padding: 20px 20px;\n  border-radius: 5px;\n  color: ",";\n  font-size: 18px;\n  font-family: 'Lacquer', sans-serif;\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n\n  & + label {\n    position: absolute;\n    left: 5px;\n    top: 10px;\n    transition: all 0.4s;\n  }\n\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    top: -4px;\n  }\n"]);return L=function(){return n},n}var q=l.b.input(L(),k.primary,k.dark);function G(){var n=Object(u.a)(["\n  font-size: 12px;\n  font-weight: 700;\n  background: ",";\n  padding: 0 4px;\n"]);return G=function(){return n},n}var P=l.b.label(G(),k.white);function R(){var n=Object(u.a)(["\n  position: relative;\n  margin-bottom: 20px;\n"]);return R=function(){return n},n}var B=l.b.div(R());function W(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  min-width: 200px;\n  padding: 10px 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n  transition: all 0.4s;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n\n  &:hover {\n    border: 2px solid ",";\n    color: ",";\n    background-color: ",";\n  }\n"]);return W=function(){return n},n}var A=l.b.button(W(),k.primary,k.white,k.primary,k.primary,k.white);function X(){var n=Object(u.a)(["\n  &::after,\n  &::before {\n    content: '';\n    width: 2px;\n    height: 20px;\n    background-color: ",";\n    position: absolute;\n    right: 20px;\n    top: 10px;\n    cursor: pointer;\n  }\n\n  &::before {\n    transform: rotate(135deg);\n  }\n\n  &::after {\n    transform: rotate(225deg);\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(u.a)(["\n  position: relative;\n"]);return Y=function(){return n},n}function $(){var n=Object(u.a)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.4);\n"]);return $=function(){return n},n}function H(n){var e=n.children,t=n.isOpen,r=n.onClose,i=Object(o.useRef)(document.createElement("div"));return Object(o.useEffect)((function(){var n=i;return document.body.appendChild(i.current),function(){document.body.removeChild(n.current)}}),[i]),t?c.a.createPortal(a.a.createElement(K,null,a.a.createElement(M,null,e,a.a.createElement(Q,{onClick:r}))),i.current):null}var K=l.b.div($()),M=l.b.div(Y()),Q=l.b.span(X(),k.white),U=t(15),V=t.n(U);function Z(){var n=Object(u.a)(["\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: ",";\n  position: relative;\n  border: unset;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center center;\n  cursor: pointer;\n"]);return Z=function(){return n},n}var _=l.b.button(Z(),k.primary,V.a);function nn(){var n=Object(u.a)(["\n  padding: 40px;\n  border: 2px solid #f2f2f2;\n  background: ",";\n  text-align: center;\n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return en=function(){return n},n}function tn(){var n=Object(o.useState)(""),e=Object(d.a)(n,2),t=e[0],i=e[1],c=Object(o.useState)(!1),u=Object(d.a)(c,2),l=u[0],f=u[1],s=g();return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{onClose:function(){f(!1)},isOpen:l},a.a.createElement(on,{onSubmit:function(n){n.preventDefault();var e={title:t,isDone:!1,id:F()()};f(!1),i(""),s({type:r.addTodo,payload:e})}},a.a.createElement(B,null,a.a.createElement(q,{value:t,onChange:function(n){return i(n.target.value)},id:"title",placeholder:" ",required:!0}),a.a.createElement(P,{htmlFor:"title"},"Title")),a.a.createElement(A,{type:"submit"},"Add todo"))),!l&&a.a.createElement(rn,{onClick:function(){f(!0)}}))}var rn=Object(l.b)(_)(en()),on=l.b.form(nn(),k.white);function an(){var n=Object(u.a)(["\n  text-transform: uppercase;\n  font-weight: 700;\n"]);return an=function(){return n},n}function cn(){var n=Object(u.a)(["\n  text-transform: uppercase;\n  font-weight: 700;\n"]);return cn=function(){return n},n}function un(){var n=Object(u.a)(["\n  font-size: 40px;\n  margin-right: 4px;\n"]);return un=function(){return n},n}function ln(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ln=function(){return n},n}function dn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: ",";\n  margin-bottom: 40px;\n"]);return dn=function(){return n},n}function fn(){var n=new Date,e=n.getDate(),t=n.toLocaleString("default",{month:"long"}),r=n.getFullYear(),o=n.toLocaleDateString("default",{weekday:"long"});return a.a.createElement(sn,null,a.a.createElement(pn,null,a.a.createElement(bn,null,e),a.a.createElement("div",null,a.a.createElement(mn,null,t),a.a.createElement("p",null,r))),a.a.createElement(vn,null,o))}var sn=l.b.div(dn(),k.dark),pn=l.b.div(ln()),bn=l.b.span(un()),mn=l.b.p(cn()),vn=l.b.p(an());function gn(){var n=Object(u.a)(["\n  width: 400px;\n  height: 600px;\n  margin: 0 auto;\n  background-color: ",";\n  padding: 40px;\n  position: relative;\n"]);return gn=function(){return n},n}function hn(n){var e=n.children;return a.a.createElement(xn,null,a.a.createElement(jn,null),a.a.createElement(fn,null),e)}var xn=l.b.div(gn(),k.white);function wn(){var n=Object(u.a)(["\n  *, *::before, &::after {\n    box-sizing: border-box;\n    margin: 0;\n  }\n\n  body {\n    background-color: ",";\n    font-family: 'Lacquer', sans-serif;\n    min-height: 100vh;\n    min-width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]);return wn=function(){return n},n}var On=Object(l.a)(wn(),k.lightGray);function jn(){return a.a.createElement(On,null)}var yn=function(){return a.a.createElement(hn,null,a.a.createElement(v,null,a.a.createElement(J,null),a.a.createElement(tn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(yn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.13d991a3.chunk.js.map