(this.webpackJsonp=this.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(2),r=n.n(o),s=(n(13),n(3)),c=n(4),l=n(6),u=n(5),m=n(7),h=(n(14),n(15),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={animationClass:"test",text:"Hi, i'm Zain. A mobile development and UI/UX enthusiast.",print:""},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){this.writeText()}},{key:"writeText",value:function(){var t=this,e=this.state.text.split(""),n="",a=setInterval((function(){e.length>=1?"1"===e[0]?(n+="<mark>",e.shift()):"2"===e[0]?(n+="</mark>",e.shift()):(n+=e.shift(),t.setState({print:n})):clearInterval(a)}),90)}},{key:"render",value:function(){return i.a.createElement("div",{style:{flexDirection:"column"}},i.a.createElement("div",{className:this.state.animationClass},i.a.createElement("div",{className:"typing-text"},i.a.createElement("h2",{dangerouslySetInnerHTML:{__html:this.state.print}}))),i.a.createElement("div",null,i.a.createElement("div",{className:"container-footer"},i.a.createElement("p",null,"About Me"))))}}]),e}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.54cd0fe5.chunk.js.map