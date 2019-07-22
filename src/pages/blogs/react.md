---
title: "Making Sense of React"

date: "2019-07-03"

keywords: "React"

author: taimoorsattar

published: true

description: About React

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

More To write...