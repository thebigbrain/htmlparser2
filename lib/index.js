import DomHandler from 'domhandler';
import ElementType from 'domelementtype';
import Parser from './Parser';
import Tokenizer from './Tokenizer';
import FeedHandler from './FeedHandler';
import Stream from './Stream';
import WritableStream from './WritableStream';
import ProxyHandler from './ProxyHandler';
import CollectingHandler from './CollectingHandler';

function defineProp(name, value){
	delete module.exports[name];
	module.exports[name] = value;
	return value;
}

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
	EVENTS: { /* Format: eventname: number of arguments */
		attribute: 2,
		cdatastart: 0,
		cdataend: 0,
		text: 1,
		processinginstruction: 2,
		comment: 1,
		commentend: 0,
		closetag: 1,
		opentag: 2,
		opentagname: 1,
		error: 1,
		end: 0
	}
};
