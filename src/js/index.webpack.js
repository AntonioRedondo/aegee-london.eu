const WebFont = require("webfontloader");

const d = require("./DOMTools.webpack.js");
const init = require("./main.webpack.js");

const css = require.context("../style", true, /.scss$/);
css.keys().forEach(css);

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
