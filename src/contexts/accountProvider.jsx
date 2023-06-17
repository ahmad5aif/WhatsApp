import { React, createContext, useState } from 'react'

export const AccountContext = createContext();

export function AccountsProvider({ children }) {

    const [openemptychatpage, setOpenemptychatpage] = useState(true)
    const [reciever, setReciever] = useState('')
    const [combinedChatId, setCombinedChatId] = useState('')

    return (
        <AccountContext.Provider value={{
            reciever, setReciever,
            combinedChatId, setCombinedChatId,
            openemptychatpage, setOpenemptychatpage
        }}>
            {children}
        </AccountContext.Provider>
    )
}