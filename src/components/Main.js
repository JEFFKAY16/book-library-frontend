import { Box } from '@mui/material'
import React from 'react'
import AddBook from './features/AddBook'
import AddReservation from './features/AddReservation'
import Books from './features/Books'
import Reservations from './features/Reservations'
import BookDetails from './features/BookDetails'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
  return (
    <Box sx={{
      backgroundColor: "#eee",
      width: "80%",
      padding: "20px 50px",
      overflowY: "scroll"
    }}>
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add_reservation" element={<AddReservation />} />
        <Route path="/add_book" element={<AddBook />} />
      </Routes>
    </Box>
  )
}

export default Main