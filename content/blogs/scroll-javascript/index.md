---
title: scroll javascript
description: scroll javascript
date: 2021-04-15T19:13:20.478Z
featuredpost: false
---
In this tutorial, we build a page that responds on scroll. Here are the things that we will cover in this tutorial.

* Click to Scroll to the top of the page
* Animate to reveal the image when its in view
* Display scroll position in percentage on screen

You can view the full source code on Github.

👉👉👉 https://github.com/taimoorsattar7/page-scroll

Preview the final result at the below link.

👉👉👉 https://taimoorsattar7.github.io/page-scroll

## Get Started

To get started, create a project folder, `scroll-page`. Inside of it, create the files as below.

```html
scroll-page
└── index.html
└── script.js
└── style.css
```

In the `index.html` file, paste the code as below. Add long text and image so that, you will be able to scroll down into view. You can copy long text and image URL using tools like [lipsum.com](https://www.lipsum.com) for text and [picsum.photos](https://picsum.photos) for photos. 

```html
<div class="scroll-bar">
  <div class="headline headline__text">
    <span id="scroll-percentage">0</span>
    % scroll
  </div>
</div>

<div onclick="scrollToTop()" class="top_pos">
  TOP
</div>

<div class="wrapper">

  <h2 class="headline headline--margin-b-large">
    About Website scroll
  </h2>
  <p class="headline headline__text">
    Place long text here...

    <img src="https://i.picsum.photos/id/1045/700/300.jpg?hmac=gWlSg2pLK_5xa7FmFKqyxI7S1nGeMCP8pJD9tnD-Y_0"
           alt="image"
           loading="lazy" />

  </p>

</div>
```

In `style.css`, we paste the below code to style HTML elements.

```css
img {
  width: 100%;
  /* animate the image for 3s */
  transition: all 3s;
}

/* for Scroll progress baar percentage. */
.scroll-bar {
  position: fixed;
  z-index: 10;

  top: 10px;
  left: 50%;

  background-color: aqua;
  color: black;

  transform: translateX(-50%);

  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 7px;
  padding-right: 7px;
}

/* for TOP display. */
.top_pos {
  cursor: pointer;
  position: fixed;
  bottom: 25px;
  right: 25px;

  background-color: burlywood;
  padding: 8px;
}
```

When loading the script, add `defer` attribute. This way we can execute the javascript file when the page has finished parsing/rendering.

```html
<script src="script.js" defer></script>
```

On the page, **TOP** text displays at the bottom of the page, scrolls the page to the top when clicked. When clicked, it can execute the function in javascript to scroll the page to the top.

```html
<div onclick="scrollToTop()" class="top_pos">
  TOP
</div>
```

When the above HTML element is clicked, it calls the `scrollToTop()` function as define below:

```javascript
function scrollToTop(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
```

The above code smoothly scroll to the top of the page when the user clicks

Instead of the **scrollTo** property of the window object, we can also use other properties in the window as defined below.

| Sr# | First Column            | Second column                                               |
| --- | ----------------------- | ----------------------------------------------------------- |
| 1.  | `window.scroll(0, 100)` | Scroll down 100 pixels.                                     |
| 2.  | `window.scrollBy()`     | Scrolls the document in the window by the given amount      |
| 3.  | `window.scrollTo()`     | Scrolls to a particular set of coordinates in the document. |
| 4.  | `window.scrollToTop()`  | Scrolls to a particular set of coordinates in the document  |



Next, we need to implement a scroll position progress bar.

In Javascript, you can listen to the `scroll` event listener so that, when the page scrolls, it can execute certain functions. 

```javascript
window.addEventListener('scroll', handleScroll());
function handleScroll(){
  // your logic here...
}
```

The problem with the above code is that it listens to scroll events every millisecond. Due to this reason, performance may affect. For a single scroll, it will execute the function many times.

Instead, we should wait for some milliseconds and then execute the function. For this, we have to define the debounce function as below.

```javascript
function debounce(func, wait = 15, immediate=true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
```

In the Javascript, rather than directly calling the **handleScroll()** function in the scroll event, we can wrap inside the **debounce** function as below.

```javascript
window.addEventListener('scroll', debounce(handleScroll), { passive: true });
```

Before defining the `handleScroll` function, we need to know what values we can use to define the scroll behavior. `window` object in javascript gives us the information about the scroll behavior of the page. Following values we can use for the **window** object as below:

| Sr# | Properties           | Description                                        |
| --- | -------------------- | -------------------------------------------------- |
| 1.  | `window.pageXOffset` | return amount of scroll from the left of the page. |
| 2.  | `window.scrollX`     | Same as `window.pageXOffset`                       |
| 3.  | `window.pageYOffset` | return amount of scroll from the top of the page   |
| 4.  | `window.outerHeight` | Height in pixels of the whole browser window       |

Also, we need to figure out what value we can use for HTML elements to calculate scroll behavior.

| Sr# | Properties                 | Description                                                                           |
| --- | -------------------------- | ------------------------------------------------------------------------------------- |
| 1.  | `HTMLElement.offsetWidth`  | Returns the layout width of an element                                                |
| 2.  | `HTMLElement.offsetHeight` | Returns the height of an element, including vertical padding and borders              |
| 3.  | `HTMLElement.offsetTop`    | Returns the distance of the current element relative to the top of page               |
| 4.  | `HTMLElement.height()`     | Same as `HTMLElement.offsetHeight`                                                    |
| 5.  | `HTMLElement.clientHeight` | Calculated as CSS height + CSS padding - height of horizontal scrollbar (if present). |
| 6.  | `HTMLElement.clientWidth`  | Calculated as CSS width + CSS padding - height of vertical scrollbar (if present).    |



So, using the above information, we can define the scroll behavior of the page. We can define `handleScroll` function as below: 

```javascript
// Reference for scroll display HTML element
const scroll_pos = document.getElementById('scroll-percentage');

const handleScroll = () => {
  const position = window.pageYOffset;


  // update scroll progress bar
  var docHeight = (document.height !== undefined) ?
                    document.height - window.outerHeight :
                    document.body.offsetHeight - window.innerHeight;
  let page_offset = (window.pageYOffset);

  let scroll_value = Math.floor( (page_offset/docHeight) * 100);
  if (scroll_value > 100) scroll_value = 100;
  scroll_pos.innerText = scroll_value;

  // reveal image on scroll

  // uncomment the below line
  // reveal_img_scroll(page_offset + window.innerHeight)
};
```

In the `handleScroll` function, we have commented out the `reveal_img_scroll` function. Uncomment this line. `reveal_img_scroll` function reveals the image when the screen is scroll into view of the image.

When the DOM loads, we need to decrease the opacity of all the images to zero (0) and increase to 100% when the image is on the view of the window.

```javascript
document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll('img').forEach(function(img){
    img.style.opacity = "0.0";
  });
  handleScroll();
});
```

We can define the **reveal_img_scroll** function as below. 

```javascript
function reveal_img_scroll(scroll_page){
  document.querySelectorAll('img').forEach(function(img){
    if(
        (img.offsetTop < scroll_page) &&
        (img.style.opacity < 1)
      ){
      img.style.opacity = "1.0";
    }
  });
}
```

Now scroll down into view of the image, the image will animate to 100% opacity.

<video controls>
  <source src="https://storage.googleapis.com/masterpro/code/responsive-design/animation/page-scroll.mp4" type="video/mp4">
</video>