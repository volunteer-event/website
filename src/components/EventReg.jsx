import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'

const EventReg = () => {
        const categories = [
                {
                        value: 'Social',
                        label: 'Social',
                },
                {
                        value: 'Technical',
                        label: 'Technical',
                },
                {
                        value: 'Cultural',
                        label: 'Cultural',
                },
                {
                        value: 'Sports',
                        label: 'Sports',
                },
        ];
        const mode = [
                {
                        value : 'Online',
                        label : 'Online',
                },
                {
                        value : 'Offline',
                        label : 'Offline',
                },
                {
                        value : 'Hybrid',
                        label : 'Hybrid',
                },
        ];
  return (
    <div>
    <Typography
          variant='h2' 
          sx={{ flexGrow: 1,textAlign:'center' }} 
          style={{
            fontFamily:'aerial',
            fontWeight:400,
          }}>
          Event-Volunteer Management
      </Typography><br /><br />
      <Typography
          variant='h6' 
          sx={{ flexGrow: 1,textAlign:'left' }} 
          style={{
             fontFamily: 'aerial',
             fontWeight: 400,
             color: '#333',
          }}>
          Event Details:
        </Typography>
        <br />
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
                sx={{ flex: '1 1 20%' }}
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
                multiline
                variant="filled"/>
           

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
        <br/>
     <Typography
                variant='h6' 
                sx={{ flexGrow: 1,textAlign:'left' }} 
                style={{
                fontFamily: 'aerial',
                fontWeight: 400,
                color: '#333',
                }}>
                Date & Time:
            </Typography>
            <br />
        <Box
                component="form"
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                }}
                noValidate
                autoComplete="off" >
            
            
            

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
        <br/>
        <Typography
                variant='h6' 
                sx={{ flexGrow: 1,textAlign:'left' }} 
                style={{
                fontFamily: 'aerial',
                fontWeight: 400,
                color: '#333',
                }}>
                Volunteer/Participant Information:
            </Typography>
            <br />
        
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
                        multiline
                        variant="filled"/>
        </Box>
        <br/>
        <Typography
                variant='h6' 
                sx={{ flexGrow: 1,textAlign:'left' }} 
                style={{
                fontFamily: 'aerial',
                fontWeight: 400,
                color: '#333',
                }}>
                Other Info:
            </Typography>
            <br />
        <Box
                component="form"
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                }}
                noValidate
                autoComplete="off" >

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
                        multiline
                        variant="filled"/>

        </Box>
       
     <br /><br />
            <Button variant="contained">
                    Register Event
            </Button>

  
    </div>
  )
}

export default EventReg
