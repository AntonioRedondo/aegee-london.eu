
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
					var t = 0;
					var id = o.si(function() {
						player.seekTo(0);
						if (t===2) {
							player.pauseVideo();
							clearInterval(id);
						}
						++t;
					}, 20000);
				}
			}
		}
	});
}





function setMargin(breakpointMobile) {
	var margin = 300;
	if (window.innerWidth < breakpointMobile)
		margin = 80;
	return margin;
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
	var breakpointMobile = 810;
	var margin = setMargin(breakpointMobile);
	var gap = -margin;
	
	o.to(function() { showTopBarEntries(); }, 2500);
	o.to(function() { setBodyHeight(o.calcTotalClientHeight("section.skrollr-deck") + margin*6); }, 2500); // Sometimes Firefox 51 needs some time to calculate the height
	setBodyHeight(o.calcTotalClientHeight("section.skrollr-deck") + margin*6);
	moveLine();
	
	
	
	
	// Sets up Skroller
	var offsetFunctions = {
			get d0() { return o.gi("intro").clientHeight + margin; },
			get d0g() { return gap + this.d0; },
			get d1() { return o.gi("who-we-are").clientHeight + margin + this.d0; },
			get d1g() { return gap + this.d1; },
			get d2() { return o.gi("activities").clientHeight + margin + this.d1; },
			get d2g() { return gap + this.d2; },
			get d3() { return o.gi("the-board").clientHeight + margin + this.d2; },
			get d3g() { return gap + this.d3; },
			get d4() { return o.gi("join-us").clientHeight + margin + this.d3; },
			get d4g() { return gap + this.d4; },
			get d5() { return o.gi("faq").clientHeight + margin + this.d4; },
			get d5g() { return gap + this.d5; },
			get d6() { return o.gi("contact").clientHeight + margin + this.d5; }
		};
		
	var skrollrInstance = skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		mobileCheck: function() { return false; },
		keyframe: function(element, name, direction) {
			console.log("keyframe:");
			console.log(name);
			// console.log(name.slice(6));
			//if (!this.isAnimatingTo()) {
				var extra = 0;
				if (direction === "up")
					--extra;
				switch (name.slice(6)) {
					case "0g": moveLine(1 + extra); break;
					case "1g": moveLine(2 + extra); break;
					case "2g": moveLine(3 + extra); break;
					case "3g": moveLine(4 + extra); break;
					case "4g": moveLine(5 + extra); break;
					case "5g": moveLine(6 + extra);
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
			var offset = 600;
			
			if (window.innerWidth < breakpointMobile)
				offset = 350;
				
			if (linkPosition)
				return offsetFunctions.d4 + linkPosition.top - offset;
			
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
	
	
	
	// Loads the intro video if on desktop
	if (window.innerWidth > breakpointMobile) {
		o.gc("intro__video").src = "//www.youtube.com/embed/7x8BCbo45qA?controls=0&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&origin=http://aegee-london.eu";
	}
	
	
	
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
		margin = setMargin(breakpointMobile);
		setBodyHeight(o.calcTotalClientHeight("section.skrollr-deck") + margin*6);
		o.to(function() { moveLine(); }, 500);
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
	
	
	
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
	o.qs("a.top-bar__tab[href='#intro']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "intro"); });
	o.qs("a.top-bar__tab[href='#who-we-are']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "who-we-are"); });
	o.qs("a.top-bar__tab[href='#activities']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "activities"); });
	o.qs("a.top-bar__tab[href='#the-board']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "the-board"); });
	o.qs("a.top-bar__tab[href='#join-us']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "join-us"); });
	o.qs("a.top-bar__tab[href='#faq']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "faq"); });
	o.qs("a.top-bar__tab[href='#contact']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "contact"); });
	
	
	
	o.gc("body").classList.add("body--in");
}





o.notifyWhenLoaded(".intro__header");
o.notifyWhenLoaded(".intro__logo");

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
