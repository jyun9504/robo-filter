(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{17:function(e,t,a){e.exports=a(32)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),i=a(8),s=a(5),l=a(15),u=a(16);a(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(1),h=a(2),m=a(4),b=a(3),g=(a(28),a(7)),E=(a(29),function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={imageLoading:!0},e.handleImageLoaded=e.handleImageLoaded.bind(Object(g.a)(e)),e.image=r.a.createRef(),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.image.current;e&&e.complete&&this.handleImageLoaded()}},{key:"handleImageLoaded",value:function(){this.state.imageLoading&&this.image.current.complete&&this.setState({imageLoading:!1})}},{key:"handleImageLoadingError",value:function(){throw new Error("img load error")}},{key:"loadingCard",value:function(){if(this.state.imageLoading)return r.a.createElement("div",{className:"loading-card f-sega b--solid bw2 b--black br2"},"Loading")}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.email,o="https://robohash.org/".concat(t,"?size=200x200");return r.a.createElement("div",{className:"card tc dib bg-white br3 pa3 ma3 grow bw2 b--solid b--black"},r.a.createElement("div",{className:"img-block b--solid bw2 b--black br2"},r.a.createElement("img",{alt:"robot",src:o,onLoad:this.handleImageLoaded,onError:this.handleImageLoadingError,ref:this.image})),this.loadingCard(),r.a.createElement("h2",{className:"name",title:a},a),r.a.createElement("p",null,n))}}]),a}(r.a.Component)),f=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(h.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{class:"bg-white"},"OOOOps. Something broken."):this.props.children}}]),a}(r.a.Component),p=function(e){var t=e.robots;return r.a.createElement("div",null,r.a.createElement(f,null,t.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,name:e.name,email:e.email})}))))},v=function(e){var t=e.searchfield,a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa2 ba b--white bw2 br2",type:"search",placeholder:"Search Robot",value:t,onChange:a}))},O=(a(30),function(e){return r.a.createElement("div",{className:"scroll-block br3"},e.children)}),R=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,a=e.onSearchChange,n=e.robots,o=e.isPending,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Filter"),r.a.createElement("h2",{className:"loading-text f2 f-sega"},"Loading")):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Filter"),r.a.createElement(v,{searchChange:a}),r.a.createElement(O,null,r.a.createElement(f,null,r.a.createElement(p,{robots:c}))),r.a.createElement("span",{className:"scroll-label f-sega"},"scroll down"))}}]),a}(n.Component),y=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){if(!e.ok)throw Error(e.status);return e.json()})).then((function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R),S={searchField:""},j={isPending:!1,robots:[],error:""},w=(a(31),Object(l.createLogger)()),k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(s.d)(k,Object(s.a)(u.a,w));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:C},r.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.cd100178.chunk.js.map