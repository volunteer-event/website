import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

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

        var[input,setInput] = useState({
            ContactInfo:"",
            EventName:"",
            OrganisorName:"",
            EventDescription:"",
            Category:"",
            Mode:"",
            HostingCity:"",
            StartDateTime:"",
            EndDateTime:"",
            Deadline:"",
            MaxVolunteer:"",
            MaxParticipant:"",
            VolunteerQualification:"",
            Poster:"",
            AdditionalInfo:""
        });

        const inputHandler = (e) => {
            setInput({...input,[e.target.name]:e.target.value});
            
        };

        const fileHandler = (e) => {
            setInput({ ...input, Poster: e.target.files[0] });
        };


        useEffect(() => {
            console.log(input);
        }, [input]);

        const regHandler = () => {
            console.log("button clicked");
            axios
            .post("http://localhost:3000/reg",input)
            .then((res) => {
                console.log("data added");
            })
            .catch((err) => {
                console.log(err)
            });
        }
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
                onChange={inputHandler}
                name='ContactInfo'
                value={input.ContactInfo}
                sx={{ flex: '1 1 30%' }}
                variant="filled"/>
           
            <TextField
                    required
                    id="filled-required"
                    label="Event Name"
                    onChange={inputHandler}
                    name='EventName'
                    value={input.EventName}
                    sx={{ flex: '1 1 30%' }}
                    variant="filled"/> 

            <TextField
                    required
                    id="filled-required"
                    label=" Organisor Name"
                    onChange={inputHandler}
                    name='OrganisorName'
                    value={input.OrganisorName}
                    sx={{ flex: '1 1 30%' }}
                    variant="filled"/>

            <TextField
                required
                id="filled-required"
                label="Event Description"
                placeholder="max 25 words"
                onChange={inputHandler}
                name='EventDescription'
                value={input.EventDescription}
                multiline variant="filled"
                sx={{ flex: '1 1 100%' }}/>
           

            <TextField
                required
                id="filled-required"
                select
                label="Category"
                onChange={inputHandler}
                name='Category'
                value={input.Category}
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
                onChange={inputHandler}
                name='Mode'
                value={input.Mode}
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
                    onChange={inputHandler}
                    name='HostingCity'
                    value={input.HostingCity}
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
                onChange={inputHandler}
                name='StartDateTime'
                value={input.StartDateTime}
                type="datetime-local"
                InputLabelProps={{
                shrink: true, 
                }}
                variant='filled'/>

            <TextField
                required
                id="filled-required"
                label="End Date & Time"
                onChange={inputHandler}
                name='EndDateTime'
                value={input.EndDateTime}
                type="datetime-local"
                InputLabelProps={{
                shrink: true, 
                }}
                variant='filled'/>

            <TextField
                required
                id="filled-required"
                label="Deadline for volunteer reg"
                onChange={inputHandler}
                name='Deadline'
                value={input.Deadline}
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
                        onChange={inputHandler}
                        name='MaxVolunteer'
                        value={input.MaxVolunteer}
                        sx={{width:'300px'}}
                        type="number"
                        variant='filled'/>

                <TextField
                        required
                        id="filled-required"
                        label="Max Number of participants"
                        onChange={inputHandler}
                        name='MaxParticipant'
                        value={input.MaxParticipant}
                        type="number"
                        sx={{width:'300px'}}
                        variant='filled'/>

                <TextField
                        required
                        id="filled-required"
                        label="Volunteer Qualifications"
                        onChange={inputHandler}
                        name='VolunteerQualification'
                        value={input.VolunteerQualification}
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
                        onChange={fileHandler}
                        name='Poster'
                        
                        sx={{width: '300px'}}
                        variant='filled'
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ accept: 'image/*' }} />

                <TextField
                        id="filled-textarea"
                        label="Aditional Information"
                        onChange={inputHandler}
                        name='AdditionalInfo'
                        value={input.AdditionalInfo}
                        sx={{width:'300px'}}
                        multiline variant="filled"/>

        </Box>
       
        <Box sx={{ mt:5,textAlign: 'center'}}>
            <Button variant="contained" color='primary' size='large' onClick={regHandler}>
                    Register Event
            </Button>
        </Box>
        </Box>
  
    </div>
  )
}

export default EventReg
