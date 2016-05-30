var md =require ('markdown-it');
var illuminate = require('illuminate-js');
var emoji = require('markdown-it-emoji');
var checkbox = require('markdown-it-checkbox');
var mark = require('markdown-it-mark');
var fn = require('markdown-it-footnote');


var mdOptions = {
	highlight: function (str, lang) {
		// if (lang && illuminate.getLanguage(lang)) {
			return illuminate.highlight(str, lang);
		// }

		return '';
	},
	linkify: true,
	typographer: true,
	quotes: ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'],
};

module.exports = md(mdOptions)
	.use(fn)
	.use(emoji)
	.use(checkbox)
	.use(mark);
