(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(6),o=n.n(s),a=(n(11),n(12),n(2)),i=n.n(a),d=n(3),l=n(4),u=n(0),j=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],r=e[1],s=function(){var t=Object(d.a)(i.a.mark((function t(e){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,c={description:n},t.next=5,fetch("http://localhost:5000/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:r=t.sent,console.log(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"text-center my-5",children:"Todo App by Francis"}),Object(u.jsxs)("form",{className:"d-flex",onSubmit:s,children:[Object(u.jsx)("input",{type:"test",placeholder:"Add Todo",className:"form-control",value:n,onChange:function(t){return r(t.target.value)}}),Object(u.jsx)("button",{className:"btn btn-primary",children:"Add"})]})]})},b=function(t){var e=t.todo,n=Object(c.useState)(e.description),r=Object(l.a)(n,2),s=r[0],o=r[1],a=function(){var t=Object(d.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={description:s},t.next=4,fetch("http://localhost:5000/todos/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:t.sent,window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",class:"btn btn-warning","data-toggle":"modal","data-target":"#id".concat(e.todo_id),children:"Edit"}),Object(u.jsx)("div",{class:"modal",id:"id".concat(e.todo_id),onClick:function(){return o(e.description)},children:Object(u.jsx)("div",{class:"modal-dialog",children:Object(u.jsxs)("div",{class:"modal-content",children:[Object(u.jsxs)("div",{class:"modal-header",children:[Object(u.jsx)("h4",{class:"modal-title",children:"Edit Todo"}),Object(u.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",onClick:function(){return o(e.description)},children:"\xd7"})]}),Object(u.jsx)("div",{class:"modal-body",children:Object(u.jsx)("input",{type:"text",className:"form-control",value:s,onChange:function(t){return o(t.target.value)}})}),Object(u.jsxs)("div",{class:"modal-footer",children:[Object(u.jsx)("button",{type:"button",class:"btn btn-warning","data-dismiss":"modal",onClick:function(){return a(e.todo_id)},children:"Edit"}),Object(u.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:function(){return o(e.description)},children:"Close"})]})]})})})]})},h=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],s=function(){var t=Object(d.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/todos/".concat(e),{method:"DELETE"});case 3:t.sent,r(n.filter((function(t){return t.todo_id!==e}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(d.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/todos");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),console.log(n),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("table",{className:"table mt-5",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Description"}),Object(u.jsx)("th",{children:"Edit"}),Object(u.jsx)("th",{children:"Delete"})]})}),Object(u.jsx)("tbody",{children:n.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.description}),Object(u.jsx)("td",{children:Object(u.jsx)(b,{todo:t})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return s(t.todo_id)},children:"Delete"})})]},t.todo_id)}))})]})})};var p=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{}),Object(u.jsx)(h,{})]})})};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.72d0f536.chunk.js.map