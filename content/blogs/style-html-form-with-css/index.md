---
title: How to style HTML form with CSS
description: HTML forms are used for user input/interaction. We can style the
  HTML form using CSS. In this blog, we style the HTML form with a search icon
  wrap inside it.
date: 2021-01-21T16:21:10.500Z
tags:
  - html
  - form
  - style
  - css
featuredpost: false
featuredimage: form-style.jpg
---
HTML forms are used for user input/interaction. We can style the HTML form using CSS. In this blog, we style the HTML form with a search icon wrap inside it.

We use the below concepts in CSS to style the HTML form.

- [Box Model](https://taimoorsattar.dev/blogs/box-model-in-css)
- Position

Box model in CSS consists of the following elements:

- Content
- Margin
- Padding
- Border

**Content** is the text that the user writes on the input form. We can increase the gap of input related to the content with **padding**. The **border** defines the borderline of input. The space outside of the input form is defined by the **margin**.

By default, the HTML form has a default blue outline. You can remove the outline using the CSS outline property.

Position in CSS defines the position of HTML elements related to the reference (that we can define). As you see in the below picture, the search icon is on the right of the input. This is possible by the use of position CSS property.

In the HTML, we can write the code as below:

```html
<div class="field">
  <img
       class="image"
       alt="search"
       src="https://img.icons8.com/search"
  />
  
  <input
         class="input"
         placeholder="SEARCH HERE"
         type="text"/>
</div>
```

In the above HTML code, `img` and `input` HTML element is wrapped inside the div.

In the CSS code, paste the below code:

```css
.field{
  position: relative;
  display: inline-block;
  
}
.image{
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
}

.input{
  background-color: #F2F2F2;
  border: none;
  padding: 15px 20px;
  padding-right: 50px; /* text and image don't overlap */
  font-size: 20px;
}
```

The div has the position set to a relative in CSS and the `img` icon position related to the `div`(reference).

You can view the code at the following CodePen link:

🔗 [codepen/taimoorsattar/pen/rNePNNb](https://codepen.io/taimoorsattar/pen/rNePNNb)