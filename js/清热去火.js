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

var $itemNum = $('.item').length; // 图片数量可以随意更改

$('#banner').css("height", $itemH + "px");

//$('.bannerCon').css('height', $itemH + "px");
//$('.bannerCon').css("width", $itemW + "px");

$('.bannerCon .before').css("width", $maskW + "px");
$('.bannerCon .before').css("height", $maskH + "px");
//$('.bannerCon .before').css('left', -($maskW + $maskOffW) + "px");
//$('.bannerCon .before').css('top', $maskOffH + "px");
$('.bannerCon .before img').css('top', $imgBoxH * 0.42 + "px");



$('.bannerCon .after').css("width", $maskW + "px");
$('.bannerCon .after').css("height", $maskH + "px");
//$('.bannerCon .after').css('right', -($maskW + $maskOffW) + "px");
//$('.bannerCon .after').css('top', $maskOffH + "px");
$('.bannerCon .after img').css('top', $imgBoxH * 0.42 + "px");

$('.bannerCon .scroll').css('height', $itemH + "px");
$('.bannerCon .scroll').css('width', $itemNum * $itemW + "px");
$('.bannerCon .scroll').css('left', -390 + "px");


$('.bannerCon .scroll .item').css('width', $itemW + "px");
$('.bannerCon .scroll .item').css('height', $itemH + "px");

$('.bannerCon .scroll .item .img-box').css('width', $imgBoxW + "px");
$('.bannerCon .scroll .item .img-box').css('height', $imgBoxH + "px");
//$('.bannerCon .scroll .item .img-box').css('margin-top', $imgBoxOffH + "px");
$('.bannerCon .scroll .item .img-box').css('transition', $timer/1000 + "s");

//轮播图动画
var _index1=1;
//右边按钮
$('.after img').click(function(){
	_index1++;
	if(_index1 > $itemNum - 2){
		_index1=1;
		$('.scroll').css('left','-390px');
		$('.scroll').animate({left: -_index1 * $itemW + 510 + "px"},$timer);
	}else{
		$('.scroll').animate({left: -_index1 * $itemW + 510 + "px"},$timer);
	}
	console.log("_index1：" + _index1);
	_2D();
		
});
//左边按钮
$('.before img').click(function(){
	_index1--;
	if(_index1<1){
		_index1 = $itemNum - 2;
		$('.scroll').css('left', -$itemW * ($itemNum - 1) - 390 + "px");
		$('.scroll').animate({left: -_index1 * $itemW -390},$timer);
	}else{
		$('.scroll').animate({left: -_index1 * $itemW -390},$timer);
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
				"transform": "scale(1)",
				"-ms-transform": "scale(1)", /* IE 9 */
				"-moz-transform": "scale(1)", /* Firefox */
				"-webkit-transform": "scale(1)", /* Safari and Chrome */
				
			});
		}
	});
}
$.fn.extend({
    "initPage":function(listCount,currentPage,fun){
        // console.log("-=-=-")
        var maxshowpageitem = $(this).attr("maxshowpageitem");
        if(maxshowpageitem!=null&&maxshowpageitem>0&&maxshowpageitem!=""){
            page.maxshowpageitem = maxshowpageitem;
        }
        var pagelistcount = $(this).attr("pagelistcount");
        if(pagelistcount!=null&&pagelistcount>0&&pagelistcount!=""){
            page.pagelistcount = pagelistcount;
        }

        var pageId = $(this).attr("id");
        page.pageId=pageId;
        if(listCount<0){
            listCount = 0;
        }
        if(currentPage<=0){
            currentPage=1;
        }
        page.setPageListCount(listCount,currentPage,fun);

    }
});
var  page = {
    "pageId":"",
    "maxshowpageitem":5,//最多显示的页码个数
    "pagelistcount":10,//每一页显示的内容条数
    /**
     * 初始化分页界面
     * @param listCount 列表总量
     */
    "initWithUl":function(listCount,currentPage){
        var pageCount = 1;
        if(listCount>=0){
            var pageCount = listCount%page.pagelistcount>0?parseInt(listCount/page.pagelistcount)+1:parseInt(listCount/page.pagelistcount);
        }
        var appendStr = page.getPageListModel(pageCount,currentPage);
        $("#"+page.pageId).html(appendStr);
    },
    /**
     * 设置列表总量和当前页码
     * @param listCount 列表总量
     * @param currentPage 当前页码
     */
    "setPageListCount":function(listCount,currentPage,fun){
        listCount = parseInt(listCount);
        currentPage = parseInt(currentPage);
        page.initWithUl(listCount,currentPage);
        page.initPageEvent(listCount,fun);
        fun(currentPage);
    },
    "initPageEvent":function(listCount,fun){
        $("#"+page.pageId +">li[class='pageItem']").on("click",function(){
            page.setPageListCount(listCount,$(this).attr("page-data"),fun);
        });
    },
    "getPageListModel":function(pageCount,currentPage){
        var prePage = currentPage-1;
        var nextPage = currentPage+1;
        var prePageClass ="pageItem";
        var nextPageClass = "pageItem";
        if(prePage<=0){
            prePageClass="pageItemDisable";
        }
        if(nextPage>pageCount){
            nextPageClass="pageItemDisable";
        }
        var appendStr ="";
        appendStr+="<li class='"+prePageClass+"' page-data='1' page-rel='firstpage'>首页</li>";
        appendStr+="<li class='"+prePageClass+"' page-data='"+prePage+"' page-rel='prepage'>&lt;上一页</li>";
        var miniPageNumber = 1;
        if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)<=pageCount){
            miniPageNumber = currentPage-parseInt(page.maxshowpageitem/2);
        }else if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)>pageCount){
            miniPageNumber = pageCount-page.maxshowpageitem+1;
            if(miniPageNumber<=0){
                miniPageNumber=1;
            }
        }
        var showPageNum = parseInt(page.maxshowpageitem);
        if(pageCount<showPageNum){
            showPageNum = pageCount
        }
        for(var i=0;i<showPageNum;i++){
            var pageNumber = miniPageNumber++;
            var itemPageClass = "pageItem";
            if(pageNumber==currentPage){
                itemPageClass = "pageItemActive";
            }

            appendStr+="<li class='"+itemPageClass+"' page-data='"+pageNumber+"' page-rel='itempage'>"+pageNumber+"</li>";
        }
        appendStr+="<li class='"+nextPageClass+"' page-data='"+nextPage+"' page-rel='nextpage'>下一页&gt;</li>";
        appendStr+="<li class='"+nextPageClass+"' page-data='"+pageCount+"' page-rel='lastpage'>尾页</li>";
       return appendStr;

    }
}

var one = document.getElementById('content1');
    one.onmouseover = function(){
        one.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    one.onmouseout = function(){
        one.setAttribute("style","top:0px;transition:top 500ms;");
    }

var two = document.getElementById('content2');
    two.onmouseover = function(){
        two.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    two.onmouseout = function(){
        two.setAttribute("style","top:0px;transition:top 500ms;");
    }

var three = document.getElementById('content3');
    three.onmouseover = function(){
        three.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    three.onmouseout = function(){
        three.setAttribute("style","top:0px;transition:top 500ms;");
    }

var four = document.getElementById('content4');
    four.onmouseover = function(){
        four.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    four.onmouseout = function(){
        four.setAttribute("style","top:0px;transition:top 500ms;");
    }

var five = document.getElementById('content5');
    five.onmouseover = function(){
        five.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    five.onmouseout = function(){
        five.setAttribute("style","top:0px;transition:top 500ms;");
    }

var six = document.getElementById('content6');
    six.onmouseover = function(){
        six.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    six.onmouseout = function(){
        six.setAttribute("style","top:0px;transition:top 500ms;");
    }

var seven = document.getElementById('content7');
    seven.onmouseover = function(){
        seven.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    seven.onmouseout = function(){
        seven.setAttribute("style","top:0px;transition:top 500ms;");
    }

var eight = document.getElementById('content8');
    eight.onmouseover = function(){
        eight.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    eight.onmouseout = function(){
        eight.setAttribute("style","top:0px;transition:top 500ms;");
    }
var nine = document.getElementById('content9');
    nine.onmouseover = function(){
        nine.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    nine.onmouseout = function(){
        nine.setAttribute("style","top:0px;transition:top 500ms;");
    }

var ten = document.getElementById('content10');
    ten.onmouseover = function(){
        ten.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    ten.onmouseout = function(){
        ten.setAttribute("style","top:0px;transition:top 500ms;");
    }

var eleven = document.getElementById('content11');
    eleven.onmouseover = function(){
        eleven.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    eleven.onmouseout = function(){
        eleven.setAttribute("style","top:0px;transition:top 500ms;");
    }

var twelfth = document.getElementById('content12');
    twelfth.onmouseover = function(){
        twelfth.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    twelfth.onmouseout = function(){
        twelfth.setAttribute("style","top:0px;transition:top 500ms;");
    }

var thirth = document.getElementById('content13');
    thirth.onmouseover = function(){
        thirth.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    thirth.onmouseout = function(){
        thirth.setAttribute("style","top:0px;transition:top 500ms;");
    }

var fourth = document.getElementById('content14');
    fourth.onmouseover = function(){
        fourth.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    fourth.onmouseout = function(){
        fourth.setAttribute("style","top:0px;transition:top 500ms;");
    }

var fifth = document.getElementById('content15');
    fifth.onmouseover = function(){
        fifth.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    fifth.onmouseout = function(){
        fifth.setAttribute("style","top:0px;transition:top 500ms;");
    }

var sixth = document.getElementById('content16');
    sixth.onmouseover = function(){
        sixth.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    sixth.onmouseout = function(){
        sixth.setAttribute("style","top:0px;transition:top 500ms;");
    }
var seventh = document.getElementById('content17');
    seventh.onmouseover = function(){
        seventh.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    seventh.onmouseout = function(){
        seventh.setAttribute("style","top:0px;transition:top 500ms;");
    }

var eighth = document.getElementById('content18');
    eighth.onmouseover = function(){
        eighth.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    eighth.onmouseout = function(){
        eighth.setAttribute("style","top:0px;transition:top 500ms;");
    }

var nineth = document.getElementById('content19');
    nineth.onmouseover = function(){
        nineth.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    nineth.onmouseout = function(){
        nineth.setAttribute("style","top:0px;transition:top 500ms;");
    }

var twength = document.getElementById('content20');
    twength.onmouseover = function(){
        twength.setAttribute("style","top:-100px;transition:top 500ms;");
    }
    twength.onmouseout = function(){
        twength.setAttribute("style","top:0px;transition:top 500ms;");
    }