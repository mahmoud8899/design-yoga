(()=>{"use strict";var e={n:n=>{var a=n&&n.__esModule?()=>n.default:()=>n;return e.d(a,{a}),a},d:(n,a)=>{for(var s in a)e.o(a,s)&&!e.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:a[s]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};const n=require("@babel/runtime/helpers/asyncToGenerator");var a=e.n(n);const s=require("@babel/runtime/regenerator");var t=e.n(s);const r=require("express");var i=e.n(r);const l=require("morgan");var c=e.n(l);const d=require("body-parser");var o=e.n(d);const m=require("cors");var u=e.n(m);const x=require("react"),f=require("react-dom/server");var h="/image/icon.54b12ddd60fbefaa836fceb3a680a058.png",g="/image/1.e2bc3d06fe5a662aa46374eb966da090.png",p="/image/4.4f82c513aed650aa86c36916fb2007f1.png",j="/image/5.be0d2f1e87d824688846fa2efb070ccb.png",b="/image/7.4b8e311d348b4b062c327f2d5549c6bc.png",v="/image/8.cf38c6a220a6d4e741e2ae153422ee3f.jpg",N="/image/9.9ba2c494b2a9a460140b6c5e2af275ec.png",y="/image/10.ad1d94233ac1490a05808de0a0ed5a33.jpeg",w="/image/11.cc40d387fcb2d1b498f97f10bf56f62e.jpeg",_="/image/13.4953ca760fa3f5c678991e33c7b73962.jpeg",k="/image/2.be048400661bd90fd361df2e535a634c.png",O="/image/3.5671f520e1c0830b6c4df9e7564d362e.png";const C=require("react/jsx-runtime");var P=function(){return(0,C.jsx)("div",{className:"iconwidth",children:(0,C.jsx)("img",{src:h,className:"Svg"})})},T={title:"fitness",icon:h,Listnavbar:[{_id:5,name:"home",link:"#home"},{_id:1,name:"about",link:"#about"},{_id:2,name:"blog",link:"#blog"},{_id:3,name:"training",link:"#training"},{_id:4,name:"event",link:"#event"},{_id:6,name:"contact",link:"#contact"}]},S=function(e){var n=e.AddStyle;return(0,C.jsx)("ul",{className:n||"flex align-items justify-content Ex",children:T.Listnavbar.map((function(e,n){return(0,C.jsx)("a",{href:e.link,className:"",children:(0,C.jsx)("li",{className:"colorscreenx name font-family font-family-title cursor white extra text-transform",children:e.name})},n)}))})},q=function(e){var n=e.className,a=e.type,s=e.placeholder;return(0,C.jsx)("input",{className:n,type:a,placeholder:s})},E=function(e){var n=e.Title,a=e.Classname;return(0,C.jsx)("button",{className:a,children:n})},A=function(){return(0,C.jsx)("footer",{children:(0,C.jsxs)("div",{className:"flex  content align-items flexwrap footerbackground padding",children:[(0,C.jsx)("div",{className:"__Card  flex content padding",children:(0,C.jsx)(P,{})}),(0,C.jsx)("div",{className:"__Card  padding",children:(0,C.jsx)(S,{AddStyle:"flex flex-column content ChangeXp"})}),(0,C.jsxs)("div",{className:"__Card  flex flex-column content align-items flexwrap padding",children:[(0,C.jsx)("h2",{className:"font-test titlename whitecolor",children:"Subscribe Our "}),(0,C.jsx)("h2",{className:"font-test titlename whitecolor",children:"Newsletter"}),(0,C.jsx)(q,{className:"input border-radiusscreen  mar width padding__left backgroundeee",type:"text",placeholder:"your email"}),(0,C.jsx)(E,{Title:"subscribe",Classname:"cursor buttom whitebackground border-radiusscreen  des font-family-des  outline "})]})]})})},D={title:"Yoga Breathing",title2:"or Pranayama",des:"duis aute dotor in repehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint accaecat cupidatat",image:v,button:"learn more"},L=function(){return(0,C.jsxs)("div",{className:"flex align-items justify-content flexwrap padding ",children:[(0,C.jsxs)("div",{className:"box flex flex-column Order mar",children:[(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:D.title}),(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:D.title2}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)("p",{className:"des font-family-des text-transform colorscreenx ",children:D.des})}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)(E,{Title:D.button,Classname:" cursor buttom backgroundscreen border-radiusscreen  des font-family-des colorscreenx outline"})})]}),(0,C.jsx)("div",{className:"box mar flex flex-end",children:(0,C.jsx)("img",{src:D.image,width:"100%",height:"auto",className:"ImageSize border-radiusscreen box-shadow"})})]})},G=function(){return(0,C.jsxs)("div",{className:"flex align-items flex-column flexwrap content padding addImage ",id:"contact",children:[(0,C.jsxs)("div",{className:"__Card mar",children:[(0,C.jsx)("h1",{className:"font-test titlename colorscreenx ext-align",children:"Get in Touch"}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)("p",{className:"des font-family-des colorscreenx ext-align",children:"Neaue laorept suspendisse Interdum consectetur liber id taurious nislfincidunt. Dictum "})})]}),(0,C.jsxs)("div",{className:"__Card flex align-items flex-column flexwrap content mar",children:[(0,C.jsx)(q,{className:"input border-radiusscreen  mar width padding__left backgroundeee",type:"text",placeholder:"your name"}),(0,C.jsx)(q,{className:"input border-radiusscreen  mar width padding__left backgroundeee",type:"text",placeholder:"gender"}),(0,C.jsx)("textarea",{placeholder:"message",className:"outline border-radiusscreen  mar width height padding__left backgroundeee"}),(0,C.jsx)(E,{Title:"send message",Classname:" cursor buttom backgroundeee border-radiusscreen  des font-family-des colorscreenx outline"})]})]})},Y=function(){return(0,C.jsxs)("div",{className:"position",id:"home",children:[(0,C.jsx)("div",{className:"",children:(0,C.jsx)("img",{src:O,width:"100%",height:"auto",className:"SizeXpxp"})}),(0,C.jsxs)("div",{className:"fix FlexSize",children:[(0,C.jsx)("img",{src:k,width:"60%",height:"auto"}),(0,C.jsxs)("div",{className:"flex flex-column flixContainer",children:[(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:"Balance Your"}),(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:"Body and Mind"}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)("p",{className:"des font-family-des colorscreenx",children:"Duis aute ture\n    in reorenendenun voluolate ve\n    esse cillum dolore eu fugiat nulla pariatur. Excepteui sint occaecat cupidatat"})}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)(E,{Title:"join us now",Classname:"\ncursor\nbuttom\nwhitebackground\nborder-radiusscreen \ndes\nfont-family-des\ncolorscreenx\noutline"})})]})]})]})},F={title:"Galery",des:"fusce ut placerat orci nulla pellentes fusce ut  orci nulla pellentes",data:[{_id:1,name:"Facilis Gravida",image:y,des:"Alacus vostihulum sod Amor nur gravida guis blandit turn"},{_id:2,name:"Facilis Gravida",image:w,des:"Alacus vostihulum sod Amor nur gravida guis blandit turn"},{_id:3,name:"Facilis Gravida",image:_,des:"Alacus vostihulum sod Amor nur gravida guis blandit turn"}]},B=function(){return(0,C.jsxs)("div",{className:"flex content align-items flexwrap padding ",id:"blog",children:[(0,C.jsxs)("div",{className:"__Card mar flex content align-items flex-column",children:[(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:F.title}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsxs)("p",{className:"des font-family-des colorscreenx ext-align",children:[" ",F.des," "]})})]}),(0,C.jsx)("div",{className:"width flex justify-content align-items flexwrap mar padding",children:F.data.map((function(e,n){return(0,C.jsxs)("div",{className:"__Card flex content align-items flex-column  mar border-radiusscreen overflow box-shadow",children:[(0,C.jsx)("img",{src:e.image,width:"100%",height:"200px"}),(0,C.jsxs)("div",{className:"padding",children:[(0,C.jsx)("h2",{className:"name font-test colorscreenx ext-align",children:e.name}),(0,C.jsx)("div",{className:"",children:(0,C.jsxs)("p",{className:"des font-family-des colorscreenx ext-align",children:[" ",e.des," "]})})]})]},n)}))})]})},I={title:"Join Now and",title2:"Get 50% Off",image:N,des:"Duis aute irure dolor in reprehenderit in voluptate veli\n    cillum dolore eu tustat nulla pariatur. Fxcenteur\n    sint occaecat cupidatat",button:"join now"},M=function(){return(0,C.jsxs)("div",{className:"flex justify-content align-items flexwrap padding ",children:[(0,C.jsx)("div",{className:"box mar flex flex-end",children:(0,C.jsx)("img",{src:I.image,width:"100%",height:"auto",className:"ImageSize"})}),(0,C.jsxs)("div",{className:"box flex flex-column  mar",children:[(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:I.title}),(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:I.title2}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)("p",{className:"des font-family-des colorscreenx",children:I.des})}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)(E,{Title:I.button,Classname:" cursor\nbuttom backgroundscreen border-radiusscreen  des font-family-des colorscreenx outline"})})]})]})},z=[{_id:1,title:"Program 1",des:"sint accaecat cupidatat non",image:p},{_id:2,title:"Program 2",des:"sint accaecat cupidatat non",image:j},{_id:2,title:"Program 3",des:"sint accaecat cupidatat non",image:b}],H=function(){return(0,C.jsx)("div",{className:"flex content align-items flexwrap  padding",id:"event",children:null==z?void 0:z.map((function(e,n){return(0,C.jsxs)("div",{className:"__Card flex flex-column align-items content padding",children:[(0,C.jsx)("img",{src:e.image,width:"100px",height:"100px"}),(0,C.jsx)("h2",{className:"name font-family-title text-transform",children:e.title}),(0,C.jsx)("div",{className:"",children:(0,C.jsx)("p",{className:"des font-family-des text-transform colorscreenx",children:e.des})})]},n)}))})},R={title:"Balance Your",title2:"Body and Mind",des:"Duis aute ture\n    in reorenendenun voluolate ve\n    esse cillum dolore eu fugiat nulla pariatur. Excepteui sint occaecat cupidatat",buttom:"join us now",image:g},U=function(){return(0,C.jsxs)("div",{className:"flex justify-content align-items flexwrap padding",id:"about",children:[(0,C.jsx)("div",{className:"box mar flex flex-end padding",children:(0,C.jsx)("div",{className:"border-radiusscreen",children:(0,C.jsx)("img",{src:R.image,width:"100%",height:"auto"})})}),(0,C.jsxs)("div",{className:"box flex flex-column mar",children:[(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:R.title}),(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:R.title2}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)("p",{className:"des font-family-des colorscreenx",children:R.des})}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)(E,{Title:R.buttom,Classname:" cursor buttom backgroundscreen border-radiusscreen  des font-family-des colorscreenx outline"})})]})]})};const X=require("react-player");var J=e.n(X),V=function(){return(0,C.jsxs)("div",{className:"flex justify-content align-items flexwrap padding",id:"training",children:[(0,C.jsx)("div",{className:"box mar flex",children:(0,C.jsx)(J(),{url:"https://www.youtube.com/watch?v=_Mx24iENIEY"})}),(0,C.jsxs)("div",{className:"box mar flex flex-column ",children:[(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:"Yoga Training"}),(0,C.jsx)("h2",{className:"font-test titlename colorscreenx",children:"Video Showreel"}),(0,C.jsx)("div",{className:"mar",children:(0,C.jsx)("p",{className:"des font-family-des colorscreenx",children:"Dus aute rure dolor in reprenenderit in voluntate vell\n    esse cillum dolore eu fugiat nulla pariatur. Excepteui"})})]})]})};function W(){return(0,C.jsxs)("div",{children:[(0,C.jsx)(Y,{}),(0,C.jsx)(U,{}),(0,C.jsx)("div",{className:"Link backgroundscreen margin-top "}),(0,C.jsx)(H,{}),(0,C.jsx)("div",{className:"margin-top"}),(0,C.jsx)("div",{className:"Link backgroundscreen margin-top "}),(0,C.jsx)(L,{}),(0,C.jsx)("div",{className:"Link backgroundscreen margin-top "}),(0,C.jsx)(M,{}),(0,C.jsx)("div",{className:"Link backgroundscreen margin-top "}),(0,C.jsx)(B,{}),(0,C.jsx)("div",{className:"Link backgroundscreen margin-top "}),(0,C.jsx)(V,{}),(0,C.jsx)("div",{className:"Link backgroundscreen margin-top "}),(0,C.jsx)(G,{})]})}const K=require("@babel/runtime/helpers/defineProperty");var Q=e.n(K);const Z=require("@babel/runtime/helpers/slicedToArray");var $=e.n(Z);function ee(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,s)}return a}function ne(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(a),!0).forEach((function(n){Q()(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var ae=function(e){e.tilte;var n=(0,x.useState)({menubar:"menu-btn",hidden:"hidden"}),a=$()(n,2),s=a[0],t=a[1];return(0,C.jsxs)("nav",{className:"flex  align-items flexwrap ",children:[(0,C.jsxs)("div",{className:"__Card flex align-items padding",children:[(0,C.jsxs)("div",{className:"flex align-items flex-column",children:[(0,C.jsx)(P,{}),(0,C.jsx)("h2",{className:"font-test titlename colorscreenx FirstEL",children:"Yoga Ep"})]}),(0,C.jsx)("div",{onClick:function(){"menu-btn"===s.menubar?t(ne(ne({},s),{},{menubar:"menu-btn open",hidden:"hidden open"})):t(ne(ne({},s),{},{menubar:"menu-btn",hidden:"hidden"}))},className:"icons___",children:(0,C.jsx)("div",{className:s.menubar,children:(0,C.jsx)("div",{className:"menu-btn__burger"})})})]}),(0,C.jsx)("div",{className:"__Card padding ",children:(0,C.jsx)("div",{className:s.hidden,children:(0,C.jsx)(S,{})})})]})};function se(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(ae,{}),(0,C.jsx)(W,{}),(0,C.jsx)(A,{})]})}var te=i()(),re=process.env.PORT||4e3;te.use([i().json(),o().urlencoded({extended:!0}),c()("dev"),u()({origin:"*",credentials:!0})]),te.use("/*",(function(e,n,a){n.header("Access-Control-Allow-Origin","*"),n.setHeader("Last-Modified",(new Date).toUTCString()),a()})),te.use(i().static("build")),te.get("/*",function(){var e=a()(t().mark((function e(n,a){var s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0,n=(0,f.renderToString)((0,C.jsx)(se,{})),s='<!DOCTYPE html>\n    <html lang="en-us" >\n    <head>\n    <title>Yoga</title>         \n    <meta property="og:description" content=" Här finns även tjejgym. Gymmet i Uppsala har, som alla våra andra gym, öppet dygnet runt för alla våra medlemmar, så att du kan träna när det passar dig." />\n    <meta property="og:image" content='.concat(h,'  />\n    <meta property="og:image:url"  content=').concat(h,'  />\n    <meta property="twitter:image" content=').concat(h,'  />\n    <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet">\n    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">\n    <link rel="stylesheet" type="text/css" href="/css/main.css" />\n    <link rel="icon" type="image/x-icon" href=').concat(h,'>\n    <link rel="canonical" href="/" />\n   </head>\n    <body >\n     <div id="fitness">\n         ').concat(n,'\n      </div>\n      <script src="./client/bundle.js" defer ><\/script>\n    </body>\n  </html>\n    '),a.contentType("text/html"),a.send(s);case 3:case"end":return e.stop()}var n}),e)})));return function(n,a){return e.apply(this,arguments)}}()),te.listen(re,(function(){return console.log("server is runing...".concat(re))}))})();