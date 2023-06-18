import React from 'react'
import { Box, Typography, Tooltip, IconButton, Grid } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { firebaseAuth, firebaseDB, googleProvider } from "../../firebase"
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';

function Dialog() {

    // signup with google function 
    const signinWithGoogle = async () => {
        try {
            const res = await signInWithPopup(firebaseAuth, googleProvider)
            await setDoc(doc(firebaseDB, "registeredUsers", res.user.uid), {
                name: res.user.displayName,
                email: res.user.email,
                imgPath: res.user.photoURL,
                userId: res.user.uid,
                joind: new Date().toLocaleString(),
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box sx={{ display: "flex", position: "absolute", top: "100px", height: "85vh", width: "85vw", borderRadius: "4px", background: "#eae6df", justifyContent: "center", zIndex: "100" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Grid container >
                    <Grid item xs={12} sm={6} lg={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "28px", fontWeight: "300", color: "#41525d", marginBottom: "48px", textAlign: "center", fontFamily: 'Inter' }}>
                            Use WhatsApp on your computer
                        </Typography>
                        <Typography sx={{ fontSize: "18px", color: "#3b4a54", fontFamily: 'Inter' }}>
                            Click the QR to log into your account
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} sm={6} lg={4} alignItems='center' justifyContent='center' >
                        <Tooltip title="Sign in with Google">
                            <IconButton onClick={signinWithGoogle} sx={{ display: "flex", justifyContent: "center" }}>
                                <QrCode2Icon sx={{ fontSize: "250px", color: "#3b4a54", '&:hover': { color: "#2C3333" } }} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Dialog