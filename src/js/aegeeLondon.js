function init() { // eslint-disable-line no-unused-vars
	function isMobile() {
		return window.innerWidth < 810;
	}
	
	function getGap() {
		return isMobile() ? 80 : 300;
	}
	
	function setBodyHeight() {
		var height = d.calcClientHeightsSum("section.skrollr-deck") + getGap()*6;
		document.body.style.height = height + "px";
	}
	
	function showTopBarEntries() {
		var menuEntries = d.qsa(".top-bar__tab-container:nth-child(n+3)");
		menuEntries.forEach(function(entry, index) {
			entry.classList.add("top-bar__tab-container--in", "top-bar__tab-container--in" + (index + 1));
		});
	}
	
	var tabPosition = undefined;
	var isLineMoving = false;
	
	function moveLine(position, noBlocking) {
		if (!isLineMoving && ((position !== undefined && position !== tabPosition) || position === undefined)) {
			tabPosition = typeof position === "number" ? position : tabPosition;
			isLineMoving = noBlocking ? false : d.st(function() { isLineMoving = false; }, 500);
			var tabs = d.calcPositionsToViewport(".top-bar__tab");
			var line = d.gc("top-bar__line");
			line.style.width = tabs[tabPosition].width + "px";
			line.style.transform = "translate3d(" + tabs[tabPosition].left + "px, 0, 0)";
		}
	}
	
	
	
	d.st(function() { showTopBarEntries(); }, 2500);
	setBodyHeight();
	moveLine(0, true);
	
	
	
	// Sets up Skroller
	var gap = getGap();
	
	var offsetFunctions = {
		get d0() { return d.gi("intro").clientHeight; },
		get d0g() { return this.d0 + gap; },
		get d1() { return d.gi("who-we-are").clientHeight + this.d0g; },
		get d1g() { return  this.d1 + gap; },
		get d2() { return d.gi("activities").clientHeight + this.d1g; },
		get d2g() { return this.d2 + gap; },
		get d3() { return d.gi("the-board").clientHeight + this.d2g; },
		get d3g() { return this.d3 + gap; },
		get d4() { return d.gi("join-us").clientHeight + this.d3g; },
		get d4g() { return this.d4 + gap; },
		get d5() { return d.gi("faq").clientHeight + this.d4g; },
		get d5g() { return this.d5 + gap; }
	};
	
	var skrollrInstance = skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		mobileCheck: function() { return false; },
		keyframe: function(element, name, direction) {
			var up = direction === "up" ? -1 : 0;
			switch (name.slice(6)) {
				case "0": moveLine(1 + up); break;
				case "1": moveLine(2 + up); break;
				case "2": moveLine(3 + up); break;
				case "3": moveLine(4 + up); break;
				case "4": moveLine(5 + up); break;
				case "5": moveLine(6 + up); break;
			}
		}
	});
	
	// Sets up Skroller Menu
	skrollr.menu.init(skrollrInstance, {
		animate: true,
		easing: "outCubic",
		duration: 500,
		handleLink: function(link) {
			var linkText = link.href.split("#").pop();
			
			switch (linkText) {
				case "intro":		moveLine(0); return 0;
				case "who-we-are":	moveLine(1); return offsetFunctions.d0g;
				case "activities":	moveLine(2); return offsetFunctions.d1g;
				case "the-board":	moveLine(3); return offsetFunctions.d2g;
				case "join-us":		moveLine(4); return offsetFunctions.d3g;
				case "faq":			moveLine(5); return offsetFunctions.d4g;
				case "contact":		moveLine(6); return offsetFunctions.d5g;
			}
			
			var linkPosition = d.calcRelativePosition("body", "#" + linkText);
			
			if (linkPosition)
				return linkPosition.top - 70;
			
			history.replaceState(null, null, " "); // removes any invalid #hashstring
			return 0;
		}
	});
	
	
	
	// Sets the size FB iframes depending on desktop or mobile
	var width = isMobile() ? 320 : 500,
		height = isMobile() ? 500 : 560,
		width2 = isMobile() ? 320 : 500,
		height2 = isMobile() ? 400 : 500;
	
	d.gc("activities__fb-iframe").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAegeeLondon%2F&tabs=events&small_header=true&hide_cover=false&show_facepile=true&width=" + width + "&height=" + height;
	d.gc("contact__fb-iframe").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAegeeLondon%2F&tabs=messages&small_header=false&hide_cover=false&show_facepile=true&width=" + width2 + "&height=" + height2;
	
	
	
	// Loads the intro video if on desktop
	if (!isMobile() && (d.getOS() === "Windows" || d.getOS() === "macOS" || d.getOS() === "Linux")) {
		d.gc("intro__video").src = "//www.youtube.com/embed/7x8BCbo45qA?controls=0&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&origin=http://aegee-london.eu";
	}
	
	
	
	// Adds logic for 'scroll' and 'resize' events
	var scrolled = false,
		distance = offsetFunctions.d0/3.5,
		header = d.gc("top-bar");
	
	d.ae("scroll", function() {
		if (window.pageYOffset > distance && !scrolled) {
			header.classList.add("top-bar--in");
			scrolled = true;
		} else if (window.pageYOffset < distance && scrolled) {
			header.classList.remove("top-bar--in");
			scrolled = false;
		}
	});
	
	d.ae("resize", function() {
		d.st(function() {
			moveLine();
			setBodyHeight();
			skrollrInstance.refresh();
		}, 300);
		d.gc("top-bar").classList.remove("top-bar--open");
		d.gc("top-bar__three-bars-close-surface").classList.remove("top-bar__three-bars-close-surface--in");
	});
	
	d.ae("load", function() {
		setBodyHeight();
	});
	
	
	
	// Adapts the UI to remove intro animations if the URL points to a section
	var hash = window.location.hash;
	if ((hash && hash !== "#intro") || isMobile()) {
		d.gc("top-bar").classList.add("top-bar--in", "top-bar--in-no-delay");
		d.st(function() { d.gc("top-bar").classList.remove("top-bar--in-no-delay"); }, 1000);
		
		showTopBarEntries();
	}
	
	
	
	// Set ups the navigation top bar for mobile screens
	d.qsa(".top-bar__tab, .top-bar__three-bars, .top-bar__three-bars-close-surface").forEach(function(item) {
		item.addEventListener("click", function() {
			if (isMobile()) {
				d.gc("top-bar").classList.toggle("top-bar--open");
				d.gc("top-bar__three-bars-close-surface").classList.toggle("top-bar__three-bars-close-surface--in");
			}
		});
	});
	
	
	
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
	d.qs("a.top-bar__tab[href='#intro']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "intro"); });
	d.qs("a.top-bar__tab[href='#who-we-are']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "who-we-are"); });
	d.qs("a.top-bar__tab[href='#activities']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "activities"); });
	d.qs("a.top-bar__tab[href='#the-board']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "the-board"); });
	d.qs("a.top-bar__tab[href='#join-us']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "join-us"); });
	d.qs("a.top-bar__tab[href='#faq']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "faq"); });
	d.qs("a.top-bar__tab[href='#contact']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "contact"); });
	
	
	
	d.gc("body").classList.add("body--in");
}



// https://developers.google.com/youtube/player_parameters
// http://stackoverflow.com/questions/8869372/how-do-i-automatically-play-a-youtube-video-iframe-api-muted
// http://stackoverflow.com/questions/20501010/youtube-api-onplayerready-not-firing
function onYouTubeIframeAPIReady() { // eslint-disable-line no-unused-vars
	var player = new YT.Player("intro__video", {
		events: {
			onReady: function() {
				player.mute();
				player.playVideo();
			},
			onStateChange: function(e) {
				if (e.data === YT.PlayerState.PLAYING) {
					d.gc("intro__video-container").classList.add("intro__video-container--in");
					
					// The 'end' and 'loop' YouTube parameters didn't work
					var t = 0;
					var id = d.si(function() {
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
