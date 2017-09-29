function EasyPeasyParallax() {
    
	scrollPos = $(this).scrollTop();

	$('#headcontent').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/600)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
});