
$(document).ready(function(){
	var prevPage = $('#prev');
	var nextPage = $('#next');
	
	$(document).on('keydown', function (event) {
	    if (event.which == 37) {
			if(prevPage.length){
	        	window.location = prevPage.attr('href');
	        }
	    } else if (event.which == 39) {
			if(nextPage.length){
		        window.location = nextPage.attr('href');
		    }
	    }
	});
	
	
	$('.blogroll > li').shuffle();	
});
