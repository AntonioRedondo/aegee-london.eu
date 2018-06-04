d.notifyWhenLoaded(".intro__header");
// d.notifyWhenLoaded(".intro__cover");

WebFont.load({
	google: {
		families: ["Roboto Slab:300,700", "Source Sans Pro:300,900"]
	},
	active: function() {
		d.runWhenAllLoaded(init);
	},
	inactive: function() {
		window.location.reload();
	},
	classes: false,
	timeout: 8000
});
