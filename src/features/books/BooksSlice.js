import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialBooks = {
  books: [
    { id: uuidv4(), title: "love bangladesh", author: "anis" },
    { id: uuidv4(), title: "love USA", author: "sadik" },
    { id: uuidv4(), title: "love Europe", author: "hossain" },
  ],
};
export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,

    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    updateBooks: (state, action) => {
      const { id, title, author } = action.payload;
      //*checking id match krce naki
      const exist = state.books.filter((book) => book.id === id);

      //* jodi exist kore tahole update krbo
      if (exist) {
        exist[0].title = title;
        exist[0].author = author;
      }
    },
    deleteBooks: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});
//* exporting action
export const { showBooks, addBooks, deleteBooks, updateBooks } =
  bookSlice.actions;
//* exporting reducer
export default bookSlice.reducer;

//* CRUD - create, read, update , delete
