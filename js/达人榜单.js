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
$("#d1").click(function(){
	$(".poi12").css("display","inline-block")
})
// function ab(){
// 	$("#abc").addClass("btn btn-danger")
// }
// function ab1(){
// 	$("#acb").css("background-color","red")
// }
// <script>
	$("#hobby").click(function(){
		$(".poi12").css("display","inline-block")
		$(".poi14").css("display","none")
		$(".poi13").css("display","none")
		$(".poi17").css("display","none")
	})
	$("#hobby1").click(function(){
		$(".poi13").css("display","inline-block")
		 $(".poi12").css("display","none")
		 $(".poi14").css("display","none")
		 $(".poi15").css("display","none")
		 $(".poi17").css("display","none")

	})
	$("#hobby2").click(function(){
		$(".poi14").css("display","inline-block")
		$(".poi13").css("display","none")
		$(".poi12").css("display","none")
		$(".poi15").css("display","none")
		$(".poi17").css("display","none")
		

	})
	$("#hobby3").click(function(){
		$(".poi15").css("display","inline-block")
		$(".poi13").css("display","none")
		$(".poi12").css("display","none")
		$(".poi14").css("display","none")
		$(".poi17").css("display","none")
		 

	})
	$("#hobby4").click(function(){
		$(".poi16").css("display","inline-block")
		$(".poi13").css("display","none")
		$(".poi12").css("display","none")
		$(".poi14").css("display","none")
		$(".poi15").css("display","none")
		$(".poi17").css("display","none")

	})
	$("#hobby5").click(function(){
		$(".poi17").css("display","inline-block")
		$(".poi13").css("display","none")
		$(".poi12").css("display","none")
		$(".poi14").css("display","none")
		$(".poi15").css("display","none")
		$(".poi16").css("display","none")

	})


