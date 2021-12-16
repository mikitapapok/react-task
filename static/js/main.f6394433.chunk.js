(this["webpackJsonptask-react"]=this["webpackJsonptask-react"]||[]).push([[0],{65:function(t,e,i){},71:function(t,e,i){"use strict";i.r(e);var n=i(0),o=i(33),a=i.n(o),c=(i(65),i(9)),r=i(109),d=i(107),s=i(105),l=i(112),u=i(108),p=i(111),b=i(113),j=Object(s.a)(l.a)({width:"100%",maxWidth:"500px",background:"white",padding:"0",borderRadius:"5px"}),x=Object(s.a)("div")({display:"flex",alignItems:"start"}),g=Object(s.a)("div")({marginLeft:"40px",width:"500px",background:"white",borderRadius:"5px",padding:"20px"}),h=Object(s.a)(u.a)((function(t){return{borderBottom:"1px solid black",cursor:"pointer",background:"".concat(t.isActive?"slategrey":"white"),color:"".concat(t.isActive?"white":"black"),"&:hover":{background:"darkgrey "},"&:active":{background:"slategrey "},"&:last-child":{borderBottom:"none",borderRadius:"0px 0px 5px 5px"},"&:first-child":{borderRadius:"5px 5px 0px 0px"}}})),m=Object(s.a)("span")({fontWeight:"Bold"}),O=Object(s.a)(b.a)({padding:"0 !important",borderRadius:"5px"}),f=Object(s.a)(p.a)({"&.MuiButton-root":{marginTop:"20px ",backgroundColor:"#7fffd4 ",color:"black ",fontWeight:"bold "}}),v=Object(s.a)("div")({position:"fixed",zIndex:"10",backgroundColor:"rgba(0, 0, 0, 0.5)",right:"0",bottom:"0",top:"0",left:"0"}),w=Object(s.a)("div")({position:"absolute",zIndex:"10",top:"40%",left:"40%",padding:"20px",display:"flex",flexDirection:"Column",alignItems:"center",background:"white",width:"500px"}),k=Object(s.a)("div")({display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}),D=Object(s.a)("input")({width:"300px",padding:"5px",borderRadius:"5px",border:"2px solid grey"}),I=i(2),S=function(t){var e=t.getItemInfo,i=t.id,n=t.title,o=t.description,a=t.date,c=t.showId,r=t.openModal,d=t.changePickedItem,s=o.length>20?"".concat(o.slice(0,20).trim(),"..."):"".concat(o);return Object(I.jsxs)("div",{onClick:e,id:i,onDoubleClick:d,children:[Object(I.jsx)("h2",{children:n}),c&&Object(I.jsxs)("p",{children:[Object(I.jsx)(m,{children:"Id: "}),i]}),Object(I.jsxs)("p",{children:[Object(I.jsx)(m,{children:"Description: "}),c?o:"".concat(s)]}),Object(I.jsxs)("p",{children:[Object(I.jsx)(m,{children:"Date: "}),a]}),c&&Object(I.jsx)(f,{onClick:r,children:"Edit"})]})},q=function(t){var e=t.componentInfo,i=t.openModal,n=e.id,o=e.title,a=e.description,c=e.date;return Object(I.jsx)(g,{children:n?Object(I.jsx)(S,{id:n,description:a,title:o,date:c,showId:!0,openModal:i}):Object(I.jsx)("h1",{children:"Select note to display"})})},y=[{id:1,title:"delectus aut autem",description:"id labore ex et quam laborum",date:new Date("3.08.2000").toDateString()},{id:2,title:"quis ut nam facilis et officia qui",description:"quo vero reiciendis velit similique earum",date:new Date("4.09.2010").toDateString()},{id:3,title:"fugiat veniam minus",description:"odio adipisci rerum aut animi",date:new Date("7.07.2008").toDateString()},{id:4,title:"et porro tempora",description:"alias odio sit",date:new Date("3.08.2025").toDateString()},{id:5,title:"laboriosam mollitia et enim quasi",description:"vero eaque aliquid doloribus et culpa",date:new Date("3.03.2012").toDateString()},{id:6,title:"qui ullam ratione quibusdam ",description:"et fugit eligendi deleniti quidem qui sint nihil autem",date:new Date("10.08.2007").toDateString()},{id:7,title:"illo expedita consequatur quia in",description:"repellat consequatur praesentium vel minus molestias voluptatum",date:new Date("3.12.2008").toDateString()},{id:8,title:"quo adipisci enim quam ut ab",description:"provident id voluptas",date:new Date("2.02.2019").toDateString()}],C=function(){var t=function(t,e){var i=Object(n.useState)((function(){try{var i=window.localStorage.getItem(t);return i?JSON.parse(i):e}catch(n){return console.log(n),e}})),o=Object(c.a)(i,2),a=o[0],r=o[1];return[a,function(e){try{var i=e instanceof Function?e(a):e;r(i),window.localStorage.setItem(t,JSON.stringify(i))}catch(n){console.log(n)}}]}("todoList",y),e=Object(c.a)(t,2),i=e[0],o=e[1],a=Object(n.useState)([]),s=Object(c.a)(a,2),l=s[0],u=s[1],p=Object(n.useState)({}),b=Object(c.a)(p,2),g=b[0],m=b[1],C=Object(n.useState)(!1),B=Object(c.a)(C,2),R=B[0],M=B[1],A=Object(n.useState)(""),J=Object(c.a)(A,2),E=J[0],N=J[1];Object(n.useEffect)((function(){u(i),console.log(i)}),[]);var T=function(t){W(t),M(!0)},W=function(t){var e=l.find((function(e){return e.id==t.currentTarget.id}));m(e),N(e.description)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(x,{children:[Object(I.jsx)(j,{children:Object(I.jsx)(O,{children:l.map((function(t){return Object(I.jsx)(h,{isActive:g&&g.id===t.id&&!0,children:Object(I.jsx)(r.a,{primary:Object(I.jsx)(S,{id:t.id,title:t.title,showId:!1,description:t.description,date:t.date,getItemInfo:W,changePickedItem:T})})},t.id)}))})}),Object(I.jsx)(q,{componentInfo:g,openModal:function(){M(!0)}})]}),R&&Object(I.jsx)(d.a,{open:R,onClose:function(){M(!1)},BackdropComponent:v,children:Object(I.jsxs)(w,{children:[Object(I.jsx)("h2",{children:"Change Item Description"}),Object(I.jsxs)(k,{children:[Object(I.jsx)(D,{type:"text",onChange:function(t){N(t.target.value)},value:E}),Object(I.jsx)(f,{onClick:function(){l.find((function(t){return t.id===g.id})).description=E,o(l),M(!1)},children:"Change"})]})]})})]})};var B=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(C,{})})};a.a.render(Object(I.jsx)(B,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.f6394433.chunk.js.map