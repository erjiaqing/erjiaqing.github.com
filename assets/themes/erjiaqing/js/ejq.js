function doAtReady() {
	$(function () {
	if ($("#right-float").length > 0){ 
      var res = "";
      $("div#post-content h1, div#post-content h2, div#post-content h3, div#post-content h4, div#post-content h5, div#post-content h6").each(function(){res = res + '<li><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</a></li>';});
	  $('#right-float').html($('#right-float').html() + '<section id="toc"><h4>ToC</h4><ul>' + res + '</ul>');
      //$('#right-float').stickUp();
	}
    if ($("#comments").length != 0) { 
        $("#back-to-comment").fadeOut(); 
    } else {
        $("#back-to-comment").fadeIn();
	}
	});
	/*
	$("a[href='"+location.pathname+"']").addClass('active');
	$("li[data='"+location.pathname+"']").addClass('active');
	$("a[href~='"+location.pathname+"']").removeClass('active');
	$("li[data~='"+location.pathname+"']").removeClass('active');
	*/
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

function jumpToNewPage(href, ifscroll) {
  reg = new RegExp("<!--BEGIN_CONTENT-->(.|\\n)*<!--END_CONTENT-->", "gm");
  DISQUS=null;
  $.get(href, function(data){
	$(".content").html(data.match(reg));
	$("title").html(data.match(/<title>(.|\n)*<\/title>/gm)[0].slice(7,-8));
	history.pushState(location.href, null, href);
	doAtReady();
	if (ifscroll) {
	  $('body,html').animate({scrollTop:0},1000);
	}
  });
}

$("a").click(function(event) {
  alert(event.toElement.pathname + '\n' + location.pathname);
  if (event.toElement.pathname != location.pathname) {
	  jumpToNewPage(event.toElement.href, true);
	  return false;
  }
});


window.onpopstate = function(event) {
  reg = new RegExp("<!--BEGIN_CONTENT-->(.|\\n)*<!--END_CONTENT-->", "gm");
  $.get(event.state, function(data){$(".content").html(data.match(reg));});
};

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
	doAtReady();
});
