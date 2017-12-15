$(".mobileToggle").on('click', function() {

	var tl = new TimelineMax(),
			$this = $(this),
			fullHam = $(".mobileToggle"),
			fullMenu = $(".main-nav"),
			mainNavBack = $(".mainNavBack"),
			links = $(".main-nav li"),
			ham1 = $(".hamTop"),
			ham2 = $(".hamMid"),
			ham3 = $(".hamBot"),
			uniTime2 = 0.15;

	if ($this.hasClass("navOpen")) {
		$this.removeClass("navOpen");
		tl// .set($(".wrapper"), {height:"auto",overflow:"visible"})
			.to(fullMenu, 0.3, {x:"100%"}, "menuClose")
			.to(mainNavBack, 0.1, {x:"100%"}, "menuClose-=.2")
			.staggerTo(links, 0.3, {opacity:0, x:"20%"}, 0.03, "menuClose")
			.to(ham1, uniTime2, {rotation:0, y:0}, "menuClose")
			.to(ham2, uniTime2, {x:0, opacity:1}, "menuClose")
			.to(ham3, uniTime2, {rotation:0, y:0}, "menuClose");

	} else {
		$this.addClass("navOpen");
		tl
			// .set($(".wrapper"), {height:"100%", overflow:"hidden"})
			.set(links, {opacity:0, x:"20%"})
			.to(fullMenu, 0.3, {x:"0%"}, "menuOpen")
			.to(mainNavBack, 0.1, {x:"0%"}, "menuOpen+=.2")
			.staggerTo(links, 0.1, {opacity:1, x:"0%"}, 0.07, "menuOpen+0.03")
			.to(ham1, uniTime2, {rotation:227, y:9}, "menuOpen")
			.to(ham2, uniTime2, {x:5, opacity:0}, "menuOpen")
			.to(ham3, uniTime2, {rotation:-227, y:-9}, "menuOpen");
	}
});