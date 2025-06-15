import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';


const rolesList = [
  'Registration',
  'Event Setup',
  'Tech Support',
  'Social Media & Content',
  'Photography/videography',
  'Management',
  'Outreach & Marketing',
  'Design'
];


const VolReg = () => {

  const navigate = useNavigate();
  const { eventId } = useParams();

const [formData, setFormData] = useState({
    FullName: '', Email: '', PhoneNumber: '',
    Age: '', EducationQualification: '', Cause: '',
    Roles: [], AptForRole: '', Skills: '',
    PriorExperience: false, BriefExperience: ''
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleRolesChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newRoles = checked
        ? [...prev.Roles, value]
        : prev.Roles.filter(role => role !== value);
      return { ...prev, Roles: newRoles };
    });
  };

const handlePriorExperienceChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      PriorExperience: value === 'Yes'
    }));
  };


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = { ...formData };
      const response = await axios.post(`http://localhost:3000/api/events/${eventId}`, dataToSend);
      alert('Volunteer registered successfully!');
      navigate('/events');
    } catch (error) {
      console.error('Error registering volunteer:', error.response?.data|| error.message );
      alert('Failed to register volunteer');
    }
  };







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
        onSubmit={handleSubmit}
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
                name="FullName"
                sx={{ flex: '1 1 30%' }}
                variant="filled"
                value={formData.FullName}
                onChange={handleChange}/>

            <TextField
                required
                label="Email"
                name="Email"
                sx={{ flex: '1 1 30%' }}
                variant="filled"
                value={formData.Email}
                onChange={handleChange}/>

            <TextField
                required
                label="Phone Number"
                name="PhoneNumber"
                type="tel"
                sx={{ flex: '1 1 30%' }}
                variant="filled"
                value={formData.PhoneNumber}
                onChange={handleChange}/>

            <TextField
                required
                label="Age"
                name="Age"
                type="String"
                sx={{ flex: '1 1 30%' }}
                variant="filled"
                value={formData.Age}
                onChange={handleChange}/>

            <TextField
                required
                label="Educational Qualification"
                name="EducationQualification"
                sx={{ flex: '1 1 30%' }}
                variant="filled"
                value={formData.EducationQualification}
                onChange={handleChange}/>

            <TextField
               required
              label="Why do you want to volunteer for this event?"
              name="Cause"
              sx={{ flex: '1 1 100%' }}
              multiline
              rows={3}
              variant="filled"
              value={formData.Cause}
              onChange={handleChange} />

            <Typography
              variant='h6' 
              sx={{ mt: 4, width: '100%', fontWeight: 500 }}
              align="left">
                Which volunteer roles are you interested in? 
            </Typography>
                <FormGroup sx={{ display: 'flex',flexWrap: 'wrap' , gap:2, mb:2 }}>
                 {rolesList.map((role) => (
                    <FormControlLabel 
                      key={role} 
                      control={<Checkbox 
                       value={role}
                       checked={formData.Roles.includes(role)}
                       onChange={handleRolesChange}
                      />} 
                      label={role} />
                  ))}
                </FormGroup> 

            <TextField
                required
                label="Why do you think you are a good fit for the role(s) you selected?"
                name="AptForRole"
                sx={{width:'100%'}}
                multiline 
                rows={3}
                variant="filled"
                value={formData.AptForRole}
                onChange={handleChange}/>

            <TextField
                required
                label="What skills/volunteering experience do you possess that would contribute to the success of the event?"
                name= "Skills"
                sx={{width:'100%'}}
                multiline 
                rows={3}
                variant="filled"
                value={formData.Skills}
                onChange={handleChange}/>
              
            <FormControl sx={{ mt: 3, mb: 2 }}>
              <FormLabel>Do you have prior volunteering or event experience?</FormLabel>
              <RadioGroup row value={formData.PriorExperience? 'Yes':'No'} onChange={handlePriorExperienceChange}>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <TextField
               variant="filled"
                label="If yes, briefly describe your previous experirnce"
                name="BriefExperience"
                sx={{width:'100%', mb: 2 }}
                multiline 
                rows={3}
                value={formData.BriefExperience}
                onChange={handleChange}
                />

        <Box sx={{ mt:5,textAlign: 'center'}}>
            <Button type="submit" variant="contained" color='primary' size='large'>
                    Register Volunteer
            </Button>
        </Box>

        </Box>
      </Box>
    </div>
  )
}

export default VolReg
