// preloader
$(window).on("load", function () {
	$(".circle").fadeOut(1000);
	$(".message").fadeOut(1000);
});
// window scroll top
$(document).ready(function () {
	$(window).scrollTop(0);
});
// dropdown
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
// year
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;
// tabs
$(document).ready(function () {
	$("button#pills-profile-tab").click(function () {
		$(".freight").css("display", "contents");
		$(".map img").css("display", "block");
	});
	$("button#pills-home-tab").click(function () {
		$(".freight").css("display", "none");
		$(".map img").css("display", "none");
	});
});
