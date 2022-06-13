import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBooks } from "./BooksSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numberofBooks = useSelector((state) => state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBooks(book));
    navigate("/show-books");
  };
  return (
    <div>
      <h1>add books</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">title: </label>
          <input
            type="text "
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">author: </label>
          <input
            type="text "
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
