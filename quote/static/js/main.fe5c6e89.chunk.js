(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),o=c(4),s=c.n(o),a=c(2),i=c(0),u=function(e){var t=e.theme,c=e.setTheme,r=e.randomColor,o=n.a.useState({quote:"",author:""}),s=Object(a.a)(o,2),u=s[0],b=s[1],l=n.a.useState(1),h=Object(a.a)(l,2),f=h[0],j=h[1],d=n.a.useRef([]);function m(e){var t=e[parseInt(Math.random()*e.length)];void 0!==t&&b(t)}return n.a.useEffect((function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(e){d.current=e.quotes,m(d.current)})).catch((function(e){throw new Error(e)}))}),[]),Object(i.jsxs)("div",{id:"quote-box",children:[Object(i.jsxs)("div",{className:"textbox",style:{opacity:f},children:[Object(i.jsxs)("div",{id:"text",children:[Object(i.jsx)("i",{className:"bi bi-chat-square-quote"})," ",u.quote]}),Object(i.jsxs)("div",{id:"author",children:[" - ",u.author]})]}),Object(i.jsxs)("div",{className:"shares",children:[Object(i.jsx)("button",{type:"button",id:"new-quote",style:{backgroundColor:t},onClick:function(){j(0),setTimeout((function(){c(r()),m(d.current),j(1)}),500)},children:"New Quote"}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)("a",{id:"tweet-quote",className:"iconlinks",style:{backgroundColor:t,color:"#ffffff"},title:"Tweet this quote!",href:"https://www.twitter.com/intent/tweet",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("i",{className:"bi bi-twitter"})}),Object(i.jsx)("a",{id:"facebook-quote",className:"iconlinks",style:{backgroundColor:t,color:"#ffffff"},title:"Share it on Facebook",href:"https://www.facebook.com",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("i",{className:"bi bi-facebook"})})]})]}),Object(i.jsxs)("div",{className:"info",children:["By"," ",Object(i.jsx)("a",{href:"https://zyzcfzs.github.io/",target:"_blank",rel:"noreferrer",children:"zyzcfzs"})]})]})};c(10);function b(){return"#"+parseInt(16777215*Math.random()).toString(16)}var l=function(){var e=n.a.useState(b()),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("div",{className:"background",style:{color:c,background:c},children:Object(i.jsx)(u,{theme:c,setTheme:r,randomColor:b})})})},h=function(){return Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(l,{})})};s.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.fe5c6e89.chunk.js.map