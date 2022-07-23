import { Box, List, ListItemButton, ListItemText, ListItemIcon, ImageList } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React from 'react'
import logo from "../images/1.png"
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Box sx={{
      backgroundColor: "#fff",
      width: "20%",
      display: 'flex',
      flexDirection: "column",
      justifyContent: "flex-start"
    }}>
      <Box component="a" href="#">
        <ImageList sx={{width: "100%", margin: "0 auto"}}>
          <img style={{width: "300px", height: "300px"}} src={logo} alt="logo" />
        </ImageList>
      </Box>
      <Box>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: '#fff' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Books" />
            </ListItemButton>
          </Link>
          <Link to="/reservations">
            <ListItemButton>
              <ListItemIcon>
                <BookmarkAddedIcon />
              </ListItemIcon>
              <ListItemText primary="Reservations" />
            </ListItemButton>
          </Link>
          <Link to="/add_reservation">
            <ListItemButton>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Reservations" />
            </ListItemButton>
          </Link>
          <Link to="/add_book">
            <ListItemButton>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Book" />
            </ListItemButton>
          </Link>
          <ListItemButton>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
        </List>
      </Box>
    </Box>
  )
}

export default Nav