import React, { useState } from "react"

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: "Moses",
    age: 150,
    message: "Let my people go."
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Go and multiply." });
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>Click Me</button>
    </>
  )
};

export default UseStateObject;