import { Box, Typography, Container, Card, CardActionArea, CardMedia, CardContent, Stack, Button } from '@mui/material'
import React from 'react'
import book1 from '../../images/book1.jpg'
import book2 from '../../images/book2.jpg'
import book3 from '../../images/book3.jpg'

const Reservations = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Box sx={{width: "400px", textAlign: "center", margin: "20px auto"}}>
        <Typography sx={{textDecoration: "underline"}} variant="h4" component="p">My Reservations</Typography>
      </Box>
      <Box sx={{margin: "40px 0"}}>
        <Container>
          <Stack direction="column" spacing={4}>
            <Card sx={{ maxWidth: 700}}>
              <CardActionArea sx={{display: "flex", justifyContent: "space-between"}}>
                <CardMedia
                  component="img"
                  height="190"
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
                  <Button sx={{backgroundColor: "#B93524", margin: "10px 0", "&:hover": {backgroundColor: "#EE522F"}}} variant="contained">Cancel</Button>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 700}}>
              <CardActionArea sx={{display: "flex", justifyContent: "space-between"}}>
                <CardMedia
                  component="img"
                  height="190"
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
                  <Button sx={{backgroundColor: "#B93524", margin: "10px 0", "&:hover": {backgroundColor: "#EE522F"}}} variant="contained">Cancel</Button>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 700}}>
              <CardActionArea sx={{display: "flex", justifyContent: "space-between"}}>
                <CardMedia
                  component="img"
                  height="190"
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
                  <Button sx={{backgroundColor: "#B93524", margin: "10px 0", "&:hover": {backgroundColor: "#EE522F"}}} variant="contained">Cancel</Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Reservations