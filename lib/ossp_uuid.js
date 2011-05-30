/*
	binding to oosp-uuid
	author: masatoshi teruya
	email: mah0x211@gmail.com
	copyright (C) 2011, masatoshi teruya. all rights reserved.
*/
module.exports = require( __dirname + '/../build/default/uuid_binding');
module.exports.fmt = {
	BIN: 0,        /* binary representation (import/export) */
    STR: 1,        /* string representation (import/export) */
    SIV: 2,        /* single integer value  (import/export) */
    TXT: 3         /* textual description   (export only)   */
};
module.exports.V1 = (1 << 0); /* DCE 1.1 v1 UUID */
module.exports.V3 = (1 << 1); /* DCE 1.1 v3 UUID */
module.exports.V4 = (1 << 2); /* DCE 1.1 v4 UUID */
module.exports.V5 = (1 << 3); /* DCE 1.1 v5 UUID */
// module.exports.MC = (1 << 4); /* enforce multi-cast MAC address */

module.exports.ns = {
	nil: "nil",     /* 00000000-0000-0000-0000-000000000000 ("Nil UUID") */
	dns: "ns:DNS",  /* 6ba7b810-9dad-11d1-80b4-00c04fd430c8 (see RFC 4122) */
	url: "ns:URL",  /* 6ba7b811-9dad-11d1-80b4-00c04fd430c8 (see RFC 4122) */
	oid: "ns:OID",  /* 6ba7b812-9dad-11d1-80b4-00c04fd430c8 (see RFC 4122) */
	x500: "ns:X500" /* 6ba7b814-9dad-11d1-80b4-00c04fd430c8 (see RFC 4122) */
};
