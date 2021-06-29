(this["webpackJsonptirish.github.io"]=this["webpackJsonptirish.github.io"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(16),i=n.n(a),s=(n(25),n(26),n(11)),o=n(2),d=n(0);function u(){return Object(d.jsx)("div",{children:"Home"})}var h=n(9),j=n(17),l=n(10),b=n(20),O=n(19),f=window.localStorage||{};function g(e){var t=f[e];try{return JSON.parse(t)}catch(n){return t}}n(28),n(29);function m(e){var t=e.onClick,n=e.className,r=e.children;return Object(d.jsx)("button",{type:"button",className:"ButtonLink-btn ".concat(n),onClick:t,children:r})}var x=function(e){var t=new Date(e);return t.setHours(t.getHours()+2),t.toISOString()},p=function(e,t){if(!e)return"";var n=new Date(e);return t?n.toLocaleString("en-US",{timeZone:"UTC"}):n.toLocaleString("en-US")},v=["3090","3080 Ti","3080","3070 Ti","3070","3060 Ti","3060","Misc"],w=function(e){for(var t=0;t<v.length;t++)if(e.name.indexOf(v[t])>=0)return v[t];return"Misc"},k=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).refreshData=function(){var e=Object(l.a)(r);fetch("https://e35-queue-tracker-api.herokuapp.com/product/?sortBy=sku:desc").then((function(e){return e.json()})).then((function(t){t=t.map((function(e){return{sku:e.sku,name:e.name,productLink:"https://www.evga.com/products/product.aspx?pn="+e.sku,timestamp:p(e.timestampNA,!0),updated:p(x(e.updatedAt)),hide:!!(g(e.sku)||{}).hide||!e.timestampNA,category:w(e)}})),e.setState({data:t,error:!1,lastRefresh:p(new Date)})})).catch((function(){return e.setState({error:!0})})).finally((function(){return e.setState({loading:!1})}))},r.componentDidMount=function(){r.refreshData()},r.toggleShowHidden=function(){r.setState((function(e){return{showHidden:!e.showHidden}}))},r.toggleSku=function(e){var t,n=g(e)||{};n.hide=!n.hide,t=n,f[e]=JSON.stringify(t);var c=r.state.data.map((function(t){return t.sku===e?Object(h.a)(Object(h.a)({},t),{},{hide:n.hide}):t}));r.setState({data:c})},r.renderCategoryRows=function(e){var t=r.state.data.filter((function(t){return t.category===e})).map((function(e){return Object(h.a)(Object(h.a)({},e),{},{show:!e.hide||r.state.showHidden})}));return t.some((function(e){return e.show}))?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("tr",{className:"EvgaQueue-table-category-row",children:Object(d.jsx)("th",{colSpan:5,children:e})}),t.map((function(e){return e.show&&Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:e.productLink,target:"_blank",rel:"noreferrer",children:e.sku})}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.timestamp}),Object(d.jsx)("td",{children:e.updated}),Object(d.jsx)("td",{children:Object(d.jsx)(m,{onClick:function(){return r.toggleSku(e.sku)},children:e.hide?"Show":"Hide"})})]},e.sku)}))]}):Object(d.jsx)(d.Fragment,{})},r.render=function(){return r.state.loading?Object(d.jsx)("span",{children:"Loading..."}):r.state.error?Object(d.jsx)("span",{children:"Encountered error"}):Object(d.jsxs)("div",{className:"EvgaQueue-container",children:[Object(d.jsxs)("table",{className:"EvgaQueue-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Part Number"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Queue Timestamp (PT)"}),Object(d.jsx)("th",{children:"Last Update (Local)"}),Object(d.jsx)("th",{children:"Toggle"})]})}),Object(d.jsx)("tbody",{children:v.map((function(e){return r.renderCategoryRows(e)}))})]}),Object(d.jsx)("div",{className:"EvgaQueue-showhidden-toggle-container",children:Object(d.jsx)(m,{className:"EvgaQueue-showhidden-toggle",onClick:function(){return r.toggleShowHidden()},children:r.state.showHidden?"Hide hidden items":"Show hidden items"})}),Object(d.jsxs)("div",{className:"EvgaQueue-footer",children:[Object(d.jsx)("div",{className:"EvgaQueue-footer-datasource",children:Object(d.jsxs)("small",{children:["Data source: ",Object(d.jsx)("a",{href:"https://www.element35gaming.com/",target:"_blank",rel:"noreferrer",children:"https://www.element35gaming.com/"})]})}),Object(d.jsx)("div",{className:"EvgaQueue-footer-timer",children:Object(d.jsxs)("small",{children:["Last refresh: ",r.state.lastRefresh]})})]})]})},r.state={loading:!0,showHidden:!1},r}return n}(r.Component);var S=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/evgaQueue",children:"EVGA Queue"})})]})})}),Object(d.jsx)("section",{className:"App-content",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/evgaQueue",children:Object(d.jsx)(k,{})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(u,{})})]})})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),N()}},[[38,1,2]]]);
//# sourceMappingURL=main.eba40fde.chunk.js.map