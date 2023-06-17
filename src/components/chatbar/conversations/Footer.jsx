import React, { useContext, useState } from 'react'
import { Box, InputBase, Tooltip, IconButton } from '@mui/material'
import { firebaseDB, firebaseAuth } from '../../../firebase';
import { Timestamp, arrayUnion, doc, updateDoc, setDoc } from "firebase/firestore";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { AccountContext } from '../../../contexts/accountProvider';

function Footer() {

    const [text, setText] = useState('')
    const { combinedChatId, reciever } = useContext(AccountContext)

    const sendMsg = async (e) => {
        e.preventDefault()
        if (!text) {
            alert("Text field can not empty.")
        } else {
            await setDoc(doc(firebaseDB, 'privateChats', combinedChatId), {
                chat: arrayUnion({
                    text,
                    senderId: firebaseAuth.currentUser.uid,
                    recieverId: reciever,
                    time: Timestamp.fromDate(new Date())
                })
            }, { merge: true });
            await updateDoc(doc(firebaseDB, 'registeredUsers', reciever), {
                lastMessageText: text,
                lastMessageTime: Timestamp.fromDate(new Date())
            });
            console.log(`${combinedChatId} - ${text}`);
            setText('')
        }
    }

    const sendMsgBykey = async (e) => {
        e.keyCode === 13 &&
            console.log('clicked');
    }

    return (
        <>
            <Box >
                <Box sx={{ height: "50px", padding: "5px 0", background: "#f0f2f5", display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "12px", padding: "0 16px" }}>
                        <EmojiEmotionsOutlinedIcon />
                        <AttachFileOutlinedIcon sx={{ transform: "rotate(45deg)" }} />
                    </Box>

                    <Box sx={{ background: "#fff", borderRadius: "10px", width: "100%", marginRight: "10px" }}>
                        <InputBase
                            sx={{ padding: "0 12px", fontSize: "15px", width: "100%" }}
                            placeholder='Type a message'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={sendMsgBykey}
                        />
                    </Box>
                    <Tooltip title="Send">
                        <IconButton onClick={sendMsg}>
                            <SendRoundedIcon sx={{ transform: "rotate(320deg)", color: "#000" }} />
                        </IconButton>
                    </Tooltip>
                    <MicRoundedIcon sx={{ padding: "0 16px" }} />
                </Box>
            </Box>
        </>
    )
}

export default Footer