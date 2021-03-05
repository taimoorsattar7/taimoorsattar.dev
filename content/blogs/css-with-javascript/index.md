---
title: How to manipulate CSS with javascript
description: CSS is used to style the HTML elements. Also, we can use Javascript
  to style the HTML elements.
date: 2020-12-30T16:46:31.185Z
tags:
  - CSS
  - javascript
featuredpost: false
---
CSS is used to style the HTML elements. We can assign the style property to HTML elements by targeting their class name and ID. Also, we can use Javascript to style the HTML elements.

## Why to use JavaScript for styles when CSS can handle them?

CSS is used to style the HTML elements, but CSS stylesheet applies when the pages initial load. After the page loads, the reader starts to interact with the page. So, CSS is not handy to apply styling based on user interaction. Although, CSS Pseudo selector e.g. hover on HTML element, style HTML elements based on user interaction; but it is fairly limited.

In Javascript, we can listen to the event e.g. clicking the button. When the event has listened, it executes the function that we can define.
 We can also define our custom styles to HTML elements using JavaScript as below.

```
javascript
// sample
document.getElementById(id).style.property = new style
```

In the above sample, we can change the `property` and
 `new style` value to apply our custom styling.

## Example

In the example, we want to toggle the color of the button when it's clicked. In HTML, write the below code for the button.

```html
<button id='myBtn' type="button">
  Toggle between Black and red color
</button>
```

In the CSS, add the custom styles to the button:

```css
button{
  display: block;
  cursor: pointer;
  
  background-color: black;
  color: white;
  
  font-size: 1.2rem;
  padding: 5px 7px;
  margin: 0;
  border-radius: 4px;
}
```

In the Javascript, get the reference for the button. For the button add the click event listener and in the function of an event listener, add the [conditional statement](https://taimoorsattar.dev/blogs/conditional-statements-in-javascript) to toggle between the color of the button.

```javascript
let button = document.getElementById("myBtn");

button.addEventListener("click", toggle);

function toggle(){
  
  button.style.color = (
    button.style.color=='white' ||
    button.style.color==''
  )
    ? "red": "white";
  
}
```
