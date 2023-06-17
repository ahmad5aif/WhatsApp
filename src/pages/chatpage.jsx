import React, { useContext } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Sidebar from '../components/sidebar/Sidebar';
import EmptyChat from '../components/chatbar/emptyChat/emptyChat';
import Conversation from '../components/chatbar/conversations/Conversation';
import { AccountContext } from '../contexts/accountProvider';

function ChatPage() {

    const { openemptychatpage } = useContext(AccountContext)
    return (
        <Grid container >
            <Grid item xs={12} sm={4.5} lg={3.5} bgcolor="secondary">
                <Sidebar />
            </Grid>
            <Grid item xs={12} sm={true} lg={8.5} >
                <Box sx={{ height: '100vh', width: "100%" }} bgcolor="#f0f2f5">
                    {openemptychatpage ? <EmptyChat /> : <Conversation />}
                </Box>
            </Grid>
        </Grid>
    )
}

export default ChatPage