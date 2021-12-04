(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(14),c=a.n(n),o=(a(23),a(15)),r=a(6),l=a(7),i=a(8),d=a(19),j=a.n(d),b=a(5),h=a(21),m=a(2);function u(e){var t=e.setToken,a=Object(s.useState)(""),n=Object(l.a)(a,2),c=n[0],d=n[1],h=Object(i.g)(),u=Object(s.useState)(!1),p=Object(l.a)(u,2),O=(p[0],p[1]),x=Object(s.useState)(""),g=Object(l.a)(x,2),f=g[0],v=g[1],w=Object(s.useState)({email:"",password:""}),N=Object(l.a)(w,2),k=N[0],y=N[1],C=function(e){var t=e.target,a=t.name,s=t.value;y(Object(r.a)(Object(r.a)({},k),{},Object(o.a)({},a,s)))};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.b,{style:{height:"100vh"},className:"bg-dark",children:Object(m.jsx)("div",{className:"register-form",children:Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),d(function(e){var t={};return e.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.password||(t.password="Password is required"),t}(k)),c==={}&&console.log("no error"),console.log("in"),j.a.post("http://localhost:8000/api/login",{email:k.email,password:k.password}).then((function(e){var a=e.data.token;console.log("Token:",a),e?console.log(e):console.log("no error"),O(!0),t(a),console.log("token set"),h.push("/feed")})).catch((function(e){console.log(e);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),v(t),y({email:"",password:""}),t=""):(v(""),h.push("/feed"),O(!0))}))},children:[Object(m.jsx)("h2",{className:"text-warning text-center",children:"Login"}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Email"}),Object(m.jsx)(b.e,{type:"email",name:"email",id:"email",value:k.email,onChange:C}),c.email&&Object(m.jsx)("p",{className:"text-danger",children:c.email})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",name:"password",id:"password",value:k.password,onChange:C}),c.password&&Object(m.jsx)("p",{className:"text-danger",children:c.password})]}),Object(m.jsxs)("div",{className:"row justify-content-evenly",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(b.a,{children:"Login"})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("text",{className:"text-danger",children:"Create an account "}),Object(m.jsx)(b.a,{className:"ml-1",onClick:function(){h.push("/register")},children:"Register"})]}),f&&Object(m.jsx)("h3",{className:"text-white text-center",children:f})]})]})})})})}var p=function(){var e=Object(s.useState)({name:"",email:"",phone:"",address:"",password:"",password2:""}),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),d=Object(l.a)(c,2),u=d[0],p=d[1],O=Object(s.useState)(""),x=Object(l.a)(O,2),g=x[0],f=x[1],v=Object(s.useState)(!1),w=Object(l.a)(v,2),N=w[0],k=w[1],y=Object(i.g)(),C=function(e){var t=e.target,s=t.name,c=t.value;n(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},s,c)))},S=function(){console.log("in"),j.a.post("".concat(h.config.SERVER_URI,"/api/register"),{name:a.name,email:a.email,phone:a.phone,address:a.address,password:a.password}).then((function(e){e||console.log("no error"),k(!0),y.push("/login")})).catch((function(e){console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),f(t),n({name:"",email:"",phone:"",address:"",password:"",password2:""}),t=""):(f(""),y.push("/login"),k(!0))}))};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.b,{style:{height:"100vh",overflow:"auto"},className:"bg-dark",children:Object(m.jsx)("div",{className:"register-form",children:Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),p(function(e){var t={};return e.name.trim()||(t.name="Name required"),e.email.trim()?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.phone.trim()||(t.phone="Phone required"),e.password?e.password.length<6&&(t.password="Password needs to be 6 characters or more."):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Passwords do not match"):t.password2="Password is required",t}(a)),u==={}&&console.log("no error"),S()},children:[N?Object(m.jsx)("span",{children:"Success! Thank you for registering."}):null,Object(m.jsx)("h2",{className:"text-warning text-center",children:"Register"}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Name-Surname"}),Object(m.jsx)(b.e,{type:"name",name:"name",id:"name",value:a.name,onChange:C}),u.name&&Object(m.jsx)("p",{className:"text-danger",children:u.name})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Email"}),Object(m.jsx)(b.e,{type:"email",name:"email",id:"email",value:a.email,onChange:C}),u.email&&Object(m.jsx)("p",{className:"text-danger",children:u.email})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Phone Number"}),Object(m.jsx)(b.e,{type:"phone",name:"phone",id:"phone",value:a.phone,onChange:C}),u.phone&&Object(m.jsx)("p",{className:"text-danger",children:u.phone})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Address"}),Object(m.jsx)(b.e,{type:"address",name:"address",id:"address",value:a.address,onChange:C})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",name:"password",id:"password",value:a.password,onChange:C}),u.password&&Object(m.jsx)("p",{className:"text-danger",children:u.password})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",id:"password2",name:"password2",value:a.password2,onChange:C}),u.password2&&Object(m.jsx)("p",{className:"text-danger",children:u.password2}),"\\"]}),Object(m.jsxs)("div",{className:"row justify-content-evenly",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(b.a,{children:"Register"})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("text",{className:"text-danger",children:"Already have an account?  "}),Object(m.jsx)(b.a,{className:"ml-1",onClick:function(){y.push("/login")},children:"Login"})]}),g&&Object(m.jsx)("h3",{className:"text-white text-center",children:g})]})]})})})})},O=a.p+"static/media/welcome_bg.2e5d8be7.jpg";var x=function(){return Object(m.jsx)("div",{class:"view p-3 mb-2",style:{backgroundImage:"url(".concat(O,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(m.jsx)("div",{class:"mask rgba-black-light align-items-center",children:Object(m.jsx)("div",{class:"container",children:Object(m.jsx)("div",{class:"row",children:Object(m.jsxs)("div",{class:"col-md-12 mb-4 white-text text-center",children:[Object(m.jsx)("h1",{class:"h1-reponsive text-warning white-text font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown","data-wow-delay":"0.3s",children:Object(m.jsx)("strong",{children:"PetLand"})}),Object(m.jsx)("h3",{class:"mb-4 white-text wow fadeInDown","data-wow-delay":"0.4s",children:"A web platform where animal lovers and pets meet!"}),Object(m.jsx)("a",{href:"/login",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"LOGIN"}),Object(m.jsx)("a",{href:"/register",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"REGISTER"})]})})})})})},g=a(20),f=a.n(g),v=a(25),w=a(51),N=a(52),k=a(29),y=a(54),C=a(53),S=[{title:"Home",url:"#",cName:"nav-links"},{title:"DM",url:"/dm",cName:"nav-links"},{title:"Profile",url:"/profile",cName:"nav-links"},{title:"Create a post",url:"/createPost",cName:"nav-links"},{title:"Search",url:"/search",cName:"nav-links"}];a(86);var P=function(e){Object(y.a)(a,e);var t=Object(C.a)(a);function a(e){var s;Object(w.a)(this,a),(s=t.call(this,e)).routingFunction=function(){s.props.history.push({pathname:"/feed"})},s.state={clicked:!1},s.handleClick=function(){s.state({clicked:!s.state.clicked})},console.log(s.props);s.props.history;return s.routingFunction=s.routingFunction.bind(Object(k.a)(s)),s}return Object(N.a)(a,[{key:"logout",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("out"),j.a.post("http://localhost:8000/api/logout",{logout:!0}).then((function(e){e?(console.log(e),sessionStorage.removeItem("token"),t.routingFunction()):console.log("no error")})).catch((function(e){console.log(e);var t=e.response;t&&console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("nav",{className:"NavbarItems",children:[Object(m.jsxs)("h1",{className:"navbar-logo",children:["PetLand",Object(m.jsx)("i",{className:"fab fa-react"})]}),Object(m.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(m.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(m.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:S.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))}),Object(m.jsx)(b.a,{onClick:this.logout,children:"Log Out"})]})}}]),a}(s.Component),I=Object(i.h)(P),_=function(e){e.isAuth;return Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{}),Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:[Object(m.jsx)("h1",{children:"Welcome"}),Object(m.jsx)("h2",{children:"-- Posts will be here"})]})]})};var E=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"DM Page"})})};var R=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Profile Page "})})},L=a(22),T=a(36),q=a(34),D=a(30),A=a(35),V=(a.p,a.p,[{value:"cat",label:"Cat"},{value:"dog",label:"Dog"},{value:"bird",label:"Bird"}]),B=[{value:"true",label:"Vaccinated"},{value:"false",label:"Not Vaccinated"}];var U=function(){var e,t=Object(s.useState)({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:""}),a=Object(l.a)(t,2),n=a[0],c=a[1],d=Object(s.useState)(""),u=Object(l.a)(d,2),p=u[0],O=u[1],x=Object(s.useState)(""),g=Object(l.a)(x,2),f=(g[0],g[1]),v=Object(s.useState)(!1),w=Object(l.a)(v,2),N=(w[0],w[1]),k=Object(i.g)(),y=function(e){var t=e.target,a=t.name,s=t.value;console.log(a),console.log(s),c(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},a,s)))},C=function(){console.log("in"),j.a.post("".concat(h.config.SERVER_URI,"/api/createPost"),{name:n.name,breed:n.breed,location:n.location,age:n.age,p_image:n.p_image,extra_info:n.extra_info,vaccinated:n.vaccinated,ts:(new Date).toLocaleString()+""}).then((function(e){e||console.log("no error"),N(!0),k.push("/feed")})).catch((function(e){console.log("error in"),console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),f(t),c({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:""}),t=""):(f(""),k.push("/feed"),N(!0))}))};return Object(m.jsx)("div",{style:{backgroundImage:"url(https://st.depositphotos.com/2015673/4034/v/950/depositphotos_40343767-stock-illustration-forest-landscape.jpg)",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(m.jsx)(L.a,(e={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(e,"style",{width:"60rem"}),Object(o.a)(e,"children",Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),console.log("Breed: ",n.breed),console.log("Name: ",n.name),console.log("Age: ",n.age),console.log("Location: ",n.location),console.log("Vaccinated: ",n.vaccinated),console.log("Extra_info: ",n.extra_info),e.preventDefault(),O(function(e){var t={};return"Select"===!e.breed&&(t.name="Breed required"),""===e.name&&(t.email="Name required"),""===e.age&&(t.phone="Age required"),""===e.location&&(t.phone="Location required"),"Select"===e.vaccinated&&(t.phone="Vaccination Status required"),t}(n)),p==={}&&console.log("no error"),C()},children:[Object(m.jsx)(L.a.Img,{variant:"top",src:""}),Object(m.jsxs)(L.a.Body,{children:[Object(m.jsx)(L.a.Title,{className:"makeCenter",style:{fontSize:28},children:"Let's find a home for our pet friends !!"}),Object(m.jsx)("br",{}),Object(m.jsxs)(q.a,{children:[Object(m.jsxs)(D.a,{children:[Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Breed"}),Object(m.jsx)(A.a,{options:V,value:V[n.breed],onChange:function(e){var t=e.value;c(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},"breed",t))),console.log(e),n.breed=e.value,console.log(n.breed)}})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Name"}),Object(m.jsx)(b.e,{type:"name",name:"name",id:"name",value:n.name,onChange:y})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Age"}),Object(m.jsx)(b.e,{type:"number",name:"age",id:"age",min:"0",max:"30",value:n.age,onChange:y})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Location"}),Object(m.jsx)(b.e,{type:"text",name:"location",id:"location",value:n.location,onChange:y})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Vaccination Status"}),Object(m.jsx)(A.a,{options:B,value:B[n.vaccinated],onChange:function(e){var t=e.value;c(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},"vaccinated",t))),console.log(e),n.vaccinated=e.value,console.log(n.vaccinated)}})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Extra Info"}),Object(m.jsx)(b.e,{type:"text",name:"extra_info",id:"extra_info",value:n.extra_info,onChange:y})]})]}),Object(m.jsx)(D.a,{className:"makeCenter",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"file",onChange:function(e){var t=URL.createObjectURL(e.target.files[0]);c(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},"p_image",t)))}}),Object(m.jsx)("img",{className:"photo",src:n.p_image})]})})]}),Object(m.jsx)(q.a,{children:Object(m.jsxs)(D.a,{md:{offset:8},children:[Object(m.jsx)(T.a,{className:"makeCenter",variant:"danger",size:"lg",onClick:function(){k.push("/feed")},style:{marginRight:10},children:"CANCEL"}),Object(m.jsx)(T.a,{className:"makeCenter",variant:"success",size:"lg",type:"submit",children:"POST"})]})}),Object(m.jsx)(L.a.Text,{})]}),Object(m.jsx)("myInput",{name:"breed"})]})),e))})};function z(e){return F.apply(this,arguments)}function F(){return(F=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("in"),j.a.post("http://localhost:8000/api/search",{id:t}).then((function(e){var t=e.data.name;return console.log("name:",t),e?console.log(e):console.log("no error"),t})).catch((function(e){console.log(e);var t=e.response.data.errors[0].msg;console.log(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return J.apply(this,arguments)}function J(){return(J=Object(v.a)(f.a.mark((function e(){var t,a,n,c,o,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(s.useState)(""),a=Object(l.a)(t,2),n=a[0],c=a[1],o=sessionStorage.getItem("token"),console.log(o),e.next=5,z(o);case 5:return r=e.sent,c(r),console.log(n),e.abrupt("return",Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:n})}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=a(17);var $=function(){var e=function(){var e=Object(s.useState)(!!sessionStorage.getItem("token")),t=Object(l.a)(e,2),a=t[0],n=t[1];return{setToken:function(e){sessionStorage.setItem("token",e),n(!0)},token:a}}(),t=e.token,a=e.setToken;return t?Object(m.jsx)(M.a,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{path:"/feed",component:_}),Object(m.jsx)(i.b,{path:"/createPost",component:U}),Object(m.jsx)(i.b,{path:"/dm",component:E}),Object(m.jsx)(i.b,{path:"/profile",component:R}),Object(m.jsx)(i.b,{path:"/search",component:G})]})}):Object(m.jsx)(M.a,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{path:"/",exact:!0,component:x}),Object(m.jsx)(i.b,{path:"/login",component:function(){return Object(m.jsx)(u,{setToken:a})}}),Object(m.jsx)(i.b,{path:"/register",component:p}),Object(m.jsx)(i.a,{to:"/login"})]})})};a(101);c.a.render(Object(m.jsx)($,{}),document.getElementById("root"))},21:function(e,t){e.exports.config={SERVER_URI:"https://petland-app.herokuapp.com"}},23:function(e,t,a){},86:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.e12dcd9f.chunk.js.map