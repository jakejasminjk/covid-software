(this["webpackJsonpcovid-software"]=this["webpackJsonpcovid-software"]||[]).push([[0],{50:function(e,t,a){e.exports=a(80)},55:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},80:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),i=(a(55),a(33)),l=a(34),s=a(39),m=a(38),d=(a(56),a(108)),u=a(100),p=a(107),v=a(102),h=a(105),g=a(103),f=a(106),E=a(104),b=Object(u.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function w(e){var t=b();t.bullet;return o.a.createElement(v.a,{className:t.root,variant:"outlined"},o.a.createElement(g.a,null,o.a.createElement(E.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Date: ",e.date),o.a.createElement(E.a,{variant:"h5",component:"h2"},"Deaths: ",e.death||"0"),o.a.createElement(E.a,{className:t.pos,color:"textSecondary"},"Negative: ",e.negative),o.a.createElement(E.a,{variant:"body2",component:"p"},"Positive: ",e.positive)),o.a.createElement(h.a,null,o.a.createElement(f.a,{size:"small"},"Learn More")))}var x=Object(u.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(20),textAlign:"center",color:e.palette.text.secondary,height:200}}}));function y(e){x();return o.a.createElement(p.a,{item:!0,xs:3},o.a.createElement(w,{date:e.covid.date,positive:e.covid.positive,negative:e.covid.negative,pending:e.covid.pending,death:e.covid.death}))}var k=Object(u.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(20),textAlign:"center",color:e.palette.text.secondary,height:200}}}));function j(e){console.log("data is: ".concat(e.datas));var t=k();return o.a.createElement(d.a,{maxWidth:"lg"},o.a.createElement("div",{className:t.root},o.a.createElement(p.a,{container:!0,spacing:3},e.datas.map((function(e){return o.a.createElement(y,{key:e.hash,covid:e})})))))}var N=a(109),O=a(110),B=a(111),S=a(36),D=a.n(S),G=Object(u.a)((function(e){return{root:{flexGrow:1,paddingBottom:e.spacing(2)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function W(){var e=G();return o.a.createElement("div",{className:e.root},o.a.createElement(N.a,{position:"static"},o.a.createElement(O.a,null,o.a.createElement(B.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(D.a,null)),o.a.createElement(E.a,{variant:"h6",className:e.title},"Covid Data"),o.a.createElement(f.a,{color:"inherit",href:"#"},"Home"),o.a.createElement(f.a,{color:"inherit",href:"#"},"Info"))))}var M=a(37),z=a.n(M),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;z.a.get("https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/v1/us/daily.json").then((function(t){return e.setState({data:t.data})}))}},{key:"render",value:function(){return console.log(this.state.data),o.a.createElement(o.a.Fragment,null,o.a.createElement(W,null),o.a.createElement(j,{datas:this.state.data}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.6a3b693c.chunk.js.map