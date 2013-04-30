/*
	binding to oosp-uuid
	author: masatoshi teruya
	email: mah0x211@gmail.com
	(C) Masatoshi Teruya
*/
module.exports = require('./build/Release/ossp-uuid');
module.exports.BIN = 0;        /* binary representation (import/export) */
module.exports.STR = 1;        /* string representation (import/export) */
module.exports.SIV = 2;        /* single integer value  (import/export) */
module.exports.TXT = 3;        /* textual description   (export only)   */
module.exports.v1 = (1 << 0);  /* DCE 1.1 v1 UUID */
module.exports.v3 = (1 << 1);  /* DCE 1.1 v3 UUID */
module.exports.v4 = (1 << 2);  /* DCE 1.1 v4 UUID */
module.exports.v5 = (1 << 3);  /* DCE 1.1 v5 UUID */
// module.exports.MC = (1 << 4); /* enforce multi-cast MAC address */
module.exports.ns = {
    nil: "nil",     /* 00000000-0000-0000-0000-000000000000 ("Nil UUID") */
    dns: "ns:DNS",  /* 6ba7b810-9dad-11d1-80b4-00c04fd430c8 (see RFC 4122) */
    url: "ns:URL",  /* 6ba7b811-9dad-11d1-80b4-00c04fd430c8 (see RFC 4122) */
    oid: "ns:OID",  /* 6ba7b812-9dad-11d1-80b4-00c04fd430c8 (see RFC 4122) */
    x500: "ns:X500" /* 6ba7b814-9dad-11d1-80b4-00c04fd430c8 (see RFC 4122) */
};
