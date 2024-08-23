import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const ListingPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const ApplyButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function JobListing() {
  const { id } = useParams();

  // Mock job data (in a real app, you'd fetch this from an API)
  const job = {
    id,
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    description: 'We are seeking a talented Software Engineer to join our team...',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Proficiency in React and Node.js',
    ],
  };

  return (
    <Container sx={{ py: 4 }}>
      <ListingPaper>
        <Typography variant="h4" gutterBottom>
          {job.title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {job.company} - {job.location}
        </Typography>
        <Typography variant="body1" paragraph>
          {job.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Requirements:
        </Typography>
        <ul>
          {job.requirements.map((req, index) => (
            <li key={index}>
              <Typography variant="body1">{req}</Typography>
            </li>
          ))}
        </ul>
        <ApplyButton variant="contained" color="primary">
          Apply Now
        </ApplyButton>
      </ListingPaper>
    </Container>
  );
}

export default JobListing;