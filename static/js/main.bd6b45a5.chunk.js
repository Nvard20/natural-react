(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(1),a=n(31),s=n.n(a),r=(n(41),n(42),n(12)),l=n(7),o=["btn--primary","btn--outline","btn--test"],j=["btn--medium","btn--large"],d=function(t){var e=t.children,n=t.type,i=t.onClick,a=t.buttonStyle,s=t.buttonSize,r=t.id,l=o.includes(a)?a:o[0],d=j.includes(s)?s:j[0];return Object(c.jsx)("button",{className:"btn ".concat(l," ").concat(d),onClick:i,type:n,id:r,children:e})};function u(){return Object(i.useEffect)((function(){document.getElementById("el").addEventListener("click",(function(){alert("Get Started")}),!1)})),Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)("div",{className:"main-home",children:[Object(c.jsx)("h1",{className:"title",children:"Adventure Awaits"}),Object(c.jsx)("p",{children:"What are you waiting for?"}),Object(c.jsxs)("div",{className:"heroButtons",children:[Object(c.jsx)(d,{id:"el",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(c.jsx)(d,{buttonStyle:"btn--test",buttonSize:"btn--large",children:"WATCH TRAILER"})]})]})})}function m(t){return Object(c.jsxs)("li",{className:"cards__item",children:[Object(c.jsx)(r.b,{className:"cards__item__link",to:t.path,children:Object(c.jsx)("figure",{className:"cards__item__pic-wrap","data-category":t.label,children:Object(c.jsx)("img",{src:t.src,alt:"Travel img",className:"cards__item__img"})})}),Object(c.jsx)("div",{className:"cards__item__info",children:Object(c.jsx)("h5",{className:"cards__item__text",children:t.text})})]})}function b(){return Object(c.jsxs)("div",{className:"cards",id:"cards",children:[Object(c.jsx)("h1",{children:"Check out these EPIC! Destinations"}),Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsx)("div",{className:"cards__wrapper",children:Object(c.jsxs)("ul",{className:"cards__items",children:[Object(c.jsx)(m,{src:"/natural-react/img/img-9.jpg",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/gallery",label:"Adventure"}),Object(c.jsx)(m,{src:"/natural-react/img/img-6.jpg",text:"Thank you, accepting your answer when i can. Can i do this as many times as i want and can i put other things in here aswell?",path:"/gallery",label:"Interesting"}),Object(c.jsx)(m,{src:"/natural-react/img/img-7.jpg",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/gallery",label:"Adventure"}),Object(c.jsx)(m,{src:"/natural-react/img/img-8.jpg",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/gallery",label:"Adventure"}),Object(c.jsx)(m,{src:"/natural-react/img/img-5.jpg",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/gallery",label:"Adventure"}),Object(c.jsx)(m,{src:"/natural-react/img/img-2.jpg",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/gallery",label:"Adventure"})]})})})]})}function x(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("div",{className:"inner-footer",children:[Object(c.jsx)("h2",{children:"Join the Adventure newsletter to recive our best vacation deals"}),Object(c.jsx)(d,{buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Connect"})]})})}var g=n(27),h=n(28);function p(){var t=Object(g.a)(["\n\n    max-width: 100px;\n    height: 100px;\n    margin: auto;\n    margin-bottom: 55px;\n    background: ",";\n    color:",";\n    display:flex;\n    align-items: center;\n    padding: 10px;\n    font-family: sans-serif;\n    text-align: center;\n    transition: .2s ;\n\n    &:hover{\n        background: gray;\n    }\n"]);return p=function(){return t},t}function O(){var t=Object(g.a)(["\n\n    max-width: 460px;\n    height: 100px;\n    margin: auto;\n    margin-bottom: 55px;\n    background: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-family: sans-serif;\n    font-size: 20px;\n    transition: .2s ease-in-out;\n\n    &:hover{\n        background: green;\n    }\n"]);return O=function(){return t},t}var f=h.a.div(O(),(function(t){return t.primary?"palevioletred":"blue"}));h.a.div(p(),(function(t){return t.primary?"pink":"red"}),(function(t){return t.primary?"white ":"black"}));function v(){return Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)(u,{}),Object(c.jsx)(b,{}),Object(c.jsx)(f,{primary:!0,children:"Asides's Elements"}),Object(c.jsx)(x,{})]})}var y=[{img:"img/img-2.jpg"},{img:"img/img-5.jpg"},{img:"img/img-6.jpg"},{img:"img/img-7.jpg"},{img:"img/img-8.jpg"},{img:"img/img-9.jpg"}],N=n(60),k=n(53),_=n(54),w=n(55),C=n(56),S=n(57),A=n(58),I=n(59),E=n(61);n(49),n(50);function L(){var t=y.map((function(t,e){return Object(c.jsx)(I.a,{className:"slide-img",children:Object(c.jsx)("img",{src:"/natural-react/"+t.img})},e)}));return Object(c.jsx)("div",{className:"slide-container",children:Object(c.jsx)(E.a,{slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:!0,loop:!0,onSlideChange:function(){return console.log("slide change")},children:t})})}function T(){return Object(c.jsx)("div",{className:"box",children:Object(c.jsx)(L,{})})}N.a.use([k.a,_.a,w.a,C.a,S.a,A.a]);var z=n(29),G=n(13);var B=function(t){var e=Object(i.useState)(""),n=Object(G.a)(e,2),a=n[0],s=n[1];return Object(c.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e3*Math.random()),text:a,isCompleted:!1}),s("")},children:[Object(c.jsx)("input",{placeholder:"Add a todo",value:a,onChange:function(t){s(t.target.value)},name:"text",className:"todo-input"}),Object(c.jsx)("button",{className:"todo-button",children:"Add todo"})]})},D=n(21),J=n(35);var R=function(){var t=Object(i.useState)([]),e=Object(G.a)(t,2),n=e[0],a=e[1],s=Object(i.useState)(null),r=Object(G.a)(s,2),l=r[0],o=r[1],j=Object(i.useState)(""),d=Object(G.a)(j,2),u=d[0],m=d[1];return Object(c.jsxs)("div",{className:"todo-list",children:[Object(c.jsx)(B,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(z.a)(n));a(e)}}}),n!==[]?Object(c.jsx)("ul",{className:"listGroup",children:n.map((function(t,e){return Object(c.jsxs)("li",{className:t.isCompleted?"todo-row complete":"todo-row",children:[t.text,t.id===l?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{type:"text",onChange:function(t){return m(t.target.value)},className:"editInput"}),Object(c.jsxs)("div",{className:"update",onClick:function(){return function(t){var e=Object(z.a)(n).map((function(e){return e.id===t&&""!==u&&(e.text=u),e}));a(e),o(null)}(t.id)},children:[" ",Object(c.jsx)(J.a,{})]})]}):Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsxs)("div",{className:"delete",onClick:function(){return function(t){var e=n.filter((function(e){return e.id!==t}));a(e)}(t.id)},children:[" ",Object(c.jsx)(D.b,{})]}),Object(c.jsxs)("div",{className:"edit",onClick:function(){return o(t.id)},children:[Object(c.jsx)(D.a,{})," "]})]})]},e)}))}):null]})};function M(){return Object(c.jsx)("div",{className:"box",children:Object(c.jsx)(R,{})})}var P=[{path:"/",exact:!0,component:function(){return Object(c.jsx)(v,{})}},{path:"/gallery",component:function(){return Object(c.jsx)(T,{})}},{path:"/contacts",component:function(){return Object(c.jsx)(M,{})}}];function W(){var t=Object(i.useState)(!1),e=Object(G.a)(t,2),n=e[0],a=e[1],s=Object(i.useState)(!1),l=Object(G.a)(s,2),o=l[0],j=l[1],d=function(){return a(!1)};return window.addEventListener("scroll",(function(){window.scrollY>90?j(!0):j(!1)})),Object(c.jsxs)("div",{className:o?"navbar active-navbar":"navbar",children:[Object(c.jsxs)("div",{className:"logo",children:[" ",Object(c.jsx)(r.c,{to:"/",exact:!0,className:"logo-img",children:Object(c.jsx)("img",{src:"/natural-react/img/logo.png"})})]}),Object(c.jsxs)("ul",{className:"list",children:[Object(c.jsx)("li",{children:Object(c.jsx)(r.c,{to:"/contacts",activeClassName:"active-link",className:"link",children:"Add to do"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.c,{to:"/gallery",activeClassName:"active-link",className:"link",children:"Gallery"})})]}),Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return a(!n)},children:Object(c.jsx)("i",{className:n?"fa fa-close":" fa fa-align-justify"})}),Object(c.jsxs)("ul",{className:n?"active-list":"noActive-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)(r.c,{to:"/gallery",className:"link mob-link",onClick:d,children:"Gallery"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.c,{to:"/contacts",className:"link mob-link",onClick:d,children:"Contacts"})})]})]})}var F=function(){return Object(c.jsxs)(r.a,{children:[Object(c.jsx)(W,{}),P.map((function(t,e){return Object(c.jsx)(l.a,{path:t.path,exact:t.exact,component:t.component},e)}))]})};s.a.render(Object(c.jsx)(F,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.bd6b45a5.chunk.js.map