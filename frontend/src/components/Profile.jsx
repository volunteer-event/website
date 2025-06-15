import { Avatar, Box, Button, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Profile = () => {
  const rows = [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Anna Smith', age: 22, email: 'anna@example.com' },
    { name: 'Bob Lee', age: 35, email: 'bob@example.com' },
  ];

  return (
    <div style={{ paddingLeft: '32px', paddingTop: '16px', paddingBottom: '16px' }}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontFamily: '"Fredoka One", cursive',
          transition: 'transform 0.3s ease, color 0.3s ease',
          cursor: 'pointer',
          '&:hover': {
            color: '#64b5f6',
            transform: 'scale(1.015) rotate(0.5deg)',
            textShadow: '0.5px 0.5px 2px rgba(100, 181, 246, 0.5)', // light blue
          }
        }}
      >
        Hello John!!
      </Typography>
      <Grid container spacing={2} style={{ height: '100vh'}}>
          <Grid item xs={4}>
            <Paper
                style={{
                  aspectRatio: '1 / 1',
                  height: '300px',
                  background: 'lightblue',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0ZPaTrhUTirOwz7dEn4sxkCE-wZQsZljqg&s"
                  alt="user"
                  sx={{ width: 200, height: 200, mt: 2 }}
                />
                <Typography variant ="h6">John Doe</Typography>
                <Typography variant ="h7">example@gmail.com</Typography>


              </Paper>
          </Grid>

          <Grid item xs>
            <Paper
                style={{
                  height: '300px',
                  aspectRatio: '7/3',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.15rem',
                  }}
                >
                  <Box sx={{ fontWeight: 'bold' }}>Full Name</Box>
                  <Box>John Doe</Box>
                </Box>
                <Divider />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.15rem',
                  }}
                >
                  <Box sx={{ fontWeight: 'bold' }}>E-mail</Box>
                  <Box>example@gmail.com</Box>
                </Box>
                <Divider />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize:'1.15rem',
                  }}
                >
                  <Box sx={{ fontWeight: 'bold' }}>Phone Number</Box>
                  <Box>9112233662</Box>
                </Box>
                <Divider />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.15rem',
                  }}
                >
                  <Box sx={{ fontWeight: 'bold' }}>Password</Box>
                  <Box>xxxxxxxxxxx</Box>
                </Box>

                <Divider/>
                <Button variant="contained" size="medium" startIcon={<EditIcon />}>Edit</Button>
              </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
               style={{
                  height: '300px',
                  aspectRatio: '5/4',
                  background: "lightblue",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
              
                }}
              >
                <Typography variant="h5">Online Profiles</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.15rem',
                  }}
                >
                  <Box sx={{ display: 'flex'}}><LanguageIcon sx={{ mr: 1 }}/>Website</Box>
                  <Box>https://John_doey.com</Box>
                </Box>
                <Divider />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.15rem',
                  }}
                >
                  <Box sx={{ display: 'flex'}}><GitHubIcon sx={{ mr: 1 }}/>Github</Box>
                  <Box>John_doey</Box>
                </Box>
                <Divider />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.15rem',
                  }}
                >
                  <Box sx={{ display: 'flex'}}><LinkedInIcon sx={{ mr: 1 }}/>LinkedIn</Box>
                  <Box>www.linkedin.com/john-doey</Box>
                </Box>
                <Divider />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.15rem',
                  }}
                >
                  <Box sx={{ display: 'flex'}}><InstagramIcon sx={{ mr: 1 }}/>Instagram</Box>
                  <Box>@John_doey</Box>
                </Box>

              </Paper>

              
          </Grid>

          <Grid item xs>
            <Paper
                style={{
                  height: '300px',
                  
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
                }}
              >
                <Typography variant="h6">My Events</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>EventName</strong></TableCell>
                        <TableCell><strong>OrganisorName</strong></TableCell>
                        <TableCell><strong>StartDate</strong></TableCell>
                        <TableCell><strong>Update</strong></TableCell>
                        <TableCell><strong>VolunteerList</strong></TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.age}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <Button variant="contained">update</Button>
                          <Button variant="contained">view</Button>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>

          </Grid>


      </Grid>
    </div>
  )
}

export default Profile