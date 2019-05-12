$(document).ready(function(){
	$('.one-post').hover(function(event){
		console.log("Навели");
	},
	function(event){
		console.log("Вывели");
	});
});


$(document).ready(function(){
	$('.one-post').hover(function(event){
		$(event.currentTarget).find('.one-post-shadow').animate({opacity: '0.1'}, 300);
	},
	function(event){
		$(event.currentTarget).find('.one-post-shadow').animate({opacity: '0'}, 300);
	})
});


$(document).ready(function(){
                  $("a.picture").hover(function() {
                                   $("a.picture img").animate({width:"420px", height:"100px"}, 300);
                                   },
                                   function(){
                                   $(".picture img").animate({width:"350px", height:"80px"}, 300);
                                   }
                                   );
                  });


$(document).ready(function()
{
    var yPosition;
    var scrolled = 0;
    var $parallaxElements = $('.icons-for-parallax img');
    $(window).scroll(function()
    {
        scrolled = $(window).scrollTop();
            for (var i = 0; i < $parallaxElements.length; i++)
            {
                yPosition = (scrolled * 0.15*(i + 1));
                $parallaxElements.eq(i).css({ top: yPosition });
            }
    });
});

$(document).ready(function()
                  {
                  var yPosition;
                  var scrolled = 0;
                  var $parallaxElements = $('.picture img');
                  $(window).scroll(function()
                                   {
                                   scrolled = $(window).scrollTop();
                                   for (var i = 0; i < $parallaxElements.length; i++)
                                   {
                                   yPosition = (scrolled * 0.15*(i + 1));
                                   $parallaxElements.eq(i).css({ top: yPosition });
                                   }
                                   });
                  });
