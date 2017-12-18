(function ($, root, undefined) {$(function () {
'use strict';
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

var contactBtn = $( ".main-nav li:contains('Contact')" ),
		// Get the URL from anotehr link
		realCTA = $('.mission-cta a').attr('href');

// Change the Style
contactBtn.addClass( "contact-button" );
// Add the URL from options via another link
contactBtn.find('a').attr('href', realCTA);

$(window).on('load', function() {


	if (screen.width >= 1025){

		var setupTL = new TimelineMax(),
				loadTL = new TimelineMax({delay:0.3}),
				approachHeroTL = new TimelineMax(),
				talentHeroTL = new TimelineMax(),
				missionIconTL = new TimelineMax(),
				missionIntroTL = new TimelineMax(),
				approachTL = new TimelineMax(),
				talentTL = new TimelineMax(),
				employeeTL = new TimelineMax(),
				advisorTL = new TimelineMax(),
				footerTL = new TimelineMax(),
				// HEADER
				headerDivs = $(".header-inner-wrap div"),
				// HEROS
				missionHeroH1 = $(".mission-hero-section h1"),
				missionHerohr1 = $(".mission-hero-section hr:nth-of-type(1)"),
				missionHerohr2 = $(".mission-hero-section hr:nth-of-type(2)"),
				approachHerohr1 = $(".approach-hero-section hr:nth-of-type(1)"),
				approachHerohr2 = $(".approach-hero-section hr:nth-of-type(2)"),
				approachHeroCTA = $(".approach-hero-section .hero-cta"),
				talentHerohr1 = $(".talent-hero-section hr:nth-of-type(1)"),
				talentHerohr2 = $(".talent-hero-section hr:nth-of-type(2)"),
				approachHeroH2 = $(".approach-hero-section h2"),
				talentHeroH2 = $(".talent-hero-section h2"),
				missionHeroH1Height = $(".mission-hero-section h1").height(),
				approachHeroH2Height = $(".approach-hero-section h2").height(),
				talentHeroH2Height = $(".talent-hero-section h2").height(),
				// MISSION
				missionIntro= $(".mission-intro"),
				missionIntroHeight= $(".mission-intro").height(),
				missionintroHR = $(".mission-intro hr"),
				missionIntroH2 = $(".mission-intro h2"),
				missionIntroCopy = $(".mission-intro-copy"),
				missionIntroCopyHeight = $(".mission-intro-copy").height(),
				missionCTA = $(".mission-cta"),
				missionIcons = $(".mission-icons"),
				oneMissionIcon = $(".single-mission-icon"),
				missionIconImgBorder = $(".mission-icon-image"),
				missionIconImg = $(".mission-icon-image img"), 
				missionIconLine = $(".mission-icon-image hr"),
				missionIconLabel = $(".mission-icon-label"),
				// APPRAOCH
				approachSection = $(".approach-section"),
				approachShape = $(".approach-section .background-shape"),
				approachIntro = $(".approach-intro"),
				approachH2 = $(".approach-intro h2"),
				approachHR = $(".approach-intro hr"),
				approachP = $(".approach-intro p"),
				serviceListing = $(".services-listing"),
				serviceHeader = $(".service-list-header"),
				serviceImage = $(".services-image"),
				serviceH4 = $(".service-list-header h4"),
				serviceSingle = $(".single-service"),
				serviceSpan = $(".single-service span"),
				serviceWords = $(".single-service .service-words"),
				// TALENT
				talentH2 = $(".talent-intro h2"),
				talentHR = $(".talent-intro hr"),
				talentBody = $(".talent-body-copy span"),
				talentBodyHeight = $(".talent-body-copy").height(),
				employeeImageCircle = $(".employee-image-container"),
				employeeImg = $(".employee-image"),
				employeeH3 = $(".single-employee-container h3"),
				employeeH4 = $(".single-employee-container h4"),
				employeeBio = $(".employee-bio"),
				// ADVISORS
				advisorSectionTitle = $(".advisor-section-title"),
				advisorH2 = $(".advisor-section-title h2"),
				advisorCircle = $(".background-circle"),
				advisorImgCircle = $(".advisor-image-container"),
				advisorImg = $(".advisor-image"),
				advisorWords = $(".advisor-words"),
				advisorH4 = $(".advisor-words h4"),
				advisorTitle = $(".advisor-title"),
				// FOOTER
				footerColumn = $(".footer-column"),
				footerCoopyright = $(".footer-copyright"),
	      // Universal Variables
	      uniTime1 = 1,
	      uniTime2 = 0.3,
	      uniEase1 = Power4.easeOut,
	      uniEase2 = Power4.easeIn,
	      uniBackOut = Back.easeOut.config(1),
	      uniBackIn = Back.easeIn.config(1.7);

    setupTL.set(headerDivs, {y:-60, opacity:0})
    			 .set([missionHeroH1, approachHeroH2, talentHeroH2], {height:0, opacity:0, overflow:'hidden'})
    			 .set([missionHerohr1, approachHerohr1, talentHerohr1], {y:39, opacity:1, rotation:90, transformOrigin:"50% 50%"})
    			 .set([missionHerohr2, approachHerohr2, talentHerohr2], {y:-39, opacity:1, rotation:-180, transformOrigin:"50% 50%"})
    			 .set(approachHeroCTA, {y:30, opacity:0})
    			 .set(missionIconImgBorder, {scale:1.1, opacity:0})
    			 .set(missionIconLine, {height:0})
    			 .set(missionIconLabel, {opacity:0, x:-10})
    			 .set(missionIntro, {y:100})
    			 .set(missionintroHR, {height:0})
    			 .set(missionIntroH2, {y:14, opacity:0})
    			 .set(missionIntroCopy, {y:-14, opacity:0})
    			 .set(approachShape, {opacity:1, x:"-100%"})
					 .set(approachH2, {opacity:0, y:14})
					 .set(approachHR, {width:'0%'})
					 .set(approachP, {opacity:0, y:-14})
    			 .set(serviceImage, {scale:1.1, opacity:0})
    			 .set(serviceSpan, {scale:1.1, opacity:0})
					 .set(serviceWords, {x:-10, opacity:0})
					 .set(serviceH4, {x:-10, opacity:0})
					 .set(talentH2, {x:10, opacity:0})
					 .set(talentHR, {height:0})
					 .set(talentBody, {x:-10, opacity:0})
					 .set(employeeImageCircle, {border:"1px solid white"})
					 .set(employeeImg, {rotationY:90, transformOrigin:"50% 50%", transformPerspective:200})
					 .set(employeeH3, {y:-10, opacity:0})
					 .set(employeeH4, {y:-10, opacity:0})
					 .set(employeeBio, {y:10, opacity:0})
					 .set(advisorH2, {x:-10, opacity:0})
					 .set(advisorCircle, {x:-500, opacity:0})
					 .set(advisorImgCircle, {border:"1px solid white", x:10})
					 .set(advisorImg, {scale:0.9, opacity:0})
					 .set(advisorH4, {opacity:0, x:-10})
					 .set(advisorTitle, {opacity:0, x:-10})
    			 .set(footerColumn, {y:60, opacity:0})
    			 .set(footerCoopyright, {opacity:0});

    loadTL.staggerTo(headerDivs, 0.5, {y:0, opacity:1, ease:uniBackOut}, 0.1)
    			.to([missionHerohr1,missionHerohr2], 0.2, {y:0, opacity:0.5, rotation:0, transformOrigin:"50% 50%"}, "lineIn")
    			.to(missionHeroH1, 0.2, {height:missionHeroH1Height, opacity:1, ease:uniBackOut ,onComplete: function() {
    				new TimelineMax().set(missionHeroH1, {overflow:'visible'});}
    			}, "lineIn");

    approachHeroTL.to([approachHerohr1,approachHerohr2], 0.2, {y:0, opacity:0.5, rotation:0, transformOrigin:"50% 50%"}, "lineIn")
    							.to(approachHeroCTA, 0.2, {y:0, opacity:1})
    							.to(approachHeroH2, 0.2, {height:approachHeroH2Height, opacity:1, ease:uniBackOut ,onComplete: function() {
			new TimelineMax().set(approachHeroH2, {overflow:'visible'});}
		}, "lineIn");

		talentHeroTL.to([talentHerohr1,talentHerohr2], 0.2, {y:0, opacity:0.5, rotation:0, transformOrigin:"50% 50%"}, "lineIn")
								.to(talentHeroH2, 0.2, {height:talentHeroH2Height, opacity:1, ease:uniBackOut ,onComplete: function() {
			new TimelineMax().set(talentHeroH2, {overflow:'visible'});}
		}, "lineIn");

		
		missionIntroTL.to(missionIntro, 0.7, {y:-90,ease:uniBackOut},"introIn")
    			 				.to(missionintroHR, 0.45, {height:missionIntroCopyHeight}, "introIn+=0.6")
    			 				.to(missionIntroH2, 0.5, {y:0, opacity:1}, "introIn+=0.6")
    			 				.to(missionIntroCopy, 0.5, {y:0, opacity:1}, "introIn+=0.6")
    			 				.staggerTo(missionIconImgBorder, 0.3, {scale:1, opacity:1,ease:uniBackOut}, 0.4, "iconIn")
								 	.staggerTo(missionIconLine, 0.2, {height:31}, 0.5, "iconIn+=0.2")
								 	.staggerTo(missionIconLabel, 0.2, {opacity:1, x:0,ease:uniBackOut}, 0.4, "iconIn");
		
		approachTL.to(approachShape, 0.3, {opacity:0.1}, "introInA")
							.to(approachShape, 0.6, {x:"0%"}, "introInA")
							.to(approachHR, 0.3, {width:'70%'}, "introInB")
						  .to(approachH2, 0.3, {opacity:1, y:0}, "introInB+=.15")
						  .to(approachP, 0.3, {opacity:1, y:0}, "introInB+=.15")
							.to(serviceImage, 0.3, {scale:1, opacity:1, ease:uniBackOut}, "headerIn")
							.to(serviceH4, 0.3, {x:0, opacity:1, ease:uniBackOut}, "headerIn+=0.2")
							.staggerTo(serviceSpan, 0.3, {scale:1, opacity:1, ease:uniBackOut},0.1, "listIn" )
							.staggerTo(serviceWords, 0.3, {x:0, opacity:1, ease:uniBackOut},0.1, "listIn" );

		talentTL.to(talentHR, 0.25, {height:talentBodyHeight}, "talentIn")
						.to(talentH2, 0.4, {x:0, opacity:1, ease:uniBackOut}, "talentIn+=.2")
					  .to(talentBody, 0.4, {x:0, opacity:1, ease:uniBackOut}, "talentIn+=.2");

		employeeTL.to(employeeImageCircle, 0.3, {border:"1px solid #6CC069"}, "bioInA")
					  .to(employeeImg, 0.3, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200}, "bioInA")
					  .to(employeeH3, 0.3, {y:0, opacity:1}, "bioInB")
					  .to(employeeH4, 0.3, {y:0, opacity:1}, "bioInB")
					  .to(employeeBio, 0.3, {y:0, opacity:1}, "bioInB");
		
		advisorTL.to(advisorCircle, 0.3, {x:0, opacity:0.1}, "AdisorInA")
						 .to(advisorH2, 0.3, {x:0, opacity:1}, "AdisorInA")
						 .to(advisorImgCircle, 0.3, {border:"1px solid #6CC069", x:0}, "AdisorInB")
						 .to(advisorImg, 0.3, {scale:1, opacity:1}, 0.1, "AdisorInB")
						 .to(advisorH4, 0.3, {opacity:1, x:0}, 0.1, "AdisorInB")
						 .to(advisorTitle, 0.3, {opacity:1, x:0}, 0.1, "AdisorInB");
						 	
							
    				
		footerTL.staggerTo(footerColumn, 0.5, {y:0, opacity:1, ease:uniBackOut}, 0.1)
						.to(footerCoopyright, 0.3, {opacity:1}, "-=0.3");


		var controller = new ScrollMagic.Controller();	

		var missionScene = new ScrollMagic.Scene({
			triggerElement: ".mission-section",
			offset:-150,
			reverse: false
		}).setTween([missionIconTL, missionIntroTL]);

		var approachHeroScene = new ScrollMagic.Scene({
			triggerElement: ".approach-hero-section",
			reverse: false
		}).setTween(approachHeroTL);

		var appraochScene = new ScrollMagic.Scene({
			triggerElement: ".approach-section",
			offset:-100,
			reverse: false
		}).setTween(approachTL);

		var talentHeroScene = new ScrollMagic.Scene({
			triggerElement: ".talent-hero-section",
			reverse: false
		}).setTween(talentHeroTL);

		var talentScene = new ScrollMagic.Scene({
			triggerElement: ".talent-section",
			offset:-100,
			reverse: false
		}).setTween(talentTL);

		var employeeScene = new ScrollMagic.Scene({
			triggerElement: ".employee-section",
			offset:-100,
			reverse: false
		}).setTween(employeeTL);

		var advisorScene = new ScrollMagic.Scene({
			triggerElement: ".advisors-section",
			offset:-100,
			reverse: false
		}).setTween(advisorTL);

		var footerScene = new ScrollMagic.Scene({
			triggerElement: ".footer-copyright",
			triggerHook: 'onEnter',
			offset:-50,
			reverse: false,
		}).setTween(footerTL);

		// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
		controller.addScene([approachHeroScene, talentHeroScene, missionScene, appraochScene, talentScene, employeeScene, advisorScene, footerScene]);
	}	
});

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

$(window).on('load', function(){
	$('#preloader').fadeOut('slow',function(){
		$(this).remove();
	});
});

});})(jQuery, this);
