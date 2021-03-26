---
title: How to define environment variable in create-react-app?
description: Environment Variable works differently in create-react-app. To
  access the environment variable in your app, you have to add the prefix
  REACT_APP_ before defining your variable.
date: 2020-10-24T19:00:44.601Z
tags:
  - env
  - create-react-app
featuredpost: false
featuredimage: secret.jpg
---
Environment Variable works differently in create-react-app. To access the environment variable in your app, you have to add the prefix `REACT_APP_` before defining your variable as described in the below image.

![create-react-app-env](https://taimoorsattar.dev/img/create-react-app-env.jpg "create-react-app envirnment variable")

In our app, you can access this variable as a process.env variable.

```
let BACKENDURL = process.env.REACT_APP_BACKENDURL || "http://localhost:8080";
```

You can define the environment variable in the .env file. If you are hosting your app in production like Netlify or Heroku, you can define varibles in their dashboard.