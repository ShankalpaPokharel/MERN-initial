## How to setup
tailwind css documentation : https://tailwindcss.com/docs/installation

### Working mobile-first
By default, Tailwind uses a mobile-first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.





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


### px and rem
while px is an absolute unit that always represents the same size, rem is a relative unit that adjusts its size based on the font size of the root element.
hen you specify a size in rem, it will be relative to the font size of the root element. For example, if the font size of the root element is 16 pixels and you specify 1rem, it will be equal to 16 pixels. If you set the font size of the root element to 20 pixels, then 1rem will be equal to 20 pixels

### Regex
A regular expression, often abbreviated as regex or regexp, is a sequence of characters that forms a search pattern. 