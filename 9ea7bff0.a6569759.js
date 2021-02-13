(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{198:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return p})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(8),a=(r(0),r(268)),i={id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},p={unversionedId:"configure_hydra/app_help",id:"version-0.11/configure_hydra/app_help",isDocsHomePage:!1,title:"Customizing Application's help",description:"Hydra provides two different help options:",source:"@site/versioned_docs/version-0.11/configure_hydra/app_help.md",slug:"/configure_hydra/app_help",permalink:"/docs/0.11/configure_hydra/app_help",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/configure_hydra/app_help.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1613176204,sidebar_label:"Customizing Application's help",sidebar:"version-0.11/docs",previous:{title:"Customizing working directory pattern",permalink:"/docs/0.11/configure_hydra/workdir"},next:{title:"Colorlog plugin",permalink:"/docs/0.11/plugins/colorlog"}},c=[],l={toc:c};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra provides two different help options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--help")," : Application specific help"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--hydra-help")," Hydra specific help. ")),Object(a.b)("p",null,"Example output of ",Object(a.b)("inlineCode",{parentName:"p"},"--help"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py --help\nmy_app is powered by Hydra.\n\n== Configuration groups ==\nCompose your configuration from those groups (group=option)\n\ndb: mysql, postgresql\n\n\n== Config ==\nOverride anything in the config (foo.bar=value)\n\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n\n\nPowered by Hydra (https://hydra.cc)\nUse --hydra-help to view Hydra specific help\n")),Object(a.b)("p",null,"This output is generated from the following default configuration.\nYou can override the individual components like ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.help.app_name")," or the whole template. "),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  help:\n    # App name, override to match the name your app is known by\n    app_name: ${hydra.job.name}\n\n    # Help header, customize to describe your app to your users\n    header: |\n      ${hydra.help.app_name} is powered by Hydra.\n\n    footer: |\n      Powered by Hydra (https://hydra.cc)\n      Use --hydra-help to view Hydra specific help\n\n    # Basic Hydra flags:\n    #   $FLAGS_HELP\n    #\n    # Config groups, choose one of:\n    #   $APP_CONFIG_GROUPS: All config groups that does not start with hydra/.\n    #   $HYDRA_CONFIG_GROUPS: All the Hydra config groups (starts with hydra/)\n    #\n    # Configuration generated with overrides:\n    #   $CONFIG : Generated config\n    #\n    template: |\n      ${hydra.help.header}\n      == Configuration groups ==\n      Compose your configuration from those groups (group=option)\n\n      $APP_CONFIG_GROUPS\n\n      == Config ==\n      Override anything in the config (foo.bar=value)\n\n      $CONFIG\n\n      ${hydra.help.footer}\n")))}s.isMDXComponent=!0},268:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return y}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=t,y=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?o.a.createElement(y,p(p({ref:n},l),{},{components:r})):o.a.createElement(y,p({ref:n},l))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);