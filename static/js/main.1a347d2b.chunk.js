(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{26:function(e,n,t){"use strict";t.r(n);var a,c,r,o,i,s,d,b,l=t(0),j=t.n(l),u=t(8),g=t.n(u),h=t(9),O=t(10),x=t(11),p=t(16),v=t(15),f=t(2),k=t(3),m=k.a.button(a||(a=Object(f.a)(["\n  border-radius: 10px;\n  padding: 10px;\n  width: 100px;\n  color: white;\n  background: transparent;\n  font-weight: 600;\n\n  &.good {\n    color: green;\n\n    &:active {\n      background-color: green;\n    }\n  }\n\n  &.neutral {\n    color: gray;\n\n    &:active {\n      background-color: gray;\n    }\n  }\n\n  &.bad {\n    color: red;\n\n    &:active {\n      background-color: red;\n    }\n  }\n\n  &:active {\n    color: white;\n  }\n"]))),y=k.a.ul(c||(c=Object(f.a)(["\n  list-style: none;\n  display: flex;\n"]))),F=k.a.li(r||(r=Object(f.a)(["\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),w=t(1),P=function(e){var n=e.options,t=e.onLeaveFeedback,a=Object.keys(n);return Object(w.jsx)(y,{children:a.map((function(e,n){return Object(w.jsx)(F,{children:Object(w.jsx)(m,{className:e,type:"button",onClick:t,children:e})},n)}))})},L=k.a.ul(o||(o=Object(f.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),T=k.a.li(i||(i=Object(f.a)(["\n  font-weight: 500;\n  font-size: 16px;\n"]))),C=function(e){var n=e.good,t=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(w.jsxs)(L,{children:[Object(w.jsxs)(T,{children:["Good: ",n]}),Object(w.jsxs)(T,{children:["Neutral: ",t]}),Object(w.jsxs)(T,{children:["Bad: ",a]}),Object(w.jsxs)(T,{children:["Total: ",c]}),Object(w.jsxs)(T,{children:["Positive feedback: ",r,"% "]})]})},N=k.a.section(s||(s=Object(f.a)(["\n  padding: 20px 40px;\n"]))),S=k.a.h2(d||(d=Object(f.a)(["\n  margin: 0;\n  padding: 0 0 30px 0;\n"]))),z=function(e){var n=e.title,t=e.children;return Object(w.jsxs)(N,{children:[Object(w.jsx)(S,{children:n}),t]})},B=k.a.h3(b||(b=Object(f.a)(["\n  padding: 0;\n  margin: 0;\n  font-weight: 400;\n  font-size: 16px;\n"]))),J=function(e){var n=e.message;return Object(w.jsx)(B,{children:n})},A=function(e){Object(p.a)(t,e);var n=Object(v.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(n){var t=n.target.textContent;e.setState((function(e){return Object(h.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return(e.state.good/e.countTotalFeedback()*100).toFixed(0)},e}return Object(x.a)(t,[{key:"render",value:function(){var e=this.state,n=e.good,t=e.neutral,a=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(z,{title:"Pease leave your Feedback",children:Object(w.jsx)(P,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),Object(w.jsx)(z,{title:"Statistics",children:c?Object(w.jsx)(C,{good:n,neutral:t,bad:a,total:c,positivePercentage:r}):Object(w.jsx)(J,{message:"No feedback given"})})]})}}]),t}(l.Component);g.a.render(Object(w.jsx)(j.a.StrictMode,{children:Object(w.jsx)(A,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1a347d2b.chunk.js.map