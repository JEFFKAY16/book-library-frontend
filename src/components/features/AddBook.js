import { Box, FormControl, Input, Button, Typography, TextField } from '@mui/material'
import React from 'react'

const AddBook = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-betwen", gap: "20px"}}>
      <Typography variant="h4" component="h4" sx={{textDecoration: "underline"}}>Add Book</Typography>
      <FormControl  sx={{width: "500px", height: "400px", marginTop: "20px", marginBottom: "20px", justifyContent: "space-between", gap: "20px", backgroundColor: "#fff", color: "#000", padding: "40px", borderRadius: "20px"}}>
        <TextField placeholder="Enter Book Title" />
        <TextField placeholder="Enter Book Image URL" />
        <TextField type="number" placeholder="Enter Book Price" />
        <TextField type="number" placeholder="Enter Book Rating" />
        <Button variant="contained">Add Book</Button>
      </FormControl>
    </Box>
  )
}

export default AddBook