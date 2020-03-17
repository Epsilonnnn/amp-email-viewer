function e(e,r,t,n,s,i,a){try{var o=e[i](a),d=o.value}catch(e){return void t(e)}o.done?r(d):Promise.resolve(d).then(n,s)}function r(r){return function(){var t=this,n=arguments;return new Promise((function(s,i){function a(r){e(d,s,i,a,o,"next",r)}function o(r){e(d,s,i,a,o,"throw",r)}var d=r.apply(t,n);a(void 0)}))}}function t(e,r){return e?Array.isArray(e)?e.join(r):e:""}var n,s=n||(n={});s.A2A="a2a",s.CLIENT_ID_SERVICE="cid",s.ERROR_REPORTER="errorReporter",s.FRAGMENT="fragment",s.HANDSHAKEPOLL="handshakepoll",s.NAVIGATE_TO="navigateTo",s.REPLACE_URL="replaceUrl",s.SWIPE="swipe",s.VIEWER_RENDER_TEMPLATE="viewerRenderTemplate",s.XHR_INTERCEPTOR="xhrInterceptor";var i,a=i||(i={});a.NATURAL="natural",a.NATURAL_IOS_EMBED="natural-ios-embed";var o,d=o||(o={});function l(e){var r,t=[];for(r of Object.keys(e)){var n=e[r];void 0!==n&&("boolean"==typeof n&&(n=n?1:0),t.push(encodeURIComponent(r)+"="+encodeURIComponent(n)))}return t.join("&")}d.INACTIVE="inactive",d.PAUSED="paused",d.VISIBLE="visible",d.PRERENDER="prerender",d.HIDDEN="hidden";var g="autoplay 'none';camera 'none';encrypted-media 'none';fullscreen 'none';geolocation 'none';gyroscope 'none';magnetometer 'none';microphone 'none';midi 'none';payment 'none';speaker 'none';sync-xhr 'none';vr 'none'".split(";"),h=["allow-scripts","allow-forms","allow-popups","allow-popups-to-escape-sandbox"],c=["border: none","overflow: hidden"],m={prerenderSize:0,visibilityState:o.VISIBLE,paddingTop:0,history:!0,p2r:!1,horizontalScrolling:!1,storage:!0,development:!1,log:!1,csi:!0,cap:[n.XHR_INTERCEPTOR,n.ERROR_REPORTER]},u=["IframeHeight","ErrorHandler"];let p="q",f="s";function _(e){if("string"!=typeof e)return e;if("{"!=e.charAt(0))return null;try{return JSON.parse(e)}catch(e){return null}}class v{constructor(e,r,t){this.win_=e,this.origin_=r,this.target_=t}addEventListener(e,r){this.win_.addEventListener("message",e=>{e.origin==this.origin_&&e.source==this.target_&&r(e)})}postMessage(e){this.target_.postMessage(e,"null"===this.origin_?"*":this.origin_)}start(){}}class E{static initiateHandshakeWithDocument(e,r){return new Promise(t=>{let n=setInterval(()=>{let s;try{s=new MessageChannel}catch(e){console.log(e,"err")}e.postMessage({app:"__AMPHTML__",name:"handshake-poll"},"*",[s.port2]);const i=s.port1,a=e=>{if((e=_(e.data))&&"__AMPHTML__"===e.app&&"channelOpen"===e.name){clearInterval(n),i.removeEventListener("message",a);const s=new E(null,i,!1,r,!0);s.sendResponse_(e.requestid,"channelOpen",null),t(s)}};i.addEventListener("message",a),i.start()},1e3)})}static waitForHandshakeFromDocument(e,r,t,n){return new Promise(s=>{let i=a=>{const o=_(a.data);!o||a.origin!=t||a.source&&a.source!=r||"__AMPHTML__"!==o.app||"channelOpen"!==o.name||(e.removeEventListener("message",i),a=new v(e,t,r),(a=new E(null,a,!1,n,!0)).sendResponse_(o.requestid,"channelOpen",null),s(a))};e.addEventListener("message",i)})}constructor(e,r,t,n,s){this.win_=e,this.port_=r,this.isWebview_=!!t,this.token_=n||null,this.verifyToken_=!!s,this.requestIdCounter_=0,this.waitingForResponse_={},this.messageHandlers_={},this.defaultHandler_=null,this.port_.addEventListener("message",this.handleMessage_.bind(this)),this.port_.start()}registerHandler(e,r){this.messageHandlers_[e]=r}unregisterHandler(e){delete this.messageHandlers_[e]}setDefaultHandler(e){this.defaultHandler_=e}handleMessage_(e){(e=_(e.data))&&"__AMPHTML__"===e.app&&(this.token_&&this.verifyToken_&&e.messagingToken!==this.token_?this.logError_("amp-viewer-messaging: handleMessage_ error: ","invalid token"):e.type===p?this.handleRequest_(e):e.type===f&&this.handleResponse_(e))}sendRequest(e,r,t){let n=++this.requestIdCounter_,s=void 0;return t&&(s=new Promise((e,r)=>{this.waitingForResponse_[n]={resolve:e,reject:r}})),this.sendMessage_({app:"__AMPHTML__",requestid:n,type:p,name:e,data:r,rsvp:t}),s}sendResponse_(e,r,t){this.sendMessage_({app:"__AMPHTML__",requestid:e,type:f,name:r,data:t})}sendResponseError_(e,r,t){t=this.errorToString_(t),this.logError_("amp-viewer-messaging: sendResponseError_, message name: "+r,t),this.sendMessage_({app:"__AMPHTML__",requestid:e,type:f,name:r,data:null,error:t})}sendMessage_(e){e=Object.assign(e,{}),this.token_&&!this.verifyToken_&&(e.messagingToken=this.token_),this.port_.postMessage(this.isWebview_?JSON.stringify(e):e)}handleRequest_(e){var r=this.messageHandlers_[e.name];if(r||(r=this.defaultHandler_),!r)throw(r=Error("Cannot handle request because no default handler is set!")).args=e.name,r;if(r=r(e.name,e.data,!!e.rsvp),e.rsvp){let t=e.requestid;if(!r)throw this.sendResponseError_(t,e.name,Error("no response")),Error("expected response but none given: "+e.name);r.then(r=>{this.sendResponse_(t,e.name,r)},r=>{this.sendResponseError_(t,e.name,r)})}}handleResponse_(e){let r=e.requestid,t=this.waitingForResponse_[r];t&&(delete this.waitingForResponse_[r],e.error?(this.logError_("amp-viewer-messaging: handleResponse_ error: ",e.error),t.reject(Error(`Request ${e.name} failed: ${e.error}`))):t.resolve(e.data))}logError_(e,r){this.win_&&(e="amp-messaging-error-logger: "+e,r=" data: "+this.errorToString_(r),this.win_.viewerState=e+r)}errorToString_(e){return e?e.message?e.message:String(e):"unknown error"}}class R{constructor(e){this.documentHeightHandler=(e,r)=>(this.iframe.setAttribute("height",String(r.height)),Promise.resolve()),this.iframe=e.getIframe(),this.messaging=e.getMessaging()}start(){this.messaging.registerHandler("documentHeight",this.documentHeightHandler)}documentLoaded(){}documentUnloaded(){}}class w{constructor(e){this.loadErrorRejector=null,this.errorHandler=(e,r)=>(this.loadErrorRejector&&r.a===M.Developer&&r.ex===L.Unexpected&&this.loadErrorRejector(r),Promise.resolve()),this.frameContainer=e,this.messaging=e.getMessaging(),this.config=e.getConfig()}start(){this.messaging.registerHandler("error",this.errorHandler)}checkForLoadErrors(){var e=this;return r((function*(){try{yield new Promise((r,t)=>{e.loadErrorRejector=t,setTimeout(()=>r,e.config.failOnLoadErrorAfter)})}catch(r){e.frameContainer.reportError(r.m)}e.loadErrorRejector=null}))()}documentLoaded(){this.config.failOnLoadErrorAfter&&this.checkForLoadErrors()}documentUnloaded(){}}var M,y=M||(M={});y.Developer="0",y.User="1";var L,T=L||(L={});T.Unexpected="0",T.Expected="1";var H=[{name:"IframeHeight",load:function(e){return(e=new R(e)).start(),e}},{name:"ErrorHandler",load:function(e){return(e=new w(e)).start(),e}}];function A(){return(A=r((function*(e){if("PASS"!==(yield I()).validateString(e,"AMP4EMAIL").status)throw Error("AMP validation failed");return e}))).apply(this,arguments)}function I(){return new Promise(e=>{if(window.amp&&window.amp.validator)e(window.amp.validator);else{var r=Array.from(document.getElementsByTagName("script")).find(e=>(({src:e}=e),"https://cdn.ampproject.org/v0/validator.js"===e));r||((r=document.createElement("script")).src="https://cdn.ampproject.org/v0/validator.js",document.body.appendChild(r)),r.addEventListener("load",()=>e(window.amp.validator))}})}var P=[{name:"Validator",process:function(e,r){return A.apply(this,arguments)}}];function b(){return(b=r((function*(e,r){var t,n=new Set(r.skipPreprocessingModules||[]);for(t of P)n.has(t.name)||(e=yield t.process(e,r));return e}))).apply(this,arguments)}var S=class{constructor(e,r){this.messaging=this.iframe=null,this.renderingModules=[],this.documentLoadResolver=null,this.messageHandlers={},this.messageHandler=(e,r)=>(this.config.verboseMessages&&console.log("Received message: "+e+" "+JSON.stringify(r)),Promise.resolve()),this.documentLoaded=()=>{for(var e of(this.documentLoadResolver&&(this.documentLoadResolver(),this.documentLoadResolver=null),this.renderingModules))e.documentLoaded();return Promise.resolve()},this.parent=e,this.config=r,this.targetOrigin=this.getTargetOrigin(),this.messagingToken=this.generateMessagingToken(),this.enabledRenderingModules=new Set(u)}render(e,t){var n=this;return r((function*(){n.iframe&&(n.parent.removeChild(n.iframe),n.iframe=null,n.unloadDocument()),n.createViewerIframe(e),n.config.useSrcDoc||(yield n.injectAMP(e)),n.startLoadingTimer(t.onRenderSuccess,t.onRenderError),yield n.startMessaging(),n.setIframeConnected()}))()}reinitialize(){var e=this;return r((function*(){e.iframe=e.parent.querySelector("iframe"),e.iframe&&!e.isIframeConnected()&&(yield e.startMessaging(),e.setIframeConnected())}))()}setIframeConnected(){var e;null==(e=this.iframe)||e.setAttribute("data-connected","true")}isIframeConnected(){var e;return!(null==(e=this.iframe)||!e.dataset.connected)}reportError(e){if(this.iframe){this.unloadDocument();var r="Error loading AMP page.";e&&(r+="\n"+e),this.iframe.src="data:text/plain;base64,"+btoa(r),this.iframe.setAttribute("height","50")}}getIframe(){if(!this.iframe)throw Error("iframe not initialized yet");return this.iframe}getMessaging(){if(!this.messaging)throw Error("Messaging not initialized yet");return this.messaging}getConfig(){return this.config}enableRenderingModule(e){this.enabledRenderingModules.add(e)}disableRenderingModule(e){this.enabledRenderingModules.delete(e)}registerMessageHandler(e,r){this.messageHandlers[e]=r}unloadDocument(){for(var e of(this.messaging=null,this.renderingModules))e.documentUnloaded();this.renderingModules=[]}createViewerIframe(e){var r={width:"100%",height:"1",featurePolicy:g,sandbox:this.getIframeSandbox(),styles:c};this.config.useSrcDoc?(r.srcdoc=e,r.name=this.getIframeName()):r.src=this.getIframeSrc();var n=(e=this.parent).ownerDocument.createElement("iframe");r.width&&n.setAttribute("width",r.width),r.height&&n.setAttribute("height",r.height),n.setAttribute("allow",t(r.featurePolicy,"; ")),n.setAttribute("loading","eager"),r.className&&(n.className=r.className),r.styles&&(n.style.cssText=t(r.styles,"; ")),r.sandbox&&n.setAttribute("sandbox",t(r.sandbox," ")),r.src&&(n.src=r.src||""),r.srcdoc&&n.setAttribute("srcdoc",r.srcdoc),r.name&&(n.name=r.name),e.prepend(n),this.iframe=n}waitForIframeLoad(){var e=this;return r((function*(){return new Promise(r=>{e.iframe.addEventListener("load",()=>r())})}))()}injectAMP(e){var t=this;return r((function*(){yield t.waitForIframeLoad(),t.iframe.contentWindow.postMessage({amp:e},"*")}))()}startLoadingTimer(e,t){var n=this;return r((function*(){try{yield new Promise((e,r)=>{n.documentLoadResolver=e,n.config.loadTimeout&&setTimeout(()=>r(),n.config.loadTimeout)}),e&&e()}catch(e){t&&t(e),n.reportError("Loading timeout")}}))()}startMessaging(){var e=this;return r((function*(){var r=yield E.waitForHandshakeFromDocument(window,e.iframe.contentWindow,e.targetOrigin,e.messagingToken);e.messaging=r,e.messaging.setDefaultHandler(e.messageHandler),e.messaging.registerHandler("documentLoaded",e.documentLoaded),Object.keys(e.messageHandlers).forEach(r=>{var t;null==(t=e.messaging)||t.registerHandler(r,e.messageHandlers[r])}),e.loadRenderingModules(),e.messaging.sendRequest("visibilitychange",{},!0)}))()}loadRenderingModules(){for(var e of H)this.enabledRenderingModules.has(e.name)&&this.renderingModules.push(e.load(this))}getIframeSandbox(){return this.config.useOpaqueOrigin?h:h.concat("allow-same-origin")}getIframeSrc(){var e=this.config.relayPageURL,r=this.getIframeParameters();return e=r?e+"#"+l(r):e}getIframeParameters(){return Object.assign({origin:window.location.origin,messagingToken:this.messagingToken},m)}getIframeName(){return"__AMP__"+l(this.getIframeParameters())}generateMessagingToken(){var e=new Uint8Array(32);return window.crypto.getRandomValues(e),e=String.fromCharCode.apply(null,Array.from(e)),btoa(e)}getTargetOrigin(){return this.config.useOpaqueOrigin?"null":new URL(this.config.relayPageURL).origin}},O=function(e,r){return b.apply(this,arguments)};export{S as FrameContainer,O as preprocessAMP};
//# sourceMappingURL=viewer.mjs.map
