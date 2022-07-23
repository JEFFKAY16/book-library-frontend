import { Box, Typography, Container, Card, CardActionArea, CardMedia, CardContent, Stack, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllReservations } from '../../redux/reservationSlice'

const Reservations = () => {
  const reservations = useSelector(selectAllReservations);
  console.log(reservations)

  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Box sx={{width: "400px", textAlign: "center", margin: "20px auto"}}>
        <Typography sx={{textDecoration: "underline"}} variant="h4" component="p">My Reservations</Typography>
      </Box>
      <Box sx={{margin: "40px 0"}}>
        <Container>
          <Stack direction="column" spacing={4}>
            {
              reservations.map((reservation) => (
                <Card key={reservation.id} sx={{ maxWidth: 700}}>
                  <CardActionArea sx={{display: "flex", justifyContent: "space-between"}}>
                    <CardMedia
                      sx={{width: "40%"}}
                      component="img"
                      height="190"
                      image={reservation.book.image_url}
                      alt="green iguana"
                    />
                    <CardContent
                      sx={{width: "60%"}}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {reservation.book.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">{reservation.book.description}</Typography>
                      <Button sx={{backgroundColor: "#B93524", margin: "10px 0", "&:hover": {backgroundColor: "#EE522F"}}} variant="contained">Cancel</Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
            }
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Reservations