import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: 1, title: "The One", description: "This book is about all the good things you can think of my guy", rating: 4, price: 230, image_url: "https://cdn.pixabay.com/photo/2015/11/19/21/11/atlas-1052011__340.jpg", user_id: 1},
  {id: 2, title: "The Two", description: "This book is about all the good things you can think of my guy", rating: 5, price: 230, image_url: "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589__340.jpg", user_id: 1},
  {id: 3, title: "The Three", description: "This book is about all the good things you can think of my guy", rating: 1, price: 230, image_url: "https://cdn.pixabay.com/photo/2017/06/10/16/22/coffee-2390136__340.jpg", user_id: 1}
]

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const id = initialState.length + 1
      const newBook = {
        id: id,
        title: action.payload.title,
        description: action.payload.description,
        rating: action.payload.rating,
        price: action.payload.price,
        image_url: action.payload.image_url,
        user_id: 1
      }
      state.push(newBook)
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id)
    }
  }
})

export const selectAllbooks = (state) => state.books;

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
