import { Box, Typography, Container, Stack, Rating, Button } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllbooks } from '../../redux/bookSlice';
import { deleteBook } from '../../redux/bookSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id } = useParams()
  const books = useSelector(selectAllbooks)
  const book = books.find(book => (book.id).toString() === id)

  const handleDeleteBook = (id) => {
    dispatch(deleteBook({id}))
    navigate('/')
  }

  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Box sx={{width: "400px", textAlign: "center", margin: "20px auto"}}>
        <Typography variant="h4" sx={{fontWeight: 500}} component="p">Details About - {book.title}</Typography>
      </Box>
      <Box sx={{margin: "40px 0", width: "100%"}}>
        <Container sx={{border: "2px solid #ddd", padding: "20px"}}>
          <Stack direction="row" spacing={4}>
            <Box sx={{height: "450px", width: "100%"}} flex={2}>
              <img style={{width: "100%", height: "100%"}} src={book.image_url} alt="book" />
            </Box>
            <Box sx={{border: "2px solid #ddd", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center"}} flex={2}>
              <Typography sx={{marginBottom: "20px"}} variant="h4">{book.title}</Typography>
              <Typography sx={{marginBottom: "20px"}} variant="p" component="p">{book.description}</Typography>
              <Typography sx={{marginBottom: "20px", fontWeight: "500"}} variant="p" component="p">${book.price}</Typography>
              <Rating sx={{marginBottom: "20px"}} name="half-rating" defaultValue={book.rating} precision={0.5} readOnly />
              <Box sx={{display: "flex", flexDirection: "row", gap: "20px"}}>
                <Link to="/">
                  <Button sx={{backgroundColor: "#ddd", color: "#000", "&:hover": {backgroundColor: "#eee"}}} variant="contained"><ArrowBackIosIcon />Back</Button>
                </Link>
                <Button sx={{backgroundColor: "#B93524", "&:hover": {backgroundColor: "#EE522F"}}} onClick={() => handleDeleteBook(book.id)} variant="contained">Delete</Button>
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