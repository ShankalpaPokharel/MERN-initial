```Date.now()+Math.random().toString(36).substring(2,10)```
* Date.now(): Gets the current timestamp in milliseconds.
* .toString(36): Converts the timestamp to a base 36 string.
* .substring(2,10): Extracts a portion of the string, starting from the 3rd character up to the 10th character.


```localhost:8888/api/products?search=p3```

```
const product = await Products.find({
    title:new RegExp(req.query.search,"i")
    })
```

ada