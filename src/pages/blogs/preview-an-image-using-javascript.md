---
title: preview an image using Javascript
description: We can use the blob object in JavaScript to preview an image. It is
  useful in scenarios when you want your user to preview the image post before
  uploading it to the server.
date: 2021-01-05T18:22:56.853Z
tags:
  - javascript
  - image
  - preview
featuredpost: false
---
We can use the [blob object](https://taimoorsattar.dev/blogs/javascript-blob) in JavaScript to preview an image. It is useful in scenarios when you want your user to preview the image post before uploading it to the server.

We explain with an example for image preview when the file is uploaded with input. So, In the html, paste the below code:

```javascript
<input type="file"
       onchange="imagePreview(this)"
       name="avatar"
       accept="image/png, image/jpeg" />

<img id="avatar" src="" alt="avatar" />
```

When the file is uploaded `imagePreview` function is called in the javascript. That's what we implement next.

In the javascript, we can define the `imagePreview` function as below that updates the **src** of the image in the HTML.


```javascript
const avatar = document.getElementById("avatar");

function imagePreview(e) {
	const blob = new Blob([e.files[0]], { type: "image/jpeg" });
	const blobURL = URL.createObjectURL(blob);
	avatar.style.display = 'block'
	avatar.src = blobURL;
}
```

To add little styling to the `img` element, we can paste the below code:

```css
#avatar{
  width: 250px;
  border-radius: 5px;
}
```

The image blob URL is temporarily stored in the memory. When you refresh the page, the blob image URL is lost.