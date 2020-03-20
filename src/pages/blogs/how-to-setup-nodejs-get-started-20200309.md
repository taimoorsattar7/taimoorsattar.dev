---
title: How to setup node js | Get started
description: >-
  NodeJs is open sources, cross platform run-time environment for writing server
  side application.
date: 2020-03-09T18:34:48.066Z
tags:
  - node
  - setup
featuredpost: false
---
NodeJs is open sources, cross-platform run-time environment for writing server-side application. To start writing your Node js script, you first have to install node js on your system. You can install nodeJs by visiting their [official website](https://nodejs.org/en/download). By default, NodeJs come with npm (Node Package Manager) that installs on your system. Follow their terms and condition and proceed to install Node on your system.

After installation, test NodeJs is working on your system by below command on the terminal. git-bash terminal is also option to write command on your system.

```
~ node -v
~ npm -v
```

## Use Node

Now you have to install NodeJs on your system. Now start writing your node JS script. Make a file name `index.js` on your system directory. Copy and Paste simple script as shown below in `index.js`. It prints `Hello World` when you hit the URL `127.0.0.1:3000` as shown below:


```
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

To run the JS file using Node, type this command as shown below: 

```
node index.js
```

## Use NPM

NPM stands for the `node package manager`. NPM handles managing your package that you can plugin into your code/project. You can use these packages in your test, staging and production environment. For Example, Express is also Node package; fast, unopinionated, minimalist web framework for Node.js

The information for packages stored in the file name `package.json`. This file has information about package name, version, production and development dependencies, etc.

To create your `package.json` file, type the command as shown below:
```
npm init
```
Above command will ask you about the basic information and you will be ready to go. `npm init -y` command will omit the question from you, and create `package.json` with default template.

You can install an express package by the command

```
npm install express
```

After the installation of an express package, you can use it in the node by the command `require('express')`.

```
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
```

The above script prints out Hello World! when it hit the browser at URL `http://127.0.0.1:8000`.

## Summary

You can use Node to write the server-side script. NPM (Node Package Manager) comes along when you install Node.