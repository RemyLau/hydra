(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{266:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(266)),c={id:"hydra-command-line-flags",title:"Hydra's command line flags"},o={unversionedId:"advanced/hydra-command-line-flags",id:"advanced/hydra-command-line-flags",isDocsHomePage:!1,title:"Hydra's command line flags",description:"Hydra is using the command line for two things:",source:"@site/docs/advanced/hydra-command-line-flags.md",slug:"/advanced/hydra-command-line-flags",permalink:"/docs/next/advanced/hydra-command-line-flags",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/hydra-command-line-flags.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1611362287,sidebar:"docs",previous:{title:"Optuna Sweeper plugin",permalink:"/docs/next/plugins/optuna_sweeper"},next:{title:"basic",permalink:"/docs/next/advanced/override_grammar/basic"}},l=[],b={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra is using the command line for two things:"),Object(i.b)("p",null,"Hydra is using the command line for two things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Controlling Hydra"),Object(i.b)("li",{parentName:"ul"},"Configuring your application (See ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/advanced/override_grammar/basic"}),"Override Grammar"),")")),Object(i.b)("p",null,"Arguments prefixed by - or -- control Hydra; the rest are used to configure the application."),Object(i.b)("p",null,"Information about Hydra:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--hydra-help"),": Shows Hydra specific flags"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--version"),": Show Hydra's version and exit")),Object(i.b)("p",null,"Information provided by the Hydra app:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--help,-h"),": Shows the application's help. This can be ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/configure_hydra/app_help"}),"customized"),".")),Object(i.b)("p",null,"Debugging assistance:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--cfg,-c"),": Show config instead of running. Takes as parameter one of ",Object(i.b)("inlineCode",{parentName:"li"},"job"),", ",Object(i.b)("inlineCode",{parentName:"li"},"hydra")," or ",Object(i.b)("inlineCode",{parentName:"li"},"all"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--package,-p"),": Used in conjunction with --cfg to select a specific config package to show."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--info,-i"),": Print Hydra information. This includes installed plugins, Config Search Path, Defaults List, generated config and more.")),Object(i.b)("p",null,"Running Hydra applications:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--run,-r"),": Run is the default mode and is not normally needed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--multirun,-m"),": Run multiple jobs with the configured launcher and sweeper. See ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/tutorials/basic/running_your_app/multi-run"}),"Multi-run"),".",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--config-path,-cp"),": Overrides the config_path specified in hydra.main(). The config_path is relative to the Python file declaring @hydra.main()"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--config-name,-cn"),": Overrides the config_name specified in hydra.main()"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--config-dir,-cd"),": Adds an additional config directory to the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/advanced/search_path"}),"config search path"),".",Object(i.b)("br",{parentName:"li"}),"This is useful for installed apps that want to allow their users to provide additional configs.")),Object(i.b)("p",null,"Misc:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"--shell-completion,-sc"),": Install or Uninstall ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/tutorials/basic/running_your_app/tab_completion"}),"shell tab completion"),".")))}p.isMDXComponent=!0}}]);