(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(19),n=a.n(c),o=(a(26),a(9)),r=a(6),l=a(7),i=a(10),j=a(12),d=a.n(j),b=a(5),h=a(23),m=a(2);function O(e){var t=e.setToken,a=Object(s.useState)(""),c=Object(l.a)(a,2),n=c[0],j=c[1],O=Object(i.g)(),x=Object(s.useState)(!1),u=Object(l.a)(x,2),p=(u[0],u[1]),g=Object(s.useState)(""),f=Object(l.a)(g,2),v=f[0],w=f[1],N=Object(s.useState)({email:"",password:""}),k=Object(l.a)(N,2),C=k[0],y=k[1],_=function(e){var t=e.target,a=t.name,s=t.value;y(Object(r.a)(Object(r.a)({},C),{},Object(o.a)({},a,s)))};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.b,{style:{height:"100vh"},className:"bg-dark",children:Object(m.jsx)("div",{className:"register-form",children:Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),j(function(e){var t={};return e.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.password||(t.password="Password is required"),t}(C)),n==={}&&console.log("no error"),console.log("in"),d.a.post("".concat(h.config.SERVER_URI,"/api/login"),{email:C.email,password:C.password}).then((function(e){var a=e.data.token;console.log("Token:",a),e?console.log(e):console.log("no error"),p(!0),t(a),console.log("token set"),O.push("/feed")})).catch((function(e){console.log(e);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),w(t),y({email:"",password:""}),t=""):(w(""),O.push("/feed"),p(!0))}))},children:[Object(m.jsx)("h2",{className:"text-warning text-center",children:"Login"}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Email"}),Object(m.jsx)(b.e,{type:"email",name:"email",id:"email",value:C.email,onChange:_}),n.email&&Object(m.jsx)("p",{className:"text-danger",children:n.email})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",name:"password",id:"password",value:C.password,onChange:_}),n.password&&Object(m.jsx)("p",{className:"text-danger",children:n.password})]}),Object(m.jsxs)("div",{className:"row justify-content-evenly",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(b.a,{children:"Login"})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("text",{className:"text-danger",children:"Create an account "}),Object(m.jsx)(b.a,{className:"ml-1",onClick:function(){O.push("/register")},children:"Register"})]}),v&&Object(m.jsx)("h3",{className:"text-white text-center",children:v})]})]})})})})}var x=function(){var e=Object(s.useState)({name:"",email:"",phone:"",address:"",password:"",password2:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),j=Object(l.a)(n,2),h=j[0],O=j[1],x=Object(s.useState)(""),u=Object(l.a)(x,2),p=u[0],g=u[1],f=Object(s.useState)(!1),v=Object(l.a)(f,2),w=v[0],N=v[1],k=Object(i.g)(),C=function(e){var t=e.target,s=t.name,n=t.value;c(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},s,n)))},y=function(){console.log("in"),d.a.post("http://localhost:8000/api/register",{name:a.name,email:a.email,phone:a.phone,address:a.address,password:a.password}).then((function(e){e||console.log("no error"),N(!0),k.push("/login")})).catch((function(e){console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),g(t),c({name:"",email:"",phone:"",address:"",password:"",password2:""}),t=""):(g(""),k.push("/login"),N(!0))}))};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.b,{style:{height:"100vh",overflow:"auto"},className:"bg-dark",children:Object(m.jsx)("div",{className:"register-form",children:Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),O(function(e){var t={};return e.name.trim()||(t.name="Name required"),e.email.trim()?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.phone.trim()||(t.phone="Phone required"),e.password?e.password.length<6&&(t.password="Password needs to be 6 characters or more."):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Passwords do not match"):t.password2="Password is required",t}(a)),h==={}&&console.log("no error"),y()},children:[w?Object(m.jsx)("span",{children:"Success! Thank you for registering."}):null,Object(m.jsx)("h2",{className:"text-warning text-center",children:"Register"}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Name-Surname"}),Object(m.jsx)(b.e,{type:"name",name:"name",id:"name",value:a.name,onChange:C}),h.name&&Object(m.jsx)("p",{className:"text-danger",children:h.name})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Email"}),Object(m.jsx)(b.e,{type:"email",name:"email",id:"email",value:a.email,onChange:C}),h.email&&Object(m.jsx)("p",{className:"text-danger",children:h.email})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Phone Number"}),Object(m.jsx)(b.e,{type:"phone",name:"phone",id:"phone",value:a.phone,onChange:C}),h.phone&&Object(m.jsx)("p",{className:"text-danger",children:h.phone})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Address"}),Object(m.jsx)(b.e,{type:"address",name:"address",id:"address",value:a.address,onChange:C})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",name:"password",id:"password",value:a.password,onChange:C}),h.password&&Object(m.jsx)("p",{className:"text-danger",children:h.password})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",id:"password2",name:"password2",value:a.password2,onChange:C}),h.password2&&Object(m.jsx)("p",{className:"text-danger",children:h.password2}),"\\"]}),Object(m.jsxs)("div",{className:"row justify-content-evenly",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(b.a,{children:"Register"})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("text",{className:"text-danger",children:"Already have an account?  "}),Object(m.jsx)(b.a,{className:"ml-1",onClick:function(){k.push("/login")},children:"Login"})]}),p&&Object(m.jsx)("h3",{className:"text-white text-center",children:p})]})]})})})})},u=a.p+"static/media/welcome_bg.2e5d8be7.jpg";var p=function(){return Object(m.jsx)("div",{class:"view p-3 mb-2",style:{backgroundImage:"url(".concat(u,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(m.jsx)("div",{class:"mask rgba-black-light align-items-center",children:Object(m.jsx)("div",{class:"container",children:Object(m.jsx)("div",{class:"row",children:Object(m.jsxs)("div",{class:"col-md-12 mb-4 white-text text-center",children:[Object(m.jsx)("h1",{class:"h1-reponsive text-warning white-text font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown","data-wow-delay":"0.3s",children:Object(m.jsx)("strong",{children:"PetLand"})}),Object(m.jsx)("h3",{class:"mb-4 white-text wow fadeInDown","data-wow-delay":"0.4s",children:"A web platform where animal lovers and pets meet!"}),Object(m.jsx)("a",{href:"/login",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"LOGIN"}),Object(m.jsx)("a",{href:"/register",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"REGISTER"})]})})})})})},g=a(11),f=a(8),v=a(24),w=a.n(v),N=a(25),k=a(52),C=a(53),y=a(55),_=a(54),S=[{title:"Home",url:"/feed",cName:"nav-links"},{title:"DM",url:"/dm",cName:"nav-links"},{title:"Profile",url:"/profile",cName:"nav-links"},{title:"Create a post",url:"/createPost",cName:"nav-links"},{title:"Search",url:"/search",cName:"nav-links"}];a(86);var P=function(e){Object(y.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(k.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={clicked:!1},e.handleClick=function(){e.state({clicked:!e.state.clicked})},e}return Object(C.a)(a,[{key:"logout",value:function(){var e=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("out"),d.a.post("http://localhost:8000/api/logout",{logout:!0}).then((function(e){e?(console.log(e),sessionStorage.removeItem("token")):console.log("no error")})).catch((function(e){console.log(e);var t=e.response;t&&console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("nav",{className:"NavbarItems",children:[Object(m.jsx)("h1",{className:"navbar-logo",children:"PetLand"}),Object(m.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(m.jsx)("i",{className:(this.state.clicked,"fas fa-cat")})}),Object(m.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:S.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))}),Object(m.jsx)(b.a,{onClick:this.logout,children:"Log Out"})]})}}]),a}(s.Component),I=Object(i.i)(P),T=a(21),E=function(e){var t,a=e.post_id,s=e.name,c=e.breed,n=e.age,r=e.location,l=e.extra_info,j=e.p_image,d=e.vaccinated,b=e.ts,h=Object(i.g)();return Object(m.jsx)("div",{children:Object(m.jsxs)(T.a,(t={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(t,"style",{width:"30rem",height:"800px"}),Object(o.a)(t,"children",[Object(m.jsx)(T.a.Img,{variant:"top",src:""}),Object(m.jsxs)(T.a.Body,{children:[Object(m.jsxs)(T.a.Title,{className:"makeCenter postTitle",style:{fontSize:28,textTransform:"uppercase"},children:["Meet with ",s]}),Object(m.jsx)("br",{}),Object(m.jsx)(T.a.Text,{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Name:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"namee",children:s})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Breed:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"breed",children:c})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Age:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"age",children:n})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Location:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"location",children:r})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Vaccinated:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"location",children:d?"Yes":"No"})})]}),Object(m.jsxs)(g.a,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{className:"postTitle",children:"Extra Info:"})}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"extra_info",children:l})})]}),Object(m.jsx)("br",{}),Object(m.jsx)(g.a,{className:"makeCenter",children:Object(m.jsx)("img",{src:j,className:"makeCenter photo"})}),Object(m.jsx)(g.a,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)("label",{style:{fontSize:"10px",position:"absolute",right:0,marginRight:"10%"},className:"makeCenter",id:"extra_info",children:b.substring(0,10)})})}),Object(m.jsxs)(g.a,{className:"makeCenter",children:[Object(m.jsx)(f.a,{sm:2,className:"my-1",children:Object(m.jsxs)("a",{href:"/feed",className:"btn btn-outline-white wow fadeInDown",children:[Object(m.jsx)("i",{className:"far fa-bookmark",children:" "})," "]})}),Object(m.jsx)(f.a,{sm:2,className:"my-1",children:Object(m.jsxs)("a",{href:"/postcomment",onClick:function(e){e.preventDefault(),h.push({pathname:"/postcomment",state:a})},className:"btn btn-outline-white wow fadeInDown",children:[Object(m.jsx)("i",{className:"far fa-comments",children:" "})," "]})})]})]})})]})]),t))})},R=a.p+"static/media/green_bg.14f5c6c8.jpg",L=(a(46),function(){var e=Object(s.useState)({namee:{}}),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)([]),j=Object(l.a)(n,2),b=(j[0],j[1],Object(s.useState)("")),h=Object(l.a)(b,2),O=(h[0],h[1],Object(s.useState)("")),x=Object(l.a)(O,2),u=(x[0],x[1]),p=Object(s.useState)(!1),v=Object(l.a)(p,2),w=(v[0],v[1]),N=Object(i.g)(),k=function(){console.log("in"),d.a.post("http://localhost:8000/api/get-posts",{}).then((function(e){var t,s=e.data;console.log("The response is:"),console.log(e),console.log(s),console.log(e.data.posts),console.log("----"),t=e.data.posts,console.log("e is "+t),c(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},"namee",t))),console.log("e is:"),console.log(t),a.namee=t,console.log("values.name"),console.log(a.namee),console.log("this is values"),console.log(a)})).catch((function(e){console.log("error in"),console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t||(console.log("Yes error."),u(""),N.push("/feed"),w(!0))}))};return Object(s.useEffect)((function(){return k()}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{}),Object(m.jsx)("div",{style:{backgroundImage:"url(".concat(R,")"),padding:"10%"},className:"makeCenter",children:Object(m.jsx)(g.a,{children:a.namee.length>0&&a.namee.map((function(e,t){return Object(m.jsx)(f.a,{xs:6,className:"makeCenter",children:Object(m.jsx)(E,{name:e.name,breed:e.breed,age:e.age,location:e.location,extra_info:e.extra_info,p_image:e.p_image,vaccinated:e.vaccinated,ts:e.ts,post_id:e.post_id})})}))})})]})});var D=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"DM Page"})})};var q=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Profile Page "})})},A=a(28),z=a(35),B=(a.p,a.p,[{value:"cat",label:"Cat"},{value:"dog",label:"Dog"},{value:"bird",label:"Bird"}]),V=[{value:"true",label:"Vaccinated"},{value:"false",label:"Not Vaccinated"}];var Y=function(){var e,t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],n=a[1],j=Object(s.useState)({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:""}),h=Object(l.a)(j,2),O=h[0],x=h[1],u=Object(s.useState)(""),p=Object(l.a)(u,2),v=p[0],k=p[1],C=Object(s.useState)(""),y=Object(l.a)(C,2),_=(y[0],y[1]),S=Object(s.useState)(!1),P=Object(l.a)(S,2),I=(P[0],P[1]),E=Object(i.g)(),R=function(e){var t=e.target,a=t.name,s=t.value;console.log(a),console.log(s),x(Object(r.a)(Object(r.a)({},O),{},Object(o.a)({},a,s)))},L=function(){var e=Object(N.a)(w.a.mark((function e(t){var a,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],e.next=3,D(a);case 3:s=e.sent,console.log("base image is"),console.log(s),n(s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){return new Promise((function(t,a){var s=new FileReader;s.readAsDataURL(e),s.onload=function(){t(s.result)},s.onerror=function(e){a(e)}}))},q=function(){console.log("in"),d.a.post("http://localhost:8000/api/createPost",{name:O.name,breed:O.breed,location:O.location,age:O.age,p_image:c,extra_info:O.extra_info,vaccinated:O.vaccinated,ts:(new Date).toLocaleString()+""}).then((function(e){e||console.log("no error"),I(!0),E.push("/feed")})).catch((function(e){console.log("error in"),console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t?(console.log(t),_(t),x({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:"",baseImage:""}),t=""):(_(""),E.push("/feed"),I(!0))}))};return Object(m.jsx)("div",{style:{backgroundImage:"url(https://st.depositphotos.com/2015673/4034/v/950/depositphotos_40343767-stock-illustration-forest-landscape.jpg)",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(m.jsx)(T.a,(e={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(e,"style",{width:"60rem"}),Object(o.a)(e,"children",Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),console.log("Breed: ",O.breed),console.log("Name: ",O.name),console.log("Age: ",O.age),console.log("Location: ",O.location),console.log("Vaccinated: ",O.vaccinated),console.log("Extra_info: ",O.extra_info),e.preventDefault(),k(function(e){var t={};return"Select"===!e.breed&&(t.name="Breed required"),""===e.name&&(t.email="Name required"),""===e.age&&(t.phone="Age required"),""===e.location&&(t.phone="Location required"),"Select"===e.vaccinated&&(t.phone="Vaccination Status required"),t}(O)),v==={}&&console.log("no error"),q()},children:[Object(m.jsx)(T.a.Img,{variant:"top",src:""}),Object(m.jsxs)(T.a.Body,{children:[Object(m.jsx)(T.a.Title,{className:"makeCenter",style:{fontSize:28},children:"Let's find a home for our pet friends !!"}),Object(m.jsx)("br",{}),Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(f.a,{children:[Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Breed"}),Object(m.jsx)(z.a,{options:B,value:B[O.breed],onChange:function(e){var t=e.value;x(Object(r.a)(Object(r.a)({},O),{},Object(o.a)({},"breed",t))),console.log(e),O.breed=e.value,console.log(O.breed)}})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Name"}),Object(m.jsx)(b.e,{type:"name",name:"name",id:"name",value:O.name,onChange:R})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Age"}),Object(m.jsx)(b.e,{type:"number",name:"age",id:"age",min:"0",max:"30",value:O.age,onChange:R})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Location"}),Object(m.jsx)(b.e,{type:"text",name:"location",id:"location",value:O.location,onChange:R})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Vaccination Status"}),Object(m.jsx)(z.a,{options:V,value:V[O.vaccinated],onChange:function(e){var t=e.value;x(Object(r.a)(Object(r.a)({},O),{},Object(o.a)({},"vaccinated",t))),console.log(e),O.vaccinated=e.value,console.log(O.vaccinated)}})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Extra Info"}),Object(m.jsx)(b.e,{type:"text",name:"extra_info",id:"extra_info",value:O.extra_info,onChange:R})]})]}),Object(m.jsx)(f.a,{className:"makeCenter",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"file",onChange:function(e){L(e)}}),Object(m.jsx)("img",{className:"photo",src:O.p_image}),Object(m.jsx)("img",{className:"photo",src:c})]})})]}),Object(m.jsx)(g.a,{children:Object(m.jsxs)(f.a,{md:{offset:8},children:[Object(m.jsx)(A.a,{className:"makeCenter",variant:"danger",size:"lg",onClick:function(){E.push("/feed")},style:{marginRight:10},children:"CANCEL"}),Object(m.jsx)(A.a,{className:"makeCenter",variant:"success",size:"lg",type:"submit",children:"POST"})]})}),Object(m.jsx)(T.a.Text,{})]})]})),e))})};function M(){var e=Object(s.useState)({posts:{},search_name:"",search_location:"",search_breed:""}),t=Object(l.a)(e,2),a=t[0],c=t[1];function n(){return(n=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.post("http://localhost:8000/api/search",{search_breed:"%"+a.search_breed+"%",search_name:"%"+a.search_name+"%",search_location:"%"+a.search_location+"%"}).then((function(e){console.log("here"),e||console.log("yes error"),console.log(e),i(e.data.posts)})).catch((function(e){console.log("error in"),console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t||console.log("Yes error.")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var i=function(e){console.log("e is "+e),c(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},"posts",e))),console.log("e is:"),console.log(e),a.posts=e,console.log("values.name"),console.log(a.namee)},j=function(e){console.log(e);var t=e.target,s=t.name,n=t.value;c(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},s,n)))};return Object(m.jsxs)("div",{style:{backgroundImage:"url(".concat(R,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100%"},children:[Object(m.jsx)(I,{}),Object(m.jsx)(b.c,{onSubmit:function(e){console.log("in handleSearch, e is"),console.log(e);var t=e.target,s=t.name,l=t.value;c(Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},s,l))),e.preventDefault(),function(){n.apply(this,arguments)}()},children:Object(m.jsx)("div",{className:"makeCenter",children:Object(m.jsxs)(g.a,{className:"makeCenter",children:[Object(m.jsx)(f.a,{sm:3,className:"my-1",children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)("label",{children:"Breed"}),Object(m.jsx)(b.e,{name:"search_breed",id:"search_breed",value:a.search_breed,onChange:j})]})}),Object(m.jsx)(f.a,{sm:3,className:"my-1",children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)(b.e,{name:"search_name",id:"search_name",value:a.search_name,onChange:j})]})}),Object(m.jsx)(f.a,{sm:3,className:"my-1",children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)("label",{children:"Location"}),Object(m.jsx)(b.e,{name:"search_location",id:"search_location",value:a.search_location,onChange:j})]})}),Object(m.jsx)(f.a,{sm:2,className:"my-1",children:Object(m.jsx)(b.a,{className:"makeCenter",variant:"success",size:"lg",type:"submit",children:"Search"})})]})})}),Object(m.jsx)("div",{style:{backgroundImage:"url(".concat(R,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},className:"makeCenter",children:Object(m.jsx)(g.a,{children:a.posts.length>0&&a.posts.map((function(e,t){return Object(m.jsx)(f.a,{xs:6,className:"makeCenter",children:Object(m.jsx)(E,{name:e.name,breed:e.breed,age:e.age,location:e.location,extra_info:e.extra_info,p_image:e.p_image,vaccinated:e.vaccinated,ts:e.ts})})}))})})]})}var U=function(e){var t=Object(i.h)(),a=Object(s.useState)({posts:{},comments:{}}),c=Object(l.a)(a,2),n=c[0],j=c[1],b=function(e){j(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},"posts",e))),n.posts=e},h=function(e){d.a.post("http://localhost:8000/api/comment",{id:e}).then((function(e){var t;e&&(console.log(e),t=e.data.comments,j(Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},"comments",t))),n.comments=t)})).catch((function(e){console.log("error in"),console.log(e.response)}))};return Object(s.useEffect)((function(){var e=t.state;!function(e){d.a.post("http://localhost:8000/api/post",{id:e}).then((function(e){e||console.log("yes error"),console.log(e),b(e.data.posts)})).catch((function(e){console.log("error in"),console.log(e.response);var t=e.response.data.errors[0].msg;console.log(t),t||console.log("Yes error.")}))}(e),h(e)}),[]),Object(m.jsxs)("div",{style:{backgroundImage:"url(".concat(R,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100%"},children:[Object(m.jsx)(I,{}),Object(m.jsx)(g.a,{style:{padding:"20px"},children:Object(m.jsxs)("div",{className:"makeCenter",children:[Object(m.jsx)("div",{children:Object(m.jsx)(g.a,{children:n.posts.length>0&&n.posts.map((function(e,t){return Object(m.jsx)(f.a,{xs:6,className:"makeCenter",children:Object(m.jsx)(E,{name:e.name,breed:e.breed,age:e.age,location:e.location,extra_info:e.extra_info,p_image:e.p_image,vaccinated:e.vaccinated,ts:e.ts,post_id:e.post_id})})}))})}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"Comments"})})]})})]})},G=a(15);var J=function(){var e=function(){var e=Object(s.useState)(!!sessionStorage.getItem("token")),t=Object(l.a)(e,2),a=t[0],c=t[1];return{setToken:function(e){sessionStorage.setItem("token",e),c(!0)},token:a}}(),t=e.token,a=e.setToken;return t?Object(m.jsx)(G.a,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{path:"/feed",component:L}),Object(m.jsx)(i.b,{path:"/createPost",component:Y}),Object(m.jsx)(i.b,{path:"/dm",component:D}),Object(m.jsx)(i.b,{path:"/profile",component:q}),Object(m.jsx)(i.b,{path:"/search",component:M}),Object(m.jsx)(i.b,{path:"/postcomment",component:U})]})}):Object(m.jsx)(G.a,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{path:"/",exact:!0,component:p}),Object(m.jsx)(i.b,{path:"/login",component:function(){return Object(m.jsx)(O,{setToken:a})}}),Object(m.jsx)(i.b,{path:"/register",component:x}),Object(m.jsx)(i.a,{to:"/login"})]})})};a(102);n.a.render(Object(m.jsx)(J,{}),document.getElementById("root"))},23:function(e,t){e.exports.config={SERVER_URI:"https://petland-app.herokuapp.com"}},26:function(e,t,a){},86:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.d4d10333.chunk.js.map