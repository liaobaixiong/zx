"use strict";var flag=!0,sz=[];function getList5(){$.ajax({url:"../lib/05shuju.json",dataType:"json",success:function(n){console.log(n);var a="";(sz=n).forEach(function(n){a+='<li data-id="'.concat(n.id,'">\n                <img src="').concat(n.src_1,'">\n                <p class="lb-p1">').concat(n.name,'</p>\n                <p class="lb-p2">').concat(n.name_,'</p>\n                <p class="lb-p3">\n                <span class="p31">￥').concat(n.per,'</span>\n                <span class="p32">').concat(n.per_1,'</span>\n                <a href="./detail.html">\n                    <span class="qg fs14">现在抢购</span>\n                    </a></p>\n             </li>')}),$(".splb>ul").html(a)}})}getList5();var btn=document.querySelector(".jgpx");btn.onclick=function(){flag=!flag,console.log(flag),sz.sort(function(n,a){return!0===flag?n.per-a.per:a.per-n.per}),console.log(sz);var a="";sz.forEach(function(n){a+='<li data-id="'.concat(n.id,'">\n                <img src="').concat(n.src_1,'">\n                <p class="lb-p1">').concat(n.name,'</p>\n                <p class="lb-p2">').concat(n.name_,'</p>\n                <p class="lb-p3">\n                <span class="p31">￥').concat(n.per,'</span>\n                <span class="p32">').concat(n.per_1,'</span>\n                <a href="./detail.html">\n                    <span class="qg fs14">现在抢购</span>\n                    </a></p>\n             </li>')}),$(".splb>ul").html(a)},$(".splb>ul").on("click","li",function(){for(var n=$(this).data("id"),a={},s=0;s<sz.length;s++)if(sz[s].id===n){a=sz[s];break}localStorage.setItem("goods_info",JSON.stringify(a)),window.location.href="./detail.html"});