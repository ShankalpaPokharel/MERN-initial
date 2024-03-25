import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment=()=>{
   setCount(count+1)
  };
  const decrement=()=>{
    setCount(count-1)
  };


  return (
    <>
      <h1>Hello hi</h1>
      <p>Count: {count} </p>
      <button onClick={decrement}>Decreament</button>
      <button onClick={increment}>Increament</button>
      <p>{["kadfklsdfj", "fasfkaf"]}</p>
      {/* <p>{if(count>9) "hi"}</p> */}

    </>
  )
}

export default App
