(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(17),n=t.n(c),o=(t(26),t(9)),r=t(6),l=t(7),i=t(8),j=t(21),d=t.n(j),b=t(5),m=t(22),h=t(2);var O=function(){var e=Object(s.useState)(""),a=Object(l.a)(e,2),t=a[0],c=a[1],n=Object(i.f)(),j=Object(s.useState)(!1),O=Object(l.a)(j,2),x=(O[0],O[1]),g=Object(s.useState)(""),p=Object(l.a)(g,2),u=p[0],f=p[1],w=Object(s.useState)({email:"",password:""}),v=Object(l.a)(w,2),N=v[0],C=v[1],y=function(e){var a=e.target,t=a.name,s=a.value;C(Object(r.a)(Object(r.a)({},N),{},Object(o.a)({},t,s)))},k=function(){console.log("in"),d.a.post("".concat(m.config.SERVER_URI,"/api/login"),{email:N.email,password:N.password}).then((function(e){e?console.log(e):console.log("no error"),n.push("/feed"),x(!0)})).catch((function(e){console.log(e.response);var a=e.response.data.errors[0].msg;console.log(a),a?(console.log(a),f(a),C({email:"",password:""}),a=""):(f(""),n.push("/feed"),x(!0))}))};return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(b.b,{style:{height:"100vh"},className:"bg-dark",children:Object(h.jsx)("div",{className:"register-form",children:Object(h.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),c(function(e){var a={};return e.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(a.email="Email address is invalid"):a.email="Email required",e.password||(a.password="Password is required"),a}(N)),t==={}&&console.log("no error"),k()},children:[Object(h.jsx)("h2",{className:"text-warning text-center",children:"Login"}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Email"}),Object(h.jsx)(b.e,{type:"email",name:"email",id:"email",value:N.email,onChange:y}),t.email&&Object(h.jsx)("p",{className:"text-danger",children:t.email})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Password"}),Object(h.jsx)(b.e,{type:"password",name:"password",id:"password",value:N.password,onChange:y}),t.password&&Object(h.jsx)("p",{className:"text-danger",children:t.password})]}),Object(h.jsxs)("div",{className:"row justify-content-evenly",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(b.a,{children:"Login"})}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("text",{className:"text-danger",children:"Create an account "}),Object(h.jsx)(b.a,{className:"ml-1",onClick:function(){n.push("/register")},children:"Register"})]}),u&&Object(h.jsx)("h3",{className:"text-white text-center",children:u})]})]})})})})};var x=function(){var e=Object(s.useState)({name:"",email:"",phone:"",address:"",password:"",password2:""}),a=Object(l.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(""),j=Object(l.a)(n,2),O=j[0],x=j[1],g=Object(s.useState)(""),p=Object(l.a)(g,2),u=p[0],f=p[1],w=Object(s.useState)(!1),v=Object(l.a)(w,2),N=v[0],C=v[1],y=Object(i.f)(),k=function(e){var a=e.target,s=a.name,n=a.value;c(Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},s,n)))},S=function(){console.log("in"),d.a.post("".concat(m.config.SERVER_URI,"/api/register"),{name:t.name,email:t.email,phone:t.phone,address:t.address,password:t.password}).then((function(e){e||console.log("no error"),C(!0),y.push("/login")})).catch((function(e){console.log(e.response);var a=e.response.data.errors[0].msg;console.log(a),a?(console.log(a),f(a),c({name:"",email:"",phone:"",address:"",password:"",password2:""}),a=""):(f(""),y.push("/login"),C(!0))}))};return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(b.b,{style:{height:"100vh",overflow:"auto"},className:"bg-dark",children:Object(h.jsx)("div",{className:"register-form",children:Object(h.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),e.preventDefault(),x(function(e){var a={};return e.name.trim()||(a.name="Name required"),e.email.trim()?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(a.email="Email address is invalid"):a.email="Email required",e.phone.trim()||(a.phone="Phone required"),e.password?e.password.length<6&&(a.password="Password needs to be 6 characters or more."):a.password="Password is required",e.password2?e.password2!==e.password&&(a.password2="Passwords do not match"):a.password2="Password is required",a}(t)),O==={}&&console.log("no error"),S()},children:[N?Object(h.jsx)("span",{children:"Success! Thank you for registering."}):null,Object(h.jsx)("h2",{className:"text-warning text-center",children:"Register"}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Name-Surname"}),Object(h.jsx)(b.e,{type:"name",name:"name",id:"name",value:t.name,onChange:k}),O.name&&Object(h.jsx)("p",{className:"text-danger",children:O.name})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Email"}),Object(h.jsx)(b.e,{type:"email",name:"email",id:"email",value:t.email,onChange:k}),O.email&&Object(h.jsx)("p",{className:"text-danger",children:O.email})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Phone Number"}),Object(h.jsx)(b.e,{type:"phone",name:"phone",id:"phone",value:t.phone,onChange:k}),O.phone&&Object(h.jsx)("p",{className:"text-danger",children:O.phone})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Address"}),Object(h.jsx)(b.e,{type:"address",name:"address",id:"address",value:t.address,onChange:k})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Password"}),Object(h.jsx)(b.e,{type:"password",name:"password",id:"password",value:t.password,onChange:k}),O.password&&Object(h.jsx)("p",{className:"text-danger",children:O.password})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"text-white",children:"Password"}),Object(h.jsx)(b.e,{type:"password",id:"password2",name:"password2",value:t.password2,onChange:k}),O.password2&&Object(h.jsx)("p",{className:"text-danger",children:O.password2}),"\\"]}),Object(h.jsxs)("div",{className:"row justify-content-evenly",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(b.a,{children:"Register"})}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("text",{className:"text-danger",children:"Already have an account?  "}),Object(h.jsx)(b.a,{className:"ml-1",onClick:function(){y.push("/login")},children:"Login"})]}),u&&Object(h.jsx)("h3",{className:"text-white text-center",children:u})]})]})})})})},g=t.p+"static/media/welcome_bg.2e5d8be7.jpg";var p=function(){return Object(h.jsx)("div",{class:"view p-3 mb-2",style:{backgroundImage:"url(".concat(g,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(h.jsx)("div",{class:"mask rgba-black-light align-items-center",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsx)("div",{class:"row",children:Object(h.jsxs)("div",{class:"col-md-12 mb-4 white-text text-center",children:[Object(h.jsx)("h1",{class:"h1-reponsive text-warning white-text font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown","data-wow-delay":"0.3s",children:Object(h.jsx)("strong",{children:"PetLand"})}),Object(h.jsx)("h3",{class:"mb-4 white-text wow fadeInDown","data-wow-delay":"0.4s",children:"A web platform where animal lovers and pets meet!"}),Object(h.jsx)("a",{href:"/login",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"LOGIN"}),Object(h.jsx)("a",{href:"/register",class:"btn btn-outline-white wow fadeInDown","data-wow-delay":"0.4s",children:"REGISTER"})]})})})})})},u=t(51),f=t(52),w=t(55),v=t(54),N=[{title:"Home",url:"#",cName:"nav-links"},{title:"DM",url:"/dm",cName:"nav-links"},{title:"Profile",url:"/profile",cName:"nav-links"}],C=(t(85),s.Component,t(14)),y=t(10),k=t(19),S=function(e){var a,t=e.name,s=e.breed,c=e.age,n=e.location,r=e.extra_info,l=e.p_image;return Object(h.jsx)("div",{children:Object(h.jsxs)(k.a,(a={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(a,"style",{width:"30rem"}),Object(o.a)(a,"children",[Object(h.jsx)(k.a.Img,{variant:"top",src:""}),Object(h.jsxs)(k.a.Body,{children:[Object(h.jsx)(k.a.Title,{className:"makeCenter",style:{fontSize:28},children:"Meet with a friend"}),Object(h.jsx)("br",{}),Object(h.jsx)(k.a.Text,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)(C.a,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("label",{style:{fontWeight:"bold"},children:"Name:"})}),Object(h.jsx)(y.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"namee",children:t})})]}),Object(h.jsxs)(C.a,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("label",{children:"Breed:"})}),Object(h.jsx)(y.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"breed",children:s})})]}),Object(h.jsxs)(C.a,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("label",{children:"Age:"})}),Object(h.jsx)(y.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"age",children:c})})]}),Object(h.jsxs)(C.a,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("label",{children:"Location:"})}),Object(h.jsx)(y.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"location",children:n})})]}),Object(h.jsxs)(C.a,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("label",{children:"Extra Info:"})}),Object(h.jsx)(y.a,{className:"makeCenter",children:Object(h.jsx)("label",{id:"extra_info",children:r})})]}),Object(h.jsx)(C.a,{children:Object(h.jsx)("img",{src:l})})]})})]})]),a))})},_=t.p+"static/media/trees.0fa91f66.jpeg",P=(t(45),function(){var e=Object(s.useState)({namee:{},img:""}),a=Object(l.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)([]),j=Object(l.a)(n,2),b=(j[0],j[1],Object(s.useState)("")),m=Object(l.a)(b,2),O=(m[0],m[1],Object(s.useState)("")),x=Object(l.a)(O,2),g=(x[0],x[1]),p=Object(s.useState)(!1),u=Object(l.a)(p,2),f=(u[0],u[1]),w=Object(i.f)(),v=function(){console.log("in"),d.a.post("http://localhost:8000/api/get-posts",{}).then((function(e){var a=e.data;console.log("The response is:"),console.log(e),console.log(a),console.log(e.data.posts),console.log("----"),function(e){var a;console.log("e is "+e),c(Object(r.a)(Object(r.a)({},t),{},(a={},Object(o.a)(a,"namee",e),Object(o.a)(a,"img",e[12].p_image),a))),console.log("e is:"),console.log(e),t.namee=e,t.img=e[12].p_image,console.log("values.name"),console.log(t.namee),console.log(t.img)}(e.data.posts),console.log("this is values"),console.log(t)})).catch((function(e){console.log("error in"),console.log(e.response);var a=e.response.data.errors[0].msg;console.log(a),a||(console.log("Yes error."),g(""),w.push("/feed"),f(!0))}))};return Object(s.useEffect)((function(){return v()}),[]),Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(_,")"),padding:"10%"},className:"makeCenter",children:Object(h.jsx)(C.a,{children:t.namee.length>0&&t.namee.map((function(e,a){return Object(h.jsxs)(y.a,{xs:6,className:"makeCenter",children:[Object(h.jsx)(C.a,{children:Object(h.jsx)("label",{children:"The Image"})}),Object(h.jsx)(C.a,{children:Object(h.jsx)(S,{name:e.name,breed:e.breed,age:e.age,location:e.location,extra_info:e.extra_info,p_image:e.p_image})})]})}))})})});var E=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"DM Page"})})};var I=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Profile Page "})})},R=t(33),L=t.n(R),T=t(53),q=t(25),D=t(34),A=(t.p,t.p,[{value:"cat",label:"Cat"},{value:"dog",label:"Dog"},{value:"bird",label:"Bird"}]),V=[{value:"true",label:"Vaccinated"},{value:"false",label:"Not Vaccinated"}];var B=function(){var e,a=Object(s.useState)(""),t=Object(l.a)(a,2),c=t[0],n=t[1],j=Object(s.useState)({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:""}),O=Object(l.a)(j,2),x=O[0],g=O[1],p=Object(s.useState)(""),u=Object(l.a)(p,2),f=u[0],w=u[1],v=Object(s.useState)(""),N=Object(l.a)(v,2),S=(N[0],N[1]),_=Object(s.useState)(!1),P=Object(l.a)(_,2),E=(P[0],P[1]),I=Object(i.f)(),R=function(e){var a=e.target,t=a.name,s=a.value;console.log(t),console.log(s),g(Object(r.a)(Object(r.a)({},x),{},Object(o.a)({},t,s)))},B=function(){var e=Object(T.a)(L.a.mark((function e(a){var t,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.target.files[0],e.next=3,z(t);case 3:s=e.sent,console.log("base image is"),console.log(s),n(s);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),z=function(e){return new Promise((function(a,t){var s=new FileReader;s.readAsDataURL(e),s.onload=function(){a(s.result)},s.onerror=function(e){t(e)}}))},U=function(){console.log("in"),d.a.post("".concat(m.config.SERVER_URI,"/api/createPost"),{name:x.name,breed:x.breed,location:x.location,age:x.age,p_image:c,extra_info:x.extra_info,vaccinated:x.vaccinated,ts:(new Date).toLocaleString()+""}).then((function(e){e||console.log("no error"),E(!0),I.push("/feed")})).catch((function(e){console.log("error in"),console.log(e.response);var a=e.response.data.errors[0].msg;console.log(a),a?(console.log(a),S(a),g({name:"",breed:"",location:"",age:0,p_image:"",extra_info:"",vaccinated:"",ts:"",baseImage:""}),a=""):(S(""),I.push("/feed"),E(!0))}))};return Object(h.jsx)("div",{style:{backgroundImage:"url(https://st.depositphotos.com/2015673/4034/v/950/depositphotos_40343767-stock-illustration-forest-landscape.jpg)",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(h.jsx)(k.a,(e={border:"danger",bg:"light".toLowerCase(),text:"dark",style:{width:"18rem"},className:"mb-2"},Object(o.a)(e,"style",{width:"60rem"}),Object(o.a)(e,"children",Object(h.jsxs)(b.c,{className:"form",onSubmit:function(e){console.log("handleSubmit"),console.log("Breed: ",x.breed),console.log("Name: ",x.name),console.log("Age: ",x.age),console.log("Location: ",x.location),console.log("Vaccinated: ",x.vaccinated),console.log("Extra_info: ",x.extra_info),e.preventDefault(),w(function(e){var a={};return"Select"===!e.breed&&(a.name="Breed required"),""===e.name&&(a.email="Name required"),""===e.age&&(a.phone="Age required"),""===e.location&&(a.phone="Location required"),"Select"===e.vaccinated&&(a.phone="Vaccination Status required"),a}(x)),f==={}&&console.log("no error"),U()},children:[Object(h.jsx)(k.a.Img,{variant:"top",src:""}),Object(h.jsxs)(k.a.Body,{children:[Object(h.jsx)(k.a.Title,{className:"makeCenter",style:{fontSize:28},children:"Let's find a home for our pet friends !!"}),Object(h.jsx)("br",{}),Object(h.jsxs)(C.a,{children:[Object(h.jsxs)(y.a,{children:[Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Breed"}),Object(h.jsx)(D.a,{options:A,value:A[x.breed],onChange:function(e){var a=e.value;g(Object(r.a)(Object(r.a)({},x),{},Object(o.a)({},"breed",a))),console.log(e),x.breed=e.value,console.log(x.breed)}})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Name"}),Object(h.jsx)(b.e,{type:"name",name:"name",id:"name",value:x.name,onChange:R})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Age"}),Object(h.jsx)(b.e,{type:"number",name:"age",id:"age",min:"0",max:"30",value:x.age,onChange:R})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Location"}),Object(h.jsx)(b.e,{type:"text",name:"location",id:"location",value:x.location,onChange:R})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Vaccination Status"}),Object(h.jsx)(D.a,{options:V,value:V[x.vaccinated],onChange:function(e){var a=e.value;g(Object(r.a)(Object(r.a)({},x),{},Object(o.a)({},"vaccinated",a))),console.log(e),x.vaccinated=e.value,console.log(x.vaccinated)}})]}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.f,{className:"createPostTitle makeCenter",children:"Extra Info"}),Object(h.jsx)(b.e,{type:"text",name:"extra_info",id:"extra_info",value:x.extra_info,onChange:R})]})]}),Object(h.jsx)(y.a,{className:"makeCenter",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"file",onChange:function(e){B(e)}}),Object(h.jsx)("img",{className:"photo",src:x.p_image}),Object(h.jsx)("img",{className:"photo",src:c})]})})]}),Object(h.jsx)(C.a,{children:Object(h.jsxs)(y.a,{md:{offset:8},children:[Object(h.jsx)(q.a,{className:"makeCenter",variant:"danger",size:"lg",onClick:function(){I.push("/feed")},style:{marginRight:10},children:"CANCEL"}),Object(h.jsx)(q.a,{className:"makeCenter",variant:"success",size:"lg",type:"submit",children:"POST"})]})}),Object(h.jsx)(k.a.Text,{})]})]})),e))})},z=t(23);var U=function(){return Object(h.jsx)(z.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/",exact:!0,component:p}),Object(h.jsx)(i.a,{path:"/login",component:O}),Object(h.jsx)(i.a,{path:"/register",component:x}),Object(h.jsx)(i.a,{path:"/feed",component:P}),Object(h.jsx)(i.a,{path:"/createPost",component:B}),Object(h.jsx)(i.a,{path:"/dm",component:E}),Object(h.jsx)(i.a,{path:"/profile",component:I})]})})};t(102);n.a.render(Object(h.jsx)(U,{}),document.getElementById("root"))},22:function(e,a){e.exports.config={SERVER_URI:"https://petland-app.herokuapp.com"}},26:function(e,a,t){},85:function(e,a,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.85a46f25.chunk.js.map