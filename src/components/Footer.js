import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const FooterWrapper = styled('footer')(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginTop: 'auto',
  backgroundColor: theme.palette.grey[200],
}));

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Job Search Platform
          {' | '}
          <Link color="inherit" href="#">
            Privacy Policy
          </Link>
          {' | '}
          <Link color="inherit" href="#">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;