import React from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Container } from '@mui/material';
import { Avatar, Button, Tooltip, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const pages = ['Home', 'About Us', 'Services', 'Contact Us'];
const settings = ['Profile', 'Logout'];

const NavBar = () => {
    
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

    const routes = {
    Profile: '/profile',
    Logout: '/',
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            {/* LOGO / TITLE */}
            <Link
            to="/"
            style={{
                textDecoration: 'none',
                color: 'inherit',
            }}
            >
            <Box
                sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                mr: 2,
                }}
            >
            <img src="https://img.lovepik.com/png/20231022/simple-design-vector-color-logo-business-mark-colorful-logo_305888_wh1200.png"
                alt="logo" height="40" />
            </Box>
            </Link>

            <Box sx={{ flexGrow: 1, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button sx={{ color: 'white' }}>Home</Button>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <Button sx={{ color: 'white' }}>About Us</Button>
                </Link>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                    <Button sx={{ color: 'white' }}>Services</Button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <Button sx={{ color: 'white' }}>Contact Us</Button>
                </Link>
            </Box>

            {/* USER MENU */}
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt= "user" />
                </IconButton>
                </Tooltip>
                <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                
                {settings.map((setting) => (
                <MenuItem
                    key={setting}
                    onClick={() => {
                    handleCloseUserMenu();
                    navigate(routes[setting]);
                    }}
                >
                    <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                ))}

                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );

}

export default NavBar