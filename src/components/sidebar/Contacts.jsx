import React, { useEffect, useState, useContext } from 'react'
import { Avatar, Box, Typography } from '@mui/material';
import { collection, onSnapshot } from 'firebase/firestore';
import { firebaseDB, firebaseAuth } from '../../firebase';
import { AccountContext } from '../../contexts/accountProvider';

function Contacts() {

    const { setReciever, setCombinedChatId, setOpenemptychatpage } = useContext(AccountContext)

    const [registeredUsers, setRegisteredUsers] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(collection(firebaseDB, "registeredUsers"), (doc) => {
            console.log(doc.docs)
            setRegisteredUsers(doc.docs);
        })
        return () => unsub()
    }, [])

    const openPrivateChat = async (e) => {
        e.stopPropagation()
        setOpenemptychatpage(false)
        setReciever(e.target.id);
        const CHAT_ID = firebaseAuth.currentUser.uid > e.target.id ? firebaseAuth.currentUser.uid + e.target.id : e.target.id + firebaseAuth.currentUser.uid
        setCombinedChatId(CHAT_ID)
    }

    return (
        <>
            {registeredUsers.sort((a, b) => { a.data().lastMessageTime - b.data().lastMessageTime }).map((user, i) => (
                user.data().userId !== firebaseAuth.currentUser.uid &&
                <Box
                    sx={{ overflow: "overlay" }}
                    key={i}
                    id={user.data().userId}
                    onClick={(e) => { openPrivateChat(e) }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box px={2}>
                            <Avatar sx={{ width: "49px", height: "49px" }} src={user.data().imgPath}>
                            </Avatar>
                        </Box>
                        <Box id={user.data().userId} sx={{ height: "72px", width: "100%", paddingRight: "15px", borderTop: "1px solid #f5f6f6", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", cursor: "pointer" }}>
                            <Typography id={user.data().userId} sx={{ fontSize: "17px", color: "#111b21", textAlign: 'justify' }}>
                                {user.data().name}
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", overflowX: "hidden" }}>
                                <Typography id={user.data().userId} sx={{ fontSize: "14px", color: "#667781", display: "flex", overflowX: "hidden" }}>
                                    {user.data().lastMessageText.slice(0, 25)}
                                </Typography>
                                <Typography id={user.data().userId} sx={{ fontSize: "12px", color: "#667781", display: "flex" }}>
                                    {user.data().lastMessageTime.toDate().toTimeString().slice(0, 5)}
                                </Typography>
                            </Box>
                        </Box>
                    </Box >
                </Box>
            ))}
        </>
    )
}

export default Contacts