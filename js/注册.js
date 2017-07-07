$("#bs1").mouseover(function() {
	$("#bs1").attr("src","../images/dwx1.png");
});
$("#bs1").mouseout(function() {
	$("#bs1").attr("src","../images/dwx.png");
});
$("#bs2").mouseover(function() {
	$("#bs2").attr("src","../images/dqq1.png");
});
$("#bs2").mouseout(function() {
	$("#bs2").attr("src","../images/dqq.png");
});
$("#bs3").mouseover(function() {
	$("#bs3").attr("src","../images/dxl1.png");
});
$("#bs3").mouseout(function() {
	$("#bs3").attr("src","../images/dxl.png");
});
$("#zcan").mouseover(function () {
	$("#zcan").css("background-color","rgb(219,67,46)")
});
$("#zcan").mouseout(function () {
	$("#zcan").css("background-color","rgb(236,85,65)")
});
$("#sp1").click(function () {
	$("#yxzc").css("display","inline-block");
});
$("#sp2").click(function () {
	$("#yxzc").css("display","none");
})

var isShow = false;
$("#ycd").click(function () {
	if(!isShow){
		$("#kyc").css("display","block");
		$("#ycd").text("收起");
		isShow = true;
	}else{
		$("#kyc").css("display","none");
		$("#ycd").text("更多第三方式登陆");
		isShow = false
	}
});

var isShow1 = false;
$("#fot").click(function () {
	if(!isShow1){
		$("#dlsy").css("display","block");
		$("#fot").text("还没帐号？免费注册");
		isShow1 = true;
	}else{
		$("#dlsy").css("display","none");
		$("#fot").text("已有账号？马上登录");
		isShow1 = false;
	}
})