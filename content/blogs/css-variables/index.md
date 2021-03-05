---
title: How to define variables in CSS
description: CSS variables are the value that can be reused throughout the
  entire document and it saves from the reputation of values.
date: 2020-12-30T19:58:45.166Z
tags:
  - CSS
  - variables
featuredpost: false
---
CSS variables are the value that can be reused throughout the entire document and it saves from the reputation of values. We can also create CSS variables with local or global scope.

To understand more about CSS variables, we work on an example to define the CSS variable for button color.

So, In the HTML, paste the below code:

```html
<button type="button">
  I'm a button
</button>

<div class="insideDIV">
  <button type="button">
    I'm another button
  </button>
</div>
```

The above HTML displays two (2) buttons. The second button is wrapped inside of the div.

Define the CSS variable inside of **:root** selector for global scope. CSS variables defined in the selector **:root** is accessible through the entire document. In the CSS, paste the below code to define the CSS variable.

```css
:root {
  --prime-color: #1e90ff;
}
```

The `var()` function in CSS used to insert the value of CSS variables. We can use the CSS variable as below:

```css
button{
  background-color: var(--prime-color);
  color: white;
  
  padding: 5px 7px;
  margin: 0;
  border-radius: 4px;
}
```

We can also add further checks in the `var()` function. If the `prime-color` variable is not defined, then we can use the red color. 

```
.button {
  background-color: var(--prime-color, red);
}
```

We can also change the CSS varible value in the local scope as below:

```css
.insideDIV{
  --prime-color: orange;
}
```

Now the button that's wrapped inside of the div has the background color of orange.

## Why the need for CSS variables?

The advantage of CSS variables is that it can website layout more flexible. For example, to change the website color theme from Dark to light theme CSS variables are really handy. We don't need to manually change each and every value as we just need to change the value of CSS variables.