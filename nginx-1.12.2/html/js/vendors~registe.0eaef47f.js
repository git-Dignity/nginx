(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors~registe"],{1784:function(t,e,n){"use strict";var i=n("1c8b"),r=n("58d8").left,s=n("d7e1"),o=n("ff9c"),u=s("reduce"),a=o("reduce",{1:0});i({target:"Array",proto:!0,forced:!u||!a},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"49a0":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));class i{constructor(){}isNoWord(t){return/^[^A-Za-z]*$/g.test(t)}isCHNAndEN(t){return/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(t)}isPostcode(t){return/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(t)}isWeChatNum(t){return/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(t)}isColor16(t){return/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(t)}isTrainNum(t){return/^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(t)}isIMEI(t){return/^\d{15,17}$/g.test(t)}isHttpAndPort(t){return/^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(t)}isRightWebsite(t){return/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(t)}isCreditCode(t){return/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(t)}isVideoUrl(t){return/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(t)}isImageUrl(t){return/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(t)}isAccountNumber(t){return/^[1-9]\d{9,29}$/g.test(t)}isChineseName(t){return/^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(t)}isEnglishName(t){return/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(t)}isLicensePlateNumberNER(t){return/[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(t)}isLicensePlateNumberNNER(t){return/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(t)}isLicensePlateNumber(t){return/^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(t)}isMPStrict(t){return/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(t)}isMPRelaxed(t){return/^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(t)}isEmail(t){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(t)}isLandlineTelephone(t){return/\d{3}-\d{8}|\d{4}-\d{7}/g.test(t)}isIDCard(t){return/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(t)}isPassport(t){return/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(t)}isWebAccount(t){return/^[a-zA-Z]\w{4,15}$/g.test(t)}isChineseCharacter(t){return/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(t)}isDecimal(t){return/^\d+\.\d+$/g.test(t)}isNumber(t){return/^\d{1,}$/g.test(t)}isQQNum(t){return/^[1-9][0-9]{4,10}$/g.test(t)}isNumAndStr(t){return/^[A-Za-z0-9]+$/g.test(t)}isEnglish(t){return/^[a-zA-Z]+$/g.test(t)}isCapital(t){return/^[A-Z]+$/g.test(t)}isLowercase(t){return/^[a-z]+$/g.test(t)}}n("f89b");class r{constructor(t){this.name=t}getName(){console.log(this.name)}}Window._=function(t){return new r(t)};Window._;class s{login(){console.log("模拟登陆的时候，只能有一个实例")}}s.getInstance=function(){let t;return function(){return t||(t=new s),t}}();s.getInstance();let o={name:"华晨宇",age:30,phone:"15915594"};new Proxy(o,{get:function(t,e){return"phone"===e?"agent:1556854544":"pirce"===e?12e4:t[e]},set:function(t,e,n){if("customPrice"===e){if(n<1e5)throw new Error("价格太低");return t[e]=n,!0}}});var u=n("d26e"),a=n.n(u);n("b5ab");function c(t){$("#"+t).text(h.state)}var f=c;let h=new a.a({init:"收藏",transitions:[{name:"doStore",from:"收藏",to:"取消收藏"},{name:"deleteStore",from:"取消收藏",to:"收藏"}],methods:{onDoStore:function(){f("btn")},onDeleteStore:function(){f("btn")}}});new a.a({init:"pending",transitions:[{name:"resolve",form:"pending",to:"fullfilled"},{name:"reject",form:"pending",to:"rejected"}],methods:{onResolve:(t,e)=>{e.SuccessList.forEach(t=>t())},onReject:(t,e)=>{e.failList.forEach(t=>t())}}})},"58d8":function(t,e,n){var i=n("0c3c"),r=n("3553"),s=n("692f"),o=n("d88d"),u=function(t){return function(e,n,u,a){i(n);var c=r(e),f=s(c),h=o(c.length),d=t?h-1:0,l=t?-1:1;if(u<2)while(1){if(d in f){a=f[d],d+=l;break}if(d+=l,t?d<0:h<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:h>d;d+=l)d in f&&(a=n(a,f[d],d,c));return a}};t.exports={left:u(!1),right:u(!0)}},d26e:function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,r;for(n=1;n<arguments.length;n++)for(r in i=arguments[n],i)i.hasOwnProperty(r)&&(t[r]=i[r]);return t}},function(t,e,n){"use strict";var i=n(0);t.exports={build:function(t,e){var n,r,s,o=e.plugins;for(n=0,r=o.length;n<r;n++)s=o[n],s.methods&&i(t,s.methods),s.properties&&Object.defineProperties(t,s.properties)},hook:function(t,e,n){var i,r,s,o,u=t.config.plugins,a=[t.context];for(n&&(a=a.concat(n)),i=0,r=u.length;i<r;i++)o=u[i],s=u[i][e],s&&s.apply(o,a)}}},function(t,e,n){"use strict";function i(t){if(0===t.length)return t;var e,n,i=t.split(/[_-]/);if(1===i.length&&i[0][0].toLowerCase()===i[0][0])return t;for(n=i[0].toLowerCase(),e=1;e<i.length;e++)n=n+i[e].charAt(0).toUpperCase()+i[e].substring(1).toLowerCase();return n}i.prepended=function(t,e){return e=i(e),t+e[0].toUpperCase()+e.substring(1)},t.exports=i},function(t,e,n){"use strict";var i=n(0),r=n(2);function s(t,e){t=t||{},this.options=t,this.defaults=e.defaults,this.states=[],this.transitions=[],this.map={},this.lifecycle=this.configureLifecycle(),this.init=this.configureInitTransition(t.init),this.data=this.configureData(t.data),this.methods=this.configureMethods(t.methods),this.map[this.defaults.wildcard]={},this.configureTransitions(t.transitions||[]),this.plugins=this.configurePlugins(t.plugins,e.plugin)}i(s.prototype,{addState:function(t){this.map[t]||(this.states.push(t),this.addStateLifecycleNames(t),this.map[t]={})},addStateLifecycleNames:function(t){this.lifecycle.onEnter[t]=r.prepended("onEnter",t),this.lifecycle.onLeave[t]=r.prepended("onLeave",t),this.lifecycle.on[t]=r.prepended("on",t)},addTransition:function(t){this.transitions.indexOf(t)<0&&(this.transitions.push(t),this.addTransitionLifecycleNames(t))},addTransitionLifecycleNames:function(t){this.lifecycle.onBefore[t]=r.prepended("onBefore",t),this.lifecycle.onAfter[t]=r.prepended("onAfter",t),this.lifecycle.on[t]=r.prepended("on",t)},mapTransition:function(t){var e=t.name,n=t.from,i=t.to;return this.addState(n),"function"!==typeof i&&this.addState(i),this.addTransition(e),this.map[n][e]=t,t},configureLifecycle:function(){return{onBefore:{transition:"onBeforeTransition"},onAfter:{transition:"onAfterTransition"},onEnter:{state:"onEnterState"},onLeave:{state:"onLeaveState"},on:{transition:"onTransition"}}},configureInitTransition:function(t){return"string"===typeof t?this.mapTransition(i({},this.defaults.init,{to:t,active:!0})):"object"===typeof t?this.mapTransition(i({},this.defaults.init,t,{active:!0})):(this.addState(this.defaults.init.from),this.defaults.init)},configureData:function(t){return"function"===typeof t?t:"object"===typeof t?function(){return t}:function(){return{}}},configureMethods:function(t){return t||{}},configurePlugins:function(t,e){var n,i,r;for(t=t||[],n=0,i=t.length;n<i;n++)r=t[n],"function"===typeof r&&(t[n]=r=r()),r.configure&&r.configure(this);return t},configureTransitions:function(t){var e,n,i,r,s,o=this.defaults.wildcard;for(n=0;n<t.length;n++)for(i=t[n],r=Array.isArray(i.from)?i.from:[i.from||o],s=i.to||o,e=0;e<r.length;e++)this.mapTransition({name:i.name,from:r[e],to:s})},transitionFor:function(t,e){var n=this.defaults.wildcard;return this.map[t][e]||this.map[n][e]},transitionsFor:function(t){var e=this.defaults.wildcard;return Object.keys(this.map[t]).concat(Object.keys(this.map[e]))},allStates:function(){return this.states},allTransitions:function(){return this.transitions}}),t.exports=s},function(t,e,n){var i=n(0),r=n(6),s=n(1),o=[null,[]];function u(t,e){this.context=t,this.config=e,this.state=e.init.from,this.observers=[t]}i(u.prototype,{init:function(t){if(i(this.context,this.config.data.apply(this.context,t)),s.hook(this,"init"),this.config.init.active)return this.fire(this.config.init.name,[])},is:function(t){return Array.isArray(t)?t.indexOf(this.state)>=0:this.state===t},isPending:function(){return this.pending},can:function(t){return!this.isPending()&&!!this.seek(t)},cannot:function(t){return!this.can(t)},allStates:function(){return this.config.allStates()},allTransitions:function(){return this.config.allTransitions()},transitions:function(){return this.config.transitionsFor(this.state)},seek:function(t,e){var n=this.config.defaults.wildcard,i=this.config.transitionFor(this.state,t),r=i&&i.to;return"function"===typeof r?r.apply(this.context,e):r===n?this.state:r},fire:function(t,e){return this.transit(t,this.state,this.seek(t,e),e)},transit:function(t,e,n,i){var r=this.config.lifecycle,s=this.config.options.observeUnchangedState||e!==n;return n?this.isPending()?this.context.onPendingTransition(t,e,n):(this.config.addState(n),this.beginTransit(),i.unshift({transition:t,from:e,to:n,fsm:this.context}),this.observeEvents([this.observersForEvent(r.onBefore.transition),this.observersForEvent(r.onBefore[t]),s?this.observersForEvent(r.onLeave.state):o,s?this.observersForEvent(r.onLeave[e]):o,this.observersForEvent(r.on.transition),s?["doTransit",[this]]:o,s?this.observersForEvent(r.onEnter.state):o,s?this.observersForEvent(r.onEnter[n]):o,s?this.observersForEvent(r.on[n]):o,this.observersForEvent(r.onAfter.transition),this.observersForEvent(r.onAfter[t]),this.observersForEvent(r.on[t])],i)):this.context.onInvalidTransition(t,e,n)},beginTransit:function(){this.pending=!0},endTransit:function(t){return this.pending=!1,t},failTransit:function(t){throw this.pending=!1,t},doTransit:function(t){this.state=t.to},observe:function(t){if(2===t.length){var e={};e[t[0]]=t[1],this.observers.push(e)}else this.observers.push(t[0])},observersForEvent:function(t){for(var e,n=0,i=this.observers.length,r=[];n<i;n++)e=this.observers[n],e[t]&&r.push(e);return[t,r,!0]},observeEvents:function(t,e,n,i){if(0===t.length)return this.endTransit(void 0===i||i);var r=t[0][0],o=t[0][1],u=t[0][2];if(e[0].event=r,r&&u&&r!==n&&s.hook(this,"lifecycle",e),0===o.length)return t.shift(),this.observeEvents(t,e,r,i);var a=o.shift(),c=a[r].apply(a,e);return c&&"function"===typeof c.then?c.then(this.observeEvents.bind(this,t,e,r)).catch(this.failTransit.bind(this)):!1===c?this.endTransit(!1):this.observeEvents(t,e,r,c)},onInvalidTransition:function(t,e,n){throw new r("transition is invalid in current state",t,e,n,this.state)},onPendingTransition:function(t,e,n){throw new r("transition is invalid while previous transition is still in progress",t,e,n,this.state)}}),t.exports=u},function(t,e,n){"use strict";var i=n(0),r=n(2),s=n(1),o=n(3),u=n(4),a={is:function(t){return this._fsm.is(t)},can:function(t){return this._fsm.can(t)},cannot:function(t){return this._fsm.cannot(t)},observe:function(){return this._fsm.observe(arguments)},transitions:function(){return this._fsm.transitions()},allTransitions:function(){return this._fsm.allTransitions()},allStates:function(){return this._fsm.allStates()},onInvalidTransition:function(t,e,n){return this._fsm.onInvalidTransition(t,e,n)},onPendingTransition:function(t,e,n){return this._fsm.onPendingTransition(t,e,n)}},c={state:{configurable:!1,enumerable:!0,get:function(){return this._fsm.state},set:function(t){throw Error("use transitions to change state")}}};function f(t){return d(this||{},t)}function h(){var t,e;"function"===typeof arguments[0]?(t=arguments[0],e=arguments[1]||{}):(t=function(){this._fsm.apply(this,arguments)},e=arguments[0]||{});var n=new o(e,f);return l(t.prototype,n),t.prototype._fsm.config=n,t}function d(t,e){var n=new o(e,f);return l(t,n),t._fsm(),t}function l(t,e){if("object"!==typeof t||Array.isArray(t))throw Error("StateMachine can only be applied to objects");s.build(t,e),Object.defineProperties(t,c),i(t,a),i(t,e.methods),e.allTransitions().forEach((function(e){t[r(e)]=function(){return this._fsm.fire(e,[].slice.call(arguments))}})),t._fsm=function(){this._fsm=new u(this,e),this._fsm.init(arguments)}}f.version="3.0.1",f.factory=h,f.apply=d,f.defaults={wildcard:"*",init:{name:"init",from:"none"}},t.exports=f},function(t,e,n){"use strict";t.exports=function(t,e,n,i,r){this.message=t,this.transition=e,this.from=n,this.to=i,this.current=r}}])}))},f89b:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Browser}));class Browser{constructor(){}currentURL(){return window.location.href}getClientHeight(){let t=0;return t=document.body.clientHeight&&document.documentElement.clientHeight?document.body.clientHeight<document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight:document.body.clientHeight>document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight,t}getPageViewWidth(){let t=document,e="BackCompat"==t.compatMode?t.body:t.documentElement;return e.clientWidth}getPageWidth(){let t=document,e=t.body,n=t.documentElement,i="BackCompat"==t.compatMode?e:t.documentElement;return Math.max(n.scrollWidth,e.scrollWidth,i.clientWidth)}getViewportOffset(){return window.innerWidth?{w:window.innerWidth,h:window.innerHeight}:"BackCompat"===document.compatMode?{w:document.body.clientWidth,h:document.body.clientHeight}:{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}getPageScrollTop(){let t=document;return t.documentElement.scrollTop||t.body.scrollTop}getPageScrollLeft(){let t=document;return t.documentElement.scrollLeft||t.body.scrollLeft}getScrollPosition(t=window){return{x:void 0!==t.pageXOffset?t.pageXOffset:t.scrollLeft,y:void 0!==t.pageYOffset?t.pageYOffset:t.scrollTop}}smoothScroll(t){t=1==t?"start":"end",document.documentElement.scrollIntoView({behavior:"smooth",block:t,inline:"nearest"})}httpsRedirect(){"https:"!==location.protocol&&location.replace("https://"+location.href.split("//")[1])}openWindow(url,windowName,width,height){var x=parseInt(screen.width/2)-width/2,y=parseInt(screen.height/2)-height/2,isMSIE="Microsoft Internet Explorer"==navigator.appName;if(isMSIE){var p="resizable=1,location=no,scrollbars=no,width=";p+=width,p+=",height=",p+=height,p+=",left=",p+=x,p+=",top=",p+=y,window.open(url,windowName,p)}else{var win=window.open(url,"ZyiisPopup","top="+y+",left="+x+",scrollbars="+scrollbars+",dialog=yes,modal=yes,width="+width+",height="+height+",resizable=no");eval("try { win.resizeTo(width, height); } catch(e) { }"),win.focus()}}}}}]);