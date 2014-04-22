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
});
