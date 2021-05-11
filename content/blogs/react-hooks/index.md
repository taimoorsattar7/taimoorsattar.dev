---
title: 10 React Hooks in General
description: The react hook is the function that allows you to use the state and react feature from the function base component (FOC).
date: 2021-05-12T18:52:02.580Z
tags:
  - react
  - hooks
featuredpost: false
---

The react hook is the function that allows you to use the state and react feature from the function base component (FOC). It provides you the lower-level feature of React outside the context of the component.

To use react Hooks, you can call them at the top level of the functional component.

In the past, stateful logic was a couple to the class-based components. But... react hooks introduced in React 16.8 version, provide the low-level function without writing class. Below are the react general hooks that you can use in a function-based component.


| Sr#  | React Hooks         | Description                                                                                                                                                                             | Read more                                                                                     |
| :--- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| 1.   | useState            | Handle reactive data. When data (state) changes, it re-render the UI. In this way latest changes are reflected to the end user.                                                         | [Read more →](https://reactjs.org/docs/hooks-state.html)                                      |
| 2.   | useEffect           | It is used to implement logic for component lifecycle. The three lifecycle methods are; component is added to the UI, reactive data (state) changes, commponent removed from the UI.    | [Read more →](https://reactjs.org/docs/hooks-effect.html)                                     |
| 3.   | useContext          | Share data without passing props throughout the entire component tree.                                                                                                                  | [Read more →](https://daveceddia.com/usecontext-hook/)                                        |
| 4.   | useReducer          | Different way to manage state compare to **usestate hook**. Instead of updating the UI directly, we **dispatch actions** to the reducer function that decide how to compute next state. | [Read more →](https://blog.logrocket.com/guide-to-react-usereducer-hook/)                     |
| 5.   | useCallback         | Memorize the entire function in order to avoid unnessary render of the child component.                                                                                                 | [Read more →](https://dmitripavlutin.com/dont-overuse-react-usecallback)                      |
| 6.   | useMemo             | Optimize computation cost that are hurting performance.                                                                                                                                 | [Read more →](https://reactjs.org/docs/hooks-reference.html#usememo)                          |
| 7.   | useRef              | immutable object keep the same reference between renders / Grab HTML elements from the DOM.                                                                                             | [Read more →](https://reactjs.org/docs/hooks-reference.html#useref)                           |
| 8.   | useLayoutEffect     | Similar to useEffect hook. It runs after the component render but before painting to the screen.                                                                                        | [Read more →](https://dev.to/nibble/what-is-uselayouteffect-hook-and-when-do-you-use-it-3lan) |
| 9.   | useDebugValue       | When building your own custom hooks, useDebugValue assign a custom lable when preview it in react dev tool.                                                                             | [Read more →](https://ryanharris.dev/hooks-usedebugvalue)                                     |
| 10.  | useImperativeHandle | Expose the DOM element of react component so that it can be access by the consumers.                                                                                                    | [Read more →](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)              |