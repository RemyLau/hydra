(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),i=(n(0),n(270)),a=n(277),c={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},u={unversionedId:"tutorials/basic/running_your_app/working_directory",id:"version-1.0/tutorials/basic/running_your_app/working_directory",isDocsHomePage:!1,title:"Output/Working directory",description:"Hydra solves the problem of your needing to specify a new output directory for each run, by",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/3_working_directory.md",slug:"/tutorials/basic/running_your_app/working_directory",permalink:"/docs/tutorials/basic/running_your_app/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/3_working_directory.md",version:"1.0",lastUpdatedBy:"Eli Simhayev",lastUpdatedAt:1622046805,formattedLastUpdatedAt:"5/26/2021",sidebar_label:"Output/Working directory",sidebar:"version-1.0/docs",previous:{title:"Multi-run",permalink:"/docs/tutorials/basic/running_your_app/multi-run"},next:{title:"Logging",permalink:"/docs/tutorials/basic/running_your_app/logging"}},s=[{value:"Disabling output subdir",id:"disabling-output-subdir",children:[]},{value:"Original working directory",id:"original-working-directory",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{to:"examples/tutorials/basic/running_your_hydra_app/3_working_directory",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that working directory."),Object(i.b)("p",null,"The working directory is used to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),Object(i.b)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),Object(i.b)("p",null,"Every time you run the app, a new working directory is created:"),Object(i.b)("p",null,"Python file: ",Object(i.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'import os\nfrom omegaconf import DictConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),Object(i.b)("p",null,"Let's take a look at one of the working directories:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),Object(i.b)("p",null,"We have the Hydra output directory (",Object(i.b)("inlineCode",{parentName:"p"},".hydra")," by default) and the application log file.\nInside the configuration output directory we have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),Object(i.b)("p",null,"And in the main output directory:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),Object(i.b)("h3",{id:"disabling-output-subdir"},"Disabling output subdir"),Object(i.b)("p",null,"You can change the ",Object(i.b)("inlineCode",{parentName:"p"},".hydra")," subdirectory name by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.output_subdir"),".\nYou can disable its creation by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.output_subdir")," to ",Object(i.b)("inlineCode",{parentName:"p"},"null"),". "),Object(i.b)("h3",{id:"original-working-directory"},"Original working directory"),Object(i.b)("p",null,"You can still access the original working directory if you need to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"import os\nfrom omegaconf import DictConfig\nimport hydra\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    print(f\"Current working directory : {os.getcwd()}\")\n    print(f\"Orig working directory    : {hydra.utils.get_original_cwd()}\")\n    print(f\"to_absolute_path('foo')   : {hydra.utils.to_absolute_path('foo')}\")\n    print(f\"to_absolute_path('/foo')  : {hydra.utils.to_absolute_path('/foo')}\")\n\nif __name__ == \"__main__\":\n    my_app()\n\n\n$ python examples/tutorial/8_working_directory/original_cwd.py\nCurrent working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path('foo')    : /Users/omry/dev/hydra/foo\nto_absolute_path('/foo')   : /foo\n")),Object(i.b)("p",null,"Working directory can be ",Object(i.b)("a",{parentName:"p",href:"/docs/configure_hydra/workdir"},"customized"),"."))}d.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},272:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(11),a=n(271),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(273),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,f=e.to,b=e.href,g=e.activeClassName,y=e.isActive,v=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,h=void 0===m||m,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,_=Object(r.useContext)(u),w=f||b,k=Object(a.a)(w),D=null==w?void 0:w.replace("pathname://",""),A=void 0!==D?(n=D,h&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,C=Object(r.useRef)(!1),x=p?i.e:i.c,P=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&k&&window.docusaurus.prefetch(A),function(){P&&d&&d.disconnect()}}),[A,P,k]);var N=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,V=!A||!k||N;return A&&k&&!N&&!v&&_.collectLink(A),V?o.a.createElement("a",Object.assign({href:A},w&&!k&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(x,Object.assign({},O,{onMouseEnter:function(){C.current||(window.docusaurus.preload(A),C.current=!0)},innerRef:function(e){var t,n;P&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(A)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:A||""},p&&{isActive:y,activeClassName:g}))}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(10),o=n(271);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},274:function(e,t,n){try{e.exports=n(275)}catch(o){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),o=n(38),i=n(276);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return i.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getDocVersionSuggestions(n,o)}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,i,a=t.getActiveVersion(e,n),c=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(o=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),o=n(0),i=n.n(o),a=n(272),c=n(10),u=n(274);function s(e){return i.a.createElement(a.a,Object(r.a)({},e,{to:(t=e.to,o=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(s,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);