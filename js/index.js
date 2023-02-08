// preloader
$(window).on("load", function () {
	$(".circle").fadeOut(800);
	$(".message").fadeOut(800);
});
// window scroll top
$(document).ready(function () {
	$(window).scrollTop(0);
});
$(document).ready(function () {
	$(".dropdown").hover(
		function () {
			$(".dropdown-menu", this).stop(true, true).slideDown("fast");
			$(this).toggleClass("open");
		},
		function () {
			$(".dropdown-menu", this).stop(true, true).slideUp("fast");
			$(this).toggleClass("open");
		},
	);
});
