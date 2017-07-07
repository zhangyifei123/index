/*
* @Author: Marte
* @Date:   2017-06-13 12:45:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-13 15:23:19
*/

'use strict';
$(".img_div").mouseover(function(){
   $($(".img_div_none")[$(".img_div").index($(this))]).css("display","block");
});
$(".img_div").mouseout(function(){
   $($(".img_div_none")[$(".img_div").index($(this))]).css("display","none");
});
var num=1;
function guan_zhu(){
    $("#guan_zhu").text("关注："+(num+=1));
}
function tijiao_input(){
    var date =new Date();
    var div = $("<div class='ping_yu'><div class='nei_rong'>"+$('textarea').val()+"</div><div class='shi_jian'>"+date+"</div></div>");
    $(".liu_yan").append(div);
    $('textarea').val("");
}
$("#fx").mouseover(function(){
	$("#cpdq").css("display","inline-block");
	$("#fx img").css("visibility","hidden");
});
$("#fx").mouseout(function() {
	$("#cpdq").css("display","none");
	$("#fx img").css("visibility","visible");
});
$("#cpdq").mouseover(function(){
	$("#cpdq").css("display","inline-block");
	$("#fx img").css("visibility","hidden");
});
$("#cpdq").mouseout(function() {
	$("#cpdq").css("display","none");
	$("#fx img").css("visibility","visible");
});
$("#fx1").mouseover(function(){
	$("#cpdq1").css("display","inline-block");
	$("#fx1 img").css("visibility","hidden");
});
$("#fx1").mouseout(function() {
	$("#cpdq1").css("display","none");
	$("#fx1 img").css("visibility","visible");
});
$("#cpdq1").mouseover(function(){
	$("#cpdq1").css("display","inline-block");
	$("#fx1 img").css("visibility","hidden");
});
$("#cpdq1").mouseout(function() {
	$("#cpdq1").css("display","none");
	$("#fx1 img").css("visibility","visible");
});