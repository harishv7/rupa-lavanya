$(document).ready(function() {
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

	/* Preload Images */
	function preloadImages(arrOfImages) {
		for(var i = 0; i < arrOfImages.length; i++) {
			imageToLoad = new Image();
			imageToLoad.src = './assets/images/bg-images/' + arrOfImages[i];
		}
	}
	
	function loadBg() {
		var backgroundImages = ["cover.jpg", "IMG_4478.jpg", "IMG_4481.jpg", "IMG_4511.jpg", "IMG_4527.jpg", "KEL_7799.jpg", "KEL_8222.jpg"];
		preloadImages(backgroundImages);
		
		var currIndex = 1;
		setInterval(function() {
			if(currIndex == backgroundImages.length) {
				currIndex = 0;
			}

			var img = backgroundImages[currIndex];

			$('.cover').css({"background-image":"url('./assets/images/bg-images/" + img + "')"});	
			currIndex++;
		}, 7000);
	}
	window.onload = loadBg();

	// lazy load images
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
});
