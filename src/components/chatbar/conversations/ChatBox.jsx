import React from 'react'
import { Box } from '@mui/material';
import Message from './Message';


function Chat() {
    return (
        <>
            <Box sx={{ height: "calc(100% - 120px)", backgroundImage: "url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)", backgroundSize: "40%", overflowY: "scroll" }}>
                <Box >
                    <Message />
                </Box>
            </Box>
        </>
    )
}

export default Chat