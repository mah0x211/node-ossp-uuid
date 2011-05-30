var uuid = require('../lib/ossp_uuid');

console.log( uuid );
console.log( uuid.version() );
console.log( 'v1' );
console.log( uuid.generate( uuid.fmt.STR, uuid.V1 ) );
console.log( uuid.generate( uuid.fmt.TXT, uuid.V1 ) );
console.log( 'v3' );
console.log( uuid.generate( uuid.fmt.STR, uuid.V3, uuid.ns.url, 'http://example.com/' ) );
console.log( uuid.generate( uuid.fmt.TXT, uuid.V3, uuid.ns.url, 'http://example.com/' ) );
console.log( 'v4' );
console.log( uuid.generate( uuid.fmt.STR, uuid.V4 ) );
console.log( uuid.generate( uuid.fmt.TXT, uuid.V4 ) );
console.log( 'v5' );
console.log( uuid.generate( uuid.fmt.STR, uuid.V5, uuid.ns.url, 'http://example.com/' ) );
console.log( uuid.generate( uuid.fmt.TXT, uuid.V5, uuid.ns.url, 'http://example.com/' ) );
