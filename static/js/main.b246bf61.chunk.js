(this.webpackJsonpcat_shop=this.webpackJsonpcat_shop||[]).push([[0],{11:function(e,t,c){},1522:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(25),r=c.n(s),a=c(10),i=c.n(a),j=c(26),b=c(4),o=(c(11),c(7)),u=c(1),l=function(e){var t=e.catData,c=e.to_buy,n=e.setTo_buy;return Object(u.jsxs)("div",{className:"display",children:[Object(u.jsx)("h1",{children:"Cat4Lyfe"}),t.map((function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:e.url,alt:"no pic"}),Object(u.jsxs)("div",{className:"para",children:[Object(u.jsx)("p",{children:e.name}),Object(u.jsxs)("p",{children:["\xa3",e.price]})]}),Object(u.jsx)("button",{onClick:function(){return function(e){var t=Object(o.a)(c),s={pic:e.url,name:e.name,price:e.price};t.push(s),n(t)}(e)},children:"ADD"})]})}))]})},p=function(e){var t=e.to_buy,c=e.setTo_buy,n=e.total,s=e.setTotal;return s((function(){for(var e=0,c=0;c<t.length;c++)e+=parseFloat(t[c].price);return e})),Object(u.jsxs)("div",{className:"display",children:[t.map((function(e,n){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:e.pic,alt:"no pic"}),Object(u.jsxs)("div",{className:"para",children:[Object(u.jsx)("p",{children:e.name}),Object(u.jsxs)("p",{children:["\xa3",e.price]})]}),Object(u.jsx)("button",{onClick:function(){return function(e){var n=Object(o.a)(t);n.splice(e,1),c(n)}(n)},children:"remove"})]})})),Object(u.jsxs)("h5",{children:["Total to pay = \xa3",n]})]})},O=c(8),h=c(2);var d=function(){var e=c(33),t=Object(n.useState)(0),s=Object(b.a)(t,2),r=s[0],a=s[1],o=Object(n.useState)([""]),d=Object(b.a)(o,2),x=d[0],m=d[1],f=Object(n.useState)([]),v=Object(b.a)(f,2),y=v[0],k=v[1],_=Object(n.useState)(!1),g=Object(b.a)(_,2),N=(g[0],g[1]),T=Object(n.useState)({error:!1,message:""}),w=Object(b.a)(T,2),S=(w[0],w[1]),D=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,fetch("https://api.thecatapi.com/v1/images/search?limit=10");case 4:if(200===(t=e.sent).status){e.next=7;break}throw new Error("Not Working");case 7:return e.next=9,t.json();case 9:return c=e.sent,e.next=12,C(c);case 12:n=e.sent,m(n),N(!1),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),S({error:!0,message:e.t0.message});case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),C=function(t){return t.map((function(t){t.name=e.name.firstName(),t.price=e.commerce.price()})),t};return Object(n.useEffect)((function(){D()}),[]),x?Object(u.jsxs)(O.a,{children:[Object(u.jsx)("div",{class:"menu",children:Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(O.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.b,{to:"/basket",children:"Basket"})})]})})}),Object(u.jsx)("div",{children:Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{path:"/basket",element:Object(u.jsx)(p,{to_buy:y,setTo_buy:k,total:r,setTotal:a})}),Object(u.jsx)(h.a,{path:"/",element:Object(u.jsx)(l,{catData:x,to_buy:y,setTo_buy:k})})]})})]}):null};r.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[1522,1,2]]]);
//# sourceMappingURL=main.b246bf61.chunk.js.map