(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{"aria-label":"Menu",dense:"",flat:"",icon:"menu",round:""},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[n("div",[e._v("\n          Tinkers Construct\n        ")]),n("div",{staticStyle:{color:"red"},attrs:{"v-if":e.dev}},[e._v("Quasar is in development mode")])]),e.dev?n("div",{staticStyle:{color:"red"}},[e._v("Quasar v"+e._s(e.$q.version))]):e._e()],1)],1),n("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-1","show-if-above":""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"$low_dark",attrs:{header:""}},[e._v("\n        Library\n      ")]),e._l(e.libraryLinks,(function(t){return n("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))})),n("q-separator",{attrs:{name:"firstSep"}}),n("q-item-label",{staticClass:"$low_dark",attrs:{header:""}},[e._v("\n        Items\n      ")]),e._l(e.functionalLinks,(function(t){return n("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))})),n("q-separator",{attrs:{name:"secSep"}}),n("q-item-label",{staticClass:"$low_dark",attrs:{header:""}},[e._v("\n        Others\n      ")]),e._l(e.otherLinks,(function(t){return n("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),n("q-page-container",[n("router-view")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{attrs:{clickable:"",tag:"a",target:"",href:"/#"+e.link}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{style:e.icon.image_rendering,attrs:{name:e.icon.name,color:e.icon.color}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))]),n("q-item-label",{style:{color:e.icon.color},attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},o=[],s={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:""},icon:{type:Object,default:function(){return{image_rendering:"auto",name:"",color:"$icons"}}}}},l=s,c=n("2877"),m=n("66e5"),d=n("4074"),p=n("0016"),u=n("0170"),k=n("eebe"),b=n.n(k),f=Object(c["a"])(l,r,o,!1,null,null,null),v=f.exports;b()(f,"components",{QItem:m["a"],QItemSection:d["a"],QIcon:p["a"],QItemLabel:u["a"]});const _=[{title:"Settings",caption:"",icon:{name:"settings"},link:"/settings"},{title:"About",caption:"",icon:{name:"mdi-information"},link:"/about"},{title:"Send feedback",caption:"",icon:{name:"feedback"},link:"/feedback"}],g=[{title:"Search Items",caption:"",icon:{name:"search"},link:"/search"},{title:"Item Composer",caption:"",icon:{name:"img:icons/anvil.svg"},link:"/compose"}],q=[{title:"Available Items",caption:"",icon:{name:"mdi-pickaxe"},link:"/items"},{title:"Item Traits",caption:"",icon:{name:"mdi-plus-thick"},link:"/traits"},{title:"Item Modifiers",caption:"",icon:{name:"img:icons/redstone_dust.png"},link:"/modifiers"},{title:"Materials",caption:"",icon:{name:"img:icons/ingot.svg"},link:"/materials"}];var L={name:"MainLayout",components:{EssentialLink:v},data(){return{leftDrawerOpen:!1,libraryLinks:q,functionalLinks:g,otherLinks:_,dev:this.$store.getters["commons/isDevMode"]}},created(){this.dev&&_.push({title:"testing",caption:"",icon:{name:"test"},link:"/test"})}},h=L,w=n("4d5a"),y=n("e359"),Q=n("65c6"),S=n("9c40"),I=n("6ac5"),E=n("9404"),O=n("1c1c"),D=n("eb85"),$=n("09e3"),C=Object(c["a"])(h,a,i,!1,null,null,null);t["default"]=C.exports;b()(C,"components",{QLayout:w["a"],QHeader:y["a"],QToolbar:Q["a"],QBtn:S["a"],QToolbarTitle:I["a"],QDrawer:E["a"],QList:O["a"],QItemLabel:u["a"],QSeparator:D["a"],QPageContainer:$["a"]})}}]);