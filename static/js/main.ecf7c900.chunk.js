(this.webpackJsonpemployee_dir=this.webpackJsonpemployee_dir||[]).push([[0],{46:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(12),a=c.n(s),l=c(13),o=c(14),i=c(15),j=c(19),h=c(18),u=c(0);var d=function(e){return Object(u.jsx)("form",{children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(u.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for an Employee",id:"search"})]})})},b=c(16),m=c.n(b);var O=function(e){return console.log(e),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Image"}),Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Phone"}),Object(u.jsx)("th",{scope:"col",children:"Email"}),Object(u.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(u.jsx)("tbody",{children:e.results.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{alt:"thumbnail",className:"img-fluid",src:e.picture.thumbnail})}),Object(u.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:Object(u.jsx)(m.a,{format:"MM/DD/YYYY",children:e.dob.date})})]},t)}))})]})};var p=function(e){return Object(u.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("h1",{className:"display-4",children:"Employee Carousel"})})})},x=c(17),f=c.n(x),g={search:function(){return f.a.get("https://randomuser.me/api/?results=50")}},v=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={results:[],search:""},e.getEmployee=function(t){console.log(t),g.search(t).then((function(t){console.log(t),e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var c=t.target.name,n=t.target.value;e.setState(Object(l.a)({},c,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchGiphy(e.state.search)},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.getEmployee(50)}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(p,{}),Object(u.jsx)(d,{}),Object(u.jsx)(O,{results:this.state.results})]})}}]),c}(n.Component);var y=function(){return Object(u.jsx)(v,{})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};c(45);a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.ecf7c900.chunk.js.map