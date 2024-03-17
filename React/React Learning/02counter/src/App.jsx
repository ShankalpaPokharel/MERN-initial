// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useState } from "react";

function App() {
    let [counter, setCounter] = useState(5);
    // let counter = 5;

    const addValue = () => {
        if(counter<20){
            counter = counter + 1;
            setCounter(counter);
        }
    };

    const removeValue = () =>{
        if (counter > 0){
            counter = counter-1;
            setCounter(counter);
        }
    }

    return (
        <>
            <h1>Chai aur react</h1>
            <h2>Counter value:{counter}</h2>
            <button onClick={addValue}>Add value</button>
            <br />
            <button onClick={removeValue}>remove value</button>
        </>
    );
}

export default App;
