(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{471:function(a,t,e){"use strict";e.r(t);var r=e(4),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"url中的hash号和vue中的路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url中的hash号和vue中的路由"}},[a._v("#")]),a._v(" URL中的hash号和vue中的路由")]),a._v(" "),e("p",[a._v("在使用vue-router时,看到URL中的#,都没有真正的理解过，写一篇博客记录一下。\n首先理解hash要先理解URL和URI之间的区别")]),a._v(" "),e("blockquote",[e("p",[a._v("URI，Uniform Resource Identifier，统一资源标识符"),e("br"),a._v("\nURL，Uniform Resource Location，统一资源定位符")])]),a._v(" "),e("p",[a._v("URI描述了和定义一个资源，URL不仅描述和定义一个资源并且描述了如何获得资源，URL是URI的子集。URL会发送请求并且会重载页面，但是URI不会，URI本质上只是本地网页的资源的切换。")]),a._v(" "),e("h2",{attrs:{id:"fragment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[a._v("#")]),a._v(" fragment")]),a._v(" "),e("p",[a._v("fragment代表#号后面地址，用来标识资源")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1155692-865aa6e8904a0509.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/918/format/webp",alt:"alt"}})]),a._v(" "),e("p",[a._v("这里介绍两个前端特性，一个用来监听#号后面的变化，一个用来设置hash的变化"),e("br"),a._v("\nwindow.location.hash这个属性可读可写。读取时，可以用来判断网页状态是否改变；写入时，则会在不重载网页的前提下，创造一条访问历史记录。\n这是一个HTML 5新增的事件，当#值发生变化时，就会触发这个事件。IE8+、Firefox 3.6+、Chrome 5+、Safari 4.0+支持该事件。")]),a._v(" "),e("p",[a._v("vue-router就是利用这三个的原理，用户点击按钮改变hash后的值，监听hash后面的变化，定位到具体的fragment"),e("br"),a._v(" "),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1155692-625518baf3633b89.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/986/format/webp",alt:"alt"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);