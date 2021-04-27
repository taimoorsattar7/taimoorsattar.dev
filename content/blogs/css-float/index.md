---
title: CSS Float
description: The float CSS property places an element on the left or right side
  with respect to other elements, allowing text and inline elements to wrap
  around it.
date: 2021-04-27T02:07:58.166Z
featuredpost: false
---
The float CSS property places an element on the left or right side with respect to other elements, allowing text and inline elements to wrap around it. Floats remove the HTML element from the normal flow of the page. To understand more about CSS float property, we cover an example.

In the example, we float an image side-by-side of text as shown in the below image.

![](https://storage.googleapis.com/masterpro/code/responsive-design/float-example-1.jpg)

You can view the full source code example at CodePen below:

https://codepen.io/taimoorsattar/pen/OJXMbRK
👆👆👆

The HTML structure for the code is define below:

```html

```

The structure of CSS / HTML structure for the above example is shown as below:

```css

```

`.wrapper` class is used to maintain **960px** width and center the HTML element.

```css

```

To place the image right and left of the content, we need to style the HTML element with the class name of `.img-right` and `.img-left`.

```css

```

The gap between image and text is controlled by the padding property of text. We set `box-sizing` property to every HTML element so the width of every HTML element stays intact.

![Border Box](https://storage.googleapis.com/masterpro/code/responsive-design/css/border-box.jpg)

```css

```

As described in the below image, the second's image overlaps the area of the first content. We need to fix the floats so the next content starts after the first content ends.

![](https://storage.googleapis.com/masterpro/code/responsive-design/float-clearfix.jpg)

To clear float in CSS, we will follow the below code:

```css

```