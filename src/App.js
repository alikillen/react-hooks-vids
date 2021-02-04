import React, { useState } from "react"

function countInitial(){
  console.log("run func every time app renders")
  return 4
}

function App() {
  
  // usestate always returns an array w 2 values - 1st is current state, 2nd thing is function that allows you to update state
  // destructure the array - count and setCount

  // this usestate is getting rerendered every time - with more complex values this could slow us down
  // so the function version - runs only each time component re-renders
  // if you set a function outside the app and use that (like countInitial, it will run every time the app renders -slow)

  // const [count, setCount] = useState(countInitial()) 

  // usestate works differently when dealing with objects- 
  
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState("blue")

  // using 2 diff hooks - to manage 2 diff peices of state.
 

  
  function decrementCount () {
    setCount(prevCount => prevCount-1)
    setTheme("green")
    }
  // dont hardcode count in here - prevCount is passed in and is dynamic
  // using the function version of setting state - like using a func to set state inside class component

  // in normal class component, youd pass in just the parts you want to change, and it would decrement count
  // but it wont merge with current object- so it will wipe out your theme. you need to spread out prevstate
  // if you use an object inside of your state, when you update it,  you need to inclue all the old versions of the object too,
  //  cause they will get overwritten otherwise. use spread operator
  // automatic merging of objs doesnt happen because of state hooks - need to use 2 diff hooks to manage diff peices of state

  function incrementCount() {
    setCount(prevCount => prevCount+1)
    setTheme("red")
  }


  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </>
  )
}
// can only use hooks inside function components -not class components
// hooks must execute in same order - careful when putting hooks inside if checks etc - react will catch these errors
// cant put hooks inside of if statements, functions, loops etc - always at top level of func and called in same order

// usestate hook vs class version - state. what you pass to useState is the default state

export default App;
