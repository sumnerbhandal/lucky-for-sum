(this["webpackJsonplucky-for-sum"]=this["webpackJsonplucky-for-sum"]||[]).push([[0],{15:function(e,t,n){},20:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(17),r=n.n(l),o=(n(15),n(11),n(18),n(9)),u=n(8),m=n(1);function i(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){fetch("http://cdn.luckyforsum.com/products").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]);return console.log(n),c.a.createElement("div",{className:"product-list"},n?n.map((function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("h2",null,e.title),c.a.createElement("img",{src:"http://cdn.luckyforsum.com".concat(e.hero.formats.small.url)}),c.a.createElement("p",null,e.description),c.a.createElement("p",null,e.price))})):"Loading...")}function s(){return c.a.createElement(u.a,null,c.a.createElement("main",null,c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(u.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/about/".concat("John Doe")},"About")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/contact"},"Contact")))),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:E}),c.a.createElement(m.a,{path:"/about/:name",component:f}),c.a.createElement(m.a,{path:"/contact",component:h}),c.a.createElement(m.a,{render:function(){return c.a.createElement("h1",null,"404: page not found")}}))))}function E(){return c.a.createElement(a.Fragment,null,c.a.createElement(i,null))}var h=function(){var e=Object(m.f)();return c.a.createElement(a.Fragment,null,c.a.createElement("h1",null,"Contact"),c.a.createElement("button",{onClick:function(){return e.push("/")}},"Go to home"))},f=function(e){var t=e.match.params.name;return c.a.createElement(a.Fragment,null,c.a.createElement("h1",null,"About ",t))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.afde13dc.chunk.js.map