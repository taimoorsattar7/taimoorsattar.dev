---
title: create-react-app, Gatsby or Next JS
description: React is the most popular JavaScript library for building the user
  interface. In React, we create reusable UI components and render these
  components based on the logic operation.
date: 2021-04-29T02:35:14.219Z
tags:
  - react
  - frameworks
featuredpost: false
featuredimage: react-frmeworks.jpg
---
React is the most popular JavaScript library for building the user interface. In React, we create reusable UI components and render these components based on the logic. You can read [this article](https://taimoorsattar.dev/blogs/why-need-for-react-js) to understand why we need to use React in the project.

React language is not understood by the browser. To execute the React code, we need to compile it to the browser's native language e.g. HTML, CSS, and JavaScript.

create-react-app, Gatsby, and Next JS are the frameworks that are built on React. But each of these frameworks has a different infrastructure.

* **create-react-app**: Single-Page-Application
* **Gatsby**: Static site Generator
* **Next JS**: Static and server-side render

## create-react-app

Create-react-app is SPA (Single Page Application) that serves/hosts only a single file. In a single file, we can render different React components while navigating to different routes (URL). In SPA, most of the resources (HTML, CSS, and Javascript) when the application is initially loaded. Content is dynamically changed in SPA, hence [create-react-app is not good for SEO](https://taimoorsattar.dev/blogs/is-create-react-app-good-for-seo).

So, In what type of projects **create-react-app** framework is useful? create-react-app is not recommended for creating SEO content websites. We can use create-react-app to build one-page applications/software like online photo editor/video editor.

## Gatsby

Gatsby is a static site generator and frontend framework for creating the blazing fast website. Gatsby has a marketplace that has thousands of plugins to use in your project. The static site generator prerenders the content of the pages during the built time that's why it has a good website performance and good for SEO.

Gatsby's framework could not be used to create a serve (back-end) like express/node. Rather, we can take the benefits of Netlify/functions to run and execute server (back-end) functions.

GatsbyJS framework is recommended to create a portfolio, Documents/readme, or eCommerce sites.

## Next JS

Next.js gives you the power to render both static & server-side content. NextJS supports its own API routes and we can render server-side functions by default. It has not good performance as compare to GatsbyJS.

NextJS framework is recommended to build enterprise type website e.g. large scale e-commerce site