#include <node.h>
#include <node_buffer.h>

#include <stdlib.h>
#include <stdio.h>
#include "uuid.h"

using namespace v8;
using namespace node;


Handle<Value> version( const Arguments &args )
{
    HandleScope scope;
    return scope.Close( Uint32::New( uuid_version() ) );
}

Handle<Value> generate( const Arguments &args )
{
    HandleScope scope;
    Handle<Value> retval;
    uuid_t *uid = NULL;
    uuid_rc_t rc = uuid_create( &uid );
    char *errstr = NULL;
	
    if( rc != UUID_RC_OK ){
        asprintf( &errstr, "failed to uuid_create: %s", uuid_error( rc ) );
    }
    else
    {
        int nargs = args.Length();
        uuid_fmt_t fmt = UUID_FMT_STR;
        int vers = UUID_MAKE_V4;
        
        if( nargs > 0 ){
            fmt = (uuid_fmt_t)args[0]->IntegerValue();
        }
        if( nargs > 1 ){
            vers = args[1]->IntegerValue();
        }
        
        if( vers == UUID_MAKE_V3 || vers == UUID_MAKE_V5 )
        {
            uuid_t *uid_ns = NULL;
            String::Utf8Value ns ( args[2]->ToString() );
            String::Utf8Value name ( args[3]->ToString() );
            
            if( ( rc = uuid_create( &uid_ns ) ) != UUID_RC_OK ){
                asprintf( &errstr, "failed to uuid_create: %s", uuid_error( rc ) );
            }
            else
            {
                if( ( rc = uuid_load( uid_ns, *ns ) ) != UUID_RC_OK ){
                    asprintf( &errstr, "failed to uuid_load( namespace:%s ): %s", *ns, uuid_error( rc ) );
                }
                else if( ( rc = uuid_make( uid, vers, uid_ns, *name ) ) != UUID_RC_OK ){
                    asprintf( &errstr, "failed to uuid_make( version:%d, name:%s ): %s", vers, *name, uuid_error( rc ) );
                }
                uuid_destroy( uid_ns );
            }
        }
        else if( ( rc = uuid_make( uid, vers ) ) != UUID_RC_OK ){
            asprintf( &errstr, "failed to uuid_make( version:%d ): %s", vers, uuid_error( rc ) );
        }
        
        if( rc == UUID_RC_OK )
        {
            void *gen = NULL;
            size_t len = 0;
            
            if( ( rc = uuid_export( uid, fmt, &gen, &len ) ) != UUID_RC_OK ){
                asprintf( &errstr, "failed to uuid_export( format:%d ): %s", fmt, uuid_error( rc ) );
            }
            else
            {
                if( fmt == UUID_FMT_BIN ){
                    Buffer *retbuf = Buffer::New( len );
                    memcpy( Buffer::Data( retbuf ), gen, len );
                    retval = retbuf->handle_;
                }
                else if( fmt == UUID_FMT_SIV ){
                    len = strlen( (char*)gen );
                    retval = Encode( gen, len, UTF8 );
                }
                else{
                    len = strlen( (char*)gen );
                    retval = Encode( gen, len, UTF8 );
                }
                free( gen );
            }
        }
        uuid_destroy( uid );
    }
    
    if( errstr ){
        retval = ThrowException( Exception::Error( String::New( uuid_error( rc ) ) ) );
        free( errstr );
    }
    
    return scope.Close( retval );
}


extern "C" 
void init( Handle<Object> target )
{
    HandleScope scope;
    NODE_SET_METHOD( target, "version", version );
    NODE_SET_METHOD( target, "generate", generate );
};
