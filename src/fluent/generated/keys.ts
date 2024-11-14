import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'cab78d4ccc18426ebaaeac2c69415b7b'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '33f8f565a80f4f348d977880ad45b388'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'f9e0fd985bba4a48b68a9081e85b9c19'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '2d160404da754de6b43d20909d6b4e68'
                    }
                }
            }
        }
    }
}
