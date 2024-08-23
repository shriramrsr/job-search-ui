import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import RecommendedJobs from '../components/RecommendedJobs';

const HeroContent = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0, 6),
  color: 'white', // Darker text color
  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px', // Set a fixed height for the hero content
  overflow: 'hidden', // Hide overflow if the image goes outside
}));

const BackgroundImage = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url('/office.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(8px)', // Apply blur effect
  zIndex: -1, // Place it behind other content
});

const HeroButtons = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const DarkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[800], // Darker button background
  '&:hover': {
    backgroundColor: theme.palette.grey[900], // Even darker on hover
  },
}));

const RecommendedJobsContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
}));

function Home() {
  return (
    <>
      <HeroContent>
        <BackgroundImage />
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Find Your Dream Job
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Connect with top employers, build your resume, and prepare for interviews all in one place.
          </Typography>
          <HeroButtons>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <DarkButton variant="contained" component={Link} to="/search">
                  Search Jobs
                </DarkButton>
              </Grid>
              <Grid item>
                <DarkButton variant="outlined" component={Link} to="/resume-builder">
                  Build Your Resume
                </DarkButton>
              </Grid>
            </Grid>
          </HeroButtons>
        </Container>
      </HeroContent>
      <RecommendedJobsContainer>
        <Container>
          <RecommendedJobs />
        </Container>
      </RecommendedJobsContainer>
    </>
  );
}

export default Home;
