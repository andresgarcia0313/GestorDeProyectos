var PurpleMine=PurpleMine||{};PurpleMine.HistoryTabs=function(){"use strict";var n,a={en:{all:"All",notes:"Notes",details:"Changes"},ro:{all:"Toate",notes:"Note",details:"Schimbări"},fr:{all:"Tout",notes:"Remarques",details:"Changements"},pl:{all:"Wszystko",notes:"Notatki",details:"Zmiany"},de:{all:"Alles",notes:"Kommentare",details:"Änderungen"},ja:{all:"すべて",notes:"注記",details:"変更"}};var r=function(){var e=$(this),t=e.attr("data-tab");n.$tabs.removeClass("selected"),e.addClass("selected"),n.$history.removeClass("hide-details").removeClass("hide-notes"),"notes"===t?n.$history.addClass("hide-details"):"details"===t&&n.$history.addClass("hide-notes")};return function(){if(n)return n;var e,t,i,s;(n=this).$tabsContainer=null,this.$tabs=null,this.$history=$("#history"),this.lang=document.documentElement.lang,void 0===a[this.lang]&&(this.lang="en"),this._=a[this.lang],0<this.$history.length&&0<$("#history > h3").length&&(e="",s="</a></li>",e+='<div class="tabs"><ul>',e+=(t='<li><a href="javascript:;" class="')+"selected "+(i='history-tab" data-tab="')+'all">'+n._.all+s,e+=t+i+'notes">'+n._.notes+s,e+=t+i+'details">'+n._.details+s,e+="</ul></div>",n.$tabsContainer=$(e),$("#history > h3").after(n.$tabsContainer),n.$tabs=n.$tabsContainer.find(".history-tab"),n.$tabs.on("click",r),n.$history.find(".has-notes:first").addClass("first-of-notes"),n.$history.find(".has-details:first").addClass("first-of-details"))}}(),(PurpleMine=PurpleMine||{}).MenuCollapse=function(){"use strict";var s,t={en:{topMenuToggler:"Expand/collapse top menu"},ro:{topMenuToggler:"Deschide/închide meniul de sus"},fr:{topMenuToggler:"Développer/réduire le menu principal"},pl:{topMenuToggler:"Zwiń/rozwiń górne menu"},de:{topMenuToggler:"Ein-/Ausklappen Hauptmenu"},ja:{topMenuToggler:"トップメニューの展開/折りたたみ"}};function e(){if(s)return s;for(var e in(s=this).lang=document.documentElement.lang,void 0===t[this.lang]&&(this.lang="en"),this._=t[this.lang],this.menus={top:{$el:$("#top-menu")}},this.menus)this.menus.hasOwnProperty(e)&&0<this.menus[e].$el.length&&function(e){if("none"===s.menus[e].$el.css("maxHeight"))return;s.menus[e].collapsed=!0,window.localStorage&&(s.menus[e].collapsed=null===localStorage.getItem(i(e)));(function(e){var t=e+"-menu-toggler",i=s._[e+"MenuToggler"],i='<a href="javascript:;" class="'+t+'" title="'+i+'"></a>';s.menus[e].$toggler=$(i),s.menus[e].$el.prepend(s.menus[e].$toggler),s.menus[e].$toggler.on("click",{menu:e},s.toggleMenu)})(e),!1===s.isCollapsed(e)&&s.expandMenu(e)}(e)}function i(e){return"PurpleMine:"+e+"MenuExpanded"}return e.prototype.toggleMenu=function(e){e=e.data.menu||"";s.isCollapsed(e)?s.expandMenu(e):s.collapseMenu(e)},e.prototype.isCollapsed=function(e){return this.menus[e].collapsed},e.prototype.expandMenu=function(e){this.menus[e].$el.addClass("expanded"),this.menus[e].$toggler.addClass("expanded"),this.menus[e].collapsed=!1,window.localStorage&&localStorage.setItem(i(e),"x")},e.prototype.collapseMenu=function(e){this.menus[e].$el.removeClass("expanded"),this.menus[e].$toggler.removeClass("expanded"),this.menus[e].collapsed=!0,window.localStorage&&localStorage.removeItem(i(e))},e}(),(PurpleMine=PurpleMine||{}).RevisionGraph=function(e,t,i){"use strict";var s=t,t=$.map(s,function(e){return e}),n=t.length-1,a=$("table.changesets tr.changeset");null!==revisionGraph?revisionGraph.clear():revisionGraph=new Raphael(e);var r=revisionGraph.set(),o=a.first().find("td").first().position().left-$(e).position().left,l=$(e).position().top,e=o+20*(i+1),d=a.last().position().top+a.last().height()-l;revisionGraph.setSize(e,d);var u,p,h,c,g,m,b,f=["#e74c3c","#584492","#019851","#ed820c","#4183c4"];if(i>=f.length){Raphael.getColor.reset();for(var v=0;v<=i;v++)f.push(Raphael.getColor(.9))}$.each(t,function(e,i){i.hasOwnProperty("space")||(i.space=0),h=a.eq(n-i.rdmid).position().top-l+17,p=10+o+20*i.space,revisionGraph.circle(p,h,3.5).attr({fill:f[i.space],stroke:"none"}).toFront(),$.each(i.parent_scmids,function(e,t){u=s[t],(u?(u.hasOwnProperty("space")||(u.space=0),g=a.eq(n-u.rdmid).position().top-l+17,c=10+o+20*u.space,u.space===i.space?revisionGraph.path(["M",p,h,"V",g]):revisionGraph.path(["M",p,h,"C",p,h,p,h+(g-h)/2,p+(c-p)/2,h+(g-h)/2,"C",p+(c-p)/2,h+(g-h)/2,c,g-(g-h)/2,c,g])):revisionGraph.path(["M",p,h,"V",d])).attr({stroke:f[i.space],"stroke-width":1.5}).toBack()}),(b=revisionGraph.circle(p,h,10)).attr({fill:"#000",opacity:0,cursor:"pointer",href:i.href}),null!==i.refs&&0<i.refs.length&&((m=document.createElementNS(revisionGraph.canvas.namespaceURI,"title")).appendChild(document.createTextNode(i.refs)),b.node.appendChild(m)),r.push(b)}),r.toFront()},$(function(){"use strict";window.drawRevisionGraph&&(window.drawRevisionGraph=PurpleMine.RevisionGraph,$(window).resize())}),(PurpleMine=PurpleMine||{}).SidebarToggler=function(){"use strict";var i,e={en:{toggler:"Toggle sidebar"},ro:{toggler:"Deschide/închide bara laterală"},fr:{toggler:"Basculer la barre latérale"},pl:{toggler:"Pokaż/ukryj panel boczny"},ja:{toggler:"サイドバーの切り替え"}};function t(){if(i)return i;(i=this).sidebarVisible=!0,this.sidebarHiding=null,this.$toggler=null,this.$main=$("#main"),this.$sidebar=$("#sidebar"),this.lang=document.documentElement.lang,void 0===e[this.lang]&&(this.lang="en"),this._=e[this.lang],"relative"===this.$main.css("position")&&$(window).on("load",function(){$("#context-menu").appendTo("#wrapper3")}),function(){window.localStorage&&(i.sidebarVisible=null===localStorage.getItem("PurpleMine:sidebarHidden"));0<i.$sidebar.length&&!1===i.$main.hasClass("nosidebar")&&(function(){var e='<a href="javascript:;" class="sidebar-toggler" title="'+i._.toggler+'"></a>';i.$toggler=$(e),i.$main.append(i.$toggler),i.$toggler.on("click",i.toggleSidebar)}(),function(){var t=document.getElementsByTagName("body")[0];window.onkeydown=function(e){t===e.target&&83===e.keyCode&&!1===e.ctrlKey&&!1===e.altKey&&!1===e.shiftKey&&i.toggleSidebar()}}(),!1===i.sidebarVisible&&i.hideSidebar(!0))}()}return t.prototype.toggleSidebar=function(){i.sidebarVisible?i.hideSidebar():i.showSidebar()},t.prototype.hideSidebar=function(e){!0===e?this.$sidebar.addClass("sidebar-hiding sidebar-hidden"):(this.$sidebar.addClass("sidebar-hiding"),this.sidebarHiding=setTimeout(function(){i.$sidebar.addClass("sidebar-hidden")},500)),this.$toggler.addClass("sidebar-hidden"),this.sidebarVisible=!1,window.localStorage&&localStorage.setItem("PurpleMine:sidebarHidden","x")},t.prototype.showSidebar=function(){clearTimeout(this.sidebarHiding),i.$sidebar.removeClass("sidebar-hidden"),setTimeout(function(){i.$sidebar.removeClass("sidebar-hiding")},50),this.$toggler.removeClass("sidebar-hidden"),this.sidebarVisible=!0,window.localStorage&&localStorage.removeItem("PurpleMine:sidebarHidden")},t}(),$(function(){"use strict";new PurpleMine.SidebarToggler,new PurpleMine.HistoryTabs,new PurpleMine.MenuCollapse});
console.log("Bienvenido")
setTimeout(function(){$(".help").hide();}, 0);
//setInterval(function(){$("#footer").hide();}, 100);
setTimeout(function(){$("#footer").hide();}, 100);
