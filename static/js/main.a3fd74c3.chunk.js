(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={label:"Filter_label__2pNgv",input:"Filter_input__YmgBH"}},20:function(e,t,n){e.exports={container:"Container_container__3eZVY"}},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=n(5),s=(n(31),n(11)),l=n(12),u=n(15),b=n(13),m=n(8),d=n(6),j=n(7),p=n.n(j),h=n(3),f=n(39),O=Object(h.b)("contact/add",(function(e){return{payload:{id:Object(f.a)(),name:e.name,number:e.number}}})),_=Object(h.b)("contact/delete"),v=Object(h.b)("filter/change"),x=n(1),C=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.isNameExist()?alert("This contact already exist"):e.props.onSubmit(e.state),e.resetFormField()},e.isNameExist=function(){var t=e.props.allContacts,n=e.state.name;return t.find((function(e){return e.name===n}))},e}return Object(l.a)(n,[{key:"resetFormField",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(x.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{className:p.a.label,children:["Name",Object(x.jsx)("input",{className:p.a.input,type:"text",name:"name",value:t,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(x.jsxs)("label",{className:p.a.label,children:["Number",Object(x.jsx)("input",{className:p.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(x.jsxs)("button",Object(m.a)(Object(m.a)({className:p.a.button,type:"submit"},this.props.allyProps),{},{children:[this.props.children,Object(x.jsx)("span",{className:p.a.span,children:"Add contact"})]}))]})}}]),n}(a.Component);C.defaultProps={onSubmit:function(){return null},children:null};Object(i.b)((function(e){return{allContacts:e.phoneBook.contacts}}),(function(e){return{onSubmit:function(t){return e(O(t))}}}))(C);var g=n(19),y=n.n(g),k=(Object(i.b)((function(e){return{filter:e.phoneBook.filter}}),(function(e){return{onChange:function(t){return e(v(t.target.value))}}}))((function(e){var t=e.filter,n=e.onChange;return Object(x.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(x.jsx)("input",{className:y.a.input,type:"text",value:t,onChange:n})]})})),n(9)),N=n.n(k),F=function(e){var t=e.list,n=e.onDelete,a=e.allysProps,r=e.children;return Object(x.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,c=e.name,o=e.number;return Object(x.jsxs)("li",{className:N.a.item,children:[Object(x.jsxs)("span",{className:N.a.name,children:[c,": ",o]}),Object(x.jsxs)("button",Object(m.a)(Object(m.a)({className:N.a.button,type:"button",onClick:function(){return n(t)}},a),{},{children:[r,Object(x.jsx)("span",{className:N.a.span,children:"Delete"})]}))]},t)}))})};F.defaultProps={onDelete:function(){return null},children:null};var S=F,P=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},w=(Object(i.b)((function(e){var t=e.phoneBook,n=t.contacts,a=t.filter;return{list:P(n,a)}}),(function(e){return{onDelete:function(t){return e(_(t))}}}))(S),n(20)),A=n.n(w),B=function(e){var t=e.children;return Object(x.jsx)("div",{className:A.a.container,children:t})};n.p;n.p;var L,D=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsx)(B,{children:Object(x.jsx)("h1",{children:"Phonebook"})})}}]),n}(a.Component),z=(n(33),n(14)),E=n(21),Z=n.n(E),J=n(22),Y=n.n(J),q=n(4),H=n(2),K=Object(h.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(L={},Object(d.a)(L,O,(function(e,t){return[].concat(Object(z.a)(e),[t.payload])})),Object(d.a)(L,_.type,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),L)),M=Object(h.c)("",Object(d.a)({},v,(function(e,t){return t.payload}))),T=Object(H.b)({contacts:K,filter:M}),X=[].concat(Object(z.a)(Object(h.d)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),[Z.a]),I={key:"my-contacts",storage:Y.a,blacklist:["filter"]},R=Object(h.a)({reducer:{phoneBook:Object(q.g)(I,T)},middleware:X,devTools:!1});Object(q.h)(R);o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(i.a,{store:R,children:Object(x.jsx)(D,{})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"PhonebookForm_form__11K6g",label:"PhonebookForm_label__2rDc-",button:"PhonebookForm_button__1m5au",input:"PhonebookForm_input__LvXSo",span:"PhonebookForm_span__3bWiB"}},9:function(e,t,n){e.exports={list:"ContactList_list__3wSXY",button:"ContactList_button__197mh",span:"ContactList_span__2n2ga",item:"ContactList_item__3lf8n",name:"ContactList_name__1ikjf"}}},[[37,1,2]]]);
//# sourceMappingURL=main.a3fd74c3.chunk.js.map