riot.tag2("top-msg",'<div class="top-msg"> <div class="top-msg-common msg" click="{handleMessage}"> <span></span> </div> <div class="top-msg-common top" click="{handleReturnTop}"> <span></span> </div> </div>',"","",function(o){this.handleMessage=function(){window.location.href="messageConsult.html"}.bind(this),this.handleReturnTop=function(){$("html,body").animate({scrollTop:$("body").offset().top},500)}.bind(this),this.on("mount",function(){$(window).scroll(function(){$("body").scrollTop()>300?$(".top-msg-pos").fadeIn():$(".top-msg-pos").fadeOut()})})});