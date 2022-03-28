import React, { useState } from "react"

const UseStateBasics = () => {

  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    if (text === "Random Title") {
      setText("Hello, World!");
    } else {
      setText("Random Title");
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>Click Me</button>
    </React.Fragment>
  )
};

export default UseStateBasics;