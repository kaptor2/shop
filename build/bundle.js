!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router")},function(e,t,n){"use strict";n(3);var r=d(n(4)),o=d(n(5)),u=d(n(0)),l=d(n(6)),i=n(1),a=d(n(7)),c=n(8);function d(e){return e&&e.__esModule?e:{default:e}}o.default.config();var f=(0,r.default)(),s=process.env.PORT||3001;f.use(a.default.json()),f.use(r.default.static("build")),f.get("*",(function(e,t){var n='\n    <html lang="ru">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>SSR express React</title>\n    </head>\n    <body>\n        <div id=\'root\'>\n            '+l.default.renderToString(u.default.createElement(i.StaticRouter,{location:e.url,context:{}},u.default.createElement(c.App,null)))+"\n        </div>\n    </body>\n    </html>\n  ";t.send(n)})),f.listen(s,(function(){console.log("app runinng: ".concat(s))}))},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("body-parser")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var r,o=n(0),u=(r=o)&&r.__esModule?r:{default:r},l=n(1),i=n(9);t.App=function(){return u.default.createElement(l.Switch,null,u.default.createElement(l.Route,{exect:!0,path:"/",component:i.HomePageComponent}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HomePageComponent=void 0;var r,o=n(0),u=(r=o)&&r.__esModule?r:{default:r};t.HomePageComponent=function(){return u.default.createElement("div",null,u.default.createElement("h",null,"Home page"),u.default.createElement("div",null,"Content"))}}]);