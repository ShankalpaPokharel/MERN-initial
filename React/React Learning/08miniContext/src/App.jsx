import { useState } from 'react'
import UserContextProvider from './context/userContextProdiver'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>React with Me</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
