$(".re_start").unbind();
    $(".re_start").click(function(){
        $(".re_slideUp1").html("鍥炲");
        $(".re_slideUp1").parents(".plcon").next().slideUp(function(){
            $(".re_slideUp1").html("鍥炲");
            $(".re_slideUp1").removeClass("re_slideUp1").addClass("re_start");
            bind_re();
        });
        var _this=$(this);
        _this.parents(".plcon").next().find("form").css("paddingTop","20px");
        _this.parents(".plcon").next().find("form").show();
        _this.parents(".plcon").next().slideDown(function(){
            _this.html("鏀惰捣");
            _this.removeClass("re_start").addClass("re_slideUp1");
            _this.parents(".plcon").next().find("textarea").focus();
            bind_re();
        });
    });