(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),o=(a(0),a(270)),i={id:"changes_to_package_header",title:"Changes to Package Header"},c={unversionedId:"upgrades/1.0_to_1.1/changes_to_package_header",id:"upgrades/1.0_to_1.1/changes_to_package_header",isDocsHomePage:!1,title:"Changes to Package Header",description:"Hydra 1.0 introduced the package header and required everyone to specify it in their configs.",source:"@site/docs/upgrades/1.0_to_1.1/changes_to_package_header.md",slug:"/upgrades/1.0_to_1.1/changes_to_package_header",permalink:"/docs/next/upgrades/1.0_to_1.1/changes_to_package_header",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/1.0_to_1.1/changes_to_package_header.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1621881184,formattedLastUpdatedAt:"5/24/2021",sidebar:"docs",previous:{title:"Defaults List interpolation",permalink:"/docs/next/upgrades/1.0_to_1.1/defaults_list_interpolation"},next:{title:"Automatic schema-matching",permalink:"/docs/next/upgrades/1.0_to_1.1/automatic_schema_matching"}},l=[{value:"Migration",id:"migration",children:[]},{value:"Compatibility with both Hydra 1.0 and 1.1",id:"compatibility-with-both-hydra-10-and-11",children:[]}],d={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra 1.0 introduced the package header and required everyone to specify it in their configs.\nThis was done to facilitate a transition from a model where the packages are global\nto a model where - by default - package are derived from the config group."),Object(o.b)("p",null,"e.g: Change of the default package for ",Object(o.b)("inlineCode",{parentName:"p"},"server/db/mysql.yaml")," from ",Object(o.b)("inlineCode",{parentName:"p"},"_global_")," to ",Object(o.b)("inlineCode",{parentName:"p"},"server.db"),"."),Object(o.b)("p",null,"Hydra 1.1 completes this transition. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If a package header is not specified, the config will have the default package as described above."),Object(o.b)("li",{parentName:"ul"},"_","group","_"," and ","_","name","_"," in package header are deprecated (You can still use a literal package header).")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Another important change in Hydra 1.1 is the\n",Object(o.b)("a",{parentName:"p",href:"/docs/next/upgrades/1.0_to_1.1/default_composition_order"},"Changes to default composition order"),"."))),Object(o.b)("h3",{id:"migration"},"Migration"),Object(o.b)("p",null,"If your header is ",Object(o.b)("inlineCode",{parentName:"p"},"# @package _group_"),", remove the header."),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.0"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.0"':!0},"# @package _group_\nhost: localhost\n"))),Object(o.b)("div",{className:"col  col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.1"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.1"':!0},"host: localhost\n\n")))),Object(o.b)("p",null,"If your header is using ",Object(o.b)("inlineCode",{parentName:"p"},"_group_")," or ",Object(o.b)("inlineCode",{parentName:"p"},"_name_")," to specify a package other than the default package,\nSpecify the literal package:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.0"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.0"':!0},"# @package _group_._name_\nhost: localhost\n"))),Object(o.b)("div",{className:"col  col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.1"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.1"':!0},"# @package db.mysql\nhost: localhost\n")))),Object(o.b)("h3",{id:"compatibility-with-both-hydra-10-and-11"},"Compatibility with both Hydra 1.0 and 1.1"),Object(o.b)("p",null,"If your configs should be compatible with both Hydra 1.0 and Hydra 1.1, use literal package headers."),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.0"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.0"':!0},"# @package _group_\nhost: localhost\n"))),Object(o.b)("div",{className:"col  col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.1"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.1"':!0},"# @package db\nhost: localhost\n")))))}s.isMDXComponent=!0},270:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return a?r.a.createElement(u,c(c({ref:t},d),{},{components:a})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);