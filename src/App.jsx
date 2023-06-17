import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import ChatPage from "./pages/chatpage"
import Loginpage from "./pages/loginpage"
import { firebaseAuth } from "./firebase"
import { AccountsProvider } from "./contexts/accountProvider"

function App() {

  const [owner, setOwner] = useState(null)

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // user is logged in
        setOwner(user)
      } else {
        // user is logged out
        setOwner(null)
      }
    })
  }, [])

  if (owner === null) {
    return (
      <AccountsProvider>
        <Loginpage />
      </AccountsProvider>
    )
  }

  return (
    <AccountsProvider>
      <ChatPage />
    </AccountsProvider>
  )
}

export default App
