(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),i=c(3),l=c(1);c(9);var r=c(0),s=function(e){for(var a=e.total,c=e.perPage,t=e.currentPage,n=void 0===t?1:t,i=e.onPageChange,l=Math.ceil(a/c),s=[],o=1;o<=l;o+=1)s.push(o);return Object(r.jsxs)("ul",{className:"pagination",children:[Object(r.jsx)("li",{className:"page-item ".concat(1===n?"disabled":""),children:Object(r.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===n,onClick:function(e){e.preventDefault(),n>1&&i(n-1)},children:"\xab"})}),s.map((function(e){return Object(r.jsx)("li",{className:"page-item \n            ".concat(n===e?"active":""),children:Object(r.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(a){a.preventDefault(),i(e)},children:e})},e)})),Object(r.jsx)("li",{className:"page-item ".concat(n===l?"disabled":""),children:Object(r.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":n===l,onClick:function(e){e.preventDefault(),n<l&&i(n+1)},children:"\xbb"})})]})},o=function(){var e=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),a=Object(l.useState)(1),c=Object(i.a)(a,2),t=c[0],n=c[1],o=Object(l.useState)(5),j=Object(i.a)(o,2),d=j[0],u=j[1];return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Items with Pagination"}),Object(r.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat((t-1)*d+1," - ").concat(Math.min(t*d,e.length)," of ").concat(e.length,")")}),Object(r.jsxs)("div",{className:"form-group row",children:[Object(r.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(r.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:d,onChange:function(e){u(Number(e.target.value)),n(1)},children:[Object(r.jsx)("option",{value:"3",children:"3"}),Object(r.jsx)("option",{value:"5",children:"5"}),Object(r.jsx)("option",{value:"10",children:"10"}),Object(r.jsx)("option",{value:"20",children:"20"})]})}),Object(r.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(r.jsx)(s,{total:e.length,perPage:d,currentPage:t,onPageChange:function(e){n(e)}}),Object(r.jsx)("ul",{children:e.slice((t-1)*d,t*d).map((function(e){return Object(r.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(r.jsx)(o,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.1aa815f7.chunk.js.map