$(document).ready(function(){
	var prevLink = $('#prev');
	var nextLink = $('#next');
	
	$(document).on('keydown', function (e) {
	    if (e.which == 37) {
			if(prevLink.length){
	        	window.location = prevLink.attr('href');
	        }
	    } else if (event.which == 39) {
			if(nextLink.length){
		        window.location = nextLink.attr('href');
		    }
	    }
	});
	
	
	$('.blogroll > li').shuffle();
	//$('.wall__list > li').shuffle();
});
