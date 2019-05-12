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