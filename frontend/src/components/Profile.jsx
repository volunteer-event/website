import { Avatar, Box, Button, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper,
         Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import GitHubIcon from '@mui/icons-material/GitHub';
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const drawerWidth = 240;


const Profile = () => {

  const items = [
  { title: 'Account', icon: <AccountCircleIcon />, navigate: "/profile" },
  { title: 'My Events', icon: <EventNoteIcon />, navigate: "/MyEvents" },
  { title: 'Volunteered Events', icon: <GroupsIcon />, navigate: "/Volunteered-Events" },
  ];
  const navigate = useNavigate();

  return (
    <div style={{ paddingLeft: '16px', paddingTop: '16px', paddingBottom: '16px' }}>
      <Typography
        variant="h5"
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

      <Box sx={{ display: 'flex' }}>
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ bgcolor: 'primary.main' }} >
          <ListItemButton onClick={() => navigate('/')}></ListItemButton>
            <img
              src="https://img.lovepik.com/png/20231022/simple-design-vector-color-logo-business-mark-colorful-logo_305888_wh1200.png"
              alt="logo"
              height="40"
            />
          <ListItemButton/>
        </Toolbar >
        <Divider />
        <List>
          {items.map((item, index) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton onClick={() => navigate(item.navigate)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >

          <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper
                style={{
                  aspectRatio: '1 / 1',
                  height: '300px',
                  background: '#D5E8EF',
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
                  aspectRatio: '6/3',
                  display: 'flex',
                  background: '#F8F8F8',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
                }}
              >
                <Typography variant="body1" sx={{fontFamily: '"Fredoka One", cursive'}}>
                  <strong>ACCOUNT DETAILS</strong>
                </Typography>
                <Divider/>
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
                  aspectRatio: '7/4',
                  background: "#D5E8EF",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
              
                }}
              >
                <Typography sx={{ fontWeight: 'bold', fontFamily: '"Fredoka One", cursive'}}variant="body1">
                  ONLINE PROFILES
                </Typography>
                <Divider/>
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
            

          </Grid>
      </Grid>


      </Box>
    </Box>

    </div>
  )
}

export default Profile