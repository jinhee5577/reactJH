(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{126:function(e,t,c){"use strict";c.r(t);var n=c(13),s=c(1),a=c.n(s),i=c(21),r=c.n(i),j=(c(77),c(2)),l=c(39),o=c.n(l),d=c(51),b=c(6),h=c(135),u=c(132),O=c(136),m=c(134),x=c(133),p=(c.p,c.p,c(25),c(10)),v=c(137),f=c(17),g=c(0);function N(e){return Object(s.useEffect)((function(){e.csstrnchan(!0)})),0===e.tabnum?Object(g.jsxs)("div",{className:"tab_con",children:[Object(g.jsx)("h4",{children:e.find.title}),Object(g.jsx)("img",{src:e.find.img,width:"80%"})]}):1===e.tabnum?Object(g.jsx)("div",{className:"tab_con",children:"\uc0ac\uc774\uc988 \ub294 \uac01\uc790 \ubc1c\uc0ac\uc774\uc988 \ub9de\ub294\uac70 \uace0\ub974\uc790."}):2===e.tabnum?Object(g.jsx)("div",{className:"tab_con",children:"\uc545\ud50c \uc0ac\uc808. (\uc900\ube44\uc911 \uc785\ub2c8\ub2e4.)"}):3===e.tabnum?Object(g.jsx)("div",{className:"tab_con",children:"\uad50\ud658/\ubc18\ud488 \uc900\ube44\uc911 \uc785\ub2c8\ub2e4. from JHshop"}):void 0}var w=Object(f.b)((function(e){return{state:e}}))((function(e){var t=Object(p.f)(),c=Object(p.g)().id,a=Object(s.useState)(!1),i=Object(b.a)(a,2),r=i[0],j=i[1],l=Object(s.useState)(0),o=Object(b.a)(l,2),d=o[0],h=o[1],u=Object(s.useState)(0),m=Object(b.a)(u,2),x=m[0],f=m[1],w=Object(s.useState)(!1),y=Object(b.a)(w,2),k=y[0],S=y[1],_=Object(s.useState)(""),C=Object(b.a)(_,2),E=C[0],L=C[1],I=Object(s.useState)(0),M=Object(b.a)(I,2),T=M[0],q=M[1],A=e.products_mlb.find((function(e){return e.id==c}));A.qunn=1,A.select=[E,T];var F=Object(s.useState)(!0),D=Object(b.a)(F,2),P=D[0],H=D[1];return Object(s.useEffect)((function(){var e=setTimeout((function(){H(!1)}),2e3);return function(){clearTimeout(e)}}),[]),Object(s.useEffect)((function(){var t=localStorage.getItem("resent");(t=null==t?[]:JSON.parse(t)).length<3&&t.push(A.img),t=new Set(t),t=Object(n.a)(t),e.dispatch({type:"resent",payload:t}),localStorage.setItem("resent",JSON.stringify(t))}),[]),Object(g.jsxs)("div",{className:"container nct_j",children:[Object(g.jsxs)("div",{className:"row",children:[!0===P?Object(g.jsx)("h3",{className:"aleat_t",children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."}):null,Object(g.jsx)("div",{className:"col-md-6 prod",children:Object(g.jsx)("img",{src:A.img,width:"90%"})}),Object(g.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(g.jsxs)("h4",{className:"pt-5",children:[A.title," "]}),Object(g.jsxs)("div",{className:"hart",onClick:function(){h(d+1)},children:["\ud83d\udc95",d]}),Object(g.jsxs)("p",{className:"ppo",children:[A.price,"\uc6d0"]}),Object(g.jsx)("p",{className:"drb",children:"\ubc30\uc1a1\ube44 :  \uc804\uc0c1\ud488 \ubb34\ub8cc\ubc30\uc1a1"})]})]}),Object(g.jsxs)("div",{className:"buybox",children:[Object(g.jsx)("button",{className:"btn btn-danger btnjin",onClick:function(){j(!r)},children:r?"\ub2eb\uae30":"\uad6c\ub9e4\ud558\uae30"}),Object(g.jsx)("button",{className:"btn btn-danger btnjin",onClick:function(){t.push("/cart"),e.dispatch({type:"addcart",payload:A,payload2:e.noticechan})},children:"\uc7a5\ubc14\uad6c\ub2c8"})]}),!0===r?Object(g.jsxs)("div",{className:"popup",children:[Object(g.jsx)("select",{name:"color",onChange:function(e){L(e.target.value)},children:A.option.color.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))}),Object(g.jsx)("select",{name:"size",onChange:function(e){q(e.target.value)},children:A.option.size.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))}),Object(g.jsxs)("div",{className:"total",children:[Object(g.jsx)("h3",{}),Object(g.jsxs)("h3",{children:[Object(g.jsx)("span",{className:"s1",children:"\ud569\uacc4 :"}),Object(g.jsxs)("span",{className:"s2",children:[A.price,"\uc6d0"]})]})]})]}):null,Object(g.jsxs)(O.a,{variant:"pills",defaultActiveKey:"link-0",children:[Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(O.a.Link,{eventKey:"link-0",onClick:function(){S(!1),f(0)},children:"\uc0c1\ud488\uc815\ubcf4"})}),Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(O.a.Link,{eventKey:"link-1",onClick:function(){S(!1),f(1)},children:"\uc0ac\uc774\uc988"})}),Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(O.a.Link,{eventKey:"link-2",onClick:function(){S(!1),f(2)},children:"\ub9ac \ubdf0"})}),Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(O.a.Link,{eventKey:"link-3",onClick:function(){S(!1),f(3)},children:"\uad50\ud658/\ubc18\ud488"})})]}),Object(g.jsx)(v.a,{in:k,classNames:"wow",timeout:400,children:Object(g.jsx)(N,{tabnum:x,csstrnchan:S,find:A})})]})})),y=c(131);var k=Object(f.b)((function(e){return{state:e.reducer}}))((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{children:Object(g.jsx)("th",{children:"\uc7a5\ubc14\uad6c\ub2c8"})})}),Object(g.jsx)("tbody",{children:e.state.map((function(t,c){return t.total=t.price*t.qunn,Object(g.jsx)("tr",{children:Object(g.jsxs)("td",{children:[Object(g.jsx)("img",{src:t.img,width:"32%"}),Object(g.jsxs)("div",{className:"carbox",children:[Object(g.jsx)("h3",{className:"cart_t",children:t.title}),Object(g.jsxs)("h3",{className:"cart_p",children:[t.price*t.qunn,"\uc6d0"]}),Object(g.jsxs)("div",{className:"qunnti",children:[Object(g.jsx)("span",{onClick:function(){e.dispatch({type:"minus",index:c})},children:"-"})," ",Object(g.jsx)("h5",{children:t.qunn}),Object(g.jsx)("span",{onClick:function(){e.dispatch({type:"plus",index:c})},children:"+"})]}),Object(g.jsx)("button",{className:"delete_h",onClick:function(){e.dispatch({type:"delete",payload:t.id})},children:"\uc0ad\uc81c"}),Object(g.jsx)("article",{children:Object(g.jsxs)("h5",{children:["\uc635\uc158 : ",t.select[0]," / ",t.select[1]," "]})})]})]})},c)}))})]}),Object(g.jsxs)("div",{className:"total_cart",children:[Object(g.jsxs)("h2",{children:["\uc7a5\ubc14\uad6c\ub2c8 \uc218\ub7c9 : ",Object(g.jsx)("span",{children:e.state.length})," "]}),Object(g.jsxs)("h2",{children:["\ucd1d \uc0c1\ud488\uae08\uc561 : ",Object(g.jsxs)("span",{children:[e.state.reduce((function(e,t){return e+t.total}),0)," \uc6d0"]})," "]})]})]})})),S=c(30),_=c.n(S);var C=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(b.a)(a,2),r=i[0],j=i[1],l=Object(s.useState)(""),o=Object(b.a)(l,2),d=o[0],h=o[1],u=Object(s.useState)(""),O=Object(b.a)(u,2),m=O[0],x=O[1],p=r,v=d;return Object(s.useEffect)((function(){}),[]),Object(g.jsxs)("div",{className:"joinwrap",children:[Object(g.jsxs)("div",{className:"joinbox",children:[Object(g.jsx)("h3",{className:"log_jh",children:"Login JH"}),Object(g.jsx)("input",{className:"info",type:"text",name:"id",placeholder:"id",onChange:function(e){j(e.target.value)}}),Object(g.jsx)("input",{className:"info",type:"password",name:"password",placeholder:"password",onChange:function(e){h(e.target.value)}}),Object(g.jsxs)("div",{className:"sendbox",children:[Object(g.jsxs)("div",{className:"check",children:[Object(g.jsx)("input",{type:"checkbox"}),Object(g.jsx)("span",{children:"Remember me!"})]}),Object(g.jsx)("button",{className:"log_button",onClick:function(){_.a.get("https://raw.githubusercontent.com/jinhee5577/allData/master/logindata.json").then((function(e){console.log(e.data.users);var t=e.data.users.find((function(e){return e.id===p}));console.log(t),p===t.id&&v===t.password?(n(!0),x(t.name)):t&&v===t.password||alert("\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \ud655\uc778 \ud574\uc8fc\uc2ed\uc2dc\uc694.")})).catch((function(e){alert("\uc544\uc774\ub514\ub97c \ub2e4\uc2dc \ud655\uc778 \ud574\uc8fc\uc2ed\uc2dc\uc694."),console.log("\uc11c\ubc84\uc2e4\ud328")}))},children:"Login"})]})]}),!0===c?Object(g.jsx)("div",{className:"vip",onClick:function(){n(!1)},children:Object(g.jsxs)("h2",{className:"out",children:["\uc5b4\uc11c \uc624\uc2ed\uc2dc\uc624. ",m," VIP \ud68c\uc6d0\uc774\uc2ed\ub2c8\ub2e4."]})}):null]})},E=window.kakao;var L=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(b.a)(a,2),r=i[0],j=i[1],l=Object(s.useState)([]),o=Object(b.a)(l,2),d=o[0],h=o[1],u=Object(s.useRef)(),O=Object(s.useRef)();return Object(s.useEffect)((function(){var e=new E.maps.InfoWindow({zIndex:1}),t=document.getElementById("kakaomap"),c={center:new E.maps.LatLng(33.450701,126.570667),level:3},n=new E.maps.Map(t,c);function s(t){var c=new E.maps.Marker({map:n,position:new E.maps.LatLng(t.y,t.x)});E.maps.event.addListener(c,"click",(function(){e.setContent('<div id="view_p" style="padding:5px;font-size:12px;">'+t.place_name+"</div>"),e.open(n,c)}))}(new E.maps.services.Places).keywordSearch(r,(function(e,t,c){if(t===E.maps.services.Status.OK){for(var a=new E.maps.LatLngBounds,i=0;i<e.length;i++)s(e[i]),a.extend(new E.maps.LatLng(e[i].y,e[i].x));n.setBounds(a),function(e){var t,c=document.getElementById("pagination"),n=document.createDocumentFragment();for(;c.hasChildNodes();)c.removeChild(c.lastChild);for(t=1;t<=e.last;t++){var s=document.createElement("div");s.innerHTML=t,t===e.current?s.className="on":s.onclick=function(t){var c=u.current.offsetTop;return window.scrollTo({top:c+350,behavior:"smooth"}),function(){e.gotoPage(t)}}(t),n.appendChild(s)}c.appendChild(n)}(c),console.log(e),h(e)}}))}),[r]),Object(s.useEffect)((function(){u.current.addEventListener("click",(function(){u.current.classList.add("km"),O.current.classList.add("km2")}))}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{className:"youph kamtitle",children:"\uc7a5\uc18c\ub97c \uac80\uc0c9\ud574 \ubcf4\uc790"}),Object(g.jsxs)("div",{id:"jinheemap",ref:u,children:[Object(g.jsx)("div",{id:"kakaomap"}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(c),n("")},children:[Object(g.jsx)("input",{className:"search",placeholder:"Search Place",onChange:function(e){n(e.target.value)},value:c}),Object(g.jsx)("button",{className:"mapbt",type:"submit",children:"\uac80\uc0c9"})]}),Object(g.jsxs)("div",{id:"showplace",ref:O,children:[d.map((function(e,t){return Object(g.jsxs)("div",{className:"kamapbox",children:[Object(g.jsxs)("h5",{children:[e.place_name," ",Object(g.jsx)("span",{children:e.category_group_name})]}),Object(g.jsx)("h6",{children:e.road_address_name}),Object(g.jsxs)("h6",{children:[e.phone," "]})]},t)})),Object(g.jsx)("div",{id:"pagination",onClick:function(){}})]})]})]})};var I=function(e){var t=Object(s.useRef)(),c=Object(s.useRef)();return Object(s.useEffect)((function(){t.current.classList.toggle("main_video2");for(var e=setTimeout((function(){c.current.style.opacity=1}),6e3),n=["#478ae2","#a341ca"],s=[],a=0;a<30;a++){var i=document.createElement("div");i.classList.add("ball"),i.style.background=n[Math.floor(Math.random()*n.length)],i.style.left="".concat(Math.floor(100*Math.random()),"vw"),i.style.top="".concat(Math.floor(100*Math.random()),"vh"),i.style.transform="scale(".concat(Math.random(),")"),i.style.width="".concat(Math.random(),"em"),i.style.height=i.style.width,s.push(i),t.current.append(i)}return s.forEach((function(e,t,c){var n={x:Math.random()*(t%2===0?-11:11),y:12*Math.random()};e.animate([{transform:"translate(0, 0)"},{transform:"translate(".concat(n.x,"rem, ").concat(n.y,"rem)")}],{duration:2e3*(Math.random()+1),direction:"alternate",fill:"both",iterations:1/0,easing:"ease-in-out"})})),function(){clearTimeout(e)}}),[]),Object(g.jsxs)("div",{id:"main_video",ref:t,children:[Object(g.jsx)("h4",{children:"PEARLABYSS"}),Object(g.jsx)("iframe",{height:"315",src:"https://www.youtube.com/embed/xkELKW1waos?controls=0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(g.jsx)("h5",{onClick:function(){e.setonvideo(!1)},children:"X"}),Object(g.jsxs)("ul",{className:"do_light",ref:c,children:[Object(g.jsx)("li",{}),Object(g.jsx)("li",{}),Object(g.jsx)("li",{}),Object(g.jsx)("li",{className:"gre1"}),Object(g.jsx)("li",{className:"gre1"}),Object(g.jsx)("li",{className:"gre1"})]})]})};var M=function(e){var t=Object(p.g)().mm,c=Object(p.f)(),n=Object(f.c)(),s=e.jinmov.find((function(e){return e.id==t})),a=e.jinmov.findIndex((function(e){return e.id==t}));return Object(g.jsxs)("div",{className:"cinema_wrap",children:[Object(g.jsx)("h2",{className:"uptitle",children:s.title}),Object(g.jsx)("div",{className:"cine_back",children:Object(g.jsx)("img",{src:s.large_cover_image})}),Object(g.jsxs)("div",{className:"cinema_info",children:[Object(g.jsxs)("article",{children:[Object(g.jsx)("h3",{children:s.title}),Object(g.jsxs)("h4",{children:[s.genres[0],", ",s.genres[2],"/ \ubbf8\uad6d"]}),Object(g.jsxs)("h4",{children:[s.year," \uac1c\ubd09 ",Object(g.jsxs)("span",{className:"mv_t",children:["\ud83e\udded ",s.runtime,"\ubd84"]})]})]}),Object(g.jsx)("div",{className:"small_img",children:Object(g.jsx)("img",{src:s.medium_cover_image})})]}),Object(g.jsxs)("div",{className:"synopsis",children:[Object(g.jsx)("h4",{children:"\uc2dc\ub189\uc2dc\uc2a4"}),Object(g.jsxs)("p",{children:['"',s.synopsis,'"']})]}),Object(g.jsx)("div",{className:"cine_middle",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("h5",{children:"\uad00\ub78c\uac1d\ud3c9\uc810"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"sp1",children:"\u2b50"}),s.rating]})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("h5",{children:"\uc778\uae30\uc21c\uc704"}),Object(g.jsxs)("p",{children:[a+1,Object(g.jsx)("span",{className:"sp2",children:"\uc704"})]})]}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{onClick:function(){c.push("/ticketing"),n({type:"cinema",payload:s})},children:"\uc608\ub9e4\ud558\uae30"})})]})})]})},T=c(38),q=c.n(T);c(124),c(65),c(66);var A=function(e){e.sliders;var t=Object(s.useState)(new Date),c=Object(b.a)(t,2),n=(c[0],c[1],Object(s.useState)(!1)),a=Object(b.a)(n,2),i=a[0],r=(a[1],Object(f.d)((function(e){return e.cinema}))),l=Object(f.d)((function(e){return e.premium})),o=Object(f.c)();Object(s.useRef)(),Object(s.useRef)(),console.log(l);for(var d=new Date,h=d.getDay(),u=new Date(d.getFullYear(),d.getMonth()+1,0).getDate(),O=[],m=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],x=1,p=0;p<14;p++)d.getDate()+p<u+1?O.push(d.getDate()+p):(O.push(x),x++);var v=document.querySelectorAll(".jinh3"),N=document.querySelector(".change_d"),w=document.querySelector(".yoil");return document.querySelectorAll(".cinema_time"),Object(s.useEffect)((function(){var e=document.querySelectorAll(".jinh3"),t=document.querySelector(".change_d"),c=document.querySelector(".yoil");e[0].classList.add("we_da"),t.innerText=O[0],c.innerText=m[d.getDay()]}),[]),Object(g.jsxs)("div",{className:"ticketing",children:[Object(g.jsx)("div",{className:"ti_box"}),Object(g.jsx)("div",{className:"custom-shape-divider-top-1640756594",children:Object(g.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(g.jsx)("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",className:"shape-fill"})})}),Object(g.jsxs)("div",{id:"week_calendar",children:[Object(g.jsxs)("h4",{children:[d.getFullYear(),Object(g.jsx)("span",{children:"\ub144"})," ",d.getMonth()+1,Object(g.jsx)("span",{children:"\uc6d4"})]}),Object(g.jsx)("div",{className:"pick_calendar",children:Object(g.jsx)(q.a,Object(j.a)(Object(j.a)({},F),{},{width:"100%",children:O.map((function(e,t){return Object(g.jsxs)("div",{className:"date_box",children:[Object(g.jsx)("h3",{className:"jinh3",data:t,onClick:function(c){v.forEach((function(e){e.classList.remove("we_da")}));var n=c.target.getAttribute("data");n==t&&(v[n].classList.add("we_da"),N.innerText=e,w.innerText=m[(h+t)%7])},children:e}),Object(g.jsx)("h6",{children:m[(h+t)%7]})]},t)}))}))}),Object(g.jsxs)("div",{className:"show_ticket",children:[Object(g.jsxs)("article",{children:[Object(g.jsx)("div",{className:"mv_img",children:Object(g.jsx)("img",{src:r.medium_cover_image,width:"100%"})}),Object(g.jsx)("span",{children:r.title})]}),Object(g.jsx)("h3",{className:"d4",children:"PREMIUM \uad00"}),Object(g.jsx)("div",{className:"vipcinema",children:Object(g.jsx)("section",{children:l.map((function(e,t){return Object(g.jsxs)("div",{className:"cinema_time",data:t,onClick:function(c){var n=document.querySelector(".t1"),s=document.querySelector(".t2"),a=document.querySelector(".v_set");c.target.getAttribute("data");n.innerHTML=e.time[0],s.innerHTML=e.time[1],o({type:"v",i:t,haveto:i}),e.set>=0&&(a.innerText=e.vip)},children:[Object(g.jsx)("h3",{children:Object(g.jsxs)("strong",{children:[Object(g.jsx)("span",{children:e.time[0]})," ~ ",e.time[1]]})}),Object(g.jsxs)("h5",{children:[Object(g.jsx)("span",{children:e.set}),"/23"]})]},t)}))})}),Object(g.jsxs)("div",{className:"auto_ticket",children:[Object(g.jsx)("h4",{className:"j4",children:"JINHEE CINEMA PREMIUM"}),Object(g.jsxs)("div",{className:"bigsection",children:[Object(g.jsxs)("section",{children:[Object(g.jsxs)("h5",{children:["\uc601\ud654 : ",Object(g.jsx)("span",{children:r.title})]}),Object(g.jsxs)("h5",{children:["Date : ",Object(g.jsxs)("span",{children:[d.getFullYear(),"\ub144 ",d.getMonth()+1,"\uc6d4 ",Object(g.jsx)("span",{className:"change_d"}),"\uc77c (",Object(g.jsx)("span",{className:"yoil"}),")"]})]}),Object(g.jsxs)("h5",{children:["\uc2dc\uac04 : ",Object(g.jsx)("span",{className:"t1"})," ~ ",Object(g.jsx)("span",{className:"t2"})]})]}),Object(g.jsxs)("section",{children:[Object(g.jsxs)("h5",{children:["runtime : ",Object(g.jsxs)("span",{children:[r.runtime,"\ubd84"]})]}),Object(g.jsxs)("h5",{children:["VIP :  ",Object(g.jsx)("span",{className:"v_set",children:"0"}),"\ubd84"]})]})]})]})]})]})]})},F={arrows:!1,dots:!1,infinite:!1,speed:40,autoplay:!1,slidesToShow:7,slidesToScroll:3,centerMode:!1,centerPadding:"0px"},D=c(20);function P(e){var t=Object(s.useState)([]),c=Object(b.a)(t,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){var t=Object(n.a)(e.item.option.color);t.shift(),i(t)}),[]),Object(g.jsxs)("div",{className:"mlb_col",onClick:function(){e.history.push("/detail/"+e.item.id)},children:[Object(g.jsx)("img",{src:e.item.img,width:"95%"}),Object(g.jsxs)("div",{className:"square",children:[Object(g.jsx)("h4",{children:e.item.title}),Object(g.jsxs)("article",{children:[Object(g.jsxs)("p",{children:[e.item.price,"\uc6d0"]}),Object(g.jsx)("ul",{children:a.map((function(e,t){return Object(g.jsx)("li",{style:{background:e}},t)}))})]})]})]})}function H(e){return Object(g.jsx)("div",{id:"cont3",className:!0===e.togglecon?"on3":""})}var J=function(e){e.sliders;var t=Object(s.useState)([]),c=Object(b.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)([]),l=Object(b.a)(r,2),f=l[0],N=l[1],y=Object(p.f)(),S=Object(s.useState)(!1),E=Object(b.a)(S,2),T=E[0],F=E[1],J=Object(s.useState)(!1),K=Object(b.a)(J,2),V=K[0],Y=K[1],z=Object(s.useState)(!1),U=Object(b.a)(z,2),W=U[0],Z=U[1],X=Object(s.useState)(0),G=Object(b.a)(X,2),Q=G[0],$=G[1],ee=Object(s.useState)(!1),te=Object(b.a)(ee,2),ce=te[0],ne=te[1],se=Object(s.useState)(!1),ae=Object(b.a)(se,2),ie=ae[0],re=ae[1],je=Object(s.useState)(!1),le=Object(b.a)(je,2),oe=le[0],de=le[1],be=Object(s.useState)(!1),he=Object(b.a)(be,2),ue=he[0],Oe=he[1],me=Object(s.useState)([]),xe=Object(b.a)(me,2),pe=xe[0],ve=xe[1],fe=Object(s.useState)(1),ge=Object(b.a)(fe,2),Ne=ge[0],we=ge[1],ye=localStorage.getItem("resent");ye=null==ye?[]:JSON.parse(ye),Object(s.useEffect)((function(){var e=setTimeout((function(){console.log("a"),Y(!0)}),700);return function(){clearTimeout(e)}}),[]),Object(s.useEffect)((function(){return window.addEventListener("scroll",(function(){if($(window.pageYOffset),Q>1e3){ne(!0);setTimeout((function(){re(!0)}),600)}})),function(){window.removeEventListener("scroll",(function(){$(window.pageYOffset),clearTimeout(boxtime)}))}}));var ke=function(){var e=Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=like_count");case 2:t=e.sent,c=t.data.data,ve(c.movies);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://raw.githubusercontent.com/jinhee5577/allData/master/product.json");case 2:t=e.sent,c=t.data.products,i(c),N(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(e){var t=e.target.getAttribute("name");if(f.some((function(e){return e.type===t}))){var c=Object(n.a)(f).filter((function(e){return e.type===t}));i(c)}else i(f)};return Object(s.useEffect)((function(){ke(),Se()}),[]),Object(g.jsxs)(g.Fragment,{children:[!0===V?Object(g.jsx)("div",{className:"mob_alert",children:Object(g.jsxs)("h3",{onClick:function(){Y(!1)},children:["\uaf2d \ubaa8\ubc14\uc77c\ub85c \ubd10\uc8fc\uc138\uc694!. PC \uc77c\uacbd\uc6b0 width 400px \uc774\ud558\ub85c \ubd10\uc8fc\uc138\uc694.",Object(g.jsx)("p",{children:"\ubaa8\ubc14\uc77c\uc5d0 \uac00\uc7a5 \uc801\ud569\ud558\uac8c \uc81c\uc791 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."})]})}):null,Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(h.a,{bg:"light",expand:"lg",className:"navjin",children:Object(g.jsxs)(u.a,{id:"cont",children:[Object(g.jsx)(h.a.Brand,{as:D.b,style:{color:"white"},to:"/",children:"JH VIP"}),Object(g.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(O.a,{className:"me-auto",children:[Object(g.jsx)(O.a.Link,{as:D.b,to:"/join",style:{color:"white"},children:"JOIN US"}),Object(g.jsx)(O.a.Link,{as:D.b,style:{color:"white"},to:"/detail",children:"Dess"}),Object(g.jsxs)(m.a,{title:"Dropdown",id:"basic-nav-dropdown",style:{color:"white"},children:[Object(g.jsx)(m.a.Item,{href:"#action/3.1",children:"Action"}),Object(g.jsx)(m.a.Item,{href:"#action/3.2",children:"Another action"}),Object(g.jsx)(m.a.Item,{href:"#action/3.3",children:"Something"}),Object(g.jsx)(m.a.Divider,{}),Object(g.jsx)(m.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(g.jsx)(v.a,{className:"page_ani",timeout:350,children:Object(g.jsxs)(p.c,{children:[Object(g.jsx)(p.a,{exact:!0,path:"/",children:Object(g.jsxs)("div",{id:"jinwrap",children:[Object(g.jsxs)(q.a,Object(j.a)(Object(j.a)({},R),{},{width:"100%",children:[Object(g.jsx)("div",{className:"bacground bg0"}),Object(g.jsx)("div",{className:"bacground bg1",children:Object(g.jsx)("h3",{children:"20%  Season  OFF!"})}),Object(g.jsx)("div",{className:"bacground bg2",children:Object(g.jsx)("h3",{children:"20%  Season  OFF!"})}),Object(g.jsx)("div",{className:"bacground bg3",children:Object(g.jsx)("h3",{children:"20%  Season  OFF!"})}),Object(g.jsx)("div",{className:"bacground bg4",children:Object(g.jsx)("h3",{children:"20%  Season  OFF!"})})]})),Object(g.jsxs)("ul",{id:"sub_menu",children:[Object(g.jsx)("li",{children:Object(g.jsx)("button",{name:"new",onClick:_e,children:"NEW"})}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{name:"top",onClick:_e,children:"TOP"})}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{name:"cap",onClick:_e,children:"CAP"})}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{name:"shoes",onClick:_e,children:"SHOES"})})]}),Object(g.jsxs)("h3",{className:"new",children:[" \uc774\ubc88\uc8fc \uc2e0\uc0c1\ud488",Object(g.jsx)("button",{className:"sort_b",onClick:function(){var e=Object(n.a)(a);e.sort((function(e,t){return e.price-t.price})),i(e)},children:"\uac00\uaca9\uc21c"})]}),Object(g.jsx)("div",{className:"cont2",children:Object(g.jsxs)("div",{className:"jinrow",children:[a.map((function(e,t){return Object(g.jsx)(P,{item:e,i:t,history:y},t)})),!0===T?Object(g.jsx)("h3",{className:"fail",children:"\ub354\ub294 \uc0c1\ud488\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}):null,!0===W?Object(g.jsx)(x.a,{animation:"grow",variant:"warning",className:"spinner_j"}):null,Object(g.jsx)("button",{className:"more",onClick:function(){Z(!0),we(Ne+1),_.a.get("https://raw.githubusercontent.com/jinhee5577/allData/master/product".concat(Ne+1,".json")).then((function(e){Z(!1),i([].concat(Object(n.a)(a),Object(n.a)(e.data.products2))),N([].concat(Object(n.a)(f),Object(n.a)(e.data.products2)))})).catch((function(){Z(!1),console.log("\uc5c6\uc2b5\ub2c8\ub2e4."),F(!0)}))},children:"\ub354\ubcf4\uae30"})]})}),Object(g.jsxs)("div",{id:"jinhee",children:[Object(g.jsx)(H,{togglecon:ce}),Object(g.jsx)(H,{togglecon:ce}),Object(g.jsx)("div",{id:"tourbox",className:!0===ie?"onbox":"",children:Object(g.jsxs)("div",{className:"korea_j",children:[Object(g.jsx)("h3",{className:"youph",children:"JINHEE CINEMA"}),Object(g.jsx)(q.a,Object(j.a)(Object(j.a)({},B),{},{width:"100%",children:pe.map((function(e,t){return Object(g.jsxs)("div",{className:"artbox",onClick:function(){y.push("/cinema/"+e.id)},children:[Object(g.jsxs)("div",{className:"artimg",children:[Object(g.jsx)("img",{src:e.medium_cover_image}),Object(g.jsx)("strong",{children:t+1})]}),Object(g.jsxs)("div",{className:"mv_con",children:[Object(g.jsx)("h5",{children:e.title}),Object(g.jsxs)("h6",{children:["\u2b50 ",e.rating]}),Object(g.jsx)("h4",{children:"\uc608\ub9e4\ud558\uae30"})]})]},t)}))})),Object(g.jsx)("button",{className:"vid_but",onClick:function(){Oe(!0)},children:"\ud64d\ubcf4\uc601\uc0c1"})]})})]}),Object(g.jsx)(L,{}),!0===ue?Object(g.jsx)(I,{setonvideo:Oe}):null,Object(g.jsxs)("footer",{children:[Object(g.jsx)("div",{className:"custom-shape-divider-bottom-1637663460",children:Object(g.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(g.jsx)("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",className:"shape-fill"})})}),Object(g.jsx)("h4",{children:"\uc81c\uc791 : OH JIN HEE"})]})]})}),Object(g.jsx)(p.a,{path:"/detail/:id",children:Object(g.jsx)(w,{products_mlb:a,noticechan:de})}),Object(g.jsx)(p.a,{path:"/cart",children:Object(g.jsx)(k,{notice:oe})}),Object(g.jsx)(p.a,{path:"/join",children:Object(g.jsx)(C,{})}),Object(g.jsx)(p.a,{path:"/cinema/:mm",children:Object(g.jsx)(M,{jinmov:pe})}),Object(g.jsx)(p.a,{path:"/ticketing",children:Object(g.jsx)(A,{})})]})}),Object(g.jsxs)("div",{className:"resent",children:[Object(g.jsx)("h6",{onClick:function(){localStorage.removeItem("resent")},children:"resent"}),Object(g.jsx)("article",{children:ye.map((function(e,t){return Object(g.jsx)("div",{className:"re_0",children:Object(g.jsx)("img",{src:e,alt:"\uc81c\ud488"})},t)}))})]})]})]})},R={arrows:!1,dots:!0,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:2500,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"0px"},B={arrows:!1,dots:!1,infinite:!1,speed:50,autoplay:!1,slidesToShow:2,slidesToScroll:2,centerMode:!1,centerPadding:"0px"},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,138)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))},V=c(54),Y=[];var z=[{to:0,time:["09:00","11:09"],nowclick:!1,set:23,vip:0},{to:1,time:["11:20","13:30"],nowclick:!1,set:23,vip:0},{to:2,time:["13:45","15:54"],nowclick:!1,set:23,vip:0},{to:3,time:["16:10","18:19"],nowclick:!1,set:23,vip:0},{to:4,time:["21:00","23:10"],nowclick:!1,set:23,vip:0}];var U=Object(V.b)(Object(V.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;if("addcart"===t.type){var c=e.findIndex((function(e){return e.id===t.payload.id}));if(c>=0)return alert("\ud574\ub2f9\uc0c1\ud488\uc774 \uc774\ubbf8 \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uc788\uc5b4\uc694."),e;var s=Object(n.a)(e);return s.push(t.payload),s}if("delete"===t.type){var a=e.findIndex((function(e){return e.id===t.payload})),i=Object(n.a)(e);return i.splice(a,1),i}if("minus"===t.type){var r=Object(n.a)(e);return r[t.index].qunn>1?(r[t.index].qunn--,r):e}if("plus"===t.type){var j=Object(n.a)(e);return j[t.index].qunn++,j}return e},reducer2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"resent"===t.type?t.payload:e},cinema:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"cinema"===t.type?t.payload:e},premium:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;if("v"!==t.type)return e;var c=Object(n.a)(e),s=Object(n.a)(e);return s.splice(t.i,1),c[t.i].to==t.i?c[t.i].set>0?(c[t.i].set--,c[t.i].vip++,s.forEach((function(e){e.set=23,e.vip=0})),c):(c[t.i].set=23,c[t.i].vip=0,c):void 0}}));r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(D.a,{basename:"/reactJH",children:Object(g.jsx)(f.a,{store:U,children:Object(g.jsx)(J,{})})})}),document.getElementById("root")),K()},25:function(e,t,c){},77:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.53052d04.chunk.js.map