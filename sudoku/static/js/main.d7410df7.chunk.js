(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{13:function(e,r,t){},16:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t.n(n),c=t(8),u=t.n(c),i=(t(13),t(3)),o=(t(14),t(6)),s=t(7);function l(e){var r=e.map((function(e){return e.slice()}));function t(e,t,n){function a(e){return(e+1)%3===0?(e+1)/3-1:parseInt((e+1)/3)}var c=r.slice(3*a(e),3*a(e)+3).map((function(e){return e.slice(3*a(t),3*a(t)+3)})).flat();return!r[e].includes(n)&&!r.map((function(e){return e[t]})).includes(n)&&!c.includes(n)}function n(e){if(e.length<1)return!0;for(var a=e[0],c=a.x,u=a.y,i=1;i<10;i++)if(!0===t(c,u,i)){if(r[c][u]=i,!0===n(e.slice(1)))return!0;r[c][u]=0}return!1}return function(){for(var e=r.map((function(e){return e.slice()})),t=r.map((function(e,t){return r.map((function(e){return e[t]}))})),n=[],a=0;a<3;a++)for(var c=function(e){n.push(r.slice(3*a,3*a+3).map((function(r){return r.slice(3*e,3*e+3)})).flat())},u=0;u<3;u++)c(u);for(var i=0,o=[].concat(Object(s.a)(e),Object(s.a)(t),n);i<o.length;i++){var l=o[i].filter((function(e){return 0!==e}));if(new Set(l).size!==l.length)throw new TypeError("wrong input")}}(),n(function(){var e,t=[],n=Object(o.a)(r.keys());try{for(n.s();!(e=n.n()).done;){var a,c=e.value,u=Object(o.a)(r[c].keys());try{for(u.s();!(a=u.n()).done;){var i=a.value;0===r[c][i]&&t.push({x:c,y:i})}}catch(s){u.e(s)}finally{u.f()}}}catch(s){n.e(s)}finally{n.f()}return t}()),r.forEach((function(e){return e.forEach((function(e){if(0===e)throw new Error("No solution can be found")}))})),r}var f=t(0),d=function(){var e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],r=a.a.useRef(null),t=a.a.useState(e),n=Object(i.a)(t,2),c=n[0],u=n[1],o=a.a.useState(!1),s=Object(i.a)(o,2),d=s[0],v=s[1],j=a.a.useRef(null),h=a.a.useRef([0,0]),p=a.a.useState(!1),b=Object(i.a)(p,2),m=b[0],w=b[1];function O(e){var r=e.target.dataset,t=r.row,n=r.col;return"deleteContentBackward"===e.nativeEvent.inputType?(u((function(e){var r=e.map((function(e){return e.slice()}));return r[t][n]=0,r})),!1):!1!==/\d$/.test(e.target.value)&&void u((function(r){var a=r.map((function(e){return e.slice()}));return a[t][n]=Number(e.target.value.slice(-1)),a}))}function g(e,r){var t=Object(i.a)(h.current,2),n=t[0];return t[1]===r&&n===e?j:null}return a.a.useEffect((function(){var e,r;null===(e=j.current)||void 0===e||null===(r=e.focus)||void 0===r||r.call(e)}),[c]),Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)("div",{ref:r,className:"container animate__animated animate__faster",onKeyDown:function(e){var r=e.code.toLowerCase(),t=Object(i.a)(h.current,2),n=t[0],a=t[1];if(r.startsWith("arrow")){if("arrowup"===r){if(n-1<0)return!1;h.current=[n-1,a]}else if("arrowdown"===r){if(n+1>8)return!1;h.current=[n+1,a]}else if("arrowleft"===r){if(a-1<0)return!1;h.current=[n,a-1]}else if("arrowright"===r){if(a+1>8)return!1;h.current=[n,a+1]}u(c.slice())}},children:c.map((function(e,r){return Object(f.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(f.jsx)("div",{className:r===h.current[0]&&t===h.current[1]?"col active":"col",children:Object(f.jsx)("div",{className:"word",children:Object(f.jsx)("input",{ref:g(r,t),type:"tel",onClick:function(e){var r=e.target.dataset,t=r.row,n=r.col;h.current=[+t,+n],u(c.slice())},"data-row":r,"data-col":t,value:0===e?"":e,onChange:O})})},Math.random())}))},Math.random())}))}),Object(f.jsx)("button",{disabled:!!d,style:{backgroundColor:m?"red":"greenyellow"},onClick:function(){if(!1===m){v(!0);try{u(l(c))}catch(t){return r.current.classList.add("animate__shakeX"),r.current.classList.add("danger"),u(e),setTimeout((function(){r.current.classList.remove("animate__shakeX"),r.current.classList.remove("danger")}),800),h.current=[0,0],v(!1),!1}}else u(e),h.current=[0,0];w(!m),v(!1)},children:m?"Reset":"Solve"})]})},v=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Sudoku Solver"}),Object(f.jsx)(d,{})]})},j=function(){return Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(v,{})})};u.a.render(Object(f.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d7410df7.chunk.js.map
