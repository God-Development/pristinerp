"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7858],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294);function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),i=n(7294),a=n(2389),o=n(3725),l=n(6010),u="tabItem_LplD";function s(e){var t,n,a,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),w=g.tabGroupChoices,k=g.setTabGroupChoices,N=(0,i.useState)(y),O=N[0],E=N[1],x=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=w[m];null!=j&&j!==O&&h.some((function(e){return e.value===j}))&&E(j)}var I=function(e){var t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==O&&(T(t),E(r),null!=m&&k(m,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},h.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:I,onClick:I},a,{className:(0,l.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,i.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,a.Z)();return i.createElement(s,(0,r.Z)({key:String(t)},e))}},1280:function(e,t,n){var r=n(7294);t.Z=function(e){var t={fontSize:"1.7rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return r.createElement("div",{style:Object.assign({width:"fit-content",height:"3rem",padding:"0.8rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},e.style),className:"icon-button"},"left"===e.side&&r.createElement("div",{style:t},e.icon),r.createElement("div",null,e.children),"right"===e.side&&r.createElement("div",{style:t},e.icon))}},4107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=(n(1280),n(9877),n(8215),["components"]),l={title:"Getting Started"},u=void 0,s={unversionedId:"inventory/index",id:"inventory/index",title:"Getting Started",description:"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,",source:"@site/docs/inventory/index.md",sourceDirName:"inventory",slug:"/inventory/",permalink:"/pristinerp/docs/inventory/",editUrl:"https://github.com/5mLucifer/pristinerp/tree/main/docs/inventory/index.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Configuration",permalink:"/pristinerp/docs/inventory/config"}},c={},d=[{value:"Installation",id:"installation",level:3},{value:"Common Issues",id:"common-issues",level:2},{value:"UI has not been built",id:"ui-has-not-been-built",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,\nhowever it is not recommended for beginners. You must possess a basic understanding of coding and the ability to read;\notherwise you ",(0,a.kt)("strong",{parentName:"p"},"should not")," install this resource."))),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You should be sent a file with the inventory in and UI not built, build it using the steps below."),(0,a.kt)("h2",{id:"common-issues"},"Common Issues"),(0,a.kt)("h3",{id:"ui-has-not-been-built"},"UI has not been built"),(0,a.kt)("p",null,"Because the UI for inventory is written in React it can't run natively under FiveM so it must first be bundled into html/css/js."),(0,a.kt)("p",null,"We provide an easy way for you to do this by downloading a pre-bundled release, which you can get from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/releases/latest"},"here"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Make sure you download the ",(0,a.kt)("inlineCode",{parentName:"p"},"ox_inventory.zip")," file as that one contains the bundled files and others are raw source code."),(0,a.kt)("p",null,"If in case you wanted to edit the inventory UI you would have to build these files yourself.",(0,a.kt)("br",{parentName:"p"}),"\n","To do so please read our ",(0,a.kt)("a",{parentName:"p",href:"/pristinerp/docs/inventory/Guides/inventory_ui"},(0,a.kt)("em",{parentName:"a"},"Building inventory UI"))," guide."))}m.isMDXComponent=!0}}]);