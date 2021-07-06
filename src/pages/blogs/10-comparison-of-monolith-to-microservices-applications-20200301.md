---
title: 10 comparison of Monolith to Microservices applications
description: Monolith to Microservices
date: 2020-03-01T16:13:52.965Z
tags:
  - Monolith
  - Microservices
featuredpost: false
---
Monolithic application are the application in which a application depends on single system, If system fails than all of the application fails. In Microservices, Application is divided in chunks and each chunk has its own system. Here are mention 10 things to move from Monolith to Microservices application.

## size and complexity

As the app goes larger in code and complexity, Monolithic appcatio becomes difficuilt to handle because there are large number of factor involves to run the syetem; if any factor not working than whole application goes down.




Benefits of Monolithic Architecture

- Simple to develop.

- Simple to test. For example you can implement end-to-end testing by simply launching the application and testing the UI with Selenium.

- Simple to deploy. You just have to copy the packaged application to a server.

- Simple to scale horizontally by running multiple copies behind a load Balancer.


Drawbacks of Monolithic Architecture

- This simple approach has a limitation in size and complexity.

- Application is too large to manage and complex to fully understand and made changes fast and correctly.

- The size of the application can slow down the start-up time.

- You must redeploy the entire application on each update.

- Impact of a change is usually not very well understood which leads to do extensive manual testing.

- Continuous deployment is difficult.



For example, You have assign a task to build an application for an application for image editing. This web application may include login of user, image manipulation platform or billing service. You do in two approach; Monolithic or Microservice application.

In Monolithic application, You create all of you application in one OS container and more focus one programming language. 

In Microservice application, You can create this application in different OS. You can create login service in one seperate container/platform and 

