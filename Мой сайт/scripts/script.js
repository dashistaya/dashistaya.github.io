$(".menu-toggle").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});