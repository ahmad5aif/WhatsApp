import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../../contexts/accountProvider'
import { Stack, Box, Avatar, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firebaseDB } from '../../../firebase';

function Header() {

    const [openedChatName, setOpenedChatName] = useState('')
    const [openedChatImg, setOpenedChatImg] = useState('')

    const { reciever } = useContext(AccountContext)

    console.log(reciever);
    const fetchReciever = async () => {
        const recieverRef = collection(firebaseDB, "registeredUsers")
        const q = query(recieverRef, where('userId', '==', reciever))
        const querySnap = await getDocs(q)
        querySnap.forEach((doc) => {
            setOpenedChatName(doc.data().name)
            setOpenedChatImg(doc.data().imgPath)
        });
    }

    useEffect(() => {
        fetchReciever()
    }, [reciever])

    return (
        <>
            <Box sx={{ height: 60, display: 'flex', padding: "0 16px" }} bgcolor="#f0f2f5" >
                <Stack direction="row" width="100%" justifyContent="space-between" alignItems="center"
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar sx={{ cursor: "pointer" }} src={openedChatImg}>
                        </Avatar>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center" }}>
                            <Typography fontSize="16px" color="#111B21" pl="15px">
                                {openedChatName}
                            </Typography>
                            <Typography fontSize="13px" color="#667781" pl="15px" >
                                online
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <IconButton  >
                            <SearchIcon />
                        </IconButton>
                        <IconButton >
                            <MoreVertRoundedIcon />
                        </IconButton>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Header