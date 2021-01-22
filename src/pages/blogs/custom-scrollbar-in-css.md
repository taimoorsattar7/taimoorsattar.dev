---
title: Custom scrollbar in CSS
description: You can customize the scrollbar in CSS using pseudo-elements with
  WebKit browsers
date: 2021-01-22T13:00:52.553Z
tags:
  - css
  - scrollbar
featuredpost: false
---
You can customize the scrollbar in CSS using **pseudo-elements** with WebKit browsers. You can use the following **pseudo-elements** in CSS to customize the scrollbar.

|Sr# | Selector | Description |
|:--- |:---- |:----:|
|1.| ::-webkit-scrollbar | The scrollbar |
|2.| ::-webkit-scrollbar-thumb | Draggable scrolling handle of scrollbar. |
|3.| ::-webkit-scrollbar-track | Track of the scrollbar. |
|4.| ::-webkit-scrollbar-track-piece | Track of scrollbar that's not covered by the handle. |
|5.| ::-webkit-scrollbar-button |  Buttons on the scrollbar |
|6.| ::-webkit-scrollbar-corner | Bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet. |
|7.| ::-webkit-resizer | Draggable resizing handle that appears at the bottom corner of some elements (TextArea). |
|8.| -webkit-box-shadow | Shadow of the scrollbar. |


The scrollbar of the browser might not appear if your content does not exceed the browser height. To view the scroll bar you need to add more content to the page or force the browser to show the scroll bar using CSS as below:


```css
body {
  overflow-y: scroll; /* Show vertical scrollbar */
  overflow-x: scroll; /* Show horizontal scrollbar */
}
```

Using the above CSS code, we can force the browser to show the scrollbar but the scrolling track might not appear if your content on the page is not enough as compared to the browser width.


Using the scrollbar pseudo-elements, we can customize the browser scrollbar using CSS as below:

```
/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #adadad;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #9b9b9b;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
```

Also, we can customize the scroll of HTML elements e.g. sidebar navigation. In CSS, we can define the content dimension and if the content exceeds the dimension, we can scroll it to view the full content. 

In HTML, paste the long text:

```html
<p class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo dui et lectus.
  </p>
```

In the CSS, paste the code as below.

```css
.content{
  overflow-y: scroll;
  max-width: 960px;
  height: 160px;
  border: 1px solid grey;
}

/* Handle */
.content::-webkit-scrollbar-thumb {
  background: lightcoral;
  border-radius: 5px;
}
```

So when the content height exceeds 160px height, we need to scroll to view the full content.
