import React from 'react';
import Box from '@mui/material/Box';

import starWarsLogo from '../images/star-wars-logo.png';

const Header = () => (
  <header>
    <Box
      sx={ {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      } }
    >
      <img
        width="200px"
        src={ starWarsLogo }
        alt="Star Wars Logo"
      />
      <h1>Star Wars Planets Search</h1>
    </Box>
  </header>
);

export default Header;
