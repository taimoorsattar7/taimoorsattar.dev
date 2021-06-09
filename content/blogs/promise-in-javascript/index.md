---
title: Promise in JavaScript
description: Promise in JavaScript is the way to wait for certain action to
  process or complete.
date: 2021-06-09T02:24:53.001Z
tags:
  - javascript
  - promise
featuredpost: false
---
Promise in JavaScript is the way to wait for a certain action to process or complete. The promise has the following states:

* **Pending**: incomplete (initial state), neither fulfilled nor rejected.
* **Fulfilled**: The process was successfully completed.
* **Rejected**: The process failed.

So, where the promise is useful? We can use promise in JavaScript in a different situation. For example:

* Wait for the response from the HTTP request 
* async and await function
* Schedule Task e.g. [setTimeout and setInterval](https://taimoorsattar.dev/blogs/settimeout-and-setinterval-using-javascript)

We can use [fetch in JavaScript](https://taimoorsattar.dev/blogs/request-data-using-javascript-fetch-api) to retrieve the data from a certain API endpoint. The fetch in JavaScript is a promise that returns the data if the request is successfully processed.

Let's take an example. We have 1st person that's giving the promise and 2nd person that's waiting for the promise to fulfill.

In JavaScript, we can define the promise as below:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(Math.random() > 0.5){
      resolve('foo');
    }else{
      reject("Exception!")
    }
  }, 300);
});
```

In the above, we define the promise that waits for 0.3 seconds and returns the pass or fails message based on the boolean logic (true or false).

Now, to wait for the promise to complete, we can write code in JavaScript as below:

```javascript
myPromise
myPromise
.then(value => { return value + ' and bar'; })
.then(value => { console.log(value) })
.catch(err => { console.log(err) })
.finally(() => {
    console.log('Promise completed');
});
```

In the above code, the following callback function runs:

`.then`: Executes when the process is successfully completed
`.catch`: Executes when the process is failed
`.finally`: execute at every condition

- - -

Moving further... Let's say, we have more than one person that is giving the promise. We can define in JavaScript as below:

```
const promise1 = Promise.resolve("great");
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'Yesss!!!');
});
```

We can use `Promise.all` that returns a promise which resolves after all of the given promises have either fulfilled or rejected. We can write in JavaScript as below:

```
Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
})
.catch(error => {
  console.error(error.message)
});
```

The above code will log the following in the console:

```
["great","Yesss!!!"]
```

- - -

The previous example works OK if all the promises resolve successfully. But... let's say, If one of the promises is rejected, the overall **Promise.all** will be rejected even if every other promise is resolved successfully.

Let say, If we are waiting for many promises. Some promises got fulfilled and some are rejected. In JavaScript, we can define promise as below:

```javascript
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1_delayed_resolution1'), 1000);
});

var p2 = new Promise((resolve, reject) => {
  reject(new Error('p2_immediate_rejection'));
});
```

In `Promise.all`, we can use the `.catch` statement to handle the error of each promise.

```javascript
Promise.all([
  p1.catch(error => { return error }),
  p2.catch(error => { return error }),
]).then(values => {
  console.log(values[0]) // "p1_delayed_resolution"
  console.error(values[1]) // "Error: p2_immediate_rejection"
})
```