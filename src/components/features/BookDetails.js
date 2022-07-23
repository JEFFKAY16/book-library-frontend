import { Box, Typography, Container, Stack, Rating, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import book1 from '../../images/book1.jpg'

const BookDetails = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Box sx={{width: "400px", textAlign: "center", margin: "20px auto"}}>
        <Typography variant="h4" sx={{fontWeight: 500}} component="p">Details About Book Title</Typography>
      </Box>
      <Box sx={{margin: "40px 0", width: "100%"}}>
        <Container sx={{border: "2px solid #ddd", padding: "20px"}}>
          <Stack direction="row" spacing={4}>
            <Box sx={{height: "450px", width: "100%"}} flex={2}>
              <img style={{width: "100%", height: "100%"}} src={book1} alt="book" />
            </Box>
            <Box sx={{border: "2px solid #ddd", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center"}} flex={2}>
              <Typography sx={{marginBottom: "20px"}} variant="h4">Book Title</Typography>
              <Typography sx={{marginBottom: "20px"}} variant="p" component="p">
                A good book description is a detailed, descriptive copy that is good for public display,
                used for your book marketing, book discovery, and for sales purposes.
              </Typography>
              <Typography sx={{marginBottom: "20px", fontWeight: "500"}} variant="p" component="p">$15.00</Typography>
              <Rating sx={{marginBottom: "20px"}} name="half-rating" defaultValue={4} precision={0.5} readOnly />
              <Box sx={{display: "flex", flexDirection: "row", gap: "20px"}}>
                <Button sx={{backgroundColor: "#B93524", "&:hover": {backgroundColor: "#EE522F"}}} variant="contained">Delete</Button>
                <Button sx={{backgroundColor: "#5BBC0C", "&:hover": {backgroundColor: "#84BB3A"}}} variant="contained">Reserve</Button>
                <Button sx={{backgroundColor: "#39A0E2", "&:hover": {backgroundColor: "#2B7EBB"}}} variant="contained">Update</Button>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default BookDetails