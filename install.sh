#!/bin/sh

set -e

CWD=`pwd`
MOD_LIBS="${CWD}/libs"
MOD_DEPEND="${CWD}/depend"
LIB_UUID='uuid-1.6.2'

if [ ! -d ${MOD_DEPEND} ]; then

    if [ ! -d ${MOD_LIBS} ]; then
        echo "mkdir ${MOD_LIBS}"
        mkdir ${MOD_LIBS}
    fi

    echo "cd ${MOD_LIBS}"
    cd ${MOD_LIBS}

    if [  ! -d "${LIB_UUID}" -a ! -f "${LIB_UUID}.tar.gz" ]; then
        echo "wget --no-passive-ftp ftp://ftp.ossp.org/pkg/lib/uuid/${LIB_UUID}.tar.gz"
        wget --no-passive-ftp ftp://ftp.ossp.org/pkg/lib/uuid/${LIB_UUID}.tar.gz
        if [ ! -f "${LIB_UUID}.tar.gz" ]; then
            exit -1;
        fi
    fi

    if [ -f "${LIB_UUID}.tar.gz" ]; then
        echo "tar xvzf ./${LIB_UUID}.tar.gz"
        tar xvzf "${LIB_UUID}.tar.gz"
        rm ${LIB_UUID}.tar.gz
    fi

    echo "cd ${LIB_UUID}"
    cd ${LIB_UUID}

    # configure
    CONFIGURE="--prefix=${MOD_DEPEND}"
    echo "./configure ${CONFIGURE}"
    ./configure ${CONFIGURE}

    echo "make"
    make
    echo "make check"
    make check
    echo "make install"
    make install
    echo "cd ${CWD}";
    cd ${CWD}
fi

CPPFLAGS="-I${MOD_DEPEND}/include"
LINKFLAGS="-L${MOD_DEPEND}/lib"
LDFLAGS="-L${MOD_DEPEND}/lib"
export CPPFLAGS
export LINKFLAGS
node-waf configure
node-waf build
