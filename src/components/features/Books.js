import { Box, Typography, Container, Card, CardActionArea, CardMedia, CardContent, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import book1 from '../../images/book1.jpg'
import book2 from '../../images/book2.jpg'
import book3 from '../../images/book3.jpg'


const Books = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Box sx={{width: "400px", textAlign: "center", margin: "20px auto"}}>
        <Typography variant="small" component="p">“Good friends, good books, and a sleepy conscience: this is the ideal life.” <br /> ~ A Wise Man</Typography>
      </Box>
      <Box sx={{margin: "40px 0"}}>
        <Container sx={{border: "2px solid #ddd", padding: "20px"}}>
          <Stack direction="row" spacing={4}>
            <Link to="/book/:id">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={book1}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Book Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A good book description is a detailed, descriptive copy that is good for public display,
                      used for your book marketing, book discovery, and for sales purposes.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <Link to="/book/:id">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={book2}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Book Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A good book description is a detailed, descriptive copy that is good for public display,
                      used for your book marketing, book discovery, and for sales purposes.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <Link to="/book/:id">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={book3}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Book Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A good book description is a detailed, descriptive copy that is good for public display,
                      used for your book marketing, book discovery, and for sales purposes.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Books