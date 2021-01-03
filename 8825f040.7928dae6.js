(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),o=(n(0),n(251)),i={id:"extending_configs",title:"Extending Configs"},c={unversionedId:"patterns/extending_configs",id:"patterns/extending_configs",isDocsHomePage:!1,title:"Extending Configs",description:"Example application",source:"@site/docs/patterns/extending_configs.md",slug:"/patterns/extending_configs",permalink:"/docs/next/patterns/extending_configs",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/extending_configs.md",version:"current",lastUpdatedBy:"romesc",lastUpdatedAt:1609708007,sidebar:"docs",previous:{title:"Structured Configs example",permalink:"/docs/next/patterns/instantiate_objects/structured_config"},next:{title:"Configuring Experiments",permalink:"/docs/next/patterns/configuring_experiments"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/patterns/extending_configs"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20applications-informational",alt:"Example application"})))),Object(o.b)("p",null,"A common pattern is to extend an existing config, overriding and/or adding new config values to it.\nThe extension is done by including the base configuration, and then overriding the chosen values in the current config."),Object(o.b)("h4",{id:"extending-a-config-from-the-same-config-group"},"Extending a config from the same config group:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql \n\n\n\n\n\n"))),Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0}),"defaults:\n  - base_mysql\n\nuser: omry\npassword: secret\nport: 3307\nencoding: utf8\n"))),Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/base_mysql.yaml"',title:'"db/base_mysql.yaml"'}),"host: localhost\nport: 3306\nuser: ???\npassword: ???\n\n\n\n")))),Object(o.b)("p",null,"Output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0}),"db:\n  host: localhost   # from db/base_mysql\n  port: 3307        # overriden by db/mysql.yaml \n  user: omry        # populated by db/mysql.yaml\n  password: secret  # populated by db/mysql.yaml\n  encoding: utf8    # added by db/mysql.yaml\n")),Object(o.b)("h4",{id:"extending-a-config-from-another-config-group"},"Extending a config from another config group:"),Object(o.b)("p",null,"To extend a config from a different config group, include it using an absolute path (/), and override\nthe package to ",Object(o.b)("inlineCode",{parentName:"p"},"_here_"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0}),"defaults:\n  - /db_schema/base_mysql@_here_\n")),Object(o.b)("p",null,"It is otherwise identical to extending a config within the same config group."))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,u=d["".concat(i,".").concat(b)]||d[b]||m[b]||o;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);