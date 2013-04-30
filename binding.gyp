{
    'targets': [
        {
            'target_name': 'ossp-uuid',
            'sources': [
                'src/uuid.cc'
            ],
            'include_dirs': [
                './depend/include'
            ],
            'ldflags': [
                '-L./depend/lib'
            ],
            'libraries': [
                '-luuid'
            ]
        }
    ]
}
