import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'

const EventReg = () => {
        const categories = [
                {value: 'Social',label: 'Social',},
                {value: 'Technical',label: 'Technical',},
                {value: 'Cultural',label: 'Cultural',},
                {value: 'Sports',label: 'Sports',},
        ];
        const mode = [
                {value : 'Online',label : 'Online',},
                {value : 'Offline',label : 'Offline',},
                {value : 'Hybrid',label : 'Hybrid',},
        ];
  return (
    <div>
    <Box
      sx={{
        maxWidth: '1000px',
        mx: 'auto',
        my: 4,
        px: 3,
        py: 4,
        bgcolor: '#f9f9f9',
        borderRadius: 4,
        boxShadow: 3,
      }}
    >
    <Typography
          variant='h3' 
          align='center'
          gutterBottom
          sx={{ fontWeight: 500, fontFamily: 'Arial' }}
       >
          Provide Event Details
      </Typography>
      <Typography
          variant='h6' 
          sx={{ mt: 4, mb: 2, fontWeight: 500 }} 
          >
          Event Details:
        </Typography>
        
    <Box
        component="form"
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
        }}
        noValidate
        autoComplete="off">
       
        
            <TextField
                required
                id="filled-required"
                label="Organisor Contact Info"
                placeholder="email or phone"
                sx={{ flex: '1 1 30%' }}
                variant="filled"/>
           
            <TextField
                    required
                    id="filled-required"
                    label="Event Name"
                    sx={{ flex: '1 1 30%' }}
                    variant="filled"/> 

            <TextField
                    required
                    id="filled-required"
                    label=" Organisor Name"
                    sx={{ flex: '1 1 30%' }}
                    variant="filled"/>

            <TextField
                required
                id="filled-required"
                label="Event Description"
                placeholder="max 25 words"
                multiline variant="filled"
                sx={{ flex: '1 1 100%' }}/>
           

            <TextField
                required
                id="filled-required"
                select
                label="Category"
                size='small'
                sx={{ width: '200px' }}
                variant="filled">
                {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
                ))}
            </TextField>

            <TextField
                required
                id="filled-required"
                select
                label="Mode"
                size='small'
                sx={{ width: '200px' }}
                variant="filled">
                {mode.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
                </MenuItem>
                ))}
            </TextField>

            <TextField
                    required
                    id="filled-required"
                    label="Event Hosting City(if offline)"
                    size='small'
                    sx={{ width: '300px' }}
                    variant="filled"/>
       </Box>
       
     <Typography
                variant='h6' 
                sx={{ mt: 4, mb: 2, fontWeight: 500 }}>
                Date & Time:
            </Typography>
            <br />
        <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                }} >
            
            
            

            <TextField
                required
                id="filled-required"
                label="Start Date & Time"
                type="datetime-local"
                InputLabelProps={{
                shrink: true, 
                }}
                variant='filled'/>

            <TextField
                required
                id="filled-required"
                label="End Date & Time"
                type="datetime-local"
                InputLabelProps={{
                shrink: true, 
                }}
                variant='filled'/>

            <TextField
                required
                id="filled-required"
                label="Deadline for volunteer reg"
                type="datetime-local"
                InputLabelProps={{
                shrink: true, 
                }}
                variant='filled'/>
        </Box>
        
        <Typography
                variant='h6' 
                sx={{ mt: 4, mb: 2, fontWeight: 500 }}>
                Volunteer/Participant Information:
            </Typography>
          
        
        <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                }}>

                <TextField
                        required
                        id="filled-required"
                        label="Max Number of Volunteers"
                        sx={{width:'300px'}}
                        type="number"
                        variant='filled'/>

                <TextField
                        required
                        id="filled-required"
                        label="Max Number of participants"
                        type="number"
                        sx={{width:'300px'}}
                        variant='filled'/>

                <TextField
                        required
                        id="filled-required"
                        label="Volunteer Qualifications"
                        sx={{width:'300px'}}
                        multiline variant="filled"/>
        </Box>
       
        <Typography
                variant='h6' 
                sx={{ mt: 4, mb: 2, fontWeight: 500 }}>
                Other Info:
            </Typography>
            <br />
        <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                }} >

                <TextField
                        required
                        id='filled-required'
                        type="file"
                        label="Upload Event Poster"
                        sx={{width: '300px'}}
                        variant='filled'
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ accept: 'image/*' }} />

                <TextField
                        id="filled-textarea"
                        label="Aditional Information"
                        sx={{width:'300px'}}
                        multiline variant="filled"/>

        </Box>
       
        <Box sx={{ mt:5,textAlign: 'center'}}>
            <Button variant="contained" color='primary' size='large'>
                    Register Event
            </Button>
        </Box>
        </Box>
  
    </div>
  )
}

export default EventReg
