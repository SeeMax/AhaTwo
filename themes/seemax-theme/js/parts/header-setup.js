var contactBtn = $( ".main-nav li:contains('Contact')" ),
		// Get the URL from anotehr link
		realCTA = $('.mission-cta a').attr('href');

// Change the Style
contactBtn.addClass( "contact-button" );
// Add the URL from options via another link
contactBtn.find('a').attr('href', realCTA); 