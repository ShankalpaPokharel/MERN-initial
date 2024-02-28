## How to setup
tailwind css documentation : https://tailwindcss.com/docs/installation

```
you can write code here to look better
```

add command in package.json's build and when we do ```npm run build``` in termianl build command run also . 

```
{
  "name": "tailwind",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "tailwindcss": "^3.4.1"
  }
}


```




to expirement the tailwind code : https://play.tailwindcss.com/


tailwind component template : https://tailblocks.cc/

http://127.0.0.1:5500/index.html