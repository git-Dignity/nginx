(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["registe"],{"048f":function(e,t,a){},4936:function(e,t,a){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},"5d24":function(e,t,a){"use strict";var o=a("048f"),n=a.n(o);n.a},bb67:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[a("div",{staticClass:"title-container"},[a("h3",{staticClass:"title"},[e._v(e._s(e.$t("registe.title")))]),a("lang-select",{staticClass:"set-language"})],1),a("el-form-item",{attrs:{prop:"username"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{name:"user"}})],1),a("el-input",{ref:"username",attrs:{placeholder:e.$t("login.username"),name:"username",type:"text",maxlength:"10","show-word-limit":"",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),a("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[a("el-form-item",{attrs:{prop:"password"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{name:"password"}})],1),a("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:function(t){return e.checkCapslock(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),a("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[a("svg-icon",{attrs:{name:"password"===e.passwordType?"eye-off":"eye-on"}})],1)],1)],1),a("el-form-item",{attrs:{prop:"phone"}},[a("span",{staticClass:"svg-container"},[a("i",{staticClass:"el-icon-phone"})]),a("el-input",{ref:"phone",attrs:{placeholder:e.$t("registe.phone"),name:"phone",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.phone,callback:function(t){e.$set(e.loginForm,"phone",t)},expression:"loginForm.phone"}})],1),a("el-form-item",{attrs:{prop:"postbox"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{name:"email"}})],1),a("el-input",{ref:"postbox",attrs:{placeholder:e.$t("registe.postbox"),name:"postbox",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.postbox,callback:function(t){e.$set(e.loginForm,"postbox",t)},expression:"loginForm.postbox"}})],1),a("el-form-item",{attrs:{prop:"photo"}},[a("span",{staticClass:"svg-container"},[a("i",{staticClass:"el-icon-picture-outline"})]),a("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{action:"/certificateAuthentication/upload","http-request":e.uoload,accept:".png, .jpg, .gif, .jpeg","show-file-list":!1,"auto-upload":!1,"on-change":e.changeSingerImg,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"danger"},nativeOn:{click:function(t){return t.preventDefault(),e.handleRegiste(t)}}},[e._v(e._s(e.$t("registe.registeIn")))])],1)],1)},n=[],s=(a("1784"),a("fe8a"),a("e18c"),a("96db"),a("af86"),a("f1a9"),a("b449"),a("17d6")),r=a("4324"),i=a("1b6a"),l=a("a549"),c=a("7ae9"),p=a("0a8e"),u=a("49a0"),m=a("4bb7"),g=a("1131"),d=a("b8f0"),h=a("82ae"),f=a.n(h),b=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.validateUsername=function(e,t,a){t.length<3?a(new Error("The username can not be less than 3 digits")):a()},e.validatePassword=function(e,t,a){t.length<6?a(new Error("The password can not be less than 6 digits")):a()},e.validatePhone=function(t,a,o){e.myCheck.isMPRelaxed(a)?o():o(new Error("The phone number is not valid"))},e.validatePostbox=function(t,a,o){e.myCheck.isEmail(a)?o():o(new Error("Are you 确定是 yes postbox？？？"))},e.imageUrl="",e.myCheck=new u["a"],e.uploadFile=function(e){return console.log(e),new Promise((function(t,a){f.a.post("http://localhost:3333/users/register",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t(e.data)})).catch((function(e){a(e.data)}))}))},e.loginForm={username:"",password:"",phone:"",postbox:""},e.loginRules={username:[{validator:e.validateUsername,trigger:"blur"}],password:[{validator:e.validatePassword,trigger:"blur"}],phone:[{validator:e.validatePhone,trigger:"blur"}],postbox:[{validator:e.validatePostbox,trigger:"blur"}]},e.passwordType="password",e.loading=!1,e.showDialog=!1,e.capsTooltip=!1,e.otherQuery={},e}return Object(i["a"])(a,[{key:"uoload",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("info",JSON.stringify(this.loginForm)),a.append("file",t.file),e.next=5,Object(d["e"])(a);case 5:o=e.sent,0!==o.result.length&&(this.$router.push({path:"/login",query:{}}),this.$message({message:"注册成功",type:"success"}));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"changeSingerImg",value:function(e){this.imageUrl=URL.createObjectURL(e.raw),this.$message("歌手图片已选中")}},{key:"beforeAvatarUpload",value:function(e){var t=e.size/1024/1024<20;return"image/jpeg"!==e.type&&"image/jpg"!==e.type&&"image/png"!==e.type&&"image/gif"!==e.type?(this.$message.error("只能上传图片格式文件!"),!1):t?void 0:(this.$message.error("上传头像图片大小不能超过 20MB!"),!1)}},{key:"onRouteChange",value:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))}},{key:"mounted",value:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()}},{key:"checkCapslock",value:function(e){var t=e.key;this.capsTooltip=null!==t&&1===t.length&&t>="A"&&t<="Z"}},{key:"showPwd",value:function(){var e=this;""===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))}},{key:"handleRegiste",value:function(){var e=this;this.$refs.loginForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a||0===e.$refs.upload.uploadFiles.length){t.next=4;break}e.$refs.upload.submit(),t.next=6;break;case 4:return e.$message.error("检查是否缺失参数!"),t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getOtherQuery",value:function(e){return Object.keys(e).reduce((function(t,a){return"redirect"!==a&&(t[a]=e[a]),t}),{})}}]),a}(m["c"]);Object(p["a"])([Object(m["d"])("$route",{immediate:!0})],b.prototype,"onRouteChange",null),b=Object(p["a"])([Object(m["a"])({name:"Registe",components:{LangSelect:g["a"]}})],b);var v=b,w=v,y=(a("be94"),a("5d24"),a("e90a")),x=Object(y["a"])(w,o,n,!1,null,"0b363032",null);t["default"]=x.exports},be94:function(e,t,a){"use strict";var o=a("4936"),n=a.n(o);n.a}}]);