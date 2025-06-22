import {
  Box, Button, Collapse, Divider, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Toolbar, Typography
} from '@mui/material';

import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MailIcon from '@mui/icons-material/Mail';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const MyEvents = () => {
  const [rows, setRows] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:3000/myevents/${user.email}`)
        .then((res) => setRows(res.data))
        .catch((err) => console.error("Error fetching events created by user", err));
    }
  }, [user?.email]);

  const items = [
    { title: 'Account', icon: <AccountCircleIcon />, navigate: "/profile" },
    { title: 'My Events', icon: <EventNoteIcon />, navigate: "/MyEvents" },
    { title: 'Volunteered Events', icon: <GroupsIcon />, navigate: "/Volunteered-Events" },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Drawer Sidebar */}
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
        <Toolbar sx={{ bgcolor: 'primary.main' }}>
          <Box onClick={() => navigate('/')}>
            <img
              src="https://img.lovepik.com/png/20231022/simple-design-vector-color-logo-business-mark-colorful-logo_305888_wh1200.png"
              alt="logo"
              height="40"
            />
          </Box>
        </Toolbar>
        <Divider />
        <List>
          {items.map((item) => (
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

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>MY EVENTS</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Event Name</strong></TableCell>
                <TableCell><strong>Organiser</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Updates</strong></TableCell>
                <TableCell><strong>Volunteer List</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <React.Fragment key={row._id}>
                  <TableRow>
                    <TableCell>{row.EventName}</TableCell>
                    <TableCell>{row.OrganisorName}</TableCell>
                    <TableCell>{row.Date}</TableCell>
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
                    <TableCell colSpan={5} style={{ paddingBottom: 0, paddingTop: 0 }}>
                      <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                          <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            List of Volunteers
                          </Typography>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell><strong>Name</strong></TableCell>
                                <TableCell><strong>Email</strong></TableCell>
                                <TableCell><strong>Action</strong></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {row.volunteers && row.volunteers.length > 0 ? (
                                row.volunteers.map((volunteer, i) => (
                                  <TableRow key={i}>
                                    <TableCell>{volunteer.FullName}</TableCell>
                                    <TableCell>{volunteer.Email}</TableCell>
                                    <TableCell>
                                      <Button variant="contained" startIcon={<MailIcon />}>
                                        Send Mail
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))
                              ) : (
                                <TableRow>
                                  <TableCell colSpan={3}>
                                    No volunteers registered.
                                  </TableCell>
                                </TableRow>
                              )}
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
  );
};

export default MyEvents;
