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
                }
            }
        }
    }
}
