"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6594],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8038:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},u=void 0,s={unversionedId:"inventory/Functions/Server/Inventory/AddItem",id:"inventory/Functions/Server/Inventory/AddItem",title:"AddItem",description:"Adds an item into the specified inventory.",source:"@site/docs/inventory/Functions/Server/Inventory/AddItem.md",sourceDirName:"inventory/Functions/Server/Inventory",slug:"/inventory/Functions/Server/Inventory/AddItem",permalink:"/pristinerp/docs/inventory/Functions/Server/Inventory/AddItem",editUrl:"https://github.com/5mLucifer/pristinerp/tree/main/docs/inventory/Functions/Server/Inventory/AddItem.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"useSlot",permalink:"/pristinerp/docs/inventory/Functions/Client/useSlot"},next:{title:"CanCarryItem",permalink:"/pristinerp/docs/inventory/Functions/Server/Inventory/CanCarryItem"}},l={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Adds an item into the specified inventory."),(0,i.kt)("p",null,"Should be used alongside ",(0,i.kt)("a",{parentName:"p",href:"/pristinerp/docs/inventory/Functions/Server/Inventory/CanCarryItem"},"CanCarryItem"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- inv: string or number\n-- item: table or string\n-- count: number\n-- metadata: table or string (optional)\n-- slot: number (optional)\n-- cb: function (optional)\nPRP["AddItem"](inv, item, count, metadata, slot, cb)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"PRP[\"AddItem\"](1, 'bread', 4, nil, nil, function(success, reason)\n    if not success then\n        if reason == 'overburdened' then\n        PRP[\"NotifySV\"](inventory.source, {type = \"error\",text = shared.locale('cannot_carry', count, data.label), duration = 2500})\n        end\n    end\nend)\n")))}m.isMDXComponent=!0}}]);