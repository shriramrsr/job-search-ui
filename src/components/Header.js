import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <StyledLink to="/">
            Job Search Platform
          </StyledLink>
        </Typography>
        <Button color="inherit" component={Link} to="/search">
          Search Jobs
        </Button>
        <Button color="inherit" component={Link} to="/resume-builder">
          Resume Builder
        </Button>
        <Button color="inherit" component={Link} to="/interview-prep">
          Interview Prep
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;