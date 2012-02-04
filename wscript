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

def configure(conf):
    conf.check_tool('compiler_cxx')
    if not conf.env.CXX: conf.fatal('c++ compiler not found')
    conf.check_tool('compiler_cc')
    if not conf.env.CC: conf.fatal('c compiler not found')
    conf.check_tool('node_addon')
    
    conf.env.append_value("CPPFLAGS", '-I./depend/include')
    conf.env.append_value("LINKFLAGS", '-L./depend/lib')
    
    # print conf.env
    
    # check ossp-uuid libs
    conf.check_cc( header_name='uuid.h', mondatory=True )

def build(bld):
    print 'build'
    obj = bld.new_task_gen('cxx', 'shlib', 'node_addon')
    obj.target = 'uuid_binding'
    obj.source = './src/uuid.cc'
    obj.includes = ['.']
    obj.lib = ['uuid']

def shutdown(ctx):
    pass
