(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),c=t.n(o);t(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(1),l=t(2),s=t(4),h=t(3),m=(t(14),t(5)),d=(t(15),function(e){Object(s.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={imageLoading:!0},e.handleImageLoaded=e.handleImageLoaded.bind(Object(m.a)(e)),e.image=r.a.createRef(),e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.image.current;e&&e.complete&&this.handleImageLoaded()}},{key:"handleImageLoaded",value:function(){this.state.imageLoading&&this.image.current.complete&&this.setState({imageLoading:!1})}},{key:"handleImageLoadingError",value:function(){throw new Error("img load error")}},{key:"loadingCard",value:function(){if(this.state.imageLoading)return r.a.createElement("div",{className:"loading-card f-sega b--solid bw2 b--black br2"},"Loading")}},{key:"render",value:function(){var e=this.props,a=e.id,t=e.name,n=e.email,o="https://robohash.org/".concat(a,"?size=200x200");return r.a.createElement("div",{className:"card tc dib bg-white br3 pa3 ma3 grow bw2 b--solid b--black"},r.a.createElement("div",{className:"img-block b--solid bw2 b--black br2"},r.a.createElement("img",{alt:"robot",src:o,onLoad:this.handleImageLoaded,onError:this.handleImageLoadingError,ref:this.image})),this.loadingCard(),r.a.createElement("h2",{className:"name",title:t},t),r.a.createElement("p",null,n))}}]),t}(r.a.Component)),u=function(e){Object(s.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(l.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{class:"bg-white"},"OOOOps. Something broken."):this.props.children}}]),t}(r.a.Component),b=function(e){var a=e.robots;return r.a.createElement("div",null,r.a.createElement(u,null,a.map((function(e){return r.a.createElement(d,{key:e.id,id:e.id,name:e.name,email:e.email})}))))},f=function(e){var a=e.searchfield,t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa2 ba b--white bw2 br2",type:"search",placeholder:"Search Robot",value:a,onChange:t}))},g=(t(16),function(e){return r.a.createElement("div",{className:"scroll-block br3"},e.children)}),v=function(e){Object(s.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){if(!e.ok)throw Error(e.status);return e.json()})).then((function(a){e.setState({robots:a})})).catch((function(e){console.error("Error:",e)}))}},{key:"render",value:function(){var e=this.state,a=e.robots,t=e.searchfield,n=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Filter"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(u,null,r.a.createElement(b,{robots:n}))),r.a.createElement("span",{className:"scroll-label f-sega"},"scroll down")):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Filter"),r.a.createElement("h2",{className:"loading-text f2 f-sega"},"Loading"))}}]),t}(n.Component);t(17);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8a21c1db.chunk.js.map