(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(266)),o=n(275),c={id:"optuna_sweeper",title:"Optuna Sweeper plugin",sidebar_label:"Optuna Sweeper plugin"},u={unversionedId:"plugins/optuna_sweeper",id:"plugins/optuna_sweeper",isDocsHomePage:!1,title:"Optuna Sweeper plugin",description:"PyPI",source:"@site/docs/plugins/optuna_sweeper.md",slug:"/plugins/optuna_sweeper",permalink:"/docs/next/plugins/optuna_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/optuna_sweeper.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1611362287,sidebar_label:"Optuna Sweeper plugin",sidebar:"docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/next/plugins/nevergrad_sweeper"},next:{title:"Hydra's command line flags",permalink:"/docs/next/advanced/hydra-command-line-flags"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]},{value:"Search space configuration",id:"search-space-configuration",children:[{value:"Configuring through commandline override",id:"configuring-through-commandline-override",children:[]},{value:"Configuring through config file",id:"configuring-through-config-file",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://img.shields.io/pypi/v/hydra-optuna-sweeper"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-optuna-sweeper",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-optuna-sweeper",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-optuna-sweeper",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-optuna-sweeper"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-optuna-sweeper.svg",alt:"PyPI - Downloads"}))),Object(i.b)(o.a,{text:"Example application",to:"plugins/hydra_optuna_sweeper/example",mdxType:"ExampleGithubLink"}),Object(i.b)(o.a,{text:"Plugin source",to:"plugins/hydra_optuna_sweeper",mdxType:"ExampleGithubLink"})),Object(i.b)("p",null,"This plugin enables Hydra applications to utilize ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.org"}),"Optuna")," for the optimization of the parameters of experiments."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-optuna-sweeper --upgrade\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Please set ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper")," to ",Object(i.b)("inlineCode",{parentName:"p"},"optuna")," in your config file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - override hydra/sweeper: optuna\n")),Object(i.b)("p",null,"Alternatively, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper=optuna")," option to your command line."),Object(i.b)("p",null,"The default configuration is ",Object(i.b)(o.b,{to:"plugins/hydra_optuna_sweeper/hydra_plugins/hydra_optuna_sweeper/config.py",mdxType:"GithubLink"},"here"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"We include an example in this directory. ",Object(i.b)("inlineCode",{parentName:"p"},"example/sphere.py")," implements a simple benchmark function to be minimized."),Object(i.b)("p",null,"You can discover the Optuna sweeper parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="python example/sphere.py hydra/sweeper=optuna --cfg hydra -p hydra.sweeper"',title:'"python',"example/sphere.py":!0,"hydra/sweeper":"optuna","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0}),"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_optuna_sweeper.optuna_sweeper.OptunaSweeper\noptuna_config:\n  direction: minimize\n  storage: null\n  study_name: sphere\n  n_trials: 20\n  n_jobs: 1\n  sampler: TPESampler\n  seed: 123\nsearch_space:\n  x:\n    type: float\n    low: -5.5\n    high: 5.5\n    step: 0.5\n  y:\n    type: categorical\n    choices:\n    - -5\n    - 0\n    - 5\n")),Object(i.b)("p",null,"The function decorated with ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"x: 0\ny: 0\n")),Object(i.b)("p",null,"To run optimization, clone the code and run the following command in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/hydra_optuna_sweeper")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun\n")),Object(i.b)("p",null,"You can also override the search space parametrization:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun 'x=interval(-5.0, 5.0)' 'y=interval(0, 10)'\n")),Object(i.b)("h2",{id:"search-space-configuration"},"Search space configuration"),Object(i.b)("p",null,"This plugin supports Optuna's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/distributions.html"}),"distributions")," to configure search spaces. They can be defined either through commandline override or config file."),Object(i.b)("h3",{id:"configuring-through-commandline-override"},"Configuring through commandline override"),Object(i.b)("p",null,"Hydra provides a override parser that support rich syntax. Please refer to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/override_grammar/basic"}),"OverrideGrammer/Basic")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/override_grammar/extended"}),"OverrideGrammer/Extended")," for details."),Object(i.b)("h4",{id:"interval-override"},"Interval override"),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"interval")," is converted to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.UniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"UniformDistribution")),". You can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntUniformDistribution")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.LogUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"LogUniformDistribution"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntLogUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntLogUniformDistribution"))," by casting the interval to ",Object(i.b)("inlineCode",{parentName:"p"},"int")," and tagging it with ",Object(i.b)("inlineCode",{parentName:"p"},"log"),"."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example for interval override"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun 'x=int(interval(-5.0, 5.0))' 'y=tag(log, interval(1, 10))'\n")),Object(i.b)("p",null,"The output is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Direction: minimize\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #0 : x=-3 y=1.6859762540733367\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #1 : x=1 y=5.237816870668193\n...\n[HYDRA] Best parameters: {'x': 0, 'y': 1.0929184723430116}\n[HYDRA] Best value: 1.1944707871885822\n"))),Object(i.b)("h4",{id:"range-override"},"Range override"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"range")," is converted to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntUniformDistribution")),". If you apply ",Object(i.b)("inlineCode",{parentName:"p"},"shuffle")," to ",Object(i.b)("inlineCode",{parentName:"p"},"range"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"CategoricalDistribution"))," is used instead."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example for range override"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun 'x=range(-5.0, 5.0)' 'y=shuffle(range(-5, 5))'\n")),Object(i.b)("p",null,"The output is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Direction: minimize\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #0 : x=-3 y=-1\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #1 : x=1 y=0\n...\n[HYDRA] Best parameters: {'x': 1, 'y': 0}\n[HYDRA] Best value: 1\n"))),Object(i.b)("h4",{id:"choice-override"},"Choice override"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"choice")," is converted to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"CategoricalDistribution")),"."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example for choice override"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"python example/sphere.py --multirun 'x=choice(-5.0, 0.0, 5.0)' 'y=choice(0, 1, 2, 3, 4, 5)'\n")),Object(i.b)("p",null,"The output is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Direction: minimize\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #0 : x=5.0 y=5\n[HYDRA] Launching 1 jobs locally\n[HYDRA]        #1 : x=5.0 y=2\n...\n[HYDRA] Best parameters: {'x': 0.0, 'y': 0}\n[HYDRA] Best value: 0.0\n"))),Object(i.b)("h3",{id:"configuring-through-config-file"},"Configuring through config file"),Object(i.b)("h4",{id:"int-parameters"},"Int parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"int")," parameters can be defined with the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),": ",Object(i.b)("inlineCode",{parentName:"li"},"int")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"low"),": lower bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"high"),": upper bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"step"),": discretization step (optional)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"log"),": if ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", space is converted to the log domain")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"log")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", the parameter is mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntUniformDistribution")),". Otherwise, the parameter is mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntLogUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"IntLogUniformDistribution")),". Please note that ",Object(i.b)("inlineCode",{parentName:"p"},"step")," can not be set if ",Object(i.b)("inlineCode",{parentName:"p"},"log=true"),"."),Object(i.b)("h4",{id:"float-parameters"},"Float parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"float")," parameters can be defined with the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),": ",Object(i.b)("inlineCode",{parentName:"li"},"float")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"low"),": lower bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"high"),": upper bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"step"),": discretization step"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"log"),": if ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", space is converted to the log domain")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"log")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", the parameter is mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.UniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"UniformDistribution"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.DiscreteUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"DiscreteUniformDistribution"))," depending on the presence or absence of the ",Object(i.b)("inlineCode",{parentName:"p"},"step")," field, respectively. Otherwise, the parameter is mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.LogUniformDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"LogUniformDistribution")),". Please note that ",Object(i.b)("inlineCode",{parentName:"p"},"step")," can not be set if ",Object(i.b)("inlineCode",{parentName:"p"},"log=true"),"."),Object(i.b)("h4",{id:"categorical-parameters"},"Categorical parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"categorical")," parameters can be defined with the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),": ",Object(i.b)("inlineCode",{parentName:"li"},"categorical")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"choices"),": a list of parameter value candidates")),Object(i.b)("p",null,"The parameters are mapped to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"}),Object(i.b)("inlineCode",{parentName:"a"},"CategoricalDistribution")),"."))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},268:function(e,t,n){"use strict";n.r(t);var a=n(11);n.d(t,"MemoryRouter",(function(){return a.d})),n.d(t,"Prompt",(function(){return a.f})),n.d(t,"Redirect",(function(){return a.g})),n.d(t,"Route",(function(){return a.h})),n.d(t,"Router",(function(){return a.i})),n.d(t,"StaticRouter",(function(){return a.j})),n.d(t,"Switch",(function(){return a.k})),n.d(t,"generatePath",(function(){return a.l})),n.d(t,"matchPath",(function(){return a.m})),n.d(t,"useHistory",(function(){return a.n})),n.d(t,"useLocation",(function(){return a.o})),n.d(t,"useParams",(function(){return a.p})),n.d(t,"useRouteMatch",(function(){return a.q})),n.d(t,"withRouter",(function(){return a.r})),n.d(t,"BrowserRouter",(function(){return a.a})),n.d(t,"HashRouter",(function(){return a.b})),n.d(t,"Link",(function(){return a.c})),n.d(t,"NavLink",(function(){return a.e}))},269:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(11),o=n(267),c=n(7),u=Object(a.createContext)({collectLink:function(){}}),s=n(270),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,p,b=e.isNavLink,d=e.to,m=e.href,f=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,j=void 0===O||O,v=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,N=Object(a.useContext)(u),D=d||m,w=Object(o.a)(D),C=null==D?void 0:D.replace("pathname://",""),x=void 0!==C?(n=C,j&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,A=Object(a.useRef)(!1),P=b?i.e:i.c,R=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!R&&w&&window.docusaurus.prefetch(x),function(){R&&p&&p.disconnect()}}),[x,R,w]);var L=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,E=!x||!w||L;return x&&w&&!L&&!g&&N.collectLink(x),E?r.a.createElement("a",Object.assign({href:x},D&&!w&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(P,Object.assign({},v,{onMouseEnter:function(){A.current||(window.docusaurus.preload(x),A.current=!0)},innerRef:function(e){var t,n;R&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(x)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:x||""},b&&{isActive:h,activeClassName:f}))}},270:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(21),r=n(267);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},271:function(e,t,n){try{e.exports=n(272)}catch(a){e.exports={}}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(268),r=n(273),i=n(274);t.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=a.useLocation().pathname;return i.getActivePlugin(n,r,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveVersion(n,r)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveDocContext(n,r)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getDocVersionSuggestions(n,r)}},273:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(21);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(268);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var r=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var r,i,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(r=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),i=r.activeVersion!==a;return{latestDocSuggestion:i?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:i?a:void 0}}},275:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var a=n(3),r=n(0),i=n.n(r),o=n(269),c=n(21),u=n(271);function s(e){return i.a.createElement(o.a,Object(a.a)({},e,{to:(t=e.to,r=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==r?void 0:r.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,r}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(s,e,i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);