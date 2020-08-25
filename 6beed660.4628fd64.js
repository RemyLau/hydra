(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(7),i=(t(0),t(166)),o={id:"plugins",title:"Hydra plugins types",sidebar_label:"Hydra plugins"},c={unversionedId:"advanced/plugins",id:"advanced/plugins",isDocsHomePage:!1,title:"Hydra plugins types",description:"Hydra can be extended via plugins.",source:"@site/docs/advanced/plugins.md",permalink:"/docs/next/advanced/plugins",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/plugins.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1586966694,sidebar_label:"Hydra plugins",sidebar:"docs",previous:{title:"Config Search Path",permalink:"/docs/next/advanced/search_path"},next:{title:"Application packaging",permalink:"/docs/next/advanced/app_packaging"}},l=[{value:"Plugin discovery",id:"plugin-discovery",children:[]},{value:"Plugin types",id:"plugin-types",children:[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]},{value:"SearchPathPlugin",id:"searchpathplugin",children:[]},{value:"ConfigSource",id:"configsource",children:[]}]}],p={rightToc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra can be extended via plugins.\nYou can see example plugins ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/examples"}),"here"),"."),Object(i.b)("div",{class:"alert alert--info",role:"alert"},Object(i.b)("strong",null,"NOTE"),": If you develop plugins, please join the ",Object(i.b)("a",{href:"https://hydra-framework.zulipchat.com/#narrow/stream/233935-Hydra-plugin.20dev.20announcements"},"plugin developer announcement channel")," in the chat."),Object(i.b)("br",null),Object(i.b)("h2",{id:"plugin-discovery"},"Plugin discovery"),Object(i.b)("p",null,"The plugin discovery process runs whenever Hydra starts. During plugin discovery, Hydra scans for plugins in all the submodules of ",Object(i.b)("inlineCode",{parentName:"p"},"hydra_plugins"),". Hydra will import each module and look for plugins defined in that module.\nAny module under ",Object(i.b)("inlineCode",{parentName:"p"},"hydra_plugins")," that is slow to import will slow down the startup of ",Object(i.b)("em",{parentName:"p"},"ALL")," Hydra applicaitons.\nPlugins with expensive imports can exclude individual files from this by prefixing them with ",Object(i.b)("inlineCode",{parentName:"p"},"_")," (but not ",Object(i.b)("inlineCode",{parentName:"p"},"__"),").\nFor example, the file ",Object(i.b)("inlineCode",{parentName:"p"},"_my_plugin_lib.py")," would not be imported and scanned, while ",Object(i.b)("inlineCode",{parentName:"p"},"my_plugin_lib.py")," would be."),Object(i.b)("h2",{id:"plugin-types"},"Plugin types"),Object(i.b)("h3",{id:"sweeper"},"Sweeper"),Object(i.b)("p",null,"A sweeper is responsible for converting command line arguments list into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"batch_size=128 optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),Object(i.b)("p",null,"And creates 4 jobs with the following parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"batch_size=128 optimizer=nesterov learning_rate=0.01\nbatch_size=128 optimizer=nesterov learning_rate=0.1\nbatch_size=128 optimizer=adam learning_rate=0.01\nbatch_size=128 optimizer=adam learning_rate=0.1\n")),Object(i.b)("h3",{id:"launcher"},"Launcher"),Object(i.b)("p",null,"Launchers are responsible for launching a job to a specific environment.\nA Launcher is taking a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose its configuration.\nThe basic launcher simply launches the job locally. "),Object(i.b)("h3",{id:"searchpathplugin"},"SearchPathPlugin"),Object(i.b)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),Object(i.b)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."),Object(i.b)("p",null,"Many other plugins also implement SearchPathPlugin to add their configuration to the config search path once they are installed. "),Object(i.b)("h3",{id:"configsource"},"ConfigSource"),Object(i.b)("p",null,"ConfigSource plugins can be used to allow Hydra to access configuration in non-standard locations when composing the config.\nThis can be used to enable to access an in-house private config store, or as a way to access configs from public sources like GitHub or S3."))}s.isMDXComponent=!0},166:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return t?r.a.createElement(h,c(c({ref:n},p),{},{components:t})):r.a.createElement(h,c({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);