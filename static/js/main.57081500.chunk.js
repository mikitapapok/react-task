(this["webpackJsonptask-react"]=this["webpackJsonptask-react"]||[]).push([[0],{205:function(e,t,i){},325:function(e,t,i){"use strict";i.r(t);var r=i(0),a=i(30),n=i.n(a),o=i(50),c=i(53),s=i(75),d="GET_USER_INFO",l="LOG_OUT",p=window.localStorage,u={user:{},access:JSON.parse(p.getItem("access"))||!1},j=Object(s.b)({userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:e.user=t.payload,t.payload&&(e.access=!0,p.setItem("access",!0));break;case l:e.access=!1,p.setItem("access",!1);break;default:return e}return e}}),b=i(163),x=Object(s.c)(j,Object(s.a)(b.a)),m=i(58),h=(i(205),i(9)),O=i(14),f=i(62),g=i(379),w=i(378),v=i(375),y=i(382),S=i(377),k=i(381),I=i(383),C=i(374),D=Object(v.a)(y.a)({width:"100%",maxWidth:"500px",background:"white",padding:"0",borderRadius:"5px"}),T=Object(v.a)("div")({marginTop:"30px",display:"flex",justifyContent:"center",alignItems:"start"}),q=Object(v.a)("div")({marginLeft:"40px",width:"500px",background:"white",borderRadius:"5px",padding:"20px"}),E=Object(v.a)(S.a)((function(e){return{borderBottom:"1px solid black",cursor:"pointer",background:"".concat(e.isActive?"slategrey":"white"),color:"".concat(e.isActive?"white":"black"),"&:hover":{background:"darkgrey "},"&:active":{background:"slategrey "},"&:last-child":{borderBottom:"none",borderRadius:"0px 0px 5px 5px"},"&:first-child":{borderRadius:"5px 5px 0px 0px"}}})),N=Object(v.a)("span")({fontWeight:"Bold"}),R=Object(v.a)(I.a)({padding:"0 !important",borderRadius:"5px"}),B=Object(v.a)(k.a)({"&.MuiButton-root":{marginTop:"20px ",backgroundColor:"#7fffd4 ",color:"black ",fontWeight:"bold "}}),P=Object(v.a)("div")({position:"fixed",zIndex:"10",backgroundColor:"rgba(0, 0, 0, 0.5)",right:"0",bottom:"0",top:"0",left:"0"}),M=Object(v.a)("div")({position:"absolute",zIndex:"10",top:"40%",left:"40%",padding:"20px",display:"flex",flexDirection:"Column",alignItems:"center",background:"white",width:"500px"}),L=Object(v.a)("div")({display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}),z=(Object(v.a)("input")({width:"300px",padding:"5px",borderRadius:"5px",border:"2px solid grey"}),Object(v.a)(C.a)({padding:"5px",width:"100%",borderRadius:"5px",border:"1px solid grey",marginTop:"5px"})),A=i(2),U=function(e){var t=e.getItemInfo,i=e.id,r=e.title,a=e.description,n=e.date,o=e.showId,c=e.openModal,s=e.changePickedItem,d=a.length>20?"".concat(a.slice(0,20).trim(),"..."):"".concat(a);return Object(A.jsxs)("div",{onClick:t,id:i,onDoubleClick:s,children:[Object(A.jsx)("h2",{children:r}),o&&Object(A.jsxs)("p",{children:[Object(A.jsx)(N,{children:"Id: "}),i]}),Object(A.jsxs)("p",{children:[Object(A.jsx)(N,{children:"Description: "}),o?a:"".concat(d)]}),Object(A.jsxs)("p",{children:[Object(A.jsx)(N,{children:"Date: "}),n]}),o&&Object(A.jsx)(B,{onClick:c,children:"Edit"})]})},F=function(e){var t=e.componentInfo,i=e.openModal,r=t.id,a=t.title,n=t.description,o=t.date;return Object(A.jsx)(q,{children:r?Object(A.jsx)(U,{id:r,description:n,title:a,date:o,showId:!0,openModal:i}):Object(A.jsx)("h1",{children:"Select note to display"})})},W=[{id:1,title:"delectus aut autem",description:"id labore ex et quam laborum",date:new Date("3.08.2000").toDateString(),isShared:!0},{id:2,title:"quis ut nam facilis et officia qui",description:"quo vero reiciendis velit similique earum",date:new Date("4.09.2010").toDateString(),isShared:!0},{id:3,title:"fugiat veniam minus",description:"odio adipisci rerum aut animi",date:new Date("7.07.2008").toDateString(),isShared:!0},{id:4,title:"et porro tempora",description:"alias odio sit",date:new Date("3.08.2025").toDateString(),isShared:!0},{id:5,title:"laboriosam mollitia et enim quasi",description:"vero eaque aliquid doloribus et culpa",date:new Date("3.03.2012").toDateString(),isShared:!0},{id:6,title:"qui ullam ratione quibusdam ",description:"et fugit eligendi deleniti quidem qui sint nihil autem",date:new Date("10.08.2007").toDateString(),isShared:!0},{id:7,title:"illo expedita consequatur quia in",description:"repellat consequatur praesentium vel minus molestias voluptatum",date:new Date("3.12.2008").toDateString(),isShared:!0},{id:8,title:"quo adipisci enim quam ut ab",description:"provident id voluptas",date:new Date("2.02.2019").toDateString(),isShared:!0},{id:9,title:"React router 1",description:"buy fish",date:new Date("2.02.2019").toDateString(),isShared:!1},{id:10,title:"React router 2",description:"pbuy meet",date:new Date("2.02.2019").toDateString(),isShared:!1},{id:11,title:"React router 3",description:"buy milk",date:new Date("2.02.2019").toDateString(),isShared:!1}],G="https://powerful-bastion-72531.herokuapp.com/users",J=function(e){var t=e.condition,i=function(e,t){var i=Object(r.useState)((function(){try{var i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(r){return console.log(r),t}})),a=Object(h.a)(i,2),n=a[0],o=a[1];return[n,function(t){try{var i=t instanceof Function?t(n):t;o(i),window.localStorage.setItem(e,JSON.stringify(i))}catch(r){console.log(r)}}]}("todoList",W),a=Object(h.a)(i,2),n=a[0],o=a[1],c=Object(r.useState)([]),s=Object(h.a)(c,2),d=s[0],l=s[1],p=Object(r.useState)({}),u=Object(h.a)(p,2),j=u[0],b=u[1],x=Object(r.useState)(!1),m=Object(h.a)(x,2),O=m[0],v=m[1],y=Object(r.useState)(""),S=Object(h.a)(y,2),k=S[0],I=S[1];Object(r.useEffect)((function(){l(n.filter((function(e){return t?e.isShared:!e.isShared})))}),[n]);var C=function(e){G(e),q()},q=function(){v(!0)},N=function(){v(!1)},G=function(e){var t=d.find((function(t){return t.id==e.currentTarget.id}));b(t),I(t.description)};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(T,{children:[Object(A.jsx)(D,{children:Object(A.jsx)(R,{children:d.map((function(e){return Object(A.jsx)(E,{isActive:(null===j||void 0===j?void 0:j.id)===e.id,children:Object(A.jsx)(g.a,{primary:Object(A.jsx)(U,{id:e.id,title:e.title,showId:!1,description:e.description,date:e.date,getItemInfo:G,changePickedItem:C})})},e.id)}))})}),Object(A.jsx)(F,{componentInfo:j,openModal:q})]}),O&&Object(A.jsx)(w.a,{open:O,onClose:N,BackdropComponent:P,children:Object(A.jsxs)(M,{children:[Object(A.jsx)("h2",{children:"Change Item Description"}),Object(A.jsxs)(L,{children:[Object(A.jsx)(z,{type:"text",onChange:function(e){I(e.target.value)},value:k,label:"change value"}),Object(A.jsx)(B,{onClick:function(){return function(e){var t=n.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),{},{description:k}):t})),i=t.find((function(t){return t.id===e.id}));o(t),b(i),N()}(j)},children:"Change"})]})]})})]})},Q=Object(v.a)("header")({width:"100%",padding:"10px 50px 10px 40px",backgroundColor:"cornflowerblue",display:"flex",alignItems:"center"}),_=Object(v.a)("h1")({color:"white",cursor:"pointer","&:hover":{color:"pink"}}),V=Object(v.a)(o.c)({textTransform:"uppercase",textDecoration:"none",fontSize:"24px",color:"white","&.active":{color:"deeppink"}}),K=Object(v.a)(V)({marginLeft:"auto"}),H=Object(v.a)(I.a)({"&.MuiList-root":{display:"flex",marginLeft:"25vw"}}),X=Object(v.a)(g.a)({"&:not(:first-child)":{marginLeft:"30px",fontSize:"24px",whiteSpace:"no-wrap"}}),Y=Object(v.a)(o.b)({textDecoration:"none",color:"white"}),Z=function(e){return{type:d,payload:e}},$=function(e){var t=e.logAccess,i=Object(c.b)();return Object(A.jsxs)(Q,{children:[Object(A.jsx)(_,{children:Object(A.jsx)(Y,{to:"/",children:"REACT TASK"})}),Object(A.jsxs)(H,{children:[Object(A.jsx)(X,{children:Object(A.jsx)(V,{to:"/notes",children:"my notes"})}),Object(A.jsx)(X,{children:Object(A.jsx)(V,{to:"/shared-notes",children:"shared notes"})}),Object(A.jsx)(X,{children:Object(A.jsx)(V,{to:"/about",children:"about"})})]}),t&&Object(A.jsx)(K,{to:"/",onClick:function(){i({type:l})},children:"log out"})]})},ee=Object(v.a)("h2")({fontSize:"36px",fontWeight:"Bold",color:"ghostwhite",textAlign:"center",marginTop:"20px",textTransform:"uppercase","&.dark":{color:"black",marginTop:"0"}}),te=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(ee,{children:"there is a list of shared notes"}),Object(A.jsx)(J,{condition:!0})]})},ie=i(93),re=i(64),ae=i.n(re),ne=i(52),oe=i(32),ce=oe.a().shape({email:oe.c().email("Use @ and . for adding email").required("Enter Email"),password:oe.c().min(3,"Password must contain at least 3 symblos").required("Enter password"),firstName:oe.c().required("Enter your name"),lastName:oe.c().required("Enter your last name"),dateOfBirth:oe.c(),confirmPassword:oe.c().oneOf([oe.b("password"),null],"Passwords must match ")}),se=oe.a().shape({email:oe.c().email("Please use @ and . for adding email").required("Enter Email"),password:oe.c().min(3,"Enter more than 3 symblos").required("Enter password")}),de={email:"",password:""},le={email:"",password:"",lastName:"",firstName:"",dateOfBirth:"",confirmPassword:""},pe=Object(v.a)(ne.b)({background:"white",width:"500px",paddingLeft:"10%",marginTop:"20px",padding:"40px",borderRadius:"5px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start","&&":{padding:"20px 50px"}}),ue=Object(v.a)("div")({marginTop:"10px",display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr",columnGap:"10px",rowGap:"40px"}),je=Object(v.a)("div")({width:"100%",marginTop:"10px",display:"grid",gridTemplateColumns:"1fr ",rowGap:"40px"}),be=Object(v.a)(C.a)({padding:"5px",width:"100%",borderRadius:"5px",border:"1px solid grey",marginTop:"5px"}),xe=Object(v.a)("div")({position:"relative",display:"flex",flexDirection:"column",alignItems:"center"}),me=Object(v.a)(k.a)({"&.MuiButton-root":{marginTop:"50px",width:"100%",background:"cornflowerblue",fontWeight:"bold",color:"white","&:hover":{background:"lightblue"}}}),he=Object(v.a)(o.c)({textDecoration:"none",marginTop:"20px",fontSize:"16px",color:"cadetBlue","&.active":{color:"deeppink"}}),Oe=Object(v.a)("div")({marginTop:"24px"}),fe=Object(v.a)("h2")({color:"black",textTransform:"upperCase"}),ge=function(e){var t=e.type,i=e.error,r=e.name,a=e.label,n=e.autoComplete;return Object(A.jsx)(xe,{children:Object(A.jsx)(ne.a,{as:be,type:t,name:r,label:i||a,error:!!i,autoComplete:n})})},we=i(116),ve=i.n(we),ye=function(){var e=Object(ie.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve.a.get(G);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){return Object(m.useMutation)((function(e){!function(e){ve.a.post(G,e)}(e)}))},ke=function(){var e=Object(c.b)(),t=Se(),i=function(i){e(Z(i)),t.mutate(i)};return Object(A.jsx)(ne.c,{initialValues:le,validationSchema:ce,onSubmit:function(){var e=Object(ie.a)(ae.a.mark((function e(t){var r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={firstName:t.firstName,lastName:t.lastName,dateOfBirth:t.dateOfBirth,password:t.password,email:t.email},i(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors;return Object(A.jsxs)(pe,{children:[Object(A.jsx)(fe,{children:"sign up"}),Object(A.jsxs)(ue,{children:[Object(A.jsx)(ge,{name:"firstName",label:"Enter first name",error:t.firstName,type:"text",autoComplete:"on"}),Object(A.jsx)(ge,{name:"lastName",label:"Enter last name",error:t.lastName,type:"text",autoComplete:"on"}),Object(A.jsx)(ge,{name:"dateOfBirth",error:t.dateOfBirth,type:"date",autoComplete:"off"}),Object(A.jsx)(ge,{name:"email",label:"Enter email",error:t.email,type:"email",autoComplete:"on"}),Object(A.jsx)(ge,{name:"password",label:"Enter password",error:t.password,type:"password",autoComplete:"off"}),Object(A.jsx)(ge,{name:"confirmPassword",label:"Confirm password",error:t.confirmPassword,type:"password",autoComplete:"off"})]}),Object(A.jsx)(me,{type:"submit",children:"Sign up"}),Object(A.jsx)(he,{to:"/",children:"\u2190Back to sign in page"})]})}})},Ie=i(384),Ce=Object(v.a)(Ie.a)({"&.MuiContainer-root":{maxWidth:"100%",width:"700px",backgroundColor:"white",padding:"20px",borderRadius:"5px",marginTop:"50px",display:"flex",flexDirection:"column",alignItems:"center"}}),De=function(){return Object(A.jsxs)(Ce,{children:[Object(A.jsx)(ee,{className:"dark",children:"About"}),Object(A.jsxs)(y.a,{children:[Object(A.jsx)("h3",{children:"React task 3"}),Object(A.jsx)("p",{children:"Main menu with few tabs must be created. Clicking each tab directs a user to a new page. If URL does not exist, a user will be redirected to the Error page."}),Object(A.jsxs)(I.a,{children:[Object(A.jsx)("h3",{children:"Requirement"}),Object(A.jsx)(g.a,{children:"Follow requirement of first task"}),Object(A.jsx)(g.a,{children:"My Notes page includes list of personal notes"}),Object(A.jsx)(g.a,{children:"Shared Notes page includes List of shared Notes"}),Object(A.jsx)(g.a,{children:"Otherwise it must be redirected to error page"})]})]})]})},Te=Object(v.a)("div")({background:"white",padding:"20px",display:"flex",borderRadius:"5px",flexDirection:"column",alignItems:"center",marginTop:"50px"}),qe=Object(v.a)("h2")({fontSize:"72px",color:"darkgrey"}),Ee=Object(v.a)("p")({fontSize:"56px",color:"darkgrey"}),Ne=Object(v.a)(V)({color:"cornflowerblue",fontSize:"48px",marginTop:"40px"}),Re=i.p+"static/media/not-found.a5f8bbce.jpg",Be=function(){return Object(A.jsxs)(Te,{children:[Object(A.jsx)(qe,{children:"404"}),Object(A.jsx)(Ee,{children:"Page not found. Please enter correct Url"}),Object(A.jsx)("img",{src:Re,alt:"not-found"}),Object(A.jsx)(Ne,{to:"/",children:"\u2190 back to main page"})]})},Pe=function(){var e,t=Object(r.useState)({}),i=Object(h.a)(t,2),a=(i[0],i[1]),n=Object(c.b)(),o=(e="currentUser",Object(m.useQuery)("login",(function(){return ye()}),e)).data;return Object(A.jsx)(ne.c,{initialValues:de,validationSchema:se,onSubmit:function(e,t){a({email:e.email,password:e.password}),function(e){var t=e.email,i=e.password,r=o.data.find((function(e){return e.email==t&&e.password==i}));return r?(n(Z(r)),!0):(a({}),!1)}(e)||(alert("wrong email or password. Try again or sign up"),t.resetForm())},children:function(e){var t=e.errors;return Object(A.jsxs)(pe,{children:[Object(A.jsx)(fe,{children:"sign in"}),Object(A.jsxs)(je,{children:[Object(A.jsx)(ge,{type:"email",name:"email",label:"Enter email",error:t.email,autoComplete:"on"}),Object(A.jsx)(ge,{type:"password",name:"password",label:"Enter password",error:t.password,autoComplete:"off"})]}),Object(A.jsx)(me,{type:"submit",children:"Sign In"}),Object(A.jsxs)(Oe,{children:["If you do not sign up, follow ",Object(A.jsx)(he,{to:"/signUp",children:"here"})," "]})]})}})};var Me=function(){var e=Object(O.f)(),t=Object(O.g)(),i=Object(r.useState)(!1),a=Object(h.a)(i,2),n=a[0],o=a[1];return x.subscribe((function(){return o(x.getState().userInfo.access)})),Object(r.useEffect)((function(){o(x.getState().userInfo.access),t(e.pathname)}),[]),Object(A.jsxs)("div",{className:"app",children:[Object(A.jsx)($,{logAccess:n}),Object(A.jsxs)(O.d,{children:[Object(A.jsx)(O.b,{path:"/signUp",element:n?Object(A.jsx)(O.a,{to:"/notes"}):Object(A.jsx)(ke,{})}),Object(A.jsx)(O.b,{path:"/notes",element:n?Object(A.jsx)(J,{}):Object(A.jsx)(O.a,{to:"/not-found"})}),Object(A.jsx)(O.b,{path:"/signIn",element:n?Object(A.jsx)(O.a,{to:"/notes"}):Object(A.jsx)(Pe,{})}),Object(A.jsx)(O.b,{path:"/shared-notes",element:n?Object(A.jsx)(te,{}):Object(A.jsx)(O.a,{to:"/not-found"})}),Object(A.jsx)(O.b,{path:"/",element:n?Object(A.jsx)(O.a,{to:"/notes"}):Object(A.jsx)(O.a,{to:"/signIn"})}),Object(A.jsx)(O.b,{path:"/about",element:Object(A.jsx)(De,{})}),Object(A.jsx)(O.b,{path:"/not-found",element:Object(A.jsx)(Be,{})}),Object(A.jsx)(O.b,{path:"/*",element:Object(A.jsx)(O.a,{to:"/not-found"})})]})]})},Le=new m.QueryClient;n.a.render(Object(A.jsx)(c.a,{store:x,children:Object(A.jsx)(m.QueryClientProvider,{client:Le,children:Object(A.jsx)(o.a,{children:Object(A.jsx)(Me,{})})})}),document.getElementById("root"))}},[[325,1,2]]]);
//# sourceMappingURL=main.57081500.chunk.js.map