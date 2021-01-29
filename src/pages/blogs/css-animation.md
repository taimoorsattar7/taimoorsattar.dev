---
title: Guide to CSS animation
description: The CSS animation is the smooth transition of an object from one
  style to another.
date: 2021-01-29T06:03:37.094Z
tags:
  - css
  - animation
  - keyframes
  - transition
featuredpost: false
---
The CSS animation is the smooth transition of an object from one style to another. There are different ways to do animation in CSS as below. 

* Transition with Pseudo selector
* Transition using JavaScript
* Keyframe Animation

## Transition with Pseudo selector

We use transition in CSS for smooth animation upon user certain action. We can target different properties of CSS to transition smoothly over a specific interval of time.

For example, if the user hovers over the button, it changes the color from a lighter to a darker state.

In HTML, we can define the button hierarchy as below:

```html
<button type="button">Click Me!</button>
```

In CSS, we can style the button as below:

```css
button {
    cursor: pointer;
    background-color: #008bb5;
    border: none;
    border-radius: 2px;
    color: white;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
```

When the user hovers the button, it changes the brightness. We can define the hover state in CSS as below:

```css
button:hover {
    transition: all 1s ease-in;
    filter: brightness(0.85);
}
```

The above CSS code transition the button brightness to 0.85 in 1 second.

Not every property in CSS can transition smoothly. For example, 

Some of the properties of CSS that can transition smoothly e.g. opacity, margin, font-size, padding, etc. These CSS properties have a range of values e.g. font-size have range of value from 1px, 2px, 3px, ....

But, the CSS property like **display** has segmented value e.g. none, inline, block, inline-block, etc. So, the CSS display property can't transition smoothly, it will change its state immediately.

## Transition using JavaScript

We can transition CSS style in Javascript by adding or removing the styles from certain HTML elements.

For example, we can add or remove classes/attributes in Javascript to transition the color of the button. You can learn more about DOM manipulation in Javascript [here](https://taimoorsattar.dev/blogs/manipulate-the-dom-using-javascript).

In the HTML, we can define the button as below:

```html
<button class="btn" onclick="toggleColor()" type="button">
  Click Me!
</button>
```

In CSS, we can define the style as below:

```css
button{
  transition: all 1s;
}

.btn-blue{
  background-color: #008bb5;
  color: white;
}

.btn-black{
  background-color: black;
  color: white;
}
```

We the button is click, we use javascript to change the state of the button color. the disabled attribute in HTML 

```javascript
var button = document.getElementsByClassName("btn")[0];

function toggleColor() {
  
  if(button.classList.contains("btn-blue")){
    button.classList.remove("btn-blue")
    button.classList.add("btn-black");
  }else{
    button.classList.remove("btn-black")
    button.classList.add("btn-blue");
  }
  
}
```

We first select the reference for the button in JavaScript and then use the `.btn-blue` and `.btn-black` classes to transition the color of the button.

## Keyframes Animation

Keyframes animation in CSS defines the transition logic with multiple breakpoints. @keyframes is similar to the function that we can bind with the animation. In @keyframes, there are different properties that we can use as below:

| Sr# | Properties                | Description                                                                | Expected Values                                                     |
| --- | ------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1.  | animation-name            | @keyframes name                                                            | could be any name                                                   |
| 2.  | animation-duration        | How Long animation would run?                                              | 1s, 2s, ...                                                         |
| 3.  | animation-delay           | Define the delay for the start of animation                                | ..., -2s, -1s, 0s, 1s, 2s, ...                                      |
| 4.  | animation-iteration-count | Define the number of counts the animation should run                       | 1, 2, 3, ...., infinite                                             |
| 5.  | animation-direction       | Define animation should play in forwards, backward, or in alternate cycles | normal, reverse, alternate, alternate-reverse                       |
| 6.  | animation-timing-function | It defines the speed curve over the time interval of animation             | ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(x,x,x,x) |
| 7.  | animation-fill-mode       | Define the style for the element when the animation is not playing         | none, forwards, backwards, both                                     |

For example, we can animate the text of the button using @keyframes.

In HTML, we can define the button as below:

```html
<button onclick="toggleColor()" type="button">
  Click Me!
</button>
```

We need to define the transition logic for text color change in @keyframes as below.

```css
@keyframes colors {
  0% {
    color: red;
  }
  50% {
    color: blue;
  }
  100% {
    color: green;
  }
}
```

We then need to bind the @keyframes name in the animation as below:

```css
button {
  font-weight: bold;
  animation: colors 1.5s 1s infinite;
}
```

To use the @keyframes we use the **animation** property to define the transition for a specific time interval. animation property is a general statement for define transition.

We can breakdown the above CSS animation code as below  and the results is the same:

```css
button {
  font-weight: bold;
  animation-name: colors;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
}
```

The above CSS code transition between the color of text e.g. red, green, and blue in 1.5 seconds and takes (delay) 1 second to start the animation.