"use strict";var mySwiper=new Swiper(".swiper-container",{loop:!0,autoplay:{play:1e3},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next"}});function getList(){$.ajax({url:"../lib/01shuju.json",dataType:"json",success:function(i){console.log(i);var t="";i.forEach(function(n){t+="<li> ".concat(n.name," </li>")}),$(".nav-ul").html(t).on({mouseenter:function(){return $(".bta").stop().slideDown()},mouseleave:function(){return $(".bta").stop().slideUp()}}).children("li").on("mouseover",function(){var n=$(this).index(),t=i[n].list,s="";t.forEach(function(n){s+='\n          <li>\n            <img src="'.concat(n.list_src,'">\n            <span class="btas1">').concat(n.list_name,'</span>\n            <span class="bats">').concat(n.list_price,"</span>\n          </li>")}),$(".bta>ul").html(s)}),$(".bta").on({mouseover:function(){$(this).finish().show()},mouseout:function(){$(this).finish().slideUp()}})}})}function getList2(){$.ajax({url:"../lib/02shuju.json",dataType:"json",success:function(i){console.log(i);var t="";i.forEach(function(n){t+='<li><a href="./list.html"><p>'.concat(n.name,'</p>\n        <p class="nav-list-p"><span>').concat(n.name_1,"</span>\n          <span>").concat(n.name_2,"</span><span>").concat(n.name_3,"</span>\n          </p></a></li>")}),$(".nav-list>ul").html(t).on({mouseenter:function(){return $(".lb-list").stop().slideDown()},mouseleave:function(){return $(".lb-list").stop().slideUp()}}).children("li").on("mouseover",function(){var n=$(this).index(),t=i[n].list,s="";t.forEach(function(n){s+='\n              <div class="list1">\n              <img src="'.concat(n.list_src,'" alt="">\n              <span>').concat(n.list_name,"</span>\n            </div>")}),$(".lb-list").html(s)}),$(".lb-list").on({mouseover:function(){$(this).finish().show()},mouseout:function(){$(this).finish().slideUp()}})}})}function getList3(){$.ajax({url:"../lib/03shuju.json",dataType:"json",success:function(n){console.log(n);var t="";n.forEach(function(n){t+='<li><a href="#">\n                <img src="'.concat(n.src,'" alt="">\n                <h6>').concat(n.name,'</h6>\n                <p class="b3x_p1">').concat(n.text,'</p>\n                <p class="b3x_p2">').concat(n.perice,"<span>").concat(n.per_1,"</span></p></a>\n              </li>")}),$(".bds_3x>ul").html(t)}})}function getList4(){$.ajax({url:"../lib/04shuju.json",dataType:"json",success:function(i){console.log(i);var t="";i.forEach(function(n){t+="<li>".concat(n.name,"</li>")}),$(".d4y>ul").html(t).on({mouseenter:function(){return $(".d4d").stop().slideDown()}}).children("li").on("mouseover",function(){var n=$(this).index(),t=i[n].list,s="";t.forEach(function(n){s+='<li><a href="#">\n            <img src="'.concat(n.src,'" alt="">\n            <h6>').concat(n.list_name,'</h6>\n            <p class="b3x_p2">').concat(n.perice,"</p></a>\n          </li>")}),$(".d4d>ul").html(s)})}})}getList(),getList2(),getList3(),getList4();