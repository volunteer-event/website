import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

const VolReg = () => {
  return (
    <div>
      <Box
        sx={{
        maxWidth: '1000px',
        mx: 'auto',
        my: 4,
        px: 4,
        py: 5,
        bgcolor: '#f9f9f9',
        borderRadius: 4,
        boxShadow: 3,
      }}>
        <Typography
          variant='h4' 
          align='center'
          gutterBottom
          sx={{ fontWeight: 600, fontFamily: 'Arial' }}>
          Volunteer Registration
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
                label="Full Name"
                sx={{ flex: '1 1 30%' }}
                variant="filled"/>

            <TextField
                required
                id="filled-required"
                label="Email"
                sx={{ flex: '1 1 30%' }}
                variant="filled"/>

            <TextField
                required
                id="filled-required"
                label="Phone Number"
                type="number"
                sx={{ flex: '1 1 30%' }}
                variant="filled"/>

            <TextField
                required
                id="filled-required"
                label="Age"
                type="number"
                sx={{ flex: '1 1 30%' }}
                variant="filled"/>

            <TextField
                required
                id="filled-required"
                label="Educational Qualification"
                sx={{ flex: '1 1 30%' }}
                variant="filled"/>

            <TextField
                required
                id="filled-required"
                label="Why do you want to volunteer for this event?"
                sx={{ flex: '1 1 100%'}}
                multiline 
                rows={3}
                variant="filled"/>

            <Typography
              variant='h6' 
              sx={{ mt: 4, width: '100%', fontWeight: 500 }}
              align="left">
                Which volunteer roles are you interested in? 
            </Typography>
                <FormGroup sx={{ display: 'flex',flexWrap: 'wrap' , gap:2 }}>
                 {[
                      'Registration',
                      'Event Setup',
                      'Tech Support',
                      'Social Media & Content',
                      'Photography/videography',
                      'Management',
                      'Outreach & Marketing',
                      'Design'
                  ].map((role) => (
                    <FormControlLabel key={role} control={<Checkbox />} label={role} />
                  ))}
                </FormGroup> 

            <TextField
                required
                id="filled-required"
                label="Why do you think you are a good fit for the role(s) you selected?"
                sx={{width:'100%'}}
                multiline 
                rows={3}
                variant="filled"/>

            <TextField
                required
                id="filled-required"
                label="What skills/volunteering experience do you possess that would contribute to the success of the event?"
                sx={{width:'100%'}}
                multiline 
                rows={3}
                variant="filled"/>
              
            <FormControl sx={{ mt: 3 }}>
              <FormLabel>Do you have prior volunteering or event experience?</FormLabel>
              <RadioGroup row>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <TextField
                id="filled"
                label="If yes, briefly describe your previous experirnce"
                sx={{width:'100%'}}
                multiline 
                rows={3}
                variant="filled"/>
        </Box>

        <Box sx={{ mt:5,textAlign: 'center'}}>
            <Button variant="contained" color='primary' size='large'>
                    Register Volunteer
            </Button>
        </Box>
      </Box>
    </div>
  )
}

export default VolReg
