import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservations",
  initialState: [
    {id: 1, start_date: "01-20-2022", end_date: "01-25-2022", cost: 400, user_id: 1, book_id: 1, book: {id: 1, title: "The One", description: "This book is about all the good things you can think of my guy", rating: 4, price: 230, image_url: "https://cdn.pixabay.com/photo/2015/11/19/21/11/atlas-1052011__340.jpg", user_id: 1}},
    {id: 2, start_date: "02-20-2022", end_date: "02-25-2022", cost: 500, user_id: 1, book_id: 2, book: {id: 2, title: "The Two", description: "This book is about all the good things you can think of my guy", rating: 5, price: 230, image_url: "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589__340.jpg", user_id: 1}},
    {id: 3, start_date: "03-20-2022", end_date: "03-25-2022", cost: 800, user_id: 1, book_id: 3, book: {id: 3, title: "The Three", description: "This book is about all the good things you can think of my guy", rating: 1, price: 230, image_url: "https://cdn.pixabay.com/photo/2017/06/10/16/22/coffee-2390136__340.jpg", user_id: 1}}
  ],
  reducers: {},
})

export const selectAllReservations = (state) => state.reservations

export default reservationSlice.reducer;
