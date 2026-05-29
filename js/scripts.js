/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/

$(document).on("click", ".chooser", function () {
	$(this).closest(".row").find(".chooser")
		.removeClass("text-white bg-crimson")
		.addClass("text-dark")

	$(this).removeClass("text-dark bg-dark").addClass("text-white bg-crimson")
});

$(document).on("click", ".btn-switch-deliver", function () {
	if ( $(".btn-switch-receiver").html() === "Download" )
		$(".btn-switch-receiver").html("Contact Us")
	else
		$(".btn-switch-receiver").html("Download")
});
