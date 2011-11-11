import Options
import Environment
import sys, os, shutil, glob
from os import unlink, symlink, popen
from os.path import join, dirname, abspath, normpath

srcdir = '.'
blddir = 'build'
VERSION = '0.0.5'

def set_options(opt):
    opt.tool_options('compiler_cxx')
    opt.tool_options('compiler_cc')
    opt.tool_options('misc')
    
    opt.add_option( '--ossp-uuid-includes'
        , action='store'
        , type='string'
        , default=False
        , help='Directory containing libev header files'
        , dest='uuid_includes'
    )
    
    opt.add_option( '--ossp-uuid'
        , action='store'
        , type='string'
        , default=False
        , help='Link to a shared uuid libraries'
        , dest='uuid'
    )

def configure(conf):
    conf.check_tool('compiler_cxx')
    if not conf.env.CXX: conf.fatal('c++ compiler not found')
    conf.check_tool('compiler_cc')
    if not conf.env.CC: conf.fatal('c compiler not found')
    conf.check_tool('node_addon')
    
    o = Options.options
    
    if o.uuid_includes:
        conf.env.append_value("CPPFLAGS", '-I%s' % o.uuid_includes)
    
    if o.uuid:
        conf.env.append_value("LDFLAGS", '-L%s' % o.uud)
        # conf.env.append_value("LINKFLAGS", '-L%s' % o.uud)
    
    # print conf.env
    
    # check ossp-uuid libs
    conf.check_cc( lib='uuid', mandatory=True )

def build(bld):
    print 'build'
    obj = bld.new_task_gen('cxx', 'shlib', 'node_addon')
    obj.target = 'uuid_binding'
    obj.source = './src/uuid.cc'
    obj.includes = ['.']
    obj.lib = ['uuid']

def shutdown(ctx):
    pass
