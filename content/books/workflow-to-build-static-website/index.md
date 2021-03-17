---
title: Workflow to build Static Website
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
featuredimage: /cover.jpg
---

The static website generates the content on the browser without any modification/processing as it's already pre-rendered (backed). The static website is coined from the name, JAMstack.

JAM stands for JavaScript, APIs, and Markup. JAMstack is the modern way for website development by providing a simpler developer experience, better performance, lower cost, and greater scalability. With Jamstack, you’re building a large e-commerce site, SaaS application, or personal blog.

The benefits of the JAMstack website is listed below:


Contents

- Overview
- Our Stack
- Author Bio
- Tools Required?
- Gatsby Overview?
- Working on the Project
- Public repo - GitHub
- Hosting on Netlify
- Add feature to the website - Contact page
- Coding Standards for best practice, Prettier, and ESlint
- Format on commit
- Add SEO feature
- Purchase a domain name
- Add website to Webmaster
- Add Sitemap to the website
- Add the RSS feed to the website
- Track your website traffic with Google Analytics
- Add Newsletter Feature
- Manage content with Netlify CMS
- Gatsby Sharp Images
- Comments for the blog post
- Conclusion

In past, websites are deployed in a monolithic fashion. Let's take an example of WordPress. WordPress was the most popular platform to deploy websites and manage content with CMS. But each of the services e.g. front-end, back-end, or CMS are bound to a single system. If the system is down, every service will be down. The monolithic approach has some drawbacks as below:

Slow website performance due to the size of the application
Difficult to find bugs in the system as we have to traverse each and every service.
To tackle this problem, the website deployed in a micro-service fashion. In a microservice architecture, each service has its own system. For example, the front-end has its own system, the same as the database and back-end. If any of the systems are down, we can easily find the bug.

StaticGen provides a leaderboard of website generators that build static websites from dynamic content. In this book, we share the workflow to build your static website and deploy it on the server.