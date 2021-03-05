---
title: How to use an HTML Link
description: "HTML Link in the website is used to navigates from page to page.
  We can define an attribute on the HTML link to make it more meaningful. "
date: 2021-01-12T16:58:56.043Z
tags:
  - html
  - link
  - tag
featuredpost: false
---
HTML Link in the website is used to navigates from page to page. We can define an attribute on the HTML link to make it more meaningful. The Search engine e.g. Google crawls the website to get information from the links on the website.

In simple, we define the link attribute in HTML as below:

```html
<a href="https://taimoorsattar.dev">Text Area</a>
```

Above, we have defined one(1) attribute to the HTML link, **href**. The **href** is an important attribute of the link that tells where to navigate when the link is clicked.

In **href** attribute, navigation is not limited to pages. You can also define the page navigation for telephone and email.

Below you can tell the web browser to open the link on the email service provide e.g. Outlook.

```html
<a href="mailto:taimoorsattar7@gmail.com">Email Me</a>
```

We can define the telephone number in the HTML.

```html
<a href="tel:+1123-456-1214">123-456-1214</a>
```

Below are listed attributes that you can define in the HTML link.

|Sr# | HTML link Attributes | Description |
|:--- |:---- |:----:|
|1.| title | Tooltip for the user or the title of the link.  |
|2.| download | Browser action to download the file. |
|3.| target | Specify where to open the link. |
|4.| rel | Specify Link between current and linked document. |

`rel` attribute tells the search engine the purpose/relationship of the linked document. You can define the following values to the rel attribute:

- alternate
- author
- bookmark
- external
- help
- license
- **nofollow: The Search engine will not crawl this link and will not be counted as a backlink.
- noreferrer
- noopener
- prev
- next
- search
- tag
- **sponsored** link attribute to highlight sponsored and affiliate links
- **rel="usg"** link attribute to highlight links in the user-generated content.

For **target** link attribute, you can define the following values as below 

- _blank: Open the linked document in the new Browser Tab
- _parent
- _self
- _top: Opens the linked document in the full body of the window.
