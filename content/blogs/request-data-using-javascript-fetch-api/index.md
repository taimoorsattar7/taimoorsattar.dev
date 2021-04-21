---
title: How to request data using JavaScript Fetch API
description: API is the route (URL) where we can send the request to retrieve
  and manipulate the data based on the information we provide.
date: 2021-04-21T02:17:28.784Z
tags:
  - javascript
  - API
featuredpost: false
---
API (Application Programming Interface) is just like the radio where you tune the frequency to listen to specific FM's. You don't care about the internal electronics or mechanism behind it. You only care about the button that will make your work done.

In technical terms, <mark>API is the route (URL) where we can send the **request** to retrieve and manipulate the data based on the information we provide</mark>. It is a way of requesting data for **another server**. The server may authorize your information before sending the response (data) back. The data could be of any type, but in programming, we mostly work with JSON and Arrays. For example, we can send a request to the server to find the information of a particular **username**.

We use the `fetch("")` command in JavaScript to retrieve data from the server. `fetch()` command in JavaScript **returns the promise, not the data**. The promise is the way of letting the operation run in the background.

Logical operations performed on our browser using JavaScript like addition, subtraction, if/else, etc. happens on the fly. This operation may take less than a few milliseconds to complete depending on our system speed. But, if we want to **fetch data from another server**, it will take some time to complete depending on the internet connection and server speed. We as a developer does not know how much time it will take to complete. So, the `fetch()` command in JavaScript returns promises instead of data. When the promise is fulfilled after some time, data is received.

For Example, ALI says: "**Wait** here for 5 minutes while I will buy your **food**.".
ALI give you a promise 🤞 that he will be back. If he will be back, then you will get FOOD in response. If he does not return, you will get an error

## How to find an API resource

Most of the websites have made their data publicly available using API. Below are some of the resources where you can search for the list of publicly available API's:

- https://github.com/public-apis/public-apis
- https://apilist.fun
- https://unsplash.com/developers

## Different types of API's request

The most common API request is as below.

- GET
- POST
- UPDATE
- DELETE

Whenever we want to visit a URL in the browser, we are sending a **GET** request for a specific URL. In the browser, we can only send GET requests. Another request like POST and DELETE we can't simply perform in the browser as it may require additional payload.

To send HTTP requests like POST, UPDATE, etc; we can download tool like Postman.

- [PostMan](https://www.postman.com/)

## Get Started

To get started, create a project folder, name `my-app, on your local computer. Inside this folder, you can create two folder names as follow.

- `index.html`
- `main.js`

Open this project folder in **VScode**.

For this example, We use to work on [jsonplaceholder API](https://jsonplaceholder.typicode.com) as it is just a Fake rest API. You sent `GET` and `POST` HTTP request to this API and receive the data as a response.

Open the index.html in VScode and paste the below HTML inside the `<body>` tag:

```html
<h1>JSONplaceholder USERS</h1>
<div id="app"></div>
```
The above HTML code doesn't contain the information of the user names. We will fetch the data (names) from the below API resource.

- https://jsonplaceholder.typicode.com/users

Open the above API resource on the browser, you will see the user data display on the page. To make it prettier, you can download [JSON Formatter google extention](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en).

![](https://storage.googleapis.com/masterpro/code/responsive-design/api/JSON-formatter.jpg)

In the Javascript file, we need to define two functions as below

1. Retrieve the data from the JSONplaceholder server
2. Format the data into bullets to display on the HTML element

In the main.js, paste below following code as below

```javascript
function fetch_data() {
  try {
    // Grab the reference of HTML element with id of app 
    const app = document.getElementById("app");

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => {
      // convert response data in readable JSON
      return users.json();
    })
    .then(data => {
      // log into inspect tool
      console.log(data);
      // Append names to app element
      app.innerHTML = listOfNames(data);
    })

  } catch (e) {
    app.innerHTML = "user not found";
  }
}

fetch_data();
```

The below function in javascript is used to format the data received from the GET request.

```javascript
function listOfNames(people) {
  const users = people.map(person => `<li>${person.name}</li>`).join("\n");
  return `<ul>${users}</ul>`
}
```
Now refresh the browser and you will see the data has populated in the inspect tool and also on the webpage.

In the below image, you can view the list of users displayed on the website. These user names are not mentioned in the HTML but rather we populate this data using `fetch()` in javascript from JSONplaceholder server.

![](https://storage.googleapis.com/masterpro/code/responsive-design/api/JSONplaceholder-user.JPG)