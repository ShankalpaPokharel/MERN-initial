## Axios
It is commonly used for to communicate with web server to fetch data, submit for data, or perform other HTTP-reated task in javascript application. We can do ```get,post``` request using ```axious```. 

Code Example: 
Get
```
// Import Axios library
const axios = require('axios');

// Make a GET request to a URL
axios.get('https://api.example.com/data')
  .then(response => {
    // Handle successful response
    console.log('Data:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });

```

Post
```
axios.post('https://api.example.com/data', { name: 'John', age: 30 })
  .then(response => {
    console.log('Data created:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

### ```This``` keyword

It is used to refer object in, in save object. Example code:
```
const person={
    fname:"Shankalpa",
    lname:"Pokharel",
    fullname:function(){
        return this.fname+" "+this.lname
    }
}
```

### JS History
Same as click back and forward in browser. using ```history.back/forward()```. 
Code example
```
<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">

</body>
</html>

```
