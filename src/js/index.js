function init() {
	function isMobile() {
		return window.innerWidth < 810;
	}
	
	function getGap() {
		return isMobile() ? 80 : 300;
	}
	
	function setBodyHeight() {
		const height = d.calcClientHeightsSum("section.skrollr-deck") + getGap()*6;
		window.document.body.style.height = height + "px";
	}
	
	function showTopBarEntries() {
		const menuEntries = d.qsa(".top-bar__tab-container:nth-child(n+3)");
		menuEntries.forEach(function(entry, index) {
			entry.classList.add("top-bar__tab-container--in", "top-bar__tab-container--in" + (index + 1));
		});
	}
	
	let tabPosition = undefined;
	let isLineMoving = false;
	
	function moveLine(position, noBlocking) {
		if (!isLineMoving && ((position !== undefined && position !== tabPosition) || position === undefined)) {
			tabPosition = typeof position === "number" ? position : tabPosition;
			isLineMoving = noBlocking ? false : d.st(function() { isLineMoving = false; }, 500);
			const tabs = d.calcPositionsToViewport(".top-bar__tab");
			const line = d.gc("top-bar__line");
			line.style.width = tabs[tabPosition].width + "px";
			line.style.transform = "translate3d(" + tabs[tabPosition].left + "px, 0, 0)";
		}
	}
	
	
	
	// Sets up Skroller
	const gap = getGap();
	
	const offsetFunctions = {
		get d0()	{ return d.gi("intro").clientHeight; },
		get d0g()	{ return this.d0 + gap; },
		get d1()	{ return this.d0g + d.gi("who-we-are").clientHeight; },
		get d1g()	{ return this.d1 + gap; },
		get d2()	{ return this.d1g + d.gi("activities").clientHeight; },
		get d2g()	{ return this.d2 + gap; },
		get d3()	{ return d.gi("the-board").clientHeight + this.d2g; },
		get d3g()	{ return this.d3 + gap; },
		get d4()	{ return d.gi("join-us").clientHeight + this.d3g; },
		get d4g()	{ return this.d4 + gap; },
		get d5()	{ return d.gi("faq").clientHeight + this.d4g; },
		get d5g()	{ return this.d5 + gap; }
	};
	
	const skrollrInstance = skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		mobileCheck: function() { return false; },
		keyframe: function(element, name, direction) {
			const up = direction === "up" ? -1 : 0;
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
			const extraSpace = -100;
			const linkText = link.href.split("#").pop();
			const linkPositionActivities = d.calcRelativePosition("#activities", "#" + linkText);
			const linkPositionBoard = d.calcRelativePosition("#the-board", "#" + linkText);
			const linkPositionFaq = d.calcRelativePosition("#faq", "#" + linkText);
			
			switch (linkText) {
				case "intro":														moveLine(0); return 0;
				case "who-we-are":													moveLine(1); return offsetFunctions.d0g;
				case "activities":													moveLine(2); return offsetFunctions.d1g;
				case "activities-in-london":
				case "activities-around-europe":
				case "summer-universities":
				case "agoras":
				case "european-planning-meetings":
				case "network-meetings":
				case "training-courses":
				case "many-other-events":											moveLine(2); return offsetFunctions.d1g + linkPositionActivities.top + extraSpace;
				case "the-board":													moveLine(3); return offsetFunctions.d2g;
				case "become-member-board":
				case "former-boards":
				case "antennas-birth":
				case "previous-foundations":
				case "european-level":												moveLine(3); return offsetFunctions.d2g + linkPositionBoard.top + extraSpace;
				case "join-us":														moveLine(4); return offsetFunctions.d3g;
				case "faq":															moveLine(5); return offsetFunctions.d4g;
				case "how-old-can-i-be":
				case "do-i-need-to-be-university-student":
				case "can-i-join-aegee-london-even-if-i-dont-live-in-london":
				case "what-have-to-do-summer-universities-with-real-universities":
				case "when-do-you-organise-the-next-event":
				case "could-you-host-me":
				case "would-you-like-to-meet":
				case "which-social-networks-do-you-use":
				case "whats-the-legal-status-of-aegee-london":
				case "do-you-have-physical-offices":
				case "are-you-present-at-some-london-university":
				case "where-does-the-antenna-get-funds-from":
				case "what-are-the-funds-used-for":
				case "how-is-this-website-made":									moveLine(5); return offsetFunctions.d4g + linkPositionFaq.top + extraSpace;
				case "contact":														moveLine(6); return offsetFunctions.d5g;
			}
			
			window.history.replaceState(null, null, " "); // https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
			return 0;
		}
	});
	
	
	
	// Set ups the navigation top bar for mobile screens
	d.qsa(".top-bar__tab, .top-bar__three-bars, .top-bar__three-bars-close-surface").forEach(function(item) {
		item.addEventListener("click", function() {
			if (isMobile()) {
				d.gc("top-bar").classList.toggle("top-bar--open");
				d.gc("top-bar__three-bars-close-surface").classList.toggle("top-bar__three-bars-close-surface--in");
			}
		});
	});
	
	
	
	// Sets the size FB iframes depending on desktop or mobile
	const width = isMobile() ? 320 : 500,
		height = isMobile() ? 500 : 560,
		height2 = isMobile() ? 400 : 500;
	
	d.gc("activities__fb-iframe").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAegeeLondon%2F&tabs=events&small_header=true&hide_cover=false&show_facepile=true&width=" + width + "&height=" + height;
	d.gc("contact__fb-iframe").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAegeeLondon%2F&tabs=messages&small_header=false&hide_cover=false&show_facepile=true&width=" + width + "&height=" + height2;
	
	
	
	// Adapts the UI to remove intro animations if the URL points to a section
	const hash = window.location.hash;
	if ((hash && hash !== "#intro") || isMobile()) {
		showTopBarEntries();
	}
	
	
	
	// Loads the intro video if on desktop
	if (!isMobile() && (d.getOS() === "Windows" || d.getOS() === "macOS" || d.getOS() === "Linux")) {
		d.gc("intro__video").src = "https://www.youtube.com/embed/7x8BCbo45qA?&mute=1&controls=0&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&origin=https://aegee-london.eu";
	}
	
	
	
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
	d.qs("a.top-bar__tab[href='#intro']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "intro"); });
	d.qs("a.top-bar__tab[href='#who-we-are']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "who-we-are"); });
	d.qs("a.top-bar__tab[href='#activities']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "activities"); });
	d.qs("a.top-bar__tab[href='#the-board']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "the-board"); });
	d.qs("a.top-bar__tab[href='#join-us']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "join-us"); });
	d.qs("a.top-bar__tab[href='#faq']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "faq"); });
	d.qs("a.top-bar__tab[href='#contact']").addEventListener("click", function() { ga("send", "event", "Top bar link", "click", "contact"); });
	
	
	
	// Adds general event listeners
	let scrolled = false;
	const distance = offsetFunctions.d0/3.5;
	const header = d.gc("top-bar");
	
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
	
	
	
	d.st(function() { showTopBarEntries(); }, 1500);
	setBodyHeight();
	moveLine(0, true);
	d.gc("body").classList.add("body--in");
}



// https://developers.google.com/youtube/player_parameters
// https://stackoverflow.com/questions/7281765/youtube-iframe-embed-auto-play
// https://stackoverflow.com/questions/8869372/how-do-i-automatically-play-a-youtube-video-iframe-api-muted
// https://stackoverflow.com/questions/20501010/youtube-api-onplayerready-not-firing
function onYouTubeIframeAPIReady() { // eslint-disable-line no-unused-vars
	const player = new YT.Player("intro__video", {
		events: {
			onReady: function() {
				player.mute();
				player.playVideo();
			},
			onStateChange: function(e) {
				if (e.data === YT.PlayerState.PLAYING) {
					d.gc("intro__video-container").classList.add("intro__video-container--in");
					
					// The 'end' and 'loop' YouTube parameters didn't work
					let t = 0;
					const id = d.si(function() {
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



d.notifyWhenLoaded(".intro__cover");

async function loadFonts() {
	window.document.fonts.onloadingerror = (event) => {
		console.error(event); // eslint-disable-line no-console
		window.location.reload();
	};
	// https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400&family=Roboto+Slab:wght@300&family=Source+Sans+Pro:wght@300;900
	const fonts = await Promise.all([
		(new FontFace("Bebas Neue", "url(https://fonts.gstatic.com/s/bebasneue/v9/JTUSjIg69CK48gW7PXoo9WlhyyTh89Y.woff2)")).load(),
		(new FontFace("Roboto Slab", "url(https://fonts.gstatic.com/s/robotoslab/v24/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjo0oSmb2RlV9Su1cai.woff)")).load(),
		(new FontFace("Source Sans Pro", "url(https://fonts.gstatic.com/s/sourcesanspro/v21/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2)", { weight: "300" })).load(),
		(new FontFace("Source Sans Pro", "url(https://fonts.gstatic.com/s/sourcesanspro/v21/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlxdu3cOWxw.woff2)", { weight: "900" })).load()
	]);
	fonts?.forEach(font => window.document.fonts.add(font));
	window.document.fonts.ready.then(() => d.runWhenAllLoaded(init));
}
loadFonts();
