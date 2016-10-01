$(function(){
	slider();
	tabs();
    movie();

});


//下拉菜单
function slider(){
	 
	 var tabs = $(".nav");

	tabs.each(function(){

		var tab = $(this),						
			menu = tab.find(".clearfix li");
			menu.on('mouseenter',function(){
					var _this = $(this).find("div");
					_this.stop(true,true).slideDown("slow");
					$("#menu1").removeClass("curr");
					stop(true,true);
				});
		
			menu.on('mouseleave',function(){
					var _this = $(this).find("div");
					_this.stop(true,true).slideUp("normal");
					$("#menu1").addClass("curr");
					
				});
		

	});

	
	 
	 }




//选项卡
function tabs(){
		var tabs = $(".newsbox");

	tabs.each(function(){

		var tab = $(this),						
			menu = tab.find(".news_list li"),	 	
			content = tab.find(".news_con>ul");	
			

		menu.on("mouseenter" , function(){

			var me = $(this),						
				index = me.index();					

			menu.removeClass("on");
			me.addClass("on");
			content.hide();							
			content.eq(index).show();				
			
		});		


	});
}

//movie选项卡
function movie(){

	var tabs = $(".movie_title");

	tabs.each(function(){

		var tab = $(this),						
			movie = tab.find(".movie_con>li"),	 	
			List = tab.find(".focus_nav li");	
			

		List.on("click" , function(){

			var me = $(this),						
				index = me.index();					

						
			
			movie.hide();						
			movie.eq(index).show();	
			me.addClass("on").siblings().removeClass("on");
			
		});		


	});

}





(function(a) {
    a.fn.DB_tabMotionBanner = function(b) {
        var c = {
            key: "",
            autoRollingTime: 3000,
            bgSpeed: 1000,
            motion: ""
        };
        a.extend(c, b);
        return this.each(function() {
            var h = a(this);
            var k = h.find(".DB_imgSet");
            var r = h.find(".DB_imgSet li");
            var i = h.find(".DB_menuSet");
            var m = h.find(".DB_menuSet li");
            var e = h.find(".DB_bgSet li");
            var q = h.find(".DB_next");
            var g = h.find(".DB_prev");
            var f = r.length;
            var p = 0;
            var j = 0;
            s();
            function s() {
                
                l();
                d();
                t();
                o()
            }
            function l() {
                k.css({
                    position: "relative"
                });
                r.css({
                    position: "absolute"
                });
                for (var y = 0; y < f; y++) {
                    if (y == p) {
                        r.eq(y).show()
                    } else {
                        r.eq(y).hide()
                    }
                }
                for (var y = 0; y < r.length; y++) {
                    var x = r.eq(y).find("img");
                    for (var w = 0; w < x.length; w++) {
                        var A = x.eq(w);
                        var v = c.motion[A.attr("class")];
                        if (v != null) {
                            var z = Number(A.css("left").split("px")[0]);
                            var B = Number(A.css("top").split("px")[0]);
                            A.data({
                                x2: z,
                                y2: B,
                                x1: z + v.left,
                                y1: B + v.top,
                                opacity: v.opacity,
                                speed: v.speed,
                                delay: v.delay == null ? 0 : v.delay
                            })
                        }
                    }
                }
            }
            function d() {
                
                m.bind("click",
                function() {
                    if (a(this).index() != p) {
                        p = a(this).index();
						clearInterval(j);
						t();
                        o()
                    }
                });
                m.hover(function() {
                    n(a(this).find("img"), "src", "_off", "_hov")
                },function(){
                    n(a(this).find("img"), "src", "_hov", "_off")
                });
                m.bind("mouseenter",
                function() {
                    n(a(this).find("img"), "src", "_off", "_on")
                });
                m.bind("mouseleave",
                function() {
                    if (p != a(this).index()) {
                        n(a(this).find("img"), "src", "_on", "_off")
                    }
                });
                q.bind("click",
                function() {
                    u()
                });
                g.bind("click",
                function() {
                    p--;
                    if (p == -1) {
                        p = f - 1
                    }
                    o()
                })
            }
            function u() {
                p = ++p % f;
                o()
            }
            function t() {
                j = setInterval(u, c.autoRollingTime)
            }
            function o() {
                for (var z = 0; z < r.length; z++) {
                    var A = r.eq(z);
                    var y = e.eq(z);
                    if (p == z) {
                        A.show();
                        var x = A.find("img");
                        for (var w = 0; w < x.length; w++) {
                            var A = x.eq(w);
                            var v = c.motion[A.attr("class")];
                            if (v != null) {
                                if (A.attr("src").indexOf(".png") > 0 && a.browser.msie && a.browser.version < 9) {
                                    A.css({
                                        left: A.data("x1"),
                                        top: A.data("y1"),
                                        opacity: 1,
                                        display: "none"
                                    })
                                } else {
                                    A.css({
                                        left: A.data("x1"),
                                        top: A.data("y1"),
                                        opacity: A.data("opacity")
                                    })
                                }
                                A.stop().delay(A.data("delay")).queue(function() {
                                    a(this).css("display", "block");
                                    a(this).dequeue()
                                }).animate({
                                    left: A.data("x2"),
                                    top: A.data("y2"),
                                    opacity: 1
                                },
                                A.data("speed"))
                            }
                        }
                        n(m.eq(z).find("img"), "src", "_off", "_on");
                        n(m.eq(z).find("img"), "src", "_hov", "_on");
                        m.eq(z).addClass("select");
                        y.stop(true, true).fadeIn(c.bgSpeed)
                    } else {
                        A.hide();
                        n(m.eq(z).find("img"), "src", "_on", "_off");
                        m.eq(z).removeClass("select");
                        y.stop(true, true).fadeOut(c.bgSpeed)
                    }
                }
            }
            function n(w, z, v, x) {
                var y = w.attr(z);
                if (String(y).search(v) != -1) {
                    w.attr(z, y.replace(v, x))
                }
            }
        })
    }
})(jQuery);