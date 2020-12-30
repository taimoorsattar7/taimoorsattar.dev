---
title: CSS with javascript
description: CSS is used to style the HTML elements.
date: 2020-12-30T16:46:31.185Z
featuredpost: false
---
CSS is used to style the HTML elements. We can assign the style property to HTML elements by targeting their class name and ID's. Also, we can use Javascript to style the HTML elements.

## Why to use JavaScript for styles when CSS can handle?

CSS is used to style the HTML elements, but CSS stylesheet applies when the pages initial load. After the page loads, the reader starts to interact with the page. So, CSS is not handy to apply styling based on user interaction. Although, CSS Pseudo selector e.g. hover on HTML element, style HTML elements based on user interaction; but it is fairly limited.

In Javascript, we can listen to the event e.g. clicking the button. When the event has listened, it executes the function that we can define. We can also define our custom styles to HTML elements using JavaScript as below.

```javascript
// sample
document.getElementById(id).style.property = new style
```

In the above sample, we can change the `property` and `new style` value to apply our custom styling.

## Example

In the example, we want to toggle the color of the button when it's clicked. So, In HTML, we can write the below code for the button.



```
document.getElementById("p2").style.color = "blue";
 square.style.backgroundColor = "#fa4";
  button.setAttribute("disabled", "true");
  setTimeout(clearDemo, 2000, button);
button.removeAttribute("disabled");
```

display 


```
  var style = document.createElement('style');
  style.innerHTML = `
  #target {
  color: blueviolet;
  }
  `;
  document.head.appendChild(style);
```


