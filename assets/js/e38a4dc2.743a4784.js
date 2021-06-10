(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{308:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(346)),c={title:"Hydra Ray Launcher",author:"Jieru Hu",author_url:"https://github.com/jieru-hu",author_image_url:"https://graph.facebook.com/733244046/picture/?height=200&width=200",tags:["Hydra","Ray","Plugin"],image:"https://hydra.cc/img/Hydra-Readme-logo2.svg"},i={permalink:"/blog/2020/12/22/Hydra_Ray_Launcher",source:"@site/blog/2020-12-22-Hydra_Ray_Launcher.md",description:"We are happy to announce that we are adding a Ray Launcher to the Hydra Launchers family.",date:"2020-12-22T00:00:00.000Z",formattedDate:"December 22, 2020",tags:[{label:"Hydra",permalink:"/blog/tags/hydra"},{label:"Ray",permalink:"/blog/tags/ray"},{label:"Plugin",permalink:"/blog/tags/plugin"}],title:"Hydra Ray Launcher",readingTime:3.465,truncated:!0,prevItem:{title:"Hydra 1.1",permalink:"/blog/2021/06/13/Hydra_1.1"},nextItem:{title:"Hydra 1.0",permalink:"/blog/2020/09/03/Hydra_1.0"}},u=[],l={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are happy to announce that we are adding a ",Object(o.b)("a",{parentName:"p",href:"https://hydra.cc/docs/plugins/ray_launcher"},"Ray Launcher")," to the Hydra Launchers family.\nHydra's Launcher plugins enable launching to different environments without changing your existing workflows or application code.\nThe Hydra Ray Launcher can be used to launch your application to a new or existing ",Object(o.b)("a",{parentName:"p",href:"https://docs.ray.io/en/master/cluster/launcher.html"},"Ray cluster"),",\nlocally or on AWS. In this post we demonstrate the major functionalities of the Launcher.\nFor more details on installation and configuration, please check out the ",Object(o.b)("a",{parentName:"p",href:"https://hydra.cc/docs/plugins/ray_launcher/"},"Hydra Ray Launcher documentation"),".\nAs always, please ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra#community"},"join our community")," and give us feedback!"))}p.isMDXComponent=!0},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),y=p(r),d=n,h=y["".concat(c,".").concat(d)]||y[d]||s[d]||o;return r?a.a.createElement(h,i(i({ref:t},l),{},{components:r})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);