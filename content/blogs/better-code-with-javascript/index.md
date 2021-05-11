---
title: Write Better Code with Javascript
description: Javascript is a language that's understood by the browser. You need
  to make your JavaScript code more readable in fewer lines of code.
date: 2021-01-31T00:37:09.804Z
tags:
  - javascript
featuredpost: false
---


Javascript is a language that's understood by the browser. It is used to load dynamic content without refreshing the page.

You need to make your Javascript code more readable in fewer lines of code. We have listed out some of the recommended ways to get more ways to write javascript code:

## Use Template literals

Template literals are the strings (variables) that can embed in the expression. Template literals make code much simpler and readable.

For example, we can use template literal in JavaScript as below:

```jsx
var code = "javascript";
var str = `
  I love ${code}
  I love ${code}
 `;
```

Without template literals, we can write the above example as below:

```jsx
var code = "javascript";
var str1 = "\n I love " +  code + "\n I love " +  code + "\n";
```

## Using ternary operator

In programming, you mostly have to encounter logical operations. If you want to perform logic between two statements, the ternary operator is much more readable.

```jsx
let price= isMember ? '$2.00' : '$10.00'
```

You can read more about conditional statement in JavaScript [at this page](https://taimoorsattar.dev/blogs/conditional-statements-in-javascript).

## Use Include statement in JavaScript

**include** statement in JavaScript is the simpler way to search for a string in an **array and sentence**.

You can use **include** statement in JavaScript as below:

```jsx
var str = "I love JavaScript.";
var word = str.includes("JavaScript"); // result: true
```

In array,  we can use include statement as below:

```jsx
var str = ["taimoor", "ali", "umer"];
var n = str.includes("taimoor"); // result: true
```

**include** statement return true or false depends on the string is present in sentence or array.

## Nullish operator

If you are working in 3rd party API, you may have encountered that same key-value not appear in every query. You have to check for nullish keys in JSON so that code does not throw an error.

To check for the nullish key, you can use the following

- Conditional Statement
- The nullish coalescing operator (??) - (Recommended)

For example, we have following JSON in JavaScript as below:

```jsx
var person = {
  name: "Taimoor Sattar",
  age: 21,
  metadata: {
    hobby: "football, blog"
  }
}
```

Using **Conditional Statement**, we can access for the **hobby** key in matadata of JSON as below:

```jsx
let hobby = "";
if (person.metadata){
  hobby = person.metadata.hobby ? person.metadata.hobby : "";
}
```

Using **nullish coalescing operator**, we can access for the **hobby** key in matadata of JSON as below:

```jsx
let hobby = person.metadata?.hobby ?? "";
```

The above code check for **hobby** key in the metadata of JSON, If available it return the value else return empty string.

## Default parameter value in function

Some of the function in JavaScript allow you to send option parameter. Based on the optional parameter the return value of the function can change.

we can demonstrate the default parameter in function through an example as below: 

```jsx
function outputName(name="taimoor"){
  return name;
}

let string1 = outputName(); // result: taimoor
let string2 = outputName("ali"); // result: ali
```

## Type Check for Parameter in function

Probably, there might be conditions where your function parameter has not a valid type. You can perform additional checks to validate your parameter type.

We can demonstrate this with an example as below:

```jsx
function sum(a, b){
  let result = (typeof a == "number" && typeof b == "number") ? a + b :  null;
  return result
}

sum("s", 6) // result: null
sum(4, 6) // result: 10
```

## Wrap code in Try/Catch statement

Try/Catch statement are used to check the errors in the code. If errors, catch statement will run.

We can demonstrate this with an example as below:

```jsx
try{
  functionnotexist();
}catch(e){
  console.log("error");
}
```

The above code console log the error as the function does not exist.

## Destructuring

Destructuring allows you to breakdown complex parts into chunks. 

For example...

If your complex function required a lot of parameters for execution, then it's better to De-structuring the function. Rather than passing a single parameter like a string, float, etc; pass an object in function. Single Objects can hold multiple values.

We can demonstrate this example as below:

```jsx
function outputName({name = "taimoor"}){ // De-structuring
  return name;
}

var person = {
  name: "Taimoor Sattar",
  age: 21,
  metadata: {
    hobby: "football, blog"
  }
}

let str = outputName(person); // Taimoor Sattar
```

## Write DRY Code

DRY means (don't repeat yourself). You avoid duplication in the code to avoid confusion. To avoid confusion in the code, you can follow the following rules.

- Write a reusable function
- Define clear names for variable and function