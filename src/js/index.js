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
