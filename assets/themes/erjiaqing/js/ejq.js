$(document).ready(function(){
    $("#back-to-top").hide();
    $(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>200){
            $("#back-to-top").fadeIn(500);
        }
        else{
            $("#back-to-top").fadeOut(500);
        }
    });

    $("#back-to-top").click(function(){
        $('body,html').animate({scrollTop:0},1000);
            return false;
        });
    $("#back-to-comment").click(function(){
        $('body,html').animate({scrollTop:$("#comments").offset().top},1000);
            return false;
        });
    if ($("#comments").length == 0) { 
        $("#back-to-comment").hide(); 
    } 
    });
	$(function () {
	var res = "";
	$("div#post-content h1, div#post-content h2, div#post-content h3, div#post-content h4, div#post-content h5, div#post-content h6").each(function(){
		res = res + '<li><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</a></li>';
	});
	$('#right-float').html($('#right-float').html() + '<section id="toc"><h4>ToC</h4><ul>' + res + '</ul>');
	$('#right-float').stickUp();
	});
});
