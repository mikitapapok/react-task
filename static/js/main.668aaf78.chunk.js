(this["webpackJsonptask-react"]=this["webpackJsonptask-react"]||[]).push([[0],{71:function(e,t,i){},77:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i(38),a=i.n(c),r=i(33),o=(i(71),i(49)),d=i(9),s=i(113),l=i(111),j=i(109),b=i(116),u=i(112),p=i(115),x=i(117),h=Object(j.a)(b.a)({width:"100%",maxWidth:"500px",background:"white",padding:"0",borderRadius:"5px"}),O=Object(j.a)("div")({marginTop:"30px",display:"flex",justifyContent:"center",alignItems:"start"}),m=Object(j.a)("div")({marginLeft:"40px",width:"500px",background:"white",borderRadius:"5px",padding:"20px"}),g=Object(j.a)(u.a)((function(e){return{borderBottom:"1px solid black",cursor:"pointer",background:"".concat(e.isActive?"slategrey":"white"),color:"".concat(e.isActive?"white":"black"),"&:hover":{background:"darkgrey "},"&:active":{background:"slategrey "},"&:last-child":{borderBottom:"none",borderRadius:"0px 0px 5px 5px"},"&:first-child":{borderRadius:"5px 5px 0px 0px"}}})),f=Object(j.a)("span")({fontWeight:"Bold"}),v=Object(j.a)(x.a)({padding:"0 !important",borderRadius:"5px"}),S=Object(j.a)(p.a)({"&.MuiButton-root":{marginTop:"20px ",backgroundColor:"#7fffd4 ",color:"black ",fontWeight:"bold "}}),w=Object(j.a)("div")({position:"fixed",zIndex:"10",backgroundColor:"rgba(0, 0, 0, 0.5)",right:"0",bottom:"0",top:"0",left:"0"}),k=Object(j.a)("div")({position:"absolute",zIndex:"10",top:"40%",left:"40%",padding:"20px",display:"flex",flexDirection:"Column",alignItems:"center",background:"white",width:"500px"}),D=Object(j.a)("div")({display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}),I=Object(j.a)("input")({width:"300px",padding:"5px",borderRadius:"5px",border:"2px solid grey"}),y=i(1),C=function(e){var t=e.getItemInfo,i=e.id,n=e.title,c=e.description,a=e.date,r=e.showId,o=e.openModal,d=e.changePickedItem,s=c.length>20?"".concat(c.slice(0,20).trim(),"..."):"".concat(c);return Object(y.jsxs)("div",{onClick:t,id:i,onDoubleClick:d,children:[Object(y.jsx)("h2",{children:n}),r&&Object(y.jsxs)("p",{children:[Object(y.jsx)(f,{children:"Id: "}),i]}),Object(y.jsxs)("p",{children:[Object(y.jsx)(f,{children:"Description: "}),r?c:"".concat(s)]}),Object(y.jsxs)("p",{children:[Object(y.jsx)(f,{children:"Date: "}),a]}),r&&Object(y.jsx)(S,{onClick:o,children:"Edit"})]})},q=function(e){var t=e.componentInfo,i=e.openModal,n=t.id,c=t.title,a=t.description,r=t.date;return Object(y.jsx)(m,{children:n?Object(y.jsx)(C,{id:n,description:a,title:c,date:r,showId:!0,openModal:i}):Object(y.jsx)("h1",{children:"Select note to display"})})},R=[{id:1,title:"delectus aut autem",description:"id labore ex et quam laborum",date:new Date("3.08.2000").toDateString(),isShared:!0},{id:2,title:"quis ut nam facilis et officia qui",description:"quo vero reiciendis velit similique earum",date:new Date("4.09.2010").toDateString(),isShared:!0},{id:3,title:"fugiat veniam minus",description:"odio adipisci rerum aut animi",date:new Date("7.07.2008").toDateString(),isShared:!0},{id:4,title:"et porro tempora",description:"alias odio sit",date:new Date("3.08.2025").toDateString(),isShared:!0},{id:5,title:"laboriosam mollitia et enim quasi",description:"vero eaque aliquid doloribus et culpa",date:new Date("3.03.2012").toDateString(),isShared:!0},{id:6,title:"qui ullam ratione quibusdam ",description:"et fugit eligendi deleniti quidem qui sint nihil autem",date:new Date("10.08.2007").toDateString(),isShared:!0},{id:7,title:"illo expedita consequatur quia in",description:"repellat consequatur praesentium vel minus molestias voluptatum",date:new Date("3.12.2008").toDateString(),isShared:!0},{id:8,title:"quo adipisci enim quam ut ab",description:"provident id voluptas",date:new Date("2.02.2019").toDateString(),isShared:!0},{id:9,title:"React router 1",description:"buy fish",date:new Date("2.02.2019").toDateString(),isShared:!1},{id:10,title:"React router 2",description:"pbuy meet",date:new Date("2.02.2019").toDateString(),isShared:!1},{id:11,title:"React router 3",description:"buy milk",date:new Date("2.02.2019").toDateString(),isShared:!1}],N=function(e){var t=e.condition,i=function(e,t){var i=Object(n.useState)((function(){try{var i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(n){return console.log(n),t}})),c=Object(d.a)(i,2),a=c[0],r=c[1];return[a,function(t){try{var i=t instanceof Function?t(a):t;r(i),window.localStorage.setItem(e,JSON.stringify(i))}catch(n){console.log(n)}}]}("todoList",R),c=Object(d.a)(i,2),a=c[0],r=c[1],j=Object(n.useState)([]),b=Object(d.a)(j,2),u=b[0],p=b[1],x=Object(n.useState)({}),m=Object(d.a)(x,2),f=m[0],N=m[1],T=Object(n.useState)(!1),A=Object(d.a)(T,2),M=A[0],E=A[1],L=Object(n.useState)(""),z=Object(d.a)(L,2),B=z[0],F=z[1];Object(n.useEffect)((function(){p(a.filter((function(e){return t?e.isShared:!e.isShared})))}),[a]);var W=function(e){H(e),J()},J=function(){E(!0)},P=function(){E(!1)},H=function(e){var t=u.find((function(t){return t.id==e.currentTarget.id}));N(t),F(t.description)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(O,{children:[Object(y.jsx)(h,{children:Object(y.jsx)(v,{children:u.map((function(e){return Object(y.jsx)(g,{isActive:(null===f||void 0===f?void 0:f.id)===e.id,children:Object(y.jsx)(s.a,{primary:Object(y.jsx)(C,{id:e.id,title:e.title,showId:!1,description:e.description,date:e.date,getItemInfo:H,changePickedItem:W})})},e.id)}))})}),Object(y.jsx)(q,{componentInfo:f,openModal:J})]}),M&&Object(y.jsx)(l.a,{open:M,onClose:P,BackdropComponent:w,children:Object(y.jsxs)(k,{children:[Object(y.jsx)("h2",{children:"Change Item Description"}),Object(y.jsxs)(D,{children:[Object(y.jsx)(I,{type:"text",onChange:function(e){F(e.target.value)},value:B}),Object(y.jsx)(S,{onClick:function(){return function(e){var t=a.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},t),{},{description:B}):t}));r(t),P()}(f)},children:"Change"})]})]})})]})},T=Object(j.a)("header")({width:"100%",padding:"10px 10px 10px 40px",backgroundColor:"cornflowerblue",display:"flex",alignItems:"center"}),A=Object(j.a)("h1")({color:"white",cursor:"pointer","&:hover":{color:"pink"}}),M=Object(j.a)(r.b)({textDecoration:"none",fontSize:"24px",color:"white","&.active":{color:"deeppink"}}),E=Object(j.a)(x.a)({"&.MuiList-root":{display:"flex",marginLeft:"400px"}}),L=Object(j.a)(s.a)({"&:not(:first-child)":{marginLeft:"30px",fontSize:"24px"}}),z=function(){return Object(y.jsxs)(T,{children:[Object(y.jsx)(A,{children:Object(y.jsx)(M,{exact:!0,activeClassName:"active",to:"/react-task",children:"REACT TASK"})}),Object(y.jsxs)(E,{children:[Object(y.jsx)(L,{children:Object(y.jsx)(M,{exact:!0,activeClassName:"active",to:"/notes",children:"My notes"})}),Object(y.jsx)(L,{children:Object(y.jsx)(M,{exact:!0,activeClassName:"active",to:"/shared-notes",children:"Shared Notes"})}),Object(y.jsx)(L,{children:Object(y.jsx)(M,{exact:!0,activeClassName:"active",to:"/about",children:"About"})})]})]})},B=i(118),F=Object(j.a)(B.a)({"&.MuiContainer-root":{maxWidth:"100%",width:"700px",backgroundColor:"white",padding:"20px",borderRadius:"5px",marginTop:"50px",display:"flex",flexDirection:"column",alignItems:"center"}}),W=Object(j.a)("h2")({fontSize:"36px",fontWeight:"Bold",color:"ghostwhite",textAlign:"center",marginTop:"20px","&.dark":{color:"black",marginTop:"0"}}),J=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(W,{children:"THERE IS A LIST OF SHARED NOTES"}),Object(y.jsx)(N,{condition:!0})]})},P=i(5),H=function(){return Object(y.jsxs)(F,{children:[Object(y.jsx)(W,{className:"dark",children:"About"}),Object(y.jsxs)(b.a,{children:[Object(y.jsx)("h3",{children:"React task 3"}),Object(y.jsx)("p",{children:"Main menu with few tabs must be created. Clicking each tab directs a user to a new page. If URL does not exist, a user will be redirected to the Error page."}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)("h3",{children:"Requirement"}),Object(y.jsx)(s.a,{children:"Follow requirement of first task"}),Object(y.jsx)(s.a,{children:"My Notes page includes list of personal notes"}),Object(y.jsx)(s.a,{children:"Shared Notes page includes List of shared Notes"}),Object(y.jsx)(s.a,{children:"Otherwise it must be redirected to error page"})]})]})]})},U=Object(j.a)("div")({background:"none",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"50px"}),K=Object(j.a)("h2")({fontSize:"72px",color:"darkred"}),G=Object(j.a)("p")({fontSize:"56px",color:"darkred"}),Q=function(){return Object(y.jsxs)(U,{children:[Object(y.jsx)(K,{children:"404"}),Object(y.jsx)(G,{children:"Page not found. Please enter correct Url"})]})};var V=function(){return Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(z,{}),Object(y.jsxs)(P.d,{children:[Object(y.jsx)(P.b,{exact:!0,path:"",element:Object(y.jsx)(N,{})}),Object(y.jsx)(P.b,{path:"/notes",element:Object(y.jsx)(N,{})}),Object(y.jsx)(P.b,{path:"/shared-notes",element:Object(y.jsx)(J,{})}),Object(y.jsx)(P.b,{path:"/about",element:Object(y.jsx)(H,{})}),Object(y.jsx)(P.b,{path:"/not-found",element:Object(y.jsx)(Q,{})}),Object(y.jsx)(P.b,{exact:!0,path:"/react-task",element:Object(y.jsx)(P.a,{to:"/notes"})}),Object(y.jsx)(P.b,{path:"/*",element:Object(y.jsx)(P.a,{to:"/not-found"})})]})]})};a.a.render(Object(y.jsx)(r.a,{children:Object(y.jsx)(V,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.668aaf78.chunk.js.map