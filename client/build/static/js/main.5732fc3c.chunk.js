(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(19),n=a.n(c),o=(a(25),a(10)),r=a(6),l=a(7),i=a(8),j=a(13),d=a.n(j),b=a(5),h=a(18),m=a(2);function O(e){var t=e.setToken,a=Object(s.useState)(""),c=Object(l.a)(a,2),n=c[0],j=c[1],O=Object(i.g)(),u=Object(s.useState)(!1),x=Object(l.a)(u,2),p=(x[0],x[1]),g=Object(s.useState)(""),f=Object(l.a)(g,2),v=f[0],w=f[1],N=Object(s.useState)({email:"",password:""}),k=Object(l.a)(N,2),C=k[0],S=k[1],y=function(e){var t=e.target,a=t.name,s=t.value;S(Object(r.a)(Object(r.a)({},C),{},Object(o.a)({},a,s)))};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.b,{style:{height:"100vh"},className:"bg-dark",children:Object(m.jsx)("div",{className:"register-form",children:Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),j(function(e){var t={};return e.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.password||(t.password="Password is required"),t}(C)),n==={}&&console.log("no error"),console.log("in"),d.a.post("".concat(h.config.SERVER_URI,"/api/login"),{email:C.email,password:C.password}).then((function(e){var a=e.data.token;console.log("Token:",a),e?console.log(e):console.log("no error"),p(!0),t(a),console.log("token set"),O.push("/feed")})).catch((function(e){console.log(e);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),w(t),S({email:"",password:""}),t=""):(w(""),O.push("/feed"),p(!0))}))},children:[Object(m.jsx)("h2",{className:"text-warning text-center",children:"Login"}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Email"}),Object(m.jsx)(b.e,{type:"email",name:"email",id:"email",value:C.email,onChange:y}),n.email&&Object(m.jsx)("p",{className:"text-danger",children:n.email})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",name:"password",id:"password",value:C.password,onChange:y}),n.password&&Object(m.jsx)("p",{className:"text-danger",children:n.password})]}),Object(m.jsxs)("div",{className:"row justify-content-evenly",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(b.a,{children:"Login"})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("text",{className:"text-danger",children:"Create an account "}),Object(m.jsx)(b.a,{className:"ml-1",onClick:function(){O.push("/register")},children:"Register"})]}),v&&Object(m.jsx)("h3",{className:"text-white text-center",children:v})]})]})})})})}var u=function(){var e=Object(s.useState)({name:"",email:"",phone:"",address:"",password:"",password2:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),j=Object(l.a)(n,2),O=j[0],u=j[1],x=Object(s.useState)(""),p=Object(l.a)(x,2),g=p[0],f=p[1],v=Object(s.useState)(!1),w=Object(l.a)(v,2),N=w[0],k=w[1],C=Object(i.g)(),S=function(e){var t=e.target,s=t.name,n=t.value;c(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},s,n)))},y=function(){console.log("in"),d.a.post("".concat(h.config.SERVER_URI,"/api/register"),{name:a.name,email:a.email,phone:a.phone,address:a.address,password:a.password}).then((function(e){e||console.log("no error"),k(!0),C.push("/login")})).catch((function(e){console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),f(t),c({name:"",email:"",phone:"",address:"",password:"",password2:""}),t=""):(f(""),C.push("/login"),k(!0))}))};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.b,{style:{height:"100vh",overflow:"auto"},className:"bg-dark",children:Object(m.jsx)("div",{className:"register-form",children:Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),u(function(e){var t={};return e.name.trim()||(t.name="Name required"),e.email.trim()?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.phone.trim()||(t.phone="Phone required"),e.password?e.password.length<6&&(t.password="Password needs to be 6 characters or more."):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Passwords do not match"):t.password2="Password is required",t}(a)),O==={}&&console.log("no error"),y()},children:[N?Object(m.jsx)("span",{children:"Success! Thank you for registering."}):null,Object(m.jsx)("h2",{className:"text-warning text-center",children:"Register"}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Name-Surname"}),Object(m.jsx)(b.e,{type:"name",name:"name",id:"name",value:a.name,onChange:S}),O.name&&Object(m.jsx)("p",{className:"text-danger",children:O.name})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Email"}),Object(m.jsx)(b.e,{type:"email",name:"email",id:"email",value:a.email,onChange:S}),O.email&&Object(m.jsx)("p",{className:"text-danger",children:O.email})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Phone Number"}),Object(m.jsx)(b.e,{type:"phone",name:"phone",id:"phone",value:a.phone,onChange:S}),O.phone&&Object(m.jsx)("p",{className:"text-danger",children:O.phone})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Address"}),Object(m.jsx)(b.e,{type:"address",name:"address",id:"address",value:a.address,onChange:S})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",name:"password",id:"password",value:a.password,onChange:S}),O.password&&Object(m.jsx)("p",{className:"text-danger",children:O.password})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",id:"password2",name:"password2",value:a.password2,onChange:S}),O.password2&&Object(m.jsx)("p",{className:"text-danger",children:O.password2}),"\\"]}),Object(m.jsxs)("div",{className:"row justify-content-evenly",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(b.a,{children:"Register"})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("text",{className:"text-danger",children:"Already have an account?  "}),Object(m.jsx)(b.a,{className:"ml-1",onClick:function(){C.push("/login")},children:"Login"})]}),g&&Object(m.jsx)("h3",{className:"text-white text-center",children:g})]})]})})})})},x=a.p+"static/media/welcome_bg.2e5d8be7.jpg";var p=function(){return Object(m.jsx)("div",{class:"view p-3 mb-2",style:{backgroundImage:"url(".concat(x,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(m.jsx)("div",{class:"mask rgba-black-light align-items-center",children:Object(m.jsx)("div",{class:"container",children:Object(m.jsx)("div",{class:"row",children:Object(m.jsxs)("div",{class:"col-md-12 mb-4 white-text text-center",children:[Object(m.jsx)("h1",{class:"h1-reponsive text-warning white-text font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown","data-wow-delay":"0.3s",children:Object(m.jsx)("strong",{children:"PetLand"})}),Object(m.jsx)("h3",{class:"mb-4 white-text wow fadeInDown","data-wow-delay":"0.4s",children:"A web platform where animal lovers and pets meet!"}),Object(m.jsx)("a",{href:"/login",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"LOGIN"}),Object(m.jsx)("a",{href:"/register",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"REGISTER"})]})})})})})},g=a(15),f=a(9),v=a(24),w=a.n(v),N=a(31),k=a(53),C=a(54),S=a(32),y=a(56),R=a(55),_=[{title:"Home",url:"#",cName:"nav-links"},{title:"DM",url:"/dm",cName:"nav-links"},{title:"Profile",url:"/profile",cName:"nav-links"},{title:"Create a post",url:"/createPost",cName:"nav-links"},{title:"Search",url:"/search",cName:"nav-links"}];a(87);var P=function(e){Object(y.a)(a,e);var t=Object(R.a)(a);function a(e){var s;Object(k.a)(this,a),(s=t.call(this,e)).routingFunction=function(){s.props.history.push({pathname:"/feed"})},s.state={clicked:!1},s.handleClick=function(){s.state({clicked:!s.state.clicked})},console.log(s.props);s.props.history;return s.routingFunction=s.routingFunction.bind(Object(S.a)(s)),s}return Object(C.a)(a,[{key:"logout",value:function(){var e=Object(N.a)(w.a.mark((function e(t){var a=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("out"),d.a.post("".concat(h.config.SERVER_URI,"/api/logout"),{logout:!0}).then((function(e){e?(console.log(e),sessionStorage.removeItem("token"),a.props.history.push("/feed")):console.log("no error")})).catch((function(e){console.log(e);var t=e.response;t&&console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("nav",{className:"NavbarItems",children:[Object(m.jsxs)("h1",{className:"navbar-logo",children:["PetLand",Object(m.jsx)("i",{className:"fab fa-thin fa-react"})]}),Object(m.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(m.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(m.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:_.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))}),Object(m.jsx)(b.a,{onClick:this.logout,children:"Log Out"})]})}}]),a}(s.Component),E=Object(i.h)(P),T=a(21),I=function(e){var t,a=e.name,s=e.breed,c=e.age,n=e.location,r=e.extra_info,l=e.p_image,i=e.vaccinated,j=e.ts;return Object(m.jsx)("div",{children:Object(m.jsxs)(T.a,(t={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(t,"style",{width:"30rem",height:"800px"}),Object(o.a)(t,"children",[Object(m.jsx)(T.a.Img,{variant:"top",src:""}),Object(m.jsxs)(T.a.Body,{children:[Object(m.jsxs)(T.a.Title,{className:"makeCenter postTitle",style:{fontSize:28,textTransform:"uppercase"},children:["Meet with ",a]}),Object(m.jsx)("br",{}),Object(m.jsx)(T.a.Text,{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Name:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"namee",children:a})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Breed:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"breed",children:s})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Age:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"age",children:c})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Location:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"location",children:n})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Vaccinated:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"location",children:i?"Yes":"No"})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Extra Info:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"extra_info",children:r})})]}),Object(m.jsx)("br",{}),Object(m.jsx)(g.a,{className:"makeCenter",children:Object(m.jsx)("img",{src:l,className:"makeCenter photo"})}),Object(m.jsx)(g.a,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{style:{fontSize:"10px",position:"absolute",right:0,marginRight:"10%"},className:"makeCenter",id:"extra_info",children:j.substring(0,10)})})})]})})]})]),t))})},L=a.p+"static/media/trees.0fa91f66.jpeg",V=(a(47),function(){var e=Object(s.useState)({namee:{}}),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)([]),j=Object(l.a)(n,2),b=(j[0],j[1],Object(s.useState)("")),O=Object(l.a)(b,2),u=(O[0],O[1],Object(s.useState)("")),x=Object(l.a)(u,2),p=(x[0],x[1]),v=Object(s.useState)(!1),w=Object(l.a)(v,2),N=(w[0],w[1]),k=Object(i.g)(),C=function(){console.log("in"),d.a.post("".concat(h.config.SERVER_URI,"/api/getPosts"),{}).then((function(e){var t,s=e.data;console.log("The response is:"),console.log(e),console.log(s),console.log(e.data.posts),console.log("----"),t=e.data.posts,console.log("e is "+t),c(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},"namee",t))),console.log("e is:"),console.log(t),a.namee=t,console.log("values.name"),console.log(a.namee),console.log("this is values"),console.log(a)})).catch((function(e){console.log("error in"),console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t||(console.log("Yes error."),p(""),k.push("/feed"),N(!0))}))};return Object(s.useEffect)((function(){return C()}),[]),Object(m.jsxs)("div",{style:{backgroundImage:"url(".concat(L,")"),padding:"10%"},className:"makeCenter",children:[Object(m.jsx)(E,{}),Object(m.jsx)(g.a,{children:a.namee.length>0&&a.namee.map((function(e,t){return Object(m.jsx)(f.a,{xs:6,className:"makeCenter",children:Object(m.jsx)(I,{name:e.name,breed:e.breed,age:e.age,location:e.location,extra_info:e.extra_info,p_image:e.p_image,vaccinated:e.vaccinated,ts:e.ts})})}))})]})});var q=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"DM Page"})})};var D=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Profile Page "})})},A=a(27),B=a(36),U=(a.p,a.p,[{value:"cat",label:"Cat"},{value:"dog",label:"Dog"},{value:"bird",label:"Bird"}]),z=[{value:"true",label:"Vaccinated"},{value:"false",label:"Not Vaccinated"}];var F=function(){var e,t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],n=a[1],j=Object(s.useState)({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:""}),O=Object(l.a)(j,2),u=O[0],x=O[1],p=Object(s.useState)(""),v=Object(l.a)(p,2),k=v[0],C=v[1],S=Object(s.useState)(""),y=Object(l.a)(S,2),R=(y[0],y[1]),_=Object(s.useState)(!1),P=Object(l.a)(_,2),E=(P[0],P[1]),I=Object(i.g)(),L=function(e){var t=e.target,a=t.name,s=t.value;console.log(a),console.log(s),x(Object(r.a)(Object(r.a)({},u),{},Object(o.a)({},a,s)))},V=function(){var e=Object(N.a)(w.a.mark((function e(t){var a,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],e.next=3,q(a);case 3:s=e.sent,console.log("base image is"),console.log(s),n(s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){return new Promise((function(t,a){var s=new FileReader;s.readAsDataURL(e),s.onload=function(){t(s.result)},s.onerror=function(e){a(e)}}))},D=function(){console.log("in"),d.a.post("".concat(h.config.SERVER_URI,"/api/createPost"),{name:u.name,breed:u.breed,location:u.location,age:u.age,p_image:c,extra_info:u.extra_info,vaccinated:u.vaccinated,ts:(new Date).toLocaleString()+""}).then((function(e){e||console.log("no error"),E(!0),I.push("/feed")})).catch((function(e){console.log("error in"),console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),R(t),x({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:"",baseImage:""}),t=""):(R(""),I.push("/feed"),E(!0))}))};return Object(m.jsx)("div",{style:{backgroundImage:"url(https://st.depositphotos.com/2015673/4034/v/950/depositphotos_40343767-stock-illustration-forest-landscape.jpg)",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(m.jsx)(T.a,(e={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(e,"style",{width:"60rem"}),Object(o.a)(e,"children",Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),console.log("Breed: ",u.breed),console.log("Name: ",u.name),console.log("Age: ",u.age),console.log("Location: ",u.location),console.log("Vaccinated: ",u.vaccinated),console.log("Extra_info: ",u.extra_info),e.preventDefault(),C(function(e){var t={};return"Select"===!e.breed&&(t.name="Breed required"),""===e.name&&(t.email="Name required"),""===e.age&&(t.phone="Age required"),""===e.location&&(t.phone="Location required"),"Select"===e.vaccinated&&(t.phone="Vaccination Status required"),t}(u)),k==={}&&console.log("no error"),D()},children:[Object(m.jsx)(T.a.Img,{variant:"top",src:""}),Object(m.jsxs)(T.a.Body,{children:[Object(m.jsx)(T.a.Title,{className:"makeCenter",style:{fontSize:28},children:"Let's find a home for our pet friends !!"}),Object(m.jsx)("br",{}),Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(f.a,{children:[Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Breed"}),Object(m.jsx)(B.a,{options:U,value:U[u.breed],onChange:function(e){var t=e.value;x(Object(r.a)(Object(r.a)({},u),{},Object(o.a)({},"breed",t))),console.log(e),u.breed=e.value,console.log(u.breed)}})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Name"}),Object(m.jsx)(b.e,{type:"name",name:"name",id:"name",value:u.name,onChange:L})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Age"}),Object(m.jsx)(b.e,{type:"number",name:"age",id:"age",min:"0",max:"30",value:u.age,onChange:L})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Location"}),Object(m.jsx)(b.e,{type:"text",name:"location",id:"location",value:u.location,onChange:L})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Vaccination Status"}),Object(m.jsx)(B.a,{options:z,value:z[u.vaccinated],onChange:function(e){var t=e.value;x(Object(r.a)(Object(r.a)({},u),{},Object(o.a)({},"vaccinated",t))),console.log(e),u.vaccinated=e.value,console.log(u.vaccinated)}})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Extra Info"}),Object(m.jsx)(b.e,{type:"text",name:"extra_info",id:"extra_info",value:u.extra_info,onChange:L})]})]}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"file",onChange:function(e){V(e)}}),Object(m.jsx)("img",{className:"photo",src:u.p_image}),Object(m.jsx)("img",{className:"photo",src:c})]})})]}),Object(m.jsx)(g.a,{children:Object(m.jsxs)(f.a,{md:{offset:8},children:[Object(m.jsx)(A.a,{className:"makeCenter",variant:"danger",size:"lg",onClick:function(){I.push("/feed")},style:{marginRight:10},children:"CANCEL"}),Object(m.jsx)(A.a,{className:"makeCenter",variant:"success",size:"lg",type:"submit",children:"POST"})]})}),Object(m.jsx)(T.a.Text,{})]})]})),e))})};function M(){var e=Object(s.useState)(""),t=(e.searchTerm,e.setSearchTerm),a=Object(s.useState)([]),c=a.posts,n=a.setPosts;return Object(s.useEffect)((function(){d.a.post("".concat(h.config.SERVER_URI,"/api/search_all")).then((function(e){console.log(e.data),n(e.data)}))}),[]),Object(m.jsxs)("div",{className:"search",children:[Object(m.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){t(e.target.value)}}),c.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:e.name})},e.id)}))]})}var G=a(22);var J=function(){var e=function(){var e=Object(s.useState)(!!sessionStorage.getItem("token")),t=Object(l.a)(e,2),a=t[0],c=t[1];return{setToken:function(e){sessionStorage.setItem("token",e),c(!0)},token:a}}(),t=e.token,a=e.setToken;return t?Object(m.jsx)(G.a,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{path:"/feed",component:V}),Object(m.jsx)(i.b,{path:"/createPost",component:F}),Object(m.jsx)(i.b,{path:"/dm",component:q}),Object(m.jsx)(i.b,{path:"/profile",component:D}),Object(m.jsx)(i.b,{path:"/search",component:M})]})}):Object(m.jsx)(G.a,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{path:"/",exact:!0,component:p}),Object(m.jsx)(i.b,{path:"/login",component:function(){return Object(m.jsx)(O,{setToken:a})}}),Object(m.jsx)(i.b,{path:"/register",component:u}),Object(m.jsx)(i.a,{to:"/login"})]})})};a(103);n.a.render(Object(m.jsx)(J,{}),document.getElementById("root"))},18:function(e,t){e.exports.config={SERVER_URI:"https://petland-app.herokuapp.com"}},25:function(e,t,a){},87:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.5732fc3c.chunk.js.map