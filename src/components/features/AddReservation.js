import { Box, FormControl, Input, Select, Button, Typography, MenuItem } from '@mui/material'
import React from 'react';

const AddReservation = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-betwen", gap: "20px"}}>
      <Typography variant="h4" component="h4" sx={{textDecoration: "underline"}}>Add Reservation</Typography>
      <FormControl  sx={{width: "500px", height: "400px", marginTop: "20px", justifyContent: "space-between", gap: "20px", backgroundColor: "#fff", color: "#000", padding: "40px", borderRadius: "20px"}}>
        <Select labelId="demo-simple-select-label" label="Select Book">
          <MenuItem value={1}>- Select Book -</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Input type="date" />
        <Input type="date" />
        <Button variant="contained">Add Reservation</Button>
      </FormControl>
    </Box>
  )
}

export default AddReservation