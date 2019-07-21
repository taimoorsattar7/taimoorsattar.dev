---
title: "Making Sence of React"

date: "2019-07-03"

keywords: "wordpress, cms"

author: taimoorsattar

published: true

description: WordPress is a free CMS(Content Management System), power up most of the website and is used by many web community.

canonical_url: https://www.underlinejobs.com/blogs/wordpress/

cover_image: https://www.underlinejobs.com/wp-content/uploads/2019/03/WordPress-Blog.jpg

---

https://reactjs.org

React is a JavaScript library for building user interfaces. You can either write react UI component either in classes or function.
Here is the simple example

```js
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);
```

Props is used to pass data between different 