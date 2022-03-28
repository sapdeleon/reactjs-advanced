import React, { useState } from "react"
import { data } from "../../data/books"

const UseStateArray = () => {

  const [books, setBooks] = useState(data);

  // using Array.filter function
  const removeItem = (id) => {
    let newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  }

  return (
    <>
      {books.map((book) => {
        const { id, name } = book;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>X</button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setBooks([])}>Clear All</button>
    </>
  )
};

export default UseStateArray;