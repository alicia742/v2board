(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),r=t("3a4m"),i=t.n(r),l=t("/MKj");class c extends s.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-user"})}],a=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7ad9\u70b9\u914d\u7f6e",type:"item",href:"/admin/config/site",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-users"})}];this.isAdmin()?this.setState({nav:a}):this.setState({nav:e})}renderMenu(e,a,t,n){switch(e){case"heading":return s.a.createElement("li",{className:"nav-main-heading"},a);case"item":return s.a.createElement("li",{className:"nav-main-item"},s.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===t&&"active"),onClick:()=>{i.a.push(t),this.props.dispatch({type:"header/showNav"})}},n&&n,s.a.createElement("span",{className:"nav-main-link-name"},a)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return s.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},s.a.createElement("div",{className:"smini-visible-block"},s.a.createElement("div",{className:"content-header bg-black-10"},s.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},s.a.createElement("span",{className:"text-white-75"},"X"),s.a.createElement("span",{className:"text-white"},"H")))),s.a.createElement("div",{className:"smini-hidden"},s.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},s.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},s.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),s.a.createElement("div",{className:"d-lg-none"},s.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},s.a.createElement("i",{className:"fa fa-times-circle"}))))),s.a.createElement("div",{className:"content-side content-side-full"},s.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var m=Object(l["c"])(e=>{var a=e.header;return{header:a}})(c),o=t("t3Un");class d extends s.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(a){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(o["a"])("/user/logout").then(e=>{i.a.push("/login")})}render(){return s.a.createElement("header",{id:"page-header"},s.a.createElement("div",{className:"content-header"},s.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"none":"block"}},s.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},s.a.createElement("i",{className:"fa fa-fw fa-bars"}))),this.props.search&&s.a.createElement("div",null,s.a.createElement("input",{type:"text",className:"form-control rounded-lg px-4",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)})),s.a.createElement("div",null,this.state.loading?s.a.createElement("div",{className:"spinner-grow text-primary"}):s.a.createElement("div",{className:"dropdown d-inline-block"},s.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},s.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),s.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),s.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},s.a.createElement("div",{className:"p-2"},s.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",s.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))))}}var p=Object(l["c"])(e=>{var a=e.header;return{header:a}})(d);class h extends s.a.Component{render(){return s.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},s.a.createElement("div",{className:"content py-0"},s.a.createElement("div",{className:"row font-size-sm"},s.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},s.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),s.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},s.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.1"),s.a.createElement("span",{"data-toggle":"year-copy"})))))}}class u extends s.a.Component{render(){return s.a.createElement("div",{id:"page-container",className:"sidebar-o sidebar-dark side-scroll page-header-fixed main-content-boxed side-trans-enabled ".concat(this.props.header.showNav&&"sidebar-o-xs")},s.a.createElement(m,this.props),s.a.createElement(p,{search:this.props.search}),this.props.loading?s.a.createElement("main",{id:"main-container"},s.a.createElement("div",{className:"content content-full"},s.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,s.a.createElement(h,null))}}a["a"]=Object(l["c"])(e=>{var a=e.header;return{header:a}})(u)},o5uR:function(e,a,t){"use strict";t.r(a);var n=t("jehZ"),s=t.n(n),r=(t("g9YV"),t("wCAj")),i=(t("qVdP"),t("jsC+")),l=(t("lUTK"),t("BvKs")),c=(t("Pwec"),t("CtXQ")),m=(t("miYZ"),t("tsqr")),o=t("p0pE"),d=t.n(o),p=t("q1tI"),h=t.n(p),u=t("Bl7J"),v=t("/MKj"),E=t("t3Un"),f=t("+QRC"),g=t.n(f),b=t("3a4m"),N=t.n(b),w=t("yWgo"),k=t("wd/R"),y=t.n(k);class x extends h.a.Component{constructor(){super(...arguments),this.state={user:{plan:{}},server:[],loading:!0,show:!1}}componentDidMount(){this.fetchData()}fetchData(){Object(E["a"])("/user/subscribe").then(e=>{200===e.code&&this.setState(d()({},e.data,{loading:!1}))})}getTags(e){if(e)return e=JSON.parse(e),e}resetUUID(){Object(E["a"])("/user/resetUUID").then(e=>{200===e.code&&(m["a"].success("UUID \u91cd\u7f6e\u6210\u529f"),this.fetchData())})}isExpire(){return this.state.user.expired_at<(new Date).getTime()/1e3}render(){var e=[{title:"\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u670d\u52a1\u5668",dataIndex:"host",key:"host",render:e=>{return h.a.createElement("a",{href:"javascript:;",onClick:()=>{g()(e),m["a"].success("\u590d\u5236\u6210\u529f")}},"\u590d\u5236")}},{title:"\u7aef\u53e3",dataIndex:"port",key:"port",render:e=>{return h.a.createElement("a",{href:"javascript:;",onClick:()=>{g()(e),m["a"].success("\u590d\u5236\u6210\u529f")}},"\u590d\u5236")}},{title:"\u500d\u7387",dataIndex:"rate",key:"rate",align:"right",render:e=>{return e+" x"}},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",align:"right",render:(e,a)=>{return h.a.createElement("div",null,h.a.createElement(i["a"],{trigger:["click"],overlay:h.a.createElement(l["a"],null,h.a.createElement(l["a"].Item,{key:"0",onClick:()=>{g()(Object(w["a"])(this.state.user.v2ray_uuid,a.host,a.port,a.name,a.tls)),m["a"].success("\u590d\u5236\u6210\u529f")}},h.a.createElement(c["a"],{type:"link"}),"\u590d\u5236\u94fe\u63a5"))},h.a.createElement("a",{href:"javascript:;"},"\u66f4\u591a\u64cd\u4f5c ",h.a.createElement(c["a"],{type:"caret-down"}))))}}];return h.a.createElement(u["a"],s()({},this.props,{loading:this.state.loading}),h.a.createElement("main",{id:"main-container"},h.a.createElement("div",{className:"content content-full"},h.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u6211\u7684\u8ba2\u9605"),this.state.user.plan_id?h.a.createElement("div",{className:"block block-rounded mb-2 animated fadeIn","data-toggle":"appear"},h.a.createElement("div",{className:"block-content block-content-full"},h.a.createElement("div",{className:"d-md-flex justify-content-md-between align-items-md-center"},h.a.createElement("div",{className:"p-1 p-md-3 w-50"},h.a.createElement("h3",{className:"h4 font-w700 mb-1"},this.state.user.plan.name),h.a.createElement("p",{className:"font-size-sm text-muted"},this.isExpire()?h.a.createElement("a",{className:"font-w600 text-danger",href:"javascript:void(0)"},"\u5df2\u8fc7\u671f"):h.a.createElement("span",null,"\u4e8e ",y()().format("YYYY/MM/DD")," \u5230\u671f\uff0c\u8ddd\u79bb\u5230\u671f\u8fd8\u6709 ",((this.state.user.expired_at-y()().format("X"))/86400).toFixed(0)," \u5929")),h.a.createElement("div",{className:"mb-0"},h.a.createElement("div",{className:"progress mb-1",style:{height:6}},h.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated bg-success",role:"progressbar",style:{width:Object(w["b"])(this.state.user.u+this.state.user.d,this.state.user.transfer_enable)+"%"}})),h.a.createElement("p",{className:"font-size-sm font-w600 mb-3"},h.a.createElement("span",{className:"font-w700"},((this.state.user.u+this.state.user.d)/1073741824).toFixed(2)," GB")," / ",h.a.createElement("span",{className:"font-w700"},(this.state.user.transfer_enable/1073741824).toFixed(2)," GB")))),h.a.createElement("div",{className:"p-1 p-md-3 text-md-right"},h.a.createElement(i["a"],{trigger:["click"],overlay:h.a.createElement(l["a"],null,h.a.createElement(l["a"].Item,{key:"0"},h.a.createElement("a",{onClick:()=>{g()(this.state.user.v2ray_uuid),m["a"].success("\u590d\u5236\u6210\u529f")}},"\u590d\u5236 UUID")),h.a.createElement(l["a"].Item,{key:"1"},h.a.createElement("a",{onClick:()=>this.resetUUID()},"\u91cd\u7f6e UUID")))},h.a.createElement("a",{className:"btn btn-sm btn-outline-warning btn-rounded px-3 mr-1 my-1",href:"javascript:void(0)"},h.a.createElement("i",{className:"fa fa-bullseye mr-1"}),"UUID")),Object(w["c"])()?h.a.createElement(i["a"],{trigger:["click"],overlay:h.a.createElement(l["a"],null,h.a.createElement(l["a"].Item,{key:"0",onClick:()=>window.location.href="quantumult://configuration?server="+window.btoa(this.state.user.subscribe_url).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},h.a.createElement("a",null,"Quantumult")),h.a.createElement(l["a"].Item,{key:"1",onClick:()=>window.location.href="quantumult-x:///update-configuration?remote-resource="+encodeURI(JSON.stringify({server_remote:[this.state.user.subscribe_url+", tag="+window.v2board.title]}))},h.a.createElement("a",null,"QuantumultX")),h.a.createElement(l["a"].Item,{key:"2",onClick:()=>window.location.href="shadowrocket://add/sub://"+window.btoa(this.state.user.subscribe_url).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")+"?remark="+window.v2board.title},h.a.createElement("a",null,"Shadowrocket")))},h.a.createElement("a",{className:"btn btn-sm btn-primary btn-rounded px-3 mr-1 my-1",href:"javascript:void(0)"},h.a.createElement("i",{className:"fa fa-rss mr-1"}),"\u4e00\u952e\u8ba2\u9605")):h.a.createElement("a",{className:"btn btn-sm btn-outline-warning btn-rounded px-3 mr-1 my-1",href:"javascript:void(0)",onClick:()=>{g()(this.state.user.subscribe_url),m["a"].success("\u590d\u5236\u6210\u529f")}},h.a.createElement("i",{className:"fa fa-copy mr-1"}),"\u590d\u5236\u8ba2\u9605\u5730\u5740"),h.a.createElement("a",{className:"btn btn-sm btn-outline-danger btn-rounded px-3 my-1",href:"javascript:void(0)",onClick:()=>N.a.push("/plan/"+this.state.user.plan_id)},h.a.createElement("i",{className:"fa fa-redo mr-1"}),"\u7eed\u8d39"))))):h.a.createElement("a",{className:"block block-rounded mb-2 block-link-pop animated fadeIn",onClick:()=>N.a.push("/plan")},h.a.createElement("div",{className:"block-content block-content-full"},h.a.createElement("div",{className:"text-center align-items-md-center py-5"},h.a.createElement("div",null,h.a.createElement("i",{className:"fa fa-plus fa-2x"})),h.a.createElement("div",{className:"font-size-sm font-w700 text-uppercase text-muted pt-2"},"\u6dfb\u52a0\u8ba2\u9605")))),h.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},h.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u6211\u7684\u8282\u70b9")),this.state.server.length>0||!this.isExpire()?h.a.createElement("div",{className:"bg-white"},h.a.createElement(r["a"],{dataSource:this.state.server,columns:e,pagination:!1,scroll:{x:900}})):h.a.createElement("div",{className:"alert alert-dark",role:"alert"},h.a.createElement("p",{className:"mb-0"},"\u6ca1\u6709\u53ef\u7528\u8282\u70b9\uff0c\u5982\u679c\u60a8\u672a\u8ba2\u9605\u6216\u5df2\u8fc7\u671f\u8bf7 ",this.state.user.plan_id?h.a.createElement("a",{className:"alert-link",href:"javascript:void(0)",onClick:()=>N.a.push("/plan/"+this.state.user.plan_id)},"\u7eed\u8d39"):h.a.createElement("a",{className:"alert-link",href:"javascript:void(0)",onClick:()=>N.a.push("/plan")},"\u8ba2\u9605"),"\u3002")))))}}a["default"]=Object(v["c"])()(x)},yWgo:function(e,a,t){"use strict";function n(e,a,t,n,s){var r="chacha20-poly1305:".concat(e,"@").concat(a,":").concat(t);return"vmess://".concat(window.btoa(r),"?remarks=").concat(encodeURI(n),"&obfs=none").concat(s?"&tls=1":"")}function s(e,a){return e/a*100}function r(){return-1!==window.navigator.userAgent.toLowerCase().indexOf("iphone")}t.d(a,"a",function(){return n}),t.d(a,"b",function(){return s}),t.d(a,"c",function(){return r})}}]);