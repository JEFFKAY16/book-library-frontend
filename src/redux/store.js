import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import reservationReducer from "./reservationSlice";

export default configureStore({
  reducer: {
    books: bookReducer,
    reservations: reservationReducer
  }
})
