import { Box, Typography, Container, Card, CardActionArea, CardMedia, CardContent, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllbooks } from '../../redux/bookSlice'

const Books = () => {
  const books = useSelector(selectAllbooks)

  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Box sx={{width: "400px", textAlign: "center", margin: "20px auto"}}>
        <Typography sx={{fontWeight: "200", fontSize: "20px"}} variant="small" component="p">“Good friends, good books, and a sleepy conscience: this is the ideal life.” <br /> ~ A Wise Man</Typography>
      </Box>
      <Box sx={{margin: "40px 0"}}>
        <Container sx={{border: "2px solid #ddd", padding: "20px"}}>
          <Stack direction="row" spacing={4}>
            { books.length ? books.map((book) => (
              <Link key={book.id} to={`/books/${book.id}`}>
                <Card key={book.id} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={book.image_url}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {book.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {book.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            )) : <Typography sx={{textAlign: "center"}}>You have no books currently - <Link to="add_book"><Typography sx={{color: "#60B3D5"}}>Add Books Here</Typography></Link></Typography>
            }
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Books