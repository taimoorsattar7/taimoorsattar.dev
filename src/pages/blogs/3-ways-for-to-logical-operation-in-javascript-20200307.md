---
title: 3 ways for to logical operation in Javascript
description: logical operation in Javascript
date: 2020-03-07T15:55:08.953Z
tags:
  - javascript
featuredpost: false
---

```
if (age > 18){
   console.log("you are eligible for the position")
}
```

## Conditional (Ternary) Operator
```
var voteable = (age < 18) ? "Too young":"Old enough";
```

Switch Operator
```
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

JSON Logic