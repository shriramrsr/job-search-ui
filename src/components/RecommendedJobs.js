import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  textAlign: 'center',
}));

const JobCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const JobCardContent = styled(CardContent)({
  flexGrow: 1,
});

const JobButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  marginTop: 'auto',
  padding: theme.spacing(1.5),
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function RecommendedJobs() {
  // Mock recommended jobs data
  const recommendedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Web Solutions Inc', location: 'Remote' },
    { id: 2, title: 'UX Designer', company: 'Creative Designs Co', location: 'New York, NY' },
    { id: 3, title: 'DevOps Engineer', company: 'Cloud Systems LLC', location: 'San Francisco, CA' },
  ];

  return (
    <div>
      <Title variant="h5">
        Recommended Jobs
      </Title>
      <Grid container spacing={4}>
        {recommendedJobs.map((job) => (
          <Grid item key={job.id} xs={12} sm={6} md={4}>
            <JobCard>
              <JobCardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.location}
                </Typography>
              </JobCardContent>
              <JobButton component={Link} to={`/job/${job.id}`} fullWidth>
                View Details
              </JobButton>
            </JobCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default RecommendedJobs;
