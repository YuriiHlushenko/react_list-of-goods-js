(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var s=e(6),c=e.n(s),i=e(5),o=e(7),r=(e(12),e(13),e(1)),a=e(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u="alphabet",b="length";var j=function(){var t=Object(r.useState)(""),n=Object(i.a)(t,2),e=n[0],s=n[1],c=Object(r.useState)(!1),j=Object(i.a)(c,2),h=j[0],d=j[1],f=function(t,n,e){var s=Object(o.a)(t);return n&&s.sort((function(t,e){return n===u?t.localeCompare(e):t.length-e.length})),e&&(s=s.reverse()),s}(l,e,h);return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",onClick:function(){return s(u)},className:e===u?"button is-info":"button is-info is-light",children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",onClick:function(){return s(b)},className:e===b?"button is-info":"button is-info is-light",children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:h?"button is-warning":"button is-warning is-light",onClick:function(){return d(!h)},children:"Reverse"}),e||h?Object(a.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),d(!1)},children:"Reset"}):null]}),Object(a.jsx)("ul",{children:f.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t},f.lastIndexOf(t))}))})]})};c.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d0888129.chunk.js.map