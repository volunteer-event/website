import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          company_name © 2025 | All rights reserved
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" href="http://localhost:5173/">
            theurl.com
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;