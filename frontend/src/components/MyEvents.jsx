import { Box, Button, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, 
  Typography} from '@mui/material'
import React from 'react'

import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

import { Link, useNavigate } from 'react-router-dom'
 
 const MyEvents = () => {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const rows = [
        { name: 'John Doe', age: 28, email: 'john@example.com' },
        { name: 'Anna Smith', age: 22, email: 'anna@example.com' },
        { name: 'Bob Lee', age: 35, email: 'bob@example.com' },
      ];
    const items = [
        { title: 'Account', icon: <AccountCircleIcon />, navigate: "/profile" },
        { title: 'My Events', icon: <EventNoteIcon />, navigate: "/MyEvents" },
        { title: 'Volunteered Events', icon: <GroupsIcon />, navigate: "/Volunteered-Events" },
      ];
    const [openIndex, setOpenIndex] = React.useState(null);

   return (
     <div>
       
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
          <Box onClick={() => navigate('/')}>
            <img
              src="https://img.lovepik.com/png/20231022/simple-design-vector-color-logo-business-mark-colorful-logo_305888_wh1200.png"
              alt="logo"
              height="40"
            />
          </Box>
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
        
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>MY EVENTS</Typography>
                <TableContainer component={Paper} >
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>EventName</strong></TableCell>
                        <TableCell><strong>OrganisorName</strong></TableCell>
                        <TableCell><strong>StartDate</strong></TableCell>
                        <TableCell><strong>Updates</strong></TableCell>
                        <TableCell><strong>VolunteerList</strong></TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <React.Fragment key={index}>
                          <TableRow>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>
                              <Button variant="contained">Update</Button>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                endIcon={openIndex === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                              >
                                View
                              </Button>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell colSpan={3} style={{ paddingBottom: 0, paddingTop: 0 }}>
                              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                                <Box margin={1}>
                                  <Table size="small">
                                    List of Volunteers:
                                    <TableBody>
                                      <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell></TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>Annamana</TableCell>
                                        <TableCell>annamana@gmail.com</TableCell>
                                        <TableCell>
                                          <Button variant="contained" startIcon={<MailIcon/>}>
                                            Send Confirmation Mail
                                          </Button>
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                </Box>
                              </Collapse>
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>


        
      </Box>
  </Box>

     </div>
   )
 }
 
 export default MyEvents


