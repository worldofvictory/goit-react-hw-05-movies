"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{9198:function(n,e,t){var r=t(184);e.Z=function(n){var e=n.children;return(0,r.jsx)("div",{children:e})}},9760:function(n,e,t){var r=t(3524),c=t(184);e.Z=function(n){var e=n.children;return(0,c.jsxs)("div",{children:[(0,c.jsx)(r.alM,{}),e]})}},854:function(n,e,t){var r=t(8867),c=t(184);e.Z=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(r.g4,{color:"#c24d2c"}),(0,c.jsx)("p",{children:"Soon..."})]})}},3041:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(7689),c=t(1087),i=t(4373),o=t(184);var u=function(n){var e=n.title,t=n.id,u=(0,r.TH)();return(0,o.jsxs)("li",{children:[(0,o.jsx)(i.hjJ,{}),(0,o.jsx)(c.OL,{to:"/movies/".concat(t),state:{from:u},children:e})]})};var a=function(n){var e=n.movies;return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.title;return(0,o.jsx)(u,{title:t,id:e},e)}))})})}},2497:function(n,e,t){var r=t(3524),c=t(184);e.Z=function(n){var e=n.children;return(0,c.jsxs)("div",{children:[(0,c.jsx)(r.alM,{}),e]})}},9591:function(n,e,t){e.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},9275:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r=t(9439),c=t(2791),i=t(1087),o=t(7692),u=t(9198),a=t(184);var s=function(n){var e,t=n.submit,s=(0,i.lr)(),f=(0,r.Z)(s,2),l=f[0],h=f[1],d=null!==(e=l.get("query"))&&void 0!==e?e:"",v=(0,c.useState)(d),j=(0,r.Z)(v,2),x=j[0],m=j[1];return(0,a.jsx)("div",{children:(0,a.jsx)(u.Z,{children:(0,a.jsxs)("form",{onSubmit:function(n){n.preventDefault(),h({query:x}),t(x)},children:[(0,a.jsx)("input",{type:"text",onChange:function(n){var e=n.currentTarget.value.toLocaleLowerCase().trim();m(e)},value:x,placeholder:"Search movies"}),(0,a.jsx)("button",{type:"submit",children:(0,a.jsx)(o.wTD,{})})]})})})},f=t(2690),l=t(9760),h=t(9591),d=t(3041),v=t(854),j=t(2497);var x=function(){var n,e=(0,i.lr)(),t=(0,r.Z)(e,2),o=t[0],u=t[1],x=null!==(n=o.get("query"))&&void 0!==n?n:"",m=(0,c.useState)([]),Z=(0,r.Z)(m,2),E=Z[0],p=Z[1],g=(0,c.useState)(""),y=(0,r.Z)(g,2),D=y[0],S=y[1],b=(0,c.useState)(h.Z.IDLE),k=(0,r.Z)(b,2),_=k[0],w=k[1];return(0,c.useEffect)((function(){""!==x&&(w(h.Z.PENDING),(0,f.oW)(x).then((function(n){p(n.results),w(h.Z.RESOLVED)})).catch((function(n){S("Oops! Something went wrong. Try again."),w(h.Z.REJECTED)})))}),[x]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{submit:function(n){u({query:n})}}),_===h.Z.RESOLVED&&(E.length?(0,a.jsx)(d.Z,{movies:E}):(0,a.jsx)(j.Z,{children:"No items found! Enter other serch therm."})),_===h.Z.REJECTED&&(0,a.jsx)(l.Z,{children:D}),_===h.Z.PENDING&&(0,a.jsx)(v.Z,{})]})}},2690:function(n,e,t){t.d(e,{Df:function(){return i},IQ:function(){return u},Jh:function(){return a},oW:function(){return s},s_:function(){return o}});var r="76adc9c81926b23ecb40fbae47c771a2",c="https://api.themoviedb.org/3";function i(){return fetch("".concat(c,"/trending/movie/day?api_key=").concat(r)).then((function(n){return n.json()}))}function o(n){return fetch("".concat(c,"/movie/").concat(n,"?language=en-US&api_key=").concat(r)).then((function(n){return n.json()}))}function u(n){return fetch("".concat(c,"/movie/").concat(n,"/credits?language=en-US&api_key=").concat(r)).then((function(n){return n.json()}))}function a(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews?language=en-US&api_key=").concat(r)).then((function(n){return n.json()}))}function s(n){return fetch("".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(n)).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=275.e3090cbf.chunk.js.map