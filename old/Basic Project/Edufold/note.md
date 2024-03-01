### nav list in link

```
.nav-links ul li{
    list-style: none;
    display: inline-block;
}
```

### line transition under nav bar items

```
.nav-links ul li::after{
    content: '';
    width: 0;
    height: 2px;
    background: #f44336;
    display: block;
    margin: auto;
    transition: 0.5s;
}

.nav-links ul li:hover::after{
    width: 100%;
}
```


### with effectively centers the element both vertically and horizontally.
```
.text-box{
    width: 90%;
    color: #fff;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%); //keep text in senter x and y axis along
    text-align: center;
}

```

### position relative and abosolute 

Let's say you have a parent container (like a <div>) and you want to place an element inside it, but you want that element to be positioned relative to the parent container, not the entire page. You could use position: relative on the parent container to create a positioning context for the child element, and then use position: absolute on the child element to position it precisely within the parent container.

```
<div class="parent">
  <div class="child">
    I'm absolutely positioned inside my parent!
  </div>
</div>
.parent {
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px solid black;
}

.child {
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: lightblue;
  padding: 10px;
}

```

### Background image in section
```
.header{
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(images/banner.png);
    background-position: center;
    background-size:cover;
    position: relative;
}
```