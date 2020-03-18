"use strict";var AMPEmail=function(e){function r(e,r,t,n,a,i,s){try{var o=e[i](s),u=o.value}catch(e){return void t(e)}o.done?r(u):Promise.resolve(u).then(n,a)}function t(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){function s(e){r(u,a,i,s,o,"next",e)}function o(e){r(u,a,i,s,o,"throw",e)}var u=e.apply(t,n);s(void 0)}))}}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,r,t){return r&&a(e.prototype,r),t&&a(e,t),e}function s(e,r){return e?Array.isArray(e)?e.join(r):e:""}function o(e){for(var r=[],t=0,n=Object.keys(e);t<n.length;t++){var a=n[t],i=e[a];void 0!==i&&("boolean"==typeof i&&(i=i?1:0),r.push("".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(i))))}return r.join("&")}function u(e){if("string"!=typeof e)return e;if("{"!=e.charAt(0))return null;try{return JSON.parse(e)}catch(e){return null}}function c(){return(c=t(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:if(n=e.sent,"PASS"===n.validateString(r,"AMP4EMAIL").status){e.next=6;break}throw Error("AMP validation failed");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return new Promise((function(e){if(window.amp&&window.amp.validator)e(window.amp.validator);else{var r=Array.from(document.getElementsByTagName("script")).find((function(e){return"https://cdn.ampproject.org/v0/validator.js"===e.src}));r||((r=document.createElement("script")).src="https://cdn.ampproject.org/v0/validator.js",document.body.appendChild(r)),r.addEventListener("load",(function(){return e(window.amp.validator)}))}}))}function d(){return(d=t(regeneratorRuntime.mark((function e(r,t){var n,a,i,s,o,u,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new Set(t.skipPreprocessingModules||[]),a=!0,i=!1,s=void 0,e.prev=4,o=T[Symbol.iterator]();case 6:if(a=(u=o.next()).done){e.next=16;break}if(c=u.value,!n.has(c.name)){e.next=10;break}return e.abrupt("continue",13);case 10:return e.next=12,c.process(r,t);case 12:r=e.sent;case 13:a=!0,e.next=6;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),i=!0,s=e.t0;case 22:e.prev=22,e.prev=23,a||null==o.return||o.return();case 25:if(e.prev=25,!i){e.next=28;break}throw s;case 28:return e.finish(25);case 29:return e.finish(22);case 30:return e.abrupt("return",r);case 31:case"end":return e.stop()}}),e,null,[[4,18,22,30],[23,,25,29]])})))).apply(this,arguments)}var h,g,m,f;(g=h||(h={})).A2A="a2a",g.CLIENT_ID_SERVICE="cid",g.ERROR_REPORTER="errorReporter",g.FRAGMENT="fragment",g.HANDSHAKEPOLL="handshakepoll",g.NAVIGATE_TO="navigateTo",g.REPLACE_URL="replaceUrl",g.SWIPE="swipe",g.VIEWER_RENDER_TEMPLATE="viewerRenderTemplate",g.XHR_INTERCEPTOR="xhrInterceptor",function(e){e.NATURAL="natural",e.NATURAL_IOS_EMBED="natural-ios-embed"}(m||(m={})),function(e){e.INACTIVE="inactive",e.PAUSED="paused",e.VISIBLE="visible",e.PRERENDER="prerender",e.HIDDEN="hidden"}(f||(f={}));var p="autoplay 'none';camera 'none';encrypted-media 'none';fullscreen 'none';geolocation 'none';gyroscope 'none';magnetometer 'none';microphone 'none';midi 'none';payment 'none';speaker 'none';sync-xhr 'none';vr 'none'".split(";"),v=["allow-scripts","allow-forms","allow-popups","allow-popups-to-escape-sandbox"],y=["border: none","overflow: hidden"],_={prerenderSize:0,visibilityState:f.VISIBLE,paddingTop:0,history:!0,p2r:!1,horizontalScrolling:!1,storage:!0,development:!1,log:!1,csi:!0,cap:[h.XHR_INTERCEPTOR,h.ERROR_REPORTER]},w=["IframeHeight","ErrorHandler"];class R{constructor(e,r,t){this.win_=e,this.origin_=r,this.target_=t}addEventListener(e,r){this.win_.addEventListener("message",e=>{e.origin==this.origin_&&e.source==this.target_&&r(e)})}postMessage(e){this.target_.postMessage(e,"null"===this.origin_?"*":this.origin_)}start(){}}class E{static initiateHandshakeWithDocument(e,r){return new Promise(t=>{let n=setInterval(()=>{let a;try{a=new MessageChannel}catch(e){console.log(e,"err")}e.postMessage({app:"__AMPHTML__",name:"handshake-poll"},"*",[a.port2]);const i=a.port1,s=e=>{if((e=u(e.data))&&"__AMPHTML__"===e.app&&"channelOpen"===e.name){clearInterval(n),i.removeEventListener("message",s);const a=new E(null,i,!1,r,!0);a.sendResponse_(e.requestid,"channelOpen",null),t(a)}};i.addEventListener("message",s),i.start()},1e3)})}static waitForHandshakeFromDocument(e,r,t,n){return new Promise(a=>{let i=s=>{const o=u(s.data);!o||s.origin!=t||s.source&&s.source!=r||"__AMPHTML__"!==o.app||"channelOpen"!==o.name||(e.removeEventListener("message",i),s=new R(e,t,r),(s=new E(null,s,!1,n,!0)).sendResponse_(o.requestid,"channelOpen",null),a(s))};e.addEventListener("message",i)})}constructor(e,r,t,n,a){this.win_=e,this.port_=r,this.isWebview_=!!t,this.token_=n||null,this.verifyToken_=!!a,this.requestIdCounter_=0,this.waitingForResponse_={},this.messageHandlers_={},this.defaultHandler_=null,this.port_.addEventListener("message",this.handleMessage_.bind(this)),this.port_.start()}registerHandler(e,r){this.messageHandlers_[e]=r}unregisterHandler(e){delete this.messageHandlers_[e]}setDefaultHandler(e){this.defaultHandler_=e}handleMessage_(e){(e=u(e.data))&&"__AMPHTML__"===e.app&&(this.token_&&this.verifyToken_&&e.messagingToken!==this.token_?this.logError_("amp-viewer-messaging: handleMessage_ error: ","invalid token"):"q"===e.type?this.handleRequest_(e):"s"===e.type&&this.handleResponse_(e))}sendRequest(e,r,t){let n=++this.requestIdCounter_,a=void 0;return t&&(a=new Promise((e,r)=>{this.waitingForResponse_[n]={resolve:e,reject:r}})),this.sendMessage_({app:"__AMPHTML__",requestid:n,type:"q",name:e,data:r,rsvp:t}),a}sendResponse_(e,r,t){this.sendMessage_({app:"__AMPHTML__",requestid:e,type:"s",name:r,data:t})}sendResponseError_(e,r,t){t=this.errorToString_(t),this.logError_("amp-viewer-messaging: sendResponseError_, message name: "+r,t),this.sendMessage_({app:"__AMPHTML__",requestid:e,type:"s",name:r,data:null,error:t})}sendMessage_(e){e=Object.assign(e,{}),this.token_&&!this.verifyToken_&&(e.messagingToken=this.token_),this.port_.postMessage(this.isWebview_?JSON.stringify(e):e)}handleRequest_(e){var r=this.messageHandlers_[e.name];if(r||(r=this.defaultHandler_),!r)throw(r=Error("Cannot handle request because no default handler is set!")).args=e.name,r;if(r=r(e.name,e.data,!!e.rsvp),e.rsvp){let t=e.requestid;if(!r)throw this.sendResponseError_(t,e.name,Error("no response")),Error("expected response but none given: "+e.name);r.then(r=>{this.sendResponse_(t,e.name,r)},r=>{this.sendResponseError_(t,e.name,r)})}}handleResponse_(e){let r=e.requestid,t=this.waitingForResponse_[r];t&&(delete this.waitingForResponse_[r],e.error?(this.logError_("amp-viewer-messaging: handleResponse_ error: ",e.error),t.reject(Error(`Request ${e.name} failed: ${e.error}`))):t.resolve(e.data))}logError_(e,r){this.win_&&(e="amp-messaging-error-logger: "+e,r=" data: "+this.errorToString_(r),this.win_.viewerState=e+r)}errorToString_(e){return e?e.message?e.message:String(e):"unknown error"}}var k,b,M=function(){function e(r){var t=this;n(this,e),this.documentHeightHandler=function(e,r,n){var a=String(r.height);return t.iframe.setAttribute("height",a),Promise.resolve().then((function(){t.onHeightChange&&t.onHeightChange(a)}))},this.iframe=r.getIframe(),this.messaging=r.getMessaging(),this.onHeightChange=r.getConfig().onHeightChange}return i(e,[{key:"start",value:function(){this.messaging.registerHandler("documentHeight",this.documentHeightHandler)}},{key:"documentLoaded",value:function(){}},{key:"documentUnloaded",value:function(){}}]),e}(),H=function(){function e(r){var t=this;n(this,e),this.loadErrorRejector=null,this.errorHandler=function(e,r,n){return t.loadErrorRejector&&r.a===k.Developer&&r.ex===b.Unexpected&&t.loadErrorRejector(r),Promise.resolve()},this.frameContainer=r,this.messaging=r.getMessaging(),this.config=r.getConfig()}return i(e,[{key:"start",value:function(){this.messaging.registerHandler("error",this.errorHandler)}},{key:"checkForLoadErrors",value:function(){var e=t(regeneratorRuntime.mark((function e(){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){r.loadErrorRejector=t,setTimeout((function(){return e}),r.config.failOnLoadErrorAfter)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.frameContainer.reportError(e.t0.m);case 8:this.loadErrorRejector=null;case 9:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"documentLoaded",value:function(){this.config.failOnLoadErrorAfter&&this.checkForLoadErrors()}},{key:"documentUnloaded",value:function(){}}]),e}();!function(e){e.Developer="0",e.User="1"}(k||(k={})),function(e){e.Unexpected="0",e.Expected="1"}(b||(b={}));var L=[{name:"IframeHeight",load:function(e){return(e=new M(e)).start(),e}},{name:"ErrorHandler",load:function(e){return(e=new H(e)).start(),e}}];h=function(){function e(r,t){var a=this;n(this,e),this.messaging=this.iframe=null,this.renderingModules=[],this.documentLoadResolver=null,this.messageHandlers={},this.messageHandler=function(e,r,t){return a.config.verboseMessages&&console.log("Received message: ".concat(e," ").concat(JSON.stringify(r))),Promise.resolve()},this.documentLoaded=function(e,r,t){a.documentLoadResolver&&(a.documentLoadResolver(),a.documentLoadResolver=null),e=!0,r=!1,t=void 0;try{for(var n,i=a.renderingModules[Symbol.iterator]();!(e=(n=i.next()).done);e=!0)n.value.documentLoaded()}catch(e){r=!0,t=e}finally{try{e||null==i.return||i.return()}finally{if(r)throw t}}return Promise.resolve()},this.parent=r,this.config=t,this.targetOrigin=this.getTargetOrigin(),this.messagingToken=this.generateMessagingToken(),this.enabledRenderingModules=new Set(w)}return i(e,[{key:"render",value:function(){var e=t(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.iframe&&(this.parent.removeChild(this.iframe),this.iframe=null,this.unloadDocument()),this.createViewerIframe(r),this.config.useSrcDoc){e.next=5;break}return e.next=5,this.injectAMP(r);case 5:return this.startLoadingTimer(t.onRenderSuccess,t.onRenderError),e.next=8,this.startMessaging();case 8:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"reinitialize",value:function(){var e=t(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.parent.querySelector("iframe")){e.next=3;break}return e.abrupt("return");case 3:return t=r.getAttribute("srcdoc")||"",this.parent.removeChild(r),this.createViewerIframe(t),this.startLoadingTimer(),e.next=9,this.startMessaging();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"reportError",value:function(e){if(this.iframe){this.unloadDocument();var r="Error loading AMP page.";e&&(r+="\n"+e),this.iframe.src="data:text/plain;base64,"+btoa(r),this.iframe.setAttribute("height","50")}}},{key:"getIframe",value:function(){if(!this.iframe)throw Error("iframe not initialized yet");return this.iframe}},{key:"getMessaging",value:function(){if(!this.messaging)throw Error("Messaging not initialized yet");return this.messaging}},{key:"getConfig",value:function(){return this.config}},{key:"enableRenderingModule",value:function(e){this.enabledRenderingModules.add(e)}},{key:"disableRenderingModule",value:function(e){this.enabledRenderingModules.delete(e)}},{key:"registerMessageHandler",value:function(e,r){this.messageHandlers[e]=r}},{key:"unloadDocument",value:function(){this.messaging=null;var e=!0,r=!1,t=void 0;try{for(var n,a=this.renderingModules[Symbol.iterator]();!(e=(n=a.next()).done);e=!0)n.value.documentUnloaded()}catch(e){r=!0,t=e}finally{try{e||null==a.return||a.return()}finally{if(r)throw t}}this.renderingModules=[]}},{key:"createViewerIframe",value:function(e){var r={width:"100%",height:"1",featurePolicy:p,sandbox:this.getIframeSandbox(),styles:y};this.config.useSrcDoc?(r.srcdoc=e,r.name=this.getIframeName()):r.src=this.getIframeSrc();var t=(e=this.parent).ownerDocument.createElement("iframe");r.width&&t.setAttribute("width",r.width),r.height&&t.setAttribute("height",r.height),t.setAttribute("allow",s(r.featurePolicy,"; ")),t.setAttribute("loading","eager"),r.className&&(t.className=r.className),r.styles&&(t.style.cssText=s(r.styles,"; ")),r.sandbox&&t.setAttribute("sandbox",s(r.sandbox," ")),r.src&&(t.src=r.src||""),r.srcdoc&&t.setAttribute("srcdoc",r.srcdoc),r.name&&(t.name=r.name),e.prepend(t),this.iframe=t}},{key:"waitForIframeLoad",value:function(){var e=t(regeneratorRuntime.mark((function e(){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){r.iframe.addEventListener("load",(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"injectAMP",value:function(){var e=t(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitForIframeLoad();case 2:this.iframe.contentWindow.postMessage({amp:r},"*");case 3:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"startLoadingTimer",value:function(){var e=t(regeneratorRuntime.mark((function e(r,t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,r){n.documentLoadResolver=e,n.config.loadTimeout&&setTimeout((function(){return r()}),n.config.loadTimeout)}));case 3:r&&r(),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),t&&t(e.t0),this.reportError("Loading timeout");case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(r,t){return e.apply(this,arguments)}}()},{key:"startMessaging",value:function(){var e=t(regeneratorRuntime.mark((function e(){var r,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.iframe.contentWindow,e.next=3,E.waitForHandshakeFromDocument(window,r,this.targetOrigin,this.messagingToken);case 3:this.messaging=e.sent,this.messaging.setDefaultHandler(this.messageHandler),this.messaging.registerHandler("documentLoaded",this.documentLoaded),Object.keys(this.messageHandlers).forEach((function(e){var r;null===(r=t.messaging)||void 0===r||r.registerHandler(e,t.messageHandlers[e])})),this.loadRenderingModules(),this.messaging.sendRequest("visibilitychange",{},!0);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadRenderingModules",value:function(){var e=!0,r=!1,t=void 0;try{for(var n,a=L[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var i=n.value;this.enabledRenderingModules.has(i.name)&&this.renderingModules.push(i.load(this))}}catch(e){r=!0,t=e}finally{try{e||null==a.return||a.return()}finally{if(r)throw t}}}},{key:"getIframeSandbox",value:function(){return this.config.useOpaqueOrigin?v:v.concat("allow-same-origin")}},{key:"getIframeSrc",value:function(){var e=this.config.relayPageURL,r=this.getIframeParameters();return e=r?e+"#"+o(r):e}},{key:"getIframeParameters",value:function(){return Object.assign({origin:window.location.origin,messagingToken:this.messagingToken},_)}},{key:"getIframeName",value:function(){return"__AMP__"+o(this.getIframeParameters())}},{key:"getParametersFromIframeName",value:function(){var e,r=null===(e=this.iframe)||void 0===e?void 0:e.name;e=((null==r?void 0:r.slice(7))||"").split("&"),r={};var t=!0,n=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var o=i.value;r[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}}catch(e){n=!0,a=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw a}}return r}},{key:"generateMessagingToken",value:function(){var e=new Uint8Array(32);return window.crypto.getRandomValues(e),e=String.fromCharCode.apply(null,Array.from(e)),btoa(e)}},{key:"getTargetOrigin",value:function(){return this.config.useOpaqueOrigin?"null":new URL(this.config.relayPageURL).origin}}]),e}();var T=[{name:"Validator",process:function(e,r){return c.apply(this,arguments)}}];return e.FrameContainer=h,e.preprocessAMP=function(e,r){return d.apply(this,arguments)},e}({});
//# sourceMappingURL=viewer.js.map
