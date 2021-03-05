---
title: How to use blob object in JavaScript?
description: The blob object in javascript used to represent the raw data with
  different media types (MIME Type).
date: 2021-01-04T03:15:05.544Z
tags:
  - javascript
  - blob
featuredpost: false
---
The blob object in javascript used to represent the raw data with different media types (MIME Type). We can use blob as a file system and can be store on the memory or browser depending on blob size.

The blob object is useful in different scenarios as below:

- Create a temporary file that could be used to preview files before uploading to the server like image preview.
- Download content on the website like create PDF from HTML content.


We can create a blob object using the Blob constructor. The blob constructor consists of two parts as below:

- blobPart (representation of data in array type)
- blob type (Mime Type e.g. media type)

You can define the blobType (media types) in blob constructor e.g. `image/jpeg`, `text/html`. You can view different media types at [this page](https://en.wikipedia.org/wiki/Media_type#Common_examples).


```
const blob = new Blob([textarea], { type: "image/jpeg" });
```

After the blob object is created, you have access to below two (2) properties:

- Size
- MIMEtype (Media type)

You can console.log the output as below:

```
console.log(blob.size)
console.log(blob.type)
```

We can create the URL representation of the blob using the below command in Javascript:

```javascript
URL.createObjectURL(blob)
```

As the web page URL starts with `https://` and the file URL starts with `file://`, the blob URL starts with `blob://`.