// Service Menu Buttons

$(".clickable").click(function (event) {
	id = $(this).attr("id");
	$(".clickable").removeClass("button-color");
	$(this).addClass("button-color");
	$(".service-menu").removeClass("menu-active");
	$(".service-menu[data-name = " + id + "]").addClass("menu-active");
});
