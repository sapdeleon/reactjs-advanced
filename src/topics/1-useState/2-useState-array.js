import React, { useState } from "react"
import { data } from "../../data/books"

const UseStateArray = () => {

  const [books, setBooks] = useState(data);

  // using Array.filter function
  // using functional approach - better used in the counter
  const removeItem = (id) => {

    setBooks((oldBooks) => {
      let newBooks = oldBooks.filter((book) => book.id !== id);
      return newBooks
    });
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