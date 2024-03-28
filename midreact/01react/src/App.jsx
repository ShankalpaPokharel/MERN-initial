import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card"


function App() {
//   const [count, setCount] = useState(9)
 
//  const increment=()=>{
//   setCount(count+1)
//  }
//   //decrement number
//   const decrement=()=>{
//     setCount(count-1)
//   }

  const todos = [{id:1, title:"Task", desc:"This is task1, lorem Lorem ipsum dolor sit amet.",status:false},
    {id:2, title:"Task", desc:"This is task2, lorem Lorem ipsum dolor sit amet.",status:false},
    {id:3, title:"Task", desc:"This is task3, lorem Lorem ipsum dolor sit amet.",status:false},
    {id:4, title:"Task", desc:"This is task4, lorem Lorem ipsum dolor sit amet.",status:false},
    {id:5, title:"Task", desc:"This is task5, lorem Lorem ipsum dolor sit amet.", status:true}
]


  return (
    <>
   
      
      {/* <h1>Counter App</h1>
      <p>Count: {count} </p>
      <button onClick={decrement}>Decreament</button>
      <button onClick={increment}>Increament</button>
       */}

       {/* <Card title="title1" desc="desc"/> */}
     
       <div className='todoContainer'>
       {
        todos.map((todo)=>(
          <div key={todo.id}>
            <Card title={todo.title} desc={todo.desc} status={todo.status}/>
          </div>
        )) 
       }
       </div>

    </>
  )
}

export default App
