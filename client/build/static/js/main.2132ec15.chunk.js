(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,a){e.exports.config={SERVER_URI:"https://petland-app.herokuapp.com"}},26:function(e,a,t){},82:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(17),n=t.n(c),o=(t(26),t(9)),l=t(6),r=t(7),i=t(8),j=t(21),d=t.n(j),b=t(5),h=t(22),m=t(2);var O=function(){var e=Object(s.useState)(""),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.f)(),j=Object(s.useState)(!1),O=Object(r.a)(j,2),x=(O[0],O[1]),g=Object(s.useState)(""),p=Object(r.a)(g,2),u=p[0],f=p[1],w=Object(s.useState)({email:"",password:""}),v=Object(r.a)(w,2),N=v[0],C=v[1],y=function(e){var a=e.target,t=a.name,s=a.value;C(Object(l.a)(Object(l.a)({},N),{},Object(o.a)({},t,s)))},k=function(){console.log("in"),d.a.post("".concat(h.config.SERVER_URI,"/api/login"),{email:N.email,password:N.password}).then((function(e){e?console.log(e):console.log("no error"),n.push("/feed"),x(!0)})).catch((function(e){console.log(e.response);var a=e.response.data.errors[0].msg;console.log(a),a?(console.log(a),f(a),C({email:"",password:""}),a=""):(f(""),n.push("/feed"),x(!0))}))};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.b,{style:{height:"100vh"},className:"bg-dark",children:Object(m.jsx)("div",{className:"register-form",children:Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),c(function(e){var a={};return e.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(a.email="Email address is invalid"):a.email="Email required",e.password||(a.password="Password is required"),a}(N)),t==={}&&console.log("no error"),k()},children:[Object(m.jsx)("h2",{className:"text-warning text-center",children:"Login"}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Email"}),Object(m.jsx)(b.e,{type:"email",name:"email",id:"email",value:N.email,onChange:y}),t.email&&Object(m.jsx)("p",{className:"text-danger",children:t.email})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",name:"password",id:"password",value:N.password,onChange:y}),t.password&&Object(m.jsx)("p",{className:"text-danger",children:t.password})]}),Object(m.jsxs)("div",{className:"row justify-content-evenly",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(b.a,{children:"Login"})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("text",{className:"text-danger",children:"Create an account "}),Object(m.jsx)(b.a,{className:"ml-1",onClick:function(){n.push("/register")},children:"Register"})]}),u&&Object(m.jsx)("h3",{className:"text-white text-center",children:u})]})]})})})})};var x=function(){var e=Object(s.useState)({name:"",email:"",phone:"",address:"",password:"",password2:""}),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(""),j=Object(r.a)(n,2),O=j[0],x=j[1],g=Object(s.useState)(""),p=Object(r.a)(g,2),u=p[0],f=p[1],w=Object(s.useState)(!1),v=Object(r.a)(w,2),N=v[0],C=v[1],y=Object(i.f)(),k=function(e){var a=e.target,s=a.name,n=a.value;c(Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},s,n)))},S=function(){console.log("in"),d.a.post("".concat(h.config.SERVER_URI,"/api/register"),{name:t.name,email:t.email,phone:t.phone,address:t.address,password:t.password}).then((function(e){e||console.log("no error"),C(!0),y.push("/login")})).catch((function(e){console.log(e.response);var a=e.response.data.errors[0].msg;console.log(a),a?(console.log(a),f(a),c({name:"",email:"",phone:"",address:"",password:"",password2:""}),a=""):(f(""),y.push("/login"),C(!0))}))};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.b,{style:{height:"100vh",overflow:"auto"},className:"bg-dark",children:Object(m.jsx)("div",{className:"register-form",children:Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),x(function(e){var a={};return e.name.trim()||(a.name="Name required"),e.email.trim()?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(a.email="Email address is invalid"):a.email="Email required",e.phone.trim()||(a.phone="Phone required"),e.password?e.password.length<6&&(a.password="Password needs to be 6 characters or more."):a.password="Password is required",e.password2?e.password2!==e.password&&(a.password2="Passwords do not match"):a.password2="Password is required",a}(t)),O==={}&&console.log("no error"),S()},children:[N?Object(m.jsx)("span",{children:"Success! Thank you for registering."}):null,Object(m.jsx)("h2",{className:"text-warning text-center",children:"Register"}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Name-Surname"}),Object(m.jsx)(b.e,{type:"name",name:"name",id:"name",value:t.name,onChange:k}),O.name&&Object(m.jsx)("p",{className:"text-danger",children:O.name})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Email"}),Object(m.jsx)(b.e,{type:"email",name:"email",id:"email",value:t.email,onChange:k}),O.email&&Object(m.jsx)("p",{className:"text-danger",children:O.email})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Phone Number"}),Object(m.jsx)(b.e,{type:"phone",name:"phone",id:"phone",value:t.phone,onChange:k}),O.phone&&Object(m.jsx)("p",{className:"text-danger",children:O.phone})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Address"}),Object(m.jsx)(b.e,{type:"address",name:"address",id:"address",value:t.address,onChange:k})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",name:"password",id:"password",value:t.password,onChange:k}),O.password&&Object(m.jsx)("p",{className:"text-danger",children:O.password})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"text-white",children:"Password"}),Object(m.jsx)(b.e,{type:"password",id:"password2",name:"password2",value:t.password2,onChange:k}),O.password2&&Object(m.jsx)("p",{className:"text-danger",children:O.password2}),"\\"]}),Object(m.jsxs)("div",{className:"row justify-content-evenly",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(b.a,{children:"Register"})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("text",{className:"text-danger",children:"Already have an account?  "}),Object(m.jsx)(b.a,{className:"ml-1",onClick:function(){y.push("/login")},children:"Login"})]}),u&&Object(m.jsx)("h3",{className:"text-white text-center",children:u})]})]})})})})},g=t.p+"static/media/welcome_bg.2e5d8be7.jpg";var p=function(){return Object(m.jsx)("div",{class:"view p-3 mb-2",style:{backgroundImage:"url(".concat(g,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(m.jsx)("div",{class:"mask rgba-black-light align-items-center",children:Object(m.jsx)("div",{class:"container",children:Object(m.jsx)("div",{class:"row",children:Object(m.jsxs)("div",{class:"col-md-12 mb-4 white-text text-center",children:[Object(m.jsx)("h1",{class:"h1-reponsive text-warning white-text font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown","data-wow-delay":"0.3s",children:Object(m.jsx)("strong",{children:"PetLand"})}),Object(m.jsx)("h3",{class:"mb-4 white-text wow fadeInDown","data-wow-delay":"0.4s",children:"A web platform where animal lovers and pets meet!"}),Object(m.jsx)("a",{href:"/login",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"LOGIN"}),Object(m.jsx)("a",{href:"/register",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"REGISTER"})]})})})})})},u=t(48),f=t(49),w=t(51),v=t(50),N=[{title:"Home",url:"#",cName:"nav-links"},{title:"DM",url:"/dm",cName:"nav-links"},{title:"Profile",url:"/profile",cName:"nav-links"}],C=(t(82),s.Component,t(14)),y=t(10),k=t(19),S=function(e){var a,t=e.name,s=e.breed,c=e.age,n=e.location,l=e.extra_info;e.p_image;return Object(m.jsx)("div",{children:Object(m.jsxs)(k.a,(a={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(a,"style",{width:"30rem"}),Object(o.a)(a,"children",[Object(m.jsx)(k.a.Img,{variant:"top",src:""}),Object(m.jsxs)(k.a.Body,{children:[Object(m.jsx)(k.a.Title,{className:"makeCenter",style:{fontSize:28},children:"Meet with a friend"}),Object(m.jsx)("br",{}),Object(m.jsx)(k.a.Text,{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)(C.a,{children:[Object(m.jsx)(y.a,{children:Object(m.jsx)("label",{style:{fontWeight:"bold"},children:"Name:"})}),Object(m.jsx)(y.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"namee",children:t})})]}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(y.a,{children:Object(m.jsx)("label",{children:"Breed:"})}),Object(m.jsx)(y.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"breed",children:s})})]}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(y.a,{children:Object(m.jsx)("label",{children:"Age:"})}),Object(m.jsx)(y.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"age",children:c})})]}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(y.a,{children:Object(m.jsx)("label",{children:"Location:"})}),Object(m.jsx)(y.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"location",children:n})})]}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(y.a,{children:Object(m.jsx)("label",{children:"Extra Info:"})}),Object(m.jsx)(y.a,{className:"makeCenter",children:Object(m.jsx)("label",{id:"extra_info",children:l})})]})]})})]})]),a))})},_=t.p+"static/media/trees.0fa91f66.jpeg",P=function(){var e=Object(s.useState)({namee:{}}),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)([]),j=Object(r.a)(n,2),b=(j[0],j[1],Object(s.useState)("")),h=Object(r.a)(b,2),O=(h[0],h[1],Object(s.useState)("")),x=Object(r.a)(O,2),g=(x[0],x[1]),p=Object(s.useState)(!1),u=Object(r.a)(p,2),f=(u[0],u[1]),w=Object(i.f)(),v=function(){console.log("in"),d.a.post("http://localhost:8000/api/get-posts",{}).then((function(e){var a,s=e.data;console.log("The response is:"),console.log(e),console.log(s),console.log(e.data.posts),console.log("----"),a=e.data.posts,console.log("e is "+a),c(Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},"namee",a))),console.log("e is:"),console.log(a),t.namee=a,console.log("values.name"),console.log(t.namee),console.log("this is values"),console.log(t)})).catch((function(e){console.log("error in"),console.log(e.response);var a=e.response.data.errors[0].msg;console.log(a),a||(console.log("Yes error."),g(""),w.push("/feed"),f(!0))}))};return Object(s.useEffect)((function(){return v()}),[]),Object(m.jsx)("div",{style:{backgroundImage:"url(".concat(_,")"),padding:"10%"},className:"makeCenter",children:Object(m.jsx)(C.a,{children:t.namee.length>0&&t.namee.map((function(e,a){return Object(m.jsxs)(y.a,{xs:6,className:"makeCenter",children:[Object(m.jsx)(C.a,{children:Object(m.jsx)("label",{children:"The Image"})}),Object(m.jsx)(C.a,{children:Object(m.jsx)("img",{src:"data:image/png;base64,".concat(e.p_image)})}),Object(m.jsx)(C.a,{children:Object(m.jsx)(S,{name:e.name,breed:e.breed,age:e.age,location:e.location,extra_info:e.extra_info})})]})}))})})};var E=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"DM Page"})})};var R=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Profile Page "})})},I=t(25),L=t(33),T=(t.p,t.p,[{value:"cat",label:"Cat"},{value:"dog",label:"Dog"},{value:"bird",label:"Bird"}]),q=[{value:"true",label:"Vaccinated"},{value:"false",label:"Not Vaccinated"}];var D=function(){var e,a=Object(s.useState)({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:""}),t=Object(r.a)(a,2),c=t[0],n=t[1],j=Object(s.useState)(""),O=Object(r.a)(j,2),x=O[0],g=O[1],p=Object(s.useState)(""),u=Object(r.a)(p,2),f=(u[0],u[1]),w=Object(s.useState)(!1),v=Object(r.a)(w,2),N=(v[0],v[1]),S=Object(i.f)(),_=function(e){var a=e.target,t=a.name,s=a.value;console.log(t),console.log(s),n(Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},t,s)))},P=function(){console.log("in"),d.a.post("".concat(h.config.SERVER_URI,"/api/createPost"),{name:c.name,breed:c.breed,location:c.location,age:c.age,p_image:c.p_image,extra_info:c.extra_info,vaccinated:c.vaccinated,ts:(new Date).toLocaleString()+""}).then((function(e){e||console.log("no error"),N(!0),S.push("/feed")})).catch((function(e){console.log("error in"),console.log(e.response);var a=e.response.data.errors[0].msg;console.log(a),a?(console.log(a),f(a),n({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:""}),a=""):(f(""),S.push("/feed"),N(!0))}))};return Object(m.jsx)("div",{style:{backgroundImage:"url(https://st.depositphotos.com/2015673/4034/v/950/depositphotos_40343767-stock-illustration-forest-landscape.jpg)",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(m.jsx)(k.a,(e={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(e,"style",{width:"60rem"}),Object(o.a)(e,"children",Object(m.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),console.log("Breed: ",c.breed),console.log("Name: ",c.name),console.log("Age: ",c.age),console.log("Location: ",c.location),console.log("Vaccinated: ",c.vaccinated),console.log("Extra_info: ",c.extra_info),e.preventDefault(),g(function(e){var a={};return"Select"===!e.breed&&(a.name="Breed required"),""===e.name&&(a.email="Name required"),""===e.age&&(a.phone="Age required"),""===e.location&&(a.phone="Location required"),"Select"===e.vaccinated&&(a.phone="Vaccination Status required"),a}(c)),x==={}&&console.log("no error"),P()},children:[Object(m.jsx)(k.a.Img,{variant:"top",src:""}),Object(m.jsxs)(k.a.Body,{children:[Object(m.jsx)(k.a.Title,{className:"makeCenter",style:{fontSize:28},children:"Let's find a home for our pet friends !!"}),Object(m.jsx)("br",{}),Object(m.jsxs)(C.a,{children:[Object(m.jsxs)(y.a,{children:[Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Breed"}),Object(m.jsx)(L.a,{options:T,value:T[c.breed],onChange:function(e){var a=e.value;n(Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},"breed",a))),console.log(e),c.breed=e.value,console.log(c.breed)}})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Name"}),Object(m.jsx)(b.e,{type:"name",name:"name",id:"name",value:c.name,onChange:_})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Age"}),Object(m.jsx)(b.e,{type:"number",name:"age",id:"age",min:"0",max:"30",value:c.age,onChange:_})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Location"}),Object(m.jsx)(b.e,{type:"text",name:"location",id:"location",value:c.location,onChange:_})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Vaccination Status"}),Object(m.jsx)(L.a,{options:q,value:q[c.vaccinated],onChange:function(e){var a=e.value;n(Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},"vaccinated",a))),console.log(e),c.vaccinated=e.value,console.log(c.vaccinated)}})]}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Extra Info"}),Object(m.jsx)(b.e,{type:"text",name:"extra_info",id:"extra_info",value:c.extra_info,onChange:_})]})]}),Object(m.jsx)(y.a,{className:"makeCenter",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"file",onChange:function(e){var a=URL.createObjectURL(e.target.files[0]);n(Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},"p_image",a)))}}),Object(m.jsx)("img",{className:"photo",src:c.p_image})]})})]}),Object(m.jsx)(C.a,{children:Object(m.jsxs)(y.a,{md:{offset:8},children:[Object(m.jsx)(I.a,{className:"makeCenter",variant:"danger",size:"lg",onClick:function(){S.push("/feed")},style:{marginRight:10},children:"CANCEL"}),Object(m.jsx)(I.a,{className:"makeCenter",variant:"success",size:"lg",type:"submit",children:"POST"})]})}),Object(m.jsx)(k.a.Text,{})]})]})),e))})},A=t(23);var V=function(){return Object(m.jsx)(A.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/",exact:!0,component:p}),Object(m.jsx)(i.a,{path:"/login",component:O}),Object(m.jsx)(i.a,{path:"/register",component:x}),Object(m.jsx)(i.a,{path:"/feed",component:P}),Object(m.jsx)(i.a,{path:"/createPost",component:D}),Object(m.jsx)(i.a,{path:"/dm",component:E}),Object(m.jsx)(i.a,{path:"/profile",component:R})]})})};t(97);n.a.render(Object(m.jsx)(V,{}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.2132ec15.chunk.js.map