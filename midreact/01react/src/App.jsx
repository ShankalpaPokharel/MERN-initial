import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(9)
 
 const increment=()=>{
  setCount(count+1)
 }
  
  //decrement number
  const decrement=()=>{
    setCount(count-1)
  }


  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count} </p>
      <button onClick={decrement}>Decreament</button>
      <button onClick={increment}>Increament</button>
      

    </>
  )
}

export default App
