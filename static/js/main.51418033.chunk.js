(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={input:"Filter_input__2DoVp"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=n(12),i=n(3),l=n(4),u=n(5),b=n(7),h=n(6),d=n(22),m=n(2),j=n.n(m),p=n(0),f=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handlerChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.onSaveContact=function(e){e.preventDefault();var n={id:Object(d.a)(),name:t.state.name,number:t.state.number};t.setState({name:"",number:""}),t.props.onSave(n)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.onSaveContact,children:[Object(p.jsxs)("label",{className:j.a.label,children:["Name",Object(p.jsx)("input",{type:"text",className:j.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handlerChange})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Number",Object(p.jsx)("input",{type:"tel",className:j.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handlerChange})]}),Object(p.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=f,v=n(10),O=n.n(v);var x=function(t){var e=t.filter,n=t.handlerChange;return Object(p.jsx)("section",{className:O.a.container,children:Object(p.jsxs)("label",{children:["Find contact by name",Object(p.jsx)("input",{type:"text",className:O.a.input,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:n})]})})},g=n(13),_=n(8),y=n.n(_);var S=function(t){var e=t.list,n=t.deleteContact;return Object(p.jsx)("ul",{className:y.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number,r="tel:".concat(c).replaceAll("-","");return Object(p.jsxs)("li",{className:y.a.item,children:[Object(p.jsxs)("p",{children:[a,": ",Object(p.jsx)("a",{href:r,children:c})]}),Object(p.jsx)("button",{className:y.a.button,type:"button","data-id":e,onClick:n,children:Object(p.jsx)(g.a,{})})]},e)}))})},N=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handlerChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.onSaveContact=function(e){var n=t.state.contacts,a=e.name.toUpperCase();if(n.find((function(t){return t.name.toUpperCase()===a})))return alert("".concat(e.name," is already in contacts."));t.setState((function(t){return{contacts:[e].concat(Object(s.a)(t.contacts))}}))},t.visibleContacts=function(){var e=t.state.filter.toUpperCase();return t.state.contacts.filter((function(t){return t.name.toUpperCase().includes(e)}))},t.deleteContact=function(e){var n=e.currentTarget.dataset.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("phonebook"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("phonebook",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.visibleContacts();return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{onSave:this.onSaveContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(x,{filter:t,handlerChange:this.handlerChange}),Object(p.jsx)(S,{list:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component),A=N;n(19);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy"}}},[[20,1,2]]]);
//# sourceMappingURL=main.51418033.chunk.js.map