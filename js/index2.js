$(".menu").click(function(){
	//假如menu有menuopen這個class名稱
	//第一個執行nav要show
	if($(this).hasClass("menuopen"))
	{
		$("nav").show();
		$(this).removeClass("menuopen")
		$(this).addClass("menuclose")
	}	
	//條件不成立的時候(沒有menuopen)
	//第一個要執行nav要fadeOut
	else
	{
		$("nav").fadeOut(500);
		$(this).removeClass("menuclose")
		$(this).addClass("menuopen")
	}
});
