import React, { useEffect, useState, useContext } from 'react'
import { doc, onSnapshot } from 'firebase/firestore';
import { firebaseDB } from '../../../firebase'
import { AccountContext } from '../../../contexts/accountProvider'
import Messages from './Messages';

function Message() {

    const { combinedChatId, openemptychatpage } = useContext(AccountContext)

    const [message, setMessage] = useState([])

    if (openemptychatpage === false) {
        useEffect(() => {
            const unsub = onSnapshot(doc(firebaseDB, "privateChats", combinedChatId), (doc) => {
                setMessage(Object.entries(doc.data())[0][1])
                console.log(Object.entries(doc.data())[0][1])
            });
        }, [combinedChatId])
    }

    return (
        <>
            {message.map((msg, i) => (
                <Messages message={msg} key={i} />
            ))}
        </>
    )
}

export default Message