(function(t){function e(e){for(var i,c,r=e[0],l=e[1],o=e[2],v=0,u=[];v<r.length;v++)c=r[v],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&u.push(a[c][0]),a[c]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(i=!1)}i&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},a={app:0},n=[];function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0972":function(t,e,s){},"21bb":function(t,e,s){"use strict";var i=s("2dad"),a=s.n(i);a.a},"2dad":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],c=s("2877"),r={},l=Object(c["a"])(r,a,n,!1,null,null,null),o=l.exports,d=s("7212"),v=s.n(d),u=(s("a7a3"),s("be35"),s("78a7"),s("d3b7"),s("8c4f")),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.ads.items,(function(t,e){return s("swiper-slide",{key:e},[s("router-link",{attrs:{to:t.url}},[s("img",{staticClass:"w-100 hsi",attrs:{src:t.image,alt:""}})])],1)})),s("div",{staticClass:"swiper-pagination pagination-home text-right pr-3",attrs:{slot:"pagination"},slot:"pagination"})],2),s("div",{staticClass:"nav-icons bg-white mt-2 text-center pt-3 text-grey"},[s("div",{staticClass:"d-flex",class:!0===t.offShrink?"flex-wrap":"",staticStyle:{overflow:"auto"}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)]),s("div",{staticClass:"bg-light py-1 fs-xs",on:{click:function(e){t.offShrink=!t.offShrink}}},[s("i",{staticClass:"sprite",class:!0===t.offShrink?"sprite-arrow":"iconfont icon-xiahua"}),t._v(" 收起 ")])]),s("m-list-card",{attrs:{icon:"news",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var i=e.category;return t._l(i.newsList,(function(e,i){return s("router-link",{key:i,staticClass:"swiper-content py-2 fs-lg d-flex",attrs:{tag:"div",to:"/essays/"+e._id}},[s("span",{staticClass:"text-dark-1 pl-1"},[t._v("["+t._s(e.categoryName)+"]")]),s("span",{staticClass:"px-2"},[t._v("|")]),s("span",{staticClass:"flex-1 text-over text-dark"},[t._v(t._s(e.title))]),s("span",{staticClass:"text-dark pr-2"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),s("m-list-card",{attrs:{icon:"role",title:"角色列表",categories:t.characterCats},scopedSlots:t._u([{key:"items",fn:function(e){var i=e.category;return[s("div",{staticClass:"d-flex flex-wrap"},t._l(i.charactersList,(function(e,i){return s("router-link",{key:i,staticClass:"swiper-content py-2 fs-lg text-center p-2",staticStyle:{width:"33.33%"},attrs:{tag:"div",to:"/characters/"+e._id}},[s("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:""}}),s("div",{staticClass:"text-over w-100"},[t._v(t._s(e.name))])])})),1)]}}])}),s("m-card",{attrs:{icon:"news",title:"公告"}},[s("p",[t._v("此项目用于练习")])])],1)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item mb-3"},[s("i",{staticClass:"iconfont icon-ziliao fs-xl"}),s("div",[t._v("资料站")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item mb-3"},[s("i",{staticClass:"iconfont icon-gonglve fs-xl"}),s("div",[t._v("攻略站")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item mb-3"},[s("i",{staticClass:"iconfont icon-wangzhan fs-xl"}),s("div",[t._v("舔婊网A")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item mb-3"},[s("i",{staticClass:"iconfont icon-wangzhan fs-xl"}),s("div",[t._v("舔婊网B")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item mb-3"},[s("i",{staticClass:"iconfont icon-wangzhan fs-xl"}),s("div",[t._v("舔婊网C")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item mb-3"},[s("i",{staticClass:"iconfont icon-jisuanqi fs-xl"}),s("div",[t._v("刷箱计算器")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item mb-3"},[s("i",{staticClass:"iconfont icon-egg fs-xl"}),s("div",[t._v("扭蛋系统")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item"},[s("i",{staticClass:"iconfont icon-bizhiputie fs-xl"}),s("div",[t._v("壁纸鉴赏")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item mb-3"},[s("i",{staticClass:"iconfont icon-jiaoliu fs-xl"}),s("div",[t._v("NGA")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-item mb-3"},[s("i",{staticClass:"iconfont icon-jieshao fs-xl"}),s("div",[t._v("基本介绍")])])}],m=(s("96cf"),s("1da1")),_=s("5a0c"),C=s.n(_),b={filters:{date:function(t){return C()(t).format("MM/DD")}},name:"Home",data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination",clickable:!0},autoplay:!0},offShrink:!0,newsCats:[],characterCats:[],ads:{}}},methods:{fetchNesList:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:s=e.sent,t.newsCats=s.data;case 4:case"end":return e.stop()}}),e)})))()},fetchCharacterList:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("characters/list");case 2:s=e.sent,t.characterCats=s.data;case 4:case"end":return e.stop()}}),e)})))()},fetchHomeAd:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("ads/home");case 2:s=e.sent,console.log(s),t.ads=s.data;case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchHomeAd(),this.fetchNesList(),this.fetchCharacterList()},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){console.log("Current Swiper instance object",this.swiper)}},h=b,g=(s("21bb"),Object(c["a"])(h,f,p,!1,null,null,null)),x=g.exports,w=s("cd56"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-essay"},[s("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[s("div",{staticClass:"iconfont icon-Active ",on:{click:function(e){return t.$router.push("/")}}}),s("strong",{staticClass:"flex-1"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey fs-xs"},[t._v("2019-06-14")])]),s("div",{staticClass:"page-essay p-3",domProps:{innerHTML:t._s(t.model.body)}}),s("div",{staticClass:"px-3 border-top py-3"},[t._m(0),s("div",{staticClass:"pt-2 fs-lg"},t._l(t.model.related,(function(e){return s("router-link",{key:e._id,staticClass:"py-2",attrs:{tag:"div",to:"/essays/"+e._id}},[t._v(t._s(e.title))])})),1)])]):t._e()},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex ai-center"},[s("i",{staticClass:"iconfont icon-gonglve pr-2"}),s("strong",{staticClass:"text-use-play fs-lg"},[t._v("相关资讯")])])}],j={props:{id:{required:!0}},data:function(){return{model:null}},methods:{fetchEssayModel:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("essays/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchEssayModel()},watch:{id:"fetchEssayModel"}},S=j,$=(s("8945"),Object(c["a"])(S,y,k,!1,null,null,null)),E=$.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.model?i("div",{staticClass:"page-character"},[i("div",{staticClass:"topbar bg-grey-1 py-2 px-4 d-flex ai-center"},[i("img",{attrs:{src:s("eb08"),alt:"",height:"30px"}}),t._m(0),i("router-link",{attrs:{tag:"div",to:"/"}},[t._v("其他角色 >")])],1),i("div",{staticClass:"top",style:{"background-image":"url("+t.model.drawing+")"}},[i("div",{staticClass:"info text-white p-3 d-flex flex-column jc-end h-100"},[i("div",[t._v(t._s(t.model.title))]),i("h2",{staticClass:"fs-sm"},[t._v(t._s(t.model.name))]),i("div",[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),i("div",[i("div",[t.model.attribute?i("span",{staticClass:"mr-3"},[t._v("属性: "+t._s(t.model.attribute.name))]):t._e(),t.model.race?i("span",[t._v("种族: "+t._s(t.model.race.name))]):t._e()])]),i("div",{staticClass:"d-flex jc-between"},[t.model.hpandattack?i("div",[t._v(" HP "),i("span",{staticClass:"hp mr-1 box-sum1"},[t._v(t._s(t.model.hpandattack.hp))]),t._v(" 攻击力 "),i("span",{staticClass:"attack box-sum2"},[t._v(t._s(t.model.hpandattack.attack))])]):t._e(),i("router-link",{staticClass:"text-grey",attrs:{to:"/",tag:"span"}},[t._v("更多详情 >")])],1)])]),t.model.otherinfo?i("div",{staticClass:"padding-center bg-center-color"},[i("div",{staticClass:"gbf-infobox",class:t.addClassStyle(t.model.attribute.name)},[t._m(1),i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("日文名")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.japanName))])]),i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("英文名")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.enName))])]),i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("常用昵称")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.commentName))])]),i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("露莉亚笔记")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.notepad))])])]),i("div",{staticClass:"gbf-infobox mt-2",class:t.addClassStyle(t.model.attribute.name)},[i("div",{staticClass:"gbf-infobox-section infobox-title"},[i("div",{staticClass:"name"},[t._v(t._s(t.model.name)+"角色档案")])]),i("div",{staticClass:"gbf-infobox-section ec-2 ec-2-col-2"},[i("div",{staticClass:"title"},[t._v("年龄")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.age))])]),i("div",{staticClass:"gbf-infobox-section ec-2 ec-2-col-2"},[i("div",{staticClass:"title"},[t._v("身高")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.height))])]),i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("声优")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.cv))])]),i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("兴趣")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.notepad))])]),i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("喜好")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.interest))])]),i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("不擅长")]),i("div",{staticClass:"content"},[t._v(t._s(t.model.otherinfo.nogoodat))])])])]):t._e(),i("div",{staticClass:"bg-center-color"},[i("div",{staticClass:"p-2"},[i("div",{staticClass:"nav d-flex jc-around pt-3 pb-2 border-bottom bg-grey"},t._l(t.navItem,(function(e,s){return i("div",{key:s,staticClass:"nav-item",class:{active:t.active===s},on:{click:function(e){return t.swiper.slideTo(s)}}},[i("div",{staticClass:"nav-link"},[t._v(t._s(e))])])})),0)]),i("swiper",{ref:"navItem",attrs:{options:{autoHeight:!0}},on:{slideChange:function(){return t.active=t.swiper.activeIndex}}},[i("swiper-slide",[i("div",{staticClass:"border-bottom pb-3"},[i("div",{staticClass:"p-3 bg-white d-flex"},[i("router-link",{staticClass:"flex-1 btn btn-lg",attrs:{tag:"button",to:"/"}},[i("i",{staticClass:"iconfont icon-jieshao"}),t._v(" 角色介绍视频 ")]),i("router-link",{staticClass:"flex-1 ml-2 btn btn-lg",attrs:{tag:"button",to:"/"}},[i("i",{staticClass:"iconfont icon-jieshao"}),t._v(" 一图识角色 ")])],1),i("div",{staticClass:"skills bg-white"},[i("div",{staticClass:"d-flex jc-around p-3"},t._l(t.model.skills,(function(e,s){return i("img",{key:e.name,staticClass:"icon",class:{active:t.currentSkillIndex===s},attrs:{src:e.icon,alt:"",width:"60",height:"60"},on:{click:function(e){t.currentSkillIndex=s}}})})),0),t.currentSkill?i("div",{staticClass:"px-3 pb-3"},[i("div",{staticClass:"d-flex pt-4"},[i("h3",[t._v(t._s(t.currentSkill.name))]),i("span",[t._v(" ( "),i("i",{staticClass:"skill-i-1"},[t._v("初期")]),t._v(" "+t._s(t.currentSkill.time)+" "),i("i",{staticClass:"skill-i-2"},[t._v("上限")]),t._v(" "+t._s(t.currentSkill.time2)+" ) ")])]),i("p",[t._v(" "+t._s(t.currentSkill.passive)+": "+t._s(t.currentSkill.description)+" ")])]):t._e()])])]),i("swiper-slide",[i("div",[i("m-card",{attrs:{icon:"role",title:"上限突破1",plain:""}},[i("div",{staticClass:"gbf-infobox",class:t.addClassStyle(t.model.attribute.name)},[i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("上限突破1材料")]),i("div",{staticClass:"content"},t._l(t.model.items1,(function(e,s){return i("div",{key:s},[i("div",{staticClass:"d-flex jc-between"},[i("div",{staticClass:"d-flex ai-center p-1"},[i("img",{staticClass:"mr-2",attrs:{src:e.article.icon,alt:""}}),i("span",[t._v(t._s(e.article.name))])]),i("div",{staticClass:"d-flex ai-center p-1"},[t._v("x "+t._s(e.num))])])])})),0)])])]),i("m-card",{attrs:{icon:"role",title:"上限突破2",plain:""}},[i("div",{staticClass:"gbf-infobox",class:t.addClassStyle(t.model.attribute.name)},[i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("上限突破2材料")]),i("div",{staticClass:"content"},t._l(t.model.items2,(function(e,s){return i("div",{key:s},[i("div",{staticClass:"d-flex jc-between"},[i("div",{staticClass:"d-flex ai-center p-1"},[i("img",{staticClass:"mr-2",attrs:{src:e.article.icon,alt:""}}),i("span",[t._v(t._s(e.article.name))])]),i("div",{staticClass:"d-flex ai-center p-1"},[t._v("x "+t._s(e.num))])])])})),0)])])]),i("m-card",{attrs:{icon:"role",title:"上限突破3",plain:""}},[i("div",{staticClass:"gbf-infobox",class:t.addClassStyle(t.model.attribute.name)},[i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("上限突破3材料")]),i("div",{staticClass:"content"},t._l(t.model.items3,(function(e,s){return i("div",{key:s},[i("div",{staticClass:"d-flex jc-between"},[i("div",{staticClass:"d-flex ai-center p-1"},[i("img",{staticClass:"mr-2",attrs:{src:e.article.icon,alt:""}}),i("span",[t._v(t._s(e.article.name))])]),i("div",{staticClass:"d-flex ai-center p-1"},[t._v("x "+t._s(e.num))])])])})),0)])])]),i("m-card",{attrs:{icon:"role",title:"上限突破4",plain:""}},[t.model.items4.length>0?i("div",{staticClass:"gbf-infobox",class:t.addClassStyle(t.model.attribute.name)},[i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("上限突破4材料")]),i("div",{staticClass:"content"},t._l(t.model.items4,(function(e,s){return i("div",{key:s},[i("div",{staticClass:"d-flex jc-between"},[i("div",{staticClass:"d-flex ai-center p-1"},[i("img",{staticClass:"mr-2",attrs:{src:e.article.icon,alt:""}}),i("span",[t._v(t._s(e.article.name))])]),i("div",{staticClass:"d-flex ai-center p-1"},[t._v("x "+t._s(e.num))])])])})),0)])]):i("div",[t._v(" 无 ")])]),i("m-card",{attrs:{icon:"role",title:"上限突破4",plain:""}},[t.model.items5.length>0?i("div",{staticClass:"gbf-infobox",class:t.addClassStyle(t.model.attribute.name)},[i("div",{staticClass:"gbf-infobox-section ec-2"},[i("div",{staticClass:"title"},[t._v("上限突破5材料")]),i("div",{staticClass:"content"},t._l(t.model.items5,(function(e,s){return i("div",{key:s},[i("div",{staticClass:"d-flex jc-between"},[i("div",{staticClass:"d-flex ai-center p-1"},[i("img",{staticClass:"mr-2",attrs:{src:e.article.icon,alt:""}}),i("span",[t._v(t._s(e.article.name))])]),i("div",{staticClass:"d-flex ai-center p-1"},[t._v("x "+t._s(e.num))])])])})),0)])]):i("div",[t._v("无")])])],1)])],1)],1)]):t._e()},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("span",{staticClass:"text-black mr-2"},[t._v("碧蓝幻想")]),s("span",{staticClass:"text-drak fs-xxs"},[t._v("资料站")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gbf-infobox-section infobox-title"},[s("div",{staticClass:"name"},[t._v("基本信息")])])}],R={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0,active:0,navItem:["角色技能","上限突破材料"]}},methods:{fetch:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("characters/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()},addClassStyle:function(t){switch(t){case"火":return"fire";case"水":return"water";case"土":return"earth";case"风":return"wind";case"光":return"light";case"暗":return"dark"}}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]},swiper:function(){return this.$refs.navItem.$swiper}},created:function(){this.fetch()}},A=R,I=(s("6248"),Object(c["a"])(A,O,P,!1,null,"62433473",null)),L=I.exports;i["default"].use(u["a"]);var M=[{path:"/",component:w["default"],children:[{path:"/",name:"Home",component:x},{path:"/essays/:id",name:"Essay",component:E,props:!0}]},{path:"/characters/:id",name:"Character",component:L,props:!0},{path:"/about",name:"About",component:function(){return Promise.resolve().then(s.bind(null,"cd56"))}}],N=new u["a"]({routes:M}),q=N,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card bg-white mt-3 p-3 "},[s("div",{staticClass:"d-flex ai-center pb-3",class:{"card-header":!t.plain}},[s("i",{staticClass:"fs-xs iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 px-2"},[t._v(t._s(t.title))]),t.plain?t._e():s("i",{staticClass:"iconfont icon-menu"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])])},T=[],z={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},U=z,B=(s("e60d"),Object(c["a"])(U,H,T,!1,null,null,null)),D=B.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("m-card",{attrs:{icon:t.icon,title:t.title}},[s("div",{staticClass:"nav-card jc-between"},t._l(t.categories,(function(e,i){return s("div",{key:i,staticClass:"nav-card-item ",class:{active:t.active===i},on:{click:function(e){return t.swiper.slideTo(i)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("swiper",{ref:"list",attrs:{options:t.swiperOptions},on:{slideChange:function(){return t.active=t.swiper.activeIndex}}},t._l(t.categories,(function(e,i){return s("swiper-slide",{key:i},[t._t("items",null,{category:e})],2)})),1)],1)],1)},V=[],G={props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0,swiperOptions:{autoHeight:!0,observer:!0,observeParents:!0}}},computed:{swiper:function(){return this.$refs.list.$swiper}}},F=G,K=Object(c["a"])(F,J,V,!1,null,"1eead4fa",null),Q=K.exports,W=s("bc3a"),X=s.n(W);i["default"].use(v.a),i["default"].component("m-card",D),i["default"].component("m-list-card",Q),i["default"].config.productionTip=!1,i["default"].prototype.$http=X.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),new i["default"]({router:q,render:function(t){return t(o)}}).$mount("#app")},"60ed":function(t,e,s){},6248:function(t,e,s){"use strict";var i=s("60ed"),a=s.n(i);a.a},"78a7":function(t,e,s){},8945:function(t,e,s){"use strict";var i=s("9de4"),a=s.n(i);a.a},"9de4":function(t,e,s){},a006:function(t,e,s){"use strict";var i=s("0972"),a=s.n(i);a.a},be35:function(t,e,s){},cd56:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bg-primary py-3"},[s("div",{staticClass:"nav d-flex jc-around"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("攻略")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("新闻")])],1)])]),s("router-view")],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topbar bg-grey-1 py-2 px-4 d-flex ai-center"},[i("img",{attrs:{src:s("eb08"),alt:"",height:"30px"}}),i("div",{staticClass:"px-2 flex-1"},[i("div",{staticClass:"text-black"},[t._v("碧蓝幻想")]),i("div",{staticClass:"text-drak fs-xxs"},[t._v("一起上格兰法斯")])]),i("button",{staticClass:"btn bg-use-play  px-3 py-2"},[i("a",{staticClass:"text-white",attrs:{href:"http://game.granbluefantasy.jp/#top"}},[t._v("点击游玩")])])])}],n={},c=n,r=(s("a006"),s("2877")),l=Object(r["a"])(c,i,a,!1,null,null,null);e["default"]=l.exports},e60d:function(t,e,s){"use strict";var i=s("e9ec"),a=s.n(i);a.a},e9ec:function(t,e,s){},eb08:function(t,e,s){t.exports=s.p+"img/site_avatar_gbf_l.ddcce406.png"}});
//# sourceMappingURL=app.41294eac.js.map