$itemW = 900;   //每组中心图片的宽度
$itemH = 600;   //每组中心图片高度
$timer = 1000;  //图片过度时间 1000毫秒
//$perMask =1.1;   //遮罩尺寸百分比
$maskW = 510;
$maskH = 600;
$imgBoxW =  900;//$itemW * $perMask;  //遮罩宽度 = 图片宽度
$imgBoxH =  600;//$itemH * $perMask;  //遮罩高度 = 图片高度
//$maskOffW = $itemW * (1-$perMask) / 2;  //遮罩偏移宽度 
//$maskOffH = $imgBoxOffH = $itemH * (1-$perMask) / 2;  //遮罩偏移高度  即   图片居中的margintop

var $itemNum = $('.sitem').length; // 图片数量可以随意更改

$('#sbanner').css("height", $itemH + "px");

//$('.bannerCon').css('height', $itemH + "px");
//$('.bannerCon').css("width", $itemW + "px");

$('.sbannerCon .sbefore').css("width", $maskW + "px");
$('.sbannerCon .sbefore').css("height", $maskH + "px");
//$('.bannerCon .before').css('left', -($maskW + $maskOffW) + "px");
//$('.bannerCon .before').css('top', $maskOffH + "px");
$('.sbannerCon .sbefore img').css('top', $imgBoxH * 0.42 + "px");



$('.sbannerCon .safter').css("width", $maskW + "px");
$('.sbannerCon .safter').css("height", $maskH + "px");
//$('.bannerCon .after').css('right', -($maskW + $maskOffW) + "px");
//$('.bannerCon .after').css('top', $maskOffH + "px");
$('.sbannerCon .safter img').css('top', $imgBoxH * 0.42 + "px");

$('.sbannerCon .sscroll').css('height', $itemH + "px");
$('.sbannerCon .sscroll').css('width', $itemNum * $itemW + "px");
$('.sbannerCon .sscroll').css('left', -390 + "px");


$('.sbannerCon .sscroll .sitem').css('width', $itemW + "px");
$('.sbannerCon .sscroll .sitem').css('height', $itemH + "px");

$('.sbannerCon .sscroll .sitem .simg-box').css('width', $imgBoxW + "px");
$('.sbannerCon .sscroll .sitem .simg-box').css('height', $imgBoxH + "px");
//$('.bannerCon .scroll .item .img-box').css('margin-top', $imgBoxOffH + "px");
$('.sbannerCon .sscroll .sitem .simg-box').css('transition', $timer/1000 + "s");

//轮播图动画
var _index1=1;
//右边按钮
$('.safter img').click(function(){
	_index1++;
	if(_index1 > $itemNum - 2){
		_index1=1;
		$('.sscroll').css('left','-390px');
		$('.sscroll').animate({left: -_index1 * $itemW + 510 + "px"},$timer);
	}else{
		$('.sscroll').animate({left: -_index1 * $itemW + 510 + "px"},$timer);
	}
	console.log("_index1：" + _index1);
	_2D();
		
});
//左边按钮
$('.sbefore img').click(function(){
	_index1--;
	if(_index1<1){
		_index1 = $itemNum - 2;
		$('.sscroll').css('left', -$itemW * ($itemNum - 1) - 390 + "px");
		$('.sscroll').animate({left: -_index1 * $itemW -390},$timer);
	}else{
		$('.sscroll').animate({left: -_index1 * $itemW -390},$timer);
	}
	console.log("_index1：" + _index1);
	_2D();
});

//图片变形scale
function _2D(){
	$.each($('.sscroll .sitem'), function() {
		if($(this).index() == _index1){
			$('.sscroll .sitem .simg-box').css({
				"transform": "scale(1)",
				"-ms-transform": "scale(1)", /* IE 9 */
				"-moz-transform": "scale(1)", /* Firefox */
				"-webkit-transform": "scale(1)", /* Safari and Chrome */
			});
			$(this).children('.simg-box').css({
				"transform": "scale(1)",
				"-ms-transform": "scale(1)", /* IE 9 */
				"-moz-transform": "scale(1)", /* Firefox */
				"-webkit-transform": "scale(1)", /* Safari and Chrome */
				
			});
		}
	});
}

