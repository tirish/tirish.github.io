(this["webpackJsonptirish.github.io"]=this["webpackJsonptirish.github.io"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),i=n.n(c),s=(n(25),n(26),n(14)),u=n(2),o=n(0);function d(){return Object(o.jsx)("div",{children:"Home"})}var l=n(7),j=n(10),h=n(11),b=n(13),m=n(12),p=window.localStorage||{};function O(e,t){p[e]=JSON.stringify(t)}n(28),n(29);function f(e){var t=e.onClick,n=e.className,a=e.children;return Object(o.jsx)("button",{type:"button",className:"ButtonLink-btn ".concat(n),onClick:t,children:a})}var x=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).onChange=function(e){var t,n=(null===e||void 0===e||null===(t=e.currentTarget)||void 0===t?void 0:t.value)||"";a.setState({rawValue:n})},a.onSave=function(){var e,t,n=(a.state.rawValue||"").trim();null===(e=(t=a.props).onSave)||void 0===e||e.call(t,n),a.setState({isEditMode:!1})},a.setEditMode=function(e){e?a.setState({rawValue:a.props.rawValue||"",isEditMode:!0}):a.setState({isEditMode:!1})},a.render=function(){return a.state.isEditMode?Object(o.jsxs)("div",{className:"QueueTextbox-editmode",children:[Object(o.jsx)("input",{className:"QueueTextbox-textbox",type:"text",value:a.state.rawValue,onChange:function(e){return a.onChange(e)},placeholder:a.props.placeholder}),Object(o.jsxs)("span",{className:"QueueTextbox-buttonbar",children:[Object(o.jsx)(f,{onClick:function(){return a.onSave()},children:"Save"})," | ",Object(o.jsx)(f,{onClick:function(){return a.setEditMode(!1)},children:"Cancel"})]})]}):Object(o.jsxs)("div",{className:"QueueTextbox-displaymode",children:[Object(o.jsx)("span",{className:"QueueTextbox-display",children:a.props.display||""}),Object(o.jsx)(f,{className:"QueueTextbox-editlink",onClick:function(){return a.setEditMode(!0)},children:a.props.display?"Edit":"Set"})]})},a.state={rawValue:"",isEditMode:!1},a}return n}(a.Component),g=function(e){var t={hide:!1,myQueue:{}},n=function(e){var t=p[e];try{return JSON.parse(t)}catch(n){return t}}(e)||{};return Object.assign(t,n),t},v=function(e,t){if(!e)return"";var n=new Date(e);return t?n.toLocaleString("en-US",{timeZone:"UTC"}):n.toLocaleString("en-US")},w=["3090","3080 Ti","3080","3070 Ti","3070","3060 Ti","3060","Misc"],y=function(e){for(var t=0;t<w.length;t++)if(e.name.indexOf(w[t])>=0)return w[t];return"Misc"},S=/^(\d{1,2}\/\d{1,2}\/\d{4}\s+\d{1,2}:\d{2}:\d{2}\s+[AP]M)(?:\s+PT)$/,k=function(e,t){if((e=e||{}).raw){var n=e.raw.match(S);if(n&&n.length){var a=n[1]+" GMT+0000",r=new Date(a);if(e.display=r.toLocaleString("en-US",{timeZone:"UTC"}),t){var c=new Date(t),i=r.valueOf()-c.valueOf(),s=i/1e3/60,u="min";s>=60&&(s/=60,u="hr"),s>=24&&(s/=24,u="days"),s=s<10?s.toPrecision(2):Math.floor(s),s="(".concat(i>0?"+":"").concat(s," ").concat(u,")"),i<0?e.display="Notify Sent "+s:e.display+=" "+s}}else e.raw="",e.display=""}else e.display="";return e},Q=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).refreshData=function(){var e=Object(h.a)(a);fetch("https://e35-queue-tracker-api.herokuapp.com/product/?sortBy=sku:desc").then((function(e){return e.json()})).then((function(t){t=t.map((function(e){return{sku:e.sku,name:e.name,productLink:"https://www.evga.com/products/product.aspx?pn="+e.sku,timestamp:v(e.timestampNA,!0),timestampNA:e.timestampNA,updated:(t=e.updatedAt,t?new Date(t).toLocaleDateString("en-US"):""),hide:!!g(e.sku).hide||!e.timestampNA,myQueue:k(g(e.sku).myQueue,e.timestampNA),category:y(e)};var t})),e.setState({data:t,error:!1,lastRefresh:v(new Date)})})).catch((function(){return e.setState({error:!0})})).finally((function(){return e.setState({loading:!1})}))},a.componentDidMount=function(){a.refreshData()},a.toggleShowHidden=function(){a.setState((function(e){return{showHidden:!e.showHidden}}))},a.toggleSku=function(e){var t=g(e);t.hide=!t.hide,O(e,t);var n=a.state.data.map((function(n){return n.sku===e?Object(l.a)(Object(l.a)({},n),{},{hide:t.hide}):n}));a.setState({data:n})},a.updateMyQueue=function(e,t){var n=g(e);n.myQueue=n.myQueue||{},n.myQueue.raw=t,O(e,n);var r=a.state.data.map((function(n){return n.sku===e?Object(l.a)(Object(l.a)({},n),{},{myQueue:k(Object(l.a)(Object(l.a)({},n.myQueue),{},{raw:t}),n.timestampNA)}):n}));a.setState({data:r})},a.renderCategoryRows=function(e){var t=a.state.data.filter((function(t){return t.category===e})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{show:!e.hide||a.state.showHidden})}));return t.some((function(e){return e.show}))?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("tr",{className:"EvgaQueue-table-category-row",children:Object(o.jsx)("th",{colSpan:6,children:e})}),t.map((function(e){return e.show&&Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:e.productLink,target:"_blank",rel:"noreferrer",children:e.sku})}),Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.timestamp}),Object(o.jsx)("td",{children:Object(o.jsx)(x,{rawValue:e.myQueue.raw,display:e.myQueue.display,onSave:function(t){return a.updateMyQueue(e.sku,t)},placeholder:"M/d/yyyy h:mm:ss aa PT"})}),Object(o.jsx)("td",{children:e.updated}),Object(o.jsx)("td",{children:Object(o.jsx)(f,{onClick:function(){return a.toggleSku(e.sku)},children:e.hide?"Show":"Hide"})})]},e.sku)}))]}):Object(o.jsx)(o.Fragment,{})},a.render=function(){return a.state.loading?Object(o.jsx)("span",{children:"Loading..."}):a.state.error?Object(o.jsx)("span",{children:"Encountered error"}):Object(o.jsxs)("div",{className:"EvgaQueue-container",children:[Object(o.jsxs)("table",{className:"EvgaQueue-table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Part Number"}),Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Queue Timestamp (PT)"}),Object(o.jsx)("th",{children:"My Queue (PT)"}),Object(o.jsx)("th",{children:"Last Update"}),Object(o.jsx)("th",{children:"Toggle"})]})}),Object(o.jsx)("tbody",{children:w.map((function(e){return a.renderCategoryRows(e)}))})]}),Object(o.jsx)("div",{className:"EvgaQueue-showhidden-toggle-container",children:Object(o.jsx)(f,{className:"EvgaQueue-showhidden-toggle",onClick:function(){return a.toggleShowHidden()},children:a.state.showHidden?"Hide hidden items":"Show hidden items"})}),Object(o.jsxs)("div",{className:"EvgaQueue-footer",children:[Object(o.jsx)("div",{className:"EvgaQueue-footer-datasource",children:Object(o.jsxs)("small",{children:["Data source: ",Object(o.jsx)("a",{href:"https://www.element35gaming.com/",target:"_blank",rel:"noreferrer",children:"https://www.element35gaming.com/"})]})}),Object(o.jsx)("div",{className:"EvgaQueue-footer-timer",children:Object(o.jsxs)("small",{children:["Last refresh: ",a.state.lastRefresh]})})]})]})},a.state={loading:!0,showHidden:!1},a}return n}(a.Component);var N=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/evgaQueue",children:"EVGA Queue"})})]})})}),Object(o.jsx)("section",{className:"App-content",children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{path:"/evgaQueue",children:Object(o.jsx)(Q,{})}),Object(o.jsx)(u.a,{path:"/",children:Object(o.jsx)(d,{})})]})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),T()}},[[38,1,2]]]);
//# sourceMappingURL=main.808f5629.chunk.js.map