var util = require('util'),
    uuid = require('../');

console.log( 
    "version 1\n" +
    '  str: ' + uuid.generate( uuid.STR, uuid.v1 ) + "\n" + 
    '  siv: ' + uuid.generate( uuid.SIV, uuid.v1 ) + "\n" +
    '  bin: ' + util.inspect( uuid.generate( uuid.BIN, uuid.v1 ) ) + "\n" +
    "  txt: \n" + uuid.generate( uuid.TXT, uuid.v1 ) );
console.log( 
    "version 3\n" +
    '  str: ' + uuid.generate( uuid.STR, uuid.v3, uuid.ns.url, 'http://example.com/' ) + "\n" + 
    '  siv: ' + uuid.generate( uuid.SIV, uuid.v3, uuid.ns.url, 'http://example.com/' ) + "\n" + 
    '  bin: ' + util.inspect( uuid.generate( uuid.BIN, uuid.v3, uuid.ns.url, 'http://example.com/' ) ) + "\n" + 
    '  txt: ' + uuid.generate( uuid.TXT, uuid.v3, uuid.ns.url, 'http://example.com/' ) );
console.log( 
    "version 4\n" +
    '  str: ' + uuid.generate( uuid.STR, uuid.v4 ) + "\n" + 
    '  siv: ' + uuid.generate( uuid.SIV, uuid.v4 ) + "\n" + 
    '  bin: ' + util.inspect( uuid.generate( uuid.BIN, uuid.v4 ) ) + "\n" + 
    "  txt: \n" + uuid.generate( uuid.TXT, uuid.v4 ) );
console.log( 
    "version 5\n" +
    '  str: ' + uuid.generate( uuid.STR, uuid.v5, uuid.ns.url, 'http://example.com/' ) + "\n" +
    '  siv: ' + uuid.generate( uuid.SIV, uuid.v5, uuid.ns.url, 'http://example.com/' ) + "\n" + 
    '  bin: ' + util.inspect( uuid.generate( uuid.BIN, uuid.v5, uuid.ns.url, 'http://example.com/' ) ) + "\n" + 
    "  txt: \n" + uuid.generate( uuid.TXT, uuid.v5, uuid.ns.url, 'http://example.com/' ) );
