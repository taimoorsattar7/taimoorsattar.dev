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
NodeJs is open sources, cross platform run-time environment for writing server side application. To start writing your Node Js script, you first have to install node js on your system.
You can install nodeJs by visiting to their [official website](https://nodejs.org/en). By default, NodeJs comes with npm (Node Package Manager) that install on your system. Follow their terms and condition and proceed to install.

After you completed, test that NodeJs is properly working on your system by writing below commands on the `terminal`. [git-bash](https://git-scm.com/downloads) terminal is also option to write command on your system.

```
~ node -v
~ npm -v
```

## USE NODE JS

Now you have install NodeJs on your system. Now start writing you node JS script. Make a file name `index.js` on your system directory. Copy and Paste simple script that prints `Hello World` when you hit the url `127.0.0.1:3000` as shown below:

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

To run JS file using Node, type this command as shown below: 
```
node index.js
```

## USE NPM

NPM stands for `node package manager`. NPM is responsible for managing your package that you can plugin into your code / project. You can use these packages in your test, staging and production environment. Express is also Node package; fast, unopinionated, minimalist web framework for Node.js

Dependencies information are stored in the file name `package.json` that contain information about package name, version, production and development dependencies, etc. TO create you `package.json` file, type the command as show below:

```
npm init
```

You can install express package by the command
```
npm install express
```
