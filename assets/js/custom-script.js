$(document).ready(function()
{
	$(window).scroll(function()
		{
			if($(this).scrollTop() > 30) 
			{
		        $("#btn-back-top").css("display", "block");
		        if ($(this).width()>=992) 
		        {
		        	$(".fixed-top.fixed-nav").css({"position":"fixed", "padding":"0 0 2px"});
		        	$(".bg-theme-nav").css("background-color", "#8cad95");
		        	$(".navbar-brand").css("display","none");
		        }
		        else
		        {
		        	$(".fixed-top.fixed-nav").css({"position":"fixed", "padding":"8px 16px"});
		        	$(".bg-theme-nav").css("background-color", "#8cad95");
		        	$(".navbar-brand").css("display","inline-block");
		        }
		        
		    } 
		    else 
		    {
		        $("#btn-back-top").css("display", "none");
		        if ($(this).width()>=992) 
		        {
			        $(".fixed-top.fixed-nav").css({"position":"relative", "padding":"3%"});
			        $(".bg-theme-nav").css("background-color", "transparent");
			        $(".navbar-brand").css("display","inline-block");
			    }
			    else
		        {
		        	$(".fixed-top.fixed-nav").css({"position":"fixed", "padding":"8px 16px"});
		        	$(".bg-theme-nav").css("background-color", "#8cad95");
		        	$(".navbar-brand").css("display","inline-block");
		        }
		    }
		});

	$("#btn-back-top").click(function() 
		{
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false;
		});
});