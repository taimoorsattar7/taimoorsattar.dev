---
title: Box model in CSS
description: "HTML elements are considered as boxes that take some area. We can
  explain the HTML element area in CSS as box model. "
date: 2021-01-18T17:31:23.338Z
tags:
  - box model
  - css
featuredpost: false
---
We can consider HTML elements as boxes that take some area. Area of HTML element can be sum as below:

* Content of HTML element
* Space from the content to the boundary wall
* Boundary wall
* Space outside of the boundary

In CSS, we can adjust the space of the HTML element with the Box Model. Box model mainly consists of 3 elements:

- **Content**: The content area is defined by its dimension (width and height).
- **Padding**: Space from the content to the boundary wall
- **Border**: Boundary wall
- **Margin**: Space outside of the boundary

We can explain the box model concept visually as below:

![Box Model](/img/html-box.jpg "Box Model")

In the above image, the blue highlighted area is the content, the green highlighted area is padding, has no border, and the red highlighted area is the margin.

In CSS, we can adjust the box model as below:

```css
.box-model {
  border: 1px solid grey;
  padding: 8px 15px;
  margin: 7px 15px;
}
```

We can tweak the value of padding, border, and margin to adjust the area of the HTML element.

For more customization, we can expand `padding: 8px 15px` code as below:

```css
.box-model {
  padding-top: 8px;
  padding-right: 15px;
  padding-bottom: 8px;
  padding-left: 15px;
}
```

The above case is the same for margin. We can adjust the top, left, bottom, and right values individually. 