---
title: How to Schedule Cron Tasks in Node.js?
description: Cron Tasks in Node.js
date: 2020-03-09T18:03:03.225Z
tags:
  - cron
  - node
featuredpost: false
---
cron is a Linux utility that is simple script to schedule task that runs automatically after some interval of time.

**For example**, you want to write a script that logs out "Hello World" after every 1 min, you can achieve this by writing simple cron task script.

## Understanding cron Job

#How to achieve cron task
You can write cron task script using Node by leveraging the power of node package `node-cron`. It provides function to leverage the power of cron task.

```
[min hour day month week]
```
Install the labrary by using below command.
```
 npm install express node-cron
```

## Using node-cron

```
const cron = require('node-cron');
const sendBirthdayMessage = () => { console.log("I love you 💻") };

// schedule takes two arguments, cron time and the task to call when we reach that time
cron.schedule('10 20 23 9 1', sendBirthdayMessage())
```

```
// Each subscription is connected to a client
const allSubscriptions = {}

const registerTasks = (subscription) => {
  const endpoint = subscription.endpoint;

  // My remote machine is on UTC time and I live in Japan so I made the appropriate calculation
  const morningTask = cron.schedule('30 23 * * *', () => {
    sendNotification(subscription, JSON.stringify({ timeOfDay: 'morning' }));
  });
  const afternoonTask = cron.schedule('30 6 * * *', () => {
    sendNotification(subscription, JSON.stringify({ timeOfDay: 'afternoon' }));
  });
  const nightTask = cron.schedule('15 14 * * *', () => {
    sendNotification(subscription, JSON.stringify({ timeOfDay: 'evening' }));
  });

  allSubscriptions[endpoint] = [morningTask, afternoonTask, nightTask];
};

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  registerTasks(subscription);
  res.send('subscribed!');
});


// Allows our client to unsubscribe
app.post('/unsubscribe', (req, res) => {
  const endpoint = req.body.endpoint;
  allSubscriptions[endpoint].forEach(task => {
    // destroy allows us to delete a task
    task.destroy();
  });
  delete allSubscriptions[endpoint];
});

```
