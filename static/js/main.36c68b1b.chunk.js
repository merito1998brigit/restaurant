(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),s=a.n(l),c=(a(100),a(101),a(102),a(103),a(17)),o=a(18),m=a(19),i=a(20),u=(a(104),a(6)),d=a(2),E=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading..."))},h="http://localhost:3001/",f=a(33);function p(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(E,null):n?r.a.createElement("h4",null,n):r.a.createElement(f.FadeTransform,{in:!0,transformprops:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.h,{src:h+t.image}),r.a.createElement(d.e,null,r.a.createElement(d.l,null,t.name),t.designation?r.a.createElement(d.j,null,t.designation):null,r.a.createElement(d.k,null,t.description))))}var g=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(p,{item:e.dishes,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(p,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(p,{item:e.leader}))))},b=a(16),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,ismodalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(b.a)(n)),n.toggleModal=n.toggleModal.bind(Object(b.a)(n)),n.handleLogin=n.handleLogin.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({ismodalOpen:!this.state.ismodalOpen})}},{key:"handleLogin",value:function(){this.toggleModal(),alert("username:"+this.username.value+"password:"+this.password.value+"Remember:"+this.remember.checked)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.z,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(d.B,{onClick:this.toggleNav}),r.a.createElement(d.A,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41"})),r.a.createElement(d.n,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(d.x,{navbar:!0},r.a.createElement(d.y,null,r.a.createElement(u.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(d.y,null,r.a.createElement(u.c,{className:"nav-link",to:"/Aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About us")),r.a.createElement(d.y,null,r.a.createElement(u.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(d.y,null,r.a.createElement(u.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(d.x,{className:"ml-auto",navbar:!0},r.a.createElement(d.y,null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"},"Login"))))))),r.a.createElement(d.r,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorant con fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!")),r.a.createElement("div",{className:"col-12 col-sm-6 align-self-center"},r.a.createElement(d.c,{className:"btn btn-warning ml-5 btn-md"},"Reserve Table"))))),r.a.createElement(d.u,{isOpen:this.state.ismodalOpen,toggle:this.toggleModal},r.a.createElement(d.w,{toggle:this.toggleModal},"Login"),r.a.createElement(d.v,null,r.a.createElement(d.o,{onSubmit:this.handleLogin},r.a.createElement(d.p,null,r.a.createElement(d.s,{htmlFor:"username"},"Username"),r.a.createElement(d.q,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(d.p,null,r.a.createElement(d.s,{htmlFor:"password"},"Password"),r.a.createElement(d.q,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(d.p,{check:!0},r.a.createElement(d.s,{check:!0},r.a.createElement(d.q,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"remember me")),r.a.createElement(d.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var N=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))};function y(e){var t=e.dish;return r.a.createElement(d.d,null,r.a.createElement(u.b,{to:"/menu/".concat(t.id)},r.a.createElement(d.h,{width:"100%",src:h+t.image,alt:t.name}),r.a.createElement(d.i,null,r.a.createElement(d.l,null,t.name)),r.a.createElement(d.f,null,r.a.createElement(d.k,null,"price:$",t.price))))}var w=function(e){var t=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-2"},r.a.createElement(y,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Home")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu ",r.a.createElement("span",null," ",r.a.createElement(d.c,null,"Add Dish")," ")),r.a.createElement("hr",null)),r.a.createElement(d.u,null,r.a.createElement(d.w,null,"Add your own dish by filling details"),r.a.createElement(d.v,null))),r.a.createElement("div",{className:"row d-flex justify-content-center "},t))},O=a(8),k=function(e){return e&&e.length},M=function(e){return function(t){return!t||t.length<=e}},C=function(e){return function(t){return t&&t.length>=e}},L=function(e){return!isNaN(Number(e))},S=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){console.log("current state is:"+JSON.stringify(e)),alert("current state is:"+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your feedback"),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(O.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.s,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(d.m,{md:10},r.a.createElement(O.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"Fist Name",className:"form-control",validators:{required:k,minLength:C(3),maxLength:M(15)}}),r.a.createElement(O.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{minLength:"must be atleast more than 3 characters",maxLength:"must be less than 15 characters"}}))),r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.s,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(d.m,{md:10},r.a.createElement(O.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:k,minLength:C(3),maxLength:M(15)}}),r.a.createElement(O.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{minLength:"must be atleast more than 3 characters",maxLength:"must be less than 15 characters"}}))),r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.s,{htmlFor:"Telnumb",md:2},"Contact Tel."),r.a.createElement(d.m,{md:10},r.a.createElement(O.Control.text,{model:".telnumb",id:"telnumb",name:"telnumb",placeholder:"Tel. Number",className:"form-control",validators:{required:k,isNumber:L,minLength:C(10)}}),r.a.createElement(O.Errors,{className:"text-danger",model:".telnumb",show:"touched",messages:{minLength:"enter a valid number of 10 digit ",isNumber:"must be a number"}}))),r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.s,{htmlFor:"email",md:2},"Email"),r.a.createElement(d.m,{md:10},r.a.createElement(O.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email-Id",className:"form-control",validators:{required:k,validEmail:S}}),r.a.createElement(O.Errors,{className:"text-danger",model:".email",show:"touched",messages:{validEmail:"enter a valid email address"}}))),r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.m,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(d.s,{check:!0},r.a.createElement(O.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"}),"",r.a.createElement("strong",null,"May we contact you")))),r.a.createElement(d.m,{md:{size:3,offset:1}},r.a.createElement(O.Control.select,{model:".contacttype",name:"contacttype",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"email")))),r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.s,{htmlFor:"feedback",md:2},"Your feedback"),r.a.createElement(d.m,{md:10},r.a.createElement(O.Control.textarea,{model:".message",id:"message",name:"message",placeholder:"type your message here",rows:"10",className:"form-control"}))),r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.m,{md:{size:10,offset:2}},r.a.createElement(d.c,{type:"submit",color:"primary"},"Send feedback"))))))))}}]),a}(n.Component),x=a(22);function F(e){var t=e.dish;return r.a.createElement(f.FadeTransform,{in:!0,transformprops:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.h,{top:!0,src:h+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.l,null,t.name),r.a.createElement(d.k,null,t.description))))}function D(e){var t=e.comments;if(null!=t)return r.a.createElement("div",null,r.a.createElement("h4",null,"comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(f.Stagger,{in:!0},t.map((function(e){return r.a.createElement(f.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"--",e.author," ",r.a.createElement("span",null,(t=e.date,new Date(Date.parse(t)).toDateString().slice(4))))));var t})))))}var A=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null==e.dish?r.a.createElement("div",null):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(u.b,{to:"/menu"},"Menu")),r.a.createElement(d.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(F,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(D,{comments:e.comments}),r.a.createElement(T,{postComment:e.postComment,dishId:e.dish.id}))))},I=function(e){return function(t){return!t||t.length<=e}},T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"toggleModal",value:function(){this.setState({ModalOpen:!this.state.ModalOpen})}},{key:"handleSubmit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.name,e.comment),this.toggleModal()}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"}," Submit Comment"))),r.a.createElement(d.u,{isOpen:this.state.ModalOpen,toggle:this.toggleModal},r.a.createElement(d.w,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(d.v,null,r.a.createElement(O.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.s,{htmlFor:"rating",md:12},r.a.createElement("strong",null,"Rating")),r.a.createElement(d.m,{md:12},r.a.createElement(O.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.s,{htmlFor:"name",md:12},r.a.createElement("strong",null,"Name")),r.a.createElement(d.m,{md:12},r.a.createElement(O.Control.text,{model:".name",name:"name",id:"name",className:"form-control",validators:{minLength:(e=2,function(t){return t&&t.length>=e}),maxLength:I(15)}}),r.a.createElement(O.Errors,{className:"text-danger",model:".name",show:"touched",messages:{minLength:"must be  more than 2 characters",maxLength:"must be less than 15 characters"}}))),r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.s,{htmlFor:"comment",md:12},r.a.createElement("strong",null,"Comments")),r.a.createElement(d.m,{md:12},r.a.createElement(O.Control.textarea,{model:".comment",name:"comment",id:"comment",rows:"6",className:"form-control"}))),r.a.createElement(d.C,{className:"form-group"},r.a.createElement(d.m,{md:12},r.a.createElement(d.c,{type:"submit",color:"primary"},"Submit")))))))}}]),a}(n.Component),H=function(e){var t=e.leader;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(d.t,null,r.a.createElement(d.t,{left:!0,middle:!0},r.a.createElement(d.t,{object:!0,src:e.image,alt:e.name})),r.a.createElement(d.t,{body:!0,className:"ml-5"},r.a.createElement(d.t,{heading:!0},e.name),r.a.createElement(d.t,{title:!0,className:"mt-3 mb-3"},e.designation),r.a.createElement("p",null,e.description))))})))};var P=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.d,null,r.a.createElement(d.g,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(d.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.d,null,r.a.createElement(d.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.t,{list:!0},r.a.createElement(H,{leader:e.leaders})))))},R=function(){return{type:"DISHES_LOADING"}},_=function(e){return{type:"DISHES_FAILED",payload:e}},q=function(e){return{type:"ADD_DISHES",payload:e}},W=function(e){return{type:"COMMENTS_FAILED",payload:e}},B=function(e){return{type:"ADD_COMMENTS",payload:e}},z=function(){return{type:"PROMOS_LOADING"}},G=function(e){return{type:"PROMOS_FAILED",payload:e}},Y=function(e){return{type:"ADD-PROMOS",payload:e}},K=a(53),U=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(K.TransitionGroup,null,r.a.createElement(K.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(u.f,null,r.a.createElement(u.e,{path:"/home",component:function(){return r.a.createElement(g,{dishes:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),r.a.createElement(u.e,{path:"/contactus",component:function(){return r.a.createElement(j,{resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(u.e,{path:"/aboutus",component:function(){return r.a.createElement(P,{leaders:e.props.leaders})}}),r.a.createElement(u.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(w,{dishes:e.props.dishes})}}),r.a.createElement(u.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(A,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,ErrMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(u.d,{to:"/home"})))),r.a.createElement(N,null))}}]),a}(n.Component),J=Object(u.g)(Object(x.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(h+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError:"+e.message)}))}}(t,a,n,r))},fetchDishes:function(){e((function(e){return e(R(!0)),fetch(h+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(q(t))})).catch((function(t){return e(_(t.message))}))}))},resetFeedbackForm:function(){e(O.actions.reset("feedback"))},fetchComments:function(){e((function(e){return e(R(!0)),fetch(h+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(B(t))})).catch((function(t){return e(W(t.message))}))}))},fetchPromos:function(){e((function(e){return e(z(!0)),fetch(h+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Y(t))})).catch((function(t){return e(G(t.message))}))}))}}}))(U)),$=a(12),Z=a(23),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object($.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object($.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object($.a)({},e,{isLoading:!1,errMess:t.payload,dishes:[]});default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object($.a)({},e,{isLoading:!1,errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object($.a)({},e,{isLoading:!1,errMess:t.payload,comments:[]});case"ADD_COMMENT":var a=t.payload;return Object($.a)({},e,{comments:e.comments.concat(a)});default:return e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-PROMOS":return Object($.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object($.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object($.a)({},e,{isLoading:!1,errMess:t.payload,promotions:[]});default:return e}},ee=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ae=a(93),ne=a.n(ae),re=a(94),le=a.n(re),se={firstname:"",lastname:"",telnumb:"",email:"",agree:!1,contactType:"Tel.",message:""},ce=Object(Z.createStore)(Object(Z.combineReducers)(Object($.a)({dishes:Q,comments:V,promotions:X,leaders:te},Object(O.createForms)({feedback:se}))),Object(Z.applyMiddleware)(ne.a,le.a)),oe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(x.Provider,{store:ce},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(J,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(172)}},[[95,1,2]]]);
//# sourceMappingURL=main.36c68b1b.chunk.js.map