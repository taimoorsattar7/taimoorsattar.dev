---
title: "How to create Responsive Image "
description: Images are visuals that display on the browser. Responsive image
  responds to different screen size and pixel ratio.
date: 2021-01-18T06:45:59.503Z
tags:
  - html
  - css
  - responsive
  - image
featuredpost: false
---
Images are visuals that display on the browser. Responsive image responds to different screen size and pixel ratio.

In HTML, we can define the image as below:

```html
<img src="https://i.picsum.photos/id/465/400/250.jpg?hmac=vVcJOtPyTGcmZWyVhATYztYAIGgUqDrUbs2hi4-Y5uM"
     alt="Nature" />
```

With the above code, the image takes its actual dimension when display on the browser. If the image's actual width is greater than the browser width, we need to scroll to view it completely.

We can adjust the image that responds to the browser width resize using CSS with the below code:

```css
img {
  width: 100%;
  height: auto;
}
```

With the above CSS code, the image adjusts its size on browser screen size.

That not the end of the story!!!

We don't need to display the same image on different screen sizes e.g. desktop, tablet, etc. When the browser is resized, we can just the following properties of the image:

- dimension (width x height)
- File Size

We need to load the small-size image on a small screen e.g. Mobile for fast page load. To achieve this, we have to create image with different file size, dpi, and dimension ratios.

| Sr#         | Dimension (width x height) | Pixel ratio (width / height) |                                                   image src                                                   |
| :---------- | :------------------------- | :--------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| mobile-1x.  | 400x400                    |             1:1              | [copy image link](https://i.picsum.photos/id/1/400/400.jpg?hmac=lOytrN6lDOH_Yx7NwwGIaCtxp6pyuH2V4hD6Eac-VI0)  |
| mobile-2x.  | 800x800                    |             1:1              | [copy image link](https://i.picsum.photos/id/1/800/800.jpg?hmac=UF7Y-1Oxv1yesEXGfDd1wixbr41dJs6Osx-YS-2TLvM)  |
| desktop-1x. | 1200x600                   |             2:1              | [copy image link](https://i.picsum.photos/id/1/1200/600.jpg?hmac=7xDzyVlLdITHaM66cy-yrgS6i437QYFJJ1PNYcJTO3Y) |
| desktop-2x. | 1600x800                   |             2:1              | [copy image link](https://i.picsum.photos/id/1/1600/800.jpg?hmac=LXp6QsSJavPlkMiVw9XVNVVgy3EWw2paL3BP0O4iFfs) |

For reference, you can use the above image src. The reference image source is from [picsum.photos](https://picsum.photos). If you want more customization, you can use software like PhotoShop, etc.

We can use [media query](https://taimoorsattar.dev/blogs/media-queries-in-css) to assign custom styling based on the browser screen size.

In HTML, we can write the code as below:


```html
<picture>
  <source
    srcset="
      https://i.picsum.photos/id/1/1200/600.jpg?hmac=7xDzyVlLdITHaM66cy-yrgS6i437QYFJJ1PNYcJTO3Y        1920w,
      https://i.picsum.photos/id/1/1600/800.jpg?hmac=LXp6QsSJavPlkMiVw9XVNVVgy3EWw2paL3BP0O4iFfs 3840w
    "
    media="(min-width: 1380px)"
  />
  <img
    srcset="
      https://i.picsum.photos/id/1/400/400.jpg?hmac=lOytrN6lDOH_Yx7NwwGIaCtxp6pyuH2V4hD6Eac-VI0         640w,
      https://i.picsum.photos/id/1/800/800.jpg?hmac=UF7Y-1Oxv1yesEXGfDd1wixbr41dJs6Osx-YS-2TLvM 1280w
    "
    alt="Coastal view of ocean and mountains"
    class="large-hero__image"
  />
</picture>
```

Above, we use the `<picture>` tag in HTML to give more flexibility in selecting an image source. Now, if you resize the browser, the image dimension will change.