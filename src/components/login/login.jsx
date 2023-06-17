import React from 'react'
import { styled, Typography, Box } from '@mui/material';

const Header = styled(Box)`
height:250px;
background: #00a884;
z-index: 1;
width: 100vw
`
function Login() {
    return (
        <Header>
            <Box sx={{ padding: "32px 10vw", display: "flex", alignItems: "center" }}>
                <img src="/public/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgdmlld0JveD0iMCAwIDM5IDM5Ij48cGF0aCBmaWxsPSIjMDBFNjc2IiBkPSJNMTAuNyAzMi44bC42LjNjMi41IDEuNSA1LjMgMi4yIDguMSAyLjIgOC44.svg" alt="whatsApp" />
                <Typography variant="body1" sx={{ fontSize: "14px", marginLeft: "14px", fontWeight: "bold" }}>
                    WHATSAPP WEB
                </Typography>
            </Box>
        </Header >
    )
}

export default Login