$(window).on('load', function() {
  if ($('main').hasClass('home-page')) {

		var tlOne = new TimelineMax(),
				menuItems = $(".main-nav li"),
				missionLink = $('a[href="#mission"]').parent('li'),
				approachLink = $('a[href="#approach"]').parent('li'),
        talentLink = $('a[href="#talent"]').parent('li'),
		    controller = new ScrollMagic.Controller();	
		

		var missionLinkScene = new ScrollMagic.Scene({
			triggerElement: "#mission",
			reverse:true
		}).on('enter', function () {
        missionIn();
        addScrollClass();
    }).on('leave', function () {
        removeScrollClass();
    });

    var approachLinkScene = new ScrollMagic.Scene({
			triggerElement: "#approach",
			reverse:true
		}).on('enter', function () {
        approachIn();
    }).on('leave', function () {
        missionIn();
    });

    var talentLinkScene = new ScrollMagic.Scene({
      triggerElement: "#talent",
      reverse:true
    }).on('enter', function () {
        talentIn();
    }).on('leave', function () {
        approachIn();
    });

		// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
		controller.addScene([missionLinkScene, approachLinkScene, talentLinkScene]);
  }

  function missionIn() {
    // history.pushState(null, null, '#mission');
    menuItems.removeClass("active-menu");
    missionLink.addClass("active-menu");
  }

  function approachIn() {
    // history.pushState(null, null, '#approach');
    menuItems.removeClass("active-menu");
    approachLink.addClass("active-menu");
  }

  function talentIn() {
    // history.pushState(null, null, '#talent');
    menuItems.removeClass("active-menu");
    talentLink.addClass("active-menu");
  }

  function addScrollClass() {
    $(".header").addClass("scrolledHeader");
  }

  function removeScrollClass() {
    $(".header").removeClass("scrolledHeader");
  }
});
