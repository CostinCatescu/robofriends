(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=a(1),i=a(2),l=a(4),u=a(5),m=a(3),h=(r.a.Component,function(e){var t=e.robot;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:"Robot",src:"https://robohash.org/".concat(t.username,"?200x200")}),r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,t.email))}),d=function(e){return r.a.createElement("div",{className:"scroller"},e.children)},f=function(e){var t=e.robots,a=(e.searchItems,t.map((function(e){return r.a.createElement(h,{robot:e,key:e.id})})));return r.a.createElement("div",{className:"cardlist"},[a])},E=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"searchbox"},r.a.createElement("input",{type:"text",className:"input",placeholder:"Search...",onChange:t}))},v=(a(13),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({query:t.target.value})},e.state={error:null,isLoaded:!1,items:[],query:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state.items.filter((function(t){return t.name.toLowerCase().includes(e.state.query.toLowerCase())})),a=this.state,n=a.error,o=a.isLoaded;return n?r.a.createElement("div",null,"Error: ",n.message):o?r.a.createElement("div",{class:"wrapper-container"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"ROBOLIST")),r.a.createElement(E,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(f,{robots:t})),r.a.createElement("hr",null),r.a.createElement("footer",{className:"footer"},"Costin Catescu \xa9 2020")):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,{intro:"Welcome to react!"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ba22e597.chunk.js.map