import React, { useState } from 'react'
import { Stack, Box, Avatar, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Profile from './Profile';
import { firebaseAuth } from '../../firebase'
import { signOut } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';

function SideHeader() {

    const handleLogout = () => {
        signOut(firebaseAuth)
    }

    // console.log(firebaseAuth.currentUser.photoURL);
    const [showProfile, setShowProfile] = useState(false)
    const toggleDrawer = () => {
        setShowProfile(true)
    }

    return (
        <>
            <Box sx={{ height: 60, width: "calc(100% - 1px)", display: 'flex', borderRight: "1px solid #e9edef" }} bgcolor="#f0f2f5" >
                <Stack direction="row" width="100%" spacing={1} pl={3} pr={2} justifyContent="space-between" alignItems="center"
                >
                    <Tooltip title="View Profile">
                        <Avatar sx={{ cursor: "pointer" }} src={firebaseAuth.currentUser.photoURL} onClick={toggleDrawer}>
                        </Avatar>
                    </Tooltip>

                    <Box >
                        <Tooltip title="Logout">
                            <IconButton onClick={handleLogout}>
                                <LogoutIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Stack>
            </Box>

            <Profile open={showProfile} setOpen={setShowProfile} profile={true} />
        </>
    )
}

export default SideHeader