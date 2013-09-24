
//
// FEATURED / LATEST
//

function swapFeaturedLatest() {
	$("#featuredLayers").toggle();
	$("#latestLayers").toggle();
	
	$("#featuredMaps").toggle();
	$("#latestMaps").toggle();
	
	$("#enableLatestButton").toggleClass("active");
	$("#enableFeaturedButton").toggleClass("active");
}

// About

function showAbout() {
	$("#mainIntroText").slideToggle();
}
