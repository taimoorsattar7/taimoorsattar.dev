---
title: How to create responsive text
description: To create a responsive text, we can adjust font properties based on the browser size..
date: 2021-06-15T06:03:37.094Z
tags:
  - responsive text
  - CSS
  - HTML
---


To create a responsive text, we can adjust font properties based on the browser size. On the mobile screen, text should be large enough so that it is easily understand by the reader; and same should follow on desktop and tablets.

We can use three (3) technique in CSS to create responsive text:

- CSS function (calc)
- Using Media Query
- `min()`, `max()`, and `clamp()`

But first... we need to understand how we can define text in HTML and style it using CSS.

In the HTML, we can write text in `span`, `div`, `headings (h1-h6)` elements, etc. We can write text in HTML as below.

```html
<h1 class="text">This is simple text</h2>
<div class="text">This is simple text</div>
<span class="text">This is simple text</span>
```

In CSS, we can style the text element as below:

```css
.text {
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: normal; /* bold, bolder, lighter */
  font-style: italic; /* normal, oblique */
  font-size: 108%;

  text-align: center;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.7);
  text-transform: lowercase; /* capitalize, uppercase */
  text-indent: 25px;
  text-decoration: underline;

  line-height: 1.4;
  letter-spacing: 4px;
  word-spacing: 10px;

  background-color: #fff;
  color: #000;
}
```

In the above code, we use CSS properties to style the text element. The below table describes about some of the CSS properties:

| Property        | Description                                       |                 Values                  |
| :-------------- | :------------------------------------------------ | :-------------------------------------: |
| color           | Sets the color of a text                          |            RGB, hex, keyword            |
| line-height     | Sets the distance between lines                   |        normal, number, length, %        |
| letter-spacing  | Increase or decrease the space between characters |             normal, length              |
| text-align      | Aligns the text in an element                     |      left, right, center, justify       |
| text-decoration | Adds decoration to text                           | none, underline, overline, line-through |
| text-indent     | Indents the first line of text in an element      |                length, %                |
| text-transform  | Controls the letters in an element                | none, capitalize, uppercase, lowercase  |

Now, we have understand how to write text in HTML and style it using CSS. Next, we need to understand how we can adjust these properties based on the browser screen size.

## CSS function (calc)

You can adjust the font size when the browser width changes using CSS property `calc`. The `calc` function in CSS let you perform calculation based on the mathematical expression. We can adjust the font size on different screen sizes in CSS using `calc` function as below. 

```css
h1 {
  font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  /* font-size: calc(16px + (100vw*0.1)); */
}
```

In the above CSS code, **vw** and **vh** unit stands for viewport width and viewport height.

## Using Media Query in CSS

[Media Query](https://taimoorsattar.dev/blogs/media-queries-in-css) is used to define the certain break point conditions. When the break point condition occur, certain CSS properties are applied.

For example, in the below code we use media query to adjust the font-size on different browser screen size.

```css
.text {
  font-size: 15px;
}

/* Increse the font size when screen is below 800px  */
@media only screen and (max-width: 800px) {
  .text {
    font-size: 18px;
  }
}
```

## min(), max(), and clamp()

`min()`, `max()`, and `clamp()` are three (3) logical function in CSS.

The `clamp()` function clamps a value between an upper and lower bound. Parameters are as follow `clamp(MIN, VAL, MAX)`.

```css
.text {
  font-size: clamp(0.9rem, 1vw + 1rem, 2.2rem);
}
```
