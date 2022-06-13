import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "love bangladesh", author: "anis" },
    { id: 2, title: "love USA", author: "sadik" },
    { id: 3, title: "love Europe", author: "hossain" },
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
