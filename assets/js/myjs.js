$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox({
		wrapping: true
	});
});

$(function () {
	$(document).scroll(function () {
		var $nav = $(".fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

$("#show-more-btn").click(function() {
	$("#about-more").show();
});

var myLazyLoad = new LazyLoad();

window.sr = ScrollReveal({
	scale: 0.7,
	duration: 700
});
sr.reveal('#about');
sr.reveal('#services');
sr.reveal('#portfolio');
sr.reveal('#clients');
sr.reveal('#connect');
sr.reveal('#contact');