import { Box, FormControl, Button, Typography, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/bookSlice';
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addBook({
      title,
      description,
      image_url: imageUrl,
      rating,
      price
    }))
    navigate('/')
    setTitle('')
    setDescription('')
    setImageUrl('')
    setRating('')
    setPrice('')
  }

  const canSave = title && description && imageUrl && rating && price;

  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-betwen", gap: "20px"}}>
      <Typography variant="h4" component="h4" sx={{textDecoration: "underline"}}>Add Book</Typography>
      <FormControl sx={{width: "500px", height: "600px", marginTop: "20px", marginBottom: "20px", justifyContent: "space-between", gap: "20px", backgroundColor: "#fff", color: "#000", padding: "40px", borderRadius: "20px"}}>
        <TextField placeholder="Enter Book Title" 
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <TextField placeholder="Enter Book Image URL" 
          onChange={(event) => setImageUrl(event.target.value)}
          value={imageUrl}
        />
        <TextField placeholder="Enter Book Description" 
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <TextField type="number" placeholder="Enter Book Price" 
          onChange={(event) => setPrice(event.target.value)}
          value={price}
        />
        <TextField type="number" placeholder="Enter Book Rating" 
          onChange={(event) => setRating(event.target.value)}
          value={rating}
        />
        <Button disabled={!canSave} onClick={(event) => handleSubmit(event)} variant="contained">Add Book</Button>
      </FormControl>
    </Box>
  )
}

export default AddBook