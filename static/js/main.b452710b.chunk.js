(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(37),i=a.n(r),c=(a(81),a(69)),l=a(70),m=a(75),s=a(74),u=a(71),g=a.n(u),A=a(38),f=a.n(A),v=(a(261),function(){return o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{className:"f3 link dim grey underline pa3 pointer"},"Sign Out!"))}),h=(a(262),function(e){var t=e.imageUrl,a=e.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),p=a(72),b=a.n(p),w=a(73),E=a.n(w),d=(a(263),function(){return o.a.createElement("div",{className:"ma4 mt0"},o.a.createElement(b.a,{className:"Tilt br3 shadow-3",options:{max:60},style:{height:150,width:150}},o.a.createElement("div",{className:"Tilt-inner pa3"},o.a.createElement("img",{style:{passingTop:"5px"},alt:"logo",src:E.a}))))}),B=(a(264),function(e){var t=e.onInputChange,a=e.onSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"f3 light-gray"},"This Brain will Detect faces in your images, Git it a try"),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa4 br3 shadow-5"},o.a.createElement("input",{className:"f4 pa2 w-60 center",type:"tex",onChange:t}),o.a.createElement("button",{className:"w-40 grow f4 link ph3 pv2 dib light-gray bg-black",onClick:a},"Detect"))))}),y=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"black f3"},"Damini, your current rank is...."),o.a.createElement("div",{className:"black f1"},"#5"))},D=new f.a.App({apiKey:"51453867894e4f9585b8b78d53891518"}),C={particles:{number:{value:30,density:{enable:!0,value_area:150}}}},I=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).calculateFace=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),o=Number(a.height);return console.log(n,o),{leftCol:t.left_col*n,topRow:t.top_row*o,rightCol:n-t.right_col*n,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.setState({imageUrl:e.state.input}),D.models.predict(f.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFace(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{}},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{className:"particles",params:C}),o.a.createElement(v,null),o.a.createElement(d,null),o.a.createElement(y,null),o.a.createElement(B,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),o.a.createElement(h,{box:this.state.box,imageUrl:this.state.imageUrl}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(265);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t){e.exports="data:image/png;base64,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"},76:function(e,t,a){e.exports=a(266)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.b452710b.chunk.js.map