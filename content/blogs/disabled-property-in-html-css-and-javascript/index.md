---
title: Disabled Property in HTML, CSS, and Javascript
description: The disabled attribute is used to disable the user from interaction
  (e.g. typing and selecting) of HTML elements.
date: 2021-01-01T18:13:44.055Z
tags:
  - html
  - css
  - javascript
  - disabled
featuredpost: false
---
The disabled attribute is used to disable the user from interaction (e.g. typing and selecting) of HTML elements. In CSS, we can style the HTML element with the disabled attribute using the `:disabled` selector.

The disabled attribute can be used in various scenarios as below:

- Disabled input field
- Disable button for submission
- Disable option from the selection

Let's understand the disabled with an example. In the example, we create two (2) button. One button with the disabled attribute and reset button removes the disabled attribute from the first button.

In the HTML, paste the below code:

```html
<button class="button" type="button" onclick="disable()" disabled>
  disabled
</button>

<button onclick="reset()" type="button">
  Reset
</button>
```

In CSS, we define the default style of the button and also the button with the disabled attribute.

```css
.button{
  cursor: pointer;
  background-color: blue;
  color: white;
  
  padding: 5px 7px;
  margin: 0;
  border-radius: 4px;
}


.button:disabled {
  content: "disabled";
  background: #dddddd;
  color: grey;
}
```

As in the HTML, we have define `disable()` and `reset()` function for javascript. We can define two function in javascript as below:

```javascript
var button = document.getElementsByClassName("button")[0];

function reset(){
  button.innerText = "disable me";
  button.disabled = false;
}

function disable(){
  button.innerText = "disabled";
  button.disabled = true;
}
```

We change the inner text of the button when the `disabled` attribute is added to the button in HTML.