(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var a=t(8),r=t(0),i=t.n(r),o=t(7),s=t.n(o),c=(t(39),t(29)),d=(t(40),t(74)),l=t(78),u=t(80),f=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"center","& .MuiTextField-root":{width:"100%"},padding:e.spacing(1)},paper:{width:"100%",padding:e.spacing(1)}}}));function h(e){var n=f();return Object(a.jsx)("div",{className:n.root,children:Object(a.jsx)(l.a,{elevation:3,className:n.paper,children:Object(a.jsx)(u.a,{id:"editor",label:"Editor",multiline:!0,rows:10,variant:"outlined",value:e.markdown,onChange:e.handleMarkdown})})})}var p=t(28),b=t.n(p),m=t(21),w=t.n(m);w.a.setOptions({breaks:!0});var j=new w.a.Renderer,g=Object(d.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:e.spacing(2)},paper:{padding:e.spacing(2)}}}));function v(e){var n=g();return Object(a.jsx)("div",{className:n.root,children:Object(a.jsx)(l.a,{elevation:3,className:n.paper,children:Object(a.jsx)("div",{id:"preview",className:"content",dangerouslySetInnerHTML:{__html:b.a.sanitize(w()(e.markdown,{renderer:j}))}})})})}var k="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",O=function(){var e=i.a.useState(""),n=Object(c.a)(e,2),t=n[0],o=n[1];return Object(r.useEffect)((function(){o(k)}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{markdown:t,handleMarkdown:function(e){o(e.target.value)}}),Object(a.jsx)(v,{markdown:t})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,82)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),i(e),o(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.3c0940f8.chunk.js.map