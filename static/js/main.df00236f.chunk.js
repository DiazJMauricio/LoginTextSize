(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),c=(a(10),a(1)),l=(a(11),function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],i=a[1];return o.a.createElement("input",{type:"text",value:r,onChange:function(t){i(t.target.value),e.onChange(t.target.value)},placeholder:"Write here..."})}),u=function(e){var t={fontSize:e.size+"px",width:e.boxWidth+"px",fontFamily:e.fontFamily};return o.a.createElement("p",{className:"TextLabel",style:t},e.text)},m=function(e){var t=void 0!==e.boxWidth?e.boxWidth:820,a=void 0!==e.maxSize?e.maxSize:200,r=void 0!==e.fontFamily?e.fontFamily:"Courier",i=Object(n.useState)(""),m=Object(c.a)(i,2),s=m[0],d=m[1],v=Object(n.useState)(a),h=Object(c.a)(v,2),f=h[0],p=h[1],x=Object(n.useRef)(null);return o.a.createElement("div",{className:"controller"},o.a.createElement("canvas",{ref:x}),o.a.createElement(u,{text:s,size:f,boxWidth:t,fontFamily:r}),o.a.createElement("div",{className:"InputText"},o.a.createElement(l,{onChange:function(e){var n=x.current.getContext("2d"),o=f;n.font=o+"px "+r;var i=n.measureText(e).width;i>t&&o>20?o/=1.5:(n.font=1.5*o+"px "+r,!((i=n.measureText(e).width)>t)&&o<a&&(o*=1.5)),d(e),p(o)}})))};var s=function(){var e=Object(n.useState)(820),t=Object(c.a)(e,2),a=t[0],r=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(m,{boxWidth:a}),o.a.createElement("input",{type:"range",min:"420",max:"820",value:a,onChange:function(e){r(e.target.value)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.df00236f.chunk.js.map