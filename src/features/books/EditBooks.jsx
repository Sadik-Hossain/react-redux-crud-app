import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBooks } from "./BooksSlice";

const EditBooks = () => {
  const location = useLocation();
  console.log(location);
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: id, title, author };
    dispatch(updateBooks(book));
    navigate("/show-books");
  };

  return (
    <div>
      <h1>edit books</h1>
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
        <button type="submit">Update book</button>
      </form>
    </div>
  );
};

export default EditBooks;
