(this["webpackJsonptask-react"]=this["webpackJsonptask-react"]||[]).push([[0],{187:function(e,t,r){},306:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r(47),n=r.n(i),c=r(50),s=r(32),o=r(71),d="GET_USER_INFO",l="LOG_OUT",j=window.localStorage,b={user:{},access:JSON.parse(j.getItem("access"))||!1},u=Object(o.b)({userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:e.user=t.payload,t.payload&&(e.access=!0,j.setItem("access",!0));break;case l:e.access=!1,j.setItem("access",!1);break;default:return e}return e}}),p=r(149),x=Object(o.c)(u,Object(o.a)(p.a)),h=r(53),O=(r(187),r(6)),m=r(7),f=r(59),g=r(344),w=r(342),v=r(340),S=r(347),y=r(343),k=r(346),I=r(348),D=Object(v.a)(S.a)({width:"100%",maxWidth:"500px",background:"white",padding:"0",borderRadius:"5px"}),N=Object(v.a)("div")({marginTop:"30px",display:"flex",justifyContent:"center",alignItems:"start"}),P=Object(v.a)("div")({marginLeft:"40px",width:"500px",background:"white",borderRadius:"5px",padding:"20px"}),q=Object(v.a)(y.a)((function(e){return{borderBottom:"1px solid black",cursor:"pointer",background:"".concat(e.isActive?"slategrey":"white"),color:"".concat(e.isActive?"white":"black"),"&:hover":{background:"darkgrey "},"&:active":{background:"slategrey "},"&:last-child":{borderBottom:"none",borderRadius:"0px 0px 5px 5px"},"&:first-child":{borderRadius:"5px 5px 0px 0px"}}})),C=Object(v.a)("span")({fontWeight:"Bold"}),E=Object(v.a)(I.a)({padding:"0 !important",borderRadius:"5px"}),T=Object(v.a)(k.a)({"&.MuiButton-root":{marginTop:"20px ",backgroundColor:"#7fffd4 ",color:"black ",fontWeight:"bold "}}),B=Object(v.a)("div")({position:"fixed",zIndex:"10",backgroundColor:"rgba(0, 0, 0, 0.5)",right:"0",bottom:"0",top:"0",left:"0"}),R=Object(v.a)("div")({position:"absolute",zIndex:"10",top:"40%",left:"40%",padding:"20px",display:"flex",flexDirection:"Column",alignItems:"center",background:"white",width:"500px"}),F=Object(v.a)("div")({display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}),M=Object(v.a)("input")({width:"300px",padding:"5px",borderRadius:"5px",border:"2px solid grey"}),L=r(1),z=function(e){var t=e.getItemInfo,r=e.id,a=e.title,i=e.description,n=e.date,c=e.showId,s=e.openModal,o=e.changePickedItem,d=i.length>20?"".concat(i.slice(0,20).trim(),"..."):"".concat(i);return Object(L.jsxs)("div",{onClick:t,id:r,onDoubleClick:o,children:[Object(L.jsx)("h2",{children:a}),c&&Object(L.jsxs)("p",{children:[Object(L.jsx)(C,{children:"Id: "}),r]}),Object(L.jsxs)("p",{children:[Object(L.jsx)(C,{children:"Description: "}),c?i:"".concat(d)]}),Object(L.jsxs)("p",{children:[Object(L.jsx)(C,{children:"Date: "}),n]}),c&&Object(L.jsx)(T,{onClick:s,children:"Edit"})]})},A=function(e){var t=e.componentInfo,r=e.openModal,a=t.id,i=t.title,n=t.description,c=t.date;return Object(L.jsx)(P,{children:a?Object(L.jsx)(z,{id:a,description:n,title:i,date:c,showId:!0,openModal:r}):Object(L.jsx)("h1",{children:"Select note to display"})})},U=[{id:1,title:"delectus aut autem",description:"id labore ex et quam laborum",date:new Date("3.08.2000").toDateString(),isShared:!0},{id:2,title:"quis ut nam facilis et officia qui",description:"quo vero reiciendis velit similique earum",date:new Date("4.09.2010").toDateString(),isShared:!0},{id:3,title:"fugiat veniam minus",description:"odio adipisci rerum aut animi",date:new Date("7.07.2008").toDateString(),isShared:!0},{id:4,title:"et porro tempora",description:"alias odio sit",date:new Date("3.08.2025").toDateString(),isShared:!0},{id:5,title:"laboriosam mollitia et enim quasi",description:"vero eaque aliquid doloribus et culpa",date:new Date("3.03.2012").toDateString(),isShared:!0},{id:6,title:"qui ullam ratione quibusdam ",description:"et fugit eligendi deleniti quidem qui sint nihil autem",date:new Date("10.08.2007").toDateString(),isShared:!0},{id:7,title:"illo expedita consequatur quia in",description:"repellat consequatur praesentium vel minus molestias voluptatum",date:new Date("3.12.2008").toDateString(),isShared:!0},{id:8,title:"quo adipisci enim quam ut ab",description:"provident id voluptas",date:new Date("2.02.2019").toDateString(),isShared:!0},{id:9,title:"React router 1",description:"buy fish",date:new Date("2.02.2019").toDateString(),isShared:!1},{id:10,title:"React router 2",description:"pbuy meet",date:new Date("2.02.2019").toDateString(),isShared:!1},{id:11,title:"React router 3",description:"buy milk",date:new Date("2.02.2019").toDateString(),isShared:!1}],J="http://188.225.37.119:3000/users",W=function(e){var t=e.condition,r=(Object(s.c)((function(e){return e.userInfo})),function(e,t){var r=Object(a.useState)((function(){try{var r=window.localStorage.getItem(e);return r?JSON.parse(r):t}catch(a){return console.log(a),t}})),i=Object(O.a)(r,2),n=i[0],c=i[1];return[n,function(t){try{var r=t instanceof Function?t(n):t;c(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(a){console.log(a)}}]}("todoList",U)),i=Object(O.a)(r,2),n=i[0],c=i[1],o=Object(a.useState)([]),d=Object(O.a)(o,2),l=d[0],j=d[1],b=Object(a.useState)({}),u=Object(O.a)(b,2),p=u[0],x=u[1],h=Object(a.useState)(!1),m=Object(O.a)(h,2),v=m[0],S=m[1],y=Object(a.useState)(""),k=Object(O.a)(y,2),I=k[0],P=k[1];Object(a.useEffect)((function(){j(n.filter((function(e){return t?e.isShared:!e.isShared})))}),[n]);var C=function(e){Q(e),J()},J=function(){S(!0)},W=function(){S(!1)},Q=function(e){var t=l.find((function(t){return t.id==e.currentTarget.id}));x(t),P(t.description)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(N,{children:[Object(L.jsx)(D,{children:Object(L.jsx)(E,{children:l.map((function(e){return Object(L.jsx)(q,{isActive:(null===p||void 0===p?void 0:p.id)===e.id,children:Object(L.jsx)(g.a,{primary:Object(L.jsx)(z,{id:e.id,title:e.title,showId:!1,description:e.description,date:e.date,getItemInfo:Q,changePickedItem:C})})},e.id)}))})}),Object(L.jsx)(A,{componentInfo:p,openModal:J})]}),v&&Object(L.jsx)(w.a,{open:v,onClose:W,BackdropComponent:B,children:Object(L.jsxs)(R,{children:[Object(L.jsx)("h2",{children:"Change Item Description"}),Object(L.jsxs)(F,{children:[Object(L.jsx)(M,{type:"text",onChange:function(e){P(e.target.value)},value:I}),Object(L.jsx)(T,{onClick:function(){return function(e){var t=n.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),{},{description:I}):t}));c(t),W()}(p)},children:"Change"})]})]})})]})},Q=Object(v.a)("header")({width:"100%",padding:"10px 10px 10px 40px",backgroundColor:"cornflowerblue",display:"flex",alignItems:"center"}),_=Object(v.a)("h1")({color:"white",cursor:"pointer","&:hover":{color:"pink"}}),G=Object(v.a)(c.c)({textDecoration:"none",fontSize:"24px",color:"white","&.active":{color:"deeppink"}}),V=Object(v.a)(G)({marginLeft:"500px"}),K=Object(v.a)(I.a)({"&.MuiList-root":{display:"flex",marginLeft:"400px"}}),H=Object(v.a)(g.a)({"&:not(:first-child)":{marginLeft:"30px",fontSize:"24px"}}),X=Object(v.a)(c.b)({textDecoration:"none",color:"white"}),Y=function(e){return{type:d,payload:e}},Z=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.userInfo.access}));return Object(L.jsxs)(Q,{children:[Object(L.jsx)(_,{children:Object(L.jsx)(X,{to:"/notes",children:"REACT TASK"})}),Object(L.jsxs)(K,{children:[Object(L.jsx)(H,{children:Object(L.jsx)(G,{to:"/notes",children:"My notes"})}),Object(L.jsx)(H,{children:Object(L.jsx)(G,{to:"/shared-notes",children:"Shared Notes"})}),Object(L.jsxs)(H,{children:[Object(L.jsx)(G,{to:"/about",children:"About"}),t&&Object(L.jsx)(V,{to:"/",onClick:function(){e({type:l})},children:"log out"})]})]})]})},$=Object(v.a)("h2")({fontSize:"36px",fontWeight:"Bold",color:"ghostwhite",textAlign:"center",marginTop:"20px",textTransform:"uppercase","&.dark":{color:"black",marginTop:"0"}}),ee=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)($,{children:"there is a list of shared notes"}),Object(L.jsx)(W,{condition:!0})]})},te=r(56),re=r(30),ae=r.n(re),ie=r(86),ne=r.n(ie),ce=r(55),se=r(29),oe=Object(v.a)(ce.b)({background:"white",width:"500px",paddingLeft:"10%",marginTop:"20px",padding:"40px",borderRadius:"5px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","&&":{padding:"20px 0"}}),de=Object(v.a)(ce.a)({padding:"5px",width:"200px",borderRadius:"5px",border:"1px solid grey",marginTop:"5px"}),le=Object(v.a)("div")({position:"relative",display:"flex",flexDirection:"column",alignItems:"center","&:not(:first-child)":{marginTop:"40px"}}),je=Object(v.a)("div")({position:"absolute",color:"red",top:" 55px",left:"4px",width:"300px"}),be=Object(v.a)(k.a)({"&.MuiButton-root":{marginTop:"50px",background:"greenyellow",fontWeight:"bold"}}),ue=Object(v.a)(c.c)({textDecoration:"none",marginTop:"20px",fontSize:"24px",color:"cadetBlue","&.active":{color:"deeppink"}}),pe=Object(v.a)("p")({marginTop:"10px"}),xe=Object(v.a)("h2")({color:"darkgray",textTransform:"upperCase"}),he=se.a().shape({email:se.c().email("Please use @ and . for adding email").required("Please enter Email"),password:se.c().min(3,"password must contain at least 3 symblos").required("Please enter password"),firstName:se.c().required("Please enter your name"),lastName:se.c().required("Enter your last name"),dateOfBirth:se.c().required("Please pick date of birth"),confirmPassword:se.c().oneOf([se.b("password"),null],"Passwords must match ")}),Oe=function(){var e=Object(a.useState)(null),t=Object(O.a)(e,2),r=t[0],i=t[1],n=Object(s.b)(),c=function(){var e=Object(te.a)(ae.a.mark((function e(t){var r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.a.post(J,t);case 2:return r=e.sent,n(Y(t)),i(null),e.abrupt("return",r.status);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.useQuery)("addUser",Object(te.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(r);case 1:case"end":return e.stop()}}),e)}))),{enabled:!!r}),Object(L.jsx)(ce.c,{initialValues:{email:"",password:"",lastName:"",firstName:"",dateOfBirth:"",confirmPassword:""},validationSchema:he,onSubmit:function(){var e=Object(te.a)(ae.a.mark((function e(t,r){var a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={firstName:t.firstName,lastName:t.lastName,dateOfBirth:t.dateOfBirth,password:t.password,email:t.email},i(a),r.resetForm();case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,r=e.touched;return Object(L.jsxs)(oe,{children:[Object(L.jsx)(xe,{children:"sign up"}),Object(L.jsxs)(le,{children:[Object(L.jsx)("label",{htmlFor:"firstName",children:"Please Enter First namr"}),Object(L.jsx)(de,{id:"firstName",name:"firstName",placeholder:"John"}),t.firstName&&r.firstName&&Object(L.jsx)(je,{children:t.firstName})]}),Object(L.jsxs)(le,{children:[Object(L.jsx)("label",{htmlFor:"lastName",children:"Please Enter last name"}),Object(L.jsx)(de,{id:"lastName",name:"lastName",placeholder:"Doe"}),t.lastName&&r.lastName&&Object(L.jsx)(je,{children:t.lastName})]}),Object(L.jsxs)(le,{children:[Object(L.jsx)("label",{htmlFor:"dateOfBirth",children:"Please Enter date of birth"}),Object(L.jsx)(de,{id:"dateOfBirth",type:"date",name:"dateOfBirth"}),t.dateOfBirth&&r.dateOfBirth&&Object(L.jsx)(je,{children:t.dateOfBirth})]}),Object(L.jsxs)(le,{children:[Object(L.jsx)("label",{htmlFor:"email",children:"Please Enter Email"}),Object(L.jsx)(de,{id:"email",type:"email",name:"email",placeholder:"example@ex.com"}),t.email&&r.email&&Object(L.jsx)(je,{children:t.email})]}),Object(L.jsxs)(le,{children:[Object(L.jsx)("label",{htmlFor:"password",children:"Please Enter password"}),Object(L.jsx)(de,{id:"password",name:"password",placeholder:"password"}),t.email&&r.email&&Object(L.jsx)(je,{children:t.email})]}),Object(L.jsxs)(le,{children:[Object(L.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm password"}),Object(L.jsx)(de,{id:"confirmPassword",name:"confirmPassword",placeholder:"confirm password"}),t.confirmPassword&&r.confirmPassword&&Object(L.jsx)(je,{children:t.confirmPassword})]}),Object(L.jsx)(be,{type:"submit",children:"Sign up"}),Object(L.jsx)(pe,{children:"or"}),Object(L.jsx)(ue,{to:"/",children:"Sign in"})]})}})},me=r(349),fe=Object(v.a)(me.a)({"&.MuiContainer-root":{maxWidth:"100%",width:"700px",backgroundColor:"white",padding:"20px",borderRadius:"5px",marginTop:"50px",display:"flex",flexDirection:"column",alignItems:"center"}}),ge=function(){return Object(L.jsxs)(fe,{children:[Object(L.jsx)($,{className:"dark",children:"About"}),Object(L.jsxs)(S.a,{children:[Object(L.jsx)("h3",{children:"React task 3"}),Object(L.jsx)("p",{children:"Main menu with few tabs must be created. Clicking each tab directs a user to a new page. If URL does not exist, a user will be redirected to the Error page."}),Object(L.jsxs)(I.a,{children:[Object(L.jsx)("h3",{children:"Requirement"}),Object(L.jsx)(g.a,{children:"Follow requirement of first task"}),Object(L.jsx)(g.a,{children:"My Notes page includes list of personal notes"}),Object(L.jsx)(g.a,{children:"Shared Notes page includes List of shared Notes"}),Object(L.jsx)(g.a,{children:"Otherwise it must be redirected to error page"})]})]})]})},we=Object(v.a)("div")({background:"none",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"50px"}),ve=Object(v.a)("h2")({fontSize:"72px",color:"darkred"}),Se=Object(v.a)("p")({fontSize:"56px",color:"darkred"}),ye=Object(v.a)(G)({color:"red",fontSize:"48px",marginTop:"40px"}),ke=function(){return Object(L.jsxs)(we,{children:[Object(L.jsx)(ve,{children:"404"}),Object(L.jsx)(Se,{children:"Page not found. Please enter correct Url"}),Object(L.jsx)(ye,{to:"/",children:"\u2190 back to main page"})]})},Ie=se.a().shape({email:se.c().email("Please use @ and . for adding email").required("please enter Email"),password:se.c().min(3,"password must contain at least 3 symblos").required("Please enter password")}),De=function(){var e=Object(a.useState)(null),t=Object(O.a)(e,2),r=t[0],i=t[1],n=Object(s.b)(),c=function(){var e=Object(te.a)(ae.a.mark((function e(t,r){var a,c;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.a.get(J);case 2:return a=e.sent,console.log(a.data),(c=a.data.find((function(e){return e.email==t&&e.password==r})))&&n(Y(c)),i(null),e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(h.useQuery)("currentUser",Object(te.a)(ae.a.mark((function e(){var t;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(r[0],r[1]);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),{enabled:!!r}),Object(L.jsx)(ce.c,{initialValues:{email:"",password:""},validationSchema:Ie,onSubmit:function(e,t){var r=[e.email,e.password];i(r),t.resetForm({values:{email:"",password:""}})},children:function(e){var t=e.errors,r=e.touched;return Object(L.jsxs)(oe,{children:[Object(L.jsx)(xe,{children:"sign in"}),Object(L.jsxs)(le,{children:[Object(L.jsx)("label",{htmlFor:"email",children:"Pleas Enter Email"}),Object(L.jsx)(de,{id:"email",type:"email",name:"email",placeholder:"example@ex.com"}),t.email&&r.email&&Object(L.jsx)(je,{children:t.email})]}),Object(L.jsxs)(le,{children:[Object(L.jsx)("label",{htmlFor:"password",children:"Pleas Enter Email"}),Object(L.jsx)(de,{id:"password",name:"password",placeholder:"password"}),t.password&&r.password&&Object(L.jsx)(je,{children:t.password})]}),Object(L.jsx)(be,{type:"submit",children:"Sign In"}),Object(L.jsx)(pe,{children:"Or"}),Object(L.jsx)(ue,{to:"/signUp",children:"Sign up"})]})}})};var Ne=function(){var e=Object(m.f)(),t=Object(m.g)(),r=Object(a.useState)(!1),i=Object(O.a)(r,2),n=i[0],c=i[1];return x.subscribe((function(){return c(x.getState().userInfo.access)})),Object(a.useEffect)((function(){c(x.getState().userInfo.access),t(e.pathname)}),[]),Object(L.jsxs)("div",{className:"app",children:[Object(L.jsx)(Z,{}),Object(L.jsxs)(m.d,{children:[Object(L.jsx)(m.b,{path:"/signUp",element:n?Object(L.jsx)(m.a,{to:"/notes"}):Object(L.jsx)(Oe,{})}),Object(L.jsx)(m.b,{path:"/notes",element:n?Object(L.jsx)(W,{}):Object(L.jsx)(m.a,{to:"/not-found"})}),Object(L.jsx)(m.b,{path:"/signIn",element:n?Object(L.jsx)(m.a,{to:"/notes"}):Object(L.jsx)(De,{})}),Object(L.jsx)(m.b,{path:"/shared-notes",element:n?Object(L.jsx)(ee,{}):Object(L.jsx)(m.a,{to:"/not-found"})}),Object(L.jsx)(m.b,{path:"/",element:n?Object(L.jsx)(m.a,{to:"/notes"}):Object(L.jsx)(m.a,{to:"/signIn"})}),Object(L.jsx)(m.b,{path:"/about",element:Object(L.jsx)(ge,{})}),Object(L.jsx)(m.b,{path:"/not-found",element:Object(L.jsx)(ke,{})}),Object(L.jsx)(m.b,{path:"/*",element:Object(L.jsx)(m.a,{to:"/not-found"})})]})]})},Pe=new h.QueryClient;n.a.render(Object(L.jsx)(s.a,{store:x,children:Object(L.jsx)(h.QueryClientProvider,{client:Pe,children:Object(L.jsx)(c.a,{children:Object(L.jsx)(Ne,{})})})}),document.getElementById("root"))}},[[306,1,2]]]);
//# sourceMappingURL=main.ee7c85ef.chunk.js.map