import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./components/Card"

function App() {
    const [count, setCount] = useState(0);
    let myObj = {
      username:"Shankalpa",
      age:23
    }
    let newArray = [1,2,3]

    return (
        <>
            <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
                Tailwind test
            </h1>
            <Card username="chaiaurcode" someObject={myObj} someArray={newArray} btnText="click me"/>
            <Card username="Shankalpa" btnText="visit me"/>
            
        </>
    );
}

export default App;
