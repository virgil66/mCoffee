riot.tag2("head-nav",'<div class="coffee-header"> <a href="/" class="coffee-header-icon"></a> <div class="coffee-header-menu" click="{handleHeaderMenu}"></div> </div> <div class="coffee-menu"> <div class="menu-head" click="{handleMenu}"></div> <div class="menu-body"> <ul class="menu-body-items"> <li class="menu-body-item"> <a href="javascript:;" class="shadow-bm">关于品牌</a> <div class="item-child"> <a href="aboutBrand.html#company-introduce">公司简介</a> <a href="aboutBrand.html#brand-introduce">品牌介绍</a> <a href="aboutBrand.html#partner">战略合作伙伴</a> </div> </li> <li class="menu-body-item"> <a href="javascript:;">品牌项目</a> <div class="item-child"> <a href="brandProject.html#coffee-store">咖啡连锁店</a> <a href="brandProject.html#coffee-space">壹+空间</a> <a href="brandProject.html#training-institute">培训学院</a> <a href="brandProject.html#coffee-car">移动咖啡车</a> <a href="brandProject.html#internet-platform">网上支持平台</a> </div> </li> <li class="menu-body-item"> <a href="javascript:;">门店形象</a> <div class="item-child"> <a href="storeImage.html#slide1">旗舰店</a> <a href="storeImage.html#slide2">迷你店</a> <a href="storeImage.html#slide3">标准店</a> </div> </li> <li class="menu-body-item"> <a href="newsInformation.html">新闻资讯</a> </li> <li class="menu-body-item"> <a href="javascript:;">加盟咨询</a> <div class="item-child"> <a href="joinConsult.html#join-process">加盟流程</a> <a href="joinConsult.html#assistance-services">协助服务</a> <a href="joinConsult.html#join-fee">加盟费用</a> </div> </li> <li class="menu-body-item"> <a href="joinUs.html">加入我们</a> </li> <li class="menu-body-item"> <a href="messageConsult.html">留言咨询</a> </li> <li class="menu-body-item"> <a href="http://www.1bpcafe.com/" target="_blank">壹杯加商城</a> </li> </ul> </div> </div>',"","",function(a){this.handleHeaderMenu=function(a){$(".coffee-menu").addClass("menu-fade-in").removeClass("menu-fade-out")}.bind(this),this.handleMenu=function(a){$(".coffee-menu").addClass("menu-fade-out").removeClass("menu-fade-in")}.bind(this),this.on("mount",function(){$(".menu-body-item >a").on("click",function(a){if($(this).parent().find("div").length>0){var e=$(this).hasClass("shadow-bm"),i=$(this).hasClass("shadow-flag");e||$(this).addClass("shadow shadow-flag").parent().siblings("li").find(">a").removeClass("shadow shadow-flag"),i&&$(this).removeClass("shadow shadow-flag"),$(this).siblings("div").slideToggle("fast").parent().siblings("li").find(".item-child").slideUp("fast")}}),$(".item-child >a").on("click",function(a){$(".coffee-menu").addClass("menu-fade-out").removeClass("menu-fade-in")})})});