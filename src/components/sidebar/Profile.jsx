import React, { useContext } from 'react'
import { AccountContext } from '../../contexts/accountProvider'
import { Box, Drawer, Typography, Avatar } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { firebaseAuth } from '../../firebase';


function Profile({ open, setOpen }) {

    const headerStyle = {
        display: "flex",
        paddingRight: "20px",
        alignItems: "flex-end",
        gap: "16px",
        padding: "24px",
        background: "#008069",
        height: "100px",
        color: "#fff",
        width: "315px"
    }

    return (
        <>
            <Drawer
                open={open}
                onClose={() => { setOpen(false) }}
                sx={{ height: "100%", width: "35%", boxShadow: "none", zIndex: "100" }}
            >
                <Box sx={headerStyle}>
                    <ArrowBackIcon fontSize='large' sx={{ cursor: "pointer" }} onClick={() => { setOpen(false) }} />
                    <Typography sx={{ fontWeight: "600", fontSize: "24px" }}>Profile</Typography>
                </Box>

                <Box sx={{ background: "#ededed", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px 0" }}>
                    <Box>
                        <Avatar alt={firebaseAuth.currentUser.displayName} src={firebaseAuth.currentUser.photoURL} sx={{ width: "200px", height: "200px" }} />
                    </Box>

                    <Box sx={{ background: "white", width: "100%", marginTop: "12px", boxShadow: "0 0px 1px rgba(0,0,0,0.5)" }}>
                        <Typography color="#009688" fontSize="14px" fontWeight="200" textAlign="start" p={2} >
                            Your Name
                        </Typography>
                        <Typography color="#4A4A4A" pl={2} fontWeight="500" >
                            {firebaseAuth.currentUser.displayName}
                        </Typography>
                    </Box>

                    <Box sx={{ background: "white", width: "100%", marginTop: "12px", boxShadow: "0 0px 1px rgba(0,0,0,0.5)" }}>
                        <Typography color="#009688" fontSize="14px" fontWeight="200" textAlign="start" p={2} >
                            Your Email
                        </Typography>
                        <Typography color="#4A4A4A" pl={2} fontWeight="500" >
                            {firebaseAuth.currentUser.email}
                        </Typography>
                    </Box>
                </Box>
            </Drawer >
        </>
    )
}

export default Profile