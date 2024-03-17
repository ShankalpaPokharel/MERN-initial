### React

-   React dom(for web app)
-   React native (for mobile app)

### Requirement

-   code editor
-   nodejs for enviroment (to execute the code)
-   react documentation : https://react.dev/

`npm` - node package manager : to install library or modules (insteller), install in system
`npx` - node package execution : execute without innstall in system

old method of create react app, it take time to install it is bulky(we may not require all things, what is provede when install) `npx create-react-app 01basicreact`

`npm run start` : to run the react code for developent reference for it:

```jsx
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

`npm run build` : it create build folder all react code convert in js. in production we use build folder.

### Now we use Vite

`npm create vite@latest`

`create` is utility. utility code serves as a valuable toolbox, providing essential functions and tools that simplify common tasks.

```npm install` to install the dependancies, which is shown in package.json

## how to run the code

`npm run dev`

`npm run <base on script object key>`

```jsx
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

## File structure and code explain and naming convention

`package-lock.json` : lock stable the version of dependencies that need to run the project

"SPA" : react is single page application. we have only index file all manupulation will be here by using js dom manupulation

index.html `<div id="root"></div>`
|
|
App.js or Main.js

```jsx
import React from "react"; //core foundational library
import ReactDOM from "react-dom/client"; // implemenation in web of react
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

`ReactDOM` -react meke own dom and compare with browser dom and change accordingly
`createRoot` -make a root in , it expect id
`document.getElementById('root')` : search in html where the id="root"
`const root` : reference store in root variale
`root.render` : do a render in root, what inside it
`<App/>` : render the App fuction which reaturn the html code
`<React.StrictMode><App /></React.StrictMode>` it check only in development not in procution build

-   Extra Rendering: Components wrapped in <StrictMode> re-render an extra time to find bugs caused by impure rendering.
-   Effect Cleanup Check: Components within <StrictMode> re-run their effects an additional time to identify missing effect cleanup.
-   Deprecated API Warnings: Strict Mode checks for usage of deprecated APIs in your components.

We are not adding script in index.html, but how we are able to manipulate the dom? -->in backside react sript work or do ,

[but in vite add javascript tag in classical approach]()

### Rule of vite or traditonal react for function(component) or naming convention for componet

When making,import and use the function , write in Pacal case or capitalize App.jsx
standard practice for naming file: capitalize App.js (it work as in camel case in tradional react but not in vite it is like a rule in vite)

file extention in vite jsx(rule)

### Rule of jsx or js

we can export only one element practice put other element inside <></> it called fregment

```
if file return html extention in .jsx in not .js in traditional react
```

## Variable in Jsx

```jsx
function App() {
    const username = "Shankalpa";
    return (
        <>
            <Chai />
            <h1>react with {username}</h1>
        </>
    );
}
export default App;
```

` {username}` : it is javascrpt but we don't write direct javascrip here but write final outcome or result . It is `evaluated expression`

Why we can't write direct javascript ? Because at the end it change it as a object and this is not good practice write fuction or calulation in object. evalution or caluculation part **should write before return or outside the function**

```jsx
const anotherUser = "Shankalpa";
const reactElementc = React.createElement(
    "a",
    { href: "https://google.com", target: "_blank" },
    "Click me to  visit google ",
    anotherElement
); //output : Click me to visit google Shankalpa
```

## Custom React

![alt text](<zimg/Screenshot 2024-03-17 at 3.29.57 PM.png>)

## Babel

-   Tool that converts converts mordern js code in to older or traditional version of javascript , which is compatible in all browser.

-   **how it works** : It convert jsx(html-like syntax inside js) into regural js that react can understand.

example:

```jsx
// Input JSX code
const element = <h1>Hello, world!</h1>;

// Babel converts JSX into JavaScript
// Transpiled JavaScript code with Babel
const element = React.createElement("h1", null, "Hello, world!");
```

## React Hook
React Hook is function that allow to use state( current condition or data of a component at a particular point in time) and other react feature in function.

When something change in stage , it also chnage in ui also


```jsx
// without hook
function App() {
    const addValue = () => {
        counter += 1;
        console.log("Value added", Math.random());
        console.log("new counter", counter);
    };

    return (
        <>
            <h1>Chai aur react</h1>
            <h2>Counter value:{counter}</h2>
            <button onClick={addValue}>Add value</button>
            <br />
            <button>remove value</button>
        </>
    );
}

export default App;
```

Above code does't change the value of coutner in UI

Now it works:

```jsx
// with hook
mport { useState } from "react";

function App() {
    let [counter,setCounter]= useState (5)
    // let counter = 5;

    const addValue =()=>{
        counter=counter+1;
        setCounter(counter)
        console.log("Value added", Math.random())
        console.log("new counter",counter)
    }

    return (
        <>
            <h1>Chai aur react</h1>
            <h2>Counter value:{counter}</h2>
            <button onClick={addValue}>Add value</button>
            <br />
            <button>remove value</button>
        </>
    );
}
export default App;

```

### useState

` let [counter,setCounter]= useState (5)` : we can put any datatype in useState default value

we can name any name ```let [counter,setCounter]```


## DOM
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents as a tree-like model where each node represents a part of the document.

The <html>, <head>, and <body> tags represent the root nodes of the document.

We access,manipulate element properties, create new elevent adn reove elements from the DOM using various methods like getElementById, getElementsByTagName, getElementsByClassName, and querySelector.....

* ```virtual dom``` like : it wasn't there originally but bring it from anywhare on that place base on state


