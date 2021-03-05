---
title: Guide to the HTML custom data attributes
description: Data attribute allows storing/embed an extra bit of information
  private in HTML elements.
date: 2021-01-02T16:46:28.770Z
tags:
  - javascript
  - data attribute
featuredpost: false
---
Data attribute allows storing/embed an extra bit of information private in HTML elements. The data-* attributes consist of two parts:

- **attribute name**: It should not contain uppercase letters, and must be at least one character long after the prefix "data-"
- **attribute value**: Value can be of any string.

Data attributes can be useful in many ways. Some of the scenarios where data-attribute could be useful are as below:

- Add information in the menu icon whether it's open or closed.
- Load large-size images in the modal when the image is clicked for preview. We can store the URL of the large size image in the data-attribute.
- You can store the database ID of the post so that the post can be a query with their custom id.

In order to understand the custom data attribute, we work with an example to create an author data attribute and change the data-attribute when we click the button.

In the HTML, we can define the HTML data-attribute as below:

```html
<div class='author' data-id='44'>
  Taimoor Sattar
</div>
```

Below, create two (2) button in HTML when click run the javascript function to reveal/change the data-attribute.

```html
<button onclick="revealAuthorID()">
  Click to reveal the author id.
</button>

<button onclick="changeAuthorID()">
  Click me to change author id to 14.
</button>
```

In CSS, you can style the data attribute as below:

```css
.author[data-id='44'] {
  color: red;
}

.author[data-id='14'] {
  color: blue;
}
```

In Javascript, you can get/change the HTML Custom Data Attributes (data-*) in two ways.

- Using generic function e.g. **setAttribute** and **getAttribute**
- Data attributes special API

Below, we have defined two functions `revealAuthorID()` to alert the author ID and `changeAuthorID()` to change the author data-attribute.

```js
var author = document.getElementsByClassName("author")[0];

function revealAuthorID(){
  // alert(author.dataset.id);
  alert(author.getAttribute("data-id"));
}

function changeAuthorID(){
  author.setAttribute("data-id", "14");
  // author.dataset.id = 14;
}
```

