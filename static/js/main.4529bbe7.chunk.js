(this["webpackJsonpmulti-form"]=this["webpackJsonpmulti-form"]||[]).push([[0],{39:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(10),s=a.n(c),r=(a(38),a(6)),i=a(28),l=a(29),j=a(33),h=a(32),o=a(49),b=a(45),d=a(47),m=a(46),p=(a(39),a(0)),x=function(e){var t=e.values,a=t.firstName,n=t.lastName,c=t.email,s=e.handleChange;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{bg:"primary",variant:"dark",className:"header",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(o.a.Brand,{href:"#home",children:"Form"}),Object(p.jsx)("h4",{className:"title text-white",children:"Enter User Details"})]})}),Object(p.jsx)("main",{className:"main",children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(d.a.Group,{className:"mb-3",children:Object(p.jsx)(d.a.Control,{type:"text",placeholder:"First Name",defaultValue:a,onChange:s("firstName")})}),Object(p.jsx)(d.a.Group,{className:"mb-3",children:Object(p.jsx)(d.a.Control,{type:"text",placeholder:"Last Name",defaultValue:n,onChange:s("lastName")})}),Object(p.jsx)(d.a.Group,{className:"mb-3",children:Object(p.jsx)(d.a.Control,{type:"email",placeholder:"Email",defaultValue:c,onChange:s("email")})}),Object(p.jsx)(m.a,{variant:"primary",type:"submit",onClick:function(t){t.preventDefault(),a&&n&&c?e.nextStep():alert("Data not filled")},children:"Continue"})]})})})]})},u=function(e){var t=e.values,a=t.occupation,n=t.city,c=t.bio,s=e.handleChange;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{bg:"primary",variant:"dark",className:"header",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(o.a.Brand,{href:"#home",children:"Form"}),Object(p.jsx)("h4",{className:"title text-white",children:"Enter Personal Details"})]})}),Object(p.jsx)("main",{className:"main",children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(d.a.Group,{className:"mb-3",children:Object(p.jsx)(d.a.Control,{type:"text",placeholder:"Occupation",defaultValue:a,onChange:s("occupation")})}),Object(p.jsx)(d.a.Group,{className:"mb-3",children:Object(p.jsx)(d.a.Control,{type:"text",placeholder:"City",defaultValue:n,onChange:s("city")})}),Object(p.jsx)(d.a.Group,{className:"mb-3",children:Object(p.jsx)(d.a.Control,{type:"email",placeholder:"Bio",defaultValue:c,onChange:s("bio")})}),Object(p.jsxs)("div",{className:"wrap-btn",children:[Object(p.jsx)(m.a,{variant:"dark",type:"submit",onClick:function(t){t.preventDefault(),e.prevStep()},children:"Back"}),Object(p.jsx)(m.a,{variant:"primary",type:"submit",onClick:function(t){t.preventDefault(),a&&n&&c?e.nextStep():alert("Data not filled")},children:"Continue"})]})]})})})]})},O=a(48),v=function(e){var t=e.values,a=t.firstName,n=t.lastName,c=t.email,s=t.occupation,r=t.city,i=t.bio;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{bg:"primary",variant:"dark",className:"header",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(o.a.Brand,{href:"#home",children:"Form"}),Object(p.jsx)("h4",{className:"title text-white",children:"Confirm User Data"})]})}),Object(p.jsx)("main",{className:"main",children:Object(p.jsxs)(b.a,{children:[Object(p.jsxs)(O.a,{className:"list-group",style:{margin:"30px auto"},children:[Object(p.jsxs)(O.a.Item,{variant:"light",className:"list-group-item",children:[Object(p.jsx)("span",{children:"FirstName:"}),Object(p.jsx)("span",{children:a})]}),Object(p.jsxs)(O.a.Item,{variant:"light",children:[Object(p.jsx)("span",{children:"LastName:"}),Object(p.jsx)("span",{children:n})]}),Object(p.jsxs)(O.a.Item,{variant:"light",children:[Object(p.jsx)("span",{children:"Email:"}),Object(p.jsx)("span",{children:c})]}),Object(p.jsxs)(O.a.Item,{variant:"light",children:[Object(p.jsx)("span",{children:"Occupation:"}),Object(p.jsx)("span",{children:s})]}),Object(p.jsxs)(O.a.Item,{variant:"light",children:[Object(p.jsx)("span",{children:"City:"}),Object(p.jsx)("span",{children:r})]}),Object(p.jsxs)(O.a.Item,{variant:"light",children:[Object(p.jsx)("span",{children:"Bio:"}),Object(p.jsx)("span",{children:i})]})]}),Object(p.jsxs)("div",{className:"wrap-btn",children:[Object(p.jsx)(m.a,{variant:"dark",type:"button",onClick:function(t){t.preventDefault(),e.prevStep()},children:"Back"}),Object(p.jsx)(m.a,{variant:"primary",type:"button",onClick:function(t){t.preventDefault(),e.nextStep()},children:"Continue"})]})]})})]})},f=a(50),N=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{bg:"primary",variant:"dark",className:"header",children:Object(p.jsx)(b.a,{children:Object(p.jsx)(o.a.Brand,{children:"Success"})})}),Object(p.jsx)("main",{className:"main",children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(f.a,{variant:"success text-center",children:[Object(p.jsx)(f.a.Heading,{children:"Thank You For Your Submission"}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"You will get an email with further instructions"})]})})})]})},g=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(a){e.setState(Object(r.a)({},t,a.target.value))}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return Object(p.jsx)(x,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return Object(p.jsx)(u,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return Object(p.jsx)(v,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return Object(p.jsx)(N,{});default:return Object(p.jsx)(x,{})}}}]),a}(n.Component),y=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(g,{})})};s.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4529bbe7.chunk.js.map