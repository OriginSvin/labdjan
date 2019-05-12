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
                  $("a.urles").hover(function() {
                                   $("a.urles img").animate({width:"420px", height:"100px"}, 300);
                                   },
                                   function(){
                                   $(".urles img").animate({width:"350px", height:"80px"}, 300);
                                   }
                                   );
                  });
