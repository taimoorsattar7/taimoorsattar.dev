---
title: Is create-react-app good for SEO?
description: create-react-app is not good for SEO. For SEO friendly
  create-react-app, you need to prerender it.
date: 2020-12-06T09:22:03.348Z
tags:
  - create-react-app
  - prerender
  - SEO
featuredpost: true
---
In short, create-react-app is not good for SEO. why? create-react-app is a SPA(single page application). In a SPA, all necessary HTML, JavaScript, and CSS code retrieved by the browser with a single page load or data add dynamically to the page based on certain actions.

Search engines and social media look for SEO meta tags on the website. Based on these meta tags, display formated content to the user.

By default in create-react-app, metatag like title and description mentioned in `public/index.html`. When the page loads, the default title shows in the tab of the browser and for every route, it follows the same.
 
What if, you are fetching an article post from an API and after fetching the data, it updates the value of title and description. But the default title shows up in the SEO, not the fetching title. If your app depends on SEO then it is a huge problem
.

So how you can overcome this? You need to prerender the create-react-app. To prerender, You can download either of two npm package as below:

- [React SnapShot](https://www.npmjs.com/package/react-snapshot)
- [React Snap](https://www.npmjs.com/package/react-snap)

The above plugins work well if you are not using Windows / local storage objects in your project (Javascript). [gatsbyjs](https://www.gatsbyjs.com) and [nextjs](https://nextjs.org) are the frameworks that are built on React with SEO friendly pre-rendered website.