---
title: How to manipulate the DOM using javascript
description: Javascript is an object-oriented programming language and was
  designed to add interactivity to HTML pages.
date: 2021-01-07T19:52:06.347Z
tags:
  - javascript
  - DOM
featuredpost: false
---
[Javascript](https://taimoorsattar.dev/blogs/javascript) is an object-oriented programming language and was designed to add interactivity to HTML pages.

For DOM manipulation, we can generally perform the following task below:

- Get the reference of the HTML element from the DOM.
- Change the attribute/value of the HTML element.

To get the reference of HTML elements, we can target the HTML element with their ID, tagname and class name as below:

- document.getElementsByTagName('section')
- document.getElementById('message')
- document.getElementsByClassName('author')
- document.querySelectorAll('.author-name')
- document.querySelector('#foo')

The above mentioned are five (5) ways you can use to get the reference of HTML elements. In CSS, the ID value assign to HTML element should be unique and we can assign same class name to multiple HTML elements. So, The `getElementById` and `querySelector` retrns the HTML element while `getElementsByTagName`, getElementsByClassName, querySelectorAll return **HTMLCollection**.

In the case of HTMLCollection, you can get the reference of HTML elements as below:

- if `querySelectorAll` method, we can use **foreach** method to loop through HTMLCollection.
- Convert HTMLCollection to array

To understand this we can on the same example in two different ways.

In the HTML, paste the code as below:

```html
<section>
  
  <span class="author">
    <h3 class="author-name">Taimoor Sattar</h3>
    <p>I'm a human.</p>
  </span>
  
  <span class="author">
    <h3 class="author-name">Sattar Taimoor</h3>
    <p>I'm same human as above.</p>
  </span>
    
</section>

<ul class="bullets"></ul>
```

So, our task is to grab the author's name and render it in the HTML element with the **bullets** class. We can use the following code in Javascript:

```javascript
const authorName = document.querySelectorAll('.author-name');
const bullets = document.getElementsByClassName('bullets')[0];

function AuthorName(){
  let postsHTML = ''
  authorName.forEach(function(name) {
    postsHTML += `<li>${ name.innerText }</li>`;
  });
  
  bullets.innerHTML = postsHTML;
}

AuthorName()
```

Now, if we get the reference of HTML element with `getElementsByClassName`, then it does not support the `foreach` method; we have to add the [loop statement](https://taimoorsattar.dev/blogs/loop-through-an-array-in-javascript) to get the reference: 

```javascript
const authorName = document.getElementsByClassName('author-name');
const bullets = document.getElementsByClassName('bullets')[0];

function AuthorName(){
  let postsHTML = ''
  
  for (var i = 0; i < authorName.length; i++) {
    postsHTML += `<li>${ authorName.item(i).innerText }</li>`;
    // postsHTML += `<li>${ authorName[i].innerText }</li>`;
  }
  
  bullets.innerHTML = postsHTML;
}


AuthorName()
```

## What more we can do with DOM manipulation?

We can manipulate the value of HTML elements after getting the reference from the DOM.

- Change the Text
- [Manuplate the styling](https://taimoorsattar.dev/blogs/css-with-javascript)
- [Change the attribute](https://taimoorsattar.dev/blogs/guide-to-the-customs-data-attributes)
- Delete the HTML elements from the DOM.
