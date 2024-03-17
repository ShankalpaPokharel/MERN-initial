import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App | Shank</h1>
    </div>
  )
}

const reactElementa = {
  type:'a',
  props:{
      href:"https:google.com",
      targe:'_blank'
  },
  children:'Click me to visit google'
}
const anotherElement=(
  <a href="https:google.com" target='_blank'>Visit google</a>)
  
const anotherUser = "Shankalpa"
const reactElementc = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to  visit google ',
  anotherElement
) //output : Click me to visit google Shankalpa


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // MyApp(), //work
    // reactElementa, //don't work because react take properties in different way
    // anotherElement,// work 
    // reactElementc, //work
    <App /> 
  // </React.StrictMode>,
)
