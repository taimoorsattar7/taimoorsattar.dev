---
title: Monolithic and Microservice architecture for website development?
description: In the monolithic approach, all the application data sits on the same server.
date: 2021-01-05T08:53:09.420Z
tags:
  - monolithic
  - microservice
  - website
featuredpost: false
featuredimage: /img/development.jpg
---
As a **monolithic developer**, the application which includes front-end code, admin panel, database, email handler, etc sits on the **same server** (has RAM and CPU). At some point load on, **database** increases due to traffic and we have to increase the server CPU and RAM. But this increase will affect not the database but also on front-end code, admin panel, email handler, etc.

As a **Microsevice developer**, the application which includes front-end code, admin panel, database, email handler, etc each sits on a **separate server**.

Consider an Application and divide it into three portions as follow:

- front-end
- backend admin
- backend database

[WordPress](https://taimoorsattar.dev/blogs/wordpress) for a monolithic developer makes websites; use a certain plugin, the theme for the website and deploy it on the Hosting website which gives service for hosting website.