(this["webpackJsonptask-react"]=this["webpackJsonptask-react"]||[]).push([[0],{55:function(t,e,i){},61:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i(42),d=i.n(n),r=(i(55),i(16)),c=i(95),o=i(94),s=i(97),u=i(93),l=i(98),p=Object(o.a)(s.a)({width:"100%",maxWidth:"500px",background:"white",padding:"0",borderRadius:"5px"}),b=Object(o.a)("div")({display:"flex",alignItems:"start"}),j=Object(o.a)("div")({marginLeft:"40px",width:"500px",background:"white",borderRadius:"5px",padding:"20px"}),x=Object(o.a)(u.a)((function(t){return{borderBottom:"1px solid black",cursor:"pointer",background:"".concat(t.isActive?"slategrey":"white"),color:"".concat(t.isActive?"white":"black"),"&:hover":{background:"darkgrey "},"&:active":{background:"slategrey "},"&:last-child":{borderBottom:"none",borderRadius:"0px 0px 5px 5px"},"&:first-child":{borderRadius:"5px 5px 0px 0px"}}})),m=Object(o.a)("span")({fontWeight:"Bold"}),h=Object(o.a)(l.a)({padding:"0 !important",borderRadius:"5px"}),g=i(3),O=function(t){var e=t.getItemInfo,i=t.id,a=t.title,n=t.description,d=t.date,r=t.showId;return Object(g.jsxs)("div",{onClick:e,id:i,children:[Object(g.jsx)("h2",{children:a}),r&&Object(g.jsxs)("p",{children:[Object(g.jsx)(m,{children:"Id: "}),i]}),Object(g.jsxs)("p",{children:[Object(g.jsx)(m,{children:"Description: "}),r?n:"".concat(n.slice(0,20).trim(),"...")]}),Object(g.jsxs)("p",{children:[Object(g.jsx)(m,{children:"Date: "}),d]})]})},f=function(t){var e=t.componentInfo,i=e.id,a=e.title,n=e.description,d=e.date;return Object(g.jsx)(j,{children:i?Object(g.jsx)(O,{id:i,description:n,title:a,date:d,showId:!0}):Object(g.jsx)("h1",{children:"Select note to display"})})},v=[{id:1,title:"delectus aut autem",description:"id labore ex et quam laborum",date:new Date("3.08.2000").toDateString()},{id:2,title:"quis ut nam facilis et officia qui",description:"quo vero reiciendis velit similique earum",date:new Date("4.09.2010").toDateString()},{id:3,title:"fugiat veniam minus",description:"odio adipisci rerum aut animi",date:new Date("7.07.2008").toDateString()},{id:4,title:"et porro tempora",description:"alias odio sit",date:new Date("3.08.2025").toDateString()},{id:5,title:"laboriosam mollitia et enim quasi",description:"vero eaque aliquid doloribus et culpa",date:new Date("3.03.2012").toDateString()},{id:6,title:"qui ullam ratione quibusdam ",description:"et fugit eligendi deleniti quidem qui sint nihil autem",date:new Date("10.08.2007").toDateString()},{id:7,title:"illo expedita consequatur quia in",description:"repellat consequatur praesentium vel minus molestias voluptatum",date:new Date("3.12.2008").toDateString()},{id:8,title:"quo adipisci enim quam ut ab",description:"provident id voluptas",date:new Date("2.02.2019").toDateString()}],w=function(){var t=Object(a.useState)({}),e=Object(r.a)(t,2),i=e[0],n=e[1],d=function(t){var e=v.find((function(e){return e.id==t.currentTarget.id}));n(e)};return Object(g.jsxs)(b,{children:[Object(g.jsx)(p,{children:Object(g.jsx)(h,{children:v.map((function(t){return Object(g.jsx)(x,{isActive:!(!i||i.id!==t.id),children:Object(g.jsx)(c.a,{primary:Object(g.jsx)(O,{id:t.id,title:t.title,showId:!1,description:t.description,date:t.date,getItemInfo:d})})},t.id)}))})}),Object(g.jsx)(f,{componentInfo:i})]})};var D=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(w,{})})};d.a.render(Object(g.jsx)(D,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.b364adf1.chunk.js.map