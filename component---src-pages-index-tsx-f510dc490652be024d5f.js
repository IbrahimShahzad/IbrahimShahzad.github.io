(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{M06k:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,s=o(e,["color","size"]);return a.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));c.displayName="Calendar",t.a=c},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("lHIJ"),o=n("c/7L"),c=n.n(o),i=n("9Dj+"),s=n("+zwd"),u=n("nXCN"),m=n("vYwq"),d=n("9Wgw");t.default=function(e){var t=e.data,n=e.location,r=t.site.siteMetadata,l=t.portfolio.edges.map((function(e,t){return a.a.createElement(u.a,{data:e.node,key:"p-item-index-"+e.node.id,even:(t+1)%2==0})})),o=t.blog.edges.map((function(e){return a.a.createElement(m.a,{data:e.node,key:"b-item-index-"+e.node.id})}));return a.a.createElement(i.a,{front:!0,seo:{title:"Home",description:r.description},navPlaceholder:!1,location:n},a.a.createElement(f,{data:r}),""!==r.about&&a.a.createElement(p,{data:r.about}),a.a.createElement("div",{className:"px-4 lg:px-0",id:"portfolio"},l),a.a.createElement(g,null,o),a.a.createElement(v,{data:r.contact}))};var f=function(e){var t=e.data,n=Object(r.useRef)(null),o=t.twoColumnWall,i=Object(r.useState)({loaded:!1,supportsBlend:!1}),u=i[0],m=i[1];Object(r.useEffect)((function(){window.CSS&&!u.loaded&&CSS.supports("mix-blend-mode","screen")&&(n.current.classList.add("supports-blend"),m({loaded:!0,supportsBlend:!0}))}),[u.loaded]);var d={};!o&&t.titleImage&&(d.style={backgroundImage:"url('"+t.titleImage+"')"});var f=a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"title bg-bg"},a.a.createElement("h1",{className:"text-6xl relative lg:text-7xl "+(t.capitalizeTitleOnHome?"uppercase":"")},a.a.createElement("span",d),t.title)),a.a.createElement("p",{className:"text-lg lg:text-xl text-color-2 pt-4 lg:pt-0"},t.introTag),a.a.createElement("p",{className:"text-base lg:text-lg mt-4"},t.description),a.a.createElement(c.a,{selector:"#portfolio"},a.a.createElement(s.a,{title:"SEE WORKS",type:"button",iconRight:a.a.createElement(l.a,null)})));return o?a.a.createElement("div",{className:"wall h-screen flex relative justify-center items-center overflow-hidden",ref:n},a.a.createElement("div",{className:"flex-1 lg:block absolute lg:relative w-full h-full top-0 left-0"},a.a.createElement("div",{className:"absolute left-0 top-0 w-full h-full lg:hidden",style:{background:"rgba(0,0,0,.75)"}}),a.a.createElement("img",{src:t.titleImage,alt:"",className:"h-full w-auto max-w-none lg:h-auto lg:w-full"})),a.a.createElement("div",{className:"flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default"},f)):a.a.createElement("div",{className:"wall h-screen flex flex-col justify-center items-center text-center",ref:n},f)},p=function(e){var t=e.data;return a.a.createElement("div",{className:"boxed"},a.a.createElement("div",{className:"px-4 py-20 text-center lg:py-40 lg:px-0"},a.a.createElement("h2",{className:"text-color-1 font-black text-5xl lg:text-6xl"},"About"),a.a.createElement("p",{className:"mt-5 text-lg"},t)))},g=function(e){var t=e.children;return a.a.createElement("div",{className:"container mx-auto px-0"},a.a.createElement("div",{className:"pt-20 pb-10 text-center lg:pt-40 lg:pb-20"},a.a.createElement("h2",{className:"text-color-1 font-black text-5xl lg:text-6xl"},"Blog")),a.a.createElement("div",{className:"flex flex-wrap"},t))},v=function(e){var t=e.data,n=t.api_url;return a.a.createElement("div",{className:"container mx-auto"},a.a.createElement("div",{className:"pt-20 pb-10 lg:pt-40 lg:pb-20 text-center"},a.a.createElement("h2",{className:"text-color-1 font-black text-5xl lg:text-6xl"},"Contact")),a.a.createElement("div",{className:"flex flex-wrap pb-40"},n&&a.a.createElement("div",{className:"w-full lg:w-1/2 px-4 lg:pl-2 lg:pr-6"},a.a.createElement(d.b,{api:t.api_url})),a.a.createElement("div",{className:"w-full "+(n?"lg:w-1/2":"lg:w-2/3 mx-auto")+" px-6 pt-8"},a.a.createElement(d.a,{data:t}))))}},"c/7L":function(e,t,n){"use strict";var r,a=(r=n("q1tI"))&&"object"==typeof r&&"default"in r?r.default:r;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var t=e.children,n=e.selector,r=e.smooth,i=void 0===r||r,s=e.style,u=void 0===s?{}:s,m=e.alignToTop,d=void 0!==m&&m,f=e.className,p=void 0===f?"":f,g=e.onClick,v=e.scrollOptions,b=void 0===v?{}:v,h=function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({behavior:i?"smooth":"instant"},function(e){var t={};return e instanceof Object&&Object.entries(e).forEach((function(e){var n=c(e,2),r=n[0],a=n[1];switch(r){case"behavior":"auto"!==a&&"smooth"!==a||(t[r]=a);case"block":case"inline":"start"!==a&&"center"!==a&&"end"!==a&&"nearest"!==a||(t[r]=a)}})),t}(b));d&&(e.block="start",e.inline="nearest"),document.querySelector(n).scrollIntoView(e)};return a.createElement("div",{style:u,className:p,onClick:function(e){"function"==typeof g?(g(e),setTimeout(h,1e3/60)):h()}},t)}},lHIJ:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,s=o(e,["color","size"]);return a.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));c.displayName="ArrowRight",t.a=c},nXCN:function(e,t,n){"use strict";var r=n("rePB"),a=n("q1tI"),l=n.n(a),o=n("+zwd"),c=n("9eSz"),i=n.n(c),s=n("lHIJ"),u=n("dI71");var m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getWindowHeight=function(){var e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0];return e.innerHeight||n.clientHeight||r.clientHeight},n.getWindowWidth=function(){var e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0];return e.innerWidth||n.clientWidth||r.clientWidth},n.isScrolledIntoView=function(e,t,r){if(void 0===t&&(t=0),!r)return!1;var a=e.getBoundingClientRect().top-t,l=e.getBoundingClientRect().bottom+t;return a<=n.getWindowHeight()&&l>=0},n.onScroll=function(){var e=Date.now();e-n.timestamp>=20&&n.isScrolledIntoView(n.node.current,100,n.canUseDom)&&(n.props.changePercentage({percentage:1-n.getRelativePosition(n.node.current,n.canUseDom)}),n.timestamp=e)},n.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},n.getRelativePosition=function(e,t){if(!t)return 0;var r=e,a=r.getBoundingClientRect(),l=a.top,o=a.height,c=n.getNodeHeight(r),i=o>c?o:c,s=Math.round(l>i?i:l);return n.getPercentage(-o,i,s)},n.node=l.a.createRef(),n.timestamp=0,n.canUseDom=!("undefined"==typeof window||!window.document||!window.document.createElement),n.state={percentage:0},n}Object(u.a)(t,e);var n=t.prototype;return n.getNodeHeight=function(e){return e&&"clientHeight"in e?e.clientHeight:this.getWindowHeight()},n.componentDidMount=function(){this.getWindowWidth()>1024&&window.addEventListener("scroll",this.onScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},n.render=function(){return l.a.createElement("div",{ref:this.node},this.props.children)},t}(l.a.Component);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.data,n=e.even,r=Object(a.useState)({animated:!1,percentage:0}),c=r[0],u=r[1],d=function(e){return u(f(f({},c),e))},p=Object(a.useRef)(0);return Object(a.useEffect)((function(){var e,t,n,r;p.current=Math.min((e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0],(e.innerHeight||n.clientHeight||r.clientHeight)/2),300)*Math.max(0,c.percentage-.3),function(){var e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0];return e.innerWidth||n.clientWidth||r.clientWidth}()<1024&&d({animated:!0})}),[c.percentage]),c.percentage>.3&&!c.animated&&d({animated:!0}),l.a.createElement(m,{changePercentage:d},l.a.createElement("div",{className:"large-container mx-auto"},l.a.createElement("div",{className:"my-4 py-8 lg:py-24 portfolio-item md:flex "+(c.animated?"begin-animation":"")+" "+(n?"even flex-row-reverse":"")},l.a.createElement("div",{className:"relative flex-1"},l.a.createElement("div",{className:"image relative z-10",style:{transform:"translate(0px,"+p.current+"px)"}},l.a.createElement(i.a,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title}))),l.a.createElement("div",{className:"flex-1 flex md:px-4 lg:px-6 items-center"},l.a.createElement("div",{className:"flex flex-1 flex-wrap  "+(n?"md:justify-end md:text-right":"")},l.a.createElement("h3",{className:"text-color-1 text-5xl font-black to-up"},t.frontmatter.title),l.a.createElement("p",{className:"lg:mt-4 to-up"},t.frontmatter.description),l.a.createElement(o.a,{to:t.fields.slug,label:"View "+t.frontmatter.title,title:"View",iconRight:l.a.createElement(s.a,null)}))))))}},vYwq:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("Wbzz"),o=n("9eSz"),c=n.n(o),i=n("M06k");t.a=function(e){var t=e.data,n=Object(r.useState)(!1),o=n[0],s=n[1];return a.a.createElement("div",{className:"blog-item w-full md:w-1/2 lg:w-1/3 p-4"},a.a.createElement("div",{className:"transition-all duration-300 hover:shadow-2xl shadow "+(o&&"focused")},a.a.createElement(l.a,{to:t.fields.slug,title:t.frontmatter.title,onFocus:function(){return s(!0)},onBlur:function(){return s(!1)}},a.a.createElement("div",{className:"image"},a.a.createElement(c.a,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title,className:"w-full"})),a.a.createElement("div",{className:"p-4 py-3"},a.a.createElement("h4",{className:"text-color-2 font-black text-3xl pt-1"},t.frontmatter.title),a.a.createElement("div",{className:"flex items-center text-secondary"},a.a.createElement(i.a,{className:"stroke-current"}),a.a.createElement("p",{className:"pl-2 text-color-default font-sans"},t.frontmatter.date)),a.a.createElement("p",{className:"pt-3 text-color-default"},t.frontmatter.description)))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f510dc490652be024d5f.js.map