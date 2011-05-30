var sys = require('sys'),
	uuid = require('../lib/ossp_uuid');

console.log( 
	"version 1\n" +
	'  str: ' + uuid.generate( uuid.STR, uuid.V1 ) + "\n" + 
	'  siv: ' + uuid.generate( uuid.SIV, uuid.V1 ) + "\n" +
	'  bin: ' + sys.inspect( uuid.generate( uuid.BIN, uuid.V1 ) ) + "\n" +
	"  txt: \n" + uuid.generate( uuid.TXT, uuid.V1 ) );
console.log( 
	"version 3\n" +
	'  str: ' + uuid.generate( uuid.STR, uuid.V3, uuid.ns.url, 'http://example.com/' ) + "\n" + 
	'  siv: ' + uuid.generate( uuid.SIV, uuid.V3, uuid.ns.url, 'http://example.com/' ) + "\n" + 
	'  bin: ' + sys.inspect( uuid.generate( uuid.BIN, uuid.V3, uuid.ns.url, 'http://example.com/' ) ) + "\n" + 
	'  txt: ' + uuid.generate( uuid.TXT, uuid.V3, uuid.ns.url, 'http://example.com/' ) );
console.log( 
	"version 4\n" +
	'  str: ' + uuid.generate( uuid.STR, uuid.V4 ) + "\n" + 
	'  siv: ' + uuid.generate( uuid.SIV, uuid.V4 ) + "\n" + 
	'  bin: ' + sys.inspect( uuid.generate( uuid.BIN, uuid.V4 ) ) + "\n" + 
	"  txt: \n" + uuid.generate( uuid.TXT, uuid.V4 ) );
console.log( 
	"version 5\n" +
	'  str: ' + uuid.generate( uuid.STR, uuid.V5, uuid.ns.url, 'http://example.com/' ) + "\n" +
	'  siv: ' + uuid.generate( uuid.SIV, uuid.V5, uuid.ns.url, 'http://example.com/' ) + "\n" + 
	'  bin: ' + sys.inspect( uuid.generate( uuid.BIN, uuid.V5, uuid.ns.url, 'http://example.com/' ) ) + "\n" + 
	"  txt: \n" + uuid.generate( uuid.TXT, uuid.V5, uuid.ns.url, 'http://example.com/' ) );
