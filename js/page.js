$(window).scroll(function(){
	//假如視窗的垂直位置scrollTop大於指定數值
	//就執行totop要fadeIn淡入
	if($(this).scrollTop()>0)
	{
		$(".totop").fadeIn();
	}	
	else
	{
		$(".totop").fadeOut();
	}	
});

//聯絡我們--導覽列
$(window).scroll(function(){
	if ($(this).scrollTop()>300) 
	{
		$("#navbg").fadeIn();
	}
	else
	{
		$("#navbg").fadeOut();
	}
	if ($(this).scrollTop()>300)
	{
		//多個動畫屬性
		$(".totoppro").stop().animate({
			"right":"20px",
			"opacity":"1"
		},500);
	}
	else
	{
		$(".totoppro").stop().animate({
			"right":"-64px",
			"opacity":"0"
		},500);
	}
});

$(".totoppro").click(function(e){
	//靜態回頁首(效果和a標籤的#一樣)
	//$(window).scrollTop(0);

	//動態回頁首
	$("html").stop().animate({"scrollTop":"0"},1300);
	//阻止超連結執行預設動作
	e.preventDefault();
});


//媒體報導--導覽列
//先把#nav-news相對於網頁文件垂直偏移的位置放進一個叫做navtop的變數盒子裡
var navtop=$("#nav-news").offset().top;
$(window).scroll(function(){
	//假如視窗的卷軸上方位置大於navtop
	//就要把#nav-news的CSS-position設為fixed;
	if($(this).scrollTop()>navtop)
	{
		//一個CSS屬性
		$("#nav-news").css("position","fixed");
	}
	else
	{
		$("#nav-news").css("position","static");
	}	

	if ($(this).scrollTop()>300)
	{
		//多個css屬性--靜態改變
		$(".totopnews").css({"right":"20px","opacity":"1"});
	}
	else
	{
		$(".totopnews").css({"right":"-64px","opacity":"0"});
	}
	
});