---
title: manipulating the DOM using javascript
description: Javascript is an object-oriented programming language and was
  designed to add interactivity to HTML pages.
date: 2021-01-03T19:32:46.321Z
featuredpost: false
---
[Javascript](https://taimoorsattar.dev/blogs/javascript) is an object-oriented programming language and was designed to add interactivity to HTML pages. It is popular language with 100 libraries and framework of Javascript will find on the internet. It works in all major browsers, such as IE, Firefox, Chrome, Opera, and Safari. It can be run on the browser and also on the server (Node).

Manipulate the DOM, we need to do two (2) things:

- Get the reference of the HTML element from the DOM.
- Change the attribute/value of the HTML element.

## Get the reference of the HTML element from the DOM

To get the reference of JavaScript, you can target the HTML element with their ID, tagname and class name as below:

```javascript
const apple= document.getElementById('apple');

const animals = document.getElementsByTagName('p');

const eagle = document.getElementsByClassName('bird eagle');
```

In the CSS selector, the ID name should be unique throughout the DOM but we have multiple Tagname and ClassName inside the DOM.

## Change the attribute/value of the HTML element

We can manuplate the value of HTML elements after getting the reference from the DOM. 

- Change the Text
- [Manuplate the styling](https://taimoorsattar.dev/blogs/css-with-javascript)
- [Change the attribute](https://taimoorsattar.dev/blogs/guide-to-the-customs-data-attributes)
- Delete the HTML elements from the DOM.

