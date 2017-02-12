
function showTopBarEntries() {
	var menuEntries = o.qsa(".top-bar__tab-container:nth-child(n+3)");
	menuEntries.forEach(function(e, i) {
		e.classList.add("top-bar__tab-container--in");
		e.classList.add("top-bar__tab-container--in" + (i + 1));
	});
}





// https://developers.google.com/youtube/player_parameters
// http://stackoverflow.com/questions/8869372/how-do-i-automatically-play-a-youtube-video-iframe-api-muted
// http://stackoverflow.com/questions/20501010/youtube-api-onplayerready-not-firing
function onYouTubeIframeAPIReady() {
	var player = new YT.Player("intro__video", {
		events: {
			onReady: function() {
				player.mute();
				player.playVideo();
			},
			onStateChange: function(e) {
				if (e.data === YT.PlayerState.PLAYING) {
					showTopBarEntries();
					o.gc("intro__video").classList.add("intro__video--in");
					
					// The 'end' and 'loop' YouTube parameters didn't work
					o.si(function() { player.seekTo(0); }, 20000);
				}
			}
		}
	});
}





function setBodyHeight(height) {
	document.body.style.height = height + "px";
}





function moveLine(position) {
	var hash = window.location.hash;
	if (position === undefined && hash) {
		switch (hash.slice(1)) {
			case "intro":		position = 0; break;
			case "who-we-are":	position = 1; break;
			case "activities":	position = 2; break;
			case "the-board":	position = 3; break;
			case "join-us":		position = 4; break;
			case "faq":			position = 5; break;
			case "contact":		position = 6; break;
			default:			position = 5;
		}
	} else if (position === undefined) {
		position = 0;
	}
	
	var topBarPositions = o.calcRelativePositions(".top-bar__tab");
	var line = o.gc("top-bar__line");
	line.style.width = topBarPositions[position].width + "px";
	line.style.transform = "translate3d(" + topBarPositions[position].left + "px, 0, 0)";
}





function init() {
	o.to(function() { showTopBarEntries(); }, 3000);
	setBodyHeight(o.calcTotalHeight("section.skrollr-deck"));
	moveLine();
	
	var breakpointMobile = 810;
	
	
	
	// Sets up Skroller
	var gap = 300;
	var offsetFunctions = {
			get d0() { return o.gi("intro").scrollHeight; },
			get d0g() { return gap + this.d0; },
			get d1() { return o.gi("who-we-are").scrollHeight + this.d0; },
			get d1g() { return gap + this.d1; },
			get d2() { return o.gi("activities").scrollHeight + this.d1; },
			get d2g() { return gap + this.d2; },
			get d3() { return o.gi("the-board").scrollHeight + this.d2; },
			get d3g() { return gap + this.d3; },
			get d4() { return o.gi("join-us").scrollHeight + this.d3; },
			get d4g() { return gap + this.d4; },
			get d5() { return o.gi("faq").scrollHeight + this.d4; },
			get d5g() { return gap + this.d5; },
			get d6() { return o.gi("contact").scrollHeight + this.d5; }
		};
		
	var skrollrInstance = skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		keyframe: function(element, name, direction) {
			//if (!this.isAnimatingTo()) {
				var extra = 0;
				if (direction === "up")
					--extra;
				switch (name.slice(6)) {
					case "0": moveLine(1 + extra); break;
					case "1": moveLine(2 + extra); break;
					case "2": moveLine(3 + extra); break;
					case "3": moveLine(4 + extra); break;
					case "4": moveLine(5 + extra); break;
					case "5": moveLine(6 + extra);
				}
			//}
		}
	});
	
	// Sets up Skroller Menu
	skrollr.menu.init(skrollrInstance, {
		animate: true,
		easing: "outCubic",
		duration: 500,
		handleLink: function(link) {
			var extra = 1;
			var linkText = link.href.split("#").pop();
			switch (linkText) {
				case "intro":		return 0;
				case "who-we-are":	return offsetFunctions.d0 + extra;
				case "activities":	return offsetFunctions.d1 + extra;
				case "the-board":	return offsetFunctions.d2 + extra;
				case "join-us":		return offsetFunctions.d3 + extra;
				case "faq":			return offsetFunctions.d4 + extra;
				case "contact":		return offsetFunctions.d5 + extra;
			}
			
			var linkPosition = o.calcAbsolutePosition("#faq", "#" + linkText);
			if (linkPosition)
				return offsetFunctions.d4 + linkPosition.top - 650;
			
			return 0;
		}
	});
	
	
	
	// Sets the size FB iframes depending on desktop or mobile
	var width = 500,
		height = 560,
		width2 = 500,
		height2 = 500;
		
	if (window.innerWidth < breakpointMobile) {
		width = 320;
		height = 500;
		width2 = 320;
		height2 = 400;
	}
	
	o.gc("activities__fb-iframe").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAegeeLondon%2F&tabs=events&small_header=true&hide_cover=false&show_facepile=true&width=" + width + "&height=" + height;
	o.gc("contact__fb-iframe").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAegeeLondon%2F&tabs=messages&small_header=false&hide_cover=false&show_facepile=true&width=" + width2 + "&height=" + height2;
	
	
	
	// Adds logic for 'scroll' and 'resize' events
	var scrolled = false,
		distance = offsetFunctions.d0/3.5,
		header = o.gc("top-bar");
	
	o.ae("scroll", function() {
		if (window.pageYOffset > distance && !scrolled) {
			header.classList.add("top-bar--in");
			scrolled = true;
		} else if (window.pageYOffset < distance && scrolled) {
			header.classList.remove("top-bar--in");
			scrolled = false;
		}
	});
	
	o.ae("resize", function() {
		setBodyHeight(o.calcTotalHeight("section.skrollr-deck"));
		moveLine();
	});
	
	
	
	// Adapts the UI to remove intro animations if the URL points to a section 
	var hash = window.location.hash;
	if ((hash && hash !== "#intro") ||
			 window.innerWidth < breakpointMobile) {
		o.gc("top-bar").classList.add("top-bar--in");
		o.gc("top-bar").classList.add("top-bar--in2");
		o.to(function() { o.gc("top-bar").classList.remove("top-bar--in2"); }, 1000);
		
		showTopBarEntries();
		
		o.to(function() { moveLine(); }, 500);
	}
	
	
	
	if (window.innerWidth < breakpointMobile) {
		// Adapts the navigation top bar for mobile screens
		o.gca("top-bar__tab").forEach(function(i) {
			i.addEventListener("click", function(e) {
				o.gc("top-bar").classList.remove("top-bar--open");
				o.gc("top-bar__three-bars-close").classList.remove("top-bar__three-bars-close--in");
			});
		});
		o.gc("top-bar__three-bars").addEventListener("click", function(e) {
			o.gc("top-bar").classList.toggle("top-bar--open");
			o.gc("top-bar__three-bars-close").classList.add("top-bar__three-bars-close--in");
		});
		o.gc("top-bar__three-bars-close").addEventListener("click", function(e) {
			o.gc("top-bar").classList.remove("top-bar--open");
			o.gc("top-bar__three-bars-close").classList.remove("top-bar__three-bars-close--in");
		});
	} else {
		// loads the intro video if on desktop
		o.gc("intro__video").src = "http://www.youtube.com/embed/7x8BCbo45qA?controls=0&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&origin=http://localhost:3000";
	}
	
	
	
	o.gc("body").classList.add("body--in");
}





o.notifyWhenLoaded(".intro__header");
o.notifyWhenLoaded(".top-bar__logo");

WebFont.load({
	google: {
		families: ["Roboto Slab:300,700", "Open Sans:300,800"]
	},
	active: function() {
		o.runWhenAllLoaded(init);
	},
	inactive: function() {
		window.location.reload();
	},
	classes: false,
	timeout: 8000
});
