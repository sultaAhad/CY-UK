// preloader
$(window).on("load", function () {
	$(".circle").fadeOut(1000);
	$(".message").fadeOut(1000);
});
$(document).ready(function () {
	$(window).scrollTop(0);
});
// dropdown
document.addEventListener("DOMContentLoaded", function () {
	/////// Prevent closing from click inside dropdown
	document.querySelectorAll(".dropdown-menu").forEach(function (element) {
		element.addEventListener("click", function (e) {
			e.stopPropagation();
		});
	});
});
// year
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;
// tabs
$(document).ready(function () {
	$("button#pills-profile-tab").click(function () {
		$(".freight").css("display", "contents");
		$(".map svg").css("display", "block");
	});
	$("button#pills-home-tab").click(function () {
		$(".freight").css("display", "none");
		$(".map svg").css("display", "none");
	});
});
// slider
$(document).ready(function () {
	$(".slider-quantity").slick({
		centerMode: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
		adaptiveHeight: true,
		arrows: false,
		centerPadding: "20px",
		focusOnSelect: true,
		prevArrow: false,
		nextArrow: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 1,
				},
			},
		],
	});
});
jQuery(".slider-quantity .slick-track").addClass("removeTransform");

jQuery(".slider-quantity .slick-slide").click(function () {
	var getid = jQuery(this).data("slick-index");

	if (getid > 3) {
		jQuery(".slider-quantity .slick-track").removeClass("removeTransform");
	} else {
		jQuery(".slider-quantity .slick-track").addClass("removeTransform");
	}
});
$(document).ready(function () {
	$(".slider-review-wrapper").slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		playduration: 500,
		focusOnSelect: true,
		prevArrow: false,
		nextArrow: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 1,
				},
			},
		],
	});
});
jQuery(document).ready(function ($) {
	$(".heading-slider").slick({
		speed: 7000,
		autoplay: true,
		autoplaySpeed: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		pauseOnHover: true,
		swipeToSlide: true,
	});
});
