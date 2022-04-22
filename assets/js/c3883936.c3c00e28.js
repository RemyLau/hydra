"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6264],{3905:function(e,r,n){n.r(r),n.d(r,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return y},useMDXComponents:function(){return l},withMDXComponents:function(){return p}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){return function(r){var n=l(r.components);return t.createElement(e,a({},r,{components:n}))}},l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},m=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||s[m]||a;return n?t.createElement(f,u(u({ref:r},c),{},{components:n})):t.createElement(f,u({ref:r},c))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var d in r)hasOwnProperty.call(r,d)&&(u[d]=r[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12981:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},d=void 0,c={unversionedId:"configure_hydra/workdir",id:"version-1.0/configure_hydra/workdir",title:"Customizing working directory pattern",description:"Example application",source:"@site/versioned_docs/version-1.0/configure_hydra/workdir.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/workdir",permalink:"/docs/1.0/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/configure_hydra/workdir.md",tags:[],version:"1.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1650592371,formattedLastUpdatedAt:"4/22/2022",frontMatter:{id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},sidebar:"version-1.0/docs",previous:{title:"Customizing logging",permalink:"/docs/1.0/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/1.0/configure_hydra/app_help"}},p=[],l={toc:p};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/configure_hydra/workdir"},(0,a.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,a.mdx)("p",null,"Below are a few examples of customizing output directory patterns."),(0,a.mdx)("p",null,"Run output directory grouped by day:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),(0,a.mdx)("p",null,"Sweep sub directory contains the the job number and the override parameters for the job instance:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  sweep:\n    subdir: ${hydra.job.num}_${hydra.job.override_dirname}\n")),(0,a.mdx)("p",null,"Run output directory grouped by job name:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),(0,a.mdx)("p",null,"Run output directory can contain user configuration variables:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n\n")),(0,a.mdx)("p",null,"Run output directory can contain override parameters for the job:"),(0,a.mdx)("p",null,"See ",(0,a.mdx)("a",{parentName:"p",href:"/docs/1.0/configure_hydra/job#hydrajoboverride_dirname"},"Override dirname")," in the Job configuration page for details on how to customize\n",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra.job.override_dirname"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")))}m.isMDXComponent=!0}}]);