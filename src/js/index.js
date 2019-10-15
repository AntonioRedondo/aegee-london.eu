require("../style/index.scss")

skrollr = require("skrollr")
require("skrollr-menu")
WebFont = require("webfontloader")

const d = require("./DOMTools.js")
const init = require("./aegeeLondon.js")

d.notifyWhenLoaded(".intro__cover");

WebFont.load({
	google: {
		families: ["Roboto Slab:300", "Source Sans Pro:300,900"]
	},
	typekit: {
		id: "bebas-neue",
		api: "//use.edgefonts.net"
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
