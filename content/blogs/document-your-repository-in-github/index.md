---
title: How to Document your repository in GitHub?
description: >-
  Documentation of your repo will help you in many aspects. When you link your
  repo to the hiring team, they will better understand what your code is doing.
date: 2020-04-03T21:39:33.966Z
tags:
  - webdev
  - beginners
  - github
featuredpost: true
featuredimage: document.jpg
---
Documentation of your repo will help you in many aspects. When you link your repo to the hiring team, they will better understand what your code is doing. Also, it will help others to contribute to your project. To write documentation for your repo, you can create `README.md` in the root of the repo.

`README.md` reads as a markdown file. I have also written details articles about [Markdown Get Started Guide](https://taimoorsattar.dev/blogs/markdown-guide-getting-started-20200304). **Markdown does not give you whole lot control over the styling of the page**. For example, center the image, adjust the width and height, etc. Additionally, you can also write HTML (inline-CSS) in the `README.md` file as shown below:

```
<div align="center">
  <br>
  <img alt="logo" src="/image.png" width="200px">
  <h1>Your headline</h1>
</div>
<br>
```

## What information to include in `README.md`?
It all depends on your project. It is how you explain what the project is all about. But I have listed out some point that you can list in your documentation repo:

- Include Photo or logo
- How it Works
- Getting started.
- Prerequisites
- How to contribute (Write CONTRIBUTING.md)
- Information about team
- Related Project
- Contributors, Backers, or Sponsors.
- License

## Add Table of Content (TOC)

If your `README.md` file has a long length, then it's better to add table of content. You can add a table of content like this below:
```
- [How it Works](#how-it-works)
- [Getting started](#get-started)
- [Contributing](#contributing)
- [Core team](#core-team)
- [License](#license)
```
Clicking the `TOC` link will scroll to the desire section.

```
## How it Works
your explanation...

## Getting started](#get-started)
your explanation...

## [Contributing](#contributing)
your explanation...

## [Core team](#core-team)
your explanation...

## [License](#license)
your explanation...
```


## Create Badge/shields

Batches/shields look nicer as it adds information on your repo. Batches/Shields are small block legible badges in SVG and raster format, which can be included in GitHub readmes or any other web page. You can check the status of repo like code size, commit status, or deployments, etc. You can look at how these Badges look on the repo.

![Badge/shields GitHub](https://dev-to-uploads.s3.amazonaws.com/i/wy48th8r5vpurvfuokh1.PNG)

### How you can add these badges

If you use Netlify to deploy your code; you get a badge on their dashboard which shows deploys status. [shields.io](https://shields.io) and [codetriage](https://www.codetriage.com) are also good resources to add badges for your repo. you can add in README.md as shown below:
```
<img src="https://img.shields.io/github/languages/code-size/taimoorsattar7/underlinejobs" alt="GitHub Code Size in Bytes">
```

## further structure your documentation

`README.md` describes the basic information about the repo. If your information is long enough to fit into `README.md`, you can make further sections. For example, `CODE_OF_CONDUCT.md` and `CONTRIBUTING.md`. Write how to contribute to this repo in the `CONTRIBUTING.md` and code of conduct in `CODE_OF_CONDUCT.md`. In this way, you can be more organized.

Your documentation should be grammatically correct so it is properly understood by others. You can check grammatical mistakes using tools like [hemingwayapp](http://www.hemingwayapp.com) and [grammarly](https://www.grammarly.com).

Show some love if you like this article. Follow me on twitter [@taimoorsattar7](https://twitter.com/taimoorsattar7) as I post frequently.