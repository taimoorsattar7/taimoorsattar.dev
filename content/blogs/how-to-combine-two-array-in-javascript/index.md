---
title: How to combine two array in JavaScript?
description: Combine arrays in Javascript using concat and Spread operation
date: 2020-12-26T12:30:08.016Z
tags:
  - javascript
  - arrays
featuredpost: false
featuredimage: /img/development.jpg
---
You can combine arrays in Javascript in two ways:

- `concat` (ES5 version)
- Spread operation / destructuring (ES6 version)

So, let suppose you have arrays in Javascript as below.

```
var fruit1 = ["apple", "banana"];
var fruit2 = ["oranges", "grapefruits", "mangoes"];
var fruit3 = ["strawberries", "raspberries", "blueberries"];
```

## use concat (ES5 version):

If you want to support the old browser, you can use the ES5 version `concat` in Javascript. Perform the combination operation javascript as below.

```
var cart1 = fruit1.concat(fruit2);
// ["apple", "banana", "oranges", "grapefruits", "mangoes"]

var cart2 = fruit3.concat(fruit1, fruit2);
// ["strawberries", "raspberries", "blueberries", "apple", "banana", "oranges", "grapefruits", "mangoes"]
```

Further, you can also write the command as below:

```
var fruits2 = [].concat(fruit1, fruit2, fruit3);
```

## Spread operation / destructuring (ES6 version)

Spread operation is easy to write in Javascript. Perform the combination operation using spread operation in javascript as below:

```
const cart3 = [...fruit1, ...fruit2, ...fruit2];

// ["strawberries", "raspberries", "blueberries", "apple", "banana", "oranges", "grapefruits", "mangoes"]
```
