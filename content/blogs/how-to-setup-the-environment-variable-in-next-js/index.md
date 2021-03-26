---
title: How to setup the environment variable in Next.js
description: Create the environment variable that is accessible to both the
  client and server-side function in Next.js
date: 2020-12-26T03:20:48.658Z
tags:
  - Next.js
  - env
featuredpost: false
---
The environment variables are the secrets that you don't want to share in public. We need to create the environment variable that is accessible to both the client and server-side function in Next.js

For this, create a `.env` file that is load initially when the next.js run with command build or in development. Also, You can specify `.env.local` (if you are working locally on your system). In the `.env` file specify your environment variable as below:

```
REACT_APP_BACKENDURL=http://localhost:8080
```

Now, the **REACT_APP_BACKENDURL** environment variable will load during the build and development process. But... It is only accessible in server-side function in Next.js, not client-side.

For a client-side environment variable, create a file `next.config.js`. In the `next.config.js` file specify your environment variable as below.

```
module.exports = {
    env: {
        REACT_APP_BACKENDURL: process.env.REACT_APP_BACKENDURL
    },
  }
```

Now, your environment variable is set up both on the client and server-side of Next.js. You just need to restart the server with the command using `npm run dev`, or `npm run build`.