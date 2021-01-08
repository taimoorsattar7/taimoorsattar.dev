---
title: Schedule task with setTimeout and setInterval using javascript
description: setTimeout and setInterval functions can schedule the task.
  setInterval executes the function repeatedly while setTimeout execute the
  function once.
date: 2021-01-08T11:38:57.324Z
tags:
  - javascript
  - setTimeout
  - setInterval
featuredpost: false
---
The setTimeout and setInterval functions in JavaScript can schedule the task. We main difference between setTimeout and setInterval functions is as below:

- `setTimeout`: execute the function after waiting for a certain amount of time. It will execute the function once.
- `setInterval`: It executes the function repeatedly after waiting for a certain amount of time.

lets we have a function that alerts message on the browser and can be defined in javascript as below:

```javascript
function alertMsg(){
  alert("I am an alert box!!");
}
```

We can execute the `alert()` function using SetTimeout and setInterval after waiting for some time. 

## setTimeout

In Javascript, we can write the setTimeout function as below

```javascript
setTimeout(alertMsg, 1000); // Will alert once, after a second.
```

We don't need to clear setTimeout as it only executes the function once.

## setInterval

In JavaScript, we can write the **setInterval** function as below:

```javascript
var intervalID = setInterval(alertMsg, 1000); // Will alert every second.
```

If we want to clear the setInterval to execute the function repeatedly, we can write the below command in javascript:

```javascript
clearInterval(intervalID); // Will clear the timer.
```

If we want to execute the function once using `setInterval()` function, we can rewrite our function as below:

```javascript
function alertMsg(){
  alert("I am an alert box!!");
  clearInterval(intervalID);
}
```
