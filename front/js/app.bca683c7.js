(function(e){function t(t){for(var i,o,n=t[0],l=t[1],u=t[2],c=0,f=[];c<n.length;c++)o=n[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},s={app:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c81":function(e,t,a){"use strict";var i=a("2ba9"),s=a.n(i);s.a},"2ba9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r={name:"app",data:function(){return{}}},o=r,n=a("2877"),l=Object(n["a"])(o,i,s,!1,null,"a644d7bc",null),u=l.exports,d=a("2b0e"),c=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"min-width":"1000px","min-height":"500px"},style:e.bgpic},[a("div",{staticStyle:{height:"100vh",width:"100%"}},[a("div",{staticStyle:{width:"100%","padding-top":"10%",height:"80%","text-align":"center"}},[a("el-form",{staticStyle:{margin:"0px auto",width:"25%","background-color":"Transparent","text-align":"center","min-width":"300px"}},[a("h1",{staticStyle:{color:"#C0C4CC","font-size":"30px","padding-left":"10%"}},[e._v("CloudFolder")]),a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{staticStyle:{width:"80%"},model:{value:e.userlogininfo.userId,callback:function(t){e.$set(e.userlogininfo,"userId",t)},expression:"userlogininfo.userId"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{type:"password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.userLogin(t)}},model:{value:e.userlogininfo.password,callback:function(t){e.$set(e.userlogininfo,"password",t)},expression:"userlogininfo.password"}})],1),a("el-form-item",{staticStyle:{"padding-left":"10%"}},[a("el-button",{staticStyle:{width:"40%"},attrs:{type:"primary"},on:{click:e.userLogin}},[e._v("登录")]),a("el-button",{staticStyle:{width:"40%"},attrs:{type:"info"},on:{click:function(t){e.registerDialog=!0}}},[e._v("注册")])],1)],1)],1)]),a("el-dialog",{staticStyle:{"min-width":"200px"},attrs:{visible:e.registerDialog,width:"30%"},on:{"update:visible":function(t){e.registerDialog=t}}},[a("el-form",{staticStyle:{"text-align":"center"}},[a("h3",[e._v("用户注册")]),a("el-form-item",{attrs:{label:"设置账号"}},[a("el-input",{staticStyle:{width:"70%"},model:{value:e.userregisterinfo.id,callback:function(t){e.$set(e.userregisterinfo,"id",t)},expression:"userregisterinfo.id"}})],1),a("el-form-item",{attrs:{label:"设置密码"}},[a("el-input",{staticStyle:{width:"70%"},attrs:{type:"password"},model:{value:e.userregisterinfo.pwd,callback:function(t){e.$set(e.userregisterinfo,"pwd",t)},expression:"userregisterinfo.pwd"}})],1),a("el-form-item",{attrs:{label:"确认密码"}},[a("el-input",{staticStyle:{width:"70%"},attrs:{type:"password"},model:{value:e.userregisterinfo.enpwd,callback:function(t){e.$set(e.userregisterinfo,"enpwd",t)},expression:"userregisterinfo.enpwd"}})],1),a("el-form-item",{attrs:{label:"输入姓名"}},[a("el-input",{staticStyle:{width:"70%"},model:{value:e.userregisterinfo.name,callback:function(t){e.$set(e.userregisterinfo,"name",t)},expression:"userregisterinfo.name"}})],1),a("el-form-item",[a("el-button",{staticClass:"ensureregister",attrs:{type:"primary",round:"",icon:"el-icon-check"},on:{click:e.ensureregis}},[e._v("确定注册")])],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"})],1)],1)},p=[],g=(a("b0c0"),{data:function(){return{registerDialog:!1,userregisterinfo:{id:"",pwd:"",enpwd:"",name:""},userlogininfo:{userId:"",password:""},bgpic:{backgroundImage:"url("+a("b34c")+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}},methods:{userLogin:function(){var e=this;if(""!=this.userlogininfo.userId&&""!=this.userlogininfo.password){var t="/pan/user/login";this.$ajax.post(t,{user_id:this.userlogininfo.userId,password:this.userlogininfo.password}).then((function(t){console.log(t.data),200==t.data.code?(e.$message.success("验证成功"),window.sessionStorage.setItem("web-token",t.data.token),e.$router.push("/index")):4002==t.data.code?e.$message.error("用户名密码错误"):e.$message.error("登陆出错")})).catch((function(t){e.$message.error("网络出错")}))}else this.$message.error("请填写完整")},ensureregis:function(){var e=this;if(""!=this.userregisterinfo.id&&""!=this.userregisterinfo.name&&""!=this.userregisterinfo.pwd&&""!=this.userregisterinfo.enpwd){if(this.userregisterinfo.pwd!=this.userregisterinfo.enpwd)return this.$message.error("两次密码不一致"),this.userregisterinfo.pwd="",void(this.userregisterinfo.enpwd="");var t="/pan/user/register";this.$ajax.post(t,{user_id:this.userregisterinfo.id,password:this.userregisterinfo.pwd,username:this.userregisterinfo.name}).then((function(t){200==t.data.code?(e.$message.success("注册成功"),e.registerDialog=!1):4006==t.data.code?e.$message.success("用户名已存在"):e.$message.success("注册出错")})).catch((function(t){e.$message.error("注册网路出错")}))}else this.$message.error("请输入完整")}},name:"login"}),h=g,m=Object(n["a"])(h,f,p,!1,null,"a7a2316c",null),w=m.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"min-width":"1000px","min-height":"850px",height:"100vh"},style:e.bgpic},[a("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{height:"100%"},attrs:{"element-loading-text":"loading......","element-loading-spinner":"el-icon-loading"}},[a("el-header",{staticStyle:{height:"70px",width:"100%","min-width":"1000px","padding-top":"10px"}},[a("div",{staticStyle:{height:"70px",width:"60%","margin-left":"20%","box-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)","text-align":"center","background-color":"white"}},[a("span",{staticStyle:{"font-family":"Helvetica Neue","font-size":"25px","line-height":"70px",float:"left","padding-left":"5%"},on:{click:function(t){return e.getfilelist()}}},[a("i",{staticClass:"el-icon-folder-opened"}),e._v(" CloudFolder")]),a("div",{staticStyle:{float:"left","margin-left":"15%","line-height":"70px"}},[a("span",{staticStyle:{"font-size":"15px"}},[e._v("输入文件名：")]),a("el-input",{staticStyle:{width:"100px"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:function(t){return e.searchfile()}}})],1),a("span",{staticStyle:{"line-height":"70px",float:"right","padding-right":"5%"}},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link",staticStyle:{color:"black",display:"block"}},[e._v(" "+e._s(e.username)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.logout()}}},[e._v("退出登录")])],1)],1)],1)],1)])]),a("el-main",{staticStyle:{"margin-top":"10px",width:"100%","min-width":"1000px"}},[a("div",{staticStyle:{width:"58%","margin-left":"21%"}},[a("div",{staticStyle:{height:"500px","box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.1)"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"500px"}},[a("el-table-column",{attrs:{label:"*",width:"100%"}},[[a("i",{staticClass:"el-icon-folder-opened"})]],2),a("el-table-column",{attrs:{prop:"file_name",label:"文件名",sortable:""}}),a("el-table-column",{attrs:{prop:"file_size",label:"文件大小",sortable:""}}),a("el-table-column",{attrs:{prop:"file_time",label:"上传时间",sortable:""}}),a("el-table-column",{attrs:{label:"文件操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.downloadfile(t.row)}}},[e._v("下载")]),a("el-button",{staticStyle:{color:"#67C23A"},attrs:{type:"text"},on:{click:function(a){return e.sharefile(t.row)}}},[e._v("分享")]),a("el-button",{staticStyle:{color:"red"},attrs:{type:"text"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("div",{staticStyle:{width:"100%","margin-top":"10px",height:"200px"}},[a("div",{staticStyle:{width:"60%",float:"left","box-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",height:"200px","background-color":"white","text-align":"center"}},[a("span",{staticStyle:{"font-size":"20px",display:"block","padding-top":"10px"}},[e._v("文件上传")]),a("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{"padding-top":"15px"},attrs:{"auto-upload":!1,action:e.doUpload,limit:1,"before-upload":e.beforeUpload,"on-change":e.ctrlfile}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.bUpload}},[e._v("上传到服务器")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("注意:文件大小不要超过5MB")])],1)],1),a("div",{staticStyle:{width:"39%",float:"right","box-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",height:"200px","background-color":"white"}},[a("span",{staticStyle:{color:"#606266","padding-left":"25%",height:"20%","margin-top":"10%",display:"block"}},[a("i",{staticClass:"el-icon-folder"}),e._v(" 总空间："),a("span",{staticStyle:{color:"#409EFF"}},[e._v(e._s(this.userCapacity.total))])]),a("span",{staticStyle:{color:"#606266","padding-left":"25%",height:"20%",display:"block"}},[a("i",{staticClass:"el-icon-folder-add"}),e._v(" 已用空间："),a("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(this.userCapacity.used))])]),a("span",{staticStyle:{color:"#606266","padding-left":"25%",height:"20%",display:"block"}},[a("i",{staticClass:"el-icon-folder-remove"}),e._v(" 剩余空间："),a("span",{staticStyle:{color:"#67C23A"}},[e._v(e._s(this.userCapacity.remain))])])])])])])],1)],1)},y=[],v=(a("fb6a"),a("d3b7"),a("69a0")),x=a.n(v),S={data:function(){return{userCapacity:{total:"",used:"",remain:""},filename:"",tableData:[],loading:!1,filehash:"",username:"aaa",bgpic:{backgroundImage:"url("+a("b34c")+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}},created:function(){this.getfilelist(),this.getUserCapacity(),this.ajaxControl(),this.getusername()},methods:{ctrlfile:function(e,t){var a=this;this.filehash="";var i=e.raw,s=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice,r=new FileReader,o=2097152,n=Math.ceil(e.size/o),l=0,u=new x.a;function d(){var t=l*o,a=t+o>=e.size?e.size:t+o;r.readAsBinaryString(s.call(i,t,a))}r.onload=function(e){if(u.appendBinary(e.target.result),l++,l<n)d();else{var t=u.end();a.filehash=t}},r.onerror=function(){console.warn("FileReader error.")},d()},getUserCapacity:function(){var e=this,t="/pan/file/capacity";this.$ajax.get(t,{headers:{"web-token":window.sessionStorage.getItem("web-token")}}).then((function(t){200==t.data.code?(e.userCapacity.total=t.data.result.total_capacity+"KB",e.userCapacity.remain=t.data.result.remain_capacity+"KB",e.userCapacity.used=t.data.result.used_capacity+"KB"):(e.$message.error("登陆失效"),window.sessionStorage.clear(),e.$router.push("/"))})).catch((function(t){e.$message.error("请求网络出错")}))},bUpload:function(){this.$refs.upload.submit()},beforeUpload:function(e){var t=this;if(e.size>5335040)this.$message.error("文件过大");else if(""!=this.filehash){var a=e.name;if(""!=a){var i=new FormData;i.append(encodeURI(a),e);var s="/pan/file/upload";this.$ajax.post(s,i,{headers:{"web-token":window.sessionStorage.getItem("web-token"),filename:encodeURI(a),filehash:this.filehash}}).then((function(e){200==e.data.code?(t.getfilelist(),t.getUserCapacity(),t.$message.info("上传成功")):4022==e.data.code?t.$message.error("文件过大"):4024==e.data.code?t.$message.error("您的剩余空间不足"):(t.$message.error("登陆失效"),window.sessionStorage.clear(),t.$router.push("/"))})).catch((function(e){t.$message.error("上传网络出错")}))}else this.$message.error("没有文件")}else this.$message.info("稍后，正在准备文件数据")},getfilelist:function(){var e=this,t="/pan/file/getlist";this.$ajax.get(t,{headers:{"web-token":window.sessionStorage.getItem("web-token")}}).then((function(t){200==t.data.code?null==t.data.result?(e.$message.info("文件夹为空哦"),e.tableData=t.data.result):e.tableData=t.data.result:(e.$message.error("登陆失效"),window.sessionStorage.clear(),e.$router.push("/"))})).catch((function(t){e.$message.error("验证网络出错"),window.sessionStorage.clear(),e.$router.push("/")}))},searchfile:function(){var e=this;if(""!=this.filename){var t="/pan/file/getbyname/"+this.filename;this.$ajax.get(t,{headers:{"web-token":window.sessionStorage.getItem("web-token")}}).then((function(t){200==t.data.code?e.tableData=t.data.result:4021==t.data.code?e.tableData=[]:(e.$message.error("登陆失效"),window.sessionStorage.clear(),e.$router.push("/"))})).catch((function(t){e.$message.error("验证网络出错")}))}else this.$message.error("请输入部分或完整文件名")},downloadfile:function(e){var t=this,a="/pan/file/url/genarate/"+e.file_id;this.$ajax.get(a,{headers:{"web-token":window.sessionStorage.getItem("web-token")}}).then((function(e){200==e.data.code?window.location.href=e.data.token:(t.$message.error("登陆失效"),window.sessionStorage.clear(),t.$router.push("/"))})).catch((function(e){t.$message.error("网络出错")}))},sharefile:function(e){var t=this,a="/pan/file/url/genarate/"+e.file_id;this.$ajax.get(a,{headers:{"web-token":window.sessionStorage.getItem("web-token")}}).then((function(e){if(200==e.data.code){var a=t.$createElement;t.$notify({title:"文件链接（一小时有效）",message:a("i",{style:"color: teal"},e.data.token)})}else t.$message.error("登陆失效"),window.sessionStorage.clear(),t.$router.push("/")})).catch((function(e){t.$message.error("网络出错")}))},remove:function(e){var t=this;this.$confirm("确定删除该文件？将无法找回","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"放弃"}).then((function(){var a="/pan/file/remove/"+e.file_id;t.$ajax.get(a,{headers:{"web-token":window.sessionStorage.getItem("web-token")}}).then((function(e){200==e.data.code?(t.$message.info("删除成功"),t.getfilelist(),t.getUserCapacity()):(t.$message.error("登陆失效"),window.sessionStorage.clear(),t.$router.push("/"))})).catch((function(e){t.$message.error("删除网络出错")}))})).catch((function(e){t.$message({type:"info",message:"已取消删除"})}))},logout:function(){var e="/pan/user/logout";this.$ajax.get(e,{headers:{"web-token":window.sessionStorage.getItem("web-token")}}),this.$router.push("/"),window.sessionStorage.clear()},ajaxControl:function(){var e=this;this.$ajax.interceptors.request.use((function(t){return e.loading=!0,t}),(function(t){return e.loading=!0,Promise.reject(t)})),this.$ajax.interceptors.response.use((function(t){return e.loading=!1,t}),(function(t){return e.loading=!1,Promise.reject(t)}))},getusername:function(){var e=this,t="/pan/user/info";this.$ajax.get(t,{headers:{"web-token":window.sessionStorage.getItem("web-token")}}).then((function(t){200==t.data.code?e.username=t.data.data:e.username="Me"})).catch((function(t){e.$message.error("查询网络出错")}))}},name:"index"},$=S,k=(a("0c81"),Object(n["a"])($,b,y,!1,null,"f95141da",null)),_=k.exports;d["default"].use(c["a"]);var C=[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:w},{path:"/index",name:"index",component:_}],I=new c["a"]({routes:C});I.beforeEach((function(e,t,a){if("/login"===e.path)return a();var i=window.sessionStorage.getItem("web-token");if(!i)return a("/login");a()}));var j=I,B=(a("0fae"),a("5c96"));d["default"].use(B["Button"]);var D=a("bc3a"),O=a.n(D);d["default"].use(B["Pagination"]),d["default"].use(B["Dialog"]),d["default"].use(B["Autocomplete"]),d["default"].use(B["Dropdown"]),d["default"].use(B["DropdownMenu"]),d["default"].use(B["DropdownItem"]),d["default"].use(B["Menu"]),d["default"].use(B["Submenu"]),d["default"].use(B["MenuItem"]),d["default"].use(B["MenuItemGroup"]),d["default"].use(B["Input"]),d["default"].use(B["InputNumber"]),d["default"].use(B["Radio"]),d["default"].use(B["RadioGroup"]),d["default"].use(B["RadioButton"]),d["default"].use(B["Checkbox"]),d["default"].use(B["CheckboxButton"]),d["default"].use(B["CheckboxGroup"]),d["default"].use(B["Switch"]),d["default"].use(B["Select"]),d["default"].use(B["Option"]),d["default"].use(B["OptionGroup"]),d["default"].use(B["Button"]),d["default"].use(B["ButtonGroup"]),d["default"].use(B["Table"]),d["default"].use(B["TableColumn"]),d["default"].use(B["DatePicker"]),d["default"].use(B["TimeSelect"]),d["default"].use(B["TimePicker"]),d["default"].use(B["Popover"]),d["default"].use(B["Tooltip"]),d["default"].use(B["Breadcrumb"]),d["default"].use(B["BreadcrumbItem"]),d["default"].use(B["Form"]),d["default"].use(B["FormItem"]),d["default"].use(B["Tabs"]),d["default"].use(B["TabPane"]),d["default"].use(B["Tag"]),d["default"].use(B["Tree"]),d["default"].use(B["Alert"]),d["default"].use(B["Slider"]),d["default"].use(B["Icon"]),d["default"].use(B["Row"]),d["default"].use(B["Col"]),d["default"].use(B["Upload"]),d["default"].use(B["Progress"]),d["default"].use(B["Spinner"]),d["default"].use(B["Badge"]),d["default"].use(B["Card"]),d["default"].use(B["Rate"]),d["default"].use(B["Steps"]),d["default"].use(B["Step"]),d["default"].use(B["Carousel"]),d["default"].use(B["CarouselItem"]),d["default"].use(B["Collapse"]),d["default"].use(B["CollapseItem"]),d["default"].use(B["Cascader"]),d["default"].use(B["ColorPicker"]),d["default"].use(B["Transfer"]),d["default"].use(B["Container"]),d["default"].use(B["Header"]),d["default"].use(B["Aside"]),d["default"].use(B["Main"]),d["default"].use(B["Footer"]),d["default"].use(B["Timeline"]),d["default"].use(B["TimelineItem"]),d["default"].use(B["Link"]),d["default"].use(B["Divider"]),d["default"].use(B["Image"]),d["default"].use(B["Calendar"]),d["default"].use(B["Backtop"]),d["default"].use(B["PageHeader"]),d["default"].use(B["CascaderPanel"]),d["default"].use(B["Loading"].directive),d["default"].prototype.$loading=B["Loading"].service,d["default"].prototype.$msgbox=B["MessageBox"],d["default"].prototype.$alert=B["MessageBox"].alert,d["default"].prototype.$confirm=B["MessageBox"].confirm,d["default"].prototype.$prompt=B["MessageBox"].prompt,d["default"].prototype.$notify=B["Notification"],d["default"].prototype.$message=B["Message"],d["default"].config.productionTip=!1,d["default"].prototype.$ajax=O.a,new d["default"]({router:j,render:function(e){return e(u)}}).$mount("#app")},b34c:function(e,t,a){e.exports=a.p+"img/filelogin.f0cd86b0.jpg"}});
//# sourceMappingURL=app.bca683c7.js.map