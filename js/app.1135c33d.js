(function(t){function e(e){for(var n,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([1,"chunk-vendors"]),r()})({0:function(t,e){},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"076a":function(t,e,r){},"0a24":function(t,e,r){"use strict";var n=r("076a"),a=r.n(n);a.a},"0cce":function(t,e,r){},1:function(t,e,r){t.exports=r("56d7")},10:function(t,e){},11:function(t,e){},1302:function(t,e,r){},"15cf":function(t,e,r){"use strict";var n=r("945e"),a=r.n(n);a.a},2:function(t,e){},2009:function(t,e,r){"use strict";var n=r("1302"),a=r.n(n);a.a},"21cf":function(t,e,r){},"2dde":function(t,e,r){"use strict";var n=r("888f"),a=r.n(n);a.a},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{staticClass:"navmanu",attrs:{toggleable:"lg",type:"light"}},[n("b-navbar-brand",{on:{click:t.backtoindex}},[n("img",{staticClass:"d-inline-block align-top",attrs:{src:r("950d"),alt:"StarNote"}})]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),n("router-link",{attrs:{to:"/manage"}},[t._v("管理笔记")]),n("router-link",{attrs:{to:"/post"}},[t._v("发布笔记")]),t.$store.state.username?n("div",[n("a",{attrs:{href:"#"}},[t._v("@"+t._s(t.$store.state.username))]),n("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("注销")])]):n("div",[n("a",{attrs:{href:"https://moochain.net/register",target:"_blank"}},[t._v("注册")]),n("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1)],1)],1)],1),n("router-view"),n("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myfooter"},[r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",[r("router-link",{attrs:{to:"/about"}},[t._v("关于星空笔记")])],1),r("b-col",[r("a",{attrs:{target:"_blank",href:"https://steemitwallet.com"}},[t._v("网页钱包")])]),r("b-col",[r("a",{attrs:{target:"_blank",href:"https://github.com/starnote/starnote.github.io"}},[t._v("Github")])]),r("b-col",[r("a",{attrs:{target:"_blank",href:"https://github.com/steemit/steem-js/tree/master/doc#install"}},[t._v("开发手册")])])],1),r("b-row",[r("b-col",[r("router-link",{attrs:{to:"/newbie"}},[t._v("新手指南")])],1),r("b-col",[r("a",{attrs:{target:"_blank",href:"https://github.com/aaroncox/vessel/releases"}},[t._v("桌面钱包")])]),r("b-col",[r("a",{attrs:{target:"_blank",href:"https://github.com/steem-driver/awesome-steem"}},[t._v("AwesomeSteem")])]),r("b-col",[r("a",{attrs:{target:"_blank",href:"https://smt.steem.com"}},[t._v("SMTs")])])],1),r("b-row",[r("b-col",[r("a",{attrs:{target:"_blank",href:"https://steemh.org"}},[t._v("Steem指南")])]),r("b-col",[r("a",{attrs:{target:"_blank",href:"https://steemd.com/@"+this.$store.state.username}},[t._v("区块数据")])]),r("b-col",[r("a",{attrs:{target:"_blank",href:"https://steemprojects.com"}},[t._v("SteemProjects")])]),r("b-col")],1)],1),r("p",{staticClass:"info"},[t._v("Copyright©2019 星空笔记，基于Steem和IPFS的区块链笔记 @lemooljiang创建 QQ:497867999")])],1)},i=[],l={name:"Footer"},c=l,u=(r("15cf"),r("2877")),d=Object(u["a"])(c,o,i,!1,null,"34b6e748",null),p=d.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" test ")])},f=[],h=(r("ac1f"),r("1276"),{name:"Test",mounted:function(){var t=(new Date).toISOString().split(".")[0];console.log(111,t);var e="lemooljiang";this.steem.api.getDiscussionsByAuthorBeforeDate(e,null,t,10,(function(t,e){console.log(567,t,e)}))}}),g=h,v=Object(u["a"])(g,m,f,!1,null,"ca819d6a",null),b=v.exports,_={name:"App",data:function(){return{username:"",password:"",keywords:""}},methods:{backtoindex:function(){this.$router.push({path:"/"})},logout:function(){this.$store.commit("clearUser")}},filters:{formatTime:function(t){return t.substring(0,10)}},components:{Footer:p,Test:b},mounted:function(){if(null!=localStorage.getItem("autostart")){console.log(222,"开始点赞啦！");var t=JSON.parse(localStorage.getItem("authors"));this.getDataAndVote(t)}}},k=_,w=(r("034f"),Object(u["a"])(k,a,s,!1,null,null,null)),x=w.exports,y=r("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"starnote"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 search",attrs:{placeholder:"搜索"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),n("div",{staticClass:"article"},t._l(t.search(t.keywords),(function(e){return n("div",{staticClass:"content"},[n("router-link",{attrs:{to:"/starnote/@"+e.author+"/"+e.permlink}},[n("img",{attrs:{src:r("cdd9"),alt:"StarNote"}}),t._v(" "+t._s(e.title)+" ")]),n("p",{staticClass:"posttime"},[t._v("@"+t._s(e.author)+" "+t._s(t._f("formatTime")(e.created))+" ")]),n("p",[t._v("摘要："+t._s(JSON.parse(e.json_metadata).text))])],1)})),0),n("transition",{attrs:{name:"fade"}},[t.isLoading?n("loading"):t._e()],1),t.showMoreFlag?n("div",{staticClass:"btn"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.getNext}},[t._v("查看更多")])],1):t._e()],1)},S=[],j=(r("4de4"),r("caad"),r("2532"),r("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"})}),C=[],O={name:"Loading"},P=O,F=(r("7f16"),Object(u["a"])(P,j,C,!1,null,"38280d7f",null)),D=F.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("div",{staticClass:"child"},[r("a",{staticClass:"subtitle",on:{click:function(e){return t.show(t.ckey)}}},[r("div",{staticClass:"titledown"},[t._v("> "+t._s(t.parentmsg.title)+" ")])]),t.editFlag?t._e():r("div",{directives:[{name:"show",rawName:"v-show",value:t.flag[t.ckey],expression:"flag[ckey]"}]},[r("mavon-editor",{staticClass:"replymd",attrs:{value:t.parentmsg.body,subfield:t.prop.subfield,defaultOpen:t.prop.defaultOpen,toolbarsFlag:t.prop.toolbarsFlag,editable:t.prop.editable,boxShadow:!1,scrollStyle:t.prop.scrollStyle}}),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.edit(t.parentmsg)}}},[t._v("编辑")])],1)]),t.editFlag?r("div",[r("div",{attrs:{id:"main"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 title",attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("mavon-editor",{ref:"md",staticStyle:{height:"100%"},on:{imgAdd:t.upimg},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.refresh(t.parentmsg)}}},[t._v("更新")]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.clear}},[t._v("取消")])],1):t._e()])},E=[],N={name:"Replylist",data:function(){return{title:"",text:"",editFlag:!1,key:"",flag:[]}},methods:{edit:function(t){this.editFlag=!0,this.title=t.title,this.text=t.body},refresh:function(t){this.editFlag=!1,this.$set(t,"title",this.title),this.$set(t,"body",this.text);var e=this.$store.state.password,r=this.$store.state.username,n=t.parent_author,a=t.parent_permlink,s=t.permlink,o=this.title,i=this.text,l=t.json_metadata,c={id:t.id,title:o,author:r,permlink:s,parent_author:n,parent_permlink:a,body:i,created:(new Date).toISOString().split(".")[0],json_metadata:JSON.stringify(l)};this.putChapterDB(c),this.postToSteem(e,n,a,r,s,o,i,l)},putChapterDB:function(t){var e=this.$store.state.db,r=this.$store.state.username+"chapter",n=e.transaction([r],"readwrite");n.oncomplete=function(t){console.log("533,事务操作完成")},n.onerror=function(t){console.log("事务操作出错"),console.dir(t)},n.onsuccess=function(t){console.log("事务操作成功")};var a=n.objectStore(r);a.put(t)},clear:function(){this.editFlag=!1,this.text=""},show:function(t){this.$set(this.flag,t,!this.flag[t])},upimg:function(t,e){this.imgEdit(t,e)}},computed:{prop:function(){var t={subfield:!1,defaultOpen:"preview",editable:!1,toolbarsFlag:!1,scrollStyle:!0};return t}},mounted:function(){for(var t=0;t<this.parentmsg.length;t++)this.flag[t]=!1},props:["parentmsg","ckey"]},L=N,I=(r("853d"),Object(u["a"])(L,A,E,!1,null,"43af7120",null)),B=I.exports,T={name:"Index",data:function(){return{keywords:"",isLoading:!1,posts:[],author:"",permlink:"",showMoreFlag:!0}},methods:{getCreated:function(){var t=this;this.isLoading=!0;var e={tag:"starnote",limit:20};this.steem.api.getDiscussionsByCreated(e,(function(e,r){t.author=r[r.length-1].author,t.permlink=r[r.length-1].permlink;var n=t.filterPosts(r);t.posts=n,t.$store.commit("saveCreated",n),t.isLoading=!1}))},getNext:function(){var t=this;this.isLoading=!0;var e={tag:"starnote",limit:20,start_author:this.author,start_permlink:this.permlink};this.steem.api.getDiscussionsByCreated(e,(function(e,r){r.forEach((function(e){var r=JSON.parse(e.json_metadata);"starnote"===e.category&&"starnote"===r.dapp&&e.permlink!==t.permlink&&t.posts.push(e)})),t.author=r[r.length-1].author,t.permlink=r[r.length-1].permlink,t.$store.commit("saveCreated",t.posts),t.isLoading=!1,1===r.length&&(t.showMoreFlag=!1,alert("没有更多笔记了！"))}))},filterPosts:function(t){var e=[];return t.forEach((function(t){var r=JSON.parse(t.json_metadata);"starnote"===t.category&&"starnote"===r.dapp&&e.push(t)})),e},search:function(t){var e=this.$store.state.created;return e.filter((function(e){if(e.title.includes(t))return e}))}},filters:{formatTime:function(t){return t.substring(0,10)}},components:{Loading:D,Replylist:B},mounted:function(){if(0!=this.$store.state.created){console.log(111,"从vuex中取值"),this.isLoading=!1;var t=this.$store.state.created;this.posts=t,this.author=t[t.length-1].author,this.permlink=t[t.length-1].permlink}else console.log(112,"从steem中取值"),this.getCreated()}},R=T,J=(r("9ad0"),Object(u["a"])(R,$,S,!1,null,"739b77d8",null)),M=J.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"starnote"}},[n("div",{staticClass:"article"},[n("div",{staticClass:"content"},[n("img",{attrs:{src:r("cdd9"),alt:"StarNote"}}),t._v(" "+t._s(t.post.title)+" "),n("p",{staticClass:"posttime"},[t._v("@"+t._s(t.post.author)+" "+t._s(t._f("formatTime")(t.post.created))+" ")]),n("p",[t._v("摘要："+t._s(JSON.parse(t.post.json_metadata).text))]),n("div",t._l(t.chapters,(function(t,e){return n("div",[n("StarnoteList",{attrs:{parentmsg:t,ckey:e}})],1)})),0)])]),n("transition",{attrs:{name:"fade"}},[t.isLoading?n("loading"):t._e()],1)],1)},U=[],W=(r("96cf"),r("1da1")),V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("div",{staticClass:"child"},[r("a",{staticClass:"subtitle",on:{click:function(e){return t.show(t.ckey)}}},[r("div",{staticClass:"titledown"},[t._v("> "+t._s(t.parentmsg.title)+" ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.flag[t.ckey],expression:"flag[ckey]"}]},[r("mavon-editor",{staticClass:"replymd",attrs:{value:t.parentmsg.body,subfield:t.prop.subfield,defaultOpen:t.prop.defaultOpen,toolbarsFlag:t.prop.toolbarsFlag,editable:t.prop.editable,boxShadow:!1,scrollStyle:t.prop.scrollStyle}})],1)])])},z=[],Q={name:"StarnoteList",data:function(){return{key:"",flag:[]}},methods:{show:function(t){this.$set(this.flag,t,!this.flag[t])}},computed:{prop:function(){var t={subfield:!1,defaultOpen:"preview",editable:!1,toolbarsFlag:!1,scrollStyle:!0};return t}},mounted:function(){for(var t=0;t<this.parentmsg.length;t++)this.flag[t]=!1},props:["parentmsg","ckey"]},K=Q,G=(r("7bb4"),Object(u["a"])(K,V,z,!1,null,"246e1a68",null)),Y=G.exports,H={name:"Starnote",data:function(){return{isLoading:!1,post:{},chapters:[]}},methods:{},filters:{formatTime:function(t){return t.substring(0,10)}},components:{Loading:D,StarnoteList:Y},mounted:function(){var t=this,e=this.$route.params.author,r=this.$route.params.permlink,n=this;if(0!=this.$store.state.created){var a=function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.steem.api.getContentRepliesAsync(e,r);case 2:a=t.sent,s=[],a.length>0&&(a.forEach((function(t){t.author===e&&s.push(t)})),n.chapters=s);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=this.$store.state.created;s.forEach((function(n){n.author===e&&n.permlink===r&&(t.post=n)})),a()}else{var o=function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.steem.api.getContentAsync(e,r);case 2:return n.post=t.sent,t.next=5,n.steem.api.getContentRepliesAsync(e,r);case 5:a=t.sent,s=[],a.length>0&&(a.forEach((function(t){t.author===e&&s.push(t)})),n.chapters=s);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();o()}}},X=H,Z=(r("2dde"),Object(u["a"])(X,q,U,!1,null,"46ed07f1",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"starnote"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 search",attrs:{id:"inline-form-input-name",placeholder:"搜索"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),n("div",{staticClass:"article"},t._l(t.search(t.keywords),(function(e,a){return n("div",{staticClass:"content"},[n("a",{staticClass:"titleclass",on:{click:function(r){return t.showChapter(a,e.permlink)}}},[n("img",{attrs:{src:r("cdd9"),alt:"StarNote"}}),t._v(" "+t._s(e.title)+" "),n("p",{staticClass:"posttime"},[t._v(t._s(t._f("formatTime")(e.created))+" ")])]),n("b-button",{staticClass:"edittitle",attrs:{variant:"outline-primary"},on:{click:function(r){return t.edit(a,e)}}},[t._v("编辑")]),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.editFlag[a],expression:"!editFlag[key]"}]},[t._v("摘要："+t._s(JSON.parse(e.json_metadata).text))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.editFlag[a],expression:"editFlag[key]"}]},[n("div",{attrs:{id:"main"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 title",attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("b-form-textarea",{attrs:{id:"textarea",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(r){return t.refresh(a,e)}}},[t._v("更新")]),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.editclear(a)}}},[t._v("取消")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.flag[a],expression:"flag[key]"}]},[t._l(t.chapters,(function(t,e){return n("div",[n("Replylist",{attrs:{parentmsg:t,ckey:e}})],1)})),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(r){return t.addChapter(e.author,e.permlink,e)}}},[t._v("新增章节")]),t.addFlag?n("div",[n("div",{attrs:{id:"main2"}},[n("div",{staticClass:"subtitle"},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 title",attrs:{placeholder:"请输入章节名"},model:{value:t.subtitle,callback:function(e){t.subtitle=e},expression:"subtitle"}})],1),n("div",{attrs:{id:"main3"}},[n("mavon-editor",{ref:"md",refInFor:!0,staticStyle:{height:"100%"},on:{imgAdd:t.uploadimg},model:{value:t.subtext,callback:function(e){t.subtext=e},expression:"subtext"}})],1)]),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(r){return t.postChapter(e.author,e.permlink,e)}}},[t._v("提交")]),n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.clear}},[t._v("取消")])],1):t._e()],2)],1)})),0),n("transition",{attrs:{name:"fade"}},[t.isLoading?n("loading"):t._e()],1)],1)},rt=[],nt=(r("99af"),r("c975"),r("d3b7"),r("2909")),at={name:"Manage",data:function(){return{keywords:"",isLoading:!1,flag:[],res:[],chapters:[],addFlag:!1,editFlag:[],title:"",text:"",subtitle:"",subtext:""}},methods:{edit:function(t,e){this.$set(this.editFlag,t,!this.editFlag[t]);for(var r=this.$store.state.posts,n=0;n<r.length;n++)t!=n&&this.$set(this.editFlag,n,!1);this.title=e.title,this.text=JSON.parse(e.json_metadata).text},refresh:function(t,e){this.$set(this.editFlag,t,!1),this.$set(e,"title",this.title),this.$set(e,"body",this.body);var r=this.$store.state.password,n=this.$store.state.username,a="",s="starnote",o=e.permlink,i=this.title,l=this.text,c=e.json_metadata,u="\n -> 前往[星空笔记](https://starnote.github.io/starnote/@"+n+"/"+o+")",d=l+u,p={id:e.id,title:i,author:n,permlink:o,body:d,created:(new Date).toISOString().split(".")[0],json_metadata:JSON.stringify(c)};this.putTitleDB(p),this.postToSteem(r,a,s,n,o,i,d,c)},putTitleDB:function(t){var e=this.$store.state.db,r=this.$store.state.username+"title",n=e.transaction([r],"readwrite");n.oncomplete=function(t){console.log("533,事务操作完成")},n.onerror=function(t){console.log("事务操作出错"),console.dir(t)},n.onsuccess=function(t){console.log("事务操作成功")};var a=n.objectStore(r);a.put(t)},editclear:function(t){this.$set(this.editFlag,t,!1),this.title=this.body=""},getSteemPosts:function(t,e,r,n){var a="2019-12-11T06:40:27",s=this;return new Promise((function(o,i){var l=(new Date).toISOString().split(".")[0];s.steem.api.getDiscussionsByAuthorBeforeDate(t,e,l,r,(function(l,c){var u=[];c.forEach((function(t){t.permlink!==e&&u.push(t)})),n=[].concat(Object(nt["a"])(n),u),c.length>1&&c[c.length-1].created>a?s.getSteemPosts(t,c[c.length-1].permlink,r,n).then(o).catch(i):o(n)}))}))},filterPosts:function(t){var e=[];return t.forEach((function(t){var r=JSON.parse(t.json_metadata);"starnote"===t.category&&"starnote"===r.dapp&&e.push(t)})),e},savePosts:function(t,e){var r=this.$store.state.username+"title",n=t.transaction([r],"readwrite");return new Promise((function(t){n.oncomplete=function(e){console.log("111, 事务操作完成"),t()},n.onerror=function(t){console.log("事务操作出错"),console.dir(t)},n.onsuccess=function(t){console.log("222, 事务操作成功")};for(var a=n.objectStore(r),s=e.length-1;s>-1;s--)a.add(e[s])}))},saveChapters:function(t,e,r){var n=this.$store.state.username+"chapter",a=t.transaction([n],"readwrite");return new Promise((function(t){a.oncomplete=function(e){console.log("121, 事务操作完成"),t()},a.onerror=function(t){console.log("事务操作出错"),console.dir(t)},a.onsuccess=function(t){console.log("222, 事务操作成功")};for(var s=a.objectStore(n),o=0;o<e.length;o++)s.add(e[o]);var i=r;localStorage.setItem(i,"starnote")}))},search:function(t){var e=this.$store.state.posts;return e.filter((function(e){if(e.title.includes(t))return e}))},showChapter:function(t,e){this.chapters=[],this.$set(this.flag,t,!this.flag[t]);for(var r=this.$store.state.posts,n=0;n<r.length;n++)t!=n&&this.$set(this.flag,n,!1);var a=this.$store.state.db,s=this.$store.state.username,o=this,i=e;if(null==localStorage.getItem(i)){var l=function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(e,r){var n,s,l=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l.length>2&&void 0!==l[2]?l[2]:[],t.next=3,o.steem.api.getContentRepliesAsync(e,r);case 3:if(n=t.sent,s=[],!(n.length>1)){t.next=12;break}return n.forEach((function(t){t.author===e&&s.push(t)})),o.chapters=s,t.next=10,o.saveChapters(a,s,r);case 10:t.next=13;break;case 12:localStorage.setItem(i,"starnote");case 13:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();l(s,e)}else{console.log(566,"从数据库取");var c=this;this.getAllChapters(a).then((function(t){t.forEach((function(t){t.parent_permlink===e&&c.chapters.push(t)}))}))}},addChapter:function(){this.addFlag=!0},postChapter:function(t,e,r){this.addFlag=!1;var n=this.$store.state.password,a=this.$store.state.username,s=this.getstr(),o=this.subtitle,i=this.subtext,l=["starnote","cn"],c={tags:l,dapp:"starnote",format:"markdown"},u={parent_author:t,parent_permlink:e,title:o,author:a,permlink:s,body:i,created:(new Date).toISOString().split(".")[0],json_metadata:JSON.stringify(c)};this.chapters.push(u);var d=this.$store.state.db,p=this.$store.state.username+"chapter",m=d.transaction([p],"readwrite");m.oncomplete=function(t){console.log("233，事务操作完成")},m.onerror=function(t){console.log("事务操作出错"),console.dir(t)},m.onsuccess=function(t){console.log("事务操作成功")};var f=m.objectStore(p);f.add(u),this.postToSteem(n,t,e,a,s,o,i,c),this.subtitle=this.text=""},clear:function(){this.addFlag=!1,this.editFlag=!1,this.text=""},uploadimg:function(t,e){this.imgAdd(t,e)}},filters:{formatTime:function(t){return t.substring(0,10)}},components:{Loading:D,Replylist:B},mounted:function(){var t=this,e=this.$store.state.username;function r(){return n.apply(this,arguments)}function n(){return n=Object(W["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,i,l,c,u,d,p,m,f,h,g,v,b,_;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e){r.next=50;break}if(0!=t.$store.state.posts){r.next=48;break}return r.next=4,t.initDatabase();case 4:return n=r.sent,t.$store.commit("saveDB",n),r.next=8,t.getAllPosts(n);case 8:if(a=r.sent,!(a.length>0)){r.next=35;break}for(t.$store.commit("savePosts",a.reverse()),s=0;s<a.length;s++)t.flag[s]=!1;for(o=0;o<a.length;o++)t.editFlag[o]=!1;return i=a[0].created,l=[],a.forEach((function(t){l.push(t.permlink)})),r.next=18,t.getPostsFromSteem(e,null,20,[],i);case 18:if(c=r.sent,u=t.filterPosts(c),!(u.length>0)){r.next=33;break}if(d=[],u.forEach((function(t){-1===l.indexOf(t.permlink)&&d.push(t)})),!(d.length>0)){r.next=33;break}return r.next=26,t.savePosts(n,d);case 26:return console.log(544,"添加新主题成功！"),r.next=29,t.getAllPosts(n);case 29:for(p=r.sent,t.$store.commit("savePosts",p.reverse()),m=0;m<p.length;m++)t.flag[m]=!1;for(f=0;f<p.length;f++)t.editFlag[f]=!1;case 33:r.next=48;break;case 35:return console.log(1289,"从steem上获取所有课程并存入vuex"),h="2019-12-11T06:40:27",r.next=39,t.getPostsFromSteem(e,null,20,[],h);case 39:if(g=r.sent,v=t.filterPosts(g),!(v.length>0)){r.next=48;break}return t.$store.commit("savePosts",v),r.next=45,t.savePosts(n,v);case 45:for(console.log(514,"添加新主题成功！"),b=0;b<v.length;b++)t.flag[b]=!1;for(_=0;_<v.length;_++)t.editFlag[_]=!1;case 48:r.next=51;break;case 50:t.$router.push({path:"/login"});case 51:case"end":return r.stop()}}),r)}))),n.apply(this,arguments)}r()}},st=at,ot=(r("2009"),Object(u["a"])(st,et,rt,!1,null,"06a389c8",null)),it=ot.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("h2",[t._v("用户登录")]),r("div",[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 user",attrs:{id:"inline-form-input-name",placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 user",attrs:{id:"inline-form-input-password",type:"password",placeholder:"请输入发贴密钥（posting key）或 密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("div",{staticClass:"loginbtn"},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.login}},[t._v("登录")])],1),r("transition",{attrs:{name:"fade"}},[t.isLoading?r("loading"):t._e()],1)],1)])},ct=[],ut={name:"Login",data:function(){return{username:"",password:"",isLoading:!1}},methods:{login:function(){var t=this;this.isLoading=!0;var e=this.username;this.steem.api.getAccounts([e],(function(r,n){if(0===n.length)t.isLoading=!1,alert("用户不存在！");else{var a,s=n[0].posting.key_auths[0][0],o=t.password,i=t.steem.auth.isWif(o);if(!0===i){console.log(456,i,"是私钥！");try{a=t.steem.auth.wifIsValid(o,s)}catch(u){a="false"}!0===a?(t.isLoading=!1,console.log(" Welcome.",e),t.$store.commit("saveUser",{username:e,password:o}),t.$router.push({path:"/"})):(t.isLoading=!1,alert("错误！请检查用户名和发贴密钥！"))}else{console.log(458,i,"是密码");var l=["posting"],c=t.steem.auth.toWif(e,o,l);try{a=t.steem.auth.wifIsValid(c,s)}catch(u){a="false"}!0===a?(t.isLoading=!1,console.log(" Welcome.",e),t.$store.commit("saveUser",{username:e,password:c}),t.$router.push({path:"/"})):(t.isLoading=!1,alert("错误！请检查用户名和密码！"))}}}))}},components:{Loading:D}},dt=ut,pt=(r("0a24"),Object(u["a"])(dt,lt,ct,!1,null,"2d6aeb23",null)),mt=pt.exports,ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"maintop"}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 title",attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("div",{attrs:{id:"main"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"请输入摘要",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),r("br"),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"tags  (输入英文标签，以空格分隔)"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}}),r("div",{staticClass:"btn"},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.post}},[t._v("提交")])],1)],1)},ht=[],gt=(r("498a"),{name:"Post",data:function(){return{db:{},title:"",text:"",tags:""}},methods:{post:function(){var t=this.$store.state.password,e="",r="starnote",n=this.$store.state.username,a=this.getstr(),s=this.title,o=this.text,i="starnote "+this.tags,l=i.trim().split(/\s+/),c="\n -> 前往[星空笔记](https://starnote.github.io/starnote/@"+n+"/"+a+")",u=o+c,d={tags:l,dapp:"starnote",format:"markdown",text:o};this.postToSteem(t,e,r,n,a,s,u,d);var p={title:s,author:n,permlink:a,parent_author:"",parent_permlink:"starnote",category:"starnote",body:u,created:(new Date).toISOString().split(".")[0],json_metadata:JSON.stringify(d)},m=this,f=this.$store.state.db,h=this.$store.state.username+"title";function g(){return v.apply(this,arguments)}function v(){return v=Object(W["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.saveOneToDb(p,f,h);case 2:return t.next=4,m.getAllPosts(f);case 4:e=t.sent,m.$store.commit("savePosts",e.reverse()),m.$router.push({path:"/manage"});case 7:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}g()}},mounted:function(){var t=this;function e(){return r.apply(this,arguments)}function r(){return r=Object(W["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$store.state.username){e.next=12;break}if(0!=t.$store.state.posts){e.next=10;break}return e.next=4,t.initDatabase();case 4:return r=e.sent,t.$store.commit("saveDB",r),e.next=8,t.getAllPosts(r);case 8:n=e.sent,t.$store.commit("savePosts",n.reverse());case 10:e.next=13;break;case 12:t.$router.push({path:"/login"});case 13:case"end":return e.stop()}}),e)}))),r.apply(this,arguments)}e()}}),vt=gt,bt=(r("f79a"),Object(u["a"])(vt,ft,ht,!1,null,"69906b88",null)),_t=bt.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"content"}},[r("h1",[t._v("关于星空笔记")]),r("img",{attrs:{src:"https://www.steemjiang.com:8081/ipfs/Qmf1KNVAxc3oEmYTWnu2NrCKCkhs6xVkCbuRsd2F8Asmbq",alt:"星空笔记"}}),r("br"),r("br"),t._v(" 星空笔记，基于Steem和IPFS的区块链笔记，@lemooljiang创建。数据存储在Steem区块链上，图片存在IPFS网络中，前端则使用IndexedDB数据库，几者相结合，有着神奇的效果！"),r("br"),r("br"),t._v(" 星空笔记是一个去中心的应用！ 它和比特币的离线钱包类似，可以很方便地在本地构建，无需服务器。"),r("br"),r("br"),t._v(" 当然，为了方便大家使用，我把它上传到github page中，大家可以直接访问：https://starnote.github.io"),r("br"),r("br"),r("h4",[t._v("本地构建说明")]),t._v(" 本地环境：Apache 或 Nginx"),r("br"),t._v(" 仓库地址： https://github.com/starnote/starnote.github.io"),r("br"),t._v(" 将仓库中的“index.html” 和 “static” 下载到本地，放进Apache 或 Nginx的根目录即可，http://localhost"),r("br"),r("br")])}],xt={name:"About",data:function(){return{}},mounted:function(){}},yt=xt,$t=(r("f4c6"),Object(u["a"])(yt,kt,wt,!1,null,"1687e63e",null)),St=$t.exports,jt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"content"}},[r("h1",[t._v("新手生存指南")]),t._m(0),r("div",{staticClass:"newtext"},[r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/3f5j36-steem",target:"_blank"}},[t._v("1、steem介绍")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/4xxuhj",target:"_blank"}},[t._v("2、翻墙注册（更新版）")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/4kkmhd",target:"_blank"}},[t._v("3、发贴赚钱")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/4mddsq",target:"_blank"}},[t._v("4、图文编辑三板斧（更新版）")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/3xqvw9",target:"_blank"}},[t._v("5、工具红宝书")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/supload",target:"_blank"}},[t._v("6、新图床supload，顺便赚点比特币")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/p",target:"_blank"}},[t._v("7、P图神技")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/3xem6o",target:"_blank"}},[t._v("8、快速查询及归类")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/3s29oy",target:"_blank"}},[t._v("9、勤于打扫，与垃圾号绝交")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/6hgzux",target:"_blank"}},[t._v("10、一分钟注册新帐户（需要付费）")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/markdown-steemit",target:"_blank"}},[t._v("11、Markdown语法规范")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/4rxtdx",target:"_blank"}},[t._v("12、好玩的表情包和字体图标")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/km1n4",target:"_blank"}},[t._v("13、极速提现")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/6jrje-steemit",target:"_blank"}},[t._v("14、steemit上的长跑")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/2dfqrq",target:"_blank"}},[t._v("15、密码即一切")]),r("br"),r("router-link",{attrs:{to:"/searcharticle/@lemooljiang/steem-dapp",target:"_blank"}},[t._v("16、基于steem的应用DAPP")]),r("br")],1)])},Ct=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticStyle:{"margin-left":"15%"}},[r("img",{attrs:{src:"https://i.loli.net/2019/11/24/bsO5WDuaBonL7Uv.jpg",alt:"steem",id:"newbie"}})])}],Ot={name:"Newbie",data:function(){return{}},mounted:function(){}},Pt=Ot,Ft=(r("f0bc"),Object(u["a"])(Pt,jt,Ct,!1,null,"1345dcd4",null)),Dt=Ft.exports;n["default"].use(y["a"]);var At=[{path:"/",name:"index",component:M},{path:"/starnote/@:author/:permlink",name:"starnote",component:tt},{path:"/manage",name:"manage",component:it},{path:"/post",name:"post",component:_t},{path:"/login",name:"login",component:mt},{path:"/about",name:"about",component:St},{path:"/newbie",name:"newbie",component:Dt}],Et=new y["a"]({mode:"history",base:"/",routes:At}),Nt=Et,Lt=r("2f62"),It=r("9c40"),Bt=r.n(It);n["default"].use(Lt["a"]);var Tt=new Lt["a"].Store({state:{username:Bt.a.get("username"),password:Bt.a.get("password"),created:[],posts:[],db:{}},mutations:{saveUser:function(t,e){t.username=e.username,t.password=e.password,Bt.a.set("username",e.username,"30d"),Bt.a.set("password",e.password,"30d")},saveCreated:function(t,e){t.created=e},savePosts:function(t,e){t.posts=e},saveDB:function(t,e){t.db=e},clearUser:function(t){t.username=null,t.password=null,Bt.a.remove("username"),Bt.a.remove("password")}},actions:{},modules:{}}),Rt=r("6f38"),Jt=(r("d52a"),r("edc99"),r("9584")),Mt=r.n(Jt),qt=(r("9bad"),r("f64c")),Ut=r.n(qt),Wt=r("4fce"),Vt=r.n(Wt),zt=function(){function t(t,e){for(var r="",n=t;n>0;--n)r+=e[Math.floor(Math.random()*e.length)];return r}return t(5,"0123456789abcdefghijklmnopqrstuvwxyz")},Qt=r("a352"),Kt=r("b23d"),Gt=function(){var t,e,r=this.$store.state.username,n=this.$store.state.username+"title",a=this.$store.state.username+"chapter",s=window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB;return s||alert("你的浏览器不支持IndexedDB!\n建议使用brave、 chrome 、opera等浏览器！"),new Promise((function(o){e=s.open(r,1),e.onupgradeneeded=function(e){if(console.log("数据库创建或更新"),t=e.target.result,!t.objectStoreNames.contains(n)){var r=t.createObjectStore(n,{keyPath:"id",autoIncrement:!0});r.createIndex("title","title",{unique:!1})}if(!t.objectStoreNames.contains(a)){var s=t.createObjectStore(a,{keyPath:"id",autoIncrement:!0});s.createIndex("title","title",{unique:!1})}},e.onsuccess=function(e){t=e.target.result,console.log(666,"db版本号",t.version),t.onerror=function(t){alert("Database error:"+t.target.errorCode),console.dir(t.target)},o(t)},e.onerror=function(t){console.log(t,"数据库打开错误")}}))},Yt=function(t){var e=this.$store.state.username+"title",r=t.transaction([e],"readwrite"),n=r.objectStore(e),a=[];return new Promise((function(t){n.openCursor().onsuccess=function(e){var r=e.target.result;r?(a.push(r.value),r.continue()):t(a)},n.openCursor().onerror=function(t){console.dir(t)}}))},Ht=function(t){var e=this.$store.state.username+"chapter",r=t.transaction([e],"readwrite"),n=r.objectStore(e),a=[];return new Promise((function(t){n.openCursor().onsuccess=function(e){var r=e.target.result;r?(a.push(r.value),r.continue()):t(a)},n.openCursor().onerror=function(t){console.dir(t)}}))},Xt=function(t,e,r,n,a,s,o,i){this.steem.broadcast.comment(t,e,r,n,a,s,o,i,(function(t,e){console.log(123456,t,e),t&&alert("错误！未能同步到Steem区块链上！\n具体原因如下：\n"+t)}))},Zt=function(t,e,r){return new Promise((function(n){var a=e.transaction([r],"readwrite");a.oncomplete=function(t){console.log("536, 事务操作完成"),n()},a.onerror=function(t){console.log("事务操作出错"),console.dir(t)},a.onsuccess=function(t){console.log("事务操作成功")};var s=a.objectStore(r);s.add(t)}))},te=function(t,e,r,n,a){var s=this;return new Promise((function(o,i){var l=(new Date).toISOString().split(".")[0];s.steem.api.getDiscussionsByAuthorBeforeDate(t,e,l,r,(function(l,c){var u=[];c.forEach((function(t){t.permlink!==e&&u.push(t)})),n=[].concat(Object(nt["a"])(n),u),c.length>1&&c[c.length-1].created>a?s.getPostsFromSteem(t,c[c.length-1].permlink,r,n,a).then(o).catch(i):o(n)}))}))};n["default"].use(Rt["a"]),n["default"].use(Bt.a),n["default"].use(Mt.a),Ut.a.api.setOptions({url:"https://anyx.io"}),n["default"].prototype.steem=Ut.a;var ee=Vt()({host:"steemjiang.com",port:"9001",protocol:"https"});n["default"].prototype.ipfs=ee;var re="https://steemjiang.com:8081/ipfs/";n["default"].prototype.ipfsAddr=re,n["default"].prototype.getstr=zt,n["default"].prototype.imgAdd=Qt["a"],n["default"].prototype.imgEdit=Kt["a"],n["default"].prototype.initDatabase=Gt,n["default"].prototype.getAllPosts=Yt,n["default"].prototype.getAllChapters=Ht,n["default"].prototype.postToSteem=Xt,n["default"].prototype.saveOneToDb=Zt,n["default"].prototype.getPostsFromSteem=te,n["default"].config.productionTip=!1,new n["default"]({router:Nt,store:Tt,render:function(t){return t(x)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},"729e":function(t,e,r){},"7bb4":function(t,e,r){"use strict";var n=r("729e"),a=r.n(n);a.a},"7f16":function(t,e,r){"use strict";var n=r("e22e"),a=r.n(n);a.a},8:function(t,e){},"853d":function(t,e,r){"use strict";var n=r("87ea"),a=r.n(n);a.a},"85ec":function(t,e,r){},"87ea":function(t,e,r){},"888f":function(t,e,r){},9:function(t,e){},"945e":function(t,e,r){},"950d":function(t,e,r){t.exports=r.p+"img/starnote.26cde6a3.svg"},"9ad0":function(t,e,r){"use strict";var n=r("21cf"),a=r.n(n);a.a},a1c2:function(t,e,r){},a352:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return n}));r("d3b7");var n=function(e,r){var n=this.ipfsAddr,a=this,s=function(e){return new Promise((function(r,n){var s=t.from(e.result);a.ipfs.add(s).then((function(t){r(t[0].hash)})).catch((function(t){console.error(t),n(t)}))}))},o=new FileReader;o.readAsArrayBuffer(r),o.onloadend=function(t){s(o).then((function(t){a.$refs.md[0].$img2Url(e,n+t)}))}}}).call(this,r("b639").Buffer)},a6d4:function(t,e,r){},b23d:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return n}));r("d3b7");var n=function(e,r){var n=this.ipfsAddr,a=this,s=function(e){return new Promise((function(r,n){var s=t.from(e.result);a.ipfs.add(s).then((function(t){r(t[0].hash)})).catch((function(t){console.error(t),n(t)}))}))},o=new FileReader;o.readAsArrayBuffer(r),o.onloadend=function(t){s(o).then((function(t){a.$refs.md.$img2Url(e,n+t)}))}}}).call(this,r("b639").Buffer)},cdd9:function(t,e,r){t.exports=r.p+"img/star.59dd5406.svg"},e22e:function(t,e,r){},f0bc:function(t,e,r){"use strict";var n=r("0cce"),a=r.n(n);a.a},f4c6:function(t,e,r){"use strict";var n=r("a1c2"),a=r.n(n);a.a},f79a:function(t,e,r){"use strict";var n=r("a6d4"),a=r.n(n);a.a}});
//# sourceMappingURL=app.1135c33d.js.map