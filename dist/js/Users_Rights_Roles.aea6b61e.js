(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users_Rights_Roles"],{"057f":function(e,t,r){var a=r("fc6a"),n=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(t){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?s(e):n(a(e))}},"25f0":function(e,t,r){"use strict";var a=r("6eeb"),n=r("825a"),o=r("d039"),i=r("ad6d"),s="toString",l=RegExp.prototype,c=l[s],u=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=s;(u||d)&&a(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),r=e.flags,a=String(void 0===r&&e instanceof RegExp&&!("flags"in l)?i.call(e):r);return"/"+t+"/"+a}),{unsafe:!0})},"3ca3":function(e,t,r){"use strict";var a=r("6547").charAt,n=r("69f3"),o=r("7dd0"),i="String Iterator",s=n.set,l=n.getterFor(i);o(String,"String",(function(e){s(this,{type:i,string:String(e),index:0})}),(function(){var e,t=l(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},"3fd0":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("权限列表")])],1),r("el-card",[r("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[r("el-table-column",{attrs:{prop:"index",label:"#",type:"index"}}),r("el-table-column",{attrs:{prop:"authName",label:"权限名称"}}),r("el-table-column",{attrs:{prop:"path",label:"路径"}}),r("el-table-column",{attrs:{prop:"level",label:"权限等级"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?r("el-tag",{attrs:{size:"mini"}},[e._v("一级")]):"1"===t.row.level?r("el-tag",{attrs:{type:"success",size:"mini"}},[e._v("二级")]):"2"===t.row.level?r("el-tag",{attrs:{type:"warning",size:"mini"}},[e._v("三级")]):e._e()]}}])})],1)],1)],1)},n=[],o=(r("96cf"),r("1da1")),i={data:function(){return{rightsList:[]}},created:function(){this.getRightsList()},methods:{getRightsList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(a.meta.msg));case 6:e.rightsList=a.data;case 7:case"end":return t.stop()}}),t)})))()}}},s=i,l=r("2877"),c=Object(l["a"])(s,a,n,!1,null,"322f8ebc",null);t["default"]=c.exports},"40a6":function(e,t,r){},"4df4":function(e,t,r){"use strict";var a=r("0366"),n=r("7b0b"),o=r("9bdd"),i=r("e95a"),s=r("50c4"),l=r("8418"),c=r("35a1");e.exports=function(e){var t,r,u,d,m,f,g=n(e),p="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,v=void 0!==h,y=c(g),R=0;if(v&&(h=a(h,b>2?arguments[2]:void 0,2)),void 0==y||p==Array&&i(y))for(t=s(g.length),r=new p(t);t>R;R++)f=v?h(g[R],R):g[R],l(r,R,f);else for(d=y.call(g),m=d.next,r=new p;!(u=m.call(d)).done;R++)f=v?o(d,h,[u.value,R],!0):u.value,l(r,R,f);return r.length=R,r}},5541:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("角色列表")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:e.showAddDialog}},[e._v("添加角色")])],1)],1),r("el-table",{attrs:{data:e.rolesList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(a,n){return r("el-row",{key:a.id,class:["bdbottom",0===n?"bdtop":"","vcenter"]},[r("el-col",{attrs:{span:5}},[r("el-tag",{attrs:{closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(a.children,(function(a,n){return r("el-row",{key:a.id,class:[0===n?"":"bdtop","vcenter"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(a.children,(function(a){return r("el-tag",{key:a.id,attrs:{type:"warning",closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{prop:"index",label:"#",type:"index"}}),r("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),r("el-table-column",{attrs:{prop:"roleDesc",label:"角色描述"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.editRoleNameDialog(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.removeRoleById(t.row.id)}}},[e._v("删除")]),r("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting"},on:{click:function(r){return e.showSetDialog(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),r("el-dialog",{attrs:{title:"修改角色信息",visible:e.editRoleNameDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editRoleNameDialogVisible=t},close:e.editRoleNameDialogClose}},[r("el-form",{ref:"editRoleNameFormRef",attrs:{model:e.editRoleNameForm,rules:e.editRoleNameFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.editRoleNameForm.roleName,callback:function(t){e.$set(e.editRoleNameForm,"roleName",t)},expression:"editRoleNameForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.editRoleNameForm.roleDesc,callback:function(t){e.$set(e.editRoleNameForm,"roleDesc",t)},expression:"editRoleNameForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editRoleNameDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editRoleName}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"添加角色信息",visible:e.addRoleNameDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addRoleNameDialogVisible=t},close:e.addRoleNameDialogClose}},[r("el-form",{ref:"addRoleNameFormRef",attrs:{model:e.addRoleNameForm,rules:e.addRoleNameFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.addRoleNameForm.roleName,callback:function(t){e.$set(e.addRoleNameForm,"roleName",t)},expression:"addRoleNameForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.addRoleNameForm.roleDesc,callback:function(t){e.$set(e.addRoleNameForm,"roleDesc",t)},expression:"addRoleNameForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addRoleNameDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRoleName}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户权限",visible:e.setRightDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRightDialogVisible=t},close:e.setRightDialogClosed}},[r("el-tree",{ref:"treeRef",attrs:{data:e.rightsList,props:e.treeProps,"show-checkbox":"","node-key":"id","default-expand-all":!0,"default-checked-keys":e.defKeys}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRightDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1)],1)},n=[];r("99af"),r("4160"),r("a15b"),r("159b");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function i(e){if(Array.isArray(e))return o(e)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r("fb6a"),r("b0c0"),r("25f0");function l(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return i(e)||s(e)||l(e)||c()}r("96cf");var d=r("1da1"),m={data:function(){return{rolesList:[],editRoleNameDialogVisible:!1,editRoleNameForm:{},editRoleNameFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10个字符",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15个字符",trigger:"blur"}]},addRoleNameDialogVisible:!1,addRoleNameForm:{roleName:"",roleDesc:""},addRoleNameFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10个字符",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15个字符",trigger:"blur"}]},setRightDialogVisible:!1,rightsList:[],treeProps:{children:"children",label:"authName"},defKeys:[],roleId:""}},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(a.meta.msg));case 6:e.rolesList=a.data;case 7:case"end":return t.stop()}}),t)})))()},editRoleNameDialogClose:function(){this.$refs.editRoleNameFormRef.resetFields()},editRoleNameDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("roles/"+e);case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error(n.meta.msg));case 6:t.editRoleNameForm=n.data,t.editRoleNameDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editRoleName:function(){var e=this;this.$refs.editRoleNameFormRef.validate(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("roles/".concat(e.editRoleNameForm.roleId),{roleName:e.editRoleNameForm.roleName,roleDesc:e.editRoleNameForm.roleDesc});case 4:if(a=t.sent,n=a.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error(n.meta.msg));case 8:e.$message.success(n.meta.msg),e.editRoleNameDialogVisible=!1,e.getRolesList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeRoleById:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message.info("已取消删除"));case 5:return r.next=7,t.$http.delete("roles/"+e);case 7:if(n=r.sent,o=n.data,200===o.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("删除角色失败！"));case 11:t.$message.success(o.meta.msg),t.getRolesList();case 13:case"end":return r.stop()}}),r)})))()},removeRightById:function(e,t){var r=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var n,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.$confirm("此操作将永久删除该权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(n=a.sent,"confirm"===n){a.next=5;break}return a.abrupt("return",r.$message.info("已取消删除"));case 5:return a.next=7,r.$http.delete("roles/".concat(e.id,"/rights/").concat(t));case 7:if(o=a.sent,i=o.data,200===i.meta.status){a.next=11;break}return a.abrupt("return",r.$message.error("删除权限失败！"));case 11:r.$message.success(i.meta.msg),e.children=i.data;case 13:case"end":return a.stop()}}),a)})))()},showSetDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.roleId=e.id,r.next=3,t.$http.get("rights/tree");case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error(n.meta.msg));case 7:t.rightsList=n.data,t.getLeafKeys(e,t.defKeys),t.setRightDialogVisible=!0;case 10:case"end":return r.stop()}}),r)})))()},getLeafKeys:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){r.getLeafKeys(e,t)}))},setRightDialogClosed:function(){this.defKeys=[]},allotRights:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(u(e.$refs.treeRef.getCheckedKeys()),u(e.$refs.treeRef.getHalfCheckedKeys())),a=r.join(","),t.next=4,e.$http.post("roles/".concat(e.roleId,"/rights"),{rids:a});case 4:if(n=t.sent,o=n.data,200===o.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("更新用户权限失败！"));case 8:e.$message.success(o.meta.msg),e.getRolesList(),e.setRightDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},showAddDialog:function(){this.addRoleNameDialogVisible=!0},addRoleNameDialogClose:function(){this.$refs.addRoleNameFormRef.resetFields()},addRoleName:function(){var e=this;this.$refs.addRoleNameFormRef.validate(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("roles",{roleName:e.addRoleNameForm.roleName,roleDesc:e.addRoleNameForm.roleDesc});case 4:if(a=t.sent,n=a.data,201===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error(n.meta.msg));case 8:e.$message.success(n.meta.msg),e.addRoleNameDialogVisible=!1,e.getRolesList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},f=m,g=(r("ef42"),r("2877")),p=Object(g["a"])(f,a,n,!1,null,"0355e329",null);t["default"]=p.exports},"746f":function(e,t,r){var a=r("428f"),n=r("5135"),o=r("e538"),i=r("9bf2").f;e.exports=function(e){var t=a.Symbol||(a.Symbol={});n(t,e)||i(t,e,{value:o.f(e)})}},"9bdd":function(e,t,r){var a=r("825a"),n=r("2a62");e.exports=function(e,t,r,o){try{return o?t(a(r)[0],r[1]):t(r)}catch(i){throw n(e),i}}},a4d3:function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),o=r("d066"),i=r("c430"),s=r("83ab"),l=r("4930"),c=r("fdbf"),u=r("d039"),d=r("5135"),m=r("e8b5"),f=r("861d"),g=r("825a"),p=r("7b0b"),b=r("fc6a"),h=r("c04e"),v=r("5c6c"),y=r("7c73"),R=r("df75"),w=r("241c"),x=r("057f"),k=r("7418"),N=r("06cf"),$=r("9bf2"),F=r("d1e7"),D=r("9112"),_=r("6eeb"),S=r("5692"),O=r("f772"),I=r("d012"),L=r("90e3"),j=r("b622"),V=r("e538"),C=r("746f"),q=r("d44e"),U=r("69f3"),A=r("b727").forEach,z=O("hidden"),E="Symbol",B="prototype",P=j("toPrimitive"),T=U.set,K=U.getterFor(E),J=Object[B],M=n.Symbol,H=o("JSON","stringify"),Q=N.f,W=$.f,G=x.f,X=F.f,Y=S("symbols"),Z=S("op-symbols"),ee=S("string-to-symbol-registry"),te=S("symbol-to-string-registry"),re=S("wks"),ae=n.QObject,ne=!ae||!ae[B]||!ae[B].findChild,oe=s&&u((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(e,t,r){var a=Q(J,t);a&&delete J[t],W(e,t,r),a&&e!==J&&W(J,t,a)}:W,ie=function(e,t){var r=Y[e]=y(M[B]);return T(r,{type:E,tag:e,description:t}),s||(r.description=t),r},se=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof M},le=function(e,t,r){e===J&&le(Z,t,r),g(e);var a=h(t,!0);return g(r),d(Y,a)?(r.enumerable?(d(e,z)&&e[z][a]&&(e[z][a]=!1),r=y(r,{enumerable:v(0,!1)})):(d(e,z)||W(e,z,v(1,{})),e[z][a]=!0),oe(e,a,r)):W(e,a,r)},ce=function(e,t){g(e);var r=b(t),a=R(r).concat(ge(r));return A(a,(function(t){s&&!de.call(r,t)||le(e,t,r[t])})),e},ue=function(e,t){return void 0===t?y(e):ce(y(e),t)},de=function(e){var t=h(e,!0),r=X.call(this,t);return!(this===J&&d(Y,t)&&!d(Z,t))&&(!(r||!d(this,t)||!d(Y,t)||d(this,z)&&this[z][t])||r)},me=function(e,t){var r=b(e),a=h(t,!0);if(r!==J||!d(Y,a)||d(Z,a)){var n=Q(r,a);return!n||!d(Y,a)||d(r,z)&&r[z][a]||(n.enumerable=!0),n}},fe=function(e){var t=G(b(e)),r=[];return A(t,(function(e){d(Y,e)||d(I,e)||r.push(e)})),r},ge=function(e){var t=e===J,r=G(t?Z:b(e)),a=[];return A(r,(function(e){!d(Y,e)||t&&!d(J,e)||a.push(Y[e])})),a};if(l||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=L(e),r=function(e){this===J&&r.call(Z,e),d(this,z)&&d(this[z],t)&&(this[z][t]=!1),oe(this,t,v(1,e))};return s&&ne&&oe(J,t,{configurable:!0,set:r}),ie(t,e)},_(M[B],"toString",(function(){return K(this).tag})),_(M,"withoutSetter",(function(e){return ie(L(e),e)})),F.f=de,$.f=le,N.f=me,w.f=x.f=fe,k.f=ge,V.f=function(e){return ie(j(e),e)},s&&(W(M[B],"description",{configurable:!0,get:function(){return K(this).description}}),i||_(J,"propertyIsEnumerable",de,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:M}),A(R(re),(function(e){C(e)})),a({target:E,stat:!0,forced:!l},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var r=M(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),a({target:"Object",stat:!0,forced:!l,sham:!s},{create:ue,defineProperty:le,defineProperties:ce,getOwnPropertyDescriptor:me}),a({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:fe,getOwnPropertySymbols:ge}),a({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(p(e))}}),H){var pe=!l||u((function(){var e=M();return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))}));a({target:"JSON",stat:!0,forced:pe},{stringify:function(e,t,r){var a,n=[e],o=1;while(arguments.length>o)n.push(arguments[o++]);if(a=t,(f(t)||void 0!==e)&&!se(e))return m(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!se(t))return t}),n[1]=t,H.apply(null,n)}})}M[B][P]||D(M[B],P,M[B].valueOf),q(M,E),I[z]=!0},a630:function(e,t,r){var a=r("23e7"),n=r("4df4"),o=r("1c7e"),i=!o((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:i},{from:n})},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,o=Function.prototype,i=o.toString,s=/^\s*function ([^ (]*)/,l="name";a&&!(l in o)&&n(o,l,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},d28b:function(e,t,r){var a=r("746f");a("iterator")},dbef:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList2},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),r("el-table",{attrs:{data:e.userList,border:"",stripe:""}},[r("el-table-column",{attrs:{prop:"index",label:"#",type:"index"}}),r("el-table-column",{attrs:{prop:"username",label:"姓名"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.userStateChange(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDiolog(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeUserById(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.showSetRoleDialog(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClose}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),r("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[r("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClose}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),r("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[r("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRoleDialogClosed}},[r("div",[r("p",[e._v("当前的用户："+e._s(e.userInfo.username))]),r("p",[e._v("当前的角色："+e._s(e.userInfo.role_name))]),r("p",[e._v(" 分配新角色： "),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectedRoleId,callback:function(t){e.selectedRoleId=t},expression:"selectedRoleId"}},e._l(e.roleList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("确 定")])],1)])],1)},n=[],o=(r("99af"),r("96cf"),r("1da1")),i={data:function(){var e=function(e,t,r){var a=/^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;if(a.test(t))return r();r(new Error("请输入合法的手机号!"))};return{queryInfo:{query:"",pagenum:1,pagesize:5},userList:[],total:0,addDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRules:{username:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10个字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15个字符",trigger:"blur"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],mobile:[{required:!0,message:"请输入用户手机号码",trigger:"blur"},{validator:e,trigger:"blur"}]},editDialogVisible:!1,editForm:{},setRoleDialogVisible:!1,userInfo:{},roleList:[],selectedRoleId:""}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryInfo});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(a.meta.msg));case 6:e.userList=a.data.users,e.total=a.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},userStateChange:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return e.mg_state=!e.mg_state,r.abrupt("return",t.$message.error("更新用户状态失败"));case 7:t.$message.success("更新用户状态成功！");case 8:case"end":return r.stop()}}),r)})))()},getUserList2:function(){this.queryInfo.pagenum=1,this.getUserList()},addDialogClose:function(){this.$refs.addFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("users",e.addForm);case 4:if(a=t.sent,n=a.data,201===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error(n.meta.msg));case 8:e.$message.success(n.meta.msg),e.addDialogVisible=!1,e.getUserList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showEditDiolog:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("users/"+e);case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("查询用户信息失败！"));case 6:t.editForm=n.data,t.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editDialogClose:function(){this.$refs.editFormRef.resetFields()},editUser:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("users/".concat(e.editForm.id),{email:e.editForm.email,mobile:e.editForm.mobile});case 4:if(a=t.sent,n=a.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error(n.meta.msg));case 8:e.$message.success(n.meta.msg),e.editDialogVisible=!1,e.getUserList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeUserById:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message.info("已取消删除"));case 5:return r.next=7,t.$http.delete("users/"+e);case 7:if(n=r.sent,o=n.data,200===o.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("删除用户失败！"));case 11:t.$message.success(o.meta.msg),t.getUserList();case 13:case"end":return r.stop()}}),r)})))()},showSetRoleDialog:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.userInfo=e,r.next=3,t.$http.get("roles");case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("查询用户信息失败！"));case 7:t.roleList=n.data,t.setRoleDialogVisible=!0;case 9:case"end":return r.stop()}}),r)})))()},saveRoleInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectedRoleId){t.next=2;break}return t.abrupt("return",e.$message.error("请选择分配的角色！"));case 2:return t.next=4,e.$http.put("users/".concat(e.userInfo.id,"/role"),{rid:e.selectedRoleId});case 4:if(r=t.sent,a=r.data,200===a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("更新角色失败！"));case 8:e.$message.success(a.meta.msg),e.getUserList(),e.setRoleDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},setRoleDialogClosed:function(){this.selectedRoleId="",this.userInfo={}}}},s=i,l=r("2877"),c=Object(l["a"])(s,a,n,!1,null,"e04cb7fc",null);t["default"]=c.exports},ddb0:function(e,t,r){var a=r("da84"),n=r("fdbc"),o=r("e260"),i=r("9112"),s=r("b622"),l=s("iterator"),c=s("toStringTag"),u=o.values;for(var d in n){var m=a[d],f=m&&m.prototype;if(f){if(f[l]!==u)try{i(f,l,u)}catch(p){f[l]=u}if(f[c]||i(f,c,d),n[d])for(var g in o)if(f[g]!==o[g])try{i(f,g,o[g])}catch(p){f[g]=o[g]}}}},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),o=r("da84"),i=r("5135"),s=r("861d"),l=r("9bf2").f,c=r("e893"),u=o.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(m,u);var f=m.prototype=u.prototype;f.constructor=m;var g=f.toString,p="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=g.call(e);if(i(d,e))return"";var r=p?t.slice(7,-1):t.replace(b,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}},e538:function(e,t,r){var a=r("b622");t.f=a},ef42:function(e,t,r){"use strict";r("40a6")},fb6a:function(e,t,r){"use strict";var a=r("23e7"),n=r("861d"),o=r("e8b5"),i=r("23cb"),s=r("50c4"),l=r("fc6a"),c=r("8418"),u=r("b622"),d=r("1dde"),m=r("ae40"),f=d("slice"),g=m("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),b=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!f||!g},{slice:function(e,t){var r,a,u,d=l(this),m=s(d.length),f=i(e,m),g=i(void 0===t?m:t,m);if(o(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(d,f,g);for(a=new(void 0===r?Array:r)(h(g-f,0)),u=0;f<g;f++,u++)f in d&&c(a,u,d[f]);return a.length=u,a}})}}]);
//# sourceMappingURL=Users_Rights_Roles.aea6b61e.js.map