---
title: Why need for React JS?
description: React is a UI library that helps you manage a lot of things easier
  with features like Virtual DOM(normal DOM updates are slow), handling data
  with states, component-based structure, etc.
date: 2021-01-11T14:38:46.362Z
tags:
  - react
  - javascript
featuredpost: false
---
Javascript is used to add content dynamically without refreshing the page while HTML and CSS load the content on the initial page load.

HTML (.html) and CSS (.css) are static files. Static content is fast for page load as they are **pre-rendered**. But in a static website, there is no user interaction and no CMS.

In Javascript, we can fetch the data from the API source using the `fetch()` command and populate that data inside of the browser. `fetch()` command returns some promise (delay), and when the promise is fulfilled then the data gets rendered inside of the browser.

## Some history of HTML, CSS, and Javascript

HTML is used to define the markup/structure of the website. WE can define the structure like heading, paragraph, div, etc. HTML is a declarative language. In an HTML file, you can declare something like:

```html
<div>
  <h1>I am a text</h2>
  <p>I am a paragraph</p>
</div>
```

CSS is used for styling the HTML elements. We can target the HTML by their tag name, classes, or by id. We can write the CSS as below:

```css
h1{ font-size: 20px; }
p{ font-size: 12px; }
```

The **Javascript** is the programming language of **browser**. Javascript is used for dynamic content appearing without refreshing the page. JavaScript was designed to add interactivity to HTML pages.

## why React?

React is a UI library that helps you manage a lot of things easier with features like Virtual DOM(normal DOM updates are slow), handling data with states, component-based structure, etc.

In Javascript, we have two approaches for writing the application:

- DOM focused approach
- Data declarative view approach

## DOM focused approach

DOM approach working with DOM and working with DOM is slow. In this approach, code is fragmented; some in Javascript, some in HTML.

## Data declarative approach

Data declarative approach contains a render function that contains UI complete. It is a much faster approach than the DOM approach. but...

**Cons:** If one data of an element in the section is changed, then the complete section is re-render instead of just that element.

So, React is the best of both worlds (DOM and Data declarative approach). React helps us to render only those components that require change.