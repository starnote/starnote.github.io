(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([1,"chunk-vendors"]),n()})({0:function(t,e){},"02b1":function(t,e,n){},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0517":function(t,e,n){"use strict";var r=n("85f9"),a=n.n(r);a.a},"0cce":function(t,e,n){},1:function(t,e,n){t.exports=n("56d7")},10:function(t,e){},11:function(t,e){},2:function(t,e){},"2dde":function(t,e,n){"use strict";var r=n("888f"),a=n.n(r);a.a},3:function(t,e){},4:function(t,e){},"41af":function(t,e,n){"use strict";var r=n("f90f"),a=n.n(r);a.a},5:function(t,e){},5536:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{staticClass:"navmanu",attrs:{toggleable:"lg",type:"light"}},[r("b-navbar-brand",{on:{click:t.backtoindex}},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:n("950d"),alt:"StarNote"}})]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("router-link",{attrs:{to:"/"}},[t._v("首页")]),r("router-link",{attrs:{to:"/manage"}},[t._v("管理笔记")]),r("router-link",{attrs:{to:"/post"}},[t._v("发布笔记")]),t.$store.state.username?r("div",[r("a",{attrs:{href:"#"}},[t._v("@"+t._s(t.$store.state.username))]),r("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("注销")])]):r("div",[r("a",{attrs:{href:"https://steemjiang.com/register",target:"_blank"}},[t._v("注册")]),r("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1)],1)],1)],1),r("router-view"),r("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"myfooter"},[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",[n("router-link",{attrs:{to:"/about"}},[t._v("关于星空笔记")])],1),n("b-col",[n("a",{attrs:{target:"_blank",href:"https://steemitwallet.com"}},[t._v("网页钱包")])]),n("b-col",[n("a",{attrs:{target:"_blank",href:"https://github.com/starnote/starnote.github.io"}},[t._v("Github")])]),n("b-col",[n("a",{attrs:{target:"_blank",href:"https://github.com/steemit/steem-js/tree/master/doc#install"}},[t._v("开发手册")])])],1),n("b-row",[n("b-col",[n("router-link",{attrs:{to:"/newbie"}},[t._v("新手指南")])],1),n("b-col",[n("a",{attrs:{target:"_blank",href:"https://github.com/aaroncox/vessel/releases"}},[t._v("桌面钱包")])]),n("b-col",[n("a",{attrs:{target:"_blank",href:"https://github.com/steem-driver/awesome-steem"}},[t._v("AwesomeSteem")])]),n("b-col",[n("a",{attrs:{target:"_blank",href:"https://smt.steem.com"}},[t._v("SMTs")])])],1),n("b-row",[n("b-col",[n("a",{attrs:{target:"_blank",href:"https://steemh.org"}},[t._v("Steem指南")])]),n("b-col",[n("a",{attrs:{target:"_blank",href:"https://steemd.com/@"+this.$store.state.username}},[t._v("区块数据")])]),n("b-col",[n("a",{attrs:{target:"_blank",href:"https://steemprojects.com"}},[t._v("SteemProjects")])]),n("b-col")],1)],1),n("p",{staticClass:"info"},[t._v("Copyright©2019 星空笔记，基于Steem和IPFS的区块链笔记 @lemooljiang创建 QQ:497867999")])],1)},i=[],l={name:"Footer"},c=l,u=(n("72eb"),n("2877")),d=Object(u["a"])(c,o,i,!1,null,"8254e550",null),p=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" test ")])},f=[],h=(n("ac1f"),n("1276"),{name:"Test",mounted:function(){var t=(new Date).toISOString().split(".")[0];console.log(111,t);var e="lemooljiang";this.steem.api.getDiscussionsByAuthorBeforeDate(e,null,t,10,(function(t,e){console.log(567,t,e)}))}}),g=h,v=Object(u["a"])(g,m,f,!1,null,"ca819d6a",null),b=v.exports,_={name:"App",data:function(){return{username:"",password:"",keywords:""}},methods:{backtoindex:function(){this.$router.push({path:"/"})},logout:function(){this.$store.commit("clearUser")}},filters:{formatTime:function(t){return t.substring(0,10)}},components:{Footer:p,Test:b},mounted:function(){if(null!=localStorage.getItem("autostart")){console.log(222,"开始点赞啦！");var t=JSON.parse(localStorage.getItem("authors"));this.getDataAndVote(t)}}},k=_,w=(n("034f"),Object(u["a"])(k,a,s,!1,null,null,null)),x=w.exports,y=n("8c4f"),S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"starnote"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 search",attrs:{placeholder:"搜索"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),r("div",{staticClass:"article"},t._l(t.search(t.keywords),(function(e){return r("div",{staticClass:"content"},[r("router-link",{attrs:{to:"/@"+e.author+"/"+e.permlink}},[r("img",{attrs:{src:n("cdd9"),alt:"StarNote"}}),t._v(" "+t._s(e.title)+" ")]),r("p",{staticClass:"posttime"},[t._v("@"+t._s(e.author)+" "+t._s(t._f("formatTime")(e.created))+" ")]),r("p",[t._v("摘要："+t._s(JSON.parse(e.json_metadata).text))])],1)})),0),r("transition",{attrs:{name:"fade"}},[t.isLoading?r("loading"):t._e()],1),t.showMoreFlag?r("div",{staticClass:"btn"},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.getNext}},[t._v("查看更多")])],1):t._e()],1)},$=[],j=(n("4de4"),n("caad"),n("2532"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"})}),C=[],O={name:"Loading"},P=O,F=(n("7f16"),Object(u["a"])(P,j,C,!1,null,"38280d7f",null)),D=F.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"child"},[n("a",{staticClass:"subtitle",on:{click:function(e){return t.show(t.ckey)}}},[n("div",{staticClass:"titledown"},[t._v("> "+t._s(t.parentmsg.title)+" ")])]),t.editFlag?t._e():n("div",{directives:[{name:"show",rawName:"v-show",value:t.flag[t.ckey],expression:"flag[ckey]"}]},[n("mavon-editor",{staticClass:"replymd",attrs:{value:t.parentmsg.body,subfield:t.prop.subfield,defaultOpen:t.prop.defaultOpen,toolbarsFlag:t.prop.toolbarsFlag,editable:t.prop.editable,boxShadow:!1,scrollStyle:t.prop.scrollStyle}}),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.edit(t.parentmsg)}}},[t._v("编辑")])],1)]),t.editFlag?n("div",[n("div",{attrs:{id:"main"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 title",attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("mavon-editor",{ref:"md",staticStyle:{height:"100%"},on:{imgAdd:t.upimg},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.refresh(t.parentmsg)}}},[t._v("更新")]),n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.clear}},[t._v("取消")])],1):t._e()])},L=[],N={name:"Replylist",data:function(){return{title:"",text:"",editFlag:!1,key:"",flag:[]}},methods:{edit:function(t){this.editFlag=!0,this.title=t.title,this.text=t.body},refresh:function(t){this.editFlag=!1,this.$set(t,"title",this.title),this.$set(t,"body",this.text);var e=this.$store.state.password,n=this.$store.state.username,r=t.parent_author,a=t.parent_permlink,s=t.permlink,o=this.title,i=this.text,l=t.json_metadata,c={id:t.id,title:o,author:n,permlink:s,parent_author:r,parent_permlink:a,body:i,created:(new Date).toISOString().split(".")[0],json_metadata:JSON.stringify(l)};this.putChapterDB(c),this.postToSteem(e,r,a,n,s,o,i,l)},putChapterDB:function(t){var e=this.$store.state.db,n=this.$store.state.username+"chapter",r=e.transaction([n],"readwrite");r.oncomplete=function(t){console.log("533,事务操作完成")},r.onerror=function(t){console.log("事务操作出错"),console.dir(t)},r.onsuccess=function(t){console.log("事务操作成功")};var a=r.objectStore(n);a.put(t)},clear:function(){this.editFlag=!1,this.text=""},show:function(t){this.$set(this.flag,t,!this.flag[t])},upimg:function(t,e){this.imgEdit(t,e)}},computed:{prop:function(){var t={subfield:!1,defaultOpen:"preview",editable:!1,toolbarsFlag:!1,scrollStyle:!0};return t}},mounted:function(){for(var t=0;t<this.parentmsg.length;t++)this.flag[t]=!1},props:["parentmsg","ckey"]},E=N,I=(n("853d"),Object(u["a"])(E,A,L,!1,null,"43af7120",null)),T=I.exports,B={name:"Index",data:function(){return{keywords:"",isLoading:!1,posts:[],author:"",permlink:"",showMoreFlag:!0}},methods:{getCreated:function(){var t=this;this.isLoading=!0;var e={tag:"starnote",limit:20};this.steem.api.getDiscussionsByCreated(e,(function(e,n){t.author=n[n.length-1].author,t.permlink=n[n.length-1].permlink;var r=t.filterPosts(n);t.posts=r,t.$store.commit("saveCreated",r),t.isLoading=!1}))},getNext:function(){var t=this;this.isLoading=!0;var e={tag:"starnote",limit:20,start_author:this.author,start_permlink:this.permlink};this.steem.api.getDiscussionsByCreated(e,(function(e,n){n.forEach((function(e){var n=JSON.parse(e.json_metadata);"starnote"===e.category&&"starnote"===n.dapp&&e.permlink!==t.permlink&&t.posts.push(e)})),t.author=n[n.length-1].author,t.permlink=n[n.length-1].permlink,t.$store.commit("saveCreated",t.posts),t.isLoading=!1,1===n.length&&(t.showMoreFlag=!1,alert("没有更多笔记了！"))}))},filterPosts:function(t){var e=[];return t.forEach((function(t){var n=JSON.parse(t.json_metadata);"starnote"===t.category&&"starnote"===n.dapp&&e.push(t)})),e},search:function(t){var e=this.$store.state.created;return e.filter((function(e){if(e.title.includes(t))return e}))}},filters:{formatTime:function(t){return t.substring(0,10)}},components:{Loading:D,Replylist:T},mounted:function(){if(0!=this.$store.state.created){console.log(111,"从vuex中取值"),this.isLoading=!1;var t=this.$store.state.created;this.posts=t,this.author=t[t.length-1].author,this.permlink=t[t.length-1].permlink}else console.log(112,"从steem中取值"),this.getCreated()}},R=B,J=(n("8080"),Object(u["a"])(R,S,$,!1,null,"049574ca",null)),M=J.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"starnote"}},[r("div",{staticClass:"article"},[r("div",{staticClass:"content"},[r("img",{attrs:{src:n("cdd9"),alt:"StarNote"}}),t._v(" "+t._s(t.post.title)+" "),r("p",{staticClass:"posttime"},[t._v("@"+t._s(t.post.author)+" "+t._s(t._f("formatTime")(t.post.created))+" ")]),r("p",[t._v("摘要："+t._s(JSON.parse(t.post.json_metadata).text))]),r("div",t._l(t.chapters,(function(t,e){return r("div",[r("StarnoteList",{attrs:{parentmsg:t,ckey:e}})],1)})),0)])]),r("transition",{attrs:{name:"fade"}},[t.isLoading?r("loading"):t._e()],1)],1)},U=[],W=(n("96cf"),n("1da1")),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"child"},[n("a",{staticClass:"subtitle",on:{click:function(e){return t.show(t.ckey)}}},[n("div",{staticClass:"titledown"},[t._v("> "+t._s(t.parentmsg.title)+" ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.flag[t.ckey],expression:"flag[ckey]"}]},[n("mavon-editor",{staticClass:"replymd",attrs:{value:t.parentmsg.body,subfield:t.prop.subfield,defaultOpen:t.prop.defaultOpen,toolbarsFlag:t.prop.toolbarsFlag,editable:t.prop.editable,boxShadow:!1,scrollStyle:t.prop.scrollStyle}})],1)])])},z=[],H={name:"StarnoteList",data:function(){return{key:"",flag:[]}},methods:{show:function(t){this.$set(this.flag,t,!this.flag[t])}},computed:{prop:function(){var t={subfield:!1,defaultOpen:"preview",editable:!1,toolbarsFlag:!1,scrollStyle:!0};return t}},mounted:function(){for(var t=0;t<this.parentmsg.length;t++)this.flag[t]=!1},props:["parentmsg","ckey"]},Q=H,K=(n("7bb4"),Object(u["a"])(Q,V,z,!1,null,"246e1a68",null)),G=K.exports,Y={name:"Starnote",data:function(){return{isLoading:!1,post:{},chapters:[]}},methods:{},filters:{formatTime:function(t){return t.substring(0,10)}},components:{Loading:D,StarnoteList:G},mounted:function(){var t=this,e=this.$route.params.author,n=this.$route.params.permlink,r=this;if(0!=this.$store.state.created){var a=function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.steem.api.getContentRepliesAsync(e,n);case 2:a=t.sent,s=[],a.length>0&&(a.forEach((function(t){t.author===e&&s.push(t)})),r.chapters=s);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=this.$store.state.created;s.forEach((function(r){r.author===e&&r.permlink===n&&(t.post=r)})),a()}else{var o=function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.steem.api.getContentAsync(e,n);case 2:return r.post=t.sent,t.next=5,r.steem.api.getContentRepliesAsync(e,n);case 5:a=t.sent,s=[],a.length>0&&(a.forEach((function(t){t.author===e&&s.push(t)})),r.chapters=s);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();o()}}},X=Y,Z=(n("2dde"),Object(u["a"])(X,q,U,!1,null,"46ed07f1",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"starnote"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 search",attrs:{id:"inline-form-input-name",placeholder:"搜索"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),r("div",{staticClass:"article"},t._l(t.search(t.keywords),(function(e,a){return r("div",{staticClass:"content"},[r("a",{staticClass:"titleclass",on:{click:function(n){return t.showChapter(a,e.permlink)}}},[r("img",{attrs:{src:n("cdd9"),alt:"StarNote"}}),t._v(" "+t._s(e.title)+" "),r("p",{staticClass:"posttime"},[t._v(t._s(t._f("formatTime")(e.created))+" ")])]),r("b-button",{staticClass:"edittitle",attrs:{variant:"outline-primary"},on:{click:function(n){return t.edit(a,e)}}},[t._v("编辑")]),r("p",{directives:[{name:"show",rawName:"v-show",value:!t.editFlag[a],expression:"!editFlag[key]"}]},[t._v("摘要："+t._s(JSON.parse(e.json_metadata).text))]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.editFlag[a],expression:"editFlag[key]"}]},[r("div",{attrs:{id:"main"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 title",attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("b-form-textarea",{attrs:{id:"textarea",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.refresh(a,e)}}},[t._v("更新")]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.editclear(a)}}},[t._v("取消")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.flag[a],expression:"flag[key]"}]},[t._l(t.chapters,(function(t,e){return r("div",[r("Replylist",{attrs:{parentmsg:t,ckey:e}})],1)})),t.addFlag?t._e():r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.addChapter(e.author,e.permlink,e)}}},[t._v("新增章节")]),t.addFlag?r("div",[r("div",{attrs:{id:"main2"}},[r("div",{staticClass:"subtitle"},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 title",attrs:{placeholder:"请输入章节名"},model:{value:t.subtitle,callback:function(e){t.subtitle=e},expression:"subtitle"}})],1),r("div",{attrs:{id:"main3"}},[r("mavon-editor",{ref:"md",refInFor:!0,staticStyle:{height:"100%"},on:{imgAdd:t.uploadimg},model:{value:t.subtext,callback:function(e){t.subtext=e},expression:"subtext"}})],1)]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.postChapter(e.author,e.permlink,e)}}},[t._v("提交")]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.clear}},[t._v("取消")])],1):t._e()],2)],1)})),0),r("transition",{attrs:{name:"fade"}},[t.isLoading?r("loading"):t._e()],1)],1)},nt=[],rt=(n("99af"),n("c975"),n("d3b7"),n("2909")),at={name:"Manage",data:function(){return{keywords:"",isLoading:!1,flag:[],res:[],chapters:[],addFlag:!1,editFlag:[],title:"",text:"",subtitle:"",subtext:""}},methods:{edit:function(t,e){this.$set(this.editFlag,t,!this.editFlag[t]);for(var n=this.$store.state.posts,r=0;r<n.length;r++)t!=r&&this.$set(this.editFlag,r,!1);this.title=e.title,this.text=JSON.parse(e.json_metadata).text},refresh:function(t,e){this.$set(this.editFlag,t,!1),this.$set(e,"title",this.title),this.$set(e,"body",this.body);var n=this.$store.state.password,r=this.$store.state.username,a="",s="starnote",o=e.permlink,i=this.title,l=this.text,c=JSON.parse(e.json_metadata).tags,u="\n -> 前往[星空笔记](https://starnote.github.io/#/starnote/@"+r+"/"+o+")",d=l+u,p={tags:c,dapp:"starnote",format:"markdown",text:l},m={id:e.id,title:i,author:r,permlink:o,body:d,created:(new Date).toISOString().split(".")[0],json_metadata:JSON.stringify(p)};this.putTitleDB(m),this.postToSteem(n,a,s,r,o,i,d,p)},putTitleDB:function(t){var e=this.$store.state.db,n=this.$store.state.username+"title",r=e.transaction([n],"readwrite");r.oncomplete=function(t){console.log("533,事务操作完成")},r.onerror=function(t){console.log("事务操作出错"),console.dir(t)},r.onsuccess=function(t){console.log("事务操作成功")};var a=r.objectStore(n);a.put(t)},editclear:function(t){this.$set(this.editFlag,t,!1),this.title=this.body=""},getSteemPosts:function(t,e,n,r){var a="2019-12-11T06:40:27",s=this;return new Promise((function(o,i){var l=(new Date).toISOString().split(".")[0];s.steem.api.getDiscussionsByAuthorBeforeDate(t,e,l,n,(function(l,c){var u=[];c.forEach((function(t){t.permlink!==e&&u.push(t)})),r=[].concat(Object(rt["a"])(r),u),c.length>0&&c[c.length-1].created>a?s.getSteemPosts(t,c[c.length-1].permlink,n,r).then(o).catch(i):o(r)}))}))},filterPosts:function(t){var e=[];return t.forEach((function(t){var n=JSON.parse(t.json_metadata);"starnote"===t.category&&"starnote"===n.dapp&&e.push(t)})),e},savePosts:function(t,e){var n=this.$store.state.username+"title",r=t.transaction([n],"readwrite");return new Promise((function(t){r.oncomplete=function(e){console.log("111, 事务操作完成"),t()},r.onerror=function(t){console.log("事务操作出错"),console.dir(t)},r.onsuccess=function(t){console.log("222, 事务操作成功")};for(var a=r.objectStore(n),s=e.length-1;s>-1;s--)a.add(e[s])}))},saveChapters:function(t,e,n){var r=this.$store.state.username+"chapter",a=t.transaction([r],"readwrite");return new Promise((function(t){a.oncomplete=function(e){console.log("121, 事务操作完成"),t()},a.onerror=function(t){console.log("事务操作出错"),console.dir(t)},a.onsuccess=function(t){console.log("222, 事务操作成功")};for(var s=a.objectStore(r),o=0;o<e.length;o++)s.add(e[o]);var i=n;localStorage.setItem(i,"starnote")}))},search:function(t){var e=this.$store.state.posts;return e.filter((function(e){if(e.title.includes(t))return e}))},showChapter:function(t,e){this.chapters=[],this.$set(this.flag,t,!this.flag[t]);for(var n=this.$store.state.posts,r=0;r<n.length;r++)t!=r&&this.$set(this.flag,r,!1);var a=this.$store.state.db,s=this.$store.state.username,o=this,i=e;if(null==localStorage.getItem(i)){var l=function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(e,n){var r,s,l=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l.length>2&&void 0!==l[2]?l[2]:[],t.next=3,o.steem.api.getContentRepliesAsync(e,n);case 3:if(r=t.sent,s=[],!(r.length>1)){t.next=12;break}return r.forEach((function(t){t.author===e&&s.push(t)})),o.chapters=s,t.next=10,o.saveChapters(a,s,n);case 10:t.next=13;break;case 12:localStorage.setItem(i,"starnote");case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();l(s,e)}else{console.log(566,"从数据库取");var c=this;this.getAllChapters(a).then((function(t){t.forEach((function(t){t.parent_permlink===e&&c.chapters.push(t)}))}))}},addChapter:function(){this.addFlag=!0,this.subtitle=this.subtext=""},postChapter:function(t,e,n){this.addFlag=!1;var r=this.$store.state.password,a=this.$store.state.username,s=this.getstr(),o=this.subtitle,i=this.subtext,l=["starnote","cn"],c={tags:l,dapp:"starnote",format:"markdown"},u={parent_author:t,parent_permlink:e,title:o,author:a,permlink:s,body:i,created:(new Date).toISOString().split(".")[0],json_metadata:JSON.stringify(c)};this.chapters.push(u);var d=this.$store.state.db,p=this.$store.state.username+"chapter",m=d.transaction([p],"readwrite");m.oncomplete=function(t){console.log("233，事务操作完成")},m.onerror=function(t){console.log("事务操作出错"),console.dir(t)},m.onsuccess=function(t){console.log("事务操作成功")};var f=m.objectStore(p);f.add(u),this.postToSteem(r,t,e,a,s,o,i,c)},clear:function(){this.addFlag=!1,this.editFlag=!1,this.text=""},uploadimg:function(t,e){this.imgAdd(t,e)}},filters:{formatTime:function(t){return t.substring(0,10)}},components:{Loading:D,Replylist:T},mounted:function(){var t=this,e=this.$store.state.username;function n(){return r.apply(this,arguments)}function r(){return r=Object(W["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o,i,l,c,u,d,p,m,f,h,g,v,b,_;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e){n.next=50;break}if(0!=t.$store.state.posts){n.next=48;break}return n.next=4,t.initDatabase();case 4:return r=n.sent,t.$store.commit("saveDB",r),n.next=8,t.getAllPosts(r);case 8:if(a=n.sent,!(a.length>0)){n.next=35;break}for(t.$store.commit("savePosts",a.reverse()),s=0;s<a.length;s++)t.flag[s]=!1;for(o=0;o<a.length;o++)t.editFlag[o]=!1;return i=a[0].created,l=[],a.forEach((function(t){l.push(t.permlink)})),n.next=18,t.getPostsFromSteem(e,null,20,[],i);case 18:if(c=n.sent,u=t.filterPosts(c),!(u.length>0)){n.next=33;break}if(d=[],u.forEach((function(t){-1===l.indexOf(t.permlink)&&d.push(t)})),!(d.length>0)){n.next=33;break}return n.next=26,t.savePosts(r,d);case 26:return console.log(544,"添加新主题成功！"),n.next=29,t.getAllPosts(r);case 29:for(p=n.sent,t.$store.commit("savePosts",p.reverse()),m=0;m<p.length;m++)t.flag[m]=!1;for(f=0;f<p.length;f++)t.editFlag[f]=!1;case 33:n.next=48;break;case 35:return console.log(1289,"从steem上获取所有课程并存入vuex"),h="2019-12-11T06:40:27",n.next=39,t.getPostsFromSteem(e,null,20,[],h);case 39:if(g=n.sent,v=t.filterPosts(g),!(v.length>0)){n.next=48;break}return t.$store.commit("savePosts",v),n.next=45,t.savePosts(r,v);case 45:for(console.log(514,"添加新主题成功！"),b=0;b<v.length;b++)t.flag[b]=!1;for(_=0;_<v.length;_++)t.editFlag[_]=!1;case 48:n.next=51;break;case 50:t.$router.push({path:"/login"});case 51:case"end":return n.stop()}}),n)}))),r.apply(this,arguments)}n()}},st=at,ot=(n("0517"),Object(u["a"])(st,et,nt,!1,null,"0a8c184d",null)),it=ot.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h2",[t._v("用户登录")]),t.flag?n("div",[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 user",attrs:{id:"inline-form-input-name",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 user",attrs:{id:"inline-form-input-password",type:"password",placeholder:"请输入发贴密钥（posting key）或 密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("div",{staticClass:"loginbtn"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.login}},[t._v("登录")])],1)],1):t._e(),n("transition",{attrs:{name:"fade"}},[t.isLoading?n("loading"):t._e()],1)],1)},ct=[],ut={name:"Login",data:function(){return{username:"",password:"",isLoading:!1,flag:!0}},methods:{login:function(){var t=this;this.flag=!1,this.isLoading=!0;var e=this.username;this.steem.api.getAccounts([e],(function(n,r){if(0===r.length)t.isLoading=!1,alert("用户不存在！");else{var a,s=r[0].posting.key_auths[0][0],o=t.password,i=t.steem.auth.isWif(o);if(!0===i){try{a=t.steem.auth.wifIsValid(o,s)}catch(u){a="false"}!0===a?(t.isLoading=!1,console.log(" Welcome.",e),t.$store.commit("saveUser",{username:e,password:o}),t.$router.push({path:"/manage"})):(t.isLoading=!1,alert("错误！请检查用户名和发贴密钥！"))}else{var l=["posting"],c=t.steem.auth.toWif(e,o,l);try{a=t.steem.auth.wifIsValid(c,s)}catch(u){a="false"}!0===a?(t.isLoading=!1,console.log(" Welcome.",e),t.$store.commit("saveUser",{username:e,password:c}),t.$router.push({path:"/manage"})):(t.isLoading=!1,alert("错误！请检查用户名和密码！"))}}}))}},components:{Loading:D}},dt=ut,pt=(n("fc59"),Object(u["a"])(dt,lt,ct,!1,null,"4e1dee54",null)),mt=pt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"maintop"}},[t.flag?n("div",[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 title",attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("div",{attrs:{id:"main"}},[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"请输入摘要",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("br"),n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"tags  (输入英文标签，以空格分隔)"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}}),n("div",{staticClass:"btn"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.post}},[t._v("提交")])],1)],1):t._e(),n("transition",{attrs:{name:"fade"}},[t.isLoading?n("loading"):t._e()],1)],1)},ht=[],gt=(n("498a"),{name:"Post",data:function(){return{db:{},title:"",text:"",tags:"",isLoading:!1,flag:!0}},methods:{post:function(){this.flag=!1,this.isLoading=!0;var t=this.$store.state.password,e="",n="starnote",r=this.$store.state.username,a=this.getstr(),s=this.title,o=this.text,i="starnote "+this.tags,l=i.trim().split(/\s+/),c="\n -> 前往[星空笔记](https://starnote.github.io/#/starnote/@"+r+"/"+a+")",u=o+c,d={tags:l,dapp:"starnote",format:"markdown",text:o},p={title:s,author:r,permlink:a,parent_author:"",parent_permlink:"starnote",category:"starnote",body:u,created:(new Date).toISOString().split(".")[0],json_metadata:JSON.stringify(d)},m=this,f=this.$store.state.db,h=this.$store.state.username+"title";function g(){return v.apply(this,arguments)}function v(){return v=Object(W["a"])(regeneratorRuntime.mark((function o(){var i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,m.saveOneToDb(p,f,h);case 2:return o.next=4,m.postToSteemPro(t,e,n,r,a,s,u,d);case 4:return m.hive.api.setOptions({url:"https://anyx.io"}),o.next=7,m.postToHive(t,e,n,r,a,s,u,d);case 7:return m.steem.api.setOptions({url:"https://cn.steems.top"}),o.next=10,m.getAllPosts(f);case 10:i=o.sent,m.$store.commit("savePosts",i.reverse()),m.$router.push({path:"/manage"});case 13:case"end":return o.stop()}}),o)}))),v.apply(this,arguments)}g()}},components:{Loading:D},mounted:function(){var t=this;function e(){return n.apply(this,arguments)}function n(){return n=Object(W["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$store.state.username){e.next=12;break}if(0!=t.$store.state.posts){e.next=10;break}return e.next=4,t.initDatabase();case 4:return n=e.sent,t.$store.commit("saveDB",n),e.next=8,t.getAllPosts(n);case 8:r=e.sent,t.$store.commit("savePosts",r.reverse());case 10:e.next=13;break;case 12:t.$router.push({path:"/login"});case 13:case"end":return e.stop()}}),e)}))),n.apply(this,arguments)}e()}}),vt=gt,bt=(n("41af"),Object(u["a"])(vt,ft,ht,!1,null,"90d76154",null)),_t=bt.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("h1",[t._v("关于星空笔记")]),n("img",{attrs:{src:"https://www.steemjiang.com:8081/ipfs/Qmf1KNVAxc3oEmYTWnu2NrCKCkhs6xVkCbuRsd2F8Asmbq",alt:"星空笔记"}}),n("br"),n("br"),t._v(" 星空笔记，基于Steem和IPFS的区块链笔记，@lemooljiang创建。数据存储在Steem区块链上，图片存在IPFS网络中，前端则使用IndexedDB数据库，几者相结合，有着神奇的效果！"),n("br"),n("br"),t._v(" 星空笔记是一个去中心的应用！ 它和比特币的离线钱包类似，可以很方便地在本地构建，无需服务器。"),n("br"),n("br"),t._v(" 当然，为了方便大家使用，我把它上传到github page中，大家可以直接访问：https://starnote.github.io"),n("br"),n("br"),n("h4",[t._v("本地构建说明")]),t._v(" 本地环境：Apache 或 Nginx"),n("br"),t._v(" 仓库地址： https://github.com/starnote/starnote.github.io"),n("br"),t._v(" 将仓库中的“index.html” 和 “static” 下载到本地，放进Apache 或 Nginx的根目录即可，http://localhost"),n("br"),n("br")])}],xt={name:"About",data:function(){return{}},mounted:function(){}},yt=xt,St=(n("f4c6"),Object(u["a"])(yt,kt,wt,!1,null,"1687e63e",null)),$t=St.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("h1",[t._v("新手生存指南")]),t._m(0),n("div",{staticClass:"newtext"},[n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/3f5j36-steem",target:"_blank"}},[t._v("1、steem介绍")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/4xxuhj",target:"_blank"}},[t._v("2、翻墙注册（更新版）")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/4kkmhd",target:"_blank"}},[t._v("3、发贴赚钱")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/4mddsq",target:"_blank"}},[t._v("4、图文编辑三板斧（更新版）")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/3xqvw9",target:"_blank"}},[t._v("5、工具红宝书")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/supload",target:"_blank"}},[t._v("6、新图床supload，顺便赚点比特币")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/p",target:"_blank"}},[t._v("7、P图神技")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/3xem6o",target:"_blank"}},[t._v("8、快速查询及归类")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/3s29oy",target:"_blank"}},[t._v("9、勤于打扫，与垃圾号绝交")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/6hgzux",target:"_blank"}},[t._v("10、一分钟注册新帐户（需要付费）")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/markdown-steemit",target:"_blank"}},[t._v("11、Markdown语法规范")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/4rxtdx",target:"_blank"}},[t._v("12、好玩的表情包和字体图标")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/km1n4",target:"_blank"}},[t._v("13、极速提现")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/6jrje-steemit",target:"_blank"}},[t._v("14、steemit上的长跑")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/2dfqrq",target:"_blank"}},[t._v("15、密码即一切")]),n("br"),n("router-link",{attrs:{to:"/searcharticle/@lemooljiang/steem-dapp",target:"_blank"}},[t._v("16、基于steem的应用DAPP")]),n("br")],1)])},Ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"margin-left":"15%"}},[n("img",{attrs:{src:"https://i.loli.net/2019/11/24/bsO5WDuaBonL7Uv.jpg",alt:"steem",id:"newbie"}})])}],Ot={name:"Newbie",data:function(){return{}},mounted:function(){}},Pt=Ot,Ft=(n("f0bc"),Object(u["a"])(Pt,jt,Ct,!1,null,"1345dcd4",null)),Dt=Ft.exports;r["default"].use(y["a"]);var At=[{path:"/",name:"index",component:M},{path:"/@:author/:permlink",name:"starnote",component:tt},{path:"/manage",name:"manage",component:it},{path:"/post",name:"post",component:_t},{path:"/login",name:"login",component:mt},{path:"/about",name:"about",component:$t},{path:"/newbie",name:"newbie",component:Dt}],Lt=new y["a"]({mode:"hash",base:"/",routes:At}),Nt=Lt,Et=n("2f62"),It=n("9c40"),Tt=n.n(It);r["default"].use(Et["a"]);var Bt=new Et["a"].Store({state:{username:Tt.a.get("username"),password:Tt.a.get("password"),created:[],posts:[],db:{}},mutations:{saveUser:function(t,e){t.username=e.username,t.password=e.password,Tt.a.set("username",e.username,"30d"),Tt.a.set("password",e.password,"30d")},saveCreated:function(t,e){t.created=e},savePosts:function(t,e){t.posts=e},saveDB:function(t,e){t.db=e},clearUser:function(t){t.username=null,t.password=null,Tt.a.remove("username"),Tt.a.remove("password")}},actions:{},modules:{}}),Rt=n("6f38"),Jt=(n("d52a"),n("edc99"),n("9584")),Mt=n.n(Jt),qt=(n("9bad"),n("f64c")),Ut=n.n(qt),Wt=n("4fce"),Vt=n.n(Wt),zt=function(){function t(t,e){for(var n="",r=t;r>0;--r)n+=e[Math.floor(Math.random()*e.length)];return n}return t(5,"0123456789abcdefghijklmnopqrstuvwxyz")},Ht=n("a352"),Qt=n("b23d"),Kt=function(){var t,e,n=this.$store.state.username,r=this.$store.state.username+"title",a=this.$store.state.username+"chapter",s=window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB;return s||alert("你的浏览器不支持IndexedDB!\n建议使用brave、 chrome 、opera等浏览器！"),new Promise((function(o){e=s.open(n,1),e.onupgradeneeded=function(e){if(console.log("数据库创建或更新"),t=e.target.result,!t.objectStoreNames.contains(r)){var n=t.createObjectStore(r,{keyPath:"id",autoIncrement:!0});n.createIndex("title","title",{unique:!1})}if(!t.objectStoreNames.contains(a)){var s=t.createObjectStore(a,{keyPath:"id",autoIncrement:!0});s.createIndex("title","title",{unique:!1})}},e.onsuccess=function(e){t=e.target.result,console.log(666,"db版本号",t.version),t.onerror=function(t){alert("Database error:"+t.target.errorCode),console.dir(t.target)},o(t)},e.onerror=function(t){console.log(t,"数据库打开错误")}}))},Gt=function(t){var e=this.$store.state.username+"title",n=t.transaction([e],"readwrite"),r=n.objectStore(e),a=[];return new Promise((function(t){r.openCursor().onsuccess=function(e){var n=e.target.result;n?(a.push(n.value),n.continue()):t(a)},r.openCursor().onerror=function(t){console.dir(t)}}))},Yt=function(t){var e=this.$store.state.username+"chapter",n=t.transaction([e],"readwrite"),r=n.objectStore(e),a=[];return new Promise((function(t){r.openCursor().onsuccess=function(e){var n=e.target.result;n?(a.push(n.value),n.continue()):t(a)},r.openCursor().onerror=function(t){console.dir(t)}}))},Xt=function(t,e,n,r,a,s,o,i){this.steem.broadcast.comment(t,e,n,r,a,s,o,i,(function(t,e){console.log(123456,t,e),t&&alert("错误！未能同步到Steem区块链上！\n具体原因如下：\n"+t)}))},Zt=function(t,e,n,r,a,s,o,i){var l=this;return new Promise((function(c){l.steem.broadcast.comment(t,e,n,r,a,s,o,i,(function(t,e){console.log(123456,t,e),t&&alert("错误！未能同步到Steem区块链上！\n具体原因如下：\n"+t),c()}))}))},te=function(t,e,n,r,a,s,o,i){var l=this;return new Promise((function(c){l.hive.broadcast.comment(t,e,n,r,a,s,o,i,(function(t,e){console.log(234567,t,e),t&&alert("错误！未能同步到Hive区块链上！\n具体原因如下：\n"+t),c()}))}))},ee=function(t,e,n){return new Promise((function(r){var a=e.transaction([n],"readwrite");a.oncomplete=function(t){console.log("536, 事务操作完成"),r()},a.onerror=function(t){console.log("事务操作出错"),console.dir(t)},a.onsuccess=function(t){console.log("事务操作成功")};var s=a.objectStore(n);s.add(t)}))},ne=function(t,e,n,r,a){var s=this;return new Promise((function(o,i){var l=(new Date).toISOString().split(".")[0];s.steem.api.getDiscussionsByAuthorBeforeDate(t,e,l,n,(function(l,c){var u=[];c.forEach((function(t){t.permlink!==e&&u.push(t)})),r=[].concat(Object(rt["a"])(r),u),c.length>1&&c[c.length-1].created>a?s.getPostsFromSteem(t,c[c.length-1].permlink,n,r,a).then(o).catch(i):o(r)}))}))};r["default"].use(Rt["a"]),r["default"].use(Tt.a),r["default"].use(Mt.a),Ut.a.api.setOptions({url:"https://cn.steems.top"}),r["default"].prototype.steem=Ut.a,r["default"].prototype.hive=Ut.a;var re=Vt()({host:"steemjiang.com",port:"9001",protocol:"https"});r["default"].prototype.ipfs=re;var ae="https://steemjiang.com:8081/ipfs/";r["default"].prototype.ipfsAddr=ae,r["default"].prototype.getstr=zt,r["default"].prototype.imgAdd=Ht["a"],r["default"].prototype.imgEdit=Qt["a"],r["default"].prototype.initDatabase=Kt,r["default"].prototype.getAllPosts=Gt,r["default"].prototype.getAllChapters=Yt,r["default"].prototype.postToSteem=Xt,r["default"].prototype.postToSteemPro=Zt,r["default"].prototype.postToHive=te,r["default"].prototype.saveOneToDb=ee,r["default"].prototype.getPostsFromSteem=ne,r["default"].config.productionTip=!1,new r["default"]({router:Nt,store:Bt,render:function(t){return t(x)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},"729e":function(t,e,n){},"72eb":function(t,e,n){"use strict";var r=n("02b1"),a=n.n(r);a.a},"7bb4":function(t,e,n){"use strict";var r=n("729e"),a=n.n(r);a.a},"7f16":function(t,e,n){"use strict";var r=n("e22e"),a=n.n(r);a.a},8:function(t,e){},8080:function(t,e,n){"use strict";var r=n("8cbc"),a=n.n(r);a.a},"853d":function(t,e,n){"use strict";var r=n("87ea"),a=n.n(r);a.a},"85ec":function(t,e,n){},"85f9":function(t,e,n){},"87ea":function(t,e,n){},"888f":function(t,e,n){},"8cbc":function(t,e,n){},9:function(t,e){},"950d":function(t,e,n){t.exports=n.p+"img/starnote.26cde6a3.svg"},a1c2:function(t,e,n){},a352:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n("d3b7");var r=function(e,n){var r=this.ipfsAddr,a=this,s=function(e){return new Promise((function(n,r){var s=t.from(e.result);a.ipfs.add(s).then((function(t){n(t[0].hash)})).catch((function(t){console.error(t),r(t)}))}))},o=new FileReader;o.readAsArrayBuffer(n),o.onloadend=function(t){s(o).then((function(t){a.$refs.md[0].$img2Url(e,r+t)}))}}}).call(this,n("b639").Buffer)},b23d:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n("d3b7");var r=function(e,n){var r=this.ipfsAddr,a=this,s=function(e){return new Promise((function(n,r){var s=t.from(e.result);a.ipfs.add(s).then((function(t){n(t[0].hash)})).catch((function(t){console.error(t),r(t)}))}))},o=new FileReader;o.readAsArrayBuffer(n),o.onloadend=function(t){s(o).then((function(t){a.$refs.md.$img2Url(e,r+t)}))}}}).call(this,n("b639").Buffer)},cdd9:function(t,e,n){t.exports=n.p+"img/star.59dd5406.svg"},e22e:function(t,e,n){},f0bc:function(t,e,n){"use strict";var r=n("0cce"),a=n.n(r);a.a},f4c6:function(t,e,n){"use strict";var r=n("a1c2"),a=n.n(r);a.a},f90f:function(t,e,n){},fc59:function(t,e,n){"use strict";var r=n("5536"),a=n.n(r);a.a}});
//# sourceMappingURL=app.bf042fe5.js.map