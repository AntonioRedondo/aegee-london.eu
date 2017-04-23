o.notifyWhenLoaded(".intro__header");
o.notifyWhenLoaded(".intro__logo");

WebFont.load({
	google: {
		families: ["Roboto Slab:300,700", "Source Sans Pro:300,900"]
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
