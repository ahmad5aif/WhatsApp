import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { firebaseAuth } from '../../../firebase'

const senderStyles = { background: "#dcf8c6", padding: "5px", maxWidth: '60%', width: "fit-content", margin: "5px 5px 5px auto", display: "flex", borderRadius: "10px", wordBreak: "break-word" }
const recieverStyles = { background: "#fff", padding: "5px", maxWidth: '60%', width: "fit-content", margin: "5px", display: "flex", borderRadius: "10px", wordBreak: "break-word" }

function Messages({ message }) {

    // const[time,setTime]= useState('')

    // const a = message.time.toDate().toTimeString().slice(0, 1)
    // const num1 = parseInt(a)
    // if (num1<=11){
    // setTime((message.time.toDate().toTimeString().slice(0, 5)) +'AM')
    // }else if(num1>=12){
    //     setTime((a-12)+(message.time.toDate().toTimeString().slice(2, 5)) +'PM')  
    // }

    const msgStyles = (message.senderId === firebaseAuth.currentUser.uid) ? senderStyles : recieverStyles
    return (
        <>
            <Box id="sender-text" sx={msgStyles}>
                <Typography sx={{ fontSize: "14px", padding: "0 25px" }}>
                    {message.text}
                </Typography>
                <Typography sx={{ fontSize: "10px", color: "#919191", wordBreak: "keep-all", marginTop: "auto" }}>
                    {message.time.toDate().toTimeString().slice(0, 5)}
                </Typography>
            </Box>
        </>

    )
}

export default Messages