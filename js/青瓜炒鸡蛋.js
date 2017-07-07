$("#img").mouseover(function(){
    $("#img").css({
    	"border-top":"1px solid rgb(221,221,221)",
    	"border-left":"1px solid rgb(221,221,221)",
    	"border-right":"1px solid rgb(221,221,221)"
    });
    $("#section_two3").css("display","block")
})
$("#img").mouseout(function(){
    $("#img").css("border","none");
    $("#section_two3").css("display","none")
})
$.fn.extend({
    "initPage":function(listCount,currentPage,fun){
        console.log("-=-=-")
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
