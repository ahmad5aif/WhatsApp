import React from 'react'
import Login from '../components/login/login'
import Dialog from '../components/login/Dialog'
import { Box } from '@mui/material'

function Loginpage() {
    return (
        <>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Login />
                <Dialog />
            </Box>
        </>
    )
}

export default Loginpage