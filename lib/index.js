import global from './global';
import ElementType from 'domelementtype';
import DomHandler from 'domhandler';
import DomUtils from 'domutils';
import Parser from './Parser';
import Tokenizer from './Tokenizer';
import FeedHandler from './FeedHandler';
import Stream from './Stream';
import WritableStream from './WritableStream';
import ProxyHandler from './ProxyHandler';
import CollectingHandler from './CollectingHandler';
import EVENTS from './events';

export default {
	Parser,
	Tokenizer,
	ElementType,
	DomHandler,
	FeedHandler,
	Stream,
	WritableStream,
	ProxyHandler,
	DomUtils,
	CollectingHandler,
	// For legacy support
	DefaultHandler: DomHandler,
	RssHandler: FeedHandler,
	//helper methods
	parseDOM: function(data, options){
		var handler = new DomHandler(options);
		new Parser(handler, options).end(data);
		return handler.dom;
	},
	parseFeed: function(feed, options){
		var handler = new module.exports.FeedHandler(options);
		new Parser(handler, options).end(feed);
		return handler.dom;
	},
	createDomStream: function(cb, options, elementCb){
		var handler = new DomHandler(cb, options, elementCb);
		return new Parser(handler, options);
	},
	// List of all events that the parser emits
	EVENTS
};
