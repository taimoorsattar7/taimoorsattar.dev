---
title: Markdown Basic Guide | Getting started
description: >-
  Markdown is the light weight, plain text language that you can use to add
  formatting to your document.
date: 2020-03-04T19:04:23.058Z
tags:
  - markdown
  - guide
featuredpost: false
---
Markdown is the lightweight, plain text language that you can use to add formatting to your document. The best part of Markdown is that you don't need to download anything; plain text editor is enough. Using Markdown, we can convert text to HTML without requiring the skills of HTML and CSS. Rich text WYSIWYG (what you see is what you get) used in the same terminology as markdown but in a different method. Markdown is clean and simple to look in simple plain text.

Here are some Markdown document applications that are by default present on your system:


- Mac: MacDown, iA Writer, or Marked
- iOS / Android: iA Writer
- Windows: Markdown Monster
- Linux: ReText or ghostwriter
- Web: Gitbook, Dillinger or StackEdit

## Overview of Rich Editor (WYSIWYG)

In WYSIWYG, you will provide a bar where you can choose styles for the text.  Some of the styles of the text include bold, italics, bullets, etc. Google Docs / Microsoft Word is the most popular rich editor for creating content.

## How does it work?

Markdown is generally written in a file that has an extension of .md or .markdown extension. In order for markdown to display on the browser, you have to process the markdown to HTML; a simple script or markdown processor can do the trick. 

## Writing Markdown

Writing markdown is scary at first but becomes easy as you become familiar with it. We will cover some of the symbols used in markdown to add tags to the text.

### Heading

In markdown, you can go up to six levels deep from h1 to h6 tag by repeating the symbol #. Below is an example.

```
# This is h1 tag
## This is h2 tag
### This is h3 tag
```

### Emphasis

We can Emphasis on text from the bold and italic symbols. In markdown, you can write as follow.

```
Emphasis: *example* or _example_
italics : **example** or __example__
Emphasis + italics ***example*** or ___example___
```

### Numbered, Bullet, Nesting, and Tasklist

For the **Numbered list item**, you can type number as `1`, `2` or `3` followed by space as shown below.

```
1. Ordered list item
2. Ordered list item
3. Ordered list item
```

For **Bullet-ed list item**, you can type `*`, `-` or `+` followed by a space.

```
- Bullet-ed list item
- Bullet-ed list item
- Bullet-ed list item
```

For the **Nested list item**, you can follow the same rule as shown for Bullet-ed and ordered list.

- First level
    - Second level

1. First level
    1. Second level

- First level unordered list item
    1. Second level ordered list item


The **task list** shows the activity completed and pending. In markdown, we can show as following.

```
- [ ] Unfinished task list item
- [x] Finished task list item
```

### Links and Images

In Markdown, Links are images symbol are much similar. We can write links in markdown as follows [text](follow-link).
```
[text to link](http://example.com)
```

In Markdown Image, Images are sown by the following symbol as shown below.

```
![example Image](http://example.com/image.jpg)
```

### Comments in Markdown

Comments in markdown are not shown, These are just for your reference and you can write it as follow.

```
<!-- This is a comment -->
```

### Tables

In markdown, we can represent tables as represented below.

```
|Sr# | First Column | Second column | Third column  | 
|:--- |:---- |:----:| ----:|
|1.| is | is | is  |
|2.| left | nicely | right  |
|3.| aligned | centered | aligned  |  
```

The above will render as follow.

|Sr# | First Column | Second column | Third column  | 
|:--- |:---- |:----:| ----:|
|1.| is | is | is  |
|2.| left | nicely | right  |
|3.| aligned | centered | aligned  | 

### Summary
Markdown is clean and simple to write in the clean text editor. It is supported by many applications from desktop to Mobile.