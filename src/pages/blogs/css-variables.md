---
title: css variables
description: css variables
date: 2020-12-30T19:58:45.166Z
featuredpost: false
---
To declare the CSS variable inside of **:root** selector for global scope. If the CSS variable is defined in the selector **:root**, it is accessible through the entire document. 

```css
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}
```

The `var()` function in CSS is used to insert the value of CSS variables. To use the value of Styling, we can define it as fo

```css
button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
```

You can also set the your own value if CSS varible is not define as below:

```
.two {
  color: var(--my-var, red); /* Red if --my-var is not defined */
}
```

We can also change the CSS value define at the `:root` at the parent element as below:

```css
:root {
  --blue: yellow;
  --white: red;
}
```

## Why the need for CSS variables?

The advantage of CSS variables is that it can website layout more flexible. For example, to change the website color theme from Dark to light theme CSS variables are really handy. We don't need to manually change each and every value as we just need to change the single value of CSS varible.