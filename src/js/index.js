d.notifyWhenLoaded(".intro__cover");

WebFont.load({
	google: {
		families: ["Roboto Slab:300", "Source Sans Pro:300,900", "Bebas Neue:400"]
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
