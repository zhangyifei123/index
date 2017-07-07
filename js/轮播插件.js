$itemW = 673;   //每组中心图片的宽度
$itemH = 405;   //每组中心图片高度
$timer = 1000  //图片过度时间 1000毫秒
$perMask =0.98;   //遮罩尺寸百分比

$imgBoxW = $maskW = $itemW * $perMask;  //遮罩宽度 = 图片宽度
$imgBoxH = $maskH = $itemH * $perMask;  //遮罩高度 = 图片高度
$maskOffW = $itemW * (1-$perMask) / 2;  //遮罩偏移宽度 
$maskOffH = $imgBoxOffH = $itemH * (1-$perMask) / 2;  //遮罩偏移高度  即   图片居中的margintop

var $itemNum = $('.item').length; // 图片数量可以随意更改

$('#banner').css("height", $itemH + "px");

$('.bannerCon').css('height', $itemH + "px");
$('.bannerCon').css("width", $itemW + "px");

$('.bannerCon .before').css("width", $maskW + "px");
$('.bannerCon .before').css("height", $maskH + "px");
$('.bannerCon .before').css('left', -($maskW + $maskOffW) + "px");
$('.bannerCon .before').css('top', $maskOffH + "px");
$('.bannerCon .before img').css('top', $imgBoxH * 0.42 + "px");



$('.bannerCon .after').css("width", $maskW - 50 + "px");
$('.bannerCon .after').css("height", $maskH + "px");
$('.bannerCon .after').css('right', -($maskW + $maskOffW) + "px");
$('.bannerCon .after').css('top', $maskOffH + "px");
$('.bannerCon .after img').css('top', $imgBoxH * 0.42 + "px");

$('.bannerCon .scroll').css('height', $itemH + "px");
$('.bannerCon .scroll').css('width', $itemNum * $itemW + "px");
$('.bannerCon .scroll').css('left', -$itemW + "px");


$('.bannerCon .scroll .item').css('width', $itemW + "px");
$('.bannerCon .scroll .item').css('height', $itemH + "px");

$('.bannerCon .scroll .item .img-box').css('width', $imgBoxW + "px");
$('.bannerCon .scroll .item .img-box').css('height', $imgBoxH + "px");
$('.bannerCon .scroll .item .img-box').css('margin-top', $imgBoxOffH + "px");
$('.bannerCon .scroll .item .img-box').css('transition', $timer/1000 + "s");

//轮播图动画
var _index1=1;
//右边按钮
$('.after img').click(function(){
	_index1++;
	if(_index1 > $itemNum - 2){
		_index1=1;
		$('.scroll').css('left','0px');
		$('.scroll').animate({left: -_index1 * $itemW},$timer);
	}else{
		$('.scroll').animate({left: -_index1 * $itemW},$timer);
	}
	console.log("_index1：" + _index1);
	_2D();
		
});
//左边按钮
$('.before img').click(function(){
	_index1--;
	if(_index1<1){
		_index1 = $itemNum - 2;
		$('.scroll').css('left', -$itemW * ($itemNum - 1) + "px");
		$('.scroll').animate({left: -_index1 * $itemW},$timer);
	}else{
		$('.scroll').animate({left: -_index1 * $itemW},$timer);
	}
	console.log("_index1：" + _index1);
	_2D();
});

//图片变形scale
function _2D(){
	$.each($('.scroll .item'), function() {
		if($(this).index() == _index1){
			$('.scroll .item .img-box').css({
				"transform": "scale(1)",
				"-ms-transform": "scale(1)", /* IE 9 */
				"-moz-transform": "scale(1)", /* Firefox */
				"-webkit-transform": "scale(1)", /* Safari and Chrome */
			});
			$(this).children('.img-box').css({
				"transform": "scale(1.1)",
				"-ms-transform": "scale(1.1)", /* IE 9 */
				"-moz-transform": "scale(1.1)", /* Firefox */
				"-webkit-transform": "scale(1.1)", /* Safari and Chrome */
				
			});
		}
	});
}
$("#li2,#li3,#li4").mouseover(function(){
	$("#li1").css({"background-color":"white","color":"rgb(102,102,102)"});
});
$("#li2,#li3,#li4").mouseout(function(){
	$("#li1").css({"background-color":"rgb(255,50,50)","color":"white"});
});
$("#li2").mouseover(function(){
	$("#zj").css("background-image","url(../images/sc1.jpg)");
	$("#zj1").css("background-image","url(../images/sc2.jpg)");
	$("#zj2").css("background-image","url(../images/sc3.jpg)");
	$("#zj3").css("background-image","url(../images/sc4.jpg)");
	$("#zj4").css("background-image","url(../images/sc5.jpg)");
	$("#zj5").css("background-image","url(../images/sc6.jpg)");
	$("#zj6").css("background-image","url(../images/sc7.jpg)");
	$("#zj7").css("background-image","url(../images/sc8.jpg)");
});
$("#li3").mouseover(function(){
	$("#zj").css("background-image","url(../images/wg1.jpg)");
	$("#zj1").css("background-image","url(../images/wg2.jpg)");
	$("#zj2").css("background-image","url(../images/wg3.jpg)");
	$("#zj3").css("background-image","url(../images/wg4.jpg)");
	$("#zj4").css("background-image","url(../images/wg5.jpg)");
	$("#zj5").css("background-image","url(../images/wg6.jpg)");
	$("#zj6").css("background-image","url(../images/wg7.jpg)");
	$("#zj7").css("background-image","url(../images/wg8.jpg)");
});
$("#li4").mouseover(function(){
	$("#zj").css("background-image","url(../images/sx1.jpg)");
	$("#zj1").css("background-image","url(../images/sx2.jpg)");
	$("#zj2").css("background-image","url(../images/sx3.jpg)");
	$("#zj3").css("background-image","url(../images/sx4.jpg)");
	$("#zj4").css("background-image","url(../images/sx5.jpg)");
	$("#zj5").css("background-image","url(../images/sx6.jpg)");
	$("#zj6").css("background-image","url(../images/sx7.jpg)");
	$("#zj7").css("background-image","url(../images/sx8.jpg)");
});
$("#li1").mouseover(function(){
	$("#zj").css("background-image","url(../images/sg1.jpg)");
	$("#zj1").css("background-image","url(../images/sg2.jpg)");
	$("#zj2").css("background-image","url(../images/sg3.jpg)");
	$("#zj3").css("background-image","url(../images/sg4.jpg)");
	$("#zj4").css("background-image","url(../images/sg5.jpg)");
	$("#zj5").css("background-image","url(../images/sg6.jpg)");
	$("#zj6").css("background-image","url(../images/sg7.jpg)");
	$("#zj7").css("background-image","url(../images/sg8.jpg)");
});
$("#li2,#li3,#li4").mouseout(function(){
	$("#zj").css("background-image","url(../images/sg1.jpg)");
	$("#zj1").css("background-image","url(../images/sg2.jpg)");
	$("#zj2").css("background-image","url(../images/sg3.jpg)");
	$("#zj3").css("background-image","url(../images/sg4.jpg)");
	$("#zj4").css("background-image","url(../images/sg5.jpg)");
	$("#zj5").css("background-image","url(../images/sg6.jpg)");
	$("#zj6").css("background-image","url(../images/sg7.jpg)");
	$("#zj7").css("background-image","url(../images/sg8.jpg)");
});
$("#zhli1").mouseover(function(){
	$("#zhli1 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht1").css("background-image","url(../images/dy.jpg)");
});
$("#zhli1").mouseout(function(){
	$("#zhli1 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});
$("#zhli2").mouseover(function(){
	$("#zhli2 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht1").css("background-image","url(../images/pj.jpg)");

});
$("#zhli2").mouseout(function(){
	$("#zhli2 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});
$("#zhli3").mouseover(function(){
	$("#zhli3 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht1").css("background-image","url(../images/sjd.jpg)");
});
$("#zhli3").mouseout(function(){
	$("#zhli3 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});

$("#zhli4").mouseover(function(){
	$("#zhli4 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht2").css("background-image","url(../images/ty.jpg)");
});
$("#zhli4").mouseout(function(){
	$("#zhli4 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});
$("#zhli5").mouseover(function(){
	$("#zhli5 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht2").css("background-image","url(../images/dg.jpg)");

});
$("#zhli5").mouseout(function(){
	$("#zhli5 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});
$("#zhli6").mouseover(function(){
	$("#zhli6 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht2").css("background-image","url(../images/lbz.jpg)");
});
$("#zhli6").mouseout(function(){
	$("#zhli6 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});

$("#zhli7").mouseover(function(){
	$("#zhli7 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht3").css("background-image","url(../images/hd.jpg)");
});
$("#zhli7").mouseout(function(){
	$("#zhli7 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});
$("#zhli8").mouseover(function(){
	$("#zhli8 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht3").css("background-image","url(../images/hj.jpg)");

});
$("#zhli8").mouseout(function(){
	$("#zhli8 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});
$("#zhli9").mouseover(function(){
	$("#zhli9 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht3").css("background-image","url(../images/hdn.jpg)");
});
$("#zhli9").mouseout(function(){
	$("#zhli9 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});

$("#zhli10").mouseover(function(){
	$("#zhli10 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht4").css("background-image","url(../images/dy.jpg)");
});
$("#zhli10").mouseout(function(){
	$("#zhli10 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});
$("#zhli11").mouseover(function(){
	$("#zhli11 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht4").css("background-image","url(../images/pj.jpg)");

});
$("#zhli11").mouseout(function(){
	$("#zhli11 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});
$("#zhli12").mouseover(function(){
	$("#zhli12 a").css({"color":"red","font-size":"17px","font-weight":"bold"});
	$("#zht4").css("background-image","url(../images/sjd.jpg)");
});
$("#zhli12").mouseout(function(){
	$("#zhli12 a").css({"color":"rgb(102,102,102)","font-size":"15px","font-weight":"lighter"});
});
$("#zhli1,#zhli2,#zhli3").mouseout(function(){
	$("#zhli1 a").css({"color":"rgb(51,51,51)","font-size":"17px","font-weight":"bold"});
	$("#zht1").css("background-image","url(../images/dy.jpg)");
});
$("#zhli4,#zhli5,#zhli6").mouseout(function(){
	$("#zhli4 a").css({"color":"rgb(51,51,51)","font-size":"17px","font-weight":"bold"});
	$("#zht2").css("background-image","url(../images/ty.jpg)");
});
$("#zhli7,#zhli8,#zhli9").mouseout(function(){
	$("#zhli7 a").css({"color":"rgb(51,51,51)","font-size":"17px","font-weight":"bold"});
	$("#zht3").css("background-image","url(../images/hd.jpg)");
});
$("#zhli10,#zhli11,#zhli12").mouseout(function(){
	$("#zhli10 a").css({"color":"rgb(51,51,51)","font-size":"17px","font-weight":"bold"});
	$("#zht4").css("background-image","url(../images/gw.jpg)");
});

