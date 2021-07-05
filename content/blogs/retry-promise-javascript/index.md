---
title: Retry (n times) promise in Javascript
description: Sometimes promise requests may fail due to uncertain reasons. In such a case, we can retry the request again.
date: 2021-07-05T06:03:37.094Z
tags:
  - Promise
  - javascript
---

Promise in Javascript is a way to wait for certain actions to complete. Here's a link to more information about the [promise in javascript →](https://taimoorsattar.dev/blogs/promise-in-javascript).

Sometimes promise requests may fail due to uncertain reasons e.g. fails due to load on the server etc. In such a case, we can retry the request again. In JavaScript, we can write a function that takes a promise and retry it n-times.

Let's say we have a reqular promise function below:

```javascript
let hasFailed = Math.random() < 0.5;
function getUserInfo() {
    return new Promise((resolve, reject) => {
        if (hasFailed) {
            reject("Exception!");
        } else {
            resolve("Fetched user!");
        }
    });
}
```

The about promise (function) resolve if `hasFailed` is `true`.

We can write a retry function that retries the given promise n number of times. We can write the function as below:

```javascript
async function retryRequest(promiseFunc, nrOfRetries) {
    // Write your code here

    return new Promise((resolve, reject) => {

        for (let i = 0; i < nrOfRetries; i++) {
            promiseFunc()
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    if (i == (nrOfRetries - 1)) {
                        reject(error)
                    }
                })
        }
    });
}
```

In the end, we can pass the promise and n retry number in the `retryRequest` function that returns a promise.

```javascript
let promise = retryRequest(getUserInfo, 3);
if (promise) {
    promise.then((result) => console.log(result))
        .catch((error) => console.log(error));
}
```